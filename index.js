const express = require("./express/express");
const config = require("./config/config.json");
const db = require('./db/connector');

var app = express();

db.connect(err => {
    if(err){
        console.log('Error: MySQL connect failed.');
        console.log(err);
    } else {
        console.log('[+] Conexão com banco de dados estabelecida.');
        app.listen(config['port'], /*config['hostname'],*/ () => {
            console.log('[+] Aplicação iniciada.');
        });
    }
});