var Mongoose = require('mongoose'),
	Schema = Mongoose.Schema,

var Idea = new Schema ({
	// image: {type: String},
	title: {type: String},
	text: {type: String},
	price: {type: Number},
	includeBudget: {type: Boolean}
})



module.exports = Mongoose.model('Idea', Idea)	