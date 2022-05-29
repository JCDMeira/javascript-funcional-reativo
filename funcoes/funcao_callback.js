/*
  _ Uma função callback é uma função passada a outra função como argumento,
  _  que é então invocado dentro da função externa para completar algum tipo de
  _ rotina ou ação.

  _ normalmente relacionada a algum tipo de evento (relógio/tempo, volta de uma chamada de api, etc)

  _ normalmente há muitos casos de possibilidade de suprimir certos parâmetros
  _ e a função continuar funcionando, como passar ou não o obj para readFile.
  _ quando um parâmetro não é usado pode-se nomear por convenção como _
*/

const fs = require("fs");
const path = require("path");

const caminho = path.join(__dirname, "dados.txt");

function exibirConteudo(err, conteudo) {
  console.log(conteudo.toString());
}

fs.readFile(caminho, {}, exibirConteudo);

fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()));
