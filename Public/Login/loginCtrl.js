var app = angular.module('wedding');



app.controller('loginCtrl', function($scope, $state, authService){


	$scope.login = function(){
		

		authService.loginUser($scope.user).then(function(res){		
				$state.go('auth.home', {userid: res._id});
		})
		
	}
})

