
var app = angular.module("wedding", ['ui.router', 'ngCookies', 'ngAnimate']);

// app.run(function($rootScope, $state, $cookieStore){
// 	$rootScope.$on("$stateChangeStart", function(evt, toState){
// 		if($cookieStore.get("currentUser")){
// 			$rootScope.currentUser = $cookieStore.get("currentUser")
// 			//console.log($rootScope.currentUser)

// 		} 
// 		// else if(next.templateUrl === "Signup/signup.html"){
// 		// 	$location.path("/signup")
// 		// } 
// 		else {
// 			evt.preventDefault();
// 			$state.transitionTo("Login", {notify: false})
// 		}
// 	})
// })



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
		controller: 'authCtrl',
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
				templateUrl: 'Banner/home.html',
				controller: "bannerCtrl"
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
