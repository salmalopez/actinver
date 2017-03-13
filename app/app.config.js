(function(){
	angular
		.module('examen.module')
		.config(['$stateProvider', '$urlRouterProvider','$locationProvider',configFunction]);

	function configFunction($stateProvider, $urlRouterProvider,$locationProvider){

		$locationProvider.hashPrefix('');

		$stateProvider
	        .state('login', {
	            url: '/login',
	            templateUrl: 'app/templates/login.template.html',
	            controller : 'login.ctrl as loginController'
	        })
	        .state('registro', {
	            url: '/registro',
	            templateUrl: 'app/templates/registro.template.html',
	            controller : 'registro.ctrl as registroController'
	        })
	        .state('agenda', {
	            url: '/agenda',
	            templateUrl: 'app/templates/agenda.template.html',
	            controller : 'agenda.controller as agendaController'
	        });
	}
	
})();