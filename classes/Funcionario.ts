import { Cargo } from "./Cargo.js";
import {Pessoa} from "./Pessoa.js";

export class Funcionario extends Pessoa {
    private _salario: Number;
    private _cargo: Cargo;

    public get salario(): Number {
        return this._salario;
    }
    public set salario(value: Number) {
        this._salario = value;
    }
    public get cargo(): Cargo {
        return this._cargo;
    }
    public set cargo(value: Cargo) {
        this._cargo = value;
    }
}