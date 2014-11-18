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
	boardid = board._id;
	delete board._id;
	return Idea.findByIdAndUpdate(boardid, board, function(err, savedBoard){
		console.log('savedBoard in ideaBoard-service ', savedBoard)
		if(!err){
			cb(null, savedBoard)
		} else {
			cb(err)
		}
	});
}

module.exports.deleteBoard = function(userId, boardId, cb){
	return User.findOne({_id: userId}, function(err, userObj){

		if(userObj.ideas.indexOf(boardId) !== -1){
			userObj.ideas.splice((userObj.ideas.indexOf(boardId)), 1);
			userObj.save(function(err){
				err && cb(err, null);
				Idea.findOne({_id: boardId}, function(err, boardObj){
					boardObj.remove(function(err){
						err && cb(err, null);

						return cb(null, userObj);
						
					});
				});
					
			});
		};
	});
}



