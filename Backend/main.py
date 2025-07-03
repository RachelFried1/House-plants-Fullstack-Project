from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from utils import fetch_all_plants, fetch_plant_by_id
import os

app = FastAPI()


origins = [
    os.getenv("FRONTEND_URL", "http://localhost:3001")  
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/plants")
async def get_all_plants():
    return await fetch_all_plants()

@app.get("/plants/{plant_id}")
async def get_plant_detail(plant_id: str):
    plant = await fetch_plant_by_id(plant_id)
    if plant:
        return plant
    raise HTTPException(status_code=404, detail="Plant not found")