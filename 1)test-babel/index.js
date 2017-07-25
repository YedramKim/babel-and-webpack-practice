const babel = require('babel-core'),
	path = require('path'),
	fs = require('fs');

let babelrc = JSON.parse(fs.readFileSync(path.join(__dirname, '../', '.babelrc')));

babel.transformFile('code.js', babelrc, (err, {code}) => {
	if (err) {
		console.log('에러 발생');
		console.log(err);
	} else {
		fs.writeFileSync(path.join(__dirname, 'translate.js'), code);
	}
});