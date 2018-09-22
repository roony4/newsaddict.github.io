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
		var e = new Error("Cannot find module '" + req + "'");
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\r\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'news2';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _second_second_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./second/second.component */ "./src/app/second/second.component.ts");
/* harmony import */ var _first_first_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./first/first.component */ "./src/app/first/first.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/material.module */ "./src/app/core/material.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _thired_thired_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./thired/thired.component */ "./src/app/thired/thired.component.ts");
/* harmony import */ var _common_common_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/common.component */ "./src/app/common/common.component.ts");
/* harmony import */ var _bbcnews_bbcnews_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bbcnews/bbcnews.component */ "./src/app/bbcnews/bbcnews.component.ts");
/* harmony import */ var _cnnnews_cnnnews_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cnnnews/cnnnews.component */ "./src/app/cnnnews/cnnnews.component.ts");
/* harmony import */ var _dailymail_dailymail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dailymail/dailymail.component */ "./src/app/dailymail/dailymail.component.ts");
/* harmony import */ var _foxnews_foxnews_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./foxnews/foxnews.component */ "./src/app/foxnews/foxnews.component.ts");
/* harmony import */ var _medicalnews_medicalnews_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./medicalnews/medicalnews.component */ "./src/app/medicalnews/medicalnews.component.ts");
/* harmony import */ var _mirrornews_mirrornews_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mirrornews/mirrornews.component */ "./src/app/mirrornews/mirrornews.component.ts");
/* harmony import */ var _mtvnews_mtvnews_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mtvnews/mtvnews.component */ "./src/app/mtvnews/mtvnews.component.ts");
/* harmony import */ var _news24_news24_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./news24/news24.component */ "./src/app/news24/news24.component.ts");
/* harmony import */ var _newscientist_newscientist_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./newscientist/newscientist.component */ "./src/app/newscientist/newscientist.component.ts");
/* harmony import */ var _techcrunch_techcrunch_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./techcrunch/techcrunch.component */ "./src/app/techcrunch/techcrunch.component.ts");
/* harmony import */ var _espn_espn_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./espn/espn.component */ "./src/app/espn/espn.component.ts");
/* harmony import */ var _espncricinfo_espncricinfo_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./espncricinfo/espncricinfo.component */ "./src/app/espncricinfo/espncricinfo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var appRoutes = [
    { path: '', component: _first_first_component__WEBPACK_IMPORTED_MODULE_6__["FirstComponent"], data: { title: 'First Component' } },
    { path: 'first', component: _first_first_component__WEBPACK_IMPORTED_MODULE_6__["FirstComponent"], data: { title: 'First Component' } },
    { path: 'second', component: _second_second_component__WEBPACK_IMPORTED_MODULE_5__["SecondComponent"], data: { title: 'Second Component' } },
    { path: 'thired', component: _thired_thired_component__WEBPACK_IMPORTED_MODULE_10__["ThiredComponent"], data: { title: 'thired Component' } },
    { path: 'bbcnews', component: _bbcnews_bbcnews_component__WEBPACK_IMPORTED_MODULE_12__["BbcnewsComponent"], data: { title: 'bbcnews Component' } },
    { path: 'cnnnews', component: _cnnnews_cnnnews_component__WEBPACK_IMPORTED_MODULE_13__["CnnnewsComponent"], data: { title: 'cnnnews Component' } },
    { path: 'dailymail', component: _dailymail_dailymail_component__WEBPACK_IMPORTED_MODULE_14__["DailymailComponent"], data: { title: 'dailymail Component' } },
    { path: 'foxnews', component: _foxnews_foxnews_component__WEBPACK_IMPORTED_MODULE_15__["FoxnewsComponent"], data: { title: 'foxnews Component' } },
    { path: 'medicalnews', component: _medicalnews_medicalnews_component__WEBPACK_IMPORTED_MODULE_16__["MedicalnewsComponent"], data: { title: 'medical Component' } },
    { path: 'mirrornews', component: _mirrornews_mirrornews_component__WEBPACK_IMPORTED_MODULE_17__["MirrornewsComponent"], data: { title: 'mirrornews Component' } },
    { path: 'mtvnews', component: _mtvnews_mtvnews_component__WEBPACK_IMPORTED_MODULE_18__["MtvnewsComponent"], data: { title: 'mtvnews Component' } },
    { path: 'news24', component: _news24_news24_component__WEBPACK_IMPORTED_MODULE_19__["News24Component"], data: { title: 'news24 Component' } },
    { path: 'newscientist', component: _newscientist_newscientist_component__WEBPACK_IMPORTED_MODULE_20__["NewscientistComponent"], data: { title: 'newscientist Component' } },
    { path: 'techcrunch', component: _techcrunch_techcrunch_component__WEBPACK_IMPORTED_MODULE_21__["TechcrunchComponent"], data: { title: 'techcrunch Component' } },
    { path: 'espn', component: _espn_espn_component__WEBPACK_IMPORTED_MODULE_22__["EspnComponent"], data: { title: 'espn Component' } },
    { path: 'espncricinfo', component: _espncricinfo_espncricinfo_component__WEBPACK_IMPORTED_MODULE_23__["EspncricinfoComponent"], data: { title: 'espncricinfo Component' } }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"],
                _second_second_component__WEBPACK_IMPORTED_MODULE_5__["SecondComponent"],
                _first_first_component__WEBPACK_IMPORTED_MODULE_6__["FirstComponent"],
                _thired_thired_component__WEBPACK_IMPORTED_MODULE_10__["ThiredComponent"],
                _common_common_component__WEBPACK_IMPORTED_MODULE_11__["CommonComponent"],
                _bbcnews_bbcnews_component__WEBPACK_IMPORTED_MODULE_12__["BbcnewsComponent"],
                _cnnnews_cnnnews_component__WEBPACK_IMPORTED_MODULE_13__["CnnnewsComponent"],
                _dailymail_dailymail_component__WEBPACK_IMPORTED_MODULE_14__["DailymailComponent"],
                _foxnews_foxnews_component__WEBPACK_IMPORTED_MODULE_15__["FoxnewsComponent"],
                _medicalnews_medicalnews_component__WEBPACK_IMPORTED_MODULE_16__["MedicalnewsComponent"],
                _mirrornews_mirrornews_component__WEBPACK_IMPORTED_MODULE_17__["MirrornewsComponent"],
                _mtvnews_mtvnews_component__WEBPACK_IMPORTED_MODULE_18__["MtvnewsComponent"],
                _news24_news24_component__WEBPACK_IMPORTED_MODULE_19__["News24Component"],
                _newscientist_newscientist_component__WEBPACK_IMPORTED_MODULE_20__["NewscientistComponent"],
                _techcrunch_techcrunch_component__WEBPACK_IMPORTED_MODULE_21__["TechcrunchComponent"],
                _espn_espn_component__WEBPACK_IMPORTED_MODULE_22__["EspnComponent"],
                _espncricinfo_espncricinfo_component__WEBPACK_IMPORTED_MODULE_23__["EspncricinfoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(appRoutes, { useHash: true }),
                _core_material_module__WEBPACK_IMPORTED_MODULE_8__["CustomMaterialModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bbcnews/bbcnews.component.css":
/*!***********************************************!*\
  !*** ./src/app/bbcnews/bbcnews.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n    margin-left:2px;\r\n    margin-top: 5px;\r\n  }\r\n  \r\n  .wrapper {\r\n  display: flex;\r\n  border-left: 6px solid #d67405;\r\n  background-color:rgb(231, 231, 231);\r\n  }\r\n  \r\n  .btn{\r\n  background-color: #d67405;\r\n  }"

/***/ }),

