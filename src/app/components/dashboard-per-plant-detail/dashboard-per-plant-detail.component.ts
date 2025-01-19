import { Component, Input, OnInit } from '@angular/core';
import { PlantDetailType, PlantDTO } from '../../models/plants';
import { PerPlantKpiIndicatorComponent } from "../per-plant-kpi-indicator/per-plant-kpi-indicator.component";
import { PerPlantKpiStyles } from '../../models/kpis-styles';
import { Observable } from 'rxjs';

@Component({
  selector: 'tc-dashboard-per-plant-detail',
  standalone: true,
  imports: [PerPlantKpiIndicatorComponent],
  templateUrl: './dashboard-per-plant-detail.component.html',
  styleUrl: './dashboard-per-plant-detail.component.css'
})
export class DashboardPerPlantDetailComponent implements OnInit{

  @Input() selectedPlant$!: Observable<PlantDTO|undefined>;
  selectedPlant: PlantDTO|undefined;

  ngOnInit(): void {
    this.selectedPlant$.subscribe({
      next: value => this.selectedPlant = value
    });
  }

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
