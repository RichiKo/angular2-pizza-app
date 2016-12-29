"use strict";
var CheckoutDto = (function () {
    function CheckoutDto() {
    }
    Object.defineProperty(CheckoutDto.prototype, "cart", {
        get: function () {
            return this._cart;
        },
        set: function (value) {
            this._cart = value;
        },
        enumerable: true,
        configurable: true
    });
    return CheckoutDto;
}());
exports.CheckoutDto = CheckoutDto;
//# sourceMappingURL=checkout-dto.model.js.map