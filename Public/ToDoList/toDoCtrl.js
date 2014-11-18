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
		if($scope.brideTask.length > 0){
			$scope.brideList.push($scope.brideTask)

			console.log($scope.currentUser)
			$scope.currentUser.brideList = $scope.brideList;
			
			$scope.brideTask = '';

			toDoService.editTodos($scope.currentUser);
		}
	}

	$scope.addGroomTask = function(){
		if($scope.groomTask.length > 0){
			$scope.groomList.push($scope.groomTask);
			
			$scope.currentUser.groomList = $scope.groomList;

			$scope.groomTask = '';
			toDoService.editTodos($scope.currentUser);
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
		$scope.groomComplete.splice($scope.groomComplete.indexOf(todo), 1);
		$scope.groomList.push(todo);

		$scope.currentUser.groomList = $scope.groomList
		$scope.currentUser.groomComplete = $scope.groomComplete
		
		toDoService.editTodos($scope.currentUser)


	}

	$scope.brideDelete = function(todo){
		$scope.brideComplete.splice($scope.brideComplete.indexOf(todo), 1);
		$scope.brideList.splice($scope.brideList.indexOf(todo), 1);

		$scope.currentUser.brideList = $scope.brideList
		$scope.currentUser.brideComplete = $scope.brideComplete
		
		toDoService.editTodos($scope.currentUser)


	}

	$scope.groomDelete = function(todo){
		$scope.groomComplete.splice($scope.groomComplete.indexOf(todo), 1);
		$scope.groomList.splice($scope.groomList.indexOf(todo), 1);

		$scope.currentUser.groomList = $scope.groomList
		$scope.currentUser.groomComplete = $scope.groomComplete
		
		toDoService.editTodos($scope.currentUser)


	}


})