var express = require('express');

var app = express();

app.set('views', __dirname + '/views');
app.use('/img', express.static(__dirname + "/views/img"));
app.use('/js', express.static(__dirname + "/views/js"));
app.use('/modules', express.static(__dirname + "/views/modules"));
app.use('/css', express.static(__dirname + '/views/css'));

app.get('/', function (req, res) {
	res.sendFile('index.html', {
		root: './views'
	});
});

app.get('/plane', function (req, res) {
	res.sendFile('plane.html', {
		root: './views'
	});
});

app.listen(3000);