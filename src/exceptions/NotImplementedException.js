export class NotImplementedException extends Error{
    constructor(fonctionnality){
        super()
        this.code = 501
        this.name = "NotImplementedException";
        this.message = "the functionnality " + fonctionnality + " is not yet implemented"
    }
}