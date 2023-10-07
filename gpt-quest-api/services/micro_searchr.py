# This file will do the bulk of the work
# It will take in the user inputs and convert them into outputs accordingly to send away

from utils.openai_client import OpenAIClient, get_openai_client
from utils.searchr_client import SearchrClient
from schemas.searchr_response import MicroSearchrResponse


class MicroSearchrService:
    def __init__(self, openai_client: OpenAIClient, searchr_client: SearchrClient):
        self.openai_client = openai_client
        # TODO: add serper api client here

    @staticmethod
    def search(query: str) -> MicroSearchrResponse:
        # Search query using serper api

        # extract context from serper result

        # send context + query + styling to OpenAIClient

        # return response
        return NotImplementedError


def get_micro_searchr_service():
    openai_client: OpenAIClient = get_openai_client()
    return MicroSearchrService(openai_client)
