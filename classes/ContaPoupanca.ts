import { Conta } from "./Conta.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { SaldoAniversario } from "./SaldoAniversario.js";

export class ContaPoupanca extends Conta {
    private _variacao: Number;
    private saldoAniversario: SaldoAniversario;
    

    public get variacao(): Number {
        return this._variacao;
    }
    public set variacao(value: Number) {
        this._variacao = value;
    }

    public depositar(value: Number): void {
        // Implementar
    }
    public sacar(value: Number): void {
        // Implementar
    }
    
    public resgatar(contaDestino: ContaCorrente, value: Number): void {
        // Implementar
    }


}