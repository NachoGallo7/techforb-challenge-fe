import { Component, Input } from '@angular/core';
import { GlobalKpiStyles } from '../../models/kpis-styles';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tc-small-readings-style-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './small-readings-style-icon.component.html',
  styleUrl: './small-readings-style-icon.component.css'
})
export class SmallReadingsStyleIconComponent {

  @Input() iconStyle!: GlobalKpiStyles;

  get globalKpiStyles() {
    return GlobalKpiStyles;
  }
}
