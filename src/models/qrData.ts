
export class QRData {

    public receiverUserName: string;
    public receiverAmount: number;
    public receiverWalletAddress: string;
    public receiverUserId:string;


    getScannedDetails() {


    }
    constructor() { }

    // toJSON is automatically used by JSON.stringify
    toJSON(): QRData {
        // console.log("Id----"+this.userName+"===="+this.amount);
        // copy all fields from `this` to an empty object and return in
        return Object.assign({}, this)//, {
        // convert fields that need converting
        //   transactionDate: this.transactionDate.toLocaleString()
        // });
    }

    // fromJSON is used to convert an serialized version
    // of the QRData to an instance of the class
    static fromJSON(json: QRData | string): QRData {
        /* if (typeof json === 'string') {
             console.log("inside string");
             // if it's a string, parse it first
             return JSON.parse(json)//, QRData.reviver);
         } else {*/
        console.log("inside else");
        // create an instance of the QRData class
        let qrData = Object.setPrototypeOf(json, QRData.prototype);
        /* copy all the fields from the json object
        return Object.assign(qrData, json);/*, {
            // convert fields that need converting
            transactionDate: new Date(json.transactionDate),
        });
        */
        return qrData;

    }


    // reviver can be passed as the second parameter to JSON.parse
    // to automatically call QRData.fromJSON on the resulting value.
    static reviver(key: string, value: any): any {
        return key === "" ? QRData.fromJSON(value) : value;
    }

}


