import { Component, EventEmitter, Input, model, OnInit, Output, Signal, signal } from '@angular/core';
import { PlantDTO } from '../../models/plants';
import { MatIconModule } from '@angular/material/icon';
import { SmallReadingsStyleIconComponent } from "../small-readings-style-icon/small-readings-style-icon.component";
import { GlobalKpiStyles } from '../../models/kpis-styles';
import { EditPlantModalComponent } from "../edit-plant-modal/edit-plant-modal.component";
import { CommonModule } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { PlantService } from '../../services/plant.service';

@Component({
  selector: 'tc-dashboard-plants-table',
  standalone: true,
  imports: [MatIconModule, SmallReadingsStyleIconComponent, EditPlantModalComponent, CommonModule],
  templateUrl: './dashboard-plants-table.component.html',
  styleUrl: './dashboard-plants-table.component.css'
})
export class DashboardPlantsTableComponent implements OnInit{

  constructor(private breakpointObserver: BreakpointObserver,
    private plantService: PlantService
  ) {}

  toEditPlant = model({} as PlantDTO);
  @Input() plants: PlantDTO[] = [];
  @Output() selectedPlantEmitter = new EventEmitter<PlantDTO>;
  selectedPlant?: PlantDTO;

  breakpointLevel = signal(1);
  breakpointLevelMap: {[breakpointName: string]: number} = {
    [Breakpoints.XLarge]:   5,
    [Breakpoints.Large]:    4,
    [Breakpoints.Medium]:   3,
    [Breakpoints.Small]:    2,
    [Breakpoints.Handset]:  1
  }

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.XLarge, Breakpoints.Large, Breakpoints.Medium, Breakpoints.Small, Breakpoints.Handset]).subscribe(result => {
      if(result.breakpoints[Breakpoints.XLarge]) {
        // X-LARGE
        this.breakpointLevel.set(this.breakpointLevelMap[Breakpoints.XLarge]);
        console.log("X-LARGE");
      } else if (result.breakpoints[Breakpoints.Large]) {
        // LARGE
        this.breakpointLevel.set(this.breakpointLevelMap[Breakpoints.Large]);
        console.log("LARGE");
      } else if (result.breakpoints[Breakpoints.Medium]) {
        // MEDIUM
        this.breakpointLevel.set(this.breakpointLevelMap[Breakpoints.Medium]);
        console.log("MEDIUM");
      } else if (result.breakpoints[Breakpoints.Small]) {
        // SMALL
        this.breakpointLevel.set(this.breakpointLevelMap[Breakpoints.Small]);
        console.log("SMALL");
      } else if (result.breakpoints[Breakpoints.Handset]) {
        // HANDSET
        this.breakpointLevel.set(this.breakpointLevelMap[Breakpoints.Handset]);
        console.log("HANDSET");
      }
    })
  }

  emitToEditPlant(plant: PlantDTO) {
    this.toEditPlant.set(plant);
  }

  deletePlant(plantId: number) {
    this.plantService.delete(plantId);
  }

  selectPlant(plant: PlantDTO): void {
    this.selectedPlantEmitter.emit(plant);
    this.selectedPlant = plant;
  }

  get Breakpoints() {
    return Breakpoints;
  }

  get globalKpiStyles() {
    return GlobalKpiStyles;
  }
}
