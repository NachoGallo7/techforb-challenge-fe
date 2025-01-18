import { Component, inject, model, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'tc-add-plant-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-plant-modal.component.html',
  styleUrl: './add-plant-modal.component.css'
})
export class AddPlantModalComponent implements OnInit{

  newPlantForm: FormGroup = {} as FormGroup;
  modalElement: HTMLElement|null = null;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.newPlantForm = this.formBuilder.group({
      plantName: [''],
      plantCountry: ['']
    });
    
    this.modalElement = document.getElementById("createPlantModal");
    this.modalElement?.addEventListener('show.bs.modal', event => {
      this.newPlantForm.reset();
      this.plantCountry?.setValue('');
    });
  }

  submit() {
    console.log("SEND");
  }

  get plantName() {
    return this.newPlantForm.get('plantName');
  }
  get plantCountry() {
    return this.newPlantForm.get('plantCountry');
  }
}
