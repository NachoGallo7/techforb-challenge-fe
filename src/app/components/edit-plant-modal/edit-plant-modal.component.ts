import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'tc-edit-plant-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-plant-modal.component.html',
  styleUrl: './edit-plant-modal.component.css'
})
export class EditPlantModalComponent implements OnInit{

  editPlantForm: FormGroup = {} as FormGroup;
  modalElement: HTMLElement|null = null;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.editPlantForm = this.formBuilder.group({
      plantName: [''],
      plantCountry: [''],
      plantOkReadings: [''],
      plantDisabledReadings: [''],
      plantWarningReadings: [''],
      plantErrorReadings: [''],
    });
    this.plantName?.disable();
    this.plantCountry?.disable();
    this.modalElement = document.getElementById("editPlantModal");
    this.modalElement?.addEventListener('show.bs.modal', event => {
      this.editPlantForm.reset();
      this.plantCountry?.setValue('');
    });
  }

  submit() {
    console.log("SEND");
  }

  get plantName() {
    return this.editPlantForm.get('plantName');
  }
  get plantCountry() {
    return this.editPlantForm.get('plantCountry');
  }
  get plantOkReadings() {
    return this.editPlantForm.get('plantOkReadings');
  }
  get plantDisabledReadings() {
    return this.editPlantForm.get('plantDisabledReadings');
  }
  get plantWarningReadings() {
    return this.editPlantForm.get('plantWarningReadings');
  }
  get plantErrorReadings() {
    return this.editPlantForm.get('plantErrorReadings');
  }
}
