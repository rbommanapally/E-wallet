webpackJsonp([6],{

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositPageModule", function() { return DepositPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__deposit__ = __webpack_require__(297);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DepositPageModule = /** @class */ (function () {
    function DepositPageModule() {
    }
    DepositPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__deposit__["a" /* DepositPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__deposit__["a" /* DepositPage */]),
            ],
        })
    ], DepositPageModule);
    return DepositPageModule;
}());

//# sourceMappingURL=deposit.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepositPage; });
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
 * Generated class for the DepositPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DepositPage = /** @class */ (function () {
    function DepositPage(navCtrl, navParams, userData, restApiService, loadingCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userData = userData;
        this.restApiService = restApiService;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.errorLoading = true;
    }
    DepositPage.prototype.loadAmount = function () {
        var self = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        // prepare the json for the user to register in the local DB
        var transferJsonMsg = {
            "userId": self.userData.loggedInUser, "receiverUserName": this.userData.loggedInUserName,
            "userName": "", "receiverWalletAddress": self.userData.loggedInUserWalletAddress,
            "transactionType": "LOAD", "uniqueTransactionId": new Date().getTime(), "amountToTransfer": this.userData.amount
        };
        loader.present();
        // if user is not registered, register the user in the block chain
        this.restApiService.makeBackendPostRequest(__WEBPACK_IMPORTED_MODULE_4__config_app_config__["a" /* AppConfig */].TRANSFERAMOUNT, null, JSON.stringify(transferJsonMsg)).then(function (result) {
            console.log("after resgistering in block chain user");
            var bcData = JSON.parse(result._body);
            console.log("Response after register--::" + bcData.data.transactionUniqueID);
            // assign the block chain user unique address to logged in user
            if (bcData.data.transactionUniqueID != null) {
                self.amountLoaded = true;
                loader.dismiss();
            }
            else {
                console.log("block chain reuslt--" + bcData);
            }
        }).catch(function (error) {
            console.log("error : " + JSON.stringify(error));
        });
    };
    DepositPage.prototype.redirectToHome = function () {
        var self = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
        self.restApiService.updateBalance();
        loader.dismiss();
        self.navCtrl.setRoot('HomePage');
    };
    DepositPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-deposit',template:/*ion-inline-start:"/Users/ram/Ram/Workarea/Projects/E-Wallet/src/pages/deposit/deposit.html"*/'<!--\n  Generated template for the DepositPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Deposit</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div *ngIf="!amountLoaded">\n  <ion-item>\n    <label class = "item item-input item-select">\n      <div class = "input-label">\n        AccountNumbersde\n      </div>\n      <select>\n         <option>123456789</option>\n         <option selected>1234567888</option>\n      </select>\n   </label>\n    <ion-label>AccountNumbers</ion-label>\n    \n    <ion-select [(ngModel)]="number">\n      <ion-option value="1223456">123456789</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-input type="tel" maxlength="5" pattern="[^0-9]*" placeholder="AED" [(ngModel)]="userData.amount" name="amount"></ion-input>&#x62f;&#x2e;&#x625;\n  </ion-item>\n  <button class="wallet-button" (click)="loadAmount()">\n    <ion-title>Proceed</ion-title>\n  </button>\n</div>\n\n<div *ngIf="amountLoaded">\n  <ion-col>\n    <img class="center" src="assets/images/success.png" />\n</ion-col>\n<p class="success">Transaction Successfull</p>\n<button class="wallet-button" (click)="redirectToHome()" name="done">\n    <ion-title>Done</ion-title>\n</button>\n</div>\n\n</ion-content>'/*ion-inline-end:"/Users/ram/Ram/Workarea/Projects/E-Wallet/src/pages/deposit/deposit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_transactionModel__["a" /* TransactionModel */],
            __WEBPACK_IMPORTED_MODULE_3__providers_restapi_service__["a" /* RestAPIServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], DepositPage);
    return DepositPage;
}());

//# sourceMappingURL=deposit.js.map

/***/ })

});
//# sourceMappingURL=6.js.map