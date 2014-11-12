var Mongoose = require('mongoose'),
	Schema = Mongoose.Schema

var Todo = new Schema ({
	user: [{type: Schema.Types.ObjectId, ref: 'User'}],
	brideList: [{type: String}],
	groomList: [{type: String}],
	taskCompleted: {type: Boolean},
	completeBy: {type: Date}
})

module.exports = Mongoose.model('Todo', Todo);