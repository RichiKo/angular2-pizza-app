import { Component } from '@angular/core';
import { PizzaDetail } from '../models/pizzadetail.model';
import { PizzaDetailService } from '../services/pizzadetail.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Cart } from '../../../cart/ts/models/cart.model';
import { CartItem } from '../../../cart/ts/models/cartitem.model';

@Component({
  selector: 'pizzadetail',
  templateUrl: 'app/pizza/templates/pizzadetail.html',
  styleUrls: ['app/css/styles.css']
})

export class PizzaDetailComponent {
  private _pizzaDetail: PizzaDetail;

  constructor(private pizzaDetailService: PizzaDetailService, private route: ActivatedRoute, private location: Location, private cart: Cart) {

    let id = this.route.snapshot.params['id'];

    this.pizzaDetailService.getPizzaDetail(id).subscribe(pizzaDetail => {
      this._pizzaDetail = pizzaDetail;
    },
      err => console.error(err),
      () => console.log('done: ' + this._pizzaDetail.image)
    );
  }

  addToCart(pizzaDetail: PizzaDetail) {
    this.cart.addItem(new CartItem(pizzaDetail.id, pizzaDetail.price, pizzaDetail.image, pizzaDetail.size, pizzaDetail.name));
  }

  get currentAmount(): number {
    let currentAmount = 0;
    this.cart.content.forEach((currentItem, index) => {
      if (currentItem.pizzaId === this._pizzaDetail.id) {
        currentAmount = this.cart.content[index].amount;
      }
    });
    return currentAmount;
  }

  historyBack() {
    console.log('back');
    this.location.back();
  }

  get pizzaDetail(): PizzaDetail {
    return this._pizzaDetail;
  }
}
