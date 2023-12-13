package src.Exceptions;

public class DuplicateFileException extends Exception {

    private int code;
    private String name;
    private String message;

    public DuplicateFileException(String fileName) {
        super();
        this.code = 400;
        this.name = "DuplicateFileException";
        this.message = "File:'" + fileName + "' already exist";
    }
    
    public int getCode() {
        return this.code;
    }

    public String getName() {
        return this.name;
    }

    public String getMessage() {
        return this.message;
    }
}
