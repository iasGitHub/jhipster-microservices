"use strict";
(self["webpackChunkgateway"] = self["webpackChunkgateway"] || []).push([["src_main_webapp_app_account_account_module_ts"],{

/***/ 8888:
/*!*******************************************************!*\
  !*** ./src/main/webapp/app/account/account.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountModule": () => (/* binding */ AccountModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 7658);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/shared.module */ 2267);
/* harmony import */ var _password_password_strength_bar_password_strength_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./password/password-strength-bar/password-strength-bar.component */ 4250);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ 719);
/* harmony import */ var _activate_activate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./activate/activate.component */ 6711);
/* harmony import */ var _password_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./password/password.component */ 2967);
/* harmony import */ var _password_reset_init_password_reset_init_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./password-reset/init/password-reset-init.component */ 6894);
/* harmony import */ var _password_reset_finish_password_reset_finish_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./password-reset/finish/password-reset-finish.component */ 4582);
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./settings/settings.component */ 5030);
/* harmony import */ var _account_route__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./account.route */ 2064);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_10__);












class AccountModule {
}
AccountModule.ɵfac = function AccountModule_Factory(t) { return new (t || AccountModule)(); };
AccountModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AccountModule });
AccountModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild(_account_route__WEBPACK_IMPORTED_MODULE_9__.accountState)] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AccountModule, { declarations: [_activate_activate_component__WEBPACK_IMPORTED_MODULE_4__.ActivateComponent,
        _register_register_component__WEBPACK_IMPORTED_MODULE_3__.RegisterComponent,
        _password_password_component__WEBPACK_IMPORTED_MODULE_5__.PasswordComponent,
        _password_password_strength_bar_password_strength_bar_component__WEBPACK_IMPORTED_MODULE_2__.PasswordStrengthBarComponent,
        _password_reset_init_password_reset_init_component__WEBPACK_IMPORTED_MODULE_6__.PasswordResetInitComponent,
        _password_reset_finish_password_reset_finish_component__WEBPACK_IMPORTED_MODULE_7__.PasswordResetFinishComponent,
        _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__.SettingsComponent], imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule] }); })();


/***/ }),

/***/ 2064:
/*!******************************************************!*\
  !*** ./src/main/webapp/app/account/account.route.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accountState": () => (/* binding */ accountState)
/* harmony export */ });
/* harmony import */ var _activate_activate_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activate/activate.route */ 1753);
/* harmony import */ var _password_password_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password/password.route */ 1498);
/* harmony import */ var _password_reset_finish_password_reset_finish_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./password-reset/finish/password-reset-finish.route */ 7257);
/* harmony import */ var _password_reset_init_password_reset_init_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./password-reset/init/password-reset-init.route */ 2211);
/* harmony import */ var _register_register_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.route */ 8732);
/* harmony import */ var _settings_settings_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings/settings.route */ 9476);






const ACCOUNT_ROUTES = [_activate_activate_route__WEBPACK_IMPORTED_MODULE_0__.activateRoute, _password_password_route__WEBPACK_IMPORTED_MODULE_1__.passwordRoute, _password_reset_finish_password_reset_finish_route__WEBPACK_IMPORTED_MODULE_2__.passwordResetFinishRoute, _password_reset_init_password_reset_init_route__WEBPACK_IMPORTED_MODULE_3__.passwordResetInitRoute, _register_register_route__WEBPACK_IMPORTED_MODULE_4__.registerRoute, _settings_settings_route__WEBPACK_IMPORTED_MODULE_5__.settingsRoute];
const accountState = [
    {
        path: '',
        children: ACCOUNT_ROUTES,
    },
];


/***/ }),

/***/ 6711:
/*!********************************************************************!*\
  !*** ./src/main/webapp/app/account/activate/activate.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivateComponent": () => (/* binding */ ActivateComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 2070);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _activate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./activate.service */ 813);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7658);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 3013);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/language/translate.directive */ 1995);






function ActivateComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 6)(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Votre compte utilisateur a \u00E9t\u00E9 activ\u00E9.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Merci de vous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "connecter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, ".\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ActivateComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Votre compte utilisateur n'a pas pu \u00EAtre activ\u00E9.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Utilisez le formulaire d'enregistrement pour en cr\u00E9er un nouveau.\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ActivateComponent {
    constructor(activateService, route) {
        this.activateService = activateService;
        this.route = route;
        this.error = false;
        this.success = false;
    }
    ngOnInit() {
        this.route.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.mergeMap)(params => this.activateService.get(params.key))).subscribe({
            next: () => (this.success = true),
            error: () => (this.error = true),
        });
    }
}
ActivateComponent.ɵfac = function ActivateComponent_Factory(t) { return new (t || ActivateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_activate_service__WEBPACK_IMPORTED_MODULE_2__.ActivateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute)); };
ActivateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ActivateComponent, selectors: [["jhi-activate"]], decls: 16, vars: 2, consts: [[1, "d-flex", "justify-content-center"], [1, "col-md-8"], ["jhiTranslate", "activate.title"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-danger", "jhiTranslate", "activate.messages.error", 4, "ngIf"], [1, "alert", "alert-success"], ["jhiTranslate", "activate.messages.success"], ["routerLink", "/login", "jhiTranslate", "global.messages.info.authenticated.link", 1, "alert-link"], ["jhiTranslate", "activate.messages.error", 1, "alert", "alert-danger"]], template: function ActivateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Activation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ActivateComponent_div_9_Template, 10, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ActivateComponent_div_11_Template, 5, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.success);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_5__.TranslateDirective, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref], encapsulation: 2 });


/***/ }),

/***/ 1753:
/*!****************************************************************!*\
  !*** ./src/main/webapp/app/account/activate/activate.route.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activateRoute": () => (/* binding */ activateRoute)
/* harmony export */ });
/* harmony import */ var _activate_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activate.component */ 6711);

const activateRoute = {
    path: 'activate',
    component: _activate_component__WEBPACK_IMPORTED_MODULE_0__.ActivateComponent,
    data: {
        pageTitle: 'activate.title',
    },
};


/***/ }),

/***/ 813:
/*!******************************************************************!*\
  !*** ./src/main/webapp/app/account/activate/activate.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivateService": () => (/* binding */ ActivateService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 5482);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/config/application-config.service */ 1082);




class ActivateService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
    }
    get(key) {
        return this.http.get(this.applicationConfigService.getEndpointFor('api/activate'), {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams().set('key', key),
        });
    }
}
ActivateService.ɵfac = function ActivateService_Factory(t) { return new (t || ActivateService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__.ApplicationConfigService)); };
ActivateService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ActivateService, factory: ActivateService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4582:
/*!**********************************************************************************************!*\
  !*** ./src/main/webapp/app/account/password-reset/finish/password-reset-finish.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordResetFinishComponent": () => (/* binding */ PasswordResetFinishComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 9037);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _password_reset_finish_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./password-reset-finish.service */ 1385);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7658);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 3013);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/language/translate.directive */ 1995);
/* harmony import */ var _password_password_strength_bar_password_strength_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../password/password-strength-bar/password-strength-bar.component */ 4250);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 9520);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__);









