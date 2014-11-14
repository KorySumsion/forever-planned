var app = angular.module('wedding');

app.service('authService', function($http, $q, $cookieStore){
	this.loginUser = function(userObj){
		console.log('service, ', userObj)
		var deferred = $q.defer();
		$http({
			method: 'POST',
			url: '/api/login',
			data: userObj
		}).then(function(user){
			console.log(user)
			$cookieStore.put('currentUser', user.data)
			return deferred.resolve(user.data);
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
			console.log(res.data[0]);
			$cookieStore.put('currentUser', res.data[0]);
			return deferred.resolve(res.data[0]);
		})
		return deferred.promise;
	}

})