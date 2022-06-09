import { Endereco } from "./Endereco.js";
import { Pessoa } from "./Pessoa.js";
import { Conta } from "./Conta.js";

export class Cliente extends Pessoa {
    private _vip: Boolean;
    private _enderecos: Array<Endereco>;
    private _conta: Conta;
    
    public get vip(): Boolean {
        return this._vip;
    }
    public set vip(value: Boolean) {
        this._vip = value;
    }
    public get enderecos(): Array<Endereco> {
        return this._enderecos;
    }
    public adicionaEndereco(value: Endereco) {
        this._enderecos.push(value);
    }
    public get conta(): Conta {
        return this._conta;
    }
    public set conta(value: Conta) {
        this._conta = value;
    }
}