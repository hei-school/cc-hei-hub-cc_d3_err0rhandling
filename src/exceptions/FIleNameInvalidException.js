export class FileNameInvalidException extends Error{
    constructor(fileName,pattern){
        super()
        this.code = 400
        this.name = "FileNameInvalidException";
        this.message = "fileName " + fileName + "is invalid, make it matrch this pattern:\n " + pattern;
    }
}