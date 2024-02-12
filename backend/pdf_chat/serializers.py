from rest_framework import serializers
from .models import Chat

class ChatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chat
        fields = '__all__'





class PdfFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chat
        fields = ['pdf_file']
