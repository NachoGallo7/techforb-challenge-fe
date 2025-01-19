import { Routes } from '@angular/router';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { MainContentComponent } from './components/main-content/main-content.component';

export const routes: Routes = [
  {
    path: '', redirectTo: 'register', pathMatch: "full"
  }, {
    path: 'register', loadComponent: () => import('./components/register-user/register-user.component').then(c => c.RegisterUserComponent)
  }, {
    path: 'login', loadComponent: () => import('./components/login-user/login-user.component').then(c => c.LoginUserComponent)
  }, {
    path: 'dashboard', component: MainContentComponent
  }, {
    path: '**', redirectTo: 'register', pathMatch: "full"
  }
];
