var copyHTML = require('html-webpack-plugin');
var copyHTMLConfig = new copyHTML({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: [
		'./app/index.js'
	],
	output: {
		path: __dirname + '/dist',
		filename: 'index_bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/, 
				exclude: /node_modules/,
				loader: 'babel',
				query: {
        			presets: ['react', 'es2015']
      			}
			} 
		]
	},
	plugins: [copyHTMLConfig],
	devtool: 'source-map',
	debug: true
};