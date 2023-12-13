export class ServerDownException extends Error{
    constructor(message){
        super()
        this.code = 503
        this.name = "SeverDownException"
        this.message = message
    }
}