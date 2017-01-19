import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'primeng/primeng';

import {Cart} from '../../../cart/ts/models/cart.model';
import {Account} from '../../../login/ts/models/account.model';
import {CheckoutService} from '../../../checkout/ts/services/checkout.service';

@Component({
  selector: 'confirmation',
  templateUrl: 'app/confirmation/templates/confirmation.html',
  styleUrls: ['app/css/styles.css']
})

export class ConfirmationComponent {
  msgs: Message[] = [];

  constructor(private checkoutService: CheckoutService, private router: Router, private _account: Account, private _cart: Cart) {
  }

  get account(): Account {
    return this._account;
  }

  get cart(): Cart {
    console.log('CART', this._cart);
    return this._cart;
  }

  get loggedIn(): boolean {
    return this._account._id > 0;
  }

  checkout() {
    this.checkoutService.checkout().subscribe(res => {
      if (res.statusCode == 'OK') {
        this.cart.flush();
        this.router.navigate(['checkout']);
      } else {
        this.msgs.push({
          severity: 'error',
          summary: 'Fehler',
          detail: res.statusMessage
        });
      }
    });
  }
}