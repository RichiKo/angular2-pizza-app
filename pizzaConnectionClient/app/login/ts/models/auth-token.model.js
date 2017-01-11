"use strict";
var AuthToken = (function () {
    function AuthToken(_success, _token) {
        this._success = _success;
        this._token = _token;
    }
    Object.defineProperty(AuthToken.prototype, "success", {
        get: function () {
            return this._success;
        },
        set: function (value) {
            this._success = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthToken.prototype, "token", {
        get: function () {
            return this._token;
        },
        set: function (value) {
            this._token = value;
        },
        enumerable: true,
        configurable: true
    });
    AuthToken.fromJson = function (data) {
        return new AuthToken(data.succes, data.token);
    };
    return AuthToken;
}());
exports.AuthToken = AuthToken;
//# sourceMappingURL=auth-token.model.js.map