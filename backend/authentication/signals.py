
from django.dispatch import receiver
from django.db.models.signals import post_save
from django.conf import settings

from subscription.models import Subscription
from django.contrib.auth import get_user_model
User = get_user_model()

@receiver(post_save, sender=User)
def create_user_dependencies(sender, instance, created, **kwargs):
    if created:
        # Creating a user instance in stripe database
        Subscription.objects.create(user=instance)
        instance.save()
