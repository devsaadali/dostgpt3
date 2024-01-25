from django.shortcuts import redirect
from django.conf import settings

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response

from django.contrib.auth import get_user_model
User = get_user_model()


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def create_checkout_session(request):
    try:
        subscription_type = request.data["subscription_type"]

        if subscription_type == "monthly":
            # create monthly price checkout
            pass 
        else:
            pass 
            # create yearly price checkout

        # return checkout url  
        # return Response({"status": 1, "response": checkout_session["url"]})
    
    except Exception as e:
        return Response({"error": str(e)})

