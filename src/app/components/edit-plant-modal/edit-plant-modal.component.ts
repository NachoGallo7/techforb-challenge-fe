import { Component, Input, OnInit, signal, Signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PlantDTO, PutPlantDTO } from '../../models/plants';
import { PlantService } from '../../services/plant.service';

@Component({
  selector: 'tc-edit-plant-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-plant-modal.component.html',
  styleUrl: './edit-plant-modal.component.css'
})
export class EditPlantModalComponent implements OnInit{

  @Input() toEditPlant!: Signal<PlantDTO>;
  editPlantForm: FormGroup = {} as FormGroup;
  modalElement: HTMLElement|null = null;

  constructor(private formBuilder: FormBuilder,
    private plantService: PlantService
  ) {}

  ngOnInit(): void {
    this.editPlantForm = this.formBuilder.group({
      plantName: [this.toEditPlant().country],
      plantCountry: [''],
      plantOkReadings: [this.toEditPlant().readings],
      plantDisabledReadings: [''],
      plantWarningReadings: [''],
      plantErrorReadings: [''],
    });
    this.plantName.disable();
    this.plantCountry.disable();

    this.modalElement = document.getElementById("editPlantModal");
    this.modalElement?.addEventListener('show.bs.modal', event => {
      this.editPlantForm.reset();
      this.plantCountry.setValue('');
    });
    this.modalElement?.addEventListener('shown.bs.modal', event => {
      this.plantName.setValue(this.toEditPlant().name);
      this.plantCountry.setValue(this.toEditPlant().country_code);
      this.plantOkReadings.setValue(this.toEditPlant().readings);
      this.plantDisabledReadings.setValue(this.toEditPlant().disabled_sensors);
      this.plantWarningReadings.setValue(this.toEditPlant().warnings);
      this.plantErrorReadings.setValue(this.toEditPlant().alerts);
    });
  }

  submit() {
    // this.toEditPlant().readings = this.plantOkReadings.value;
    // this.toEditPlant().warnings = this.plantWarningReadings.value;
    // this.toEditPlant().alerts = this.plantErrorReadings.value;
    // this.toEditPlant().disabled_sensors = this.plantDisabledReadings.value;
    const updatePlant: PutPlantDTO = {
      readings: this.plantOkReadings.value,
      warnings: this.plantWarningReadings.value,
      alerts: this.plantErrorReadings.value,
      disabled_sensors: this.plantDisabledReadings.value,
      plant_details: this.toEditPlant().plant_details
    }
    this.plantService.update(updatePlant, this.toEditPlant().id);
  }

  get plantName() {
    return this.editPlantForm.get('plantName')!;
  }
  get plantCountry() {
    return this.editPlantForm.get('plantCountry')!;
  }
  get plantOkReadings() {
    return this.editPlantForm.get('plantOkReadings')!;
  }
  get plantDisabledReadings() {
    return this.editPlantForm.get('plantDisabledReadings')!;
  }
  get plantWarningReadings() {
    return this.editPlantForm.get('plantWarningReadings')!;
  }
  get plantErrorReadings() {
    return this.editPlantForm.get('plantErrorReadings')!;
  }
}
