export interface PlantDTO {
  id: number;
  name: string;
  country: string;
  country_code: string;
  readings?: number;
  warnings?: number;
  alerts?: number;
  disabled_sensors?: number;
  is_active: boolean;
  plant_details: PlantDetailDTO[];
}

export interface PlantDetailDTO {
  id: number
  readings: number
  warnings?: number
  alerts?: number
  disabled_sensors?: number
  plant_detail_type: PlantDetailType
}

export interface PostPlantDTO {
  name: string;
  country: string;
  country_code: string;
}

export interface PutPlantDTO {
  readings: number;
  warnings: number;
  alerts: number;
  disabled_sensors: number;
  plant_details: PlantDetailDTO[];
}

export enum PlantDetailType {
  TEMPERATURE,
  PRESSURE,
  WIND,
  LEVELS,
  ENERGY,
  TENSION,
  CARBON_MONOXIDE,
  OTHER_GASSES
}