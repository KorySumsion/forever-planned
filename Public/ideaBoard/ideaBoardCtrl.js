var app = angular.module('wedding');

app.controller('ideaBoardCtrl', function($scope, ideaBoardService){
	$scope.addItemButton = false;
	$scope.addItemInput = false;
	$scope.newBoardTitle = false;
	$scope.itemQty = false;
	$scope.itemPrice = false;


	var getUser = function(){
		ideaBoardService.getUser($scope.currentUser)
		.then(function(results){
			$scope.boards = results.ideas.reverse();
			//console.log($scope.boards)
		})
	}
	
	getUser();

	$scope.addBoard = function(){
		//$scope.board.title.toUpperCase();
		
		$scope.board.title = $scope.board.title.toUpperCase();
		console.log($scope.board.title);
		ideaBoardService.addBoard($scope.board, $scope.currentUser)
		.then(function(results){
			$scope.boards = results.ideas.reverse();
			console.log($scope.boards)
			$scope.board.title = '';
			$scope.newBoardTitle = false;
		})
	}


	$scope.saveBoard = function(board){
		console.log(board)
		ideaBoardService.saveBoard(board, $scope.currentUser)
		.then(function(results){
			getUser();
		})
	};

	$scope.showNewBoard = function(){
	
		$scope.newBoardTitle = true;

	}

	$scope.showItemInput = function(){
		$scope.addItemButton = !$scope.addItemButton;
		$scope.addItemInput = !$scope.addItemInput;
	}


	$scope.showQty = function(){
		$scope.itemQty = true;
	}

	$scope.showPrice = function(){
		$scope.itemPrice = true;
		$scope.board.total = $scope.itemPrice * $scope.itemQty;
	}
	
	$scope.addToList = function(i, board){
		
		$scope.boards[i].boardItems.push(board.newItem);

		
		$scope.addItemInput = false;
		$scope.itemQty = false;
		$scope.itemPrice = false;
		board.newItem = '';

	}

	$scope.deleteBoard = function(board){
		console.log(board)
		ideaBoardService.deleteBoard(board)
		.then(function(results){
			getUser();
		})
	}

})