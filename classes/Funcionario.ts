import { Cargo } from "./Cargo.js";
import { Pessoa } from "./Pessoa.js";

export class Funcionario extends Pessoa {
    constructor(
        _cpf: String,
        _nome: String,
        _telefone: String,
        private _salario: number,
        private _cargo: Cargo
    ) { super (_cpf, _nome, _telefone) }

    public get salario(): number {
        return this._salario;
    }
    public set salario(value: number) {
        this._salario = value;
    }
    public get cargo(): Cargo {
        return this._cargo;
    }
    public set cargo(value: Cargo) {
        this._cargo = value;
    }
}