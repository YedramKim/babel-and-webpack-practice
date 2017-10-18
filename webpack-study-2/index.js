const
	webpack = require('./webpack'),
	express = require('express'),
	app = express();

webpack(app);
app.get('/', (req, res, next) => {
	res.send('お久しぶり, express');
});

app.listen(3000, () => console.log('Express running at localhost'));