import { Cargo } from "./classes/Cargo.js";
import { Funcionario } from "./classes/Funcionario.js";

let funcionario = new Funcionario("111", "Joaozinho", "12345678", 1200.00, new Cargo('Gerente'));

console.log(funcionario);
funcionario.cpf = '222';
funcionario.nome = 'Mariazinha';
funcionario.cpf = '987654321';
funcionario.cargo.nome = 'Diretor';

console.log('--------')
console.log(funcionario);