var app = angular.module("app", []);

app.config(function ($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl: "animals.html"
	})
	.when("/lion", {
		templateUrl: "partials/lion.html",
		controller: "LionCtrl"
		//template: "I'm a Lion, Roar!!!"
	})
	.when("/tiger", {
		templateUrl: "partials/tiger.html",
		controller: "TigerCtrl"
	})
	.when("/alligator", {
		templateUrl: "partials/alligator.html",
		controller: "AlligatorCtrl"
	})
	.otherwise({
		redirectTo: '/'
	});
});

app.controller("LionCtrl", function($scope) {
	$scope.model = {
		message:"Roar!! I'm a lion"
	}
});
app.controller("TigerCtrl", function($scope) {
	$scope.model = {
		message:"Roar!! I'm a tiger"
	}
});
app.controller("AlligatorCtrl", function($scope) {
	$scope.model = {
		message:"Oh Snap!! I'm an alligator"
	}
});
