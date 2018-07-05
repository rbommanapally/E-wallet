webpackJsonp([4],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayPageModule", function() { return PayPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pay__ = __webpack_require__(299);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PayPageModule = /** @class */ (function () {
    function PayPageModule() {
    }
    PayPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pay__["a" /* PayPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pay__["a" /* PayPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__pay__["a" /* PayPage */]
            ]
        })
    ], PayPageModule);
    return PayPageModule;
}());

//# sourceMappingURL=pay.module.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayPage; });
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
 * Generated classs for the PayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PayPage = /** @class */ (function () {
    function PayPage(userData, navCtrl, atrCtrl, restApiService, loadingCtrl, storage) {
        this.userData = userData;
        this.navCtrl = navCtrl;
        this.atrCtrl = atrCtrl;
        this.restApiService = restApiService;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.self = this;
    }
    PayPage.prototype.showConfirmAlert = function () {
        var self = this;
        var alertConfirm = self.atrCtrl.create({
            title: 'Confirm Payment',
            message: 'Please confirm the payment',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        self.isPaymentDone = false;
                        console.log('No clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        self.transferAmount();
                        console.log('Yes clicked');
                    }
                }
            ]
        });
        alertConfirm.present();
    };
    PayPage.prototype.redirectToHome = function () {
        var self = this;
        self.restApiService.updateBalance();
        self.navCtrl.setRoot('HomePage');
    };
    PayPage.prototype.transferAmount = function () {
        var _this = this;
        var self = this;
        var transferJsonMsg = {
            "userId": self.userData.loggedInUser, "receiverUserName": this.userData.receiverUserId,
            "userName": this.userData.loggedInUser, "walletAddress": this.userData.loggedInUserWalletAddress,
            "receiverWalletAddress": self.userData.receiverWalletAddress,
            "transactionType": "PAY", "uniqueTransactionId": this.userData.transactionId,
            "amountToTransfer": this.userData.amount
        };
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loader.present();
        return new Promise(function (resolve, reject) {
            if (_this.userData.displayBalance < _this.userData.amount) {
                reject("Amount entered is less than available balance");
            }
            self.restApiService.makeBackendPostRequest(__WEBPACK_IMPORTED_MODULE_4__config_app_config__["a" /* AppConfig */].TRANSFERAMOUNT, null, JSON.stringify(transferJsonMsg)).then(function (result) {
                var bcData = JSON.parse(result._body);
                console.log("Response after Transfer PAY--::" + bcData.data);
                // assign the block chain user unique address to logged in user
                if (bcData.data.transactionUniqueID != null) {
                    self.isPaymentDone = true;
                    self.userData.senderUserName = bcData.data.fromAddress;
                    self.userData.transactionDate = bcData.data.createdDateTime;
                    loader.dismiss();
                }
                else {
                    console.log("block chain reuslt--" + bcData);
                }
            }).catch(function (error) {
                console.log("error : " + JSON.stringify(error));
            });
        });
    };
    PayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pay',template:/*ion-inline-start:"/Users/ram/Ram/Workarea/Projects/E-Wallet/src/pages/pay/pay.html"*/'<!--\n  Generated template for the PayPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-title>Payment</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <div class="pay-header" *ngIf="!userData.isPaymentDone">\n        <p class="font-big">Amount</p>\n        <span>AED\n            <b>{{userData.amount}}</b>\n        </span>\n    </div>\n    <div *ngIf="isPaymentDone">\n        <ion-col>\n            <img class="center" src="assets/images/success.png" />\n            <p class="success">Transaction Successfull</p>\n        </ion-col>\n    </div>\n    <div *ngIf="isPaymentDone">\n        <ion-row>\n            <ion-col>\n                <ion-item>Amount</ion-item>\n            </ion-col>\n            <ion-col>\n                <ion-item>AED {{userData.amount}}</ion-item>\n            </ion-col>\n        </ion-row>\n    </div>\n    <ion-row>\n        <ion-col>\n            <ion-item>From</ion-item>\n        </ion-col>\n\n        <ion-col>\n            <ion-item>{{userData.loggedInUserName}}</ion-item>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col>\n            <ion-item>To</ion-item>\n        </ion-col>\n\n        <ion-col>\n            <ion-item>{{userData.receiverUserName}}</ion-item>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col>\n            <ion-item>Remarks</ion-item>\n        </ion-col>\n\n        <ion-col>\n            <ion-item></ion-item>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col>\n            <ion-item>Transaction ID</ion-item>\n        </ion-col>\n        <ion-col>\n            <ion-item>{{userData.transactionId}}</ion-item>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col>\n            <ion-item>Transaction Date</ion-item>\n        </ion-col>\n        <ion-col>\n            <ion-item>{{userData.transactionDate}}</ion-item>\n        </ion-col>\n    </ion-row>\n    \n    <button *ngIf="!isPaymentDone" class="wallet-button" (click)="showConfirmAlert()" name="confirm">\n        <ion-title>Confirm</ion-title>\n    </button>\n    <button *ngIf="isPaymentDone" class="wallet-button" (click)="redirectToHome()" name="done">\n        <ion-title>Done</ion-title>\n    </button>\n</ion-content>'/*ion-inline-end:"/Users/ram/Ram/Workarea/Projects/E-Wallet/src/pages/pay/pay.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_transactionModel__["a" /* TransactionModel */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_restapi_service__["a" /* RestAPIServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], PayPage);
    return PayPage;
}());

//# sourceMappingURL=pay.js.map

/***/ })

});
//# sourceMappingURL=4.js.map