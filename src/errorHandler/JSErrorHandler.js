/**
 *
 *  
StocakgeInsufisantCloud 507
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

import { BadFileTypeException, CorruptedFileException, DuplicateFileException, FileNameInvalidException, FileNotFoundException, FileTooLargeException, LegalReasonException, LockException, NotAuthorizedException, NotImplementedException, RequestTimeOutException, SensitiveFileException, ServerErrorException, StockageInsufisantInCloudException, TooManyRequestException } from "../exceptions/index.js";
import { logger } from "../../utils/index.js";
import { ServerDownException } from "../exceptions/ServerDownException.js";
/**
 * 4xx Error Section
 */

export const BadFileTypeExceptionHandler = (fileExtention)=>{
    try{
        throw new BadFileTypeException(fileExtention)
    }catch(badFileTypeException){
        logger.error(badFileTypeException)
        return badFileTypeException.message + ", code:" + badFileTypeException.code
    }
}

export const DuplicatedFileExceptionHandler = (fileName)=>{
    try{
        throw new DuplicateFileException(fileName)
    }catch(duplicateFileException){
        logger.error(duplicateFileException)
        return duplicateFileException.message + ", code:" + duplicateFileException.code;
    }
}

export const FileNameExceptionHanlder = (fileName)=>{
    try{
        throw new FileNameInvalidException(fileName)
    }catch(fileNameInvalidException){
        logger.error(fileNameInvalidException)
        return fileNameInvalidException.message + ", code:" + fileNameInvalidException.code;
    }
}
export const SensitiveFileExceptionHandler = (message)=>{
    try{
        throw new SensitiveFileException(message)
    }catch(sensitiveFileException){
        logger.error(sensitiveFileException)
        return sensitiveFileException.message + ", code:" + sensitiveFileException.code
    }
// Error 400
}
export const UnauthorizedExceptionHandler = (message)=>{
    try{
        throw new NotAuthorizedException(message);
    }catch(notAuthorizedException){
        logger.error(notAuthorizedException)
        return notAuthorizedException.message + ", code:" + notAuthorizedException.code
    }
}
export const FileNotFoundHandler = (fileName)=>{
    try{
        throw new FileNotFoundException(fileName)
    }catch(fileNotFoundException){
        logger.error(fileNotFoundException)
        return fileNotFoundException.message + ", code:" + fileNotFoundException.code;
    }
}
/**
 * Time out exception occur when the server doesn't respond after a certain amout of time
 */

export const TimeOutExceptionHandler = ()=>{
    try{
        fetch("http://1.2.3.4",{}).catch(()=>{
            throw new RequestTimeOutException();
        });
    }catch(timeOutException){
        logger.error(timeOutException)
        return timeOutException.message + ", code:" + timeOutException.code
    }
// Error 408    
}
export const FileTooLargeExceptionHandler = (fileSize)=>{
    try{
        throw new FileTooLargeException(fileSize)
    }catch(fileTooLargeException){
        logger.error(fileTooLargeException)
        return fileTooLargeException.message + ", code:" + fileTooLargeException.code
    }
// Error 413
}
export const LockExceptionHandler = (message)=>{
    try{
        throw new LockException(message)
    }catch(lockException){
        logger.error(lockException)
        return lockException.message + ", code:" + lockException.code
    }
// Error 423
}

export const TooManyRequestExceptionHandler = (message) => {
    try{
        throw new TooManyRequestException(message)
    }catch(tooManyRequestException){
        logger.error(tooManyRequestException)
        return tooManyRequestException.message + ", code:" + tooManyRequestException.code
    }
// Error 429
}

export const LegalReasonExceptionHandler = (message)=>{
    try{
        throw new LegalReasonException(message);
    }catch(legalReasonException){
        logger.error(legalReasonException)
        return legalReasonException.message + ", code:" + legalReasonException.code
    }
// Error 453
}

/**
 * 5xx Error Section
 */
export const SeverDownExceptionHandler = (message) => {
    try{
        throw new ServerDownException(message);
    }catch(serverDownException){
        logger.error(serverDownException.message)
        return ServerDownException.message + ", code:" + serverDownException.code
    }
}

export const NotImplementedExceptionHandler = (notImplementedFonctionnality) => {
    try{
        throw new NotImplementedException(notImplementedFonctionnality);
    }catch(notImplementedException){
        logger.error(notImplementedException)
        return notImplementedException.message + ", code:" + notImplementedException.code
    }
}
export const ServerErrorExceptionHandler = (message) => {
    try{
        throw new ServerErrorException(message);
    }catch(serverErrorException){
        logger.error(serverErrorException)
        return serverErrorException.message + ", code:" + serverErrorException.code
    }
}
export const CorruptedFileExceptionHandler = (fileName) => {
    try{
        throw new CorruptedFileException(fileName)
    }catch(corruptedFileException){
        logger.error(corruptedFileException)
        return corruptedFileException.message + ", code:" + corruptedFileException.code
    }
}
export const StockageInsufisantCloudExceptionHandler = (fileSize) => {
    try{
        throw new StockageInsufisantInCloudException(fileSize);
    }catch(stockageInsufisantInCloudException){
        logger.error(stockageInsufisantInCloudException)
        return stockageInsufisantInCloudException.message + ", code:" + stockageInsufisantInCloudException.code;
    }
}