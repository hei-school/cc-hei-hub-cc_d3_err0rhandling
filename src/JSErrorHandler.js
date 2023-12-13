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

/**
 * 4xx Error Section
 */

BadFileTypeException = ()=>{
    try{

    }catch{
console.log("Error 400: Check your file type");
    }
}

DuplicatedFileException = ()=>{
    try{

    }catch{
console.log("Error 400: File already exist");
    }
}

FileNameException = ()=>{
    try{

    }catch{
console.log("Error 400: File name is invalid");
    }
}
SensitiveFileException = ()=>{
// Error 400
}
UnauthorizedException = ()=>{
// Error 401
}
FileNotFound = ()=>{
// ??
}
TimeOutException = ()=>{
// Error 408    
}
FileTooLargeException = ()=>{
// Error 413
}
LockException = ()=>{
// Error 423
}
TooManyRequestException = ()=>{
// Error 429
}

LegalReasonException = ()=>{
// Error 453
}

/**
 * 5xx Error Section
 */
