export interface SimplePlant {
  id: string;
  "Latin name": string;
  Family: string;
  Categories: string;
}

export interface DetailedPlant extends SimplePlant {
  Description?: string;
  Img?: string;
  Origin?: string;
  "Common name"?: string;
  "Other names"?: string;
  Avaibility?: string;
  Style?: string;
  Bearing?: string;
  "Light tolered"?: string;
  "Light ideal"?: string;
  Growth?: string;
  Pruning?: string;
  "Height potential"?: string;
  "Width potential"?: string;
  "Height at purchase"?: string;
  "Width at purchase"?: string;
  "Pot diameter (cm)"?: string;
  Appeal?: string;
  "Color of leaf"?: string;
  "Color of blooms"?: string;
  "Blooming season"?: string;
  Perfume?: string;
  Use?: string;
  Availability?: string;
  "Available sizes (Pot)"?: string;
  Insects?: string;
  Disease?: string;
  Url?: string;
  "Temperature max"?: string;
  "Temperature min"?: string;
  Zone?: string;
  Climat?: string;
  Watering?: string;
}

export interface PlantState {
  plants: SimplePlant[];
  currentPlant: DetailedPlant | null;
  filteredPlants: SimplePlant[];
  categories: string[];
  selectedCategory: string;
  searchTerm: string;
  loading: boolean;
  error: string | null;
}
