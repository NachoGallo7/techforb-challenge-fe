import { Component, Input, model, Signal, signal } from '@angular/core';
import { PlantDTO } from '../../models/plants';
import { MatIconModule } from '@angular/material/icon';
import { SmallReadingsStyleIconComponent } from "../small-readings-style-icon/small-readings-style-icon.component";
import { GlobalKpiStyles } from '../../models/kpis-styles';
import { EditPlantModalComponent } from "../edit-plant-modal/edit-plant-modal.component";

@Component({
  selector: 'tc-dashboard-plants-table',
  standalone: true,
  imports: [MatIconModule, SmallReadingsStyleIconComponent, EditPlantModalComponent],
  templateUrl: './dashboard-plants-table.component.html',
  styleUrl: './dashboard-plants-table.component.css'
})
export class DashboardPlantsTableComponent {

  toEditPlant = model({} as PlantDTO);

  plants: PlantDTO[] = [{
    id: 1,
    name: "Quilmes",
    country: "Argentina",
    countryCode: "ar",
    readings: 800,
    warnings: 160,
    alerts: 24,
    disabledSensors: 27,
    isActive: true,
  }, {
    id: 2,
    name: "Zárate",
    country: "Argentina",
    countryCode: "ar",
    readings: 300,
    warnings: 10,
    alerts: 2,
    disabledSensors: 0,
    isActive: true,
  }];

  emitToEditPlant(plant: PlantDTO) {
    console.log("EMITTED TO EDIT PLANT: ", plant);
    this.toEditPlant.set(plant);
  }

  get globalKpiStyles() {
    return GlobalKpiStyles;
  }
}
