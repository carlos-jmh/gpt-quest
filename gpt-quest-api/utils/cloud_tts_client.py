import os
from google.cloud import texttospeech
from dotenv import load_dotenv

def cloud_tts_client(text):

    load_dotenv()
    credential_path = os.getenv("GOOGLE_APPLICATION_CREDENTIALS")

    client = texttospeech.TextToSpeechClient()

    input_text = texttospeech.SynthesisInput(text=text)

    voice = texttospeech.VoiceSelectionParams(
        language_code="en-US",
        name="en-US-Studio-M",
        ssml_gender = "MALE"
    )

    audio_config=texttospeech.AudioConfig(
        pitch= -8,
        speaking_rate= 0.65,
        audio_encoding=texttospeech.AudioEncoding.MP3
    )

    response = client.synthesize_speech(
        request={"input": input_text, "voice": voice, "audio_config": audio_config}
    )

    with open("output.mp3", "wb") as out:
        out.write(response.audio_content)
