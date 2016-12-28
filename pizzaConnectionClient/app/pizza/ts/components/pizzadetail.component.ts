import { Component } from '@angular/core';
import { PizzaDetail } from '../models/pizzadetail.model';
import { PizzaDetailService } from '../services/pizzadetail.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'pizzadetail',
  templateUrl: 'app/pizza/templates/pizzadetail.html',
  styleUrls: ['app/css/styles.css']
})

export class PizzaDetailComponent {
  private _pizzaDetail: PizzaDetail;

  constructor(private pizzaDetailService: PizzaDetailService, private route: ActivatedRoute, private location: Location) {

    let id = this.route.snapshot.params['id'];

    this.pizzaDetailService.getPizzaDetail(id).subscribe(pizzaDetail => {
      this._pizzaDetail = pizzaDetail;
    },
      err => console.error(err),
      () => console.log('done: ' + this._pizzaDetail.image)
    );
  }

  addToCart(pizzaDetail: PizzaDetail) {
    console.log('Eine Pizza wurde in den Warenkorb gelegt: ' + pizzaDetail.name);
  }

  historyBack() {
    console.log('back');
    this.location.back();
  }

  get pizzaDetail(): PizzaDetail {
    return this._pizzaDetail;
  }
}