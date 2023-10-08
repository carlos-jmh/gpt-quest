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
    def generate_text(
            prompt: str,
            model: str = "gpt-3.5-turbo",
            max_tokens: int = 50,
            system_prompt: str = "You are a helpful assistant."
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
            print(response)

            openai_response = OpenAIResponse(**response)
            generated_text = openai_response.choices[0].message
            return generated_text
        except Exception as e:
            logging.error(e)
            raise Exception("Failed to call OpenAI API")

    @staticmethod
    def generate_image(prompt: str):
        model: str = "image-alpha-001"
        size: str = "1024x1024"
        response_format: str = "url"

        response = openai.Image.create(
            prompt=prompt,
            model=model,
            size=size,
            response_format=response_format)

        return response["data"][0]["url"]


def get_openai_client():
    load_dotenv()
    return OpenAIClient(os.getenv("OPENAI_API_KEY"))


if __name__ == "__main__":
    pass
