package src.Exceptions;

public class LegalReasonException extends Exception {

    private int code;
    private String name;
    private String message;

    public LegalReasonException() {
        super();
        this.code = 453;
        this.name = "LegalReasonException";
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
