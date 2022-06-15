//_ Diz-se que uma linguagem de programação possui
//_ funções de primeira classe quando funções nessa
//_Linguagem são tratadas como qualquer outra variável

const x = 3;
const y = function (txt) {
  return `Esse é o texto: ${txt}`;
};

const z = () => console.log("ZzzZzz");

console.log(x);
console.log(y("olá"));
z();
