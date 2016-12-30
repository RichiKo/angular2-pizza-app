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
var OrderOptionComponent = (function () {
    function OrderOptionComponent(router) {
        this.router = router;
    }
    OrderOptionComponent.prototype.guestOrder = function () {
        this.router.navigate(['accountcreator', false]);
    };
    OrderOptionComponent.prototype.login = function () {
        this.router.navigate(['login']);
    };
    OrderOptionComponent.prototype.createAccount = function () {
        this.router.navigate(['accountcreator', true]);
    };
    OrderOptionComponent = __decorate([
        core_1.Component({
            selector: 'order-option',
            templateUrl: 'app/order-option/templates/order-option.html',
            styleUrls: ['app/css/styles.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], OrderOptionComponent);
    return OrderOptionComponent;
}());
exports.OrderOptionComponent = OrderOptionComponent;
//# sourceMappingURL=order-option.component.js.map