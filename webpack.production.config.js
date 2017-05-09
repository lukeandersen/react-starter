const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: './app/index.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                // plugins: ['lodash'],
                presets: ['react', 'es2015']
            }
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader?importLoaders=1', 'postcss-loader']
            })
        }, {
            test: /\.(png|jpg|jpeg|gif|svg)$/,
            loader: 'file-loader?limit=8192&name=assets/[name].[ext]?[hash]'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.ejs'
        }),
        new CopyWebpackPlugin([
            { from: './app/favicon.ico' },
            { from: './app/assets', to: 'assets' },
            { from: './server.js' }
        ]),
        new ExtractTextPlugin('main.css')
    ]
}