/***/ "./src/app/bbcnews/bbcnews.component.html":
/*!************************************************!*\
  !*** ./src/app/bbcnews/bbcnews.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"response\">\n  <div class='wrapper' *ngFor=\"let t of response.articles;let i = index\">\n      <div class='img-wrapper' [hidden]=\"hideme[i]\">\n          <img src='{{t.urlToImage}}' />\n      </div>\n      <div class='text-wrapper'>\n          <h2>{{t.title}}</h2>\n          <h5>{{t.description}}</h5>\n          <div [hidden]=\"!hideme[i]\">\n              <div class='imge'><img src='{{t.urlToImage}}' height=\"400px\" width=\"650px\" class=\"responsive\" alt=\"ABC News\"/></div><br>\n              <h5>{{t.content}}</h5><br>\n              <h5><strong>Auther: </strong>{{t.author}}</h5>\n              <h5><strong>Publish Date:</strong>{{t.publishedAt}}</h5>\n              <a href=\"{{t.url}}\"><h5>Source</h5></a>\n          </div>\n          <button type=\"button\" [hidden]=\"hideme[i]\" (click)=\"hideme[i] = !hideme[i]\" class=\"btn\">Showmore</button>\n          <button [hidden]=\"!hideme[i]\" type=\"button\" (click)=\"hideme[i] = !hideme[i]\" class=\"btn\">Showless</button>\n      </div>\n  </div>"

/***/ }),

/***/ "./src/app/bbcnews/bbcnews.component.ts":
/*!**********************************************!*\
  !*** ./src/app/bbcnews/bbcnews.component.ts ***!
  \**********************************************/
/*! exports provided: BbcnewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BbcnewsComponent", function() { return BbcnewsComponent; });
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


var BbcnewsComponent = /** @class */ (function () {
    function BbcnewsComponent(http) {
        this.http = http;
        this.hideme = [];
    }
    BbcnewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=df408c7f56bc4bfb8c2903fe15add076').subscribe(function (response) {
            _this.response = response;
            var x = _this.response.totalResults;
            var title;
            var description;
            var urlToImage;
            var content;
            var author;
            var publishedAt;
            var url;
            for (var i = 0; i < x; i++) {
                title = _this.response.articles[i].title;
                description = _this.response.articles[i].description;
                urlToImage = _this.response.articles[i].urlToImage;
                content = _this.response.articles[i].content;
                author = _this.response.articles[i].author;
                publishedAt = _this.response.articles[i].publishedAt;
                url = _this.response.articles[i].url;
            }
        });
    };
    BbcnewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bbcnews',
            template: __webpack_require__(/*! ./bbcnews.component.html */ "./src/app/bbcnews/bbcnews.component.html"),
            styles: [__webpack_require__(/*! ./bbcnews.component.css */ "./src/app/bbcnews/bbcnews.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BbcnewsComponent);
    return BbcnewsComponent;
}());



/***/ }),

/***/ "./src/app/cnnnews/cnnnews.component.css":
/*!***********************************************!*\
  !*** ./src/app/cnnnews/cnnnews.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n    margin-left:2px;\r\n    margin-top: 5px;\r\n  }\r\n  \r\n  .wrapper {\r\n  display: flex;\r\n  border-left: 6px solid #2ed9f7;\r\n  background-color:rgb(231, 231, 231);\r\n  }\r\n  \r\n  .btn{\r\n  background-color: #2ed9f7;\r\n  }"

/***/ }),

/***/ "./src/app/cnnnews/cnnnews.component.html":
/*!************************************************!*\
  !*** ./src/app/cnnnews/cnnnews.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"response\">\n  <div class='wrapper' *ngFor=\"let t of response.articles;let i = index\">\n      <div class='img-wrapper' [hidden]=\"hideme[i]\">\n          <img src='{{t.urlToImage}}' />\n      </div>\n      <div class='text-wrapper'>\n          <h2>{{t.title}}</h2>\n          <h5>{{t.description}}</h5>\n          <div [hidden]=\"!hideme[i]\">\n              <div class='imge'><img src='{{t.urlToImage}}' height=\"400px\" width=\"650px\" class=\"responsive\" alt=\"ABC News\"/></div><br>\n              <h5>{{t.content}}</h5><br>\n              <h5><strong>Auther: </strong>{{t.author}}</h5>\n              <h5><strong>Publish Date:</strong>{{t.publishedAt}}</h5>\n              <a href=\"{{t.url}}\"><h5>Source</h5></a>\n          </div>\n          <button type=\"button\" [hidden]=\"hideme[i]\" (click)=\"hideme[i] = !hideme[i]\" class=\"btn\">Show more</button>\n          <button [hidden]=\"!hideme[i]\" type=\"button\" (click)=\"hideme[i] = !hideme[i]\" class=\"btn\">Show less</button>\n      </div>\n  </div>"

/***/ }),

/***/ "./src/app/cnnnews/cnnnews.component.ts":
/*!**********************************************!*\
  !*** ./src/app/cnnnews/cnnnews.component.ts ***!
  \**********************************************/
/*! exports provided: CnnnewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CnnnewsComponent", function() { return CnnnewsComponent; });
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


var CnnnewsComponent = /** @class */ (function () {
    function CnnnewsComponent(http) {
        this.http = http;
        this.hideme = [];
    }
    CnnnewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=df408c7f56bc4bfb8c2903fe15add076').subscribe(function (response) {
            _this.response = response;
            var x = _this.response.totalResults;
            var title;
            var description;
            var urlToImage;
            var content;
            var author;
            var publishedAt;
            var url;
            for (var i = 0; i < x; i++) {
                title = _this.response.articles[i].title;
                description = _this.response.articles[i].description;
                urlToImage = _this.response.articles[i].urlToImage;
                content = _this.response.articles[i].content;
                author = _this.response.articles[i].author;
                publishedAt = _this.response.articles[i].publishedAt;
                url = _this.response.articles[i].url;
            }
        });
    };
    CnnnewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cnnnews',
            template: __webpack_require__(/*! ./cnnnews.component.html */ "./src/app/cnnnews/cnnnews.component.html"),
            styles: [__webpack_require__(/*! ./cnnnews.component.css */ "./src/app/cnnnews/cnnnews.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CnnnewsComponent);
    return CnnnewsComponent;
}());



/***/ }),

/***/ "./src/app/common/common.component.css":
/*!*********************************************!*\
  !*** ./src/app/common/common.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/common/common.component.html":
/*!**********************************************!*\
  !*** ./src/app/common/common.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/common/common.component.ts":
/*!********************************************!*\
  !*** ./src/app/common/common.component.ts ***!
  \********************************************/
/*! exports provided: CommonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonComponent", function() { return CommonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommonComponent = /** @class */ (function () {
    function CommonComponent() {
    }
    CommonComponent.prototype.ngOnInit = function () {
    };
    CommonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-common',
            template: __webpack_require__(/*! ./common.component.html */ "./src/app/common/common.component.html"),
            styles: [__webpack_require__(/*! ./common.component.css */ "./src/app/common/common.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CommonComponent);
    return CommonComponent;
}());



/***/ }),

/***/ "./src/app/core/material.module.ts":
/*!*****************************************!*\
  !*** ./src/app/core/material.module.ts ***!
  \*****************************************/
/*! exports provided: CustomMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMaterialModule", function() { return CustomMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CustomMaterialModule = /** @class */ (function () {
    function CustomMaterialModule() {
    }
    CustomMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"]],
            exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"]],
        })
    ], CustomMaterialModule);
    return CustomMaterialModule;
}());



