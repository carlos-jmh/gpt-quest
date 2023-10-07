from fastapi import FastAPI

from routers import movies, micro_searchr


app = FastAPI()

app.include_router(movies.router)
app.include_router(micro_searchr.router)