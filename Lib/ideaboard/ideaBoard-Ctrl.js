var Idea = require('../models/idea'),
	User = require('../models/userModel'),
	ideaBoardService = require('ideaBoard-Service')


module.exports.addBoard = function(req, res){
	var userId = req.params.userid
	ideaBoardService.addBoard(req.body).then(function(board){
		User.findOne({_id: userId}).populate('board').exec(function(err, user){
			if(err){
				res.send(err)
			}else {
				user.ideas.addToSet(board[0]);
				user.save(function(err){
					if(err){
						res.send(err)
					}else {
						res.send(user)
					}
				})
			}
		})
	})
}	