/***/ }),

/***/ "./src/app/dailymail/dailymail.component.css":
/*!***************************************************!*\
  !*** ./src/app/dailymail/dailymail.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n    margin-left:2px;\r\n    margin-top: 5px;\r\n  }\r\n  \r\n  .wrapper {\r\n  display: flex;\r\n  border-left: 6px solid #eb1088;\r\n  background-color:rgb(231, 231, 231);\r\n  }\r\n  \r\n  .btn{\r\n  background-color: #eb1088;\r\n  }"

/***/ }),

/***/ "./src/app/dailymail/dailymail.component.html":
/*!****************************************************!*\
  !*** ./src/app/dailymail/dailymail.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"response\">\n  <div class='wrapper' *ngFor=\"let t of response.articles;let i = index\">\n      <div class='img-wrapper' [hidden]=\"hideme[i]\">\n          <img src='{{t.urlToImage}}' />\n      </div>\n      <div class='text-wrapper'>\n          <h2>{{t.title}}</h2>\n          <h5>{{t.description}}</h5>\n          <div [hidden]=\"!hideme[i]\">\n              <div class='imge'><img src='{{t.urlToImage}}' height=\"400px\" width=\"650px\" class=\"responsive\" alt=\"ABC News\"/></div><br>\n              <h5>{{t.content}}</h5><br>\n              <h5><strong>Auther: </strong>{{t.author}}</h5>\n              <h5><strong>Publish Date:</strong>{{t.publishedAt}}</h5>\n              <a href=\"{{t.url}}\"><h5>Source</h5></a>\n          </div>\n          <button type=\"button\" [hidden]=\"hideme[i]\" (click)=\"hideme[i] = !hideme[i]\" class=\"btn\">Showmore</button>\n          <button [hidden]=\"!hideme[i]\" type=\"button\" (click)=\"hideme[i] = !hideme[i]\" class=\"btn\">Showless</button>\n      </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/dailymail/dailymail.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dailymail/dailymail.component.ts ***!
  \**************************************************/
/*! exports provided: DailymailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DailymailComponent", function() { return DailymailComponent; });
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


var DailymailComponent = /** @class */ (function () {
    function DailymailComponent(http) {
        this.http = http;
        this.hideme = [];
    }
    DailymailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('https://newsapi.org/v2/top-headlines?sources=daily-mail&apiKey=df408c7f56bc4bfb8c2903fe15add076').subscribe(function (response) {
            _this.response = response;
            var x = _this.response.totalResults;
            var title;
            var description;
            var urlToImage;
            var content;
            var author;
            var publishedAt;
            var url;
            for (var i = 0; i < x; i++) {
                title = _this.response.articles[i].title;
                description = _this.response.articles[i].description;
                urlToImage = _this.response.articles[i].urlToImage;
                content = _this.response.articles[i].content;
                author = _this.response.articles[i].author;
                publishedAt = _this.response.articles[i].publishedAt;
                url = _this.response.articles[i].url;
            }
        });
    };
    DailymailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dailymail',
            template: __webpack_require__(/*! ./dailymail.component.html */ "./src/app/dailymail/dailymail.component.html"),
            styles: [__webpack_require__(/*! ./dailymail.component.css */ "./src/app/dailymail/dailymail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DailymailComponent);
    return DailymailComponent;
}());



/***/ }),

/***/ "./src/app/espn/espn.component.css":
/*!*****************************************!*\
  !*** ./src/app/espn/espn.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n    margin-left:2px;\r\n    margin-top: 5px;\r\n  }\r\n  \r\n  .wrapper {\r\n  display: flex;\r\n  border-left: 6px solid #f51c88;\r\n  background-color:rgb(231, 231, 231);\r\n  }\r\n  \r\n  .btn{\r\n  background-color: #f51c88;\r\n  color: aliceblue\r\n  }"

/***/ }),

/***/ "./src/app/espn/espn.component.html":
/*!******************************************!*\
  !*** ./src/app/espn/espn.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"response\">\n  <div class='wrapper' *ngFor=\"let t of response.articles;let i = index\">\n      <div class='img-wrapper' [hidden]=\"hideme[i]\">\n          <img src='{{t.urlToImage}}' />\n      </div>\n      <div class='text-wrapper'>\n          <h2>{{t.title}}</h2>\n          <h5>{{t.description}}</h5>\n          <div [hidden]=\"!hideme[i]\">\n              <div class='imge'><img src='{{t.urlToImage}}' height=\"400px\" width=\"650px\" class=\"responsive\" alt=\"ABC News\"/></div><br>\n              <h5>{{t.content}}</h5><br>\n              <h5><strong>Auther: </strong>{{t.author}}</h5>\n              <h5><strong>Publish Date:</strong>{{t.publishedAt}}</h5>\n              <a href=\"{{t.url}}\"><h5>Source</h5></a>\n          </div>\n          <button type=\"button\" [hidden]=\"hideme[i]\" (click)=\"hideme[i] = !hideme[i]\" class=\"btn\">Show more</button>\n          <button [hidden]=\"!hideme[i]\" type=\"button\" (click)=\"hideme[i] = !hideme[i]\" class=\"btn\">Show less</button>\n      </div>\n  </div>"

/***/ }),

/***/ "./src/app/espn/espn.component.ts":
/*!****************************************!*\
  !*** ./src/app/espn/espn.component.ts ***!
  \****************************************/
/*! exports provided: EspnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EspnComponent", function() { return EspnComponent; });
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


var EspnComponent = /** @class */ (function () {
    function EspnComponent(http) {
        this.http = http;
        this.hideme = [];
    }
    EspnComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('https://newsapi.org/v2/top-headlines?sources=espn&apiKey=df408c7f56bc4bfb8c2903fe15add076').subscribe(function (response) {
            _this.response = response;
            var x = _this.response.totalResults;
            var title;
            var description;
            var urlToImage;
            var content;
            var author;
            var publishedAt;
            var url;
            for (var i = 0; i < x; i++) {
                title = _this.response.articles[i].title;
                description = _this.response.articles[i].description;
                urlToImage = _this.response.articles[i].urlToImage;
                content = _this.response.articles[i].content;
                author = _this.response.articles[i].author;
                publishedAt = _this.response.articles[i].publishedAt;
                url = _this.response.articles[i].url;
            }
        });
    };
    EspnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-espn',
            template: __webpack_require__(/*! ./espn.component.html */ "./src/app/espn/espn.component.html"),
            styles: [__webpack_require__(/*! ./espn.component.css */ "./src/app/espn/espn.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EspnComponent);
    return EspnComponent;
}());



/***/ }),

/***/ "./src/app/espncricinfo/espncricinfo.component.css":
/*!*********************************************************!*\
  !*** ./src/app/espncricinfo/espncricinfo.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n    margin-left:2px;\r\n    margin-top: 5px;\r\n  }\r\n  \r\n  .wrapper {\r\n  display: flex;\r\n  border-left: 6px solid #23fd52;\r\n  background-color:rgb(231, 231, 231);\r\n  }\r\n  \r\n  .btn{\r\n  background-color: #23fd52;\r\n  color: aliceblue\r\n  }"

/***/ }),

