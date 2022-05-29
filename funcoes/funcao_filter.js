/*
  @ O filter gera um novo array, mas terá o número de elementos
  @ igual ou menor que o número de array original.

  _ A função de callback do filter irá retornar true ou false,
  _ se der verdadeiro o elemento será incluido no novo array
*/

const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impressora", qtde: 0, preco: 649.5 },
  { nome: "Caderno", qtde: 4, preco: 27.1 },
  { nome: "Lapis", qtde: 3, preco: 5.82 },
  { nome: "Tesoura", qtde: 1, preco: 19.2 },
];

const qatMaiorQueZero = (item) => item.qtde > 0;
const getNome = (item) => item.nome;

const itensValidos = carrinho.filter(qatMaiorQueZero);
const nomesItensValidos = carrinho.filter(qatMaiorQueZero).map(getNome);
console.log(itensValidos);

Array.prototype.myFilter = function (fn) {
  const filtered = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this, this)) filtered.push(this[i]);
  }
  return filtered;
};

const myItensValidos = carrinho.myFilter(qatMaiorQueZero);
console.log("myFilter", myItensValidos);
