var mysql = require('mysql');
var pool = mysql.createPool({
  host: 'localhost',
  user: 'giuseppe',
  database: 'delivery',
  password: 'giuseppe'
});

module.exports = pool