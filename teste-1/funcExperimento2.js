function Exec() {
  let result;

  this.getThat = (value) => {
    this.result = value;
    return this;
  };

  this.andProcessWith = (cd) => {
    this.result = cd(this.result);
    return this;
  };

  this.andFinish = (cd) => {
    return this.result;
  };
}
const exec = new Exec();

module.exports = exec;
