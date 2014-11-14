
var Promise = require('bluebird');


var User = require('../models/userModel');

Promise.promisifyAll(User);
Promise.promisifyAll(User.prototype);

var User = require('../models/userModel.js')


Promise.promisifyAll(User)
Promise.promisifyAll(User.prototype)


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
	return User.findOne({_id: userid}).populate('ideas').exec(function(err, user){
		if(err){
			console.log(err)
		} else {
			console.log(user)
		}
	})
}