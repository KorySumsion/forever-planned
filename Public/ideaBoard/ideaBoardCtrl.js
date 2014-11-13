var app = angular.module('wedding');

app.controller('ideaBoardCtrl', function($scope, ideaBoardService){
	$scope.addItemButton = false;
	$scope.addItemInput = false;
	$scope.newBoardTitle = false;


	$scope.boards = [];

	$scope.addBoard = function(){
		ideaBoardService.addBoard($scope.board, $scope.currentUser)
		.then(function(results){
			$scope.boards = results.ideas.reverse();
			console.log($scope.boards);
		})
	}

	$scope.showNewBoard = function(){
	
		$scope.newBoardTitle = true;

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