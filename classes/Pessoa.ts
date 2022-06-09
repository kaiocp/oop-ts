export abstract class Pessoa {
    constructor(
        protected _cpf: String,
        protected _nome: String,
        protected _telefone: String,
    ) {
        this._cpf = _cpf;
        this._nome = _nome;
        this._telefone = _telefone;
    }
    public get cpf(): String {
        return this._cpf;
    }
    public set cpf(value: String) {
        this._cpf = value;
    }
    public get nome(): String {
        return this._nome;
    }
    public set nome(value: String) {
        this._nome = value;
    }
    public get telefone(): String {
        return this._telefone;
    }
    public set telefone(value: String) {
        this._telefone = value;
    }
}