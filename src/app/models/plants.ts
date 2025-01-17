export interface PlantDTO {
  id: number;
  name: string;
  country: string;
  countryCode: string;
  readings: number;
  warnings: number;
  alerts: number;
  disabledSensors: number;
  isActive: boolean;
}
