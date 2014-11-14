var app = angular.module('wedding');

app.controller('bannerCtrl', function($scope, $cookieStore){
	$scope.logout = function(){
		$cookieStore.remove('currentUser');
	}
})