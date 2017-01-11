import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'pizzaconnection',
  templateUrl: 'app/app.html',
  styleUrls: ['app/css/styles.css']
})

export class AppComponent implements OnInit {
  private items: MenuItem[];

  constructor() { 
    localStorage.removeItem('auth_token');
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
}

