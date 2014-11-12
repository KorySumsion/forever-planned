var app = angular.module('wedding')

app.service('setupService', function($http){
	this.getUser = function(userObj){
		$http({
			method: "GET",
			url: "/setup/" + userObj._id
		}).then(function(user){
			return user;
		})
	}
})