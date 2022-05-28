//* arrow function
/*
  _ Se tiver apenas uma linha conta como retorno implícito
  _ se tiver corpo deve ter a palavra return
*/

const felizNatal = () => console.log("Feliz Natal");
felizNatal();

const saudacao = (nome) => `Fala ${nome}, blz?`;
console.log(saudacao("Maria"));

/*
  _ Ao desestruturar os paramêtros com spread, é criado um array com eles
*/
const somar = (...numeros) => {
  let total = 0;
  for (const n of numeros) {
    total += n;
  }
  return total;
};

console.log(somar(1, 2, 3, 4, 5, 6));
console.log(somar(1, 2, 3, 4));
console.log(somar(1, 2));
