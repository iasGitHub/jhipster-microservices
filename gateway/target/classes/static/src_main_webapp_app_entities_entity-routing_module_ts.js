"use strict";
(self["webpackChunkgateway"] = self["webpackChunkgateway"] || []).push([["src_main_webapp_app_entities_entity-routing_module_ts"],{

/***/ 1094:
/*!***************************************************************!*\
  !*** ./src/main/webapp/app/entities/entity-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntityRoutingModule": () => (/* binding */ EntityRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 7658);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);



class EntityRoutingModule {
}
EntityRoutingModule.ɵfac = function EntityRoutingModule_Factory(t) { return new (t || EntityRoutingModule)(); };
EntityRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: EntityRoutingModule });
EntityRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule.forChild([
            {
                path: 'type-source-financement',
                data: { pageTitle: 'gatewayApp.gestionReferentielTypeSourceFinancement.home.title' },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-webpack_sharing_consume_default_app_config_pagination_constants_app_config_pagination-1c0dc0"), __webpack_require__.e("default-webpack_sharing_consume_default_app_config_input_constants_app_config_input_constants"), __webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_gestionReferentiel_type-source-financement_type-source-financeme-3f2325")]).then(__webpack_require__.bind(__webpack_require__, /*! ./gestionReferentiel/type-source-financement/type-source-financement.module */ 384)).then(m => m.GestionReferentielTypeSourceFinancementModule),
            },
            {
                path: 'entreprise',
                data: { pageTitle: 'gatewayApp.gestionReferentielEntreprise.home.title' },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-webpack_sharing_consume_default_app_config_pagination_constants_app_config_pagination-1c0dc0"), __webpack_require__.e("default-webpack_sharing_consume_default_app_config_input_constants_app_config_input_constants"), __webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_gestionReferentiel_entreprise_entreprise_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./gestionReferentiel/entreprise/entreprise.module */ 3041)).then(m => m.GestionReferentielEntrepriseModule),
            },
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EntityRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_main_webapp_app_entities_entity-routing_module_ts.js.map