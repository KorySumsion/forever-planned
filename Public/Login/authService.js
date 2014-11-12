var app = angular.module('wedding');

app.service('authService', function($http, $q, $cookieStore){
	this.loginUser = function(userObj){
		var deferred = $q.defer();
		$http({
			method: 'POST',
			url: '/api/login',
			data: userObj
		}).then(function(res){
			console.log(res.data)
			$cookieStore.put('user', res.data)
			return deferred.resolve(res.data);
		})
		return deferred.promise;
	}

	this.signupUser = function(userObj){
		var deferred = $q.defer();
		$http({
			method: 'POST',
			url: '/api/newUser',
			data: userObj
		}).then(function(res){
			console.log(res.data);
			$cookieStore.put('user', res.data);
			return deferred.resolve(res.data);
		})
		return deferred.promise;
	}

})