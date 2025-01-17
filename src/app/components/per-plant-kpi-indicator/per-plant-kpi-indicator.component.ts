import { Component, Input } from '@angular/core';
import { GlobalKpiStyles, PerPlantKpiStyles } from '../../models/kpis-styles';
import { CommonModule } from '@angular/common';
import { SmallReadingsStyleIconComponent } from "../small-readings-style-icon/small-readings-style-icon.component";

@Component({
  selector: 'tc-per-plant-kpi-indicator',
  standalone: true,
  imports: [CommonModule, SmallReadingsStyleIconComponent],
  templateUrl: './per-plant-kpi-indicator.component.html',
  styleUrl: './per-plant-kpi-indicator.component.css'
})
export class PerPlantKpiIndicatorComponent {
  @Input() title!: string;
  @Input() okReadings!: string;
  @Input() warningReadings!: string;
  @Input() errorReadings!: string;
  @Input() style!: PerPlantKpiStyles;

  get perPlantKpiStyles() {
    return PerPlantKpiStyles;
  }
  get globalKpiStyles() {
    return GlobalKpiStyles;
  }
}
