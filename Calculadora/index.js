const Calculadora = require('./src/calculadora');

let resultadoSoma = Calculadora.soma(10, 46);
let resultadoSub = Calculadora.subtracao(87, 37);
let resultadoMul = Calculadora.multiplicacao(4, 5);
let resultadoDiv = Calculadora.divisao(81, 9);
let resultadoPor = Calculadora.porcentagem(100, 60);

console.log("Soma = " + resultadoSoma);
console.log("Subtracao = " + resultadoSub);
console.log("Multiplicacao = " + resultadoMul);
console.log("Divisao = " + resultadoDiv);
console.log("Porcentagem = " + resultadoPor);