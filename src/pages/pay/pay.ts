import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav, NavController, AlertController, LoadingOptions, LoadingController } from 'ionic-angular';
import { QRData } from '../../models/qrData';
import { Cordova } from '@ionic-native/core';
import { TransactionModel } from '../../providers/transactionModel';
import { RestAPIServiceProvider } from '../../providers/restapi-service';
import { AppConfig } from '../../config/app.config';
import { Storage } from '@ionic/storage';


/**
 * Generated classs for the PayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pay',
  templateUrl: 'pay.html',
})
export class PayPage {

  self = this;
  //scannedCode =null;
  isPaymentDone: boolean;

  constructor(private userData: TransactionModel, public navCtrl: NavController,
    public atrCtrl: AlertController, public restApiService: RestAPIServiceProvider,
    private loadingCtrl: LoadingController, private storage: Storage) {
  }

  showConfirmAlert() {
    let self = this;
    let alertConfirm = self.atrCtrl.create({
      title: 'Confirm Payment',
      message: 'Please confirm the payment',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            self.isPaymentDone = false;
            console.log('No clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            self.transferAmount();
            console.log('Yes clicked');
          }
        }
      ]
    });
    alertConfirm.present();
  }

  redirectToHome() {
    let self = this;
    self.restApiService.updateBalance();
    self.navCtrl.setRoot('HomePage');
  }

  transferAmount(): Promise<any> {
    let self = this;
    let transferJsonMsg = {
      "userId": self.userData.loggedInUser, "receiverUserName": this.userData.receiverUserId,
      "userName": this.userData.loggedInUser, "walletAddress": this.userData.loggedInUserWalletAddress,
      "receiverWalletAddress": self.userData.receiverWalletAddress,
      "transactionType": "PAY", "uniqueTransactionId": this.userData.transactionId,
      "amountToTransfer": this.userData.amount
    };
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loader.present();

    return new Promise((resolve, reject) => {

      if (this.userData.displayBalance < this.userData.amount) {
        reject("Amount entered is less than available balance");
      }
      self.restApiService.makeBackendPostRequest(AppConfig.TRANSFERAMOUNT, null, JSON.stringify(transferJsonMsg)).then((result) => {
        let bcData = JSON.parse(result._body);
        console.log("Response after Transfer PAY--::" + bcData.data);
        // assign the block chain user unique address to logged in user
        if (bcData.data.transactionUniqueID != null) {
          self.isPaymentDone = true;
          self.userData.senderUserName = bcData.data.fromAddress;
          self.userData.transactionDate = bcData.data.createdDateTime;
          loader.dismiss();
        } else {
          console.log("block chain reuslt--" + bcData);
        }
      }).catch(error => {
        console.log("error : " + JSON.stringify(error));
      });

    });
  }
}