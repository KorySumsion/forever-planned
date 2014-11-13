var ToDoService = require('./todo-service');
var User = require('../models/userModel');



//move to server.js the following routes



//app.delete('/api/todo/:todoid', TodoController.deleteTodo)
//app.get('/api/todo', TodoController.getTodos)
//req.body has to have whole to do to edit it
//app.put('/api/todo/:todoid', TodoController.editTodos)
//app.post('/api/todo/:userid', TodoController.postUserToDo)

//have to change user and add the to do . .oh, right add it first
//to the todos and then return the id to add to the user- but you have to find the 
//user async as well .. . . we have a user who we can find by email in authservice


//just editing user, so don't need this?
// module.exports.postUserToDo = function(req, res){
// 	var todo = req.body
// 	var userId = req.params.userId

// }


module.exports.getTodos = function(req, res){
	User.findOne({email: req.email}, function(err, user){
		if(err){
			console.log(err)
		} else {

			var arr = user.todo
			Todo.find({
				'_id' : { $in : arr }
			}, function(err, todos){
				if(err){
					console.log(err)
				} else {
					res.status(200).send(todos)
				}

			})
		}
	})
}

//have to edit the to do- if delete have to do something to both
module.exports.editTodos = function(req, res){
	//var todoid = req.params.todoid
	//var update = todo with deleted id to pass updated
	TodoService.edit(todoid, update)
	.then(function(todo){
		res.status(200).send()
	}).catch(function(err){
		console.log(err);
	})
}


module.exports.deleteTodo = function(req, res){
	var todoid = req.params.todoid
}