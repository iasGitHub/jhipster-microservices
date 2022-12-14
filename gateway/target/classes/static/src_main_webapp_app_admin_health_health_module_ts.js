"use strict";
(self["webpackChunkgateway"] = self["webpackChunkgateway"] || []).push([["src_main_webapp_app_admin_health_health_module_ts"],{

/***/ 7116:
/*!**************************************************************!*\
  !*** ./src/main/webapp/app/admin/health/health.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthComponent": () => (/* binding */ HealthComponent)
/* harmony export */ });
/* harmony import */ var _modal_health_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal/health-modal.component */ 1479);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1960);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _health_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./health.service */ 7867);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 3013);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 5438);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/language/translate.directive */ 1995);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 9520);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__);








function HealthComponent_tbody_35_tr_2_a_14_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function HealthComponent_tbody_35_tr_2_a_14_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r6); const componentHealth_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]().$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["????resetView"](ctx_r4.showHealth({ key: componentHealth_r2.key, value: componentHealth_r2.value })); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
const _c0 = function () { return { UNKNOWN: "INCONNU", UP: "DISPONIBLE", OUT_OF_SERVICE: "OUT_OF_SERVICE", DOWN: "HORS SERVICE" }; };
function HealthComponent_tbody_35_tr_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](14, HealthComponent_tbody_35_tr_2_a_14_Template, 4, 0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const componentHealth_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("\n            ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](4, 5, "health.indicator." + componentHealth_r2.key), "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("jhiTranslate", "health.status." + componentHealth_r2.value.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", ctx_r1.getBadgeClass(componentHealth_r2.value.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("\n              ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](7, _c0)[componentHealth_r2.value.status || "UNKNOWN"], "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", componentHealth_r2.value.details);
} }
function HealthComponent_tbody_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, HealthComponent_tbody_35_tr_2_Template, 17, 8, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](3, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind1"](3, 1, ctx_r0.health.components));
} }
class HealthComponent {
    constructor(modalService, healthService) {
        this.modalService = modalService;
        this.healthService = healthService;
    }
    ngOnInit() {
        this.refresh();
    }
    getBadgeClass(statusState) {
        if (statusState === 'UP') {
            return 'bg-success';
        }
        return 'bg-danger';
    }
    refresh() {
        this.healthService.checkHealth().subscribe({
            next: health => (this.health = health),
            error: (error) => {
                if (error.status === 503) {
                    this.health = error.error;
                }
            },
        });
    }
    showHealth(health) {
        const modalRef = this.modalService.open(_modal_health_modal_component__WEBPACK_IMPORTED_MODULE_0__.HealthModalComponent);
        modalRef.componentInstance.health = health;
    }
}
HealthComponent.??fac = function HealthComponent_Factory(t) { return new (t || HealthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_health_service__WEBPACK_IMPORTED_MODULE_3__.HealthService)); };
HealthComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: HealthComponent, selectors: [["jhi-health"]], decls: 40, vars: 1, consts: [["id", "health-page-heading", "jhiTranslate", "health.title", "data-cy", "healthPageHeading"], [1, "btn", "btn-primary", "float-end", 3, "click"], ["icon", "sync"], ["jhiTranslate", "health.refresh.button"], [1, "table-responsive"], ["id", "healthCheck", "aria-describedby", "health-page-heading", 1, "table", "table-striped"], ["scope", "col", "jhiTranslate", "health.table.service"], ["scope", "col", "jhiTranslate", "health.table.status", 1, "text-center"], ["scope", "col", "jhiTranslate", "health.details.details", 1, "text-center"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "text-center"], [1, "badge", 3, "ngClass", "jhiTranslate"], ["class", "hand", 3, "click", 4, "ngIf"], [1, "hand", 3, "click"], ["icon", "eye"]], template: function HealthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5, "Diagnostics");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "\n\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function HealthComponent_Template_button_click_7_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](9, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "Rafra\u00EEchir");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25, "Nom du service");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](26, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, "\u00C9tat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](29, "\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](30, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, "D\u00E9tails");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](32, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](33, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](34, "\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](35, HealthComponent_tbody_35_Template, 5, 3, "tbody", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](36, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](37, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](39, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.health);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FaIconComponent, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_6__.TranslateDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.KeyValuePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 1473:
/*!***********************************************************!*\
  !*** ./src/main/webapp/app/admin/health/health.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthModule": () => (/* binding */ HealthModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 7658);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/shared.module */ 2267);
/* harmony import */ var _health_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./health.component */ 7116);
/* harmony import */ var _modal_health_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal/health-modal.component */ 1479);
/* harmony import */ var _health_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./health.route */ 2455);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_5__);







