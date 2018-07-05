import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Events } from 'ionic-angular';
import { Platform } from 'ionic-angular/platform/platform';
import { TransactionModel } from './transactionModel';
import { AppConfig } from '../config/app.config';


@Injectable()
export class RestAPIServiceProvider {

  constructor(public http: Http, private events: Events, private platform: Platform, public userData: TransactionModel) {
    // console.log('ApiConnectorServiceProvider Provider');
  }


  public makeBackendPostRequest(url: string, accessToken: string, message: string): Promise<any> {
    let self = this;
    return new Promise(
      (resolve, reject) => {

        let headers = new Headers();
        headers.append("content-type", "application/json");
        if (accessToken) {
          //headers.append("Authorization", "Basic " + accessToken);

          headers.append("accept", "application/json");
          headers.append("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
          headers.append("Access-Control-Allow-Origin", "*");
          headers.append("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Authorization, Origin, Accept");
        }
        let options = new RequestOptions({ headers: headers });
        console.log("headers obj  : " + JSON.stringify(headers));
        console.log("URL for token generation : " + url);
        console.log("Message from client :: " + JSON.stringify(message));

        self.http.post(url, JSON.parse(message), options).subscribe((response: any) => {
          //console.log("resopnse : " + JSON.stringify(response));
          resolve(response);
          //console.log(response.status);
          console.log(response._body); // data received by server
        }, error => {
          console.log(error.status);
          console.log(error.error); // error message as string
          console.log(error.headers);
        }); //end of POST promise.
        //});//end of gethttp promise
        //}) //end of createAPIRequest promise.        
      });
  }

  public getBalance(): Promise<string> {
    //  console.log("regenerateAccessToken : " + refreshToken);
    let self = this;
    return new Promise((resolve, reject) => {

      console.log("Getting balance for user::" + self.userData.loggedInUserName + " with wallet id --" + self.userData.loggedInUserWalletAddress
      );
      let requestObj = {
        "walletAddress": this.userData.loggedInUserWalletAddress
      }

      //console.log("regenerateAccessToken : " + JSON.stringify(requestObj));
      self.makeBackendPostRequest(AppConfig.GETNEWADDRESS_BC, null, JSON.stringify(requestObj)).then(response => {
        console.log("Response after user registartion :: " + JSON.stringify(response));
        resolve(response);
        let info = JSON.parse(response._body);
        if (info.data != null) {
          this.userData.balance = info.data.walletBalance;
          this.userData.displayBalance = parseFloat(this.userData.balance.toString()).toFixed(2);
        }
      }).catch(error => {
        reject(error);
      });
    });
  }

  updateBalance() {
    let self = this;
    self.getBalance().then(result => {
      console.log("Balance Updates---::");
    });
  }

  
} 