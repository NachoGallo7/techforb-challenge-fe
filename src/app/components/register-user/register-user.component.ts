import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'tc-register-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})
export class RegisterUserComponent implements OnInit{

  constructor(private formBuilder: FormBuilder) {}
  
  registerForm!: FormGroup;
  
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: [],
      email: [],
      password: [],
      passwordConfirmation: []
    });
  }

  submit(): void {
    
  }
}
