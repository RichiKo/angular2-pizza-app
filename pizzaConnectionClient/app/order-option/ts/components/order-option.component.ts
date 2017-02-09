import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'order-option',
  templateUrl: 'app/order-option/templates/order-option.html',
  styleUrls: ['app/css/styles.css']
})

export class OrderOptionComponent {

  constructor(private router: Router) {
  }

  guestOrder() {
    this.router.navigate(['accountcreator', false]);
  }

  login() {
    this.router.navigate(['login', 'confirmation']);
  }

  createAccount() {
    this.router.navigate(['accountcreator', true]);
  }
}

