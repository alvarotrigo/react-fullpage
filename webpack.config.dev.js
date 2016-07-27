var webpackConfig = require('./webpack.config');

webpackConfig.devtool = '#cheap-module-eval-source-map';

webpackConfig.output = {
    pathinfo: true,
    publicPath: '/',
    filename: '[name].[hash].js'
};

module.exports = webpackConfig;
