/* eslint-disable no-unused-vars */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  context: path.join(__dirname, 'src'),
  entry: {
    app: ['./index.js'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192',
      },
      {
        test: /\.woff(\?.*)?$/,
        loader:
          'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.woff2(\?.*)?$/,
        loader:
          'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2',
      },
      {
        test: /\.otf(\?.*)?$/,
        loader:
          'file-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=font/opentype',
      },
      {
        test: /\.ttf(\?.*)?$/,
        loader:
          'url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.eot(\?.*)?$/,
        loader: 'file-loader?prefix=fonts/&name=[path][name].[ext]',
      },
      {
        test: /\.svg(\?.*)?$/,
        loader: 'file-loader',
      },
      {
        test: /\.md$/,
        loader: 'text-loader',
      },
    ],
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body',
    }),
  ],
};

module.exports = config;
