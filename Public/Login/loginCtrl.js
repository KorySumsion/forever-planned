var app = angular.module('wedding');



app.controller('loginCtrl', function($scope, $state, authService){

	$scope.showLogin = true;
	$scope.login = function(){
		

		authService.loginUser($scope.user).then(function(res){		
				$state.go('auth.home', {userid: res._id});
		})
		
	}

	$scope.showSignup = false;
	$scope.displaySignup = function(){
		$scope.showSignup = true;
		$scope.showLogin = false;
	}

	$scope.displayLogin = function(){
		$scope.showSignup = false;
		$scope.showLogin = true;
	}
})

