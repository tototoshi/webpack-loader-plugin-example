const { EntryPlugin } = require("webpack");

module.exports = class {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    new EntryPlugin(compiler.context, require.resolve("./hello"), {
      name: "hello",
    }).apply(compiler);
  }
};
