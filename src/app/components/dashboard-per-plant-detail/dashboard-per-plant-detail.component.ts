import { Component, Input } from '@angular/core';
import { PlantDTO } from '../../models/plants';
import { PerPlantKpiIndicatorComponent } from "../per-plant-kpi-indicator/per-plant-kpi-indicator.component";
import { PerPlantKpiStyles } from '../../models/kpis-styles';

@Component({
  selector: 'tc-dashboard-per-plant-detail',
  standalone: true,
  imports: [PerPlantKpiIndicatorComponent],
  templateUrl: './dashboard-per-plant-detail.component.html',
  styleUrl: './dashboard-per-plant-detail.component.css'
})
export class DashboardPerPlantDetailComponent {

  @Input() currentPlant?: PlantDTO = {
    id: 1,
    name: "Quilmes",
    country: "Argentina",
    countryCode: "ar",
    readings: 800,
    warnings: 160,
    alerts: 24,
    disabledSensors: 27,
    isActive: true,
  };

  get perPlantKpiStyles() {
    return PerPlantKpiStyles;
  }
}
