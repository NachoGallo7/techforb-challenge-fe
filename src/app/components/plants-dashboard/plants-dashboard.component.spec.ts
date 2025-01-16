import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantsDashboardComponent } from './plants-dashboard.component';

describe('PlantsDashboardComponent', () => {
  let component: PlantsDashboardComponent;
  let fixture: ComponentFixture<PlantsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantsDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
