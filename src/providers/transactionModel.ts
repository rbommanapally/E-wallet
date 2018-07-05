
import { Injectable } from "@angular/core";
import { Storage } from '@ionic/storage';
import { QRData } from "../models/qrData";
import { NavController } from "ionic-angular";

@Injectable()
export class TransactionModel {

  generatedQRdata: string;
  createdCode: any;
  public scannedCode: QRData = new QRData();
  password: string;
  loggedInUser: string;
  loggedInUserName: string;
  email: string;
  mobileNumber: number;
  transactionDate: string;
  transactionId: number;
  amount: any;
  balance: number = 0;
  userAddress: string;
  errorMsg: string;
  remarks:string;
  loggedInUserWalletAddress: string;
  displayBalance: string= "0.00";
  receiverUserId:string;
  receiverWalletAddress: string;
  receiverUserName: string;
  senderUserName:string;
  transactionType: string;
  qrCodeCreated: boolean = false;
  isqrCodeScanned: boolean = false;
  qrScannedVal:string;



  constructor(private storage:Storage) {
  }
 
  getQRData() {
    let self = this;
    let d = new Date();
    let todayDate=d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
    self.transactionId = new Date().getTime();
    let data = {
      "userName": this.loggedInUserName, "userAddress": this.loggedInUserWalletAddress, "receiverUserId": this.loggedInUser,
      "amount": this.amount, "transactionDate": todayDate, "transactionId": self.transactionId
    };
    this.generatedQRdata = JSON.stringify(data);
    return this.generatedQRdata;
  }
 
  public delete(key: string) {
    let self = this;
    return new Promise((resolve) => {
      self.storage.remove(key).then(() => {
        resolve("Success");
      })
    });
  }


  resetValues(){
    this.amount='';
  }
} 