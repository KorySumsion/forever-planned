"use-strict"
var Express = require('express');
var BodyParser = require('body-parser');
var Passport = require('passport');
var Session = require('express-session');
var Mongoose = require('mongoose');
var LocalStrategy = require('passport-local').Strategy;
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

/* Controllers for Routes*/
var AuthController = require('./lib/controllers/auth-controller');


/* User Model Reference for Passport*/

//var User = require(usermodelfile)

Passport.serializeUser(function(user, done) {
  
  done(null, user);
});

Passport.deserializeUser(function(user, done) {

  done(null, user);
});



Passport.use(new LocalStrategy(
  function(req.user.email, req.user.password, done) {
    User.findOne({ email: user.email }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));


/*Authorization Routes*/
app.post('/api/login', Passport.authenticate('local'), AuthController.login);
app.post('/api/newUser', AuthController.createUser)



app.listen(port, function(){
	console.log("Knights of Camelot on port: ", port)
})