import { Component, model, OnInit, signal } from '@angular/core';
import { GlobalKpiIndicatorComponent } from "../global-kpi-indicator/global-kpi-indicator.component";
import { GlobalKpiStyles } from '../../models/kpis-styles';
import { DashboardPlantsTableComponent } from "../dashboard-plants-table/dashboard-plants-table.component";
import { DashboardPerPlantDetailComponent } from "../dashboard-per-plant-detail/dashboard-per-plant-detail.component";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddPlantModalComponent } from '../add-plant-modal/add-plant-modal.component';
import { EditPlantModalComponent } from "../edit-plant-modal/edit-plant-modal.component";

@Component({
  selector: 'tc-plants-dashboard',
  standalone: true,
  imports: [GlobalKpiIndicatorComponent, DashboardPlantsTableComponent, DashboardPerPlantDetailComponent, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatDialogModule, AddPlantModalComponent, EditPlantModalComponent],
  templateUrl: './plants-dashboard.component.html',
  styleUrl: './plants-dashboard.component.css'
})
export class PlantsDashboardComponent implements OnInit{

  name = model('nACHO');
  animal = signal('');

  constructor(private dialogHandler: MatDialog){}

  ngOnInit(): void {
    document.getElementById("test-button")?.click();
  }

  openDialog() {
    console.log("ABRIO MODAL | VALOR NAME: ", this.name());
    const dialogRef = this.dialogHandler.open(AddPlantModalComponent, {data: {name: this.name(), animal: this.animal()}});
    dialogRef.afterClosed().subscribe(result => {
      this.animal = result;
      console.log(this.animal);
    });
  }

  get globalKpiStates(){
    return GlobalKpiStyles;
  }
}
