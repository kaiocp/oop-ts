"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cargo = void 0;
var Cargo = /** @class */ (function () {
    function Cargo(nome) {
        this._nome = nome;
    }
    Object.defineProperty(Cargo.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (value) {
            this._nome = value;
        },
        enumerable: false,
        configurable: true
    });
    return Cargo;
}());
exports.Cargo = Cargo;
