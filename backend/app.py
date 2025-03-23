from fastapi import FastAPI
from routes import router

app = FastAPI(title="Knowledge Graph API")

app.include_router(router)

@app.get("/")
def home():
    return {"message": "Welcome to the Knowledge Graph API"}
