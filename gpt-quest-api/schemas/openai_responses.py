# Each schema file will use pydantic to create a bunch of structs (unique data types)
# They will typically be used to create a final BaseModel
# In this case the OpenAIResponse class is that final model

from pydantic import BaseModel
from typing import List


class OpenAIResponseMessage(BaseModel):
    role: str
    content: str


class OpenAIResponseChoice(BaseModel):
    index: int
    message: OpenAIResponseMessage
    finish_reason: str


class OpenAIResponseUsage(BaseModel):
    prompt_tokens: int
    completion_tokens: int
    total_tokens: int


class OpenAIResponse(BaseModel):
    id: str
    object: str
    created: int
    model: str
    choices: List[OpenAIResponseChoice]
    usage: OpenAIResponseUsage
