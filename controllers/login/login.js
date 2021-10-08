const db = require("../../db/connector");
const Client = require("../../classes/Clients/Client");

module.exports = app => {

    app.post('/login', (req, res) => {
        var client = new Client({cpf: req.body.cpf, password: req.body.senha});
        client.login(req, res);
    });
}