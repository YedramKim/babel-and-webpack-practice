const
	path = require('path'),
	HTMLWebpackPlugin = require('html-webpack-plugin'),
	webpack = require('webpack');

module.exports = {
	entry: {
		main: [
			path.resolve(__dirname, 'src', 'index.js'),
			'webpack-hot-middleware/client?timeout=20000&reload=true'
		]
	},
	output: {
		path: path.resolve(__dirname, 'static'),
		filename: '[name].js',
		publicPath: '../static/'
	},
	module: {
		rules: [
			{
				test: /\.txt$/,
				exclude: /node_modules/,
				loader: 'raw-loader'
			}
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common'
		}),
		new HTMLWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'index.html'),
			filename: 'page.html'
		}),
		new webpack.HotModuleReplacementPlugin()
	]
};