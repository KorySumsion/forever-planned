var app = angular.module('wedding');

app.service('toDoService', function($http, $q, authService){


	this.editTodos = function(userObj){
		delete userObj.ideas;
		delete userObj.password;
		var deferred = $q.defer();
		$http({
			method: 'PUT',
			url: '/api/updateUser/' + userObj._id,
			data: userObj
		}).then(function(res){
			authService.setUser(res.data)
			return deferred.resolve(res.data);
		})
		return deferred.promise
	}

	
})