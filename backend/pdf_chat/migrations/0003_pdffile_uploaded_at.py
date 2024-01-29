# Generated by Django 4.2.6 on 2024-01-27 20:49

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('pdf_chat', '0002_remove_pdffile_title_remove_pdffile_uploaded_at'),
    ]

    operations = [
        migrations.AddField(
            model_name='pdffile',
            name='uploaded_at',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
