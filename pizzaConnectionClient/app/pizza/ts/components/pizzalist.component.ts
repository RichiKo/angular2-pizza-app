import { Component } from '@angular/core';
import { PizzaListService } from '../services/pizzalist.service';
import { Pizza } from '../models/pizza.model';

@Component({
  selector: 'pizzalist',
  templateUrl: 'app/pizza/templates/pizzalist.html',
  styleUrls: ['app/css/style.css']
})

export class PizzaListComponent {
  private pizzaList: Array<Pizza>

  constructor(private pizzaService: PizzaListService) {
    this.pizzaService.getPizzaList().subscribe(res => {
      this.pizzaList = res;
    });
  }

  getPizzaList() {
    return this.pizzaList;
  }
}