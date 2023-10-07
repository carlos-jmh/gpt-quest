# This file is a middle man of sorts and will call a few classes to form data to send away
# It is the parent file to the schemas folder and the child to services

import logging

import openai
import os
from dotenv import load_dotenv
from schemas.openai_responses import *


class OpenAIClient:
    """A client class for interacting with the OpenAI ChatCompletions API."""

    def __init__(self, api_key):
        openai.api_key = api_key

    @staticmethod
    def generate_event(
            prompt: str,
            model: str = "gpt-3.5-turbo",
            max_tokens: int = 150,
            system_prompt: str = """
                                We are playing a game similar to DND. 
                                You will be the dungeon master, I will be the player. 
                                As the story progresses, I (the player) will be prompted by you with events 
                                and you will ask me how I react. Provide output only in Json with 400-600 chars.
                                The prompt and previous_event_summary should be about 150 chars each.

                                The json will look like this:

                                {
                                "event": 
                                    {
                                    "event_title": str
                                    "prompt": str
                                    }
                                "summary":
                                    {
                                    "previous_event_summary": str
                                    }
                                }
                                """
    ) -> OpenAIResponseMessage:
        """
        Generate text based on a given prompt using the OpenAI API.

        Args:
            prompt (str): The text prompt to generate a response from.
            model (str, optional): The GPT model to use.
            max_tokens (int, optional): The maximum number of tokens in the generated text.
            system_prompt (str, optional): The system prompt to set the context.
        Returns:
            OpenAIResponseMessage: The generated text as a response message.
        """

        try:
            response = openai.ChatCompletion.create(
                model=model,
                messages=[
                    {"role": "system", "content": system_prompt},
                    {"role": "user", "content": prompt},
                ],
                max_tokens=max_tokens
            )

            openai_response = OpenAIResponse(**response)
            generated_text = openai_response.choices[0].message
            return generated_text
        except Exception as e:
            logging.error(e)
            raise Exception("Failed to call OpenAI API")


def get_openai_client():
    load_dotenv()
    return OpenAIClient(os.getenv("OPENAI_API_KEY"))


if __name__ == "__main__":
    client = get_openai_client()
    print(client.generate_event("I leap into the chasm"))
