process.env.NODE_ENV = 'development';
const Extract = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
let uglify1 = webpack.optimize.UglifyJsPlugin;
let uglify2 = require('uglifyjs-webpack-plugin');

console.log('패스');
console.log(require('path').resolve(__dirname,'src'));
console.log(require('path').join(__dirname,'src'));

module.exports = {
	entry: './assets/entry.js',

	output: {
		path: __dirname + '/bundle',
		filename: '[name].js'
	},
	
	module: {
		rules: [
			{
				test: /\.css$/,
				// use: Extract.extract({
				// 	use: 'css-loader',
				// 	fallback: 'style-loader'
				// })
				use: ['style-loader', 'css-loader']
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
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
      filename: './index.html',
      template: './index.html',
      inject: true
    })
		// new Extract('./style.css'),
		// new webpack.optimize.UglifyJsPlugin(),
		// new webpack.optimize.CommonsChunkPlugin({
		// 	name: 'common',
		// 	filename: 'common.js'
		// })
	]
}