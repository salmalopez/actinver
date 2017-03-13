(function(){
	angular
		.module('examen.module')
		.controller('registro.ctrl',['$scope','registroFactory','$timeout',function($scope,registroFactory,$timeout){
			$scope.registroAction = registro;
			$scope.statusMsj = false;

			function registro(){
				var url = "http://localhost:1337/register";
				registroFactory.registro($scope.usuario,url)
					.then(exitoRegistro)
					.catch();

				function exitoRegistro(response){
					if(response.data.code === 'CREATED'){
						$scope.statusMsj = true;
						$scope.msj = "Te registraste de manera correcta";
						$scope.usuario = {};
						$timeout(function(){
							$scope.statusMsj = false;
						},5000);
					}
					console.log(response);
				}
			}
		}]);
})();