var webpackConfig = require('./webpack.config');

webpackConfig.devtool = 'eval';

webpackConfig.output = {
    pathinfo: true,
    publicPath: '/',
    filename: '[name].js'
};

module.exports = webpackConfig;
