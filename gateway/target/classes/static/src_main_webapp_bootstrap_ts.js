"use strict";
(self["webpackChunkgateway"] = self["webpackChunkgateway"] || []).push([["src_main_webapp_bootstrap_ts"],{

/***/ 1198:
/*!***************************************************!*\
  !*** ./src/main/webapp/app/app-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 7658);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_error_error_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/error/error.route */ 1213);
/* harmony import */ var _layouts_navbar_navbar_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/navbar/navbar.route */ 2748);
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/app.constants */ 530);
/* harmony import */ var app_config_authority_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/config/authority.constants */ 3156);
/* harmony import */ var app_core_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/core/auth/user-route-access.service */ 8059);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_6__);








class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forRoot([
            {
                path: 'admin',
                data: {
                    authorities: [app_config_authority_constants__WEBPACK_IMPORTED_MODULE_4__.Authority.ADMIN],
                },
                canActivate: [app_core_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_5__.UserRouteAccessService],
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_main_webapp_app_admin_admin-routing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./admin/admin-routing.module */ 1097)).then(m => m.AdminRoutingModule),
            },
            {
                path: 'account',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_main_webapp_app_account_account_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./account/account.module */ 8888)).then(m => m.AccountModule),
            },
            {
                path: 'login',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_main_webapp_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 4121)).then(m => m.LoginModule),
            },
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_main_webapp_app_entities_entity-routing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./entities/entity-routing.module */ 1094)).then(m => m.EntityRoutingModule),
            },
            _layouts_navbar_navbar_route__WEBPACK_IMPORTED_MODULE_2__.navbarRoute,
            ..._layouts_error_error_route__WEBPACK_IMPORTED_MODULE_1__.errorRoute,
        ], { enableTracing: app_app_constants__WEBPACK_IMPORTED_MODULE_3__.DEBUG_INFO_ENABLED }), _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule] }); })();


/***/ }),

/***/ 530:
/*!**********************************************!*\
  !*** ./src/main/webapp/app/app.constants.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEBUG_INFO_ENABLED": () => (/* binding */ DEBUG_INFO_ENABLED),
/* harmony export */   "VERSION": () => (/* binding */ VERSION)
/* harmony export */ });
// These constants are injected via webpack DefinePlugin variables.
// You can add more variables in webpack.common.js or in profile specific webpack.<dev|prod>.js files.
// If you change the values in the webpack config files, you need to re run webpack to update the application
const VERSION = "0.0.1-SNAPSHOT";
const DEBUG_INFO_ENABLED = true;


/***/ }),

/***/ 2789:
/*!*******************************************!*\
  !*** ./src/main/webapp/app/app.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 3013);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 5482);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/locales/fr */ 8384);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 8913);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/service-worker */ 4933);
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-webstorage */ 8689);
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var dayjs_esm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs/esm */ 1157);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1960);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config_dayjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config/dayjs */ 9767);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/shared.module */ 2267);
/* harmony import */ var app_shared_language_translation_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/shared/language/translation.module */ 3643);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ 1198);
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.module */ 9100);
/* harmony import */ var _config_datepicker_adapter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./config/datepicker-adapter */ 8088);
/* harmony import */ var _config_font_awesome_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./config/font-awesome-icons */ 3468);
/* harmony import */ var app_core_interceptor_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/core/interceptor/index */ 9561);
/* harmony import */ var _layouts_main_main_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./layouts/main/main.component */ 5464);
/* harmony import */ var _layouts_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./layouts/navbar/navbar.component */ 3121);
/* harmony import */ var _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./layouts/footer/footer.component */ 8813);
/* harmony import */ var _layouts_profiles_page_ribbon_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./layouts/profiles/page-ribbon.component */ 6632);
/* harmony import */ var _layouts_navbar_active_menu_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./layouts/navbar/active-menu.directive */ 4433);
/* harmony import */ var _layouts_error_error_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./layouts/error/error.component */ 2779);
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! app/core/config/application-config.service */ 1082);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 5438);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_22__);














// jhipster-needle-angular-add-module-import JHipster will add new module here















class AppModule {
    constructor(applicationConfigService, iconLibrary, dpConfig) {
        applicationConfigService.setEndpointPrefix("");
        (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.registerLocaleData)(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_23__["default"]);
        iconLibrary.addIcons(..._config_font_awesome_icons__WEBPACK_IMPORTED_MODULE_13__.fontAwesomeIcons);
        dpConfig.minDate = { year: (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_5__["default"])().subtract(100, 'year').year(), month: 1, day: 1 };
    }
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_21__.ApplicationConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_22__.FaIconLibrary), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDatepickerConfig)); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_layouts_main_main_component__WEBPACK_IMPORTED_MODULE_15__.MainComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Title,
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__.LOCALE_ID, useValue: 'fr' },
        { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDateAdapter, useClass: _config_datepicker_adapter__WEBPACK_IMPORTED_MODULE_12__.NgbDateDayjsAdapter },
        app_core_interceptor_index__WEBPACK_IMPORTED_MODULE_14__.httpInterceptorProviders,
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule,
        app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__.SharedModule,
        _home_home_module__WEBPACK_IMPORTED_MODULE_11__.HomeModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
        _app_routing_module__WEBPACK_IMPORTED_MODULE_10__.AppRoutingModule,
        // Set this to true to enable service worker (PWA)
        _angular_service_worker__WEBPACK_IMPORTED_MODULE_24__.ServiceWorkerModule.register('ngsw-worker.js', { enabled: false }),
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClientModule,
        ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__.NgxWebstorageModule.forRoot({ prefix: 'jhi', separator: '-', caseSensitive: true }),
        app_shared_language_translation_module__WEBPACK_IMPORTED_MODULE_9__.TranslationModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_layouts_main_main_component__WEBPACK_IMPORTED_MODULE_15__.MainComponent, _layouts_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__.NavbarComponent, _layouts_error_error_component__WEBPACK_IMPORTED_MODULE_20__.ErrorComponent, _layouts_profiles_page_ribbon_component__WEBPACK_IMPORTED_MODULE_18__.PageRibbonComponent, _layouts_navbar_active_menu_directive__WEBPACK_IMPORTED_MODULE_19__.ActiveMenuDirective, _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__.FooterComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule,
        app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__.SharedModule,
        _home_home_module__WEBPACK_IMPORTED_MODULE_11__.HomeModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
        _app_routing_module__WEBPACK_IMPORTED_MODULE_10__.AppRoutingModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_24__.ServiceWorkerModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClientModule, ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__.NgxWebstorageModule, app_shared_language_translation_module__WEBPACK_IMPORTED_MODULE_9__.TranslationModule] }); })();


/***/ }),

/***/ 3156:
/*!***********************************************************!*\
  !*** ./src/main/webapp/app/config/authority.constants.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Authority": () => (/* binding */ Authority)
/* harmony export */ });
var Authority;
(function (Authority) {
    Authority["ADMIN"] = "ROLE_ADMIN";
    Authority["USER"] = "ROLE_USER";
})(Authority || (Authority = {}));


/***/ }),

/***/ 8088:
/*!**********************************************************!*\
  !*** ./src/main/webapp/app/config/datepicker-adapter.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgbDateDayjsAdapter": () => (/* binding */ NgbDateDayjsAdapter)
/* harmony export */ });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1960);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_esm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs/esm */ 1157);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);



class NgbDateDayjsAdapter extends _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__.NgbDateAdapter {
    fromModel(date) {
        if (date && dayjs_esm__WEBPACK_IMPORTED_MODULE_1__["default"].isDayjs(date) && date.isValid()) {
            return { year: date.year(), month: date.month() + 1, day: date.date() };
        }
        return null;
    }
    toModel(date) {
        return date ? (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_1__["default"])(`${date.year}-${date.month}-${date.day}`) : null;
    }
}
NgbDateDayjsAdapter.ɵfac = /*@__PURE__*/ function () { let ɵNgbDateDayjsAdapter_BaseFactory; return function NgbDateDayjsAdapter_Factory(t) { return (ɵNgbDateDayjsAdapter_BaseFactory || (ɵNgbDateDayjsAdapter_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](NgbDateDayjsAdapter)))(t || NgbDateDayjsAdapter); }; }();
NgbDateDayjsAdapter.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: NgbDateDayjsAdapter, factory: NgbDateDayjsAdapter.ɵfac });


/***/ }),

/***/ 9767:
/*!*********************************************!*\
  !*** ./src/main/webapp/app/config/dayjs.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dayjs_esm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs/esm */ 1157);
/* harmony import */ var dayjs_esm_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs/esm/plugin/customParseFormat */ 6270);
/* harmony import */ var dayjs_esm_plugin_duration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs/esm/plugin/duration */ 7841);
/* harmony import */ var dayjs_esm_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs/esm/plugin/relativeTime */ 2845);
/* harmony import */ var dayjs_esm_locale_fr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs/esm/locale/fr */ 9394);
/* harmony import */ var dayjs_esm_locale_en__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs/esm/locale/en */ 7819);




// jhipster-needle-i18n-language-dayjs-imports - JHipster will import languages from dayjs here


// DAYJS CONFIGURATION
dayjs_esm__WEBPACK_IMPORTED_MODULE_0__["default"].extend(dayjs_esm_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_1__["default"]);
dayjs_esm__WEBPACK_IMPORTED_MODULE_0__["default"].extend(dayjs_esm_plugin_duration__WEBPACK_IMPORTED_MODULE_2__["default"]);
dayjs_esm__WEBPACK_IMPORTED_MODULE_0__["default"].extend(dayjs_esm_plugin_relativeTime__WEBPACK_IMPORTED_MODULE_3__["default"]);


/***/ }),

/***/ 3468:
/*!**********************************************************!*\
  !*** ./src/main/webapp/app/config/font-awesome-icons.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fontAwesomeIcons": () => (/* binding */ fontAwesomeIcons)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 3497);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__);

const fontAwesomeIcons = [
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faArrowLeft,
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faAsterisk,
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faBan,
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faBars,
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faBell,
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faBook,
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faCalendarAlt,
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faCheck,
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faCloud,
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faCogs,
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faDatabase,
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faEye,
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faFlag,
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faHeart,
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faHome,
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faList,
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faLock,
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faPencilAlt,
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faPlus,
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faRoad,
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faSave,
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faSearch,
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faSignOutAlt,
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faSignInAlt,
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faSort,
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faSortDown,
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faSortUp,
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faSync,
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faTachometerAlt,
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faTasks,
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faThList,
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faTimes,
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faTrashAlt,
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faUser,
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faUserPlus,
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faUsers,
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faUsersCog,
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faWrench,
    // jhipster-needle-add-icon-import
];


/***/ }),

/***/ 2927:
/*!**********************************************************!*\
  !*** ./src/main/webapp/app/config/language.constants.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LANGUAGES": () => (/* binding */ LANGUAGES)
/* harmony export */ });
/*
    Languages codes are ISO_639-1 codes, see http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
    They are written in English to avoid character encoding issues (not a perfect solution)
*/
const LANGUAGES = [
    'fr',
    'en',
    // jhipster-needle-i18n-language-constant - JHipster will add/remove languages in this array
];


/***/ }),

/***/ 9199:
/*!**********************************************************!*\
  !*** ./src/main/webapp/app/core/auth/account.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountService": () => (/* binding */ AccountService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4125);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 2070);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 9520);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-webstorage */ 8689);
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 5482);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var app_core_auth_state_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/core/auth/state-storage.service */ 3626);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7658);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _config_application_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config/application-config.service */ 1082);









class AccountService {
    constructor(translateService, sessionStorageService, http, stateStorageService, router, applicationConfigService) {
        this.translateService = translateService;
        this.sessionStorageService = sessionStorageService;
        this.http = http;
        this.stateStorageService = stateStorageService;
        this.router = router;
        this.applicationConfigService = applicationConfigService;
        this.userIdentity = null;
        this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_0__.ReplaySubject(1);
    }
    save(account) {
        return this.http.post(this.applicationConfigService.getEndpointFor('api/account'), account);
    }
    authenticate(identity) {
        this.userIdentity = identity;
        this.authenticationState.next(this.userIdentity);
        if (!identity) {
            this.accountCache$ = null;
        }
    }
    hasAnyAuthority(authorities) {
        if (!this.userIdentity) {
            return false;
        }
        if (!Array.isArray(authorities)) {
            authorities = [authorities];
        }
        return this.userIdentity.authorities.some((authority) => authorities.includes(authority));
    }
    identity(force) {
        if (!this.accountCache$ || force) {
            this.accountCache$ = this.fetch().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)((account) => {
                this.authenticate(account);
                // After retrieve the account info, the language will be changed to
                // the user's preferred language configured in the account setting
                // unless user have choosed other language in the current session
                if (!this.sessionStorageService.retrieve('locale')) {
                    this.translateService.use(account.langKey);
                }
                this.navigateToStoredUrl();
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.shareReplay)());
        }
        return this.accountCache$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(null)));
    }
    isAuthenticated() {
        return this.userIdentity !== null;
    }
    getAuthenticationState() {
        return this.authenticationState.asObservable();
    }
    fetch() {
        return this.http.get(this.applicationConfigService.getEndpointFor('api/account'));
    }
    navigateToStoredUrl() {
        // previousState can be set in the authExpiredInterceptor and in the userRouteAccessService
        // if login is successful, go to stored previousState and clear previousState
        const previousUrl = this.stateStorageService.getUrl();
        if (previousUrl) {
            this.stateStorageService.clearUrl();
            this.router.navigateByUrl(previousUrl);
        }
    }
}
AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__.SessionStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](app_core_auth_state_storage_service__WEBPACK_IMPORTED_MODULE_6__.StateStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_config_application_config_service__WEBPACK_IMPORTED_MODULE_8__.ApplicationConfigService)); };
AccountService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AccountService, factory: AccountService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6115:
/*!***********************************************************!*\
  !*** ./src/main/webapp/app/core/auth/auth-jwt.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthServerProvider": () => (/* binding */ AuthServerProvider)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4125);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 2070);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 5482);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-webstorage */ 8689);
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config_application_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/application-config.service */ 1082);






class AuthServerProvider {
    constructor(http, localStorageService, sessionStorageService, applicationConfigService) {
        this.http = http;
        this.localStorageService = localStorageService;
        this.sessionStorageService = sessionStorageService;
        this.applicationConfigService = applicationConfigService;
    }
    getToken() {
        var _a;
        const tokenInLocalStorage = this.localStorageService.retrieve('authenticationToken');
        const tokenInSessionStorage = this.sessionStorageService.retrieve('authenticationToken');
        return (_a = tokenInLocalStorage !== null && tokenInLocalStorage !== void 0 ? tokenInLocalStorage : tokenInSessionStorage) !== null && _a !== void 0 ? _a : '';
    }
    login(credentials) {
        return this.http
            .post(this.applicationConfigService.getEndpointFor('api/authenticate'), credentials)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => this.authenticateSuccess(response, credentials.rememberMe)));
    }
    logout() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(observer => {
            this.localStorageService.clear('authenticationToken');
            this.sessionStorageService.clear('authenticationToken');
            observer.complete();
        });
    }
    authenticateSuccess(response, rememberMe) {
        const jwt = response.id_token;
        if (rememberMe) {
            this.localStorageService.store('authenticationToken', jwt);
            this.sessionStorageService.clear('authenticationToken');
        }
        else {
            this.sessionStorageService.store('authenticationToken', jwt);
            this.localStorageService.clear('authenticationToken');
        }
    }
}
AuthServerProvider.ɵfac = function AuthServerProvider_Factory(t) { return new (t || AuthServerProvider)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__.SessionStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_config_application_config_service__WEBPACK_IMPORTED_MODULE_5__.ApplicationConfigService)); };
AuthServerProvider.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthServerProvider, factory: AuthServerProvider.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3626:
/*!****************************************************************!*\
  !*** ./src/main/webapp/app/core/auth/state-storage.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StateStorageService": () => (/* binding */ StateStorageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-webstorage */ 8689);
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ngx_webstorage__WEBPACK_IMPORTED_MODULE_1__);


class StateStorageService {
    constructor(sessionStorageService) {
        this.sessionStorageService = sessionStorageService;
        this.previousUrlKey = 'previousUrl';
    }
    storeUrl(url) {
        this.sessionStorageService.store(this.previousUrlKey, url);
    }
    getUrl() {
        return this.sessionStorageService.retrieve(this.previousUrlKey);
    }
    clearUrl() {
        this.sessionStorageService.clear(this.previousUrlKey);
    }
}
StateStorageService.ɵfac = function StateStorageService_Factory(t) { return new (t || StateStorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_webstorage__WEBPACK_IMPORTED_MODULE_1__.SessionStorageService)); };
StateStorageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StateStorageService, factory: StateStorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8059:
/*!********************************************************************!*\
  !*** ./src/main/webapp/app/core/auth/user-route-access.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRouteAccessService": () => (/* binding */ UserRouteAccessService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 2070);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7658);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_core_auth_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/auth/account.service */ 9199);
/* harmony import */ var _state_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state-storage.service */ 3626);






class UserRouteAccessService {
    constructor(router, accountService, stateStorageService) {
        this.router = router;
        this.accountService = accountService;
        this.stateStorageService = stateStorageService;
    }
    canActivate(route, state) {
        return this.accountService.identity().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(account => {
            if (account) {
                const authorities = route.data['authorities'];
                if (!authorities || authorities.length === 0 || this.accountService.hasAnyAuthority(authorities)) {
                    return true;
                }
                if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.isDevMode)()) {
                    console.error('User has not any of required authorities: ', authorities);
                }
                this.router.navigate(['accessdenied']);
                return false;
            }
            this.stateStorageService.storeUrl(state.url);
            this.router.navigate(['/login']);
            return false;
        }));
    }
}
UserRouteAccessService.ɵfac = function UserRouteAccessService_Factory(t) { return new (t || UserRouteAccessService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](app_core_auth_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_state_storage_service__WEBPACK_IMPORTED_MODULE_4__.StateStorageService)); };
UserRouteAccessService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserRouteAccessService, factory: UserRouteAccessService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1082:
/*!***********************************************************************!*\
  !*** ./src/main/webapp/app/core/config/application-config.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplicationConfigService": () => (/* binding */ ApplicationConfigService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

class ApplicationConfigService {
    constructor() {
        this.endpointPrefix = '';
        this.microfrontend = false;
    }
    setEndpointPrefix(endpointPrefix) {
        this.endpointPrefix = endpointPrefix;
    }
    setMicrofrontend(microfrontend = true) {
        this.microfrontend = microfrontend;
    }
    isMicrofrontend() {
        return this.microfrontend;
    }
    getEndpointFor(api, microservice) {
        if (microservice) {
            return `${this.endpointPrefix}services/${microservice}/${api}`;
        }
        return `${this.endpointPrefix}${api}`;
    }
}
ApplicationConfigService.ɵfac = function ApplicationConfigService_Factory(t) { return new (t || ApplicationConfigService)(); };
ApplicationConfigService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApplicationConfigService, factory: ApplicationConfigService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2497:
/*!**************************************************************************!*\
  !*** ./src/main/webapp/app/core/interceptor/auth-expired.interceptor.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthExpiredInterceptor": () => (/* binding */ AuthExpiredInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 2070);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/login/login.service */ 7115);
/* harmony import */ var app_core_auth_state_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/auth/state-storage.service */ 3626);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7658);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_core_auth_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/core/auth/account.service */ 9199);






class AuthExpiredInterceptor {
    constructor(loginService, stateStorageService, router, accountService) {
        this.loginService = loginService;
        this.stateStorageService = stateStorageService;
        this.router = router;
        this.accountService = accountService;
    }
    intercept(request, next) {
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.tap)({
            error: (err) => {
                if (err.status === 401 && err.url && !err.url.includes('api/account') && this.accountService.isAuthenticated()) {
                    this.stateStorageService.storeUrl(this.router.routerState.snapshot.url);
                    this.loginService.logout();
                    this.router.navigate(['/login']);
                }
            },
        }));
    }
}
AuthExpiredInterceptor.ɵfac = function AuthExpiredInterceptor_Factory(t) { return new (t || AuthExpiredInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](app_login_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](app_core_auth_state_storage_service__WEBPACK_IMPORTED_MODULE_3__.StateStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](app_core_auth_account_service__WEBPACK_IMPORTED_MODULE_5__.AccountService)); };
AuthExpiredInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthExpiredInterceptor, factory: AuthExpiredInterceptor.ɵfac });


/***/ }),

/***/ 7356:
/*!******************************************************************!*\
  !*** ./src/main/webapp/app/core/interceptor/auth.interceptor.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-webstorage */ 8689);
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ngx_webstorage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_application_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/application-config.service */ 1082);



