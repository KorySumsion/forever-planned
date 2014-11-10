var app = angular.module("wedding", []);

app.config(function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl: "/Login/login.html", 
		controller: "loginCtrl"
	})
})