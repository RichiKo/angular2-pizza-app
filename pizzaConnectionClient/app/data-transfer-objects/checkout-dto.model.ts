import { Cart } from '../cart/ts/models/cart.model';

export class CheckoutDto {
  private _cart: Cart;

  constructor() { }

  get cart(): Cart {
    return this._cart;
  }

  set cart(value: Cart) {
    this._cart = value;
  }
}
