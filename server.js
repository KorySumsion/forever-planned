
var Express = require('express');
var BodyParser = require('body-parser');
var Passport = require('passport');
var Session = require('express-session');
var Mongoose = require('mongoose');
var Flash = require("connect-flash");
//var Cookie = require("cookie-parser");
var LocalStrategy = require('passport-local').Strategy;
var ideaBoardCtrl = require('./Lib/ideaboard/ideaBoard-Ctrl');

var User = require('./Lib/models/userModel');


var mongoUri = 'mongodb://localhost:27017/WeddingPlans';

var app = Express();

var port = 9999;

// app.set("views", __dirname + "/Public/Login");
// app.set("view engine", "html");
// app.engine("html");
app.use(Express.static(__dirname + '/Public'))
app.use(BodyParser.json());
app.use(Session ({ secret: 'wedding secrets'}));
app.use(Passport.initialize());
app.use(Passport.session());
app.use(Flash());
//app.use(Cookie());






/* Controllers for Routes*/


var AuthController = require('./Lib/auth/auth-controller');

//var WeddingInfoController = require('./lib/wedInfoSetup/wedInfo-controller.js')




/* User Model Reference for Passport*/

//var User = require(usermodelfile)

Passport.serializeUser(function(user, done) {
  
  done(null, user);
});

Passport.deserializeUser(function(user, done) {

  done(null, user);
});


Passport.use(new LocalStrategy(
    // passReqToCallback: true
	{
		usernameField: "email",
		passwordField: "password"
	},
  function(email, password, done) {
    console.log('server.js line 59ish ', email)
    
    User.findOne({email: email}).populate("ideas").exec(function (err, user) {
    	if(err) {
    		return done(new Error("No User Found"))
    	} else {
            if(!user){
                console.log("this user don't exist")
                return done(null, false, {message: "No User Found"}) 
            }
    		user.comparePassword(password, function(err, isMatch){
    			if(err){
    				return done(err)
    			} 
    				if(!isMatch){
                        console.log("password not valid")
    					return done(null, false, {message: "Incorrect Email or Password"})
    				} else {
                         console.log("server.js line 80 ", user)
    					return done(null, user);

    				}
    		})
    	}
    })
}));

// 

/*Authorization Routes*/
var authenticateUser = function(req, res, next){
    Passport.authenticate("local", function(err, user, info){
        console.log("authenticate server.js line 88", user, info)
        if(!user){
            return res.status(401).end()
        } else {
            req.logIn(user, function(err){
                user.password = '';
                return res.status(200).send(user);
            })
        }
    }) (req, res, next);
}

var requireAuth = function(req, res, next){
    if(!req.isAuthenticated()){
        return res.status(401).end();
    }
    next();
}
app.post('/api/login', authenticateUser);

//app.get('/api/user/:userid', AuthController.findUser);

app.get('/setup/:userId', requireAuth, function(req, res){
    console.log("made it to the get request")
})

app.post('/api/newUser', AuthController.createUser, authenticateUser);

app.put('/api/updateUser/:userId', AuthController.updateUser);


app.post('/api/ideaBoard/:userId', ideaBoardCtrl.addBoard);

app.get('/api/user/:userId', AuthController.getUser);

app.put('/api/user/board/:boardId', ideaBoardCtrl.saveBoard);

app.delete('/api/user/board/:boardId', ideaBoardCtrl.deleteBoard);


    Mongoose.connect(mongoUri);
    var connection = Mongoose.connection;
    connection.once('open', function(){
        console.log('mongo listening on ' + mongoUri);
        app.listen(port, function(){
        console.log("Knights of Camelot on port: ", port)
    })
})

