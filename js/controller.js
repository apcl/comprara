angular.module("mfa",[])
	.controller("fcontroller",function($scope,$http){
		$scope.posts = [];
		$http.get("https://comprara-284a3.firebaseio.com/usuarios.json?auth=Hd8SKnnXu8W1EZwmCcVk6XiTeKPrtp5qlgUp2CLk")
		.success(function(data){
			console.log(data);
			$scope.posts = data;
		})
		.error(function(err){

		})
	});