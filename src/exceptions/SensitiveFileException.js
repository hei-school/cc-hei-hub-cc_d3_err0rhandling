//tsy azoko
export class SensitiveFileException extends Error{
    constructor(fileName){
        super()
        this.code = 400
        this.name = "SensitiveFileException"
        this.message = ""
    }
}