const path = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const webpackConfig = require('./webpack.config');

const dirApp = path.join(__dirname, 'components');

const shared = {
  entry: {
    bundle: path.join(dirApp, 'index'),
  },

  optimization: {
    minimize: false,
  },

  plugins: [new CleanWebpackPlugin({ cleanStaleWebpackAssets: false })]
};

module.exports = [
  merge(webpackConfig, shared, {
    // node module aliases
    externals: {
      react: 'react',
      'react-dom': 'react-dom',
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'react-fullpage.js',
      libraryTarget: 'commonjs2',
    },
  }),
  merge(webpackConfig, shared, {
    externals: {
      // window aliases
      react: 'React',
      'react-dom': 'ReactDOM',
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'react-fullpage-umd.js',
      library: 'ReactFullpage',
      libraryTarget: 'umd',
      umdNamedDefine: true,
    },
  }),
];
