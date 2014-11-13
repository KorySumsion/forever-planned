var Mongoose = require('mongoose'),
	Schema = Mongoose.Schema,
	ObjectId = Schema.Types.ObjectId,
	Bcrypt = require('bcrypt'),
	SALT_WORK_FACTOR = 10;

var User = new Schema ({
	name: {type: String, required: true},
	email: {type: String, required: true, unique: true},
	password: {type: String, required: true},
	bride: {type: String},
	groom: {type: String},
	weddingDate: {type: Number},
	ideas: [{type: ObjectId, ref: 'Idea'}],
	todo:[{type: String}]
});




User.pre('save', function(next){

	var user = this;

	if(!user.isModified('password')) return next();

	Bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
		if (err) return next(err)

			Bcrypt.hash(user.password, salt, function(err, hash){
				if (err) return next(err);

				user.password = hash;
				next();
			})
	})
});

User.methods.comparePassword = function(candidatePassword, cb){
	Bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
		if (err) return cb(err);
		cb(null, isMatch)
	})
};

module.exports = Mongoose.model("User", User);

