(self["webpackChunkbo_planner"] = self["webpackChunkbo_planner"] || []).push([["angular_src_app_modules_options_pages_options_stats_stats_module_ts"],{

/***/ 93:
/*!***********************************************!*\
  !*** ./angular/src/app/models/stats.model.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlannedOrderStats": function() { return /* binding */ PlannedOrderStats; }
/* harmony export */ });
class PlannedOrderStats {
    constructor() {
        this.totalOrders = 0;
        this.totalAmount = 0;
        this.totalPrice = 0;
        this.topItemsByAmount = [];
        this.topItemsByPrice = [];
        this.topItemsByTotalPrice = [];
    }
}


/***/ }),

/***/ 7974:
/*!*************************************************************************************!*\
  !*** ./angular/src/app/modules/options/pages/options/stats/stats-routing.module.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatsRoutingModule": function() { return /* binding */ StatsRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _stats_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stats.component */ 6035);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




const routes = [
    {
        path: '',
        component: _stats_component__WEBPACK_IMPORTED_MODULE_0__.StatsComponent,
    }
];
class StatsRoutingModule {
}
StatsRoutingModule.ɵfac = function StatsRoutingModule_Factory(t) { return new (t || StatsRoutingModule)(); };
StatsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: StatsRoutingModule });
StatsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](StatsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 6035:
/*!********************************************************************************!*\
  !*** ./angular/src/app/modules/options/pages/options/stats/stats.component.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatsComponent": function() { return /* binding */ StatsComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6782);
/* harmony import */ var _models_stats_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../models/stats.model */ 93);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _options_facade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../options.facade */ 847);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);






