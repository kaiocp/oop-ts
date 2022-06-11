import { Cliente } from "./classes/Cliente.js";
import { Conta } from "./classes/Conta.js";
import { ContaCorrente } from "./classes/ContaCorrente.js";
import { Endereco } from "./classes/Endereco.js";
import { ContaPoupanca } from "./classes/ContaPoupanca.js";
import { Cargo } from "./classes/Cargo.js";
import { Funcionario } from "./classes/Funcionario.js";

// a) Crie dois funcionários do banco, um gerente e um atendente.

let gerente = new Funcionario(
    '275.932.860-02', 
    'Maria', 
    '9999-8888', 
    5200, 
    new Cargo('Gerente')
);

let atendente = new Funcionario(
    '071.558.140-67',
    'José',
    '7777-6666',
    2600,
    new Cargo('Atendente')
);

console.log(gerente);
console.log('-------------------------------------------');
console.log(atendente);
console.log('-------------------------------------------');

// b. Crie uma conta corrente e uma conta poupança para 2 clientes (um vip e um não vip)
// do banco, um deles com um endereço apenas e outro com dois endereços
// cadastrados.

let cliente1Paula = new Cliente(
    '237.576.470-68',
    'Paula', 
    '5555-4444',
    true,
    [
        new Endereco(
            '10100-10',
            'Rua A',
            '10',
            'Ap 101',
            'Salvador',
            'BA'),
        new Endereco(
            '20200-20',
            'Rua B',
            '20',
            'Ap 202',
            'Salvador',
            'BA'
        )
    ]
);


let cliente2Joao = new Cliente(
    '711.243.410-64',
    'Joao',
    '3333-2222',
    false,
    [
        new Endereco(
            '30300',
            'Rua C',
            '30',
            'Ap 303',
            'Recife',
            'PE'
        )
    ]
);

let contaCorrentePaula = new ContaCorrente(
    '1010-1',
    0,
    cliente1Paula
);

let contaPoupancaPaula = new ContaPoupanca(
    '1010-1',
    0,
    cliente1Paula,
    51
);

let contaCorrenteJoao = new ContaCorrente(
    '2020-2',
    0,
    cliente2Joao
);

let contaPoupancaJoao = new ContaPoupanca(
    '2020-2',
    0,
    cliente2Joao, 
    51
)

// e. Cliente NÃO VIP:
// i. Faça um depósito de um salário mínimo na conta corrente do cliente não vip.
contaCorrenteJoao.depositar(1212);

// ii. Faça uma transferência de 5% de um salário mínimo da conta corrente do
// cliente não vip para a sua conta poupança no dia 04/06/2022.
contaCorrenteJoao.transferirParaPoupanca(contaPoupancaJoao, (0.05*1212), new Date(2022, 6, 4));

// iii. Faça um saque de 50% de um salário mínimo da conta corrente do cliente
// não vip e exiba o saldo em conta após a ação.
contaCorrenteJoao.sacar(0.5*1212)
console.log(contaCorrenteJoao.saldo);
// iv. Tente fazer outro saque de 50% de um salário mínimo da conta corrente do
// cliente não vip.
contaCorrenteJoao.sacar(0.5*1212)
// v. Faça um depósito de 50 reais na conta poupança do cliente não vip no dia
// 09/06/2022.
// vi. Faça um resgate de 60 reais da conta poupança no dia 09/07/2022.
contaPoupancaJoao.resgatar(contaCorrenteJoao, 60, new Date(2022,7,9));
console.log(contaCorrenteJoao.saldo);
console.log(contaPoupancaJoao.saldo);

console.log('-------------------------------------------');
// f. Cliente VIP:
// i. Faça um depósito de 50 salários mínimos na conta corrente do cliente vip.
contaCorrentePaula.depositar(50 * 1212);
// ii. Faça uma transferência de 20 salários mínimos da conta corrente do cliente
// vip para a sua conta poupança no dia 05/06/2022.
contaCorrentePaula.transferirParaPoupanca(contaPoupancaPaula, 20*1212, new Date(2022, 6, 5));
// iii. Faça um saque de 50000 reais da conta corrente do cliente vip e exiba o
// saldo em conta após a ação.
contaCorrentePaula.sacar(50000);
console.log(contaCorrentePaula.saldo);
// iv. Tente fazer outro saque de 50000 reais da conta corrente do cliente vip.
contaCorrentePaula.sacar(50000);
console.log(contaCorrentePaula.saldo);




