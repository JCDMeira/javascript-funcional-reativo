const readline = require("readline");

function obterRespost(pergunta) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(pergunta, (resp) => {
      resolve(resp);
    });
  });
}

//_ Observer
function namorada() {
  setTimeout(() => {
    console.log("N: Apagar as luzes...");
    console.log("N: Pedir silêncio...");
    console.log("N: Supresa!!!");
  }, 2000);
}

//_ Observer
function sindico(params) {
  setTimeout(() => {
    console.log("S: Monitorando o barulho...");
  }, 1000);
}

//_ Subject
async function porteiro(interessados) {
  while (true) {
    const resp = await obterRespost("O namorado chegou? (s/N/q)");

    if (resp.toLowerCase() === "s") {
      //_os observadores são notificados
      interessados?.forEach((obs) => obs());
    } else if (resp.toLowerCase() === "q") {
      break;
    }
  }
}

/*
  _ Chamada da função -> Registra os dois observadores
  _ que são a namorada e o síndico
  _ o Subject é o porteiro
*/
porteiro([namorada, sindico]);
