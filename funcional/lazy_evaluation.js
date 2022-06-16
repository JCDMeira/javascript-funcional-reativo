//_ Quando usamos o lazy evaluation e o currying, postergamos o
//_ processamento, e isso ajuda no reuso e na forma com que evitamos
//_ processamentos repetidos de certos trechos.
//_ quando o processamento mais pesado é chamado com a função eager
//_ Sempre se processa a mesma coisa, levando por volta de 7,5 segundos
//_ Já quando se aplica currying e joga o processamento final para depois
//_ é possível reutilizar o processamento pessado e só depois executar
//_ todos os processamentos finais, levando em torno de 2,5 segundos

function eager(a, b) {
  // processamento mais pesado
  const fim = Date.now() + 2500;
  while (Date.now() < fim) {}

  const valor = Math.pow(a, 3);
  return valor + b;
}

function lazy(a) {
  // processamento mais pesado
  const fim = Date.now() + 2500;
  while (Date.now() < fim) {}

  const valor = Math.pow(a, 3);
  return function (b) {
    return valor + b;
  };
}

console.time("#1");
console.log(eager(3, 100));
console.log(eager(3, 200));
console.log(eager(3, 300));
console.timeEnd("#1");

console.time("#2");
const lazy3 = lazy(3);
console.log(lazy3(100));
console.log(lazy3(200));
console.log(lazy3(300));
console.timeEnd("#2");
