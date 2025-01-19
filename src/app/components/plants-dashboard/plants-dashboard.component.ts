import { Component, model, OnInit, signal, WritableSignal } from '@angular/core';
import { GlobalKpiIndicatorComponent } from "../global-kpi-indicator/global-kpi-indicator.component";
import { GlobalKpiStyles } from '../../models/kpis-styles';
import { DashboardPlantsTableComponent } from "../dashboard-plants-table/dashboard-plants-table.component";
import { DashboardPerPlantDetailComponent } from "../dashboard-per-plant-detail/dashboard-per-plant-detail.component";
import { AddPlantModalComponent } from '../add-plant-modal/add-plant-modal.component';
import { EditPlantModalComponent } from "../edit-plant-modal/edit-plant-modal.component";
import { PlantService } from '../../services/plant.service';
import { PlantDTO } from '../../models/plants';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'tc-plants-dashboard',
  standalone: true,
  imports: [GlobalKpiIndicatorComponent, DashboardPlantsTableComponent, DashboardPerPlantDetailComponent, AddPlantModalComponent, DashboardPerPlantDetailComponent],
  templateUrl: './plants-dashboard.component.html',
  styleUrl: './plants-dashboard.component.css'
})
export class PlantsDashboardComponent implements OnInit{

  plants: PlantDTO[] = [];
  private selectedPlant = new BehaviorSubject<PlantDTO|undefined>(undefined);
  selectedPlant$ = this.selectedPlant.asObservable();
  // selectedPlant: WritableSignal<PlantDTO|undefined> = signal(undefined);
  globalReadings: WritableSignal<number|undefined> = signal(undefined);
  globalWarning: WritableSignal<number|undefined> = signal(undefined);
  globalAlerts: WritableSignal<number|undefined> = signal(undefined);
  globalDisabledSensors: WritableSignal<number|undefined> = signal(undefined);

  constructor(private plantService: PlantService){}

  ngOnInit(): void {
    this.plantService.plants$.subscribe({
      next: (result: PlantDTO[]) => {
        this.plants = result;
        this.updateGlobalReadings();
      }
    });
    this.plantService.fetchAll();
  }

  updateGlobalReadings(): void {
    this.resetGlobalReadings();
    this.plants.forEach(plant => {
      this.globalReadings.update(value => (value ?? 0) + (plant.readings ?? 0));
      this.globalWarning.update(value => (value ?? 0) + (plant.warnings ?? 0));
      this.globalAlerts.update(value => (value ?? 0) + (plant.alerts ?? 0));
      this.globalDisabledSensors.update(value => (value ?? 0) + (plant.disabled_sensors ?? 0));
    });
  }

  resetGlobalReadings(): void {
    this.globalReadings.set(undefined);
    this.globalWarning.set(undefined);
    this.globalAlerts.set(undefined);
    this.globalDisabledSensors.set(undefined);
  }

  selectPlant(plant: PlantDTO): void {
    this.selectedPlant.next(plant);
  }

  get globalKpiStates(){
    return GlobalKpiStyles;
  }
}
