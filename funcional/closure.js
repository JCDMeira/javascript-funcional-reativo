//_ Closure é quando uma função "lembra"
//_ seu escopo léxico, mesmo quando a função
//_ é executada fora desse escopo léxico

const somarXmais3 = require("./closure_excopo");
const x = 100;
console.log(somarXmais3());

//@ a função lembra de onde ela foi criada
