"use strict";
var FilterModel = (function () {
    function FilterModel() {
        this._pizzaTypeSelectionList = [];
        this._pizzaTypeSelectionList.push({ label: 'Alle anzeigen', value: 'ALL' });
        this._pizzaTypeSelectionList.push({ label: 'Nur Vegetarisch', value: 'V' });
        this._pizzaTypeSelectionList.push({ label: 'Nur mit Fleisch', value: 'C' });
        this._seledctedPizzaType = 'All';
    }
    Object.defineProperty(FilterModel.prototype, "pizzaTypeSelectionList", {
        get: function () {
            return this._pizzaTypeSelectionList;
        },
        set: function (value) {
            this._pizzaTypeSelectionList = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterModel.prototype, "pizzaTypeSelectionType", {
        get: function () {
            return this._seledctedPizzaType;
        },
        set: function (value) {
            this._seledctedPizzaType = value;
        },
        enumerable: true,
        configurable: true
    });
    return FilterModel;
}());
exports.FilterModel = FilterModel;
//# sourceMappingURL=filter.model.js.map