import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterUserComponent } from "./components/register-user/register-user.component";

@Component({
  selector: 'tc-root',
  standalone: true,
  imports: [RouterOutlet, RegisterUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'techforb-challenge-fe';
}
