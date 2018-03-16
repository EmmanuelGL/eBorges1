var mysql = require('mysql'),
	graficasA = [], graficasT = [],
	titleA =[], titleT =[];

function enviarrowsActas(req,res){
	//console.log(graficasA);
	res.render('estadisticas/actas', {
		title: titleA[0],
		items1:graficasA[0],
		isAuthenticated: req.isAuthenticated(),
		user : req.user
	   });
}
function enviarrowsTesis(req,res){
	res.render('estadisticas/tesis', {
		items1:graficasT[0],
		title : titleT[0],
		isAuthenticated: req.isAuthenticated(),
		user : req.user
	   });
}
module.exports = {
	getActas : function(req, res, next){
		enviarrowsActas(req,res);
	},
	postActas : function(req,res,next){
		var seleccion= req.body.Busqueda,
			grafica="",head='';
		if(seleccion=='Departamento'){
			head = "departamento,total";
			grafica='v_edepartamentoa';
		}
		if(seleccion=='Especialidad'){
			head = "especialidad,total"; 
			grafica='v_eespecialidada';
		}
		if(seleccion=='Grado'){
			head = "grado,total";
			grafica='v_egradoa';
		}
		if(seleccion=='Genero'){
			head = "genero,total";
			grafica='v_egeneroa';
		}
		if(seleccion=='DeptoGrados'){
			head = "departamento,grado,total";
			grafica='v_deptogradoa';
		}
		if(seleccion=='EspecialidadDeptos'){
			head = "especialidad,departamento,total";
			grafica='v_especialidaddeptoa';
		}
		
		var config = require('.././database/config');
			var db = mysql.createConnection(config);
			db.connect();
			db.query(`select `+head+` from `+grafica,function(err,rows1,fields){

				 /*var pruenba = [{"data": [{"name": "CIENCIAS COMPUTACIÓN","y": 1}],"name": "Laboratorio de Tecnologías de la Información"},
				 {"data": [{"name": "CIENCIAS ESPECILIDAD DE MATERIALES","y": 1}],"name": "Materiales"},
				 {"data": [{"name": "CIENCIAS ROBÓTICA Y MANUFACTURA AVANZADA","y": 1}],"name": "ROBÓTICA Y MANUFACTURA AVANZADA"},
				 {"data": [{"name": "CIENCIAS BIOLOGIA CELULAR","y": 1}],"name": "Biología Celular"},
				 {"data": [{"name": "CIENCIAS FISIOLOGÍA. BIOFÍSICA Y NEUROCIENCIAS","y": 1}],"name": "Biología Celular"},
				 {"data": [{"name": "CIENCIAS FISIOLOGÍA. BIOFÍSICA Y NEUROCIENCIAS","y": 10}],"name": "Fisiología"}];*/
					console.log(rows1);
					titleA.shift();					
					
					graficasA.shift();
					titleA.push(seleccion)
				
					graficasA.push(rows1)
					enviarrowsActas(req,res);
											
			});
	},
	getTesis : function(req, res, next){
		//return res.render('users/signup');
		enviarrowsTesis(req,res);
	},
	postTesis : function(req,res,next){
		var seleccion= req.body.Busqueda,
			grafica="",head='';
		if(seleccion=='Departamento'){
			head = "departamento,total";
			grafica='v_edepartamento';
		}
		if(seleccion=='Especialidad'){
			head = "especialidad,total"; 
			grafica='v_eespecialidad';
		}
		if(seleccion=='Grado'){
			head = "grado,total";
			grafica='v_egrado';
		}
		if(seleccion=='Genero'){
			head = "genero,total";
			grafica='v_egenero';
		}
		if(seleccion=='DeptoGrados'){
			head = "grado,departamento,total";
			grafica='v_deptogrado';
		}
		if(seleccion=='EspecialidadDeptos'){
			head = "especialidad,departamento,total";
			grafica='v_especialidaddepto';
		}
		
		var config = require('.././database/config');
			var db = mysql.createConnection(config);
			db.connect();
			db.query(`select `+head+` from `+grafica,function(err,rows1,fields){
					console.log(rows1);
					titleT.shift();					
					graficasT.shift();
					titleT.push(seleccion)
					graficasT.push(rows1)
					enviarrowsTesis(req,res);				
			});
	}
};