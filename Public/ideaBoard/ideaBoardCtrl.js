var app = angular.module('wedding');

app.controller('ideaBoardCtrl', function($scope, ideaBoardService, authService){
	$scope.addItemButton = false;
	$scope.addItemInput = false;
	$scope.newBoardTitle = false;
	$scope.itemQty = false;
	$scope.itemPrice = false;
	$scope.editRow = false;
	$scope.saveButton = true;
	$scope.saved = false;
	$scope.boards = $scope.currentUser.ideas;

	//console.log($scope.currentUser)
	var getUser = function(){
		if($scope.currentUser){
			ideaBoardService.getUser($scope.currentUser)
		.then(function(results){
			$scope.boards = results.ideas.reverse();
			//console.log($scope.boards)
		})
		}
		
	}
	
	// $scope.showEditRow = function(i){
	// 	$scope.editRow[i] = true;
	// }

	$scope.addBoard = function(){
		//$scope.board.title.toUpperCase();
		
		$scope.board.title = $scope.board.title.toUpperCase();
		//console.log($scope.board.title);
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
		ideaBoardService.saveBoard(board, $scope.currentUser).then(function(){
			$scope.saveButton = false;
			$scope.saved = true;
		});
		$scope.editRow = false;
	};
  
	$scope.showNewBoard = function(){
		$scope.newBoardTitle = true;

	}

	// $scope.showItemInput = function(){
	// 	$scope.addItemInput = !$scope.addItemInput;

	// }

	$scope.clearBoard = function(boardItems){
		boardItems.p= ''; 
		boardItems.q = '';
		boardItems.n = '';
		$scope.saveButton = true;
		$scope.saved = false;
	}
	

	$scope.addToList = function(i, boardItems, cb){
		//$scope.saveBoard(boardItems);
		boardItems.price = boardItems.p;
		boardItems.quantity = boardItems.q;
		boardItems.name = boardItems.n;
		boardItems.total = boardItems.quantity * boardItems.price;
		if(!boardItems.total){
			boardItems.total = 0;
		}
		$scope.boards[i].boardItems.push(boardItems);

		cb(boardItems);

		//$scope.addItemInput = false; DOESN'T WORK
		//itemPrice = false; DOESN'T WORK!



	}

	$scope.deleteBoard = function(board){
		console.log(board)
		ideaBoardService.deleteBoard(board, $scope.currentUser)
	}

	$scope.deleteRow = function(i, board){
		console.log(i, board)
		board.boardItems.splice(i, 1);
		ideaBoardService.saveBoard(board, $scope.currentUser);
		$scope.saveButton = true;
		$scope.saved = false;
		
	}

	$scope.addToBudget = function(boardItem){
		console.log(boardItem.includeBudget)
		$scope.saveButton = true;
		$scope.saved = false;
	}



})