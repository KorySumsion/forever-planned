var app = angular.module('wedding');

app.service('authService', function($http, $q){
	this.loginUser = function(userObj){
		var deferred = $q.defer();
		$http({
			method: 'POST',
			url: '/api/auth',
			data: user
		}).then(function(res){
			return deferred.resolve(res.data);
		})
		return deferred.promise;
	}

	this.signupUser = function(userObj){
		var deferred = $q.defer();
		$http({
			method: 'POST',
			url: '/api/auth',
			data: user
		}).then(function(res){
			return deferred.resolve(res.data);
		})
		return deferred.promise;
	}

})