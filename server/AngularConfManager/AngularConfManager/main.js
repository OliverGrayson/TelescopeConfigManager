(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\ncolors:\nkeck-blue=rgba(100,154,202,1);\nkeck-light=rgba(189, 207, 227, 1);\n*/\n\nbody {\n  padding-top: 20px;\n  background-color: rgba(189, 207, 227, 1);\n  min-width: 880px;\n}\n\n.footer {\n  padding-top: 40px;\n  padding-bottom: 40px;\n  margin-top: 40px;\n  border-top: 1px solid #eee;\n}\n\n/* Main marketing message and sign up button */\n\n.jumbotron {\n  text-align: center;\n  background-color: transparent;\n}\n\n.jumbotron .btn {\n  padding: 14px 24px;\n  font-size: 21px;\n}\n\n/* main container box */\n\n.main {\n    width: 80%;\n}\n\n.config-panel {\n    width: 100%;\n}\n\nnav {\n    height: 1em;\n}\n\n.nav-pills>li>a {\n    border-radius: 0 !important;\n}\n\n.title-header {\n    margin-bottom:1em;\n}\n\n/* Customize the nav-justified links to be fill the entire space of the .navbar */\n\n.nav-justified {\n  background-color: #eee;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n}\n\n.nav-justified > li > a {\n  padding-top: 15px;\n  padding-bottom: 15px;\n  margin-bottom: 0;\n  font-weight: bold;\n  color: #777;\n  text-align: center;\n  background-color: #e5e5e5; /* Old browsers */\n  background-image:         linear-gradient(to bottom, #f5f5f5 0%,#e5e5e5 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f5f5f5', endColorstr='#e5e5e5',GradientType=0 ); /* IE6-9 */\n  background-repeat: repeat-x; /* Repeat the gradient */\n  border-bottom: 1px solid #d5d5d5;\n}\n\n.nav-justified > .active > a,\n.nav-justified > .active > a:hover,\n.nav-justified > .active > a:focus {\n  background-color: #ddd;\n  background-image: none;\n  box-shadow: inset 0 3px 7px rgba(0,0,0,.15);\n}\n\n.nav-justified > li:first-child > a {\n  border-radius: 5px 5px 0 0;\n}\n\n.nav-justified > li:last-child > a {\n  border-bottom: 0;\n  border-radius: 0 0 5px 5px;\n}\n\n@media (min-width: 768px) {\n  .nav-justified {\n    max-height: 52px;\n  }\n  .nav-justified > li > a {\n    border-right: 1px solid #d5d5d5;\n    border-left: 1px solid #fff;\n  }\n  .nav-justified > li:first-child > a {\n    border-left: 0;\n    border-radius: 5px 0 0 5px;\n  }\n  .nav-justified > li:last-child > a {\n    border-right: 0;\n    border-radius: 0 5px 5px 0;\n  }\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n\n    <!-- title -->\n\n    <div class=\"container-fluid main\" >\n\n        <app-nav></app-nav>\n\n        <app-table></app-table>\n\n        <app-modal></app-modal>\n\n    </div>\n\n</body>\n\n<!-- <app-table></app-table> -->\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(httpClient) {
        this.httpClient = httpClient;
        this.title = 'app';
    }
    AppComponent.prototype.sayHi = function () {
        var _this = this;
        this.httpClient.get('http://127.0.0.1:5002/hi').subscribe(function (data) {
            _this.serverData = data;
            console.log(_this.serverData);
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/modal/modal.component.ts");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./table/table.component */ "./src/app/table/table.component.ts");
/* harmony import */ var _communication_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./communication.service */ "./src/app/communication.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modal.service */ "./src/app/modal.service.ts");
/* harmony import */ var _object_filter_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./object-filter.pipe */ "./src/app/object-filter.pipe.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"],
                _table_table_component__WEBPACK_IMPORTED_MODULE_9__["TableComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_8__["ModalComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_8__["AddModalContent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_8__["LoginModalContent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_8__["DeleteModalContent"],
                _object_filter_pipe__WEBPACK_IMPORTED_MODULE_13__["ObjectFilterPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forRoot([{
                        path: '**',
                        component: _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
                    }])
            ],
            providers: [
                _communication_service__WEBPACK_IMPORTED_MODULE_10__["CommunicationService"],
                _data_service__WEBPACK_IMPORTED_MODULE_11__["DataService"],
                _modal_service__WEBPACK_IMPORTED_MODULE_12__["ModalService"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]
            ],
            entryComponents: [
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_8__["AddModalContent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_8__["LoginModalContent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_8__["DeleteModalContent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/communication.service.ts":
/*!******************************************!*\
  !*** ./src/app/communication.service.ts ***!
  \******************************************/
/*! exports provided: CommunicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunicationService", function() { return CommunicationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var CommunicationService = /** @class */ (function () {
    function CommunicationService(httpClient, sharedCurrent) {
        this.httpClient = httpClient;
        this.sharedCurrent = sharedCurrent;
        this.serverURL = 'http://128.171.98.126:5002'; // URL to web api
    }
    // get list of configs for current instrument
    CommunicationService.prototype.showList = function (current) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(current.name !== 'Instrument') /* default */) return [3 /*break*/, 2]; /* default */
                        console.log("retrieving", current.name, current.progname, "from", current);
                        return [4 /*yield*/, this.httpClient.post(this.serverURL + '\/getConfigurationList', {
                                progname: current.progname,
                                instrument: current.name
                            }).toPromise()];
                    case 1:
                        response = _a.sent();
                        console.log("showList: ", response);
                        current.configurations = response;
                        this.sharedCurrent.set(current);
                        return [2 /*return*/, response]; // => current.configurations
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    // send the file to the backend to be uploaded to the database
    CommunicationService.prototype.loadConfiguration = function (current) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpClient.post(this.serverURL + '\/sendFile', {
                            instrument: current.name,
                            file: current.content,
                            progname: current.info.progname,
                            filename: current.fileName
                        }).toPromise()];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, (response["statusText"] === "OK")];
                }
            });
        });
    };
    CommunicationService.prototype.saveAll = function (current) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpClient.post(this.serverURL + '\/saveAllConfigurations', {
                            instrument: current.name,
                            progname: current.info.progname
                        }).toPromise()];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, (response["statusText"] === "OK")];
                }
            });
        });
    };
    // save a new configuration
    CommunicationService.prototype.addConfiguration = function (current) {
        return __awaiter(this, void 0, void 0, function () {
            var response, list_response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("adding", current);
                        current.info.progname = current.progname;
                        return [4 /*yield*/, this.httpClient.post(this.serverURL + '\/addConfiguration', {
                                info: current.info,
                                instrument: current.name
                            }).toPromise()];
                    case 1:
                        response = _a.sent();
                        if (!response) return [3 /*break*/, 3];
                        console.log("added", response);
                        return [4 /*yield*/, this.showList(current)];
                    case 2:
                        list_response = _a.sent();
                        return [2 /*return*/, list_response];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // get an entry to edit
    CommunicationService.prototype.editConfiguration = function (current) {
        return __awaiter(this, void 0, void 0, function () {
            var response, list_response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpClient.post(this.serverURL + '\/getConfiguration', {
                            instrument: current.name,
                            id: current.info.id
                        }).toPromise()];
                    case 1:
                        response = _a.sent();
                        if (!response) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.showList(current)];
                    case 2:
                        list_response = _a.sent();
                        return [2 /*return*/, list_response];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // post a duplicate config (from table buttons)
    CommunicationService.prototype.duplicateConfiguration = function (current) {
        return __awaiter(this, void 0, void 0, function () {
            var get_response, commit_response, list_response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpClient.post(this.serverURL + '\/getConfiguration', {
                            instrument: current.name,
                            id: current.info.id
                        }).toPromise()];
                    case 1:
                        get_response = _a.sent();
                        current.info = get_response;
                        return [4 /*yield*/, this.httpClient.post(this.serverURL + '\/addConfiguration', {
                                instrument: current.name,
                                info: current.info
                            }).toPromise()];
                    case 2:
                        commit_response = _a.sent();
                        if (!commit_response) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.showList(current)];
                    case 3:
                        list_response = _a.sent();
                        return [2 /*return*/, list_response];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // delete a config. TODO: only mark as deleted?
    CommunicationService.prototype.deleteConfiguration = function (current) {
        return __awaiter(this, void 0, void 0, function () {
            var response, list_response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpClient.post(this.serverURL + '\/deleteConfiguration', {
                            instrument: current.name,
                            id: current.deleteConfigurationId
                        }).toPromise()];
                    case 1:
                        response = _a.sent();
                        if (!response) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.showList(current)];
                    case 2:
                        list_response = _a.sent();
                        return [2 /*return*/, list_response];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // save a .STATE file to the server
    CommunicationService.prototype.saveConfiguration = function (current) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpClient.post(this.serverURL + '\/saveConfiguration', {
                            instrument: current.name,
                            id: current.info.id
                        }).toPromise()];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, (response["statusText"] === "OK")];
                }
            });
        });
    };
    // post edited config to database
    CommunicationService.prototype.updateConfiguration = function (current) {
        return __awaiter(this, void 0, void 0, function () {
            var response, list_response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("updating", JSON.parse(JSON.stringify({
                            instrument: current.name,
                            info: current.info,
                            id: current.info.id
                        })));
                        return [4 /*yield*/, this.httpClient.post(this.serverURL + '\/updateConfiguration', {
                                "instrument": current.name,
                                "info": current.info,
                                "id": current.info.id
                            }).toPromise()];
                    case 1:
                        response = _a.sent();
                        if (!response) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.showList(current)];
                    case 2:
                        list_response = _a.sent();
                        return [2 /*return*/, list_response];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // use keckID cookie to get schedule JSON from backend
    CommunicationService.prototype.generateAllowedProgramList = function (keckID) {
        return __awaiter(this, void 0, void 0, function () {
            var reponse, programs_1, instruments_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(keckID);
                        return [4 /*yield*/, this.httpClient.post(this.serverURL + '\/getAllowedPrograms', {
                                "keck_id": keckID
                            }).toPromise()];
                    case 1:
                        reponse = _a.sent();
                        console.log(reponse);
                        // return response;
                        if (Object.keys(reponse).length === 0) {
                            return [2 /*return*/, {
                                    "allowedPrograms": [],
                                    "allowedInstruments": []
                                }];
                        }
                        else {
                            programs_1 = [];
                            instruments_1 = [];
                            reponse.forEach(function (program) {
                                programs_1.push(program[0]);
                                instruments_1.push(program[1]);
                            });
                            return [2 /*return*/, {
                                    "allowedPrograms": programs_1,
                                    "allowedInstruments": instruments_1
                                }];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CommunicationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], CommunicationService);
    return CommunicationService;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/


/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService() {
        this.dataSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this.currentMessage = this.dataSource.asObservable();
    }
    DataService.prototype.set = function (message) {
        this.dataSource.next(message);
        console.log("cur set to: ", message);
    };
    DataService.prototype.get = function () {
        var val = this.dataSource.getValue();
        console.log("retrieving cur: ", val);
        return val;
    };
    DataService.prototype.subscribe = function (val) {
        console.log("external function subscribing on: ", val);
        return this.currentMessage.subscribe(val);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/json/instrumentConfData.json":
/*!**********************************************!*\
  !*** ./src/app/json/instrumentConfData.json ***!
  \**********************************************/
/*! exports provided: KCWI, HIRES, LRIS, MOSFIRE, default */
/***/ (function(module) {

module.exports = {"KCWI":{"name":"KCWI","info":{},"progname":"","data":{"selectableData":{"filterb":{"title":"Filter","options":["KBlue","None"],"default":""},"gratingb":{"title":"Grating","options":["BL","BM","BH1","BH2","BH3","None"],"default":""},"image_slicer":{"title":"Slicer","options":["Small","Medium","Large","FPCam"],"default":""},"nsmaskb":{"title":"Mask Position","options":["Open","Mask"],"default":""}},"textEntryData":{"statenam":{"title":"Configuration Name","default":""},"cwaveb":{"title":"CWave","default":""},"pwaveb":{"title":"PWave","default":""},"camangleb":{"title":"Camera Angle","default":""},"focusb":{"title":"Focus","default":""},"ccdmodeb":{"title":"CCD Mode","default":"0"},"ampmodeb":{"title":"Amplifier Mode","default":"9"},"gainmulb":{"title":"Gain Multiplier","default":"10"},"binningb":{"title":"Binning","default":"2,2"},"polarizer":{"title":"Polarizer","default":"Sky"},"cal_mirror":{"title":"Calibration Mirror","default":"Sky"}}}},"HIRES":{"name":"HIRES","info":{},"progname":"","data":{"selectableData":{"hatch":{"title":"Hatch","options":["open","closed"],"default":""},"fil1name":{"title":"Filter 1","options":["clear","rg610","og530","gg475","kv418","kv408","kv380","kv370","wg335"],"default":""},"fil2name":{"title":"Filter 2","options":["clear","OCLI d.t.","CuSO4","5893/30","6199/30","6300/30","6563/30"],"default":""},"deckname":{"title":"Slit","options":["B1","B2","B3","B4","B5","C1","C2","C3","C4","C5","D1","D2","D3","D4","D5","E1","E2","E3","E4","E5"],"default":""},"coll":{"title":"Cross Disperser","options":["red","blue"],"default":""},"lampname":{"title":"Lamp","options":["none","quartz1","quartz2","ThAr1","ThAr2"],"default":""},"lfilname":{"title":"Lamp Filter","options":["bg12","bg13","bg14","bg38","dt","gg495","ng3","ug1","ug5"],"default":""},"cofname":{"title":"Collimator Focus","options":["home","blue","red","forward","reverse","DR00MM","DR03MM","DR05MM","DR06MM","DR08MM","DB00mm","DB03mm","DB05mm","DB06mm","DB08mm","SR00mm","SR03mm","SR05mm","SR06mm","SR08mm","SB00mm","SB03mm","SB05mm","SB06mm","SB08mm"],"default":""}},"textEntryData":{"statenam":{"title":"Configuration Name","default":""},"echangl":{"title":"Echelle Angle","default":""},"xdangl":{"title":"Cross Disperser Angle","default":""},"slitwid":{"title":"Slit Width","default":""}}}},"LRIS":{"name":"LRIS","info":{},"progname":"","data":{"selectableData":{"detector":{"title":"Detector","options":["Blue","Red"],"default":""},"dichroic":{"title":"Dichroic","options":["D460","D500","D560","D680"],"default":""},"filter":{"title":"Filter","options":["u'_Blue","B_Blue","g_Blue","V_Blue","B5_Red","V_Red","R_Red","Rs_Red","I_Red","GG495_Red","OG570_Red","RG850_Red","NB4000_Red","NB6741_Red","NB8185_Red","NB8560_Red","NB9135_Red","NB9148_Red","NB4325_Red"],"default":""},"bluegrism":{"title":"Blue Grism","options":["300/5000","400/3400","600/4000","1200/3400"],"default":""},"redgrism":{"title":"Red Grism","options":["150/7500","300/5000","400/8500","600/5000","600/7500","600/10000_gold_coated","831/8200_gold_coated","900/5500","1200/7500","1200/9000_gold_coated","Mirror"],"default":""},"slitmask":{"title":"Slit Mask","options":["long_0.7","long_1.0","long_1.5","long_8.7","pol_1.0","pol_1.5","focus_holes"],"default":""},"polarimeter":{"title":"Polarimeter","options":["On","Off"],"default":""}},"textEntryData":{"statenam":{"title":"Configuration Name","default":""}}}},"MOSFIRE":{"name":"MOSFIRE","info":{},"progname":"","data":{"selectableData":{"sampmode_text":{"title":"Sampling Mode","options":["CDS","MCDS16"],"default":""},"obsmode":{"title":"Observation Mode","options":["Y-spectroscopy","H-spectroscopy","K-spectroscopy","J-spectroscopy","J2-spectroscopy","Y-imaging","H-imaging","Ks-imaging","J-imaging","J2-imaging","J3-imaging","H1-imaging","H2-imaging"],"default":""}},"textEntryData":{"statenam":{"title":"Configuration Name","default":""},"ITIME":{"title":"Integration Time","default":"2000"},"mdcname":{"title":"Mask Name","default":""},"coadds":{"title":"Co-Adds","default":"1"}}},"sampmode_relation":{"CDS":{"sampmode":"2","groups":"2","numreads":"1"},"MCDS16":{"sampmode":"3","groups":"2","numreads":"16"}}}};

/***/ }),

/***/ "./src/app/modal.service.ts":
/*!**********************************!*\
  !*** ./src/app/modal.service.ts ***!
  \**********************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalService = /** @class */ (function () {
    function ModalService() {
        this.popup = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ModalService.prototype.show = function (data) {
        this.popup.next({
            "cmd": "show",
            data: data
        });
    };
    ModalService.prototype.hide = function (modalName) {
        this.popup.next({
            "element": modalName,
            "cmd": "hide"
        });
    };
    ModalService.prototype.subscribe = function (val) {
        this.popup.subscribe(val);
    };
    ModalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ModalService);
    return ModalService;
}());



/***/ }),

/***/ "./src/app/modal/add-modal.component.css":
/*!***********************************************!*\
  !*** ./src/app/modal/add-modal.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modal/add-modal.component.html":
/*!************************************************!*\
  !*** ./src/app/modal/add-modal.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n    <h4 *ngIf=\"showAdd\" class=\"modal-title\" id=\"addModalLabel\" >Add configuration info</h4>\n    <h4 *ngIf=\"!showAdd\" class=\"modal-title\" id=\"addModalLabel\" >Update configuration info</h4>\n</div>\n<div class=\"modal-body\">\n    <form id=\"dataEntryForm\">\n        <!-- <div *ngIf=\"!showAdd\"> -->\n        <div>\n            <div class=\"form-group\" *ngFor=\"let item of text_values\">\n                <label for=\"txt{{item.name}}\" class=\"control-label\">{{item.title}}:</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"_current.info[item.name]\" id=\"txt{{item.name}}\" [ngModelOptions]=\"{standalone:true}\" />\n            </div>\n            <div class=\"form-group\" *ngFor=\"let item of selectValues\">\n                <label for=\"txt{{item.name}}\" class=\"control-label\">{{item.title}}:</label>\n                <select class=\"form-control\" [(ngModel)]=\"_current.info[item.name]\" id=\"txt{{item.name}}\" [ngModelOptions]=\"{standalone:true}\" >\n                    <option *ngIf=\"item.default\" selected>{{item.default}}</option>\n                    <option *ngFor=\"let opt of item.options\">{{opt}}</option>\n                </select>\n            </div>\n        </div>\n\n        <!-- <div *ngIf=\"showAdd\">\n            <div class=\"form-group\" *ngFor=\"let item of text_values\">\n                <label for=\"txt{{item.title}}\" class=\"control-label\">{{item.title}}:</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"_current.info[item.title]\" id=\"txt{{item.title}}\" name=\"{{item.title}}\" [value]=\"item.default\" />\n            </div>\n            <div class=\"form-group\" *ngFor=\"let item of selectValues\">\n                <label for=\"txt{{item.title}}\" class=\"control-label\">{{item.title}}:</label>\n                <select class=\"form-control\" [(ngModel)]=\"_current.info[item.title]\" id=\"txt{{item.title}}\" name=\"{{item.title}}\">\n                    <option *ngFor=\"let opt of item.options\">{{opt}}</option>\n                </select>\n            </div>\n        </div> -->\n\n    </form>\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\"  class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"activeModal.dismiss('Cross click')\">Close</button>\n    <button *ngIf=\"showAdd==true\" id=\"btnAdd\" (click)=\"addConfiguration()\" type=\"button\" class=\"btn btn-primary\">Add configuration</button>\n    <button *ngIf=\"showAdd==false\" id=\"btnAdd\" (click)=\"updateConfiguration()\" type=\"button\" class=\"btn btn-primary\">Update</button>\n</div>\n"

/***/ }),

/***/ "./src/app/modal/delete-modal.component.html":
/*!***************************************************!*\
  !*** ./src/app/modal/delete-modal.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- popup to confirm DELETE -->\n\n<div class=\"modal-content\">\n    <div class=\"modal-header\"> <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">×</span></button>\n        <h4 class=\"modal-title\" id=\"myLargeModalLabel\">You are about to delete this entry. Do you want to proceed ?</h4>\n    </div>\n\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" (click)=\"deleteConfiguration()\" class=\"btn btn-primary\">Delete</button>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modal/login-modal.component.html":
/*!**************************************************!*\
  !*** ./src/app/modal/login-modal.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- popup for incorrect login cookie -->\n<div class=\"modal-content\">\n    <div class=\"modal-header\"> <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\n        <h4 class=\"modal-title\" id=\"loginModalLabel\">You are not logged in! Please <a href=\"https://www2.keck.hawaii.edu/inst/PILogin/login.php\">log in or create an account here</a>.</h4>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modal/modal.component.ts":
/*!******************************************!*\
  !*** ./src/app/modal/modal.component.ts ***!
  \******************************************/
/*! exports provided: AddModalContent, LoginModalContent, DeleteModalContent, ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddModalContent", function() { return AddModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModalContent", function() { return LoginModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteModalContent", function() { return DeleteModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modal.service */ "./src/app/modal.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _communication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../communication.service */ "./src/app/communication.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var AddModalContent = /** @class */ (function () {
    function AddModalContent(activeModal, http, sharedCurrent) {
        this.activeModal = activeModal;
        this.http = http;
        this.sharedCurrent = sharedCurrent;
        this.text_values = [];
        this.selectValues = [];
        this._current = {};
    }
    Object.defineProperty(AddModalContent.prototype, "current", {
        // function activates when current is set - it adds default values
        set: function (current) {
            var _this = this;
            this._current = current;
            // uncomment for sanity check. I hate TypeScript
            // if (this.showAdd == false) { console.log("false")} else {console.log("not false")}
            // if (this.showAdd == true) { console.log("true")} else {console.log("not true")}
            if (this.showAdd == true) {
                // add new
                // console.log(this.text)
                console.log("adding new");
                Object.keys(this._current.data.textEntryData).forEach(function (x) {
                    console.log(JSON.parse(JSON.stringify(x)));
                    _this.text_values.forEach(function (y) {
                        if (y.title == _this._current.data.textEntryData[x].title) {
                            y.default = _this._current.data.textEntryData[x].default;
                            y.name = x;
                            console.log("add - set ", y);
                        }
                        // console.log(y, y.title, this._current.data.textEntryData[x].title)
                    });
                });
                // console.log("breakpoint")
                // console.log(this._current.data.selectableData,this.selectValues)
                Object.keys(this._current.data.selectableData).forEach(function (x) {
                    console.log(JSON.parse(JSON.stringify(x)));
                    _this.selectValues.forEach(function (y) {
                        if (y.title == _this._current.data.selectableData[x].title) {
                            y.default = _this._current.data.selectableData[x].default;
                            y.name = x;
                            console.log("add - set ", y);
                        }
                    });
                });
            }
            else {
                // edit
                console.log("editing");
                console.log(JSON.parse(JSON.stringify(this._current)));
                this._current.configurations.forEach(function (conf) {
                    // console.log(conf,conf.id,this._current.id)
                    if (conf.id == _this._current.id) {
                        console.log("conf", JSON.parse(JSON.stringify(conf)));
                        // console.log(this.text)
                        Object.keys(_this._current.data.textEntryData).forEach(function (x) {
                            console.log(JSON.parse(JSON.stringify(_this._current.data.textEntryData[x])));
                            var temp_x = JSON.parse(JSON.stringify(_this._current.data.textEntryData[x]));
                            _this.text_values.forEach(function (y) {
                                if (y.title === _this._current.data.textEntryData[x].title) {
                                    y.default = conf[x];
                                    y.name = x;
                                    console.log("edit - set ", JSON.parse(JSON.stringify(_this._current.data.textEntryData[x])), JSON.parse(JSON.stringify(y)));
                                }
                                // console.log(y, y.title, this._current.data.textEntryData[x].title)
                            });
                            _this._current.data.textEntryData[x] = temp_x;
                        });
                        Object.keys(_this._current.data.selectableData).forEach(function (x) {
                            console.log(JSON.parse(JSON.stringify(_this._current.data.selectableData[x])));
                            // awful workaround for these side effects
                            var temp_x = JSON.parse(JSON.stringify(_this._current.data.selectableData[x]));
                            _this.selectValues.forEach(function (y) {
                                if (y.title === _this._current.data.selectableData[x].title) {
                                    y.default = conf[x];
                                    y.name = x;
                                    console.log("edit - set ", JSON.parse(JSON.stringify(_this._current.data.selectableData[x])), JSON.parse(JSON.stringify(y)));
                                }
                            });
                            _this._current.data.selectableData[x] = temp_x;
                        });
                        // for (let key in conf) {
                        //     console.log(key,conf[key])
                        //     this._current.info[key]=conf[key].toString();
                        // }
                    }
                });
                console.log("end of loop", JSON.parse(JSON.stringify(this._current)));
            }
            var temp_info = { id: this._current.id };
            for (var _i = 0, _a = this.text_values; _i < _a.length; _i++) {
                var x = _a[_i];
                if (x.default !== "") {
                    temp_info[x.name] = x.default;
                }
            }
            for (var _b = 0, _c = this.selectValues; _b < _c.length; _b++) {
                var x = _c[_b];
                if (x.default !== "") {
                    temp_info[x.name] = x.default;
                }
            }
            console.log(JSON.parse(JSON.stringify(this._current)));
            this._current.info = temp_info;
            console.log(JSON.parse(JSON.stringify(this._current)));
            console.log(this._current, this.text_values, this.selectValues, temp_info);
        },
        enumerable: true,
        configurable: true
    });
    AddModalContent.prototype.ngOnChanges = function (changes) {
    };
    AddModalContent.prototype.addConfiguration = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.addConfiguration(this._current)];
                    case 1:
                        response = _a.sent();
                        // this.sharedCurrent.set(response);
                        this.activeModal.dismiss('Cross click');
                        return [2 /*return*/];
                }
            });
        });
    };
    AddModalContent.prototype.updateConfiguration = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.updateConfiguration(this._current)];
                    case 1:
                        response = _a.sent();
                        // this.sharedCurrent.set(response);
                        this.activeModal.dismiss('Cross click');
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AddModalContent.prototype, "showAdd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AddModalContent.prototype, "text_values", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AddModalContent.prototype, "selectValues", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('current'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], AddModalContent.prototype, "current", null);
    AddModalContent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'add-modal-content',
            template: __webpack_require__(/*! ./add-modal.component.html */ "./src/app/modal/add-modal.component.html"),
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"],
            _communication_service__WEBPACK_IMPORTED_MODULE_3__["CommunicationService"],
            _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], AddModalContent);
    return AddModalContent;
}());

