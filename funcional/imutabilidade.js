function ordenar(array) {
  return [...array].sort();
}

const nums = Object.freeze([3, 1, 7, 9, 4, 6]); //_ não permite alteração
const numsOrdenados = ordenar(nums);
console.log(nums, numsOrdenados);
