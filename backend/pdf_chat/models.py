from django.db import models

class Chat(models.Model):
    id = models.AutoField(primary_key=True)
    pdf_file = models.FileField(upload_to='pdf_files/')
    chat_title = models.CharField(max_length=100, blank=True)
    chat_history = models.JSONField(default=list, blank=True)

    def save(self, *args, **kwargs):
        # Check if chat_title is empty and set it to the name of the PDF file
        if not self.chat_title:
            self.chat_title = self.pdf_file.name  # Assign the name of the PDF file
            
        # Call the original save method to save the instance
        super().save(*args, **kwargs)

    def __str__(self):
        return f"Chat: {self.pk}"




# class Chat(models.Model):
#     pdf_file = models.FileField(upload_to='pdf_files/')
#     chat_title = models.CharField(max_length=100, blank=True)
#     chat_history = models.JSONField(default=list, blank=True)

#     def save(self, *args, **kwargs):
#         # Call the original save method to save the instance first
#         super().save(*args, **kwargs)
        
#         # Check if chat_title is empty and set it to default value
#         if not self.chat_title:
#             self.chat_title = f"Project {self.pk}"  # Use self.pk instead of self.id
            
#         # Call save method again to save the updated instance
#         super().save(*args, **kwargs)

#     def __str__(self):
#         return f"Chat: {self.pk}"





# class PDFFile(models.Model):
#     file = models.FileField(upload_to='pdf_files/')

#     def __str__(self):
#         return self.file
    



# class ChatHistory(models.Model):
#     pdf_file = models.ForeignKey(PDFFile, on_delete=models.CASCADE)
#     history = models.JSONField()

#     def __str__(self):
#         return self.pdf_file