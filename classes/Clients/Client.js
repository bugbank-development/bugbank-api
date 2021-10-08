const db = require("../../db/connector");
const Message = require("../../classes/Message/Message");
const md5 = require("md5");

var Msg = new Message;

module.exports = class Client {

    constructor(obj){
        this.name = obj.name;
        this.username = obj.username;
        this.cpf = obj.cpf;
        this.email = obj.email;
        this.address = obj.address;
        this.cep = obj.cep;
        this.password = md5(obj.password);
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

                    sql = "INSERT INTO tblclientes(nome, email, cpf, endereco, cep, usuario, senha) VALUES (?,?,?,?,?,?,?)";
                    
                    db.query(sql, [this.name, this.email, this.cpf, this.address, this.cep, this.username, this.password], (err, results) => {
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


    login(req, res){
        var sql = "SELECT cpf FROM tblclientes WHERE cpf=? AND senha=?";
        
        var query = db.query(sql, [this.cpf, this.password], (err, results) => {
            if(err){
                Msg.sendMessage(err.sqlMessage, 500, req, res);
            } else{
                if(results.length >= 1){
                    Msg.sendMessage("Logado com sucesso.", 200, req, res);
                } else{
                    Msg.sendMessage("Usuário e/ou senha incorretos.", 401, req, res);
                }
            }
        });
        
        
    }



}