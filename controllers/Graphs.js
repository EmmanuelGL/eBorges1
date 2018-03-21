var mysql = require('mysql'),
	graficasA = [], graficasT = [],
	titleA =[], titleT =[];

function enviarrowsActas(req,res){
	console.log(graficasA);
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
		var config = require('.././database/config');
		var db = mysql.createConnection(config);
				db.connect();

					if(seleccion!='DeptoGrados' && seleccion!='EspecialidadDeptos'){
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
						db.query(`select `+head+` from `+grafica,function(err,rows1,fields){
								console.log(rows1);
								titleA.shift();					
								
								graficasA.shift();
								titleA.push(seleccion)
							
								graficasA.push(rows1)
								enviarrowsActas(req,res);
														
						});
				}else{
					if(seleccion=='DeptoGrados'){
						head = "departamento,total";
						grado='Doctorado';
						//SELECT departamento,total from v_deptogradoa where grado= 'Doctorado'
						db.query(`select `+head+` from v_deptogradoa where grado=`+grado,function(err,rows1,fields){
							console.log(rows1);
							/*titleA.shift();					
							
							graficasA.shift();
							titleA.push(seleccion)
						
							graficasA.push(rows1)
							enviarrowsActas(req,res);*/
													
						});
					}
					if(seleccion=='EspecialidadDeptos'){
						head = "especialidad,departamento,total";
						grafica='v_especialidaddeptoa';
					}
				}
				
						

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