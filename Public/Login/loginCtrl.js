var app = angular.module('wedding');


<<<<<<< HEAD
app.controller('loginCtrl', function($scope, $cookieStore, $state, authService){
=======
app.controller('loginCtrl', function($scope, $state, $cookieStore, $location, authService){
>>>>>>> 0ffa72ac40f453b5704be4b4b83d94aec3f31c88
//alert("login")
	//console.log($scope.user)
	$scope.login = function(){
		
<<<<<<< HEAD
		authService.loginUser($scope.user).then(function(res){		
				$state.go('auth.home', {userid: res._id});
		
=======
		authService.loginUser($scope.user).then(function(res){
			console.log(res);			
				//$location.path('/ideas/' + res._id);
				$state.go("home", { userid: res._id})
>>>>>>> 0ffa72ac40f453b5704be4b4b83d94aec3f31c88
		})
		
	}
})