/***/ "./src/app/espncricinfo/espncricinfo.component.html":
/*!**********************************************************!*\
  !*** ./src/app/espncricinfo/espncricinfo.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"response\">\n  <div class='wrapper' *ngFor=\"let t of response.articles;let i = index\">\n      <div class='img-wrapper' [hidden]=\"hideme[i]\">\n          <img src='{{t.urlToImage}}' />\n      </div>\n      <div class='text-wrapper'>\n          <h2>{{t.title}}</h2>\n          <h5>{{t.description}}</h5>\n          <div [hidden]=\"!hideme[i]\">\n              <div class='imge'><img src='{{t.urlToImage}}' height=\"400px\" width=\"650px\" class=\"responsive\" alt=\"ABC News\"/></div><br>\n              <h5>{{t.content}}</h5><br>\n              <h5><strong>Auther: </strong>{{t.author}}</h5>\n              <h5><strong>Publish Date:</strong>{{t.publishedAt}}</h5>\n              <a href=\"{{t.url}}\"><h5>Source</h5></a>\n          </div>\n          <button type=\"button\" [hidden]=\"hideme[i]\" (click)=\"hideme[i] = !hideme[i]\" class=\"btn\">Show more</button>\n          <button [hidden]=\"!hideme[i]\" type=\"button\" (click)=\"hideme[i] = !hideme[i]\" class=\"btn\">Show less</button>\n      </div>\n  </div>"

/***/ }),

/***/ "./src/app/espncricinfo/espncricinfo.component.ts":
/*!********************************************************!*\
  !*** ./src/app/espncricinfo/espncricinfo.component.ts ***!
  \********************************************************/
/*! exports provided: EspncricinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EspncricinfoComponent", function() { return EspncricinfoComponent; });
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


var EspncricinfoComponent = /** @class */ (function () {
    function EspncricinfoComponent(http) {
        this.http = http;
        this.hideme = [];
    }
    EspncricinfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('https://newsapi.org/v2/top-headlines?sources=espn-cric-info&apiKey=df408c7f56bc4bfb8c2903fe15add076').subscribe(function (response) {
            _this.response = response;
            var x = _this.response.totalResults;
            var title;
            var description;
            var urlToImage;
            var content;
            var author;
            var publishedAt;
            var url;
            for (var i = 0; i < x; i++) {
                title = _this.response.articles[i].title;
                description = _this.response.articles[i].description;
                urlToImage = _this.response.articles[i].urlToImage;
                content = _this.response.articles[i].content;
                author = _this.response.articles[i].author;
                publishedAt = _this.response.articles[i].publishedAt;
                url = _this.response.articles[i].url;
            }
        });
    };
    EspncricinfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-espncricinfo',
            template: __webpack_require__(/*! ./espncricinfo.component.html */ "./src/app/espncricinfo/espncricinfo.component.html"),
            styles: [__webpack_require__(/*! ./espncricinfo.component.css */ "./src/app/espncricinfo/espncricinfo.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EspncricinfoComponent);
    return EspncricinfoComponent;
}());



/***/ }),

/***/ "./src/app/first/first.component.css":
/*!*******************************************!*\
  !*** ./src/app/first/first.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n  margin-left:2px;\r\n  margin-top: 5px;\r\n}\r\n\r\n.wrapper {\r\ndisplay: flex;\r\nborder-left: 6px solid #be0707;\r\nbackground-color:rgb(231, 231, 231);\r\n}\r\n\r\n.btn{\r\nbackground-color: #be0707;\r\n}"

/***/ }),

/***/ "./src/app/first/first.component.html":
/*!********************************************!*\
  !*** ./src/app/first/first.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"response\">\n    <div class='wrapper' *ngFor=\"let t of response.articles;let i = index\">\n        <div class='img-wrapper' [hidden]=\"hideme[i]\">\n            <img src='{{t.urlToImage}}' />\n        </div>\n        <div class='text-wrapper'>\n            <h2>{{t.title}}</h2>\n            <h5>{{t.description}}</h5>\n            <div [hidden]=\"!hideme[i]\">\n                <div class='imge'><img src='{{t.urlToImage}}' height=\"400px\" width=\"650px\" class=\"responsive\" alt=\"ABC News\"/></div><br>\n                <h5>{{t.content}}</h5><br>\n                <h5><strong>Auther: </strong>{{t.author}}</h5>\n                <h5><strong>Publish Date:</strong>{{t.publishedAt}}</h5>\n                <a href=\"{{t.url}}\"><h5>Source</h5></a>\n            </div>\n            <button type=\"button\" [hidden]=\"hideme[i]\" (click)=\"hideme[i] = !hideme[i]\" class=\"btn\">Showmore</button>\n            <button [hidden]=\"!hideme[i]\" type=\"button\" (click)=\"hideme[i] = !hideme[i]\" class=\"btn\">Showless</button>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/first/first.component.ts":
/*!******************************************!*\
  !*** ./src/app/first/first.component.ts ***!
  \******************************************/
/*! exports provided: FirstComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstComponent", function() { return FirstComponent; });
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


var FirstComponent = /** @class */ (function () {
    function FirstComponent(http) {
        this.http = http;
        this.hideme = [];
    }
    FirstComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=df408c7f56bc4bfb8c2903fe15add076').subscribe(function (response) {
            _this.response = response;
            var x = _this.response.totalResults;
            var title;
            var description;
            var urlToImage;
            var content;
            var author;
            var publishedAt;
            var url;
            for (var i = 0; i < x; i++) {
                title = _this.response.articles[i].title;
                description = _this.response.articles[i].description;
                urlToImage = _this.response.articles[i].urlToImage;
                content = _this.response.articles[i].content;
                author = _this.response.articles[i].author;
                publishedAt = _this.response.articles[i].publishedAt;
                url = _this.response.articles[i].url;
            }
        });
    };
    FirstComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-first',
            template: __webpack_require__(/*! ./first.component.html */ "./src/app/first/first.component.html"),
            styles: [__webpack_require__(/*! ./first.component.css */ "./src/app/first/first.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FirstComponent);
    return FirstComponent;
}());



/***/ }),

/***/ "./src/app/foxnews/foxnews.component.css":
/*!***********************************************!*\
  !*** ./src/app/foxnews/foxnews.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n    margin-left:2px;\r\n    margin-top: 5px;\r\n  }\r\n  \r\n  .wrapper {\r\n  display: flex;\r\n  border-left: 6px solid #eeff02;\r\n  background-color:rgb(231, 231, 231);\r\n  }\r\n  \r\n  .btn{\r\n  background-color: #eeff02;\r\n  }"

/***/ }),

/***/ "./src/app/foxnews/foxnews.component.html":
/*!************************************************!*\
  !*** ./src/app/foxnews/foxnews.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"response\">\n  <div class='wrapper' *ngFor=\"let t of response.articles;let i = index\">\n      <div class='img-wrapper' [hidden]=\"hideme[i]\">\n          <img src='{{t.urlToImage}}' />\n      </div>\n      <div class='text-wrapper'>\n          <h2>{{t.title}}</h2>\n          <h5>{{t.description}}</h5>\n          <div [hidden]=\"!hideme[i]\">\n              <div class='imge'><img src='{{t.urlToImage}}' height=\"400px\" width=\"650px\" class=\"responsive\" alt=\"ABC News\"/></div><br>\n              <h5>{{t.content}}</h5><br>\n              <h5><strong>Auther: </strong>{{t.author}}</h5>\n              <h5><strong>Publish Date:</strong>{{t.publishedAt}}</h5>\n              <a href=\"{{t.url}}\"><h5>Source</h5></a>\n          </div>\n          <button type=\"button\" [hidden]=\"hideme[i]\" (click)=\"hideme[i] = !hideme[i]\" class=\"btn\">Showmore</button>\n          <button [hidden]=\"!hideme[i]\" type=\"button\" (click)=\"hideme[i] = !hideme[i]\" class=\"btn\">Showless</button>\n      </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/foxnews/foxnews.component.ts":
/*!**********************************************!*\
  !*** ./src/app/foxnews/foxnews.component.ts ***!
  \**********************************************/
