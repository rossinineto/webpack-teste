const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const port = process.env.PORT || 3000;

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.[fullhash].js'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            // Primeira regra
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            // Segunda regra
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                exportLocalsConvention: "camel-case-only",
                            },
                        },
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            // favicon: 'public/favicon.ico'
        })
    ],
    devServer: {
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        open: true
    }
};