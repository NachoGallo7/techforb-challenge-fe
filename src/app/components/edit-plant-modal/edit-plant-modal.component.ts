import { Component, Input, OnInit, signal, Signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PlantDTO, PutPlantDTO } from '../../models/plants';
import { PlantService } from '../../services/plant.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tc-edit-plant-modal',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
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
      plantName: [this.toEditPlant().name],
      plantCountry: [this.toEditPlant().country],
      plantOkReadings: [this.toEditPlant().readings, [
        Validators.required, Validators.min(0)
      ]],
      plantDisabledReadings: [this.toEditPlant().disabled_sensors, [
        Validators.required, Validators.min(0)
      ]],
      plantWarningReadings: [this.toEditPlant().warnings, [
        Validators.required, Validators.min(0)
      ]],
      plantErrorReadings: [this.toEditPlant().alerts, [
        Validators.required, Validators.min(0)
      ]],
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
