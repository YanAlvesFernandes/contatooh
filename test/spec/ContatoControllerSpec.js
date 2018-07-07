 describe("ContatoController", function(){
        it("Deve criar um Contato vazio quando nenhum parametro de rota for informado", 
        function(){
            expect($scope.contato._id).toBeUndefined();
        });
    });
