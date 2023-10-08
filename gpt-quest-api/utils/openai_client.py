# This file is a middle man of sorts and will call a few classes to form data to send away
# It is the parent file to the schemas folder and the child to services

import logging

import json
import openai
import os
from dotenv import load_dotenv
from string import Template
from schemas.openai_responses import *
from schemas.story_components import *


class OpenAIClient:
    """A client class for interacting with the OpenAI ChatCompletions API."""

    def __init__(self, api_key):
        openai.api_key = api_key

    @staticmethod
    def generate_intro(
            prompt: str,
            model: str = "gpt-3.5-turbo",
            max_tokens: int = 200,
            system_prompt: str = """
                                We are playing a game similar to DND. 
                                You will be the dungeon master, I will be the player.
                                Present me with an introduction to an adventure involving my character.
                                Provide output only in Json.

                                The json will look like this:

                                {
                                "initial_story": 
                                    {
                                    "introduction": str (Introduction should be 40-50 words)
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
        
    @staticmethod
    def generate_event(
            context: str,
            iterator: int,
            prompt: str,
            model: str = "gpt-3.5-turbo",
            max_tokens: int = 400,
            # system_prompt: str = """
            #                     We are playing a game similar to DND. 
            #                     You will be the dungeon master, I will be the player. 
            #                     You will ouput a story_bit to give some story leading into the event.
            #                     Then, you will output an event (prompt in the Json below).
            #                     For each event, I will give you a unique response.
            #                     Provide output only in Json.

            #                     Respond in this format:

            #                     {
            #                     "event": 
            #                         {
            #                         "story_bit": str (The story_bit should be no more than 20-30 words)
            #                         "event_title": str 
            #                         "prompt": str (The prompt should be 20-30 words and end with "What will you do?")
            #                         }
            #                     "summary":
            #                         {
            #                         "current_summary": str 
            #                         }
            #                     }

            #                     context: $context$

            #                     There are $num$ events remaining

            #                     (Above, current_summary stores a concise summary of context + story_bit + prompt in no more than 50 words)
            #                     """,
            system_prompt_pt1: str = """
                                We are playing a game similar to DND. 
                                You will be the dungeon master, I will be the player. 
                                You will ouput a story_bit to give some story leading into the event.
                                Then, you will output an event (prompt in the Json below).
                                For each event, I will give you a unique response.
                                Provide output only in Json.as

                                context: {0}

                                There are {1} events remaining
                                
                                Respond in this format:""",
            system_prompt_pt2: str = """{
                                "event": 
                                    {
                                    "story_bit": str (between 20 and 30 words)
                                    "event_title": str 
                                    "prompt": str (between 20 and 30 words and end with "What will you do?")
                                    }
                                "summary":
                                    {
                                    "current_summary": str (key points of the previous context + story_bit + prompt, less than 60 words)
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

        # t = Template(system_prompt)
        # t.substitute(num = str(iterator), context = context)
        # system_prompt.replace("$context$", context)
        # system_prompt.replace("$num$", str(iterator))

        pt1 = system_prompt_pt1.format(context, iterator)

        system_prompt = pt1 + "\n" + system_prompt_pt2

        # print(iterator, context, prompt, system_prompt)

        try:
            response = openai.ChatCompletion.create(
                model=model,
                messages=[
                    {"role": "system", "content": system_prompt},
                    {"role": "user", "content": prompt},
                ],
                max_tokens=max_tokens
            )

            # print(response)

            openai_response = OpenAIResponse(**response)
            generated_text = openai_response.choices[0].message
            return generated_text
        except Exception as e:
            logging.error(e)
            raise Exception("Failed to call generate_event() from OpenAI")


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
    client = get_openai_client()

    intro_json = client.generate_intro("I am a rogue. I am strong, rash, and clumsy. I carry a battle axe.")

    intro_dict = json.loads(intro_json.content)
    intro = InitialStory(**intro_dict)
    print(intro.initial_story.introduction)

    i = 5
    event_json = client.generate_event(intro.initial_story.introduction, i, "")
    event_dict = json.loads(event_json.content)
    new_event = Event(**event_dict)
    print(new_event)
    i = i - 1

    while (i > 0):
        user_reaction = input()
        event_json = client.generate_event(new_event.summary.current_summary, i, user_reaction)
        event_dict = json.loads(event_json.content)
        new_event = Event(**event_dict)
        print(new_event)