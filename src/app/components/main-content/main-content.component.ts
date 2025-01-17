import { Component, OnInit } from '@angular/core';
import { PlantsDashboardComponent } from '../plants-dashboard/plants-dashboard.component';
import { MainSidebarComponent } from "../main-sidebar/main-sidebar.component";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'tc-main-content',
  standalone: true,
  imports: [PlantsDashboardComponent, MainSidebarComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent implements OnInit{

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large]).subscribe(result => {
      if(result.breakpoints[Breakpoints.Large]) {
        console.log("LARGE");
      } else if(result.breakpoints[Breakpoints.Medium]) {
        console.log("MEDIUM");
      } else if(result.breakpoints[Breakpoints.Small]) {
        console.log("SMALL");
      }
    });
  }
}
