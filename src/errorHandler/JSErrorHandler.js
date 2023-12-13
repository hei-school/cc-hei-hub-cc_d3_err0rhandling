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

import { BadFileTypeException, DuplicateFileException, FileNameInvalidException, FileNotFoundException } from "../exceptions/index.js";
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
const UnauthorizedException = ()=>{
// Error 401
}
const FileNotFound = ()=>{
// ??
}
const TimeOutException = ()=>{
// Error 408    
}
const FileTooLargeException = ()=>{
// Error 413
}
const LockException = ()=>{
// Error 423
}
const TooManyRequestException = ()=>{
// Error 429
}

const LegalReasonException = ()=>{
// Error 453
}

/**
 * 5xx Error Section
 */
