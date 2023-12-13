//tsy azoko
export class NotAuthorizedException extends Error{
    constructor(fileName){
        super()
        this.code = 401
        this.name = "NotAuthorizedException"
        this.message = ""
    }
}