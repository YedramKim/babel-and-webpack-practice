var babel = require('babel-core');
var fs = require('fs');
var babelrc = JSON.parse(fs.readFileSync('.babelrc'));

babel.transformFile('script.js', babelrc, function(err, result) {
	if (err) {
		console.log(err);
		return;
	}
	fs.writeFileSync('./dist/build.js', result.code);
});