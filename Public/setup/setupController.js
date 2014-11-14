var app = angular.module('wedding');


app.controller('setupCtrl', function($scope, $timeout, setupService, $location){
	$scope.step1 = false;
	$scope.step2 = false;
	$scope.step3 = false;

	$scope.showStep1 = function(){
		$timeout(function(){
			$scope.step1 = true;}, 100);
	}

	$scope.showStep2 = function(){
		$scope.step1 = false;
		$timeout(function(){
			$scope.step2 = true;}, 500);
	}
	$scope.showStep3 = function(){
		$scope.step2 = false;
		$timeout(function(){
			$scope.step3 = true;}, 500);
	}

	$scope.goToNames = function(){
		$scope.step2 = false;
		$timeout(function(){
			$scope.step1 = true;}, 500);
	}
	$scope.goToDate = function(){
		$scope.step3 = false;
		$timeout(function(){
			$scope.step2 = true;}, 500);
	}

	$scope.addWedInfo= function(){
		if($scope.currentUser.budget){
			$scope.currentUser.budget = parseInt($scope.currentUser.budget.replace('$', '').replace(',', ''));
			setupService.addWedInfo($scope.currentUser);
			console.log($scope.currentUser)
			$location.path('/ideas/' + $scope.currentUser._id);
		} else {
			alert("Please enter a budget amount");
		}
	}


	// var getUser = function(){
	// 	console.log($scope.currentUser)
	// 	setupService.getUser($scope.currentUser)
	// 	.then(function(){
			
	// 	})
	// }

	// getUser();

})