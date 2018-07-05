import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TransactionModel } from '../../providers/transactionModel';
import { RestAPIServiceProvider } from '../../providers/restapi-service';
import { AppConfig } from '../../config/app.config';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  isRegistered:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userData: TransactionModel,
    public restApiService: RestAPIServiceProvider, private loadingCtrl: LoadingController, private storage: Storage) {
    let self = this;
  }

  Register() {
    let self = this;
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    // prepare the json for the user to register in the local DB
    let registerJsonMsg = {
      "userId": self.userData.loggedInUser,
      "userName": self.userData.loggedInUserName, "requestStatus": "Registered", "activeFlag": "Y",
      "remarks": "Regisetered", "createdDateTime": "", "modifiedDateTime": ""
    };

    loader.present();
    // if user is not registered, register the user in the block chain
    this.restApiService.makeBackendPostRequest(AppConfig.REGISTER_USER_DATA_URL, null,
      JSON.stringify(registerJsonMsg)).then((result) => {
        let bcData = JSON.parse(result._body);
        // assign the block chain user unique address to logged in user
        if (bcData.data!=null&& bcData.data.walletAddress != null) {
          console.log("wallet address::" + bcData.data);
          this.userData.loggedInUserWalletAddress = bcData.data.walletAddress;
          this.isRegistered = true;
          loader.dismiss();
        } else {
          loader.dismiss();
          console.log("block chain reuslt--" + bcData);
        }

      }).catch(error => {
        console.log("error : " + JSON.stringify(error));
      });
  }

  redirectToHome() {
    this.navCtrl.setRoot('HomePage');

  }
}
