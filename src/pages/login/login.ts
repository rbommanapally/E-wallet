import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AuthenticateProvider } from '../../providers/authenticate';
import { TransactionModel } from '../../providers/transactionModel';
import { AppConfig } from '../../config/app.config';
import { RestAPIServiceProvider } from '../../providers/restapi-service';
import { Http, Headers, RequestOptions, HttpModule } from '@angular/http';
import { RegisterPage } from '../register/register';



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public user: any = {};

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private authenticateProvider: AuthenticateProvider,
    private userData: TransactionModel,
    private restApiService: RestAPIServiceProvider,
    private http: Http,
    private loadingCtrl: LoadingController
  ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }



  public login() {
    let self = this;
    let message = { "userId": self.userData.loggedInUser };

    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loader.present();
    // check the login using ldap and throw error if not present in ldap
    // check if the user is null
    // if null the
    // if ldap user is present then check the user in database
    this.restApiService.makeBackendPostRequest(AppConfig.GET_USER_DATA_URL, null, JSON.stringify(message)).then((result) => {
      let info = JSON.parse(result._body);
      console.log("after getting user --" + info.data);
      //check if the user exists
      // if present in database then get the balance and show home page
      if (info.data != null && info.data.walletAddress != "") {
        this.userData.loggedInUserName = info.data.userName;
        if (info.data.walletBalance != null) {
          this.userData.balance = info.data.walletBalance;
          this.userData.displayBalance = parseFloat(this.userData.balance.toString()).toFixed(2);
        }
        this.userData.loggedInUserWalletAddress = info.data.walletAddress;
        loader.dismiss();
        this.navCtrl.setRoot(HomePage);
      } else {
        loader.dismiss();
        // if the user is not present in database   then redirect him to wallet registration page
        this.navCtrl.push(RegisterPage);
      }
    }).catch(error => {
      loader.dismiss();
      console.log("error : " + JSON.stringify(error));
    });



    //if (self.user.userName && self.user.password) {
    //  //Replace this with the actual name of the user from ldap
    //this.userData.loggedInUser = self.user.userName;
    //this.userData.password = self.user.password;
    //this.authenticateProvider.authenticateUsingCredentials(self.user.userName, self.user.password)
    // .subscribe(() => {
    //  this.navCtrl.setRoot(HomePage);
    //});
    // }
  }
}
