import { Component } from '@angular/core';
import { OrderHistory } from '../models/order-history.model';
import { OrderHistoryService } from '../services/order-history.service';

@Component({
  selector: 'order-history',
  templateUrl: 'app/order-history/templates/order-history.html',
  styleUrls: ['app/css/styles.css']
})

export class OrderHistoryComponent {

  private _orderHistoryList: OrderHistory[];

  constructor(private orderHistoryService: OrderHistoryService) {
    this.orderHistoryService.getHistoryList().subscribe(res => this._orderHistoryList = res);
  }

  get historyList(): Array<OrderHistory> {
    return this._orderHistoryList;
  }

  get hasContent(): boolean {
    if (this._orderHistoryList == undefined) {
      return false;
    }
    return this._orderHistoryList.length > 0;

  }
}