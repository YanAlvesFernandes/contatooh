//var controller = require('../controllers/home')(); Não é necessário devido ao uso do express-load

module.exports = function(app) {
	var controller = app.controllers.home;
	app.get('/', controller.index);
}