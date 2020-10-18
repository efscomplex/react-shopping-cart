const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const rules = [
  {
    test: /\.(ts|js)x?$/i,
    exclude: /node_modules/,
    use: [
      {
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-react",
            "@babel/preset-typescript",
          ],
          plugins: [
            [
              "@babel/plugin-proposal-pipeline-operator",
              {
                proposal: "minimal",
              },
            ],
          ],
        },
      },
    ],
  },
  {
    test: /.s[ca]ss$/i,
    use: ["style-loader", "css-loader", "sass-loader"],
  },
  {
    test: /\.(png|jpe?g|gif|svg)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  },
];
module.exports = {
  entry: {
    "www/app": "./www/index.tsx",
  },
  output: {
    filename: "[name].boundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    writeToDisk: true,
  },
  module: {
    rules,
  },
  resolve: {
    modules: ["./www", "./backend", "node_modules"],
    alias: {
      src: path.resolve(__dirname, "www/"),
      "@": path.resolve(__dirname, "www/"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: "./www/index.html",
      filename: "www/index.html",
    }),
  ],
};
