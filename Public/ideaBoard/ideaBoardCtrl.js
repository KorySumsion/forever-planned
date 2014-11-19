var app = angular.module('wedding');

app.controller('ideaBoardCtrl', function($scope, ideaBoardService, authService, $rootScope, $state){
	$scope.addItemButton = false;
	$scope.addItemInput = false;
	$scope.newBoardTitle = false;
	$scope.itemQty = false;
	$scope.itemPrice = false;
	$scope.editRow = false;
	//$scope.saveButton = true;
	//$scope.saved = false;
	$scope.boards = $scope.currentUser.ideas;
	$scope.activeItem;
	$scope.activeSave;	
	$scope.activeSaveButton;


	var getUser = function(){
		if($scope.currentUser){
			ideaBoardService.getUser($scope.currentUser)
		.then(function(results){
			$scope.boards = results.ideas.reverse();
			//$scope.currentUser = results
			console.log('here all the time')
			$state.reload()
		})
		}
		
	};
	
	$scope.addBoard = function(){
		//$scope.board.title.toUpperCase();
		
		$scope.board.title = $scope.board.title.toUpperCase();
		//console.log($scope.board.title);
		ideaBoardService.addBoard($scope.board, $scope.currentUser)
		.then(function(results){
			$scope.boards = results.ideas.reverse();
			//console.log($scope.boards)
			$scope.board.title = '';
			$scope.newBoardTitle = false;
		})
	}


	$scope.saveBoard = function(board, i){
		//console.log(board)
		ideaBoardService.saveBoard(board, $scope.currentUser)
		.then(function(){
			$scope.activeSave = i;
			$scope.activeSaveButton = false;
			$state.reload();
		});
		$scope.editRow = false;
		

	};
  
	$scope.showNewBoard = function(){
		$scope.newBoardTitle = true;

	}

	$scope.showItemInput = function(i){//ng-click calls this function
		$scope.activeItem = i;
		//$scope.activeSaveButton = i;

	}

	$scope.addItemInput = function(i){//ng-show calls this function
		return $scope.activeItem === i;
	}

	$scope.saved = function(i){//ng-show calls this function
		return $scope.activeSave === i;
	}

	$scope.saveButton = function(i){//ng-show calls this function
		return $scope.activeSaveButton === i;
	}

	$scope.clearBoard = function(boardItems){
		boardItems.p= ''; 
		boardItems.q = '';
		boardItems.n = '';
		//$scope.activeSaveButton = i;
		//$scope.activeSave = i;
		//$scope.addItemInput = i;
	}
	

	$scope.addToList = function(i, boardItems, cb){
		//$scope.saveBoard(boardItems);
		$scope.activeSaveButton = i;
		$scope.activeSave = false;
		boardItems.price = boardItems.p;
		boardItems.quantity = boardItems.q;
		boardItems.name = boardItems.n;
		boardItems.total = boardItems.quantity * boardItems.price;
		if(!boardItems.total){
			boardItems.total = 0;
		}
		$scope.boards[i].boardItems.push(boardItems);
		
		cb(boardItems);
		//getUser();
	}

	$scope.deleteBoard = function(board){
		console.log(board)
		ideaBoardService.deleteBoard(board, $scope.currentUser).then(function(){
			getUser();
		})
	}

	$scope.deleteRow = function(i, board){
		console.log(i, board)
		board.boardItems.splice(i, 1);
		ideaBoardService.saveBoard(board, $scope.currentUser);
		$scope.saveButton = true;
		$scope.saved = false;
		//getUser();
		
	}

	// $scope.addToBudget = function(boardItem){
	// 	console.log(boardItem.includeBudget)
	// 	$scope.saveButton = true;
	// 	$scope.saved = false;
	// 	//getUser();
	// }



})