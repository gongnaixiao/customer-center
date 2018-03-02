const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const CleanWebpackPlugin = require("clean-webpack-plugin");

const sourceDirectory = path.resolve(__dirname, 'src/main/app');
const targetDirectory = path.resolve(__dirname, 'src/main/resources/static/build');

const isDev = process.env.NODE_ENV !== 'production';

const plugins = [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        inject: true,
        template: path.resolve(__dirname, 'src/main/app/index.html'),
        minify: {
            collapseWhitespace: !isDev,
            removeComments: !isDev,
            removeRedundantAttributes: !isDev
        }
    }),
    new ExtractTextPlugin('style.css'),
    new webpack
        .optimize
        .ModuleConcatenationPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin('src/main/resources/static/build/*.*', {
        root: __dirname,
        verbose: true,
        dry: false
    })
];

if (!isDev) {
    plugins.push(new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
    }), new UglifyJsPlugin({
        uglifyOptions: {
            compress: {
                warnings: false
            }
        },
        sourceMap: false
    }),);
}

module.exports = {
    context: sourceDirectory,
    entry: {
        app: './index.js'
    },
    output: {
        path: targetDirectory,
        filename: "bundle.js"
    },
    //devtool: 'eval-source-map',
    //devtool: 'inline-source-map',
    devServer: {
        contentBase: sourceDirectory, //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            }, {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
            }, {
                test: /\.s?css$/,
                use: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader','sass-loader']})
            }, {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            }
        ]
    },
    plugins,
}