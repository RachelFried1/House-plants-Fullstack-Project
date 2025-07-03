import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchPlants as apiGetPlants, fetchPlantById as apiGetPlantById } from '../services/plantApi';
import { SimplePlant, PlantState } from '../types/plantTypes';

const initialState: PlantState = {
  plants: [],
  currentPlant: null,
  filteredPlants: [],
  categories: [],
  selectedCategory: '',
  searchTerm: '',
  loading: false,
  error: null,
};

export const fetchPlants = createAsyncThunk(
  'plants/fetchPlants',
  async () => {
    const data = await apiGetPlants();
    return data;
  }
);

export const fetchPlantById = createAsyncThunk(
  'plants/fetchPlantById',
  async (id: string) => {
    const data = await apiGetPlantById(id);
    return data;
  }
);

const plantSlice = createSlice({
  name: 'plants',
  initialState,
  reducers: {
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
      state.filteredPlants = filterPlants(state.plants, state.searchTerm, action.payload);
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
      state.filteredPlants = filterPlants(state.plants, action.payload, state.selectedCategory);
    },
    clearCurrentPlant: (state) => {
      state.currentPlant = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlants.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPlants.fulfilled, (state, action) => {
        state.loading = false;
        state.plants = action.payload;
        state.filteredPlants = filterPlants(action.payload, state.searchTerm, state.selectedCategory);
        const allCategories = action.payload
          .map(plant => plant.Categories)
          .filter((cat): cat is string => Boolean(cat));
        state.categories = [...new Set(allCategories)].sort() as string[];
      })
      .addCase(fetchPlants.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch plants';
      })
      .addCase(fetchPlantById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPlantById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentPlant = action.payload;
      })
      .addCase(fetchPlantById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch plant details';
      });
  },
});

function filterPlants(plants: SimplePlant[], searchTerm: string, selectedCategory: string): SimplePlant[] {
  return plants.filter(plant => {
    const matchesSearch = !searchTerm || 
      plant['Latin name'].toLowerCase().includes(searchTerm.toLowerCase()) ||
      plant.Family.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plant.Categories.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || plant.Categories === selectedCategory;
    return matchesSearch && matchesCategory;
  });
}

export const { setSelectedCategory, setSearchTerm, clearCurrentPlant } = plantSlice.actions;
export default plantSlice.reducer;
