//instance to user.js
var userInstance = require('../models/user');
var userdao = require('../dao/userdao');

module.exports = function (app) {

	app.get('/',function (req, res) {
	//	var query= userdao.findAllU(req,res);
	//	if (query==null) res.render('index', { title: 'Lista de usuarios' });
	//	else res.render('index', { title: 'Lista de usuarios', allusers: query });
		res.render('index', { title: 'Lista de usuarios' });		
	})
	
	app.post('/',function (req, res) {
		
		console.log('Pase por aqui '+ req.name);
	 	
	 	userdao.addU(req.params.name, req.params.email, function (e, data) {
	 		if (e) console.log('error de creacion '+e);
	 		if (data=='ok'){
	 			res.status(200).render('index', { title: 'Lista de usuarios' });
	 		} 			
	 		else {
	 			res.status(500).render('index', { title: 'Lista de usuarios' });	
	 		} 
	 	});
		
	})
//	app.get('/allusers', function (req, res) {
//		var query = userdao.findAllU(req,res);
//		if (query==null) res.render('index', { title: 'Lista de usuarios' });
//		else res.render('index', { title: 'Lista de usuarios' },query);
//	})
}
