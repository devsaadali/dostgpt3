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
        chat_serializer = ChatSerializer(data=request.data)

        if chat_serializer.is_valid():
            chat_serializer.save()
            return Response({'pdf_data': chat_serializer.data}, status=status.HTTP_201_CREATED)

        return Response(chat_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Chat

@api_view(['POST'])
@permission_classes([AllowAny])
def chat_view(request):
    if request.method == 'POST':
        try:
            question = request.data.get('question')
            chatId = request.data.get('chatId')
            chat = Chat.objects.get(id=chatId)
        except Chat.DoesNotExist:
            return Response({'error': 'Chat not found'}, status=status.HTTP_404_NOT_FOUND)
        
        response = langchain_openai(chat.pdf_file, question)
        
        # Extract question and answer from the response
        question_text = response.get('question')
        answer_text = response.get('answer')

        # print(f"QUESTION_TEXT: {question_text}")
        # print(f"ANSWER_TEXT: {answer_text}")

        # Append question and answer to chat_history
        chat_history = chat.chat_history
        chat_history.append(question_text)
        chat_history.append(answer_text)
        # print(f"CHAT_HISTORY LIST BEFORE SAVING: {chat_history}")
        chat.chat_history = chat_history
        chat.save()
        # print(f"CHAT_HISTORY LIST AFTER SAVING: {chat.chat_history}")

        return Response(response)



# @api_view(['POST'])
# @permission_classes([AllowAny])
# def chat_view(request):
#     if request.method == 'POST':
#         try:
#             question = request.data.get('question')
#             chatId = request.data.get('chatId')
#             chat = Chat.objects.get(id=chatId)
#         except Chat.DoesNotExist:
#             return Response({'error': 'Chat not found'}, status=status.HTTP_404_NOT_FOUND)
#         # chat_serializer = ChatSerializer(data=request.data)
        
#         response = langchain_openai(chat.pdf_file, question)

#         return Response(response)


