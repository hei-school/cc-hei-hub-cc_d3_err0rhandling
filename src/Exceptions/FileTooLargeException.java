package src.Exceptions;

public class FileTooLargeException extends Exception {

    private int code;
    private String name;
    private String message;

    public FileTooLargeException(int fileSize) {
        super();
        this.code = 413;
        this.name = "FileTooLargeException";
        this.message = "you are trying to upload a file that is too large: " + fileSize + "Mo";
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
