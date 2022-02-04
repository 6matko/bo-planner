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
StatsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatsComponent, selectors: [["app-stats"]], decls: 2, vars: 0, template: function StatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " stats works!\n");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iby1wbGFubmVyLy4vYW5ndWxhci9zcmMvYXBwL21vZHVsZXMvb3B0aW9ucy9wYWdlcy9vcHRpb25zL3N0YXRzL3N0YXRzLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovL2JvLXBsYW5uZXIvLi9hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9vcHRpb25zL3BhZ2VzL29wdGlvbnMvc3RhdHMvc3RhdHMuY29tcG9uZW50LnRzIiwid2VicGFjazovL2JvLXBsYW5uZXIvLi9hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9vcHRpb25zL3BhZ2VzL29wdGlvbnMvc3RhdHMvc3RhdHMuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vYm8tcGxhbm5lci8uL2FuZ3VsYXIvc3JjL2FwcC9tb2R1bGVzL29wdGlvbnMvcGFnZXMvb3B0aW9ucy9zdGF0cy9zdGF0cy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUN1RDtBQUNKOzs7QUFFbkQsTUFBTSxNQUFNLEdBQVc7SUFDbkI7UUFDSSxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSw0REFBYztLQUM1QjtDQUNKLENBQUM7QUFNSyxNQUFNLGtCQUFrQjs7b0ZBQWxCLGtCQUFrQjsrR0FBbEIsa0JBQWtCO21IQUhsQixDQUFDLGtFQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQzlCLHlEQUFZO21JQUViLGtCQUFrQixvRkFGakIseURBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05uQixNQUFNLGNBQWM7SUFFekIsZ0JBQWdCLENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7OzRFQUxVLGNBQWM7NEdBQWQsY0FBYztRQ1AzQixvRUFBRztRQUNELDBFQUNGO1FBQUEsNERBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0YyQztBQUVhO0FBQ1Q7O0FBUzVDLE1BQU0sV0FBVzs7c0VBQVgsV0FBVzt3R0FBWCxXQUFXOzRHQU5iO1lBQ1AseURBQVk7WUFDWixxRUFBa0I7U0FDbkI7bUlBR1UsV0FBVyxtQkFGUCw0REFBYyxhQUgzQix5REFBWTtRQUNaLHFFQUFrQiIsImZpbGUiOiJhbmd1bGFyX3NyY19hcHBfbW9kdWxlc19vcHRpb25zX3BhZ2VzX29wdGlvbnNfc3RhdHNfc3RhdHNfbW9kdWxlX3RzLWVzMjAxNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU3RhdHNDb21wb25lbnQgfSBmcm9tICcuL3N0YXRzLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHtcclxuICAgICAgICBwYXRoOiAnJyxcclxuICAgICAgICBjb21wb25lbnQ6IFN0YXRzQ29tcG9uZW50LFxyXG4gICAgfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXHJcbiAgICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3RhdHNSb3V0aW5nTW9kdWxlIHsgfVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc3RhdHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RhdHMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdGF0cy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN0YXRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsIjxwPlxuICBzdGF0cyB3b3JrcyFcbjwvcD5cbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RhdHNSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9zdGF0cy1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBTdGF0c0NvbXBvbmVudCB9IGZyb20gJy4vc3RhdHMuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBTdGF0c1JvdXRpbmdNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1N0YXRzQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTdGF0c01vZHVsZSB7IH1cbiJdLCJzb3VyY2VSb290IjoiIn0=