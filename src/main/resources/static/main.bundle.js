webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\r\n     fxLayout=\"column\"\r\n     fxLayoutGap=\"10px\">\r\n\r\n    <div fxFlex>\r\n        <div>\r\n            <h3>About Us</h3>\r\n            <hr>\r\n        </div>\r\n    </div>\r\n\r\n    <div fxFlex>\r\n        <div fxLayout=\"column\" fxLayout.gt-sm=\"row\">\r\n            <div fxFlex=\"70\">\r\n                <h2>Our History</h2>\r\n                <p>Started in 2013, SSI quickly established itself as a safety icon par excellence in USA. With its\r\n                    unique brand of world fusion safety that can be found nowhere else, it enjoys patronage from the\r\n                    A-list clientele in USA. Featuring four of the best three-star Award CEO in the world, you never\r\n                    know what will arrive on your mind the next time you visit us.</p>\r\n                <p>The enterprise traces its humble beginnings to <em>The BUILDING SEC CBA</em>, a successful chain\r\n                    started by our CEO, Msc. Valentin Laime, that featured for the first time the world's best\r\n                    enterprises in building safety.</p>\r\n            </div>\r\n            <div fxFlex=\"30\">\r\n                <mat-card>\r\n                    <mat-card-header>\r\n                        <mat-card-title>\r\n                            <h2>Facts At a Glance</h2>\r\n                        </mat-card-title>\r\n                    </mat-card-header>\r\n                    <mat-card-content>\r\n                        <dl>\r\n                            <dt>Started</dt>\r\n                            <dd>1 Jan. 2013</dd>\r\n                            <dt>Major Stake Holder</dt>\r\n                            <dd>Jatun SRL.</dd>\r\n                            <dt>Last Year's Turnover</dt>\r\n                            <dd>$2,478,220</dd>\r\n                            <dt>Employees</dt>\r\n                            <dd>240</dd>\r\n                        </dl>\r\n                    </mat-card-content>\r\n                </mat-card>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div fxFlex>\r\n        <mat-card>\r\n            <blockquote>\r\n                <h3>You better cut the budget in four pieces because\r\n                    I'm not willing enough to to invest in six.</h3>\r\n                <footer>-- Carlos Gomez,\r\n                    <cite>The Wisdom of Carlos Gomez,\r\n                        Diversion Books, 2014</cite>\r\n                </footer>\r\n            </blockquote>\r\n        </mat-card>\r\n    </div>\r\n\r\n\r\n    <div fxFlex>\r\n        <h2>Employees</h2>\r\n        <mat-list>\r\n            <mat-list-item *ngFor=\"let employee of employees\">\r\n                <img matListAvatar src={{employee.image}} alt={{employee.name}}>\r\n              <h1 matLine><b>{{employee.firstName}} {{employee.lastName}}</b></h1>\r\n                <h3 matLine>{{employee.jobPosition}} </h3>\r\n                <h4 matDialogContent>{{employee.jobDescription}}</h4>\r\n            </mat-list-item>\r\n        </mat-list>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_employee_service__ = __webpack_require__("../../../../../src/app/services/employee.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = (function () {
    function AboutComponent(employeeService) {
        this.employeeService = employeeService;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeeService.getEmployees()
            .subscribe(function (employees) { return _this.employees = employees; });
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_employee_service__["a" /* EmployeeService */]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__("../../../../../src/app/app-routing/routes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__routes__["a" /* routes */])
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__catalog_catalog_component__ = __webpack_require__("../../../../../src/app/catalog/catalog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__item_detail_item_detail_component__ = __webpack_require__("../../../../../src/app/item-detail/item-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");





var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'catalog', component: __WEBPACK_IMPORTED_MODULE_0__catalog_catalog_component__["a" /* CatalogComponent */] },
    { path: 'contactus', component: __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__["a" /* ContactComponent */] },
    { path: 'aboutus', component: __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */] },
    { path: 'itemdetail/:id', component: __WEBPACK_IMPORTED_MODULE_1__item_detail_item_detail_component__["a" /* ItemDetailComponent */] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];


/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__catalog_catalog_component__ = __webpack_require__("../../../../../src/app/catalog/catalog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__item_detail_item_detail_component__ = __webpack_require__("../../../../../src/app/item-detail/item-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_item_service__ = __webpack_require__("../../../../../src/app/services/item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_routing_app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_employee_service__ = __webpack_require__("../../../../../src/app/services/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_baseurl__ = __webpack_require__("../../../../../src/app/shared/baseurl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_process_httpmsg_service__ = __webpack_require__("../../../../../src/app/services/process-httpmsg.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__catalog_catalog_component__["a" /* CatalogComponent */],
                __WEBPACK_IMPORTED_MODULE_8__item_detail_item_detail_component__["a" /* ItemDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_10__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_11__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_13__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_17__login_login_component__["a" /* LoginComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatAutocompleteModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatButtonToggleModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatChipsModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MatDatepickerModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatExpansionModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["l" /* MatGridListModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["m" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["o" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["q" /* MatNativeDateModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* MatPaginatorModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MatProgressBarModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["t" /* MatProgressSpinnerModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["u" /* MatRadioModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["v" /* MatRippleModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["w" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["x" /* MatSidenavModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["z" /* MatSliderModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["y" /* MatSlideToggleModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["A" /* MatSnackBarModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["B" /* MatSortModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["C" /* MatTableModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["D" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["E" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["F" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_15__app_routing_app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__services_item_service__["a" /* ItemService */],
                __WEBPACK_IMPORTED_MODULE_16__services_employee_service__["a" /* EmployeeService */],
                __WEBPACK_IMPORTED_MODULE_21__services_process_httpmsg_service__["a" /* ProcessHttpmsgService */],
                { provide: 'BaseURL', useValue: __WEBPACK_IMPORTED_MODULE_20__shared_baseurl__["a" /* baseURL */] }
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_17__login_login_component__["a" /* LoginComponent */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/catalog/catalog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\r\n     fxLayout=\"column\"\r\n     fxLayoutGap=\"10px\">\r\n\r\n    <div fxFlex>\r\n        <div>\r\n            <h3>Catalogo</h3>\r\n            <hr>\r\n        </div>\r\n    </div>\r\n\r\n    <div fxFlex *ngIf=\"items\">\r\n        <mat-grid-list cols=\"2\" [rowHeight]=\"'200px'\">\r\n            <mat-grid-tile *ngFor=\"let item of items\" [routerLink]=\"['/itemdetail', item.id]\" (click)=\"onSelect(item)\">\r\n                <img height=\"200px\" src={{item.image}} alt={{item.name}}>\r\n                <mat-grid-tile-footer>\r\n                    <h1 mat-line>{{item.name | uppercase}}</h1>\r\n                </mat-grid-tile-footer>\r\n            </mat-grid-tile>\r\n        </mat-grid-list>\r\n    </div>\r\n\r\n    <div [hidden]=\"items\">\r\n        <mat-spinner></mat-spinner>\r\n        <h4>Loading . . . Please Wait</h4>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/catalog/catalog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/catalog/catalog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_item_service__ = __webpack_require__("../../../../../src/app/services/item.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var CatalogComponent = (function () {
    function CatalogComponent(itemService, BaseURL) {
        this.itemService = itemService;
        this.BaseURL = BaseURL;
    }
    CatalogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemService.getItems().subscribe(function (items) { return _this.items = items; });
    };
    CatalogComponent.prototype.onSelect = function (item) {
        this.selectedItem = item;
    };
    CatalogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-catalog',
            template: __webpack_require__("../../../../../src/app/catalog/catalog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/catalog/catalog.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])('BaseURL')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_item_service__["a" /* ItemService */], Object])
    ], CatalogComponent);
    return CatalogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\r\n     fxLayout=\"column\"\r\n     fxLayoutGap=\"10px\">\r\n\r\n    <div fxFlex>\r\n        <div>\r\n            <h3>Contact Us</h3>\r\n            <hr>\r\n        </div>\r\n    </div>\r\n\r\n    <div fxFlex>\r\n        <h3>Location Information</h3>\r\n        <div fxLayout=\"column\" fxLayout.gt-sm=\"row\">\r\n            <div fxFlex=\"50\" fxFlexOffset=\"20px\">\r\n                <h4>Our Address</h4>\r\n                <address style=\"text-size: 80%\">\r\n                    121, Dr. Drive <br>\r\n                    San Jose, California<br>\r\n                    MOUNTAIN VIEW<br>\r\n                    <i class=\"fa fa-phone\"></i>: +1 1234 5678<br>\r\n                    <i class=\"fa fa-fax\"></i>: +1 8765 4321<br>\r\n                    <i class=\"fa fa-envelope\"></i>:\r\n                    <a href=\"mailto:ssi@food.net\">ssi@food.net</a>\r\n                </address>\r\n                <p></p>\r\n                <div>\r\n                    <a mat-raised-button href=\"tel:+112345678\"><i class=\"fa fa-phone\"></i> Call</a>\r\n                    <a mat-raised-button><i class=\"fa fa-skype\"></i> Skype</a>\r\n                    <a mat-raised-button href=\"mailto:ssi@food.net\"><i class=\"fa fa-envelope-o\"></i> Email</a>\r\n                </div>\r\n            </div>\r\n            <div fxFlex=\"40\">\r\n                <h4>Map of our Location</h4>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div fxFlex fxFlexOffset=\"20px\" class=\"form-size\">\r\n        <h3>Send us your Feedback</h3>\r\n        <p>{{ feedbackForm.value | json }} {{ feedbackForm.status | json }}</p>\r\n        <form id=\"form\" novalidate [formGroup]=\"feedbackForm\" (ngSubmit)=\"onSubmit()\">\r\n            <p>\r\n                <mat-input-container class=\"half-width\"\r\n                                     dividerColor=\"{{(feedbackForm.get('firstname').hasError('required') && feedbackForm.get('firstname').touched) ? 'warn' : 'primary'}}\">\r\n                    <input matInput formControlName=\"firstname\" placeholder=\"First Name\" type=\"text\" required>\r\n                    <mat-hint>\r\n                <span [hidden]=\"!(feedbackForm.get('firstname').hasError('required') && feedbackForm.get('firstname').touched)\">\r\n                  firstname is required</span>\r\n                    </mat-hint>\r\n                </mat-input-container>\r\n                <mat-input-container class=\"half-width\"\r\n                                     dividerColor=\"{{(feedbackForm.get('lastname').hasError('required') && feedbackForm.get('lastname').touched) ? 'warn' : 'primary'}}\">\r\n                    <input matInput formControlName=\"lastname\" placeholder=\"Last Name\" type=\"text\" required>\r\n                    <mat-hint>\r\n                <span [hidden]=\"!(feedbackForm.get('lastname').hasError('required') && feedbackForm.get('lastname').touched)\">\r\n                  lastname is required</span>\r\n                    </mat-hint>\r\n                </mat-input-container>\r\n            </p>\r\n            <p>\r\n                <mat-input-container class=\"half-width\"\r\n                                     dividerColor=\"{{(feedbackForm.get('telnum').hasError('required') && feedbackForm.get('telnum').touched) ? 'warn' : 'primary'}}\">\r\n                    <input matInput formControlName=\"telnum\" placeholder=\"Tel. Number\" type=\"tel\" required>\r\n                    <mat-hint>\r\n                <span [hidden]=\"!(feedbackForm.get('telnum').hasError('required') && feedbackForm.get('telnum').touched)\">\r\n                  Tel. number is required</span>\r\n                    </mat-hint>\r\n                </mat-input-container>\r\n                <mat-input-container class=\"half-width\"\r\n                                     dividerColor=\"{{(feedbackForm.get('email').hasError('required') && feedbackForm.get('email').touched) ? 'warn' : 'primary'}}\">\r\n                    <input matInput formControlName=\"email\" placeholder=\"Email\" type=\"email\" required>\r\n                    <mat-hint>\r\n                <span [hidden]=\"!(feedbackForm.get('email').hasError('required') && feedbackForm.get('email').touched)\">\r\n                  Email ID is required</span>\r\n                    </mat-hint>\r\n                </mat-input-container>\r\n            </p>\r\n            <table class=\"form-size\">\r\n                <td class=\"half-width\">\r\n                    <mat-slide-toggle formControlName=\"agree\">May we contact you?</mat-slide-toggle>\r\n                </td>\r\n                <td class=\"half-width\">\r\n                    <mat-select formControlName=\"contacttype\" placeholder=\"How?\">\r\n                        <mat-option *ngFor=\"let ctype of contactType\" [value]=\"ctype\">\r\n                            {{ctype}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </td>\r\n            </table>\r\n            <p>\r\n                <mat-input-container class=\"full-width\">\r\n                    <textarea matInput formControlName=\"message\" placeholder=\"Your Feedback\" rows=12></textarea>\r\n                </mat-input-container>\r\n            </p>\r\n            <button type=\"submit\" mat-button class=\"background-primary text-floral-white\"\r\n                    [disabled]=\"feedbackForm.invalid\">Submit\r\n            </button>\r\n        </form>\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-width {\n  width: 95%; }\n\n.half-width {\n  width: 45%; }\n\n.form-size {\n  width: 75%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_feedback__ = __webpack_require__("../../../../../src/app/shared/feedback.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactComponent = (function () {
    function ContactComponent(fb) {
        this.fb = fb;
        this.contactType = __WEBPACK_IMPORTED_MODULE_2__shared_feedback__["a" /* ContactType */];
        this.createForm();
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.createForm = function () {
        this.feedbackForm = this.fb.group({
            firstname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            lastname: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            telnum: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required],
            agree: false,
            contacttype: 'None',
            message: ''
        });
    };
    ContactComponent.prototype.onSubmit = function () {
        this.feedback = this.feedbackForm.value;
        console.log(this.feedback);
        this.feedbackForm.reset({
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contacttype: 'None',
            message: ''
        });
        var form = document.getElementById('form');
        form.reset();
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container footer\"\r\n     fxLayout=\"row\"\r\n     fxLayout.sm=\"column\"\r\n     fxLayout.xs=\"column\"\r\n     fxLayoutAlign.xs=\"start center\"\r\n     fxLayoutAlign.sm=\"start center\"\r\n     fxLayoutAlign.gt-sm=\"center center\"\r\n     fxLayoutWrap\r\n     fxLayoutGap=\"10px\">\r\n\r\n    <div fxFlex=\"100%\" fxFlex.gt-sm=\"50%\">\r\n        <div class=\"container\" fxLayout=\"row\">\r\n            <div fxFlex=\"40\" fxFlexOffset=\"20px\">\r\n                <h4>Links</h4>\r\n                <mat-list>\r\n                    <mat-list-item><a mat-button routerLink=\"/home\">Home</a></mat-list-item>\r\n                    <mat-list-item><a mat-button routerLink=\"/aboutus\">About</a></mat-list-item>\r\n                    <mat-list-item><a mat-button routerLink=\"/catalog\">Catalog</a></mat-list-item>\r\n                    <mat-list-item><a mat-button routerLink=\"/contactus\">Contact</a></mat-list-item>\r\n                </mat-list>\r\n            </div>\r\n            <div fxFlex=\"50\">\r\n                <h4>Our Address</h4>\r\n                <address style=\"text-size: 80%\">\r\n                    121, Dr. Drive <br> San Jose, California<br> MOUNTAIN VIEW<br>\r\n                    <i class=\"fa fa-phone\"></i>: +1 1234 5678<br>\r\n                    <i class=\"fa fa-fax\"></i>: +1 8765 4321<br>\r\n                    <i class=\"fa fa-envelope\"></i>:\r\n                    <a href=\"mailto:ssi@food.net\">ssi@food.net</a>\r\n                </address>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div fxFlex=\"100%\" fxFlex.gt-sm=\"45%\">\r\n        <div style=\"text-align:center\">\r\n            <a mat-icon-button class=\"btn-google-plus\" href=\"http://google.com/+\"><i\r\n                    class=\"fa fa-google-plus fa-lg\"></i></a>\r\n            <a mat-icon-button class=\"btn-facebook\" href=\"http://www.facebook.com/profile.php?id=\"><i\r\n                    class=\"fa fa-facebook fa-lg\"></i></a>\r\n            <a mat-icon-button class=\"btn-linkedin\" href=\"http://www.linkedin.com/in/\"><i\r\n                    class=\"fa fa-linkedin fa-lg\"></i></a>\r\n            <a mat-icon-button class=\"btn-twitter\" href=\"http://twitter.com/\"><i class=\"fa fa-twitter fa-lg\"></i></a>\r\n            <a mat-icon-button class=\"btn-youtube\" href=\"http://youtube.com/\"><i class=\"fa fa-youtube fa-lg\"></i></a>\r\n            <a mat-icon-button class=\"btn-mail\" href=\"mailto:\"><i class=\"fa fa-envelope-o fa-lg\"></i></a>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\n  background-color: #D1C4E9;\n  margin: 0px auto;\n  padding: 20px 0px; }\n\n.btn-facebook {\n  color: #fff !important;\n  background-color: #3b5998 !important; }\n\n.btn-google-plus {\n  color: #fff !important;\n  background-color: #dd4b39 !important; }\n\n.btn-youtube {\n  color: #fff !important;\n  background-color: #ff4b39 !important; }\n\n.btn-linkedin {\n  color: #fff !important;\n  background-color: #007bb6 !important; }\n\n.btn-twitter {\n  color: #fff !important;\n  background-color: #55acee !important; }\n\n.btn-mail {\n  color: #fff !important;\n  background-color: #512DA8 !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n    <span><img src=\"/assets/images/logo.png\" height=30 width=41></span>\r\n    <a mat-button routerLink=\"/home\" routerLinkActive=\"active\"><span class=\"fa fa-home fa-lg\"></span> Home</a>\r\n    <a mat-button routerLink=\"/aboutus\" routerLinkActive=\"active\"><span class=\"fa fa-info fa-lg\"></span> About</a>\r\n    <a mat-button routerLink=\"/catalog\" routerLinkActive=\"active\"><span class=\"fa fa-list fa-lg\"></span> Catalog</a>\r\n    <a mat-button routerLink=\"/contactus\" routerLinkActive=\"active\"><span class=\"fa fa-address-card fa-lg\"></span>\r\n        Contact</a>\r\n</mat-toolbar>\r\n\r\n<div class=\"container jumbotron\"\r\n     fxLayout=\"row\"\r\n     fxLayout.sm=\"column\"\r\n     fxLayout.xs=\"column\"\r\n     fxLayoutAlign.xs=\"start center\"\r\n     fxLayoutAlign.sm=\"start center\"\r\n     fxLayoutAlign.gt-sm=\"center center\"\r\n     fxLayoutGap=\"10px\">\r\n\r\n    <div fxFlex fxFlex.gt-sm=\"50%\">\r\n        <h1>SSI</h1>\r\n        <p>We take inspiration from the World's best safety practices, and create a unique fusion experience. Our\r\n            awesome safety protection items\r\n            will tickle your safety vision!</p>\r\n    </div>\r\n    <div fxFlex fxFlex.gt-sm=\"20%\">\r\n        <img src=\"/assets/images/logo.png\" alt=\"Logo\" width=\"200\" height=\"200\">\r\n    </div>\r\n    <div fxFlex></div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".active {\n  background: #4527A0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(dialog) {
        this.dialog = dialog;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.openLoginForm = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */], { width: '500px', height: '450px' });
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialog */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\r\n     fxLayout=\"row\"\r\n     fxLayout.sm=\"column\"\r\n     fxLayout.xs=\"column\"\r\n     fxLayoutAlign.gt-md=\"space-around center\"\r\n     fxLayoutGap=\"10px\">\r\n\r\n    <mat-card *ngIf=\"item\" fxFlex>\r\n        <mat-card-header>\r\n            <div mat-card-avatar></div>\r\n            <mat-card-title>\r\n                <h3>{{item.name | uppercase}}</h3>\r\n            </mat-card-title>\r\n        </mat-card-header>\r\n        <img mat-card-image src={{item.image}} alt={{item.name}}>\r\n        <mat-card-content>\r\n          <p>{{item.name}}\r\n          </p>\r\n            <p>{{item.price}} Bs.\r\n            </p>\r\n        </mat-card-content>\r\n    </mat-card>\r\n\r\n    <mat-card *ngIf=\"employee\" fxFlex>\r\n        <mat-card-header>\r\n            <div mat-card-avatar></div>\r\n            <mat-card-title>\r\n                <h3>{{employee.name | uppercase}}</h3>\r\n            </mat-card-title>\r\n        </mat-card-header>\r\n        <img mat-card-image src={{employee.image}} alt={{employee.name}}>\r\n        <mat-card-content>\r\n          <h2><b>{{employee.firstName}} {{employee.lastName}}</b>\r\n            </h2>\r\n            <p>{{employee.jobPosition}}\r\n            </p>\r\n        </mat-card-content>\r\n    </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_item_service__ = __webpack_require__("../../../../../src/app/services/item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_employee_service__ = __webpack_require__("../../../../../src/app/services/employee.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(itemservice, employeeService) {
        this.itemservice = itemservice;
        this.employeeService = employeeService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.itemservice.getFeaturedItem());
        this.itemservice.getFeaturedItem().subscribe(function (item) { return _this.item = item; });
        this.employeeService.getFeaturedEmployee().subscribe(function (employee) { return _this.employee = employee; });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_item_service__["a" /* ItemService */],
            __WEBPACK_IMPORTED_MODULE_2__services_employee_service__["a" /* EmployeeService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/item-detail/item-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\r\n     fxLayout=\"row\"\r\n     fxLayout.sm=\"column\"\r\n     fxLayout.xs=\"column\"\r\n     fxLayoutAlign.gt-md=\"space-around center\"\r\n     fxLayoutGap=\"10px\"\r\n     fxLayoutGap.xs=\"0\">\r\n    <div fxFlex=\"40\">\r\n        <div fxFlex *ngIf=\"item\">\r\n            <mat-card>\r\n                <mat-card-title-group>\r\n                    <mat-card-title>\r\n                        <h3>{{item.name | uppercase}}</h3>\r\n                    </mat-card-title>\r\n                </mat-card-title-group>\r\n                <img matCardImage src={{item.image}} alt={{item.name}}>\r\n                <mat-card-content>\r\n                    <p>{{item.description}}\r\n                    </p>\r\n                </mat-card-content>\r\n                <mat-card-actions align=\"start\">\r\n                    <button mat-button [routerLink]=\"['/itemdetail', prev]\"><span\r\n                            class=\"fa fa-chevron-left fa-lg\"></span></button>\r\n                    <button mat-button (click)=\"goBack()\">BACK</button>\r\n                    <button mat-button (click)=\"onAction($event)\">LIKE</button>\r\n                    <button mat-button (click)=\"onAction($event)\">SHARE</button>\r\n                    <span class=\"flex-spacer\"></span>\r\n                    <button md-button [routerLink]=\"['/itemdetail', next]\"><span\r\n                            class=\"fa fa-chevron-right fa-lg\"></span></button>\r\n                </mat-card-actions>\r\n            </mat-card>\r\n        </div>\r\n    </div>\r\n\r\n    <div fxFlex=\"40\" *ngIf=\"item\">\r\n        <mat-list>\r\n            <h3 mat-header>Comments</h3>\r\n            <mat-list-item *ngFor=\"let comment of item.comments\">\r\n                <p matLine>{{comment.comment}}</p>\r\n                <p matLine>{{comment.rating}} Stars</p>\r\n                <p matLine>-- {{comment.author}} {{comment.date | date}}</p>\r\n            </mat-list-item>\r\n        </mat-list>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/item-detail/item-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/item-detail/item-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_item_service__ = __webpack_require__("../../../../../src/app/services/item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ItemDetailComponent = (function () {
    function ItemDetailComponent(itemservice, route, location) {
        this.itemservice = itemservice;
        this.route = route;
        this.location = location;
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemservice.getItemIds().subscribe(function (itemIds) { return _this.itemIds = itemIds; });
        this.route.params
            .switchMap(function (params) { return _this.itemservice.getItem(+params['id']); })
            .subscribe(function (item) {
            _this.item = item;
            _this.setPrevNext(item.id);
        });
    };
    ItemDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    ItemDetailComponent.prototype.setPrevNext = function (itemId) {
        if (this.itemIds) {
            this.index = this.itemIds.indexOf(itemId);
            this.prev = this.itemIds[(this.itemIds.length + this.index - 1) % this.itemIds.length];
            this.next = this.itemIds[(this.itemIds.length + this.index + 1) % this.itemIds.length];
        }
        else {
            this.ngOnInit();
        }
    };
    ItemDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-item-detail',
            template: __webpack_require__("../../../../../src/app/item-detail/item-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/item-detail/item-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_item_service__["a" /* ItemService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]])
    ], ItemDetailComponent);
    return ItemDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar mat-dialog-title color=\"primary\">\r\n    <div fxFlex>\r\n        Login\r\n    </div>\r\n    <span class=\"flex-spacer\"></span>\r\n    <div fxFlex>\r\n        <button mat-button mat-dialog-close>&times;</button>\r\n    </div>\r\n</mat-toolbar>\r\n\r\n<p>{{ user | json }}</p>\r\n\r\n<form novalidate #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n    <mat-dialog-content>\r\n        <p>\r\n            <mat-input-container dividerColor=\"{{username.invalid && !username.pristine ? 'warn' : 'primary'}}\">\r\n                <input matInput placeholder=\"Username\" type=\"text\" [(ngModel)]=\"user.username\" name=\"username\"\r\n                       #username=\"ngModel\" required>\r\n                <mat-hint>\r\n                <span [hidden]=\"username.pristine\">\r\n         <span [hidden]=\"!username.errors?.required\">username is required</span>\r\n         </span>\r\n                </mat-hint>\r\n            </mat-input-container>\r\n            <mat-input-container dividerColor=\"{{password.invalid && !password.pristine ? 'warn' : 'primary'}}\">\r\n                <input matInput placeholder=\"Password\" type=\"password\" [(ngModel)]=\"user.password\" name=\"password\"\r\n                       #password=\"ngModel\" required>\r\n                <mat-hint>\r\n         <span [hidden]=\"password.pristine\">\r\n         <span [hidden]=\"!password.errors?.required\">password is required</span>\r\n         </span>\r\n                </mat-hint>\r\n            </mat-input-container>\r\n            <mat-checkbox [(ngModel)]=\"user.remember\" name=\"remember\">Remember Me</mat-checkbox>\r\n        </p>\r\n    </mat-dialog-content>\r\n    <mat-dialog-actions>\r\n        <span class=\"flex-spacer\"></span>\r\n        <button mat-button mat-dialog-close>Cancel</button>\r\n        <button type=\"submit\" mat-button class=\"background-primary text-floral-white\"\r\n                [disabled]=\"loginForm.form.invalid\">Login\r\n        </button>\r\n    </mat-dialog-actions>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.user = { remember: false };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        console.log("User: ", this.user);
        this.dialogRef.close();
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDialogRef */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/employee.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_baseurl__ = __webpack_require__("../../../../../src/app/shared/baseurl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EmployeeService = (function () {
    function EmployeeService(http) {
        this.http = http;
    }
    EmployeeService.prototype.getEmployees = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_baseurl__["a" /* baseURL */] + 'employees')
            .map(function (res) {
            return res;
        });
    };
    EmployeeService.prototype.getEmployee = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_baseurl__["a" /* baseURL */] + 'employees/' + id)
            .map(function (res) {
            return res;
        });
    };
    EmployeeService.prototype.getFeaturedEmployee = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_baseurl__["a" /* baseURL */] + 'employees/featured')
            .map(function (res) {
            return res;
        });
    };
    EmployeeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "../../../../../src/app/services/item.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_baseurl__ = __webpack_require__("../../../../../src/app/shared/baseurl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ItemService = (function () {
    function ItemService(http) {
        this.http = http;
    }
    ItemService.prototype.getItems = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_baseurl__["a" /* baseURL */] + 'items')
            .map(function (res) {
            return res;
        });
    };
    ItemService.prototype.getItem = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_baseurl__["a" /* baseURL */] + 'items/' + id)
            .map(function (res) {
            return res;
        });
    };
    ItemService.prototype.getFeaturedItem = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__shared_baseurl__["a" /* baseURL */] + 'items/featured')
            .map(function (res) {
            return res;
        });
    };
    ItemService.prototype.getItemIds = function () {
        return this.getItems()
            .map(function (items) {
            return items.map(function (item) { return item.id; });
        });
    };
    ItemService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */]])
    ], ItemService);
    return ItemService;
}());



/***/ }),

/***/ "../../../../../src/app/services/process-httpmsg.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessHttpmsgService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProcessHttpmsgService = (function () {
    function ProcessHttpmsgService() {
    }
    ProcessHttpmsgService.prototype.extractData = function (res) {
        var body = res.body;
        console.log(body);
        return body || {};
    };
    ProcessHttpmsgService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ProcessHttpmsgService);
    return ProcessHttpmsgService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/baseurl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return baseURL; });
var baseURL = 'http://localhost:8080/';


/***/ }),

/***/ "../../../../../src/app/shared/feedback.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Feedback */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactType; });
var Feedback = (function () {
    function Feedback() {
    }
    return Feedback;
}());

var ContactType = ['None', 'Tel', 'Email'];


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map