"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var Pessoa_js_1 = require("./Pessoa.js");
var Cliente = /** @class */ (function (_super) {
    __extends(Cliente, _super);
    function Cliente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Cliente.prototype, "vip", {
        get: function () {
            return this._vip;
        },
        set: function (value) {
            this._vip = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "enderecos", {
        get: function () {
            return this._enderecos;
        },
        enumerable: false,
        configurable: true
    });
    Cliente.prototype.adicionaEndereco = function (value) {
        this._enderecos.push(value);
    };
    Object.defineProperty(Cliente.prototype, "conta", {
        get: function () {
            return this._conta;
        },
        set: function (value) {
            this._conta = value;
        },
        enumerable: false,
        configurable: true
    });
    return Cliente;
}(Pessoa_js_1.Pessoa));
exports.Cliente = Cliente;
