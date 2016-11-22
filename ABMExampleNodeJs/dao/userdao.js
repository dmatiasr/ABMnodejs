	var userModel= require('../models/user');

	//GET
	exports.findAllU= function (req, res) {
		userModel.find( function (err,us) {
			if (!err) res.send(us);
			else console.log ('ERROR findAll '+err);
		});
	}
	//
	exports.findByIDU= function(req, res){
		userModel.findByID(function (err,us) {
			if (!err) res.send(us);
			else console.log ('ERROR findByID '+err);
		});
	}

	//POST 
	exports.addU= function (req, res) {
		//console.log('POST '+req.body);
	 	
	 	var addUserModel = new userModel({
	 		name : req.body.name,
	 		email: req.body.email
	 	});
	 	
	 	addUserModel.save(function (err) {
	 		if (!err){
	 			console.log('usuario guardado');
	 			return true;
	 		} 
	 		else{
	 			console.log ('ERROR add '+e);
	 			return false;	
	 		} 
	 	});
		
		//res.send(addUserModel);
	}

	//PUT UPDATE
	exports.updateU= function (req, res) {
		userModel.findByID(req.params.id, function (err,user) {
			user.name = user.body.name;
			user.email= user.body.email;
			
		});
		userModel.save(function (err) {
			if (!err) console.log ('Usuario actualizado');
			else console.log ('ERROR update '+err);
		});
	}
	//DELETE
	exports.removeU = function (req, res) {
		userModel.findByID(req.params.id, function (err,user) {
			user.remove(function (err) {
				if (err) console.log ('No se ha podido eliminar '+err);
				else console.log ('Eliminado');
			});
		});			
	}
