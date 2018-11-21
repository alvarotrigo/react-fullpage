const path = require('path');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const webpackConfig = require('./webpack.config');

const dirApp = path.join(__dirname, 'components');

const shared = {
  entry: {
    bundle: path.join(dirApp, 'index'),
  },

  optimization: {
    minimize: false,
  },

  plugins: [new CleanWebpackPlugin(['dist'])],

  externals: {
    // Don't bundle react or react-dom
    react: 'React',
    'react-dom': 'ReactDOM',
  },
};

module.exports = [
  merge(webpackConfig, shared, {
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'react-fullpage.js',
      library: 'ReactFullpage',
      libraryTarget: 'commonjs2',
    },
  }),
  merge(webpackConfig, shared, {
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'react-fullpage-umd.js',
      library: 'ReactFullpage',
      libraryTarget: 'umd',
      umdNamedDefine: true,
    },
  }),
];
