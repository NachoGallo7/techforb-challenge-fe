import { Component, Input } from '@angular/core';
import { GlobalKpiStyles } from '../../models/kpis-styles';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tc-global-kpi-indicator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './global-kpi-indicator.component.html',
  styleUrl: './global-kpi-indicator.component.css'
})
export class GlobalKpiIndicatorComponent {
  @Input() title!: string;
  @Input() value!: string;
  @Input() style!: GlobalKpiStyles;

  get globalKpiStates() {
    return GlobalKpiStyles;
  }
}
