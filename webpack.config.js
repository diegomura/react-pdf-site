/* eslint-disable no-unused-vars */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

require('dotenv').config();

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
        test: /\.pdf$/,
        loader: 'url-loader',
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
        use: ['babel-loader', '@mdx-js/loader'],
      },
    ],
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      GA_TOKEN: JSON.stringify(process.env.GA_TOKEN),
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body',
    }),
    // Surge needs 200.html to make SPA routing work
    new HtmlWebpackPlugin({
      filename: '200.html',
      template: 'index.html',
      inject: 'body',
    }),
    new FaviconsWebpackPlugin(
      path.join(__dirname, 'src/static/images/logo.png'),
    ),
    new CopyWebpackPlugin([
      { from: './static/images/examples/*.jpg', to: './', flatten: true },
      { from: './static/images/examples/*.png', to: './', flatten: true },
    ]),
  ],
};

module.exports = config;
