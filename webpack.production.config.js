var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var node_dir = path.join(__dirname, 'node_modules');
var bower_dir = path.join(__dirname, 'bower_components');
var assets_dir = path.join(__dirname, 'assets');
var app_dir = path.join(__dirname, 'app');

module.exports = {
    entry: {
        app: [
            // Application entry point
            app_dir + '/main.js'
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        root: [
            bower_dir,
            assets_dir,
            app_dir
        ]
    },
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
        ),
        new ExtractTextPlugin('main.css')
    ],
    module: {
        loaders: [
            // CSS
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },

            // SASS
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    'style',
                    'css!sass'
                )
            }
        ]
    }
};
