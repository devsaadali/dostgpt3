
from django.dispatch import receiver
from django.db.models.signals import post_save

from .models import Subscription
from django.contrib.auth import get_user_model
User = get_user_model()

@receiver(post_save, sender=User)
def create_user_subscription(sender, instance, created, **kwargs):
    if created:
        Subscription.objects.create(user=instance)
