import { Component } from '@angular/core';
import { PlantsDashboardSidebarComponent } from '../plants-dashboard-sidebar/plants-dashboard-sidebar.component';

@Component({
  selector: 'tc-plants-dashboard',
  standalone: true,
  imports: [PlantsDashboardSidebarComponent],
  templateUrl: './plants-dashboard.component.html',
  styleUrl: './plants-dashboard.component.css'
})
export class PlantsDashboardComponent {

}
