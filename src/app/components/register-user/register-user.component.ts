import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'tc-register-user',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatIconModule, MatButtonModule, MatFormFieldModule, CommonModule],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})
export class RegisterUserComponent implements OnInit{

  isLargeScreen: boolean = false;

  constructor(private formBuilder: FormBuilder, 
    private breakpointObserver: BreakpointObserver) {}
  
  registerForm!: FormGroup;
  hidePasswordSignal = signal(false);
  hideConfirmationPasswordSignal = signal(false);
  
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: [],
      email: [],
      password: [],
      confirmationPassword: []
    });

    this.breakpointObserver.observe([Breakpoints.XLarge, Breakpoints.Large, Breakpoints.Small, Breakpoints.Handset]).subscribe(result => {
      if(result.breakpoints[Breakpoints.XLarge]) {
        // X-LARGE
        this.isLargeScreen = false;
        console.log("X-LARGE");
      } else if (result.breakpoints[Breakpoints.Large]) {
        // LARGE
        this.isLargeScreen = true;
        console.log("LARGE");
      } else if (result.breakpoints[Breakpoints.Small]) {
        // SMALL
        this.isLargeScreen = false;
        console.log("SMALL");
      } else if (result.breakpoints[Breakpoints.Handset]) {
        // HANDSET
        this.isLargeScreen = false;
        console.log("HANDSET");
      }
    })
  }
  
  hidePassword(event: MouseEvent) {
    this.hidePasswordSignal.set(!this.hidePasswordSignal());
    event.stopPropagation();
  }
  
  hideConfirmationPassword(event: MouseEvent) {
    this.hideConfirmationPasswordSignal.set(!this.hideConfirmationPasswordSignal());
    event.stopPropagation();
  }

  submit(): void {
    
  }
}
