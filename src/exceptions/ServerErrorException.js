export class ServerErrorException extends Error{
    constructor(message){
        super()
        this.code = 500
        this.name = "ServerErrorException";
        this.message = message;
    }
}
