const letrasAninhadas = [
  ["O", ["l"], "á"],
  [" "],
  ["m", ["u", ["n"]], "d", "o"],
  ["!", "!", "!", "!"],
];

const letras = letrasAninhadas.flat(Infinity);

const resultado1 = letras.flatMap((l) => [l, ","]);
const resultado2 = letras.flatMap((l) => [l]).reduce((a, b) => a + b);

console.log(resultado1);
console.log("-----------");
console.log(resultado2);
