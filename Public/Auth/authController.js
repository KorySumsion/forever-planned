var app = angular.module('wedding');

app.controller('authCtrl', function($scope, $state, authService, user){
	if(!user){
		$state.go('Login');
	} else {
		$scope.currentUser = user;
		$scope.$watch(authService.setUser(user), function(){
		$scope.currentUser = authService.getUser();
	})
	}

	

})