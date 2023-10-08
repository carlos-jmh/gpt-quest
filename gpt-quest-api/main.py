# This will be the file that calls the files within the router folder. 
# It is how we will give our server access to the "commands" within that file.

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers import story, character

app = FastAPI()

origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(story.router)
app.include_router(character.router)
