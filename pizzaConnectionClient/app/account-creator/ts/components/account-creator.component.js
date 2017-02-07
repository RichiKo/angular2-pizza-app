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
var account_creator_service_1 = require('../services/account-creator.service');
var account_model_1 = require('../../../login/ts/models/account.model');
var auth_service_1 = require('../../../login/ts/services/auth.service');
var AccountCreatorComponent = (function () {
    function AccountCreatorComponent(accountService, authService, router, route, account) {
        this.accountService = accountService;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.account = account;
        this.msgs = [];
        this._createNewAccount = false;
        if (this.route.snapshot.params['createNewAccount'] == 'true') {
            this._createNewAccount = true;
        }
    }
    AccountCreatorComponent.prototype.ngOnInit = function () {
        this.salutations = [];
        this.salutations.push({ label: 'Bitte wählen', value: '' });
        this.salutations.push({ label: 'Frau', value: 'Frau' });
        this.salutations.push({ label: 'Herr', value: 'Herr' });
    };
    AccountCreatorComponent.prototype.creatAccount = function () {
        var _this = this;
        console.log('validate', this.account.validate(this._createNewAccount));
        if (!this.account.validate(this._createNewAccount)) {
            this.msgs.push({ severity: 'error', summary: 'Fehler!', detail: '(createAccount)Bitte überprüfen Sie Ihre Eingabe!' });
        }
        else {
            this.accountService.createAccount(this.account).subscribe(function (res) {
                if (res.statusCode == 'OK') {
                    _this.msgs.push({ severity: 'info', summary: 'Aktion erfolgreich!', detail: 'Das Benutzerkonto wurde erstellt!' });
                    _this.authService.login(_this.account.userName, _this.account.password).subscribe(function (res) {
                        if (res.authToken.success == true) {
                            _this.account.id = res.id;
                            _this.router.navigate(['confirmation']);
                        }
                        else {
                            _this.msgs.push({ severity: 'error', summary: 'Fehler!', detail: 'Sie konnten nicht angemeldet werden' });
                        }
                    });
                }
                else {
                    _this.msgs.push({ severity: 'error', summary: 'Fehler!', detail: res.statusMessage });
                }
            });
        }
    };
    AccountCreatorComponent.prototype.orderDirect = function () {
        if (!this.account.validate(this._createNewAccount)) {
            this.msgs.push({ severity: 'error', summary: 'Fehler!', detail: 'Bitte überprüfen Sie Ihre Eingabe!' });
        }
        else {
            this.router.navigate(['confirmation']);
        }
    };
    Object.defineProperty(AccountCreatorComponent.prototype, "createNewAccount", {
        get: function () {
            return this._createNewAccount;
        },
        enumerable: true,
        configurable: true
    });
    AccountCreatorComponent = __decorate([
        core_1.Component({
            selector: 'account-creator',
            templateUrl: 'app/account-creator/templates/account-creator.html',
            styleUrls: ['app/css/styles.css']
        }), 
        __metadata('design:paramtypes', [account_creator_service_1.AccountCreatorService, auth_service_1.AuthService, router_1.Router, router_1.ActivatedRoute, account_model_1.Account])
    ], AccountCreatorComponent);
    return AccountCreatorComponent;
}());
exports.AccountCreatorComponent = AccountCreatorComponent;
//# sourceMappingURL=account-creator.component.js.map