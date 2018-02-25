/*var pgp = require("pg")
var config = pgp("postgres://emmas:emmas@localhost:3000/tesis");
//var db = pgp("postgres://username:password@host:port/database");
*/
var config = {
	host : 'localhost',
	user : 'root',
	password : '',
	database : 'tesis'
}

/*const {Pool,Cliente}= require('pg')

const config = new Pool({
  user: 'emmas',
  host: 'localhost',
  database: 'tesis',
  password: 'emmas',
  port: 5432
})*/

module.exports = config;