module.exports = class {
  constructor({ start, finish }) {
    this.start = start;
    this.finish = finish;
  }

  apply(compiler) {
    compiler.hooks.run.tap("StartFinishPlugin", () => {
      console.log(this.start);
    });
    compiler.hooks.done.tap("StartFinishPlugin", () => {
      console.log(this.finish);
    });
  }
};
