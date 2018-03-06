var mysql = require('mysql'),
	graficas = [],
	title =[],
	encabezados = [];

function enviarrowsActas(req,res){
	//console.log(JSON.stringify(graficas[0])+'----------------------------------------');
	//------------------------------------
	//var muestra = JSON.parse(JSON.stringify(graficas[0]));
	var arreglo = [{
		nombre: 'Luis',
		apellido: 'Gonzales'
	  }, {
		nombre: 'Maria',
		apellido: 'Perez'
	  }, {
		nombre: 'Ignacia',
		apellido: 'Valdebenito'
	  }];
	  
	  // para cada elemento... 
	  	//if(graficas.length!=0){
			var arreglado = arreglo.map( item => { 
				// lo guardas temporalmente
				var temporal = item.nombre;
				var temporal1 = item.apellido
				// eliminas el valor que ya no quieres
				delete item.nombre;
				delete item.apellido
				// creas el valor nuevo.
				item.name = temporal1;
				item.y = temporal;
				
				return item; 
			});
			
			//console.log(arreglado);
		//}
	//------------------------------------
	//var cuerpoTable = JSON.stringify(graficas[0])
		
	res.render('estadisticas/actas', {
		//items: encabezados[0],
		
		title: title[0],
		//Actas : "Actas",
		//items1: arreglado
		items1:graficas[0],
		isAuthenticated: req.isAuthenticated(),
		user : req.user
	   });
}
function enviarrowsTesis(req,res){
	res.render('estadisticas/tesis', {
		items1:graficas[0],
		title : title[0],
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
			head = "grado,departamento,total";
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
				//db.query(`DESCRIBE `+grafica,function(err,rows,fields){
					console.log(rows1);
					title.shift();					
					//encabezados.shift();
					graficas.shift();
					title.push(seleccion)
				//	encabezados.push(rows)
					graficas.push(rows1)
					enviarrowsActas(req,res);
								
				//});				
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
				//db.query(`DESCRIBE `+grafica,function(err,rows,fields){
					console.log(rows1);
					title.shift();					
					//encabezados.shift();
					graficas.shift();
					title.push(seleccion)
				//	encabezados.push(rows)
					graficas.push(rows1)
					enviarrowsTesis(req,res);
								
				//});				
			});
		//enviarrowsTesis(req,res);
	}
};