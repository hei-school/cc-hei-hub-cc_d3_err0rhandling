export class FileNameInvalidException extends Error{
    constructor(fileName,pattern){
        super()
        this.code = 400
        this.name = "FileNameInvalidException";
        this.message = "file named " + fileName + " is invalid, make it match this pattern: " + pattern;
    }
}