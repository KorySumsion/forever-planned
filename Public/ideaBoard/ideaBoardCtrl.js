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
		$scope.addItemInput = !$scope.addItemInput;

	}

	
	$scope.addToList = function(i, boardItems){
		boardItems.total = boardItems.quantity * boardItems.price;
		$scope.boards[i].boardItems.push(boardItems);
		boardItems = '';
		$scope.addItemInput = !$scope.addItemInput;


	}

	$scope.deleteBoard = function(board){
		//console.log(board)
		ideaBoardService.deleteBoard(board, $scope.currentUser)
		.then(function(results){
			getUser();
		})
	}

})