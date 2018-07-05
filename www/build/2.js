webpackJsonp([2],{

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithdrawPageModule", function() { return WithdrawPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__withdraw__ = __webpack_require__(321);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WithdrawPageModule = /** @class */ (function () {
    function WithdrawPageModule() {
    }
    WithdrawPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__withdraw__["a" /* WithdrawPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__withdraw__["a" /* WithdrawPage */]),
            ],
        })
    ], WithdrawPageModule);
    return WithdrawPageModule;
}());

//# sourceMappingURL=withdraw.module.js.map

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

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithdrawPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_restapi_service__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_transactionModel__ = __webpack_require__(102);
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
 * Generated class for the WithdrawPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WithdrawPage = /** @class */ (function () {
    function WithdrawPage(navCtrl, navParams, userData, restApiService, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userData = userData;
        this.restApiService = restApiService;
        this.storage = storage;
        var self = this;
    }
    WithdrawPage.prototype.withDraw = function () {
        var self = this;
        self.moneyWithdraw = true;
    };
    WithdrawPage.prototype.redirectToHome = function () {
        var self = this;
        self.restApiService.updateBalance();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    WithdrawPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-withdraw',template:/*ion-inline-start:"/Users/ram/Ram/Workarea/Projects/E-Wallet/src/pages/withdraw/withdraw.html"*/'<!--\n  Generated template for the WithdrawPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>withdraw</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n    \n<ion-content padding>\n  <div *ngIf="!moneyWithdraw">\n  <ion-item>\n    <ion-label>AccountNumber</ion-label>\n    <ion-select [(ngModel)]="number">\n      <ion-option value="1223456">123456789</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-input type="number" placeholder="AED" [(ngModel)]="userData.amount" name="amount"></ion-input>&#x62f;&#x2e;&#x625;\n  </ion-item>\n  <button class="wallet-button" (click)="withDraw()">\n    <ion-title>Proceed</ion-title>\n  </button>\n</div>\n\n<div *ngIf="moneyWithdraw">\n  <ion-col>\n    <img class="center" src="assets/images/success.png" />\n</ion-col>\n<p class="success">Transaction Successfull</p>\n<button class="wallet-button" (click)="redirectToHome()" name="done">\n    <ion-title>Done</ion-title>\n</button>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/ram/Ram/Workarea/Projects/E-Wallet/src/pages/withdraw/withdraw.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_transactionModel__["a" /* TransactionModel */],
            __WEBPACK_IMPORTED_MODULE_3__providers_restapi_service__["a" /* RestAPIServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], WithdrawPage);
    return WithdrawPage;
}());

//# sourceMappingURL=withdraw.js.map

/***/ })

});
//# sourceMappingURL=2.js.map