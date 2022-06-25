// const exampleTag = { key: "uma_tag", tag: "Um valor" };

// const getArrayOfValues = (obj) => Object.keys(obj).map((key) => obj[key]);

// const getFirstElementAsString = (array) => array.slice(0, 1).toString();

// const tag = getFirstElementAsString(getArrayOfValues(exampleTag));

// console.log(tag);

//----------------------------------------------------------------
// const objTag = {
//   tags: { key: "uma_tag", tag: "Um valor" },

//   getArrayOfValues: function () {
//     this.tags = Object.keys(this.tags).map((key) => this.tags[key]);
//     return this;
//   },

//   getFirstElementAsString: function () {
//     this.tags = this.tags.slice(0, 1).toString();
//     return this;
//   },
// };

// const a = objTag.getArrayOfValues().getFirstElementAsString();
// console.log(a.tags);

//----------------------------------------------------------------

const objWithTag = { key: "uma_tag", tag: "Um valor" };

const lerObj = (obj) => new Promise((resolve) => resolve(obj));

const getArrayOfValues = (obj) =>
  new Promise((resolve) => resolve(Object.keys(obj).map((key) => obj[key])));

const getFirstElementAsString = (array) =>
  new Promise((resolve) => resolve(array.slice(0, 1).toString()));

lerObj(objWithTag)
  .then(getArrayOfValues)
  .then(getFirstElementAsString)
  .then(console.log);