const _c0 = ["newPassword"];
function PasswordResetFinishComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n        La clef de r\u00E9initilisation est manquante\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PasswordResetFinishComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Choisir un nouveau mot de passe");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PasswordResetFinishComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Votre mot de passe n'a pas pu \u00EAtre r\u00E9initialis\u00E9. La demande de r\u00E9initialisation n'est valable que 24 heures.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PasswordResetFinishComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 15)(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Votre mot de passe a \u00E9t\u00E9 r\u00E9initialis\u00E9.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Merci de ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "connecter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, ".\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PasswordResetFinishComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n        Le nouveau mot de passe et sa confirmation ne sont pas \u00E9gaux !\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PasswordResetFinishComponent_div_19_div_13_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n                Votre mot de passe est requis.\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PasswordResetFinishComponent_div_19_div_13_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n                Votre mot de passe doit comporter au moins 4 caract\u00E8res.\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PasswordResetFinishComponent_div_19_div_13_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n                Votre mot de passe ne doit pas comporter plus de 50 caract\u00E8res.\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PasswordResetFinishComponent_div_19_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PasswordResetFinishComponent_div_19_div_13_small_2_Template, 2, 0, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PasswordResetFinishComponent_div_19_div_13_small_4_Template, 2, 0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, PasswordResetFinishComponent_div_19_div_13_small_6_Template, 2, 0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    let tmp_0_0;
    let tmp_1_0;
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r7.passwordForm.get("newPassword")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r7.passwordForm.get("newPassword")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r7.passwordForm.get("newPassword")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors.maxlength);
} }
function PasswordResetFinishComponent_div_19_div_26_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n                Votre confirmation du mot de passe est requise.\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PasswordResetFinishComponent_div_19_div_26_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n                Votre confirmation du mot de passe doit comporter au moins 4 caract\u00E8res.\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PasswordResetFinishComponent_div_19_div_26_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n                Votre confirmation du mot de passe ne doit pas comporter plus de 50 caract\u00E8res.\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PasswordResetFinishComponent_div_19_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PasswordResetFinishComponent_div_19_div_26_small_2_Template, 2, 0, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PasswordResetFinishComponent_div_19_div_26_small_4_Template, 2, 0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, PasswordResetFinishComponent_div_19_div_26_small_6_Template, 2, 0, "small", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    let tmp_0_0;
    let tmp_1_0;
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r8.passwordForm.get("confirmPassword")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r8.passwordForm.get("confirmPassword")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r8.passwordForm.get("confirmPassword")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors.maxlength);
} }
function PasswordResetFinishComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function PasswordResetFinishComponent_div_19_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r15.finishReset()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Nouveau mot de passe");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, PasswordResetFinishComponent_div_19_div_13_Template, 8, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "jhi-password-strength-bar", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Confirmation du nouveau mot de passe");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, PasswordResetFinishComponent_div_19_div_26_Template, 8, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "\n            R\u00E9initialiser le mot de passe\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r5.passwordForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 7, "global.form.newpassword.placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.passwordForm.get("newPassword").invalid && (ctx_r5.passwordForm.get("newPassword").dirty || ctx_r5.passwordForm.get("newPassword").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("passwordToCheck", ctx_r5.passwordForm.get("newPassword").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 9, "global.form.confirmpassword.placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.passwordForm.get("confirmPassword").invalid && (ctx_r5.passwordForm.get("confirmPassword").dirty || ctx_r5.passwordForm.get("confirmPassword").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r5.passwordForm.invalid);
} }
class PasswordResetFinishComponent {
    constructor(passwordResetFinishService, route) {
        this.passwordResetFinishService = passwordResetFinishService;
        this.route = route;
        this.initialized = false;
        this.doNotMatch = false;
        this.error = false;
        this.success = false;
        this.key = '';
        this.passwordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup({
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl('', {
                nonNullable: true,
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.maxLength(50)],
            }),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl('', {
                nonNullable: true,
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.maxLength(50)],
            }),
        });
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (params['key']) {
                this.key = params['key'];
            }
            this.initialized = true;
        });
    }
    ngAfterViewInit() {
        if (this.newPassword) {
            this.newPassword.nativeElement.focus();
        }
    }
    finishReset() {
        this.doNotMatch = false;
        this.error = false;
        const { newPassword, confirmPassword } = this.passwordForm.getRawValue();
        if (newPassword !== confirmPassword) {
            this.doNotMatch = true;
        }
        else {
            this.passwordResetFinishService.save(this.key, newPassword).subscribe({
                next: () => (this.success = true),
                error: () => (this.error = true),
            });
        }
    }
}
PasswordResetFinishComponent.ɵfac = function PasswordResetFinishComponent_Factory(t) { return new (t || PasswordResetFinishComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_password_reset_finish_service__WEBPACK_IMPORTED_MODULE_2__.PasswordResetFinishService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute)); };
PasswordResetFinishComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PasswordResetFinishComponent, selectors: [["jhi-password-reset-finish"]], viewQuery: function PasswordResetFinishComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.newPassword = _t.first);
    } }, decls: 24, vars: 6, consts: [[1, "d-flex", "justify-content-center"], [1, "col-md-4"], ["jhiTranslate", "reset.finish.title"], ["class", "alert alert-danger", "jhiTranslate", "reset.finish.messages.keymissing", 4, "ngIf"], ["class", "alert alert-warning", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-danger", "jhiTranslate", "global.messages.error.dontmatch", 4, "ngIf"], [4, "ngIf"], ["jhiTranslate", "reset.finish.messages.keymissing", 1, "alert", "alert-danger"], [1, "alert", "alert-warning"], ["jhiTranslate", "reset.finish.messages.info"], [1, "alert", "alert-danger"], ["jhiTranslate", "reset.finish.messages.error"], [1, "alert", "alert-success"], ["jhiTranslate", "reset.finish.messages.success"], ["routerLink", "/login", "jhiTranslate", "global.messages.info.authenticated.link", 1, "alert-link"], ["jhiTranslate", "global.messages.error.dontmatch", 1, "alert", "alert-danger"], ["name", "form", "role", "form", 3, "formGroup", "ngSubmit"], [1, "mb-3"], ["for", "newPassword", "jhiTranslate", "global.form.newpassword.label", 1, "form-label"], ["type", "password", "id", "newPassword", "name", "newPassword", "formControlName", "newPassword", "data-cy", "resetPassword", 1, "form-control", 3, "placeholder"], ["newPassword", ""], [3, "passwordToCheck"], ["for", "confirmPassword", "jhiTranslate", "global.form.confirmpassword.label", 1, "form-label"], ["type", "password", "id", "confirmPassword", "name", "confirmPassword", "formControlName", "confirmPassword", "data-cy", "confirmResetPassword", 1, "form-control", 3, "placeholder"], ["type", "submit", "jhiTranslate", "reset.finish.form.button", "data-cy", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.newpassword.required", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.newpassword.minlength", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.newpassword.maxlength", 4, "ngIf"], ["jhiTranslate", "global.messages.validate.newpassword.required", 1, "form-text", "text-danger"], ["jhiTranslate", "global.messages.validate.newpassword.minlength", 1, "form-text", "text-danger"], ["jhiTranslate", "global.messages.validate.newpassword.maxlength", 1, "form-text", "text-danger"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.confirmpassword.required", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.confirmpassword.minlength", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.confirmpassword.maxlength", 4, "ngIf"], ["jhiTranslate", "global.messages.validate.confirmpassword.required", 1, "form-text", "text-danger"], ["jhiTranslate", "global.messages.validate.confirmpassword.minlength", 1, "form-text", "text-danger"], ["jhiTranslate", "global.messages.validate.confirmpassword.maxlength", 1, "form-text", "text-danger"]], template: function PasswordResetFinishComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "R\u00E9initialisation du mot de passe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, PasswordResetFinishComponent_div_9_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, PasswordResetFinishComponent_div_11_Template, 5, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, PasswordResetFinishComponent_div_13_Template, 5, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, PasswordResetFinishComponent_div_15_Template, 10, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, PasswordResetFinishComponent_div_17_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, PasswordResetFinishComponent_div_19_Template, 33, 11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.initialized && !ctx.key);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.key && !ctx.success);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.success);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.doNotMatch);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.key && !ctx.success);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_5__.TranslateDirective, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _password_password_strength_bar_password_strength_bar_component__WEBPACK_IMPORTED_MODULE_6__.PasswordStrengthBarComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 7257:
/*!******************************************************************************************!*\
  !*** ./src/main/webapp/app/account/password-reset/finish/password-reset-finish.route.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "passwordResetFinishRoute": () => (/* binding */ passwordResetFinishRoute)