class StatsComponent {
    constructor(optionsFacade) {
        this.optionsFacade = optionsFacade;
        /**
         * Flag indicates if stats are ready for display
         *
         * @type {boolean}
         * @memberof StatsComponent
         */
        this.areStatsReady = false;
        /**
         * Stats for display
         *
         * @type {PlannedOrderStats}
         * @memberof StatsComponent
         */
        this.stats = new _models_stats_model__WEBPACK_IMPORTED_MODULE_0__.PlannedOrderStats();
        /**
         * Subject that is responsible for unsubscribing when component gets destroyed
         *
         * @private
         * @type {Subject<boolean>}
         * @memberof StatsComponent
         */
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    ngOnInit() {
        this.optionsFacade.getPlannedOrders()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$))
            .subscribe(orders => {
            this.createStats(orders);
            console.log(orders);
        });
    }
    ngOnDestroy() {
        // Completing subscriptions
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    createStats(orders) {
        this.stats.totalOrders = orders.length;
        for (const order of orders) {
            this.stats.totalAmount += order.amount;
            this.stats.totalPrice += order.amount * order.price;
        }
        this.stats.topItemsByAmount = orders.sort((a, b) => a.amount - b.amount);
        this.stats.topItemsByPrice = orders.sort((a, b) => a.price - b.price);
        this.stats.topItemsByPrice = orders.sort((a, b) => (a.price * a.amount) - (b.price * b.amount));
        // Fixing floating for price (Taking only 2 digits after comma)
        this.stats.totalPrice = +this.stats.totalPrice.toFixed(2);
        this.areStatsReady = true;
    }
}
StatsComponent.ɵfac = function StatsComponent_Factory(t) { return new (t || StatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_options_facade__WEBPACK_IMPORTED_MODULE_1__.OptionsFacade)); };
StatsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: StatsComponent, selectors: [["app-stats"]], decls: 147, vars: 6, consts: [[1, "flex", "flex-col", "justify-between", "lg:flex-row"], [1, "container", "mx-auto", "mb-10"], [1, "w-72", "bg-white", "max-w-xs", "mx-auto", "rounded-lg", "shadow-md", "hover:shadow-lg", "transition", "duration-500", "transform", "hover:scale-200"], [1, "py-5", "bg-red-400", "flex", "items-center", "justify-between", "rounded-t-lg"], [1, "mr-0", "text-white", "text-lg", "pl-5"], [1, "flex", "justify-center", "w-full", "px-5", "pt-3", "text-sm", "text-gray-400"], [1, "text-center"], [1, "pb-4", "text-3xl", "text-center"], [1, "w-72", "bg-white", "max-w-xs", "mx-auto", "rounded-lg", "shadow-md", "hover:shadow-lg", "transition", "duration-500", "transform", "hover:scale-100"], [1, "py-5", "bg-blue-400", "flex", "items-center", "justify-between", "rounded-t-lg"], [1, "py-5", "bg-purple-400", "flex", "items-center", "justify-between", "rounded-t-lg"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-10", "p-5"], [1, "container", "mx-auto", "bg-white", "shadow-xl"], [1, "w-11/12", "mx-auto"], [1, "bg-white", "mb-6"], [1, "py-4", "text-xl", "font-bold", "w-full", "text-center"], [1, "text-left", "w-full", "border-collapse"], [1, "py-4", "px-6", "bg-indigo-500", "font-bold", "uppercase", "text-sm", "text-white", "border-b", "border-grey-light"], [1, "py-4", "px-6", "text-center", "bg-indigo-500", "font-bold", "uppercase", "text-sm", "text-white", "border-b", "border-grey-light"], [1, "hover:bg-grey-lighter"], [1, "py-4", "px-6", "border-b", "border-grey-light"], [1, "py-4", "px-6", "text-center", "border-b", "border-grey-light"]], template: function StatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Planned orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Total added");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Planned amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Combined amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Planned expensees");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Combined required");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](31, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, " Highest amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, " ITEM");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, " AMOUNT");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Bible");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, " 11980 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "Blah");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, " 340 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Blah");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, " 901 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "Blah");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, " 11950 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "Blah");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, " 459 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, " Highest price per piece ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80, " ITEM");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82, " BUY PRICE");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86, "Bible");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88, " 11980 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91, "Blah");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](93, " 340 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](96, "Blah");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](98, " 901 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](101, "Blah");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](103, " 11950 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](106, "Blah");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](108, " 459 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](113, " Most expensive (amount x price) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](114, "table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](115, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](117, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](118, " ITEM");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](119, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](120, " TOTAL PRICE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](121, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](122, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](123, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](124, "Bible");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](125, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](126, " 11980 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](127, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](128, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](129, "Blah");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](130, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](131, " 340 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](132, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](133, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](134, "Blah");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](135, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](136, " 901 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](137, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](138, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](139, "Blah");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](140, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](141, " 11950 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](142, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](143, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](144, "Blah");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](145, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](146, " 459 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.stats.totalOrders);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.stats.totalAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](31, 3, ctx.stats.totalPrice, "1.2-2"), " EUR");
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DecimalPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0cy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 3812:
/*!*****************************************************************************!*\
  !*** ./angular/src/app/modules/options/pages/options/stats/stats.module.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatsModule": function() { return /* binding */ StatsModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _stats_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stats-routing.module */ 7974);
/* harmony import */ var _stats_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stats.component */ 6035);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




