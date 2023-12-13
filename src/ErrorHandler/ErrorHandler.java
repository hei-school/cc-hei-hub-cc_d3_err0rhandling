package src.ErrorHandler;

import src.Exceptions.BadFileTypeException;
import src.Exceptions.CorruptedFileException;
import src.Exceptions.DuplicateFileException;
import src.Exceptions.FileNameInvalidException;
import src.Exceptions.FileNotFoundException;
import src.Exceptions.FileTooLargeException;
import src.Exceptions.LegalReasonException;
import src.Exceptions.LockException;
import src.Exceptions.NotAuthorizedException;
import src.Exceptions.NotImplementedException;
import src.Exceptions.SensitiveFileException;
import src.Exceptions.ServerErrorException;

public class ErrorHandler {
    public String BadFileTypeHandler(String fileExtention) {
        try {
            throw new BadFileTypeException(fileExtention);
        } catch (BadFileTypeException e) {
            return e.getMessage();
        }
    }
    
    public String CorruptedFileHandler(String fileName) {
        try {
            throw new CorruptedFileException(fileName);
        } catch (CorruptedFileException e) {
            return e.getMessage();
        }
    }

    public String DuplicateFileHandler(String fileName) {
        try {
            throw new DuplicateFileException(fileName);
        } catch (DuplicateFileException e) {
            return e.getMessage();
        }
    }
    
    public String FileNameInvalidHandler(String fileName, String pattern) {
        try {
            throw new FileNameInvalidException(fileName, pattern);
        } catch (FileNameInvalidException e) {
            return e.getMessage();
        }
    }
    
    public String FileNotFoundHandler(String fileName) {
        try {
            throw new FileNotFoundException(fileName);
        } catch (FileNotFoundException e) {
            return e.getMessage();
        }
    }
    
    public String FileTooLargeHandler(int fileSize) {
        try {
            throw new FileTooLargeException(fileSize);
        } catch (FileTooLargeException e) {
            return e.getMessage();
        }
    }
    
    public String LegalReasonHandler() {
        try {
            throw new LegalReasonException();
        } catch (LegalReasonException e) {
            return e.getMessage();
        }
    }
    
    public String LockHandler() {
        try {
            throw new LockException();
        } catch (LockException e) {
            return e.getMessage();
        }
    }
    
    public String NotAuthorizedHandler(String fileName) {
        try {
            throw new NotAuthorizedException(fileName);
        } catch (NotAuthorizedException e) {
            return e.getMessage();
        }
    }
    
    public String NotImplementedHandler(String functionality) {
        try {
            throw new NotImplementedException(functionality);
        } catch (NotImplementedException e) {
            return e.getMessage();
        }
    }
    
    public String SensitiveFileHandler(String fileName) {
        try {
            throw new SensitiveFileException(fileName);
        } catch (SensitiveFileException e) {
            return e.getMessage();
        }
    }

    public String ServerErrorHandler(String fileName) {
        try {
            throw new ServerErrorException(fileName);
        } catch (ServerErrorException e) {
            return e.getMessage();
        }
    }
}
