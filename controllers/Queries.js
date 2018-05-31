var mysql = require('mysql'),
	consultaA= [],consultaT=[];
function enviarrowsActas(req,res){
	res.render('consultas/actas', {
		items :consultaA[0],
		isAuthenticated: req.isAuthenticated(),
		user : req.user
	   });
}
function enviarrowsTesis(req,res){
	res.render('consultas/tesis', {
		//items1 : consultaT1[0],
		items : consultaT[0],
		isAuthenticated: req.isAuthenticated(),
		user : req.user
	   });
}
module.exports = {
	getActas : function(req, res, next){			
			var config = require('.././database/config');
				var db = mysql.createConnection(config);
				db.connect();
							
				db.query(`select * from actas`,function(err,rows,fields){
						if(err) throw err;

						db.end();
						consultaA.shift();
						consultaA.push(rows)
						enviarrowsActas(req,res);

								
				});	
		
		//enviarrowsActas(req,res);
	},
	postActas : function(req,res,next){
		var user = {
			Folio : req.body.folio,
			Lugar : req.body.lugar,
			Desde : req.body.desde,
			Hasta : req.body.hasta,
			Alumno : req.body.alumno,
			Titulo : req.body.titulo,
			Director : req.body.director,
			Sinodal : req.body.sinodal
		};   
		var consulta = '',busqueda1='';
		//var elvisLives = Math.PI > 4 ? "Sip" : "Nop";
		//console.log(Math.PI+'------------------------')
		//console.log(elvisLives)
		console.log(user);
		var consultaAvanzada = req.body.folio === ''?"": consulta ="`FOLIO` = \""+ req.body.folio+"\" AND ";
			consultaAvanzada = req.body.lugar === ''?"": consulta = consulta +"`LUGAR` = \""+ req.body.lugar+"\" AND ";
			consultaAvanzada = req.body.desde === ''?"": consulta= consulta +"`FECHA DE TOMA DE GRADO` BETWEEN '"+req.body.desde+"' and '"+ req.body.hasta+"'";
			consultaAvanzada = req.body.alumno === ''?"": consulta = consulta +" AND `ALUMNO` = \""+ req.body.alumno+"\"";
			consultaAvanzada = req.body.titulo === ''?"": consulta = consulta +" AND `titulo` = \""+req.body.titulo+"\"";
			consultaAvanzada = req.body.director === ''?"": consulta = consulta+" AND `DIRECTOR`= \""+req.body.director + "\" OR `DIRECTOR1`= \""+req.body.director + "\" OR `DIRECTOR2`= \""+req.body.director + "\" OR `DIRECTOR3`= \""+req.body.director + "\" OR `DIRECTOR4`= \""+req.body.director + "\" ";
			consultaAvanzada = req.body.sinodal === ''?"": consulta = consulta+"AND `SINODAL`=  \""+req.body.sinodal + "\" OR `SINODAL1`= \""+req.body.sinodal + "\" OR `SINODAL2`= \""+req.body.sinodal + "\" OR `SINODAL3`= \""+req.body.sinodal + "\" OR `SINODAL4`= \""+req.body.sinodal + "\"";
		
		var busqueda = req.body.folio === ''?"": busqueda1 ="\"Folio : "+ req.body.folio+"\"  ";
			busqueda = req.body.lugar === ''?"": busqueda1 = busqueda1 +"\"Lugar : "+ req.body.lugar+"\"  ";
			busqueda = req.body.desde === ''?"":  busqueda1 = busqueda1 +"\"Desde: "+req.body.desde+", Hata: "+ req.body.hasta+"\"";
			busqueda = req.body.alumno === ''?"":  busqueda1 = busqueda1 +" \"Alumno : "+ req.body.alumno+"\"";
			busqueda = req.body.titulo === ''?"":  busqueda1 = busqueda1 +" \"Titulo : "+req.body.titulo+"\"";
			busqueda = req.body.director === ''?"":  busqueda1 = busqueda1 +" \"DIRECTOR : "+req.body.director + "\" ";
			busqueda = req.body.sinodal === ''?"":  busqueda1 = busqueda1+"\"SINODAL : "+req.body.sinodal +"\"";
		
		console.log(consulta+'----------------------1')
		console.log("Busqueda avansada: "+busqueda1+'------------------2')
		//console.log(user);
		/*consultaA.shift();
		consultaA.push(user)*/
		var config = require('.././database/config');
				var db = mysql.createConnection(config);
				db.connect();
							
				db.query(`select * from actas where (`+consulta+')',function(err,rows,fields){
						console.log(JSON.stringify(rows))
						if(err) throw err;

			            db.end();
						consultaA.shift();
						consultaA.push(rows)
						enviarrowsActas(req,res);

								
				});	
	},
	getTesis : function(req, res, next){

		var config = require('.././database/config');
		var db = mysql.createConnection(config);
		db.connect();
					
		db.query(`select * from v_tesis`,function(err,rows,fields){
				if(err) throw err;

				db.end();
				consultaT.shift();
				consultaT.push(rows)
				enviarrowsTesis(req,res);
						
		});	
	},
	postTesis : function(req,res,next){
		var consulta= "";
		var user = {
			departamento : req.body.departamento,
			grado : req.body.grado,
			especialidad : req.body.especialidad,
			desde : req.body.desde,
			hasta : req.body.hasta,
			alumno : req.body.alumno,
			titulo : req.body.titulo,
			director : req.body.director,
			Sinodal : req.body.sinodal
		}; 
		var consultaAvanzada = req.body.departamento === ''?"": consulta ="`DEPARTAMENTO` = \""+ req.body.departamento+"\" AND ";
			consultaAvanzada = req.body.grado === ''?"": consulta = consulta +"`GRADO` = \""+ req.body.grado+"\" AND ";
			consultaAvanzada = req.body.especialidad === ''?"": consulta = consulta +"`especialidad` = \""+ req.body.especialidad+"\" AND ";
			consultaAvanzada = req.body.desde === ''?"":consulta= consulta +"`fechapublicacion` BETWEEN '"+req.body.desde+"' and '"+ req.body.hasta+"'";
			consultaAvanzada = req.body.alumno === ''?"": consulta = consulta +" AND `ALUMNO` = \""+ req.body.alumno+"\"";
			consultaAvanzada = req.body.titulo === ''?"": consulta = consulta +" AND `TITULO` = \""+req.body.titulo+"\"";
			consultaAvanzada = req.body.director === ''?"": consulta = consulta+" AND `DIRECTOR`= \""+req.body.director + "\" OR `DIRECTOR1`= \""+req.body.director + "\" OR `DIRECTOR2`= \""+req.body.director + "\" OR `DIRECTOR3`= \""+req.body.director + "\" OR `DIRECTOR4`= \""+req.body.director + "\" ";
			consultaAvanzada = req.body.sinodal === ''?"": consulta = consulta+"AND `SINODAL`=  \""+req.body.sinodal + "\" OR `SINODAL1`= \""+req.body.sinodal + "\" OR `SINODAL2`= \""+req.body.sinodal + "\" OR `SINODAL3`= \""+req.body.sinodal + "\" OR `SINODAL4`= \""+req.body.sinodal + "\""; 
		console.log(user);
		console.log(consulta)
		var config = require('.././database/config');
				var db = mysql.createConnection(config);
				db.connect();
							
				db.query(`select * from v_tesis where (`+consulta+')',function(err,rows,fields){
						console.log(JSON.stringify(rows))
						if(err) throw err;

						db.end();
						consultaT.shift();
						consultaT.push(rows)
						enviarrowsTesis(req,res);							
				});	
	}
};