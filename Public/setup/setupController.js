var app = angular.module('wedding');


app.controller('setupCtrl', function($scope, $timeout, setupService){
	$scope.step1 = false;
	$scope.step2 = false;

	$scope.showStep1 = function(){
		$timeout(function(){
			$scope.step1 = true;}, 100);
	}

	$scope.showStep2 = function(){
		$scope.step1 = false;
		$timeout(function(){
			$scope.step2 = true;}, 500);
	}
	$scope.goToNames = function(){
		$scope.step2 = false;
		$timeout(function(){
			$scope.step1 = true;}, 500);
	}

	$scope.addWedInfo= function(){
		setupService.addWedInfo($scope.currentUser);
		console.log($scope.currentUser)
		$scope.currentUser = '';
	}


	// var getUser = function(){
	// 	console.log($scope.currentUser)
	// 	setupService.getUser($scope.currentUser)
	// 	.then(function(){
			
	// 	})
	// }

	// getUser();

})