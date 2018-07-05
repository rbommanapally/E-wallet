import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WithdrawPageModule } from './withdraw.module';
import { HomePage } from '../home/home';
import { RestAPIServiceProvider } from '../../providers/restapi-service';
import { TransactionModel } from '../../providers/transactionModel';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the WithdrawPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-withdraw',
  templateUrl: 'withdraw.html',
})
export class WithdrawPage {

  moneyWithdraw:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userData: TransactionModel,
    public restApiService: RestAPIServiceProvider,private storage:Storage) {
      let self=this;
   
  }

  withDraw() {
    let self = this;
    self.moneyWithdraw = true;
  }

  redirectToHome() {
    let self = this;
    self.restApiService.updateBalance();
    this.navCtrl.setRoot(HomePage);
  }

}
