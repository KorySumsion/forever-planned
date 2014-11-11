var Express = require('express');
var BodyParser = require('body-parser');
var Mongoose = require('mongoose');
var User = require('./lib/models/userModel');

var app = Express();

var port = 9999;

app.use(Express.static(__dirname + '/Public'))
app.use(BodyParser.json());

var AuthController = require('./lib/auth/auth-controller');

/*Authorization Routes*/
app.post('/api/auth', AuthController.authorize);




app.listen(port, function(){
	console.log("Knights of Camelot on port: ", port)
})