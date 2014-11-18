var app = angular.module('wedding');


app.controller('loginCtrl', function($scope, $cookieStore, $state, authService){
//alert("login")
	//console.log($scope.user)
	$scope.login = function(){
		
		authService.loginUser($scope.user).then(function(res){		
				$state.go('auth.home', {userid: res._id});
		
		})
		
	}
})