class AuthInterceptor {
    constructor(localStorageService, sessionStorageService, applicationConfigService) {
        this.localStorageService = localStorageService;
        this.sessionStorageService = sessionStorageService;
        this.applicationConfigService = applicationConfigService;
    }
    intercept(request, next) {
        var _a;
        const serverApiUrl = this.applicationConfigService.getEndpointFor('');
        if (!request.url || (request.url.startsWith('http') && !(serverApiUrl && request.url.startsWith(serverApiUrl)))) {
            return next.handle(request);
        }
        const token = (_a = this.localStorageService.retrieve('authenticationToken')) !== null && _a !== void 0 ? _a : this.sessionStorageService.retrieve('authenticationToken');
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`,
                },
            });
        }
        return next.handle(request);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_webstorage__WEBPACK_IMPORTED_MODULE_1__.LocalStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_webstorage__WEBPACK_IMPORTED_MODULE_1__.SessionStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__.ApplicationConfigService)); };
AuthInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });


/***/ }),

/***/ 8183:
/*!***************************************************************************!*\
  !*** ./src/main/webapp/app/core/interceptor/error-handler.interceptor.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorHandlerInterceptor": () => (/* binding */ ErrorHandlerInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 2070);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_core_util_event_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/util/event-manager.service */ 8821);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




class ErrorHandlerInterceptor {
    constructor(eventManager) {
        this.eventManager = eventManager;
    }
    intercept(request, next) {
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.tap)({
            error: (err) => {
                var _a;
                if (!(err.status === 401 && (err.message === '' || ((_a = err.url) === null || _a === void 0 ? void 0 : _a.includes('api/account'))))) {
                    this.eventManager.broadcast(new app_core_util_event_manager_service__WEBPACK_IMPORTED_MODULE_1__.EventWithContent('gatewayApp.httpError', err));
                }
            },
        }));
    }
}
ErrorHandlerInterceptor.ɵfac = function ErrorHandlerInterceptor_Factory(t) { return new (t || ErrorHandlerInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](app_core_util_event_manager_service__WEBPACK_IMPORTED_MODULE_1__.EventManager)); };
ErrorHandlerInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ErrorHandlerInterceptor, factory: ErrorHandlerInterceptor.ɵfac });


/***/ }),

/***/ 9561:
/*!*******************************************************!*\
  !*** ./src/main/webapp/app/core/interceptor/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "httpInterceptorProviders": () => (/* binding */ httpInterceptorProviders)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 5482);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_core_interceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/interceptor/auth.interceptor */ 7356);
/* harmony import */ var app_core_interceptor_auth_expired_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/interceptor/auth-expired.interceptor */ 2497);
/* harmony import */ var app_core_interceptor_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/interceptor/error-handler.interceptor */ 8183);
/* harmony import */ var app_core_interceptor_notification_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/core/interceptor/notification.interceptor */ 9763);





const httpInterceptorProviders = [
    {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HTTP_INTERCEPTORS,
        useClass: app_core_interceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_1__.AuthInterceptor,
        multi: true,
    },
    {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HTTP_INTERCEPTORS,
        useClass: app_core_interceptor_auth_expired_interceptor__WEBPACK_IMPORTED_MODULE_2__.AuthExpiredInterceptor,
        multi: true,
    },
    {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HTTP_INTERCEPTORS,
        useClass: app_core_interceptor_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_3__.ErrorHandlerInterceptor,
        multi: true,
    },
    {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HTTP_INTERCEPTORS,
        useClass: app_core_interceptor_notification_interceptor__WEBPACK_IMPORTED_MODULE_4__.NotificationInterceptor,
        multi: true,
    },
];


/***/ }),

/***/ 9763:
/*!**************************************************************************!*\
  !*** ./src/main/webapp/app/core/interceptor/notification.interceptor.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationInterceptor": () => (/* binding */ NotificationInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 5482);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 2070);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_core_util_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/util/alert.service */ 4728);




class NotificationInterceptor {
    constructor(alertService) {
        this.alertService = alertService;
    }
    intercept(request, next) {
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpResponse) {
                let alert = null;
                let alertParams = null;
                for (const headerKey of event.headers.keys()) {
                    if (headerKey.toLowerCase().endsWith('app-alert')) {
                        alert = event.headers.get(headerKey);
                    }
                    else if (headerKey.toLowerCase().endsWith('app-params')) {
                        alertParams = decodeURIComponent(event.headers.get(headerKey).replace(/\+/g, ' '));
                    }
                }
                if (alert) {
                    this.alertService.addAlert({
                        type: 'success',
                        translationKey: alert,
                        translationParams: { param: alertParams },
                    });
                }
            }
        }));
    }
}
NotificationInterceptor.ɵfac = function NotificationInterceptor_Factory(t) { return new (t || NotificationInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](app_core_util_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService)); };
NotificationInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: NotificationInterceptor, factory: NotificationInterceptor.ɵfac });


/***/ }),

/***/ 4728:
/*!********************************************************!*\
  !*** ./src/main/webapp/app/core/util/alert.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertService": () => (/* binding */ AlertService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_config_translation_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/config/translation.config */ 1749);
/* harmony import */ var app_config_translation_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(app_config_translation_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 8913);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 9520);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__);





class AlertService {
    constructor(sanitizer, ngZone, translateService) {
        this.sanitizer = sanitizer;
        this.ngZone = ngZone;
        this.translateService = translateService;
        this.timeout = 5000;
        this.toast = false;
        this.position = 'top right';
        // unique id for each alert. Starts from 0.
        this.alertId = 0;
        this.alerts = [];
    }
    clear() {
        this.alerts = [];
    }
    get() {
        return this.alerts;
    }
    /**
     * Adds alert to alerts array and returns added alert.
     * @param alert      Alert to add. If `timeout`, `toast` or `position` is missing then applying default value.
     *                   If `translateKey` is available then it's translation else `message` is used for showing.
     * @param extAlerts  If missing then adding `alert` to `AlertService` internal array and alerts can be retrieved by `get()`.
     *                   Else adding `alert` to `extAlerts`.
     * @returns  Added alert
     */
    addAlert(alert, extAlerts) {
        var _a, _b, _c, _d, _e;
        alert.id = this.alertId++;
        if (alert.translationKey) {
            const translatedMessage = this.translateService.instant(alert.translationKey, alert.translationParams);
            // if translation key exists
            if (translatedMessage !== `${app_config_translation_config__WEBPACK_IMPORTED_MODULE_1__.translationNotFoundMessage}[${alert.translationKey}]`) {
                alert.message = translatedMessage;
            }
            else if (!alert.message) {
                alert.message = alert.translationKey;
            }
        }
        alert.message = (_b = this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.HTML, (_a = alert.message) !== null && _a !== void 0 ? _a : '')) !== null && _b !== void 0 ? _b : '';
        alert.timeout = (_c = alert.timeout) !== null && _c !== void 0 ? _c : this.timeout;
        alert.toast = (_d = alert.toast) !== null && _d !== void 0 ? _d : this.toast;
        alert.position = (_e = alert.position) !== null && _e !== void 0 ? _e : this.position;
        alert.close = (alertsArray) => this.closeAlert(alert.id, alertsArray);
        (extAlerts !== null && extAlerts !== void 0 ? extAlerts : this.alerts).push(alert);
        if (alert.timeout > 0) {
            // Workaround protractor waiting for setTimeout.
            // Reference https://www.protractortest.org/#/timeouts
            this.ngZone.runOutsideAngular(() => {
                setTimeout(() => {
                    this.ngZone.run(() => {
                        this.closeAlert(alert.id, extAlerts !== null && extAlerts !== void 0 ? extAlerts : this.alerts);
                    });
                }, alert.timeout);
            });
        }
        return alert;
    }
    closeAlert(alertId, extAlerts) {
        const alerts = extAlerts !== null && extAlerts !== void 0 ? extAlerts : this.alerts;
        const alertIndex = alerts.map(alert => alert.id).indexOf(alertId);
        // if found alert then remove
        if (alertIndex >= 0) {
            alerts.splice(alertIndex, 1);
        }
    }
}
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService)); };
AlertService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8821:
/*!****************************************************************!*\
  !*** ./src/main/webapp/app/core/util/event-manager.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventManager": () => (/* binding */ EventManager),
/* harmony export */   "EventWithContent": () => (/* binding */ EventWithContent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4125);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 2070);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);



class EventWithContent {
    constructor(name, content) {
        this.name = name;
        this.content = content;
    }
}
/**
 * An utility class to manage RX events
 */
class EventManager {
    constructor() {
        this.observable = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable((observer) => {
            this.observer = observer;
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.share)());
    }
    /**
     * Method to broadcast the event to observer
     */
    broadcast(event) {
        if (this.observer) {
            this.observer.next(event);
        }
    }
    /**
     * Method to subscribe to an event with callback
     * @param eventNames  Single event name or array of event names to what subscribe
     * @param callback    Callback to run when the event occurs
     */
    subscribe(eventNames, callback) {
        if (typeof eventNames === 'string') {
            eventNames = [eventNames];
        }
        return this.observable
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)((event) => {
            for (const eventName of eventNames) {
                if ((typeof event === 'string' && event === eventName) || (typeof event !== 'string' && event.name === eventName)) {
                    return true;
                }
            }
            return false;
        }))
            .subscribe(callback);
    }
    /**
     * Method to unsubscribe the subscription
     */
    destroy(subscriber) {
        subscriber.unsubscribe();
    }
}
EventManager.ɵfac = function EventManager_Factory(t) { return new (t || EventManager)(); };
EventManager.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: EventManager, factory: EventManager.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9000:
/*!*************************************************************!*\
  !*** ./src/main/webapp/app/entities/entity-navbar-items.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntityNavbarItems": () => (/* binding */ EntityNavbarItems)
/* harmony export */ });
const EntityNavbarItems = [
    {
        name: 'TypeSourceFinancement',
        route: 'type-source-financement',
        translationKey: 'global.menu.entities.gestionReferentielTypeSourceFinancement',
    },
    {
        name: 'Entreprise',
        route: 'entreprise',
        translationKey: 'global.menu.entities.gestionReferentielEntreprise',
    },
];


/***/ }),

/***/ 2380:
/*!****************************************************!*\
  !*** ./src/main/webapp/app/home/home.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4125);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 2070);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_core_auth_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/auth/account.service */ 9199);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7658);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 3013);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/language/translate.directive */ 1995);







const _c0 = function (a0) { return { username: a0 }; };
function HomeComponent_div_18_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("translateValues", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, ctx_r3.account.login));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Vous \u00EAtes connect\u00E9 en tant que \"", ctx_r3.account.login, "\".");
} }
function HomeComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HomeComponent_div_18_span_2_Template, 2, 4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.account);
} }
function HomeComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Si vous voulez vous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_div_20_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.login()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "connecter");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, ", vous pouvez utiliser les comptes par d\u00E9faut : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\n          - Administrateur (nom d'utilisateur=\"admin\" et mot de passe =\"admin\") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\n          - Utilisateur (nom d'utilisateur=\"user\" et mot de passe =\"user\").");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HomeComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Vous n'avez pas encore de compte ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u00A0\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Cr\u00E9er un compte");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class HomeComponent {
    constructor(accountService, router) {
        this.accountService = accountService;
        this.router = router;
        this.account = null;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    ngOnInit() {
        this.accountService
            .getAuthenticationState()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.takeUntil)(this.destroy$))
            .subscribe(account => (this.account = account));
    }
    login() {
        this.router.navigate(['/login']);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_core_auth_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["jhi-home"]], decls: 60, vars: 4, consts: [[1, "row"], [1, "col-md-6"], ["src", "content/images/welcome.png", "width", "100%", "height", "660px"], [1, "display-4"], ["jhiTranslate", "home.title"], ["jhiTranslate", "home.subtitle", 1, "lead"], [3, "ngSwitch"], ["class", "alert alert-success", 4, "ngSwitchCase"], ["class", "alert alert-warning", 4, "ngSwitchCase"], ["jhiTranslate", "home.question"], ["href", "#", "rel", "noopener noreferrer", "jhiTranslate", "home.link.homepage"], ["href", "https://stackoverflow.com/tags/jhipster/info", "target", "_blank", "rel", "noopener noreferrer", "jhiTranslate", "home.link.stackoverflow"], ["href", "https://twitter.com/jhipster", "target", "_blank", "rel", "noopener noreferrer", "jhiTranslate", "home.link.follow"], ["jhiTranslate", "home.like"], ["href", "https://github.com/iasGitHub/eSigmap", "target", "_blank", "rel", "noopener noreferrer", "jhiTranslate", "home.github"], [1, "alert", "alert-success"], ["id", "home-logged-message", "jhiTranslate", "home.logged.message", 3, "translateValues", 4, "ngIf"], ["id", "home-logged-message", "jhiTranslate", "home.logged.message", 3, "translateValues"], [1, "alert", "alert-warning"], ["jhiTranslate", "global.messages.info.authenticated.prefix"], ["jhiTranslate", "global.messages.info.authenticated.link", 1, "alert-link", 3, "click"], ["jhiTranslate", "global.messages.info.authenticated.suffix"], ["jhiTranslate", "global.messages.info.register.noaccount"], ["routerLink", "account/register", "jhiTranslate", "global.messages.info.register.link", 1, "alert-link"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h1", 3)(10, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Bienvenue, Java Hipster ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Ceci est votre page d'accueil");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, HomeComponent_div_18_Template, 4, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, HomeComponent_div_20_Template, 14, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, HomeComponent_div_22_Template, 8, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Si vous avez des questions \u00E0 propos de JHipster :");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Page d'accueil de JHipster");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "JHipster sur Stack Overflow");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Suivez @jhipster sur Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Si vous aimez JHipster, donnez nous une \u00E9toile sur");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "GitHub ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "!\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx.account !== null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", false);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgSwitchCase, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_6__.TranslateDirective, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref], styles: [".hipster[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 347px;\n  height: 497px;\n  background: url('jhipster_family_member_0.svg') no-repeat center top;\n  background-size: contain;\n}\n\n@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (-moz-min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx) {\n  .hipster[_ngcontent-%COMP%] {\n    background: url('jhipster_family_member_0.svg') no-repeat center top;\n    background-size: contain;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OzRFQUFBO0FBSUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0VBQUE7RUFDQSx3QkFBQTtBQUFGO0FBR0EsMEZBQUE7QUFDQTtFQUtFO0lBQ0Usb0VBQUE7SUFDQSx3QkFBQTtFQUpGO0FBQ0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5NYWluIHBhZ2Ugc3R5bGVzXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4uaGlwc3RlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDM0N3B4O1xuICBoZWlnaHQ6IDQ5N3B4O1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2NvbnRlbnQvaW1hZ2VzL2poaXBzdGVyX2ZhbWlseV9tZW1iZXJfMC5zdmcnKSBuby1yZXBlYXQgY2VudGVyIHRvcDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuXG4vKiB3YWl0IGF1dG9wcmVmaXhlciB1cGRhdGUgdG8gYWxsb3cgc2ltcGxlIGdlbmVyYXRpb24gb2YgaGlnaCBwaXhlbCBkZW5zaXR5IG1lZGlhIHF1ZXJ5ICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLFxuICBvbmx5IHNjcmVlbiBhbmQgKC1tb3otbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksXG4gIG9ubHkgc2NyZWVuIGFuZCAoLW8tbWluLWRldmljZS1waXhlbC1yYXRpbzogMi8xKSxcbiAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSxcbiAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMmRwcHgpIHtcbiAgLmhpcHN0ZXIge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vY29udGVudC9pbWFnZXMvamhpcHN0ZXJfZmFtaWx5X21lbWJlcl8wLnN2ZycpIG5vLXJlcGVhdCBjZW50ZXIgdG9wO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 9100:
/*!*************************************************!*\
  !*** ./src/main/webapp/app/home/home.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 7658);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/shared.module */ 2267);
/* harmony import */ var _home_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.route */ 9901);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ 2380);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);






class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild([_home_route__WEBPACK_IMPORTED_MODULE_2__.HOME_ROUTE])] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent], imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule] }); })();


/***/ }),

/***/ 9901:
/*!************************************************!*\
  !*** ./src/main/webapp/app/home/home.route.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HOME_ROUTE": () => (/* binding */ HOME_ROUTE)
/* harmony export */ });
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 2380);

const HOME_ROUTE = {
    path: '',
    component: _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
    data: {
        pageTitle: 'home.title',
    },
};


/***/ }),

/***/ 2779:
/*!**************************************************************!*\
  !*** ./src/main/webapp/app/layouts/error/error.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorComponent": () => (/* binding */ ErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 9520);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7658);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 3013);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/language/translate.directive */ 1995);





function ErrorComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
} }
class ErrorComponent {
    constructor(translateService, route) {
        this.translateService = translateService;
        this.route = route;
    }
    ngOnInit() {
        this.route.data.subscribe(routeData => {
            if (routeData.errorMessage) {
                this.errorKey = routeData.errorMessage;
                this.getErrorMessageTranslation();
                this.langChangeSubscription = this.translateService.onLangChange.subscribe(() => this.getErrorMessageTranslation());
            }
        });
    }
    ngOnDestroy() {
        if (this.langChangeSubscription) {
            this.langChangeSubscription.unsubscribe();
        }
    }
    getErrorMessageTranslation() {
        this.errorMessage = '';
        if (this.errorKey) {
            this.translateService.get(this.errorKey).subscribe(translatedErrorMessage => {
                this.errorMessage = translatedErrorMessage;
            });
        }
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute)); };
ErrorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["jhi-error"]], decls: 19, vars: 1, consts: [[1, "row"], [1, "col-md-4"], [1, "hipster", "img-fluid", "rounded"], [1, "col-md-8"], ["jhiTranslate", "error.title"], [4, "ngIf"], [1, "alert", "alert-danger"]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Page d'erreur !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ErrorComponent_div_14_Template, 5, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_4__.TranslateDirective], encapsulation: 2 });


/***/ }),

/***/ 1213:
/*!**********************************************************!*\
  !*** ./src/main/webapp/app/layouts/error/error.route.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "errorRoute": () => (/* binding */ errorRoute)
/* harmony export */ });
/* harmony import */ var _error_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.component */ 2779);

const errorRoute = [
    {
        path: 'error',
        component: _error_component__WEBPACK_IMPORTED_MODULE_0__.ErrorComponent,
        data: {
            pageTitle: 'error.title',
        },
    },
    {
        path: 'accessdenied',
        component: _error_component__WEBPACK_IMPORTED_MODULE_0__.ErrorComponent,
        data: {
            pageTitle: 'error.title',
            errorMessage: 'error.http.403',
        },
    },
    {
        path: '404',
        component: _error_component__WEBPACK_IMPORTED_MODULE_0__.ErrorComponent,
        data: {
            pageTitle: 'error.title',
            errorMessage: 'error.http.404',
        },
    },
    {
        path: '**',
        redirectTo: '/404',
    },
];


/***/ }),

/***/ 8813:
/*!****************************************************************!*\
  !*** ./src/main/webapp/app/layouts/footer/footer.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/language/translate.directive */ 1995);


class FooterComponent {
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["jhi-footer"]], decls: 6, vars: 0, consts: [[1, "footer"], ["jhiTranslate", "footer"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Ceci est votre pied de page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n");
    } }, dependencies: [_shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_1__.TranslateDirective], encapsulation: 2 });


/***/ }),

/***/ 5464:
/*!************************************************************!*\
  !*** ./src/main/webapp/app/layouts/main/main.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 7658);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_esm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs/esm */ 1157);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_core_auth_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/auth/account.service */ 9199);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 8913);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 9520);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _profiles_page_ribbon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../profiles/page-ribbon.component */ 6632);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../footer/footer.component */ 8813);









class MainComponent {
    constructor(accountService, titleService, router, translateService, rootRenderer) {
        this.accountService = accountService;
        this.titleService = titleService;
        this.router = router;
        this.translateService = translateService;
        this.renderer = rootRenderer.createRenderer(document.querySelector('html'), null);
    }
    ngOnInit() {
        // try to log in automatically
        this.accountService.identity().subscribe();
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__.NavigationEnd) {
                this.updateTitle();
            }
        });
        this.translateService.onLangChange.subscribe((langChangeEvent) => {
            this.updateTitle();
            dayjs_esm__WEBPACK_IMPORTED_MODULE_1__["default"].locale(langChangeEvent.lang);
            this.renderer.setAttribute(document.querySelector('html'), 'lang', langChangeEvent.lang);
        });
    }
    getPageTitle(routeSnapshot) {
        var _a;
        const title = (_a = routeSnapshot.data['pageTitle']) !== null && _a !== void 0 ? _a : '';
        if (routeSnapshot.firstChild) {
            return this.getPageTitle(routeSnapshot.firstChild) || title;
        }
        return title;
    }
    updateTitle() {
        let pageTitle = this.getPageTitle(this.router.routerState.snapshot.root);
        if (!pageTitle) {
            pageTitle = 'global.title';
        }
        this.translateService.get(pageTitle).subscribe(title => this.titleService.setTitle(title));
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_core_auth_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.RendererFactory2)); };
MainComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["jhi-main"]], decls: 17, vars: 0, consts: [["name", "navbar"], [1, "container-fluid"], [1, "card", "jh-card"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "jhi-page-ribbon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "router-outlet", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "jhi-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "\n");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterOutlet, _profiles_page_ribbon_component__WEBPACK_IMPORTED_MODULE_6__.PageRibbonComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent], encapsulation: 2 });


/***/ }),

/***/ 4433:
/*!*********************************************************************!*\
  !*** ./src/main/webapp/app/layouts/navbar/active-menu.directive.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActiveMenuDirective": () => (/* binding */ ActiveMenuDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 9520);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);


class ActiveMenuDirective {
    constructor(el, renderer, translateService) {
        this.el = el;
        this.renderer = renderer;
        this.translateService = translateService;
    }
    ngOnInit() {
        this.translateService.onLangChange.subscribe((event) => {
            this.updateActiveFlag(event.lang);
        });
        this.updateActiveFlag(this.translateService.currentLang);
    }
    updateActiveFlag(selectedLanguage) {
        if (this.jhiActiveMenu === selectedLanguage) {
            this.renderer.addClass(this.el.nativeElement, 'active');
        }
        else {
            this.renderer.removeClass(this.el.nativeElement, 'active');
        }
    }
}
ActiveMenuDirective.ɵfac = function ActiveMenuDirective_Factory(t) { return new (t || ActiveMenuDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService)); };
ActiveMenuDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ActiveMenuDirective, selectors: [["", "jhiActiveMenu", ""]], inputs: { jhiActiveMenu: "jhiActiveMenu" } });


/***/ }),

/***/ 3121:
/*!****************************************************************!*\
  !*** ./src/main/webapp/app/layouts/navbar/navbar.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var app_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/app.constants */ 530);
/* harmony import */ var app_config_language_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/config/language.constants */ 2927);
/* harmony import */ var app_entities_entity_navbar_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/entities/entity-navbar-items */ 9000);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var app_login_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/login/login.service */ 7115);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 9520);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-webstorage */ 8689);
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_webstorage__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var app_core_auth_account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/core/auth/account.service */ 9199);
/* harmony import */ var app_layouts_profiles_profile_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/layouts/profiles/profile.service */ 108);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7658);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 3013);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1960);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 5438);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/language/translate.directive */ 1995);
/* harmony import */ var _shared_auth_has_any_authority_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/auth/has-any-authority.directive */ 989);
/* harmony import */ var _active_menu_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./active-menu.directive */ 4433);
/* harmony import */ var _shared_language_find_language_from_key_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/language/find-language-from-key.pipe */ 1992);

















const _c0 = function () { return { exact: true }; };
function NavbarComponent_li_39_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "fa-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Entit\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ul", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_li_39_Template_a_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.collapseNavbar()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "fa-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Type Source Financement");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_li_39_Template_a_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r12.collapseNavbar()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "fa-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Entreprise");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fixedWidth", true);
} }
function NavbarComponent_li_41_li_81_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_li_41_li_81_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r14.collapseNavbar()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "fa-icon", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "API");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fixedWidth", true);
} }
function NavbarComponent_li_41_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "fa-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Administration");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ul", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_li_41_Template_a_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r16.collapseNavbar()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "fa-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Gateway");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_li_41_Template_a_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r18.collapseNavbar()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "fa-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Gestion des utilisateurs");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_li_41_Template_a_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r19.collapseNavbar()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "fa-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "M\u00E9triques");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_li_41_Template_a_click_50_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r20.collapseNavbar()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "fa-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Diagnostics");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_li_41_Template_a_click_61_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r21.collapseNavbar()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](63, "fa-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "Configuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_li_41_Template_a_click_72_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r22.collapseNavbar()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](74, "fa-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "Logs");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](81, NavbarComponent_li_41_li_81_Template, 10, 1, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.openAPIEnabled);
} }
function NavbarComponent_li_43_li_15_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_li_43_li_15_Template_a_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26); const language_r24 = restoredCtx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); ctx_r25.changeLanguage(language_r24); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r25.collapseNavbar()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "findLanguageFromKey");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const language_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("jhiActiveMenu", language_r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 2, language_r24));
} }
function NavbarComponent_li_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "fa-icon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Langue");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ul", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, NavbarComponent_li_43_li_15_Template, 6, 4, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.languages);
} }
function NavbarComponent_span_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "fa-icon", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Compte");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function NavbarComponent_span_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r4.account.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function NavbarComponent_li_56_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_li_56_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r27.collapseNavbar()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "fa-icon", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Profil");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fixedWidth", true);
} }
function NavbarComponent_li_58_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_li_58_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r29.collapseNavbar()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "fa-icon", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Mot de passe");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fixedWidth", true);
} }
function NavbarComponent_li_60_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_li_60_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r31.logout()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "fa-icon", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "D\u00E9connexion");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fixedWidth", true);
} }
function NavbarComponent_li_62_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_li_62_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r33.login()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "fa-icon", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "S'authentifier");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fixedWidth", true);
} }
function NavbarComponent_li_64_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_li_64_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r35.collapseNavbar()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "fa-icon", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\n                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Cr\u00E9er un compte");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fixedWidth", true);
} }
class NavbarComponent {
    constructor(loginService, translateService, sessionStorageService, compiler, injector, accountService, profileService, router) {
        this.loginService = loginService;
        this.translateService = translateService;
        this.sessionStorageService = sessionStorageService;
        this.compiler = compiler;
        this.injector = injector;
        this.accountService = accountService;
        this.profileService = profileService;
        this.router = router;
        this.isNavbarCollapsed = true;
        this.languages = app_config_language_constants__WEBPACK_IMPORTED_MODULE_1__.LANGUAGES;
        this.version = '';
        this.account = null;
        this.entitiesNavbarItems = [];
        if (app_app_constants__WEBPACK_IMPORTED_MODULE_0__.VERSION) {
            this.version = app_app_constants__WEBPACK_IMPORTED_MODULE_0__.VERSION.toLowerCase().startsWith('v') ? app_app_constants__WEBPACK_IMPORTED_MODULE_0__.VERSION : `v${app_app_constants__WEBPACK_IMPORTED_MODULE_0__.VERSION}`;
        }
    }
    ngOnInit() {
        this.entitiesNavbarItems = app_entities_entity_navbar_items__WEBPACK_IMPORTED_MODULE_2__.EntityNavbarItems;
        this.profileService.getProfileInfo().subscribe(profileInfo => {
            this.inProduction = profileInfo.inProduction;
            this.openAPIEnabled = profileInfo.openAPIEnabled;
        });
        this.accountService.getAuthenticationState().subscribe(account => {
            this.account = account;
        });
    }
    changeLanguage(languageKey) {
        this.sessionStorageService.store('locale', languageKey);
        this.translateService.use(languageKey);
    }
    collapseNavbar() {
        this.isNavbarCollapsed = true;
    }
    login() {
        this.router.navigate(['/login']);
    }
    logout() {
        this.collapseNavbar();
        this.loginService.logout();
        this.router.navigate(['']);
    }
    toggleNavbar() {
        this.isNavbarCollapsed = !this.isNavbarCollapsed;
    }
    loadModule(moduleType) {
        const moduleFactory = this.compiler.compileModuleAndAllComponentsSync(moduleType);
        moduleFactory.ngModuleFactory.create(this.injector);
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](app_login_login_service__WEBPACK_IMPORTED_MODULE_4__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_webstorage__WEBPACK_IMPORTED_MODULE_6__.SessionStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Compiler), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](app_core_auth_account_service__WEBPACK_IMPORTED_MODULE_7__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](app_layouts_profiles_profile_service__WEBPACK_IMPORTED_MODULE_8__.ProfileService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router)); };
NavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["jhi-navbar"]], decls: 72, vars: 17, consts: [["data-cy", "navbar", 1, "navbar", "navbar-dark", "navbar-expand-md", "bg-dark"], [1, "container-fluid"], ["routerLink", "/", 1, "navbar-brand", "logo", 3, "click"], [1, "logo-img"], ["jhiTranslate", "global.title", 1, "navbar-title"], [1, "navbar-version"], ["href", "javascript:void(0);", "data-toggle", "collapse", "data-target", "#navbarResponsive", "aria-controls", "navbarResponsive", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "d-lg-none", 3, "click"], ["icon", "bars"], ["id", "navbarResponsive", 1, "navbar-collapse", "collapse", 3, "ngbCollapse", "ngSwitch"], [1, "navbar-nav", "ms-auto"], ["routerLinkActive", "active", 1, "nav-item", 3, "routerLinkActiveOptions"], ["routerLink", "/", 1, "nav-link", 3, "click"], ["icon", "home"], ["jhiTranslate", "global.menu.home"], ["ngbDropdown", "", "class", "nav-item dropdown pointer", "display", "dynamic", "routerLinkActive", "active", 3, "routerLinkActiveOptions", 4, "ngSwitchCase"], ["ngbDropdown", "", "class", "nav-item dropdown pointer", "display", "dynamic", "routerLinkActive", "active", 3, "routerLinkActiveOptions", 4, "jhiHasAnyAuthority"], ["ngbDropdown", "", "class", "nav-item dropdown pointer", "display", "dynamic", 4, "ngIf"], ["ngbDropdown", "", "display", "dynamic", "routerLinkActive", "active", 1, "nav-item", "dropdown", "pointer", 3, "routerLinkActiveOptions"], ["ngbDropdownToggle", "", "href", "javascript:void(0);", "id", "account-menu", "data-cy", "accountMenu", 1, "nav-link", "dropdown-toggle"], [4, "ngIf"], ["ngbDropdownMenu", "", "aria-labelledby", "account-menu", 1, "dropdown-menu"], [4, "ngSwitchCase"], ["ngbDropdownToggle", "", "href", "javascript:void(0);", "id", "entity-menu", "data-cy", "entity", 1, "nav-link", "dropdown-toggle"], ["icon", "th-list"], ["jhiTranslate", "global.menu.entities.main"], ["ngbDropdownMenu", "", "aria-labelledby", "entity-menu", 1, "dropdown-menu"], ["routerLink", "type-source-financement", "routerLinkActive", "active", 1, "dropdown-item", 3, "routerLinkActiveOptions", "click"], ["icon", "asterisk", 3, "fixedWidth"], ["jhiTranslate", "global.menu.entities.gestionReferentielTypeSourceFinancement"], ["routerLink", "entreprise", "routerLinkActive", "active", 1, "dropdown-item", 3, "routerLinkActiveOptions", "click"], ["jhiTranslate", "global.menu.entities.gestionReferentielEntreprise"], ["ngbDropdownToggle", "", "href", "javascript:void(0);", "id", "admin-menu", "data-cy", "adminMenu", 1, "nav-link", "dropdown-toggle"], ["icon", "users-cog"], ["jhiTranslate", "global.menu.admin.main"], ["ngbDropdownMenu", "", "aria-labelledby", "admin-menu", 1, "dropdown-menu"], ["routerLink", "admin/gateway", "routerLinkActive", "active", 1, "dropdown-item", 3, "click"], ["icon", "road", 3, "fixedWidth"], ["jhiTranslate", "global.menu.admin.gateway"], ["routerLink", "admin/user-management", "routerLinkActive", "active", 1, "dropdown-item", 3, "click"], ["icon", "users", 3, "fixedWidth"], ["jhiTranslate", "global.menu.admin.userManagement"], ["routerLink", "admin/metrics", "routerLinkActive", "active", 1, "dropdown-item", 3, "click"], ["icon", "tachometer-alt", 3, "fixedWidth"], ["jhiTranslate", "global.menu.admin.metrics"], ["routerLink", "admin/health", "routerLinkActive", "active", 1, "dropdown-item", 3, "click"], ["icon", "heart", 3, "fixedWidth"], ["jhiTranslate", "global.menu.admin.health"], ["routerLink", "admin/configuration", "routerLinkActive", "active", 1, "dropdown-item", 3, "click"], ["icon", "cogs", 3, "fixedWidth"], ["jhiTranslate", "global.menu.admin.configuration"], ["routerLink", "admin/logs", "routerLinkActive", "active", 1, "dropdown-item", 3, "click"], ["icon", "tasks", 3, "fixedWidth"], ["jhiTranslate", "global.menu.admin.logs"], ["routerLink", "admin/docs", "routerLinkActive", "active", 1, "dropdown-item", 3, "click"], ["icon", "book", 3, "fixedWidth"], ["jhiTranslate", "global.menu.admin.apidocs"], ["ngbDropdown", "", "display", "dynamic", 1, "nav-item", "dropdown", "pointer"], ["ngbDropdownToggle", "", "href", "javascript:void(0);", "id", "languagesnavBarDropdown", 1, "nav-link", "dropdown-toggle"], ["icon", "flag"], ["jhiTranslate", "global.menu.language"], ["ngbDropdownMenu", "", "aria-labelledby", "languagesnavBarDropdown", 1, "dropdown-menu"], [4, "ngFor", "ngForOf"], ["href", "javascript:void(0);", 1, "dropdown-item", 3, "jhiActiveMenu", "click"], ["icon", "user"], ["jhiTranslate", "global.menu.account.main"], ["alt", "Avatar", 1, "profile-image", "rounded-circle", 3, "src"], ["routerLink", "account/settings", "routerLinkActive", "active", "data-cy", "settings", 1, "dropdown-item", 3, "click"], ["icon", "wrench", 3, "fixedWidth"], ["jhiTranslate", "global.menu.account.settings"], ["routerLink", "account/password", "routerLinkActive", "active", "data-cy", "passwordItem", 1, "dropdown-item", 3, "click"], ["icon", "lock", 3, "fixedWidth"], ["jhiTranslate", "global.menu.account.password"], ["id", "logout", "data-cy", "logout", 1, "dropdown-item", 3, "click"], ["icon", "sign-out-alt", 3, "fixedWidth"], ["jhiTranslate", "global.menu.account.logout"], ["id", "login", "data-cy", "login", 1, "dropdown-item", 3, "click"], ["icon", "sign-in-alt", 3, "fixedWidth"], ["jhiTranslate", "global.menu.account.login"], ["routerLink", "account/register", "routerLinkActive", "active", "data-cy", "register", 1, "dropdown-item", 3, "click"], ["icon", "user-plus", 3, "fixedWidth"], ["jhiTranslate", "global.menu.account.register"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_4_listener() { return ctx.collapseNavbar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Gateway");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_15_listener() { return ctx.toggleNavbar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_26_listener() { return ctx.collapseNavbar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "fa-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "\n              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Accueil");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, NavbarComponent_li_39_Template, 39, 8, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, NavbarComponent_li_41_Template, 85, 9, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, NavbarComponent_li_43_Template, 18, 1, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, NavbarComponent_span_49_Template, 7, 0, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](51, NavbarComponent_span_51_Template, 4, 1, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](56, NavbarComponent_li_56_Template, 10, 1, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](58, NavbarComponent_li_58_Template, 10, 1, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](60, NavbarComponent_li_60_Template, 10, 1, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](62, NavbarComponent_li_62_Template, 10, 1, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](64, NavbarComponent_li_64_Template, 10, 1, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.version);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngbCollapse", ctx.isNavbarCollapsed)("ngSwitch", ctx.account !== null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](15, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("jhiHasAnyAuthority", "ROLE_ADMIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.languages && ctx.languages.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](16, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx.account == null ? null : ctx.account.imageUrl));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.account == null ? null : ctx.account.imageUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", false);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgSwitchCase, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbCollapse, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavbar, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FaIconComponent, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_13__.TranslateDirective, _shared_auth_has_any_authority_directive__WEBPACK_IMPORTED_MODULE_14__.HasAnyAuthorityDirective, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkActive, _active_menu_directive__WEBPACK_IMPORTED_MODULE_15__.ActiveMenuDirective, _shared_language_find_language_from_key_pipe__WEBPACK_IMPORTED_MODULE_16__.FindLanguageFromKeyPipe], styles: [".navbar-version[_ngcontent-%COMP%] {\n  font-size: 0.65em;\n  color: rgba(255, 255, 255, 0.55);\n}\n.profile-image[_ngcontent-%COMP%] {\n  height: 1.75em;\n  width: 1.75em;\n}\n.navbar[_ngcontent-%COMP%] {\n  padding: 0.2rem 1rem;\n}\n.navbar[_ngcontent-%COMP%]   a.nav-link[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n\n.logo-img[_ngcontent-%COMP%] {\n  height: 45px;\n  width: 45px;\n  display: inline-block;\n  vertical-align: middle;\n  background: url('logo-jhipster.png') no-repeat center center;\n  background-size: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7OzRFQUFBO0FBSUE7RUFDRSxpQkFBQTtFQUNBLGdDQ3drQ2tDO0FEM2tDcEM7QUFNQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0FBSEY7QUFNQTtFQUNFLG9CQUFBO0FBSEY7QUFLRTtFQUNFLGdCQUFBO0FBSEo7QUFPQTs7NEVBQUE7QUFHQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLDREQUFBO0VBQ0Esd0JBQUE7QUFKRiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd+Ym9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zJztcbkBpbXBvcnQgJ35ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMnO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuTmF2YmFyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4ubmF2YmFyLXZlcnNpb24ge1xuICBmb250LXNpemU6IDAuNjVlbTtcbiAgY29sb3I6ICRuYXZiYXItZGFyay1jb2xvcjtcbn1cblxuLnByb2ZpbGUtaW1hZ2Uge1xuICBoZWlnaHQ6IDEuNzVlbTtcbiAgd2lkdGg6IDEuNzVlbTtcbn1cblxuLm5hdmJhciB7XG4gIHBhZGRpbmc6IDAuMnJlbSAxcmVtO1xuXG4gIGEubmF2LWxpbmsge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbn1cblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbkxvZ28gc3R5bGVzXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLmxvZ28taW1nIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICB3aWR0aDogNDVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2NvbnRlbnQvaW1hZ2VzL2xvZ28tamhpcHN0ZXIucG5nJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cbiIsIi8vIFZhcmlhYmxlc1xuLy9cbi8vIFZhcmlhYmxlcyBzaG91bGQgZm9sbG93IHRoZSBgJGNvbXBvbmVudC1zdGF0ZS1wcm9wZXJ0eS1zaXplYCBmb3JtdWxhIGZvclxuLy8gY29uc2lzdGVudCBuYW1pbmcuIEV4OiAkbmF2LWxpbmstZGlzYWJsZWQtY29sb3IgYW5kICRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHMuXG5cbi8vIENvbG9yIHN5c3RlbVxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZ3JheS1jb2xvci12YXJpYWJsZXNcbiR3aGl0ZTogICAgI2ZmZiAhZGVmYXVsdDtcbiRncmF5LTEwMDogI2Y4ZjlmYSAhZGVmYXVsdDtcbiRncmF5LTIwMDogI2U5ZWNlZiAhZGVmYXVsdDtcbiRncmF5LTMwMDogI2RlZTJlNiAhZGVmYXVsdDtcbiRncmF5LTQwMDogI2NlZDRkYSAhZGVmYXVsdDtcbiRncmF5LTUwMDogI2FkYjViZCAhZGVmYXVsdDtcbiRncmF5LTYwMDogIzZjNzU3ZCAhZGVmYXVsdDtcbiRncmF5LTcwMDogIzQ5NTA1NyAhZGVmYXVsdDtcbiRncmF5LTgwMDogIzM0M2E0MCAhZGVmYXVsdDtcbiRncmF5LTkwMDogIzIxMjUyOSAhZGVmYXVsdDtcbiRibGFjazogICAgIzAwMCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgZ3JheS1jb2xvci12YXJpYWJsZXNcblxuLy8gZnVzdi1kaXNhYmxlXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZ3JheS1jb2xvcnMtbWFwXG4kZ3JheXM6IChcbiAgXCIxMDBcIjogJGdyYXktMTAwLFxuICBcIjIwMFwiOiAkZ3JheS0yMDAsXG4gIFwiMzAwXCI6ICRncmF5LTMwMCxcbiAgXCI0MDBcIjogJGdyYXktNDAwLFxuICBcIjUwMFwiOiAkZ3JheS01MDAsXG4gIFwiNjAwXCI6ICRncmF5LTYwMCxcbiAgXCI3MDBcIjogJGdyYXktNzAwLFxuICBcIjgwMFwiOiAkZ3JheS04MDAsXG4gIFwiOTAwXCI6ICRncmF5LTkwMFxuKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgZ3JheS1jb2xvcnMtbWFwXG4vLyBmdXN2LWVuYWJsZVxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgY29sb3ItdmFyaWFibGVzXG4kYmx1ZTogICAgIzBkNmVmZCAhZGVmYXVsdDtcbiRpbmRpZ286ICAjNjYxMGYyICFkZWZhdWx0O1xuJHB1cnBsZTogICM2ZjQyYzEgIWRlZmF1bHQ7XG4kcGluazogICAgI2Q2MzM4NCAhZGVmYXVsdDtcbiRyZWQ6ICAgICAjZGMzNTQ1ICFkZWZhdWx0O1xuJG9yYW5nZTogICNmZDdlMTQgIWRlZmF1bHQ7XG4keWVsbG93OiAgI2ZmYzEwNyAhZGVmYXVsdDtcbiRncmVlbjogICAjMTk4NzU0ICFkZWZhdWx0O1xuJHRlYWw6ICAgICMyMGM5OTcgIWRlZmF1bHQ7XG4kY3lhbjogICAgIzBkY2FmMCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgY29sb3ItdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBjb2xvcnMtbWFwXG4kY29sb3JzOiAoXG4gIFwiYmx1ZVwiOiAgICAgICAkYmx1ZSxcbiAgXCJpbmRpZ29cIjogICAgICRpbmRpZ28sXG4gIFwicHVycGxlXCI6ICAgICAkcHVycGxlLFxuICBcInBpbmtcIjogICAgICAgJHBpbmssXG4gIFwicmVkXCI6ICAgICAgICAkcmVkLFxuICBcIm9yYW5nZVwiOiAgICAgJG9yYW5nZSxcbiAgXCJ5ZWxsb3dcIjogICAgICR5ZWxsb3csXG4gIFwiZ3JlZW5cIjogICAgICAkZ3JlZW4sXG4gIFwidGVhbFwiOiAgICAgICAkdGVhbCxcbiAgXCJjeWFuXCI6ICAgICAgICRjeWFuLFxuICBcImJsYWNrXCI6ICAgICAgJGJsYWNrLFxuICBcIndoaXRlXCI6ICAgICAgJHdoaXRlLFxuICBcImdyYXlcIjogICAgICAgJGdyYXktNjAwLFxuICBcImdyYXktZGFya1wiOiAgJGdyYXktODAwXG4pICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBjb2xvcnMtbWFwXG5cbi8vIFRoZSBjb250cmFzdCByYXRpbyB0byByZWFjaCBhZ2FpbnN0IHdoaXRlLCB0byBkZXRlcm1pbmUgaWYgY29sb3IgY2hhbmdlcyBmcm9tIFwibGlnaHRcIiB0byBcImRhcmtcIi4gQWNjZXB0YWJsZSB2YWx1ZXMgZm9yIFdDQUcgMi4wIGFyZSAzLCA0LjUgYW5kIDcuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL1dDQUcyMC8jdmlzdWFsLWF1ZGlvLWNvbnRyYXN0LWNvbnRyYXN0XG4kbWluLWNvbnRyYXN0LXJhdGlvOiAgIDQuNSAhZGVmYXVsdDtcblxuLy8gQ3VzdG9taXplIHRoZSBsaWdodCBhbmQgZGFyayB0ZXh0IGNvbG9ycyBmb3IgdXNlIGluIG91ciBjb2xvciBjb250cmFzdCBmdW5jdGlvbi5cbiRjb2xvci1jb250cmFzdC1kYXJrOiAgICAgICRibGFjayAhZGVmYXVsdDtcbiRjb2xvci1jb250cmFzdC1saWdodDogICAgICR3aGl0ZSAhZGVmYXVsdDtcblxuLy8gZnVzdi1kaXNhYmxlXG4kYmx1ZS0xMDA6IHRpbnQtY29sb3IoJGJsdWUsIDgwJSkgIWRlZmF1bHQ7XG4kYmx1ZS0yMDA6IHRpbnQtY29sb3IoJGJsdWUsIDYwJSkgIWRlZmF1bHQ7XG4kYmx1ZS0zMDA6IHRpbnQtY29sb3IoJGJsdWUsIDQwJSkgIWRlZmF1bHQ7XG4kYmx1ZS00MDA6IHRpbnQtY29sb3IoJGJsdWUsIDIwJSkgIWRlZmF1bHQ7XG4kYmx1ZS01MDA6ICRibHVlICFkZWZhdWx0O1xuJGJsdWUtNjAwOiBzaGFkZS1jb2xvcigkYmx1ZSwgMjAlKSAhZGVmYXVsdDtcbiRibHVlLTcwMDogc2hhZGUtY29sb3IoJGJsdWUsIDQwJSkgIWRlZmF1bHQ7XG4kYmx1ZS04MDA6IHNoYWRlLWNvbG9yKCRibHVlLCA2MCUpICFkZWZhdWx0O1xuJGJsdWUtOTAwOiBzaGFkZS1jb2xvcigkYmx1ZSwgODAlKSAhZGVmYXVsdDtcblxuJGluZGlnby0xMDA6IHRpbnQtY29sb3IoJGluZGlnbywgODAlKSAhZGVmYXVsdDtcbiRpbmRpZ28tMjAwOiB0aW50LWNvbG9yKCRpbmRpZ28sIDYwJSkgIWRlZmF1bHQ7XG4kaW5kaWdvLTMwMDogdGludC1jb2xvcigkaW5kaWdvLCA0MCUpICFkZWZhdWx0O1xuJGluZGlnby00MDA6IHRpbnQtY29sb3IoJGluZGlnbywgMjAlKSAhZGVmYXVsdDtcbiRpbmRpZ28tNTAwOiAkaW5kaWdvICFkZWZhdWx0O1xuJGluZGlnby02MDA6IHNoYWRlLWNvbG9yKCRpbmRpZ28sIDIwJSkgIWRlZmF1bHQ7XG4kaW5kaWdvLTcwMDogc2hhZGUtY29sb3IoJGluZGlnbywgNDAlKSAhZGVmYXVsdDtcbiRpbmRpZ28tODAwOiBzaGFkZS1jb2xvcigkaW5kaWdvLCA2MCUpICFkZWZhdWx0O1xuJGluZGlnby05MDA6IHNoYWRlLWNvbG9yKCRpbmRpZ28sIDgwJSkgIWRlZmF1bHQ7XG5cbiRwdXJwbGUtMTAwOiB0aW50LWNvbG9yKCRwdXJwbGUsIDgwJSkgIWRlZmF1bHQ7XG4kcHVycGxlLTIwMDogdGludC1jb2xvcigkcHVycGxlLCA2MCUpICFkZWZhdWx0O1xuJHB1cnBsZS0zMDA6IHRpbnQtY29sb3IoJHB1cnBsZSwgNDAlKSAhZGVmYXVsdDtcbiRwdXJwbGUtNDAwOiB0aW50LWNvbG9yKCRwdXJwbGUsIDIwJSkgIWRlZmF1bHQ7XG4kcHVycGxlLTUwMDogJHB1cnBsZSAhZGVmYXVsdDtcbiRwdXJwbGUtNjAwOiBzaGFkZS1jb2xvcigkcHVycGxlLCAyMCUpICFkZWZhdWx0O1xuJHB1cnBsZS03MDA6IHNoYWRlLWNvbG9yKCRwdXJwbGUsIDQwJSkgIWRlZmF1bHQ7XG4kcHVycGxlLTgwMDogc2hhZGUtY29sb3IoJHB1cnBsZSwgNjAlKSAhZGVmYXVsdDtcbiRwdXJwbGUtOTAwOiBzaGFkZS1jb2xvcigkcHVycGxlLCA4MCUpICFkZWZhdWx0O1xuXG4kcGluay0xMDA6IHRpbnQtY29sb3IoJHBpbmssIDgwJSkgIWRlZmF1bHQ7XG4kcGluay0yMDA6IHRpbnQtY29sb3IoJHBpbmssIDYwJSkgIWRlZmF1bHQ7XG4kcGluay0zMDA6IHRpbnQtY29sb3IoJHBpbmssIDQwJSkgIWRlZmF1bHQ7XG4kcGluay00MDA6IHRpbnQtY29sb3IoJHBpbmssIDIwJSkgIWRlZmF1bHQ7XG4kcGluay01MDA6ICRwaW5rICFkZWZhdWx0O1xuJHBpbmstNjAwOiBzaGFkZS1jb2xvcigkcGluaywgMjAlKSAhZGVmYXVsdDtcbiRwaW5rLTcwMDogc2hhZGUtY29sb3IoJHBpbmssIDQwJSkgIWRlZmF1bHQ7XG4kcGluay04MDA6IHNoYWRlLWNvbG9yKCRwaW5rLCA2MCUpICFkZWZhdWx0O1xuJHBpbmstOTAwOiBzaGFkZS1jb2xvcigkcGluaywgODAlKSAhZGVmYXVsdDtcblxuJHJlZC0xMDA6IHRpbnQtY29sb3IoJHJlZCwgODAlKSAhZGVmYXVsdDtcbiRyZWQtMjAwOiB0aW50LWNvbG9yKCRyZWQsIDYwJSkgIWRlZmF1bHQ7XG4kcmVkLTMwMDogdGludC1jb2xvcigkcmVkLCA0MCUpICFkZWZhdWx0O1xuJHJlZC00MDA6IHRpbnQtY29sb3IoJHJlZCwgMjAlKSAhZGVmYXVsdDtcbiRyZWQtNTAwOiAkcmVkICFkZWZhdWx0O1xuJHJlZC02MDA6IHNoYWRlLWNvbG9yKCRyZWQsIDIwJSkgIWRlZmF1bHQ7XG4kcmVkLTcwMDogc2hhZGUtY29sb3IoJHJlZCwgNDAlKSAhZGVmYXVsdDtcbiRyZWQtODAwOiBzaGFkZS1jb2xvcigkcmVkLCA2MCUpICFkZWZhdWx0O1xuJHJlZC05MDA6IHNoYWRlLWNvbG9yKCRyZWQsIDgwJSkgIWRlZmF1bHQ7XG5cbiRvcmFuZ2UtMTAwOiB0aW50LWNvbG9yKCRvcmFuZ2UsIDgwJSkgIWRlZmF1bHQ7XG4kb3JhbmdlLTIwMDogdGludC1jb2xvcigkb3JhbmdlLCA2MCUpICFkZWZhdWx0O1xuJG9yYW5nZS0zMDA6IHRpbnQtY29sb3IoJG9yYW5nZSwgNDAlKSAhZGVmYXVsdDtcbiRvcmFuZ2UtNDAwOiB0aW50LWNvbG9yKCRvcmFuZ2UsIDIwJSkgIWRlZmF1bHQ7XG4kb3JhbmdlLTUwMDogJG9yYW5nZSAhZGVmYXVsdDtcbiRvcmFuZ2UtNjAwOiBzaGFkZS1jb2xvcigkb3JhbmdlLCAyMCUpICFkZWZhdWx0O1xuJG9yYW5nZS03MDA6IHNoYWRlLWNvbG9yKCRvcmFuZ2UsIDQwJSkgIWRlZmF1bHQ7XG4kb3JhbmdlLTgwMDogc2hhZGUtY29sb3IoJG9yYW5nZSwgNjAlKSAhZGVmYXVsdDtcbiRvcmFuZ2UtOTAwOiBzaGFkZS1jb2xvcigkb3JhbmdlLCA4MCUpICFkZWZhdWx0O1xuXG4keWVsbG93LTEwMDogdGludC1jb2xvcigkeWVsbG93LCA4MCUpICFkZWZhdWx0O1xuJHllbGxvdy0yMDA6IHRpbnQtY29sb3IoJHllbGxvdywgNjAlKSAhZGVmYXVsdDtcbiR5ZWxsb3ctMzAwOiB0aW50LWNvbG9yKCR5ZWxsb3csIDQwJSkgIWRlZmF1bHQ7XG4keWVsbG93LTQwMDogdGludC1jb2xvcigkeWVsbG93LCAyMCUpICFkZWZhdWx0O1xuJHllbGxvdy01MDA6ICR5ZWxsb3cgIWRlZmF1bHQ7XG4keWVsbG93LTYwMDogc2hhZGUtY29sb3IoJHllbGxvdywgMjAlKSAhZGVmYXVsdDtcbiR5ZWxsb3ctNzAwOiBzaGFkZS1jb2xvcigkeWVsbG93LCA0MCUpICFkZWZhdWx0O1xuJHllbGxvdy04MDA6IHNoYWRlLWNvbG9yKCR5ZWxsb3csIDYwJSkgIWRlZmF1bHQ7XG4keWVsbG93LTkwMDogc2hhZGUtY29sb3IoJHllbGxvdywgODAlKSAhZGVmYXVsdDtcblxuJGdyZWVuLTEwMDogdGludC1jb2xvcigkZ3JlZW4sIDgwJSkgIWRlZmF1bHQ7XG4kZ3JlZW4tMjAwOiB0aW50LWNvbG9yKCRncmVlbiwgNjAlKSAhZGVmYXVsdDtcbiRncmVlbi0zMDA6IHRpbnQtY29sb3IoJGdyZWVuLCA0MCUpICFkZWZhdWx0O1xuJGdyZWVuLTQwMDogdGludC1jb2xvcigkZ3JlZW4sIDIwJSkgIWRlZmF1bHQ7XG4kZ3JlZW4tNTAwOiAkZ3JlZW4gIWRlZmF1bHQ7XG4kZ3JlZW4tNjAwOiBzaGFkZS1jb2xvcigkZ3JlZW4sIDIwJSkgIWRlZmF1bHQ7XG4kZ3JlZW4tNzAwOiBzaGFkZS1jb2xvcigkZ3JlZW4sIDQwJSkgIWRlZmF1bHQ7XG4kZ3JlZW4tODAwOiBzaGFkZS1jb2xvcigkZ3JlZW4sIDYwJSkgIWRlZmF1bHQ7XG4kZ3JlZW4tOTAwOiBzaGFkZS1jb2xvcigkZ3JlZW4sIDgwJSkgIWRlZmF1bHQ7XG5cbiR0ZWFsLTEwMDogdGludC1jb2xvcigkdGVhbCwgODAlKSAhZGVmYXVsdDtcbiR0ZWFsLTIwMDogdGludC1jb2xvcigkdGVhbCwgNjAlKSAhZGVmYXVsdDtcbiR0ZWFsLTMwMDogdGludC1jb2xvcigkdGVhbCwgNDAlKSAhZGVmYXVsdDtcbiR0ZWFsLTQwMDogdGludC1jb2xvcigkdGVhbCwgMjAlKSAhZGVmYXVsdDtcbiR0ZWFsLTUwMDogJHRlYWwgIWRlZmF1bHQ7XG4kdGVhbC02MDA6IHNoYWRlLWNvbG9yKCR0ZWFsLCAyMCUpICFkZWZhdWx0O1xuJHRlYWwtNzAwOiBzaGFkZS1jb2xvcigkdGVhbCwgNDAlKSAhZGVmYXVsdDtcbiR0ZWFsLTgwMDogc2hhZGUtY29sb3IoJHRlYWwsIDYwJSkgIWRlZmF1bHQ7XG4kdGVhbC05MDA6IHNoYWRlLWNvbG9yKCR0ZWFsLCA4MCUpICFkZWZhdWx0O1xuXG4kY3lhbi0xMDA6IHRpbnQtY29sb3IoJGN5YW4sIDgwJSkgIWRlZmF1bHQ7XG4kY3lhbi0yMDA6IHRpbnQtY29sb3IoJGN5YW4sIDYwJSkgIWRlZmF1bHQ7XG4kY3lhbi0zMDA6IHRpbnQtY29sb3IoJGN5YW4sIDQwJSkgIWRlZmF1bHQ7XG4kY3lhbi00MDA6IHRpbnQtY29sb3IoJGN5YW4sIDIwJSkgIWRlZmF1bHQ7XG4kY3lhbi01MDA6ICRjeWFuICFkZWZhdWx0O1xuJGN5YW4tNjAwOiBzaGFkZS1jb2xvcigkY3lhbiwgMjAlKSAhZGVmYXVsdDtcbiRjeWFuLTcwMDogc2hhZGUtY29sb3IoJGN5YW4sIDQwJSkgIWRlZmF1bHQ7XG4kY3lhbi04MDA6IHNoYWRlLWNvbG9yKCRjeWFuLCA2MCUpICFkZWZhdWx0O1xuJGN5YW4tOTAwOiBzaGFkZS1jb2xvcigkY3lhbiwgODAlKSAhZGVmYXVsdDtcblxuJGJsdWVzOiAoXG4gIFwiYmx1ZS0xMDBcIjogJGJsdWUtMTAwLFxuICBcImJsdWUtMjAwXCI6ICRibHVlLTIwMCxcbiAgXCJibHVlLTMwMFwiOiAkYmx1ZS0zMDAsXG4gIFwiYmx1ZS00MDBcIjogJGJsdWUtNDAwLFxuICBcImJsdWUtNTAwXCI6ICRibHVlLTUwMCxcbiAgXCJibHVlLTYwMFwiOiAkYmx1ZS02MDAsXG4gIFwiYmx1ZS03MDBcIjogJGJsdWUtNzAwLFxuICBcImJsdWUtODAwXCI6ICRibHVlLTgwMCxcbiAgXCJibHVlLTkwMFwiOiAkYmx1ZS05MDBcbikgIWRlZmF1bHQ7XG5cbiRpbmRpZ29zOiAoXG4gIFwiaW5kaWdvLTEwMFwiOiAkaW5kaWdvLTEwMCxcbiAgXCJpbmRpZ28tMjAwXCI6ICRpbmRpZ28tMjAwLFxuICBcImluZGlnby0zMDBcIjogJGluZGlnby0zMDAsXG4gIFwiaW5kaWdvLTQwMFwiOiAkaW5kaWdvLTQwMCxcbiAgXCJpbmRpZ28tNTAwXCI6ICRpbmRpZ28tNTAwLFxuICBcImluZGlnby02MDBcIjogJGluZGlnby02MDAsXG4gIFwiaW5kaWdvLTcwMFwiOiAkaW5kaWdvLTcwMCxcbiAgXCJpbmRpZ28tODAwXCI6ICRpbmRpZ28tODAwLFxuICBcImluZGlnby05MDBcIjogJGluZGlnby05MDBcbikgIWRlZmF1bHQ7XG5cbiRwdXJwbGVzOiAoXG4gIFwicHVycGxlLTEwMFwiOiAkcHVycGxlLTEwMCxcbiAgXCJwdXJwbGUtMjAwXCI6ICRwdXJwbGUtMjAwLFxuICBcInB1cnBsZS0zMDBcIjogJHB1cnBsZS0zMDAsXG4gIFwicHVycGxlLTQwMFwiOiAkcHVycGxlLTQwMCxcbiAgXCJwdXJwbGUtNTAwXCI6ICRwdXJwbGUtNTAwLFxuICBcInB1cnBsZS02MDBcIjogJHB1cnBsZS02MDAsXG4gIFwicHVycGxlLTcwMFwiOiAkcHVycGxlLTcwMCxcbiAgXCJwdXJwbGUtODAwXCI6ICRwdXJwbGUtODAwLFxuICBcInB1cnBsZS05MDBcIjogJHB1cnBsZS05MDBcbikgIWRlZmF1bHQ7XG5cbiRwaW5rczogKFxuICBcInBpbmstMTAwXCI6ICRwaW5rLTEwMCxcbiAgXCJwaW5rLTIwMFwiOiAkcGluay0yMDAsXG4gIFwicGluay0zMDBcIjogJHBpbmstMzAwLFxuICBcInBpbmstNDAwXCI6ICRwaW5rLTQwMCxcbiAgXCJwaW5rLTUwMFwiOiAkcGluay01MDAsXG4gIFwicGluay02MDBcIjogJHBpbmstNjAwLFxuICBcInBpbmstNzAwXCI6ICRwaW5rLTcwMCxcbiAgXCJwaW5rLTgwMFwiOiAkcGluay04MDAsXG4gIFwicGluay05MDBcIjogJHBpbmstOTAwXG4pICFkZWZhdWx0O1xuXG4kcmVkczogKFxuICBcInJlZC0xMDBcIjogJHJlZC0xMDAsXG4gIFwicmVkLTIwMFwiOiAkcmVkLTIwMCxcbiAgXCJyZWQtMzAwXCI6ICRyZWQtMzAwLFxuICBcInJlZC00MDBcIjogJHJlZC00MDAsXG4gIFwicmVkLTUwMFwiOiAkcmVkLTUwMCxcbiAgXCJyZWQtNjAwXCI6ICRyZWQtNjAwLFxuICBcInJlZC03MDBcIjogJHJlZC03MDAsXG4gIFwicmVkLTgwMFwiOiAkcmVkLTgwMCxcbiAgXCJyZWQtOTAwXCI6ICRyZWQtOTAwXG4pICFkZWZhdWx0O1xuXG4kb3JhbmdlczogKFxuICBcIm9yYW5nZS0xMDBcIjogJG9yYW5nZS0xMDAsXG4gIFwib3JhbmdlLTIwMFwiOiAkb3JhbmdlLTIwMCxcbiAgXCJvcmFuZ2UtMzAwXCI6ICRvcmFuZ2UtMzAwLFxuICBcIm9yYW5nZS00MDBcIjogJG9yYW5nZS00MDAsXG4gIFwib3JhbmdlLTUwMFwiOiAkb3JhbmdlLTUwMCxcbiAgXCJvcmFuZ2UtNjAwXCI6ICRvcmFuZ2UtNjAwLFxuICBcIm9yYW5nZS03MDBcIjogJG9yYW5nZS03MDAsXG4gIFwib3JhbmdlLTgwMFwiOiAkb3JhbmdlLTgwMCxcbiAgXCJvcmFuZ2UtOTAwXCI6ICRvcmFuZ2UtOTAwXG4pICFkZWZhdWx0O1xuXG4keWVsbG93czogKFxuICBcInllbGxvdy0xMDBcIjogJHllbGxvdy0xMDAsXG4gIFwieWVsbG93LTIwMFwiOiAkeWVsbG93LTIwMCxcbiAgXCJ5ZWxsb3ctMzAwXCI6ICR5ZWxsb3ctMzAwLFxuICBcInllbGxvdy00MDBcIjogJHllbGxvdy00MDAsXG4gIFwieWVsbG93LTUwMFwiOiAkeWVsbG93LTUwMCxcbiAgXCJ5ZWxsb3ctNjAwXCI6ICR5ZWxsb3ctNjAwLFxuICBcInllbGxvdy03MDBcIjogJHllbGxvdy03MDAsXG4gIFwieWVsbG93LTgwMFwiOiAkeWVsbG93LTgwMCxcbiAgXCJ5ZWxsb3ctOTAwXCI6ICR5ZWxsb3ctOTAwXG4pICFkZWZhdWx0O1xuXG4kZ3JlZW5zOiAoXG4gIFwiZ3JlZW4tMTAwXCI6ICRncmVlbi0xMDAsXG4gIFwiZ3JlZW4tMjAwXCI6ICRncmVlbi0yMDAsXG4gIFwiZ3JlZW4tMzAwXCI6ICRncmVlbi0zMDAsXG4gIFwiZ3JlZW4tNDAwXCI6ICRncmVlbi00MDAsXG4gIFwiZ3JlZW4tNTAwXCI6ICRncmVlbi01MDAsXG4gIFwiZ3JlZW4tNjAwXCI6ICRncmVlbi02MDAsXG4gIFwiZ3JlZW4tNzAwXCI6ICRncmVlbi03MDAsXG4gIFwiZ3JlZW4tODAwXCI6ICRncmVlbi04MDAsXG4gIFwiZ3JlZW4tOTAwXCI6ICRncmVlbi05MDBcbikgIWRlZmF1bHQ7XG5cbiR0ZWFsczogKFxuICBcInRlYWwtMTAwXCI6ICR0ZWFsLTEwMCxcbiAgXCJ0ZWFsLTIwMFwiOiAkdGVhbC0yMDAsXG4gIFwidGVhbC0zMDBcIjogJHRlYWwtMzAwLFxuICBcInRlYWwtNDAwXCI6ICR0ZWFsLTQwMCxcbiAgXCJ0ZWFsLTUwMFwiOiAkdGVhbC01MDAsXG4gIFwidGVhbC02MDBcIjogJHRlYWwtNjAwLFxuICBcInRlYWwtNzAwXCI6ICR0ZWFsLTcwMCxcbiAgXCJ0ZWFsLTgwMFwiOiAkdGVhbC04MDAsXG4gIFwidGVhbC05MDBcIjogJHRlYWwtOTAwXG4pICFkZWZhdWx0O1xuXG4kY3lhbnM6IChcbiAgXCJjeWFuLTEwMFwiOiAkY3lhbi0xMDAsXG4gIFwiY3lhbi0yMDBcIjogJGN5YW4tMjAwLFxuICBcImN5YW4tMzAwXCI6ICRjeWFuLTMwMCxcbiAgXCJjeWFuLTQwMFwiOiAkY3lhbi00MDAsXG4gIFwiY3lhbi01MDBcIjogJGN5YW4tNTAwLFxuICBcImN5YW4tNjAwXCI6ICRjeWFuLTYwMCxcbiAgXCJjeWFuLTcwMFwiOiAkY3lhbi03MDAsXG4gIFwiY3lhbi04MDBcIjogJGN5YW4tODAwLFxuICBcImN5YW4tOTAwXCI6ICRjeWFuLTkwMFxuKSAhZGVmYXVsdDtcbi8vIGZ1c3YtZW5hYmxlXG5cbi8vIHNjc3MtZG9jcy1zdGFydCB0aGVtZS1jb2xvci12YXJpYWJsZXNcbiRwcmltYXJ5OiAgICAgICAkYmx1ZSAhZGVmYXVsdDtcbiRzZWNvbmRhcnk6ICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kc3VjY2VzczogICAgICAgJGdyZWVuICFkZWZhdWx0O1xuJGluZm86ICAgICAgICAgICRjeWFuICFkZWZhdWx0O1xuJHdhcm5pbmc6ICAgICAgICR5ZWxsb3cgIWRlZmF1bHQ7XG4kZGFuZ2VyOiAgICAgICAgJHJlZCAhZGVmYXVsdDtcbiRsaWdodDogICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XG4kZGFyazogICAgICAgICAgJGdyYXktOTAwICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCB0aGVtZS1jb2xvci12YXJpYWJsZXNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IHRoZW1lLWNvbG9ycy1tYXBcbiR0aGVtZS1jb2xvcnM6IChcbiAgXCJwcmltYXJ5XCI6ICAgICRwcmltYXJ5LFxuICBcInNlY29uZGFyeVwiOiAgJHNlY29uZGFyeSxcbiAgXCJzdWNjZXNzXCI6ICAgICRzdWNjZXNzLFxuICBcImluZm9cIjogICAgICAgJGluZm8sXG4gIFwid2FybmluZ1wiOiAgICAkd2FybmluZyxcbiAgXCJkYW5nZXJcIjogICAgICRkYW5nZXIsXG4gIFwibGlnaHRcIjogICAgICAkbGlnaHQsXG4gIFwiZGFya1wiOiAgICAgICAkZGFya1xuKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgdGhlbWUtY29sb3JzLW1hcFxuXG4vLyBDaGFyYWN0ZXJzIHdoaWNoIGFyZSBlc2NhcGVkIGJ5IHRoZSBlc2NhcGUtc3ZnIGZ1bmN0aW9uXG4kZXNjYXBlZC1jaGFyYWN0ZXJzOiAoXG4gIChcIjxcIiwgXCIlM2NcIiksXG4gIChcIj5cIiwgXCIlM2VcIiksXG4gIChcIiNcIiwgXCIlMjNcIiksXG4gIChcIihcIiwgXCIlMjhcIiksXG4gIChcIilcIiwgXCIlMjlcIiksXG4pICFkZWZhdWx0O1xuXG4vLyBPcHRpb25zXG4vL1xuLy8gUXVpY2tseSBtb2RpZnkgZ2xvYmFsIHN0eWxpbmcgYnkgZW5hYmxpbmcgb3IgZGlzYWJsaW5nIG9wdGlvbmFsIGZlYXR1cmVzLlxuXG4kZW5hYmxlLWNhcmV0OiAgICAgICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1yb3VuZGVkOiAgICAgICAgICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtc2hhZG93czogICAgICAgICAgICAgIGZhbHNlICFkZWZhdWx0O1xuJGVuYWJsZS1ncmFkaWVudHM6ICAgICAgICAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLXRyYW5zaXRpb25zOiAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1yZWR1Y2VkLW1vdGlvbjogICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtc21vb3RoLXNjcm9sbDogICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLWdyaWQtY2xhc3NlczogICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1jb250YWluZXItY2xhc3NlczogICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtY3NzZ3JpZDogICAgICAgICAgICAgIGZhbHNlICFkZWZhdWx0O1xuJGVuYWJsZS1idXR0b24tcG9pbnRlcnM6ICAgICAgdHJ1ZSAhZGVmYXVsdDtcbiRlbmFibGUtcmZzOiAgICAgICAgICAgICAgICAgIHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXZhbGlkYXRpb24taWNvbnM6ICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1uZWdhdGl2ZS1tYXJnaW5zOiAgICAgZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLWRlcHJlY2F0aW9uLW1lc3NhZ2VzOiB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1pbXBvcnRhbnQtdXRpbGl0aWVzOiAgdHJ1ZSAhZGVmYXVsdDtcblxuLy8gUHJlZml4IGZvciA6cm9vdCBDU1MgdmFyaWFibGVzXG5cbiR2YXJpYWJsZS1wcmVmaXg6ICAgICAgICAgICAgIGJzLSAhZGVmYXVsdDsgLy8gRGVwcmVjYXRlZCBpbiB2NS4yLjAgZm9yIHRoZSBzaG9ydGVyIGAkcHJlZml4YFxuJHByZWZpeDogICAgICAgICAgICAgICAgICAgICAgJHZhcmlhYmxlLXByZWZpeCAhZGVmYXVsdDtcblxuLy8gR3JhZGllbnRcbi8vXG4vLyBUaGUgZ3JhZGllbnQgd2hpY2ggaXMgYWRkZWQgdG8gY29tcG9uZW50cyBpZiBgJGVuYWJsZS1ncmFkaWVudHNgIGlzIGB0cnVlYFxuLy8gVGhpcyBncmFkaWVudCBpcyBhbHNvIGFkZGVkIHRvIGVsZW1lbnRzIHdpdGggYC5iZy1ncmFkaWVudGBcbi8vIHNjc3MtZG9jcy1zdGFydCB2YXJpYWJsZS1ncmFkaWVudFxuJGdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKCR3aGl0ZSwgLjE1KSwgcmdiYSgkd2hpdGUsIDApKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgdmFyaWFibGUtZ3JhZGllbnRcblxuLy8gU3BhY2luZ1xuLy9cbi8vIENvbnRyb2wgdGhlIGRlZmF1bHQgc3R5bGluZyBvZiBtb3N0IEJvb3RzdHJhcCBlbGVtZW50cyBieSBtb2RpZnlpbmcgdGhlc2Vcbi8vIHZhcmlhYmxlcy4gTW9zdGx5IGZvY3VzZWQgb24gc3BhY2luZy5cbi8vIFlvdSBjYW4gYWRkIG1vcmUgZW50cmllcyB0byB0aGUgJHNwYWNlcnMgbWFwLCBzaG91bGQgeW91IG5lZWQgbW9yZSB2YXJpYXRpb24uXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBzcGFjZXItdmFyaWFibGVzLW1hcHNcbiRzcGFjZXI6IDFyZW0gIWRlZmF1bHQ7XG4kc3BhY2VyczogKFxuICAwOiAwLFxuICAxOiAkc3BhY2VyICogLjI1LFxuICAyOiAkc3BhY2VyICogLjUsXG4gIDM6ICRzcGFjZXIsXG4gIDQ6ICRzcGFjZXIgKiAxLjUsXG4gIDU6ICRzcGFjZXIgKiAzLFxuKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgc3BhY2VyLXZhcmlhYmxlcy1tYXBzXG5cbi8vIFBvc2l0aW9uXG4vL1xuLy8gRGVmaW5lIHRoZSBlZGdlIHBvc2l0aW9uaW5nIGFuY2hvcnMgb2YgdGhlIHBvc2l0aW9uIHV0aWxpdGllcy5cblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IHBvc2l0aW9uLW1hcFxuJHBvc2l0aW9uLXZhbHVlczogKFxuICAwOiAwLFxuICA1MDogNTAlLFxuICAxMDA6IDEwMCVcbikgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIHBvc2l0aW9uLW1hcFxuXG4vLyBCb2R5XG4vL1xuLy8gU2V0dGluZ3MgZm9yIHRoZSBgPGJvZHk+YCBlbGVtZW50LlxuXG4kYm9keS1iZzogICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGJvZHktY29sb3I6ICAgICAgICAgICAgICAgICRncmF5LTkwMCAhZGVmYXVsdDtcbiRib2R5LXRleHQtYWxpZ246ICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuXG4vLyBMaW5rc1xuLy9cbi8vIFN0eWxlIGFuY2hvciBlbGVtZW50cy5cblxuJGxpbmstY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByaW1hcnkgIWRlZmF1bHQ7XG4kbGluay1kZWNvcmF0aW9uOiAgICAgICAgICAgICAgICAgICAgICAgICB1bmRlcmxpbmUgIWRlZmF1bHQ7XG4kbGluay1zaGFkZS1wZXJjZW50YWdlOiAgICAgICAgICAgICAgICAgICAyMCUgIWRlZmF1bHQ7XG4kbGluay1ob3Zlci1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICBzaGlmdC1jb2xvcigkbGluay1jb2xvciwgJGxpbmstc2hhZGUtcGVyY2VudGFnZSkgIWRlZmF1bHQ7XG4kbGluay1ob3Zlci1kZWNvcmF0aW9uOiAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuXG4kc3RyZXRjaGVkLWxpbmstcHNldWRvLWVsZW1lbnQ6ICAgICAgICAgICBhZnRlciAhZGVmYXVsdDtcbiRzdHJldGNoZWQtbGluay16LWluZGV4OiAgICAgICAgICAgICAgICAgIDEgIWRlZmF1bHQ7XG5cbi8vIFBhcmFncmFwaHNcbi8vXG4vLyBTdHlsZSBwIGVsZW1lbnQuXG5cbiRwYXJhZ3JhcGgtbWFyZ2luLWJvdHRvbTogICAxcmVtICFkZWZhdWx0O1xuXG5cbi8vIEdyaWQgYnJlYWtwb2ludHNcbi8vXG4vLyBEZWZpbmUgdGhlIG1pbmltdW0gZGltZW5zaW9ucyBhdCB3aGljaCB5b3VyIGxheW91dCB3aWxsIGNoYW5nZSxcbi8vIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMsIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllcy5cblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGdyaWQtYnJlYWtwb2ludHNcbiRncmlkLWJyZWFrcG9pbnRzOiAoXG4gIHhzOiAwLFxuICBzbTogNTc2cHgsXG4gIG1kOiA3NjhweCxcbiAgbGc6IDk5MnB4LFxuICB4bDogMTIwMHB4LFxuICB4eGw6IDE0MDBweFxuKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgZ3JpZC1icmVha3BvaW50c1xuXG5AaW5jbHVkZSBfYXNzZXJ0LWFzY2VuZGluZygkZ3JpZC1icmVha3BvaW50cywgXCIkZ3JpZC1icmVha3BvaW50c1wiKTtcbkBpbmNsdWRlIF9hc3NlcnQtc3RhcnRzLWF0LXplcm8oJGdyaWQtYnJlYWtwb2ludHMsIFwiJGdyaWQtYnJlYWtwb2ludHNcIik7XG5cblxuLy8gR3JpZCBjb250YWluZXJzXG4vL1xuLy8gRGVmaW5lIHRoZSBtYXhpbXVtIHdpZHRoIG9mIGAuY29udGFpbmVyYCBmb3IgZGlmZmVyZW50IHNjcmVlbiBzaXplcy5cblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGNvbnRhaW5lci1tYXgtd2lkdGhzXG4kY29udGFpbmVyLW1heC13aWR0aHM6IChcbiAgc206IDU0MHB4LFxuICBtZDogNzIwcHgsXG4gIGxnOiA5NjBweCxcbiAgeGw6IDExNDBweCxcbiAgeHhsOiAxMzIwcHhcbikgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGNvbnRhaW5lci1tYXgtd2lkdGhzXG5cbkBpbmNsdWRlIF9hc3NlcnQtYXNjZW5kaW5nKCRjb250YWluZXItbWF4LXdpZHRocywgXCIkY29udGFpbmVyLW1heC13aWR0aHNcIik7XG5cblxuLy8gR3JpZCBjb2x1bW5zXG4vL1xuLy8gU2V0IHRoZSBudW1iZXIgb2YgY29sdW1ucyBhbmQgc3BlY2lmeSB0aGUgd2lkdGggb2YgdGhlIGd1dHRlcnMuXG5cbiRncmlkLWNvbHVtbnM6ICAgICAgICAgICAgICAgIDEyICFkZWZhdWx0O1xuJGdyaWQtZ3V0dGVyLXdpZHRoOiAgICAgICAgICAgMS41cmVtICFkZWZhdWx0O1xuJGdyaWQtcm93LWNvbHVtbnM6ICAgICAgICAgICAgNiAhZGVmYXVsdDtcblxuLy8gQ29udGFpbmVyIHBhZGRpbmdcblxuJGNvbnRhaW5lci1wYWRkaW5nLXg6ICRncmlkLWd1dHRlci13aWR0aCAhZGVmYXVsdDtcblxuXG4vLyBDb21wb25lbnRzXG4vL1xuLy8gRGVmaW5lIGNvbW1vbiBwYWRkaW5nIGFuZCBib3JkZXIgcmFkaXVzIHNpemVzIGFuZCBtb3JlLlxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgYm9yZGVyLXZhcmlhYmxlc1xuJGJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgMXB4ICFkZWZhdWx0O1xuJGJvcmRlci13aWR0aHM6IChcbiAgMTogMXB4LFxuICAyOiAycHgsXG4gIDM6IDNweCxcbiAgNDogNHB4LFxuICA1OiA1cHhcbikgIWRlZmF1bHQ7XG5cbiRib3JkZXItc3R5bGU6ICAgICAgICAgICAgICAgIHNvbGlkICFkZWZhdWx0O1xuJGJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuJGJvcmRlci1jb2xvci10cmFuc2x1Y2VudDogICAgcmdiYSgkYmxhY2ssIC4xNzUpICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBib3JkZXItdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBib3JkZXItcmFkaXVzLXZhcmlhYmxlc1xuJGJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgLjM3NXJlbSAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLXNtOiAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWxnOiAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXMteGw6ICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLTJ4bDogICAgICAgICAgIDJyZW0gIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1waWxsOiAgICAgICAgICA1MHJlbSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgYm9yZGVyLXJhZGl1cy12YXJpYWJsZXNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGJveC1zaGFkb3ctdmFyaWFibGVzXG4kYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAwIC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIC4xNSkgIWRlZmF1bHQ7XG4kYm94LXNoYWRvdy1zbTogICAgICAgICAgICAgICAwIC4xMjVyZW0gLjI1cmVtIHJnYmEoJGJsYWNrLCAuMDc1KSAhZGVmYXVsdDtcbiRib3gtc2hhZG93LWxnOiAgICAgICAgICAgICAgIDAgMXJlbSAzcmVtIHJnYmEoJGJsYWNrLCAuMTc1KSAhZGVmYXVsdDtcbiRib3gtc2hhZG93LWluc2V0OiAgICAgICAgICAgIGluc2V0IDAgMXB4IDJweCByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGJveC1zaGFkb3ctdmFyaWFibGVzXG5cbiRjb21wb25lbnQtYWN0aXZlLWNvbG9yOiAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRjb21wb25lbnQtYWN0aXZlLWJnOiAgICAgICAgICRwcmltYXJ5ICFkZWZhdWx0O1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgY2FyZXQtdmFyaWFibGVzXG4kY2FyZXQtd2lkdGg6ICAgICAgICAgICAgICAgICAuM2VtICFkZWZhdWx0O1xuJGNhcmV0LXZlcnRpY2FsLWFsaWduOiAgICAgICAgJGNhcmV0LXdpZHRoICogLjg1ICFkZWZhdWx0O1xuJGNhcmV0LXNwYWNpbmc6ICAgICAgICAgICAgICAgJGNhcmV0LXdpZHRoICogLjg1ICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBjYXJldC12YXJpYWJsZXNcblxuJHRyYW5zaXRpb24tYmFzZTogICAgICAgICAgICAgYWxsIC4ycyBlYXNlLWluLW91dCAhZGVmYXVsdDtcbiR0cmFuc2l0aW9uLWZhZGU6ICAgICAgICAgICAgIG9wYWNpdHkgLjE1cyBsaW5lYXIgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3Mtc3RhcnQgY29sbGFwc2UtdHJhbnNpdGlvblxuJHRyYW5zaXRpb24tY29sbGFwc2U6ICAgICAgICAgaGVpZ2h0IC4zNXMgZWFzZSAhZGVmYXVsdDtcbiR0cmFuc2l0aW9uLWNvbGxhcHNlLXdpZHRoOiAgIHdpZHRoIC4zNXMgZWFzZSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgY29sbGFwc2UtdHJhbnNpdGlvblxuXG4vLyBzdHlsZWxpbnQtZGlzYWJsZSBmdW5jdGlvbi1kaXNhbGxvd2VkLWxpc3Rcbi8vIHNjc3MtZG9jcy1zdGFydCBhc3BlY3QtcmF0aW9zXG4kYXNwZWN0LXJhdGlvczogKFxuICBcIjF4MVwiOiAxMDAlLFxuICBcIjR4M1wiOiBjYWxjKDMgLyA0ICogMTAwJSksXG4gIFwiMTZ4OVwiOiBjYWxjKDkgLyAxNiAqIDEwMCUpLFxuICBcIjIxeDlcIjogY2FsYyg5IC8gMjEgKiAxMDAlKVxuKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgYXNwZWN0LXJhdGlvc1xuLy8gc3R5bGVsaW50LWVuYWJsZSBmdW5jdGlvbi1kaXNhbGxvd2VkLWxpc3RcblxuLy8gVHlwb2dyYXBoeVxuLy9cbi8vIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZm9udC12YXJpYWJsZXNcbi8vIHN0eWxlbGludC1kaXNhYmxlIHZhbHVlLWtleXdvcmQtY2FzZVxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICAgICAgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBcIk5vdG8gU2Fuc1wiLCBcIkxpYmVyYXRpb24gU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiICFkZWZhdWx0O1xuJGZvbnQtZmFtaWx5LW1vbm9zcGFjZTogICAgICAgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkxpYmVyYXRpb24gTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZSAhZGVmYXVsdDtcbi8vIHN0eWxlbGludC1lbmFibGUgdmFsdWUta2V5d29yZC1jYXNlXG4kZm9udC1mYW1pbHktYmFzZTogICAgICAgICAgICB2YXIoLS0jeyRwcmVmaXh9Zm9udC1zYW5zLXNlcmlmKSAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1jb2RlOiAgICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1mb250LW1vbm9zcGFjZSkgIWRlZmF1bHQ7XG5cbi8vICRmb250LXNpemUtcm9vdCBhZmZlY3RzIHRoZSB2YWx1ZSBvZiBgcmVtYCwgd2hpY2ggaXMgdXNlZCBmb3IgYXMgd2VsbCBmb250IHNpemVzLCBwYWRkaW5ncywgYW5kIG1hcmdpbnNcbi8vICRmb250LXNpemUtYmFzZSBhZmZlY3RzIHRoZSBmb250IHNpemUgb2YgdGhlIGJvZHkgdGV4dFxuJGZvbnQtc2l6ZS1yb290OiAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRmb250LXNpemUtYmFzZTogICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7IC8vIEFzc3VtZXMgdGhlIGJyb3dzZXIgZGVmYXVsdCwgdHlwaWNhbGx5IGAxNnB4YFxuJGZvbnQtc2l6ZS1zbTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogLjg3NSAhZGVmYXVsdDtcbiRmb250LXNpemUtbGc6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XG5cbiRmb250LXdlaWdodC1saWdodGVyOiAgICAgICAgIGxpZ2h0ZXIgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtbGlnaHQ6ICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtbm9ybWFsOiAgICAgICAgICA0MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtc2VtaWJvbGQ6ICAgICAgICA2MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtYm9sZDogICAgICAgICAgICA3MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtYm9sZGVyOiAgICAgICAgICBib2xkZXIgIWRlZmF1bHQ7XG5cbiRmb250LXdlaWdodC1iYXNlOiAgICAgICAgICAgICRmb250LXdlaWdodC1ub3JtYWwgIWRlZmF1bHQ7XG5cbiRsaW5lLWhlaWdodC1iYXNlOiAgICAgICAgICAgIDEuNSAhZGVmYXVsdDtcbiRsaW5lLWhlaWdodC1zbTogICAgICAgICAgICAgIDEuMjUgIWRlZmF1bHQ7XG4kbGluZS1oZWlnaHQtbGc6ICAgICAgICAgICAgICAyICFkZWZhdWx0O1xuXG4kaDEtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAyLjUgIWRlZmF1bHQ7XG4kaDItZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgKiAyICFkZWZhdWx0O1xuJGgzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogMS43NSAhZGVmYXVsdDtcbiRoNC1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuNSAhZGVmYXVsdDtcbiRoNS1mb250LXNpemU6ICAgICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XG4kaDYtZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGZvbnQtdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBmb250LXNpemVzXG4kZm9udC1zaXplczogKFxuICAxOiAkaDEtZm9udC1zaXplLFxuICAyOiAkaDItZm9udC1zaXplLFxuICAzOiAkaDMtZm9udC1zaXplLFxuICA0OiAkaDQtZm9udC1zaXplLFxuICA1OiAkaDUtZm9udC1zaXplLFxuICA2OiAkaDYtZm9udC1zaXplXG4pICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBmb250LXNpemVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBoZWFkaW5ncy12YXJpYWJsZXNcbiRoZWFkaW5ncy1tYXJnaW4tYm90dG9tOiAgICAgICRzcGFjZXIgKiAuNSAhZGVmYXVsdDtcbiRoZWFkaW5ncy1mb250LWZhbWlseTogICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtZm9udC1zdHlsZTogICAgICAgICBudWxsICFkZWZhdWx0O1xuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiAgICAgICAgNTAwICFkZWZhdWx0O1xuJGhlYWRpbmdzLWxpbmUtaGVpZ2h0OiAgICAgICAgMS4yICFkZWZhdWx0O1xuJGhlYWRpbmdzLWNvbG9yOiAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgaGVhZGluZ3MtdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBkaXNwbGF5LWhlYWRpbmdzXG4kZGlzcGxheS1mb250LXNpemVzOiAoXG4gIDE6IDVyZW0sXG4gIDI6IDQuNXJlbSxcbiAgMzogNHJlbSxcbiAgNDogMy41cmVtLFxuICA1OiAzcmVtLFxuICA2OiAyLjVyZW1cbikgIWRlZmF1bHQ7XG5cbiRkaXNwbGF5LWZvbnQtZmFtaWx5OiBudWxsICFkZWZhdWx0O1xuJGRpc3BsYXktZm9udC1zdHlsZTogIG51bGwgIWRlZmF1bHQ7XG4kZGlzcGxheS1mb250LXdlaWdodDogMzAwICFkZWZhdWx0O1xuJGRpc3BsYXktbGluZS1oZWlnaHQ6ICRoZWFkaW5ncy1saW5lLWhlaWdodCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgZGlzcGxheS1oZWFkaW5nc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgdHlwZS12YXJpYWJsZXNcbiRsZWFkLWZvbnQtc2l6ZTogICAgICAgICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XG4kbGVhZC1mb250LXdlaWdodDogICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG5cbiRzbWFsbC1mb250LXNpemU6ICAgICAgICAgICAgIC44NzVlbSAhZGVmYXVsdDtcblxuJHN1Yi1zdXAtZm9udC1zaXplOiAgICAgICAgICAgLjc1ZW0gIWRlZmF1bHQ7XG5cbiR0ZXh0LW11dGVkOiAgICAgICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcblxuJGluaXRpYWxpc20tZm9udC1zaXplOiAgICAgICAgJHNtYWxsLWZvbnQtc2l6ZSAhZGVmYXVsdDtcblxuJGJsb2NrcXVvdGUtbWFyZ2luLXk6ICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcbiRibG9ja3F1b3RlLWZvbnQtc2l6ZTogICAgICAgICRmb250LXNpemUtYmFzZSAqIDEuMjUgIWRlZmF1bHQ7XG4kYmxvY2txdW90ZS1mb290ZXItY29sb3I6ICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kYmxvY2txdW90ZS1mb290ZXItZm9udC1zaXplOiAkc21hbGwtZm9udC1zaXplICFkZWZhdWx0O1xuXG4kaHItbWFyZ2luLXk6ICAgICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuJGhyLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgaW5oZXJpdCAhZGVmYXVsdDtcblxuLy8gZnVzdi1kaXNhYmxlXG4kaHItYmctY29sb3I6ICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0OyAvLyBEZXByZWNhdGVkIGluIHY1LjIuMFxuJGhyLWhlaWdodDogICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDsgLy8gRGVwcmVjYXRlZCBpbiB2NS4yLjBcbi8vIGZ1c3YtZW5hYmxlXG5cbiRoci1ib3JkZXItY29sb3I6ICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7IC8vIEFsbG93cyBmb3IgaW5oZXJpdGVkIGNvbG9yc1xuJGhyLWJvcmRlci13aWR0aDogICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRoci1vcGFjaXR5OiAgICAgICAgICAgICAgICAgIC4yNSAhZGVmYXVsdDtcblxuJGxlZ2VuZC1tYXJnaW4tYm90dG9tOiAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kbGVnZW5kLWZvbnQtc2l6ZTogICAgICAgICAgICAxLjVyZW0gIWRlZmF1bHQ7XG4kbGVnZW5kLWZvbnQtd2VpZ2h0OiAgICAgICAgICBudWxsICFkZWZhdWx0O1xuXG4kZHQtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcblxuJGxpc3QtaW5saW5lLXBhZGRpbmc6ICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG5cbiRtYXJrLXBhZGRpbmc6ICAgICAgICAgICAgICAgIC4xODc1ZW0gIWRlZmF1bHQ7XG4kbWFyay1iZzogICAgICAgICAgICAgICAgICAgICAkeWVsbG93LTEwMCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgdHlwZS12YXJpYWJsZXNcblxuXG4vLyBUYWJsZXNcbi8vXG4vLyBDdXN0b21pemVzIHRoZSBgLnRhYmxlYCBjb21wb25lbnQgd2l0aCBiYXNpYyB2YWx1ZXMsIGVhY2ggdXNlZCBhY3Jvc3MgYWxsIHRhYmxlIHZhcmlhdGlvbnMuXG5cbi8vIHNjc3MtZG9jcy1zdGFydCB0YWJsZS12YXJpYWJsZXNcbiR0YWJsZS1jZWxsLXBhZGRpbmcteTogICAgICAgIC41cmVtICFkZWZhdWx0O1xuJHRhYmxlLWNlbGwtcGFkZGluZy14OiAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kdGFibGUtY2VsbC1wYWRkaW5nLXktc206ICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kdGFibGUtY2VsbC1wYWRkaW5nLXgtc206ICAgICAuMjVyZW0gIWRlZmF1bHQ7XG5cbiR0YWJsZS1jZWxsLXZlcnRpY2FsLWFsaWduOiAgIHRvcCAhZGVmYXVsdDtcblxuJHRhYmxlLWNvbG9yOiAgICAgICAgICAgICAgICAgdmFyKC0tI3skcHJlZml4fWJvZHktY29sb3IpICFkZWZhdWx0O1xuJHRhYmxlLWJnOiAgICAgICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG4kdGFibGUtYWNjZW50LWJnOiAgICAgICAgICAgICB0cmFuc3BhcmVudCAhZGVmYXVsdDtcblxuJHRhYmxlLXRoLWZvbnQtd2VpZ2h0OiAgICAgICAgbnVsbCAhZGVmYXVsdDtcblxuJHRhYmxlLXN0cmlwZWQtY29sb3I6ICAgICAgICAgJHRhYmxlLWNvbG9yICFkZWZhdWx0O1xuJHRhYmxlLXN0cmlwZWQtYmctZmFjdG9yOiAgICAgLjA1ICFkZWZhdWx0O1xuJHRhYmxlLXN0cmlwZWQtYmc6ICAgICAgICAgICAgcmdiYSgkYmxhY2ssICR0YWJsZS1zdHJpcGVkLWJnLWZhY3RvcikgIWRlZmF1bHQ7XG5cbiR0YWJsZS1hY3RpdmUtY29sb3I6ICAgICAgICAgICR0YWJsZS1jb2xvciAhZGVmYXVsdDtcbiR0YWJsZS1hY3RpdmUtYmctZmFjdG9yOiAgICAgIC4xICFkZWZhdWx0O1xuJHRhYmxlLWFjdGl2ZS1iZzogICAgICAgICAgICAgcmdiYSgkYmxhY2ssICR0YWJsZS1hY3RpdmUtYmctZmFjdG9yKSAhZGVmYXVsdDtcblxuJHRhYmxlLWhvdmVyLWNvbG9yOiAgICAgICAgICAgJHRhYmxlLWNvbG9yICFkZWZhdWx0O1xuJHRhYmxlLWhvdmVyLWJnLWZhY3RvcjogICAgICAgLjA3NSAhZGVmYXVsdDtcbiR0YWJsZS1ob3Zlci1iZzogICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAkdGFibGUtaG92ZXItYmctZmFjdG9yKSAhZGVmYXVsdDtcblxuJHRhYmxlLWJvcmRlci1mYWN0b3I6ICAgICAgICAgLjEgIWRlZmF1bHQ7XG4kdGFibGUtYm9yZGVyLXdpZHRoOiAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJHRhYmxlLWJvcmRlci1jb2xvcjogICAgICAgICAgdmFyKC0tI3skcHJlZml4fWJvcmRlci1jb2xvcikgIWRlZmF1bHQ7XG5cbiR0YWJsZS1zdHJpcGVkLW9yZGVyOiAgICAgICAgIG9kZCAhZGVmYXVsdDtcbiR0YWJsZS1zdHJpcGVkLWNvbHVtbnMtb3JkZXI6IGV2ZW4gIWRlZmF1bHQ7XG5cbiR0YWJsZS1ncm91cC1zZXBhcmF0b3ItY29sb3I6IGN1cnJlbnRjb2xvciAhZGVmYXVsdDtcblxuJHRhYmxlLWNhcHRpb24tY29sb3I6ICAgICAgICAgJHRleHQtbXV0ZWQgIWRlZmF1bHQ7XG5cbiR0YWJsZS1iZy1zY2FsZTogICAgICAgICAgICAgIC04MCUgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIHRhYmxlLXZhcmlhYmxlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgdGFibGUtbG9vcFxuJHRhYmxlLXZhcmlhbnRzOiAoXG4gIFwicHJpbWFyeVwiOiAgICBzaGlmdC1jb2xvcigkcHJpbWFyeSwgJHRhYmxlLWJnLXNjYWxlKSxcbiAgXCJzZWNvbmRhcnlcIjogIHNoaWZ0LWNvbG9yKCRzZWNvbmRhcnksICR0YWJsZS1iZy1zY2FsZSksXG4gIFwic3VjY2Vzc1wiOiAgICBzaGlmdC1jb2xvcigkc3VjY2VzcywgJHRhYmxlLWJnLXNjYWxlKSxcbiAgXCJpbmZvXCI6ICAgICAgIHNoaWZ0LWNvbG9yKCRpbmZvLCAkdGFibGUtYmctc2NhbGUpLFxuICBcIndhcm5pbmdcIjogICAgc2hpZnQtY29sb3IoJHdhcm5pbmcsICR0YWJsZS1iZy1zY2FsZSksXG4gIFwiZGFuZ2VyXCI6ICAgICBzaGlmdC1jb2xvcigkZGFuZ2VyLCAkdGFibGUtYmctc2NhbGUpLFxuICBcImxpZ2h0XCI6ICAgICAgJGxpZ2h0LFxuICBcImRhcmtcIjogICAgICAgJGRhcmssXG4pICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCB0YWJsZS1sb29wXG5cblxuLy8gQnV0dG9ucyArIEZvcm1zXG4vL1xuLy8gU2hhcmVkIHZhcmlhYmxlcyB0aGF0IGFyZSByZWFzc2lnbmVkIHRvIGAkaW5wdXQtYCBhbmQgYCRidG4tYCBzcGVjaWZpYyB2YXJpYWJsZXMuXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBpbnB1dC1idG4tdmFyaWFibGVzXG4kaW5wdXQtYnRuLXBhZGRpbmcteTogICAgICAgICAuMzc1cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1wYWRkaW5nLXg6ICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb250LWZhbWlseTogICAgICAgbnVsbCAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9udC1zaXplOiAgICAgICAgICRmb250LXNpemUtYmFzZSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQ6ICAgICAgICRsaW5lLWhlaWdodC1iYXNlICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLWZvY3VzLXdpZHRoOiAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tZm9jdXMtY29sb3Itb3BhY2l0eTogLjI1ICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb2N1cy1jb2xvcjogICAgICAgICByZ2JhKCRjb21wb25lbnQtYWN0aXZlLWJnLCAkaW5wdXQtYnRuLWZvY3VzLWNvbG9yLW9wYWNpdHkpICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb2N1cy1ibHVyOiAgICAgICAgICAwICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93OiAgICAwIDAgJGlucHV0LWJ0bi1mb2N1cy1ibHVyICRpbnB1dC1idG4tZm9jdXMtd2lkdGggJGlucHV0LWJ0bi1mb2N1cy1jb2xvciAhZGVmYXVsdDtcblxuJGlucHV0LWJ0bi1wYWRkaW5nLXktc206ICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1wYWRkaW5nLXgtc206ICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbTogICAgICAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1sZzogICAgICAuNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1idG4tcGFkZGluZy14LWxnOiAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZzogICAgICAkZm9udC1zaXplLWxnICFkZWZhdWx0O1xuXG4kaW5wdXQtYnRuLWJvcmRlci13aWR0aDogICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBpbnB1dC1idG4tdmFyaWFibGVzXG5cblxuLy8gQnV0dG9uc1xuLy9cbi8vIEZvciBlYWNoIG9mIEJvb3RzdHJhcCdzIGJ1dHRvbnMsIGRlZmluZSB0ZXh0LCBiYWNrZ3JvdW5kLCBhbmQgYm9yZGVyIGNvbG9yLlxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgYnRuLXZhcmlhYmxlc1xuJGJ0bi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kYnRuLXBhZGRpbmcteDogICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteCAhZGVmYXVsdDtcbiRidG4tZm9udC1mYW1pbHk6ICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1mYW1pbHkgIWRlZmF1bHQ7XG4kYnRuLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZSAhZGVmYXVsdDtcbiRidG4tbGluZS1oZWlnaHQ6ICAgICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG4kYnRuLXdoaXRlLXNwYWNlOiAgICAgICAgICAgICBudWxsICFkZWZhdWx0OyAvLyBTZXQgdG8gYG5vd3JhcGAgdG8gcHJldmVudCB0ZXh0IHdyYXBwaW5nXG5cbiRidG4tcGFkZGluZy15LXNtOiAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LXNtICFkZWZhdWx0O1xuJGJ0bi1wYWRkaW5nLXgtc206ICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXgtc20gIWRlZmF1bHQ7XG4kYnRuLWZvbnQtc2l6ZS1zbTogICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcblxuJGJ0bi1wYWRkaW5nLXktbGc6ICAgICAgICAgICAgJGlucHV0LWJ0bi1wYWRkaW5nLXktbGcgIWRlZmF1bHQ7XG4kYnRuLXBhZGRpbmcteC1sZzogICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteC1sZyAhZGVmYXVsdDtcbiRidG4tZm9udC1zaXplLWxnOiAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplLWxnICFkZWZhdWx0O1xuXG4kYnRuLWJvcmRlci13aWR0aDogICAgICAgICAgICAkaW5wdXQtYnRuLWJvcmRlci13aWR0aCAhZGVmYXVsdDtcblxuJGJ0bi1mb250LXdlaWdodDogICAgICAgICAgICAgJGZvbnQtd2VpZ2h0LW5vcm1hbCAhZGVmYXVsdDtcbiRidG4tYm94LXNoYWRvdzogICAgICAgICAgICAgIGluc2V0IDAgMXB4IDAgcmdiYSgkd2hpdGUsIC4xNSksIDAgMXB4IDFweCByZ2JhKCRibGFjaywgLjA3NSkgIWRlZmF1bHQ7XG4kYnRuLWZvY3VzLXdpZHRoOiAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoICFkZWZhdWx0O1xuJGJ0bi1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAgJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJGJ0bi1kaXNhYmxlZC1vcGFjaXR5OiAgICAgICAgLjY1ICFkZWZhdWx0O1xuJGJ0bi1hY3RpdmUtYm94LXNoYWRvdzogICAgICAgaW5zZXQgMCAzcHggNXB4IHJnYmEoJGJsYWNrLCAuMTI1KSAhZGVmYXVsdDtcblxuJGJ0bi1saW5rLWNvbG9yOiAgICAgICAgICAgICAgdmFyKC0tI3skcHJlZml4fWxpbmstY29sb3IpICFkZWZhdWx0O1xuJGJ0bi1saW5rLWhvdmVyLWNvbG9yOiAgICAgICAgdmFyKC0tI3skcHJlZml4fWxpbmstaG92ZXItY29sb3IpICFkZWZhdWx0O1xuJGJ0bi1saW5rLWRpc2FibGVkLWNvbG9yOiAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuXG4vLyBBbGxvd3MgZm9yIGN1c3RvbWl6aW5nIGJ1dHRvbiByYWRpdXMgaW5kZXBlbmRlbnRseSBmcm9tIGdsb2JhbCBib3JkZXIgcmFkaXVzXG4kYnRuLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRidG4tYm9yZGVyLXJhZGl1cy1zbTogICAgICAgICRib3JkZXItcmFkaXVzLXNtICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAgICAgICAgJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XG5cbiRidG4tdHJhbnNpdGlvbjogICAgICAgICAgICAgIGNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDtcblxuJGJ0bi1ob3Zlci1iZy1zaGFkZS1hbW91bnQ6ICAgICAgIDE1JSAhZGVmYXVsdDtcbiRidG4taG92ZXItYmctdGludC1hbW91bnQ6ICAgICAgICAxNSUgIWRlZmF1bHQ7XG4kYnRuLWhvdmVyLWJvcmRlci1zaGFkZS1hbW91bnQ6ICAgMjAlICFkZWZhdWx0O1xuJGJ0bi1ob3Zlci1ib3JkZXItdGludC1hbW91bnQ6ICAgIDEwJSAhZGVmYXVsdDtcbiRidG4tYWN0aXZlLWJnLXNoYWRlLWFtb3VudDogICAgICAyMCUgIWRlZmF1bHQ7XG4kYnRuLWFjdGl2ZS1iZy10aW50LWFtb3VudDogICAgICAgMjAlICFkZWZhdWx0O1xuJGJ0bi1hY3RpdmUtYm9yZGVyLXNoYWRlLWFtb3VudDogIDI1JSAhZGVmYXVsdDtcbiRidG4tYWN0aXZlLWJvcmRlci10aW50LWFtb3VudDogICAxMCUgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGJ0bi12YXJpYWJsZXNcblxuXG4vLyBGb3Jtc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZm9ybS10ZXh0LXZhcmlhYmxlc1xuJGZvcm0tdGV4dC1tYXJnaW4tdG9wOiAgICAgICAgICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiRmb3JtLXRleHQtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAkc21hbGwtZm9udC1zaXplICFkZWZhdWx0O1xuJGZvcm0tdGV4dC1mb250LXN0eWxlOiAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kZm9ybS10ZXh0LWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRmb3JtLXRleHQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAkdGV4dC1tdXRlZCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgZm9ybS10ZXh0LXZhcmlhYmxlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZm9ybS1sYWJlbC12YXJpYWJsZXNcbiRmb3JtLWxhYmVsLW1hcmdpbi1ib3R0b206ICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRmb3JtLWxhYmVsLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGZvcm0tbGFiZWwtZm9udC1zdHlsZTogICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kZm9ybS1sYWJlbC1mb250LXdlaWdodDogICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRmb3JtLWxhYmVsLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBmb3JtLWxhYmVsLXZhcmlhYmxlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZm9ybS1pbnB1dC12YXJpYWJsZXNcbiRpbnB1dC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteSAhZGVmYXVsdDtcbiRpbnB1dC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteCAhZGVmYXVsdDtcbiRpbnB1dC1mb250LWZhbWlseTogICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtZmFtaWx5ICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtd2VpZ2h0OiAgICAgICAgICAgICAgICAgICAgICRmb250LXdlaWdodC1iYXNlICFkZWZhdWx0O1xuJGlucHV0LWxpbmUtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tbGluZS1oZWlnaHQgIWRlZmF1bHQ7XG5cbiRpbnB1dC1wYWRkaW5nLXktc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteS1zbSAhZGVmYXVsdDtcbiRpbnB1dC1wYWRkaW5nLXgtc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLXBhZGRpbmcteC1zbSAhZGVmYXVsdDtcbiRpbnB1dC1mb250LXNpemUtc206ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcblxuJGlucHV0LXBhZGRpbmcteS1sZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy15LWxnICFkZWZhdWx0O1xuJGlucHV0LXBhZGRpbmcteC1sZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tcGFkZGluZy14LWxnICFkZWZhdWx0O1xuJGlucHV0LWZvbnQtc2l6ZS1sZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9udC1zaXplLWxnICFkZWZhdWx0O1xuXG4kaW5wdXQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGJvZHktYmcgIWRlZmF1bHQ7XG4kaW5wdXQtZGlzYWJsZWQtY29sb3I6ICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRpbnB1dC1kaXNhYmxlZC1iZzogICAgICAgICAgICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kaW5wdXQtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcblxuJGlucHV0LWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgICAgICRncmF5LTQwMCAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICAgICAkaW5wdXQtYnRuLWJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRpbnB1dC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgICAgICAkYm94LXNoYWRvdy1pbnNldCAhZGVmYXVsdDtcblxuJGlucHV0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci1yYWRpdXMtc206ICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzLXNtICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci1yYWRpdXMtbGc6ICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzLWxnICFkZWZhdWx0O1xuXG4kaW5wdXQtZm9jdXMtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWJnICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgIHRpbnQtY29sb3IoJGNvbXBvbmVudC1hY3RpdmUtYmcsIDUwJSkgIWRlZmF1bHQ7XG4kaW5wdXQtZm9jdXMtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xuJGlucHV0LWZvY3VzLXdpZHRoOiAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1idG4tZm9jdXMtd2lkdGggIWRlZmF1bHQ7XG4kaW5wdXQtZm9jdXMtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuXG4kaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICAgICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGlucHV0LXBsYWludGV4dC1jb2xvcjogICAgICAgICAgICAgICAgICRib2R5LWNvbG9yICFkZWZhdWx0O1xuXG4kaW5wdXQtaGVpZ2h0LWJvcmRlcjogICAgICAgICAgICAgICAgICAgJGlucHV0LWJvcmRlci13aWR0aCAqIDIgIWRlZmF1bHQ7XG5cbiRpbnB1dC1oZWlnaHQtaW5uZXI6ICAgICAgICAgICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0ICogMWVtLCAkaW5wdXQtcGFkZGluZy15ICogMikgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGY6ICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodCAqIC41ZW0sICRpbnB1dC1wYWRkaW5nLXkpICFkZWZhdWx0O1xuJGlucHV0LWhlaWdodC1pbm5lci1xdWFydGVyOiAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQgKiAuMjVlbSwgJGlucHV0LXBhZGRpbmcteSAqIC41KSAhZGVmYXVsdDtcblxuJGlucHV0LWhlaWdodDogICAgICAgICAgICAgICAgICAgICAgICAgIGFkZCgkaW5wdXQtbGluZS1oZWlnaHQgKiAxZW0sIGFkZCgkaW5wdXQtcGFkZGluZy15ICogMiwgJGlucHV0LWhlaWdodC1ib3JkZXIsIGZhbHNlKSkgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LXNtOiAgICAgICAgICAgICAgICAgICAgICAgYWRkKCRpbnB1dC1saW5lLWhlaWdodCAqIDFlbSwgYWRkKCRpbnB1dC1wYWRkaW5nLXktc20gKiAyLCAkaW5wdXQtaGVpZ2h0LWJvcmRlciwgZmFsc2UpKSAhZGVmYXVsdDtcbiRpbnB1dC1oZWlnaHQtbGc6ICAgICAgICAgICAgICAgICAgICAgICBhZGQoJGlucHV0LWxpbmUtaGVpZ2h0ICogMWVtLCBhZGQoJGlucHV0LXBhZGRpbmcteS1sZyAqIDIsICRpbnB1dC1oZWlnaHQtYm9yZGVyLCBmYWxzZSkpICFkZWZhdWx0O1xuXG4kaW5wdXQtdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDtcblxuJGZvcm0tY29sb3Itd2lkdGg6ICAgICAgICAgICAgICAgICAgICAgIDNyZW0gIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGZvcm0taW5wdXQtdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBmb3JtLWNoZWNrLXZhcmlhYmxlc1xuJGZvcm0tY2hlY2staW5wdXQtd2lkdGg6ICAgICAgICAgICAgICAgICAgMWVtICFkZWZhdWx0O1xuJGZvcm0tY2hlY2stbWluLWhlaWdodDogICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1wYWRkaW5nLXN0YXJ0OiAgICAgICAgICAgICAgICAkZm9ybS1jaGVjay1pbnB1dC13aWR0aCArIC41ZW0gIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1tYXJnaW4tYm90dG9tOiAgICAgICAgICAgICAgICAuMTI1cmVtICFkZWZhdWx0O1xuJGZvcm0tY2hlY2stbGFiZWwtY29sb3I6ICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWxhYmVsLWN1cnNvcjogICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuXG4kZm9ybS1jaGVjay1pbnB1dC1hY3RpdmUtZmlsdGVyOiAgICAgICAgICBicmlnaHRuZXNzKDkwJSkgIWRlZmF1bHQ7XG5cbiRmb3JtLWNoZWNrLWlucHV0LWJnOiAgICAgICAgICAgICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWlucHV0LWJvcmRlcjogICAgICAgICAgICAgICAgIDFweCBzb2xpZCByZ2JhKCRibGFjaywgLjI1KSAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWlucHV0LWJvcmRlci1yYWRpdXM6ICAgICAgICAgIC4yNWVtICFkZWZhdWx0O1xuJGZvcm0tY2hlY2stcmFkaW8tYm9yZGVyLXJhZGl1czogICAgICAgICAgNTAlICFkZWZhdWx0O1xuJGZvcm0tY2hlY2staW5wdXQtZm9jdXMtYm9yZGVyOiAgICAgICAgICAgJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWlucHV0LWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcblxuJGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1jb2xvcjogICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWJnLWNvbG9yOiAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtYm9yZGVyLWNvbG9yOiAgICRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtYmctY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1pbnB1dC1jaGVja2VkLWJnLWltYWdlOiAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyMCAyMCc+PHBhdGggZmlsbD0nbm9uZScgc3Ryb2tlPScjeyRmb3JtLWNoZWNrLWlucHV0LWNoZWNrZWQtY29sb3J9JyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1saW5lam9pbj0ncm91bmQnIHN0cm9rZS13aWR0aD0nMycgZD0nbTYgMTAgMyAzIDYtNicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLXJhZGlvLWNoZWNrZWQtYmctaW1hZ2U6ICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nLTQgLTQgOCA4Jz48Y2lyY2xlIHI9JzInIGZpbGw9JyN7JGZvcm0tY2hlY2staW5wdXQtY2hlY2tlZC1jb2xvcn0nLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG5cbiRmb3JtLWNoZWNrLWlucHV0LWluZGV0ZXJtaW5hdGUtY29sb3I6ICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tY2hlY2staW5wdXQtaW5kZXRlcm1pbmF0ZS1iZy1jb2xvcjogICAgICAgJGNvbXBvbmVudC1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kZm9ybS1jaGVjay1pbnB1dC1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogICAkZm9ybS1jaGVjay1pbnB1dC1pbmRldGVybWluYXRlLWJnLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tY2hlY2staW5wdXQtaW5kZXRlcm1pbmF0ZS1iZy1pbWFnZTogICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjAgMjAnPjxwYXRoIGZpbGw9J25vbmUnIHN0cm9rZT0nI3skZm9ybS1jaGVjay1pbnB1dC1pbmRldGVybWluYXRlLWNvbG9yfScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utd2lkdGg9JzMnIGQ9J002IDEwaDgnLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG5cbiRmb3JtLWNoZWNrLWlucHV0LWRpc2FibGVkLW9wYWNpdHk6ICAgICAgICAuNSAhZGVmYXVsdDtcbiRmb3JtLWNoZWNrLWxhYmVsLWRpc2FibGVkLW9wYWNpdHk6ICAgICAgICAkZm9ybS1jaGVjay1pbnB1dC1kaXNhYmxlZC1vcGFjaXR5ICFkZWZhdWx0O1xuJGZvcm0tY2hlY2stYnRuLWNoZWNrLWRpc2FibGVkLW9wYWNpdHk6ICAgICRidG4tZGlzYWJsZWQtb3BhY2l0eSAhZGVmYXVsdDtcblxuJGZvcm0tY2hlY2staW5saW5lLW1hcmdpbi1lbmQ6ICAgIDFyZW0gIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGZvcm0tY2hlY2stdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBmb3JtLXN3aXRjaC12YXJpYWJsZXNcbiRmb3JtLXN3aXRjaC1jb2xvcjogICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjI1KSAhZGVmYXVsdDtcbiRmb3JtLXN3aXRjaC13aWR0aDogICAgICAgICAgICAgICAyZW0gIWRlZmF1bHQ7XG4kZm9ybS1zd2l0Y2gtcGFkZGluZy1zdGFydDogICAgICAgJGZvcm0tc3dpdGNoLXdpZHRoICsgLjVlbSAhZGVmYXVsdDtcbiRmb3JtLXN3aXRjaC1iZy1pbWFnZTogICAgICAgICAgICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9Jy00IC00IDggOCc+PGNpcmNsZSByPSczJyBmaWxsPScjeyRmb3JtLXN3aXRjaC1jb2xvcn0nLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG4kZm9ybS1zd2l0Y2gtYm9yZGVyLXJhZGl1czogICAgICAgJGZvcm0tc3dpdGNoLXdpZHRoICFkZWZhdWx0O1xuJGZvcm0tc3dpdGNoLXRyYW5zaXRpb246ICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24gLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDtcblxuJGZvcm0tc3dpdGNoLWZvY3VzLWNvbG9yOiAgICAgICAgICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1zd2l0Y2gtZm9jdXMtYmctaW1hZ2U6ICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PSctNCAtNCA4IDgnPjxjaXJjbGUgcj0nMycgZmlsbD0nI3skZm9ybS1zd2l0Y2gtZm9jdXMtY29sb3J9Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuXG4kZm9ybS1zd2l0Y2gtY2hlY2tlZC1jb2xvcjogICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1zd2l0Y2gtY2hlY2tlZC1iZy1pbWFnZTogICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PSctNCAtNCA4IDgnPjxjaXJjbGUgcj0nMycgZmlsbD0nI3skZm9ybS1zd2l0Y2gtY2hlY2tlZC1jb2xvcn0nLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG4kZm9ybS1zd2l0Y2gtY2hlY2tlZC1iZy1wb3NpdGlvbjogcmlnaHQgY2VudGVyICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBmb3JtLXN3aXRjaC12YXJpYWJsZXNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGlucHV0LWdyb3VwLXZhcmlhYmxlc1xuJGlucHV0LWdyb3VwLWFkZG9uLXBhZGRpbmcteTogICAgICAgICAgICRpbnB1dC1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kaW5wdXQtZ3JvdXAtYWRkb24tcGFkZGluZy14OiAgICAgICAgICAgJGlucHV0LXBhZGRpbmcteCAhZGVmYXVsdDtcbiRpbnB1dC1ncm91cC1hZGRvbi1mb250LXdlaWdodDogICAgICAgICAkaW5wdXQtZm9udC13ZWlnaHQgIWRlZmF1bHQ7XG4kaW5wdXQtZ3JvdXAtYWRkb24tY29sb3I6ICAgICAgICAgICAgICAgJGlucHV0LWNvbG9yICFkZWZhdWx0O1xuJGlucHV0LWdyb3VwLWFkZG9uLWJnOiAgICAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRpbnB1dC1ncm91cC1hZGRvbi1ib3JkZXItY29sb3I6ICAgICAgICAkaW5wdXQtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBpbnB1dC1ncm91cC12YXJpYWJsZXNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGZvcm0tc2VsZWN0LXZhcmlhYmxlc1xuJGZvcm0tc2VsZWN0LXBhZGRpbmcteTogICAgICAgICAgICAgJGlucHV0LXBhZGRpbmcteSAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1wYWRkaW5nLXg6ICAgICAgICAgICAgICRpbnB1dC1wYWRkaW5nLXggIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtZm9udC1mYW1pbHk6ICAgICAgICAgICAkaW5wdXQtZm9udC1mYW1pbHkgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtZm9udC1zaXplOiAgICAgICAgICAgICAkaW5wdXQtZm9udC1zaXplICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nOiAgICAgJGZvcm0tc2VsZWN0LXBhZGRpbmcteCAqIDMgIWRlZmF1bHQ7IC8vIEV4dHJhIHBhZGRpbmcgZm9yIGJhY2tncm91bmQtaW1hZ2VcbiRmb3JtLXNlbGVjdC1mb250LXdlaWdodDogICAgICAgICAgICRpbnB1dC1mb250LXdlaWdodCAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1saW5lLWhlaWdodDogICAgICAgICAgICRpbnB1dC1saW5lLWhlaWdodCAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1jb2xvcjogICAgICAgICAgICAgICAgICRpbnB1dC1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1iZzogICAgICAgICAgICAgICAgICAgICRpbnB1dC1iZyAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1kaXNhYmxlZC1jb2xvcjogICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtZGlzYWJsZWQtYmc6ICAgICAgICAgICAkZ3JheS0yMDAgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiAkaW5wdXQtZGlzYWJsZWQtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWJnLXBvc2l0aW9uOiAgICAgICAgICAgcmlnaHQgJGZvcm0tc2VsZWN0LXBhZGRpbmcteCBjZW50ZXIgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtYmctc2l6ZTogICAgICAgICAgICAgICAxNnB4IDEycHggIWRlZmF1bHQ7IC8vIEluIHBpeGVscyBiZWNhdXNlIGltYWdlIGRpbWVuc2lvbnNcbiRmb3JtLXNlbGVjdC1pbmRpY2F0b3ItY29sb3I6ICAgICAgICRncmF5LTgwMCAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1pbmRpY2F0b3I6ICAgICAgICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDE2IDE2Jz48cGF0aCBmaWxsPSdub25lJyBzdHJva2U9JyN7JGZvcm0tc2VsZWN0LWluZGljYXRvci1jb2xvcn0nIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgc3Ryb2tlLXdpZHRoPScyJyBkPSdtMiA1IDYgNiA2LTYnLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG5cbiRmb3JtLXNlbGVjdC1mZWVkYmFjay1pY29uLXBhZGRpbmctZW5kOiAkZm9ybS1zZWxlY3QtcGFkZGluZy14ICogMi41ICsgJGZvcm0tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWZlZWRiYWNrLWljb24tcG9zaXRpb246ICAgIGNlbnRlciByaWdodCAkZm9ybS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmcgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtZmVlZGJhY2staWNvbi1zaXplOiAgICAgICAgJGlucHV0LWhlaWdodC1pbm5lci1oYWxmICRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZiAhZGVmYXVsdDtcblxuJGZvcm0tc2VsZWN0LWJvcmRlci13aWR0aDogICAgICAgICRpbnB1dC1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtYm9yZGVyLWNvbG9yOiAgICAgICAgJGlucHV0LWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1ib3JkZXItcmFkaXVzOiAgICAgICAkaW5wdXQtYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1ib3gtc2hhZG93OiAgICAgICAgICAkYm94LXNoYWRvdy1pbnNldCAhZGVmYXVsdDtcblxuJGZvcm0tc2VsZWN0LWZvY3VzLWJvcmRlci1jb2xvcjogICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtZm9jdXMtd2lkdGg6ICAgICAgICAgJGlucHV0LWZvY3VzLXdpZHRoICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWZvY3VzLWJveC1zaGFkb3c6ICAgIDAgMCAwICRmb3JtLXNlbGVjdC1mb2N1cy13aWR0aCAkaW5wdXQtYnRuLWZvY3VzLWNvbG9yICFkZWZhdWx0O1xuXG4kZm9ybS1zZWxlY3QtcGFkZGluZy15LXNtOiAgICAgICAgJGlucHV0LXBhZGRpbmcteS1zbSAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1wYWRkaW5nLXgtc206ICAgICAgICAkaW5wdXQtcGFkZGluZy14LXNtICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LWZvbnQtc2l6ZS1zbTogICAgICAgICRpbnB1dC1mb250LXNpemUtc20gIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtYm9yZGVyLXJhZGl1cy1zbTogICAgJGlucHV0LWJvcmRlci1yYWRpdXMtc20gIWRlZmF1bHQ7XG5cbiRmb3JtLXNlbGVjdC1wYWRkaW5nLXktbGc6ICAgICAgICAkaW5wdXQtcGFkZGluZy15LWxnICFkZWZhdWx0O1xuJGZvcm0tc2VsZWN0LXBhZGRpbmcteC1sZzogICAgICAgICRpbnB1dC1wYWRkaW5nLXgtbGcgIWRlZmF1bHQ7XG4kZm9ybS1zZWxlY3QtZm9udC1zaXplLWxnOiAgICAgICAgJGlucHV0LWZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbiRmb3JtLXNlbGVjdC1ib3JkZXItcmFkaXVzLWxnOiAgICAkaW5wdXQtYm9yZGVyLXJhZGl1cy1sZyAhZGVmYXVsdDtcblxuJGZvcm0tc2VsZWN0LXRyYW5zaXRpb246ICAgICAgICAgICRpbnB1dC10cmFuc2l0aW9uICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBmb3JtLXNlbGVjdC12YXJpYWJsZXNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGZvcm0tcmFuZ2UtdmFyaWFibGVzXG4kZm9ybS1yYW5nZS10cmFjay13aWR0aDogICAgICAgICAgMTAwJSAhZGVmYXVsdDtcbiRmb3JtLXJhbmdlLXRyYWNrLWhlaWdodDogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRmb3JtLXJhbmdlLXRyYWNrLWN1cnNvcjogICAgICAgICBwb2ludGVyICFkZWZhdWx0O1xuJGZvcm0tcmFuZ2UtdHJhY2stYmc6ICAgICAgICAgICAgICRncmF5LTMwMCAhZGVmYXVsdDtcbiRmb3JtLXJhbmdlLXRyYWNrLWJvcmRlci1yYWRpdXM6ICAxcmVtICFkZWZhdWx0O1xuJGZvcm0tcmFuZ2UtdHJhY2stYm94LXNoYWRvdzogICAgICRib3gtc2hhZG93LWluc2V0ICFkZWZhdWx0O1xuXG4kZm9ybS1yYW5nZS10aHVtYi13aWR0aDogICAgICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRmb3JtLXJhbmdlLXRodW1iLWhlaWdodDogICAgICAgICAgICAgICAgICAkZm9ybS1yYW5nZS10aHVtYi13aWR0aCAhZGVmYXVsdDtcbiRmb3JtLXJhbmdlLXRodW1iLWJnOiAgICAgICAgICAgICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRmb3JtLXJhbmdlLXRodW1iLWJvcmRlcjogICAgICAgICAgICAgICAgICAwICFkZWZhdWx0O1xuJGZvcm0tcmFuZ2UtdGh1bWItYm9yZGVyLXJhZGl1czogICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kZm9ybS1yYW5nZS10aHVtYi1ib3gtc2hhZG93OiAgICAgICAgICAgICAgMCAuMXJlbSAuMjVyZW0gcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcbiRmb3JtLXJhbmdlLXRodW1iLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICAwIDAgMCAxcHggJGJvZHktYmcsICRpbnB1dC1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJGZvcm0tcmFuZ2UtdGh1bWItZm9jdXMtYm94LXNoYWRvdy13aWR0aDogICRpbnB1dC1mb2N1cy13aWR0aCAhZGVmYXVsdDsgLy8gRm9yIGZvY3VzIGJveCBzaGFkb3cgaXNzdWUgaW4gRWRnZVxuJGZvcm0tcmFuZ2UtdGh1bWItYWN0aXZlLWJnOiAgICAgICAgICAgICAgIHRpbnQtY29sb3IoJGNvbXBvbmVudC1hY3RpdmUtYmcsIDcwJSkgIWRlZmF1bHQ7XG4kZm9ybS1yYW5nZS10aHVtYi1kaXNhYmxlZC1iZzogICAgICAgICAgICAgJGdyYXktNTAwICFkZWZhdWx0O1xuJGZvcm0tcmFuZ2UtdGh1bWItdHJhbnNpdGlvbjogICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgZm9ybS1yYW5nZS12YXJpYWJsZXNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGZvcm0tZmlsZS12YXJpYWJsZXNcbiRmb3JtLWZpbGUtYnV0dG9uLWNvbG9yOiAgICAgICAgICAkaW5wdXQtY29sb3IgIWRlZmF1bHQ7XG4kZm9ybS1maWxlLWJ1dHRvbi1iZzogICAgICAgICAgICAgJGlucHV0LWdyb3VwLWFkZG9uLWJnICFkZWZhdWx0O1xuJGZvcm0tZmlsZS1idXR0b24taG92ZXItYmc6ICAgICAgIHNoYWRlLWNvbG9yKCRmb3JtLWZpbGUtYnV0dG9uLWJnLCA1JSkgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGZvcm0tZmlsZS12YXJpYWJsZXNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGZvcm0tZmxvYXRpbmctdmFyaWFibGVzXG4kZm9ybS1mbG9hdGluZy1oZWlnaHQ6ICAgICAgICAgICAgYWRkKDMuNXJlbSwgJGlucHV0LWhlaWdodC1ib3JkZXIpICFkZWZhdWx0O1xuJGZvcm0tZmxvYXRpbmctbGluZS1oZWlnaHQ6ICAgICAgIDEuMjUgIWRlZmF1bHQ7XG4kZm9ybS1mbG9hdGluZy1wYWRkaW5nLXg6ICAgICAgICAgJGlucHV0LXBhZGRpbmcteCAhZGVmYXVsdDtcbiRmb3JtLWZsb2F0aW5nLXBhZGRpbmcteTogICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGZvcm0tZmxvYXRpbmctaW5wdXQtcGFkZGluZy10OiAgIDEuNjI1cmVtICFkZWZhdWx0O1xuJGZvcm0tZmxvYXRpbmctaW5wdXQtcGFkZGluZy1iOiAgIC42MjVyZW0gIWRlZmF1bHQ7XG4kZm9ybS1mbG9hdGluZy1sYWJlbC1vcGFjaXR5OiAgICAgLjY1ICFkZWZhdWx0O1xuJGZvcm0tZmxvYXRpbmctbGFiZWwtdHJhbnNmb3JtOiAgIHNjYWxlKC44NSkgdHJhbnNsYXRlWSgtLjVyZW0pIHRyYW5zbGF0ZVgoLjE1cmVtKSAhZGVmYXVsdDtcbiRmb3JtLWZsb2F0aW5nLXRyYW5zaXRpb246ICAgICAgICBvcGFjaXR5IC4xcyBlYXNlLWluLW91dCwgdHJhbnNmb3JtIC4xcyBlYXNlLWluLW91dCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgZm9ybS1mbG9hdGluZy12YXJpYWJsZXNcblxuLy8gRm9ybSB2YWxpZGF0aW9uXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBmb3JtLWZlZWRiYWNrLXZhcmlhYmxlc1xuJGZvcm0tZmVlZGJhY2stbWFyZ2luLXRvcDogICAgICAgICAgJGZvcm0tdGV4dC1tYXJnaW4tdG9wICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stZm9udC1zaXplOiAgICAgICAgICAgJGZvcm0tdGV4dC1mb250LXNpemUgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1mb250LXN0eWxlOiAgICAgICAgICAkZm9ybS10ZXh0LWZvbnQtc3R5bGUgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvcjogICAgICAgICAkc3VjY2VzcyAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3I6ICAgICAgICRkYW5nZXIgIWRlZmF1bHQ7XG5cbiRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQtY29sb3I6ICAgICRmb3JtLWZlZWRiYWNrLXZhbGlkLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZDogICAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgOCA4Jz48cGF0aCBmaWxsPScjeyRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQtY29sb3J9JyBkPSdNMi4zIDYuNzMuNiA0LjUzYy0uNC0xLjA0LjQ2LTEuNCAxLjEtLjhsMS4xIDEuNCAzLjQtMy44Yy42LS42MyAxLjYtLjI3IDEuMi43bC00IDQuNmMtLjQzLjUtLjguNC0xLjEuMXonLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3I6ICAkZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkOiAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTIgMTInIHdpZHRoPScxMicgaGVpZ2h0PScxMicgZmlsbD0nbm9uZScgc3Ryb2tlPScjeyRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZC1jb2xvcn0nPjxjaXJjbGUgY3g9JzYnIGN5PSc2JyByPSc0LjUnLz48cGF0aCBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBkPSdNNS44IDMuNmguNEw2IDYuNXonLz48Y2lyY2xlIGN4PSc2JyBjeT0nOC4yJyByPScuNicgZmlsbD0nI3skZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3J9JyBzdHJva2U9J25vbmUnLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGZvcm0tZmVlZGJhY2stdmFyaWFibGVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBmb3JtLXZhbGlkYXRpb24tc3RhdGVzXG4kZm9ybS12YWxpZGF0aW9uLXN0YXRlczogKFxuICBcInZhbGlkXCI6IChcbiAgICBcImNvbG9yXCI6ICRmb3JtLWZlZWRiYWNrLXZhbGlkLWNvbG9yLFxuICAgIFwiaWNvblwiOiAkZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkXG4gICksXG4gIFwiaW52YWxpZFwiOiAoXG4gICAgXCJjb2xvclwiOiAkZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yLFxuICAgIFwiaWNvblwiOiAkZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWRcbiAgKVxuKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgZm9ybS12YWxpZGF0aW9uLXN0YXRlc1xuXG4vLyBaLWluZGV4IG1hc3RlciBsaXN0XG4vL1xuLy8gV2FybmluZzogQXZvaWQgY3VzdG9taXppbmcgdGhlc2UgdmFsdWVzLiBUaGV5J3JlIHVzZWQgZm9yIGEgYmlyZCdzIGV5ZSB2aWV3XG4vLyBvZiBjb21wb25lbnRzIGRlcGVuZGVudCBvbiB0aGUgei1heGlzIGFuZCBhcmUgZGVzaWduZWQgdG8gYWxsIHdvcmsgdG9nZXRoZXIuXG5cbi8vIHNjc3MtZG9jcy1zdGFydCB6aW5kZXgtc3RhY2tcbiR6aW5kZXgtZHJvcGRvd246ICAgICAgICAgICAgICAgICAgIDEwMDAgIWRlZmF1bHQ7XG4kemluZGV4LXN0aWNreTogICAgICAgICAgICAgICAgICAgICAxMDIwICFkZWZhdWx0O1xuJHppbmRleC1maXhlZDogICAgICAgICAgICAgICAgICAgICAgMTAzMCAhZGVmYXVsdDtcbiR6aW5kZXgtb2ZmY2FudmFzLWJhY2tkcm9wOiAgICAgICAgIDEwNDAgIWRlZmF1bHQ7XG4kemluZGV4LW9mZmNhbnZhczogICAgICAgICAgICAgICAgICAxMDQ1ICFkZWZhdWx0O1xuJHppbmRleC1tb2RhbC1iYWNrZHJvcDogICAgICAgICAgICAgMTA1MCAhZGVmYXVsdDtcbiR6aW5kZXgtbW9kYWw6ICAgICAgICAgICAgICAgICAgICAgIDEwNTUgIWRlZmF1bHQ7XG4kemluZGV4LXBvcG92ZXI6ICAgICAgICAgICAgICAgICAgICAxMDcwICFkZWZhdWx0O1xuJHppbmRleC10b29sdGlwOiAgICAgICAgICAgICAgICAgICAgMTA4MCAhZGVmYXVsdDtcbiR6aW5kZXgtdG9hc3Q6ICAgICAgICAgICAgICAgICAgICAgIDEwOTAgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIHppbmRleC1zdGFja1xuXG5cbi8vIE5hdnNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IG5hdi12YXJpYWJsZXNcbiRuYXYtbGluay1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJG5hdi1saW5rLXBhZGRpbmcteDogICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRuYXYtbGluay1mb250LXNpemU6ICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kbmF2LWxpbmstZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJG5hdi1saW5rLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgdmFyKC0tI3skcHJlZml4fWxpbmstY29sb3IpICFkZWZhdWx0O1xuJG5hdi1saW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICAgICAgdmFyKC0tI3skcHJlZml4fWxpbmstaG92ZXItY29sb3IpICFkZWZhdWx0O1xuJG5hdi1saW5rLXRyYW5zaXRpb246ICAgICAgICAgICAgICAgY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCAhZGVmYXVsdDtcbiRuYXYtbGluay1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcblxuJG5hdi10YWJzLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgJGdyYXktMzAwICFkZWZhdWx0O1xuJG5hdi10YWJzLWJvcmRlci13aWR0aDogICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRuYXYtdGFicy1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJG5hdi10YWJzLWxpbmstaG92ZXItYm9yZGVyLWNvbG9yOiAgJGdyYXktMjAwICRncmF5LTIwMCAkbmF2LXRhYnMtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJG5hdi10YWJzLWxpbmstYWN0aXZlLWNvbG9yOiAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuJG5hdi10YWJzLWxpbmstYWN0aXZlLWJnOiAgICAgICAgICAgJGJvZHktYmcgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1hY3RpdmUtYm9yZGVyLWNvbG9yOiAkZ3JheS0zMDAgJGdyYXktMzAwICRuYXYtdGFicy1saW5rLWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuJG5hdi1waWxscy1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kbmF2LXBpbGxzLWxpbmstYWN0aXZlLWNvbG9yOiAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRuYXYtcGlsbHMtbGluay1hY3RpdmUtYmc6ICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBuYXYtdmFyaWFibGVzXG5cblxuLy8gTmF2YmFyXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBuYXZiYXItdmFyaWFibGVzXG4kbmF2YmFyLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAkc3BhY2VyICogLjUgIWRlZmF1bHQ7XG4kbmF2YmFyLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuXG4kbmF2YmFyLW5hdi1saW5rLXBhZGRpbmcteDogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcblxuJG5hdmJhci1icmFuZC1mb250LXNpemU6ICAgICAgICAgICAgJGZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbi8vIENvbXB1dGUgdGhlIG5hdmJhci1icmFuZCBwYWRkaW5nLXkgc28gdGhlIG5hdmJhci1icmFuZCB3aWxsIGhhdmUgdGhlIHNhbWUgaGVpZ2h0IGFzIG5hdmJhci10ZXh0IGFuZCBuYXYtbGlua1xuJG5hdi1saW5rLWhlaWdodDogICAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogJGxpbmUtaGVpZ2h0LWJhc2UgKyAkbmF2LWxpbmstcGFkZGluZy15ICogMiAhZGVmYXVsdDtcbiRuYXZiYXItYnJhbmQtaGVpZ2h0OiAgICAgICAgICAgICAgICRuYXZiYXItYnJhbmQtZm9udC1zaXplICogJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XG4kbmF2YmFyLWJyYW5kLXBhZGRpbmcteTogICAgICAgICAgICAoJG5hdi1saW5rLWhlaWdodCAtICRuYXZiYXItYnJhbmQtaGVpZ2h0KSAqIC41ICFkZWZhdWx0O1xuJG5hdmJhci1icmFuZC1tYXJnaW4tZW5kOiAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcblxuJG5hdmJhci10b2dnbGVyLXBhZGRpbmcteTogICAgICAgICAgLjI1cmVtICFkZWZhdWx0O1xuJG5hdmJhci10b2dnbGVyLXBhZGRpbmcteDogICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJG5hdmJhci10b2dnbGVyLWZvbnQtc2l6ZTogICAgICAgICAgJGZvbnQtc2l6ZS1sZyAhZGVmYXVsdDtcbiRuYXZiYXItdG9nZ2xlci1ib3JkZXItcmFkaXVzOiAgICAgICRidG4tYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRuYXZiYXItdG9nZ2xlci1mb2N1cy13aWR0aDogICAgICAgICRidG4tZm9jdXMtd2lkdGggIWRlZmF1bHQ7XG4kbmF2YmFyLXRvZ2dsZXItdHJhbnNpdGlvbjogICAgICAgICBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIG5hdmJhci12YXJpYWJsZXNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IG5hdmJhci10aGVtZS12YXJpYWJsZXNcbiRuYXZiYXItZGFyay1jb2xvcjogICAgICAgICAgICAgICAgIHJnYmEoJHdoaXRlLCAuNTUpICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWhvdmVyLWNvbG9yOiAgICAgICAgICAgcmdiYSgkd2hpdGUsIC43NSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yOiAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstZGlzYWJsZWQtY29sb3I6ICAgICAgICByZ2JhKCR3aGl0ZSwgLjI1KSAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay10b2dnbGVyLWljb24tYmc6ICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDMwIDMwJz48cGF0aCBzdHJva2U9JyN7JG5hdmJhci1kYXJrLWNvbG9yfScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIHN0cm9rZS13aWR0aD0nMicgZD0nTTQgN2gyMk00IDE1aDIyTTQgMjNoMjInLz48L3N2Zz5cIikgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstdG9nZ2xlci1ib3JkZXItY29sb3I6ICByZ2JhKCR3aGl0ZSwgLjEpICFkZWZhdWx0O1xuXG4kbmF2YmFyLWxpZ2h0LWNvbG9yOiAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjU1KSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtaG92ZXItY29sb3I6ICAgICAgICAgIHJnYmEoJGJsYWNrLCAuNykgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LWFjdGl2ZS1jb2xvcjogICAgICAgICByZ2JhKCRibGFjaywgLjkpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC1kaXNhYmxlZC1jb2xvcjogICAgICAgcmdiYSgkYmxhY2ssIC4zKSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtdG9nZ2xlci1pY29uLWJnOiAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDMwIDMwJz48cGF0aCBzdHJva2U9JyN7JG5hdmJhci1saWdodC1jb2xvcn0nIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBzdHJva2Utd2lkdGg9JzInIGQ9J000IDdoMjJNNCAxNWgyMk00IDIzaDIyJy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC10b2dnbGVyLWJvcmRlci1jb2xvcjogcmdiYSgkYmxhY2ssIC4xKSAhZGVmYXVsdDtcblxuJG5hdmJhci1saWdodC1icmFuZC1jb2xvcjogICAgICAgICAgICAgICAgJG5hdmJhci1saWdodC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LWJyYW5kLWhvdmVyLWNvbG9yOiAgICAgICAgICAkbmF2YmFyLWxpZ2h0LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRuYXZiYXItZGFyay1icmFuZC1jb2xvcjogICAgICAgICAgICAgICAgICRuYXZiYXItZGFyay1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstYnJhbmQtaG92ZXItY29sb3I6ICAgICAgICAgICAkbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBuYXZiYXItdGhlbWUtdmFyaWFibGVzXG5cblxuLy8gRHJvcGRvd25zXG4vL1xuLy8gRHJvcGRvd24gbWVudSBjb250YWluZXIgYW5kIGNvbnRlbnRzLlxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgZHJvcGRvd24tdmFyaWFibGVzXG4kZHJvcGRvd24tbWluLXdpZHRoOiAgICAgICAgICAgICAgICAxMHJlbSAhZGVmYXVsdDtcbiRkcm9wZG93bi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kZHJvcGRvd24tcGFkZGluZy15OiAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRkcm9wZG93bi1zcGFjZXI6ICAgICAgICAgICAgICAgICAgIC4xMjVyZW0gIWRlZmF1bHQ7XG4kZHJvcGRvd24tZm9udC1zaXplOiAgICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgIWRlZmF1bHQ7XG4kZHJvcGRvd24tY29sb3I6ICAgICAgICAgICAgICAgICAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiRkcm9wZG93bi1iZzogICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3JkZXItY29sb3I6ICAgICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1ib3JkZXItY29sb3ItdHJhbnNsdWNlbnQpICFkZWZhdWx0O1xuJGRyb3Bkb3duLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGRyb3Bkb3duLWlubmVyLWJvcmRlci1yYWRpdXM6ICAgICAgc3VidHJhY3QoJGRyb3Bkb3duLWJvcmRlci1yYWRpdXMsICRkcm9wZG93bi1ib3JkZXItd2lkdGgpICFkZWZhdWx0O1xuJGRyb3Bkb3duLWRpdmlkZXItYmc6ICAgICAgICAgICAgICAgJGRyb3Bkb3duLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRkcm9wZG93bi1kaXZpZGVyLW1hcmdpbi15OiAgICAgICAgICRzcGFjZXIgKiAuNSAhZGVmYXVsdDtcbiRkcm9wZG93bi1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICRib3gtc2hhZG93ICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tbGluay1jb2xvcjogICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1ob3Zlci1jb2xvcjogICAgICAgICBzaGFkZS1jb2xvcigkZHJvcGRvd24tbGluay1jb2xvciwgMTAlKSAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWxpbmstYWN0aXZlLWNvbG9yOiAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1hY3RpdmUtYmc6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWxpbmstZGlzYWJsZWQtY29sb3I6ICAgICAgJGdyYXktNTAwICFkZWZhdWx0O1xuXG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXk6ICAgICAgICAgICAkc3BhY2VyICogLjI1ICFkZWZhdWx0O1xuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy14OiAgICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWhlYWRlci1jb2xvcjogICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGRyb3Bkb3duLWhlYWRlci1wYWRkaW5nLXg6ICAgICAgICAgJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy14ICFkZWZhdWx0O1xuJGRyb3Bkb3duLWhlYWRlci1wYWRkaW5nLXk6ICAgICAgICAgJGRyb3Bkb3duLXBhZGRpbmcteSAhZGVmYXVsdDtcbi8vIGZ1c3YtZGlzYWJsZVxuJGRyb3Bkb3duLWhlYWRlci1wYWRkaW5nOiAgICAgICAgICAgJGRyb3Bkb3duLWhlYWRlci1wYWRkaW5nLXkgJGRyb3Bkb3duLWhlYWRlci1wYWRkaW5nLXggIWRlZmF1bHQ7IC8vIERlcHJlY2F0ZWQgaW4gdjUuMi4wXG4vLyBmdXN2LWVuYWJsZVxuLy8gc2Nzcy1kb2NzLWVuZCBkcm9wZG93bi12YXJpYWJsZXNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGRyb3Bkb3duLWRhcmstdmFyaWFibGVzXG4kZHJvcGRvd24tZGFyay1jb2xvcjogICAgICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG4kZHJvcGRvd24tZGFyay1iZzogICAgICAgICAgICAgICAgICAkZ3JheS04MDAgIWRlZmF1bHQ7XG4kZHJvcGRvd24tZGFyay1ib3JkZXItY29sb3I6ICAgICAgICAkZHJvcGRvd24tYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJGRyb3Bkb3duLWRhcmstZGl2aWRlci1iZzogICAgICAgICAgJGRyb3Bkb3duLWRpdmlkZXItYmcgIWRlZmF1bHQ7XG4kZHJvcGRvd24tZGFyay1ib3gtc2hhZG93OiAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGRyb3Bkb3duLWRhcmstbGluay1jb2xvcjogICAgICAgICAgJGRyb3Bkb3duLWRhcmstY29sb3IgIWRlZmF1bHQ7XG4kZHJvcGRvd24tZGFyay1saW5rLWhvdmVyLWNvbG9yOiAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kZHJvcGRvd24tZGFyay1saW5rLWhvdmVyLWJnOiAgICAgICByZ2JhKCR3aGl0ZSwgLjE1KSAhZGVmYXVsdDtcbiRkcm9wZG93bi1kYXJrLWxpbmstYWN0aXZlLWNvbG9yOiAgICRkcm9wZG93bi1saW5rLWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRkcm9wZG93bi1kYXJrLWxpbmstYWN0aXZlLWJnOiAgICAgICRkcm9wZG93bi1saW5rLWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRkcm9wZG93bi1kYXJrLWxpbmstZGlzYWJsZWQtY29sb3I6ICRncmF5LTUwMCAhZGVmYXVsdDtcbiRkcm9wZG93bi1kYXJrLWhlYWRlci1jb2xvcjogICAgICAgICRncmF5LTUwMCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgZHJvcGRvd24tZGFyay12YXJpYWJsZXNcblxuXG4vLyBQYWdpbmF0aW9uXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBwYWdpbmF0aW9uLXZhcmlhYmxlc1xuJHBhZ2luYXRpb24tcGFkZGluZy15OiAgICAgICAgICAgICAgLjM3NXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteDogICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteS1zbTogICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteC1zbTogICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy15LWxnOiAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy14LWxnOiAgICAgICAgICAgMS41cmVtICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1mb250LXNpemU6ICAgICAgICAgICAgICAkZm9udC1zaXplLWJhc2UgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWNvbG9yOiAgICAgICAgICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1saW5rLWNvbG9yKSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJnOiAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYm9yZGVyLXdpZHRoOiAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLW1hcmdpbi1zdGFydDogICAgICAgICAgICgkcGFnaW5hdGlvbi1ib3JkZXItd2lkdGggKiAtMSkgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1ib3JkZXItY29sb3I6ICAgICAgICAgICAkZ3JheS0zMDAgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWZvY3VzLWNvbG9yOiAgICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1saW5rLWhvdmVyLWNvbG9yKSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWZvY3VzLWJnOiAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWZvY3VzLWJveC1zaGFkb3c6ICAgICAgICRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdyAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWZvY3VzLW91dGxpbmU6ICAgICAgICAgIDAgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWhvdmVyLWNvbG9yOiAgICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1saW5rLWhvdmVyLWNvbG9yKSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWhvdmVyLWJnOiAgICAgICAgICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWhvdmVyLWJvcmRlci1jb2xvcjogICAgICRncmF5LTMwMCAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tYWN0aXZlLWNvbG9yOiAgICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1hY3RpdmUtYmc6ICAgICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWFjdGl2ZS1ib3JkZXItY29sb3I6ICAgICRwYWdpbmF0aW9uLWFjdGl2ZS1iZyAhZGVmYXVsdDtcblxuJHBhZ2luYXRpb24tZGlzYWJsZWQtY29sb3I6ICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZGlzYWJsZWQtYmc6ICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tZGlzYWJsZWQtYm9yZGVyLWNvbG9yOiAgJGdyYXktMzAwICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi10cmFuc2l0aW9uOiAgICAgICAgICAgICAgY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0ICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1ib3JkZXItcmFkaXVzLXNtOiAgICAgICAkYm9yZGVyLXJhZGl1cy1zbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJvcmRlci1yYWRpdXMtbGc6ICAgICAgICRib3JkZXItcmFkaXVzLWxnICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBwYWdpbmF0aW9uLXZhcmlhYmxlc1xuXG5cbi8vIFBsYWNlaG9sZGVyc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgcGxhY2Vob2xkZXJzXG4kcGxhY2Vob2xkZXItb3BhY2l0eS1tYXg6ICAgICAgICAgICAuNSAhZGVmYXVsdDtcbiRwbGFjZWhvbGRlci1vcGFjaXR5LW1pbjogICAgICAgICAgIC4yICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBwbGFjZWhvbGRlcnNcblxuLy8gQ2FyZHNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGNhcmQtdmFyaWFibGVzXG4kY2FyZC1zcGFjZXIteTogICAgICAgICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuJGNhcmQtc3BhY2VyLXg6ICAgICAgICAgICAgICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcbiRjYXJkLXRpdGxlLXNwYWNlci15OiAgICAgICAgICAgICAgICRzcGFjZXIgKiAuNSAhZGVmYXVsdDtcbiRjYXJkLWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kY2FyZC1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICB2YXIoLS0jeyRwcmVmaXh9Ym9yZGVyLWNvbG9yLXRyYW5zbHVjZW50KSAhZGVmYXVsdDtcbiRjYXJkLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGNhcmQtYm94LXNoYWRvdzogICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRjYXJkLWlubmVyLWJvcmRlci1yYWRpdXM6ICAgICAgICAgIHN1YnRyYWN0KCRjYXJkLWJvcmRlci1yYWRpdXMsICRjYXJkLWJvcmRlci13aWR0aCkgIWRlZmF1bHQ7XG4kY2FyZC1jYXAtcGFkZGluZy15OiAgICAgICAgICAgICAgICAkY2FyZC1zcGFjZXIteSAqIC41ICFkZWZhdWx0O1xuJGNhcmQtY2FwLXBhZGRpbmcteDogICAgICAgICAgICAgICAgJGNhcmQtc3BhY2VyLXggIWRlZmF1bHQ7XG4kY2FyZC1jYXAtYmc6ICAgICAgICAgICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjAzKSAhZGVmYXVsdDtcbiRjYXJkLWNhcC1jb2xvcjogICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kY2FyZC1oZWlnaHQ6ICAgICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGNhcmQtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRjYXJkLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRjYXJkLWltZy1vdmVybGF5LXBhZGRpbmc6ICAgICAgICAgICRzcGFjZXIgIWRlZmF1bHQ7XG4kY2FyZC1ncm91cC1tYXJnaW46ICAgICAgICAgICAgICAgICAkZ3JpZC1ndXR0ZXItd2lkdGggKiAuNSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgY2FyZC12YXJpYWJsZXNcblxuLy8gQWNjb3JkaW9uXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBhY2NvcmRpb24tdmFyaWFibGVzXG4kYWNjb3JkaW9uLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGFjY29yZGlvbi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcbiRhY2NvcmRpb24tY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1ib2R5LWNvbG9yKSAhZGVmYXVsdDtcbiRhY2NvcmRpb24tYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICRib2R5LWJnICFkZWZhdWx0O1xuJGFjY29yZGlvbi1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRhY2NvcmRpb24tYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1ib3JkZXItY29sb3IpICFkZWZhdWx0O1xuJGFjY29yZGlvbi1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kYWNjb3JkaW9uLWlubmVyLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICBzdWJ0cmFjdCgkYWNjb3JkaW9uLWJvcmRlci1yYWRpdXMsICRhY2NvcmRpb24tYm9yZGVyLXdpZHRoKSAhZGVmYXVsdDtcblxuJGFjY29yZGlvbi1ib2R5LXBhZGRpbmcteTogICAgICAgICAgICAgICAgJGFjY29yZGlvbi1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kYWNjb3JkaW9uLWJvZHktcGFkZGluZy14OiAgICAgICAgICAgICAgICAkYWNjb3JkaW9uLXBhZGRpbmcteCAhZGVmYXVsdDtcblxuJGFjY29yZGlvbi1idXR0b24tcGFkZGluZy15OiAgICAgICAgICAgICAgJGFjY29yZGlvbi1wYWRkaW5nLXkgIWRlZmF1bHQ7XG4kYWNjb3JkaW9uLWJ1dHRvbi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAkYWNjb3JkaW9uLXBhZGRpbmcteCAhZGVmYXVsdDtcbiRhY2NvcmRpb24tYnV0dG9uLWNvbG9yOiAgICAgICAgICAgICAgICAgICRhY2NvcmRpb24tY29sb3IgIWRlZmF1bHQ7XG4kYWNjb3JkaW9uLWJ1dHRvbi1iZzogICAgICAgICAgICAgICAgICAgICB2YXIoLS0jeyRwcmVmaXh9YWNjb3JkaW9uLWJnKSAhZGVmYXVsdDtcbiRhY2NvcmRpb24tdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgICAgICRidG4tdHJhbnNpdGlvbiwgYm9yZGVyLXJhZGl1cyAuMTVzIGVhc2UgIWRlZmF1bHQ7XG4kYWNjb3JkaW9uLWJ1dHRvbi1hY3RpdmUtYmc6ICAgICAgICAgICAgICB0aW50LWNvbG9yKCRjb21wb25lbnQtYWN0aXZlLWJnLCA5MCUpICFkZWZhdWx0O1xuJGFjY29yZGlvbi1idXR0b24tYWN0aXZlLWNvbG9yOiAgICAgICAgICAgc2hhZGUtY29sb3IoJHByaW1hcnksIDEwJSkgIWRlZmF1bHQ7XG5cbiRhY2NvcmRpb24tYnV0dG9uLWZvY3VzLWJvcmRlci1jb2xvcjogICAgICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG4kYWNjb3JkaW9uLWJ1dHRvbi1mb2N1cy1ib3gtc2hhZG93OiAgICAgICAkYnRuLWZvY3VzLWJveC1zaGFkb3cgIWRlZmF1bHQ7XG5cbiRhY2NvcmRpb24taWNvbi13aWR0aDogICAgICAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG4kYWNjb3JkaW9uLWljb24tY29sb3I6ICAgICAgICAgICAgICAgICAgICAkYWNjb3JkaW9uLWJ1dHRvbi1jb2xvciAhZGVmYXVsdDtcbiRhY2NvcmRpb24taWNvbi1hY3RpdmUtY29sb3I6ICAgICAgICAgICAgICRhY2NvcmRpb24tYnV0dG9uLWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRhY2NvcmRpb24taWNvbi10cmFuc2l0aW9uOiAgICAgICAgICAgICAgIHRyYW5zZm9ybSAuMnMgZWFzZS1pbi1vdXQgIWRlZmF1bHQ7XG4kYWNjb3JkaW9uLWljb24tdHJhbnNmb3JtOiAgICAgICAgICAgICAgICByb3RhdGUoLTE4MGRlZykgIWRlZmF1bHQ7XG5cbiRhY2NvcmRpb24tYnV0dG9uLWljb246ICAgICAgICAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMTYgMTYnIGZpbGw9JyN7JGFjY29yZGlvbi1pY29uLWNvbG9yfSc+PHBhdGggZmlsbC1ydWxlPSdldmVub2RkJyBkPSdNMS42NDYgNC42NDZhLjUuNSAwIDAgMSAuNzA4IDBMOCAxMC4yOTNsNS42NDYtNS42NDdhLjUuNSAwIDAgMSAuNzA4LjcwOGwtNiA2YS41LjUgMCAwIDEtLjcwOCAwbC02LTZhLjUuNSAwIDAgMSAwLS43MDh6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuJGFjY29yZGlvbi1idXR0b24tYWN0aXZlLWljb246ICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxNiAxNicgZmlsbD0nI3skYWNjb3JkaW9uLWljb24tYWN0aXZlLWNvbG9yfSc+PHBhdGggZmlsbC1ydWxlPSdldmVub2RkJyBkPSdNMS42NDYgNC42NDZhLjUuNSAwIDAgMSAuNzA4IDBMOCAxMC4yOTNsNS42NDYtNS42NDdhLjUuNSAwIDAgMSAuNzA4LjcwOGwtNiA2YS41LjUgMCAwIDEtLjcwOCAwbC02LTZhLjUuNSAwIDAgMSAwLS43MDh6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBhY2NvcmRpb24tdmFyaWFibGVzXG5cbi8vIFRvb2x0aXBzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCB0b29sdGlwLXZhcmlhYmxlc1xuJHRvb2x0aXAtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1zbSAhZGVmYXVsdDtcbiR0b29sdGlwLW1heC13aWR0aDogICAgICAgICAgICAgICAgIDIwMHB4ICFkZWZhdWx0O1xuJHRvb2x0aXAtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHRvb2x0aXAtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgJGJsYWNrICFkZWZhdWx0O1xuJHRvb2x0aXAtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kdG9vbHRpcC1vcGFjaXR5OiAgICAgICAgICAgICAgICAgICAuOSAhZGVmYXVsdDtcbiR0b29sdGlwLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICRzcGFjZXIgKiAuMjUgIWRlZmF1bHQ7XG4kdG9vbHRpcC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAkc3BhY2VyICogLjUgIWRlZmF1bHQ7XG4kdG9vbHRpcC1tYXJnaW46ICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0OyAvLyBUT0RPOiByZW1vdmUgdGhpcyBpbiB2NlxuXG4kdG9vbHRpcC1hcnJvdy13aWR0aDogICAgICAgICAgICAgICAuOHJlbSAhZGVmYXVsdDtcbiR0b29sdGlwLWFycm93LWhlaWdodDogICAgICAgICAgICAgIC40cmVtICFkZWZhdWx0O1xuLy8gZnVzdi1kaXNhYmxlXG4kdG9vbHRpcC1hcnJvdy1jb2xvcjogICAgICAgICAgICAgICBudWxsICFkZWZhdWx0OyAvLyBEZXByZWNhdGVkIGluIEJvb3RzdHJhcCA1LjIuMCBmb3IgQ1NTIHZhcmlhYmxlc1xuLy8gZnVzdi1lbmFibGVcbi8vIHNjc3MtZG9jcy1lbmQgdG9vbHRpcC12YXJpYWJsZXNcblxuLy8gRm9ybSB0b29sdGlwcyBtdXN0IGNvbWUgYWZ0ZXIgcmVndWxhciB0b29sdGlwc1xuLy8gc2Nzcy1kb2NzLXN0YXJ0IHRvb2x0aXAtZmVlZGJhY2stdmFyaWFibGVzXG4kZm9ybS1mZWVkYmFjay10b29sdGlwLXBhZGRpbmcteTogICAgICR0b29sdGlwLXBhZGRpbmcteSAhZGVmYXVsdDtcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtcGFkZGluZy14OiAgICAgJHRvb2x0aXAtcGFkZGluZy14ICFkZWZhdWx0O1xuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1mb250LXNpemU6ICAgICAkdG9vbHRpcC1mb250LXNpemUgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay10b29sdGlwLWxpbmUtaGVpZ2h0OiAgIG51bGwgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay10b29sdGlwLW9wYWNpdHk6ICAgICAgICR0b29sdGlwLW9wYWNpdHkgIWRlZmF1bHQ7XG4kZm9ybS1mZWVkYmFjay10b29sdGlwLWJvcmRlci1yYWRpdXM6ICR0b29sdGlwLWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIHRvb2x0aXAtZmVlZGJhY2stdmFyaWFibGVzXG5cblxuLy8gUG9wb3ZlcnNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IHBvcG92ZXItdmFyaWFibGVzXG4kcG9wb3Zlci1mb250LXNpemU6ICAgICAgICAgICAgICAgICAkZm9udC1zaXplLXNtICFkZWZhdWx0O1xuJHBvcG92ZXItYmc6ICAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJHBvcG92ZXItbWF4LXdpZHRoOiAgICAgICAgICAgICAgICAgMjc2cHggIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJHBvcG92ZXItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgdmFyKC0tI3skcHJlZml4fWJvcmRlci1jb2xvci10cmFuc2x1Y2VudCkgIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cy1sZyAhZGVmYXVsdDtcbiRwb3BvdmVyLWlubmVyLWJvcmRlci1yYWRpdXM6ICAgICAgIHN1YnRyYWN0KCRwb3BvdmVyLWJvcmRlci1yYWRpdXMsICRwb3BvdmVyLWJvcmRlci13aWR0aCkgIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAkYm94LXNoYWRvdyAhZGVmYXVsdDtcblxuJHBvcG92ZXItaGVhZGVyLWZvbnQtc2l6ZTogICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICFkZWZhdWx0O1xuJHBvcG92ZXItaGVhZGVyLWJnOiAgICAgICAgICAgICAgICAgc2hhZGUtY29sb3IoJHBvcG92ZXItYmcsIDYlKSAhZGVmYXVsdDtcbiRwb3BvdmVyLWhlYWRlci1jb2xvcjogICAgICAgICAgICAgIHZhcigtLSN7JHByZWZpeH1oZWFkaW5nLWNvbG9yKSAhZGVmYXVsdDtcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXk6ICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteDogICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcblxuJHBvcG92ZXItYm9keS1jb2xvcjogICAgICAgICAgICAgICAgJGJvZHktY29sb3IgIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib2R5LXBhZGRpbmcteTogICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuJHBvcG92ZXItYm9keS1wYWRkaW5nLXg6ICAgICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcblxuJHBvcG92ZXItYXJyb3ctd2lkdGg6ICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcbiRwb3BvdmVyLWFycm93LWhlaWdodDogICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBwb3BvdmVyLXZhcmlhYmxlc1xuXG4vLyBmdXN2LWRpc2FibGVcbi8vIERlcHJlY2F0ZWQgaW4gQm9vdHN0cmFwIDUuMi4wIGZvciBDU1MgdmFyaWFibGVzXG4kcG9wb3Zlci1hcnJvdy1jb2xvcjogICAgICAgICAgICAgICAkcG9wb3Zlci1iZyAhZGVmYXVsdDtcbiRwb3BvdmVyLWFycm93LW91dGVyLWNvbG9yOiAgICAgICAgIHZhcigtLSN7JHByZWZpeH1ib3JkZXItY29sb3ItdHJhbnNsdWNlbnQpICFkZWZhdWx0O1xuLy8gZnVzdi1lbmFibGVcblxuXG4vLyBUb2FzdHNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IHRvYXN0LXZhcmlhYmxlc1xuJHRvYXN0LW1heC13aWR0aDogICAgICAgICAgICAgICAgICAgMzUwcHggIWRlZmF1bHQ7XG4kdG9hc3QtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiR0b2FzdC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgIC44NzVyZW0gIWRlZmF1bHQ7XG4kdG9hc3QtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJHRvYXN0LWJhY2tncm91bmQtY29sb3I6ICAgICAgICAgICAgcmdiYSgkd2hpdGUsIC44NSkgIWRlZmF1bHQ7XG4kdG9hc3QtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJHRvYXN0LWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgdmFyKC0tI3skcHJlZml4fWJvcmRlci1jb2xvci10cmFuc2x1Y2VudCkgIWRlZmF1bHQ7XG4kdG9hc3QtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiR0b2FzdC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAgICRib3gtc2hhZG93ICFkZWZhdWx0O1xuJHRvYXN0LXNwYWNpbmc6ICAgICAgICAgICAgICAgICAgICAgJGNvbnRhaW5lci1wYWRkaW5nLXggIWRlZmF1bHQ7XG5cbiR0b2FzdC1oZWFkZXItY29sb3I6ICAgICAgICAgICAgICAgICRncmF5LTYwMCAhZGVmYXVsdDtcbiR0b2FzdC1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogICAgIHJnYmEoJHdoaXRlLCAuODUpICFkZWZhdWx0O1xuJHRvYXN0LWhlYWRlci1ib3JkZXItY29sb3I6ICAgICAgICAgcmdiYSgkYmxhY2ssIC4wNSkgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIHRvYXN0LXZhcmlhYmxlc1xuXG5cbi8vIEJhZGdlc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgYmFkZ2UtdmFyaWFibGVzXG4kYmFkZ2UtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgICAuNzVlbSAhZGVmYXVsdDtcbiRiYWRnZS1mb250LXdlaWdodDogICAgICAgICAgICAgICAgICRmb250LXdlaWdodC1ib2xkICFkZWZhdWx0O1xuJGJhZGdlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGJhZGdlLXBhZGRpbmcteTogICAgICAgICAgICAgICAgICAgLjM1ZW0gIWRlZmF1bHQ7XG4kYmFkZ2UtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgICAuNjVlbSAhZGVmYXVsdDtcbiRiYWRnZS1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBiYWRnZS12YXJpYWJsZXNcblxuXG4vLyBNb2RhbHNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IG1vZGFsLXZhcmlhYmxlc1xuJG1vZGFsLWlubmVyLXBhZGRpbmc6ICAgICAgICAgICAgICAgJHNwYWNlciAhZGVmYXVsdDtcblxuJG1vZGFsLWZvb3Rlci1tYXJnaW4tYmV0d2VlbjogICAgICAgLjVyZW0gIWRlZmF1bHQ7XG5cbiRtb2RhbC1kaWFsb2ctbWFyZ2luOiAgICAgICAgICAgICAgIC41cmVtICFkZWZhdWx0O1xuJG1vZGFsLWRpYWxvZy1tYXJnaW4teS1zbS11cDogICAgICAgMS43NXJlbSAhZGVmYXVsdDtcblxuJG1vZGFsLXRpdGxlLWxpbmUtaGVpZ2h0OiAgICAgICAgICAgJGxpbmUtaGVpZ2h0LWJhc2UgIWRlZmF1bHQ7XG5cbiRtb2RhbC1jb250ZW50LWNvbG9yOiAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1iZzogICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3JkZXItY29sb3I6ICAgICAgICB2YXIoLS0jeyRwcmVmaXh9Ym9yZGVyLWNvbG9yLXRyYW5zbHVjZW50KSAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJvcmRlci13aWR0aDogICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3JkZXItcmFkaXVzOiAgICAgICAkYm9yZGVyLXJhZGl1cy1sZyAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWlubmVyLWJvcmRlci1yYWRpdXM6IHN1YnRyYWN0KCRtb2RhbC1jb250ZW50LWJvcmRlci1yYWRpdXMsICRtb2RhbC1jb250ZW50LWJvcmRlci13aWR0aCkgIWRlZmF1bHQ7XG4kbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXhzOiAgICAgICAkYm94LXNoYWRvdy1zbSAhZGVmYXVsdDtcbiRtb2RhbC1jb250ZW50LWJveC1zaGFkb3ctc20tdXA6ICAgICRib3gtc2hhZG93ICFkZWZhdWx0O1xuXG4kbW9kYWwtYmFja2Ryb3AtYmc6ICAgICAgICAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XG4kbW9kYWwtYmFja2Ryb3Atb3BhY2l0eTogICAgICAgICAgICAuNSAhZGVmYXVsdDtcblxuJG1vZGFsLWhlYWRlci1ib3JkZXItY29sb3I6ICAgICAgICAgdmFyKC0tI3skcHJlZml4fWJvcmRlci1jb2xvcikgIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLWJvcmRlci13aWR0aDogICAgICAgICAkbW9kYWwtY29udGVudC1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbW9kYWwtaGVhZGVyLXBhZGRpbmcteTogICAgICAgICAgICAkbW9kYWwtaW5uZXItcGFkZGluZyAhZGVmYXVsdDtcbiRtb2RhbC1oZWFkZXItcGFkZGluZy14OiAgICAgICAgICAgICRtb2RhbC1pbm5lci1wYWRkaW5nICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1wYWRkaW5nOiAgICAgICAgICAgICAgJG1vZGFsLWhlYWRlci1wYWRkaW5nLXkgJG1vZGFsLWhlYWRlci1wYWRkaW5nLXggIWRlZmF1bHQ7IC8vIEtlZXAgdGhpcyBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcblxuJG1vZGFsLWZvb3Rlci1iZzogICAgICAgICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDtcbiRtb2RhbC1mb290ZXItYm9yZGVyLWNvbG9yOiAgICAgICAgICRtb2RhbC1oZWFkZXItYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJG1vZGFsLWZvb3Rlci1ib3JkZXItd2lkdGg6ICAgICAgICAgJG1vZGFsLWhlYWRlci1ib3JkZXItd2lkdGggIWRlZmF1bHQ7XG5cbiRtb2RhbC1zbTogICAgICAgICAgICAgICAgICAgICAgICAgIDMwMHB4ICFkZWZhdWx0O1xuJG1vZGFsLW1kOiAgICAgICAgICAgICAgICAgICAgICAgICAgNTAwcHggIWRlZmF1bHQ7XG4kbW9kYWwtbGc6ICAgICAgICAgICAgICAgICAgICAgICAgICA4MDBweCAhZGVmYXVsdDtcbiRtb2RhbC14bDogICAgICAgICAgICAgICAgICAgICAgICAgIDExNDBweCAhZGVmYXVsdDtcblxuJG1vZGFsLWZhZGUtdHJhbnNmb3JtOiAgICAgICAgICAgICAgdHJhbnNsYXRlKDAsIC01MHB4KSAhZGVmYXVsdDtcbiRtb2RhbC1zaG93LXRyYW5zZm9ybTogICAgICAgICAgICAgIG5vbmUgIWRlZmF1bHQ7XG4kbW9kYWwtdHJhbnNpdGlvbjogICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gLjNzIGVhc2Utb3V0ICFkZWZhdWx0O1xuJG1vZGFsLXNjYWxlLXRyYW5zZm9ybTogICAgICAgICAgICAgc2NhbGUoMS4wMikgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIG1vZGFsLXZhcmlhYmxlc1xuXG5cbi8vIEFsZXJ0c1xuLy9cbi8vIERlZmluZSBhbGVydCBjb2xvcnMsIGJvcmRlciByYWRpdXMsIGFuZCBwYWRkaW5nLlxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgYWxlcnQtdmFyaWFibGVzXG4kYWxlcnQtcGFkZGluZy15OiAgICAgICAgICAgICAgICRzcGFjZXIgIWRlZmF1bHQ7XG4kYWxlcnQtcGFkZGluZy14OiAgICAgICAgICAgICAgICRzcGFjZXIgIWRlZmF1bHQ7XG4kYWxlcnQtbWFyZ2luLWJvdHRvbTogICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kYWxlcnQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGFsZXJ0LWxpbmstZm9udC13ZWlnaHQ6ICAgICAgICAkZm9udC13ZWlnaHQtYm9sZCAhZGVmYXVsdDtcbiRhbGVydC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRhbGVydC1iZy1zY2FsZTogICAgICAgICAgICAgICAgLTgwJSAhZGVmYXVsdDtcbiRhbGVydC1ib3JkZXItc2NhbGU6ICAgICAgICAgICAgLTcwJSAhZGVmYXVsdDtcbiRhbGVydC1jb2xvci1zY2FsZTogICAgICAgICAgICAgNDAlICFkZWZhdWx0O1xuJGFsZXJ0LWRpc21pc3NpYmxlLXBhZGRpbmctcjogICAkYWxlcnQtcGFkZGluZy14ICogMyAhZGVmYXVsdDsgLy8gM3ggY292ZXJzIHdpZHRoIG9mIHggcGx1cyBkZWZhdWx0IHBhZGRpbmcgb24gZWl0aGVyIHNpZGVcbi8vIHNjc3MtZG9jcy1lbmQgYWxlcnQtdmFyaWFibGVzXG5cblxuLy8gUHJvZ3Jlc3MgYmFyc1xuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgcHJvZ3Jlc3MtdmFyaWFibGVzXG4kcHJvZ3Jlc3MtaGVpZ2h0OiAgICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJHByb2dyZXNzLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1iYXNlICogLjc1ICFkZWZhdWx0O1xuJHByb2dyZXNzLWJnOiAgICAgICAgICAgICAgICAgICAgICAgJGdyYXktMjAwICFkZWZhdWx0O1xuJHByb2dyZXNzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYm94LXNoYWRvdzogICAgICAgICAgICAgICAkYm94LXNoYWRvdy1pbnNldCAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItY29sb3I6ICAgICAgICAgICAgICAgICR3aGl0ZSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItYmc6ICAgICAgICAgICAgICAgICAgICRwcmltYXJ5ICFkZWZhdWx0O1xuJHByb2dyZXNzLWJhci1hbmltYXRpb24tdGltaW5nOiAgICAgMXMgbGluZWFyIGluZmluaXRlICFkZWZhdWx0O1xuJHByb2dyZXNzLWJhci10cmFuc2l0aW9uOiAgICAgICAgICAgd2lkdGggLjZzIGVhc2UgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIHByb2dyZXNzLXZhcmlhYmxlc1xuXG5cbi8vIExpc3QgZ3JvdXBcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGxpc3QtZ3JvdXAtdmFyaWFibGVzXG4kbGlzdC1ncm91cC1jb2xvcjogICAgICAgICAgICAgICAgICAkZ3JheS05MDAgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1iZzogICAgICAgICAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1ib3JkZXItY29sb3I6ICAgICAgICAgICByZ2JhKCRibGFjaywgLjEyNSkgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1ib3JkZXItd2lkdGg6ICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYm9yZGVyLXJhZGl1czogICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWl0ZW0tcGFkZGluZy15OiAgICAgICAgICRzcGFjZXIgKiAuNSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWl0ZW0tcGFkZGluZy14OiAgICAgICAgICRzcGFjZXIgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1pdGVtLWJnLXNjYWxlOiAgICAgICAgICAtODAlICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtaXRlbS1jb2xvci1zY2FsZTogICAgICAgNDAlICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1ob3Zlci1iZzogICAgICAgICAgICAgICAkZ3JheS0xMDAgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3RpdmUtY29sb3I6ICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGl2ZS1iZzogICAgICAgICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aXZlLWJvcmRlci1jb2xvcjogICAgJGxpc3QtZ3JvdXAtYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1kaXNhYmxlZC1jb2xvcjogICAgICAgICAkZ3JheS02MDAgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1kaXNhYmxlZC1iZzogICAgICAgICAgICAkbGlzdC1ncm91cC1iZyAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtYWN0aW9uLWNvbG9yOiAgICAgICAgICAgJGdyYXktNzAwICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aW9uLWhvdmVyLWNvbG9yOiAgICAgJGxpc3QtZ3JvdXAtYWN0aW9uLWNvbG9yICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWNvbG9yOiAgICAkYm9keS1jb2xvciAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtYmc6ICAgICAgICRncmF5LTIwMCAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgbGlzdC1ncm91cC12YXJpYWJsZXNcblxuXG4vLyBJbWFnZSB0aHVtYm5haWxzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCB0aHVtYm5haWwtdmFyaWFibGVzXG4kdGh1bWJuYWlsLXBhZGRpbmc6ICAgICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJnOiAgICAgICAgICAgICAgICAgICAgICAkYm9keS1iZyAhZGVmYXVsdDtcbiR0aHVtYm5haWwtYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJvcmRlci1jb2xvcjogICAgICAgICAgICB2YXIoLS0jeyRwcmVmaXh9Ym9yZGVyLWNvbG9yKSAhZGVmYXVsdDtcbiR0aHVtYm5haWwtYm9yZGVyLXJhZGl1czogICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJHRodW1ibmFpbC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgJGJveC1zaGFkb3ctc20gIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIHRodW1ibmFpbC12YXJpYWJsZXNcblxuXG4vLyBGaWd1cmVzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBmaWd1cmUtdmFyaWFibGVzXG4kZmlndXJlLWNhcHRpb24tZm9udC1zaXplOiAgICAgICAgICAkc21hbGwtZm9udC1zaXplICFkZWZhdWx0O1xuJGZpZ3VyZS1jYXB0aW9uLWNvbG9yOiAgICAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuLy8gc2Nzcy1kb2NzLWVuZCBmaWd1cmUtdmFyaWFibGVzXG5cblxuLy8gQnJlYWRjcnVtYnNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IGJyZWFkY3J1bWItdmFyaWFibGVzXG4kYnJlYWRjcnVtYi1mb250LXNpemU6ICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItcGFkZGluZy15OiAgICAgICAgICAgICAgMCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLXBhZGRpbmcteDogICAgICAgICAgICAgIDAgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1pdGVtLXBhZGRpbmcteDogICAgICAgICAuNXJlbSAhZGVmYXVsdDtcbiRicmVhZGNydW1iLW1hcmdpbi1ib3R0b206ICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1iZzogICAgICAgICAgICAgICAgICAgICBudWxsICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItZGl2aWRlci1jb2xvcjogICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItYWN0aXZlLWNvbG9yOiAgICAgICAgICAgJGdyYXktNjAwICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItZGl2aWRlcjogICAgICAgICAgICAgICAgcXVvdGUoXCIvXCIpICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItZGl2aWRlci1mbGlwcGVkOiAgICAgICAgJGJyZWFkY3J1bWItZGl2aWRlciAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWJvcmRlci1yYWRpdXM6ICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4vLyBzY3NzLWRvY3MtZW5kIGJyZWFkY3J1bWItdmFyaWFibGVzXG5cbi8vIENhcm91c2VsXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBjYXJvdXNlbC12YXJpYWJsZXNcbiRjYXJvdXNlbC1jb250cm9sLWNvbG9yOiAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY29udHJvbC13aWR0aDogICAgICAgICAgICAgMTUlICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtb3BhY2l0eTogICAgICAgICAgIC41ICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtaG92ZXItb3BhY2l0eTogICAgIC45ICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtdHJhbnNpdGlvbjogICAgICAgIG9wYWNpdHkgLjE1cyBlYXNlICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtaW5kaWNhdG9yLXdpZHRoOiAgICAgICAgICAgMzBweCAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3ItaGVpZ2h0OiAgICAgICAgICAzcHggIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLWhpdC1hcmVhLWhlaWdodDogMTBweCAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3Itc3BhY2VyOiAgICAgICAgICAzcHggIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLW9wYWNpdHk6ICAgICAgICAgLjUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLWFjdGl2ZS1iZzogICAgICAgJHdoaXRlICFkZWZhdWx0O1xuJGNhcm91c2VsLWluZGljYXRvci1hY3RpdmUtb3BhY2l0eTogIDEgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtaW5kaWNhdG9yLXRyYW5zaXRpb246ICAgICAgb3BhY2l0eSAuNnMgZWFzZSAhZGVmYXVsdDtcblxuJGNhcm91c2VsLWNhcHRpb24td2lkdGg6ICAgICAgICAgICAgIDcwJSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jYXB0aW9uLWNvbG9yOiAgICAgICAgICAgICAkd2hpdGUgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtY2FwdGlvbi1wYWRkaW5nLXk6ICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jYXB0aW9uLXNwYWNlcjogICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtY29udHJvbC1pY29uLXdpZHRoOiAgICAgICAgMnJlbSAhZGVmYXVsdDtcblxuJGNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uLWJnOiAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDE2IDE2JyBmaWxsPScjeyRjYXJvdXNlbC1jb250cm9sLWNvbG9yfSc+PHBhdGggZD0nTTExLjM1NCAxLjY0NmEuNS41IDAgMCAxIDAgLjcwOEw1LjcwNyA4bDUuNjQ3IDUuNjQ2YS41LjUgMCAwIDEtLjcwOC43MDhsLTYtNmEuNS41IDAgMCAxIDAtLjcwOGw2LTZhLjUuNSAwIDAgMSAuNzA4IDB6Jy8+PC9zdmc+XCIpICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uLWJnOiAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDE2IDE2JyBmaWxsPScjeyRjYXJvdXNlbC1jb250cm9sLWNvbG9yfSc+PHBhdGggZD0nTTQuNjQ2IDEuNjQ2YS41LjUgMCAwIDEgLjcwOCAwbDYgNmEuNS41IDAgMCAxIDAgLjcwOGwtNiA2YS41LjUgMCAwIDEtLjcwOC0uNzA4TDEwLjI5MyA4IDQuNjQ2IDIuMzU0YS41LjUgMCAwIDEgMC0uNzA4eicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcblxuJGNhcm91c2VsLXRyYW5zaXRpb24tZHVyYXRpb246ICAgICAgIC42cyAhZGVmYXVsdDtcbiRjYXJvdXNlbC10cmFuc2l0aW9uOiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gJGNhcm91c2VsLXRyYW5zaXRpb24tZHVyYXRpb24gZWFzZS1pbi1vdXQgIWRlZmF1bHQ7IC8vIERlZmluZSB0cmFuc2Zvcm0gdHJhbnNpdGlvbiBmaXJzdCBpZiB1c2luZyBtdWx0aXBsZSB0cmFuc2l0aW9ucyAoZS5nLiwgYHRyYW5zZm9ybSAycyBlYXNlLCBvcGFjaXR5IC41cyBlYXNlLW91dGApXG5cbiRjYXJvdXNlbC1kYXJrLWluZGljYXRvci1hY3RpdmUtYmc6ICAkYmxhY2sgIWRlZmF1bHQ7XG4kY2Fyb3VzZWwtZGFyay1jYXB0aW9uLWNvbG9yOiAgICAgICAgJGJsYWNrICFkZWZhdWx0O1xuJGNhcm91c2VsLWRhcmstY29udHJvbC1pY29uLWZpbHRlcjogIGludmVydCgxKSBncmF5c2NhbGUoMTAwKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgY2Fyb3VzZWwtdmFyaWFibGVzXG5cblxuLy8gU3Bpbm5lcnNcblxuLy8gc2Nzcy1kb2NzLXN0YXJ0IHNwaW5uZXItdmFyaWFibGVzXG4kc3Bpbm5lci13aWR0aDogICAgICAgICAgIDJyZW0gIWRlZmF1bHQ7XG4kc3Bpbm5lci1oZWlnaHQ6ICAgICAgICAgICRzcGlubmVyLXdpZHRoICFkZWZhdWx0O1xuJHNwaW5uZXItdmVydGljYWwtYWxpZ246ICAtLjEyNWVtICFkZWZhdWx0O1xuJHNwaW5uZXItYm9yZGVyLXdpZHRoOiAgICAuMjVlbSAhZGVmYXVsdDtcbiRzcGlubmVyLWFuaW1hdGlvbi1zcGVlZDogLjc1cyAhZGVmYXVsdDtcblxuJHNwaW5uZXItd2lkdGgtc206ICAgICAgICAxcmVtICFkZWZhdWx0O1xuJHNwaW5uZXItaGVpZ2h0LXNtOiAgICAgICAkc3Bpbm5lci13aWR0aC1zbSAhZGVmYXVsdDtcbiRzcGlubmVyLWJvcmRlci13aWR0aC1zbTogLjJlbSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgc3Bpbm5lci12YXJpYWJsZXNcblxuXG4vLyBDbG9zZVxuXG4vLyBzY3NzLWRvY3Mtc3RhcnQgY2xvc2UtdmFyaWFibGVzXG4kYnRuLWNsb3NlLXdpZHRoOiAgICAgICAgICAgIDFlbSAhZGVmYXVsdDtcbiRidG4tY2xvc2UtaGVpZ2h0OiAgICAgICAgICAgJGJ0bi1jbG9zZS13aWR0aCAhZGVmYXVsdDtcbiRidG4tY2xvc2UtcGFkZGluZy14OiAgICAgICAgLjI1ZW0gIWRlZmF1bHQ7XG4kYnRuLWNsb3NlLXBhZGRpbmcteTogICAgICAgICRidG4tY2xvc2UtcGFkZGluZy14ICFkZWZhdWx0O1xuJGJ0bi1jbG9zZS1jb2xvcjogICAgICAgICAgICAkYmxhY2sgIWRlZmF1bHQ7XG4kYnRuLWNsb3NlLWJnOiAgICAgICAgICAgICAgIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCw8c3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDE2IDE2JyBmaWxsPScjeyRidG4tY2xvc2UtY29sb3J9Jz48cGF0aCBkPSdNLjI5My4yOTNhMSAxIDAgMCAxIDEuNDE0IDBMOCA2LjU4NiAxNC4yOTMuMjkzYTEgMSAwIDEgMSAxLjQxNCAxLjQxNEw5LjQxNCA4bDYuMjkzIDYuMjkzYTEgMSAwIDAgMS0xLjQxNCAxLjQxNEw4IDkuNDE0bC02LjI5MyA2LjI5M2ExIDEgMCAwIDEtMS40MTQtMS40MTRMNi41ODYgOCAuMjkzIDEuNzA3YTEgMSAwIDAgMSAwLTEuNDE0eicvPjwvc3ZnPlwiKSAhZGVmYXVsdDtcbiRidG4tY2xvc2UtZm9jdXMtc2hhZG93OiAgICAgJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93ICFkZWZhdWx0O1xuJGJ0bi1jbG9zZS1vcGFjaXR5OiAgICAgICAgICAuNSAhZGVmYXVsdDtcbiRidG4tY2xvc2UtaG92ZXItb3BhY2l0eTogICAgLjc1ICFkZWZhdWx0O1xuJGJ0bi1jbG9zZS1mb2N1cy1vcGFjaXR5OiAgICAxICFkZWZhdWx0O1xuJGJ0bi1jbG9zZS1kaXNhYmxlZC1vcGFjaXR5OiAuMjUgIWRlZmF1bHQ7XG4kYnRuLWNsb3NlLXdoaXRlLWZpbHRlcjogICAgIGludmVydCgxKSBncmF5c2NhbGUoMTAwJSkgYnJpZ2h0bmVzcygyMDAlKSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgY2xvc2UtdmFyaWFibGVzXG5cblxuLy8gT2ZmY2FudmFzXG5cbi8vIHNjc3MtZG9jcy1zdGFydCBvZmZjYW52YXMtdmFyaWFibGVzXG4kb2ZmY2FudmFzLXBhZGRpbmcteTogICAgICAgICAgICAgICAkbW9kYWwtaW5uZXItcGFkZGluZyAhZGVmYXVsdDtcbiRvZmZjYW52YXMtcGFkZGluZy14OiAgICAgICAgICAgICAgICRtb2RhbC1pbm5lci1wYWRkaW5nICFkZWZhdWx0O1xuJG9mZmNhbnZhcy1ob3Jpem9udGFsLXdpZHRoOiAgICAgICAgNDAwcHggIWRlZmF1bHQ7XG4kb2ZmY2FudmFzLXZlcnRpY2FsLWhlaWdodDogICAgICAgICAzMHZoICFkZWZhdWx0O1xuJG9mZmNhbnZhcy10cmFuc2l0aW9uLWR1cmF0aW9uOiAgICAgLjNzICFkZWZhdWx0O1xuJG9mZmNhbnZhcy1ib3JkZXItY29sb3I6ICAgICAgICAgICAgJG1vZGFsLWNvbnRlbnQtYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuJG9mZmNhbnZhcy1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJG9mZmNhbnZhcy10aXRsZS1saW5lLWhlaWdodDogICAgICAgJG1vZGFsLXRpdGxlLWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xuJG9mZmNhbnZhcy1iZy1jb2xvcjogICAgICAgICAgICAgICAgJG1vZGFsLWNvbnRlbnQtYmcgIWRlZmF1bHQ7XG4kb2ZmY2FudmFzLWNvbG9yOiAgICAgICAgICAgICAgICAgICAkbW9kYWwtY29udGVudC1jb2xvciAhZGVmYXVsdDtcbiRvZmZjYW52YXMtYm94LXNoYWRvdzogICAgICAgICAgICAgICRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHMgIWRlZmF1bHQ7XG4kb2ZmY2FudmFzLWJhY2tkcm9wLWJnOiAgICAgICAgICAgICAkbW9kYWwtYmFja2Ryb3AtYmcgIWRlZmF1bHQ7XG4kb2ZmY2FudmFzLWJhY2tkcm9wLW9wYWNpdHk6ICAgICAgICAkbW9kYWwtYmFja2Ryb3Atb3BhY2l0eSAhZGVmYXVsdDtcbi8vIHNjc3MtZG9jcy1lbmQgb2ZmY2FudmFzLXZhcmlhYmxlc1xuXG4vLyBDb2RlXG5cbiRjb2RlLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAgICRzbWFsbC1mb250LXNpemUgIWRlZmF1bHQ7XG4kY29kZS1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAkcGluayAhZGVmYXVsdDtcblxuJGtiZC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgICAgLjE4NzVyZW0gIWRlZmF1bHQ7XG4ka2JkLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAgICAuMzc1cmVtICFkZWZhdWx0O1xuJGtiZC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAgICAgJGNvZGUtZm9udC1zaXplICFkZWZhdWx0O1xuJGtiZC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgICAgdmFyKC0tI3skcHJlZml4fWJvZHktYmcpICFkZWZhdWx0O1xuJGtiZC1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyKC0tI3skcHJlZml4fWJvZHktY29sb3IpICFkZWZhdWx0O1xuJG5lc3RlZC1rYmQtZm9udC13ZWlnaHQ6ICAgICAgICAgICAgbnVsbCAhZGVmYXVsdDsgLy8gRGVwcmVjYXRlZCBpbiB2NS4yLjAsIHJlbW92aW5nIGluIHY2XG5cbiRwcmUtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgIWRlZmF1bHQ7XG4iXX0= */"] });


/***/ }),

/***/ 2748:
/*!************************************************************!*\
  !*** ./src/main/webapp/app/layouts/navbar/navbar.route.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navbarRoute": () => (/* binding */ navbarRoute)
/* harmony export */ });
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.component */ 3121);

const navbarRoute = {
    path: '',
    component: _navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent,
    outlet: 'navbar',
};


/***/ }),

/***/ 6632:
/*!***********************************************************************!*\
  !*** ./src/main/webapp/app/layouts/profiles/page-ribbon.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageRibbonComponent": () => (/* binding */ PageRibbonComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 2070);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.service */ 108);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 3013);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/language/translate.directive */ 1995);






const _c0 = function () {
  return {
    dev: "D\u00E9veloppement"
  };
};

function PageRibbonComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ribbonEnv_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("jhiTranslate", "global.ribbon.", ribbonEnv_r1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0)[ribbonEnv_r1] || "");
  }
}

class PageRibbonComponent {
  constructor(profileService) {
    this.profileService = profileService;
  }

  ngOnInit() {
    this.ribbonEnv$ = this.profileService.getProfileInfo().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(profileInfo => profileInfo.ribbonEnv));
  }

}

PageRibbonComponent.ɵfac = function PageRibbonComponent_Factory(t) {
  return new (t || PageRibbonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService));
};

PageRibbonComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: PageRibbonComponent,
  selectors: [["jhi-page-ribbon"]],
  decls: 4,
  vars: 3,
  consts: [["class", "ribbon", 4, "ngIf"], [1, "ribbon"], ["href", "", 3, "jhiTranslate"]],
  template: function PageRibbonComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "\n    ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PageRibbonComponent_div_1_Template, 5, 3, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n  ");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx.ribbonEnv$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_4__.TranslateDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe],
  styles: [".ribbon[_ngcontent-%COMP%] {\n  background-color: rgba(170, 0, 0, 0.5);\n  overflow: hidden;\n  position: absolute;\n  top: 40px;\n  white-space: nowrap;\n  width: 15em;\n  z-index: 9999;\n  pointer-events: none;\n  opacity: 0.75;\n}\n.ribbon[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  display: block;\n  font-weight: 400;\n  margin: 1px 0;\n  padding: 10px 50px;\n  text-align: center;\n  text-decoration: none;\n  text-shadow: 0 0 5px #444;\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UtcmliYm9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs0RUFBQTtBQUdBO0VBQ0Usc0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7QUFDRjtBQUFFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FBRUoiLCJmaWxlIjoicGFnZS1yaWJib24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuRGV2ZWxvcGVtZW50IFJpYmJvblxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi5yaWJib24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3MCwgMCwgMCwgMC41KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiAxNWVtO1xuICB6LWluZGV4OiA5OTk5O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgb3BhY2l0eTogMC43NTtcbiAgYSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBtYXJnaW46IDFweCAwO1xuICAgIHBhZGRpbmc6IDEwcHggNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4ICM0NDQ7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 108:
/*!*****************************************************************!*\
  !*** ./src/main/webapp/app/layouts/profiles/profile.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileService": () => (/* binding */ ProfileService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 2070);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 5482);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/config/application-config.service */ 1082);




class ProfileService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        this.infoUrl = this.applicationConfigService.getEndpointFor('management/info');
    }
    getProfileInfo() {
        if (this.profileInfo$) {
            return this.profileInfo$;
        }
        this.profileInfo$ = this.http.get(this.infoUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)((response) => {
            var _a, _b;
            const profileInfo = {
                activeProfiles: response.activeProfiles,
                inProduction: (_a = response.activeProfiles) === null || _a === void 0 ? void 0 : _a.includes('prod'),
                openAPIEnabled: (_b = response.activeProfiles) === null || _b === void 0 ? void 0 : _b.includes('api-docs'),
            };
            if (response.activeProfiles && response['display-ribbon-on-profiles']) {
                const displayRibbonOnProfiles = response['display-ribbon-on-profiles'].split(',');
                const ribbonProfiles = displayRibbonOnProfiles.filter(profile => { var _a; return (_a = response.activeProfiles) === null || _a === void 0 ? void 0 : _a.includes(profile); });
                if (ribbonProfiles.length > 0) {
                    profileInfo.ribbonEnv = ribbonProfiles[0];
                }
            }
            return profileInfo;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.shareReplay)());
        return this.profileInfo$;
    }
}
ProfileService.ɵfac = function ProfileService_Factory(t) { return new (t || ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_3__.ApplicationConfigService)); };
ProfileService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProfileService, factory: ProfileService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7115:
/*!****************************************************!*\
  !*** ./src/main/webapp/app/login/login.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 2070);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_core_auth_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/auth/account.service */ 9199);
/* harmony import */ var app_core_auth_auth_jwt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/auth/auth-jwt.service */ 6115);




class LoginService {
    constructor(accountService, authServerProvider) {
        this.accountService = accountService;
        this.authServerProvider = authServerProvider;
    }
    login(credentials) {
        return this.authServerProvider.login(credentials).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.mergeMap)(() => this.accountService.identity(true)));
    }
    logout() {
        this.authServerProvider.logout().subscribe({ complete: () => this.accountService.authenticate(null) });
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](app_core_auth_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](app_core_auth_auth_jwt_service__WEBPACK_IMPORTED_MODULE_3__.AuthServerProvider)); };
LoginService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 486:
/*!*******************************************************************!*\
  !*** ./src/main/webapp/app/shared/alert/alert-error.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertErrorComponent": () => (/* binding */ AlertErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_core_util_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/util/alert.service */ 4728);
/* harmony import */ var app_core_util_event_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/util/event-manager.service */ 8821);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 9520);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 3013);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1960);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__);






function AlertErrorComponent_div_2_ngb_alert_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function AlertErrorComponent_div_2_ngb_alert_2_Template_ngb_alert_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const alert_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.close(alert_r1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "pre", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", alert_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", alert_r1.message, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function AlertErrorComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AlertErrorComponent_div_2_ngb_alert_2_Template, 4, 2, "ngb-alert", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.setClasses(alert_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", alert_r1.message);
} }
class AlertErrorComponent {
    constructor(alertService, eventManager, translateService) {
        this.alertService = alertService;
        this.eventManager = eventManager;
        this.alerts = [];
        this.errorListener = eventManager.subscribe('gatewayApp.error', (response) => {
            const errorResponse = response.content;
            this.addErrorAlert(errorResponse.message, errorResponse.key, errorResponse.params);
        });
        this.httpErrorListener = eventManager.subscribe('gatewayApp.httpError', (response) => {
            var _a, _b;
            const httpErrorResponse = response.content;
            switch (httpErrorResponse.status) {
                // connection refused, server not reachable
                case 0:
                    this.addErrorAlert('Server not reachable', 'error.server.not.reachable');
                    break;
                case 400: {
                    const arr = httpErrorResponse.headers.keys();
                    let errorHeader = null;
                    let entityKey = null;
                    for (const entry of arr) {
                        if (entry.toLowerCase().endsWith('app-error')) {
                            errorHeader = httpErrorResponse.headers.get(entry);
                        }
                        else if (entry.toLowerCase().endsWith('app-params')) {
                            entityKey = httpErrorResponse.headers.get(entry);
                        }
                    }
                    if (errorHeader) {
                        const alertData = entityKey ? { entityName: translateService.instant(`global.menu.entities.${entityKey}`) } : undefined;
                        this.addErrorAlert(errorHeader, errorHeader, alertData);
                    }
                    else if (httpErrorResponse.error !== '' && httpErrorResponse.error.fieldErrors) {
                        const fieldErrors = httpErrorResponse.error.fieldErrors;
                        for (const fieldError of fieldErrors) {
                            if (['Min', 'Max', 'DecimalMin', 'DecimalMax'].includes(fieldError.message)) {
                                fieldError.message = 'Size';
                            }
                            // convert 'something[14].other[4].id' to 'something[].other[].id' so translations can be written to it
                            const convertedField = fieldError.field.replace(/\[\d*\]/g, '[]');
                            const fieldName = translateService.instant(`gatewayApp.${fieldError.objectName}.${convertedField}`);
                            this.addErrorAlert(`Error on field "${fieldName}"`, `error.${fieldError.message}`, { fieldName });
                        }
                    }
                    else if (httpErrorResponse.error !== '' && httpErrorResponse.error.message) {
                        this.addErrorAlert((_a = httpErrorResponse.error.detail) !== null && _a !== void 0 ? _a : httpErrorResponse.error.message, httpErrorResponse.error.message, httpErrorResponse.error.params);
                    }
                    else {
                        this.addErrorAlert(httpErrorResponse.error, httpErrorResponse.error);
                    }
                    break;
                }
                case 404:
                    this.addErrorAlert('Not found', 'error.url.not.found');
                    break;
                default:
                    if (httpErrorResponse.error !== '' && httpErrorResponse.error.message) {
                        this.addErrorAlert((_b = httpErrorResponse.error.detail) !== null && _b !== void 0 ? _b : httpErrorResponse.error.message, httpErrorResponse.error.message, httpErrorResponse.error.params);
                    }
                    else {
                        this.addErrorAlert(httpErrorResponse.error, httpErrorResponse.error);
                    }
            }
        });
    }
    setClasses(alert) {
        const classes = { 'jhi-toast': Boolean(alert.toast) };
        if (alert.position) {
            return Object.assign(Object.assign({}, classes), { [alert.position]: true });
        }
        return classes;
    }
    ngOnDestroy() {
        this.eventManager.destroy(this.errorListener);
        this.eventManager.destroy(this.httpErrorListener);
    }
    close(alert) {
        var _a;
        (_a = alert.close) === null || _a === void 0 ? void 0 : _a.call(alert, this.alerts);
    }
    addErrorAlert(message, translationKey, translationParams) {
        this.alertService.addAlert({ type: 'danger', message, translationKey, translationParams }, this.alerts);
    }
}
AlertErrorComponent.ɵfac = function AlertErrorComponent_Factory(t) { return new (t || AlertErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_core_util_alert_service__WEBPACK_IMPORTED_MODULE_1__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_core_util_event_manager_service__WEBPACK_IMPORTED_MODULE_2__.EventManager), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService)); };
AlertErrorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertErrorComponent, selectors: [["jhi-alert-error"]], decls: 5, vars: 1, consts: [["role", "alert", 1, "alerts"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [3, "type", "closed", 4, "ngIf"], [3, "type", "closed"], [3, "innerHTML"]], template: function AlertErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AlertErrorComponent_div_2_Template, 4, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.alerts);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbAlert], encapsulation: 2 });


/***/ }),

/***/ 9003:
/*!*************************************************************!*\
  !*** ./src/main/webapp/app/shared/alert/alert.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertComponent": () => (/* binding */ AlertComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_core_util_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/util/alert.service */ 4728);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 3013);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1960);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__);




function AlertComponent_div_2_ngb_alert_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function AlertComponent_div_2_ngb_alert_2_Template_ngb_alert_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const alert_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.close(alert_r1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "pre", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", alert_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", alert_r1.message, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function AlertComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AlertComponent_div_2_ngb_alert_2_Template, 4, 2, "ngb-alert", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.setClasses(alert_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", alert_r1.message);
} }
class AlertComponent {
    constructor(alertService) {
        this.alertService = alertService;
        this.alerts = [];
    }
    ngOnInit() {
        this.alerts = this.alertService.get();
    }
    setClasses(alert) {
        const classes = { 'jhi-toast': Boolean(alert.toast) };
        if (alert.position) {
            return Object.assign(Object.assign({}, classes), { [alert.position]: true });
        }
        return classes;
    }
    ngOnDestroy() {
        this.alertService.clear();
    }
    close(alert) {
        var _a;
        (_a = alert.close) === null || _a === void 0 ? void 0 : _a.call(alert, this.alerts);
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_core_util_alert_service__WEBPACK_IMPORTED_MODULE_1__.AlertService)); };
AlertComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["jhi-alert"]], decls: 5, vars: 1, consts: [["role", "alert", 1, "alerts"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [3, "type", "closed", 4, "ngIf"], [3, "type", "closed"], [3, "innerHTML"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AlertComponent_div_2_Template, 4, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.alerts);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbAlert], encapsulation: 2 });


/***/ }),

/***/ 989:
/*!************************************************************************!*\
  !*** ./src/main/webapp/app/shared/auth/has-any-authority.directive.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HasAnyAuthorityDirective": () => (/* binding */ HasAnyAuthorityDirective)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4125);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 2070);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_core_auth_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/auth/account.service */ 9199);




/**
 * @whatItDoes Conditionally includes an HTML element if current user has any
 * of the authorities passed as the `expression`.
 *
 * @howToUse
 * ```
 *     <some-element *jhiHasAnyAuthority="'ROLE_ADMIN'">...</some-element>
 *
 *     <some-element *jhiHasAnyAuthority="['ROLE_ADMIN', 'ROLE_USER']">...</some-element>
 * ```
 */
class HasAnyAuthorityDirective {
    constructor(accountService, templateRef, viewContainerRef) {
        this.accountService = accountService;
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    set jhiHasAnyAuthority(value) {
        this.authorities = value;
        this.updateView();
        // Get notified each time authentication state changes.
        this.accountService
            .getAuthenticationState()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.takeUntil)(this.destroy$))
            .subscribe(() => {
            this.updateView();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    updateView() {
        const hasAnyAuthority = this.accountService.hasAnyAuthority(this.authorities);
        this.viewContainerRef.clear();
        if (hasAnyAuthority) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
    }
}
HasAnyAuthorityDirective.ɵfac = function HasAnyAuthorityDirective_Factory(t) { return new (t || HasAnyAuthorityDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_core_auth_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef)); };
HasAnyAuthorityDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: HasAnyAuthorityDirective, selectors: [["", "jhiHasAnyAuthority", ""]], inputs: { jhiHasAnyAuthority: "jhiHasAnyAuthority" } });


/***/ }),

/***/ 3733:
/*!**********************************************************!*\
  !*** ./src/main/webapp/app/shared/date/duration.pipe.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DurationPipe": () => (/* binding */ DurationPipe)
/* harmony export */ });
/* harmony import */ var dayjs_esm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs/esm */ 1157);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);


class DurationPipe {
    transform(value) {
        if (value) {
            return dayjs_esm__WEBPACK_IMPORTED_MODULE_0__["default"].duration(value).humanize();
        }
        return '';
    }
}
DurationPipe.ɵfac = function DurationPipe_Factory(t) { return new (t || DurationPipe)(); };
DurationPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "duration", type: DurationPipe, pure: true });


/***/ }),

/***/ 8421:
/*!********************************************************************!*\
  !*** ./src/main/webapp/app/shared/date/format-medium-date.pipe.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormatMediumDatePipe": () => (/* binding */ FormatMediumDatePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

class FormatMediumDatePipe {
    transform(day) {
        return day ? day.format('D MMM YYYY') : '';
    }
}
FormatMediumDatePipe.ɵfac = function FormatMediumDatePipe_Factory(t) { return new (t || FormatMediumDatePipe)(); };
FormatMediumDatePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "formatMediumDate", type: FormatMediumDatePipe, pure: true });


/***/ }),

/***/ 329:
/*!************************************************************************!*\
  !*** ./src/main/webapp/app/shared/date/format-medium-datetime.pipe.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormatMediumDatetimePipe": () => (/* binding */ FormatMediumDatetimePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

class FormatMediumDatetimePipe {
    transform(day) {
        return day ? day.format('D MMM YYYY HH:mm:ss') : '';
    }
}
FormatMediumDatetimePipe.ɵfac = function FormatMediumDatetimePipe_Factory(t) { return new (t || FormatMediumDatetimePipe)(); };
FormatMediumDatetimePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "formatMediumDatetime", type: FormatMediumDatetimePipe, pure: true });


/***/ }),

/***/ 924:
/*!***************************************************************!*\
  !*** ./src/main/webapp/app/shared/filter/filter.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterComponent": () => (/* binding */ FilterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 3013);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 5438);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _language_translate_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../language/translate.directive */ 1995);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 9520);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__);






function FilterComponent_div_0_li_10_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "fa-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterComponent_div_0_li_10_Template_fa_icon_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const filterOption_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.clearFilter(filterOption_r2.name)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const filterOption_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", filterOption_r2.name, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", filterOption_r2.value, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, "entity.filters.clear"));
} }
function FilterComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Following filters are set");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "fa-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterComponent_div_0_Template_fa_icon_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.clearAllFilters()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FilterComponent_div_0_li_10_Template, 8, 5, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, "entity.filters.clearAll"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.filters.filterOptions);
} }
class FilterComponent {
    constructor() {
        this.filterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    clearAllFilters() {
        this.filters.clear();
        this.filterChange.emit();
    }
    clearFilter(filterName) {
        this.filters.removeByName(filterName);
        this.filterChange.emit();
    }
}
FilterComponent.ɵfac = function FilterComponent_Factory(t) { return new (t || FilterComponent)(); };
FilterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FilterComponent, selectors: [["jhi-filter"]], inputs: { filters: "filters" }, outputs: { filterChange: "filterChange" }, decls: 2, vars: 1, consts: [["class", "filter-display", 4, "ngIf"], [1, "filter-display"], ["jhiTranslate", "entity.filters.set"], ["icon", "times", 3, "title", "click"], [4, "ngFor", "ngForOf"]], template: function FilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FilterComponent_div_0_Template, 13, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filters.hasAnyFilterSet());
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FaIconComponent, _language_translate_directive__WEBPACK_IMPORTED_MODULE_3__.TranslateDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 1992:
/*!****************************************************************************!*\
  !*** ./src/main/webapp/app/shared/language/find-language-from-key.pipe.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FindLanguageFromKeyPipe": () => (/* binding */ FindLanguageFromKeyPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

class FindLanguageFromKeyPipe {
    constructor() {
        this.languages = {
            en: { name: 'English' },
            fr: { name: 'Français' },
            // jhipster-needle-i18n-language-key-pipe - JHipster will add/remove languages in this object
        };
    }
    transform(lang) {
        return this.languages[lang].name;
    }
}
FindLanguageFromKeyPipe.ɵfac = function FindLanguageFromKeyPipe_Factory(t) { return new (t || FindLanguageFromKeyPipe)(); };
FindLanguageFromKeyPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "findLanguageFromKey", type: FindLanguageFromKeyPipe, pure: true });


/***/ }),

/***/ 1995:
/*!********************************************************************!*\
  !*** ./src/main/webapp/app/shared/language/translate.directive.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslateDirective": () => (/* binding */ TranslateDirective)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4125);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 2070);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_config_translation_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/config/translation.config */ 1749);
/* harmony import */ var app_config_translation_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(app_config_translation_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 9520);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__);





/**
 * A wrapper directive on top of the translate pipe as the inbuilt translate directive from ngx-translate is too verbose and buggy
 */
class TranslateDirective {
    constructor(el, translateService) {
        this.el = el;
        this.translateService = translateService;
        this.directiveDestroyed = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    ngOnInit() {
        this.translateService.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.takeUntil)(this.directiveDestroyed)).subscribe(() => {
            this.getTranslation();
        });
        this.translateService.onTranslationChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.takeUntil)(this.directiveDestroyed)).subscribe(() => {
            this.getTranslation();
        });
    }
    ngOnChanges() {
        this.getTranslation();
    }
    ngOnDestroy() {
        this.directiveDestroyed.next(null);
        this.directiveDestroyed.complete();
    }
    getTranslation() {
        this.translateService
            .get(this.jhiTranslate, this.translateValues)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.takeUntil)(this.directiveDestroyed))
            .subscribe({
            next: value => {
                this.el.nativeElement.innerHTML = value;
            },
            error: () => `${app_config_translation_config__WEBPACK_IMPORTED_MODULE_2__.translationNotFoundMessage}[${this.jhiTranslate}]`,
        });
    }
}
TranslateDirective.ɵfac = function TranslateDirective_Factory(t) { return new (t || TranslateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService)); };
TranslateDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: TranslateDirective, selectors: [["", "jhiTranslate", ""]], inputs: { jhiTranslate: "jhiTranslate", translateValues: "translateValues" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]] });


/***/ }),

/***/ 3643:
/*!*******************************************************************!*\
  !*** ./src/main/webapp/app/shared/language/translation.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslationModule": () => (/* binding */ TranslationModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 5482);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 9520);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_config_translation_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/config/translation.config */ 1749);
/* harmony import */ var app_config_translation_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(app_config_translation_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-webstorage */ 8689);
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__);






class TranslationModule {
    constructor(translateService, sessionStorageService) {
        var _a;
        this.translateService = translateService;
        translateService.setDefaultLang('fr');
        // if user have changed language and navigates away from the application and back to the application then use previously choosed language
        const langKey = (_a = sessionStorageService.retrieve('locale')) !== null && _a !== void 0 ? _a : 'fr';
        translateService.use(langKey);
    }
}
TranslationModule.ɵfac = function TranslationModule_Factory(t) { return new (t || TranslationModule)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__.SessionStorageService)); };
TranslationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: TranslationModule });
TranslationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule.forRoot({
            loader: {
                provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateLoader,
                useFactory: app_config_translation_config__WEBPACK_IMPORTED_MODULE_2__.translatePartialLoader,
                deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient],
            },
            missingTranslationHandler: {
                provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.MissingTranslationHandler,
                useFactory: app_config_translation_config__WEBPACK_IMPORTED_MODULE_2__.missingTranslationHandler,
            },
        })] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TranslationModule, { imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateModule] }); })();


/***/ }),

/***/ 8133:
/*!***********************************************************************!*\
  !*** ./src/main/webapp/app/shared/pagination/item-count.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemCountComponent": () => (/* binding */ ItemCountComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _language_translate_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../language/translate.directive */ 1995);


const _c0 = function (a0, a1, a2) { return { first: a0, second: a1, total: a2 }; };
/**
 * A component that will take care of item count statistics of a pagination.
 */
class ItemCountComponent {
    /**
     * @param params  Contains parameters for component:
     *                    page          Current page number
     *                    totalItems    Total number of items
     *                    itemsPerPage  Number of items per page
     */
    set params(params) {
        if (params.page && params.totalItems !== undefined && params.itemsPerPage) {
            this.first = (params.page - 1) * params.itemsPerPage + 1;
            this.second = params.page * params.itemsPerPage < params.totalItems ? params.page * params.itemsPerPage : params.totalItems;
        }
        else {
            this.first = undefined;
            this.second = undefined;
        }
        this.total = params.totalItems;
    }
}
ItemCountComponent.ɵfac = function ItemCountComponent_Factory(t) { return new (t || ItemCountComponent)(); };
ItemCountComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemCountComponent, selectors: [["jhi-item-count"]], inputs: { params: "params" }, decls: 3, vars: 5, consts: [["jhiTranslate", "global.item-count", 3, "translateValues"]], template: function ItemCountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " ");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("translateValues", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](1, _c0, ctx.first, ctx.second, ctx.total));
    } }, dependencies: [_language_translate_directive__WEBPACK_IMPORTED_MODULE_1__.TranslateDirective], encapsulation: 2 });


/***/ }),

/***/ 6833:
/*!**********************************************************!*\
  !*** ./src/main/webapp/app/shared/shared-libs.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedLibsModule": () => (/* binding */ SharedLibsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3013);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 9037);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1960);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-infinite-scroll */ 7187);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 5438);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 9520);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_6__);







class SharedLibsModule {
}
SharedLibsModule.ɵfac = function SharedLibsModule_Factory(t) { return new (t || SharedLibsModule)(); };
SharedLibsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: SharedLibsModule });
SharedLibsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModule, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3__.InfiniteScrollModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SharedLibsModule, { exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModule, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3__.InfiniteScrollModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule] }); })();


/***/ }),

/***/ 2267:
/*!*****************************************************!*\
  !*** ./src/main/webapp/app/shared/shared.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _shared_libs_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared-libs.module */ 6833);
/* harmony import */ var _language_find_language_from_key_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./language/find-language-from-key.pipe */ 1992);
/* harmony import */ var _language_translate_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./language/translate.directive */ 1995);
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert/alert.component */ 9003);
/* harmony import */ var _alert_alert_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert/alert-error.component */ 486);
/* harmony import */ var _auth_has_any_authority_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/has-any-authority.directive */ 989);
/* harmony import */ var _date_duration_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./date/duration.pipe */ 3733);
/* harmony import */ var _date_format_medium_datetime_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./date/format-medium-datetime.pipe */ 329);
/* harmony import */ var _date_format_medium_date_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./date/format-medium-date.pipe */ 8421);
/* harmony import */ var _sort_sort_by_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sort/sort-by.directive */ 1408);
/* harmony import */ var _sort_sort_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sort/sort.directive */ 1427);
/* harmony import */ var _pagination_item_count_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pagination/item-count.component */ 8133);
/* harmony import */ var _filter_filter_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./filter/filter.component */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_13__);














class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [_shared_libs_module__WEBPACK_IMPORTED_MODULE_0__.SharedLibsModule, _shared_libs_module__WEBPACK_IMPORTED_MODULE_0__.SharedLibsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_language_find_language_from_key_pipe__WEBPACK_IMPORTED_MODULE_1__.FindLanguageFromKeyPipe,
        _language_translate_directive__WEBPACK_IMPORTED_MODULE_2__.TranslateDirective,
        _alert_alert_component__WEBPACK_IMPORTED_MODULE_3__.AlertComponent,
        _alert_alert_error_component__WEBPACK_IMPORTED_MODULE_4__.AlertErrorComponent,
        _auth_has_any_authority_directive__WEBPACK_IMPORTED_MODULE_5__.HasAnyAuthorityDirective,
        _date_duration_pipe__WEBPACK_IMPORTED_MODULE_6__.DurationPipe,
        _date_format_medium_datetime_pipe__WEBPACK_IMPORTED_MODULE_7__.FormatMediumDatetimePipe,
        _date_format_medium_date_pipe__WEBPACK_IMPORTED_MODULE_8__.FormatMediumDatePipe,
        _sort_sort_by_directive__WEBPACK_IMPORTED_MODULE_9__.SortByDirective,
        _sort_sort_directive__WEBPACK_IMPORTED_MODULE_10__.SortDirective,
        _pagination_item_count_component__WEBPACK_IMPORTED_MODULE_11__.ItemCountComponent,
        _filter_filter_component__WEBPACK_IMPORTED_MODULE_12__.FilterComponent], imports: [_shared_libs_module__WEBPACK_IMPORTED_MODULE_0__.SharedLibsModule], exports: [_shared_libs_module__WEBPACK_IMPORTED_MODULE_0__.SharedLibsModule,
        _language_find_language_from_key_pipe__WEBPACK_IMPORTED_MODULE_1__.FindLanguageFromKeyPipe,
        _language_translate_directive__WEBPACK_IMPORTED_MODULE_2__.TranslateDirective,
        _alert_alert_component__WEBPACK_IMPORTED_MODULE_3__.AlertComponent,
        _alert_alert_error_component__WEBPACK_IMPORTED_MODULE_4__.AlertErrorComponent,
        _auth_has_any_authority_directive__WEBPACK_IMPORTED_MODULE_5__.HasAnyAuthorityDirective,
        _date_duration_pipe__WEBPACK_IMPORTED_MODULE_6__.DurationPipe,
        _date_format_medium_datetime_pipe__WEBPACK_IMPORTED_MODULE_7__.FormatMediumDatetimePipe,
        _date_format_medium_date_pipe__WEBPACK_IMPORTED_MODULE_8__.FormatMediumDatePipe,
        _sort_sort_by_directive__WEBPACK_IMPORTED_MODULE_9__.SortByDirective,
        _sort_sort_directive__WEBPACK_IMPORTED_MODULE_10__.SortDirective,
        _pagination_item_count_component__WEBPACK_IMPORTED_MODULE_11__.ItemCountComponent,
        _filter_filter_component__WEBPACK_IMPORTED_MODULE_12__.FilterComponent] }); })();


/***/ }),

/***/ 1408:
/*!**************************************************************!*\
  !*** ./src/main/webapp/app/shared/sort/sort-by.directive.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortByDirective": () => (/* binding */ SortByDirective)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4125);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 2070);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 5438);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 3497);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sort_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sort.directive */ 1427);






class SortByDirective {
    constructor(sort) {
        this.sort = sort;
        this.sortIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faSort;
        this.sortAscIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faSortUp;
        this.sortDescIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faSortDown;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        sort.predicateChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.takeUntil)(this.destroy$)).subscribe(() => this.updateIconDefinition());
        sort.ascendingChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.takeUntil)(this.destroy$)).subscribe(() => this.updateIconDefinition());
    }
    onClick() {
        if (this.iconComponent) {
            this.sort.sort(this.jhiSortBy);
        }
    }
    ngAfterContentInit() {
        this.updateIconDefinition();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    updateIconDefinition() {
        if (this.iconComponent) {
            let icon = this.sortIcon;
            if (this.sort.predicate === this.jhiSortBy) {
                icon = this.sort.ascending ? this.sortAscIcon : this.sortDescIcon;
            }
            this.iconComponent.icon = icon.iconName;
            this.iconComponent.render();
        }
    }
}
SortByDirective.ɵfac = function SortByDirective_Factory(t) { return new (t || SortByDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_sort_directive__WEBPACK_IMPORTED_MODULE_5__.SortDirective, 1)); };
SortByDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: SortByDirective, selectors: [["", "jhiSortBy", ""]], contentQueries: function SortByDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FaIconComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.iconComponent = _t.first);
    } }, hostBindings: function SortByDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SortByDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } }, inputs: { jhiSortBy: "jhiSortBy" } });


/***/ }),

/***/ 1427:
/*!***********************************************************!*\
  !*** ./src/main/webapp/app/shared/sort/sort.directive.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortDirective": () => (/* binding */ SortDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);


class SortDirective {
    constructor() {
        this.predicateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.ascendingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.sortChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    get predicate() {
        return this._predicate;
    }
    set predicate(predicate) {
        this._predicate = predicate;
        this.predicateChange.emit(predicate);
    }
    get ascending() {
        return this._ascending;
    }
    set ascending(ascending) {
        this._ascending = ascending;
        this.ascendingChange.emit(ascending);
    }
    sort(field) {
        this.ascending = field !== this.predicate ? true : !this.ascending;
        this.predicate = field;
        this.predicateChange.emit(field);
        this.ascendingChange.emit(this.ascending);
        this.sortChange.emit({ predicate: this.predicate, ascending: this.ascending });
    }
}
SortDirective.ɵfac = function SortDirective_Factory(t) { return new (t || SortDirective)(); };
SortDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: SortDirective, selectors: [["", "jhiSort", ""]], inputs: { predicate: "predicate", ascending: "ascending" }, outputs: { predicateChange: "predicateChange", ascendingChange: "ascendingChange", sortChange: "sortChange" } });


/***/ }),

/***/ 8860:
/*!**************************************!*\
  !*** ./src/main/webapp/bootstrap.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 8913);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.constants */ 530);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ 2789);




// disable debug data on prod profile to improve performance
if (!_app_app_constants__WEBPACK_IMPORTED_MODULE_2__.DEBUG_INFO_ENABLED) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.platformBrowser()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__.AppModule, { preserveWhitespaces: true })
    // eslint-disable-next-line no-console
    .then(() => console.log('Application started'))
    .catch(err => console.error(err));


/***/ }),

/***/ 9621:
/*!********************************************!*\
  !*** ./node_modules/dayjs/esm/constant.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ D),
/* harmony export */   "DATE": () => (/* binding */ DATE),
/* harmony export */   "FORMAT_DEFAULT": () => (/* binding */ FORMAT_DEFAULT),
/* harmony export */   "H": () => (/* binding */ H),
/* harmony export */   "INVALID_DATE_STRING": () => (/* binding */ INVALID_DATE_STRING),
/* harmony export */   "M": () => (/* binding */ M),
/* harmony export */   "MILLISECONDS_A_DAY": () => (/* binding */ MILLISECONDS_A_DAY),
/* harmony export */   "MILLISECONDS_A_HOUR": () => (/* binding */ MILLISECONDS_A_HOUR),
/* harmony export */   "MILLISECONDS_A_MINUTE": () => (/* binding */ MILLISECONDS_A_MINUTE),
/* harmony export */   "MILLISECONDS_A_SECOND": () => (/* binding */ MILLISECONDS_A_SECOND),
/* harmony export */   "MILLISECONDS_A_WEEK": () => (/* binding */ MILLISECONDS_A_WEEK),
/* harmony export */   "MIN": () => (/* binding */ MIN),
/* harmony export */   "MS": () => (/* binding */ MS),
/* harmony export */   "Q": () => (/* binding */ Q),
/* harmony export */   "REGEX_FORMAT": () => (/* binding */ REGEX_FORMAT),
/* harmony export */   "REGEX_PARSE": () => (/* binding */ REGEX_PARSE),
/* harmony export */   "S": () => (/* binding */ S),
/* harmony export */   "SECONDS_A_DAY": () => (/* binding */ SECONDS_A_DAY),
/* harmony export */   "SECONDS_A_HOUR": () => (/* binding */ SECONDS_A_HOUR),
/* harmony export */   "SECONDS_A_MINUTE": () => (/* binding */ SECONDS_A_MINUTE),
/* harmony export */   "SECONDS_A_WEEK": () => (/* binding */ SECONDS_A_WEEK),
/* harmony export */   "W": () => (/* binding */ W),
/* harmony export */   "Y": () => (/* binding */ Y)
/* harmony export */ });
var SECONDS_A_MINUTE = 60;
var SECONDS_A_HOUR = SECONDS_A_MINUTE * 60;
var SECONDS_A_DAY = SECONDS_A_HOUR * 24;
var SECONDS_A_WEEK = SECONDS_A_DAY * 7;
var MILLISECONDS_A_SECOND = 1e3;
var MILLISECONDS_A_MINUTE = SECONDS_A_MINUTE * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_HOUR = SECONDS_A_HOUR * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_DAY = SECONDS_A_DAY * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_WEEK = SECONDS_A_WEEK * MILLISECONDS_A_SECOND; // English locales

var MS = 'millisecond';
var S = 'second';
var MIN = 'minute';
var H = 'hour';
var D = 'day';
var W = 'week';
var M = 'month';
var Q = 'quarter';
var Y = 'year';
var DATE = 'date';
var FORMAT_DEFAULT = 'YYYY-MM-DDTHH:mm:ssZ';
var INVALID_DATE_STRING = 'Invalid Date'; // regex

var REGEX_PARSE = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/;
var REGEX_FORMAT = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;

/***/ }),

/***/ 1157:
/*!*****************************************!*\
  !*** ./node_modules/dayjs/esm/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ 9621);
/* harmony import */ var _locale_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale/en */ 7819);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ 8450);



var L = 'en'; // global locale

var Ls = {}; // global loaded locale

Ls[L] = _locale_en__WEBPACK_IMPORTED_MODULE_1__["default"];

var isDayjs = function isDayjs(d) {
  return d instanceof Dayjs;
}; // eslint-disable-line no-use-before-define


var parseLocale = function parseLocale(preset, object, isLocal) {
  var l;
  if (!preset) return L;

  if (typeof preset === 'string') {
    var presetLower = preset.toLowerCase();

    if (Ls[presetLower]) {
      l = presetLower;
    }

    if (object) {
      Ls[presetLower] = object;
      l = presetLower;
    }

    var presetSplit = preset.split('-');

    if (!l && presetSplit.length > 1) {
      return parseLocale(presetSplit[0]);
    }
  } else {
    var name = preset.name;
    Ls[name] = preset;
    l = name;
  }

  if (!isLocal && l) L = l;
  return l || !isLocal && L;
};

var dayjs = function dayjs(date, c) {
  if (isDayjs(date)) {
    return date.clone();
  } // eslint-disable-next-line no-nested-ternary


  var cfg = typeof c === 'object' ? c : {};
  cfg.date = date;
  cfg.args = arguments; // eslint-disable-line prefer-rest-params

  return new Dayjs(cfg); // eslint-disable-line no-use-before-define
};

var wrapper = function wrapper(date, instance) {
  return dayjs(date, {
    locale: instance.$L,
    utc: instance.$u,
    x: instance.$x,
    $offset: instance.$offset // todo: refactor; do not use this.$offset in you code

  });
};

var Utils = _utils__WEBPACK_IMPORTED_MODULE_2__["default"]; // for plugin use

Utils.l = parseLocale;
Utils.i = isDayjs;
Utils.w = wrapper;

var parseDate = function parseDate(cfg) {
  var date = cfg.date,
      utc = cfg.utc;
  if (date === null) return new Date(NaN); // null is invalid

  if (Utils.u(date)) return new Date(); // today

  if (date instanceof Date) return new Date(date);

  if (typeof date === 'string' && !/Z$/i.test(date)) {
    var d = date.match(_constant__WEBPACK_IMPORTED_MODULE_0__.REGEX_PARSE);

    if (d) {
      var m = d[2] - 1 || 0;
      var ms = (d[7] || '0').substring(0, 3);

      if (utc) {
        return new Date(Date.UTC(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms));
      }

      return new Date(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms);
    }
  }

  return new Date(date); // everything else
};

var Dayjs = /*#__PURE__*/function () {
  function Dayjs(cfg) {
    this.$L = parseLocale(cfg.locale, null, true);
    this.parse(cfg); // for plugin
  }

  var _proto = Dayjs.prototype;

  _proto.parse = function parse(cfg) {
    this.$d = parseDate(cfg);
    this.$x = cfg.x || {};
    this.init();
  };

  _proto.init = function init() {
    var $d = this.$d;
    this.$y = $d.getFullYear();
    this.$M = $d.getMonth();
    this.$D = $d.getDate();
    this.$W = $d.getDay();
    this.$H = $d.getHours();
    this.$m = $d.getMinutes();
    this.$s = $d.getSeconds();
    this.$ms = $d.getMilliseconds();
  } // eslint-disable-next-line class-methods-use-this
  ;

  _proto.$utils = function $utils() {
    return Utils;
  };

  _proto.isValid = function isValid() {
    return !(this.$d.toString() === _constant__WEBPACK_IMPORTED_MODULE_0__.INVALID_DATE_STRING);
  };

  _proto.isSame = function isSame(that, units) {
    var other = dayjs(that);
    return this.startOf(units) <= other && other <= this.endOf(units);
  };

  _proto.isAfter = function isAfter(that, units) {
    return dayjs(that) < this.startOf(units);
  };

  _proto.isBefore = function isBefore(that, units) {
    return this.endOf(units) < dayjs(that);
  };

  _proto.$g = function $g(input, get, set) {
    if (Utils.u(input)) return this[get];
    return this.set(set, input);
  };

  _proto.unix = function unix() {
    return Math.floor(this.valueOf() / 1000);
  };

  _proto.valueOf = function valueOf() {
    // timezone(hour) * 60 * 60 * 1000 => ms
    return this.$d.getTime();
  };

  _proto.startOf = function startOf(units, _startOf) {
    var _this = this; // startOf -> endOf


    var isStartOf = !Utils.u(_startOf) ? _startOf : true;
    var unit = Utils.p(units);

    var instanceFactory = function instanceFactory(d, m) {
      var ins = Utils.w(_this.$u ? Date.UTC(_this.$y, m, d) : new Date(_this.$y, m, d), _this);
      return isStartOf ? ins : ins.endOf(_constant__WEBPACK_IMPORTED_MODULE_0__.D);
    };

    var instanceFactorySet = function instanceFactorySet(method, slice) {
      var argumentStart = [0, 0, 0, 0];
      var argumentEnd = [23, 59, 59, 999];
      return Utils.w(_this.toDate()[method].apply( // eslint-disable-line prefer-spread
      _this.toDate('s'), (isStartOf ? argumentStart : argumentEnd).slice(slice)), _this);
    };

    var $W = this.$W,
        $M = this.$M,
        $D = this.$D;
    var utcPad = "set" + (this.$u ? 'UTC' : '');

    switch (unit) {
      case _constant__WEBPACK_IMPORTED_MODULE_0__.Y:
        return isStartOf ? instanceFactory(1, 0) : instanceFactory(31, 11);

      case _constant__WEBPACK_IMPORTED_MODULE_0__.M:
        return isStartOf ? instanceFactory(1, $M) : instanceFactory(0, $M + 1);

      case _constant__WEBPACK_IMPORTED_MODULE_0__.W:
        {
          var weekStart = this.$locale().weekStart || 0;
          var gap = ($W < weekStart ? $W + 7 : $W) - weekStart;
          return instanceFactory(isStartOf ? $D - gap : $D + (6 - gap), $M);
        }

      case _constant__WEBPACK_IMPORTED_MODULE_0__.D:
      case _constant__WEBPACK_IMPORTED_MODULE_0__.DATE:
        return instanceFactorySet(utcPad + "Hours", 0);

      case _constant__WEBPACK_IMPORTED_MODULE_0__.H:
        return instanceFactorySet(utcPad + "Minutes", 1);

      case _constant__WEBPACK_IMPORTED_MODULE_0__.MIN:
        return instanceFactorySet(utcPad + "Seconds", 2);

      case _constant__WEBPACK_IMPORTED_MODULE_0__.S:
        return instanceFactorySet(utcPad + "Milliseconds", 3);

      default:
        return this.clone();
    }
  };

  _proto.endOf = function endOf(arg) {
    return this.startOf(arg, false);
  };

  _proto.$set = function $set(units, _int) {
    var _C$D$C$DATE$C$M$C$Y$C; // private set


    var unit = Utils.p(units);
    var utcPad = "set" + (this.$u ? 'UTC' : '');
    var name = (_C$D$C$DATE$C$M$C$Y$C = {}, _C$D$C$DATE$C$M$C$Y$C[_constant__WEBPACK_IMPORTED_MODULE_0__.D] = utcPad + "Date", _C$D$C$DATE$C$M$C$Y$C[_constant__WEBPACK_IMPORTED_MODULE_0__.DATE] = utcPad + "Date", _C$D$C$DATE$C$M$C$Y$C[_constant__WEBPACK_IMPORTED_MODULE_0__.M] = utcPad + "Month", _C$D$C$DATE$C$M$C$Y$C[_constant__WEBPACK_IMPORTED_MODULE_0__.Y] = utcPad + "FullYear", _C$D$C$DATE$C$M$C$Y$C[_constant__WEBPACK_IMPORTED_MODULE_0__.H] = utcPad + "Hours", _C$D$C$DATE$C$M$C$Y$C[_constant__WEBPACK_IMPORTED_MODULE_0__.MIN] = utcPad + "Minutes", _C$D$C$DATE$C$M$C$Y$C[_constant__WEBPACK_IMPORTED_MODULE_0__.S] = utcPad + "Seconds", _C$D$C$DATE$C$M$C$Y$C[_constant__WEBPACK_IMPORTED_MODULE_0__.MS] = utcPad + "Milliseconds", _C$D$C$DATE$C$M$C$Y$C)[unit];
    var arg = unit === _constant__WEBPACK_IMPORTED_MODULE_0__.D ? this.$D + (_int - this.$W) : _int;

    if (unit === _constant__WEBPACK_IMPORTED_MODULE_0__.M || unit === _constant__WEBPACK_IMPORTED_MODULE_0__.Y) {
      // clone is for badMutable plugin
      var date = this.clone().set(_constant__WEBPACK_IMPORTED_MODULE_0__.DATE, 1);
      date.$d[name](arg);
      date.init();
      this.$d = date.set(_constant__WEBPACK_IMPORTED_MODULE_0__.DATE, Math.min(this.$D, date.daysInMonth())).$d;
    } else if (name) this.$d[name](arg);

    this.init();
    return this;
  };

  _proto.set = function set(string, _int2) {
    return this.clone().$set(string, _int2);
  };

  _proto.get = function get(unit) {
    return this[Utils.p(unit)]();
  };

  _proto.add = function add(number, units) {
    var _this2 = this,
        _C$MIN$C$H$C$S$unit;

    number = Number(number); // eslint-disable-line no-param-reassign

    var unit = Utils.p(units);

    var instanceFactorySet = function instanceFactorySet(n) {
      var d = dayjs(_this2);
      return Utils.w(d.date(d.date() + Math.round(n * number)), _this2);
    };

    if (unit === _constant__WEBPACK_IMPORTED_MODULE_0__.M) {
      return this.set(_constant__WEBPACK_IMPORTED_MODULE_0__.M, this.$M + number);
    }

    if (unit === _constant__WEBPACK_IMPORTED_MODULE_0__.Y) {
      return this.set(_constant__WEBPACK_IMPORTED_MODULE_0__.Y, this.$y + number);
    }

    if (unit === _constant__WEBPACK_IMPORTED_MODULE_0__.D) {
      return instanceFactorySet(1);
    }

    if (unit === _constant__WEBPACK_IMPORTED_MODULE_0__.W) {
      return instanceFactorySet(7);
    }

    var step = (_C$MIN$C$H$C$S$unit = {}, _C$MIN$C$H$C$S$unit[_constant__WEBPACK_IMPORTED_MODULE_0__.MIN] = _constant__WEBPACK_IMPORTED_MODULE_0__.MILLISECONDS_A_MINUTE, _C$MIN$C$H$C$S$unit[_constant__WEBPACK_IMPORTED_MODULE_0__.H] = _constant__WEBPACK_IMPORTED_MODULE_0__.MILLISECONDS_A_HOUR, _C$MIN$C$H$C$S$unit[_constant__WEBPACK_IMPORTED_MODULE_0__.S] = _constant__WEBPACK_IMPORTED_MODULE_0__.MILLISECONDS_A_SECOND, _C$MIN$C$H$C$S$unit)[unit] || 1; // ms

    var nextTimeStamp = this.$d.getTime() + number * step;
    return Utils.w(nextTimeStamp, this);
  };

  _proto.subtract = function subtract(number, string) {
    return this.add(number * -1, string);
  };

  _proto.format = function format(formatStr) {
    var _this3 = this;

    var locale = this.$locale();
    if (!this.isValid()) return locale.invalidDate || _constant__WEBPACK_IMPORTED_MODULE_0__.INVALID_DATE_STRING;
    var str = formatStr || _constant__WEBPACK_IMPORTED_MODULE_0__.FORMAT_DEFAULT;
    var zoneStr = Utils.z(this);
    var $H = this.$H,
        $m = this.$m,
        $M = this.$M;
    var weekdays = locale.weekdays,
        months = locale.months,
        meridiem = locale.meridiem;

    var getShort = function getShort(arr, index, full, length) {
      return arr && (arr[index] || arr(_this3, str)) || full[index].slice(0, length);
    };

    var get$H = function get$H(num) {
      return Utils.s($H % 12 || 12, num, '0');
    };

    var meridiemFunc = meridiem || function (hour, minute, isLowercase) {
      var m = hour < 12 ? 'AM' : 'PM';
      return isLowercase ? m.toLowerCase() : m;
    };

    var matches = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: $M + 1,
      MM: Utils.s($M + 1, 2, '0'),
      MMM: getShort(locale.monthsShort, $M, months, 3),
      MMMM: getShort(months, $M),
      D: this.$D,
      DD: Utils.s(this.$D, 2, '0'),
      d: String(this.$W),
      dd: getShort(locale.weekdaysMin, this.$W, weekdays, 2),
      ddd: getShort(locale.weekdaysShort, this.$W, weekdays, 3),
      dddd: weekdays[this.$W],
      H: String($H),
      HH: Utils.s($H, 2, '0'),
      h: get$H(1),
      hh: get$H(2),
      a: meridiemFunc($H, $m, true),
      A: meridiemFunc($H, $m, false),
      m: String($m),
      mm: Utils.s($m, 2, '0'),
      s: String(this.$s),
      ss: Utils.s(this.$s, 2, '0'),
      SSS: Utils.s(this.$ms, 3, '0'),
      Z: zoneStr // 'ZZ' logic below

    };
    return str.replace(_constant__WEBPACK_IMPORTED_MODULE_0__.REGEX_FORMAT, function (match, $1) {
      return $1 || matches[match] || zoneStr.replace(':', '');
    }); // 'ZZ'
  };

  _proto.utcOffset = function utcOffset() {
    // Because a bug at FF24, we're rounding the timezone offset around 15 minutes
    // https://github.com/moment/moment/pull/1871
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  };

  _proto.diff = function diff(input, units, _float) {
    var _C$Y$C$M$C$Q$C$W$C$D$;

    var unit = Utils.p(units);
    var that = dayjs(input);
    var zoneDelta = (that.utcOffset() - this.utcOffset()) * _constant__WEBPACK_IMPORTED_MODULE_0__.MILLISECONDS_A_MINUTE;
    var diff = this - that;
    var result = Utils.m(this, that);
    result = (_C$Y$C$M$C$Q$C$W$C$D$ = {}, _C$Y$C$M$C$Q$C$W$C$D$[_constant__WEBPACK_IMPORTED_MODULE_0__.Y] = result / 12, _C$Y$C$M$C$Q$C$W$C$D$[_constant__WEBPACK_IMPORTED_MODULE_0__.M] = result, _C$Y$C$M$C$Q$C$W$C$D$[_constant__WEBPACK_IMPORTED_MODULE_0__.Q] = result / 3, _C$Y$C$M$C$Q$C$W$C$D$[_constant__WEBPACK_IMPORTED_MODULE_0__.W] = (diff - zoneDelta) / _constant__WEBPACK_IMPORTED_MODULE_0__.MILLISECONDS_A_WEEK, _C$Y$C$M$C$Q$C$W$C$D$[_constant__WEBPACK_IMPORTED_MODULE_0__.D] = (diff - zoneDelta) / _constant__WEBPACK_IMPORTED_MODULE_0__.MILLISECONDS_A_DAY, _C$Y$C$M$C$Q$C$W$C$D$[_constant__WEBPACK_IMPORTED_MODULE_0__.H] = diff / _constant__WEBPACK_IMPORTED_MODULE_0__.MILLISECONDS_A_HOUR, _C$Y$C$M$C$Q$C$W$C$D$[_constant__WEBPACK_IMPORTED_MODULE_0__.MIN] = diff / _constant__WEBPACK_IMPORTED_MODULE_0__.MILLISECONDS_A_MINUTE, _C$Y$C$M$C$Q$C$W$C$D$[_constant__WEBPACK_IMPORTED_MODULE_0__.S] = diff / _constant__WEBPACK_IMPORTED_MODULE_0__.MILLISECONDS_A_SECOND, _C$Y$C$M$C$Q$C$W$C$D$)[unit] || diff; // milliseconds

    return _float ? result : Utils.a(result);
  };

  _proto.daysInMonth = function daysInMonth() {
    return this.endOf(_constant__WEBPACK_IMPORTED_MODULE_0__.M).$D;
  };

  _proto.$locale = function $locale() {
    // get locale object
    return Ls[this.$L];
  };

  _proto.locale = function locale(preset, object) {
    if (!preset) return this.$L;
    var that = this.clone();
    var nextLocaleName = parseLocale(preset, object, true);
    if (nextLocaleName) that.$L = nextLocaleName;
    return that;
  };

  _proto.clone = function clone() {
    return Utils.w(this.$d, this);
  };

  _proto.toDate = function toDate() {
    return new Date(this.valueOf());
  };

  _proto.toJSON = function toJSON() {
    return this.isValid() ? this.toISOString() : null;
  };

  _proto.toISOString = function toISOString() {
    // ie 8 return
    // new Dayjs(this.valueOf() + this.$d.getTimezoneOffset() * 60000)
    // .format('YYYY-MM-DDTHH:mm:ss.SSS[Z]')
    return this.$d.toISOString();
  };

  _proto.toString = function toString() {
    return this.$d.toUTCString();
  };

  return Dayjs;
}();

var proto = Dayjs.prototype;
dayjs.prototype = proto;
[['$ms', _constant__WEBPACK_IMPORTED_MODULE_0__.MS], ['$s', _constant__WEBPACK_IMPORTED_MODULE_0__.S], ['$m', _constant__WEBPACK_IMPORTED_MODULE_0__.MIN], ['$H', _constant__WEBPACK_IMPORTED_MODULE_0__.H], ['$W', _constant__WEBPACK_IMPORTED_MODULE_0__.D], ['$M', _constant__WEBPACK_IMPORTED_MODULE_0__.M], ['$y', _constant__WEBPACK_IMPORTED_MODULE_0__.Y], ['$D', _constant__WEBPACK_IMPORTED_MODULE_0__.DATE]].forEach(function (g) {
  proto[g[1]] = function (input) {
    return this.$g(input, g[0], g[1]);
  };
});

dayjs.extend = function (plugin, option) {
  if (!plugin.$i) {
    // install plugin only once
    plugin(option, Dayjs, dayjs);
    plugin.$i = true;
  }

  return dayjs;
};

dayjs.locale = parseLocale;
dayjs.isDayjs = isDayjs;

dayjs.unix = function (timestamp) {
  return dayjs(timestamp * 1e3);
};

dayjs.en = Ls[L];
dayjs.Ls = Ls;
dayjs.p = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dayjs);

/***/ }),

/***/ 7819:
/*!*********************************************!*\
  !*** ./node_modules/dayjs/esm/locale/en.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// English [en]
// We don't need weekdaysShort, weekdaysMin, monthsShort in en.js locale
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'en',
  weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
  months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_')
});

/***/ }),

/***/ 9394:
/*!*********************************************!*\
  !*** ./node_modules/dayjs/esm/locale/fr.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ 1157);
// French [fr]

var locale = {
  name: 'fr',
  weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
  weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
  weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
  months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
  monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
  weekStart: 1,
  yearStart: 4,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd D MMMM YYYY HH:mm'
  },
  relativeTime: {
    future: 'dans %s',
    past: 'il y a %s',
    s: 'quelques secondes',
    m: 'une minute',
    mm: '%d minutes',
    h: 'une heure',
    hh: '%d heures',
    d: 'un jour',
    dd: '%d jours',
    M: 'un mois',
    MM: '%d mois',
    y: 'un an',
    yy: '%d ans'
  },
  ordinal: function ordinal(n) {
    var o = n === 1 ? 'er' : 'e';
    return "" + n + o;
  }
};
_index__WEBPACK_IMPORTED_MODULE_0__["default"].locale(locale, null, true);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ 6270:
/*!******************************************************************!*\
  !*** ./node_modules/dayjs/esm/plugin/customParseFormat/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _localizedFormat_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../localizedFormat/utils */ 6464);

var formattingTokens = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g;
var match1 = /\d/; // 0 - 9

var match2 = /\d\d/; // 00 - 99

var match3 = /\d{3}/; // 000 - 999

var match4 = /\d{4}/; // 0000 - 9999

var match1to2 = /\d\d?/; // 0 - 99

var matchSigned = /[+-]?\d+/; // -inf - inf

var matchOffset = /[+-]\d\d:?(\d\d)?|Z/; // +00:00 -00:00 +0000 or -0000 +00 or Z

var matchWord = /\d*[^-_:/,()\s\d]+/; // Word

var locale = {};

var parseTwoDigitYear = function parseTwoDigitYear(input) {
  input = +input;
  return input + (input > 68 ? 1900 : 2000);
};

function offsetFromString(string) {
  if (!string) return 0;
  if (string === 'Z') return 0;
  var parts = string.match(/([+-]|\d\d)/g);
  var minutes = +(parts[1] * 60) + (+parts[2] || 0);
  return minutes === 0 ? 0 : parts[0] === '+' ? -minutes : minutes; // eslint-disable-line no-nested-ternary
}

var addInput = function addInput(property) {
  return function (input) {
    this[property] = +input;
  };
};

var zoneExpressions = [matchOffset, function (input) {
  var zone = this.zone || (this.zone = {});
  zone.offset = offsetFromString(input);
}];

var getLocalePart = function getLocalePart(name) {
  var part = locale[name];
  return part && (part.indexOf ? part : part.s.concat(part.f));
};

var meridiemMatch = function meridiemMatch(input, isLowerCase) {
  var isAfternoon;
  var _locale = locale,
      meridiem = _locale.meridiem;

  if (!meridiem) {
    isAfternoon = input === (isLowerCase ? 'pm' : 'PM');
  } else {
    for (var i = 1; i <= 24; i += 1) {
      // todo: fix input === meridiem(i, 0, isLowerCase)
      if (input.indexOf(meridiem(i, 0, isLowerCase)) > -1) {
        isAfternoon = i > 12;
        break;
      }
    }
  }

  return isAfternoon;
};

var expressions = {
  A: [matchWord, function (input) {
    this.afternoon = meridiemMatch(input, false);
  }],
  a: [matchWord, function (input) {
    this.afternoon = meridiemMatch(input, true);
  }],
  S: [match1, function (input) {
    this.milliseconds = +input * 100;
  }],
  SS: [match2, function (input) {
    this.milliseconds = +input * 10;
  }],
  SSS: [match3, function (input) {
    this.milliseconds = +input;
  }],
  s: [match1to2, addInput('seconds')],
  ss: [match1to2, addInput('seconds')],
  m: [match1to2, addInput('minutes')],
  mm: [match1to2, addInput('minutes')],
  H: [match1to2, addInput('hours')],
  h: [match1to2, addInput('hours')],
  HH: [match1to2, addInput('hours')],
  hh: [match1to2, addInput('hours')],
  D: [match1to2, addInput('day')],
  DD: [match2, addInput('day')],
  Do: [matchWord, function (input) {
    var _locale2 = locale,
        ordinal = _locale2.ordinal;

    var _input$match = input.match(/\d+/);

    this.day = _input$match[0];
    if (!ordinal) return;

    for (var i = 1; i <= 31; i += 1) {
      if (ordinal(i).replace(/\[|\]/g, '') === input) {
        this.day = i;
      }
    }
  }],
  M: [match1to2, addInput('month')],
  MM: [match2, addInput('month')],
  MMM: [matchWord, function (input) {
    var months = getLocalePart('months');
    var monthsShort = getLocalePart('monthsShort');
    var matchIndex = (monthsShort || months.map(function (_) {
      return _.slice(0, 3);
    })).indexOf(input) + 1;

    if (matchIndex < 1) {
      throw new Error();
    }

    this.month = matchIndex % 12 || matchIndex;
  }],
  MMMM: [matchWord, function (input) {
    var months = getLocalePart('months');
    var matchIndex = months.indexOf(input) + 1;

    if (matchIndex < 1) {
      throw new Error();
    }

    this.month = matchIndex % 12 || matchIndex;
  }],
  Y: [matchSigned, addInput('year')],
  YY: [match2, function (input) {
    this.year = parseTwoDigitYear(input);
  }],
  YYYY: [match4, addInput('year')],
  Z: zoneExpressions,
  ZZ: zoneExpressions
};

function correctHours(time) {
  var afternoon = time.afternoon;

  if (afternoon !== undefined) {
    var hours = time.hours;

    if (afternoon) {
      if (hours < 12) {
        time.hours += 12;
      }
    } else if (hours === 12) {
      time.hours = 0;
    }

    delete time.afternoon;
  }
}

function makeParser(format) {
  format = (0,_localizedFormat_utils__WEBPACK_IMPORTED_MODULE_0__.u)(format, locale && locale.formats);
  var array = format.match(formattingTokens);
  var length = array.length;

  for (var i = 0; i < length; i += 1) {
    var token = array[i];
    var parseTo = expressions[token];
    var regex = parseTo && parseTo[0];
    var parser = parseTo && parseTo[1];

    if (parser) {
      array[i] = {
        regex: regex,
        parser: parser
      };
    } else {
      array[i] = token.replace(/^\[|\]$/g, '');
    }
  }

  return function (input) {
    var time = {};

    for (var _i = 0, start = 0; _i < length; _i += 1) {
      var _token = array[_i];

      if (typeof _token === 'string') {
        start += _token.length;
      } else {
        var _regex = _token.regex,
            _parser = _token.parser;
        var part = input.slice(start);

        var match = _regex.exec(part);

        var value = match[0];

        _parser.call(time, value);

        input = input.replace(value, '');
      }
    }

    correctHours(time);
    return time;
  };
}

var parseFormattedInput = function parseFormattedInput(input, format, utc) {
  try {
    if (['x', 'X'].indexOf(format) > -1) return new Date((format === 'X' ? 1000 : 1) * input);
    var parser = makeParser(format);

    var _parser2 = parser(input),
        year = _parser2.year,
        month = _parser2.month,
        day = _parser2.day,
        hours = _parser2.hours,
        minutes = _parser2.minutes,
        seconds = _parser2.seconds,
        milliseconds = _parser2.milliseconds,
        zone = _parser2.zone;

    var now = new Date();
    var d = day || (!year && !month ? now.getDate() : 1);
    var y = year || now.getFullYear();
    var M = 0;

    if (!(year && !month)) {
      M = month > 0 ? month - 1 : now.getMonth();
    }

    var h = hours || 0;
    var m = minutes || 0;
    var s = seconds || 0;
    var ms = milliseconds || 0;

    if (zone) {
      return new Date(Date.UTC(y, M, d, h, m, s, ms + zone.offset * 60 * 1000));
    }

    if (utc) {
      return new Date(Date.UTC(y, M, d, h, m, s, ms));
    }

    return new Date(y, M, d, h, m, s, ms);
  } catch (e) {
    return new Date(''); // Invalid Date
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (o, C, d) {
  d.p.customParseFormat = true;

  if (o && o.parseTwoDigitYear) {
    parseTwoDigitYear = o.parseTwoDigitYear;
  }

  var proto = C.prototype;
  var oldParse = proto.parse;

  proto.parse = function (cfg) {
    var date = cfg.date,
        utc = cfg.utc,
        args = cfg.args;
    this.$u = utc;
    var format = args[1];

    if (typeof format === 'string') {
      var isStrictWithoutLocale = args[2] === true;
      var isStrictWithLocale = args[3] === true;
      var isStrict = isStrictWithoutLocale || isStrictWithLocale;
      var pl = args[2];

      if (isStrictWithLocale) {
        pl = args[2];
      }

      locale = this.$locale();

      if (!isStrictWithoutLocale && pl) {
        locale = d.Ls[pl];
      }

      this.$d = parseFormattedInput(date, format, utc);
      this.init();
      if (pl && pl !== true) this.$L = this.locale(pl).$L; // use != to treat
      // input number 1410715640579 and format string '1410715640579' equal
      // eslint-disable-next-line eqeqeq

      if (isStrict && date != this.format(format)) {
        this.$d = new Date('');
      } // reset global locale to make parallel unit test


      locale = {};
    } else if (format instanceof Array) {
      var len = format.length;

      for (var i = 1; i <= len; i += 1) {
        args[1] = format[i - 1];
        var result = d.apply(this, args);

        if (result.isValid()) {
          this.$d = result.$d;
          this.$L = result.$L;
          this.init();
          break;
        }

        if (i === len) this.$d = new Date('');
      }
    } else {
      oldParse.call(this, cfg);
    }
  };
});

/***/ }),

/***/ 7841:
/*!*********************************************************!*\
  !*** ./node_modules/dayjs/esm/plugin/duration/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constant */ 9621);

var MILLISECONDS_A_YEAR = _constant__WEBPACK_IMPORTED_MODULE_0__.MILLISECONDS_A_DAY * 365;
var MILLISECONDS_A_MONTH = _constant__WEBPACK_IMPORTED_MODULE_0__.MILLISECONDS_A_DAY * 30;
var durationRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
var unitToMS = {
  years: MILLISECONDS_A_YEAR,
  months: MILLISECONDS_A_MONTH,
  days: _constant__WEBPACK_IMPORTED_MODULE_0__.MILLISECONDS_A_DAY,
  hours: _constant__WEBPACK_IMPORTED_MODULE_0__.MILLISECONDS_A_HOUR,
  minutes: _constant__WEBPACK_IMPORTED_MODULE_0__.MILLISECONDS_A_MINUTE,
  seconds: _constant__WEBPACK_IMPORTED_MODULE_0__.MILLISECONDS_A_SECOND,
  milliseconds: 1,
  weeks: _constant__WEBPACK_IMPORTED_MODULE_0__.MILLISECONDS_A_WEEK
};

var isDuration = function isDuration(d) {
  return d instanceof Duration;
}; // eslint-disable-line no-use-before-define


var $d;
var $u;

var wrapper = function wrapper(input, instance, unit) {
  return new Duration(input, unit, instance.$l);
}; // eslint-disable-line no-use-before-define


var prettyUnit = function prettyUnit(unit) {
  return $u.p(unit) + "s";
};

var isNegative = function isNegative(number) {
  return number < 0;
};

var roundNumber = function roundNumber(number) {
  return isNegative(number) ? Math.ceil(number) : Math.floor(number);
};

var absolute = function absolute(number) {
  return Math.abs(number);
};

var getNumberUnitFormat = function getNumberUnitFormat(number, unit) {
  if (!number) {
    return {
      negative: false,
      format: ''
    };
  }

  if (isNegative(number)) {
    return {
      negative: true,
      format: "" + absolute(number) + unit
    };
  }

  return {
    negative: false,
    format: "" + number + unit
  };
};

var Duration = /*#__PURE__*/function () {
  function Duration(input, unit, locale) {
    var _this = this;

    this.$d = {};
    this.$l = locale;

    if (input === undefined) {
      this.$ms = 0;
      this.parseFromMilliseconds();
    }

    if (unit) {
      return wrapper(input * unitToMS[prettyUnit(unit)], this);
    }

    if (typeof input === 'number') {
      this.$ms = input;
      this.parseFromMilliseconds();
      return this;
    }

    if (typeof input === 'object') {
      Object.keys(input).forEach(function (k) {
        _this.$d[prettyUnit(k)] = input[k];
      });
      this.calMilliseconds();
      return this;
    }

    if (typeof input === 'string') {
      var d = input.match(durationRegex);

      if (d) {
        var properties = d.slice(2);
        var numberD = properties.map(function (value) {
          return value != null ? Number(value) : 0;
        });
        this.$d.years = numberD[0];
        this.$d.months = numberD[1];
        this.$d.weeks = numberD[2];
        this.$d.days = numberD[3];
        this.$d.hours = numberD[4];
        this.$d.minutes = numberD[5];
        this.$d.seconds = numberD[6];
        this.calMilliseconds();
        return this;
      }
    }

    return this;
  }

  var _proto = Duration.prototype;

  _proto.calMilliseconds = function calMilliseconds() {
    var _this2 = this;

    this.$ms = Object.keys(this.$d).reduce(function (total, unit) {
      return total + (_this2.$d[unit] || 0) * unitToMS[unit];
    }, 0);
  };

  _proto.parseFromMilliseconds = function parseFromMilliseconds() {
    var $ms = this.$ms;
    this.$d.years = roundNumber($ms / MILLISECONDS_A_YEAR);
    $ms %= MILLISECONDS_A_YEAR;
    this.$d.months = roundNumber($ms / MILLISECONDS_A_MONTH);
    $ms %= MILLISECONDS_A_MONTH;
    this.$d.days = roundNumber($ms / _constant__WEBPACK_IMPORTED_MODULE_0__.MILLISECONDS_A_DAY);
    $ms %= _constant__WEBPACK_IMPORTED_MODULE_0__.MILLISECONDS_A_DAY;
    this.$d.hours = roundNumber($ms / _constant__WEBPACK_IMPORTED_MODULE_0__.MILLISECONDS_A_HOUR);
    $ms %= _constant__WEBPACK_IMPORTED_MODULE_0__.MILLISECONDS_A_HOUR;
    this.$d.minutes = roundNumber($ms / _constant__WEBPACK_IMPORTED_MODULE_0__.MILLISECONDS_A_MINUTE);
    $ms %= _constant__WEBPACK_IMPORTED_MODULE_0__.MILLISECONDS_A_MINUTE;
    this.$d.seconds = roundNumber($ms / _constant__WEBPACK_IMPORTED_MODULE_0__.MILLISECONDS_A_SECOND);
    $ms %= _constant__WEBPACK_IMPORTED_MODULE_0__.MILLISECONDS_A_SECOND;
    this.$d.milliseconds = $ms;
  };

  _proto.toISOString = function toISOString() {
    var Y = getNumberUnitFormat(this.$d.years, 'Y');
    var M = getNumberUnitFormat(this.$d.months, 'M');
    var days = +this.$d.days || 0;

    if (this.$d.weeks) {
      days += this.$d.weeks * 7;
    }

    var D = getNumberUnitFormat(days, 'D');
    var H = getNumberUnitFormat(this.$d.hours, 'H');
    var m = getNumberUnitFormat(this.$d.minutes, 'M');
    var seconds = this.$d.seconds || 0;

    if (this.$d.milliseconds) {
      seconds += this.$d.milliseconds / 1000;
    }

    var S = getNumberUnitFormat(seconds, 'S');
    var negativeMode = Y.negative || M.negative || D.negative || H.negative || m.negative || S.negative;
    var T = H.format || m.format || S.format ? 'T' : '';
    var P = negativeMode ? '-' : '';
    var result = P + "P" + Y.format + M.format + D.format + T + H.format + m.format + S.format;
    return result === 'P' || result === '-P' ? 'P0D' : result;
  };

  _proto.toJSON = function toJSON() {
    return this.toISOString();
  };

  _proto.format = function format(formatStr) {
    var str = formatStr || 'YYYY-MM-DDTHH:mm:ss';
    var matches = {
      Y: this.$d.years,
      YY: $u.s(this.$d.years, 2, '0'),
      YYYY: $u.s(this.$d.years, 4, '0'),
      M: this.$d.months,
      MM: $u.s(this.$d.months, 2, '0'),
      D: this.$d.days,
      DD: $u.s(this.$d.days, 2, '0'),
      H: this.$d.hours,
      HH: $u.s(this.$d.hours, 2, '0'),
      m: this.$d.minutes,
      mm: $u.s(this.$d.minutes, 2, '0'),
      s: this.$d.seconds,
      ss: $u.s(this.$d.seconds, 2, '0'),
      SSS: $u.s(this.$d.milliseconds, 3, '0')
    };
    return str.replace(_constant__WEBPACK_IMPORTED_MODULE_0__.REGEX_FORMAT, function (match, $1) {
      return $1 || String(matches[match]);
    });
  };

  _proto.as = function as(unit) {
    return this.$ms / unitToMS[prettyUnit(unit)];
  };

  _proto.get = function get(unit) {
    var base = this.$ms;
    var pUnit = prettyUnit(unit);

    if (pUnit === 'milliseconds') {
      base %= 1000;
    } else if (pUnit === 'weeks') {
      base = roundNumber(base / unitToMS[pUnit]);
    } else {
      base = this.$d[pUnit];
    }

    return base === 0 ? 0 : base; // a === 0 will be true on both 0 and -0
  };

  _proto.add = function add(input, unit, isSubtract) {
    var another;

    if (unit) {
      another = input * unitToMS[prettyUnit(unit)];
    } else if (isDuration(input)) {
      another = input.$ms;
    } else {
      another = wrapper(input, this).$ms;
    }

    return wrapper(this.$ms + another * (isSubtract ? -1 : 1), this);
  };

  _proto.subtract = function subtract(input, unit) {
    return this.add(input, unit, true);
  };

  _proto.locale = function locale(l) {
    var that = this.clone();
    that.$l = l;
    return that;
  };

  _proto.clone = function clone() {
    return wrapper(this.$ms, this);
  };

  _proto.humanize = function humanize(withSuffix) {
    return $d().add(this.$ms, 'ms').locale(this.$l).fromNow(!withSuffix);
  };

  _proto.milliseconds = function milliseconds() {
    return this.get('milliseconds');
  };

  _proto.asMilliseconds = function asMilliseconds() {
    return this.as('milliseconds');
  };

  _proto.seconds = function seconds() {
    return this.get('seconds');
  };

  _proto.asSeconds = function asSeconds() {
    return this.as('seconds');
  };

  _proto.minutes = function minutes() {
    return this.get('minutes');
  };

  _proto.asMinutes = function asMinutes() {
    return this.as('minutes');
  };

  _proto.hours = function hours() {
    return this.get('hours');
  };

  _proto.asHours = function asHours() {
    return this.as('hours');
  };

  _proto.days = function days() {
    return this.get('days');
  };

  _proto.asDays = function asDays() {
    return this.as('days');
  };

  _proto.weeks = function weeks() {
    return this.get('weeks');
  };

  _proto.asWeeks = function asWeeks() {
    return this.as('weeks');
  };

  _proto.months = function months() {
    return this.get('months');
  };

  _proto.asMonths = function asMonths() {
    return this.as('months');
  };

  _proto.years = function years() {
    return this.get('years');
  };

  _proto.asYears = function asYears() {
    return this.as('years');
  };

  return Duration;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (option, Dayjs, dayjs) {
  $d = dayjs;
  $u = dayjs().$utils();

  dayjs.duration = function (input, unit) {
    var $l = dayjs.locale();
    return wrapper(input, {
      $l: $l
    }, unit);
  };

  dayjs.isDuration = isDuration;
  var oldAdd = Dayjs.prototype.add;
  var oldSubtract = Dayjs.prototype.subtract;

  Dayjs.prototype.add = function (value, unit) {
    if (isDuration(value)) value = value.asMilliseconds();
    return oldAdd.bind(this)(value, unit);
  };

  Dayjs.prototype.subtract = function (value, unit) {
    if (isDuration(value)) value = value.asMilliseconds();
    return oldSubtract.bind(this)(value, unit);
  };
});

/***/ }),

/***/ 6464:
/*!****************************************************************!*\
  !*** ./node_modules/dayjs/esm/plugin/localizedFormat/utils.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "englishFormats": () => (/* binding */ englishFormats),
/* harmony export */   "t": () => (/* binding */ t),
/* harmony export */   "u": () => (/* binding */ u)
/* harmony export */ });
// eslint-disable-next-line import/prefer-default-export
var t = function t(format) {
  return format.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function (_, a, b) {
    return a || b.slice(1);
  });
};
var englishFormats = {
  LTS: 'h:mm:ss A',
  LT: 'h:mm A',
  L: 'MM/DD/YYYY',
  LL: 'MMMM D, YYYY',
  LLL: 'MMMM D, YYYY h:mm A',
  LLLL: 'dddd, MMMM D, YYYY h:mm A'
};
var u = function u(formatStr, formats) {
  return formatStr.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function (_, a, b) {
    var B = b && b.toUpperCase();
    return a || formats[b] || englishFormats[b] || t(formats[B]);
  });
};

/***/ }),

/***/ 2845:
/*!*************************************************************!*\
  !*** ./node_modules/dayjs/esm/plugin/relativeTime/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constant */ 9621);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (o, c, d) {
  o = o || {};
  var proto = c.prototype;
  var relObj = {
    future: 'in %s',
    past: '%s ago',
    s: 'a few seconds',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours',
    d: 'a day',
    dd: '%d days',
    M: 'a month',
    MM: '%d months',
    y: 'a year',
    yy: '%d years'
  };
  d.en.relativeTime = relObj;

  proto.fromToBase = function (input, withoutSuffix, instance, isFrom, postFormat) {
    var loc = instance.$locale().relativeTime || relObj;
    var T = o.thresholds || [{
      l: 's',
      r: 44,
      d: _constant__WEBPACK_IMPORTED_MODULE_0__.S
    }, {
      l: 'm',
      r: 89
    }, {
      l: 'mm',
      r: 44,
      d: _constant__WEBPACK_IMPORTED_MODULE_0__.MIN
    }, {
      l: 'h',
      r: 89
    }, {
      l: 'hh',
      r: 21,
      d: _constant__WEBPACK_IMPORTED_MODULE_0__.H
    }, {
      l: 'd',
      r: 35
    }, {
      l: 'dd',
      r: 25,
      d: _constant__WEBPACK_IMPORTED_MODULE_0__.D
    }, {
      l: 'M',
      r: 45
    }, {
      l: 'MM',
      r: 10,
      d: _constant__WEBPACK_IMPORTED_MODULE_0__.M
    }, {
      l: 'y',
      r: 17
    }, {
      l: 'yy',
      d: _constant__WEBPACK_IMPORTED_MODULE_0__.Y
    }];
    var Tl = T.length;
    var result;
    var out;
    var isFuture;

    for (var i = 0; i < Tl; i += 1) {
      var t = T[i];

      if (t.d) {
        result = isFrom ? d(input).diff(instance, t.d, true) : instance.diff(input, t.d, true);
      }

      var abs = (o.rounding || Math.round)(Math.abs(result));
      isFuture = result > 0;

      if (abs <= t.r || !t.r) {
        if (abs <= 1 && i > 0) t = T[i - 1]; // 1 minutes -> a minute, 0 seconds -> 0 second

        var format = loc[t.l];

        if (postFormat) {
          abs = postFormat("" + abs);
        }

        if (typeof format === 'string') {
          out = format.replace('%d', abs);
        } else {
          out = format(abs, withoutSuffix, t.l, isFuture);
        }

        break;
      }
    }

    if (withoutSuffix) return out;
    var pastOrFuture = isFuture ? loc.future : loc.past;

    if (typeof pastOrFuture === 'function') {
      return pastOrFuture(out);
    }

    return pastOrFuture.replace('%s', out);
  };

  function fromTo(input, withoutSuffix, instance, isFrom) {
    return proto.fromToBase(input, withoutSuffix, instance, isFrom);
  }

  proto.to = function (input, withoutSuffix) {
    return fromTo(input, withoutSuffix, this, true);
  };

  proto.from = function (input, withoutSuffix) {
    return fromTo(input, withoutSuffix, this);
  };

  var makeNow = function makeNow(thisDay) {
    return thisDay.$u ? d.utc() : d();
  };

  proto.toNow = function (withoutSuffix) {
    return this.to(makeNow(this), withoutSuffix);
  };

  proto.fromNow = function (withoutSuffix) {
    return this.from(makeNow(this), withoutSuffix);
  };
});

/***/ }),

/***/ 8450:
/*!*****************************************!*\
  !*** ./node_modules/dayjs/esm/utils.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ 9621);


var padStart = function padStart(string, length, pad) {
  var s = String(string);
  if (!s || s.length >= length) return string;
  return "" + Array(length + 1 - s.length).join(pad) + string;
};

var padZoneStr = function padZoneStr(instance) {
  var negMinutes = -instance.utcOffset();
  var minutes = Math.abs(negMinutes);
  var hourOffset = Math.floor(minutes / 60);
  var minuteOffset = minutes % 60;
  return "" + (negMinutes <= 0 ? '+' : '-') + padStart(hourOffset, 2, '0') + ":" + padStart(minuteOffset, 2, '0');
};

var monthDiff = function monthDiff(a, b) {
  // function from moment.js in order to keep the same result
  if (a.date() < b.date()) return -monthDiff(b, a);
  var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month());
  var anchor = a.clone().add(wholeMonthDiff, _constant__WEBPACK_IMPORTED_MODULE_0__.M);
  var c = b - anchor < 0;
  var anchor2 = a.clone().add(wholeMonthDiff + (c ? -1 : 1), _constant__WEBPACK_IMPORTED_MODULE_0__.M);
  return +(-(wholeMonthDiff + (b - anchor) / (c ? anchor - anchor2 : anchor2 - anchor)) || 0);
};

var absFloor = function absFloor(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
};

var prettyUnit = function prettyUnit(u) {
  var special = {
    M: _constant__WEBPACK_IMPORTED_MODULE_0__.M,
    y: _constant__WEBPACK_IMPORTED_MODULE_0__.Y,
    w: _constant__WEBPACK_IMPORTED_MODULE_0__.W,
    d: _constant__WEBPACK_IMPORTED_MODULE_0__.D,
    D: _constant__WEBPACK_IMPORTED_MODULE_0__.DATE,
    h: _constant__WEBPACK_IMPORTED_MODULE_0__.H,
    m: _constant__WEBPACK_IMPORTED_MODULE_0__.MIN,
    s: _constant__WEBPACK_IMPORTED_MODULE_0__.S,
    ms: _constant__WEBPACK_IMPORTED_MODULE_0__.MS,
    Q: _constant__WEBPACK_IMPORTED_MODULE_0__.Q
  };
  return special[u] || String(u || '').toLowerCase().replace(/s$/, '');
};

var isUndefined = function isUndefined(s) {
  return s === undefined;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  s: padStart,
  z: padZoneStr,
  m: monthDiff,
  a: absFloor,
  p: prettyUnit,
  u: isUndefined
});

/***/ }),

/***/ 8384:
/*!*****************************************************!*\
  !*** ./node_modules/@angular/common/locales/fr.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// THIS CODE IS GENERATED - DO NOT MODIFY.
const u = undefined;

function plural(val) {
  const n = val,
        i = Math.floor(Math.abs(val)),
        v = val.toString().replace(/^[^.]*\.?/, '').length,
        e = parseInt(val.toString().replace(/^[^e]*(e([-+]?\d+))?/, '$2')) || 0;
  if (i === 0 || i === 1) return 1;
  if (e === 0 && !(i === 0) && i % 1000000 === 0 && v === 0 || !(e >= 0 && e <= 5)) return 4;
  return 5;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (["fr", [["AM", "PM"], u, u], u, [["D", "L", "M", "M", "J", "V", "S"], ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."], ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"], ["di", "lu", "ma", "me", "je", "ve", "sa"]], u, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."], ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"]], u, [["av. J.-C.", "ap. J.-C."], u, ["avant Jésus-Christ", "après Jésus-Christ"]], 1, [6, 0], ["dd/MM/y", "d MMM y", "d MMMM y", "EEEE d MMMM y"], ["HH:mm", "HH:mm:ss", "HH:mm:ss z", "HH:mm:ss zzzz"], ["{1} {0}", "{1}, {0}", "{1} 'à' {0}", u], [",", " ", ";", "%", "+", "-", "E", "×", "‰", "∞", "NaN", ":"], ["#,##0.###", "#,##0 %", "#,##0.00 ¤", "#E0"], "EUR", "€", "euro", {
  "ARS": ["$AR", "$"],
  "AUD": ["$AU", "$"],
  "BEF": ["FB"],
  "BMD": ["$BM", "$"],
  "BND": ["$BN", "$"],
  "BYN": [u, "р."],
  "BZD": ["$BZ", "$"],
  "CAD": ["$CA", "$"],
  "CLP": ["$CL", "$"],
  "CNY": [u, "¥"],
  "COP": ["$CO", "$"],
  "CYP": ["£CY"],
  "EGP": [u, "£E"],
  "FJD": ["$FJ", "$"],
  "FKP": ["£FK", "£"],
  "FRF": ["F"],
  "GBP": ["£GB", "£"],
  "GIP": ["£GI", "£"],
  "HKD": [u, "$"],
  "IEP": ["£IE"],
  "ILP": ["£IL"],
  "ITL": ["₤IT"],
  "JPY": [u, "¥"],
  "KMF": [u, "FC"],
  "LBP": ["£LB", "£L"],
  "MTP": ["£MT"],
  "MXN": ["$MX", "$"],
  "NAD": ["$NA", "$"],
  "NIO": [u, "$C"],
  "NZD": ["$NZ", "$"],
  "PHP": [u, "₱"],
  "RHD": ["$RH"],
  "RON": [u, "L"],
  "RWF": [u, "FR"],
  "SBD": ["$SB", "$"],
  "SGD": ["$SG", "$"],
  "SRD": ["$SR", "$"],
  "TOP": [u, "$T"],
  "TTD": ["$TT", "$"],
  "TWD": [u, "NT$"],
  "USD": ["$US", "$"],
  "UYU": ["$UY", "$"],
  "WST": ["$WS"],
  "XCD": [u, "$"],
  "XPF": ["FCFP"],
  "ZMW": [u, "Kw"]
}, "ltr", plural]);

/***/ }),

/***/ 4933:
/*!**************************************************************************!*\
  !*** ./node_modules/@angular/service-worker/fesm2015/service-worker.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceWorkerModule": () => (/* binding */ ServiceWorkerModule),
/* harmony export */   "SwPush": () => (/* binding */ SwPush),
/* harmony export */   "SwRegistrationOptions": () => (/* binding */ SwRegistrationOptions),
/* harmony export */   "SwUpdate": () => (/* binding */ SwUpdate)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 3013);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4125);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 2070);
/**
 * @license Angular v14.1.0
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */





/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

const ERR_SW_NOT_SUPPORTED = 'Service workers are disabled or not supported by this browser';

function errorObservable(message) {
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.defer)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(new Error(message)));
}
/**
 * @publicApi
 */


class NgswCommChannel {
  constructor(serviceWorker) {
    this.serviceWorker = serviceWorker;

    if (!serviceWorker) {
      this.worker = this.events = this.registration = errorObservable(ERR_SW_NOT_SUPPORTED);
    } else {
      const controllerChangeEvents = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(serviceWorker, 'controllerchange');
      const controllerChanges = controllerChangeEvents.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => serviceWorker.controller));
      const currentController = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.defer)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(serviceWorker.controller));
      const controllerWithChanges = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.concat)(currentController, controllerChanges);
      this.worker = controllerWithChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(c => !!c));
      this.registration = this.worker.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(() => serviceWorker.getRegistration()));
      const rawEvents = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(serviceWorker, 'message');
      const rawEventPayload = rawEvents.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(event => event.data));
      const eventsUnconnected = rawEventPayload.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(event => event && event.type));
      const events = eventsUnconnected.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.publish)());
      events.connect();
      this.events = events;
    }
  }

  postMessage(action, payload) {
    return this.worker.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(sw => {
      sw.postMessage(Object.assign({
        action
      }, payload));
    })).toPromise().then(() => undefined);
  }

  postMessageWithOperation(type, payload, operationNonce) {
    const waitForOperationCompleted = this.waitForOperationCompleted(operationNonce);
    const postMessage = this.postMessage(type, payload);
    return Promise.all([postMessage, waitForOperationCompleted]).then(([, result]) => result);
  }

  generateNonce() {
    return Math.round(Math.random() * 10000000);
  }

  eventsOfType(type) {
    let filterFn;

    if (typeof type === 'string') {
      filterFn = event => event.type === type;
    } else {
      filterFn = event => type.includes(event.type);
    }

    return this.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(filterFn));
  }

  nextEventOfType(type) {
    return this.eventsOfType(type).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1));
  }

  waitForOperationCompleted(nonce) {
    return this.eventsOfType('OPERATION_COMPLETED').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(event => event.nonce === nonce), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(event => {
      if (event.result !== undefined) {
        return event.result;
      }

      throw new Error(event.error);
    })).toPromise();
  }

  get isEnabled() {
    return !!this.serviceWorker;
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Subscribe and listen to
 * [Web Push
 * Notifications](https://developer.mozilla.org/en-US/docs/Web/API/Push_API/Best_Practices) through
 * Angular Service Worker.
 *
 * @usageNotes
 *
 * You can inject a `SwPush` instance into any component or service
 * as a dependency.
 *
 * <code-example path="service-worker/push/module.ts" region="inject-sw-push"
 * header="app.component.ts"></code-example>
 *
 * To subscribe, call `SwPush.requestSubscription()`, which asks the user for permission.
 * The call returns a `Promise` with a new
 * [`PushSubscription`](https://developer.mozilla.org/en-US/docs/Web/API/PushSubscription)
 * instance.
 *
 * <code-example path="service-worker/push/module.ts" region="subscribe-to-push"
 * header="app.component.ts"></code-example>
 *
 * A request is rejected if the user denies permission, or if the browser
 * blocks or does not support the Push API or ServiceWorkers.
 * Check `SwPush.isEnabled` to confirm status.
 *
 * Invoke Push Notifications by pushing a message with the following payload.
 *
 * ```ts
 * {
 *   "notification": {
 *     "actions": NotificationAction[],
 *     "badge": USVString,
 *     "body": DOMString,
 *     "data": any,
 *     "dir": "auto"|"ltr"|"rtl",
 *     "icon": USVString,
 *     "image": USVString,
 *     "lang": DOMString,
 *     "renotify": boolean,
 *     "requireInteraction": boolean,
 *     "silent": boolean,
 *     "tag": DOMString,
 *     "timestamp": DOMTimeStamp,
 *     "title": DOMString,
 *     "vibrate": number[]
 *   }
 * }
 * ```
 *
 * Only `title` is required. See `Notification`
 * [instance
 * properties](https://developer.mozilla.org/en-US/docs/Web/API/Notification#Instance_properties).
 *
 * While the subscription is active, Service Worker listens for
 * [PushEvent](https://developer.mozilla.org/en-US/docs/Web/API/PushEvent)
 * occurrences and creates
 * [Notification](https://developer.mozilla.org/en-US/docs/Web/API/Notification)
 * instances in response.
 *
 * Unsubscribe using `SwPush.unsubscribe()`.
 *
 * An application can subscribe to `SwPush.notificationClicks` observable to be notified when a user
 * clicks on a notification. For example:
 *
 * <code-example path="service-worker/push/module.ts" region="subscribe-to-notification-clicks"
 * header="app.component.ts"></code-example>
 *
 * You can read more on handling notification clicks in the [Service worker notifications
 * guide](guide/service-worker-notifications).
 *
 * @see [Push Notifications](https://developers.google.com/web/fundamentals/codelabs/push-notifications/)
 * @see [Angular Push Notifications](https://blog.angular-university.io/angular-push-notifications/)
 * @see [MDN: Push API](https://developer.mozilla.org/en-US/docs/Web/API/Push_API)
 * @see [MDN: Notifications API](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API)
 * @see [MDN: Web Push API Notifications best practices](https://developer.mozilla.org/en-US/docs/Web/API/Push_API/Best_Practices)
 *
 * @publicApi
 */


class SwPush {
  constructor(sw) {
    this.sw = sw;
    this.subscriptionChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();

    if (!sw.isEnabled) {
      this.messages = rxjs__WEBPACK_IMPORTED_MODULE_2__.NEVER;
      this.notificationClicks = rxjs__WEBPACK_IMPORTED_MODULE_2__.NEVER;
      this.subscription = rxjs__WEBPACK_IMPORTED_MODULE_2__.NEVER;
      return;
    }

    this.messages = this.sw.eventsOfType('PUSH').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(message => message.data));
    this.notificationClicks = this.sw.eventsOfType('NOTIFICATION_CLICK').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(message => message.data));
    this.pushManager = this.sw.registration.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(registration => registration.pushManager));
    const workerDrivenSubscriptions = this.pushManager.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(pm => pm.getSubscription()));
    this.subscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)(workerDrivenSubscriptions, this.subscriptionChanges);
  }
  /**
   * True if the Service Worker is enabled (supported by the browser and enabled via
   * `ServiceWorkerModule`).
   */


  get isEnabled() {
    return this.sw.isEnabled;
  }
  /**
   * Subscribes to Web Push Notifications,
   * after requesting and receiving user permission.
   *
   * @param options An object containing the `serverPublicKey` string.
   * @returns A Promise that resolves to the new subscription object.
   */


  requestSubscription(options) {
    if (!this.sw.isEnabled) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }

    const pushOptions = {
      userVisibleOnly: true
    };
    let key = this.decodeBase64(options.serverPublicKey.replace(/_/g, '/').replace(/-/g, '+'));
    let applicationServerKey = new Uint8Array(new ArrayBuffer(key.length));

    for (let i = 0; i < key.length; i++) {
      applicationServerKey[i] = key.charCodeAt(i);
    }

    pushOptions.applicationServerKey = applicationServerKey;
    return this.pushManager.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(pm => pm.subscribe(pushOptions)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1)).toPromise().then(sub => {
      this.subscriptionChanges.next(sub);
      return sub;
    });
  }
  /**
   * Unsubscribes from Service Worker push notifications.
   *
   * @returns A Promise that is resolved when the operation succeeds, or is rejected if there is no
   *          active subscription or the unsubscribe operation fails.
   */


  unsubscribe() {
    if (!this.sw.isEnabled) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }

    const doUnsubscribe = sub => {
      if (sub === null) {
        throw new Error('Not subscribed to push notifications.');
      }

      return sub.unsubscribe().then(success => {
        if (!success) {
          throw new Error('Unsubscribe failed!');
        }

        this.subscriptionChanges.next(null);
      });
    };

    return this.subscription.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(doUnsubscribe)).toPromise();
  }

  decodeBase64(input) {
    return atob(input);
  }

}

SwPush.ɵfac = function SwPush_Factory(t) {
  return new (t || SwPush)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](NgswCommChannel));
};

SwPush.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: SwPush,
  factory: SwPush.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SwPush, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], function () {
    return [{
      type: NgswCommChannel
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Subscribe to update notifications from the Service Worker, trigger update
 * checks, and forcibly activate updates.
 *
 * @see {@link guide/service-worker-communications Service worker communication guide}
 *
 * @publicApi
 */


class SwUpdate {
  constructor(sw) {
    this.sw = sw;

    if (!sw.isEnabled) {
      this.versionUpdates = rxjs__WEBPACK_IMPORTED_MODULE_2__.NEVER;
      this.available = rxjs__WEBPACK_IMPORTED_MODULE_2__.NEVER;
      this.activated = rxjs__WEBPACK_IMPORTED_MODULE_2__.NEVER;
      this.unrecoverable = rxjs__WEBPACK_IMPORTED_MODULE_2__.NEVER;
      return;
    }

    this.versionUpdates = this.sw.eventsOfType(['VERSION_DETECTED', 'VERSION_INSTALLATION_FAILED', 'VERSION_READY', 'NO_NEW_VERSION_DETECTED']);
    this.available = this.versionUpdates.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(evt => evt.type === 'VERSION_READY'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(evt => ({
      type: 'UPDATE_AVAILABLE',
      current: evt.currentVersion,
      available: evt.latestVersion
    })));
    this.activated = this.sw.eventsOfType('UPDATE_ACTIVATED');
    this.unrecoverable = this.sw.eventsOfType('UNRECOVERABLE_STATE');
  }
  /**
   * True if the Service Worker is enabled (supported by the browser and enabled via
   * `ServiceWorkerModule`).
   */


  get isEnabled() {
    return this.sw.isEnabled;
  }
  /**
   * Checks for an update and waits until the new version is downloaded from the server and ready
   * for activation.
   *
   * @returns a promise that
   * - resolves to `true` if a new version was found and is ready to be activated.
   * - resolves to `false` if no new version was found
   * - rejects if any error occurs
   */


  checkForUpdate() {
    if (!this.sw.isEnabled) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }

    const nonce = this.sw.generateNonce();
    return this.sw.postMessageWithOperation('CHECK_FOR_UPDATES', {
      nonce
    }, nonce);
  }
  /**
   * Updates the current client (i.e. browser tab) to the latest version that is ready for
   * activation.
   *
   * @returns a promise that
   *  - resolves to `true` if an update was activated successfully
   *  - resolves to `false` if no update was available (for example, the client was already on the
   *    latest version).
   *  - rejects if any error occurs
   */


  activateUpdate() {
    if (!this.sw.isEnabled) {
      return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
    }

    const nonce = this.sw.generateNonce();
    return this.sw.postMessageWithOperation('ACTIVATE_UPDATE', {
      nonce
    }, nonce);
  }

}

SwUpdate.ɵfac = function SwUpdate_Factory(t) {
  return new (t || SwUpdate)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](NgswCommChannel));
};

SwUpdate.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: SwUpdate,
  factory: SwUpdate.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SwUpdate, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], function () {
    return [{
      type: NgswCommChannel
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Token that can be used to provide options for `ServiceWorkerModule` outside of
 * `ServiceWorkerModule.register()`.
 *
 * You can use this token to define a provider that generates the registration options at runtime,
 * for example via a function call:
 *
 * {@example service-worker/registration-options/module.ts region="registration-options"
 *     header="app.module.ts"}
 *
 * @publicApi
 */


class SwRegistrationOptions {}

const SCRIPT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('NGSW_REGISTER_SCRIPT');

function ngswAppInitializer(injector, script, options, platformId) {
  const initializer = () => {
    if (!((0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(platformId) && 'serviceWorker' in navigator && options.enabled !== false)) {
      return;
    } // Wait for service worker controller changes, and fire an INITIALIZE action when a new SW
    // becomes active. This allows the SW to initialize itself even if there is no application
    // traffic.


    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (navigator.serviceWorker.controller !== null) {
        navigator.serviceWorker.controller.postMessage({
          action: 'INITIALIZE'
        });
      }
    });
    let readyToRegister$;

    if (typeof options.registrationStrategy === 'function') {
      readyToRegister$ = options.registrationStrategy();
    } else {
      const [strategy, ...args] = (options.registrationStrategy || 'registerWhenStable:30000').split(':');

      switch (strategy) {
        case 'registerImmediately':
          readyToRegister$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(null);
          break;

        case 'registerWithDelay':
          readyToRegister$ = delayWithTimeout(+args[0] || 0);
          break;

        case 'registerWhenStable':
          readyToRegister$ = !args[0] ? whenStable(injector) : (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)(whenStable(injector), delayWithTimeout(+args[0]));
          break;

        default:
          // Unknown strategy.
          throw new Error(`Unknown ServiceWorker registration strategy: ${options.registrationStrategy}`);
      }
    } // Don't return anything to avoid blocking the application until the SW is registered.
    // Also, run outside the Angular zone to avoid preventing the app from stabilizing (especially
    // given that some registration strategies wait for the app to stabilize).
    // Catch and log the error if SW registration fails to avoid uncaught rejection warning.


    const ngZone = injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone);
    ngZone.runOutsideAngular(() => readyToRegister$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1)).subscribe(() => navigator.serviceWorker.register(script, {
      scope: options.scope
    }).catch(err => console.error('Service worker registration failed with:', err))));
  };

  return initializer;
}

function delayWithTimeout(timeout) {
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(null).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(timeout));
}

function whenStable(injector) {
  const appRef = injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_1__.ApplicationRef);
  return appRef.isStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(stable => stable));
}

function ngswCommChannelFactory(opts, platformId) {
  return new NgswCommChannel((0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(platformId) && opts.enabled !== false ? navigator.serviceWorker : undefined);
}
/**
 * @publicApi
 */


class ServiceWorkerModule {
  /**
   * Register the given Angular Service Worker script.
   *
   * If `enabled` is set to `false` in the given options, the module will behave as if service
   * workers are not supported by the browser, and the service worker will not be registered.
   */
  static register(script, opts = {}) {
    return {
      ngModule: ServiceWorkerModule,
      providers: [{
        provide: SCRIPT,
        useValue: script
      }, {
        provide: SwRegistrationOptions,
        useValue: opts
      }, {
        provide: NgswCommChannel,
        useFactory: ngswCommChannelFactory,
        deps: [SwRegistrationOptions, _angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
      }, {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__.APP_INITIALIZER,
        useFactory: ngswAppInitializer,
        deps: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injector, SCRIPT, SwRegistrationOptions, _angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID],
        multi: true
      }]
    };
  }

}

ServiceWorkerModule.ɵfac = function ServiceWorkerModule_Factory(t) {
  return new (t || ServiceWorkerModule)();
};

ServiceWorkerModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ServiceWorkerModule
});
ServiceWorkerModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  providers: [SwPush, SwUpdate]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ServiceWorkerModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      providers: [SwPush, SwUpdate]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// This file only reexports content of the `src` folder. Keep it that way.

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=src_main_webapp_bootstrap_ts.js.map