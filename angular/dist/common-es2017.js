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
            const currentCurrency = _core_currencies__WEBPACK_IMPORTED_MODULE_0__.CURRENCY.find(currency => { var _a; return currency.currencyId === ((_a = this.optionsState.plannedOrders$.value[0]) === null || _a === void 0 ? void 0 : _a.currencyId); });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iby1wbGFubmVyLy4vYW5ndWxhci9zcmMvYXBwL21vZHVsZXMvb3B0aW9ucy9vcHRpb25zLmZhY2FkZS50cyIsIndlYnBhY2s6Ly9iby1wbGFubmVyLy4vYW5ndWxhci9zcmMvYXBwL21vZHVsZXMvb3B0aW9ucy9vcHRpb25zLnN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUd1QztBQUNVOzs7O0FBUTFDLE1BQU0sYUFBYTtJQUV4QixZQUNVLFNBQThCLEVBQzlCLFlBQTBCO1FBRDFCLGNBQVMsR0FBVCxTQUFTLENBQXFCO1FBQzlCLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBQ2hDLENBQUM7SUFFTDs7Ozs7O09BTUc7SUFDSCxnQkFBZ0I7O1FBQ2QsSUFBSSxDQUFDLFdBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLEtBQUssMENBQUUsTUFBTSxHQUFFO1lBQ25ELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFXLFFBQVEsQ0FBQztpQkFDdEMsSUFBSSxDQUNILHFEQUFLLEVBQUUsQ0FDUjtpQkFDQSxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUMxRDtRQUNELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDekQsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsbUJBQW1CLENBQUMsTUFBa0I7UUFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILFdBQVc7UUFDVCxnRkFBZ0Y7UUFDaEYsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFO1lBQy9CLE1BQU0sZUFBZSxHQUFHLDJEQUFhLENBQUMsUUFBUSxDQUFDLEVBQUUsV0FBQyxlQUFRLENBQUMsVUFBVSxNQUFLLFVBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsMENBQUUsVUFBVSxLQUFDLENBQUM7WUFDakksSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUNuQztRQUNELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUM7SUFDcEMsQ0FBQztJQUVPLFdBQVcsQ0FBQyxRQUFrQjtRQUNwQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDeEMsQ0FBQzs7MEVBcERVLGFBQWE7OEdBQWIsYUFBYSxXQUFiLGFBQWEsbUJBRlosTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVG1COztBQU9oQyxNQUFNLFlBQVk7SUFldkI7UUFkQTs7OztXQUlHO1FBQ0gsbUJBQWMsR0FBRyxJQUFJLGlEQUFlLENBQWEsRUFBRSxDQUFDLENBQUM7SUFTckMsQ0FBQzs7d0VBZk4sWUFBWTs2R0FBWixZQUFZLFdBQVosWUFBWSxtQkFGWCxNQUFNIiwiZmlsZSI6ImNvbW1vbi1lczIwMTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hJbmRleGVkREJTZXJ2aWNlIH0gZnJvbSAnbmd4LWluZGV4ZWQtZGInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlyc3QgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDVVJSRU5DWSB9IGZyb20gJy4uLy4uL2NvcmUvY3VycmVuY2llcyc7XG5pbXBvcnQgeyBDdXJyZW5jeSB9IGZyb20gJy4uLy4uL21vZGVscy9iYXNlLm1vZGVsJztcbmltcG9ydCB7IEJ1eU9yZGVyIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2J1eS1vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBPcHRpb25zU3RhdGUgfSBmcm9tICcuL29wdGlvbnMuc3RhdGUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBPcHRpb25zRmFjYWRlIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGRiU2VydmljZTogTmd4SW5kZXhlZERCU2VydmljZSxcbiAgICBwcml2YXRlIG9wdGlvbnNTdGF0ZTogT3B0aW9uc1N0YXRlLFxuICApIHsgfVxuXG4gIC8qKlxuICAgKiBNZXRob2QgcmV0dXJucyBgT2JzZXJ2YWJsZWAgd2l0aCBzdG9yZWQgcGxhbm5lZCBidXkgb3JkZXJzLiBJZiB0aGVyZSBhcmUgbm8gcGxhbm5lZCBvcmRlcnNcbiAgICogdGhlbiBpdCB3aWxsIGxvb2sgZm9yIHRoZW0gaW4gREIsIHN0b3JlIGFuZCByZXR1cm4gb2JzZXJ2YWJsZSB3aXRoIGJ1eSBvcmRlcnNcbiAgICpcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxCdXlPcmRlcltdPn0gYE9ic2VydmFibGVgIHdpdGggcGxhbm5lZCBidXkgb3JkZXJzXG4gICAqIEBtZW1iZXJvZiBPcHRpb25zRmFjYWRlXG4gICAqL1xuICBnZXRQbGFubmVkT3JkZXJzKCk6IE9ic2VydmFibGU8QnV5T3JkZXJbXT4ge1xuICAgIGlmICghdGhpcy5vcHRpb25zU3RhdGUucGxhbm5lZE9yZGVycyQudmFsdWU/Lmxlbmd0aCkge1xuICAgICAgdGhpcy5kYlNlcnZpY2UuZ2V0QWxsPEJ1eU9yZGVyPignb3JkZXJzJylcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgZmlyc3QoKSxcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKG9yZGVycyA9PiB0aGlzLnVwZGF0ZVBsYW5uZWRPcmRlcnMob3JkZXJzKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm9wdGlvbnNTdGF0ZS5wbGFubmVkT3JkZXJzJC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHBsYW5uZWQgYnV5IG9yZGVycyBpbiBzdGF0ZVxuICAgKlxuICAgKiBAcGFyYW0ge0J1eU9yZGVyW119IG9yZGVycyBPcmRlcnMgdG8gc3RvcmVcbiAgICogQG1lbWJlcm9mIE9wdGlvbnNGYWNhZGVcbiAgICovXG4gIHVwZGF0ZVBsYW5uZWRPcmRlcnMob3JkZXJzOiBCdXlPcmRlcltdKSB7XG4gICAgdGhpcy5vcHRpb25zU3RhdGUucGxhbm5lZE9yZGVycyQubmV4dChvcmRlcnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCBnZXRzIHVzZXJzIGN1cnJlbmN5IGJhc2VkIG9uIGZpcnN0IGFkZGVkIHBsYW5uZWQgb3JkZXJcbiAgICpcbiAgICogQHJldHVybiB7Q3VycmVuY3l9IFJldHVybnMgaW5mb3JtYXRpb24gYWJvdXQgdXNlcnMgY3VycmVuY3lcbiAgICogQG1lbWJlcm9mIE9wdGlvbnNGYWNhZGVcbiAgICovXG4gIGdldEN1cnJlbmN5KCkge1xuICAgIC8vIENoZWNraW5nIGlmIGN1cnJlbmN5IGlzIHN0b3JlZCBpbiBzdGF0ZS4gSWYgbm90IHRoZW4gdHJ5aW5nIHRvIGdldCBhbmQgc2V0IGl0XG4gICAgaWYgKCF0aGlzLm9wdGlvbnNTdGF0ZS5jdXJyZW5jeSkge1xuICAgICAgY29uc3QgY3VycmVudEN1cnJlbmN5ID0gQ1VSUkVOQ1kuZmluZChjdXJyZW5jeSA9PiBjdXJyZW5jeS5jdXJyZW5jeUlkID09PSB0aGlzLm9wdGlvbnNTdGF0ZS5wbGFubmVkT3JkZXJzJC52YWx1ZVswXT8uY3VycmVuY3lJZCk7XG4gICAgICB0aGlzLnNldEN1cnJlbmN5KGN1cnJlbnRDdXJyZW5jeSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm9wdGlvbnNTdGF0ZS5jdXJyZW5jeTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q3VycmVuY3koY3VycmVuY3k6IEN1cnJlbmN5KSB7XG4gICAgdGhpcy5vcHRpb25zU3RhdGUuY3VycmVuY3kgPSBjdXJyZW5jeTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDdXJyZW5jeSB9IGZyb20gJy4uLy4uL21vZGVscy9iYXNlLm1vZGVsJztcbmltcG9ydCB7IEJ1eU9yZGVyIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2J1eS1vcmRlci5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE9wdGlvbnNTdGF0ZSB7XG4gIC8qKlxuICAgKiBCZWhhdmlvciBTdWJqZWN0IHdoaWNoIHN0b3JlcyBwbGFubmVkIG9yZGVyc1xuICAgKlxuICAgKiBAbWVtYmVyb2YgT3B0aW9uc1N0YXRlXG4gICAqL1xuICBwbGFubmVkT3JkZXJzJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8QnV5T3JkZXJbXT4oW10pO1xuICAvKipcbiAgICogVXNlcnMgY3VycmVuY3lcbiAgICpcbiAgICogQHR5cGUge0N1cnJlbmN5fVxuICAgKiBAbWVtYmVyb2YgT3B0aW9uc1N0YXRlXG4gICAqL1xuICBjdXJyZW5jeTogQ3VycmVuY3k7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==