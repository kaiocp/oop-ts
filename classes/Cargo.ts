export class Cargo {
    private _nome: String;
    
    public get nome(): String {
        return this._nome;
    }
    public set nome(value: String) {
        this._nome = value;
    }
}