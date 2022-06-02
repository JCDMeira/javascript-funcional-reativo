/*
  _ A promisse é possível adicionar todos os then's e por padrão um
  _ cath ao final, ou adicionar um tratamento de erro em cada then de
  _ modo particular após uma vírgula.
  _ Se ele entrar em um catch particular não entrará nos outros.
  _ O fluxo segue mesmo após tratar com um catch.
  _ se tentar executar um bloco na chamada com try catch e der erro
  _ ele também será tratado com o primeiro catch.
  _ o finally sempre é executado.
*/

function funcionaOuNao(valor, chanceErro) {
  // return new Promise((resolve, reject) => {
  //   if (Math.random() < chanceErro) {
  //     reject("Ocorreu um erro");
  //   } else {
  //     resolve(valor);
  //   }
  // });
  return new Promise((resolve, reject) => {
    try {
      // conso.log("funcão errada para ativar error");
      if (Math.random() < chanceErro) {
        reject("Ocorreu um erro");
      } else {
        resolve(valor);
      }
    } catch (error) {
      reject(error);
    }
  });
}

funcionaOuNao("testando", 0)
  .then((v) => console.log(`valor: ${v}`))
  .then(
    (v) => consol.log(`valor: ${v}`),
    (erro) => console.log(`Um erro específico pro then -> ${erro}`)
  )
  .catch((err) => console.log(`erro geral: ${err}`))
  .then(() => console.log("fim"))
  .finally(() => console.log("finally"));