/* harmony export */ });
/* harmony import */ var _password_reset_finish_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password-reset-finish.component */ 4582);

const passwordResetFinishRoute = {
    path: 'reset/finish',
    component: _password_reset_finish_component__WEBPACK_IMPORTED_MODULE_0__.PasswordResetFinishComponent,
    data: {
        pageTitle: 'global.menu.account.password',
    },
};


/***/ }),

/***/ 1385:
/*!********************************************************************************************!*\
  !*** ./src/main/webapp/app/account/password-reset/finish/password-reset-finish.service.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordResetFinishService": () => (/* binding */ PasswordResetFinishService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 5482);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/config/application-config.service */ 1082);



class PasswordResetFinishService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
    }
    save(key, newPassword) {
        return this.http.post(this.applicationConfigService.getEndpointFor('api/account/reset-password/finish'), { key, newPassword });
    }
}
PasswordResetFinishService.ɵfac = function PasswordResetFinishService_Factory(t) { return new (t || PasswordResetFinishService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__.ApplicationConfigService)); };
PasswordResetFinishService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PasswordResetFinishService, factory: PasswordResetFinishService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6894:
/*!******************************************************************************************!*\
  !*** ./src/main/webapp/app/account/password-reset/init/password-reset-init.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordResetInitComponent": () => (/* binding */ PasswordResetInitComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 9037);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _password_reset_init_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./password-reset-init.service */ 8984);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 3013);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/language/translate.directive */ 1995);
/* harmony import */ var _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/alert/alert-error.component */ 486);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 9520);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__);








const _c0 = ["email"];
function PasswordResetInitComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Veuillez renseigner l'adresse email utilis\u00E9e pour vous enregistrer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PasswordResetInitComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Veuillez v\u00E9rifier vos nouveaux emails et suivre les instructions pour r\u00E9initialiser votre mot de passe.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PasswordResetInitComponent_form_15_div_11_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              Votre email est requis.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PasswordResetInitComponent_form_15_div_11_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              Votre email n'est pas valide.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PasswordResetInitComponent_form_15_div_11_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              Votre email doit comporter au moins 5 caract\u00E8res.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PasswordResetInitComponent_form_15_div_11_small_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              Votre email ne doit pas comporter plus de 50 caract\u00E8res.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PasswordResetInitComponent_form_15_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PasswordResetInitComponent_form_15_div_11_small_2_Template, 2, 0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PasswordResetInitComponent_form_15_div_11_small_4_Template, 2, 0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, PasswordResetInitComponent_form_15_div_11_small_6_Template, 2, 0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, PasswordResetInitComponent_form_15_div_11_small_8_Template, 2, 0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    let tmp_0_0;
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r4.resetRequestForm.get("email")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r4.resetRequestForm.get("email")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r4.resetRequestForm.get("email")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r4.resetRequestForm.get("email")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors.maxlength);
} }
function PasswordResetInitComponent_form_15_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function PasswordResetInitComponent_form_15_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.requestReset()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, PasswordResetInitComponent_form_15_div_11_Template, 10, 4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\n          R\u00E9initialiser le mot de passe\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r2.resetRequestForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 4, "global.form.email.placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.resetRequestForm.get("email").invalid && (ctx_r2.resetRequestForm.get("email").dirty || ctx_r2.resetRequestForm.get("email").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r2.resetRequestForm.invalid);
} }
class PasswordResetInitComponent {
    constructor(passwordResetInitService, fb) {
        this.passwordResetInitService = passwordResetInitService;
        this.fb = fb;
        this.success = false;
        this.resetRequestForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.maxLength(254), _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.email]],
        });
    }
    ngAfterViewInit() {
        if (this.email) {
            this.email.nativeElement.focus();
        }
    }
    requestReset() {
        this.passwordResetInitService.save(this.resetRequestForm.get(['email']).value).subscribe(() => (this.success = true));
    }
}
PasswordResetInitComponent.ɵfac = function PasswordResetInitComponent_Factory(t) { return new (t || PasswordResetInitComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_password_reset_init_service__WEBPACK_IMPORTED_MODULE_2__.PasswordResetInitService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormBuilder)); };
PasswordResetInitComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PasswordResetInitComponent, selectors: [["jhi-password-reset-init"]], viewQuery: function PasswordResetInitComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.email = _t.first);
    } }, decls: 20, vars: 3, consts: [[1, "d-flex", "justify-content-center"], [1, "col-md-8"], ["jhiTranslate", "reset.request.title"], ["class", "alert alert-warning", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["name", "form", "role", "form", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "alert", "alert-warning"], ["jhiTranslate", "reset.request.messages.info"], [1, "alert", "alert-success"], ["jhiTranslate", "reset.request.messages.success"], ["name", "form", "role", "form", 3, "formGroup", "ngSubmit"], [1, "mb-3"], ["for", "email", "jhiTranslate", "global.form.email.label", 1, "form-label"], ["type", "email", "id", "email", "name", "email", "formControlName", "email", "data-cy", "emailResetPassword", 1, "form-control", 3, "placeholder"], ["email", ""], [4, "ngIf"], ["type", "submit", "jhiTranslate", "reset.request.form.button", "data-cy", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.email.required", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.email.invalid", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.email.minlength", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.email.maxlength", 4, "ngIf"], ["jhiTranslate", "global.messages.validate.email.required", 1, "form-text", "text-danger"], ["jhiTranslate", "global.messages.validate.email.invalid", 1, "form-text", "text-danger"], ["jhiTranslate", "global.messages.validate.email.minlength", 1, "form-text", "text-danger"], ["jhiTranslate", "global.messages.validate.email.maxlength", 1, "form-text", "text-danger"]], template: function PasswordResetInitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "R\u00E9initialiser son mot de passe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "jhi-alert-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, PasswordResetInitComponent_div_11_Template, 5, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, PasswordResetInitComponent_div_13_Template, 5, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, PasswordResetInitComponent_form_15_Template, 17, 6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.success);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.success);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.success);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_4__.TranslateDirective, _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_5__.AlertErrorComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 2211:
/*!**************************************************************************************!*\
  !*** ./src/main/webapp/app/account/password-reset/init/password-reset-init.route.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "passwordResetInitRoute": () => (/* binding */ passwordResetInitRoute)
/* harmony export */ });
/* harmony import */ var _password_reset_init_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password-reset-init.component */ 6894);

const passwordResetInitRoute = {
    path: 'reset/request',
    component: _password_reset_init_component__WEBPACK_IMPORTED_MODULE_0__.PasswordResetInitComponent,
    data: {
        pageTitle: 'global.menu.account.password',
    },
};


/***/ }),

/***/ 8984:
/*!****************************************************************************************!*\
  !*** ./src/main/webapp/app/account/password-reset/init/password-reset-init.service.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordResetInitService": () => (/* binding */ PasswordResetInitService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 5482);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/config/application-config.service */ 1082);



class PasswordResetInitService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
    }
    save(mail) {
        return this.http.post(this.applicationConfigService.getEndpointFor('api/account/reset-password/init'), mail);
    }
}
PasswordResetInitService.ɵfac = function PasswordResetInitService_Factory(t) { return new (t || PasswordResetInitService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__.ApplicationConfigService)); };
PasswordResetInitService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PasswordResetInitService, factory: PasswordResetInitService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4250:
/*!*******************************************************************************************************!*\
  !*** ./src/main/webapp/app/account/password/password-strength-bar/password-strength-bar.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordStrengthBarComponent": () => (/* binding */ PasswordStrengthBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/language/translate.directive */ 1995);


