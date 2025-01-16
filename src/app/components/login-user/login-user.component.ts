import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { UserService } from '../../services/user.service';
import { RouterModule } from '@angular/router';
import { TokenService } from '../../services/token.service';
import { TokenDTO } from '../../models/user';
import { PlantService } from '../../services/plant.service';

@Component({
  selector: 'tc-login-user',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatIconModule, MatButtonModule, MatFormFieldModule, CommonModule, RouterModule],
  templateUrl: './login-user.component.html',
  styleUrl: './login-user.component.css'
})
export class LoginUserComponent implements OnInit{

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
    private tokenService: TokenService,
    private plantService: PlantService) {}
  
  registerForm!: FormGroup;
  hidePasswordSignal = signal(false);
  hideConfirmationPasswordSignal = signal(false);
  
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: [],
      password: []
    });

    setTimeout(() => console.log("CURRENT BREAKPOINT LEVEL: ", this.breakpointLevel()), 5000);

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
  
  hidePassword(event: MouseEvent) {
    this.hidePasswordSignal.set(!this.hidePasswordSignal());
    event.stopPropagation();
  }
  
  hideConfirmationPassword(event: MouseEvent) {
    this.hideConfirmationPasswordSignal.set(!this.hideConfirmationPasswordSignal());
    event.stopPropagation();
  }

  submit(): void {
    // this.userService.login(this.email?.value, this.password?.value).subscribe({
    //   next: (response => this.tokenService.setToken((response as TokenDTO).token))
    // });
    this.plantService.getAll().subscribe(response => console.log(response));
  }

  get Breakpoints() {
    return Breakpoints;
  }
  
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
}
