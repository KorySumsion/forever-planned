var app = angular.module('wedding');

app.controller('bannerCtrl', function($scope, $cookieStore, $window){
	$scope.logout = function(){
		$cookieStore.remove('currentUser');
	}

  	var w = angular.element($window);
  
 	// w.bind('resize', function() {
  //      	if($window.innerWidth > 1000){
		// 	$scope.weirdMargins = "weird-margin-issues"
		// } else if($window.innerWidth < 1000){
		// 	$scope.weirdMargins = "weird-margin-issues-two"
		// }
  // 	});

	
})