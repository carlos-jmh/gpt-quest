# This will be the file that calls the files within the router folder. 
# It is how we will give our server access to the "commands" within that file.

from fastapi import FastAPI

from routers import story, character

app = FastAPI()

app.include_router(story.router)
app.include_router(character.router)
