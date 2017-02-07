import { Component } from '@angular/core';
import { Cart } from '../../../cart/ts/models/cart.model';

@Component({
  selector: 'checkout',
  templateUrl: 'app/checkout/templates/checkout.html',
  styleUrls: ['app/css/styles.css']
})

export class CheckoutComponent {
  constructor(private cart: Cart) {
    cart.flush();
  }
}
