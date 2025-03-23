from pydantic import BaseModel

class Concept(BaseModel):
    name: str
    description: str
    category: str
