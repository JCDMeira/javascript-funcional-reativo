const nome = "Jean";

const mostraNome = () => console.log(nome);

// mostraNome(); //? Jean

const gerarNumeroAleatorio = (min, max) => {
  const fator = max - min + 1;
  return parseInt(Math.random() * fator) + min;
};

console.log(gerarNumeroAleatorio(1, 50));
console.log(gerarNumeroAleatorio(1, 50));
console.log(gerarNumeroAleatorio(1, 50));
console.log(gerarNumeroAleatorio(1, 50));
console.log(gerarNumeroAleatorio(1, 50));

const arrayHistorico = [];
const somarDoisNumeros = (num1, num2) => {
  const chamada = arrayHistorico.length + 1;
  arrayHistorico.push({
    chamada,
    resultado: num1 + num2,
  });
  return num1 + num2;
};

console.log("Antes de executar", arrayHistorico);
somarDoisNumeros(1, 2);
somarDoisNumeros(1, 2);
somarDoisNumeros(1, 2);
somarDoisNumeros(1, 2);
somarDoisNumeros(1, 2);
console.log("Após executar", arrayHistorico);
