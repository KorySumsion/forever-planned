
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
	}).state("auth.home", {
		url: '/home/:userid',
		views: {
			'': { 
				templateUrl: 'Home/home.html',
				controller: "homeCtrl"
			},

			// "ideaBoard@auth.home" : {
			// 	templateUrl: "ideaBoard/ideaBoard.html",
			// 	controller: "ideaBoardCtrl"
			// },
			// "todo@auth.home" : {
			// 	templateUrl: "ToDoList/toDoList.html",
			// 	controller: "toDoCtrl"
			// },
			// "budget@auth.home" : {
			// 	templateUrl: "Budget/budget.html",
			// 	controller: "ideaBoardCtrl"
			// }


		}
	})
	
});

app.config(function($httpProvider){
	$httpProvider.interceptors.push(function($q, $location){
		return {
			"responseError": function(rejection){
				if($location.$$path === '/login' && rejection.status === 401){
					
					swal("Error", "Check your email and password.")
				} 
				else if(rejection.status === 401){

					$location.path("/")
				}
				return $q.reject(rejection)
			}
		}
	})
})
