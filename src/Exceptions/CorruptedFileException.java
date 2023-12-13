package src.Exceptions;

public class CorruptedFileException extends Exception {

    private int code;
    private String name;
    private String message;

    public CorruptedFileException(String fileName) {
        super();
        this.code = 500;
        this.name = "CorruptedFileException";
        this.message = "File : " + fileName + " is corrupted";
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
