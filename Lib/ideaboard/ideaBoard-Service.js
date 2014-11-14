var Idea = require('../models/idea'),
	User = require('../models/userModel'),
	Promise = require('bluebird');

Promise.promisifyAll(Idea)
Promise.promisifyAll(Idea.prototype)

module.exports.addBoard = function(idea){
	console.log("ideaBoard-service idea: ", idea)
	return new Idea(idea).saveAsync().then(function(savedIdea){
		console.log(savedIdea);
		return savedIdea;
	})
}

