"use-strict"
var Promise = require('bluebird');
var User = require('../models/userModel');

Promise.promisifyAll(User);
Promise.promisifyAll(User.prototype);

module.exports.createUser = function(User){
	return new User(user).saveAsync();
}

module.exports.findUserByEmail = function(userEmail){
	return User.findOneAsync({email: userEmail});
}