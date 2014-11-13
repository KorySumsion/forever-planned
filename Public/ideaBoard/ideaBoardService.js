var app = angular.module('wedding');

app.service("ideaBoardService", function($http, $q){

	this.addBoard = function(board, user){
		var deferred = $q.defer();
		$http ({
			method: 'POST',
			url: '/api/ideaBoard/' + user._id,
			data: board
		}).then(function(res){
			console.log(res.data)
			deferred.resolve(res.data)
		})
		return deferred.promise;
	}
})