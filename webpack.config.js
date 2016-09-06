const path = require('path');
const cssNext = require('postcss-cssnext');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: [
		'./app/index.js'
	],
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'index_bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: [
						'react',
						'es2015'
					]
				}
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader!postcss-loader'
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=8192'
			}
		],
		noParse: [/moment.js/]
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
	devtool: 'cheap-module-eval-source-map',
	debug: true
};
