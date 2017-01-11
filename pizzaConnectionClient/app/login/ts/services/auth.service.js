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
var http_1 = require('@angular/http');
var user_auth_dto_model_1 = require('../../../data-transfer-objects/user-auth-dto.model');
var user_dto_model_1 = require('../../../data-transfer-objects/user-dto.model');
var consts_1 = require('../../../consts');
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.login = function (email, passwd) {
        console.log("Try to login with Email: " + email + " AND password: " + passwd);
        var endpoint_url = consts_1.endpointUrl + 'login';
        var userAuthDto = new user_auth_dto_model_1.UserAuthDto(email, passwd);
        var body = JSON.stringify(userAuthDto);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(endpoint_url, body, options)
            .map(function (res) { return res.json(); })
            .map(function (data) { return user_dto_model_1.UserDto.fromJson(data); })
            .do(function (res) {
            if (res.authToken.success) {
                localStorage.setItem('auth_token', res._authToken.token);
                console.log("Login erfolgreich: this.loggedIn =" + res._authToken.success);
            }
        });
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map