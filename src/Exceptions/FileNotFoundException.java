package src.Exceptions;

public class FileNotFoundException extends Exception {

    private int code;
    private String name;
    private String message;

    public FileNotFoundException(String fileName) {
        super();
        this.code = 404;
        this.name = "FileNotFoundException";
        this.message = "File " + fileName + "is not found";
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
