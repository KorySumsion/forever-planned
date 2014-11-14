"use-strict"

var AuthService = require('./auth-service');
var User = require('../models/userModel');
var Idea = require('../models/idea')
var Promise = require('bluebird');

Promise.promisifyAll(User);
Promise.promisifyAll(User.prototype);
Promise.promisifyAll(Idea);
Promise.promisifyAll(Idea.prototype);


module.exports.login = function(req, res){
	var reqUser = req.body

	AuthService.findUserByEmail(reqUser.email).
	then(function(user){
		if(user === null){
			res.send({errorMessage: "There is no account with that email."})
		} else if(user.password !== reqUser.password){
			res.send({errorMessage: "You must have typed your password wrong"})
		} else {
			res.status(200).send(user);
		}
	}).catch(function(err){
		console.log(err)
	})

}


module.exports.getUser = function(req, res){
	var id = req.params.userid;
	console.log("AUTH-CONTROLLER ", id)

		AuthService.getUser(id)
		.then(function(user){
			res.status(200).send(user)
	})

};



module.exports.createUser = function(req, res){
	AuthService.createUser(req.body)
	.then(function(user){
		res.status(200).send(user)
	}).catch(function(err){
		console.log('err adding user ', err)
	})

}


module.exports.updateUser = function(req, res) {
	var id = req.body._id;
	delete req.body._id 
	var userUpdate = req.body
	console.log(userUpdate);
	AuthService.updateUser(id, userUpdate)
	.then(function(user){
		//console.log(user);
		res.status(200).send(user);
	}).catch(function(err){
		console.log(err)
		res.send(err);
	})	
}

// module.exports.findUser = function(req, res){
// 	console.log('req.body ', req.params.userid)
// 	var id = req.params.userid;

// 	User.findById(id, function(err, user){
// 		if(err){
// 			console.log(err)
// 		} else {
// 			console.log('user ', user)
// 			res.status(200).send(user);
// }

// })






