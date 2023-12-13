//tsy azoko
export class LegalReasonException extends Error{
    constructor(message){
        super()
        this.code = 453
        this.name = "LockException";
        this.message = message
    }
}