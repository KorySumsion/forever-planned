var app = angular.module('wedding');

app.controller('ideaBoardCtrl', function($scope, ideaBoardService){
	$scope.addItemButton = false;
	$scope.addItemInput = false;
	$scope.newBoardTitle = false;


	var getUser = function(){
		ideaBoardService.getUser($scope.currentUser)
		.then(function(results){
			$scope.boards = results.ideas.reverse();
			console.log($scope.boards)
		})
	}
	
	getUser();

	$scope.addBoard = function(){
		ideaBoardService.addBoard($scope.board, $scope.currentUser)
		.then(function(results){
			$scope.boards = results.ideas.reverse();
			console.log($scope.boards)

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

		$scope.board.listItems.push($scope.newItem);
		$scope.newItem = '';
		$scope.addItemInput = false;
		$scope.addItemButton = true;
	}


})