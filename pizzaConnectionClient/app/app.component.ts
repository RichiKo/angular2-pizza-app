import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';
import { Router } from '@angular/router';
import { AuthService } from './login/ts/services/auth.service';


@Component({
  selector: 'pizzaconnection',
  templateUrl: 'app/app.html',
  styleUrls: ['app/css/styles.css']
})

export class AppComponent implements OnInit {
  private items: MenuItem[];

  constructor(private router: Router, private authService: AuthService) {
    // localStorage.removeItem('auth_token');
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Speisekarte',
        icon: 'fa-cutlery',
        routerLink: ['']
      },
      {
        label: 'Warenkorb',
        icon: '',
        routerLink: ['cart']
      }
    ];
  }

  logout() {
    this.authService.logout();
  }

  login() {
    this.router.navigate(['login']);
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}

