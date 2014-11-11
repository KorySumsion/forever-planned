var Mongoose = require('mongoose'),
	Schema = Mongoose.Schema;

var User = new Schema ({
	name: {type: String, required: true},
	email: {type: String, required: true, unique: true},
	password: {type: String, required: true},
	bride: {type: String},
	groom: {type: String},
	weddingDate: {type: Number},
	ideas: [{type: String}],
	todo:[{type: String}]
})

module.exports = Mongoose.model("User", User);