class PasswordStrengthBarComponent {
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.colors = ['#F00', '#F90', '#FF0', '#9F0', '#0F0'];
    }
    measureStrength(p) {
        let force = 0;
        const regex = /[$-/:-?{-~!"^_`[\]]/g; // "
        const lowerLetters = /[a-z]+/.test(p);
        const upperLetters = /[A-Z]+/.test(p);
        const numbers = /\d+/.test(p);
        const symbols = regex.test(p);
        const flags = [lowerLetters, upperLetters, numbers, symbols];
        const passedMatches = flags.filter((isMatchedFlag) => isMatchedFlag === true).length;
        force += 2 * p.length + (p.length >= 10 ? 1 : 0);
        force += passedMatches * 10;
        // penalty (short password)
        force = p.length <= 6 ? Math.min(force, 10) : force;
        // penalty (poor variety of characters)
        force = passedMatches === 1 ? Math.min(force, 10) : force;
        force = passedMatches === 2 ? Math.min(force, 20) : force;
        force = passedMatches === 3 ? Math.min(force, 40) : force;
        return force;
    }
    getColor(s) {
        let idx = 0;
        if (s > 10) {
            if (s <= 20) {
                idx = 1;
            }
            else if (s <= 30) {
                idx = 2;
            }
            else if (s <= 40) {
                idx = 3;
            }
            else {
                idx = 4;
            }
        }
        return { idx: idx + 1, color: this.colors[idx] };
    }
    set passwordToCheck(password) {
        if (password) {
            const c = this.getColor(this.measureStrength(password));
            const element = this.elementRef.nativeElement;
            if (element.className) {
                this.renderer.removeClass(element, element.className);
            }
            const lis = element.getElementsByTagName('li');
            for (let i = 0; i < lis.length; i++) {
                if (i < c.idx) {
                    this.renderer.setStyle(lis[i], 'backgroundColor', c.color);
                }
                else {
                    this.renderer.setStyle(lis[i], 'backgroundColor', '#DDD');
                }
            }
        }
    }
}
PasswordStrengthBarComponent.ɵfac = function PasswordStrengthBarComponent_Factory(t) { return new (t || PasswordStrengthBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
PasswordStrengthBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PasswordStrengthBarComponent, selectors: [["jhi-password-strength-bar"]], inputs: { passwordToCheck: "passwordToCheck" }, decls: 19, vars: 0, consts: [["id", "strength"], ["jhiTranslate", "global.messages.validate.newpassword.strength"], ["id", "strengthBar"], [1, "point"]], template: function PasswordStrengthBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "small", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Robustesse du mot de passe :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n");
    } }, dependencies: [_shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_1__.TranslateDirective], styles: ["ul#strength[_ngcontent-%COMP%] {\n  display: inline;\n  list-style: none;\n  margin: 0;\n  margin-left: 15px;\n  padding: 0;\n  vertical-align: 2px;\n}\n.point[_ngcontent-%COMP%] {\n  background: #ddd;\n  border-radius: 2px;\n  display: inline-block;\n  height: 5px;\n  margin-right: 1px;\n  width: 20px;\n}\n.point[_ngcontent-%COMP%]:last-child {\n  margin: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3N3b3JkLXN0cmVuZ3RoLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7NEVBQUE7QUFHQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQUNGO0FBRUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBQ0Y7QUFBRTtFQUNFLG9CQUFBO0FBRUoiLCJmaWxlIjoicGFzc3dvcmQtc3RyZW5ndGgtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbnN0YXJ0IFBhc3N3b3JkIHN0cmVuZ3RoIGJhciBzdHlsZVxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbnVsI3N0cmVuZ3RoIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nOiAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogMnB4O1xufVxuXG4ucG9pbnQge1xuICBiYWNrZ3JvdW5kOiAjZGRkO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiA1cHg7XG4gIG1hcmdpbi1yaWdodDogMXB4O1xuICB3aWR0aDogMjBweDtcbiAgJjpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 2967:
/*!********************************************************************!*\
  !*** ./src/main/webapp/app/account/password/password.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordComponent": () => (/* binding */ PasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 9037);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _password_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./password.service */ 1542);
/* harmony import */ var app_core_auth_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/auth/account.service */ 9199);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 3013);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/language/translate.directive */ 1995);
/* harmony import */ var _password_strength_bar_password_strength_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./password-strength-bar/password-strength-bar.component */ 4250);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 9520);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__);










function PasswordComponent_div_4_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Le mot de passe a \u00E9t\u00E9 modifi\u00E9 !");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

function PasswordComponent_div_4_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Une erreur est survenue !");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Le mot de passe n'a pas pu \u00EAtre modifi\u00E9.\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

function PasswordComponent_div_4_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n        Le nouveau mot de passe et sa confirmation ne sont pas \u00E9gaux !\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

function PasswordComponent_div_4_div_24_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              Votre mot de passe est requis.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

function PasswordComponent_div_4_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PasswordComponent_div_4_div_24_small_2_Template, 2, 0, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r5.passwordForm.get("currentPassword")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
  }
}

function PasswordComponent_div_4_div_35_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              Votre mot de passe est requis.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

function PasswordComponent_div_4_div_35_small_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              Votre mot de passe doit comporter au moins 4 caract\u00E8res.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

function PasswordComponent_div_4_div_35_small_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              Votre mot de passe ne doit pas comporter plus de 50 caract\u00E8res.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

function PasswordComponent_div_4_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PasswordComponent_div_4_div_35_small_2_Template, 2, 0, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PasswordComponent_div_4_div_35_small_4_Template, 2, 0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, PasswordComponent_div_4_div_35_small_6_Template, 2, 0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    let tmp_0_0;
    let tmp_1_0;
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r6.passwordForm.get("newPassword")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r6.passwordForm.get("newPassword")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r6.passwordForm.get("newPassword")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors.maxlength);
  }
}

function PasswordComponent_div_4_div_48_small_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              Votre confirmation du mot de passe est requise.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

function PasswordComponent_div_4_div_48_small_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              Votre confirmation du mot de passe doit comporter au moins 4 caract\u00E8res.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

function PasswordComponent_div_4_div_48_small_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n              Votre confirmation du mot de passe ne doit pas comporter plus de 50 caract\u00E8res.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

function PasswordComponent_div_4_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PasswordComponent_div_4_div_48_small_2_Template, 2, 0, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PasswordComponent_div_4_div_48_small_4_Template, 2, 0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, PasswordComponent_div_4_div_48_small_6_Template, 2, 0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    let tmp_0_0;
    let tmp_1_0;
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r7.passwordForm.get("confirmPassword")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r7.passwordForm.get("confirmPassword")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r7.passwordForm.get("confirmPassword")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors.maxlength);
  }
}

const _c0 = function (a0) {
  return {
    username: a0
  };
};

function PasswordComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n        Changer le mot de passe pour [");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "]\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, PasswordComponent_div_4_div_8_Template, 5, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, PasswordComponent_div_4_div_10_Template, 5, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, PasswordComponent_div_4_div_12_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\n\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function PasswordComponent_div_4_Template_form_ngSubmit_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r15.changePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Mot de passe actuel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, PasswordComponent_div_4_div_24_Template, 4, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Nouveau mot de passe");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, PasswordComponent_div_4_div_35_Template, 8, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "jhi-password-strength-bar", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Confirmation du nouveau mot de passe");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](46, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, PasswordComponent_div_4_div_48_Template, 8, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "\n          Sauvegarder\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const account_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("translateValues", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](20, _c0, account_r1.login));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](account_r1.login);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.success);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.doNotMatch);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.passwordForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 14, "global.form.currentpassword.placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.passwordForm.get("currentPassword").invalid && (ctx_r0.passwordForm.get("currentPassword").dirty || ctx_r0.passwordForm.get("currentPassword").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](33, 16, "global.form.newpassword.placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.passwordForm.get("newPassword").invalid && (ctx_r0.passwordForm.get("newPassword").dirty || ctx_r0.passwordForm.get("newPassword").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("passwordToCheck", ctx_r0.passwordForm.get("newPassword").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](46, 18, "global.form.confirmpassword.placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.passwordForm.get("confirmPassword").invalid && (ctx_r0.passwordForm.get("confirmPassword").dirty || ctx_r0.passwordForm.get("confirmPassword").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.passwordForm.invalid);
  }
}

