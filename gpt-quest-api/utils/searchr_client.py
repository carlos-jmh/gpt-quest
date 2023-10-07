import logging
import requests
import json
from schemas.serper_response import *


class SearchrClient:
    """A super cool class"""

    def __init__(self):
        pass

    @staticmethod    
    def returnResponses(search) -> SerperResponseList:
        try:
            Responses = SerperResponseList
            prompt = search
            
            url = "https://google.serper.dev/search"
            
            payload = json.dumps({
            "q": prompt
            })
            headers = {
            'X-API-KEY': 'bc166d208bdf07e8ec17f8f5d62bab1489b0bcd9',
            'Content-Type': 'application/json'
            }

            response = requests.request("POST", url, headers=headers, data=payload)

            i = 0
            for entry in response:
                model = SerperResponse(**entry)
                Responses[i] = SerperResponse(model)
            return Responses
        except Exception as e:
            logging.error(e)
            raise Exception("Failed to call Serper API")