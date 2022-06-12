const fs = require("fs");
const path = require("path");

function lerDiretorio(caminho) {
  return new Promise((resolve, reject) => {
    try {
      let arquivos = fs.readdirSync(caminho);
      arquivos = arquivos.map((arquivo) => path.join(caminho, arquivo));
      resolve(arquivos);
    } catch (e) {
      reject(e);
    }
  });
}

function elementosTerminadosCom(padraoTextual) {
  return function (array) {
    return array.filter((el) => el.endsWith(padraoTextual));
  };
}

function lerArquivo(caminho) {
  return new Promise((resolve, reject) => {
    try {
      const conteudo = fs.readFileSync(caminho, { encoding: "utf-8" });
      resolve(conteudo.toString());
    } catch (error) {
      reject(error);
    }
  });
}

function lerArquivos(caminhos) {
  return Promise.all(caminhos.map((caminho) => lerArquivo(caminho)));
}

function removerElementosSeVazio(array) {
  return array.filter((el) => el.trim());
}

function removerElementosSeIncluir(padraoTextual, array) {
  return function (array) {
    return array.filter((el) => !el.includes(padraoTextual));
  };
}

function removerElementosSeApenasNumero(array) {
  return array.filter((el) => {
    const num = parseInt(el.trim());
    return num !== num;
  });
}

function removerSimbolos(simbolos) {
  return function (array) {
    return array.map((el) => {
      let textoSemSimbolos = el;
      simbolos.forEach((simbolo) => {
        textoSemSimbolos = textoSemSimbolos.split(simbolo).join("");
      });
      return textoSemSimbolos;
    });
  };
}

const mesclarElementosCom = (simbolo) => (array) => array.join(simbolo);

const SepararElementosPor = (simbolo) => (array) => array.split(simbolo);

function agruparElementos(elementos) {
  return Object.values(
    elementos.reduce((agrupamento, palavra) => {
      const el = palavra.toLowerCase();
      const qtde = agrupamento[el] ? agrupamento[el].qtde + 1 : 1;

      agrupamento[el] = { elemento: el, qtde };
      return agrupamento;
    }, {})
  );
}

function ordenarPorAtributoNumerico(attr, ordem = "asc") {
  return function (array) {
    const asc = (o1, o2) => o1[attr] - o2[attr];
    const desc = (o1, o2) => o2[attr] - o1[attr];
    return array.sort(ordem === "asc" ? asc : desc);
  };
}

module.exports = {
  lerDiretorio,
  elementosTerminadosCom,
  lerArquivos,
  removerElementosSeVazio,
  removerElementosSeIncluir,
  removerElementosSeApenasNumero,
  removerSimbolos,
  mesclarElementosCom,
  SepararElementosPor,
  agruparElementos,
  ordenarPorAtributoNumerico,
};
