"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    function Pessoa(_cpf, _nome, _telefone) {
        this._cpf = _cpf;
        this._nome = _nome;
        this._telefone = _telefone;
        this._cpf = _cpf;
        this._nome = _nome;
        this._telefone = _telefone;
    }
    Object.defineProperty(Pessoa.prototype, "cpf", {
        get: function () {
            return this._cpf;
        },
        set: function (value) {
            this._cpf = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (value) {
            this._nome = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "telefone", {
        get: function () {
            return this._telefone;
        },
        set: function (value) {
            this._telefone = value;
        },
        enumerable: false,
        configurable: true
    });
    return Pessoa;
}());
exports.Pessoa = Pessoa;
