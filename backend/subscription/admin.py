from django.contrib import admin
from .models import Subscription
from pdf_chat.models import Chat
# Importing Chat model to register with admin panel

admin.site.register(Subscription)
admin.site.register(Chat)
