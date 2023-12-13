export class TooManyRequestException extends Error{
    constructor(message){
        super()
        this.code = 429
        this.name = "TooManyRequestException";
        this.message = message;
    }
}