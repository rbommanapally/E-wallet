import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { QRData } from '../../models/qrData';
import { TransactionModel } from '../../providers/transactionModel';
import { RestAPIServiceProvider } from '../../providers/restapi-service';
import { AppConfig } from '../../config/app.config';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-receive',
  templateUrl: 'receive.html',
})
export class ReceivePage {

  amount: number;
  refreshIntervalId:number;
  public isPaymentReceived:boolean;
  qrCodeCreated:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private userData: TransactionModel, private alertCtrl: AlertController,
    public restApiService: RestAPIServiceProvider, private loadingCtrl: LoadingController, private storage: Storage) {
    let self = this;
    
  }
  ionViewDidLeave(){
    console.log("calling leave");
    clearInterval(this.refreshIntervalId);
  }

  generateQRCode() {
    let self = this;
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });

    let alert = this.alertCtrl.create({
      title: 'Payment Failed',
      subTitle: 'Payment Failed, please try again',
      buttons: [
        {
          text: 'Ok',
          role: 'Ok',
          handler: () => {
            //console.log('Cancel clicked');
            clearInterval(self.refreshIntervalId);
            self.redirectToHome()
          }
        }
      ]
    });

    let count: number = 0;
    let status:string;
    // get the json string from the userdata with the qrcode details
    console.log(this.userData.getQRData());
    self.userData.createdCode = this.userData.getQRData();
    self.qrCodeCreated = true;
    console.log("Json format of qrdata===" + self.userData.createdCode);
    self.refreshIntervalId = setInterval(() => {
      count = count + 1;
      console.log("count --" + count);
      self.validatePayment().then(result => {
        let bcData = JSON.parse(result._body);
        console.log("Response after payment validation--::" + bcData.data);
        if (bcData.data!=null && bcData.data.requestStatus == 'COMPLETED') {
          status = bcData.data.requestStatus;
          console.log("--Amount Received--");
          self.isPaymentReceived=true;
          loader.dismiss();
          self.restApiService.updateBalance();
          clearInterval(self.refreshIntervalId);
          return;
        }
      });
      console.log("stats--"+status);
      if (count > 8 && status!='undefined') {
        alert.present();
        clearInterval(self.refreshIntervalId);
        return;
      }
    }, 5000);
  }
  redirectToHome() {
    this.restApiService.updateBalance();
    this.navCtrl.setRoot(HomePage);
  }

  validatePayment(): Promise<any> {
    let self = this;

    console.log("Receiver name---" + self.userData.receiverUserName);
    console.log("uniqueTransactionId---" + self.userData.transactionId);

    let vaidateJsonMsg = { "uniqueTransactionId": self.userData.transactionId };
    return new Promise(
      (resolve, reject) => {
        self.restApiService.makeBackendPostRequest(AppConfig.VALIDATE_TRANSACTION, null, JSON.stringify(vaidateJsonMsg)).then((result) => {
          console.log("after validating transaction");
          let bcData = JSON.parse(result._body);
          if(bcData.data!=null){
            self.userData.senderUserName =bcData.data.fromAddress;
          }
          resolve(result);
        }).catch(error => {
          console.log("error : " + JSON.stringify(error));
        });

      });



  }

}
