from django.urls import path
from .views import pdf_upload_view
from .views import get_pdf_view, send_message_view, get_chat_history_view

urlpatterns = [
    # path('upload-pdf/', PDFUploadView.as_view(), name='pdf-upload'),
    path('upload-pdf/', pdf_upload_view, name='pdf-upload'),
    # path('get-pdf/', get_pdf_view, name='pdf-get'),
    path('get-pdf/<int:pdfId>/', get_pdf_view, name='get_pdf'),
    # path('send-message/<int:pdfId>/', send_message_view, name='send-message-view'),
    path('send-message/', send_message_view, name='send-message-view'),

    path('get-chat-history/', get_chat_history_view, name='get_chat_history_view'),
]
