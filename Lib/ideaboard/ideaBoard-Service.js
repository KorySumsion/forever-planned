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

module.exports.saveBoard = function(board, cb){

	return Idea.findOneAndUpdate({_id: board._id}, board, function(savedBoard, err){
		if(!err){
			cb(null, savedBoard)
		} else {
			cb(err)
		}
	});
}

module.exports.deleteBoard = function(board, cb){
		console.log("hit delete board in service", board);

		return Idea.findOneAndRemove({_id: board}, function(err){
			if(!err){
				cb(null);
			} else {
				cb(err);
			}
		})
	}

	// console.log("hit ideaboard service saveBoard", board)
	// return Idea.findOne({_id: board._id}, function(err, savedBoard){
	// 	console.log("ideaboard service savedBoard, ", savedBoard)
	// 	savedBoard = board;
	// 	Idea(savedBoard).save(function(err){
	// 		if(err){
	// 			return cb(err)
	// 		} else {
	// 			console.log("ideaboard server line 25 savedBoard: ", savedBoard);
	// 			return cb(null, savedBoard)
	// 		}
	// 	})
	// })


