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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iby1wbGFubmVyLy4vYW5ndWxhci9zcmMvYXBwL21vZHVsZXMvb3B0aW9ucy9vcHRpb25zLmZhY2FkZS50cyIsIndlYnBhY2s6Ly9iby1wbGFubmVyLy4vYW5ndWxhci9zcmMvYXBwL21vZHVsZXMvb3B0aW9ucy9vcHRpb25zLnN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUd1QztBQUNVOzs7O0FBUTFDLE1BQU0sYUFBYTtJQUV4QixZQUNVLFNBQThCLEVBQzlCLFlBQTBCO1FBRDFCLGNBQVMsR0FBVCxTQUFTLENBQXFCO1FBQzlCLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBQ2hDLENBQUM7SUFFTDs7Ozs7OztPQU9HO0lBQ0gsZ0JBQWdCLENBQUMsS0FBZTs7UUFDOUIsSUFBSSxLQUFLLElBQUksQ0FBQyxXQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxLQUFLLDBDQUFFLE1BQU0sR0FBRTtZQUM1RCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBVyxRQUFRLENBQUM7aUJBQ3RDLElBQUksQ0FDSCxxREFBSyxFQUFFLENBQ1I7aUJBQ0EsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDMUQ7UUFDRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pELENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILG1CQUFtQixDQUFDLE1BQWtCO1FBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxXQUFXO1FBQ1QsZ0ZBQWdGO1FBQ2hGLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRTtZQUMvQixNQUFNLGVBQWUsR0FBRywyREFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFdBQUMsZUFBUSxDQUFDLFVBQVUsS0FBSyxDQUFDLFdBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsMENBQUUsVUFBVSxLQUFDLENBQUM7WUFDbEksSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUNuQztRQUNELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUM7SUFDcEMsQ0FBQztJQUVPLFdBQVcsQ0FBQyxRQUFrQjtRQUNwQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDeEMsQ0FBQzs7MEVBckRVLGFBQWE7OEdBQWIsYUFBYSxXQUFiLGFBQWEsbUJBRlosTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVG1COztBQU9oQyxNQUFNLFlBQVk7SUFldkI7UUFkQTs7OztXQUlHO1FBQ0gsbUJBQWMsR0FBRyxJQUFJLGlEQUFlLENBQWEsRUFBRSxDQUFDLENBQUM7SUFTckMsQ0FBQzs7d0VBZk4sWUFBWTs2R0FBWixZQUFZLFdBQVosWUFBWSxtQkFGWCxNQUFNIiwiZmlsZSI6ImNvbW1vbi1lczIwMTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hJbmRleGVkREJTZXJ2aWNlIH0gZnJvbSAnbmd4LWluZGV4ZWQtZGInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDVVJSRU5DWSB9IGZyb20gJy4uLy4uL2NvcmUvY3VycmVuY2llcyc7XG5pbXBvcnQgeyBDdXJyZW5jeSB9IGZyb20gJy4uLy4uL21vZGVscy9iYXNlLm1vZGVsJztcbmltcG9ydCB7IEJ1eU9yZGVyIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2J1eS1vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBPcHRpb25zU3RhdGUgfSBmcm9tICcuL29wdGlvbnMuc3RhdGUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBPcHRpb25zRmFjYWRlIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGRiU2VydmljZTogTmd4SW5kZXhlZERCU2VydmljZSxcbiAgICBwcml2YXRlIG9wdGlvbnNTdGF0ZTogT3B0aW9uc1N0YXRlLFxuICApIHsgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgcmV0dXJucyBgT2JzZXJ2YWJsZWAgd2l0aCBzdG9yZWQgcGxhbm5lZCBidXkgb3JkZXJzLiBJZiB0aGVyZSBhcmUgbm8gcGxhbm5lZCBvcmRlcnNcbiAgICogdGhlbiBpdCB3aWxsIGxvb2sgZm9yIHRoZW0gaW4gREIsIHN0b3JlIGFuZCByZXR1cm4gb2JzZXJ2YWJsZSB3aXRoIGJ1eSBvcmRlcnNcbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSBbZm9yY2VdIEluZGljYXRlcyBpZiByZXF1ZXN0IHRvIERCIHNob3VsZCBiZSBmb3JjZWQgaW5zdGVhZCBvZiB1c2luZyBzdG9yZWQgdmFsdWVzXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8QnV5T3JkZXJbXT59IGBPYnNlcnZhYmxlYCB3aXRoIHBsYW5uZWQgYnV5IG9yZGVyc1xuICAgKiBAbWVtYmVyb2YgT3B0aW9uc0ZhY2FkZVxuICAgKi9cbiAgZ2V0UGxhbm5lZE9yZGVycyhmb3JjZT86IGJvb2xlYW4pOiBPYnNlcnZhYmxlPEJ1eU9yZGVyW10+IHtcbiAgICBpZiAoZm9yY2UgfHwgIXRoaXMub3B0aW9uc1N0YXRlLnBsYW5uZWRPcmRlcnMkLnZhbHVlPy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZGJTZXJ2aWNlLmdldEFsbDxCdXlPcmRlcj4oJ29yZGVycycpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGZpcnN0KCksXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZShvcmRlcnMgPT4gdGhpcy51cGRhdGVQbGFubmVkT3JkZXJzKG9yZGVycykpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5vcHRpb25zU3RhdGUucGxhbm5lZE9yZGVycyQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyBwbGFubmVkIGJ1eSBvcmRlcnMgaW4gc3RhdGVcbiAgICpcbiAgICogQHBhcmFtIHtCdXlPcmRlcltdfSBvcmRlcnMgT3JkZXJzIHRvIHN0b3JlXG4gICAqIEBtZW1iZXJvZiBPcHRpb25zRmFjYWRlXG4gICAqL1xuICB1cGRhdGVQbGFubmVkT3JkZXJzKG9yZGVyczogQnV5T3JkZXJbXSkge1xuICAgIHRoaXMub3B0aW9uc1N0YXRlLnBsYW5uZWRPcmRlcnMkLm5leHQob3JkZXJzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgZ2V0cyB1c2VycyBjdXJyZW5jeSBiYXNlZCBvbiBmaXJzdCBhZGRlZCBwbGFubmVkIG9yZGVyXG4gICAqXG4gICAqIEByZXR1cm4ge0N1cnJlbmN5fSBSZXR1cm5zIGluZm9ybWF0aW9uIGFib3V0IHVzZXJzIGN1cnJlbmN5XG4gICAqIEBtZW1iZXJvZiBPcHRpb25zRmFjYWRlXG4gICAqL1xuICBnZXRDdXJyZW5jeSgpIHtcbiAgICAvLyBDaGVja2luZyBpZiBjdXJyZW5jeSBpcyBzdG9yZWQgaW4gc3RhdGUuIElmIG5vdCB0aGVuIHRyeWluZyB0byBnZXQgYW5kIHNldCBpdFxuICAgIGlmICghdGhpcy5vcHRpb25zU3RhdGUuY3VycmVuY3kpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRDdXJyZW5jeSA9IENVUlJFTkNZLmZpbmQoY3VycmVuY3kgPT4gY3VycmVuY3kuY3VycmVuY3lJZCA9PT0gK3RoaXMub3B0aW9uc1N0YXRlLnBsYW5uZWRPcmRlcnMkLnZhbHVlWzBdPy5jdXJyZW5jeUlkKTtcbiAgICAgIHRoaXMuc2V0Q3VycmVuY3koY3VycmVudEN1cnJlbmN5KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMub3B0aW9uc1N0YXRlLmN1cnJlbmN5O1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDdXJyZW5jeShjdXJyZW5jeTogQ3VycmVuY3kpIHtcbiAgICB0aGlzLm9wdGlvbnNTdGF0ZS5jdXJyZW5jeSA9IGN1cnJlbmN5O1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEN1cnJlbmN5IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2Jhc2UubW9kZWwnO1xuaW1wb3J0IHsgQnV5T3JkZXIgfSBmcm9tICcuLi8uLi9tb2RlbHMvYnV5LW9yZGVyLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgT3B0aW9uc1N0YXRlIHtcbiAgLyoqXG4gICAqIEJlaGF2aW9yIFN1YmplY3Qgd2hpY2ggc3RvcmVzIHBsYW5uZWQgb3JkZXJzXG4gICAqXG4gICAqIEBtZW1iZXJvZiBPcHRpb25zU3RhdGVcbiAgICovXG4gIHBsYW5uZWRPcmRlcnMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxCdXlPcmRlcltdPihbXSk7XG4gIC8qKlxuICAgKiBVc2VycyBjdXJyZW5jeVxuICAgKlxuICAgKiBAdHlwZSB7Q3VycmVuY3l9XG4gICAqIEBtZW1iZXJvZiBPcHRpb25zU3RhdGVcbiAgICovXG4gIGN1cnJlbmN5OiBDdXJyZW5jeTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9