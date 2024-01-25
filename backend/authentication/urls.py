from django.urls import path
from .views import auth_views as auth_views
from .views import user_specific_views as user_specific_views

urlpatterns = [
    path(
        "check-if-username-is-available/",
        user_specific_views.check_if_username_is_available,
    ),
    path("register/", auth_views.register, name="Register"),
    path(
        "confirm-user-email/", auth_views.confirm_user_email, name="confirm_user_email"
    ),
    path("activate/<path:uidb64>/<path:token>/", auth_views.activate, name="activate"),
    path(
        "reset-password/",
        auth_views.RequestPasswordResetEmail.as_view(),
        name="reset-password",
    ),
    path(
        "password-reset/<path:uidb64>/<path:token>/",
        auth_views.PasswordTokenCheckAPI.as_view(),
        name="password-reset-confirm",
    ),
    path(
        "password-reset-complete",
        auth_views.SetNewPasswordAPIView.as_view(),
        name="password-reset-complete",
    ),
    path("get-user-data/", user_specific_views.get_user_data, name="get_user_data"),
    path(
        "delete-user-data/",
        user_specific_views.delete_user_data,
        name="delete_user_data",
    ),
    path(
        "update-user-settings/",
        user_specific_views.update_user_settings,
        name="update_user_settings",
    ),
    path(
        "update-user-profile-data/",
        user_specific_views.update_user_profile_data,
        name="update_user_profile_data",
    ),
    
]
