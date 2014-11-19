var app = angular.module('wedding');

app.controller('toDoCtrl', function($scope, toDoService, $cookieStore, authService){
	
$scope.todoosieBride = true;
$scope.todoosieGroom = false;
	$scope.toDoShow = function(person){
		if(person === 'bride'){
			$scope.todoosieBride = true;
			$scope.todoosieGroom = false;
		}
		if(person === 'groom'){
			$scope.todoosieBride = false;
			$scope.todoosieGroom = true;	
		}
	}


			
	$scope.brideList = $scope.currentUser.brideList;
	$scope.groomList = $scope.currentUser.groomList;
	$scope.groomComplete = $scope.currentUser.groomComplete
	$scope.brideComplete = $scope.currentUser.brideComplete



	//Add a todo
	$scope.addBrideTask = function(){
			
		if($scope.brideTask.length > 0 && $scope.brideTask !== "You already have this task!" && $scope.brideList.indexOf($scope.brideTask) === -1 && $scope.brideComplete.indexOf($scope.brideTask) === -1){
			$scope.brideList.push($scope.brideTask)

			console.log($scope.currentUser)
			$scope.currentUser.brideList = $scope.brideList;
			
			$scope.brideTask = '';

			toDoService.editTodos($scope.currentUser);
		} else if ($scope.brideTask.length) {
			$scope.brideTask = "You already have this task!"
		}
	}

	$scope.addGroomTask = function(){
		if($scope.groomTask.length > 0 && $scope.groomTask !== "You already have this task!" && $scope.groomList.indexOf($scope.groomTask) === -1 && $scope.groomComplete.indexOf($scope.groomTask) === -1){
			$scope.groomList.push($scope.groomTask);
			
			$scope.currentUser.groomList = $scope.groomList;

			$scope.groomTask = '';
			toDoService.editTodos($scope.currentUser);
		} else if ($scope.groomTask.length){
			$scope.groomTask = "You already have this task!"
		}
	}


	$scope.brideCompleted = function(todo){

		if($scope.brideList.indexOf(todo !== -1)){
			$scope.brideList.splice($scope.brideList.indexOf(todo),1);
			$scope.brideComplete.push(todo);
			
			$scope.currentUser.brideList = $scope.brideList
			$scope.currentUser.brideComplete = $scope.brideComplete
			
			toDoService.editTodos($scope.currentUser)
		}
	}

	$scope.groomCompleted = function(todo){

		if($scope.groomList.indexOf(todo !== -1)){
			$scope.groomList.splice($scope.groomList.indexOf(todo),1);
			$scope.groomComplete.push(todo);
			
			$scope.currentUser.groomList = $scope.groomList
			$scope.currentUser.groomComplete = $scope.groomComplete
			
			toDoService.editTodos($scope.currentUser)

		}
	}

	$scope.brideReverse = function(todo){
		$scope.brideComplete.splice($scope.brideComplete.indexOf(todo), 1);
		$scope.brideList.push(todo);

		$scope.currentUser.brideList = $scope.brideList
		$scope.currentUser.brideComplete = $scope.brideComplete
		
		toDoService.editTodos($scope.currentUser)


	}

	$scope.groomReverse = function(todo){
		if($scope.groomComplete.indexOf(todo !== -1)){
			$scope.groomComplete.splice($scope.groomComplete.indexOf(todo), 1);
			$scope.groomList.push(todo);

			$scope.currentUser.groomList = $scope.groomList
			$scope.currentUser.groomComplete = $scope.groomComplete
			
			toDoService.editTodos($scope.currentUser)
		}


	}

	$scope.brideDelete = function(todo){
		if($scope.brideComplete.indexOf(todo)!== -1){
			$scope.brideComplete.splice($scope.brideComplete.indexOf(todo), 1);
		}
		
		if($scope.brideList.indexOf(todo)!== -1){
			$scope.brideList.splice($scope.brideList.indexOf(todo), 1);
		}

		$scope.currentUser.brideList = $scope.brideList
		$scope.currentUser.brideComplete = $scope.brideComplete
		
		toDoService.editTodos($scope.currentUser)


	}

	$scope.groomDelete = function(todo){
		if($scope.groomComplete.indexOf(todo) !== -1){
			$scope.groomComplete.splice($scope.groomComplete.indexOf(todo), 1);
		}

		if($scope.groomList.indexOf(todo) !== -1){
			$scope.groomList.splice($scope.groomList.indexOf(todo), 1);		
		}

		

		$scope.currentUser.groomList = $scope.groomList
		$scope.currentUser.groomComplete = $scope.groomComplete
		
		toDoService.editTodos($scope.currentUser)


	}


})