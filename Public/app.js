
var app = angular.module("wedding", ['ui.router', 'ngCookies', 'ngAnimate']);



app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/login");
	
	$stateProvider
	.state("Login", {
		url: "/login",
		templateUrl: "Login/login.html",
		controller: "loginCtrl"
	}).state("Signup", {
		url: "/signup",
		templateUrl: "/Signup/signup.html",
		controller: "signupCtrl"
	})
	.state("auth", {
		abstract: true,
		template: '<ui-view>',
		// controller: 'authCtrl',
		resolve: {
			user: function(authService){
				return authService.getUser();
			} 
		}
	}).state("auth.Setup", {
		url:"/setup/:userId",
		templateUrl: "/setup/setup.html",
		controller: "setupCtrl"
	}).state("groomTodo", {
		templateUrl: "/ToDoList/groomToDo.html",
		controller: "toDoCtrl"
	}).state("Budget", {
		url: "/budget/:userid",
		templateUrl: "/Budget/budget.html",
		controller: "budgetCtrl"
	}).state("Ideas", {
		url: "/ideas/:userid",
		templateUrl: "/ideaBoard/ideaBoard.html",
		controller: "ideaBoardCtrl"//TODO get rid of Idea, budget and todo's
	}).state("auth.home", {
		url: '/home/:userid',
		views: {
			'': { 
				templateUrl: 'Home/home.html',
				controller: "homeCtrl"
			},

			"ideaBoard@auth.home" : {
				templateUrl: "ideaBoard/ideaBoard.html",
				controller: "ideaBoardCtrl"
			},
			"todo@auth.home" : {
				templateUrl: "ToDoList/toDoList.html",
				controller: "toDoCtrl"
			},
			"budget@auth.home" : {
				templateUrl: "Budget/budget.html",
				controller: "budgetCtrl"
			}


		}
	})
	
});
