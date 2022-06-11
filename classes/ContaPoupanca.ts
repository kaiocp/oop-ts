import { Conta } from "./Conta.js";
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { SaldoAniversario } from "./SaldoAniversario.js";

export class ContaPoupanca extends Conta {
    private depositos: Array<SaldoAniversario> = [];

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

    public depositar(value: number, dataDeposito: Date): void {
        let deposito: SaldoAniversario = new SaldoAniversario(value, dataDeposito);
        this.depositos.push(deposito);
    }

    public sacar(value: number, dataResgate: Date): void {
        this.atualizaSaldoConformeRendimentos(dataResgate);        
        if (value <= this._saldo) {
            this._saldo -= value;
        } else {
            console.log('Saldo insuficiente para realizar essa operação.')
        }
    }
    public resgatar(contaDestino: ContaCorrente, value: number, dataResgate: Date): void {
        this.atualizaSaldoConformeRendimentos(dataResgate);

        if (value <= this._saldo) {
            contaDestino.saldo = value;
            this._saldo -= value;
        } else {
            console.log('Saldo insuficiente para realizar essa operação.')
        }
    }
    public atualizaSaldoConformeRendimentos(dataResgate: Date): void {
        this.saldo = 0;
        this.depositos.forEach((valor) => {
            this.saldo += valor.retornaRendimento(dataResgate)
        })
    }
}