(self["webpackChunkbo_planner"] = self["webpackChunkbo_planner"] || []).push([["common"],{

/***/ 847:
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
/* harmony import */ var _options_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options.state */ 235);





class OptionsFacade {
    constructor(dbService, optionsState) {
        this.dbService = dbService;
        this.optionsState = optionsState;
    }
    /**
     * Method returns `Observable` with stored planned buy orders. If there are no planned orders
     * then it will look for them in DB, store and return observable with buy orders
     *
     * @return {Observable<BuyOrder[]>} `Observable` with planned buy orders
     * @memberof OptionsFacade
     */
    getPlannedOrders() {
        var _a;
        if (!((_a = this.optionsState.plannedOrders$.value) === null || _a === void 0 ? void 0 : _a.length)) {
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

/***/ 235:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iby1wbGFubmVyLy4vYW5ndWxhci9zcmMvYXBwL21vZHVsZXMvb3B0aW9ucy9vcHRpb25zLmZhY2FkZS50cyIsIndlYnBhY2s6Ly9iby1wbGFubmVyLy4vYW5ndWxhci9zcmMvYXBwL21vZHVsZXMvb3B0aW9ucy9vcHRpb25zLnN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUd1QztBQUNVOzs7O0FBUTFDLE1BQU0sYUFBYTtJQUV4QixZQUNVLFNBQThCLEVBQzlCLFlBQTBCO1FBRDFCLGNBQVMsR0FBVCxTQUFTLENBQXFCO1FBQzlCLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBQ2hDLENBQUM7SUFFTDs7Ozs7O09BTUc7SUFDSCxnQkFBZ0I7O1FBQ2QsSUFBSSxDQUFDLFdBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLEtBQUssMENBQUUsTUFBTSxHQUFFO1lBQ25ELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFXLFFBQVEsQ0FBQztpQkFDdEMsSUFBSSxDQUNILHFEQUFLLEVBQUUsQ0FDUjtpQkFDQSxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUMxRDtRQUNELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDekQsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsbUJBQW1CLENBQUMsTUFBa0I7UUFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILFdBQVc7UUFDVCxnRkFBZ0Y7UUFDaEYsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFO1lBQy9CLE1BQU0sZUFBZSxHQUFHLDJEQUFhLENBQUMsUUFBUSxDQUFDLEVBQUUsV0FBQyxlQUFRLENBQUMsVUFBVSxLQUFLLENBQUMsV0FBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQywwQ0FBRSxVQUFVLEtBQUMsQ0FBQztZQUNsSSxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ25DO1FBQ0QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQztJQUNwQyxDQUFDO0lBRU8sV0FBVyxDQUFDLFFBQWtCO1FBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUN4QyxDQUFDOzswRUFwRFUsYUFBYTs4R0FBYixhQUFhLFdBQWIsYUFBYSxtQkFGWixNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUbUI7O0FBT2hDLE1BQU0sWUFBWTtJQWV2QjtRQWRBOzs7O1dBSUc7UUFDSCxtQkFBYyxHQUFHLElBQUksaURBQWUsQ0FBYSxFQUFFLENBQUMsQ0FBQztJQVNyQyxDQUFDOzt3RUFmTixZQUFZOzZHQUFaLFlBQVksV0FBWixZQUFZLG1CQUZYLE1BQU0iLCJmaWxlIjoiY29tbW9uLWVzMjAxNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neEluZGV4ZWREQlNlcnZpY2UgfSBmcm9tICduZ3gtaW5kZXhlZC1kYic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENVUlJFTkNZIH0gZnJvbSAnLi4vLi4vY29yZS9jdXJyZW5jaWVzJztcbmltcG9ydCB7IEN1cnJlbmN5IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Jhc2UubW9kZWwnO1xuaW1wb3J0IHsgQnV5T3JkZXIgfSBmcm9tICcuLi8uLi9tb2RlbHMvYnV5LW9yZGVyLm1vZGVsJztcbmltcG9ydCB7IE9wdGlvbnNTdGF0ZSB9IGZyb20gJy4vb3B0aW9ucy5zdGF0ZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE9wdGlvbnNGYWNhZGUge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZGJTZXJ2aWNlOiBOZ3hJbmRleGVkREJTZXJ2aWNlLFxuICAgIHByaXZhdGUgb3B0aW9uc1N0YXRlOiBPcHRpb25zU3RhdGUsXG4gICkgeyB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCByZXR1cm5zIGBPYnNlcnZhYmxlYCB3aXRoIHN0b3JlZCBwbGFubmVkIGJ1eSBvcmRlcnMuIElmIHRoZXJlIGFyZSBubyBwbGFubmVkIG9yZGVyc1xuICAgKiB0aGVuIGl0IHdpbGwgbG9vayBmb3IgdGhlbSBpbiBEQiwgc3RvcmUgYW5kIHJldHVybiBvYnNlcnZhYmxlIHdpdGggYnV5IG9yZGVyc1xuICAgKlxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPEJ1eU9yZGVyW10+fSBgT2JzZXJ2YWJsZWAgd2l0aCBwbGFubmVkIGJ1eSBvcmRlcnNcbiAgICogQG1lbWJlcm9mIE9wdGlvbnNGYWNhZGVcbiAgICovXG4gIGdldFBsYW5uZWRPcmRlcnMoKTogT2JzZXJ2YWJsZTxCdXlPcmRlcltdPiB7XG4gICAgaWYgKCF0aGlzLm9wdGlvbnNTdGF0ZS5wbGFubmVkT3JkZXJzJC52YWx1ZT8ubGVuZ3RoKSB7XG4gICAgICB0aGlzLmRiU2VydmljZS5nZXRBbGw8QnV5T3JkZXI+KCdvcmRlcnMnKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBmaXJzdCgpLFxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUob3JkZXJzID0+IHRoaXMudXBkYXRlUGxhbm5lZE9yZGVycyhvcmRlcnMpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMub3B0aW9uc1N0YXRlLnBsYW5uZWRPcmRlcnMkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgcGxhbm5lZCBidXkgb3JkZXJzIGluIHN0YXRlXG4gICAqXG4gICAqIEBwYXJhbSB7QnV5T3JkZXJbXX0gb3JkZXJzIE9yZGVycyB0byBzdG9yZVxuICAgKiBAbWVtYmVyb2YgT3B0aW9uc0ZhY2FkZVxuICAgKi9cbiAgdXBkYXRlUGxhbm5lZE9yZGVycyhvcmRlcnM6IEJ1eU9yZGVyW10pIHtcbiAgICB0aGlzLm9wdGlvbnNTdGF0ZS5wbGFubmVkT3JkZXJzJC5uZXh0KG9yZGVycyk7XG4gIH1cblxuICAvKipcbiAgICogTWV0aG9kIGdldHMgdXNlcnMgY3VycmVuY3kgYmFzZWQgb24gZmlyc3QgYWRkZWQgcGxhbm5lZCBvcmRlclxuICAgKlxuICAgKiBAcmV0dXJuIHtDdXJyZW5jeX0gUmV0dXJucyBpbmZvcm1hdGlvbiBhYm91dCB1c2VycyBjdXJyZW5jeVxuICAgKiBAbWVtYmVyb2YgT3B0aW9uc0ZhY2FkZVxuICAgKi9cbiAgZ2V0Q3VycmVuY3koKSB7XG4gICAgLy8gQ2hlY2tpbmcgaWYgY3VycmVuY3kgaXMgc3RvcmVkIGluIHN0YXRlLiBJZiBub3QgdGhlbiB0cnlpbmcgdG8gZ2V0IGFuZCBzZXQgaXRcbiAgICBpZiAoIXRoaXMub3B0aW9uc1N0YXRlLmN1cnJlbmN5KSB7XG4gICAgICBjb25zdCBjdXJyZW50Q3VycmVuY3kgPSBDVVJSRU5DWS5maW5kKGN1cnJlbmN5ID0+IGN1cnJlbmN5LmN1cnJlbmN5SWQgPT09ICt0aGlzLm9wdGlvbnNTdGF0ZS5wbGFubmVkT3JkZXJzJC52YWx1ZVswXT8uY3VycmVuY3lJZCk7XG4gICAgICB0aGlzLnNldEN1cnJlbmN5KGN1cnJlbnRDdXJyZW5jeSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm9wdGlvbnNTdGF0ZS5jdXJyZW5jeTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q3VycmVuY3koY3VycmVuY3k6IEN1cnJlbmN5KSB7XG4gICAgdGhpcy5vcHRpb25zU3RhdGUuY3VycmVuY3kgPSBjdXJyZW5jeTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDdXJyZW5jeSB9IGZyb20gJy4uLy4uL21vZGVscy9iYXNlLm1vZGVsJztcbmltcG9ydCB7IEJ1eU9yZGVyIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2J1eS1vcmRlci5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE9wdGlvbnNTdGF0ZSB7XG4gIC8qKlxuICAgKiBCZWhhdmlvciBTdWJqZWN0IHdoaWNoIHN0b3JlcyBwbGFubmVkIG9yZGVyc1xuICAgKlxuICAgKiBAbWVtYmVyb2YgT3B0aW9uc1N0YXRlXG4gICAqL1xuICBwbGFubmVkT3JkZXJzJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8QnV5T3JkZXJbXT4oW10pO1xuICAvKipcbiAgICogVXNlcnMgY3VycmVuY3lcbiAgICpcbiAgICogQHR5cGUge0N1cnJlbmN5fVxuICAgKiBAbWVtYmVyb2YgT3B0aW9uc1N0YXRlXG4gICAqL1xuICBjdXJyZW5jeTogQ3VycmVuY3k7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==