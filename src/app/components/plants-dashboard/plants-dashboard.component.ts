import { Component, model, OnInit, signal, WritableSignal } from '@angular/core';
import { GlobalKpiIndicatorComponent } from "../global-kpi-indicator/global-kpi-indicator.component";
import { GlobalKpiStyles } from '../../models/kpis-styles';
import { DashboardPlantsTableComponent } from "../dashboard-plants-table/dashboard-plants-table.component";
import { DashboardPerPlantDetailComponent } from "../dashboard-per-plant-detail/dashboard-per-plant-detail.component";
import { AddPlantModalComponent } from '../add-plant-modal/add-plant-modal.component';
import { EditPlantModalComponent } from "../edit-plant-modal/edit-plant-modal.component";
import { PlantService } from '../../services/plant.service';
import { PlantDTO } from '../../models/plants';
import { Page } from '../../models/pages';

@Component({
  selector: 'tc-plants-dashboard',
  standalone: true,
  imports: [GlobalKpiIndicatorComponent, DashboardPlantsTableComponent, DashboardPerPlantDetailComponent, AddPlantModalComponent, EditPlantModalComponent],
  templateUrl: './plants-dashboard.component.html',
  styleUrl: './plants-dashboard.component.css'
})
export class PlantsDashboardComponent implements OnInit{

  plants: PlantDTO[] = [];
  selectedPlant: WritableSignal<PlantDTO|undefined> = signal(undefined);
  globalReadings = signal(0);
  globalWarning = signal(0);
  globalAlerts = signal(0);
  globalDisabledSensors = signal(0);

  constructor(private plantService: PlantService){}

  ngOnInit(): void {
    this.plantService.getAll().subscribe({
      next: result => {
        this.plants = (result as Page<PlantDTO>).content;
        this.resetGlobalReadings();
        this.updateGlobalReadings();
        console.log("RECEIVED PLANTS");
        console.log(this.plants);
      }
    });
  }

  updateGlobalReadings(): void {
    this.plants.forEach(plant => {
      this.globalReadings.update(value => value + plant.readings);
      this.globalWarning.update(value => value + plant.warnings);
      this.globalAlerts.update(value => value + plant.alerts);
      this.globalDisabledSensors.update(value => value + plant.disabled_sensors);
    });
  }

  resetGlobalReadings(): void {
    this.globalReadings.set(0);
    this.globalWarning.set(0);
    this.globalAlerts.set(0);
    this.globalDisabledSensors.set(0);
  }

  selectPlant(plant: PlantDTO): void {
    this.selectedPlant.set(plant);
  }

  get globalKpiStates(){
    return GlobalKpiStyles;
  }
}
