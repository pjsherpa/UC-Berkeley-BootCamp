const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const { GenerateSW } = require("workbox-webpack-plugin");

module.exports = () => {
  return {
    mode: "development",
    entry: {
      main: "./assets/js/index.js",
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.html",
        title: "TODOs List",
      }),

      new GenerateSW(),
      new WebpackPwaManifest({
        // TODO: Create a manifest.json:

        name: "My Progressive Web Application",
        short_name: "This is cool",
        description: "My awesome Progressive Web App!",
        background_color: "#ffffff",
        crossorigin: "use-credentials", //can be null, use-credentials or anonymous
        start_url: "./",
        publicPath: "./",
        icons: [
          {
            src: path.resolve("assets/images/logo.png"),
            sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
            //destination
          },
        ],
      }),
    ],

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: [
                "@babel/plugin-proposal-object-rest-spread",
                "@babel/transform-runtime",
              ],
            },
          },
        },
      ],
    },
  };
};
