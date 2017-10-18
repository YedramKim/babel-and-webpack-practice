const
	webpack = require('webpack'),
	webpackMiddleware = require('webpack-dev-middleware'),
	webpackHotMiddleware = require('webpack-hot-middleware'),
	config = require('./webpack.config'),
	compile = webpack(config);

webpack(config, () => {
	console.log('완료');
});
module.exports = (app) => {
	app.use(webpackMiddleware(compile, {
		noInfo: true,
		publicPath: '/static',
		stats: {
			colors: true
		}
	}));
	app.use(webpackHotMiddleware(compile, {
		log: console.log
	}));
};