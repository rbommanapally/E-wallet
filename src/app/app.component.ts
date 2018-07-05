import { Component } from '@angular/core';
import { Platform, Events, MenuController, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { PayPage } from '../pages/pay/pay';
import { ReceivePage } from '../pages/receive/receive';
import { WithdrawPage } from '../pages/withdraw/withdraw';
import { UserData } from '../providers/user-data';


@Component({
  templateUrl: 'app.html'
})
export class EWallet {
  rootPage: String = 'LoginPage';

  // List of pages that can be navigated to from the left menu
  // the left menu only works after login
  // the login page disables the left menu


  constructor(
    public events: Events,
    public menu: MenuController,
    public platform: Platform,
    public splashScreen: SplashScreen,
    public statusBar: StatusBar,
  ) {
    let self = this;
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    // load the conference data
    // confData.load();

    // decide which menu items should be hidden by current login status stored in local storage
    // this.userData.hasLoggedIn().then((hasLoggedIn) => {
    // this.enableMenu(hasLoggedIn === true);
    //});
    //this.enableMenu(true);

    //this.listenToLoginEvents();
  }



}

