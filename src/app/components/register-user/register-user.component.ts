import { Component, OnInit, Signal, signal } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'tc-register-user',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatIconModule, MatButtonModule, MatFormFieldModule, CommonModule, RouterModule, MatError],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})
export class RegisterUserComponent implements OnInit{

  isLargeScreen: boolean = false;
  breakpointLevel = signal(1);
  breakpointLevelMap: {[breakpointName: string]: number} = {
    [Breakpoints.XLarge]:   5,
    [Breakpoints.Large]:    4,
    [Breakpoints.Medium]:   3,
    [Breakpoints.Small]:    2,
    [Breakpoints.Handset]:  1
  }

  constructor(private formBuilder: FormBuilder, 
    private breakpointObserver: BreakpointObserver,
    private userService: UserService,
    private router: Router) {}
  
  registerForm!: FormGroup;
  hidePasswordSignal = signal(false);
  hideConfirmationPasswordSignal = signal(false);
  
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', [
        Validators.required
      ]],
      email: ['', [
        Validators.required, Validators.email
      ]],
      password: ['', [
        Validators.required, Validators.minLength(9)
      ]],
      confirmationPassword: ['',  [
        Validators.required, Validators.minLength(9)
      ]]
    }, {
      validators: this.passwordMatchValidator('password', 'confirmationPassword')
    });

    this.breakpointObserver.observe([Breakpoints.XLarge, Breakpoints.Large, Breakpoints.Medium, Breakpoints.Small, Breakpoints.Handset]).subscribe(result => {
      if(result.breakpoints[Breakpoints.XLarge]) {
        // X-LARGE
        this.breakpointLevel.set(this.breakpointLevelMap[Breakpoints.XLarge]);
        console.log("X-LARGE");
      } else if (result.breakpoints[Breakpoints.Large]) {
        // LARGE
        this.breakpointLevel.set(this.breakpointLevelMap[Breakpoints.Large]);
        console.log("LARGE");
      } else if (result.breakpoints[Breakpoints.Medium]) {
        // MEDIUM
        this.breakpointLevel.set(this.breakpointLevelMap[Breakpoints.Medium]);
        console.log("MEDIUM");
      } else if (result.breakpoints[Breakpoints.Small]) {
        // SMALL
        this.breakpointLevel.set(this.breakpointLevelMap[Breakpoints.Small]);
        console.log("SMALL");
      } else if (result.breakpoints[Breakpoints.Handset]) {
        // HANDSET
        this.breakpointLevel.set(this.breakpointLevelMap[Breakpoints.Handset]);
        console.log("HANDSET");
      }
    })
  }

  passwordMatchValidator(password: string, confirmationPassword: string): ValidatorFn {
    return (abstractControl: AbstractControl) => {
        const control = abstractControl.get(password);
        const matchingControl = abstractControl.get(confirmationPassword);

        if (matchingControl!.errors && !matchingControl!.errors?.['confirmedValidator']) {
            return null;
        }

        if (control!.value !== matchingControl!.value) {
          const error = { confirmedValidator: 'Passwords do not match.' };
          matchingControl!.setErrors(error);
          return error;
        } else {
          matchingControl!.setErrors(null);
          return null;
        }
    }
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
    this.userService.register(this.username?.value, this.email?.value, this.password?.value).subscribe({
      error: (err) => {
        alert("El servidor está experimentando inconvenientes. Por favor, intente de nuevo más tarde")
      },
      complete: () => this.router.navigate(['/login'])
    });
  }

  get Breakpoints() {
    return Breakpoints;
  }

  get username() {
    return this.registerForm.get('username');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get confirmationPassword() {
    return this.registerForm.get('confirmationPassword');
  }
}
