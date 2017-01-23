var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var dirApp = path.join(__dirname, 'app');
var dirAssets = path.join(__dirname, 'assets');

// Is the current build a development build
var isDev = (process.env.NODE_ENV === 'dev');

// Add style source maps on dev mode
var sassLoader = isDev ? 'sass-loader?sourceMap' : 'sass-loader';
var cssLoader = isDev ? 'css-loader?sourceMap' : 'css-loader';
var styleLoader = 'style-loader';

module.exports = {
    entry: {
        vendor: [
            'jquery',
            'lodash'
        ],
        bundle: path.join(dirApp, 'index')
    },
    resolve: {
        modules: [
            'node_modules',
            dirAssets,
            dirApp
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            // jQuery
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'root.jQuery': 'jquery',

            // lodash
            '_': 'lodash'
        }),

        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.ejs'),
            filename: 'index.html',
            inject: true
        })
    ],
    module: {
        rules: [
            // BABEL
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {
                    compact: true
                }
            },

            // STYLES
            {
                test: /\.css$/,
                use: [
                    styleLoader,
                    cssLoader
                ]
            },

            // CSS / SASS
            {
                test: /\.scss/,
                use: [
                    styleLoader,
                    cssLoader,
                    {
                        loader: sassLoader,
                        options: {
                            includePaths: [dirAssets]
                        }
                    }
                ]
            },

            // EJS
            {
                test: /\.ejs$/,
                loader: 'ejs-loader'
            },

            // IMAGES
            {
                test: /\.(jpe*g|png|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            }
        ]
    }
};
