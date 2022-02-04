(self["webpackChunkbo_planner"] = self["webpackChunkbo_planner"] || []).push([["angular_src_app_modules_options_pages_options_stats_stats_module_ts"],{

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class StatsComponent {
    constructor() { }
    ngOnInit() {
    }
}
StatsComponent.ɵfac = function StatsComponent_Factory(t) { return new (t || StatsComponent)(); };
StatsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatsComponent, selectors: [["app-stats"]], decls: 146, vars: 0, consts: [[1, "flex", "flex-col", "justify-between", "lg:flex-row"], [1, "container", "mx-auto", "mb-10"], [1, "w-72", "bg-white", "max-w-xs", "mx-auto", "rounded-lg", "shadow-md", "hover:shadow-lg", "transition", "duration-500", "transform", "hover:scale-200"], [1, "py-5", "bg-red-400", "flex", "items-center", "justify-between", "rounded-t-lg"], [1, "mr-0", "text-white", "text-lg", "pl-5"], [1, "flex", "justify-center", "w-full", "px-5", "pt-3", "text-sm", "text-gray-400"], [1, "text-center"], [1, "pb-4", "text-3xl", "text-center"], [1, "w-72", "bg-white", "max-w-xs", "mx-auto", "rounded-lg", "shadow-md", "hover:shadow-lg", "transition", "duration-500", "transform", "hover:scale-100"], [1, "py-5", "bg-blue-400", "flex", "items-center", "justify-between", "rounded-t-lg"], [1, "py-5", "bg-purple-400", "flex", "items-center", "justify-between", "rounded-t-lg"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-10", "p-5"], [1, "container", "mx-auto", "bg-white", "shadow-xl"], [1, "w-11/12", "mx-auto"], [1, "bg-white", "mb-6"], [1, "py-4", "text-xl", "font-bold", "w-full", "text-center"], [1, "text-left", "w-full", "border-collapse"], [1, "py-4", "px-6", "bg-indigo-500", "font-bold", "uppercase", "text-sm", "text-white", "border-b", "border-grey-light"], [1, "py-4", "px-6", "text-center", "bg-indigo-500", "font-bold", "uppercase", "text-sm", "text-white", "border-b", "border-grey-light"], [1, "hover:bg-grey-lighter"], [1, "py-4", "px-6", "border-b", "border-grey-light"], [1, "py-4", "px-6", "text-center", "border-b", "border-grey-light"]], template: function StatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Planned orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Total added");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "140");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Planned amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Combined amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "43242");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Planned expensees");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Combined required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "1403.20 EUR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Highest amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " ITEM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " AMOUNT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Bible");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " 11980 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Blah");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " 340 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Blah");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " 901 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Blah");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " 11950 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Blah");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " 459 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Highest price per piece ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " ITEM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " BUY PRICE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Bible");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " 11980 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Blah");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " 340 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Blah");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " 901 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Blah");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " 11950 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Blah");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " 459 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Most expensive (amount x price) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " ITEM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " TOTAL PRICE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Bible");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " 11980 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Blah");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " 340 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Blah");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " 901 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Blah");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " 11950 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Blah");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " 459 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0cy5jb21wb25lbnQuc2NzcyJ9 */"] });


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iby1wbGFubmVyLy4vYW5ndWxhci9zcmMvYXBwL21vZHVsZXMvb3B0aW9ucy9wYWdlcy9vcHRpb25zL3N0YXRzL3N0YXRzLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovL2JvLXBsYW5uZXIvLi9hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9vcHRpb25zL3BhZ2VzL29wdGlvbnMvc3RhdHMvc3RhdHMuY29tcG9uZW50LnRzIiwid2VicGFjazovL2JvLXBsYW5uZXIvLi9hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9vcHRpb25zL3BhZ2VzL29wdGlvbnMvc3RhdHMvc3RhdHMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vYm8tcGxhbm5lci8uL2FuZ3VsYXIvc3JjL2FwcC9tb2R1bGVzL29wdGlvbnMvcGFnZXMvb3B0aW9ucy9zdGF0cy9zdGF0cy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUN1RDtBQUNKOzs7QUFFbkQsTUFBTSxNQUFNLEdBQVc7SUFDbkI7UUFDSSxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSw0REFBYztLQUM1QjtDQUNKLENBQUM7QUFNSyxNQUFNLGtCQUFrQjs7b0ZBQWxCLGtCQUFrQjsrR0FBbEIsa0JBQWtCO21IQUhsQixDQUFDLGtFQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQzlCLHlEQUFZO21JQUViLGtCQUFrQixvRkFGakIseURBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05uQixNQUFNLGNBQWM7SUFFekIsZ0JBQWdCLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7OzRFQUxVLGNBQWM7NEdBQWQsY0FBYztRQ04zQix5RUFBdUQ7UUFDckQseUVBQXFDO1FBQ25DLHlFQUNnSTtRQUM5SCx5RUFBNEU7UUFDMUUsdUVBQXdDO1FBQUEseUVBQWM7UUFBQSw0REFBSTtRQUM1RCw0REFBTTtRQUNOLHlFQUF3RTtRQUN0RSx1RUFBdUI7UUFBQSxzRUFB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UUFDUiw0REFBTTtRQUNSLDREQUFNO1FBQ1IsNERBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFNeUM7QUFFYTtBQUNUOztBQVM1QyxNQUFNLFdBQVc7O3NFQUFYLFdBQVc7d0dBQVgsV0FBVzs0R0FOYjtZQUNQLHlEQUFZO1lBQ1oscUVBQWtCO1NBQ25CO21JQUdVLFdBQVcsbUJBRlAsNERBQWMsYUFIM0IseURBQVk7UUFDWixxRUFBa0IiLCJmaWxlIjoiYW5ndWxhcl9zcmNfYXBwX21vZHVsZXNfb3B0aW9uc19wYWdlc19vcHRpb25zX3N0YXRzX3N0YXRzX21vZHVsZV90cy1lczIwMTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFN0YXRzQ29tcG9uZW50IH0gZnJvbSAnLi9zdGF0cy5jb21wb25lbnQnO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJycsXHJcbiAgICAgICAgY29tcG9uZW50OiBTdGF0c0NvbXBvbmVudCxcclxuICAgIH1cclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxyXG4gICAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFN0YXRzUm91dGluZ01vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXN0YXRzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0YXRzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3RhdHMuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdGF0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCI8IS0tLT09PT09PT09PT09PT09PT09PT09PSBGSVJTVCBST1cgQ09OVEFJTklORyBUSEUgIFNUQVRTIENBUkQgU1RBUlRTIEhFUkUgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0tLT5cbjxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBsZzpmbGV4LXJvd1wiPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIG14LWF1dG8gbWItMTBcIj5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cInctNzIgYmctd2hpdGUgbWF4LXcteHMgbXgtYXV0byByb3VuZGVkLWxnIHNoYWRvdy1tZCBob3ZlcjpzaGFkb3ctbGcgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTIwMFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInB5LTUgYmctcmVkLTQwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcm91bmRlZC10LWxnXCI+XG4gICAgICAgIDxwIGNsYXNzPVwibXItMCB0ZXh0LXdoaXRlIHRleHQtbGcgcGwtNVwiPlBsYW5uZWQgb3JkZXJzPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgcHgtNSBwdC0zIHRleHQtc20gdGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICA8cCBjbGFzcz1cInRleHQtY2VudGVyXCI+VG90YWwgYWRkZWQ8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwIGNsYXNzPVwicGItNCB0ZXh0LTN4bCB0ZXh0LWNlbnRlclwiPjE0MDwvcD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBteC1hdXRvIG1iLTEwXCI+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJ3LTcyIGJnLXdoaXRlIG1heC13LXhzIG14LWF1dG8gcm91bmRlZC1sZyBzaGFkb3ctbWQgaG92ZXI6c2hhZG93LWxnIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDBcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJweS01IGJnLWJsdWUtNDAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiByb3VuZGVkLXQtbGdcIj5cbiAgICAgICAgPHAgY2xhc3M9XCJtci0wIHRleHQtd2hpdGUgdGV4dC1sZyBwbC01XCI+UGxhbm5lZCBhbW91bnQ8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktY2VudGVyIHctZnVsbCBweC01IHB0LTMgdGV4dC1zbSB0ZXh0LWdyYXktNDAwXCI+XG4gICAgICAgIDxwIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5Db21iaW5lZCBhbW91bnQ8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwIGNsYXNzPVwicGItNCB0ZXh0LTN4bCB0ZXh0LWNlbnRlclwiPjQzMjQyPC9wPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIG14LWF1dG8gbWItMTBcIj5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cInctNzIgYmctd2hpdGUgbWF4LXcteHMgbXgtYXV0byByb3VuZGVkLWxnIHNoYWRvdy1tZCBob3ZlcjpzaGFkb3ctbGcgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEwMFwiPlxuICAgICAgPGRpdiBjbGFzcz1cInB5LTUgYmctcHVycGxlLTQwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcm91bmRlZC10LWxnXCI+XG4gICAgICAgIDxwIGNsYXNzPVwibXItMCB0ZXh0LXdoaXRlIHRleHQtbGcgcGwtNVwiPlBsYW5uZWQgZXhwZW5zZWVzPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgcHgtNSBwdC0zIHRleHQtc20gdGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICA8cCBjbGFzcz1cInRleHQtY2VudGVyXCI+Q29tYmluZWQgcmVxdWlyZWQ8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxwIGNsYXNzPVwicGItNCB0ZXh0LTN4bCB0ZXh0LWNlbnRlclwiPjE0MDMuMjAgRVVSPC9wPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiZ3JpZCBncmlkLWNvbHMtMSBsZzpncmlkLWNvbHMtMyBnYXAtMTAgcC01XCI+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIgbXgtYXV0byBiZy13aGl0ZSBzaGFkb3cteGxcIj5cbiAgICA8ZGl2IGNsYXNzPVwidy0xMS8xMiBteC1hdXRvXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYmctd2hpdGUgbWItNlwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHktNCB0ZXh0LXhsIGZvbnQtYm9sZCB3LWZ1bGwgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICBIaWdoZXN0IGFtb3VudFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHRhYmxlIGNsYXNzPVwidGV4dC1sZWZ0IHctZnVsbCBib3JkZXItY29sbGFwc2VcIj5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aCBjbGFzcz1cInB5LTQgcHgtNiBiZy1pbmRpZ28tNTAwIGZvbnQtYm9sZCB1cHBlcmNhc2UgdGV4dC1zbSB0ZXh0LXdoaXRlIGJvcmRlci1iIGJvcmRlci1ncmV5LWxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgSVRFTTwvdGg+XG4gICAgICAgICAgICAgIDx0aFxuICAgICAgICAgICAgICAgIGNsYXNzPVwicHktNCBweC02IHRleHQtY2VudGVyIGJnLWluZGlnby01MDAgZm9udC1ib2xkIHVwcGVyY2FzZSB0ZXh0LXNtIHRleHQtd2hpdGUgYm9yZGVyLWIgYm9yZGVyLWdyZXktbGlnaHRcIj5cbiAgICAgICAgICAgICAgICBBTU9VTlQ8L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIDx0ciBjbGFzcz1cImhvdmVyOmJnLWdyZXktbGlnaHRlclwiPlxuICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJweS00IHB4LTYgYm9yZGVyLWIgYm9yZGVyLWdyZXktbGlnaHRcIj5CaWJsZTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInB5LTQgcHgtNiB0ZXh0LWNlbnRlciBib3JkZXItYiBib3JkZXItZ3JleS1saWdodFwiPlxuICAgICAgICAgICAgICAgIDExOTgwXG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyIGNsYXNzPVwiaG92ZXI6YmctZ3JleS1saWdodGVyXCI+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInB5LTQgcHgtNiBib3JkZXItYiBib3JkZXItZ3JleS1saWdodFwiPkJsYWg8L3RkPlxuICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJweS00IHB4LTYgdGV4dC1jZW50ZXIgYm9yZGVyLWIgYm9yZGVyLWdyZXktbGlnaHRcIj5cbiAgICAgICAgICAgICAgICAzNDBcbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHIgY2xhc3M9XCJob3ZlcjpiZy1ncmV5LWxpZ2h0ZXJcIj5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicHktNCBweC02IGJvcmRlci1iIGJvcmRlci1ncmV5LWxpZ2h0XCI+QmxhaDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInB5LTQgcHgtNiB0ZXh0LWNlbnRlciBib3JkZXItYiBib3JkZXItZ3JleS1saWdodFwiPlxuICAgICAgICAgICAgICAgIDkwMVxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0ciBjbGFzcz1cImhvdmVyOmJnLWdyZXktbGlnaHRlclwiPlxuICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJweS00IHB4LTYgYm9yZGVyLWIgYm9yZGVyLWdyZXktbGlnaHRcIj5CbGFoPC90ZD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicHktNCBweC02IHRleHQtY2VudGVyIGJvcmRlci1iIGJvcmRlci1ncmV5LWxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgMTE5NTBcbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHIgY2xhc3M9XCJob3ZlcjpiZy1ncmV5LWxpZ2h0ZXJcIj5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicHktNCBweC02IGJvcmRlci1iIGJvcmRlci1ncmV5LWxpZ2h0XCI+QmxhaDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInB5LTQgcHgtNiB0ZXh0LWNlbnRlciBib3JkZXItYiBib3JkZXItZ3JleS1saWdodFwiPlxuICAgICAgICAgICAgICAgIDQ1OVxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIgbXgtYXV0byBiZy13aGl0ZSBzaGFkb3cteGxcIj5cbiAgICA8ZGl2IGNsYXNzPVwidy0xMS8xMiBteC1hdXRvXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYmctd2hpdGUgbWItNlwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHktNCB0ZXh0LXhsIGZvbnQtYm9sZCB3LWZ1bGwgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICBIaWdoZXN0IHByaWNlIHBlciBwaWVjZVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHRhYmxlIGNsYXNzPVwidGV4dC1sZWZ0IHctZnVsbCBib3JkZXItY29sbGFwc2VcIj5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0aCBjbGFzcz1cInB5LTQgcHgtNiBiZy1pbmRpZ28tNTAwIGZvbnQtYm9sZCB1cHBlcmNhc2UgdGV4dC1zbSB0ZXh0LXdoaXRlIGJvcmRlci1iIGJvcmRlci1ncmV5LWxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgSVRFTTwvdGg+XG4gICAgICAgICAgICAgIDx0aFxuICAgICAgICAgICAgICAgIGNsYXNzPVwicHktNCBweC02IHRleHQtY2VudGVyIGJnLWluZGlnby01MDAgZm9udC1ib2xkIHVwcGVyY2FzZSB0ZXh0LXNtIHRleHQtd2hpdGUgYm9yZGVyLWIgYm9yZGVyLWdyZXktbGlnaHRcIj5cbiAgICAgICAgICAgICAgICBCVVkgUFJJQ0U8L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIDx0ciBjbGFzcz1cImhvdmVyOmJnLWdyZXktbGlnaHRlclwiPlxuICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJweS00IHB4LTYgYm9yZGVyLWIgYm9yZGVyLWdyZXktbGlnaHRcIj5CaWJsZTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInB5LTQgcHgtNiB0ZXh0LWNlbnRlciBib3JkZXItYiBib3JkZXItZ3JleS1saWdodFwiPlxuICAgICAgICAgICAgICAgIDExOTgwXG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyIGNsYXNzPVwiaG92ZXI6YmctZ3JleS1saWdodGVyXCI+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInB5LTQgcHgtNiBib3JkZXItYiBib3JkZXItZ3JleS1saWdodFwiPkJsYWg8L3RkPlxuICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJweS00IHB4LTYgdGV4dC1jZW50ZXIgYm9yZGVyLWIgYm9yZGVyLWdyZXktbGlnaHRcIj5cbiAgICAgICAgICAgICAgICAzNDBcbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHIgY2xhc3M9XCJob3ZlcjpiZy1ncmV5LWxpZ2h0ZXJcIj5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicHktNCBweC02IGJvcmRlci1iIGJvcmRlci1ncmV5LWxpZ2h0XCI+QmxhaDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInB5LTQgcHgtNiB0ZXh0LWNlbnRlciBib3JkZXItYiBib3JkZXItZ3JleS1saWdodFwiPlxuICAgICAgICAgICAgICAgIDkwMVxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0ciBjbGFzcz1cImhvdmVyOmJnLWdyZXktbGlnaHRlclwiPlxuICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJweS00IHB4LTYgYm9yZGVyLWIgYm9yZGVyLWdyZXktbGlnaHRcIj5CbGFoPC90ZD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicHktNCBweC02IHRleHQtY2VudGVyIGJvcmRlci1iIGJvcmRlci1ncmV5LWxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgMTE5NTBcbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHIgY2xhc3M9XCJob3ZlcjpiZy1ncmV5LWxpZ2h0ZXJcIj5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicHktNCBweC02IGJvcmRlci1iIGJvcmRlci1ncmV5LWxpZ2h0XCI+QmxhaDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInB5LTQgcHgtNiB0ZXh0LWNlbnRlciBib3JkZXItYiBib3JkZXItZ3JleS1saWdodFwiPlxuICAgICAgICAgICAgICAgIDQ1OVxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIgbXgtYXV0byBiZy13aGl0ZSBzaGFkb3cteGxcIj5cbiAgICA8ZGl2IGNsYXNzPVwidy0xMS8xMiBteC1hdXRvXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYmctd2hpdGUgbWItNlwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHktNCB0ZXh0LXhsIGZvbnQtYm9sZCB3LWZ1bGwgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICBNb3N0IGV4cGVuc2l2ZSAoYW1vdW50IHggcHJpY2UpXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dGFibGUgY2xhc3M9XCJ0ZXh0LWxlZnQgdy1mdWxsIGJvcmRlci1jb2xsYXBzZVwiPlxuICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoIGNsYXNzPVwicHktNCBweC02IGJnLWluZGlnby01MDAgZm9udC1ib2xkIHVwcGVyY2FzZSB0ZXh0LXNtIHRleHQtd2hpdGUgYm9yZGVyLWIgYm9yZGVyLWdyZXktbGlnaHRcIj5cbiAgICAgICAgICAgICAgICBJVEVNPC90aD5cbiAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJweS00IHB4LTYgdGV4dC1jZW50ZXIgYmctaW5kaWdvLTUwMCBmb250LWJvbGQgdXBwZXJjYXNlIHRleHQtc20gdGV4dC13aGl0ZSBib3JkZXItYiBib3JkZXItZ3JleS1saWdodFwiPlxuICAgICAgICAgICAgICAgIFRPVEFMIFBSSUNFXG4gICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgPHRyIGNsYXNzPVwiaG92ZXI6YmctZ3JleS1saWdodGVyXCI+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInB5LTQgcHgtNiBib3JkZXItYiBib3JkZXItZ3JleS1saWdodFwiPkJpYmxlPC90ZD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicHktNCBweC02IHRleHQtY2VudGVyIGJvcmRlci1iIGJvcmRlci1ncmV5LWxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgMTE5ODBcbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHIgY2xhc3M9XCJob3ZlcjpiZy1ncmV5LWxpZ2h0ZXJcIj5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicHktNCBweC02IGJvcmRlci1iIGJvcmRlci1ncmV5LWxpZ2h0XCI+QmxhaDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInB5LTQgcHgtNiB0ZXh0LWNlbnRlciBib3JkZXItYiBib3JkZXItZ3JleS1saWdodFwiPlxuICAgICAgICAgICAgICAgIDM0MFxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0ciBjbGFzcz1cImhvdmVyOmJnLWdyZXktbGlnaHRlclwiPlxuICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJweS00IHB4LTYgYm9yZGVyLWIgYm9yZGVyLWdyZXktbGlnaHRcIj5CbGFoPC90ZD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicHktNCBweC02IHRleHQtY2VudGVyIGJvcmRlci1iIGJvcmRlci1ncmV5LWxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgOTAxXG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyIGNsYXNzPVwiaG92ZXI6YmctZ3JleS1saWdodGVyXCI+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInB5LTQgcHgtNiBib3JkZXItYiBib3JkZXItZ3JleS1saWdodFwiPkJsYWg8L3RkPlxuICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJweS00IHB4LTYgdGV4dC1jZW50ZXIgYm9yZGVyLWIgYm9yZGVyLWdyZXktbGlnaHRcIj5cbiAgICAgICAgICAgICAgICAxMTk1MFxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0ciBjbGFzcz1cImhvdmVyOmJnLWdyZXktbGlnaHRlclwiPlxuICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJweS00IHB4LTYgYm9yZGVyLWIgYm9yZGVyLWdyZXktbGlnaHRcIj5CbGFoPC90ZD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzPVwicHktNCBweC02IHRleHQtY2VudGVyIGJvcmRlci1iIGJvcmRlci1ncmV5LWxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgNDU5XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbjwhLS0tLS0tLS0tPT09PT09PT09PT09PT09PT09PT09IFNFQ09ORCBST1cgQ09OVEFJTklORyBUSEUgVEFCTEUgU1RBVFMgRU5EUyBIRVJFID09PT09PT09PT09PT09PT09PT09PT09PT09PT09LS0+IiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdGF0c1JvdXRpbmdNb2R1bGUgfSBmcm9tICcuL3N0YXRzLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IFN0YXRzQ29tcG9uZW50IH0gZnJvbSAnLi9zdGF0cy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFN0YXRzUm91dGluZ01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbU3RhdHNDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFN0YXRzTW9kdWxlIHsgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ==