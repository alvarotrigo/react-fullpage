const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpackConfig = require('./webpack.config');

webpackConfig.devtool = 'cheap-module-source-map';

webpackConfig.plugins.push(
    new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest']
    })
);

webpackConfig.plugins.push(
    new CleanWebpackPlugin(['dist'])
);

webpackConfig.output = {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
};

module.exports = webpackConfig;
