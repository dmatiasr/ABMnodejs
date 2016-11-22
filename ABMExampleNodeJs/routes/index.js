//instance to user.js
var userInstance = require('../models/user');
var userdao = require('../dao/userdao');

module.exports = function (app) {

	app.get('/',function (req, res) {
			res.render('index', { title: 'Lista de usuarios' });

	})
	
	app.post('/',function (req, res) {
		
		console.log('Pase por aqui '+ req.name);
	 	var result=userdao.addU(req,res);
	 	if (result) res.render('index', { title: 'Lista de usuarios' });
	 	else res.render('index', { title: 'Lista de usuarios' });
					
	
	})
}
