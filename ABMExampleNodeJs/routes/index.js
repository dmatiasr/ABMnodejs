//instance to user.js
var userInstance = require('../models/user');

module.exports = function (app) {

	app.get('/',function (req, res) {
		res.render('index', { title: 'Lista de usuarios' });
	})
	
	app.post('/',function (req, res) {
		userInstance.new({ name:req.param('name'),email:req.param('email')}, function (e) {
			//if error
			if (e){
				console.log("index : app.post '/' "+e);
				res.render('index', { title: 'Lista de usuarios' });	
			}else{
				res.render('index', { title: 'Lista de usuarios' });	
			}
				
		});
	})
}
