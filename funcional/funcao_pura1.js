//@ Uma função pura é uma função em que o valor
//@ de retorno é determinado APENAS por seus valores
//@ de entrada, sem efeitos colaterais oberváveis

const PI = 3.14;

//_ É impura por depender de um fator externo
function areaCirc(raio) {
  return raio * raio * PI; //_ é uma dependência estável até
}
console.log(areaCirc(10));

function areaCircPura(raio, PI) {
  return raio * raio * PI; //_ é uma dependência estável até
}
console.log(areaCircPura(10, PI));
console.log(areaCircPura(10, 3.141592));
console.log(areaCircPura(10, Math.PI));

console.log("-----------------------");
//_ funcão impura -> a entrada igual não determina a saída
//_ se mexer com dados aleatórios não da pra ter funções puras
function gerarNumeroAleatorio(min, max) {
  const fator = max - min + 1;
  return parseInt(Math.random() * fator) + min;
}

console.log(gerarNumeroAleatorio(1, 10000));
console.log(gerarNumeroAleatorio(1, 10000));
console.log(gerarNumeroAleatorio(1, 10000));
console.log(gerarNumeroAleatorio(1, 10000));
console.log(gerarNumeroAleatorio(1, 10000));

console.log("-----------------------");
let qtdeDeExecucoe = 0;
//_ pura!
function somar(a, b) {
  qtdeDeExecucoe++; //! efeito colateral observável
  return a + b;
}

console.log(qtdeDeExecucoe);
console.log(somar(68, 31));
console.log(somar(68, 31));
console.log(somar(68, 31));
console.log(somar(68, 31));
console.log(somar(68, 31));
console.log(qtdeDeExecucoe);
