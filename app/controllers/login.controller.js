(function(){
	angular
		.module('examen.module')
		.controller('login.ctrl',['$scope','loginFactory','$state',function($scope,loginFactory,$state){
			$scope.loginAction = login;
			$scope.statusMsj = false;

			function login(){
				var url = "http://localhost:1337/login";
				loginFactory.login($scope.login,url)
					.then(exitoLogin)
					.catch();

				function exitoLogin(response){
					if(response.data.token){
						sessionStorage.setItem('__token','JWT ' + response.data.token);
						sessionStorage.setItem('__user',JSON.stringify(response.data.user));
						$state.go('agenda');
					}
					console.log(response);
				}
			}
		}]);
})();