/*! exports provided: FoxnewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoxnewsComponent", function() { return FoxnewsComponent; });
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


var FoxnewsComponent = /** @class */ (function () {
    function FoxnewsComponent(http) {
        this.http = http;
        this.hideme = [];
    }
    FoxnewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('https://newsapi.org/v2/top-headlines?sources=fox-news&apiKey=df408c7f56bc4bfb8c2903fe15add076').subscribe(function (response) {
            _this.response = response;
            var x = _this.response.totalResults;
            var title;
            var description;
            var urlToImage;
            var content;
            var author;
            var publishedAt;
            var url;
            for (var i = 0; i < x; i++) {
                title = _this.response.articles[i].title;
                description = _this.response.articles[i].description;
                urlToImage = _this.response.articles[i].urlToImage;
                content = _this.response.articles[i].content;
                author = _this.response.articles[i].author;
                publishedAt = _this.response.articles[i].publishedAt;
                url = _this.response.articles[i].url;
            }
        });
    };
    FoxnewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-foxnews',
            template: __webpack_require__(/*! ./foxnews.component.html */ "./src/app/foxnews/foxnews.component.html"),
            styles: [__webpack_require__(/*! ./foxnews.component.css */ "./src/app/foxnews/foxnews.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FoxnewsComponent);
    return FoxnewsComponent;
}());



/***/ }),

/***/ "./src/app/medicalnews/medicalnews.component.css":
/*!*******************************************************!*\
  !*** ./src/app/medicalnews/medicalnews.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n    margin-left:2px;\r\n    margin-top: 5px;\r\n  }\r\n  \r\n  .wrapper {\r\n  display: flex;\r\n  border-left: 6px solid #ff03ab;\r\n  background-color:rgb(231, 231, 231);\r\n  }\r\n  \r\n  .btn{\r\n  background-color: #ff03ab;\r\n  }"

/***/ }),

/***/ "./src/app/medicalnews/medicalnews.component.html":
/*!********************************************************!*\
  !*** ./src/app/medicalnews/medicalnews.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"response\">\n  <div class='wrapper' *ngFor=\"let t of response.articles;let i = index\">\n      <div class='img-wrapper' [hidden]=\"hideme[i]\">\n          <img src='{{t.urlToImage}}' />\n      </div>\n      <div class='text-wrapper'>\n          <h2>{{t.title}}</h2>\n          <h5>{{t.description}}</h5>\n          <div [hidden]=\"!hideme[i]\">\n              <div class='imge'><img src='{{t.urlToImage}}' height=\"400px\" width=\"650px\" class=\"responsive\" alt=\"ABC News\"/></div><br>\n              <h5>{{t.content}}</h5><br>\n              <h5><strong>Auther: </strong>{{t.author}}</h5>\n              <h5><strong>Publish Date:</strong>{{t.publishedAt}}</h5>\n              <a href=\"{{t.url}}\"><h5>Source</h5></a>\n          </div>\n          <button type=\"button\" [hidden]=\"hideme[i]\" (click)=\"hideme[i] = !hideme[i]\" class=\"btn\">Showmore</button>\n          <button [hidden]=\"!hideme[i]\" type=\"button\" (click)=\"hideme[i] = !hideme[i]\" class=\"btn\">Showless</button>\n      </div>\n  </div>"

/***/ }),

/***/ "./src/app/medicalnews/medicalnews.component.ts":
/*!******************************************************!*\
  !*** ./src/app/medicalnews/medicalnews.component.ts ***!
  \******************************************************/
/*! exports provided: MedicalnewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalnewsComponent", function() { return MedicalnewsComponent; });
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


var MedicalnewsComponent = /** @class */ (function () {
    function MedicalnewsComponent(http) {
        this.http = http;
        this.hideme = [];
    }
    MedicalnewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('https://newsapi.org/v2/top-headlines?sources=medical-news-today&apiKey=df408c7f56bc4bfb8c2903fe15add076').subscribe(function (response) {
            _this.response = response;
            var x = _this.response.totalResults;
            var title;
            var description;
            var urlToImage;
            var content;
            var author;
            var publishedAt;
            var url;
            for (var i = 0; i < x; i++) {
                title = _this.response.articles[i].title;
                description = _this.response.articles[i].description;
                urlToImage = _this.response.articles[i].urlToImage;
                content = _this.response.articles[i].content;
                author = _this.response.articles[i].author;
                publishedAt = _this.response.articles[i].publishedAt;
                url = _this.response.articles[i].url;
            }
        });
    };
    MedicalnewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-medicalnews',
            template: __webpack_require__(/*! ./medicalnews.component.html */ "./src/app/medicalnews/medicalnews.component.html"),
            styles: [__webpack_require__(/*! ./medicalnews.component.css */ "./src/app/medicalnews/medicalnews.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MedicalnewsComponent);
    return MedicalnewsComponent;
}());



/***/ }),

/***/ "./src/app/mirrornews/mirrornews.component.css":
/*!*****************************************************!*\
  !*** ./src/app/mirrornews/mirrornews.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n    margin-left:2px;\r\n    margin-top: 5px;\r\n  }\r\n  \r\n  .wrapper {\r\n  display: flex;\r\n  border-left: 6px solid #aa059c;\r\n  background-color:rgb(231, 231, 231);\r\n  }\r\n  \r\n  .btn{\r\n  background-color: #aa059c;\r\n  }"

/***/ }),

/***/ "./src/app/mirrornews/mirrornews.component.html":
/*!******************************************************!*\
  !*** ./src/app/mirrornews/mirrornews.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"response\">\n  <div class='wrapper' *ngFor=\"let t of response.articles;let i = index\">\n      <div class='img-wrapper' [hidden]=\"hideme[i]\">\n          <img src='{{t.urlToImage}}' />\n      </div>\n      <div class='text-wrapper'>\n          <h2>{{t.title}}</h2>\n          <h5>{{t.description}}</h5>\n          <div [hidden]=\"!hideme[i]\">\n              <div class='imge'><img src='{{t.urlToImage}}' height=\"400px\" width=\"650px\" class=\"responsive\" alt=\"ABC News\"/></div><br>\n              <h5>{{t.content}}</h5><br>\n              <h5><strong>Auther: </strong>{{t.author}}</h5>\n              <h5><strong>Publish Date:</strong>{{t.publishedAt}}</h5>\n              <a href=\"{{t.url}}\"><h5>Source</h5></a>\n          </div>\n          <button type=\"button\" [hidden]=\"hideme[i]\" (click)=\"hideme[i] = !hideme[i]\" class=\"btn\">Showmore</button>\n          <button [hidden]=\"!hideme[i]\" type=\"button\" (click)=\"hideme[i] = !hideme[i]\" class=\"btn\">Showless</button>\n      </div>\n  </div>"

/***/ }),

/***/ "./src/app/mirrornews/mirrornews.component.ts":
/*!****************************************************!*\
  !*** ./src/app/mirrornews/mirrornews.component.ts ***!
  \****************************************************/
