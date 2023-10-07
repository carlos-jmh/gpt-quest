import os
import openai
from dotenv import load_dotenv



def dalle_client (prompt):
    # Your DALL-E API key
    load_dotenv()
    openai.api_key = os.getenv("OPENAI_API_KEY")

    print("API key:", openai.api_key)

    # Generate an image
    response = openai.Image.create(
        prompt=prompt,
        model="image-alpha-001",
        size="1024x1024",
        response_format="url"
    )

    # Print the URL of the generated image
    print(response["data"][0]["url"])

dalle_client("Walking in a lake")