class HealthModule {
}
HealthModule.??fac = function HealthModule_Factory(t) { return new (t || HealthModule)(); };
HealthModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineNgModule"]({ type: HealthModule });
HealthModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjector"]({ imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild([_health_route__WEBPACK_IMPORTED_MODULE_4__.healthRoute])] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["????setNgModuleScope"](HealthModule, { declarations: [_health_component__WEBPACK_IMPORTED_MODULE_2__.HealthComponent, _modal_health_modal_component__WEBPACK_IMPORTED_MODULE_3__.HealthModalComponent], imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule] }); })();


/***/ }),

/***/ 2455:
/*!**********************************************************!*\
  !*** ./src/main/webapp/app/admin/health/health.route.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "healthRoute": () => (/* binding */ healthRoute)
/* harmony export */ });
/* harmony import */ var _health_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./health.component */ 7116);

const healthRoute = {
    path: '',
    component: _health_component__WEBPACK_IMPORTED_MODULE_0__.HealthComponent,
    data: {
        pageTitle: 'health.title',
    },
};


/***/ }),

/***/ 7867:
/*!************************************************************!*\
  !*** ./src/main/webapp/app/admin/health/health.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthService": () => (/* binding */ HealthService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 5482);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/config/application-config.service */ 1082);



class HealthService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
    }
    checkHealth() {
        return this.http.get(this.applicationConfigService.getEndpointFor('management/health'));
    }
}
HealthService.??fac = function HealthService_Factory(t) { return new (t || HealthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__.ApplicationConfigService)); };
HealthService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: HealthService, factory: HealthService.??fac, providedIn: 'root' });


/***/ }),

/***/ 1479:
/*!**************************************************************************!*\
  !*** ./src/main/webapp/app/admin/health/modal/health-modal.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthModalComponent": () => (/* binding */ HealthModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1960);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 3013);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/language/translate.directive */ 1995);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 9520);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__);





function HealthModalComponent_h4_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("\n    ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, "health.indicator." + ctx_r0.health.key), "\n  ");
} }
function HealthModalComponent_div_13_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const healthDetail_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](healthDetail_r3.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r2.readableValue(healthDetail_r3.value));
} }
function HealthModalComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h5", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Propri\u00E9t\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "\n\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Nom");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "Valeur");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, HealthModalComponent_div_13_tr_23_Template, 8, 2, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](24, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](24, 1, ctx_r1.health.value.details));
} }
class HealthModalComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
    readableValue(value) {
        var _a;
        if (((_a = this.health) === null || _a === void 0 ? void 0 : _a.key) === 'diskSpace') {
            // Should display storage space in an human readable unit
            const val = value / 1073741824;
            if (val > 1) {
                return `${val.toFixed(2)} GB`;
            }
            return `${(value / 1048576).toFixed(2)} MB`;
        }
        if (typeof value === 'object') {
            return JSON.stringify(value);
        }
        return String(value);
    }
    dismiss() {
        this.activeModal.dismiss();
    }
}
HealthModalComponent.??fac = function HealthModalComponent_Factory(t) { return new (t || HealthModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbActiveModal)); };
HealthModalComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HealthModalComponent, selectors: [["jhi-health-modal"]], decls: 22, vars: 2, consts: [[1, "modal-header"], ["class", "modal-title", "id", "showHealthLabel", 4, "ngIf"], ["aria-label", "Close", "data-dismiss", "modal", "type", "button", 1, "btn-close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", "pad"], [4, "ngIf"], [1, "modal-footer"], ["data-dismiss", "modal", "type", "button", 1, "btn", "btn-secondary", "float-start", 3, "click"], ["id", "showHealthLabel", 1, "modal-title"], ["jhiTranslate", "health.details.properties"], [1, "table-responsive"], ["aria-describedby", "showHealthLabel", 1, "table", "table-striped"], ["scope", "col", "jhiTranslate", "health.details.name", 1, "text-start"], ["scope", "col", "jhiTranslate", "health.details.value", 1, "text-start"], [4, "ngFor", "ngForOf"], [1, "text-start"]], template: function HealthModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, HealthModalComponent_h4_2_Template, 3, 3, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HealthModalComponent_Template_button_click_4_listener() { return ctx.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, HealthModalComponent_div_13_Template, 29, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HealthModalComponent_Template_button_click_18_listener() { return ctx.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Done");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.health);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.health);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_3__.TranslateDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__.KeyValuePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=src_main_webapp_app_admin_health_health_module_ts.js.map