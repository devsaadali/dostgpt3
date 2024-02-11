from django.db import models

class PDFFile(models.Model):
    file = models.FileField(upload_to='pdf_files/')

    def __str__(self):
        return self.file
    



class ChatHistory(models.Model):
    pdf_file = models.ForeignKey(PDFFile, on_delete=models.CASCADE)
    history = models.JSONField()

    def __str__(self):
        return self.pdf_file