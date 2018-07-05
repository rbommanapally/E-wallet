webpackJsonp([7],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_qrData__ = __webpack_require__(252);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TransactionModel = /** @class */ (function () {
    function TransactionModel(storage) {
        this.storage = storage;
        this.scannedCode = new __WEBPACK_IMPORTED_MODULE_2__models_qrData__["a" /* QRData */]();
        this.balance = 0;
        this.displayBalance = "0.00";
        this.qrCodeCreated = false;
        this.isqrCodeScanned = false;
    }
    TransactionModel.prototype.getQRData = function () {
        var self = this;
        var d = new Date();
        var todayDate = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
        self.transactionId = new Date().getTime();
        var data = {
            "userName": this.loggedInUserName, "userAddress": this.loggedInUserWalletAddress, "receiverUserId": this.loggedInUser,
            "amount": this.amount, "transactionDate": todayDate, "transactionId": self.transactionId
        };
        this.generatedQRdata = JSON.stringify(data);
        return this.generatedQRdata;
    };
    TransactionModel.prototype.delete = function (key) {
        var self = this;
        return new Promise(function (resolve) {
            self.storage.remove(key).then(function () {
                resolve("Success");
            });
        });
    };
    TransactionModel.prototype.resetValues = function () {
        this.amount = '';
    };
    TransactionModel = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], TransactionModel);
    return TransactionModel;
}());

//# sourceMappingURL=transactionModel.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
var AppConfig = /** @class */ (function () {
    function AppConfig() {
    }
    //static GET_USER_DATA_URL = "https://rak-ewallet-service-terrific-serval.mybluemix.net/api/users/getCustomerData";
    //static REGISTER_USER_DATA_URL = "https://rak-ewallet-service-terrific-serval.mybluemix.net/api/users/register";
    //static GETNEWADDRESS_BC = "https://rak-ewallet-service-terrific-serval.mybluemix.net/api/users/getBalance";
    //static TRANSFERAMOUNT="https://rak-ewallet-service-terrific-serval.mybluemix.net/api/users/transferWalletToWallet";
    //static VALIDATE_TRANSACTION="https://rak-ewallet-service-terrific-serval.mybluemix.net/api/users/checkTransaction";
    //rak-ewallet-service-terrific-serval.mybluemix.net
    AppConfig.GET_USER_DATA_URL = "http://localhost:8080/e-wallet-service/api/users/getCustomerData";
    AppConfig.REGISTER_USER_DATA_URL = "http://localhost:8080/e-wallet-service/api/users/register";
    AppConfig.GETNEWADDRESS_BC = "http://localhost:8080/e-wallet-service/api/users/getBalance";
    AppConfig.TRANSFERAMOUNT = "http://localhost:8080/e-wallet-service/api/users/transferWalletToWallet";
    return AppConfig;
}());

//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/deposit/deposit.module": [
		279,
		6
	],
	"../pages/home/home.module": [
		280,
		5
	],
	"../pages/login/login.module": [
		281,
		1
	],
	"../pages/pay/pay.module": [
		282,
		4
	],
	"../pages/receive/receive.module": [
		283,
		0
	],
	"../pages/register/register.module": [
		284,
		3
	],
	"../pages/withdraw/withdraw.module": [
		285,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestAPIServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_platform_platform__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__transactionModel__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config_app_config__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RestAPIServiceProvider = /** @class */ (function () {
    function RestAPIServiceProvider(http, events, platform, userData) {
        this.http = http;
        this.events = events;
        this.platform = platform;
        this.userData = userData;
        // console.log('ApiConnectorServiceProvider Provider');
    }
    RestAPIServiceProvider.prototype.makeBackendPostRequest = function (url, accessToken, message) {
        var self = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append("content-type", "application/json");
            if (accessToken) {
                //headers.append("Authorization", "Basic " + accessToken);
                headers.append("accept", "application/json");
                headers.append("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
                headers.append("Access-Control-Allow-Origin", "*");
                headers.append("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Authorization, Origin, Accept");
            }
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
            console.log("headers obj  : " + JSON.stringify(headers));
            console.log("URL for token generation : " + url);
            console.log("Message from client :: " + JSON.stringify(message));
            self.http.post(url, JSON.parse(message), options).subscribe(function (response) {
                //console.log("resopnse : " + JSON.stringify(response));
                resolve(response);
                //console.log(response.status);
                console.log(response._body); // data received by server
            }, function (error) {
                console.log(error.status);
                console.log(error.error); // error message as string
                console.log(error.headers);
            }); //end of POST promise.
            //});//end of gethttp promise
            //}) //end of createAPIRequest promise.        
        });
    };
    RestAPIServiceProvider.prototype.getBalance = function () {
        var _this = this;
        //  console.log("regenerateAccessToken : " + refreshToken);
        var self = this;
        return new Promise(function (resolve, reject) {
            console.log("Getting balance for user::" + self.userData.loggedInUserName + " with wallet id --" + self.userData.loggedInUserWalletAddress);
            var requestObj = {
                "walletAddress": _this.userData.loggedInUserWalletAddress
            };
            //console.log("regenerateAccessToken : " + JSON.stringify(requestObj));
            self.makeBackendPostRequest(__WEBPACK_IMPORTED_MODULE_5__config_app_config__["a" /* AppConfig */].GETNEWADDRESS_BC, null, JSON.stringify(requestObj)).then(function (response) {
                console.log("Response after user registartion :: " + JSON.stringify(response));
                resolve(response);
                var info = JSON.parse(response._body);
                if (info.data != null) {
                    _this.userData.balance = info.data.walletBalance;
                    _this.userData.displayBalance = parseFloat(_this.userData.balance.toString()).toFixed(2);
                }
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    RestAPIServiceProvider.prototype.updateBalance = function () {
        var self = this;
        self.getBalance().then(function (result) {
            console.log("Balance Updates---::");
        });
    };
    RestAPIServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_platform_platform__["a" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__transactionModel__["a" /* TransactionModel */]])
    ], RestAPIServiceProvider);
    return RestAPIServiceProvider;
}());

//# sourceMappingURL=restapi-service.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticateProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticateProvider = /** @class */ (function () {
    function AuthenticateProvider(http) {
        this.http = http;
        console.log('Hello AuthenticateProvider Provider');
    }
    /**
     * Store user on local storage.
     *
     * @param user User.
     */
    AuthenticateProvider.prototype.setAuthenticatedUser = function (user) {
        if (user != null) {
            localStorage.setItem('app.userInfo', 'true');
            localStorage.setItem('app.userInfo.id', user.id);
            localStorage.setItem('app.userInfo.name', user.name);
        }
    };
    /**
     * Get user from local storage.
     *
     * @return User.
     */
    AuthenticateProvider.prototype.getAuthenticatedUser = function () {
        var user;
        if (localStorage.getItem('app.userInfo')) {
            user = {
                id: localStorage.getItem('app.userInfo.id'),
                name: localStorage.getItem('app.userInfo.name')
            };
        }
        return user;
    };
    /**
     * Remove user from local storage.
     */
    AuthenticateProvider.prototype.clearAuthenticatedUser = function () {
        localStorage.removeItem('app.userInfo');
        localStorage.removeItem('app.userInfo.id');
        localStorage.removeItem('app.userInfo.name');
    };
    /**
     * Perform authentication using credentials.
     *
     * @param user Username.
     * @param password Password.
     */
    AuthenticateProvider.prototype.authenticateUsingCredentials = function (user, password) {
        var _this = this;
        if (user === null || password === null) {
            // Throws error message.
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw('User and password are required.');
        }
        else {
            // Creates Observable.
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
                // Perform server request to validate user credentials.
                _this.setAuthenticatedUser({ id: '1', name: 'FortDev' });
                observer.next();
                observer.complete();
            });
        }
    };
    AuthenticateProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], AuthenticateProvider);
    return AuthenticateProvider;
}());

