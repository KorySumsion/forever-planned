"use-strict"
var Express = require('express');
var BodyParser = require('body-parser');
var Passport = require('passport');
var Session = require('express-session');
var Mongoose = require('mongoose');

var User = require('./lib/models/userModel');

var Schema = Mongoose.Schema;
var mongoUri = 'mongodb://localhost:27017/WeddingPlans';

Mongoose.connect(mongoUri);
var connection = Mongoose.connection;
connection.once('open', function(){
	console.log('mongo listening on ' + mongoUri);
})


var app = Express();

var port = 9999;

app.use(Express.static(__dirname + '/Public'))
app.use(BodyParser.json());
app.use(Session ({ secret: 'wedding secrets'}));
app.use(Passport.initialize());
app.use(Passport.session());

var AuthController = require('./lib/auth/auth-controller');

/*Authorization Routes*/
app.post('/api/login', AuthController.login);
app.post('/api/newUser', AuthController.createUser)



app.listen(port, function(){
	console.log("Knights of Camelot on port: ", port)
})