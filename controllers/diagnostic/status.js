const Message = require("../../classes/Message/Message");
const Msg = new Message;

module.exports = app => {

    app.get("/status", (req, res) => {
        Msg.sendMessage('Up', 200, req, res);
    });

}