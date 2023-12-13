package src.Exceptions;

public class BadFileTypeException extends Exception {

    private int code;
    private String name;
    private String message;

    public BadFileTypeException(String fileType) {
        super();
        this.code = 400;
        this.name = "BadFileTypeException";
        this.message = "File type " + fileType + " is not allowed";
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
