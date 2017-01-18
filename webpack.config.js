const path = require('path');
const cssNext = require('postcss-cssnext');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
		app: './app/index.js'
	},
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['react', 'es2015']
			}
		}, {
			test: /\.css$/,
			loader: 'style-loader!css-loader!postcss-loader'
		}, {
			test: /\.(png|jpg)$/,
			loader: 'url-loader?limit=8192'
		}]
	},
	postcss() {
		return [
			cssNext
		];
	},
	plugins: [
		new CopyWebpackPlugin([
            { from: './app/index.html' },
			{ from: './app/favicon.ico' },
			{ from: './app/assets', to: 'assets' }
		])
	],
	devtool: 'source-map',
	debug: true
};
