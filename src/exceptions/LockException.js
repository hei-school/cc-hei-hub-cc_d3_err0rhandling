//tsy azoko
export class LockException extends Error{
    constructor(message){
        super()
        this.code = 423
        this.name = "LockException";
        this.message = message
    }
}