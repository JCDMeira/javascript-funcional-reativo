const path = require("path");
const fn = require("./funcoes");

const caminho = path.join(__dirname, "..", "dados", "legendas");

function composicao(...fns) {
  return function (valor) {
    return fns.reduce(async (acc, fn) => {
      if (Promise.resolve(acc) === acc) {
        return fn(await acc);
      } else {
        return fn(acc);
      }
    }, valor);
  };
}

const simbolos = [
  ".",
  "?",
  "-",
  ",",
  '"',
  "♪",
  "_",
  "<i>",
  "</i>",
  "\r",
  "[",
  "]",
  "(",
  ")",
];
const tratamentoPalavrasMaisUsadas = composicao(
  fn.lerDiretorio,
  fn.elementosTerminadosCom(".srt"),
  fn.lerArquivos,
  fn.mesclarElementosCom("\n"),
  fn.SepararElementosPor("\n"),
  fn.removerElementosSeVazio,
  fn.removerElementosSeIncluir("-->"),
  fn.removerElementosSeApenasNumero,
  fn.removerSimbolos(simbolos),
  fn.mesclarElementosCom(" "),
  fn.SepararElementosPor(" "),
  fn.removerElementosSeVazio,
  fn.removerElementosSeApenasNumero,
  fn.agruparElementos,
  fn.ordenarPorAtributoNumerico("qtde", "desc")
);

tratamentoPalavrasMaisUsadas(caminho).then(console.log);
