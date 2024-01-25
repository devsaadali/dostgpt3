from django.urls import path
from subscription import views

app_name="subscription"

urlpatterns = [
    path("create-checkout-session/", views.create_checkout_session),
]
