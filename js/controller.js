angular.module("mfa",[])
	.controller("fcontroller",function($scope,$http){
		$scope.posts = [];
		$http.get("https://comprara-284a3.firebaseio.com/")
		.success(function(data){
			console.log(data);
			$scope.posts = data;
		})
		.error(function(err){

		})
	});