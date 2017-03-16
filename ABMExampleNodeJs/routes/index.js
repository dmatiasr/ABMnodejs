//instance to user.js
var userInstance = require('../models/user');
var userdao = require('../connectionDB/userconnection');
var express = require('express');
var router= express.Router();


//router.get('/',function (req, res) {
//	userdao.findAllU(function (e,data) {
//		if (e){
//			console.log(e);
//			res.render('index', { title: 'Lista de usuarios' });
//		}
//		else {
//			res.render('index', { title: 'Lista de usuarios', allusers: data });
//		}
//	});
//})

router.get('/',function (req,res) {
	userdao.findAllU(function(err,users){
		if (err){
			res.status(404).send();
		}
		else{
			res.json(users);
		}

	})
});

router.post('/',function (req, res) {
	var name = req.body.name;
	var email= req.body.email;
	var pass= req.body.password;

	req.checkBody('name','Debe ingresar un nombre').notEmpty();
	req.checkBody('email','Debe ingresar un email').notEmpty();
	req.checkBody('email','Debe ser valido').isEmail();
	req.checkBody('password','Debe ingresar su contraseña').notEmpty();
	var error= req.validationErrors();

	if (error){
		console.log('Algo paso');
		res.redirect('/');
	}
	else{
 		userdao.addU(name, email,pass, function (e, data) {
 			if (e) console.log('error de creacion '+e);
 			if (data=='ok'){
				res.status(200).send();
				//res.redirect('/');
 			}
 			else {
				res.status(409).send();
		//		res.redirect('/');
 			}
 		});
	}
})
router.delete('/delete/:id', function(req, res){
	var id = req.params.id;
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

router.put('/update/:id', function(req,res){
	var id = req.params.id;
	var name = req.body.name;
	var email= req.body.email;
	var passd=req.body.pass;

	console.log(id+name+email+passd)
	userdao.updateU(id,name,email,passd,function(e,data){
		if (e){
			console.log('Algo ocurrió en la actualizacion')
			res.status(409).send();
		}else{
			if (data=="ok"){
				console.log("actualizacion lograda")
				res.status(201).send();
			}
			if(data=="nosave"){
				console.log("no se pudo actualizar ni guardar en DB");
				res.status(500).send();
			}
		}
	})


})


module.exports=router;
