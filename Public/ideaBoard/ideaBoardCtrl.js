var app = angular.module('wedding');

app.controller('ideaBoardCtrl', function($scope, ideaBoardService){
	$scope.addItemButton = false;
	$scope.addItemInput = false;


	$scope.boards = [];

	$scope.addBoard = function(){

		$scope.boards.unshift({title: '', listItems: [], price: 0, quantity: 0, includeBudget: false, total: price*quantity});
		$scope.addItemButton = true;
		console.log($scope.boards)
	}

	$scope.saveBoard = function(){
		ideaBoardService.saveBoard($scope.board)
	}
	
	$scope.showItemInput = function(){
		$scope.addItemButton = false;
		$scope.addItemInput = true;
	}

	$scope.addItem = function(){
		debugger;

		$scope.board.listItems.push($scope.newItem);
		$scope.newItem = '';
		$scope.addItemInput = false;
		$scope.addItemButton = true;
	}


})