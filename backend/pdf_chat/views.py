from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import PDFFile
from .serializers import PDFFileSerializer
# from .openai_utils import generate_openai_response  # Import the OpenAI function

@api_view(['POST'])
def pdf_upload_view(request):
    if request.method == 'POST':
        file_serializer = PDFFileSerializer(data=request.data)

        if file_serializer.is_valid():
            file_serializer.save()

            # Extract PDF content and user question from the request or form data
            pdf_content = file_serializer.data.get('file')  # Assuming 'file' is the field name for PDF content
            user_question = request.data.get('user_question')

            # Get your OpenAI API key from your Django settings or secure storage
            openai_api_key = "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"

            # Call the OpenAI function to get the generated answer
            # answer = generate_openai_response(openai_api_key, pdf_content, user_question)

            # Include the OpenAI-generated answer in the response
            return Response({'pdf_data': file_serializer.data, 'openai_answer': answer}, status=status.HTTP_201_CREATED)

        return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)






# from django.shortcuts import render
# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework import status
# from .models import PDFFile
# from .serializers import PDFFileSerializer
# from .openai_utils import generate_openai_response  # Import the OpenAI function

# class PDFUploadView(APIView):
#     def post(self, request, *args, **kwargs):
#         file_serializer = PDFFileSerializer(data=request.data)

#         if file_serializer.is_valid():
#             file_serializer.save()

#             # Extract PDF content and user question from the request or form data
#             pdf_content = file_serializer.data.get('file')  # Assuming 'file' is the field name for PDF content
#             user_question = request.data.get('user_question')

#             # Get your OpenAI API key from your Django settings or secure storage
#             openai_api_key = "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"

#             # Call the OpenAI function to get the generated answer
#             answer = generate_openai_response(openai_api_key, pdf_content, user_question)

#             # Include the OpenAI-generated answer in the response
#             return Response({'pdf_data': file_serializer.data, 'openai_answer': answer}, status=status.HTTP_201_CREATED)

#         return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
