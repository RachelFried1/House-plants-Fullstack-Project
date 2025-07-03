import { SimplePlant, DetailedPlant } from '../types/plantTypes';

const API_BASE_URL = 'http://localhost:8080';

export const fetchPlants = async (): Promise<SimplePlant[]> => {
  const response = await fetch(`${API_BASE_URL}/plants/`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  if (data && typeof data === 'object' && 'detail' in data) {
    throw new Error(data.detail);
  }
  return data;
};

export const fetchPlantById = async (id: string): Promise<DetailedPlant> => {
  const response = await fetch(`${API_BASE_URL}/plants/${id}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  if (data && typeof data === 'object' && 'detail' in data) {
    throw new Error(data.detail);
  }
  return data;
};

