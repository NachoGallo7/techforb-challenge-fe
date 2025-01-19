import { Component, Input } from '@angular/core';
import { PlantDetailType, PlantDTO } from '../../models/plants';
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

  @Input() selectedPlant?: PlantDTO;
  // @Input() selectedPlant?: PlantDTO = {
  //   id: 1,
  //   name: "Quilmes",
  //   country: "Argentina",
  //   country_code: "ar",
  //   readings: 800,
  //   warnings: 160,
  //   alerts: 24,
  //   disabled_sensors: 27,
  //   isActive: true,
  // };

  filterPlantDetails(plant: PlantDTO|undefined, detailType: PlantDetailType) {
    const plantDetails = plant?.plant_details?.filter(detail => detail.plant_detail_type.toString() === PlantDetailType[detailType])?.at(0);
    return plantDetails;
  }

  get perPlantKpiStyles() {
    return PerPlantKpiStyles;
  }

  get plantDetailType() {
    return PlantDetailType;
  }
}
