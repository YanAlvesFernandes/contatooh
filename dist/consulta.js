var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var idProcurado = new ObjectID('56b397addd4f9a4bf0c7d6aa');

MongoClient.connect('mongodb://127.0.0.1:27017/contatooh',
	function(erro, db) {
		if(erro)
			throw err;
		db.collection('contatos').findOne({_id : idProcurado},
			function(erro, contato) {
				if(erro)
					throw err;
				console.log(contato);
			}
		);
	}
);