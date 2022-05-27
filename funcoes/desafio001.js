// somar(3)(4)(5)

// fn -> 3*7
// fn -> 3+7
// fn -> 3-7
// calcular(3)(7)(fn)

const somar = (n) => {
  return function (y) {
    return function (z) {
      return n + y + z;
    };
  };
};

const resultSomar = somar(3)(4)(5);
console.log(resultSomar);

const fnMult = (n1, n2) => n1 * n2;

const fnSom = (n1, n2) => n1 + n2;

const fnSub = (n1, n2) => n1 - n2;

const calcular = (n1) => {
  return function (n2) {
    return function (fn) {
      return fn(n1, n2);
    };
  };
};

const resultCalcMult = calcular(3)(7)(fnMult);
const resultCalcSom = calcular(3)(7)(fnSom);
const resultCalcSum = calcular(3)(7)(fnSub);

console.log("multiplicação de 3 e 7 é:", resultCalcMult);
console.log("soma de 3 e 7 é:", resultCalcSom);
console.log("subtração de 3 e 7 é:", resultCalcSum);
