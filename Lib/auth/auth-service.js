
var Promise = require('bluebird');


var User = require('../models/userModel');
var Idea = require('../models/idea')

Promise.promisifyAll(User);
Promise.promisifyAll(User.prototype);
Promise.promisifyAll(Idea);
Promise.promisifyAll(Idea.prototype);



module.exports.createUser = function(user){
	return new User(user).saveAsync();
}

module.exports.findUserByEmail = function(userEmail){
	return User.findOneAsync({email: userEmail});
}


module.exports.updateUser = function(userid, obj, cb){
	console.log('auth-service line 23user id ', userid + ' and ' , obj);
	return User.findByIdAndUpdate(userid, obj, function(err, savedUser){
		console.log("auth-service line 27 savedUser: ", savedUser)
		if(err){
			cb(err)
		}else {
			cb(null, savedUser);
		}
	});
}

module.exports.getUser = function(userid){
	//console.log("hit service")
	//console.log('userid ', userid)
	return User.findOne({_id: userid}).populate("ideas").exec(function(err, obj){
		if(!err){
			//console.log("userservice line 21 obj: ",obj)
		} else {
			//console.log("userService line 23 err: ", err)
		}
	})
};


