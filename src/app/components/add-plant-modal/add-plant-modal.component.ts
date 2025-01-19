import { Component, inject, model, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { PlantService } from '../../services/plant.service';
import { PostPlantDTO } from '../../models/plants';
import { CommonModule } from '@angular/common';
import { CountryDTO } from '../../models/country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'tc-add-plant-modal',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-plant-modal.component.html',
  styleUrl: './add-plant-modal.component.css'
})
export class AddPlantModalComponent implements OnInit{

  newPlantForm: FormGroup = {} as FormGroup;
  modalElement: HTMLElement|null = null;
  countries: CountryDTO[] = [];

  constructor(private formBuilder: FormBuilder,
    private plantService: PlantService,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.newPlantForm = this.formBuilder.group({
      plantName: ['', [Validators.required]],
      plantCountry: ['', [Validators.required]],
      canCreate: [true, [Validators.requiredTrue]]
    });
    
    this.countryService.countries$.subscribe({
      next: result => this.countries = result
    });
    this.countryService.fetchAll();

    this.modalElement = document.getElementById("createPlantModal");
    this.modalElement?.addEventListener('show.bs.modal', event => {
      this.newPlantForm.reset();
      this.plantCountry.setValue('');
      this.canCreate.setValue(true);
    });
  }

  submit() {
    this.canCreate.setValue(false);
    const createPlant: PostPlantDTO = {
      name: this.plantName.value,
      country: (this.plantCountry.value as CountryDTO).name,
      country_code: (this.plantCountry.value as CountryDTO).code
    };
    console.log("PLANTA A CREAR");
    console.log(createPlant);
    this.plantService.create(createPlant);
  }

  get plantName() {
    return this.newPlantForm.get('plantName')!;
  }
  get plantCountry() {
    return this.newPlantForm.get('plantCountry')!;
  }
  get canCreate() {
    return this.newPlantForm.get('canCreate')!;
  }
}
