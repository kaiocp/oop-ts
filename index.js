"use strict";
// TESTANDO CLASSE FUNCIONARIO
Object.defineProperty(exports, "__esModule", { value: true });
// import { Cargo } from "./classes/Cargo.js";
// import { Funcionario } from "./classes/Funcionario.js";
// let funcionario = new Funcionario("111", "Joaozinho", "12345678", 1200.00, new Cargo('Gerente'));
// console.log(funcionario);
// funcionario.cpf = '222';
// funcionario.nome = 'Mariazinha';
// funcionario.cpf = '987654321';
// funcionario.cargo.nome = 'Diretor';
// console.log('--------')
// console.log(funcionario);
// TESTANDO CLASSE CLIENTE
// let cliente = new Cliente(
//     '123', 
//     'Tobias', 
//     '12345678', 
//     false, 
//     [new Endereco('123456', 'Rua A', '13', 'ap 123', 'Salvador', 'BA'), new Endereco('13837', 'Rua B', '31', 'ap 494', 'Sao Paulo', 'SP')])
// ;
// console.log(cliente);
// TESTANDO CLASSE CONTACORRENTE
// let cliente = new ContaCorrente(
//     '123-4',
//     1000, 
//         new Cliente('12345678', 
//         'Paula', 
//         '1234-5678',
//         true, 
//         [new Endereco('123456', 'Rua A', '13', 'ap 123', 'Salvador', 'BA')]
//             )
//     );
// console.log(cliente);
// console.log('-------------');
// console.log(cliente.limite);
// console.log(cliente.saldo);
// cliente.sacar(30001);
// TESTANDO CLASSE CONTA POUPANCA
function getMonthDifference(startDate, endDate) {
    return (endDate.getMonth() -
        startDate.getMonth() +
        12 * (endDate.getFullYear() - startDate.getFullYear()));
}
console.log(typeof (getMonthDifference(new Date(), new Date("August 17, 2022"))));
