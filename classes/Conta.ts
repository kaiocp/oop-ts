import { Cliente } from "./Cliente.js";

export abstract class Conta {
    private _numero: String;
    private _saldo: Number;
    private _cliente: Cliente;

    public get numero(): String {
        return this._numero;
    }
    public set numero(value: String) {
        this._numero = value;
    }
    public get saldo(): Number {
        return this._saldo;
    }
    public set saldo(value: Number) {
        this._saldo = value;
    }
    public get cliente(): Cliente {
        return this._cliente;
    }
    public set cliente(value: Cliente) {
        this._cliente = value;
    }

    abstract depositar(value: Number): void;
    abstract sacar(value: Number): void;
}