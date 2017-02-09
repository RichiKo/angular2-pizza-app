"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require('rxjs/Rx');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var consts_1 = require('../../../consts');
var order_history_model_1 = require('../models/order-history.model');
var OrderHistoryService = (function () {
    function OrderHistoryService(http) {
        this.http = http;
    }
    OrderHistoryService.prototype.getHistoryList = function () {
        var endpoint_url = consts_1.endpointUrl + 'historyorderlist?token=' + localStorage.getItem('auth_token');
        return this.http
            .get(endpoint_url, { method: 'Get' })
            .map(function (responseData) {
            return responseData.json();
        })
            .map(function (historyList) {
            var result = [];
            if (historyList) {
                historyList.forEach(function (history) {
                    result.push(new order_history_model_1.OrderHistory(history.customerId, new Date(history._date), history._item));
                });
            }
            console.log(result.length + "History erhalten");
            return result;
        });
    };
    OrderHistoryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], OrderHistoryService);
    return OrderHistoryService;
}());
exports.OrderHistoryService = OrderHistoryService;
//# sourceMappingURL=order-history.service.js.map