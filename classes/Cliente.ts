import { Endereco } from "./Endereco.js";
import { Pessoa } from "./Pessoa.js";
import { Conta } from "./Conta.js";

export class Cliente extends Pessoa {
    private _conta: Conta;

    constructor(
        _cpf: String,
        _nome: String,
        _telefone: String,
        private _vip: Boolean,
        private _enderecos: Array<Endereco>,
        
    ) { super(_cpf, _nome, _telefone) }

    
    public get vip(): Boolean {
        return this._vip;
    }
    public set vip(value: Boolean) {
        this._vip = value;
    }
    public get enderecos(): Array<Endereco> {
        return this._enderecos;
    }
    public set enderecos(value: Array<Endereco>) {
        this._enderecos = value;
    }


}