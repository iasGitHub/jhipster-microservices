"use strict";
(self["webpackChunkgateway"] = self["webpackChunkgateway"] || []).push([["src_main_webapp_app_admin_configuration_configuration_module_ts"],{

/***/ 8966:
/*!****************************************************************************!*\
  !*** ./src/main/webapp/app/admin/configuration/configuration.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigurationComponent": () => (/* binding */ ConfigurationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _configuration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configuration.service */ 4651);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 9037);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 3013);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 5438);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/language/translate.directive */ 1995);
/* harmony import */ var _shared_sort_sort_by_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/sort/sort-by.directive */ 1408);
/* harmony import */ var _shared_sort_sort_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/sort/sort.directive */ 1427);








function ConfigurationComponent_div_0_tr_35_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "\n              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](9, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const property_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](property_r5.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](9, 2, property_r5.value));
} }
function ConfigurationComponent_div_0_tr_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, ConfigurationComponent_div_0_tr_35_div_10_Template, 12, 4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](11, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const bean_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](bean_r3.prefix);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](11, 2, bean_r3.properties));
} }
function ConfigurationComponent_div_0_div_39_tr_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const property_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](property_r9.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](property_r9.value.value);
} }
function ConfigurationComponent_div_0_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h4", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "\n\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "table", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Property");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, ConfigurationComponent_div_0_div_39_tr_24_Template, 11, 2, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](25, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const propertySource_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("id", "property-source-" + i_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](propertySource_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("aria-describedby", "property-source-" + i_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](25, 4, propertySource_r6.properties));
} }
function ConfigurationComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h2", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Configuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "\n\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Filtrer (par pr\u00E9fixe)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ConfigurationComponent_div_0_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r10.beansFilter = $event); })("ngModelChange", function ConfigurationComponent_div_0_Template_input_ngModelChange_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r12.filterAndSortBeans()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "\n\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Spring configuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "\n\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ascendingChange", function ConfigurationComponent_div_0_Template_tr_ascendingChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r13.beansAscending = $event); })("sortChange", function ConfigurationComponent_div_0_Template_tr_sortChange_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resetView"](ctx_r14.filterAndSortBeans()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Pr\u00E9fixe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "fa-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "th", 10)(28, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Propri\u00E9t\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](35, ConfigurationComponent_div_0_tr_35_Template, 14, 4, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "\n\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](39, ConfigurationComponent_div_0_div_39_Template, 29, 6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r0.beansFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ascending", ctx_r0.beansAscending);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r0.beans);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r0.propertySources);
} }
class ConfigurationComponent {
    constructor(configurationService) {
        this.configurationService = configurationService;
        this.beans = [];
        this.beansFilter = '';
        this.beansAscending = true;
        this.propertySources = [];
    }
    ngOnInit() {
        this.configurationService.getBeans().subscribe(beans => {
            this.allBeans = beans;
            this.filterAndSortBeans();
        });
        this.configurationService.getPropertySources().subscribe(propertySources => (this.propertySources = propertySources));
    }
    filterAndSortBeans() {
        const beansAscendingValue = this.beansAscending ? -1 : 1;
        const beansAscendingValueReverse = this.beansAscending ? 1 : -1;
        this.beans = this.allBeans
            .filter(bean => !this.beansFilter || bean.prefix.toLowerCase().includes(this.beansFilter.toLowerCase()))
            .sort((a, b) => (a.prefix < b.prefix ? beansAscendingValue : beansAscendingValueReverse));
    }
}
ConfigurationComponent.??fac = function ConfigurationComponent_Factory(t) { return new (t || ConfigurationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_configuration_service__WEBPACK_IMPORTED_MODULE_1__.ConfigurationService)); };
ConfigurationComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ConfigurationComponent, selectors: [["jhi-configuration"]], decls: 2, vars: 1, consts: [[4, "ngIf"], ["id", "configuration-page-heading", "jhiTranslate", "configuration.title", "data-cy", "configurationPageHeading"], ["jhiTranslate", "configuration.filter"], ["type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "spring-configuration"], ["aria-describedby", "spring-configuration", 1, "table", "table-striped", "table-bordered", "table-responsive", "d-table"], ["jhiSort", "", "predicate", "prefix", 3, "ascending", "ascendingChange", "sortChange"], ["jhiSortBy", "prefix", "scope", "col", 1, "w-40"], ["jhiTranslate", "configuration.table.prefix"], ["icon", "sort"], ["scope", "col", 1, "w-60"], ["jhiTranslate", "configuration.table.properties"], [4, "ngFor", "ngForOf"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-md-4"], [1, "col-md-8"], [1, "float-end", "bg-secondary", "break"], [3, "id"], [1, "table", "table-sm", "table-striped", "table-bordered", "table-responsive", "d-table"], ["scope", "col", 1, "w-40"], [1, "break"]], template: function ConfigurationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, ConfigurationComponent_div_0_Template, 41, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.allBeans);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FaIconComponent, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_5__.TranslateDirective, _shared_sort_sort_by_directive__WEBPACK_IMPORTED_MODULE_6__.SortByDirective, _shared_sort_sort_directive__WEBPACK_IMPORTED_MODULE_7__.SortDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.JsonPipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.KeyValuePipe], encapsulation: 2 });


