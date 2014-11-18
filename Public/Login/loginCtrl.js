var app = angular.module('wedding');


app.controller('loginCtrl', function($scope, $state, $cookieStore, $location, authService){
//alert("login")
	//console.log($scope.user)
	$scope.login = function(){
		
		authService.loginUser($scope.user).then(function(res){
			console.log(res);			
				//$location.path('/ideas/' + res._id);
				$state.go("home", { userid: res._id})
		})
		
	}
})


