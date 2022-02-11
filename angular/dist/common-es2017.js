(self["webpackChunkbo_planner"] = self["webpackChunkbo_planner"] || []).push([["common"],{

/***/ 4847:
/*!***********************************************************!*\
  !*** ./angular/src/app/modules/options/options.facade.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptionsFacade": function() { return /* binding */ OptionsFacade; }
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8049);
/* harmony import */ var _core_currencies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/currencies */ 869);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var ngx_indexed_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-indexed-db */ 5465);
/* harmony import */ var _options_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options.state */ 9235);





class OptionsFacade {
    constructor(dbService, optionsState) {
        this.dbService = dbService;
        this.optionsState = optionsState;
    }
    /**
     * Method returns `Observable` with stored planned buy orders. If there are no planned orders
     * then it will look for them in DB, store and return observable with buy orders
     *
     * @param {boolean} [force] Indicates if request to DB should be forced instead of using stored values
     * @return {Observable<BuyOrder[]>} `Observable` with planned buy orders
     * @memberof OptionsFacade
     */
    getPlannedOrders(force) {
        var _a;
        if (force || !((_a = this.optionsState.plannedOrders$.value) === null || _a === void 0 ? void 0 : _a.length)) {
            this.dbService.getAll('orders')
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.first)())
                .subscribe(orders => this.updatePlannedOrders(orders));
        }
        return this.optionsState.plannedOrders$.asObservable();
    }
    /**
     * Updates planned buy orders in state
     *
     * @param {BuyOrder[]} orders Orders to store
     * @memberof OptionsFacade
     */
    updatePlannedOrders(orders) {
        this.optionsState.plannedOrders$.next(orders);
    }
    /**
     * Method gets users currency based on first added planned order
     *
     * @return {Currency} Returns information about users currency
     * @memberof OptionsFacade
     */
    getCurrency() {
        // Checking if currency is stored in state. If not then trying to get and set it
        if (!this.optionsState.currency) {
            const currentCurrency = _core_currencies__WEBPACK_IMPORTED_MODULE_0__.CURRENCY.find(currency => { var _a; return currency.currencyId === +((_a = this.optionsState.plannedOrders$.value[0]) === null || _a === void 0 ? void 0 : _a.currencyId); });
            this.setCurrency(currentCurrency);
        }
        return this.optionsState.currency;
    }
    setCurrency(currency) {
        this.optionsState.currency = currency;
    }
}
OptionsFacade.ɵfac = function OptionsFacade_Factory(t) { return new (t || OptionsFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](ngx_indexed_db__WEBPACK_IMPORTED_MODULE_4__.NgxIndexedDBService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_options_state__WEBPACK_IMPORTED_MODULE_1__.OptionsState)); };
OptionsFacade.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: OptionsFacade, factory: OptionsFacade.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9235:
/*!**********************************************************!*\
  !*** ./angular/src/app/modules/options/options.state.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptionsState": function() { return /* binding */ OptionsState; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


class OptionsState {
    constructor() {
        /**
         * Behavior Subject which stores planned orders
         *
         * @memberof OptionsState
         */
        this.plannedOrders$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    }
}
OptionsState.ɵfac = function OptionsState_Factory(t) { return new (t || OptionsState)(); };
OptionsState.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OptionsState, factory: OptionsState.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common-es2017.js.map