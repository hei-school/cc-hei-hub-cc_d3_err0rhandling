export class StockageInsufisantInCloudException extends Error{
    constructor(fileSize){
        super()
        this.code = 507
        this.name = "StockageInsufisantCloudException";
        this.message = "you are trying to upload a file with \""+fileSize+" Mo\" of size but the cloud storage is at his limit";
    }
}