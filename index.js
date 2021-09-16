const express = require("./express/express");
const config = require("./config/config.json");
//const db = require();

var app = express();

app.listen(config['port'], /*config['hostname'],*/ () => {
    console.log('[+] Server iniciado.');
});