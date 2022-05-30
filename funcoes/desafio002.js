const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99, fragil: true },
  { nome: "Impressora", qtde: 1, preco: 649.5, fragil: true },
  { nome: "Caderno", qtde: 4, preco: 27.1, fragil: false },
  { nome: "Lapis", qtde: 3, preco: 5.82, fragil: false },
  { nome: "Tesoura", qtde: 1, preco: 19.2, fragil: true },
];

// 1. fragil: true
// 2. qtde: 4, preço: 27:10 -> gerar total
// 3. media total

const isFragil = (element) => element.fragil;
const total = (element) => element.qtde * element.preco;
const media = (acc, element, index, array) =>
  element === array[array.length - 1]
    ? ((acc + element) / array.length).toFixed(2)
    : acc + element;

const resultado = carrinho.filter(isFragil).map(total).reduce(media);
console.log(resultado);
