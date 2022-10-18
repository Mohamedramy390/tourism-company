const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var $ = require( "jquery" );

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js',
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
   // compress: true,
    port: 45454,
    devMiddleware: {
        writeToDisk: true,
      },
      hot: false,
      liveReload: true,
      open: true,
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(sass|css|scss)$/,
        use: [
          {// Creates `style` nodes from JS strings
          loader : MiniCssExtractPlugin.loader,
          options:{
            publicPath:'../'
          },
        },
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: "images",
            }
          },
        ],
      },
      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: "fonts",
            }
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename : "index.html"
    }),

    new MiniCssExtractPlugin({
        filename : "css/style.css"
    }),
  ]

};
