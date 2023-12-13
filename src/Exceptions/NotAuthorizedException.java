package src.Exceptions;

public class NotAuthorizedException extends Exception {

    private int code;
    private String name;
    private String message;

    public NotAuthorizedException(String fileName) {
        super();
        this.code = 401;
        this.name = "NotAuthorizedException";
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
