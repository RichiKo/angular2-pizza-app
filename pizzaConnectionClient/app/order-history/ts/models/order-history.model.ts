import {CartItem} from '../../../cart/ts/models/cartitem.model';
import {DatePipe} from '../../../pipes/date.pipe';

export class OrderHistory {

  constructor(private _customerId: number, private _date: Date, private _cartItem: CartItem) {
  }

  get customerId(): number {
    return this._customerId;
  }

  get date(): string {
    return new DatePipe().transform(this._date);
  }

  get cartItem(): CartItem {
    return this._cartItem;
  }
}