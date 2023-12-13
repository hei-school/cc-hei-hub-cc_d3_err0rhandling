import { BadFileTypeExceptionHandler, DuplicatedFileExceptionHandler } from "../src/errorHandler/JSErrorHandler.js"
import { it, describe } from "mocha"
import { assert } from "chai";

describe("Test for error handling",()=>{
    it("should throw BadFileTypeException Error",()=>{
        assert.equal(BadFileTypeExceptionHandler(".js"),"File type .js is not allowed")
    })
    it("should throw DuplicatedFileException Error",()=>{
        assert.equal(DuplicatedFileExceptionHandler("foo"),"File:'foo' already exist")
    })
})