/*! exports provided: MirrornewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MirrornewsComponent", function() { return MirrornewsComponent; });
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


var MirrornewsComponent = /** @class */ (function () {
    function MirrornewsComponent(http) {
        this.http = http;
        this.hideme = [];
    }
    MirrornewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('https://newsapi.org/v2/top-headlines?sources=mirror&apiKey=df408c7f56bc4bfb8c2903fe15add076').subscribe(function (response) {
            _this.response = response;
            var x = _this.response.totalResults;
            var title;
            var description;
            var urlToImage;
            var content;
            var author;
            var publishedAt;
            var url;
            for (var i = 0; i < x; i++) {
                title = _this.response.articles[i].title;
                description = _this.response.articles[i].description;
                urlToImage = _this.response.articles[i].urlToImage;
                content = _this.response.articles[i].content;
                author = _this.response.articles[i].author;
                publishedAt = _this.response.articles[i].publishedAt;
                url = _this.response.articles[i].url;
            }
        });
    };
    MirrornewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mirrornews',
            template: __webpack_require__(/*! ./mirrornews.component.html */ "./src/app/mirrornews/mirrornews.component.html"),
            styles: [__webpack_require__(/*! ./mirrornews.component.css */ "./src/app/mirrornews/mirrornews.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MirrornewsComponent);
    return MirrornewsComponent;
}());



/***/ }),

/***/ "./src/app/mtvnews/mtvnews.component.css":
/*!***********************************************!*\
  !*** ./src/app/mtvnews/mtvnews.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n    margin-left:2px;\r\n    margin-top: 5px;\r\n  }\r\n  \r\n  .wrapper {\r\n  display: flex;\r\n  border-left: 6px solid #0c0361;\r\n  background-color:rgb(231, 231, 231);\r\n  }\r\n  \r\n  .btn{\r\n  background-color: #0c0361;\r\n  color: aliceblue\r\n  }"

/***/ }),

/***/ "./src/app/mtvnews/mtvnews.component.html":
/*!************************************************!*\
  !*** ./src/app/mtvnews/mtvnews.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"response\">\n  <div class='wrapper' *ngFor=\"let t of response.articles;let i = index\">\n      <div class='img-wrapper' [hidden]=\"hideme[i]\">\n          <img src='{{t.urlToImage}}' />\n      </div>\n      <div class='text-wrapper'>\n          <h2>{{t.title}}</h2>\n          <h5>{{t.description}}</h5>\n          <div [hidden]=\"!hideme[i]\">\n              <div class='imge'><img src='{{t.urlToImage}}' height=\"400px\" width=\"650px\" class=\"responsive\" alt=\"ABC News\"/></div><br>\n              <h5>{{t.content}}</h5><br>\n              <h5><strong>Auther: </strong>{{t.author}}</h5>\n              <h5><strong>Publish Date:</strong>{{t.publishedAt}}</h5>\n              <a href=\"{{t.url}}\"><h5>Source</h5></a>\n          </div>\n          <button type=\"button\" [hidden]=\"hideme[i]\" (click)=\"hideme[i] = !hideme[i]\" class=\"btn\">Showmore</button>\n          <button [hidden]=\"!hideme[i]\" type=\"button\" (click)=\"hideme[i] = !hideme[i]\" class=\"btn\">Showless</button>\n      </div>\n  </div>"

/***/ }),

/***/ "./src/app/mtvnews/mtvnews.component.ts":
/*!**********************************************!*\
  !*** ./src/app/mtvnews/mtvnews.component.ts ***!
  \**********************************************/
/*! exports provided: MtvnewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MtvnewsComponent", function() { return MtvnewsComponent; });
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


var MtvnewsComponent = /** @class */ (function () {
    function MtvnewsComponent(http) {
        this.http = http;
        this.hideme = [];
    }
    MtvnewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('https://newsapi.org/v2/top-headlines?sources=mirror&apiKey=df408c7f56bc4bfb8c2903fe15add076').subscribe(function (response) {
            _this.response = response;
            var x = _this.response.totalResults;
            var title;
            var description;
            var urlToImage;
            var content;
            var author;
            var publishedAt;
            var url;
            for (var i = 0; i < x; i++) {
                title = _this.response.articles[i].title;
                description = _this.response.articles[i].description;
                urlToImage = _this.response.articles[i].urlToImage;
                content = _this.response.articles[i].content;
                author = _this.response.articles[i].author;
                publishedAt = _this.response.articles[i].publishedAt;
                url = _this.response.articles[i].url;
            }
        });
    };
    MtvnewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mtvnews',
            template: __webpack_require__(/*! ./mtvnews.component.html */ "./src/app/mtvnews/mtvnews.component.html"),
            styles: [__webpack_require__(/*! ./mtvnews.component.css */ "./src/app/mtvnews/mtvnews.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MtvnewsComponent);
    return MtvnewsComponent;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-sidenav-container{\r\n    height: 100%;\r\n  \r\n  \r\n}\r\n.mat-sidenav{\r\n    background-color: #474B4F;\r\n    -webkit-text-emphasis-color: aqua;\r\n            text-emphasis-color: aqua\r\n}\r\n.mat-toolbar{\r\n    background-color: #222629;\r\n}"

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color='warn'>\n  <mat-toolbar-row>\n    <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\" color=\"primary\">\n      <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n\n    </button>\n    <span>News Addict</span>\n\n  </mat-toolbar-row>\n</mat-toolbar>\n<mat-sidenav-container class=\"example-container\">\n  <mat-sidenav #drawer mode=\"side\" role=\"navigation\">\n    <mat-nav-list>\n      <a mat-list-item routerLink='/first'>ABC News</a>\n      <a mat-list-item routerLink='/second'>Google News</a>\n      <a mat-list-item routerLink='/thired'>Al-jazeera</a>\n      <a mat-list-item routerLink='/bbcnews'>BBC News</a>\n      <a mat-list-item routerLink='/cnnnews'>CNN News</a>\n      <a mat-list-item routerLink='/dailymail'>DailyMail News</a>\n      <a mat-list-item routerLink='/foxnews'>Fox News</a>\n      <a mat-list-item routerLink='/medicalnews'>Medical News</a>\n      <a mat-list-item routerLink='/mirrornews'>Mirror News</a>\n      <a mat-list-item routerLink='/mtvnews'>MTV News</a>\n      <a mat-list-item routerLink='/news24'>News24</a>\n      <a mat-list-item routerLink='/newscientist'>New Scientist</a>\n      <a mat-list-item routerLink='/techcrunch'>Tech Crunch</a>\n      <a mat-list-item routerLink='/espn'>ESPN Sports</a>\n      <a mat-list-item routerLink='/espncricinfo'>ESPN CricInfo</a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/news24/news24.component.css":
/*!*********************************************!*\
  !*** ./src/app/news24/news24.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n    margin-left:2px;\r\n    margin-top: 5px;\r\n  }\r\n  \r\n  .wrapper {\r\n  display: flex;\r\n  border-left: 6px solid #58e408;\r\n  background-color:rgb(231, 231, 231);\r\n  }\r\n  \r\n  .btn{\r\n  background-color: #58e408;\r\n  color: aliceblue\r\n  }"

/***/ }),

/***/ "./src/app/news24/news24.component.html":
/*!**********************************************!*\
  !*** ./src/app/news24/news24.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"response\">\n  <div class='wrapper' *ngFor=\"let t of response.articles;let i = index\">\n      <div class='img-wrapper' [hidden]=\"hideme[i]\">\n          <img src='{{t.urlToImage}}' />\n      </div>\n      <div class='text-wrapper'>\n          <h2>{{t.title}}</h2>\n          <h5>{{t.description}}</h5>\n          <div [hidden]=\"!hideme[i]\">\n              <div class='imge'><img src='{{t.urlToImage}}' height=\"400px\" width=\"650px\" class=\"responsive\" alt=\"ABC News\"/></div><br>\n              <h5>{{t.content}}</h5><br>\n              <h5><strong>Auther: </strong>{{t.author}}</h5>\n              <h5><strong>Publish Date:</strong>{{t.publishedAt}}</h5>\n              <a href=\"{{t.url}}\"><h5>Source</h5></a>\n          </div>\n          <button type=\"button\" [hidden]=\"hideme[i]\" (click)=\"hideme[i] = !hideme[i]\" class=\"btn\">Show more</button>\n          <button [hidden]=\"!hideme[i]\" type=\"button\" (click)=\"hideme[i] = !hideme[i]\" class=\"btn\">Show less</button>\n      </div>\n  </div>"

/***/ }),

