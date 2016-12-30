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
var router_1 = require('@angular/router');
var cart_model_1 = require('../models/cart.model');
var checkout_service_1 = require('../../../checkout/ts/services/checkout.service');
var CartComponent = (function () {
    function CartComponent(router, cart, checkoutService) {
        this.router = router;
        this.cart = cart;
        this.checkoutService = checkoutService;
    }
    CartComponent.prototype.checkout = function () {
        // this.checkoutService.checkout().subscribe(res => {
        //   console.log('checkout:' + res.statusCode);
        // });
        // this.cart.flush();
        this.router.navigate(['orderoption']);
    };
    Object.defineProperty(CartComponent.prototype, "sumTotal", {
        get: function () {
            return this.cart.sumTotal;
        },
        enumerable: true,
        configurable: true
    });
    CartComponent.prototype.decreaseItemAmount = function (item) {
        this.cart.decreaseItem(item);
    };
    CartComponent.prototype.increaseItemAmount = function (item) {
        this.cart.addItem(item);
    };
    CartComponent.prototype.removeItem = function (item) {
        this.cart.removeItem(item);
    };
    Object.defineProperty(CartComponent.prototype, "hasContent", {
        get: function () {
            return this.cart.content.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    CartComponent = __decorate([
        core_1.Component({
            selector: 'cart',
            templateUrl: 'app/cart/templates/cart.html',
            styleUrls: ['app/css/styles.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, cart_model_1.Cart, checkout_service_1.CheckoutService])
    ], CartComponent);
    return CartComponent;
}());
exports.CartComponent = CartComponent;
//# sourceMappingURL=cart.component.js.map