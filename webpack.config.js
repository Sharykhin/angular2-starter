var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	context: path.join(__dirname, '/src'),
	entry: {
		'vendor': './vendor.ts',
		'app': './bootstrap.ts'
	},

	output: {
		path: path.join(__dirname, '/dist'),
		filename: '[name].js'
	},

	resolve: {
		extensions: ['', '.ts', '.js', '.json', '.css', '.html']
	},

	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /(node_modules|bower_components|dist)/,
			include: path.join(__dirname, '/'),
			loader: 'babel',
			query: {
				presets: ['es2015']
			}
		}, {
			test: /\.ts$/,
			loader: 'ts-loader',
			include: path.join(__dirname, '/src')
		}]
	},

	plugins: [new HtmlWebpackPlugin({
		filename: 'index.html',
		template: 'index.html',
	})],

	tslint: {
		emitErrors: false,
		failOnHint: false
	},
}