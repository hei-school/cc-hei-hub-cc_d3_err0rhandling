package src.Exceptions;

public class FileNameInvalidException extends Exception {

    private int code;
    private String name;
    private String message;

    public FileNameInvalidException(String fileName, String pattern) {
        super();
        this.code = 400;
        this.name = "FileNameInvalidException";
        this.message = "fileName " + fileName + "is invalid, make it matrch this pattern:\n " + pattern;
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
