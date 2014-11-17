
var app = angular.module("wedding", ['ui.router', 'ngCookies', 'ngAnimate']);

app.run(function($rootScope, $location, $state, $cookieStore){
	$rootScope.$on("$stateChangeStart", function(evt, next, current){
		if($cookieStore.get("currentUser")){
			$rootScope.currentUser = $cookieStore.get("currentUser")
			console.log($rootScope.currentUser)
		} else if(next.templateUrl === "Signup/signup.html"){
			$location.path("/signup")
		} else {
			$location.path("/login")
		}
	})
})



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
	}).state("Setup", {
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
		controller: "ideaBoardCtrl"
	}).state("home", {
		url: '/home/:userid',
		views: {
			'': { 
				templateUrl: 'Banner/home.html',
				controller: "bannerCtrl"
			},

			"ideaBoard@home" : {
				templateUrl: "ideaBoard/ideaBoard.html",
				controller: "ideaBoardCtrl"
			},
			"todo@home" : {
				templateUrl: "ToDoList/toDoList.html",
				controller: "toDoCtrl"
			},
			"budget@home" : {
				templateUrl: "Budget/budget.html",
				controller: "budgetCtrl"
			}


		}
	})
	
});
