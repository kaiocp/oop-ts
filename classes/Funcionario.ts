import { Cargo } from "./Cargo.js";
import { Pessoa } from "./Pessoa.js";

export class Funcionario extends Pessoa {

    constructor(
        _cpf: String,
        _nome: String,
        _telefone: String,
        private _salario: Number,
        public cargo: Cargo
    ) { super (_cpf, _nome, _telefone) }

    public get salario(): Number {
        return this._salario;
    }
    public set salario(value: Number) {
        this._salario = value;
    }
}