module.exports = class Message {

    sendMessage(message, status, req, res){
        this.message = message;
        this.status = status;
        this.req = req;
        this.res = res;

        if(this.code >= 400){
            this.isError = true;
        } else {
            this.isError = false;
        }

        //console.log(this.isError);

        var msg = {status: this.status, message: this.message, isError: this.isError};
        this.res.status(this.status);
        //this.res.setHeader('Content-Type', 'text/html');
        this.res.send(msg);
    }


}