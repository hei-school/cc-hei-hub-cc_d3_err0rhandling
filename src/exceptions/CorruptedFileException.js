export class CorruptedFileException extends Error{
    constructor(fileName){
        super()
        this.code = 500
        this.name = "CorruptedFileException";
        this.message = "File : " + fileName + " is corrupted";
    }
}