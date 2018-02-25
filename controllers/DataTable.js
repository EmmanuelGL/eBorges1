var mysql = require('mysql'),
	tabla = [],
	title =[],
	encabezados = [];
function enviarrows(req, res){
	console.log(JSON.stringify(title));
	for(var i=0;i<=tabla.length;i++){
		console.log(tabla[0]+'----------------------');//cero tiene el contenido
		console.log('8888888---'+tabla.length+'----------------------');
	}
    res.render('tablas/actas', {
	items:encabezados[0],
	items1: tabla[0],
	title : title[0],
	isAuthenticated: req.isAuthenticated(),
	user : req.user
   });
}
function enviarrowsTesis(req,res){
	res.render('tablas/tesis', {
		title : title[0],
		isAuthenticated: req.isAuthenticated(),
		user : req.user
	   });
}
module.exports = {

	getActas : function(req, res, next){
			/*res.render('tablas/actas', {
			isAuthenticated : req.isAuthenticated(),
			user : req.user
		});*/
		enviarrows(req,res);
	},
	postActas : function(req,res,next){
			/**
			 * Controlador api, regresa informacion de las tablas, contiene las funciones de:
			 * 	-Tabla de departamentos
			 * 	-Tabla de especialidades
			 * 	-Tabla de grados
			 * 	-Tabla de deptogrados
			 * 	-Tabla de especialidaddeptos
			 */		
		console.log(req.body.Busqueda);
		//nombre de la lista desplegable la cual se asignara a una variable para una busqueda
		var seleccion= req.body.Busqueda,
			table="";
		
		if(seleccion=='Departamento')
			table='v_edepartamentoa';	
		if(seleccion=='Especialidad') 
			table='v_eespecialidada';
		if(seleccion=='Grado')
			table='v_egradoa';
		if(seleccion=='Genero')
			table='v_egeneroa';
		if(seleccion=='DeptoGrados')
			table='v_deptogradoa';
		if(seleccion=='EspecialidadDeptos')
			table='v_especialidaddeptoa';
		
		var config = require('.././database/config');
			var db = mysql.createConnection(config);
			db.connect();
			
			db.query(`select * from `+table,function(err,rows1,fields){
				//console.log(rows);
				db.query(`DESCRIBE `+table,function(err,rows,fields){
					//console.log(rows);
					//console.log(rows1)
					/*var emmas={
						asunto: "asi debe de quedar",
						mensaje: "mensaje"
					 }*/
					/*rows = JSON.stringify(rows);
					rows1 = JSON.stringify(rows1);*/
					title.shift();					
					encabezados.shift();
					tabla.shift();
					title.push(seleccion)
					encabezados.push(rows)
					tabla.push(rows1)
					enviarrows(req,res);
								
				});	
				/*rows = JSON.stringify(rows);
				//console.log(rows)
				grafica.push(rows)
				 enviarrows(req,res);*/
				
				//return res.redirect('/tablas/actas');				
			});	
	},


	/*--------------------------------------------
	*CONSULTAS PARA LA VISTA DE LAS TABLAS DE TESIS 
	*
	*-----------------------------------------------*/

    getTesis : function(req, res, next){
		//return res.render('users/signup');
		enviarrowsTesis(req,res);
	},
	postTesis : function(req,res,next){
		enviarrowsTesis(req,res);
	}
	
};