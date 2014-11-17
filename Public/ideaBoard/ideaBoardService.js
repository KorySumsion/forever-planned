var app = angular.module('wedding');

app.service("ideaBoardService", function($http, $q, $cookieStore){

	// this.getUser = function(user){
	// 	var deferred = $q.defer();
	// 	$http({
	// 		method: 'GET',
	// 		url: '/api/user/' + user._id 
	// 	}).then(function(res){
	// 		deferred.resolve(res.data)
	// 	})
	// 	return deferred.promise;
	// }

	this.addBoard = function(board, user){
		var deferred = $q.defer();
		$http ({
			method: 'POST',
			url: '/api/ideaBoard/' + user._id,
			data: board
		}).then(function(res){
			console.log(res.data)
			//$cookieStore.put("currentUser", res.data)

			deferred.resolve(res.data)
		})
		return deferred.promise;
	}


	this.saveBoard = function(board, user){

		var deferred = $q.defer();
		$http({
			method: 'PUT',
			url: '/api/ideaBoard/' + user._id,
			data: board
		}).then(function(res){
			//console.log(res)
			deferred.resolve(res.data);
		})
		return deferred.promise;

	}

	this.deleteBoard = function(board, user){
		//console.log('idea service front end board: ', board)
		var deferred = $q.defer();
		$http({
			method: 'DELETE',
			url: '/api/ideaBoard/' + user._id + '/' + board._id,
			data: {user: user, board: board}
		}).then(function(res){
			deferred.resolve(res.data)
		})
		return deferred.promise;
	}
})