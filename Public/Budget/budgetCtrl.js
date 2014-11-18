var app = angular.module('wedding');

app.controller('budgetCtrl', function($scope, authService){

	$scope.budget = "$" + $scope.currentUser.budget;
	var budgetInfo = [];
	var budgetPending = [];
	var budgetPurchased = [];
	var updateBudget = function(){
		if($scope.currentUser.ideas){
			var items = $scope.currentUser.ideas;
			for (var i = 0; i < items.length; i++){
				if(items[i].boardItems){
					var ideas = items[i].boardItems;
					for (var x = 0; x < ideas.length; x++) {
						budgetInfo.push(ideas[x]);
						console.log(ideas[x].name + ideas[x].total + ideas[x].includeBudget);
					}
				}
			}
		}
		//authService.setUser($scope.currentUser)
		var seperate = function(){
			for (var z = 0; z < budgetInfo.length; z++) {
				if (budgetInfo[z].includeBudget){
					if(budgetInfo[z].purchased){
						budgetPurchased.push(budgetInfo[z]);
					} else {
						budgetPending.push(budgetInfo[z]);
					}
				}
			}

		}
	}
	updateBudget();


	$scope.pendingItems = budgetPending;
	$scope.purchasedItems = budgetPurchased;

	var pendingTotal = function(){
		var pending = 0;
		for (var i = 0; i < budgetPending.length; i++) {
			pending = pending + budgetPending[i].total
		};
		$scope.estimatedBudget = pending;
		//authService.setUser($scope.currentUser)
	}
	pendingTotal();

	$scope.purchased = function(){
		if ($scope.pendingItem.total) {
			$scope.pendingItem.purchased = true;
			//authService.setUser($scope.currentUser);
		};
	}

	var purchasedTotal = function(){
		var purchased = 0;
		for (var i = 0; i < budgetPurchased.length; i++) {
		    purchased = purchased + budgetPurchased[i].total;
		};
		$scope.finalTotal = purchased;
	}
	purchasedTotal();

})