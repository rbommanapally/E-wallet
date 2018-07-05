import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TransactionModel } from '../../providers/transactionModel';
import { RestAPIServiceProvider } from '../../providers/restapi-service';
import { AppConfig } from '../../config/app.config';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the DepositPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-deposit',
  templateUrl: 'deposit.html',
})
export class DepositPage {
  errorLoading: boolean = true;
  public amountLoaded:boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public userData: TransactionModel,
    public restApiService: RestAPIServiceProvider, private loadingCtrl: LoadingController,private storage:Storage) {
  }

  loadAmount() {
    let self = this;
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    

    // prepare the json for the user to register in the local DB
    let transferJsonMsg = {
      "userId": self.userData.loggedInUser, "receiverUserName": this.userData.loggedInUserName,
      "userName": "", "receiverWalletAddress": self.userData.loggedInUserWalletAddress,
      "transactionType": "LOAD", "uniqueTransactionId": new Date().getTime(), "amountToTransfer": this.userData.amount
    };

    loader.present();
    // if user is not registered, register the user in the block chain
    this.restApiService.makeBackendPostRequest(AppConfig.TRANSFERAMOUNT, null,
      JSON.stringify(transferJsonMsg)).then((result) => {
        console.log("after resgistering in block chain user");
        let bcData = JSON.parse(result._body);
        console.log("Response after register--::" + bcData.data.transactionUniqueID);
        // assign the block chain user unique address to logged in user
        if (bcData.data.transactionUniqueID != null) {
          self.amountLoaded = true;
          loader.dismiss();
        } else {
          console.log("block chain reuslt--" + bcData);
        }

      }).catch(error => {
        console.log("error : " + JSON.stringify(error));
      });
  }

  redirectToHome() {
    let self = this;
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loader.present();
    self.restApiService.updateBalance();
    loader.dismiss();
    self.navCtrl.setRoot('HomePage');

  }
}
