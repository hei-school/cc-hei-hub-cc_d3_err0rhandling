//tsy azoko
export class NotAuthorizedException extends Error{
    constructor(message){
        super()
        this.code = 401
        this.name = "NotAuthorizedException"
        this.message = message
    }
}