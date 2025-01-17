import { Component } from '@angular/core';
import { PlantDTO } from '../../models/plants';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'tc-dashboard-plants-table',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './dashboard-plants-table.component.html',
  styleUrl: './dashboard-plants-table.component.css'
})
export class DashboardPlantsTableComponent {

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
}
