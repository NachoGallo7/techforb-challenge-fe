import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantsDashboardSidebarComponent } from './plants-dashboard-sidebar.component';

describe('PlantsDashboardSidebarComponent', () => {
  let component: PlantsDashboardSidebarComponent;
  let fixture: ComponentFixture<PlantsDashboardSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantsDashboardSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantsDashboardSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
