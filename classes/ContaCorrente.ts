import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    private _limite: Number;

    public get limite(): Number {
        return this._limite;
    }
    public set limite(value: Number) {
        this._limite = value;
    }

    public depositar(value: Number): void {
        // Implementar
    }
    public sacar(value: Number): void {
        // Implementar
    }
}