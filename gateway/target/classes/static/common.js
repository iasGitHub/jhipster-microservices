"use strict";
(self["webpackChunkgateway"] = self["webpackChunkgateway"] || []).push([["common"],{

/***/ 9586:
/*!************************************************************!*\
  !*** ./src/main/webapp/app/config/navigation.constants.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ASC": () => (/* binding */ ASC),
/* harmony export */   "DEFAULT_SORT_DATA": () => (/* binding */ DEFAULT_SORT_DATA),
/* harmony export */   "DESC": () => (/* binding */ DESC),
/* harmony export */   "ITEM_DELETED_EVENT": () => (/* binding */ ITEM_DELETED_EVENT),
/* harmony export */   "SORT": () => (/* binding */ SORT)
/* harmony export */ });
const ASC = 'asc';
const DESC = 'desc';
const SORT = 'sort';
const ITEM_DELETED_EVENT = 'deleted';
const DEFAULT_SORT_DATA = 'defaultSort';


/***/ }),

/***/ 5929:
/*!**********************************************************!*\
  !*** ./src/main/webapp/app/core/request/request-util.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRequestOption": () => (/* binding */ createRequestOption)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 5482);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__);

const createRequestOption = (req) => {
    let options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams();
    if (req) {
        Object.keys(req).forEach(key => {
            if (key !== 'sort' && req[key] && req[key] !== '') {
                options = options.set(key, req[key]);
            }
        });
        if (req.sort) {
            req.sort.forEach((val) => {
                options = options.append('sort', val);
            });
        }
    }
    return options;
};


/***/ }),

/***/ 6037:
/*!****************************************************!*\
  !*** ./src/main/webapp/app/core/util/operators.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterNaN": () => (/* binding */ filterNaN),
/* harmony export */   "isPresent": () => (/* binding */ isPresent)
/* harmony export */ });
/*
 * Function used to workaround https://github.com/microsoft/TypeScript/issues/16069
 * es2019 alternative `const filteredArr = myArr.flatMap((x) => x ? x : []);`
 */
function isPresent(t) {
    return t !== undefined && t !== null;
}
const filterNaN = (input) => (isNaN(input) ? 0 : input);


/***/ }),

/***/ 6551:
/*!**************************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/gestionReferentiel/entreprise/service/entreprise.service.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntrepriseService": () => (/* binding */ EntrepriseService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 2070);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_esm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs/esm */ 1157);
/* harmony import */ var app_core_util_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/util/operators */ 6037);
/* harmony import */ var app_config_input_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/config/input.constants */ 5717);
/* harmony import */ var app_config_input_constants__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(app_config_input_constants__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var app_core_request_request_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/core/request/request-util */ 5929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 704);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 5482);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/core/config/application-config.service */ 1082);








class EntrepriseService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        this.resourceUrl = this.applicationConfigService.getEndpointFor('api/entreprises', 'gestionreferentiel');
    }
    create(entreprise) {
        const copy = this.convertDateFromClient(entreprise);
        return this.http
            .post(this.resourceUrl, copy, { observe: 'response' })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(res => this.convertResponseFromServer(res)));
    }
    update(entreprise) {
        const copy = this.convertDateFromClient(entreprise);
        return this.http
            .put(`${this.resourceUrl}/${this.getEntrepriseIdentifier(entreprise)}`, copy, { observe: 'response' })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(res => this.convertResponseFromServer(res)));
    }
    partialUpdate(entreprise) {
        const copy = this.convertDateFromClient(entreprise);
        return this.http
            .patch(`${this.resourceUrl}/${this.getEntrepriseIdentifier(entreprise)}`, copy, { observe: 'response' })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(res => this.convertResponseFromServer(res)));
    }
    find(id) {
        return this.http
            .get(`${this.resourceUrl}/${id}`, { observe: 'response' })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(res => this.convertResponseFromServer(res)));
    }
    query(req) {
        const options = (0,app_core_request_request_util__WEBPACK_IMPORTED_MODULE_4__.createRequestOption)(req);
        return this.http
            .get(this.resourceUrl, { params: options, observe: 'response' })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(res => this.convertResponseArrayFromServer(res)));
    }
    delete(id) {
        return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    getEntrepriseIdentifier(entreprise) {
        return entreprise.id;
    }
    compareEntreprise(o1, o2) {
        return o1 && o2 ? this.getEntrepriseIdentifier(o1) === this.getEntrepriseIdentifier(o2) : o1 === o2;
    }
    addEntrepriseToCollectionIfMissing(entrepriseCollection, ...entreprisesToCheck) {
        const entreprises = entreprisesToCheck.filter(app_core_util_operators__WEBPACK_IMPORTED_MODULE_2__.isPresent);
        if (entreprises.length > 0) {
            const entrepriseCollectionIdentifiers = entrepriseCollection.map(entrepriseItem => this.getEntrepriseIdentifier(entrepriseItem));
            const entreprisesToAdd = entreprises.filter(entrepriseItem => {
                const entrepriseIdentifier = this.getEntrepriseIdentifier(entrepriseItem);
                if (entrepriseCollectionIdentifiers.includes(entrepriseIdentifier)) {
                    return false;
                }
                entrepriseCollectionIdentifiers.push(entrepriseIdentifier);
                return true;
            });
            return [...entreprisesToAdd, ...entrepriseCollection];
        }
        return entrepriseCollection;
    }
    convertDateFromClient(entreprise) {
        var _a, _b;
        return Object.assign(Object.assign({}, entreprise), { dateCreation: (_b = (_a = entreprise.dateCreation) === null || _a === void 0 ? void 0 : _a.format(app_config_input_constants__WEBPACK_IMPORTED_MODULE_3__.DATE_FORMAT)) !== null && _b !== void 0 ? _b : null });
    }
    convertDateFromServer(restEntreprise) {
        return Object.assign(Object.assign({}, restEntreprise), { dateCreation: restEntreprise.dateCreation ? (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_1__["default"])(restEntreprise.dateCreation) : undefined });
    }
    convertResponseFromServer(res) {
        return res.clone({
            body: res.body ? this.convertDateFromServer(res.body) : null,
        });
    }
    convertResponseArrayFromServer(res) {
        return res.clone({
            body: res.body ? res.body.map(item => this.convertDateFromServer(item)) : null,
        });
    }
}
EntrepriseService.ɵfac = function EntrepriseService_Factory(t) { return new (t || EntrepriseService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_7__.ApplicationConfigService)); };
EntrepriseService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: EntrepriseService, factory: EntrepriseService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map