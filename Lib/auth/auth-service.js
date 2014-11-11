"use-strict"
var Promise = require('bluebird');
//var User = require(user model file)

Promise.promisify(User)
Promise.promisify(User.prototype)

module.exports.createUser = function(User){
	return new User(user).saveAsync();
}

module.exports.findUserByEmail = function(userEmail){
	return User.findOneAsync({email: userEmail});
}