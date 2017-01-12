import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PizzaListService } from '../services/pizzalist.service';
import { Pizza } from '../models/pizza.model';


@Component({
  selector: 'pizzalist',
  templateUrl: 'app/pizza/templates/pizzalist.html',
  styleUrls: ['app/css/styles.css']
})

export class PizzaListComponent {
  private pizzaList: Array<Pizza>;

  constructor(private _pizzaService: PizzaListService, private router: Router) {
    this._pizzaService.getPizzaList().subscribe(res => {
      this.pizzaList = res;
    });
  }

  getPizzaList() {
    return this.pizzaList;
  }

  showDetails(pizza: Pizza) {
    this.router.navigate(['pizzadetail', pizza.id]);
  }
}