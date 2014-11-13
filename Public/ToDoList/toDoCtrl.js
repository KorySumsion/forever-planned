var app = angular.module('wedding');

app.controller('toDoCtrl', function($scope, toDoService){
	
	$scope.todos = {
		brideList : ["Find flowers", "marry groom"],
		groomList : ["eat cake", "eat more cake"],
		brideComplete: ["got engaged"],
		groomComplete: ["put a ring on it"]
	}

	$scope.getTodos = function(){
		service.getTodos($scope.currentUser)
		.then(function(res){
			$scope.todos = res.todo;
		})
	}
	$scope.getTodos();


	//Add a todo
	$scope.addBrideTask = function(){
		if($scope.brideTask.length > 0){
			$scope.todos.brideList.push($scope.brideTask)

			toDoService.editTodos()
			.then(function(res){
				$scope.todos = res.todo;
			})
		}
	}

	$scope.addGroomTask = function(){
		if($scope.groomTask.length > 0){
			$scope.todos.groomList.push($scope.groomTask)
			
			toDoService.editTodos()
			.then(function(res){
				$scope.todos = res.todo;
			})
		}
	}

	//paramete expects bride or groom
	$scope.brideCompleted = function(todo){

		if($scope.todos.brideList.indexOf(todo !== -1)){
			$scope.todos.brideList.splice($scope.todos.brideList.indexOf(todo),1);
			$scope.todos.brideComplete.push(todo);
			//$scope.getTodos();
		}
	}

	$scope.groomCompleted = function(todo){

		if($scope.todos.groomList.indexOf(todo !== -1)){
			$scope.todos.groomList.splice($scope.todos.groomList.indexOf(todo),1);
			$scope.todos.groomComplete.push(todo);
			//$scope.getTodos();
		}
	}
})