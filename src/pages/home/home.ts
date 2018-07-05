import { Component } from '@angular/core';
import { NavController, IonicPage, AlertController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { PayPage } from '../pay/pay';
import { QRData } from '../../models/qrData';
import { plainToClass } from "class-transformer";
import { TransactionModel } from '../../providers/transactionModel';
import { RestAPIServiceProvider } from '../../providers/restapi-service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController, public barcodeScanner: BarcodeScanner,
    public userData: TransactionModel, public restAptService: RestAPIServiceProvider,
    private alertCtrl: AlertController) {
    let self = this;
    if (self.userData.balance == null) {
      self.userData.balance = 0.00;
    }
  }

  receive() {
    this.userData.qrCodeCreated = false;
    this.navCtrl.push('ReceivePage');
  }

  scanCode() {
    let self = this;

    //  let qrData:QRData;
    this.barcodeScanner.scan().then(barcodeData => {
      let scannedData = JSON.parse(barcodeData.text);

      console.log("Receiver amont---" + scannedData.amount);
      console.log("Receiver date---" + scannedData.transactionDate);
      console.log("Receiver id---" + scannedData.transactionId);
      console.log("Receiver name---" + scannedData.userName);
      console.log("Receiver wallet--" + scannedData.userAddress);
      this.userData.amount = parseFloat(scannedData.amount.toString()).toFixed(2);
      this.userData.transactionDate = scannedData.transactionDate;
      this.userData.receiverWalletAddress = scannedData.userAddress;
      this.userData.receiverUserName = scannedData.userName;
      this.userData.transactionId = scannedData.transactionId;
      this.userData.receiverUserId = scannedData.receiverUserId;
      this.navCtrl.push('PayPage');
    }, (err) => {
      console.log('Error: ', err);
    });
  }

  deposit() {
    this.navCtrl.push('DepositPage');
  }

  withdraw() {
    let self = this;
    this.navCtrl.push('WithdrawPage');
  }

  logout() {
    this.navCtrl.push('LoginPage');
  }
  redirectToHome() {
    this.navCtrl.setRoot('HomePage');
  }
}
