import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable()
export class Bouncer implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login', 'orderhistory']);
    }
    return this.authService.isLoggedIn();
  }
}