var LoginModalContent = /** @class */ (function () {
    function LoginModalContent(activeModal) {
        this.activeModal = activeModal;
    }
    LoginModalContent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login-modal-content',
            template: __webpack_require__(/*! ./login-modal.component.html */ "./src/app/modal/login-modal.component.html"),
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], LoginModalContent);
    return LoginModalContent;
}());

var DeleteModalContent = /** @class */ (function () {
    function DeleteModalContent(activeModal, http) {
        this.activeModal = activeModal;
        this.http = http;
    }
    DeleteModalContent.prototype.deleteConfiguration = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                response = this.http.addConfiguration(this._current);
                this.activeModal.dismiss('Cross click');
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DeleteModalContent.prototype, "_current", void 0);
    DeleteModalContent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'delete-modal-content',
            template: __webpack_require__(/*! ./delete-modal.component.html */ "./src/app/modal/delete-modal.component.html"),
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"],
            _communication_service__WEBPACK_IMPORTED_MODULE_3__["CommunicationService"]])
    ], DeleteModalContent);
    return DeleteModalContent;
}());

var ModalComponent = /** @class */ (function () {
    function ModalComponent(modal, ngbModal) {
        this.modal = modal;
        this.ngbModal = ngbModal;
        this.current = {};
        this.editID = "";
    }
    ModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.modal.popup.subscribe(function (msg) {
            console.log(msg);
            if (msg.data.name === "add") {
                if (msg.cmd === "show") {
                    console.log("msg show", JSON.parse(JSON.stringify(msg)));
                    _this.current = msg.data.data.current;
                    _this.showAdd = msg.data.data.showAdd;
                    // for whatever reason, TypeScript won't accept
                    // setting a property to {}. it just doesn't do it.
                    if (_this.showAdd) {
                        // delete this.current.info;
                        // this.current.info={"Configuration Name": ""};
                        // console.log("post loop", this.current.info)
                    }
                    else {
                        _this.current.id = msg.data.data.id;
                        console.log(_this.current.id, msg.data.data.id);
                    }
                    console.log("opening modal");
                    _this.openAddModal();
                }
            }
            else if (msg.data.name === "login") {
                if (msg.cmd === "show") {
                    _this.openLoginModal();
                }
            }
            else if (msg.data.name === "delete") {
                if (msg.cmd === "show") {
                    _this.current = msg.data.data.current;
                    _this.openDeleteModal();
                }
            }
        });
    };
    ModalComponent.prototype.openAddModal = function () {
        console.log("open modal", JSON.parse(JSON.stringify(this.current)));
        var modalRef = this.ngbModal.open(AddModalContent);
        modalRef.componentInstance.showAdd = new Object(this.showAdd);
        // converts the current data to arrays to preserve order
        // if we don't do this, Angular decides to alphabetically sort the
        // object for literally no reason at all
        var text_val = Object.values(this.current['data']['textEntryData']);
        var select_val = Object.values(this.current['data']['selectableData']);
        modalRef.componentInstance.text_values = new Object(text_val);
        modalRef.componentInstance.selectValues = new Object(select_val);
        // current needs to be passed last so the other things are defined
        // when it gets there for the default function
        modalRef.componentInstance.current = new Object(this.current);
        console.log("finish open modal", JSON.parse(JSON.stringify(this.current)));
    };
    ModalComponent.prototype.openLoginModal = function () {
        // just needs to open it - user will be directed away because of
        // lack of permissions
        var modalRef = this.ngbModal.open(AddModalContent);
    };
    ModalComponent.prototype.openDeleteModal = function () {
        var modalRef = this.ngbModal.open(AddModalContent);
        modalRef.componentInstance.showAdd = this.showAdd;
        // converts the current data to arrays to preserve order
        // if we don't do this, Angular decides to alphabetically sort the
        // object for literally no reason at all
        var text_val = Object.values(this.current['data']['textEntryData']);
        var select_val = Object.values(this.current['data']['selectableData']);
        modalRef.componentInstance.text_values = text_val;
        modalRef.componentInstance.selectValues = select_val;
        // current needs to be passed last so the other things are defined
        // when it gets there for the default function
        console.log(this.current);
        modalRef.componentInstance.current = this.current;
    };
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal',
            template: '<div></div>',
            styles: [__webpack_require__(/*! ./add-modal.component.css */ "./src/app/modal/add-modal.component.css")]
        }),
        __metadata("design:paramtypes", [_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header clearfix\">\n    <div class=\"title-header\">\n        <div class=\"title-left\">\n            <h3 *ngIf=\"current.name!='Instrument'\">Keck I Configuration Manager: {{current.name}}</h3>\n            <h3 *ngIf=\"current.name=='Instrument'\">Keck I Configuration Manager</h3>\n        </div>\n        <!-- <div class=\"title-right\">\n            <h4 class=\"program-notify\" [hidden]=\"current.progname=='Program'\" >Selected program: {{current.progname}}</h4>\n        </div>     -->\n    </div>\n\n    <nav>\n\n        <ul class=\"nav nav-pills pull-right\">\n\n            <li role=\"presentation\" class=\"active\">\n                <a href=\"https://www2.keck.hawaii.edu/\" target=\"_blank\" >Submit ToO Request</a>\n            </li>\n\n            <li role=\"presentation\" class=\"active\">\n                <a href=\"#\" [hidden]=\"current.name=='Instrument'\" (click)=\"doFileInput($event)\" *ngIf=\"inst_name!=='Instrument' && current.progname !== 'Program'\">\n                    <label id=\"state-label\" >Load State File</label>\n                </a>\n                <input type=\"file\" id=\"statefile\" (change)=\"onFileContentChange($event)\" accept=\".state\" />\n            </li>\n\n\n            <li role=\"presentation\" class=\"active\">\n                <a href=\"https://www2.keck.hawaii.edu/inst/{{current.name.toLowerCase()}}\" *ngIf=\"current.name!='Instrument'\" target=\"_blank\" >{{current.name}} Homepage</a>\n                <a href=\"https://www2.keck.hawaii.edu/inst/\" *ngIf=\"current.name=='Instrument'\" target=\"_blank\" >Instrument Homepage</a>\n            </li>\n\n            <!-- <li role=\"presentation\" class=\"active\">\n            <a href=\"#SelectButton\" data-toggle=\"modal\" (click)=\"showProgPopUp()\" >Select Program</a>\n        </li> -->\n\n        <li role=\"presentation\" class=\"active\">\n            <div class=\"aoyue-select animated zoomIn\" (mouseenter)=\"opt_show=true\" (mouseleave)=\"opt_show=false\">\n                <input type=\"radio\" name=\"option\">\n                <i class=\"toggle icon icon-arrow-down\"></i>\n                <span class=\"placeholder\">{{current.progname}}</span>\n                <div class=\"hidden-options\" [hidden]=\"!opt_show\">\n                    <label class=\"option\" *ngFor=\"let program of allowedPrograms\">\n                        <input type=\"radio\" name=\"option\" id=\"program-{{program}}\" [(ngModel)]=\"current.progname\" [value]=\"program\" (click)=\"swapProgram(program)\">\n                        <span class=\"title animated fadeIn\">{{program}}</span>\n                    </label>\n                </div>\n            </div>\n        </li>\n\n        <li role=\"presentation\" class=\"active\">\n            <div class=\"aoyue-select animated zoomIn\" (mouseenter)=\"show_opt=true\" (mouseleave)=\"show_opt=false\">\n                <input type=\"radio\" name=\"option\">\n                <i class=\"toggle icon icon-arrow-down\"></i>\n                <span class=\"placeholder\">{{current.name}}</span>\n                <div class=\"hidden-options\" [hidden]=\"!show_opt\">\n                    <label class=\"option\" *ngFor=\"let key of allowedInstruments\">\n                        <input type=\"radio\" name=\"option\" id=\"instrument-{{key}}\" [(ngModel)]=\"inst_name\" [value]=\"key\" (click)=\"swapInstrument(key)\" >\n                        <span class=\"title animated fadeIn\">{{key}}</span>\n                    </label>\n                    <label class=\"option\" >\n                        <input type=\"radio\" name=\"option\" id=\"instrument-OSIRIS\" href=\"\">\n                        <span class=\"title animated fadeIn\">OSIRIS</span>\n                    </label>\n                </div>\n            </div>\n        </li>\n\n        <li role=\"presentation\" class=\"active\" *ngIf=\"inst_name!=='Instrument' && current.progname !== 'Program'\">\n            <a href=\"#\" data-toggle=\"modal\" (click)=\"showAddPopUp()\" [hidden]=\"current.progname=='Program'\" >Add Configuration</a>\n        </li>\n\n    </ul>\n</nav>\n</div>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _communication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../communication.service */ "./src/app/communication.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal.service */ "./src/app/modal.service.ts");
/* harmony import */ var _json_instrumentConfData_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../json/instrumentConfData.json */ "./src/app/json/instrumentConfData.json");
var _json_instrumentConfData_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/Object.assign({}, _json_instrumentConfData_json__WEBPACK_IMPORTED_MODULE_4__, {"default": _json_instrumentConfData_json__WEBPACK_IMPORTED_MODULE_4__});
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var NavComponent = /** @class */ (function () {
    function NavComponent(http, sharedCurrent, modal, route) {
        this.http = http;
        this.sharedCurrent = sharedCurrent;
        this.modal = modal;
        this.route = route;
        this.current = { "name": "Instrument", "progname": "Program" };
    }
    NavComponent.prototype.getData = function () {
        return _json_instrumentConfData_json__WEBPACK_IMPORTED_MODULE_4___namespace;
    };
    NavComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var cookies;
            return __generator(this, function (_a) {
                this.data = this.getData();
                cookies = this.getCookieList();
                // let permissions = await this.http.generateAllowedProgramList(cookies["keckID"]);
                // // let permissions = {
                // //     "allowedPrograms":['U263'],
                // //     "allowedInstruments":['KCWI']
                // // };
                //
                // if (!permissions) {
                //     console.log("bad login")
                //     this.modal.show({
                //         "name":"login",
                //         "data":""
                //     })
                // }
                this.route.queryParams
                    .subscribe(function (params) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log("params", params);
                                if (!params) return [3 /*break*/, 6];
                                if (!params.program) return [3 /*break*/, 2];
                                this.url_program = params.program;
                                this.current.progname = this.url_program;
                                return [4 /*yield*/, this.swapProgram(this.url_program)];
                            case 1:
                                _a.sent();
                                _a.label = 2;
                            case 2:
                                if (!params.instrument) return [3 /*break*/, 4];
                                this.url_instrument = params.instrument;
                                this.current.name = this.url_instrument;
                                return [4 /*yield*/, this.swapInstrument(this.url_instrument)];
                            case 3:
                                _a.sent();
                                _a.label = 4;
                            case 4:
                                if (!params.id) return [3 /*break*/, 6];
                                if (!(params.instrument && params.program)) return [3 /*break*/, 6];
                                return [4 /*yield*/, this.modal.show({
                                        "name": "add",
                                        "data": {
                                            "current": this.current,
                                            "showAdd": false,
                                            "id": params.id
                                        }
                                    })];
                            case 5:
                                _a.sent();
                                _a.label = 6;
                            case 6: return [2 /*return*/];
                        }
                    });
                }); });
                this.show_opt, this.opt_show = false;
                this.inst_name = "Instrument";
                this.allowedPrograms = ['U263', 'U202', 'E001', 'U199', '_test'];
                this.allowedInstruments = ['KCWI', 'HIRES', 'LRIS', 'MOSFIRE'];
                this.sharedCurrent.set(this.current);
                this.subscription = this.sharedCurrent.currentMessage.subscribe(function (val) {
                    // console.log("nav got current-val from subscription", val);
                    if (val) {
                        if (_this.current != val) {
                            _this.current = val;
                            _this.showList();
                        }
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    NavComponent.prototype.setDataToResult = function (result) {
        this.current.configurations = result;
        this.sharedCurrent.set(this.current);
    };
    NavComponent.prototype.getCookieList = function () {
        var c = [];
        document.cookie.replace(/([^=;]+)=([^;]*)/gi, function (m, key, value) {
            c[key.replace(/(^\s+|\s+$)/g, '')] =
                value.replace(/(^\s+|\s+$)/g, '');
            return;
        });
        return c;
    };
    NavComponent.prototype.showList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.current.name !== "Instrument" && this.current.progname !== "Program")) return [3 /*break*/, 2];
                        this.current.data = this.data[this.current.name]["data"];
                        console.log("updating", this.current, this.data);
                        return [4 /*yield*/, this.http.showList(this.current)];
                    case 1:
                        response = _a.sent();
                        this.setDataToResult(response);
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    NavComponent.prototype.swapProgram = function (program) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(program);
                        this.current["progname"] = program;
                        console.log(program == this.current["progname"]);
                        if (!(program !== "Program")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.showList()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    NavComponent.prototype.swapInstrument = function (inst) {
        return __awaiter(this, void 0, void 0, function () {
            var prog;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(inst);
                        prog = this.current["progname"];
                        this.current = this.data[inst];
                        if (!(prog !== "Program")) return [3 /*break*/, 2];
                        this.current["progname"] = prog;
                        return [4 /*yield*/, this.showList()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    NavComponent.prototype.showAddPopUp = function () {
        this.current.info = new Object({});
        this.sharedCurrent.set(this.current);
        this.modal.show({
            "name": "add",
            "data": {
                "current": this.current,
                "showAdd": true
            }
        });
    };
    NavComponent.prototype.showEditPopup = function () {
        this.modal.show({
            "name": "add",
            "data": {
                "current": this.current,
                "showAdd": false
            }
        });
    };
    NavComponent.prototype.doFileInput = function (event) {
        event.preventDefault();
        var element = document.getElementById('statefile');
        element.click();
    };
    NavComponent.prototype.parseFile = function (file) {
        var reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = function (evt) {
            console.log('returned val');
            return evt.target.result;
        };
        reader.onerror = function (evt) {
            throw evt;
        };
        return "";
    };
    NavComponent.prototype.onFileContentChange = function (event) {
        var content = this.parseFile(event.target.files[0]);
        console.log(this.current);
        content.split('\n').forEach(function (entry) {
            console.log(entry);
            var mat = entry.match(/([\w_]+)\s*\=\s*([\w_,.]+)/);
            // console.log(mat);
            this.current.info[mat[1]] = mat[2];
        }, this);
        if (this.current.progname !== this.current.info.progname) {
            alert("Warning: state file uploaded for inactive program '" + this.current.info.progname + "'");
            // if (this.current.info.progname.toString() in this.allowedPrograms) {
            //     this.current.progname = this.current.info.progname;
            // }
            // else {
            //     // alert('nope')
            //     console.log(this.current.info.progname, this.allowedPrograms)
            // }
        }
        else {
            this.showEditPopup();
        }
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [_communication_service__WEBPACK_IMPORTED_MODULE_1__["CommunicationService"],
            _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/object-filter.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/object-filter.pipe.ts ***!
  \***************************************/
/*! exports provided: ObjectFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectFilterPipe", function() { return ObjectFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ObjectFilterPipe = /** @class */ (function () {
    function ObjectFilterPipe() {
    }
    ObjectFilterPipe.prototype.transform = function (value, args) {
        if (value) {
            var res = value;
            return res;
        }
    };
    ObjectFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'objectFilter'
        })
    ], ObjectFilterPipe);
    return ObjectFilterPipe;
}());



/***/ }),

/***/ "./src/app/table/table.component.css":
/*!*******************************************!*\
  !*** ./src/app/table/table.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/table/table.component.html":
/*!********************************************!*\
  !*** ./src/app/table/table.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- main panel with the list of configurations -->\n\n<div class=\"bs-example\" data-example-id=\"panel-without-body-with-table\">\n\n    <div class=\"table-controls\">\n        <table class=\"table table-striped table-hover\">\n            <tbody>\n                <tr class=\"confTable\" *ngFor=\"let id of configIDs; let i = index\" id=\"configurationRow-{{i + 1}}\">\n                    <td><span (click)=\"editConfiguration(id)\" class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\" title=\"Edit\"></span></td>\n                    <td><span (click)=\"duplicateConfiguration(id)\" class=\"glyphicon glyphicon-duplicate\" aria-hidden=\"true\" title=\"Duplicate\"></span></td>\n                    <td><span (click)=\"confirmDelete(id)\" class=\"glyphicon glyphicon-remove deleteButton\" aria-hidden=\"true\" title=\"Delete\"></span></td>\n                    <td><span (click)=\"saveConfiguration(id)\" class=\"glyphicon glyphicon-save saveButton\" aria-hidden=\"true\" title=\"Save\"></span></td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n\n    <div class=\"panel panel-primary panel-resizable config-panel\" >\n        <div class=\"panel-heading\">Configuration list</div>\n        <div class=\"table-responsive\">\n            <table class=\"table table-striped table-hover\">\n                <!-- <table class=\"pale-blue-rows\"> -->\n                <thead>\n                    <tr id=\"configurationTable\">\n                        <!-- <th colspan=\"4\"></th> -->\n                        <th>#</th>\n                        <th *ngFor=\"let heading of table_headings\" ><div class=\"prevent-wrap\">{{heading}}</div></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr class=\"confTable\" *ngFor=\"let configuration of configs; let i = index\" id=\"configurationRow-{{i + 1}}\">\n\n                        <!-- <td><span (click)=\"editConfiguration(configuration.id)\" class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\" title=\"Edit\"></span></td>\n                        <td><span (click)=\"duplicateConfiguration(configuration.id)\" class=\"glyphicon glyphicon-duplicate\" aria-hidden=\"true\" title=\"Duplicate\"></span></td>\n                        <td><span (click)=\"confirmDelete(configuration.id)\" class=\"glyphicon glyphicon-remove deleteButton\" aria-hidden=\"true\" title=\"Delete\"></span></td>\n                        <td><span (click)=\"saveConfiguration(configuration.id)\" class=\"glyphicon glyphicon-save saveButton\" aria-hidden=\"true\" title=\"Save\"></span></td> -->\n\n                        <td >{{i + 1}}</td>\n                        <td *ngFor=\"let val of configuration\">{{val}}</td>\n                        <!-- <td><span ng-if=\"current.name=='KCWI'\" (click)=\"current.editDetector(configuration.id)\" class=\"glyphicon glyphicon-camera\" aria-hidden=\"true\"></span></td>\n                        <td><span ng-if=\"current.name=='KCWI'\" (click)=\"current.editCalunit(configuration.id)\" class=\"glyphicon glyphicon-flash\" aria-hidden=\"true\"></span></td> -->\n\n                        <!-- <td><span style=\"cursor:pointer;color:#3c763d;\" (click)=\"confirmExecute(configuration.id,configuration.statenam)\"\n                        class=\"glyphicon glyphicon-play\" aria-hidden=\"true\"></span></td> -->\n\n                    </tr>\n\n\n\n                </tbody>\n            </table>\n        </div>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/table/table.component.ts":
/*!******************************************!*\
  !*** ./src/app/table/table.component.ts ***!
  \******************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _communication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../communication.service */ "./src/app/communication.service.ts");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal.service */ "./src/app/modal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var TableComponent = /** @class */ (function () {
    function TableComponent(http, sharedCurrent, modal) {
        this.http = http;
        this.sharedCurrent = sharedCurrent;
        this.modal = modal;
        this.table_headings = [];
        this.configs = [];
        this.configIDs = [];
    }
    TableComponent.prototype.ngOnInit = function () {
        // this.sharedCurrent.subscribe((val) => {
        //     this.current = val;
        //     this.table_headings = this.tableInit(this.current);
        // });
        var _this = this;
        this.subscription = this.sharedCurrent.currentMessage.subscribe(function (val) {
            // console.log("table got current-val from subscription", val);
            if (val) {
                _this.current = val;
                _a = _this.tableInit(val), _this.table_headings = _a[0], _this.configs = _a[1], _this.configIDs = _a[2];
            }
            var _a;
        });
    };
    TableComponent.prototype.tableInit = function (current) {
        // console.log(current, "from tableInit")
        var headers = [];
        if (current.configurations) {
            headers.push(current.data.textEntryData["statenam"].title);
            for (var v in current.configurations[0]) {
                if (current.data.selectableData.hasOwnProperty(v)) {
                    // console.log('selectable: ',.current.data.selectableData[v])
                    headers.push(current.data.selectableData[v].title);
                }
                else if (current.data.textEntryData.hasOwnProperty(v) && v != "statenam") {
                    // console.log('text entry: ', .current.data.textEntryData[v])
                    headers.push(current.data.textEntryData[v].title);
                }
                else {
                    if (v != "id" && v != "progname" && v != "statenam") {
                        headers.push(v);
                    }
                }
            }
            var goodConfigurations_1 = [];
            var configIDs_1 = [];
            current.configurations.forEach(function (v) {
                var lessEvilResponse = [];
                // Step 1. Get all the object keys.
                // let evilResponseProps = Object.values(v);
                // console.log(evilResponseProps);
                // Step 2. Create an empty array.
                // Step 3. Iterate throw all keys.
                // console.log("v:",v)
                lessEvilResponse.push(v["statenam"].toString());
                for (var key in v) {
                    // skip loop if the property is from prototype
                    if (!v.hasOwnProperty(key))
                        continue;
                    var obj = v[key];
                    // console.log("key:",key," obj:",obj)
                    if (key == "id") {
                        configIDs_1.push(obj);
                    }
                    else if (key != "progname" && key != "statenam") {
                        lessEvilResponse.push(obj.toString());
                    }
                }
                goodConfigurations_1.push(lessEvilResponse);
            });
            console.log("table init'd, ", headers, goodConfigurations_1);
            return [headers, goodConfigurations_1, configIDs_1];
        }
        return [[], []];
    };
    TableComponent.prototype.editConfiguration = function (id) {
        this.current.info.id = id;
        this.modal.show({
            "name": "add",
            "data": {
                "current": this.current,
                "showAdd": false,
                "id": id
            }
        });
    };
    TableComponent.prototype.duplicateConfiguration = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var duplicate_response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("duplicate", id);
                        this.current.info.id = id;
                        return [4 /*yield*/, this.http.duplicateConfiguration(this.current)];
                    case 1:
                        duplicate_response = _a.sent();
                        console.log(duplicate_response);
                        if (duplicate_response) {
                            this.current.configurations = duplicate_response;
                            this.sharedCurrent.set(this.current);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TableComponent.prototype.confirmDelete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var delete_repsonse;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("delete", id);
                        this.current.deleteConfigurationId = id;
                        return [4 /*yield*/, this.http.deleteConfiguration(this.current)];
                    case 1:
                        delete_repsonse = _a.sent();
                        console.log(delete_repsonse);
                        if (delete_repsonse) {
                            this.current.configurations = delete_repsonse;
                            this.sharedCurrent.set(this.current);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TableComponent.prototype.saveConfiguration = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        console.log("save", id);
                        this.current.info.id = id;
                        _b = (_a = console).log;
                        return [4 /*yield*/, this.http.saveConfiguration(this.current)];
                    case 1:
                        _b.apply(_a, [_c.sent()]);
                        return [2 /*return*/];
                }
            });
        });
    };
    TableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.css */ "./src/app/table/table.component.css")]
        }),
        __metadata("design:paramtypes", [_communication_service__WEBPACK_IMPORTED_MODULE_2__["CommunicationService"],
            _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _modal_service__WEBPACK_IMPORTED_MODULE_3__["ModalService"]])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/oliver/Documents/GitHub/AngularConfManager/AngularConfManager/frontend/AngularConfManager/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map