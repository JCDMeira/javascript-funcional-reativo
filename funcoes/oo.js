function Produto(nome, preco, desc = 0.15) {
  this.nome = nome;
  this.preco = preco;
  this.desc = desc;

  this.precoFinal = () => this.preco * (1 - this.desc);
}

const p1 = new Produto("Caneta", 8.59);
const p2 = new Produto("Geladeira", 3000);

console.log(p2.precoFinal());
