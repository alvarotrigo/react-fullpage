const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {
  devtool: 'inline-source-map',
  output: {
    pathinfo: true,
    publicPath: '/',
    filename: '[name].js',
  },
});
