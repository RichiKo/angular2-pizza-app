import { CartItem } from './cartitem.model';

export class Cart {
  private _content: Array<CartItem>;

  constructor() {
    this._content = new Array<CartItem>();
  }

  get content(): Array<CartItem> {
    return this._content;
  }

  flush() {
    this._content = new Array<CartItem>();
  }

  get sumTotal(): number {
    let sum = 0;

    this._content.forEach(item => {
      sum += item.subTotal;
    });

    return sum;
  }

  addItem(item: CartItem) {
    let cartItem = new CartItem(item.pizzaId, item.price, item.image, item.size, item.name);
    let found = false;

    this._content.forEach(currentItem => {
      // increase amount if found
      if (currentItem.pizzaId === cartItem.pizzaId) {
        currentItem.increaseAmount();
        found = true;
      }
    });

    if (!found) {
      // put new pizza if not found
      this._content.push(cartItem);
    }
  }

  decreaseItem(item: CartItem) {
    let cartItem = new CartItem(item.pizzaId, item.price, item.image, item.size, item.name);

    this._content.forEach((currentItem, index) => {
      if (currentItem.pizzaId === cartItem.pizzaId) {
        if (currentItem.decreaseAmount() === 0) {
          this._content.splice(index, 1);
        }
      }
    });
  }

  removeItem(item: CartItem) {
    let cartItem = new CartItem(item.pizzaId, item.price, item.image, item.size, item.name);

    this._content.forEach((currentItem, index) => {
      if (currentItem.pizzaId === cartItem.pizzaId) {
        this._content.splice(index, 1);
      }
    });
  }
}
