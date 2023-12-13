package src.Exceptions;

public class NotImplementedException extends Exception {

    private int code;
    private String name;
    private String message;

    public NotImplementedException(String functionality) {
        super();
        this.code = 501;
        this.name = "NotImplementedException";
        this.message = "the functionnality " + functionality + " is not yet implemented";
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
