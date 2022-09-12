"use strict";
(self["webpackChunkgateway"] = self["webpackChunkgateway"] || []).push([["src_main_webapp_app_login_login_module_ts"],{

/***/ 9472:
/*!******************************************************!*\
  !*** ./src/main/webapp/app/login/login.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 9037);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_core_auth_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/auth/account.service */ 9199);
/* harmony import */ var app_login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/login/login.service */ 7115);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7658);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 3013);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/language/translate.directive */ 1995);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 9520);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__);









const _c0 = ["username"];
function LoginComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Erreur d'authentification !");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Veuillez v\u00E9rifier vos identifiants de connexion.\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(accountService, loginService, router) {
        this.accountService = accountService;
        this.loginService = loginService;
        this.router = router;
        this.authenticationError = false;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl('', { nonNullable: true, validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required] }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl('', { nonNullable: true, validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required] }),
            rememberMe: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(false, { nonNullable: true, validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required] }),
        });
    }
    ngOnInit() {
        // if already authenticated then navigate to home page
        this.accountService.identity().subscribe(() => {
            if (this.accountService.isAuthenticated()) {
                this.router.navigate(['']);
            }
        });
    }
    ngAfterViewInit() {
        this.username.nativeElement.focus();
    }
    login() {
        this.loginService.login(this.loginForm.getRawValue()).subscribe({
            next: () => {
                this.authenticationError = false;
                if (!this.router.getCurrentNavigation()) {
                    // There were no routing during login (eg from navigationToStoredUrl)
                    this.router.navigate(['']);
                }
            },
            error: () => (this.authenticationError = true),
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_core_auth_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_login_login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["jhi-login"]], viewQuery: function LoginComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.username = _t.first);
    } }, decls: 65, vars: 8, consts: [[1, "d-flex", "justify-content-center"], [1, "col-lg-6", "col-md-8", "col-sm-10"], ["jhiTranslate", "login.title", "data-cy", "loginTitle"], ["class", "alert alert-danger", "jhiTranslate", "login.messages.error.authentication", "data-cy", "loginError", 4, "ngIf"], ["role", "form", 1, "form", 3, "formGroup", "ngSubmit"], [1, "mb-3"], ["for", "username", "jhiTranslate", "global.form.username.label", 1, "username-label"], ["type", "text", "name", "username", "id", "username", "formControlName", "username", "data-cy", "username", 1, "form-control", 3, "placeholder"], ["username", ""], ["for", "password", "jhiTranslate", "login.form.password"], ["type", "password", "name", "password", "id", "password", "formControlName", "password", "data-cy", "password", 1, "form-control", 3, "placeholder"], [1, "form-check"], ["for", "rememberMe", 1, "form-check-label"], ["type", "checkbox", "name", "rememberMe", "id", "rememberMe", "formControlName", "rememberMe", 1, "form-check-input"], ["jhiTranslate", "login.form.rememberme"], ["type", "submit", "jhiTranslate", "login.form.button", "data-cy", "submit", 1, "btn", "btn-primary"], [1, "mt-3", "alert", "alert-warning"], ["routerLink", "/account/reset/request", "jhiTranslate", "login.password.forgot", "data-cy", "forgetYourPasswordSelector", 1, "alert-link"], [1, "alert", "alert-warning"], ["jhiTranslate", "global.messages.info.register.noaccount"], ["routerLink", "/account/register", "jhiTranslate", "global.messages.info.register.link", 1, "alert-link"], ["jhiTranslate", "login.messages.error.authentication", "data-cy", "loginError", 1, "alert", "alert-danger"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Authentification");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LoginComponent_div_9_Template, 5, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_11_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Nom d'utilisateur");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Mot de passe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Garder la session ouverte");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "\n\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Connexion");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Avez-vous oubli\u00E9 votre mot de passe ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "\n\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Vous n'avez pas encore de compte ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Cr\u00E9er un compte");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.authenticationError);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 4, "global.form.username.placeholder"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](29, 6, "login.form.password.placeholder"));
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_6__.TranslateDirective, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 4121:
/*!***************************************************!*\
  !*** ./src/main/webapp/app/login/login.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginModule": () => (/* binding */ LoginModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 7658);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/shared.module */ 2267);
/* harmony import */ var _login_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.route */ 8387);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ 9472);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);






class LoginModule {
}
LoginModule.ɵfac = function LoginModule_Factory(t) { return new (t || LoginModule)(); };
LoginModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: LoginModule });
LoginModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild([_login_route__WEBPACK_IMPORTED_MODULE_2__.LOGIN_ROUTE])] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent], imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule] }); })();


/***/ }),

/***/ 8387:
/*!**************************************************!*\
  !*** ./src/main/webapp/app/login/login.route.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOGIN_ROUTE": () => (/* binding */ LOGIN_ROUTE)
/* harmony export */ });
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ 9472);

const LOGIN_ROUTE = {
    path: '',
    component: _login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent,
    data: {
        pageTitle: 'login.title',
    },
};


/***/ })

}]);
//# sourceMappingURL=src_main_webapp_app_login_login_module_ts.js.map