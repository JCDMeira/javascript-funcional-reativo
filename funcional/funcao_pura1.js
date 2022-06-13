//@ Uma função pura é uma função em que o valor
//@ de retorno é determinado APENAS por seus valores
//@ de entrada, sem efeitos colaterais oberváveis

const PI = 3.14;

//_ É impura por depender de um fator externo
function areaCirc(raio) {
  return raio * raio * PI; // é uma dependência estável até
}
console.log(areaCirc(10));

function areaCircPura(raio, PI) {
  return raio * raio * PI; // é uma dependência estável até
}
console.log(areaCircPura(10, PI));
console.log(areaCircPura(10, 3.141592));
console.log(areaCircPura(10, Math.PI));
