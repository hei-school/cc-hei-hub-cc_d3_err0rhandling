import { BadFileTypeExceptionHandler, CorruptedFileExceptionHandler, DuplicatedFileExceptionHandler, FileNameExceptionHanlder, FileNotFoundHandler, FileTooLargeExceptionHandler, LegalReasonExceptionHandler, LockExceptionHandler, NotImplementedExceptionHandler, SensitiveFileExceptionHandler, ServerErrorExceptionHandler, SeverDownExceptionHandler, StockageInsufisantCloudExceptionHandler, TooManyRequestExceptionHandler, UnauthorizedExceptionHandler } from "../src/errorHandler/JSErrorHandler.js"
import { it, describe } from "mocha"
import { assert } from "chai";

describe("Test for error handling",()=>{
    it("should throw BadFileTypeException Error and we should receive the exception message",()=>{
        assert.equal(BadFileTypeExceptionHandler(".js"),"File type .js is not allowed, code:400")
    })
    it("should throw DuplicatedFileException Error and we should receive the exception message",()=>{
        assert.equal(DuplicatedFileExceptionHandler("foo"),"File:'foo' already exist, code:400")
    })
    it("should throw TooManyRequestException and we should receive the exception message",()=>{
        assert.equal(TooManyRequestExceptionHandler("too many request executed"),"too many request executed, code:429")
    })
    it("should throw StockageInsufisantInCloudException and we should receive the exception message",()=>{
        assert.equal(StockageInsufisantCloudExceptionHandler(1000),"you are trying to upload a file with \"1000 Mo\" of size but the cloud storage is at his limit, code:507")
    })
    it("should throw ServerErrorException and we should receive the exception message",()=>{
        assert.equal(ServerErrorExceptionHandler("unexpected error happened"),"unexpected error happened, code:500")
    })
    it("should throw ServerDownException and we should receive the exception message",()=>{
        assert.equal(SeverDownExceptionHandler("server is down at the moment"),"server is down at the moment, code:503")
    })
    it("should throw SensitiveFileException and we should receive the exception message",()=>{
        assert.equal(SensitiveFileExceptionHandler("sensitive data"),"sensitive data, code:400")
    })
    it("should throw NotImplementedException and we should receive the exception message",()=>{
        assert.equal(NotImplementedExceptionHandler("/getData"),"the functionnality /getData is not yet implemented, code:501")
    })
    it("should throw NotAuthorizedException and we should receive the exception message",()=>{
        assert.equal(UnauthorizedExceptionHandler("unauthorized"),"unauthorized, code:401")
    })
    it("should throw LockException and we should receive the exception message",()=>{
        assert.equal(LockExceptionHandler("lock event tsy aiko"),"lock event tsy aiko, code:423")
    })
    it("should throw LegalReasonException and we should receive the exception message",()=>{
        assert.equal(LegalReasonExceptionHandler("legal reason tsy aiko"),"legal reason tsy aiko, code:453")
    })
    it("should throw FileTooLargeException and we should receive the exception message",()=>{
        assert.equal(FileTooLargeExceptionHandler(100000),"you are trying to upload a file that is too large: 100000Mo, code:413")
    })
    it("should throw FileNotFoundException and we should receive the exception message",()=>{
        assert.equal(FileNotFoundHandler("trueBerry"),"File trueBerry is not found, code:404")
    })
    it("should throw FileNameInvalidException and we should receive the exception message",()=>{
        assert.equal(FileNameExceptionHanlder("ghsi*:=>{}","/[a-z]/g"), "file named ghsi*:=>{} is invalid, make it match this pattern: /[a-z]/g, code:400")
    })
    it("should throw CorruptedFileException and we should receive the exception message",()=>{
        assert.equal(CorruptedFileExceptionHandler("fooName"),"File : fooName is corrupted, code:500")
    })
})