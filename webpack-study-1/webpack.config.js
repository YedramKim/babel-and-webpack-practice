

module.exports = {
	entry: {
		bundle: './entry.js',
		sub: './file2.js'
	},

	output: {
		path: __dirname + '/bundle',
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
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
			}
		]
	}
}