var app = angular.module('wedding');

app.controller('budgetCtrl', function($scope){

	$scope.budget = "$" + $scope.currentUser.budget;



})