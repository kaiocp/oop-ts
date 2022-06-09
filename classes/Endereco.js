"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endereco = void 0;
var Endereco = /** @class */ (function () {
    function Endereco(_cep, _logradouro, _numero, _complemento, _cidade, _uf) {
        this._cep = _cep;
        this._logradouro = _logradouro;
        this._numero = _numero;
        this._complemento = _complemento;
        this._cidade = _cidade;
        this._uf = _uf;
    }
    Object.defineProperty(Endereco.prototype, "cep", {
        get: function () {
            return this._cep;
        },
        set: function (value) {
            this._cep = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Endereco.prototype, "logradouro", {
        get: function () {
            return this._logradouro;
        },
        set: function (value) {
            this._logradouro = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Endereco.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        set: function (value) {
            this._numero = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Endereco.prototype, "complemento", {
        get: function () {
            return this._complemento;
        },
        set: function (value) {
            this._complemento = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Endereco.prototype, "cidade", {
        get: function () {
            return this._cidade;
        },
        set: function (value) {
            this._cidade = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Endereco.prototype, "uf", {
        get: function () {
            return this._uf;
        },
        set: function (value) {
            this._uf = value;
        },
        enumerable: false,
        configurable: true
    });
    return Endereco;
}());
exports.Endereco = Endereco;
