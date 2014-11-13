var Idea = require('../models/idea'),
	User = require('../models/userModel'),
	ideaBoardCtrl = require('ideaBoard-Ctrl'),
	Promise = require('bluebird');

Promise.promisifyAll(Idea)
Promise.promisifyall(Idea.prototype)

module.exports.addBoard = function(idea){
	return new Idea(idea).saveAysnc().then(function(savedIdea){
		return savedIdea;
	})
}

