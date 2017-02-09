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
var auth_service_1 = require('../services/auth.service');
var account_model_1 = require('../models/account.model');
var LoginComponent = (function () {
    function LoginComponent(authService, router, account, activatedRouter) {
        this.authService = authService;
        this.router = router;
        this.account = account;
        this.activatedRouter = activatedRouter;
        this.msgs = [];
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log('Trying to login with user' + this.email);
        var forward = '';
        console.log('snapshot', this.activatedRouter.snapshot.params['fw']);
        if (this.activatedRouter.snapshot.params['fw']) {
            forward = this.activatedRouter.snapshot.params['fw'];
            console.log('fw', forward);
        }
        this.authService.login(this.email, this.passwd)
            .subscribe(function (result) {
            if (result.authToken.success === true) {
                _this.account.id = result.id;
                _this.account.salutation = result.salutation;
                _this.account.firstName = result.firstName;
                _this.account.lastName = result.lastName;
                _this.account.streetName = result.streetName;
                _this.account.zipCode = result.zipCode;
                _this.account.cityName = result.cityName;
                _this.router.navigate([forward]);
            }
            else {
                _this.msgs.push({
                    severity: 'error',
                    summary: 'Fehler!',
                    detail: 'Sie konnten nicht angemeldet werden'
                });
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: 'app/login/templates/login.html',
            styleUrls: ['app/css/styles.css']
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router, account_model_1.Account, router_1.ActivatedRoute])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map