import json

def ingest_data(filepath):
    with open(filepath, "r") as file:
        data = json.load(file)
    return data
