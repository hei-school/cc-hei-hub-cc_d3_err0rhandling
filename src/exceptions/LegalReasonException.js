//tsy azoko
export class LegalReasonException extends Error{
    constructor(){
        super()
        this.code = 453
        this.name = "LockException";
        this.message = ""
    }
}