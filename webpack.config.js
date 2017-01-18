var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var dirApp = path.join(__dirname, 'app');
var dirAssets = path.join(__dirname, 'assets');

var cssLoader = 'css-loader';
var sassLoader = 'sass-loader';
var styleLoader = 'style-loader';

// Add style source maps on dev mode
if (process.env.NODE_ENV === 'dev') {
    cssLoader += '?sourceMap';
    sassLoader += '?sourceMap'
}

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

        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: '[name].[hash].js'
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
                    name: 'assets/images/[hash].[ext]'
                }
            }
        ]
    }
};
