"use strict";
(self["webpackChunkgateway"] = self["webpackChunkgateway"] || []).push([["src_main_webapp_app_admin_logs_logs_module_ts"],{

/***/ 455:
/*!*****************************************************!*\
  !*** ./src/main/webapp/app/admin/logs/log.model.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Log": () => (/* binding */ Log)
/* harmony export */ });
class Log {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }
}


/***/ }),

/***/ 2106:
/*!**********************************************************!*\
  !*** ./src/main/webapp/app/admin/logs/logs.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogsComponent": () => (/* binding */ LogsComponent)
/* harmony export */ });
/* harmony import */ var _log_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log.model */ 455);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _logs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logs.service */ 6506);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 9037);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 3013);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 5438);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/language/translate.directive */ 1995);
/* harmony import */ var _shared_sort_sort_by_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/sort/sort-by.directive */ 1408);
/* harmony import */ var _shared_sort_sort_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/sort/sort.directive */ 1427);









function LogsComponent_div_0_tr_35_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipe"](6, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function LogsComponent_div_0_tr_35_Template_button_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r4); const logger_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["????resetView"](ctx_r3.changeLevel(logger_r2.name, "TRACE")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "\n            TRACE\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](13, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function LogsComponent_div_0_tr_35_Template_button_click_14_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r4); const logger_r2 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["????resetView"](ctx_r5.changeLevel(logger_r2.name, "DEBUG")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "\n            DEBUG\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function LogsComponent_div_0_tr_35_Template_button_click_17_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r4); const logger_r2 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["????resetView"](ctx_r6.changeLevel(logger_r2.name, "INFO")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "\n            INFO\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](19, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function LogsComponent_div_0_tr_35_Template_button_click_20_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r4); const logger_r2 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["????resetView"](ctx_r7.changeLevel(logger_r2.name, "WARN")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, "\n            WARN\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function LogsComponent_div_0_tr_35_Template_button_click_23_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r4); const logger_r2 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["????resetView"](ctx_r8.changeLevel(logger_r2.name, "ERROR")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "\n            ERROR\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25, "\n\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function LogsComponent_div_0_tr_35_Template_button_click_26_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r4); const logger_r2 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["????resetView"](ctx_r9.changeLevel(logger_r2.name, "OFF")); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, "\n            OFF\n          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](29, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const logger_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["????pipeBind3"](6, 7, logger_r2.name, 0, 140));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", logger_r2.level === "TRACE" ? "btn-primary" : "btn-light");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", logger_r2.level === "DEBUG" ? "btn-success" : "btn-light");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", logger_r2.level === "INFO" ? "btn-info" : "btn-light");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", logger_r2.level === "WARN" ? "btn-warning" : "btn-light");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", logger_r2.level === "ERROR" ? "btn-danger" : "btn-light");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", logger_r2.level === "OFF" ? "btn-secondary" : "btn-light");
} }
const _c0 = function (a0) { return { total: a0 }; };
function LogsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](3, "Logs");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4, "\n\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](7, "\n\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "Filtrer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](10, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function LogsComponent_div_0_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["????resetView"](ctx_r10.filter = $event); })("ngModelChange", function LogsComponent_div_0_Template_input_ngModelChange_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["????resetView"](ctx_r12.filterAndSort()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "\n\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("predicateChange", function LogsComponent_div_0_Template_tr_predicateChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["????resetView"](ctx_r13.orderProp = $event); })("ascendingChange", function LogsComponent_div_0_Template_tr_ascendingChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["????resetView"](ctx_r14.ascending = $event); })("sortChange", function LogsComponent_div_0_Template_tr_sortChange_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r11); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["????resetView"](ctx_r15.filterAndSort()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "th", 8)(20, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](21, "Nom");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](23, "fa-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "\n        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "th", 11)(26, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, "Niveau");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](29, "fa-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](31, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](32, "\n\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](34, "\n      ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](35, LogsComponent_div_0_tr_35_Template, 30, 11, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](36, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](37, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("translateValues", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](6, _c0, ctx_r0.loggers.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("Total de ", ctx_r0.loggers.length, " \"loggers\".");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModel", ctx_r0.filter);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("predicate", ctx_r0.orderProp)("ascending", ctx_r0.ascending);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx_r0.filteredAndOrderedLoggers);
} }
class LogsComponent {
    constructor(logsService) {
        this.logsService = logsService;
        this.filter = '';
        this.orderProp = 'name';
        this.ascending = true;
    }
    ngOnInit() {
        this.findAndExtractLoggers();
    }
    changeLevel(name, level) {
        this.logsService.changeLevel(name, level).subscribe(() => this.findAndExtractLoggers());
    }
    filterAndSort() {
        this.filteredAndOrderedLoggers = this.loggers.filter(logger => !this.filter || logger.name.toLowerCase().includes(this.filter.toLowerCase())).sort((a, b) => {
            if (a[this.orderProp] < b[this.orderProp]) {
                return this.ascending ? -1 : 1;
            }
            else if (a[this.orderProp] > b[this.orderProp]) {
                return this.ascending ? 1 : -1;
            }
            else if (this.orderProp === 'level') {
                return a.name < b.name ? -1 : 1;
            }
            return 0;
        });
    }
    findAndExtractLoggers() {
        this.logsService.findAll().subscribe((response) => {
            this.loggers = Object.entries(response.loggers).map(([key, logger]) => new _log_model__WEBPACK_IMPORTED_MODULE_0__.Log(key, logger.effectiveLevel));
            this.filterAndSort();
        });
    }
}
LogsComponent.??fac = function LogsComponent_Factory(t) { return new (t || LogsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_logs_service__WEBPACK_IMPORTED_MODULE_2__.LogsService)); };
LogsComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: LogsComponent, selectors: [["jhi-logs"]], decls: 2, vars: 1, consts: [["class", "table-responsive", 4, "ngIf"], [1, "table-responsive"], ["id", "logs-page-heading", "jhiTranslate", "logs.title", "data-cy", "logsPageHeading"], ["jhiTranslate", "logs.nbloggers", 3, "translateValues"], ["jhiTranslate", "logs.filter"], ["type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["aria-describedby", "logs-page-heading", 1, "table", "table-sm", "table-striped", "table-bordered"], ["jhiSort", "", 3, "predicate", "ascending", "predicateChange", "ascendingChange", "sortChange"], ["jhiSortBy", "name", "scope", "col"], ["jhiTranslate", "logs.table.name"], ["icon", "sort"], ["jhiSortBy", "level", "scope", "col"], ["jhiTranslate", "logs.table.level"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-sm", 3, "ngClass", "click"]], template: function LogsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](0, LogsComponent_div_0_Template, 39, 8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.loggers);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FaIconComponent, _shared_language_translate_directive__WEBPACK_IMPORTED_MODULE_6__.TranslateDirective, _shared_sort_sort_by_directive__WEBPACK_IMPORTED_MODULE_7__.SortByDirective, _shared_sort_sort_directive__WEBPACK_IMPORTED_MODULE_8__.SortDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.SlicePipe], encapsulation: 2 });


