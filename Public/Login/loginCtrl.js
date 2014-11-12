var app = angular.module('wedding');


app.controller('loginCtrl', function($scope, $cookieStore, $location, authService){
//alert("login")
	//console.log($scope.user)
	$scope.login = function(){
		
		authService.loginUser($scope.user).then(function(res){
			
				$location.path('/setup')
		
		})
		
	}
})


