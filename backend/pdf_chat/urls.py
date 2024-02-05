from django.urls import path
from .views import pdf_upload_view
from .views import get_pdf_view, chat_view

urlpatterns = [
    # path('upload-pdf/', PDFUploadView.as_view(), name='pdf-upload'),
    path('upload-pdf/', pdf_upload_view, name='pdf-upload'),
    # path('get-pdf/', get_pdf_view, name='pdf-get'),
    path('get-pdf/<int:pdfId>/', get_pdf_view, name='get_pdf'),
    path('send-message/<int:pdfId>/', chat_view, name='chat_view'),
    # path('send-message/', chat_view, name='chat_view'),
]
