from fastapi import APIRouter, HTTPException
from models import Concept
from database import db

router = APIRouter()

@router.get("/concepts")
def get_concepts():
    query = "MATCH (c:Concept) RETURN c.name AS name, c.description AS description, c.category AS category"
    result = db.query(query)
    return [record.data() for record in result]

@router.post("/concepts")
def create_concept(concept: Concept):
    query = "CREATE (c:Concept {name: $name, description: $description, category: $category})"
    db.query(query, concept.dict())
    return {"message": "Concept created successfully"}