/***/ }),

/***/ 5733:
/*!*************************************************************************!*\
  !*** ./src/main/webapp/app/admin/configuration/configuration.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigurationModule": () => (/* binding */ ConfigurationModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 7658);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/shared.module */ 2267);
/* harmony import */ var _configuration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configuration.component */ 8966);
/* harmony import */ var _configuration_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configuration.route */ 8941);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);






class ConfigurationModule {
}
ConfigurationModule.??fac = function ConfigurationModule_Factory(t) { return new (t || ConfigurationModule)(); };
ConfigurationModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({ type: ConfigurationModule });
ConfigurationModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({ imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild([_configuration_route__WEBPACK_IMPORTED_MODULE_3__.configurationRoute])] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](ConfigurationModule, { declarations: [_configuration_component__WEBPACK_IMPORTED_MODULE_2__.ConfigurationComponent], imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule] }); })();


/***/ }),

/***/ 8941:
/*!************************************************************************!*\
  !*** ./src/main/webapp/app/admin/configuration/configuration.route.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "configurationRoute": () => (/* binding */ configurationRoute)
/* harmony export */ });
/* harmony import */ var _configuration_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuration.component */ 8966);

const configurationRoute = {
    path: '',
    component: _configuration_component__WEBPACK_IMPORTED_MODULE_0__.ConfigurationComponent,
    data: {
        pageTitle: 'configuration.title',
    },
};


/***/ }),

/***/ 4651:
/*!**************************************************************************!*\
  !*** ./src/main/webapp/app/admin/configuration/configuration.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigurationService": () => (/* binding */ ConfigurationService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 2070);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 5482);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/config/application-config.service */ 1082);




class ConfigurationService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
    }
    getBeans() {
        return this.http.get(this.applicationConfigService.getEndpointFor('management/configprops')).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(configProps => Object.values(Object.values(configProps.contexts)
            .map(context => context.beans)
            .reduce((allBeans, contextBeans) => (Object.assign(Object.assign({}, allBeans), contextBeans))))));
    }
    getPropertySources() {
        return this.http.get(this.applicationConfigService.getEndpointFor('management/env')).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(env => env.propertySources));
    }
}
ConfigurationService.??fac = function ConfigurationService_Factory(t) { return new (t || ConfigurationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_3__.ApplicationConfigService)); };
ConfigurationService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({ token: ConfigurationService, factory: ConfigurationService.??fac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_main_webapp_app_admin_configuration_configuration_module_ts.js.map