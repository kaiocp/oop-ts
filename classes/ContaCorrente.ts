import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";

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
        if ((this._saldo >= 0) && (value <= this._saldo)) {
            this._saldo = value;
        } else {
            console.log('Saldo insuficiente para realizar essa operação.')
        }
    }
    public transferir(value: number, conta: ContaCorrente): void {
        if (this._saldo >= 0) {
            conta.saldo = value;
            this._saldo -= value;
        }
    }
    private defineLimite(): void {
        this.cliente.vip ? this._limite = 30000 : this._limite = 50;
        this._saldo = this._limite;
    }
}