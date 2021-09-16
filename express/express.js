const express = require("express");
const consign = require('consign');
const bodyParser = require("body-parser");
const headersMiddleware = require("../middlewares/headersMiddleware");

module.exports = () => {
    var app = express();
    
    app.use(headersMiddleware);
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    /* Adicionando controllers no contexto do app */
    consign().include("controllers").into(app);

    return app;
}