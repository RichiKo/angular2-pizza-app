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
var pizzadetail_service_1 = require('../services/pizzadetail.service');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var cart_model_1 = require('../../../cart/ts/models/cart.model');
var cartitem_model_1 = require('../../../cart/ts/models/cartitem.model');
var PizzaDetailComponent = (function () {
    function PizzaDetailComponent(pizzaDetailService, route, location, cart) {
        var _this = this;
        this.pizzaDetailService = pizzaDetailService;
        this.route = route;
        this.location = location;
        this.cart = cart;
        var id = this.route.snapshot.params['id'];
        this.pizzaDetailService.getPizzaDetail(id).subscribe(function (pizzaDetail) {
            _this._pizzaDetail = pizzaDetail;
        }, function (err) { return console.error(err); }, function () { return console.log('done: ' + _this._pizzaDetail.image); });
    }
    PizzaDetailComponent.prototype.addToCart = function (pizzaDetail) {
        this.cart.addItem(new cartitem_model_1.CartItem(pizzaDetail.id, pizzaDetail.price, pizzaDetail.image, pizzaDetail.size, pizzaDetail.name));
    };
    Object.defineProperty(PizzaDetailComponent.prototype, "currentAmount", {
        get: function () {
            var _this = this;
            var currentAmount = 0;
            this.cart.content.forEach(function (currentItem, index) {
                if (currentItem.pizzaId === _this._pizzaDetail.id) {
                    currentAmount = _this.cart.content[index].amount;
                }
            });
            return currentAmount;
        },
        enumerable: true,
        configurable: true
    });
    PizzaDetailComponent.prototype.historyBack = function () {
        console.log('back');
        this.location.back();
    };
    Object.defineProperty(PizzaDetailComponent.prototype, "pizzaDetail", {
        get: function () {
            return this._pizzaDetail;
        },
        enumerable: true,
        configurable: true
    });
    PizzaDetailComponent = __decorate([
        core_1.Component({
            selector: 'pizzadetail',
            templateUrl: 'app/pizza/templates/pizzadetail.html',
            styleUrls: ['app/css/styles.css']
        }), 
        __metadata('design:paramtypes', [pizzadetail_service_1.PizzaDetailService, router_1.ActivatedRoute, common_1.Location, cart_model_1.Cart])
    ], PizzaDetailComponent);
    return PizzaDetailComponent;
}());
exports.PizzaDetailComponent = PizzaDetailComponent;
//# sourceMappingURL=pizzadetail.component.js.map