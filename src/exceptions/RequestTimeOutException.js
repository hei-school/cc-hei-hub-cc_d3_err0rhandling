export class RequestTimeOutException extends Error{
    constructor(){
        super()
        this.code = 408
        this.name = "RequestTimeOutException";
        this.message = "Request time out"
    }
}