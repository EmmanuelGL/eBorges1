var mysql = require('mysql'),
	tabla = [],tablaTesis=[],
	title =[],titleTesis=[],
	encabezados = [],encabezadosTesis=[];
function enviarrowsActas(req,res){
	res.render('exportar/actas', {
		items:encabezados[0],
		items1: tabla[0],
		title : title[0],
		isAuthenticated: req.isAuthenticated(),
		user : req.user
	   });
}
function enviarrowsTesis(req,res){
	res.render('exportar/tesis', {
		//title : title[0],
		items:encabezadosTesis[0],
		items1: tablaTesis[0],
		title : titleTesis[0],
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
		/**
			 * post regresa informacion de las tablas, contiene las funciones de:
			 * 	-Tabla de departamentos
			 * 	-Tabla de especialidades
			 * 	-Tabla de grados
			 * 	-Tabla de deptogrados
			 * 	-Tabla de especialidaddeptos
			 */		
			//nombre de la lista desplegable la cual se asignara a una variable para una busqueda
			var seleccion= req.body.Busqueda,
				table="";
				console.log('-------------------------------------------------------'+seleccion)
			if(seleccion=='Departamento')
				table='v_edepartamentoa';	
			if(seleccion=='Especialidad') 
				table='v_eespecialidada';
			if(seleccion=='Grado')
				table='v_egradoa';
			if(seleccion=='Genero')
				table='v_egeneroa';
			if(seleccion=='Departamento y Grados')
				table='v_deptogradoa';
			if(seleccion=='Especialidad y Departamentos')
				table='v_especialidaddeptoa';
			
			var config = require('.././database/config');
				var db = mysql.createConnection(config);
				db.connect();
				
				db.query(`select * from `+table,function(err,rows1,fields){
					db.query(`DESCRIBE `+table,function(err,rows,fields){
						if(err) throw err;

						db.end();
						title.shift();					
						encabezados.shift();
						tabla.shift();
						title.push(seleccion)
						encabezados.push(rows)
						tabla.push(rows1)
						enviarrowsActas(req,res);
									
					});					
				});	
	},
	getTesis : function(req, res, next){
		//return res.render('users/signup');
		enviarrowsTesis(req,res);
	},
	postTesis : function(req,res,next){
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
				table='v_edepartamento';	
			if(seleccion=='Especialidad') 
				table='v_eespecialidad';
			if(seleccion=='Grado')
				table='v_egrado';
			if(seleccion=='Genero')
				table='v_egenero';
			if(seleccion=='Departamento y Grados')
				table='v_deptogrado';
			if(seleccion=='Especialidad y Departamentos')
				table='v_especialidaddepto';
			
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
						if(err) throw err;

						db.end();
						titleTesis.shift();					
						encabezadosTesis.shift();
						tablaTesis.shift();
						titleTesis.push(seleccion)
						encabezadosTesis.push(rows)
						tablaTesis.push(rows1)
						enviarrowsTesis(req,res);
									
					});				
				});	
	}
};