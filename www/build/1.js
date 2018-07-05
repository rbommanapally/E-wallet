webpackJsonp([1],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(298);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_transactionModel__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_restapi_service__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, barcodeScanner, userData, restAptService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.barcodeScanner = barcodeScanner;
        this.userData = userData;
        this.restAptService = restAptService;
        this.alertCtrl = alertCtrl;
        var self = this;
        if (self.userData.balance == null) {
            self.userData.balance = 0.00;
        }
    }
    HomePage.prototype.receive = function () {
        this.userData.qrCodeCreated = false;
        this.navCtrl.push('ReceivePage');
    };
    HomePage.prototype.scanCode = function () {
        var _this = this;
        var self = this;
        //  let qrData:QRData;
        this.barcodeScanner.scan().then(function (barcodeData) {
            var scannedData = JSON.parse(barcodeData.text);
            console.log("Receiver amont---" + scannedData.amount);
            console.log("Receiver date---" + scannedData.transactionDate);
            console.log("Receiver id---" + scannedData.transactionId);
            console.log("Receiver name---" + scannedData.userName);
            console.log("Receiver wallet--" + scannedData.userAddress);
            _this.userData.amount = parseFloat(scannedData.amount.toString()).toFixed(2);
            _this.userData.transactionDate = scannedData.transactionDate;
            _this.userData.receiverWalletAddress = scannedData.userAddress;
            _this.userData.receiverUserName = scannedData.userName;
            _this.userData.transactionId = scannedData.transactionId;
            _this.userData.receiverUserId = scannedData.receiverUserId;
            _this.navCtrl.push('PayPage');
        }, function (err) {
            console.log('Error: ', err);
        });
    };
    HomePage.prototype.deposit = function () {
        this.navCtrl.push('DepositPage');
    };
    HomePage.prototype.withdraw = function () {
        var self = this;
        this.navCtrl.push('WithdrawPage');
    };
    HomePage.prototype.logout = function () {
        this.navCtrl.push('LoginPage');
    };
    HomePage.prototype.redirectToHome = function () {
        this.navCtrl.setRoot('HomePage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/ram/Ram/Workarea/Projects/E-Wallet/src/pages/home/home.html"*/'<ion-content>\n    <ion-row>\n      <ion-col>\n        <div class="header"> \n            <div class="logout">\n                    <button class="hidden-button" (click)="logout()">\n                    <img src="assets/images/logout.png"/>\n                    </button>\n            </div>\n            <ion-avatar class="avatar">\n                    <img src="assets/images/avatar.png">\n              </ion-avatar>\n            <br>    \n            <p class="username">{{userData.loggedInUserName}}</p>\n            <span>AED <b>{{userData.displayBalance}}</b><br><span>Total Balance</span></span>\n        </div>\n      </ion-col>\n    </ion-row>\n    <div class = "row responsive-sm">\n        \n        <div class = "col col-25">\n            <button class="hidden-button" (click)="deposit()">  \n                <img src="assets/images/deposit.png" />\n                <ion-label>Deposit</ion-label>\n            </button>\n        </div>\n        <div class = "col">\n            <button class="hidden-button" (click)="scanCode()">\n            <img src="assets/images/e-payment.png" />\n            <ion-label>Payment</ion-label>\n            </button>\n        </div> \n     </div>    \n     \n     <div class = "row responsive-sm">\n        <div class = "col">\n                <button class="hidden-button" (click)="receive()">\n            <img src="assets/images/receive.png" />\n            <ion-label>Receive</ion-label>\n            </button>\n        </div>\n        <div class = "col">\n                <button class="hidden-button">\n            <img src="assets/images/withdraw.png" (click)="withdraw()"/>\n            <ion-label>With Draw</ion-label> \n            </button> \n        </div>\n     </div> \n    \n</ion-content>\n '/*ion-inline-end:"/Users/ram/Ram/Workarea/Projects/E-Wallet/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_transactionModel__["a" /* TransactionModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_transactionModel__["a" /* TransactionModel */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__providers_restapi_service__["a" /* RestAPIServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_restapi_service__["a" /* RestAPIServiceProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_transactionModel__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_restapi_service__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_app_config__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, userData, restApiService, loadingCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userData = userData;
        this.restApiService = restApiService;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        var self = this;
    }
    RegisterPage.prototype.Register = function () {
        var _this = this;
        var self = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        // prepare the json for the user to register in the local DB
        var registerJsonMsg = {
            "userId": self.userData.loggedInUser,
            "userName": self.userData.loggedInUserName, "requestStatus": "Registered", "activeFlag": "Y",
            "remarks": "Regisetered", "createdDateTime": "", "modifiedDateTime": ""
        };
        loader.present();
        // if user is not registered, register the user in the block chain
        this.restApiService.makeBackendPostRequest(__WEBPACK_IMPORTED_MODULE_4__config_app_config__["a" /* AppConfig */].REGISTER_USER_DATA_URL, null, JSON.stringify(registerJsonMsg)).then(function (result) {
            var bcData = JSON.parse(result._body);
            // assign the block chain user unique address to logged in user
            if (bcData.data != null && bcData.data.walletAddress != null) {
                console.log("wallet address::" + bcData.data);
                _this.userData.loggedInUserWalletAddress = bcData.data.walletAddress;
                _this.isRegistered = true;
                loader.dismiss();
            }
            else {
                loader.dismiss();
                console.log("block chain reuslt--" + bcData);
            }
        }).catch(function (error) {
            console.log("error : " + JSON.stringify(error));
        });
    };
    RegisterPage.prototype.redirectToHome = function () {
        this.navCtrl.setRoot('HomePage');
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/ram/Ram/Workarea/Projects/E-Wallet/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Wallet Address</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div *ngIf="!isRegistered">\n    <ion-row>\n        <ion-col>\n            <ion-item>\n                <ion-label>Please create your wallet address</ion-label>             \n            </ion-item>\n            <ion-item>\n                <ion-label>Full Name</ion-label>\n              <ion-input type="text" [(ngModel)]="userData.loggedInUserName" name="userName"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label>Wallet Currency</ion-label>\n                <ion-select [(ngModel)]="number">\n                  <ion-option value="RAK-AED">RAK-AED</ion-option>\n                </ion-select>\n              </ion-item>\n        </ion-col>\n      </ion-row>\n    <button class="wallet-button" (click)="Register()" name="done">\n        <ion-title>Create</ion-title>\n    </button>\n  </div>\n  <div *ngIf="isRegistered">\n      \n    <ion-col>\n      <img class="center" src="assets/images/success.png" />\n    </ion-col>  \n            <p class="success">Registration Successfull</p>  \n            \n            <button class="wallet-button" (click)="redirectToHome()" name="done">\n                <ion-title>Done</ion-title>\n            </button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/ram/Ram/Workarea/Projects/E-Wallet/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_transactionModel__["a" /* TransactionModel */],
            __WEBPACK_IMPORTED_MODULE_3__providers_restapi_service__["a" /* RestAPIServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_authenticate__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_transactionModel__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_app_config__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_restapi_service__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__register_register__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, authenticateProvider, userData, restApiService, http, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authenticateProvider = authenticateProvider;
        this.userData = userData;
        this.restApiService = restApiService;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.user = {};
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var self = this;
        var message = { "userId": self.userData.loggedInUser };
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
        // check the login using ldap and throw error if not present in ldap
        // check if the user is null
        // if null the
        // if ldap user is present then check the user in database
        this.restApiService.makeBackendPostRequest(__WEBPACK_IMPORTED_MODULE_5__config_app_config__["a" /* AppConfig */].GET_USER_DATA_URL, null, JSON.stringify(message)).then(function (result) {
            var info = JSON.parse(result._body);
            console.log("after getting user --" + info.data);
            //check if the user exists
            // if present in database then get the balance and show home page
            if (info.data != null && info.data.walletAddress != "") {
                _this.userData.loggedInUserName = info.data.userName;
                if (info.data.walletBalance != null) {
                    _this.userData.balance = info.data.walletBalance;
                    _this.userData.displayBalance = parseFloat(_this.userData.balance.toString()).toFixed(2);
                }
                _this.userData.loggedInUserWalletAddress = info.data.walletAddress;
                loader.dismiss();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
            }
            else {
                loader.dismiss();
                // if the user is not present in database   then redirect him to wallet registration page
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__register_register__["a" /* RegisterPage */]);
            }
        }).catch(function (error) {
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
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/ram/Ram/Workarea/Projects/E-Wallet/src/pages/login/login.html"*/'<ion-content class="bg-ewallet">\n\n  <form (ngSubmit)="login()" #registerForm="ngForm">\n      <ion-row class="logo-box">\n          <ion-col>\n            <img class="rakbank-logo-header" src="assets/images/e-rakbank-logo.png" />\n          </ion-col>\n        </ion-row>\n        <ion-row class="wallet-box">\n            <ion-col>\n                <img class="login-header" src="assets/images/wallet_logo.png" />\n              </ion-col>\n        </ion-row>\n    <div padding class="login-block">\n\n      <ion-row>\n        <ion-col>\n          <ion-list>\n\n            <ion-item>\n              <ion-label>\n                <ion-icon name="person" class="form-input-icon"></ion-icon>\n              </ion-label>\n              <ion-input type="text" placeholder="Name" [(ngModel)]="userData.loggedInUser" name="userName"></ion-input>\n            </ion-item>\n\n            <ion-item>\n              <ion-label>\n                <ion-icon name="md-lock" class="form-input-icon"></ion-icon>\n              </ion-label>\n              <ion-input type="password" placeholder="Password" [(ngModel)]="user.password" name="password"></ion-input>\n            </ion-item>\n\n\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <button ion-button class="wallet-button" type="submit" [disabled]="!registerForm.form.valid">Login</button>\n        </ion-col>\n      </ion-row>\n    </div>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/ram/Ram/Workarea/Projects/E-Wallet/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_authenticate__["a" /* AuthenticateProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_transactionModel__["a" /* TransactionModel */],
            __WEBPACK_IMPORTED_MODULE_6__providers_restapi_service__["a" /* RestAPIServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=1.js.map