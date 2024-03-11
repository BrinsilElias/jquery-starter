'use strict';

const path = require("path");
const WebpackBar  = require('webpackbar');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "production",
    entry: { main: "./src/index.js" },
    output: {
        filename: "[name]-[contenthash].bundle.js",
        path: path.resolve(__dirname, "public"),
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "./src/app/templates/template.html", minify: false }),
        new MiniCssExtractPlugin({ filename: "[name]-[contenthash].bundle.css" }),
        new CleanWebpackPlugin(),
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
            use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]
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
    }
}
