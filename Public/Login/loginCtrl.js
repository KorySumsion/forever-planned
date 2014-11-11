var app = angular.module('wedding');

app.controller('signupCtrl', function($scope, $cookieStore){
	
	$scope.login = function(){
		authService.loginUser($scope.user).then(function(res){
			if(res.errorMessage){
				$scope.error = res.errorMessage;
			} else {
				$location.path('/')
			}
		})
		
	}

