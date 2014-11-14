var Idea = require('../models/idea'),
	User = require('../models/userModel'),
	ideaBoardService = require('./ideaBoard-Service')


module.exports.addBoard = function(req, res){
	console.log("ideaBoard-Ctrl req.params", req.params, "req.body", req.body)
	var userId = req.params.userId
	ideaBoardService.addBoard(req.body).then(function(board){
		User.findOne({_id: userId}).populate('ideas').exec(function(err, user){
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