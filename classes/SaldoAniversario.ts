export class SaldoAniversario {
    constructor(
        public valor: number,
        public data: Date    
    ) {}

    public retornaRendimento(): number {
        const qtdMeses = this.getMonthDifference(this.data, new Date());
        const rendimento = this.valor + (this.valor * (0.05 * qtdMeses));
        return rendimento;
    }

    public getMonthDifference(startDate: Date, endDate: Date): number {
        return (
          endDate.getMonth() -
          startDate.getMonth() +
          12 * (endDate.getFullYear() - startDate.getFullYear())
        );
      }
}