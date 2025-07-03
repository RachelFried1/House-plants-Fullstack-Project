import os
from dotenv import load_dotenv
load_dotenv()
import pytest
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_get_all_plants():
    response = client.get("/plants/")
    assert response.status_code == 200
    data = response.json()
    assert isinstance(data, list)
    if len(data) > 0:
        plant = data[0]
        assert "id" in plant
        assert "Latin name" in plant
        assert "Family" in plant
        assert "Categories" in plant

def test_get_plant_detail_existing():
    response = client.get("/plants/53417c12-4824-5995-bce0-b81984ebbd1d")
    assert response.status_code == 200
    data = response.json()
    assert "id" in data
    assert "Latin name" in data
    assert "Family" in data
    assert "Categories" in data

def test_get_plant_detail_not_found():
    response = client.get("/plants/nonexistent-id")
    assert response.status_code == 404
    assert "Plant not found" in response.json()["detail"]

if __name__ == "__main__":
    pytest.main([__file__])
