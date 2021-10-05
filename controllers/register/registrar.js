const Client = require("../../classes/Clients/Client");

module.exports = app => {

    app.post("/registrar", (req, res) => {
        var client =  new Client(req.body.nome, req.body.usuario, req.body.cpf, req.body.email, req.body.endereco, req.body.cep, req.body.senha);
        client.createAccount(req, res);
    });
}