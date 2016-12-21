import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'pizzaconnection',
  templateUrl: 'app/app.html',
  styleUrls: ['app/css/styles.css']
})

export class AppComponent implements OnInit {
  private items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: '',
        routerLink: ['']
      },
      {
        label: 'Speisekarte',
        icon: 'fa-cutlery',
        routerLink: ['pizzalist']
      }
    ]
  }
}

