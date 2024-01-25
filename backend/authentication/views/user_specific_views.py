from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render, redirect, reverse
import django.views.decorators.csrf
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
from django.utils import timezone
from django.db.models import Sum
import time
from django.conf import settings

from django.contrib.auth import get_user_model

User = get_user_model()


def convert_string_bool_to_boolean(value):
    if value.lower() == "true":
        return True
    else:
        return False


@api_view(["GET"])
@permission_classes([AllowAny])
def check_if_username_is_available(request):
    username = request.GET.get("username").lower().strip()
    return Response(True)

@api_view(["POST"])
@permission_classes([IsAuthenticated])
@csrf_exempt
def get_user_data(request):
    try:
        token = AccessToken.objects.get(token=request.data["access_token"])
        try:
            user = token.user

            if token.is_expired():
                return Response(
                    {
                        "status": 0,
                        "response": "Your session has been expired. Try to login again.",
                    }
                )
            
            response = {
                #  Basic info
                "username": user.username,
                "is_superuser": user.is_superuser,
                "email": user.email,
                "id": user.id,
                # Payment details
            }
            return Response({"status": 1, "response": response})
        except Exception as e:
            print(e)
            return Response({"status": 0, "response": f"Didn't found the account, {e}"})
    except Exception as e:
        print("NOTexpired", e)
        return Response(
            {
                "status": 0,
                "response": "Cannot get user details, try to logout and login again.",
            }
        )


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def delete_user_data(request):
    try:
        token = AccessToken.objects.get(token=request.data["access_token"])
        user = token.user

        if token.is_expired():
            return Response(
                {
                    "status": 0,
                    "response": "Your session has been expired. Try to login again.",
                }
            )

        try:
            user.delete()
            return Response({"status": 1, "response": "User deleted"})
        except Exception as e:
            return Response(
                {
                    "status": 0,
                    "response": f"Some error occurred, cannot deleted the user - {e}",
                }
            )
    except Exception as e:
        print("Error while deleting user", e)
        return Response(
            {
                "status": 0,
                "response": "Cannot get user details, try to logout and login again.",
            }
        )


@api_view(["post"])
@permission_classes([IsAuthenticated])
def update_user_settings(request):
    try:
        username = request.data.get("username")
        if request.user.username != username:
            is_username_valid = check_username(username)
            if is_username_valid != 0:
                error_message = (
                    "Username is already taken"
                    if (is_username_valid == 1)
                    else "Username not allowed"
                )
                return Response(
                    {
                        "status": 0,
                        "response": f"[ERROR], {error_message}",
                    }
                )

        request.user.username = username
        request.user.save()
        return Response(
            {
                "status": 1,
                "response": "Settings updated",
            }
        )
    except Exception as e:
        return Response(
            {
                "status": 0,
                "response": f"[ERROR], {str(e)}",
            }
        )


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def update_user_profile_data(request):
    try:
        try:
            profile_picture = request.POST["profile_picture"]
        except:
            profile_picture = request.FILES.get("profile_picture")

        if profile_picture != "same":
            request.user.profile.profile_picture = profile_picture

        request.user.profile.save()

        return Response(
            {
                "status": 1,
                "response": "Done",
            }
        )
    except Exception as e:
        print("Error while trying to update user profile data", e)
        return Response(
            {
                "status": 0,
                "response": str(e),
            }
        )
