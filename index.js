"use strict";
// TESTANDO CLASSE FUNCIONARIO
Object.defineProperty(exports, "__esModule", { value: true });
var Cliente_js_1 = require("./classes/Cliente.js");
var Endereco_js_1 = require("./classes/Endereco.js");
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
var cliente = new Cliente_js_1.Cliente('123', 'Tobias', '12345678', false, [new Endereco_js_1.Endereco('123456', 'Rua A', '13', 'ap 123', 'Salvador', 'BA'), new Endereco_js_1.Endereco('13837', 'Rua B', '31', 'ap 494', 'Sao Paulo', 'SP')]);
console.log(cliente);
