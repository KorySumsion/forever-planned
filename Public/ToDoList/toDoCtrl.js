var app = angular.module('wedding');

app.controller('toDoCtrl', function($scope, toDoService){
	

	
	$scope.getTodos = function(){
		toDoService.getTodos($scope.currentUser)
		.then(function(res){
			console.log(res)
			$scope.brideList = res.brideList;
			$scope.groomList = res.groomList;
			$scope.groomComplete = res.groomComplete
			$scope.brideComplete = res.brideComplete
		})
	}
	$scope.getTodos();


	//Add a todo
	$scope.addBrideTask = function(){
		if($scope.brideTask.length > 0){
			$scope.brideList.push($scope.brideTask)

			toDoService.editTodos()
			.then(function(res){
				//$scope.todos = res.todo;
			})
		}
	}

	$scope.addGroomTask = function(){
		if($scope.groomTask.length > 0){
			$scope.groomList.push($scope.groomTask)
			
			toDoService.editTodos()
			.then(function(res){
				//$scope.todos = res.todo;
			})
		}
	}

	//paramete expects bride or groom
	$scope.brideCompleted = function(todo){

		if($scope.brideList.indexOf(todo !== -1)){
			$scope.brideList.splice($scope.brideList.indexOf(todo),1);
			$scope.brideComplete.push(todo);
			//$scope.getTodos();
		}
	}

	$scope.groomCompleted = function(todo){

		if($scope.groomList.indexOf(todo !== -1)){
			$scope.groomList.splice($scope.groomList.indexOf(todo),1);
			$scope.groomComplete.push(todo);
			//$scope.getTodos();
		}
	}
})