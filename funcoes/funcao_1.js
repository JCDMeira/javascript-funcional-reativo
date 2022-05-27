console.log("teste");

//@ function declaration
function bomDia(params) {
  console.log("Bom dia!");
}

bomDia();

//@ function expression
const boaTarde = function () {
  console.log("Boa tarde");
};

boaTarde();

function somar(a, b) {
  return a + b;
}

/*
  _ uma funcão pode receber quantos parâmetros quiser,
  _ não alerta se tiver mais ou menos parâmetros.
  _ se passar mais irá ignorar, se passar menos receberá NaN nesse caso.
  _ A não ser que atribua um parâmetro formal na declaração da função;
*/

let resultado = somar(3, 4);
console.log("resultado com dois parâmetros", resultado);

resultado = somar(3, 4, 5, 6);
console.log("resultado com mais parâmetros", resultado);

resultado = somar(3);
console.log("resultado com menos parâmetros", resultado);
