var app = angular.module('wedding');

app.controller('authCtrl', function($scope, $state, authService, user, $rootScope){

	
	
	if(!user){
		$state.go('Login');
	} else {
		$rootScope.currentUser = user;
		$scope.$watch(authService.setUser(user), function(){

			$rootScope.currentUser = authService.getUser();
			//console.log($scope.currentUser);

			
		})
	}

	

})