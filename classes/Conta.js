"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
var Conta = /** @class */ (function () {
    function Conta(_numero, _saldo) {
        this._numero = _numero;
        this._saldo = _saldo;
    }
    Object.defineProperty(Conta.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        set: function (value) {
            this._numero = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "saldo", {
        get: function () {
            return this._saldo;
        },
        set: function (value) {
            this._saldo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "cliente", {
        get: function () {
            return this._cliente;
        },
        set: function (value) {
            this._cliente = value;
        },
        enumerable: false,
        configurable: true
    });
    return Conta;
}());
exports.Conta = Conta;
