/*
  Raiz digital é a soma recursiva de todos os dígitos de um número.

  Dado n, pegue a soma dos dígitos de n. Se esse valor tiver mais de um dígito, continue reduzindo dessa maneira até que um número de um dígito seja produzido. A entrada será um inteiro não negativo.

Exemplos
  16  -->  1 + 6 = 7
  942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
  132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
  493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/

const raizDigital = (number) => {
  let arrayNumber = number.toString().match(/[0-9]/g);

  let result = 0;
  if (arrayNumber.length > 1) {
    for (let i = 0; i < arrayNumber.length; i++) {
      result += Number(arrayNumber[i]);
    }
    return raizDigital(result);
  } else {
    return number;
  }
};

// const resolve = raizDigital(493193);
// console.log(resolve);

const rdCacalc = (number) =>
  number > 9
    ? rdCacalc(
        number
          .toString()
          .match(/[0-9]/g)
          .reduce((pv, cv) => Number(pv) + Number(cv))
      )
    : number;

const rd = rdCacalc(132189);
console.log(rd);
