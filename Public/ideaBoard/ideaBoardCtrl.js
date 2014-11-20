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
console.log($scope.currentUser);


	var getUser = function(){
		if($scope.currentUser){
			ideaBoardService.getUser($scope.currentUser)
		.then(function(results){
			$scope.boards = results.ideas.reverse();
			$scope.currentUser = results
			console.log($scope.currentUser)
			//$state.reload()
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
		ideaBoardService.saveBoard(board, $scope.currentUser)
		.then(function(user){
			$scope.activeSave = i;
			$scope.activeSaveButton = false;
			

		});
		$scope.editRow = false;
		

	};
  
	$scope.saveBoardBudget = function(board, i, boardIndex){
		$scope.saveBoard(board, i)

		if(board.boardItems[i].includeBudget){
			$scope.currentUser.estimatedBudget +=  board.boardItems[i].total
			//console.log($scope.currentUser);
		} else {
			$scope.currentUser.estimatedBudget -=  board.boardItems[i].total
			//console.log($scope.currentUser);
		}

		ideaBoardService.updateBudget($scope.currentUser).then(function(){
			getUser();
		})
	}

	$scope.purchased = function(item){
		console.log(item);
		item.purchased = true;
		$scope.currentUser.purchasedBudget += item.total;
		ideaBoardService.updateBudget($scope.currentUser);
	}

	$scope.unPurchase = function(item){
		item.purchased = false;
		$scope.currentUser.purchasedBudget -= item.total;
		ideaBoardService.updateBudget($scope.currentUser);
	}

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

	$scope.clearBoard = function(boardItems, cb, i, board){
		boardItems.p= ''; 
		boardItems.q = '';
		boardItems.n = '';
		cb(board, i)
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
		
		cb(boardItems, $scope.saveBoard, i, $scope.boards[i]);
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
	}

	$scope.addToEstBudget = function(total){
		$scope.estimatedBudget = $scope.budget -= total;
	}

})