import os
import httpx
from dotenv import load_dotenv

load_dotenv()  
BASE_URL = "https://house-plants2.p.rapidapi.com"

def get_headers():
    key = os.getenv("RAPIDAPI_KEY") or "test-api-key-placeholder"
    return {
        "X-RapidAPI-Key": key,
        "X-RapidAPI-Host": "house-plants2.p.rapidapi.com"
    }

async def fetch_all_plants():
    headers = get_headers()
    if headers["X-RapidAPI-Key"] == "test-api-key-placeholder":
        raise RuntimeError("RAPIDAPI_KEY is missing. Cannot use mock data in tests.")
    try:
        async with httpx.AsyncClient(timeout=20.0) as client:
            response = await client.get(f"{BASE_URL}/all", headers=headers)
            response.raise_for_status()
            return response.json()
    except Exception as e:
        raise RuntimeError(f"RapidAPI fetch failed: {e}")

async def fetch_plant_by_id(plant_id: str):
    headers = get_headers()
    if headers["X-RapidAPI-Key"] == "test-api-key-placeholder":
        raise RuntimeError("RAPIDAPI_KEY is missing. Cannot use mock data in tests.")
    try:
        async with httpx.AsyncClient(timeout=20.0) as client:
            response = await client.get(f"{BASE_URL}/id/{plant_id}", headers=headers)
            if response.status_code == 200:
                if not response.content or not response.content.strip():
                    return None
                plant_data = response.json()
                if 'id' not in plant_data:
                    plant_data['id'] = plant_id
                return plant_data
            elif response.status_code == 404:
                return None
    except Exception as e:
        raise RuntimeError(f"RapidAPI fetch failed: {e}")
    return None