var app = angular.module('wedding');


app.controller('loginCtrl', function($scope, $cookieStore, $location, authService){
//alert("login")
	//console.log($scope.user)
	$scope.login = function(){
		debugger;
		authService.loginUser($scope.user).then(function(res){
			if(res.errorMessage){
				$scope.error = res.errorMessage;
			} else {
				$location.path('/setup')
			}
		})
		
	}
})


