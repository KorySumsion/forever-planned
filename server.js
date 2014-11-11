var Express = require('express');
var BodyParser = require('body-parser');

var app = Express();

var port = 9999;

app.use(BodyParser.json());

app.listen(port, function(){
	console.log("Knights of Camelot on port: ", port)
})