/** Database for lunchly */

const pg = require("pg");
var fs = require('fs');

// var sql = fs.readFileSync('data.sql').toString();
const db = new pg.Client("postgresql://localhost/lunchly");


db.connect();

module.exports = db;
