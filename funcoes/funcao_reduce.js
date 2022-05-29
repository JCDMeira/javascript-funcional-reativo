/*
  @ O reduce pode transformar um array em qualquer coisa.
  @ sendo flexível e quem vai determinar a transformação é a função de callback

  _ pode se passar para o reduce uma função e o valor inicial
  _ se não passar um valor inicial, o primeiro elemento se torna o inicial
  ! o valor inicial tem que ser algo que não influencia no resultado final

  _ a funçao recebe o acc (acumulador) e o elemento (valor / el)
*/

const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impressora", qtde: 0, preco: 649.5 },
  { nome: "Caderno", qtde: 4, preco: 27.1 },
  { nome: "Lapis", qtde: 3, preco: 5.82 },
  { nome: "Tesoura", qtde: 1, preco: 19.2 },
];

const getTotal = (item) => item.qtde * item.preco;
const somar = (acc, el) => acc + el;

const totalGeral = carrinho.map(getTotal).reduce(somar);
console.log(totalGeral);
