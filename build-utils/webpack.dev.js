const commonPaths = require('./common-paths');
const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const path = require('path');

const port = process.env.PORT || 3000;

module.exports = {
    mode: 'development',
    entry: {
        app: `${commonPaths.appEntry}/index.js`
    },
    output: {
        filename: '[name].[fullhash].js'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
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
        new ReactRefreshWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: port,
        historyApiFallback: true,
        // open: true
    },
    // resolve: {
    //     extensions: ['.js', '.jsx'],
    // },
};