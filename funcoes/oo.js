//@ função construtora

function Produto(nome, preco, desc = 0.15) {
  this.nome = nome;
  this.preco = preco;
  this.desc = desc;

  this.precoFinal = () => this.preco * (1 - this.desc);
}

const p1 = new Produto("Caneta", 8.59);
const p2 = new Produto("Geladeira", 3000);

console.log(p2.precoFinal());

/*
  _ usar get acessa função como se fosse atributo normal
*/

class Produto1 {
  constructor(nome, preco, desc = 0.15) {
    this._nome = nome;
    this._preco = preco;
    this.desc = desc;
  }

  get nome() {
    return this._nome;
  }

  set nome(novoNome = this._nome) {
    this._nome = novoNome;
  }

  get preco() {
    return this._preco;
  }

  set preco(novoPreco = this._preco) {
    if (novoPreco >= 0) {
      this._preco = novoPreco;
    }
  }

  get precoFinal() {
    return this.preco * (1 - this.desc);
  }
}

const p3 = new Produto1("Caneta", 10);
const p4 = new Produto1("Geladeira", 10000);

console.log(p4.nome);
p4.nome = "Geladeira1";
console.log(p4.nome);
console.log(p4.precoFinal);
