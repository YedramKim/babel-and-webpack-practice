process.env.NODE_ENV = 'development';
const Extract = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
let uglify1 = webpack.optimize.UglifyJsPlugin;
let uglify2 = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: ['./assets/entry.js'],

	output: {
		path: __dirname + '/bundle',
		filename: '[name].js'
	},
	
	module: {
		rules: [
			{
				test: /\.css$/,
				use: Extract.extract({
					use: 'css-loader',
					fallback: 'style-loader'
				})
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: [
								['env', {
									targets: {
										browsers: ['last 2 versions']
									}
								}]
							]
						}
					}
				]
			},
			{
				test: /\.txt$/,
				loader: 'raw-loader'
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]'
				}
			}
		]
	},
	plugins: [
		// new webpack.HotModuleReplacementPlugin(),
		new CleanWebpackPlugin(['bundle']),
		new HtmlWebpackPlugin({
      filename: './index.html',
      template: './assets/index.html',
      inject: true
    }),
		new Extract('./style.css'),
		new webpack.optimize.UglifyJsPlugin({
			exclude: /node_modules/
		})
	]
}