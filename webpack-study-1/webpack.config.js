const Extract = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		bundle: './entry.js'
	},

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
			},
			{
				test: /\.txt$/,
				loader: 'raw-loader'
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ['file-loader'],
				// options: {
				// 	name: '[name].[ext]'
				// }
			}
		]
	},
	plugins: [
		new Extract('./style.css')
	]
}