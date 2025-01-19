import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'tc-main-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './main-sidebar.component.html',
  styleUrl: './main-sidebar.component.css'
})
export class MainSidebarComponent {

  constructor(private userService: UserService,
    private router: Router
  ) {}

  logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
