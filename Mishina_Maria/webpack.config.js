const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname,'src','index.jsx')
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js','.jsx'],
        alias: {
            components: path.resolve(__dirname,'src','components'),
            containers: path.resolve(__dirname,'src','containers'),
        },
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            },
            {
                test: /\.s?css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader','sass-loader']
                })
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'bundle.css',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'src','index.html'),
            filename: 'index.html',
        }),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, 'src', 'img'),
            to: path.resolve(__dirname, 'dist', 'img')
        }]),
    ],
    devServer: {historyApiFallback: true,},
};