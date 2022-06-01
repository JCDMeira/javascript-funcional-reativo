/*
  _ promise é uma promeça, de algo que irá se resolver no futuro

  # Promisse só devolve um único valor
  # pode ser devolvido um objeto ou qualquer coisa, mas um único valor

  @ em then's sucessivos a responda de um then é passado como valor para o próximo

  # pode fazer a função callback pode ser uma função já declarada
  # e não precisa ser uma anônima dentro do then
  # como o then sempre recebe e passa um único valor é possível
  # passar o console.log como a função que ele irá executar.
*/

let p = new Promise(function (resolve) {
  resolve(["Ana", "Bia", "Carlos"]);
});

const primeiroValor = (valor) => valor[0];

p.then(primeiroValor)
  .then((primeiro) => primeiro[0])
  .then((letra) => letra.toLowerCase())
  .then(console.log);
