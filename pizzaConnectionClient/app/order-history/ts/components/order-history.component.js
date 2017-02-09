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
var core_1 = require('@angular/core');
var order_history_service_1 = require('../services/order-history.service');
var OrderHistoryComponent = (function () {
    function OrderHistoryComponent(orderHistoryService) {
        var _this = this;
        this.orderHistoryService = orderHistoryService;
        this.orderHistoryService.getHistoryList().subscribe(function (res) { return _this._orderHistoryList = res; });
    }
    Object.defineProperty(OrderHistoryComponent.prototype, "historyList", {
        get: function () {
            return this._orderHistoryList;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderHistoryComponent.prototype, "hasContent", {
        get: function () {
            if (this._orderHistoryList == undefined) {
                return false;
            }
            return this._orderHistoryList.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    OrderHistoryComponent = __decorate([
        core_1.Component({
            selector: 'order-history',
            templateUrl: 'app/order-history/templates/order-history.html',
            styleUrls: ['app/css/styles.css']
        }), 
        __metadata('design:paramtypes', [order_history_service_1.OrderHistoryService])
    ], OrderHistoryComponent);
    return OrderHistoryComponent;
}());
exports.OrderHistoryComponent = OrderHistoryComponent;
//# sourceMappingURL=order-history.component.js.map