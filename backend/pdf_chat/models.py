from django.db import models

class PDFFile(models.Model):
    # title = models.CharField(max_length=255)
    file = models.FileField(upload_to='pdf_files/')
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title