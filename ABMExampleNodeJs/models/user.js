var Db = require('mongodb').Db; //Db propertie
var Serv = require('mongodb').Server;//server Db propertie

var dPort = 27017; //port
var dHost= "localhost";
var dName= "PersistenceDB1";

var userDb= {}; // User Driver persistence

//config object mongo db
userDb.db=new Db( dName, new Serv(dHost,dPort, {auto_reconnect:true },{} ) );

//connection to Db 
userDb.db.open(function (e,d) {
	if (e){
		console.log("Error a la Conexion de la Base de Datos Mongo --> "+e);
	}else{
		console.log("Success Connection to "+ dName);
	}
});

//create db collection with name Users and userDb.users drive this Object. 
userDb.users= userDb.db.collection('Users');

module.exports= userDb;

//methods CRUD for userDb
/**
	createUser:(new)
	This method add one user to Db, if user exist then function callback is activated
	param: newData
	param: callback
**/
userDb.new= function (newData, callback) {
	userDb.users.findOne({ email: newData.email } , function (e, obj) {
		if (obj){
			callback("Ese email ya existe.");
		}else{
			userDb.users.insert(newData, callback(null) );
			console.log("Agregado con exito! ");
		}
	});
}