from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from .models import Chat
from .serializers import ChatSerializer, PdfFileSerializer
from django.http import FileResponse 
from django.http import HttpResponse
# from .openai_utils import generate_openai_response  # Import the OpenAI function
from .langchain import langchain_openai



@api_view(['POST'])
@permission_classes([AllowAny])
def pdf_upload_view(request):
    if request.method == 'POST':
        pdf_file_serializer = ChatSerializer(data=request.data)

        if pdf_file_serializer.is_valid():
            pdf_file_serializer.save()
            return Response({'chat_data': pdf_file_serializer.data}, status=status.HTTP_201_CREATED)

        return Response(pdf_file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET'])
@permission_classes([AllowAny])
def get_pdf_view(request, pdfId):
    try:
        chat = Chat.objects.get(id=pdfId)
    except Chat.DoesNotExist:
        return Response({'error': 'Chat not found'}, status=status.HTTP_404_NOT_FOUND)
    
    response = FileResponse(chat.pdf_file, content_type='application/pdf')
    # response['Content-Disposition'] = f'inline; filename="{chat.filename}"'

    return response



@api_view(['POST'])
@permission_classes([AllowAny])
def send_message_view(request):
    if request.method == 'POST':
        try:
            question = request.data.get('question')
            chatId = request.data.get('chatId')
            chat = Chat.objects.get(id=chatId)
        except Chat.DoesNotExist:
            return Response({'error': 'Chat not found'}, status=status.HTTP_404_NOT_FOUND)

        response = langchain_openai(chat.pdf_file, question)
        
        question_text = response.get('question')
        answer_text = response.get('answer')

        chat_history = chat.chat_history
        chat_history.append(question_text)
        chat_history.append(answer_text)

        chat.chat_history = chat_history
        chat.save()

        return Response(chat.chat_history, status=status.HTTP_200_OK)




@api_view(['GET'])
@permission_classes([AllowAny])
def get_chat_history_view(request):
    if request.method == 'GET':
        try:
            chatId = request.query_params.get('chatId')
            chat = Chat.objects.get(id=chatId)
        except Chat.DoesNotExist:
            return Response({'error': 'Chat not found'}, status=status.HTTP_404_NOT_FOUND)

        response = chat.chat_history
        return Response(response)