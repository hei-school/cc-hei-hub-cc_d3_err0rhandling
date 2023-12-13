export class FileTooLargeException extends Error{
    constructor(fileSize){
        super()
        this.code = 413
        this.name = "FileTooLargeException";
        this.message = "you are trying to upload a file that is too large: " + fileSize + "Mo";
    }
}