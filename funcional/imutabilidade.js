function ordenar(array) {
  return [...array].sort();
}

const nums = Object.freeze([3, 1, 7, 9, 4, 6]); //_ não permite alteração
const numsOrdenados = ordenar(nums);
console.log(nums, numsOrdenados);

console.log("-------------------");

const nums2 = [4, 8, 3, 2, 9, 1, 9, 3];

//#1 dados mutáveis
// let total = 0;
// for (let i = 0; i < nums2.length; i++) {
//   total += nums2[i];
// }

//#2 dados imutáveis - Reduce
// const somar = (a, b) => a + b;
// const total = nums2.reduce(somar);

//#3 dados imutáveis - Recursividade
function somarArray(array, total = 0) {
  if (array.length === 0) {
    return total;
  }
  return somarArray(array.slice(1), total + array[0]);
}
const total = somarArray(nums2);
console.log(total);

console.log("-------------------");

const pessoa = Object.freeze({
  nome: "Maria",
  altura: 1.76,
  cidade: "São Paulo",
  end: Object.freeze({
    rua: "Feliz!",
  }),
});

//_ Atribuição por Referência
const outraPessoa = pessoa;

//_ Passagem por Referência (Função impura!)
function alteraPessoa(pessoa) {
  const novaPessoa = { ...pessoa };
  novaPessoa.nome = "João";
  novaPessoa.cidade = "Fortaleza";
  novaPessoa.end.rua = "ABC";
  return novaPessoa;
}

const novaPessoa = alteraPessoa(pessoa);
console.log(pessoa);
console.log(novaPessoa);

let a = 3;
let b = a; //_ atribuição por valor (copia!)

a++;
b--;

console.log(a, b);
