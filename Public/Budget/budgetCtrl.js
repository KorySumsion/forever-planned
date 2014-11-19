var app = angular.module('wedding');

app.controller('budgetCtrl', function($scope, authService, $rootScope){

	$rootScope.$watch($rootScope.currentUser, function(){

	
		console.log('here!!!!!!');		
	})

	$scope.budget = "$" + $scope.currentUser.budget;
	var budgetInfo = [];
	var budgetPending = [];
	var budgetPurchased = [];
	$scope.updateBudget = function(tbu){
		if($scope.currentUser.ideas){
			var items = $scope.currentUser.ideas;
			for (var i = 0; i < items.length; i++){
				if(items[i].boardItems){
					var ideas = items[i].boardItems;
					for (var x = 0; x < ideas.length; x++) {
						budgetInfo.push(ideas[x]);
						//console.log(ideas[x].name + ideas[x].total + ideas[x].includeBudget);
						if (tbu && ideas[x].name === tbu.name) {
							//ideas[x].purchased = true;
							$scope.currentUser.ideas[i].boardItems[x].purchased = true;
							authService.setUser($scope.currentUser);
						};
					}
				}
			}
		}
	}
	$scope.updateBudget();
		//authService.setUser($scope.currentUser)
	var seperate = function(){
		console.log(budgetInfo);
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
	seperate();
	//console.log(budgetPending);


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

	//console.log($scope.currentUser);

	$scope.purchased = function(item){
		for (var i = 0; i < budgetPending.length; i++) {
			if (budgetPending[i].name === item.name) {
				budgetPending.splice(i, 1);
				console.log(budgetPending);
				item.purchased = true;
				var name = item.name;
				console.log(name);
				debugger;
				$scope.updateBudget(item);
				budgetPurchased.push(item);
				//authService.setUser($scope.currentUser);
			};
		}
		pendingTotal();
		purchasedTotal();
	}

	var purchasedTotal = function(){
		var purchased = $scope.currentUser.budget;
		for (var i = 0; i < budgetPurchased.length; i++) {
		    purchased =  purchased - budgetPurchased[i].total;
		};
		$scope.finalTotal = purchased;
	}
	purchasedTotal();

})