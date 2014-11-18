var app = angular.module('wedding');


app.controller('setupCtrl', function($scope, $timeout, setupService, $state, authService){
	$scope.step1 = false;
	$scope.step2 = false;
	$scope.step3 = false;

	console.log($scope.currentUser);

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
		$scope.oneD = "goRight";
		$timeout(function(){
			$scope.step2 = false;
			$timeout(function(){
				$scope.step3 = true;}, 500);}, 1);
	}

	$scope.goToNames = function(){
		$scope.oneD = "goLeft";
		$timeout(function(){
			$scope.step2 = false;
			$timeout(function(){
				$scope.step1 = true;}, 500);}, 1);	
	}
	$scope.goToDate = function(){
		$scope.stepD = "goLeft";
		$timeout(function(){
			$scope.step3 = false;
			$timeout(function(){
				$scope.step2 = true;}, 500);}, 1);
	}

	$scope.addWedInfo= function(){
		if($scope.currentUser.budget){
			$scope.currentUser.budget = parseInt($scope.currentUser.budget.replace('$', '').replace(',', ''));
			console.log('budget ', $scope.currentUser.budget)
			setupService.addWedInfo($scope.currentUser)
			.then(function(res){
				
				$state.go('auth.home', {userid: res.data._id})
			})
			
			
		} else {
			alert("Please enter a budget amount");
		}
	}



	$scope.logout = function(){
		$cookieStore.remove('currentUser');
	}
	// var getUser = function(){
	// 	console.log($scope.currentUser)
	// 	setupService.getUser($scope.currentUser)
	// 	.then(function(){
			
	// 	})
	// }

	// getUser();

})