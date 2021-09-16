const mysql = require("mysql");
const config = require("../config/config.json");

const conn = mysql.createConnection({
    host: config['mysql'][0]['host'],
    port: config['mysql'][0]['port'],
    database: config['mysql'][0]['db'],
    user: config['mysql'][0]['username'],
    password: config['mysql'][0]['password']
});

module.exports = conn;