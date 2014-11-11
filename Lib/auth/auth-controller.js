//var User = require(user model file)

module.exports.authorize = function(req, res){
	var user = req.body

	User.findOne({email: user.email}, function(err, user){
		if(user === null){
		
		}
	})
}