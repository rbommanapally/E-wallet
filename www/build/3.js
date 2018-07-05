webpackJsonp([3],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
            ],
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

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

/***/ })

});
//# sourceMappingURL=3.js.map