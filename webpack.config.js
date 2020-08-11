const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const base = require("./webpack.config.base.js");
//开发
module.exports = {
  ...base,
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/,

        //将CSS以JS显示（开发）
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
