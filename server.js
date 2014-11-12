
var Express = require('express');
var BodyParser = require('body-parser');
var Passport = require('passport');
var Session = require('express-session');
var Mongoose = require('mongoose');


var Schema = Mongoose.Schema

var User = require('./lib/models/userModel');

var LocalStrategy = require('passport-local').Strategy;

var User = require('./Lib/models/userModel');


var mongoUri = 'mongodb://localhost:27017/WeddingPlans';

var app = Express();

var port = 9999;

app.use(Express.static(__dirname + '/Public'))
app.use(BodyParser.json());
app.use(Session ({ secret: 'wedding secrets'}));
app.use(Passport.initialize());
app.use(Passport.session());




User.findOne({email: 'email'})

/* Controllers for Routes*/


<<<<<<< HEAD

var AuthController = require('./lib/auth/auth-controller');
=======
var AuthController = require('./Lib/auth/auth-controller');
>>>>>>> 3231c303d2bff01c56b5dc7341c763359235dfcc



/* User Model Reference for Passport*/

//var User = require(usermodelfile)

Passport.serializeUser(function(user, done) {
  
  done(null, user);
});

Passport.deserializeUser(function(user, done) {

  done(null, user);
});


Passport.use(new LocalStrategy(

	{
		usernameField: "email",
		passwordField: "password"
	},
  function(email, password, done) {
    console.log('made it here ', email + password)
    
    User.findOne({email: email}, function (err, user) {
    	if(err) {
    		return done(err)
    	} else {
            if(user === null){
                console.log("this user don't exist")
                return done(false) 
            }
    		user.comparePassword(password, function(err, isMatch){
    			if(err){
    				return done(err)
    			} else {
    				if(!isMatch){
    					return done(false)
    				} else {
    					return done(null, user);
    				}
    			}
    		})
    	}
    })
}));


/*Authorization Routes*/
app.post('/api/login', Passport.authenticate('local'), function(req, res){
    res.status(200).send()
});
app.post('/api/newUser', AuthController.createUser);


    Mongoose.connect(mongoUri);
    var connection = Mongoose.connection;
    connection.once('open', function(){
        console.log('mongo listening on ' + mongoUri);
        app.listen(port, function(){
        console.log("Knights of Camelot on port: ", port)
    })
})

