var Idea = require('../models/idea'),
	User = require('../models/userModel'),
	ideaBoardService = require('./ideaBoard-Service')


module.exports.addBoard = function(req, res){
	console.log("ideaBoard-Ctrl req.params", req.params, "req.body", req.body)
	var userId = req.params.userId
	ideaBoardService.addBoard(req.body).then(function(board){
		console.log(board);
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

module.exports.saveBoard = function(req, res){
	var id = req.params.userId;
	var board = req.body;
	console.log("ideaBoardCtrl line 31 board ", board);
	ideaBoardService.saveBoard(board, function(err, updatedBoard){
		console.log("ideaBoardCtrl line 34 board: ", err)
		if(err){
			res.send(err)
		} else {
			res.send(updatedBoard)
		}
	})
}

module.exports.deleteBoard = function(req, res){
	console.log("hit delete board in ctrl, ", req);
	var id = req.params.boardId;
	
	ideaBoardService.deleteBoard(id, function(err){
		if(!err){
			res.send("deleted");
		}else {
			res.send(err);
		}
	})
}