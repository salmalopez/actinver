(function(){
	angular
		.module('examen.module')
		.factory('loginFactory',['$http',function($http){
			return {
				login : function(login,url){
					return $http.post(url,login)
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