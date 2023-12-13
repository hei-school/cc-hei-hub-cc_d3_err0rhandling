export class FileNotFoundException extends Error{
    constructor(fileName){
        super()
        this.code = 404
        this.name = "FileNotFoundException";
        this.message = "File " + fileName + "is not found"
    }
}