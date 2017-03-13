(function(){
	angular
		.module('examen.module')
		.controller('agenda.controller',['$scope','agendaFactory',function($scope,agendaFactory){
			$scope.guardar = guardar;
			$scope.borrar = borrar;
			$scope.editar = editar;
			$scope.enviaEditar = envia;

			obtenerContactos();

			function guardar(){
				var url = "http://localhost:1337/users";
				agendaFactory.guardar(url,$scope.contacto)
					.then(exito)
					.catch();
				function exito(response){
					$scope.contacto = {};
					obtenerContactos();
				}
			}

			function borrar(id){
				var url = "http://localhost:1337/users/" + id;
				agendaFactory.borrar(url)
					.then(exito)
					.catch();
				function exito(response){
					obtenerContactos();
				}
			}

			function obtenerContactos(){
				var url = "http://localhost:1337/users";
				agendaFactory.contactos(url)
					.then(contactosExito)
					.catch();
				function contactosExito(response){
					$scope.contactos = response.data.users;
				}
			}

			function editar(contacto){
				$scope.contactoE = contacto;
			}

			function envia(){
				var url = "http://localhost:1337/users/$scope.contactoE.id";
				agendaFactory.editar(url,$scope.contactoE)
					.then(exito)
					.catch();
				function exito(response){
					$scope.contactoE = {};
					obtenerContactos();
				}
			}
		}]);
})();