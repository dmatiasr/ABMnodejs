//instance to user.js
var userInstance = require('../models/user');
var userdao = require('../dao/userdao');
var express = require('express');
var router= express.Router();


router.get('/',function (req, res) {
	userdao.findAllU(function (e,data) {
		if (e){
			console.log(e);
			res.render('index', { title: 'Lista de usuarios' });
		}
		else {
			res.render('index', { title: 'Lista de usuarios', allusers: data });
		}
	});
})

router.post('/',function (req, res) {
	var name = req.body.name;
	var email= req.body.email;
	var pass= req.body.password;
	console.log(name+email+pass)
	req.checkBody('name','Debe ingresar un nombre').notEmpty();
	req.checkBody('email','Debe ingresar un email').notEmpty();
	req.checkBody('email','Debe ser valido').isEmail();
	req.checkBody('password','Debe ingresar su contraseña').notEmpty();
	var error= req.validationErrors();

	if (error){
		console.log('erro redirect');
		res.redirect('/');
	}
	else{
 		userdao.addU(name, email,pass, function (e, data) {
 			if (e) console.log('error de creacion '+e);
 			if (data=='ok'){
 				res.redirect('/');
 			}
 			else {
 				res.redirect('/');
 			}
 		});
	}
})
router.delete('/delete/:id', function(req, res){
	console.log("ENTRE");
	var id = req.params.id;
	console.log("params"+id);
	userdao.removeUser(id, function (e,data) {
		if (e) {
			console.log('No se ha podido eliminar el usuario')
			res.status(500).send();
		}else{
			console.log('Eliminado');
			res.status(200).send();
		}

	})


})











module.exports=router;
