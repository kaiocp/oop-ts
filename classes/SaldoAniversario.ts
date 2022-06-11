export class SaldoAniversario {
    constructor(
        public valor: number,
        public dataDeposito: Date
    ) {}

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