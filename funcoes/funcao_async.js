/*
  _ funcões assincronas retornam promisses, e só é possível usar o await
  _ em funções async.

  _ Quando voltamos para códigos sincronos é preciso voltar o valor com
  _ o then, como o caso do console log da função executar

  _ se a função for async ou retornar uma promise de modo explícito
  _ é preciso pegar o valor dela com await ou then.
  _ Mesmo se ela retornar de modo instantâneo,
  _ pois o valor virá incapsulado por uma promise
*/

function esperaPor(tempo = 2000) {
  return new Promise(function (resolve) {
    setTimeout(() => resolve(), tempo);
  });
}

// esperaPor(2000)
//   .then(() => console.log("Exec promise 1..."))
//   .then(esperaPor)
//   .then(() => console.log("Exec promise 2..."))
//   .then(esperaPor)
//   .then(() => console.log("Exec promise 3..."));

function retornarValor() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(10), 5000);
  });
}

async function executar() {
  const valor = await retornarValor();

  await esperaPor(1000);
  console.log("Async/Await 1...");

  await esperaPor(1000);
  console.log("Async/Await 2...");

  await esperaPor(1000);
  console.log("Async/Await 3...");

  return valor;
}

executar().then(console);
