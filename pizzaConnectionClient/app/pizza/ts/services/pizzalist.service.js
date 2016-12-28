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
require("rxjs/Rx");
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var pizza_model_1 = require('../models/pizza.model');
var consts_1 = require('../../../consts');
var PizzaListService = (function () {
    function PizzaListService(http) {
        this.http = http;
    }
    PizzaListService.prototype.getPizzaList = function () {
        var endpoint_url = consts_1.endpointUrl + 'pizzalist';
        return this.http
            .get(endpoint_url, { method: 'Get' })
            .map(function (responseData) {
            return responseData.json();
        })
            .map(function (pizzaList) {
            var result = [];
            if (pizzaList) {
                pizzaList.forEach(function (pizza) {
                    result.push(new pizza_model_1.Pizza(pizza.id, pizza.name, pizza.size, pizza.price, pizza.image));
                });
            }
            console.log(result.length + "Pizzen erhalten");
            return result;
        });
    };
    PizzaListService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PizzaListService);
    return PizzaListService;
}());
exports.PizzaListService = PizzaListService;
//# sourceMappingURL=pizzalist.service.js.map