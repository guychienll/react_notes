const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const DIST_DIR = path.join(__dirname, "/dist");
const SRC_DIR = path.join(__dirname, "/src");
const PUBLIC_DIR = path.join(__dirname, "/public");

module.exports = {
  entry: path.join(SRC_DIR, "/index.jsx"),
  output: {
    path: DIST_DIR,
    filename: "bundle.[contenthash].js",
  },
  module: {
    rules: [
      {
        test: /.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/preset-react", "@babel/preset-env"] },
        },
      },
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/preset-env"] },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(PUBLIC_DIR, "/index.html"),
    }),
  ],
  devServer: {
    port: 9527,
    open: true,
  },
};
