export class StockageInsufisantCloudException extends Error{
    constructor(fileSize){
        super()
        this.code = 507
        this.name = "StockageInsufisantCloudException";
        this.message = "you are trying to upload a file with \""+fileSize+" Mo\" of size but the cloud storage is at his limit";
    }
}

export class FileNotFoundException extends Error{
    constructor(fileName){
        super()
        this.code = 404
        this.name = "FileNotFoundException";
        this.message = "File " + fileName + "is not found"
    }
}

export class BadFileTypeException extends Error{
    constructor(fileType){
        super()
        this.code = 400
        this.name = "BadFileTypeException";
        this.message = "File type " + fileType + "is not allowed"
    }
}

export class BadFileTypeException extends Error{
    constructor(fileType){
        super()
        this.code = 400
        this.name = "BadFileTypeException";
        this.message = "File type " + fileType + "is not allowed"
    }
}

export class FileTooLargeException extends Error{
    constructor(fileSize){
        super()
        this.code = 413
        this.name = "FileTooLargeException";
        this.message = "you are trying to upload a file that is too large: " + fileSize + "Mo";
    }
}

export class NotImplementedException extends Error{
    constructor(fonctionnality){
        super()
        this.code = 501
        this.name = "NotImplementedException";
        this.message = "the functionnality " + fonctionnality + " is not yet implemented"
    }
}

export class ServerErrorException extends Error{
    constructor(message){
        super()
        this.code = 500
        this.name = "ServerErrorException";
        this.message = message;
    }
}


export class DuplicateFileException extends Error{
    constructor(fileName){
        super()
        this.code = 400
        this.name = "DuplicateFileException";
        this.message = "File : " + fileName + " already exist";
    }
}

export class CorruptedFileException extends Error{
    constructor(fileName){
        super()
        this.code = 500
        this.name = "CorruptedFileException";
        this.message = "File : " + fileName + " is corrupted";
    }
}

//tsy azoko
export class LockException extends Error{
    constructor(){
        super()
        this.code = 423
        this.name = "LockException";
        this.message = ""
    }
}

//tsy azoko
export class LegalReasonException extends Error{
    constructor(){
        super()
        this.code = 453
        this.name = "LockException";
        this.message = ""
    }
}

export class FileNameInvalidException extends Error{
    constructor(fileName,pattern){
        super()
        this.code = 400
        this.name = "FileNameInvalidException";
        this.message = "fileName " + fileName + "is invalid, make it matrch this pattern:\n " + pattern;
    }
}

//tsy azoko
export class SensitiveFileException extends Error{
    constructor(fileName){
        super()
        this.code = 400
        this.name = "SensitiveFileException"
        this.message = ""
    }
}

//tsy azoko
export class NotAuthorizedException extends Error{
    constructor(fileName){
        super()
        this.code = 401
        this.name = "NotAuthorizedException"
        this.message = ""
    }
}