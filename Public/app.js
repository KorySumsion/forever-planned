var app = angular.module("wedding", [ui.router]);

app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/login");
	
	$stateProvider
	.state("Login", {
		templateUrl: "/Login/login.html",
		controller: "loginCtrl"
	}).state("Signup", {
		templateUrl: "/Signup/signup.html",
		controller: "signupCtrl"
	})
})