const Client = require("../../classes/Clients/Client");

module.exports = app => {

    app.post("/registrar", (req, res) => {
        /* Fazer checagem dos dados */
        var client =  new Client({name: req.body.nome, username: req.body.usuario, cpf: req.body.cpf, email: req.body.email, address: req.body.endereco, cep: req.body.cep, password: req.body.senha});
        client.createAccount(req, res);
    });
}