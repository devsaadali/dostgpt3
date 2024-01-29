from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from .models import PDFFile
from .serializers import PDFFileSerializer
# from .openai_utils import generate_openai_response  # Import the OpenAI function

@api_view(['POST'])
@permission_classes([AllowAny])
def pdf_upload_view(request):
    if request.method == 'POST':
        file_serializer = PDFFileSerializer(data=request.data)

        if file_serializer.is_valid():
            file_serializer.save()
            return Response({'pdf_data': file_serializer.data}, status=status.HTTP_201_CREATED)

        return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        #     # Extract PDF content and user question from the request or form data
        #     pdf_content = file_serializer.data.get('file')  # Assuming 'file' is the field name for PDF content
        #     user_question = request.data.get('user_question')

        #     # Get your OpenAI API key from your Django settings or secure storage
        #     openai_api_key = "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"

        #     # Call the OpenAI function to get the generated answer
        #     # answer = generate_openai_response(openai_api_key, pdf_content, user_question)

        #     # Include the OpenAI-generated answer in the response
        #     return Response({'pdf_data': file_serializer.data, 'openai_answer': answer}, status=status.HTTP_201_CREATED)

        # return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        # return Response('REACHED TO THE VIEW...')

@api_view(['GET'])
@permission_classes([AllowAny])
# def get_pdf_view(request, pk):
def get_pdf_view(request):
    try:
        # pdf_file = PDFFile.objects.get(pk=pk)
        # pdf_file = PDFFile.objects.get([-1])       // This does not work
        # pdf_file = PDFFile.objects.latest('uploaded_at')
        pdf_file = PDFFile.objects.all()
    except PDFFile.DoesNotExist:
        return Response({'error': 'PDF file not found'}, status=status.HTTP_404_NOT_FOUND)

    serializer = PDFFileSerializer(pdf_file, many=True)
    return Response(serializer.data)