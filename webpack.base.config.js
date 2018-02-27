const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

function resolve(relatedPath) {
    return path.join(__dirname, relatedPath)
}

const webpackConfigBase = {
    entry: {
        client: resolve('./src/main/js/app.js'),
    },
    output: {
        path: resolve('./'),
        filename: './src/main/resources/static/built/bundle.js',
    },
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            components: path.join(__dirname, '/../app/components'),
            actions: path.join(__dirname, '/../app/actions'),
            api: path.join(__dirname, '/../app/api'),
            reducers: path.join(__dirname, '/../app/reducers'),
            utils: path.join(__dirname, '/../app/utils'),
            controllers: path.join(__dirname, '/../app/controllers'),
            style: path.join(__dirname, '/../app/style'),
            images: path.join(__dirname, '/../app/images'),
        },
    },
    resolveLoader: {
        moduleExtensions: ['-loader']
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel',
            },
            {
                test: /\.css/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style',
                    use: [
                        { loader: 'css', options: { sourceMap: true } }
                    ]
                }),
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style',
                    use: [
                        { loader: 'css', options: { sourceMap: true } },
                        { loader: 'less', options: { sourceMap: true } }
                    ]
                }),
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                options: {
                    limit: 8192,
                    name: 'img/[name].[hash:4].[ext]'
                }
            },
            {
                test: /\.(woff|eot|ttf|svg|gif)$/,
                loader: 'url',
                options: {
                    limit: 8192,
                    name: 'font/[name].[hash:4].[ext]'
                }
            },
        ],
    },
    plugins: [
        // 提取css
        new ExtractTextPlugin('style.[hash:4].css')
    ]
}

module.exports = webpackConfigBase