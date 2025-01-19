import { Component, EventEmitter, Input, model, OnInit, Output, Signal, signal } from '@angular/core';
import { PlantDTO } from '../../models/plants';
import { MatIconModule } from '@angular/material/icon';
import { SmallReadingsStyleIconComponent } from "../small-readings-style-icon/small-readings-style-icon.component";
import { GlobalKpiStyles } from '../../models/kpis-styles';
import { EditPlantModalComponent } from "../edit-plant-modal/edit-plant-modal.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tc-dashboard-plants-table',
  standalone: true,
  imports: [MatIconModule, SmallReadingsStyleIconComponent, EditPlantModalComponent, CommonModule],
  templateUrl: './dashboard-plants-table.component.html',
  styleUrl: './dashboard-plants-table.component.css'
})
export class DashboardPlantsTableComponent {

  toEditPlant = model({} as PlantDTO);
  @Input() plants: PlantDTO[] = [];
  @Output() selectedPlantEmitter = new EventEmitter<PlantDTO>;
  selectedPlant?: PlantDTO;

  // plants: PlantDTO[] = [{
  //   id: 1,
  //   name: "Quilmes",
  //   country: "Argentina",
  //   country_code: "ar",
  //   readings: 800,
  //   warnings: 160,
  //   alerts: 24,
  //   disabled_sensors: 27,
  //   isActive: true,
  // }, {
  //   id: 2,
  //   name: "Zárate",
  //   country: "Argentina",
  //   country_code: "ar",
  //   readings: 300,
  //   warnings: 10,
  //   alerts: 2,
  //   disabled_sensors: 0,
  //   isActive: true,
  // }];

  emitToEditPlant(plant: PlantDTO) {
    this.toEditPlant.set(plant);
  }

  selectPlant(plant: PlantDTO): void {
    this.selectedPlantEmitter.emit(plant);
    this.selectedPlant = plant;
    console.log(this.selectedPlant);
  }

  get globalKpiStyles() {
    return GlobalKpiStyles;
  }
}
