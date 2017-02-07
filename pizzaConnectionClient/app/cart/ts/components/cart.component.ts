import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../models/cart.model';
import { CartItem } from '../models/cartitem.model';
import { CheckoutService } from '../../../checkout/ts/services/checkout.service';

@Component({
  selector: 'cart',
  templateUrl: 'app/cart/templates/cart.html',
  styleUrls: ['app/css/styles.css']
})

export class CartComponent {

  constructor(private router: Router, private cart: Cart, private checkoutService: CheckoutService) {
  }

  checkout() {
    if(localStorage.getItem('auth_token')=== null) {
      this.router.navigate(['orderoption']);
    } else {
       this.router.navigate(['confirmation']);
    }
  }

  get sumTotal(): number {
    return this.cart.sumTotal;
  }

  decreaseItemAmount(item: CartItem) {
    this.cart.decreaseItem(item);
  }

  increaseItemAmount(item: CartItem) {
    this.cart.addItem(item);
  }

  removeItem(item: CartItem) {
    this.cart.removeItem(item);
  }

  get hasContent(): boolean {
    return this.cart.content.length > 0;
  }




}
