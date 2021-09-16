module.exports = class Message {

    sendMessage(message, code, req, res){
        this.message = message;
        this.code = code;
        this.req = req;
        this.res = res;

        if(this.code >= 400){
            this.isError = true;
        } else {
            this.isError = false;
        }

        //console.log(this.isError);

        var msg = {status: this.status, message: this.message, isError: this.isError};
        this.res.status(this.code);
        //this.res.setHeader('Content-Type', 'text/html');
        this.res.send(msg);
    }


}