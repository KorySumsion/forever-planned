var app = angular.module('wedding')

app.service('setupService', function($http, $q, $cookieStore){
	this.getUser = function(userObj){
		$http({
			method: "GET",
			url: "/setup/" + userObj._id
		}).then(function(user){
			return user;
		})
	}

	this.addWedInfo = function(userObj){
		var deferred = $q.defer()
		$http({
			method: 'PUT',
			url: '/api/updateUser/' + userObj._id,
			data: userObj
		}).then(function(res){
			$cookieStore.put("currentUser", res.data)
			return deferred.resolve(res)
		})
		return deferred.promise
	}


})