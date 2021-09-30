const Client = require("../../classes/Clients/Client");
const Message = require("../../classes/Message/Message");
var Msg = new Message;

module.exports = app => {

    app.post("/registrar", (req, res) => {
        var client =  new Client(req.body.nome, req.body.usuario, req.body.cpf, req.body.email, req.body.endereco, req.body.cep);
        client.createAccount(req, res);
    });
}