//@ function declaration
function bomDia(params) {
  console.log("Bom dia!");
}

//@ function expression
const boaTarde = function () {
  console.log("Boa tarde");
};

//@ 1) passar uma função para outra função
function executarQualquerCoisa(fn) {
  // console.log(typeof fn);
  if (typeof fn === "function") {
    fn();
  } else {
    console.log("parâmetro inválido: não é uma função");
  }
}

executarQualquerCoisa(3);
executarQualquerCoisa(bomDia);
executarQualquerCoisa(boaTarde);

//@ 2) retornar uma função a partir de outra função

function potencia(base) {
  return function (exp) {
    return Math.pow(base, exp);
  };
}

const potenciaDe2 = potencia(2);
console.log(potenciaDe2(8));

const resultadoPotencia = potencia(3)(4);
console.log(resultadoPotencia);
