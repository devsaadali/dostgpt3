from django.shortcuts import render, redirect, reverse
from rest_framework import generics, status, views
from ..serializers import ResetPasswordEmailRequestSerializer, SetNewPasswordSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from django.contrib.sites.shortcuts import get_current_site
from django.utils.encoding import force_str, force_bytes, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.template.loader import render_to_string
from ..forms import SignUpForm
from ..tokens import account_activation_token
from django.core.mail import send_mail
from django.conf import settings
from oauth2_provider.models import AccessToken
import os
import uuid
import json
from datetime import datetime, timedelta
from django.db.models import Sum

from django.contrib.auth import get_user_model

User = get_user_model()


@api_view(["POST"])
@permission_classes([AllowAny])
def register(request):
    form = SignUpForm(request.data)
    if form.is_valid():
        user = form.save(commit=False)
        user.is_active = True
        user.is_company_owner = True
        user.save()
        # current_site = get_current_site(request)
        # subject = "Activate your CMS account!"
        # message = render_to_string(
        #     "account_activation_email.html",
        #     {
        #         "user": user,
        #         "protocol": "https",
        #         "domain": get_current_site(request=request).domain,
        #         "uid": urlsafe_base64_encode(force_bytes(user.pk)),
        #         "token": account_activation_token.make_token(user),
        #     },
        # )

        # try:
        #     send_mail(
        #         subject,
        #         message,
        #         settings.DEFAULT_FROM_EMAIL,
        #         [user.email],
        #         fail_silently=False,
        #     )
        # except Exception as e:
        #     user.delete()
        #     return Response(
        #         (
        #             {
        #                 "status": 0,
        #                 "response": {
        #                     "email": [
        #                         f"Account deleted, we can't get to your email address: {str(e)}"
        #                     ]
        #                 },
        #             }
        #         )
        #     )

        # creating user access token so it can login
        user_token = AccessToken.objects.create(
            user=user, token=str(uuid.uuid4()), expires=datetime.now() + timedelta(1)
        )
        return Response(
            {
                "status": 1,
                "response": user_token.token,
            }
        )

    else:
        return Response(({"status": 0, "response": form.errors}))


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def confirm_user_email(request):
    current_site = get_current_site(request=request).domain
    subject = "Activate your cms.net account!"
    message = render_to_string(
        "account_activation_email.html",
        {
            "user": request.user,
            "protocol": "https",
            "domain": current_site,
            "uid": urlsafe_base64_encode(force_bytes(request.user.pk)),
            "token": account_activation_token.make_token(request.user),
        },
    )

    send_mail(
        subject,
        message,
        settings.DEFAULT_FROM_EMAIL,
        [request.user.email],
        fail_silently=False,
    )

    return Response(
        {
            "status": 1,
            "response": "Sent",
        }
    )


@api_view(["GET"])
@permission_classes([AllowAny])
def activate(request, uidb64, token):
    try:
        uid = force_str(urlsafe_base64_decode(uidb64))
        user = User.objects.get(pk=uid)
    except (TypeError, ValueError, OverflowError, User.DoesNotExist):
        user = None

    if user is not None and account_activation_token.check_token(user, token):
        user.profile.email_confirmed = True
        user.save()
        user_token = AccessToken.objects.create(
            user=user, token=str(uuid.uuid4()), expires=datetime.now() + timedelta(1)
        )
        return Response(
            {
                "status": 1,
                "response": user_token.token,
            }
        )
    else:
        return Response({"status": 0, "response": "user activation key is expired."})


class RequestPasswordResetEmail(generics.GenericAPIView):
    serializer_class = ResetPasswordEmailRequestSerializer
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = self.serializer_class(data=request.data)

        email = request.data.get("email", "")

        if User.objects.filter(email=email).exists():
            user = User.objects.get(email=email)
            uidb64 = urlsafe_base64_encode(force_bytes(user.id))
            token = account_activation_token.make_token(user)
            current_site = get_current_site(request=request).domain
            relativeLink = reverse(
                "password-reset-confirm", kwargs={"uidb64": uidb64, "token": token}
            )

            redirect_url = request.data.get("redirect_url", "")
            absurl = "http://" + current_site + relativeLink
            email_body = (
                "Hello, \n Use link below to reset your password  \n"
                + absurl
                + "?redirect_url="
                + redirect_url
            )
            data = {
                "email_body": email_body,
                "to_email": user.email,
                "email_subject": "Reset your password",
            }
            send_mail(
                "Password reset - cms.net",
                email_body,
                settings.DEFAULT_FROM_EMAIL,
                [user.email],
                fail_silently=False,
            )

            return Response(
                {
                    "status": 1,
                    "response": "We have sent you a link to reset your password",
                }
            )
        else:
            return Response(
                {
                    "status": 0,
                    "response": "Can't find a user registered with this email on cms.net.",
                }
            )


class PasswordTokenCheckAPI(generics.GenericAPIView):
    serializer_class = SetNewPasswordSerializer
    permission_classes = [AllowAny]

    def get(self, request, uidb64, token):

        redirect_url = request.GET.get("redirect_url")

        try:
            id = force_str(urlsafe_base64_decode(uidb64))
            user = User.objects.get(id=id)

            if not account_activation_token.check_token(user, token):
                if len(redirect_url) > 3:
                    return redirect(redirect_url + "?token_valid=False")
                else:
                    return redirect(
                        os.environ.get("FRONTEND_URL", "") + "?token_valid=False"
                    )

            if redirect_url and len(redirect_url) > 3:
                return redirect(
                    redirect_url
                    + "?token_valid=True&message=Credentials Valid&uidb64="
                    + uidb64
                    + "&token="
                    + token
                )
            else:
                return redirect(
                    os.environ.get("FRONTEND_URL", "") + "?token_valid=False"
                )

        except DjangoUnicodeDecodeError as identifier:
            try:
                if not account_activation_token.check_token(user, token):
                    return redirect(redirect_url + "?token_valid=False")

            except UnboundLocalError as e:
                return Response(
                    {"response": "Token is not valid, please request a new one"},
                    status=status.HTTP_400_BAD_REQUEST,
                )


class SetNewPasswordAPIView(generics.GenericAPIView):
    serializer_class = SetNewPasswordSerializer
    permission_classes = [AllowAny]

    def patch(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response({"status": 1, "response": "Password has been reset."})
