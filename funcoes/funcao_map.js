/*
  @ um map sempre da origem a um array do mesmo tamanho do original

  _ o map espera receber três parâmetros que são:
  - o valor (n por exemplo)
  - o index (i por exemplo)
  - o array (a por exemplo)

  # pode passar apenas o valor (n) e não passar os demais parâmetros
*/

const nums = [1, 2, 3, 4, 5];
const mapFunc = (n, i, a) =>
  `o número ${n} * 2 + o index ${i} + o tamanho do array ${a.length} = ${
    n * 2 + i + a.length
  }`;
console.log(nums.map(mapFunc));

console.log("-------------------------------");

const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impressora", qtde: 0, preco: 649.5 },
  { nome: "Caderno", qtde: 4, preco: 27.1 },
  { nome: "Lapis", qtde: 3, preco: 5.82 },
  { nome: "Tesoura", qtde: 1, preco: 19.2 },
];

const getNome = (item) => item.nome;
console.log(carrinho.map(getNome));

const getTotal = (item) => item.qtde * item.preco;
const totalPorItem = carrinho.map(getTotal);
console.log(totalPorItem);
