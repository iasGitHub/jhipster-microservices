"use strict";
(self["webpackChunkgateway"] = self["webpackChunkgateway"] || []).push([["src_main_webapp_app_config_translation_config_ts"],{

/***/ 2952:
/*!**********************************************************!*\
  !*** ./src/main/webapp/app/config/translation.config.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MissingTranslationHandlerImpl": () => (/* binding */ MissingTranslationHandlerImpl),
/* harmony export */   "missingTranslationHandler": () => (/* binding */ missingTranslationHandler),
/* harmony export */   "translatePartialLoader": () => (/* binding */ translatePartialLoader),
/* harmony export */   "translationNotFoundMessage": () => (/* binding */ translationNotFoundMessage)
/* harmony export */ });
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-translate/http-loader */ 6222);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_0__);

const translationNotFoundMessage = 'translation-not-found';
class MissingTranslationHandlerImpl {
    handle(params) {
        const key = params.key;
        return `${translationNotFoundMessage}[${key}]`;
    }
}
function translatePartialLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_0__.TranslateHttpLoader(http, 'i18n/', `.json?_=${"caabdea95b79ceaa50697c7ce6ca354b"}`);
}
function missingTranslationHandler() {
    return new MissingTranslationHandlerImpl();
}


/***/ })

}]);
//# sourceMappingURL=src_main_webapp_app_config_translation_config_ts.js.map