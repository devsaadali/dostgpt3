from PyPDF2 import PdfReader
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.text_splitter import CharacterTextSplitter
from langchain.vectorstores import FAISS
from langchain.memory import ConversationBufferMemory
from langchain.chains import ConversationalRetrievalChain
# from langchain.chat_models import ChatOpenAI
from langchain_openai import ChatOpenAI
import os


os.environ["OPENAI_API_KEY"] = "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"

def get_pdf_text(pdf):
  raw_text = ''
  for i, page in enumerate(pdf.pages):
    text = page.extract_text()
    if text:
      raw_text += text
  return raw_text


def get_text_chunks(text):
  text_splitter = CharacterTextSplitter(
      separator="\n",
      chunk_size=1000,
      chunk_overlap=200,
      length_function=len
  )
  chunks = text_splitter.split_text(text)
  return chunks


def get_vectorstore(text_chunks):
  embeddings = OpenAIEmbeddings()
  vectorstore = FAISS.from_texts(texts=text_chunks, embedding=embeddings)
  return vectorstore


def get_conversation_chain(vectorstore):
  llm = ChatOpenAI()
  memory = ConversationBufferMemory(memory_key='chat_history', return_messages=True)
  conversation_chain = ConversationalRetrievalChain.from_llm(
      llm=llm,
      retriever=vectorstore.as_retriever(),
      memory=memory
  )
  return conversation_chain



def langchain_openai(pdf_file, question):

    # location of the pdf file/files.
    pdf = PdfReader(pdf_file)

    raw_text = get_pdf_text(pdf)

    text_chunks = get_text_chunks(raw_text)

    vectorstore = get_vectorstore(text_chunks)

    conversation = get_conversation_chain(vectorstore)

    # Actually asking the questions
    # user_question = 'What is this summary about?'
    user_question = question
    response = conversation({'question': user_question})

    return response
    # return conversation