class PasswordComponent {
  constructor(passwordService, accountService) {
    this.passwordService = passwordService;
    this.accountService = accountService;
    this.doNotMatch = false;
    this.error = false;
    this.success = false;
    this.passwordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup({
      currentPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl('', {
        nonNullable: true,
        validators: _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required
      }),
      newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl('', {
        nonNullable: true,
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.maxLength(50)]
      }),
      confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl('', {
        nonNullable: true,
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.maxLength(50)]
      })
    });
  }

  ngOnInit() {
    this.account$ = this.accountService.identity();
  }

  changePassword() {
    this.error = false;
    this.success = false;
    this.doNotMatch = false;
    const {
      newPassword,
      confirmPassword,
      currentPassword
    } = this.passwordForm.getRawValue();

    if (newPassword !== confirmPassword) {
      this.doNotMatch = true;
    } else {
      this.passwordService.save(newPassword, currentPassword).subscribe({
        next: () => this.success = true,
        error: () => this.error = true
      });
    }
  }

}

PasswordComponent.ɵfac = function PasswordComponent_Factory(t) {
  return new (t || PasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_password_service__WEBPACK_IMPORTED_MODULE_2__.PasswordService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_core_auth_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService));
};

PasswordComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: PasswordComponent,
  selectors: [["jhi-password"]],
  decls: 9,
  vars: 3,
  consts: [[1, "d-flex", "justify-content-center"], ["class", "col-md-8", 4, "ngIf"], [1, "col-md-8"], ["jhiTranslate", "password.title", 3, "translateValues"], ["class", "alert alert-success", "jhiTranslate", "password.messages.success", 4, "ngIf"], ["class", "alert alert-danger", "jhiTranslate", "password.messages.error", 4, "ngIf"], ["class", "alert alert-danger", "jhiTranslate", "global.messages.error.dontmatch", 4, "ngIf"], ["name", "form", "role", "form", 3, "formGroup", "ngSubmit"], [1, "mb-3"], ["for", "currentPassword", "jhiTranslate", "global.form.currentpassword.label", 1, "form-label"], ["type", "password", "id", "currentPassword", "name", "currentPassword", "formControlName", "currentPassword", "data-cy", "currentPassword", 1, "form-control", 3, "placeholder"], [4, "ngIf"], ["for", "newPassword", "jhiTranslate", "global.form.newpassword.label", 1, "form-label"], ["type", "password", "id", "newPassword", "name", "newPassword", "formControlName", "newPassword", "data-cy", "newPassword", 1, "form-control", 3, "placeholder"], [3, "passwordToCheck"], ["for", "confirmPassword", "jhiTranslate", "global.form.confirmpassword.label", 1, "form-label"], ["type", "password", "id", "confirmPassword", "name", "confirmPassword", "formControlName", "confirmPassword", "data-cy", "confirmPassword", 1, "form-control", 3, "placeholder"], ["type", "submit", "jhiTranslate", "password.form.button", "data-cy", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["jhiTranslate", "password.messages.success", 1, "alert", "alert-success"], ["jhiTranslate", "password.messages.error", 1, "alert", "alert-danger"], ["jhiTranslate", "global.messages.error.dontmatch", 1, "alert", "alert-danger"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.newpassword.required", 4, "ngIf"], ["jhiTranslate", "global.messages.validate.newpassword.required", 1, "form-text", "text-danger"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.newpassword.minlength", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.newpassword.maxlength", 4, "ngIf"], ["jhiTranslate", "global.messages.validate.newpassword.minlength", 1, "form-text", "text-danger"], ["jhiTranslate", "global.messages.validate.newpassword.maxlength", 1, "form-text", "text-danger"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.confirmpassword.required", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.confirmpassword.minlength", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.confirmpassword.maxlength", 4, "ngIf"], ["jhiTranslate", "global.messages.validate.confirmpassword.required", 1, "form-text", "text-danger"], ["jhiTranslate", "global.messages.validate.confirmpassword.minlength", 1, "form-text", "text-danger"], ["jhiTranslate", "global.messages.validate.confirmpassword.maxlength", 1, "form-text", "text-danger"]],
  template: function PasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n    ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PasswordComponent_div_4_Template, 55, 22, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\n  ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\n");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 1, ctx.account$));
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_5__.TranslateDirective, _password_strength_bar_password_strength_bar_component__WEBPACK_IMPORTED_MODULE_6__.PasswordStrengthBarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
  encapsulation: 2
});

/***/ }),

/***/ 1498:
/*!****************************************************************!*\
  !*** ./src/main/webapp/app/account/password/password.route.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "passwordRoute": () => (/* binding */ passwordRoute)
/* harmony export */ });
/* harmony import */ var app_core_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/core/auth/user-route-access.service */ 8059);
/* harmony import */ var _password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password.component */ 2967);


const passwordRoute = {
    path: 'password',
    component: _password_component__WEBPACK_IMPORTED_MODULE_1__.PasswordComponent,
    data: {
        pageTitle: 'global.menu.account.password',
    },
    canActivate: [app_core_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__.UserRouteAccessService],
};


/***/ }),

/***/ 1542:
/*!******************************************************************!*\
  !*** ./src/main/webapp/app/account/password/password.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordService": () => (/* binding */ PasswordService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 5482);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/config/application-config.service */ 1082);



class PasswordService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
    }
    save(newPassword, currentPassword) {
        return this.http.post(this.applicationConfigService.getEndpointFor('api/account/change-password'), { currentPassword, newPassword });
    }
}
PasswordService.ɵfac = function PasswordService_Factory(t) { return new (t || PasswordService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__.ApplicationConfigService)); };
PasswordService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PasswordService, factory: PasswordService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 719:
/*!********************************************************************!*\
  !*** ./src/main/webapp/app/account/register/register.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 9037);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_config_error_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/config/error.constants */ 7607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 9520);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register.service */ 9487);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 3013);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/language/translate.directive */ 1995);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7658);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _password_password_strength_bar_password_strength_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../password/password-strength-bar/password-strength-bar.component */ 4250);










