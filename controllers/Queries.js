var mysql = require('mysql');
function enviarrowsActas(req,res){
	res.render('consultas/actas', {
		
		isAuthenticated: req.isAuthenticated(),
		user : req.user
	   });
}
function enviarrowsTesis(req,res){
	res.render('consultas/tesis', {
		//title : title[0],
		isAuthenticated: req.isAuthenticated(),
		user : req.user
	   });
}
module.exports = {
	getActas : function(req, res, next){
		//return res.render('users/signup');
		enviarrowsActas(req,res);
	},
	postActas : function(req,res,next){
		enviarrowsActas(req,res);
	},
	getTesis : function(req, res, next){
		//return res.render('users/signup');
		enviarrowsTesis(req,res);
	},
	postTesis : function(req,res,next){
		enviarrowsTesis(req,res);
	}
};