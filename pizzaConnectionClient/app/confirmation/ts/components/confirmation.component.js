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
var cart_model_1 = require('../../../cart/ts/models/cart.model');
var account_model_1 = require('../../../login/ts/models/account.model');
var checkout_service_1 = require('../../../checkout/ts/services/checkout.service');
var ConfirmationComponent = (function () {
    function ConfirmationComponent(checkoutService, router, _account, _cart) {
        this.checkoutService = checkoutService;
        this.router = router;
        this._account = _account;
        this._cart = _cart;
        this.msgs = [];
    }
    Object.defineProperty(ConfirmationComponent.prototype, "account", {
        get: function () {
            return this._account;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfirmationComponent.prototype, "cart", {
        get: function () {
            console.log('CART', this._cart);
            return this._cart;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConfirmationComponent.prototype, "loggedIn", {
        get: function () {
            return this._account._id > 0;
        },
        enumerable: true,
        configurable: true
    });
    ConfirmationComponent.prototype.checkout = function () {
        var _this = this;
        this.checkoutService.checkout().subscribe(function (res) {
            if (res.statusCode == 'OK') {
                _this.cart.flush();
                _this.router.navigate(['checkout']);
            }
            else {
                _this.msgs.push({
                    severity: 'error',
                    summary: 'Fehler',
                    detail: res.statusMessage
                });
            }
        });
    };
    ConfirmationComponent = __decorate([
        core_1.Component({
            selector: 'confirmation',
            templateUrl: 'app/confirmation/templates/confirmation.html',
            styleUrls: ['app/css/styles.css']
        }), 
        __metadata('design:paramtypes', [checkout_service_1.CheckoutService, router_1.Router, account_model_1.Account, cart_model_1.Cart])
    ], ConfirmationComponent);
    return ConfirmationComponent;
}());
exports.ConfirmationComponent = ConfirmationComponent;
//# sourceMappingURL=confirmation.component.js.map