const _c0 = ["login"];
function RegisterComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Compte enregistr\u00E9 !");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Merci de v\u00E9rifier votre email de confirmation.\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Compte non cr\u00E9\u00E9 !");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Merci d'essayer \u00E0 nouveau plus tard.\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Ce compte utilisateur existe d\u00E9j\u00E0 !");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Veuillez en choisir un autre.\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Cet email est d\u00E9j\u00E0 utilis\u00E9 !");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Veuillez en choisir un autre.\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n        Le nouveau mot de passe et sa confirmation ne sont pas \u00E9gaux !\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_form_25_div_11_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n              Votre nom d'utilisateur est obligatoire.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_form_25_div_11_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n              Votre nom d'utilisateur doit contenir plus d'un caract\u00E8re.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_form_25_div_11_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n              Votre nom d'utilisateur ne peut pas contenir plus de 50 caract\u00E8res.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_form_25_div_11_small_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n              Votre nom d'utilisateur est invalide.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_form_25_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RegisterComponent_form_25_div_11_small_2_Template, 2, 0, "small", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, RegisterComponent_form_25_div_11_small_4_Template, 2, 0, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, RegisterComponent_form_25_div_11_small_6_Template, 2, 0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, RegisterComponent_form_25_div_11_small_8_Template, 2, 0, "small", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    let tmp_0_0;
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r7.registerForm.get("login")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r7.registerForm.get("login")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r7.registerForm.get("login")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors.maxlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r7.registerForm.get("login")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors.pattern);
} }
function RegisterComponent_form_25_div_22_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n              Votre email est requis.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_form_25_div_22_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n              Votre email n'est pas valide.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_form_25_div_22_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n              Votre email doit comporter au moins 5 caract\u00E8res.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_form_25_div_22_small_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n              Votre email ne doit pas comporter plus de 50 caract\u00E8res.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_form_25_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RegisterComponent_form_25_div_22_small_2_Template, 2, 0, "small", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, RegisterComponent_form_25_div_22_small_4_Template, 2, 0, "small", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, RegisterComponent_form_25_div_22_small_6_Template, 2, 0, "small", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, RegisterComponent_form_25_div_22_small_8_Template, 2, 0, "small", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    let tmp_0_0;
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r8.registerForm.get("email")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r8.registerForm.get("email")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r8.registerForm.get("email")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r8.registerForm.get("email")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors.maxlength);
} }
function RegisterComponent_form_25_div_33_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n              Votre mot de passe est requis.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_form_25_div_33_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n              Votre mot de passe doit comporter au moins 4 caract\u00E8res.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_form_25_div_33_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n              Votre mot de passe ne doit pas comporter plus de 50 caract\u00E8res.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_form_25_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RegisterComponent_form_25_div_33_small_2_Template, 2, 0, "small", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, RegisterComponent_form_25_div_33_small_4_Template, 2, 0, "small", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, RegisterComponent_form_25_div_33_small_6_Template, 2, 0, "small", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    let tmp_0_0;
    let tmp_1_0;
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r9.registerForm.get("password")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r9.registerForm.get("password")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r9.registerForm.get("password")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors.maxlength);
} }
function RegisterComponent_form_25_div_46_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n              Votre confirmation du mot de passe est requise.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_form_25_div_46_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n              Votre confirmation du mot de passe doit comporter au moins 4 caract\u00E8res.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_form_25_div_46_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n              Votre confirmation du mot de passe ne doit pas comporter plus de 50 caract\u00E8res.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_form_25_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RegisterComponent_form_25_div_46_small_2_Template, 2, 0, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, RegisterComponent_form_25_div_46_small_4_Template, 2, 0, "small", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, RegisterComponent_form_25_div_46_small_6_Template, 2, 0, "small", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    let tmp_0_0;
    let tmp_1_0;
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r10.registerForm.get("confirmPassword")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r10.registerForm.get("confirmPassword")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r10.registerForm.get("confirmPassword")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors.maxlength);
} }
function RegisterComponent_form_25_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function RegisterComponent_form_25_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r25.register()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Nom d'utilisateur");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, RegisterComponent_form_25_div_11_Template, 10, 4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, RegisterComponent_form_25_div_22_Template, 10, 4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Nouveau mot de passe");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, RegisterComponent_form_25_div_33_Template, 8, 3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "jhi-password-strength-bar", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Confirmation du nouveau mot de passe");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](44, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](46, RegisterComponent_form_25_div_46_Template, 8, 3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "\n          Enregistrement\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r5.registerForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 11, "global.form.username.placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.registerForm.get("login").invalid && (ctx_r5.registerForm.get("login").dirty || ctx_r5.registerForm.get("login").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 13, "global.form.email.placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.registerForm.get("email").invalid && (ctx_r5.registerForm.get("email").dirty || ctx_r5.registerForm.get("email").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](31, 15, "global.form.newpassword.placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.registerForm.get("password").invalid && (ctx_r5.registerForm.get("password").dirty || ctx_r5.registerForm.get("password").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("passwordToCheck", ctx_r5.registerForm.get("password").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](44, 17, "global.form.confirmpassword.placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.registerForm.get("confirmPassword").invalid && (ctx_r5.registerForm.get("confirmPassword").dirty || ctx_r5.registerForm.get("confirmPassword").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r5.registerForm.invalid);
} }
class RegisterComponent {
    constructor(translateService, registerService) {
        this.translateService = translateService;
        this.registerService = registerService;
        this.doNotMatch = false;
        this.error = false;
        this.errorEmailExists = false;
        this.errorUserExists = false;
        this.success = false;
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup({
            login: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl('', {
                nonNullable: true,
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(1),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.maxLength(50),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.pattern('^[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$|^[_.@A-Za-z0-9-]+$'),
                ],
            }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl('', {
                nonNullable: true,
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.maxLength(254), _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.email],
            }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl('', {
                nonNullable: true,
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.maxLength(50)],
            }),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl('', {
                nonNullable: true,
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.maxLength(50)],
            }),
        });
    }
    ngAfterViewInit() {
        if (this.login) {
            this.login.nativeElement.focus();
        }
    }
    register() {
        this.doNotMatch = false;
        this.error = false;
        this.errorEmailExists = false;
        this.errorUserExists = false;
        const { password, confirmPassword } = this.registerForm.getRawValue();
        if (password !== confirmPassword) {
            this.doNotMatch = true;
        }
        else {
            const { login, email } = this.registerForm.getRawValue();
            this.registerService
                .save({ login, email, password, langKey: this.translateService.currentLang })
                .subscribe({ next: () => (this.success = true), error: response => this.processError(response) });
        }
    }
    processError(response) {
        if (response.status === 400 && response.error.type === app_config_error_constants__WEBPACK_IMPORTED_MODULE_1__.LOGIN_ALREADY_USED_TYPE) {
            this.errorUserExists = true;
        }
        else if (response.status === 400 && response.error.type === app_config_error_constants__WEBPACK_IMPORTED_MODULE_1__.EMAIL_ALREADY_USED_TYPE) {
            this.errorEmailExists = true;
        }
        else {
            this.error = true;
        }
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_register_service__WEBPACK_IMPORTED_MODULE_4__.RegisterService)); };
RegisterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["jhi-register"]], viewQuery: function RegisterComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.login = _t.first);
    } }, decls: 45, vars: 6, consts: [[1, "d-flex", "justify-content-center"], [1, "col-md-8"], ["jhiTranslate", "register.title", "data-cy", "registerTitle"], ["class", "alert alert-success", "jhiTranslate", "register.messages.success", 4, "ngIf"], ["class", "alert alert-danger", "jhiTranslate", "register.messages.error.fail", 4, "ngIf"], ["class", "alert alert-danger", "jhiTranslate", "register.messages.error.userexists", 4, "ngIf"], ["class", "alert alert-danger", "jhiTranslate", "register.messages.error.emailexists", 4, "ngIf"], ["class", "alert alert-danger", "jhiTranslate", "global.messages.error.dontmatch", 4, "ngIf"], ["name", "form", "role", "form", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "mt-3", "alert", "alert-warning"], ["jhiTranslate", "global.messages.info.authenticated.prefix"], ["routerLink", "/login", "jhiTranslate", "global.messages.info.authenticated.link", 1, "alert-link"], ["jhiTranslate", "global.messages.info.authenticated.suffix"], ["jhiTranslate", "register.messages.success", 1, "alert", "alert-success"], ["jhiTranslate", "register.messages.error.fail", 1, "alert", "alert-danger"], ["jhiTranslate", "register.messages.error.userexists", 1, "alert", "alert-danger"], ["jhiTranslate", "register.messages.error.emailexists", 1, "alert", "alert-danger"], ["jhiTranslate", "global.messages.error.dontmatch", 1, "alert", "alert-danger"], ["name", "form", "role", "form", 3, "formGroup", "ngSubmit"], [1, "mb-3"], ["for", "login", "jhiTranslate", "global.form.username.label", 1, "form-label"], ["type", "text", "id", "login", "name", "login", "formControlName", "login", "data-cy", "username", 1, "form-control", 3, "placeholder"], ["login", ""], [4, "ngIf"], ["for", "email", "jhiTranslate", "global.form.email.label", 1, "form-label"], ["type", "email", "id", "email", "name", "email", "formControlName", "email", "data-cy", "email", 1, "form-control", 3, "placeholder"], ["for", "password", "jhiTranslate", "global.form.newpassword.label", 1, "form-label"], ["type", "password", "id", "password", "name", "password", "formControlName", "password", "data-cy", "firstPassword", 1, "form-control", 3, "placeholder"], [3, "passwordToCheck"], ["for", "confirmPassword", "jhiTranslate", "global.form.confirmpassword.label", 1, "form-label"], ["type", "password", "id", "confirmPassword", "name", "confirmPassword", "formControlName", "confirmPassword", "data-cy", "secondPassword", 1, "form-control", 3, "placeholder"], ["type", "submit", "jhiTranslate", "register.form.button", "data-cy", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "form-text text-danger", "jhiTranslate", "register.messages.validate.login.required", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "register.messages.validate.login.minlength", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "register.messages.validate.login.maxlength", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "register.messages.validate.login.pattern", 4, "ngIf"], ["jhiTranslate", "register.messages.validate.login.required", 1, "form-text", "text-danger"], ["jhiTranslate", "register.messages.validate.login.minlength", 1, "form-text", "text-danger"], ["jhiTranslate", "register.messages.validate.login.maxlength", 1, "form-text", "text-danger"], ["jhiTranslate", "register.messages.validate.login.pattern", 1, "form-text", "text-danger"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.email.required", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.email.invalid", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.email.minlength", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.email.maxlength", 4, "ngIf"], ["jhiTranslate", "global.messages.validate.email.required", 1, "form-text", "text-danger"], ["jhiTranslate", "global.messages.validate.email.invalid", 1, "form-text", "text-danger"], ["jhiTranslate", "global.messages.validate.email.minlength", 1, "form-text", "text-danger"], ["jhiTranslate", "global.messages.validate.email.maxlength", 1, "form-text", "text-danger"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.newpassword.required", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.newpassword.minlength", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.newpassword.maxlength", 4, "ngIf"], ["jhiTranslate", "global.messages.validate.newpassword.required", 1, "form-text", "text-danger"], ["jhiTranslate", "global.messages.validate.newpassword.minlength", 1, "form-text", "text-danger"], ["jhiTranslate", "global.messages.validate.newpassword.maxlength", 1, "form-text", "text-danger"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.confirmpassword.required", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.confirmpassword.minlength", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.confirmpassword.maxlength", 4, "ngIf"], ["jhiTranslate", "global.messages.validate.confirmpassword.required", 1, "form-text", "text-danger"], ["jhiTranslate", "global.messages.validate.confirmpassword.minlength", 1, "form-text", "text-danger"], ["jhiTranslate", "global.messages.validate.confirmpassword.maxlength", 1, "form-text", "text-danger"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Cr\u00E9ation de compte utilisateur");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, RegisterComponent_div_9_Template, 5, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, RegisterComponent_div_11_Template, 5, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, RegisterComponent_div_13_Template, 5, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, RegisterComponent_div_15_Template, 5, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, RegisterComponent_div_17_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, RegisterComponent_form_25_Template, 52, 19, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Si vous voulez vous ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "connecter");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, ", vous pouvez utiliser les comptes par d\u00E9faut : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "\n          - Administrateur (nom d'utilisateur=\"admin\" et mot de passe =\"admin\") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "\n          - Utilisateur (nom d'utilisateur=\"user\" et mot de passe =\"user\").");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.success);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errorUserExists);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errorEmailExists);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.doNotMatch);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.success);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_6__.TranslateDirective, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _password_password_strength_bar_password_strength_bar_component__WEBPACK_IMPORTED_MODULE_8__.PasswordStrengthBarComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 8732:
/*!****************************************************************!*\
  !*** ./src/main/webapp/app/account/register/register.route.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerRoute": () => (/* binding */ registerRoute)
/* harmony export */ });
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component */ 719);

