export class DuplicateFileException extends Error{
    constructor(fileName){
        super()
        this.code = 400
        this.name = "DuplicateFileException";
        this.message = "File : " + fileName + " already exist";
    }
}
