/*
  _ É possível usar o observable para ativar a função de
  _ resposta várias vezes internamente, enquanto com promise
  _ é só uma vez, usar mais de uma não é executada e não faz diferença
  _ Sempre  que o next é chamada se executa um nova função
  _ normalmente o interval é um gerador automático interno
  _ já nesse caso é criado um Observable com uma "stream"
  _ de dados manualmente.
  # em vez de promise o padrão usado para o nome da função no
  # observable é subscriber
*/
const { Observable } = require("rxjs");

const promise = new Promise((resolve) => {
  resolve("Promise é bem legal!");
});

promise.then(console.log);

const obs = new Observable((subscriber) => {
  subscriber.next("Observer");
  subscriber.next("é");
  subscriber.next("bem");
  setTimeout(() => {
    subscriber.next("legal!");
    subscriber.complete(); //@ avisa que não será gerado mais nenhum
    //@ valor a partir do observer
  }, 1000);
});

obs.subscribe(console.log);
obs.subscribe((texto) => console.log(texto.toUpperCase()));
