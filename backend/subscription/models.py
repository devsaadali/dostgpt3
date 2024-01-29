from django.db import models

from django.contrib.auth import get_user_model
User = get_user_model()

# change this model to store user subscription details for the month  
class Subscription(models.Model):
    user = models.OneToOneField(User, related_name="subscription", on_delete=models.CASCADE, null=True, blank=True)
    # subscription_id = models.CharField(max_length=100, null=True, blank=True)
    # subscription_started = models.DateTimeField(null=True, blank=True)
    # subscription_type = models.CharField(max_length=50, null=True, blank=True)
    
    def __str__(self):
        return f"{self.user} " # This is used to display the object in the admin panel

    class Meta:
        verbose_name = "Subscription"
        verbose_name_plural = "Subscriptions"

    