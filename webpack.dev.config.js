const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackConfigBase = require('./webpack.base.config')

const webpackConfigDev = {
    plugins: [
        // 定义环境变量为开发环境
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            IS_DEVELOPMETN: true,
        })
    ],
    devtool: 'source-map',
}

module.exports = merge(webpackConfigBase, webpackConfigDev)