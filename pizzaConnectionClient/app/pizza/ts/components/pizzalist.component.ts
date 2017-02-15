import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PizzaListService } from '../services/pizzalist.service';
import { Pizza } from '../models/pizza.model';
import {FilterModel} from '../../../filter/ts/models/filter.model';


@Component({
  selector: 'pizzalist',
  templateUrl: 'app/pizza/templates/pizzalist.html',
  styleUrls: ['app/css/styles.css']
})

export class PizzaListComponent implements OnInit {
  private pizzaList: Array<Pizza>;
  model: FilterModel = new FilterModel();

  constructor(private _pizzaService: PizzaListService, private router: Router) {
    this.getFilteredSelectionList();
  }

  ngOnInit() {
  }

  getFilteredSelectionList() {
    console.log('model');
    this._pizzaService.getPizzaList(this.model.pizzaTypeSelectionType).subscribe(res => {
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