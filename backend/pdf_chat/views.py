from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from .models import PDFFile
from .serializers import PDFFileSerializer
from django.http import FileResponse 
from django.http import HttpResponse
# from .openai_utils import generate_openai_response  # Import the OpenAI function
from .langchain import langchain_openai

@api_view(['POST'])
@permission_classes([AllowAny])
def pdf_upload_view(request):
    if request.method == 'POST':
        file_serializer = PDFFileSerializer(data=request.data)

        if file_serializer.is_valid():
            file_serializer.save()
            return Response({'pdf_data': file_serializer.data}, status=status.HTTP_201_CREATED)

        return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([AllowAny])
def get_pdf_view(request, pdfId):
    try:
        pdf_file = PDFFile.objects.get(id=pdfId)
    except PDFFile.DoesNotExist:
        return Response({'error': 'PDF file not found'}, status=status.HTTP_404_NOT_FOUND)
    
    response = FileResponse(pdf_file.file, content_type='application/pdf')
    # response['Content-Disposition'] = f'inline; filename="{pdf_file.filename}"'

    return response


@api_view(['POST'])
@permission_classes([AllowAny])
def chat_view(request):
    if request.method == 'POST':
        try:
            question = request.data.get('question')
            pdfID = request.data.get('pdfId')
            pdf_file = PDFFile.objects.get(id=pdfID)
        except PDFFile.DoesNotExist:
            return Response({'error': 'PDF file not found'}, status=status.HTTP_404_NOT_FOUND)
        # file_serializer = PDFFileSerializer(data=request.data)
        
        response = langchain_openai(pdf_file.file, question)

        return Response(response)







# from rest_framework.decorators import api_view, permission_classes
# from rest_framework.permissions import AllowAny, IsAuthenticated
# from rest_framework.response import Response
# from rest_framework import status
# from .models import PDFFile
# from .serializers import PDFFileSerializer
# from django.http import FileResponse 
# from django.http import HttpResponse
# # from .openai_utils import generate_openai_response  # Import the OpenAI function
# from .langchain import langchain_openai
# import json

# conversation_chain_object = ''

# @api_view(['POST'])
# @permission_classes([AllowAny])
# def pdf_upload_view(request):
#     if request.method == 'POST':
#         file_serializer = PDFFileSerializer(data=request.data)

#         if file_serializer.is_valid():
#             file_serializer.save()
#             return Response({'pdf_data': file_serializer.data}, status=status.HTTP_201_CREATED)

#         return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# @api_view(['GET'])
# @permission_classes([AllowAny])
# def get_pdf_view(request, pdfId):
#     try:
#         pdf_file = PDFFile.objects.get(id=pdfId)
#     except PDFFile.DoesNotExist:
#         return Response({'error': 'PDF file not found'}, status=status.HTTP_404_NOT_FOUND)
    
#     response = FileResponse(pdf_file.file, content_type='application/pdf')
#     # response['Content-Disposition'] = f'inline; filename="{pdf_file.filename}"'

#     return response


# @api_view(['POST', 'GET'])
# @permission_classes([AllowAny])
# # def chat_view(request):
# def chat_view(request):
#     if request.method == 'POST':
#         try:
#             # data = request.data
#             # formData = data.get('formData')
#             # user_question = data.get('question')
#             pdf_id = request.data.get('pdfId')
#             user_question = request.data.get('user_question')
#             print('USER QUESTION IS ------------------------------------------>>>>>>>>', user_question)
#             print('PDFID IS ------------------------------------------>>>>>>>>', pdf_id)
#             pdf_file = PDFFile.objects.get(id=pdf_id)
#             result = langchain_openai(pdf_file, user_question)
#         except PDFFile.DoesNotExist:
#             return Response({'error': 'PDF file not found'}, status=status.HTTP_404_NOT_FOUND)
#         # file_serializer = PDFFileSerializer(data=request.data)
#         # print('File IS ---> ', pdf_file.file)
#         # user_question = request.POST['question']
        
#         # print("CONVERSATION CHAIN OBJECT TYPE IS ---> ", type(conversation_chain_object))

#         # if conversation_chain_object == '':
#         #     result = langchain_openai(pdf_file.file)
#         #     conversation_chain_object = result[1]
#         #     print("EMPTY CONVERSATION CHAIN OBJECT IS ---> ", conversation_chain_object)
#         # else:
#         #     print("CONVERSATION CHAIN OBJECT IS ---> ", conversation_chain_object)

#         # response = FileResponse(pdf_file.file, content_type='application/pdf')
#         # response['Content-Disposition'] = f'inline; filename="{pdf_file.filename}"'

#         # return Response(request)
#         # response = FileResponse(pdf_file.file, content_type='application/pdf')
#         # return response
#         return Response({'langchain_response': result})

#         # try:
#         #     pdf_file = PDFFile.objects.get(id=request.data['pdf_id'])
#         # except PDFFile.DoesNotExist:
#         #     return Response({'error': 'PDF file not found'}, status=status.HTTP_404_NOT_FOUND)

#         # try:
#         #     openai = ChatOpenAI(pdf_file.file)
#         # except:
#         #     return Response({'error': 'Could not load PDF file'}, status=status.HTTP_400_BAD_REQUEST)

#         # try:
#         #     response = openai.generate_response(request.data['text'])
#         # except:
#         #     return Response({'error': 'Could not generate response'}, status=status.HTTP_400_BAD_REQUEST)

#         # return Response({'response': response}, status=status.HTTP_201_CREATED)
#     return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)