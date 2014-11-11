var app = angular.module('wedding');

app.service('authService', function($http, $q, $cookieStore){
	this.loginUser = function(userObj){
		var deferred = $q.defer();
		$http({
			method: 'POST',
			url: '/api/login',
			data: user
		}).then(function(res){
			$cookieStore.put('user', user)
			return deferred.resolve(res.data);
		})
		return deferred.promise;
	}

	this.signupUser = function(userObj){
		var deferred = $q.defer();
		$http({
			method: 'POST',
			url: '/api/newUser',
			data: user
		}).then(function(res){
			$cookieStore.put('user', user)
			return deferred.resolve(res.data);
		})
		return deferred.promise;
	}

})