const { Observable, noop } = require("rxjs");

const obs = Observable.create((subscriber) => {
  subscriber.next("RxJs");
  subscriber.next("é");
  subscriber.next("bem");
  subscriber.next("poderoso!");

  if (Math.random() > 0.5) {
    subscriber.complete();
  } else {
    subscriber.error("Que problema!!!");
  }
});

/*
  _ Vai receber três funções, uma para caso com next
  _ uma para tratar o erro e outra para o fim.
  _ Se não quiser tratar o erro é possível usar o noop
*/

obs.subscribe(
  (valor) => console.log(`Valor: ${valor}`),
  (erro) => console.log(`Erro: ${erro}`),
  () => console.log(`Fim!`)
);

obs.subscribe(
  (valor) => console.log(`Valor: ${valor}`),
  noop,
  () => console.log(`Fim!`)
);

/*
  _ Também pe possível declarar como um obj para subscribe
  _ e isso pode ser em qualquer ordem, por ser um objeto
*/
obs.subscribe({
  next(valor) {
    console.log(`Valor ${valor}`);
  },
  error(msg) {
    console.log(`Erro ${msg}`);
  },
  complete() {
    console.log(`Fim!`);
  },
});
