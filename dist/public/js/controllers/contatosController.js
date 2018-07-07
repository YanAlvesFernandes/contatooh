app.controller('contatosController', function ($scope, Contato) {
	
	$scope.contatos = [];
	
	$scope.filtro = '';
	
	$scope.mensagem = {texto: ''};
	
	// Acesso ao server via http
	// $http.get('/contatos').success(function (data) {
		// $scope.contatos = data;
	// }).error(function (statusText) {
		// console.log("Não foi possível obter a lista de contatos");
		// console.log(statusText);
	// });
	
	// Acesso ao server via "resource"
	//var Contato = $resource('/contatos/:id'); -- Substituído por Service
	
	function buscaContatos() {
		Contato.query(function (contatos) {
			$scope.contatos = contatos;
			$scope.mensagem = {};
		},
		function (erro) {
			$scope.mensagem = {
				texto: "Não foi possível obter a lista de contatos"
			};
			console.log(erro);
		});
	}
	buscaContatos();
	
	$scope.remove = function (contato) {
		Contato.delete({
			id: contato._id
		},
		buscaContatos,
		function (erro) {
			$scope.mensagem = {
				texto: "Não foi possível remover o contato"
			};
			console.log(erro);
		});
	};
});