//# sourceMappingURL=authenticate.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_authenticate__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_barcode_scanner__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_restapi_service__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_transactionModel__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__config_app_config__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_storage__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* EWallet */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* EWallet */], {
                    preloadModules: true,
                    scrollAssist: false, autoFocusAssist: false
                }, {
                    links: [
                        { loadChildren: '../pages/deposit/deposit.module#DepositPageModule', name: 'DepositPage', segment: 'deposit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pay/pay.module#PayPageModule', name: 'PayPage', segment: 'pay', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/receive/receive.module#ReceivePageModule', name: 'ReceivePage', segment: 'receive', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/withdraw/withdraw.module#WithdrawPageModule', name: 'WithdrawPage', segment: 'withdraw', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* EWallet */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__providers_authenticate__["a" /* AuthenticateProvider */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_10__providers_transactionModel__["a" /* TransactionModel */],
                __WEBPACK_IMPORTED_MODULE_9__providers_restapi_service__["a" /* RestAPIServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_11__config_app_config__["a" /* AppConfig */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QRData; });
var QRData = /** @class */ (function () {
    function QRData() {
    }
    QRData.prototype.getScannedDetails = function () {
    };
    // toJSON is automatically used by JSON.stringify
    QRData.prototype.toJSON = function () {
        // console.log("Id----"+this.userName+"===="+this.amount);
        // copy all fields from `this` to an empty object and return in
        return Object.assign({}, this); //, {
        // convert fields that need converting
        //   transactionDate: this.transactionDate.toLocaleString()
        // });
    };
    // fromJSON is used to convert an serialized version
    // of the QRData to an instance of the class
    QRData.fromJSON = function (json) {
        /* if (typeof json === 'string') {
             console.log("inside string");
             // if it's a string, parse it first
             return JSON.parse(json)//, QRData.reviver);
         } else {*/
        console.log("inside else");
        // create an instance of the QRData class
        var qrData = Object.setPrototypeOf(json, QRData.prototype);
        /* copy all the fields from the json object
        return Object.assign(qrData, json);/*, {
            // convert fields that need converting
            transactionDate: new Date(json.transactionDate),
        });
        */
        return qrData;
    };
    // reviver can be passed as the second parameter to JSON.parse
    // to automatically call QRData.fromJSON on the resulting value.
    QRData.reviver = function (key, value) {
        return key === "" ? QRData.fromJSON(value) : value;
    };
    return QRData;
}());

//# sourceMappingURL=qrData.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EWallet; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EWallet = /** @class */ (function () {
    // List of pages that can be navigated to from the left menu
    // the left menu only works after login
    // the login page disables the left menu
    function EWallet(events, menu, platform, splashScreen, statusBar) {
        this.events = events;
        this.menu = menu;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.rootPage = 'LoginPage';
        var self = this;
        platform.ready().then(function () {
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
    EWallet = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/ram/Ram/Workarea/Projects/E-Wallet/src/app/app.html"*/'  <ion-nav [root]="rootPage" #content swipeBackEnabled="false" main name="app"></ion-nav>\n  \n      '/*ion-inline-end:"/Users/ram/Ram/Workarea/Projects/E-Wallet/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]])
    ], EWallet);
    return EWallet;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map