import { Routes } from '@angular/router';
import { LoginComponent } from '../components/login.component';

export const LoginRoutes: Routes = [
  { path: 'login', component: LoginComponent },
   { path: 'login/:fw', component: LoginComponent }
];

