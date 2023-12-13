/**
 * 
 * StocakgeInsufisantCloud 507
FileNotFound 404 Done
ServerDown 503
BadFileType 400 Done
TooManyRequest 429 Done
RequestTimeout 408 Done
FileTooLarge 413 Done
NoTImplemented 501
ServerError 500
DuplicatedFile 400  Done
CorruptedFile 500
LockException 423 Done
LegalReason 453 Done
FileNameInvalid 400 done
SensitiveFile 400  done
NotAuthorized 401  done
 */

import { BadFileTypeException, DuplicateFileException, FileNameInvalidException, FileNotFoundException, FileTooLargeException, LockException, NotAuthorizedException } from "../exceptions/index.js";
import { logger } from "../../utils/index.js";
/**
 * 4xx Error Section
 */

export const BadFileTypeExceptionHandler = (fileExtention)=>{
    try{
        throw new BadFileTypeException(fileExtention)
    }catch(badFileTypeException){
        logger.error(badFileTypeException)
        return badFileTypeException.message
    }
}

export const DuplicatedFileExceptionHandler = (fileName)=>{
    try{
        throw new DuplicateFileException(fileName)
    }catch(duplicateFileException){
        logger.error(duplicateFileException)
        return duplicateFileException.message;
    }
}

const FileNameExceptionHanlder = (fileName)=>{
    try{
        throw new FileNameInvalidException(fileName)
    }catch(fileNameInvalidException){
        logger.error(fileNameInvalidException)
        return fileNameInvalidException.message;
    }
}
const SensitiveFileException = ()=>{
// Error 400
}
const UnauthorizedExceptionHandler = (message)=>{
    try{
        throw new NotAuthorizedException(message);
    }catch(notAuthorizedException){
        logger.error(notAuthorizedException)
        return notAuthorizedException.message
    }
}
const FileNotFoundHandler = (fileName)=>{
    try{
        throw new FileNotFoundException(fileName)
    }catch(fileNotFoundException){
        logger.error(fileNotFoundException)
        return fileNotFoundException.message;
    }
}
/**
 * Time out exception occur when the server doesn't respond after a certain amout of time
 */

const TimeOutExceptionHandler = ()=>{
    try{
        fetch("http://1.2.3.4",{});
    }catch(timeOutException){
        logger.error(timeOutException)
        return timeOutException.message
    }
// Error 408    
}
const FileTooLargeExceptionHandler = (fileSize)=>{
    try{
        throw new FileTooLargeException(fileSize)
    }catch(fileTooLargeException){
        logger.error(fileTooLargeException)
        return fileTooLargeException.message
    }
// Error 413
}
const LockExceptionHandler = (message)=>{
    try{
        throw new LockException(message)
    }catch(lockException){
        logger.error(lockException)
        return lockException.message
    }
// Error 423
}
/**
 * TooMany Request Exception is an Exception that occures when the client do to many request at one ressource
 */
const TooManyRequestException = ()=>{
// Error 429
}

const LegalReasonException = ()=>{
// Error 453
}

/**
 * 5xx Error Section
 */
