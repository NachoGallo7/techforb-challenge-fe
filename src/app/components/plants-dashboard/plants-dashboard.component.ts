import { Component } from '@angular/core';
import { GlobalKpiIndicatorComponent } from "../global-kpi-indicator/global-kpi-indicator.component";
import { GlobalKpiStates } from '../../models/kpis-styles';
import { DashboardPlantsTableComponent } from "../dashboard-plants-table/dashboard-plants-table.component";
// import '/node_modules/flag-icons/css/flag-icons.min.css'; 
// import '../../../../node_modules/flag-icons/css/flag-icons.min.css'; 

@Component({
  selector: 'tc-plants-dashboard',
  standalone: true,
  imports: [GlobalKpiIndicatorComponent, DashboardPlantsTableComponent],
  templateUrl: './plants-dashboard.component.html',
  styleUrl: './plants-dashboard.component.css'
})
export class PlantsDashboardComponent {


  get globalKpiStates(){
    return GlobalKpiStates;
  }
}
