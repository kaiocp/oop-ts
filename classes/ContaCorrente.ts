import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

export class ContaCorrente extends Conta {
    private _limite: number

    constructor(
        _numero: String,
        _saldo: number,
        _cliente: Cliente,
    ) { super(_numero, _saldo, _cliente), this.defineLimite() }

    public get limite(): number {
        return this._limite;
    }
    public set limite(value: number) {
        this._limite = value;
    }

    public depositar(value: number): void {
        this._saldo = value;
    }
    public sacar(value: number): void {
        if (value > this._saldo + this._limite) {
            console.log('Saldo insuficiente para realizar essa operação.')
        } else {
            this._saldo -= value;
        }
    }
    public transferir(value: number, conta: ContaCorrente): void {
        if (value > this._saldo + this._limite) {
            console.log('Saldo insuficiente para realizar essa operação.')
        } else {
            this._saldo -= value;
            conta.saldo += value;
        }
    }
    public transferirParaPoupanca(contaPoupanca: ContaPoupanca, value: number, dataDeposito: Date): void {
        if (value > this._saldo + this._limite) {
            console.log('Saldo insuficiente para realizar essa operação.')
        } else {            
            this._saldo -= value;
            contaPoupanca.depositar(value, dataDeposito);
        }
    }

    private defineLimite(): void {
        this.cliente.vip ? this._limite = 30000 : this._limite = 50;
    }
}