const registerRoute = {
    path: 'register',
    component: _register_component__WEBPACK_IMPORTED_MODULE_0__.RegisterComponent,
    data: {
        pageTitle: 'register.title',
    },
};


/***/ }),

/***/ 9487:
/*!******************************************************************!*\
  !*** ./src/main/webapp/app/account/register/register.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterService": () => (/* binding */ RegisterService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 5482);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/config/application-config.service */ 1082);



class RegisterService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
    }
    save(registration) {
        return this.http.post(this.applicationConfigService.getEndpointFor('api/register'), registration);
    }
}
RegisterService.ɵfac = function RegisterService_Factory(t) { return new (t || RegisterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__.ApplicationConfigService)); };
RegisterService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RegisterService, factory: RegisterService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5030:
/*!********************************************************************!*\
  !*** ./src/main/webapp/app/account/settings/settings.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsComponent": () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 9037);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_config_language_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/config/language.constants */ 2927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_core_auth_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/auth/account.service */ 9199);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 9520);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 3013);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/language/translate.directive */ 1995);
/* harmony import */ var _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/alert/alert-error.component */ 486);
/* harmony import */ var _shared_language_find_language_from_key_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/language/find-language-from-key.pipe */ 1992);










const _c0 = function (a0) { return { username: a0 }; };
function SettingsComponent_h2_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n        Profil de l'utilisateur [");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "]\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("translateValues", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, ctx_r0.settingsForm.value.login));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.settingsForm.value.login);
} }
function SettingsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Votre profil a \u00E9t\u00E9 sauvegard\u00E9 !");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SettingsComponent_form_12_div_10_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n              Votre pr\u00E9nom est requis.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SettingsComponent_form_12_div_10_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n              Votre pr\u00E9nom doit comporter au moins un caract\u00E8re.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SettingsComponent_form_12_div_10_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n              Votre pr\u00E9nom ne doit pas comporter plus de 50 caract\u00E8res.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SettingsComponent_form_12_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SettingsComponent_form_12_div_10_small_2_Template, 2, 0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SettingsComponent_form_12_div_10_small_4_Template, 2, 0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, SettingsComponent_form_12_div_10_small_6_Template, 2, 0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    let tmp_0_0;
    let tmp_1_0;
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r3.settingsForm.get("firstName")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r3.settingsForm.get("firstName")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r3.settingsForm.get("firstName")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors.maxlength);
} }
function SettingsComponent_form_12_div_21_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n              Votre nom est requis.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SettingsComponent_form_12_div_21_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n              Votre nom doit comporter au moins un caract\u00E8re.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SettingsComponent_form_12_div_21_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n              Votre nom ne doit pas comporter plus de 50 caract\u00E8res.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SettingsComponent_form_12_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SettingsComponent_form_12_div_21_small_2_Template, 2, 0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SettingsComponent_form_12_div_21_small_4_Template, 2, 0, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, SettingsComponent_form_12_div_21_small_6_Template, 2, 0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    let tmp_0_0;
    let tmp_1_0;
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r4.settingsForm.get("lastName")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r4.settingsForm.get("lastName")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r4.settingsForm.get("lastName")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors.maxlength);
} }
function SettingsComponent_form_12_div_32_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n              Votre email est requis.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SettingsComponent_form_12_div_32_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n              Votre email n'est pas valide.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SettingsComponent_form_12_div_32_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n              Votre email doit comporter au moins 5 caract\u00E8res.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SettingsComponent_form_12_div_32_small_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n              Votre email ne doit pas comporter plus de 50 caract\u00E8res.\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SettingsComponent_form_12_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SettingsComponent_form_12_div_32_small_2_Template, 2, 0, "small", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SettingsComponent_form_12_div_32_small_4_Template, 2, 0, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, SettingsComponent_form_12_div_32_small_6_Template, 2, 0, "small", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\n\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, SettingsComponent_form_12_div_32_small_8_Template, 2, 0, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    let tmp_0_0;
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r5.settingsForm.get("email")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r5.settingsForm.get("email")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r5.settingsForm.get("email")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r5.settingsForm.get("email")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors.maxlength);
} }
function SettingsComponent_form_12_div_35_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "findLanguageFromKey");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const language_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", language_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, language_r18));
} }
function SettingsComponent_form_12_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Langue");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "select", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, SettingsComponent_form_12_div_35_option_7_Template, 3, 4, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r6.languages);
} }
function SettingsComponent_form_12_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function SettingsComponent_form_12_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r19.save()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Pr\u00E9nom");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, SettingsComponent_form_12_div_10_Template, 8, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Nom");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, SettingsComponent_form_12_div_21_Template, 8, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, SettingsComponent_form_12_div_32_Template, 10, 4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, SettingsComponent_form_12_div_35_Template, 10, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "\n\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "\n          Sauvegarder\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r2.settingsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 9, "settings.form.firstname.placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.settingsForm.get("firstName").invalid && (ctx_r2.settingsForm.get("firstName").dirty || ctx_r2.settingsForm.get("firstName").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 11, "settings.form.lastname.placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.settingsForm.get("lastName").invalid && (ctx_r2.settingsForm.get("lastName").dirty || ctx_r2.settingsForm.get("lastName").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](30, 13, "global.form.email.placeholder"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.settingsForm.get("email").invalid && (ctx_r2.settingsForm.get("email").dirty || ctx_r2.settingsForm.get("email").touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.languages && ctx_r2.languages.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r2.settingsForm.invalid);
} }
const initialAccount = {};
class SettingsComponent {
    constructor(accountService, translateService) {
        this.accountService = accountService;
        this.translateService = translateService;
        this.success = false;
        this.languages = app_config_language_constants__WEBPACK_IMPORTED_MODULE_1__.LANGUAGES;
        this.settingsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(initialAccount.firstName, {
                nonNullable: true,
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.maxLength(50)],
            }),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(initialAccount.lastName, {
                nonNullable: true,
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.maxLength(50)],
            }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(initialAccount.email, {
                nonNullable: true,
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.maxLength(254), _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.email],
            }),
            langKey: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(initialAccount.langKey, { nonNullable: true }),
            activated: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(initialAccount.activated, { nonNullable: true }),
            authorities: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(initialAccount.authorities, { nonNullable: true }),
            imageUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(initialAccount.imageUrl, { nonNullable: true }),
            login: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(initialAccount.login, { nonNullable: true }),
        });
    }
    ngOnInit() {
        this.accountService.identity().subscribe(account => {
            if (account) {
                this.settingsForm.patchValue(account);
            }
        });
    }
    save() {
        this.success = false;
        const account = this.settingsForm.getRawValue();
        this.accountService.save(account).subscribe(() => {
            this.success = true;
            this.accountService.authenticate(account);
            if (account.langKey !== this.translateService.currentLang) {
                this.translateService.use(account.langKey);
            }
        });
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_core_auth_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService)); };
SettingsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["jhi-settings"]], decls: 17, vars: 3, consts: [[1, "d-flex", "justify-content-center"], [1, "col-md-8"], ["jhiTranslate", "settings.title", 3, "translateValues", 4, "ngIf"], ["class", "alert alert-success", "jhiTranslate", "settings.messages.success", 4, "ngIf"], ["name", "form", "role", "form", "novalidate", "", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["jhiTranslate", "settings.title", 3, "translateValues"], ["jhiTranslate", "settings.messages.success", 1, "alert", "alert-success"], ["name", "form", "role", "form", "novalidate", "", 3, "formGroup", "ngSubmit"], [1, "mb-3"], ["for", "firstName", "jhiTranslate", "settings.form.firstname", 1, "form-label"], ["type", "text", "id", "firstName", "name", "firstName", "formControlName", "firstName", "data-cy", "firstname", 1, "form-control", 3, "placeholder"], [4, "ngIf"], ["for", "lastName", "jhiTranslate", "settings.form.lastname", 1, "form-label"], ["type", "text", "id", "lastName", "name", "lastName", "formControlName", "lastName", "data-cy", "lastname", 1, "form-control", 3, "placeholder"], ["for", "email", "jhiTranslate", "global.form.email.label", 1, "form-label"], ["type", "email", "id", "email", "name", "email", "formControlName", "email", "data-cy", "email", 1, "form-control", 3, "placeholder"], ["class", "mb-3", 4, "ngIf"], ["type", "submit", "jhiTranslate", "settings.form.button", "data-cy", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "form-text text-danger", "jhiTranslate", "settings.messages.validate.firstname.required", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "settings.messages.validate.firstname.minlength", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "settings.messages.validate.firstname.maxlength", 4, "ngIf"], ["jhiTranslate", "settings.messages.validate.firstname.required", 1, "form-text", "text-danger"], ["jhiTranslate", "settings.messages.validate.firstname.minlength", 1, "form-text", "text-danger"], ["jhiTranslate", "settings.messages.validate.firstname.maxlength", 1, "form-text", "text-danger"], ["class", "form-text text-danger", "jhiTranslate", "settings.messages.validate.lastname.required", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "settings.messages.validate.lastname.minlength", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "settings.messages.validate.lastname.maxlength", 4, "ngIf"], ["jhiTranslate", "settings.messages.validate.lastname.required", 1, "form-text", "text-danger"], ["jhiTranslate", "settings.messages.validate.lastname.minlength", 1, "form-text", "text-danger"], ["jhiTranslate", "settings.messages.validate.lastname.maxlength", 1, "form-text", "text-danger"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.email.required", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.email.invalid", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.email.minlength", 4, "ngIf"], ["class", "form-text text-danger", "jhiTranslate", "global.messages.validate.email.maxlength", 4, "ngIf"], ["jhiTranslate", "global.messages.validate.email.required", 1, "form-text", "text-danger"], ["jhiTranslate", "global.messages.validate.email.invalid", 1, "form-text", "text-danger"], ["jhiTranslate", "global.messages.validate.email.minlength", 1, "form-text", "text-danger"], ["jhiTranslate", "global.messages.validate.email.maxlength", 1, "form-text", "text-danger"], ["for", "langKey", "jhiTranslate", "settings.form.language"], ["id", "langKey", "name", "langKey", "formControlName", "langKey", "data-cy", "langKey", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, SettingsComponent_h2_6_Template, 5, 4, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, SettingsComponent_div_8_Template, 5, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "jhi-alert-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, SettingsComponent_form_12_Template, 40, 15, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.settingsForm.value.login);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.success);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.settingsForm.value.login);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_6__.TranslateDirective, _shared_alert_alert_error_component__WEBPACK_IMPORTED_MODULE_7__.AlertErrorComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe, _shared_language_find_language_from_key_pipe__WEBPACK_IMPORTED_MODULE_8__.FindLanguageFromKeyPipe], encapsulation: 2 });


