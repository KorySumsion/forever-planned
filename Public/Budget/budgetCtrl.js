var app = angular.module('wedding');

app.controller('budgetCtrl', function($scope, authService){

	$scope.budget = "$" + $scope.currentUser.budget;
	var budgetInfo = [];
	var updateBudget = function(){
		if($scope.currentUser.ideas){
			var items = $scope.currentUser.ideas;
			for (var i = 0; i < items.length; i++){
				if(items[i].boardItems){
					var ideas = items[i].boardItems;
					for (var x = 0; x < ideas.length; x++) {
						budgetInfo.push(ideas[x]);
						console.log(ideas[x].name + ideas[x].total);
					}
				}
			}
		}
		//authService.setUser($scope.currentUser)
		return budgetInfo
		}
	updateBudget();


	$scope.budgetItems = budgetInfo;

	var pendingTotal = function(){
		var pending = 0;
		for (var i = 0; i < budgetInfo.length; i++) {
			pending = pending + budgetInfo[i].total
		};
		$scope.estimatedBudget = pending;
		//authService.setUser($scope.currentUser)
	}
	pendingTotal();

})