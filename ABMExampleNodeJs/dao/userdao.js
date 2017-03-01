var userModel= require('../models/user');

	//check
	exports.addU= function (pname,pemail,pass, callback){

	 	var addUserModel = new userModel({
	 		name : pname,
	 		email: pemail,
	 		pass : pass
	 	});
		console.log(addUserModel);
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
	//check
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

	//TO-DO
	exports.removeUser = function (id, callback) {
		console.log(id)
		userModel.findByIdAndRemove({_id: id}, function (err,user) {
			console.log("paso "+ user);
			if (err) console.log("No se pudo eliminar"+err);
			else callback(err,user);
		});
	}

	//TO-DO
	exports.findByIDU= function(id, callback){
		userModel.findById(id,function (err,us) {
			if (!err) callback(err,us);
			else console.log ('ERROR findByID '+err);
		});
	}



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
