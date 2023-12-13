package src.Exceptions;

public class SensitiveFileException extends Exception {

    private int code;
    private String name;
    private String message;

    public SensitiveFileException(String fileName) {
        super();
        this.code = 400;
        this.name = "SensitiveFileException";
        this.message = "";
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
