
var app = angular.module("wedding", ['ui.router', 'ngCookies' 'ngAnimate']);

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
	}).state("Setup", {
		url:"/setup",
		templateUrl: "/setup/setup.html",
		controller: "setupController"
	})
});
