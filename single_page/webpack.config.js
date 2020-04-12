const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.export = {
    entry: './src/index.js'
    output: {
        path: path.resolve(__direname, 'dist'),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js'],
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            }
        }]
    },
    plugins: [
        new htmlWebpackPlugin([{
            inject: true,
            template: './public/index.html',
            filename: './index.html',
        }])
    ]
}