/***/ "./src/app/news24/news24.component.ts":
/*!********************************************!*\
  !*** ./src/app/news24/news24.component.ts ***!
  \********************************************/
/*! exports provided: News24Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "News24Component", function() { return News24Component; });
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


var News24Component = /** @class */ (function () {
    function News24Component(http) {
        this.http = http;
        this.hideme = [];
    }
    News24Component.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('https://newsapi.org/v2/top-headlines?sources=news24&apiKey=df408c7f56bc4bfb8c2903fe15add076').subscribe(function (response) {
            _this.response = response;
            var x = _this.response.totalResults;
            var title;
            var description;
            var urlToImage;
            var content;
            var author;
            var publishedAt;
            var url;
            for (var i = 0; i < x; i++) {
                title = _this.response.articles[i].title;
                description = _this.response.articles[i].description;
                urlToImage = _this.response.articles[i].urlToImage;
                content = _this.response.articles[i].content;
                author = _this.response.articles[i].author;
                publishedAt = _this.response.articles[i].publishedAt;
                url = _this.response.articles[i].url;
            }
        });
    };
    News24Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news24',
            template: __webpack_require__(/*! ./news24.component.html */ "./src/app/news24/news24.component.html"),
            styles: [__webpack_require__(/*! ./news24.component.css */ "./src/app/news24/news24.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], News24Component);
    return News24Component;
}());



/***/ }),

/***/ "./src/app/newscientist/newscientist.component.css":
/*!*********************************************************!*\
  !*** ./src/app/newscientist/newscientist.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n    margin-left:2px;\r\n    margin-top: 5px;\r\n  }\r\n  \r\n  .wrapper {\r\n  display: flex;\r\n  border-left: 6px solid #d246f5;\r\n  background-color:rgb(231, 231, 231);\r\n  }\r\n  \r\n  .btn{\r\n  background-color: #d246f5;\r\n  color: aliceblue\r\n  }"

/***/ }),

/***/ "./src/app/newscientist/newscientist.component.html":
/*!**********************************************************!*\
  !*** ./src/app/newscientist/newscientist.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"response\">\n  <div class='wrapper' *ngFor=\"let t of response.articles;let i = index\">\n      <div class='img-wrapper' [hidden]=\"hideme[i]\">\n          <img src='{{t.urlToImage}}' />\n      </div>\n      <div class='text-wrapper'>\n          <h2>{{t.title}}</h2>\n          <h5>{{t.description}}</h5>\n          <div [hidden]=\"!hideme[i]\">\n              <div class='imge'><img src='{{t.urlToImage}}' height=\"400px\" width=\"650px\" class=\"responsive\" alt=\"ABC News\"/></div><br>\n              <h5>{{t.content}}</h5><br>\n              <h5><strong>Auther: </strong>{{t.author}}</h5>\n              <h5><strong>Publish Date:</strong>{{t.publishedAt}}</h5>\n              <a href=\"{{t.url}}\"><h5>Source</h5></a>\n          </div>\n          <button type=\"button\" [hidden]=\"hideme[i]\" (click)=\"hideme[i] = !hideme[i]\" class=\"btn\">Show more</button>\n          <button [hidden]=\"!hideme[i]\" type=\"button\" (click)=\"hideme[i] = !hideme[i]\" class=\"btn\">Show less</button>\n      </div>\n  </div>"

/***/ }),

/***/ "./src/app/newscientist/newscientist.component.ts":
/*!********************************************************!*\
  !*** ./src/app/newscientist/newscientist.component.ts ***!
  \********************************************************/
/*! exports provided: NewscientistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewscientistComponent", function() { return NewscientistComponent; });
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


var NewscientistComponent = /** @class */ (function () {
    function NewscientistComponent(http) {
        this.http = http;
        this.hideme = [];
    }
    NewscientistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('https://newsapi.org/v2/top-headlines?sources=new-scientist&apiKey=df408c7f56bc4bfb8c2903fe15add076').subscribe(function (response) {
            _this.response = response;
            var x = _this.response.totalResults;
            var title;
            var description;
            var urlToImage;
            var content;
            var author;
            var publishedAt;
            var url;
            for (var i = 0; i < x; i++) {
                title = _this.response.articles[i].title;
                description = _this.response.articles[i].description;
                urlToImage = _this.response.articles[i].urlToImage;
                content = _this.response.articles[i].content;
                author = _this.response.articles[i].author;
                publishedAt = _this.response.articles[i].publishedAt;
                url = _this.response.articles[i].url;
            }
        });
    };
    NewscientistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-newscientist',
            template: __webpack_require__(/*! ./newscientist.component.html */ "./src/app/newscientist/newscientist.component.html"),
            styles: [__webpack_require__(/*! ./newscientist.component.css */ "./src/app/newscientist/newscientist.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NewscientistComponent);
    return NewscientistComponent;
}());



/***/ }),

/***/ "./src/app/second/second.component.css":
/*!*********************************************!*\
  !*** ./src/app/second/second.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n    margin-left:2px;\r\n    margin-top: 5px;\r\n}\r\n\r\n.wrapper {\r\n  display: flex;\r\n  border-left: 6px solid #4032c2;\r\n  background-color:rgb(231, 231, 231);\r\n}\r\n\r\n.btn{\r\nbackground-color: #4032c2;\r\n}"

/***/ }),

/***/ "./src/app/second/second.component.html":
/*!**********************************************!*\
  !*** ./src/app/second/second.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"response\">\n    <div class='wrapper' *ngFor=\"let t of response.articles;let i = index\">\n        <div class='img-wrapper' [hidden]=\"hideme[i]\">\n            <img src='{{t.urlToImage}}' />\n        </div>\n        <div class='text-wrapper'>\n            <h2>{{t.title}}</h2>\n            <h5>{{t.description}}</h5>\n            <div [hidden]=\"!hideme[i]\">\n                <div class='imge'><img src='{{t.urlToImage}}' height=\"400px\" width=\"650px\" class=\"responsive\" /></div><br>\n                <h5>{{t.content}}</h5><br>\n                <h5><strong>Auther: </strong>{{t.author}}</h5>\n                <h5><strong>Publish Date:</strong>{{t.publishedAt}}</h5>\n                <a href=\"{{t.url}}\"><h5>Source</h5></a>\n            </div>\n            <button type=\"button\" [hidden]=\"hideme[i]\" (click)=\"hideme[i] = !hideme[i]\" class=\"btn\">Showmore</button>\n            <button [hidden]=\"!hideme[i]\" type=\"button\" (click)=\"hideme[i] = !hideme[i]\" class=\"btn\">Showless</button>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/second/second.component.ts":
/*!********************************************!*\
  !*** ./src/app/second/second.component.ts ***!
  \********************************************/
