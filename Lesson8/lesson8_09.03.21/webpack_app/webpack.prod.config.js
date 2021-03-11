const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizePlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    entry: {
        main: ["core-js/stable", "regenerator-runtime/runtime", "./src/public/index.js"]
    },
    output: {
        path: path.join(__dirname, 'dist/public'),
        publicPath: "",
        filename: "js/[name].js"
    },
    target: "web",
    optimization: {
        minimizer: [
            new TerserWebpackPlugin({
                parallel: true
            }),
            new CssMinimizePlugin({})
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader",
                    options: { minimize: true }
                }
            },
            {
                test: /\.(s*)css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/public/index.html",
            filename: "index.html",
            inject: 'body'
            // excludeChunks: ['server']
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ]
};