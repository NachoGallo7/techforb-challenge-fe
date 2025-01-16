import { Component } from '@angular/core';
import { PlantsDashboardComponent } from '../plants-dashboard/plants-dashboard.component';
import { PlantsDashboardSidebarComponent } from '../plants-dashboard-sidebar/plants-dashboard-sidebar.component';
import { MainSidebarComponent } from "../main-sidebar/main-sidebar.component";

@Component({
  selector: 'tc-main-content',
  standalone: true,
  imports: [PlantsDashboardComponent, MainSidebarComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {

}
