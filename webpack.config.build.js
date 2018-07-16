const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const { name } = require('./package.json');
const webpackConfig = require('./webpack.config');

const dirApp = path.join(__dirname, 'components', 'ReactFullpage');

module.exports = merge(webpackConfig, {
  entry: {
    bundle: path.join(dirApp, 'index'),
  },

  optimization: {
    minimize: false,
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: name,
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
  ],

  externals: {
    // Don't bundle react or react-dom
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM',
    },
  },
});
