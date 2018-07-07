var app = angular.module('contatooh', ['ngRoute', 'ngResource']).config(function ($routeProvider, $httpProvider) {

    $httpProvider.interceptors.push('myInterceptor');

	$routeProvider.when('/contatos', {
		templateUrl: 'partials/contatos.html',
		controller: 'contatosController'
	});
	
	$routeProvider.when('/contato', {
		templateUrl: 'partials/contato.html',
		controller: 'contatoController'
	});
	
	$routeProvider.when('/contato/:contatoId', {
		templateUrl: 'partials/contato.html',
		controller: 'contatoController'
	});

    $routeProvider.when('/auth', {
        templateUrl: 'partials/auth.html'
    });
	
	$routeProvider.otherwise({
		redirectTo: '/contatos'
	});
});
