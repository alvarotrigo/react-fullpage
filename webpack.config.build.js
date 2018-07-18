const path = require('path');
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
    library: 'ReactFullpage',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),
  ],

  externals: {
    // Don't bundle react or react-dom
    react: 'React',
    'react-dom': 'ReactDOM',
  },
});
