var db = require('mongoose');
var Schema = db.Schema;

var user = new Schema({ 
	name : String,
	email: String,
	pass: String
});

module.exports= db.model('users',user);