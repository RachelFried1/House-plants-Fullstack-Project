from pydantic import BaseModel, Field, ConfigDict
from typing import Optional, List, Dict, Union, Any

class DimensionInfo(BaseModel):
    M: Optional[float] = None
    CM: Optional[float] = None

class TemperatureInfo(BaseModel):
    F: Optional[float] = None
    C: Optional[float] = None

class PlantSummary(BaseModel):
    model_config = ConfigDict(populate_by_name=True, extra="allow")
    
    id: str
    latin_name: Optional[str] = Field(alias="Latin name", default="Unknown")
    family: Optional[str] = Field(alias="Family", default="Unknown")
    category: Optional[str] = Field(alias="Categories", default="Unknown")

class PlantDetail(BaseModel):
    model_config = ConfigDict(populate_by_name=True, extra="allow")

    id: str
    latin_name: Optional[str] = Field(alias="Latin name", default="Unknown")
    family: Optional[str] = Field(alias="Family", default="Unknown")
    category: Optional[str] = Field(alias="Categories", default="Unknown")
    
    common_name: Optional[List[str]] = Field(alias="Common name", default=None)
    common_name_fr: Optional[str] = Field(alias="Common name (fr.)", default=None)
    other_names: Optional[str] = Field(alias="Other names", default=None)
    
    image: Optional[str] = Field(alias="Img", default=None)
    description: Optional[str] = Field(alias="Description", default=None)
    
    origin: Optional[List[str]] = Field(alias="Origin", default=None)
    climate: Optional[str] = Field(alias="Climat", default=None)
    temperature_max: Optional[TemperatureInfo] = Field(alias="Temperature max", default=None)
    temperature_min: Optional[TemperatureInfo] = Field(alias="Temperature min", default=None)
    zone: Optional[List[str]] = Field(alias="Zone", default=None)
    
    watering: Optional[str] = Field(alias="Watering", default=None)
    light_ideal: Optional[str] = Field(alias="Light ideal", default=None)
    light_tolerated: Optional[str] = Field(alias="Light tolered", default=None)
    growth: Optional[str] = Field(alias="Growth", default=None)
    pruning: Optional[str] = Field(alias="Pruning", default=None)
    
    height_potential: Optional[DimensionInfo] = Field(alias="Height potential", default=None)
    width_potential: Optional[DimensionInfo] = Field(alias="Width potential", default=None)
    height_at_purchase: Optional[DimensionInfo] = Field(alias="Height at purchase", default=None)
    width_at_purchase: Optional[DimensionInfo] = Field(alias="Width at purchase", default=None)
    pot_diameter: Optional[DimensionInfo] = Field(alias="Pot diameter (cm)", default=None)
    bearing: Optional[str] = Field(alias="Bearing", default=None)
    clump: Optional[str] = Field(alias="Clump", default=None)
    
    appeal: Optional[str] = Field(alias="Appeal", default=None)
    color_of_leaf: Optional[List[str]] = Field(alias="Color of leaf", default=None)
    color_of_blooms: Optional[str] = Field(alias="Color of blooms", default=None)
    blooming_season: Optional[str] = Field(alias="Blooming season", default=None)
    perfume: Optional[str] = Field(alias="Perfume", default=None)
    style: Optional[str] = Field(alias="Style", default=None)
    
    use: Optional[List[str]] = Field(alias="Use", default=None)
    availability: Optional[str] = Field(alias="Avaibility", default=None)
    available_sizes: Optional[str] = Field(alias="Available sizes (Pot)", default=None)
    
    insects: Optional[List[str]] = Field(alias="Insects", default=None)
    disease: Optional[str] = Field(alias="Disease", default=None)
    
    url: Optional[str] = Field(alias="Url", default=None)