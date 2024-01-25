from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model

User = get_user_model()


class SignUpForm(UserCreationForm):
    username = forms.CharField(max_length=255, help_text="Username must be unique.")
    email = forms.EmailField(
        max_length=254, help_text="Required. Inform a valid email address."
    )

    class Meta:
        model = User
        fields = (
            "username",
            "email",
            "password1",
            "password2",
        )
