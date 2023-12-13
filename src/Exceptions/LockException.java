package src.Exceptions;

public class LockException extends Exception {

    private int code;
    private String name;
    private String message;

    public LockException() {
        super();
        this.code = 423;
        this.name = "LockException";
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
