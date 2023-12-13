//tsy azoko
export class SensitiveFileException extends Error{
    constructor(message){
        super()
        this.code = 400
        this.name = "SensitiveFileException"
        this.message = message
    }
}