const exampleTag = { key: "uma_tag", tag: "Um valor" };

const getArrayOfValues = (obj) => Object.keys(obj).map((key) => obj[key]);

const getFirstElementAsString = (array) => array.slice(0, 1).toString();

const tag = getFirstElementAsString(getArrayOfValues(exampleTag));

console.log(tag);
