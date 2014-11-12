var app = angular.module('wedding');

app.controller('setupCtrl', function($scope, setupService){
	$scope.step1 = false;

	var getUser = function(){
		console.log($scope.currentUser)
		setupService.getUser($scope.currentUser)
		.then(function(){
			
		})
	}

	getUser();
})