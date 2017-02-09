"use strict";
var date_pipe_1 = require('../../../pipes/date.pipe');
var OrderHistory = (function () {
    function OrderHistory(_customerId, _date, _cartItem) {
        this._customerId = _customerId;
        this._date = _date;
        this._cartItem = _cartItem;
    }
    Object.defineProperty(OrderHistory.prototype, "customerId", {
        get: function () {
            return this._customerId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderHistory.prototype, "date", {
        get: function () {
            return new date_pipe_1.DatePipe().transform(this._date);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderHistory.prototype, "cartItem", {
        get: function () {
            return this._cartItem;
        },
        enumerable: true,
        configurable: true
    });
    return OrderHistory;
}());
exports.OrderHistory = OrderHistory;
//# sourceMappingURL=order-history.model.js.map