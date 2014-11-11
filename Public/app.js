var app = angular.module("wedding", ['ui.router', 'ngCookies']);
app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/");
	
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
})
