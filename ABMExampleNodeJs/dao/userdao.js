	var userModel= require('../models/user');

	//POST 
	exports.addU= function (pname,pemail, callback){ 
	 	
	 	var addUserModel = new userModel({
	 		name : pname,
	 		email: pemail
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



	//{
		//console.log('POST '+req.body);
	 	
	 //	var addUserModel = new userModel({
	 //		name : pname,
	 //		email: pemail
	 //	});
	 	
	// 	addUserModel.save(function (err) {
	 //		if (!err){
	 	//		console.log('usuario guardado');
	 	//		return true;
	 	//	} 
	 	//	else{
	 	//		console.log ('ERROR add '+e);
	 	//		return false;	
	 	//	} 
	// 	});
		
		//res.send(addUserModel);
	//}

	//GET
	exports.findAllU= function (req, res) {
		userModel.find( {},function (err,us) {
			if (!err){ 
				return (us);
			}else {
				console.log ('ERROR findAll '+err);
				return null;
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
