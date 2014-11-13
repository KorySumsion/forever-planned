var app = angular.module('wedding');

app.controller('toDoCtrl', function($scope){
	var getTodos = function(){
		service.getTodos(userid)
		.then(function(res){
			$scope.todos = res;
		})
	}


})