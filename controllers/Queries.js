var mysql = require('mysql');
/*function enviarrowsActas(req,res){
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
}*/
module.exports = {
	getActas : function(req, res, next){			
			var config = require('.././database/config');
				var db = mysql.createConnection(config);
				db.connect();
							
				db.query(`select * from actas`,function(err,rows,fields){
					console.log(JSON.stringify(rows));
					/*renderizaremos los json para la vista*/
					   // var actas = JSON.parse(JSON.stringify(rows));
						
						
						//console.log(actas);
						//.length
						//console.log(rows.length+'---------------++++++++++++++++++++++++++')
						return res.render('consultas/actas',{
							items : rows,
							isAuthenticated: req.isAuthenticated(),
							user : req.user
						});

								
				});	
		
		//enviarrowsActas(req,res);
	},
	postActas : function(req,res,next){
		enviarrowsActas(req,res);
	},
	getTesis : function(req, res, next){

		var config = require('.././database/config');
		var db = mysql.createConnection(config);
		db.connect();
					
		db.query(`select * from v_tesis`,function(err,rows,fields){
			console.log(JSON.stringify(rows));
			/*renderizaremos los json para la vista*/
			   // var actas = JSON.parse(JSON.stringify(rows));
				
				
				//console.log(actas);
				//.length
				//console.log(rows.length+'---------------++++++++++++++++++++++++++')
				return res.render('Consultas/tesis',{
					items:rows,
					isAuthenticated: req.isAuthenticated(),
					user : req.user
				});

						
		});	

		
		//enviarrowsTesis(req,res);
	},
	postTesis : function(req,res,next){
		enviarrowsTesis(req,res);
	}
};