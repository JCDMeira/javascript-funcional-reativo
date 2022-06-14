//_ Funções que operam em outras funções,
//_ tomando-as como argumentos ou retornando-as
//_ são chamadas de higher-order functions.

//@  recebendo uma função como parâmetro
function exec(fn, ...params) {
  return fn(...params);
}

function exec2(fn, ...params) {
  //@ retorna uma função
  return function (textoInicial) {
    return `${textoInicial}: ${fn(...params)}`;
  };
}

function somar(a, b, c) {
  return a + b + c;
}

function multiplicar(a, b) {
  return a * b;
}

const R1 = exec(somar, 4, 5, 6);
const R2 = exec(multiplicar, 30, 40);

console.log(R1, R2);

const R3 = exec2(somar, 4, 5, 6)("O resultado é");
const R4 = exec2(multiplicar, 30, 40)("resultou em");

console.log(R3, R4);
