export class BadFileTypeException extends Error{
    constructor(fileType){
        super()
        this.code = 400
        this.name = "BadFileTypeException";
        this.message = "File type " + fileType + " is not allowed"
    }
}
