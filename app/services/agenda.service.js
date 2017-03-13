(function(){
	angular
		.module('examen.module')
		.factory('agendaFactory',['$http',function($http){
			return {
				contactos : function(url){
					return $http({
						url : url,
						method : 'GET',
						headers : {
							'Authorization' : sessionStorage.getItem('__token')
						}
					})
					.then(function(response){
						return response;
					})
					.catch(function(err){
						return err;
					});
				},
				guardar : function(url,contacto){
					return $http({
						url : url,
						method : 'POST',
						data : contacto,
						headers : {
							'Authorization' : sessionStorage.getItem('__token')
						}
					})
					.then(function(response){
						return response;
					})
					.catch(function(err){
						return err;
					});
				},
				borrar : function(url){
					return $http({
						url : url,
						method : 'DELETE',
						headers : {
							'Authorization' : sessionStorage.getItem('__token')
						}
					})
					.then(function(response){
						return response;
					})
					.catch(function(err){
						return err;
					});
				},
				editar : function(url,contacto){
					return $http({
						url : url,
						method : 'PUT',
						data : contacto,
						headers : {
							'Authorization' : sessionStorage.getItem('__token')
						}
					})
						.then(function(response){
							return response;
						})
						.catch(function(err){
							return err;
						});
				}
			};
		}]);
})();