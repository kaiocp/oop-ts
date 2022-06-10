import { Cliente } from "./Cliente.js";

export abstract class Conta {
    constructor(
        protected _numero: String,
        protected _saldo: number,
        protected _cliente: Cliente
    ) {}


    public get numero(): String {
        return this._numero;
    }
    public set numero(value: String) {
        this._numero = value;
    }
    public get saldo(): number {
        return this._saldo;
    }
    public set saldo(value: number) {
        this._saldo = value;
    }
    public get cliente(): Cliente {
        return this._cliente;
    }
    public set cliente(value: Cliente) {
        this._cliente = value;
    }

    protected abstract depositar(value: number, data: Date): void;
    
    protected abstract sacar(value: number): void;
}