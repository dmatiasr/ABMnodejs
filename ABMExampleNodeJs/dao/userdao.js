var userModel= require('../models/user');
	
	exports.addU= function (pname,pemail,pass, callback){ 
	
	 	var addUserModel = new userModel({
	 		name : pname,
	 		email: pemail,
	 		pass : pass
	 	});

	 	addUserModel.save(function (err) {
	 		if (!err){
	 			console.log('usuario guardado');
	 			ok='ok';
	 			callback(err,ok);
	 		} 
	 		else{
				console.log('usuario NO guardado'+err);	 			
	 			ok='no';
				callback(err,ok);	
	 		} 
	 	});	 
	}	
		
	exports.findAllU= function ( callback ) {
		userModel.find(function (err,us) {
			if (!err){ 
				console.log('Users'+us);
				callback (null,us);
			}else {
				console.log('Error findall '+err);
				callback(err,us);
			}
				
		});
	}
	//
	//exports.findByIDU= function(req, res){
	//	userModel.findByID(function (err,us) {
	//		if (!err) res.send(us);
	//		else console.log ('ERROR findByID '+err);
	//	});
	//}

	

	//PUT UPDATE
	//exports.updateU= function (req, res) {
	//	userModel.findByID(req.params.id, function (err,user) {
	//		user.name = user.body.name;
	//		user.email= user.body.email;
			
	//	});
	//	userModel.save(function (err) {
	//		if (!err) console.log ('Usuario actualizado');
	//		else console.log ('ERROR update '+err);
	//	});
	//}
	//DELETE
	//exports.removeU = function (req, res) {
	//	userModel.findByID(req.params.id, function (err,user) {
	//		user.remove(function (err) {
	//			if (err) console.log ('No se ha podido eliminar '+err);
	//			else console.log ('Eliminado');
	//		});
	//	});			
	//}
