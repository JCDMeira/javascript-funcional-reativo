const exec = require("./funcExperimento2");

const objWithTag = { key: "uma_tag", tag: "Um valor" };

const lerObj = (obj) => obj;

const getArrayOfValues = (obj) => Object.keys(obj).map((key) => obj[key]);

const getFirstElementAsString = (array) => array.slice(0, 1).toString();

const a = exec
  .getThat(objWithTag)
  .andProcessWith(getArrayOfValues)
  .andProcessWith(getFirstElementAsString)
  .andFinish();

console.log(a);
