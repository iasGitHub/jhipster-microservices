"use strict";
(self["webpackChunkgateway"] = self["webpackChunkgateway"] || []).push([["src_main_webapp_app_admin_admin-routing_module_ts"],{

/***/ 1097:
/*!***********************************************************!*\
  !*** ./src/main/webapp/app/admin/admin-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminRoutingModule": () => (/* binding */ AdminRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 7658);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);



/* jhipster-needle-add-admin-module-import - JHipster will add admin modules imports here */
class AdminRoutingModule {
}
AdminRoutingModule.ɵfac = function AdminRoutingModule_Factory(t) { return new (t || AdminRoutingModule)(); };
AdminRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AdminRoutingModule });
AdminRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [
        /* jhipster-needle-add-admin-module - JHipster will add admin modules here */
        _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild([
            {
                path: 'user-management',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-webpack_sharing_consume_default_app_config_pagination_constants_app_config_pagination-1c0dc0"), __webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_admin_user-management_user-management_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./user-management/user-management.module */ 8483)).then(m => m.UserManagementModule),
                data: {
                    pageTitle: 'userManagement.home.title',
                },
            },
            {
                path: 'docs',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_main_webapp_app_admin_docs_docs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./docs/docs.module */ 8159)).then(m => m.DocsModule),
            },
            {
                path: 'configuration',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_main_webapp_app_admin_configuration_configuration_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./configuration/configuration.module */ 5733)).then(m => m.ConfigurationModule),
            },
            {
                path: 'health',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_main_webapp_app_admin_health_health_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./health/health.module */ 1473)).then(m => m.HealthModule),
            },
            {
                path: 'logs',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_main_webapp_app_admin_logs_logs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./logs/logs.module */ 6371)).then(m => m.LogsModule),
            },
            {
                path: 'metrics',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_admin_metrics_metrics_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./metrics/metrics.module */ 7539)).then(m => m.MetricsModule),
            },
            {
                path: 'gateway',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_main_webapp_app_admin_gateway_gateway_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./gateway/gateway.module */ 4212)).then(m => m.GatewayModule),
            },
            /* jhipster-needle-add-admin-route - JHipster will add admin routes here */
        ])] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AdminRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_main_webapp_app_admin_admin-routing_module_ts.js.map