var app = angular.module('wedding');

app.controller('homeCtrl', function($scope, $cookieStore, $window, $state, $location){
	
	$scope.currentUser = $cookieStore.get('currentUser');
	$scope.logout = function(){
		$cookieStore.remove('currentUser');
	}

	if($state.params.userid !== $scope.currentUser._id){
		$location.path('/login')
	}
	
})