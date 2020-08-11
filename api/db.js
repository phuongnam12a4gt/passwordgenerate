'use strict';
const mysql = require('mysql');

const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"10111998",
  database:"nodejs_api"
});
module.exports = db