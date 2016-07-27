var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpackConfig = require('./webpack.config');

webpackConfig.devtool = 'cheap-module-source-map';

webpackConfig.plugins.push(
    new CleanWebpackPlugin(['dist'])
);

// Copy files from assets/images to dist/assets/images
webpackConfig.plugins.push(
    new CopyWebpackPlugin([
        { from: 'assets/images', to: 'assets/images' }
    ])
);

webpackConfig.output = {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js'
};

module.exports = webpackConfig;