/*! exports provided: SecondComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondComponent", function() { return SecondComponent; });
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


var SecondComponent = /** @class */ (function () {
    function SecondComponent(http) {
        this.http = http;
        this.hideme = [];
    }
    SecondComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=df408c7f56bc4bfb8c2903fe15add076').subscribe(function (response) {
            _this.response = response;
            var x = _this.response.totalResults;
            var title;
            var description;
            var urlToImage;
            var content;
            var author;
            var publishedAt;
            var url;
            for (var i = 0; i < x; i++) {
                title = _this.response.articles[i].title;
                description = _this.response.articles[i].description;
                urlToImage = _this.response.articles[i].urlToImage;
                content = _this.response.articles[i].content;
                author = _this.response.articles[i].author;
                publishedAt = _this.response.articles[i].publishedAt;
                url = _this.response.articles[i].url;
            }
        });
    };
    SecondComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-second',
            template: __webpack_require__(/*! ./second.component.html */ "./src/app/second/second.component.html"),
            styles: [__webpack_require__(/*! ./second.component.css */ "./src/app/second/second.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SecondComponent);
    return SecondComponent;
}());



/***/ }),

/***/ "./src/app/techcrunch/techcrunch.component.css":
/*!*****************************************************!*\
  !*** ./src/app/techcrunch/techcrunch.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n    margin-left:2px;\r\n    margin-top: 5px;\r\n  }\r\n  \r\n  .wrapper {\r\n  display: flex;\r\n  border-left: 6px solid #46eff5;\r\n  background-color:rgb(231, 231, 231);\r\n  }\r\n  \r\n  .btn{\r\n  background-color: #46eff5;\r\n  color: aliceblue\r\n  }"

/***/ }),

/***/ "./src/app/techcrunch/techcrunch.component.html":
/*!******************************************************!*\
  !*** ./src/app/techcrunch/techcrunch.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"response\">\n  <div class='wrapper' *ngFor=\"let t of response.articles;let i = index\">\n      <div class='img-wrapper' [hidden]=\"hideme[i]\">\n          <img src='{{t.urlToImage}}' />\n      </div>\n      <div class='text-wrapper'>\n          <h2>{{t.title}}</h2>\n          <h5>{{t.description}}</h5>\n          <div [hidden]=\"!hideme[i]\">\n              <div class='imge'><img src='{{t.urlToImage}}' height=\"400px\" width=\"650px\" class=\"responsive\" alt=\"ABC News\"/></div><br>\n              <h5>{{t.content}}</h5><br>\n              <h5><strong>Auther: </strong>{{t.author}}</h5>\n              <h5><strong>Publish Date:</strong>{{t.publishedAt}}</h5>\n              <a href=\"{{t.url}}\"><h5>Source</h5></a>\n          </div>\n          <button type=\"button\" [hidden]=\"hideme[i]\" (click)=\"hideme[i] = !hideme[i]\" class=\"btn\">Show more</button>\n          <button [hidden]=\"!hideme[i]\" type=\"button\" (click)=\"hideme[i] = !hideme[i]\" class=\"btn\">Show less</button>\n      </div>\n  </div>"

/***/ }),

/***/ "./src/app/techcrunch/techcrunch.component.ts":
/*!****************************************************!*\
  !*** ./src/app/techcrunch/techcrunch.component.ts ***!
  \****************************************************/
/*! exports provided: TechcrunchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechcrunchComponent", function() { return TechcrunchComponent; });
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


var TechcrunchComponent = /** @class */ (function () {
    function TechcrunchComponent(http) {
        this.http = http;
        this.hideme = [];
    }
    TechcrunchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=df408c7f56bc4bfb8c2903fe15add076').subscribe(function (response) {
            _this.response = response;
            var x = _this.response.totalResults;
            var title;
            var description;
            var urlToImage;
            var content;
            var author;
            var publishedAt;
            var url;
            for (var i = 0; i < x; i++) {
                title = _this.response.articles[i].title;
                description = _this.response.articles[i].description;
                urlToImage = _this.response.articles[i].urlToImage;
                content = _this.response.articles[i].content;
                author = _this.response.articles[i].author;
                publishedAt = _this.response.articles[i].publishedAt;
                url = _this.response.articles[i].url;
            }
        });
    };
    TechcrunchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-techcrunch',
            template: __webpack_require__(/*! ./techcrunch.component.html */ "./src/app/techcrunch/techcrunch.component.html"),
            styles: [__webpack_require__(/*! ./techcrunch.component.css */ "./src/app/techcrunch/techcrunch.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TechcrunchComponent);
    return TechcrunchComponent;
}());



/***/ }),

/***/ "./src/app/thired/thired.component.css":
/*!*********************************************!*\
  !*** ./src/app/thired/thired.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n  margin-left:2px;\r\n  margin-top: 5px;\r\n}\r\n\r\n.wrapper {\r\ndisplay: flex;\r\nborder-left: 6px solid #05d66e;\r\nbackground-color:rgb(231, 231, 231);\r\n}\r\n\r\n.btn{\r\nbackground-color: #05d66e;\r\n}"

/***/ }),

/***/ "./src/app/thired/thired.component.html":
/*!**********************************************!*\
  !*** ./src/app/thired/thired.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"response\">\n  <div class='wrapper' *ngFor=\"let t of response.articles;let i = index\">\n      <div class='img-wrapper' [hidden]=\"hideme[i]\">\n          <img src='{{t.urlToImage}}' />\n      </div>\n      <div class='text-wrapper'>\n          <h2>{{t.title}}</h2>\n          <h5>{{t.description}}</h5>\n          <div [hidden]=\"!hideme[i]\">\n              <div class='imge'><img src='{{t.urlToImage}}' height=\"400px\" width=\"650px\" class=\"responsive\" /></div><br>\n              <h5>{{t.content}}</h5><br>\n              <h5><strong>Auther: </strong>{{t.author}}</h5>\n              <h5><strong>Publish Date:</strong>{{t.publishedAt}}</h5>\n              <a href=\"{{t.url}}\"><h5>Source</h5></a>\n          </div>\n          <button type=\"button\" [hidden]=\"hideme[i]\" (click)=\"hideme[i] = !hideme[i]\" class=\"btn\">Showmore</button>\n          <button [hidden]=\"!hideme[i]\" type=\"button\" (click)=\"hideme[i] = !hideme[i]\" class=\"btn\">Showless</button>\n      </div>\n  </div>"

/***/ }),

/***/ "./src/app/thired/thired.component.ts":
/*!********************************************!*\
  !*** ./src/app/thired/thired.component.ts ***!
  \********************************************/
/*! exports provided: ThiredComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThiredComponent", function() { return ThiredComponent; });
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


var ThiredComponent = /** @class */ (function () {
    function ThiredComponent(http) {
        this.http = http;
        this.hideme = [];
    }
    ThiredComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('https://newsapi.org/v2/top-headlines?sources=al-jazeera-english&apiKey=df408c7f56bc4bfb8c2903fe15add076').subscribe(function (response) {
            _this.response = response;
            var x = _this.response.totalResults;
            var title;
            var description;
            var urlToImage;
            var content;
            var author;
            var publishedAt;
            var url;
            for (var i = 0; i < x; i++) {
                title = _this.response.articles[i].title;
                description = _this.response.articles[i].description;
                urlToImage = _this.response.articles[i].urlToImage;
                content = _this.response.articles[i].content;
                author = _this.response.articles[i].author;
                publishedAt = _this.response.articles[i].publishedAt;
                url = _this.response.articles[i].url;
            }
        });
    };
    ThiredComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-thired',
            template: __webpack_require__(/*! ./thired.component.html */ "./src/app/thired/thired.component.html"),
            styles: [__webpack_require__(/*! ./thired.component.css */ "./src/app/thired/thired.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ThiredComponent);
    return ThiredComponent;
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
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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

module.exports = __webpack_require__(/*! D:\my experiments\angular\newsApp\news2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map