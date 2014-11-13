
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