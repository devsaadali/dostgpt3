from django.db import models

from django.contrib.auth.models import (
    AbstractBaseUser,
    PermissionsMixin,
    BaseUserManager,
)


class UserAccountManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("User must have an email address")

        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)

        user.set_password(password)
        user.save()

        return user

    def create_superuser(self, email, password, **extra_fields):
        user = self.create_user(email, password, **extra_fields)

        user.is_active = True
        user.is_superuser = True
        user.is_staff = True
        user.save()

        return user


class UserAccount(AbstractBaseUser, PermissionsMixin):
    # Main details
    username = models.CharField(max_length=100, unique=True, null=True, blank=True)
    email = models.EmailField(max_length=255, unique=True)

    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    

    # # Payment specific info
    # stripe_customer_id = models.CharField(max_length=255, default=False)
    # stripe_account_id = models.CharField(max_length=255, default=False)

    # Inheritance
    objects = UserAccountManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    def __str__(self):
        return f"{self.username}"

    def get_full_name(self):
        return f"{self.username}"

    def get_short_name(self):
        return f"{self.username}"

    def __str__(self):
        return f"{self.username}"
