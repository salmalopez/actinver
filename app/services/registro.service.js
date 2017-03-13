(function(){
	angular
		.module('examen.module')
		.factory('registroFactory',['$http',function($http){
			return {
				registro : function(usuario,url){
					return $http.post(url,usuario)
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