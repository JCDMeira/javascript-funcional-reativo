//* sem reuso e sem curryng

function textoComTamanhoEntre(min, max, erro, texto) {
  const tamanho = (texto || "").trim().length;

  if (tamanho < min || tamanho > max) {
    throw erro;
  }
}

const p1 = { nome: "A", preco: 14.99, desc: 0.25 };
// textoComTamanhoEntre(4, 255, "Nome inválido!", p1.nome);

//* com reuso e com curryng

function textoComTamanhoEntre2(min, max, erro, texto) {
  return function (max) {
    return function (erro) {
      return function (texto) {
        //@ Lazy Evaluation
        const tamanho = (texto || "").trim().length;

        if (tamanho < min || tamanho > max) {
          throw erro;
        }
      };
    };
  };
}

//_ reuso com versões intermediárias da função
const forcarTamanhoPadrao = textoComTamanhoEntre2(4)(255);
const forcarNomeProdutoValido = forcarTamanhoPadrao("Nome inválido!");

// textoComTamanhoEntre2(4)(255)("Nome inválido!")(p1.nome);
// forcarTamanhoPadrao("Nome inválido!")(p1.nome);
// forcarNomeProdutoValido(p1.nome);

//* com reuso e com curryng + encaosulamento de tratamento de erros

function aplicarValidacao(fn) {
  return function (valor) {
    //@ Lazy Evaluation
    try {
      fn(valor);
    } catch (e) {
      return { error: e };
    }
  };
}

const validarNomeProduto = aplicarValidacao(forcarNomeProdutoValido);

const p2 = { nome: "AB", preco: 14.99, desc: 0.25 };
console.log(validarNomeProduto(p1.nome));
console.log(validarNomeProduto(p2.nome));
