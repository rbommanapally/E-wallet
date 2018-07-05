import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule,NavController, NavParams } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { EWallet } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AuthenticateProvider } from '../providers/authenticate';
import { HttpModule } from '@angular/http';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { PayPage } from '../pages/pay/pay';
import { QRData } from '../models/qrData';
import { RestAPIServiceProvider } from '../providers/restapi-service';
import { TransactionModel } from '../providers/transactionModel';
import { AppConfig } from '../config/app.config';
import { IonicStorageModule } from '@ionic/storage';
 
     
@NgModule({
  declarations: [
    EWallet
  ],
  imports: [ 
    BrowserModule,
    HttpModule,
      IonicModule.forRoot(EWallet, {
      preloadModules: true,
      scrollAssist: false, autoFocusAssist: false
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    EWallet
  ],   
  providers: [
    StatusBar,
    SplashScreen,
    AuthenticateProvider,
    BarcodeScanner,
    TransactionModel,
    RestAPIServiceProvider,
    AppConfig,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})        
export class AppModule {} 
      