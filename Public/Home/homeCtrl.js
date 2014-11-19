var app = angular.module('wedding');

app.controller('homeCtrl', function($scope, $cookieStore, $window, $state, $location){
	
	
	$scope.logout = function(){
		$cookieStore.remove('currentUser');
	}
	if(!$scope.currentUser){
		$location.path('/login');
	} else if ($state.params.userid !== $scope.currentUser._id){
		$location.path('/login');
	}

		var theDate = new Date($scope.currentUser.weddingDate).getTime();
		console.log(theDate);
		var days, hours, minutes, seconds;
		var countdown = document.getElementById("countdown");

		setInterval(function(){

			var currentDate = new Date().getTime();
			var secondsLeft = (theDate - currentDate) / 1000;

			days = parseInt(secondsLeft / 86400);
			secondsLeft = secondsLeft % 86400;

			hours = parseInt(secondsLeft / 3600);
			secondsLeft = secondsLeft % 3600;

			minutes = parseInt(secondsLeft / 60);
			seconds = parseInt(secondsLeft % 60);

			countdown.innerHTML = days + " Days " + hours + " Hours " + minutes + " Min " + seconds + " Sec";
			

		}, 1000);

	
})