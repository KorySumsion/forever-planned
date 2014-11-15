
var Promise = require('bluebird');


var User = require('../models/userModel');

Promise.promisifyAll(User);
Promise.promisifyAll(User.prototype);




module.exports.createUser = function(user){
	return new User(user).saveAsync();
}

module.exports.findUserByEmail = function(userEmail){
	return User.findOneAsync({email: userEmail});
}


module.exports.updateUser = function(userid, obj){
	console.log('user id ', userid + ' and ' , obj);
	return User.findByIdAndUpdateAsync(userid, obj);
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