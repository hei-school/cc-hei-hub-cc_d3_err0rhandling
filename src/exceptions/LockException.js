//tsy azoko
export class LockException extends Error{
    constructor(){
        super()
        this.code = 423
        this.name = "LockException";
        this.message = ""
    }
}