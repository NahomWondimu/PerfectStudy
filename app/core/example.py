from google import genai
import typing
import json
class FlashCard(typing.TypedDict):
    question: str
    answer: str


def getGeminiResponse():

    questions = []
    answers = []

    API_KEY = "AIzaSyC4Pv3TTv5D5hJXc2ilutfYqi_V5yqhmmA"
    client = genai.Client(api_key=API_KEY)
    
    response = client.models.generate_content(

        model="gemini-2.0-flash", 
        contents="Create 5 short flashcards using these topics: Graphs, Trees, Pathfinding",
        config = {
            'response_mime_type': 'application/json',
            'response_schema': list[FlashCard]
        }
    )

    text_data = response.text
    json_data = json.loads(text_data)

    for flashcard_idx in range(len(json_data)):
        questions.append(json_data[flashcard_idx]["question"])
        answers.append(json_data[flashcard_idx]["answer"])



    return json_data


print(getGeminiResponse())