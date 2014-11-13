var Promise = require('bluebird');
var Todo = require('../models/toDoModel')

Promise.promisifyAll(Todo)
Promise.promisifyAll(Todo.prototype)

module.exports.edit = function(todoid, todo){
	return Todo.findByIdAndUpdateAsync(todoid, todo);
}

module.exports.delete = function(todoid){
	return Todo.findByIdAndRemoveAsync(todoid);
}
