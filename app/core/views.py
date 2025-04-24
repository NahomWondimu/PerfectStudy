from django.shortcuts import render
#do pip install google-genai
from google import genai
import typing
import json
from rest_framework.decorators import api_view
from rest_framework.response import Response
import os
from dotenv import load_dotenv
from django.http import HttpResponse, JsonResponse
from PyPDF2 import PdfReader
import io
# Create your views here.

load_dotenv()

class FlashCard(typing.TypedDict):
    question: str
    answer: str

@api_view(['GET', 'POST'])
def index(request):

    if request.method == "POST":
        text = ""
        print(request.FILES.get('file'))
        file = request.FILES.get('file')
        reader = PdfReader(file)
        content = request.FILES.get('file').read()

        for i in range(len(reader.pages)):
            text += reader.pages[i].extract_text()
        
        json_data = getGeminiResponse(text)
    
        return JsonResponse(json_data, safe=False)
    
    return render(request, "index.html")

def getGeminiResponse(content):

    API_KEY = os.getenv("GEMINI_API_KEY")
    client = genai.Client(api_key=API_KEY)
    
    response = client.models.generate_content(

        model="gemini-2.0-flash", 
        contents="Create 5 short flashcards using content from this document: " + content,
        config = {
            'response_mime_type': 'application/json',
            'response_schema': list[FlashCard]
        }
    )

    text_data = response.text
    json_data = json.loads(text_data)

    return json_data







