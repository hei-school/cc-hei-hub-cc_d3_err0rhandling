import { BadFileTypeExceptionHandler, DuplicatedFileExceptionHandler, NotImplementedExceptionHandler, SensitiveFileExceptionHandler, ServerErrorExceptionHandler, SeverDownExceptionHandler, StockageInsufisantCloudExceptionHandler, TooManyRequestExceptionHandler, UnauthorizedExceptionHandler } from "../src/errorHandler/JSErrorHandler.js"
import { it, describe } from "mocha"
import { assert } from "chai";

describe("Test for error handling",()=>{
    it("should throw BadFileTypeException Error and we should receive the exception message",()=>{
        assert.equal(BadFileTypeExceptionHandler(".js"),"File type .js is not allowed")
    })
    it("should throw DuplicatedFileException Error and we should receive the exception message",()=>{
        assert.equal(DuplicatedFileExceptionHandler("foo"),"File:'foo' already exist")
    })
    it("should throw TooManyRequestException and we should receive the exception message",()=>{
        assert.equal(TooManyRequestExceptionHandler("too many request executed"),"too many request executed")
    })
    it("should throw StockageInsufisantInCloudException and we should receive the exception message",()=>{
        assert.equal(StockageInsufisantCloudExceptionHandler(1000),"you are trying to upload a file with \"1000 Mo\" of size but the cloud storage is at his limit")
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
})