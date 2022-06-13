export class SaldoAniversario {

    constructor(
        private _valor: number,
        private _dataDeposito: Date
    ) {}

    public get valor(): number {
      return this._valor;
    }
    public set valor(value: number) {
      this._valor = value;
    }
    public get dataDeposito(): Date {
      return this._dataDeposito;
    }
    public set dataDeposito(value: Date) {
      this._dataDeposito = value;
    }

    public retornaRendimento(dataResgate: Date): number {
        const qtdMeses = this.getMonthDifference(dataResgate);
        const rendimento = this.valor + (this.valor * (0.0063 * qtdMeses));
        return rendimento;
    }

    public getMonthDifference(endDate: Date): number {
        return (
          endDate.getMonth() -
          this.dataDeposito.getMonth() +
          12 * (endDate.getFullYear() - this.dataDeposito.getFullYear())
        );
      }
}