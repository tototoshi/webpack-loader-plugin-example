const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const StartFinishPlugin = require("./src/StartFinishPlugin");
const HelloEntryPlugin = require("./src/HelloEntryPlugin");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: {
          loader: path.join(__dirname, "src", "text-loader.js"),
        },
      },
    ],
  },
  plugins: [
    new HelloEntryPlugin(),
    new StartFinishPlugin({ start: "start", finish: "finish" }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
