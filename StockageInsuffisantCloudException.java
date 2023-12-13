public class StockageInsuffisantCloudException extends Exception {

    private int code;
    private String name;
    private String message;

    public StockageInsuffisantCloudException(int fileSize) {
        super();
        this.code = 507;
        this.name = "StockageInsuffisantCloudException";
        this.message = "You are trying to upload a file with \"" + fileSize + " Mo\" of size but the cloud storage is at his limit";
    }
}