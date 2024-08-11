const commonPaths = require('./common-paths');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: {
        app: [`${commonPaths.appEntry}/index.js`]
    },
    output: {
        filename: 'static/[name].[fullhash].js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            // Segunda regra
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                exportLocalsConvention: "camel-case-only",
                            },
                            importLoaders: 1,
                            sourceMap: true
                        },
                    },
                    {
                        // PostCSS funcionará antes do css-loader e 
                        // minificar e autoprefixar nossas regras de CSS.
                        loader: 'postcss-loader',
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles/styles.[hash].css'
        })
    ]
    // resolve: {
    //     extensions: ['.js', '.jsx'],
    // },
};