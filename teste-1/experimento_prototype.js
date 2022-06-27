Object.prototype.exec = function (cb) {
  return cb(this);
};

Number.prototype.exec = function (cb) {
  return cb(this);
};

Function.prototype.exec = function (cb) {
  return cb(this);
};

//! ----------------------------------------------------

const objWithTag = { key: "uma_tag", tag: "Um valor" };

const lerObj = (obj) => obj;

const getArrayOfValues = (obj) => Object.keys(obj).map((key) => obj[key]);

const getFirstElementAsString = (array) => array.slice(0, 1).toString();

lerObj(objWithTag);
const I = (a) => a;

const tag = lerObj(objWithTag)
  .exec(getArrayOfValues)
  .exec(getFirstElementAsString);

console.log(tag);
