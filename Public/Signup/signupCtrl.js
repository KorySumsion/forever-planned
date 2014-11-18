var app = angular.module('wedding');
app.controller('signupCtrl', function($scope, $cookieStore, $state, authService){
	$scope.user = {}


	$scope.signUp = function(){

		if($scope.user.password !== $scope.user.password2){
			$scope.user.password2 = '';
			alert('Your passwords do not match');
			return //we don't want it to go to the service
		}
		delete $scope.user.password2;
		authService.signupUser($scope.user)
		
		.then(function(user){
			$state.go('auth.Setup', {userid: user._id})

		})
		$scope.user = '';
	}
})