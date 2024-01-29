from django.urls import path
from .views import pdf_upload_view
from .views import get_pdf_view

urlpatterns = [
    # path('upload-pdf/', PDFUploadView.as_view(), name='pdf-upload'),
    path('upload-pdf/', pdf_upload_view, name='pdf-upload'),
    path('get-pdf/', get_pdf_view, name='pdf-get'),
]
