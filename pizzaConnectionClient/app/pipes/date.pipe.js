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
var DatePipe = (function () {
    function DatePipe() {
    }
    DatePipe.prototype.transform = function (date) {
        if (date) {
            var d = '';
            date.getDate() < 10 ? d = '0' + date.getDate() : d = date.getDate().toString();
            d += ".";
            (date.getMonth() + 1) < 10 ? d += '0' + (date.getMonth() + 1) : d += (date.getMonth() + 1).toString();
            d += "." + date.getFullYear() + " ";
            date.getHours() < 10 ? d += '0' + date.getHours() : d += date.getHours().toString();
            d += ":";
            date.getMinutes() < 10 ? d += '0' + date.getMinutes() : d += date.getMinutes().toString();
            return d;
        }
        return "";
    };
    DatePipe = __decorate([
        core_1.Pipe({ name: 'datepipe' }), 
        __metadata('design:paramtypes', [])
    ], DatePipe);
    return DatePipe;
}());
exports.DatePipe = DatePipe;
//# sourceMappingURL=date.pipe.js.map