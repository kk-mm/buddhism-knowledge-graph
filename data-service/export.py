import json

def export_data(data, filepath):
    with open(filepath, "w") as file:
        json.dump(data, file, indent=4)
