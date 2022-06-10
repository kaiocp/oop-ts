import { Conta } from "./Conta.js";
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { SaldoAniversario } from "./SaldoAniversario.js";

export class ContaPoupanca extends Conta {
    constructor(
        _numero: String, 
        _saldo: number, 
        _cliente: Cliente,
        private _variacao: number
    ) { (super(_numero, _saldo, _cliente)) }

    public get variacao(): number {
        return this._variacao;
    }
    public set variacao(value: number) {
        this._variacao = value;
    }

    public depositar(value: number, data: Date): void {
        let deposito = new SaldoAniversario(value, data);
        // falta implementar algumas coisas ainda
    }

    public sacar(value: number): void {
        if ((this._saldo >= 0) && (value <= this._saldo)) {
            this._saldo = value;
        } else {
            console.log('Saldo insuficiente para realizar essa operação.')
        }
    }
    public resgatar(contaDestino: ContaCorrente, value: number): void {
        if ((this._saldo >= 0) && (value <= this._saldo)) {
            contaDestino.saldo = value;
        } else {
            console.log('Saldo insuficiente para realizar essa operação.')
        }
    }
}