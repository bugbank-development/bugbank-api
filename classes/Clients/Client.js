const db = require("../../db/connector");
const Message = require("../../classes/Message/Message");
var Msg = new Message;

module.exports = class Client {

    constructor(name, username, cpf, email, address, cep){
        this.name = name;
        this.username = username;
        this.cpf = cpf;
        this.email = email;
        this.address = address;
        this.cep = cep;
    }

    createAccount(req, res){

        var sql = "SELECT cpf FROM tblclientes WHERE cpf=? OR usuario=?";

        db.query(sql, [this.cpf, this.username], (err, results) => {
            if(err){
                // console.log(err);
                Msg.sendMessage(err.sqlMessage, 500, req, res);
            } else {
                if(results.length >= 1){
                    Msg.sendMessage("Esta conta já existe em nossos sistemas.", 409, req, res);
                } else {

                    sql = "INSERT INTO tblclientes(nome, email, cpf, endereco, cep, usuario) VALUES (?,?,?,?,?,?)";
                    
                    db.query(sql, [this.name, this.email, this.cpf, this.address, this.cep, this.username], (err, results) => {
                        if(err){
                            Msg.sendMessage(err.sqlMessage, 500, req, res);
                        } else {
                            Msg.sendMessage("Conta criada com sucesso.", 201, req, res);
                        }
                    });
                }
            }
        });
        
    }
}