const { merge } = require('webpack-merge');
const webpackConfig = require('./webpack.config');
const path = require('path');

module.exports = merge(webpackConfig, {
  devtool: 'inline-source-map',
  output: {
    pathinfo: true,
    filename: '[name].js',
    path: path.resolve(__dirname, './examples/react/dist')
  },
});