/***/ }),

/***/ 9476:
/*!****************************************************************!*\
  !*** ./src/main/webapp/app/account/settings/settings.route.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "settingsRoute": () => (/* binding */ settingsRoute)
/* harmony export */ });
/* harmony import */ var app_core_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/core/auth/user-route-access.service */ 8059);
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.component */ 5030);


const settingsRoute = {
    path: 'settings',
    component: _settings_component__WEBPACK_IMPORTED_MODULE_1__.SettingsComponent,
    data: {
        pageTitle: 'global.menu.account.settings',
    },
    canActivate: [app_core_auth_user_route_access_service__WEBPACK_IMPORTED_MODULE_0__.UserRouteAccessService],
};


/***/ }),

/***/ 7607:
/*!*******************************************************!*\
  !*** ./src/main/webapp/app/config/error.constants.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EMAIL_ALREADY_USED_TYPE": () => (/* binding */ EMAIL_ALREADY_USED_TYPE),
/* harmony export */   "LOGIN_ALREADY_USED_TYPE": () => (/* binding */ LOGIN_ALREADY_USED_TYPE),
/* harmony export */   "PROBLEM_BASE_URL": () => (/* binding */ PROBLEM_BASE_URL)
/* harmony export */ });
const PROBLEM_BASE_URL = 'https://www.jhipster.tech/problem';
const EMAIL_ALREADY_USED_TYPE = `${PROBLEM_BASE_URL}/email-already-used`;
const LOGIN_ALREADY_USED_TYPE = `${PROBLEM_BASE_URL}/login-already-used`;


/***/ })

}]);
//# sourceMappingURL=src_main_webapp_app_account_account_module_ts.js.map