class StatsModule {
}
StatsModule.ɵfac = function StatsModule_Factory(t) { return new (t || StatsModule)(); };
StatsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: StatsModule });
StatsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _stats_routing_module__WEBPACK_IMPORTED_MODULE_0__.StatsRoutingModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](StatsModule, { declarations: [_stats_component__WEBPACK_IMPORTED_MODULE_1__.StatsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _stats_routing_module__WEBPACK_IMPORTED_MODULE_0__.StatsRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iby1wbGFubmVyLy4vYW5ndWxhci9zcmMvYXBwL21vZGVscy9zdGF0cy5tb2RlbC50cyIsIndlYnBhY2s6Ly9iby1wbGFubmVyLy4vYW5ndWxhci9zcmMvYXBwL21vZHVsZXMvb3B0aW9ucy9wYWdlcy9vcHRpb25zL3N0YXRzL3N0YXRzLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovL2JvLXBsYW5uZXIvLi9hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9vcHRpb25zL3BhZ2VzL29wdGlvbnMvc3RhdHMvc3RhdHMuY29tcG9uZW50LnRzIiwid2VicGFjazovL2JvLXBsYW5uZXIvLi9hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9vcHRpb25zL3BhZ2VzL29wdGlvbnMvc3RhdHMvc3RhdHMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vYm8tcGxhbm5lci8uL2FuZ3VsYXIvc3JjL2FwcC9tb2R1bGVzL29wdGlvbnMvcGFnZXMvb3B0aW9ucy9zdGF0cy9zdGF0cy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUVPLE1BQU0saUJBQWlCO0lBQTlCO1FBQ0ksZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFDeEIsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFDeEIsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixxQkFBZ0IsR0FBZSxFQUFFLENBQUM7UUFDbEMsb0JBQWUsR0FBZSxFQUFFLENBQUM7UUFDakMseUJBQW9CLEdBQWUsRUFBRSxDQUFDO0lBQzFDLENBQUM7Q0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JzRDtBQUNKOzs7QUFFbkQsTUFBTSxNQUFNLEdBQVc7SUFDbkI7UUFDSSxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSw0REFBYztLQUM1QjtDQUNKLENBQUM7QUFNSyxNQUFNLGtCQUFrQjs7b0ZBQWxCLGtCQUFrQjsrR0FBbEIsa0JBQWtCO21IQUhsQixDQUFDLGtFQUFxQixDQUFDLE1B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YXJCLDJEQUF5QztRQUF6Qyw2S0FBeUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDckM7QUFFYTtBQUNUOztBQVM1QyxNQUFNLFdBQVc7O3NFQUFYLFdBQVc7d0dBQVgsV0FBVzs0R0FOYjtZQUNQLHlEQUFZO1lBQ1oscUVBQWtCO1NBQ25CO21JQUdVLFdBQVcsbUJBRlAsNERBQWMsYUFIM0IseURBQVk7UUFDWixxRUFBa0IiLCJmaWxlIjoiYW5ndWxhcl9zcmNfYXBwX21vZHVsZXNfb3B0aW9uc19wYWdlc19vcHRpb25zX3N0YXRzX3N0YXRzX21vZHVsZV90cy1lczIwMTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXlPcmRlciB9IGZyb20gXCIuL2J1eS1vcmRlci5tb2RlbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYW5uZWRPcmRlclN0YXRzIHtcclxuICAgIHRvdGFsT3JkZXJzOiBudW1iZXIgPSAwO1xyXG4gICAgdG90YWxBbW91bnQ6IG51bWJlciA9IDA7XHJcbiAgICB0b3RhbFByaWNlOiBudW1iZXIgPSAwO1xyXG4gICAgdG9wSXRlbXNCeUFtb3VudDogQnV5T3JkZXJbXSA9IFtdO1xyXG4gICAgdG9wSXRlbXNCeVByaWNlOiBCdXlPcmRlcltdID0gW107XHJcbiAgICB0b3BJdGVtc0J5VG90YWxQcmljZTogQnV5T3JkZXJbXSA9IFtdO1xyXG59IiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBTdGF0c0NvbXBvbmVudCB9IGZyb20gJy4vc3RhdHMuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICcnLFxyXG4gICAgICAgIGNvbXBvbmVudDogU3RhdHNDb21wb25lbnQsXHJcbiAgICB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcclxuICAgIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdGF0c1JvdXRpbmdNb2R1bGUgeyB9XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEJ1eU9yZGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbW9kZWxzL2J1eS1vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBQbGFubmVkT3JkZXJTdGF0cyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL21vZGVscy9zdGF0cy5tb2RlbCc7XG5pbXBvcnQgeyBPcHRpb25zRmFjYWRlIH0gZnJvbSAnLi4vLi4vLi4vb3B0aW9ucy5mYWNhZGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc3RhdHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RhdHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdGF0cy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN0YXRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogRmxhZyBpbmRpY2F0ZXMgaWYgc3RhdHMgYXJlIHJlYWR5IGZvciBkaXNwbGF5XG4gICAqXG4gICAqIEB0eXBlIHtib29sZWFufVxuICAgKiBAbWVtYmVyb2YgU3RhdHNDb21wb25lbnRcbiAgICovXG4gIGFyZVN0YXRzUmVhZHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLyoqXG4gICAqIFN0YXRzIGZvciBkaXNwbGF5XG4gICAqXG4gICAqIEB0eXBlIHtQbGFubmVkT3JkZXJTdGF0c31cbiAgICogQG1lbWJlcm9mIFN0YXRzQ29tcG9uZW50XG4gICAqL1xuICBzdGF0czogUGxhbm5lZE9yZGVyU3RhdHMgPSBuZXcgUGxhbm5lZE9yZGVyU3RhdHMoKTtcbiAgLyoqXG4gICAqIFN1YmplY3QgdGhhdCBpcyByZXNwb25zaWJsZSBmb3IgdW5zdWJzY3JpYmluZyB3aGVuIGNvbXBvbmVudCBnZXRzIGRlc3Ryb3llZFxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAdHlwZSB7U3ViamVjdDxib29sZWFuPn1cbiAgICogQG1lbWJlcm9mIFN0YXRzQ29tcG9uZW50XG4gICAqL1xuICBwcml2YXRlIGRlc3Ryb3kkOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3QoKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBvcHRpb25zRmFjYWRlOiBPcHRpb25zRmFjYWRlLFxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMub3B0aW9uc0ZhY2FkZS5nZXRQbGFubmVkT3JkZXJzKClcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUob3JkZXJzID0+IHtcbiAgICAgICAgdGhpcy5jcmVhdGVTdGF0cyhvcmRlcnMpO1xuICAgICAgICBjb25zb2xlLmxvZyhvcmRlcnMpO1xuICAgICAgfSlcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIC8vIENvbXBsZXRpbmcgc3Vic2NyaXB0aW9uc1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVN0YXRzKG9yZGVyczogQnV5T3JkZXJbXSkge1xuICAgIHRoaXMuc3RhdHMudG90YWxPcmRlcnMgPSBvcmRlcnMubGVuZ3RoO1xuXG4gICAgZm9yIChjb25zdCBvcmRlciBvZiBvcmRlcnMpIHtcbiAgICAgIHRoaXMuc3RhdHMudG90YWxBbW91bnQgKz0gb3JkZXIuYW1vdW50O1xuICAgICAgdGhpcy5zdGF0cy50b3RhbFByaWNlICs9IG9yZGVyLmFtb3VudCAqIG9yZGVyLnByaWNlO1xuICAgIH1cblxuICAgIHRoaXMuc3RhdHMudG9wSXRlbXNCeUFtb3VudCA9IG9yZGVycy5zb3J0KChhLCBiKSA9PiBhLmFtb3VudCAtIGIuYW1vdW50KTtcbiAgICB0aGlzLnN0YXRzLnRvcEl0ZW1zQnlQcmljZSA9IG9yZGVycy5zb3J0KChhLCBiKSA9PiBhLnByaWNlIC0gYi5wcmljZSk7XG4gICAgdGhpcy5zdGF0cy50b3BJdGVtc0J5UHJpY2UgPSBvcmRlcnMuc29ydCgoYSwgYikgPT4gKGEucHJpY2UgKiBhLmFtb3VudCkgLSAoYi5wcmljZSAqIGIuYW1vdW50KSk7XG5cbiAgICAvLyBGaXhpbmcgZmxvYXRpbmcgZm9yIHByaWNlIChUYWtpbmcgb25seSAyIGRpZ2l0cyBhZnRlciBjb21tYSlcbiAgICB0aGlzLnN0YXRzLnRvdGFsUHJpY2UgPSArdGhpcy5zdGF0cy50b3RhbFByaWNlLnRvRml4ZWQoMik7XG5cbiAgICB0aGlzLmFyZVN0YXRzUmVhZHkgPSB0cnVlO1xuICB9XG59XG4iLCI8IS0tLT09PT09PT09PT09PT09PT09PT09PSBGSVJTVCBST1cgQ09OVEFJTklORyBUSEUgIFNUQVRTIENBUkQgU1RBUlRTIEhFUkUgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0tLT5cbjxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBsZzpmbGV4LXJvd1wiPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIG14LWF1dG8gbWItMTBcIj5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cInctNzIgYmctd2hpdGUgbWF4LXcteHMgbXgtYXV0byByb3VuZGVkLWxnIHNoYWRvdy1tZCBob3ZlcjpzaGFkb3ctbGcgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTIwMFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInB5LTUgYmctcmVkLTQwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcm91bmRlZC10LWxnXCI+XG4gICAgICAgIDxwIGNsYXNzPVwibXItMCB0ZXh0LXdoaXRlIHRleHQtbGcgcGwtNVwiPlBsYW5uZWQgb3JkZXJzPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgcHgtNSBwdC0zIHRleHQtc20gdGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICA8cCBjbGFzcz1cInRleHQtY2VudGVyXCI+VG90YWwgYWRkZWQ8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwIGNsYXNzPVwicGItNCB0ZXh0LTN4bCB0ZXh0LWNlbnRlclwiPnt7c3RhdHMudG90YWxPcmRlcnN9fTwvcD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBteC1hdXRvIG1iLTEwXCI+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJ3LTcyIGJnLXdoaXRlIG1heC13LXhzIG14LWF1dG8gcm91bmRlZC1sZyBzaGFkb3ctbWQgaG92ZXI6c2hhZG93LWxnIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDBcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJweS01IGJnLWJsdWUtNDAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiByb3VuZGVkLXQtbGdcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJtci0wIHRleHQtd2hpdGUgdGV4dC1sZyBwbC01XCI+UGxhbm5lZCBhbW91bnQ8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktY2VudGVyIHctZnVsbCBweC01IHB0LTMgdGV4dC1zbSB0ZXh0LWdyYXktNDAwXCI+XG4gICAgICAgIDxwIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5Db21iaW5lZCBhbW91bnQ8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwIGNsYXNzPVwicGItNCB0ZXh0LTN4bCB0ZXh0LWNlbnRlclwiPnt7c3RhdHMudG90YWxBbW91bnR9fTwvcD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBteC1hdXRvIG1iLTEwXCI+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJ3LTcyIGJnLXdoaXRlIG1heC13LXhzIG14LWF1dG8gcm91bmRlZC1sZyBzaGFkb3ctbWQgaG92ZXI6c2hhZG93LWxnIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDBcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJweS01IGJnLXB1cnBsZS00MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHJvdW5kZWQtdC1sZ1wiPlxuICAgICAgICA8cCBjbGFzcz1cIm1yLTAgdGV4dC13aGl0ZSB0ZXh0LWxnIHBsLTVcIj5QbGFubmVkIGV4cGVuc2VlczwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1jZW50ZXIgdy1mdWxsIHB4LTUgcHQtMyB0ZXh0LXNtIHRleHQtZ3JheS00MDBcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPkNvbWJpbmVkIHJlcXVpcmVkPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8cCBjbGFzcz1cInBiLTQgdGV4dC0zeGwgdGV4dC1jZW50ZXJcIj57e3N0YXRzLnRvdGFsUHJpY2UgfCBudW1iZXI6JzEuMi0yJ319IEVVUjwvcD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cImdyaWQgZ3JpZC1jb2xzLTEgbGc6Z3JpZC1jb2xzLTMgZ2FwLTEwIHAtNVwiPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIG14LWF1dG8gYmctd2hpdGUgc2hhZG93LXhsXCI+XG4gICAgPGRpdiBjbGFzcz1cInctMTEvMTIgbXgtYXV0b1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImJnLXdoaXRlIG1iLTZcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInB5LTQgdGV4dC14bCBmb250LWJvbGQgdy1mdWxsIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgSGlnaGVzdCBhbW91bnRcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx0YWJsZSBjbGFzcz1cInRleHQtbGVmdCB3LWZ1bGwgYm9yZGVyLWNvbGxhcHNlXCI+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGggY2xhc3M9XCJweS00IHB4LTYgYmctaW5kaWdvLTUwMCBmb250LWJvbGQgdXBwZXJjYXNlIHRleHQtc20gdGV4dC13aGl0ZSBib3JkZXItYiBib3JkZXItZ3JleS1saWdodFwiPlxuICAgICAgICAgICAgICAgIElURU08L3RoPlxuICAgICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgICBjbGFzcz1cInB5LTQgcHgtNiB0ZXh0LWNlbnRlciBiZy1pbmRpZ28tNTAwIGZvbnQtYm9sZCB1cHBlcmNhc2UgdGV4dC1zbSB0ZXh0LXdoaXRlIGJvcmRlci1iIGJvcmRlci1ncmV5LWxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgQU1PVU5UPC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICA8dHIgY2xhc3M9XCJob3ZlcjpiZy1ncmV5LWxpZ2h0ZXJcIj5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicHktNCBweC02IGJvcmRlci1iIGJvcmRlci1ncmV5LWxpZ2h0XCI+QmlibGU8L3RkPlxuICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJweS00IHB4LTYgdGV4dC1jZW50ZXIgYm9yZGVyLWIgYm9yZGVyLWdyZXktbGlnaHRcIj5cbiAgICAgICAgICAgICAgICAxMTk4MFxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0ciBjbGFzcz1cImhvdmVyOmJnLWdyZXktbGlnaHRlclwiPlxuICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJweS00IHB4LTYgYm9yZGVyLWIgYm9yZGVyLWdyZXktbGlnaHRcIj5CbGFoPC90ZD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicHktNCBweC02IHRleHQtY2VudGVyIGJvcmRlci1iIGJvcmRlci1ncmV5LWxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgMzQwXG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyIGNsYXNzPVwiaG92ZXI6YmctZ3JleS1saWdodGVyXCI+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInB5LTQgcHgtNiBib3JkZXItYiBib3JkZXItZ3JleS1saWdodFwiPkJsYWg8L3RkPlxuICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJweS00IHB4LTYgdGV4dC1jZW50ZXIgYm9yZGVyLWIgYm9yZGVyLWdyZXktbGlnaHRcIj5cbiAgICAgICAgICAgICAgICA5MDFcbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHIgY2xhc3M9XCJob3ZlcjpiZy1ncmV5LWxpZ2h0ZXJcIj5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicHktNCBweC02IGJvcmRlci1iIGJvcmRlci1ncmV5LWxpZ2h0XCI+QmxhaDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInB5LTQgcHgtNiB0ZXh0LWNlbnRlciBib3JkZXItYiBib3JkZXItZ3JleS1saWdodFwiPlxuICAgICAgICAgICAgICAgIDExOTUwXG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyIGNsYXNzPVwiaG92ZXI6YmctZ3JleS1saWdodGVyXCI+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInB5LTQgcHgtNiBib3JkZXItYiBib3JkZXItZ3JleS1saWdodFwiPkJsYWg8L3RkPlxuICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJweS00IHB4LTYgdGV4dC1jZW50ZXIgYm9yZGVyLWIgYm9yZGVyLWdyZXktbGlnaHRcIj5cbiAgICAgICAgICAgICAgICA0NTlcbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIG14LWF1dG8gYmctd2hpdGUgc2hhZG93LXhsXCI+XG4gICAgPGRpdiBjbGFzcz1cInctMTEvMTIgbXgtYXV0b1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImJnLXdoaXRlIG1iLTZcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInB5LTQgdGV4dC14bCBmb250LWJvbGQgdy1mdWxsIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgSGlnaGVzdCBwcmljZSBwZXIgcGllY2VcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDx0YWJsZSBjbGFzcz1cInRleHQtbGVmdCB3LWZ1bGwgYm9yZGVyLWNvbGxhcHNlXCI+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGggY2xhc3M9XCJweS00IHB4LTYgYmctaW5kaWdvLTUwMCBmb250LWJvbGQgdXBwZXJjYXNlIHRleHQtc20gdGV4dC13aGl0ZSBib3JkZXItYiBib3JkZXItZ3JleS1saWdodFwiPlxuICAgICAgICAgICAgICAgIElURU08L3RoPlxuICAgICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgICBjbGFzcz1cInB5LTQgcHgtNiB0ZXh0LWNlbnRlciBiZy1pbmRpZ28tNTAwIGZvbnQtYm9sZCB1cHBlcmNhc2UgdGV4dC1zbSB0ZXh0LXdoaXRlIGJvcmRlci1iIGJvcmRlci1ncmV5LWxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgQlVZIFBSSUNFPC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICA8dHIgY2xhc3M9XCJob3ZlcjpiZy1ncmV5LWxpZ2h0ZXJcIj5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicHktNCBweC02IGJvcmRlci1iIGJvcmRlci1ncmV5LWxpZ2h0XCI+QmlibGU8L3RkPlxuICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJweS00IHB4LTYgdGV4dC1jZW50ZXIgYm9yZGVyLWIgYm9yZGVyLWdyZXktbGlnaHRcIj5cbiAgICAgICAgICAgICAgICAxMTk4MFxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0ciBjbGFzcz1cImhvdmVyOmJnLWdyZXktbGlnaHRlclwiPlxuICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJweS00IHB4LTYgYm9yZGVyLWIgYm9yZGVyLWdyZXktbGlnaHRcIj5CbGFoPC90ZD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicHktNCBweC02IHRleHQtY2VudGVyIGJvcmRlci1iIGJvcmRlci1ncmV5LWxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgMzQwXG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyIGNsYXNzPVwiaG92ZXI6YmctZ3JleS1saWdodGVyXCI+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInB5LTQgcHgtNiBib3JkZXItYiBib3JkZXItZ3JleS1saWdodFwiPkJsYWg8L3RkPlxuICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJweS00IHB4LTYgdGV4dC1jZW50ZXIgYm9yZGVyLWIgYm9yZGVyLWdyZXktbGlnaHRcIj5cbiAgICAgICAgICAgICAgICA5MDFcbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHIgY2xhc3M9XCJob3ZlcjpiZy1ncmV5LWxpZ2h0ZXJcIj5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicHktNCBweC02IGJvcmRlci1iIGJvcmRlci1ncmV5LWxpZ2h0XCI+QmxhaDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInB5LTQgcHgtNiB0ZXh0LWNlbnRlciBib3JkZXItYiBib3JkZXItZ3JleS1saWdodFwiPlxuICAgICAgICAgICAgICAgIDExOTUwXG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyIGNsYXNzPVwiaG92ZXI6YmctZ3JleS1saWdodGVyXCI+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInB5LTQgcHgtNiBib3JkZXItYiBib3JkZXItZ3JleS1saWdodFwiPkJsYWg8L3RkPlxuICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJweS00IHB4LTYgdGV4dC1jZW50ZXIgYm9yZGVyLWIgYm9yZGVyLWdyZXktbGlnaHRcIj5cbiAgICAgICAgICAgICAgICA0NTlcbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIG14LWF1dG8gYmctd2hpdGUgc2hhZG93LXhsXCI+XG4gICAgPGRpdiBjbGFzcz1cInctMTEvMTIgbXgtYXV0b1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImJnLXdoaXRlIG1iLTZcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInB5LTQgdGV4dC14bCBmb250LWJvbGQgdy1mdWxsIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgTW9zdCBleHBlbnNpdmUgKGFtb3VudCB4IHByaWNlKVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHRhYmxlIGNsYXNzPVwidGV4dC1sZWZ0IHctZnVsbCBib3JkZXItY29sbGFwc2VcIj5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aCBjbGFzcz1cInB5LTQgcHgtNiBiZy1pbmRpZ28tNTAwIGZvbnQtYm9sZCB1cHBlcmNhc2UgdGV4dC1zbSB0ZXh0LXdoaXRlIGJvcmRlci1iIGJvcmRlci1ncmV5LWxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgSVRFTTwvdGg+XG4gICAgICAgICAgICAgIDx0aFxuICAgICAgICAgICAgICAgIGNsYXNzPVwicHktNCBweC02IHRleHQtY2VudGVyIGJnLWluZGlnby01MDAgZm9udC1ib2xkIHVwcGVyY2FzZSB0ZXh0LXNtIHRleHQtd2hpdGUgYm9yZGVyLWIgYm9yZGVyLWdyZXktbGlnaHRcIj5cbiAgICAgICAgICAgICAgICBUT1RBTCBQUklDRVxuICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIDx0ciBjbGFzcz1cImhvdmVyOmJnLWdyZXktbGlnaHRlclwiPlxuICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJweS00IHB4LTYgYm9yZGVyLWIgYm9yZGVyLWdyZXktbGlnaHRcIj5CaWJsZTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInB5LTQgcHgtNiB0ZXh0LWNlbnRlciBib3JkZXItYiBib3JkZXItZ3JleS1saWdodFwiPlxuICAgICAgICAgICAgICAgIDExOTgwXG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyIGNsYXNzPVwiaG92ZXI6YmctZ3JleS1saWdodGVyXCI+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInB5LTQgcHgtNiBib3JkZXItYiBib3JkZXItZ3JleS1saWdodFwiPkJsYWg8L3RkPlxuICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJweS00IHB4LTYgdGV4dC1jZW50ZXIgYm9yZGVyLWIgYm9yZGVyLWdyZXktbGlnaHRcIj5cbiAgICAgICAgICAgICAgICAzNDBcbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHIgY2xhc3M9XCJob3ZlcjpiZy1ncmV5LWxpZ2h0ZXJcIj5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicHktNCBweC02IGJvcmRlci1iIGJvcmRlci1ncmV5LWxpZ2h0XCI+QmxhaDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInB5LTQgcHgtNiB0ZXh0LWNlbnRlciBib3JkZXItYiBib3JkZXItZ3JleS1saWdodFwiPlxuICAgICAgICAgICAgICAgIDkwMVxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0ciBjbGFzcz1cImhvdmVyOmJnLWdyZXktbGlnaHRlclwiPlxuICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJweS00IHB4LTYgYm9yZGVyLWIgYm9yZGVyLWdyZXktbGlnaHRcIj5CbGFoPC90ZD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicHktNCBweC02IHRleHQtY2VudGVyIGJvcmRlci1iIGJvcmRlci1ncmV5LWxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgMTE5NTBcbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHIgY2xhc3M9XCJob3ZlcjpiZy1ncmV5LWxpZ2h0ZXJcIj5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicHktNCBweC02IGJvcmRlci1iIGJvcmRlci1ncmV5LWxpZ2h0XCI+QmxhaDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInB5LTQgcHgtNiB0ZXh0LWNlbnRlciBib3JkZXItYiBib3JkZXItZ3JleS1saWdodFwiPlxuICAgICAgICAgICAgICAgIDQ1OVxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG48IS0tLS0tLS0tLT09PT09PT09PT09PT09PT09PT09PSBTRUNPTkQgUk9XIENPTlRBSU5JTkcgVEhFIFRBQkxFIFNUQVRTIEVORFMgSEVSRSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PS0tPiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RhdHNSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9zdGF0cy1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBTdGF0c0NvbXBvbmVudCB9IGZyb20gJy4vc3RhdHMuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBTdGF0c1JvdXRpbmdNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1N0YXRzQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTdGF0c01vZHVsZSB7IH1cbiJdLCJzb3VyY2VSb290IjoiIn0=