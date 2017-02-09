import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { endpointUrl } from '../../../consts';
import {OrderHistory} from '../models/order-history.model';


@Injectable()
export class OrderHistoryService {
  constructor(private http: Http) {

  }
  getHistoryList(): Observable<Array<OrderHistory>> {
    let endpoint_url: string = endpointUrl + 'historyorderlist?token=' + localStorage.getItem('auth_token');

    return this.http
      .get(endpoint_url, { method: 'Get' })
      .map((responseData) => {
        return responseData.json();
      })
      .map((historyList: Array<any>) => {
        let result: Array<OrderHistory> = [];
        if (historyList) {
          historyList.forEach((history) => {
            result.push(
              new OrderHistory(history.customerId, new Date(history._date), history._item)
            );
          })
        }
        console.log(result.length + "History erhalten");
        return result;
      })
  }
}