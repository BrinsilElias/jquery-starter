'use strict';

const path = require("path");
const WebpackBar  = require('webpackbar');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: { main: "./src/index.js", },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "public")
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src/app/templates/template.html'), minify: false }),
        new MiniCssExtractPlugin({ filename: "[name].bundle.css" }),
        new WebpackBar()
    ],
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },
        {
            test: /\.scss$/,
            use: [MiniCssExtractPlugin.loader,
                { loader: "css-loader", options: { sourceMap: true } },
                { loader: "postcss-loader", options: { sourceMap: true } },
                "sass-loader"
            ],
        },
        {
            test: /\.html$/,
            use: ["html-loader"]
        },
        {
            test: /\.(jpg|jpeg|png|gif|webp)(\?.*)?$/,
            type: 'asset/resource',
            generator: {
                filename: 'static/images/[name][ext]'
            }
        },
        {
            test: /\.(eot|otf|ttf|woff|woff2)(\?.*)?$/,
            type: 'asset/resource',
            generator: {
                filename: 'static/fonts/[name][ext]'
            }
        },
        {
            test: /\.(ico|svg)(\?.*)?$/,
            type: 'asset/resource',
            generator: {
                filename: 'static/icons/[name][ext]'
            }
        }]
    },
    devtool: 'source-map',
    devServer: {
        static: { directory: path.join(__dirname, 'public') },
        compress: true,
        port: 3000,
        open: true
    },
}
