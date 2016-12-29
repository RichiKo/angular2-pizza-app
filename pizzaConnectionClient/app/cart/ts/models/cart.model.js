"use strict";
var cartitem_model_1 = require('./cartitem.model');
var Cart = (function () {
    function Cart() {
        this._content = new Array();
    }
    Object.defineProperty(Cart.prototype, "content", {
        get: function () {
            return this._content;
        },
        enumerable: true,
        configurable: true
    });
    Cart.prototype.flush = function () {
        this._content = new Array();
    };
    Object.defineProperty(Cart.prototype, "sumTotal", {
        get: function () {
            var sum = 0;
            this._content.forEach(function (item) {
                sum += item.subTotal;
            });
            return sum;
        },
        enumerable: true,
        configurable: true
    });
    Cart.prototype.addItem = function (item) {
        var cartItem = new cartitem_model_1.CartItem(item.pizzaId, item.price, item.image, item.size, item.name);
        var found = false;
        this._content.forEach(function (currentItem) {
            // increase amount if found
            if (currentItem.pizzaId === cartItem.pizzaId) {
                currentItem.increaseAmount();
                found = true;
            }
        });
        if (!found) {
            // put new pizza if not found
            this._content.push(cartItem);
        }
    };
    Cart.prototype.decreaseItem = function (item) {
        var _this = this;
        var cartItem = new cartitem_model_1.CartItem(item.pizzaId, item.price, item.image, item.size, item.name);
        this._content.forEach(function (currentItem, index) {
            if (currentItem.pizzaId === cartItem.pizzaId) {
                if (currentItem.decreaseAmount() === 0) {
                    _this._content.splice(index, 1);
                }
            }
        });
    };
    Cart.prototype.removeItem = function (item) {
        var _this = this;
        var cartItem = new cartitem_model_1.CartItem(item.pizzaId, item.price, item.image, item.size, item.name);
        this._content.forEach(function (currentItem, index) {
            if (currentItem.pizzaId === cartItem.pizzaId) {
                _this._content.splice(index, 1);
            }
        });
    };
    return Cart;
}());
exports.Cart = Cart;
//# sourceMappingURL=cart.model.js.map