/***/ }),

/***/ 6371:
/*!*******************************************************!*\
  !*** ./src/main/webapp/app/admin/logs/logs.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogsModule": () => (/* binding */ LogsModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 7658);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/shared.module */ 2267);
/* harmony import */ var _logs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logs.component */ 2106);
/* harmony import */ var _logs_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logs.route */ 4294);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);






class LogsModule {
}
LogsModule.??fac = function LogsModule_Factory(t) { return new (t || LogsModule)(); };
LogsModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({ type: LogsModule });
LogsModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({ imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild([_logs_route__WEBPACK_IMPORTED_MODULE_3__.logsRoute])] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](LogsModule, { declarations: [_logs_component__WEBPACK_IMPORTED_MODULE_2__.LogsComponent], imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule] }); })();


/***/ }),

/***/ 4294:
/*!******************************************************!*\
  !*** ./src/main/webapp/app/admin/logs/logs.route.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logsRoute": () => (/* binding */ logsRoute)
/* harmony export */ });
/* harmony import */ var _logs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logs.component */ 2106);

const logsRoute = {
    path: '',
    component: _logs_component__WEBPACK_IMPORTED_MODULE_0__.LogsComponent,
    data: {
        pageTitle: 'logs.title',
    },
};


/***/ }),

/***/ 6506:
/*!********************************************************!*\
  !*** ./src/main/webapp/app/admin/logs/logs.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogsService": () => (/* binding */ LogsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 5482);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/config/application-config.service */ 1082);



class LogsService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
    }
    changeLevel(name, configuredLevel) {
        return this.http.post(this.applicationConfigService.getEndpointFor(`management/loggers/${name}`), { configuredLevel });
    }
    findAll() {
        return this.http.get(this.applicationConfigService.getEndpointFor('management/loggers'));
    }
}
LogsService.??fac = function LogsService_Factory(t) { return new (t || LogsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__.ApplicationConfigService)); };
LogsService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: LogsService, factory: LogsService.??fac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_main_webapp_app_admin_logs_logs_module_ts.js.map