var app = angular.module('wedding');

app.controller('setupController', function($scope, $timeout){
	$scope.step1 = false;
	$scope.step2 = false;

	$scope.showStep1 = function(){
		$scope.step1 = true;
	}

	$scope.showStep2 = function(){
		$scope.step1 = false;
		$timeout(function(){
			$scope.step2 = true;}, 500);
	}
	$scope.goToNames = function(){
		$scope.step2 = false;
		$timeout(function(){
			$scope.step1 = true;}, 500);
	}
})