var app = angular.module('wedding');

app.service('toDoService', function($http, $q){

	this.getTodos = function(userObj){
		console.log(userObj)
		var deferred = $q.defer();
		$http({
			method: 'GET',
			url: '/api/user/' + userObj._id,
		}).then(function(res){
			return deferred.resolve(res.data);
		})
		
		return deferred.promise
	}

	this.editTodos = function(userObj){

		var deferred = $q.defer();
		$http({
			method: 'PUT',
			url: '/api/updateUser/' + userObj._id,
			data: userObj
		}).then(function(res){
			return deferred.resolve(res.data);
		})
		return deferred.promise
	}

	
})