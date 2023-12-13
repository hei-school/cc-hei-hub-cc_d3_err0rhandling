package src.Exceptions;

public class ServerErrorException extends Exception {

    private int code;
    private String name;
    private String message;

    public ServerErrorException(String fileName) {
        super();
        this.code = 500;
        this.name = "ServerErrorException";
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
