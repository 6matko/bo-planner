(self["webpackChunkbo_planner"] = self["webpackChunkbo_planner"] || []).push([["angular_src_app_modules_options_options_module_ts"],{

/***/ 7050:
/*!*******************************************************************!*\
  !*** ./angular/src/app/modules/options/options-routing.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptionsRoutingModule": function() { return /* binding */ OptionsRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _pages_options_options_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/options/options.component */ 4650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




const routes = [
    {
        path: '',
        redirectTo: 'planned',
        pathMatch: 'full',
    },
    {
        path: '',
        component: _pages_options_options_component__WEBPACK_IMPORTED_MODULE_0__.OptionsComponent,
        children: [
            {
                path: 'planned',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-angular_src_app_core_currencies_ts-node_modules_angular_forms___ivy_ngcc___fesm2015_f-6d0cde"), __webpack_require__.e("angular_src_app_modules_options_pages_options_planned-orders_planned-orders_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/options/planned-orders/planned-orders.module */ 6991)).then(m => m.PlannedOrdersModule)
            }
        ],
    },
];
class OptionsRoutingModule {
}
OptionsRoutingModule.ɵfac = function OptionsRoutingModule_Factory(t) { return new (t || OptionsRoutingModule)(); };
OptionsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: OptionsRoutingModule });
OptionsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OptionsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 6358:
/*!***********************************************************!*\
  !*** ./angular/src/app/modules/options/options.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptionsModule": function() { return /* binding */ OptionsModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _options_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./options-routing.module */ 7050);
/* harmony import */ var _pages_options_options_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/options/options.component */ 4650);
/* harmony import */ var _pages_options_sub_menu_sub_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/options/sub-menu/sub-menu.component */ 4942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);





class OptionsModule {
}
OptionsModule.ɵfac = function OptionsModule_Factory(t) { return new (t || OptionsModule)(); };
OptionsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: OptionsModule });
OptionsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _options_routing_module__WEBPACK_IMPORTED_MODULE_0__.OptionsRoutingModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](OptionsModule, { declarations: [_pages_options_options_component__WEBPACK_IMPORTED_MODULE_1__.OptionsComponent, _pages_options_sub_menu_sub_menu_component__WEBPACK_IMPORTED_MODULE_2__.SubMenuComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _options_routing_module__WEBPACK_IMPORTED_MODULE_0__.OptionsRoutingModule] }); })();


/***/ }),

/***/ 4650:
/*!****************************************************************************!*\
  !*** ./angular/src/app/modules/options/pages/options/options.component.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptionsComponent": function() { return /* binding */ OptionsComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _sub_menu_sub_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sub-menu/sub-menu.component */ 4942);




function OptionsComponent_app_sub_menu_20_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-sub-menu", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("isOpenChange", function OptionsComponent_app_sub_menu_20_Template_app_sub_menu_isOpenChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.open = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isOpen", ctx_r0.open);
} }
const _c0 = function (a0, a1) { return { flex: a0, hidden: a1 }; };
const _c1 = function (a0) { return { "flex flex-row text-gray-900 bg-gray-200": a0 }; };
const _c2 = function (a0, a1) { return { "rotate-180": a0, "rotate-0": a1 }; };
class OptionsComponent {
    constructor() {
        this.open = false;
        this.atTop = false;
    }
}
OptionsComponent.ɵfac = function OptionsComponent_Factory(t) { return new (t || OptionsComponent)(); };
OptionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OptionsComponent, selectors: [["app-options"]], decls: 23, vars: 12, consts: [[1, "min-h-screen", "page-wrapper"], [1, "antialiased", "bg-gray-100", "dark-mode:bg-gray-900", "mb-10", "z-30"], [1, "w-full", "text-gray-700", "bg-white", "dark-mode:text-gray-200", "dark-mode:bg-gray-800"], [1, "flex", "flex-col", "max-w-screen-xl", "px-4", "mx-auto", "md:items-center", "md:justify-between", "md:flex-row", "md:px-6", "lg:px-8"], [1, "flex", "flex-row", "items-center", "justify-between", "p-4"], ["routerLink", "/options", 1, "text-lg", "font-semibold", "tracking-widest", "text-gray-900", "uppercase", "rounded-lg", "dark-mode:text-white", "focus:outline-none", "focus:shadow-outline"], [1, "rounded-lg", "md:hidden", "focus:outline-none", "focus:shadow-outline", 3, "click"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-6", "h-6"], ["x-show", "!open", "fill-rule", "evenodd", "d", "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z", "clip-rule", "evenodd"], ["x-show", "open", "fill-rule", "evenodd", "d", "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", "clip-rule", "evenodd"], [1, "flex-col", "flex-grow", "hidden", "pb-4", "md:pb-0", "md:flex", "md:justify-end", "md:flex-row", 3, "ngClass"], ["routerLink", "planned", "routerLinkActive", "active", 1, "z-10", "px-4", "py-2", "mt-2", "text-sm", "font-semibold", "bg-transparent", "rounded-lg", "dark-mode:bg-transparent", "dark-mode:hover:bg-gray-600", "dark-mode:focus:bg-gray-600", "dark-mode:focus:text-white", "dark-mode:hover:text-white", "dark-mode:text-gray-200", "md:mt-0", "md:ml-4", "hover:text-gray-900", "focus:text-gray-900", "hover:bg-gray-200", "focus:bg-gray-200", "focus:outline-none", "focus:shadow-outline"], [1, "relative"], [1, "items-center", "w-full", "px-4", "py-2", "mt-2", "text-sm", "font-semibold", "text-left", "bg-transparent", "rounded-lg", "dark-mode:bg-transparent", "dark-mode:focus:text-white", "dark-mode:hover:text-white", "dark-mode:focus:bg-gray-600", "dark-mode:hover:bg-gray-600", "md:w-auto", "md:inline", "md:mt-0", "md:ml-4", "hover:text-gray-900", "focus:text-gray-900", "hover:bg-gray-200", "focus:bg-gray-200", "focus:outline-none", "focus:shadow-outline", 3, "ngClass", "click"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "inline", "w-4", "h-4", "mt-1", "ml-1", "transition-transform", "duration-100", "transform", "md:-mt-1", 3, "ngClass"], ["fill-rule", "evenodd", "d", "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z", "clip-rule", "evenodd"], [3, "isOpen", "isOpenChange", 4, "ngIf"], [3, "isOpen", "isOpenChange"]], template: function OptionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Buy Order Planner");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OptionsComponent_Template_button_click_7_listener() { return ctx.open = !ctx.open; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "nav", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Planned orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OptionsComponent_Template_button_click_15_listener() { return ctx.open = !ctx.open; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "More");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, OptionsComponent_app_sub_menu_20_Template, 1, 1, "app-sub-menu", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](4, _c0, ctx.open, !ctx.open));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c1, ctx.open));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](9, _c2, ctx.open, !ctx.open));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.open);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _sub_menu_sub_menu_component__WEBPACK_IMPORTED_MODULE_0__.SubMenuComponent], styles: [".page-wrapper[_ngcontent-%COMP%] {\n  background-color: #e2e8f0;\n}\n\n.active[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n  --tw-bg-opacity: 1;\n  background-color: rgba(99, 102, 241, var(--tw-bg-opacity));\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  box-shadow: 0 0 #0000, 0 0 #0000, var(--tw-shadow);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wdGlvbnMuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdGFpbHdpbmRjc3MvbGliL2xpYi9zdWJzdGl0dXRlQ2xhc3NBcHBseUF0UnVsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQUNKOztBQUdBO0VDSEEscUJBQW1CO0VBQW5CLGtCQUFtQjtFQUFuQiwwREFBbUI7RUFBbkIsZ0JBQW1CO0VBQW5CLG9CQUFtQjtFQUFuQixrREFBbUI7RUFBbkIsa0ZBQW1CO0VBQW5CLGtEQUFtQjtFQUFuQix1R0FBbUI7QURJbkIiLCJmaWxlIjoib3B0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLXdyYXBwZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZThmMDtcclxufVxyXG5cclxuXHJcbi5hY3RpdmUge1xyXG4gICAgQGFwcGx5IGJnLWluZGlnby01MDAgdGV4dC13aGl0ZSBmb250LXNlbWlib2xkIHJvdW5kZWQtbGcgc2hhZG93LW1kO1xyXG59IiwiQHRhaWx3aW5kIGJhc2U7XG5AdGFpbHdpbmQgY29tcG9uZW50cztcbkB0YWlsd2luZCB1dGlsaXRpZXM7Il19 */"] });


/***/ }),

/***/ 4942:
/*!**************************************************************************************!*\
  !*** ./angular/src/app/modules/options/pages/options/sub-menu/sub-menu.component.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubMenuComponent": function() { return /* binding */ SubMenuComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);



function SubMenuComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubMenuComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SubMenuComponent {
    constructor() {
        this.isOpen = false;
        this.isOpenChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
    close() {
        this.isOpenChange.next(false);
    }
}
SubMenuComponent.ɵfac = function SubMenuComponent_Factory(t) { return new (t || SubMenuComponent)(); };
SubMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubMenuComponent, selectors: [["app-sub-menu"]], inputs: { isOpen: "isOpen" }, outputs: { isOpenChange: "isOpenChange" }, decls: 22, vars: 3, consts: [["class", "fixed inset-0 h-full w-full z-0", 3, "click", 4, "ngIf"], [1, "absolute", "right-0", "w-full", "md:max-w-screen-sm", "md:w-screen", "mt-2", "origin-top-right", "z-10"], [1, "px-2", "pt-2", "pb-4", "bg-white", "rounded-md", "shadow-lg", "dark-mode:bg-gray-700"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], ["href", "https://tradeup.ninja", "target", "_blank", 1, "flex", "flex", "row", "items-start", "rounded-lg", "bg-transparent", "p-2", "dark-mode:hover:bg-gray-600", "dark-mode:focus:bg-gray-600", "dark-mode:focus:text-white", "dark-mode:hover:text-white", "dark-mode:text-gray-200", "hover:text-gray-900", "focus:text-gray-900", "hover:bg-gray-200", "focus:bg-gray-200", "focus:outline-none", "focus:shadow-outline"], [1, "bg-purple-500", "text-white", "rounded-lg", "p-3"], ["fill", "none", "stroke", "currentColor", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "md:h-6", "md:w-6", "h-4", "w-4"], ["d", "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"], [1, "ml-3"], [1, "font-semibold"], [1, "text-sm"], ["href", "https://discord.gg/csgomarket", "target", "_blank", 1, "flex", "flex", "row", "items-start", "rounded-lg", "bg-transparent", "p-2", "dark-mode:hover:bg-gray-600", "dark-mode:focus:bg-gray-600", "dark-mode:focus:text-white", "dark-mode:hover:text-white", "dark-mode:text-gray-200", "hover:text-gray-900", "focus:text-gray-900", "hover:bg-gray-200", "focus:bg-gray-200", "focus:outline-none", "focus:shadow-outline"], ["d", "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"], [1, "fixed", "inset-0", "h-full", "w-full", "z-0", 3, "click"]], template: function SubMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SubMenuComponent_div_0_Template, 1, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Tradeup Ninja");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Free website to search for profitable trade ups");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "CSGO Market Forum Discord");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Discord server related to investing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hidden", !ctx.isOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWItbWVudS5jb21wb25lbnQuc2NzcyJ9 */"], changeDetection: 0 });


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iby1wbGFubmVyLy4vYW5ndWxhci9zcmMvYXBwL21vZHVsZXMvb3B0aW9ucy9vcHRpb25zLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovL2JvLXBsYW5uZXIvLi9hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9vcHRpb25zL29wdGlvbnMubW9kdWxlLnRzIiwid2VicGFjazovL2JvLXBsYW5uZXIvLi9hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9vcHRpb25zL3BhZ2VzL29wdGlvbnMvb3B0aW9ucy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly9iby1wbGFubmVyLy4vYW5ndWxhci9zcmMvYXBwL21vZHVsZXMvb3B0aW9ucy9wYWdlcy9vcHRpb25zL29wdGlvbnMuY29tcG9uZW50LnRzIiwid2VicGFjazovL2JvLXBsYW5uZXIvLi9hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9vcHRpb25zL3BhZ2VzL29wdGlvbnMvc3ViLW1lbnUvc3ViLW1lbnUuY29tcG9uZW50LnRzIiwid2VicGFjazovL2JvLXBsYW5uZXIvLi9hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9vcHRpb25zL3BhZ2VzL29wdGlvbnMvc3ViLW1lbnUvc3ViLW1lbnUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUN1RDtBQUNjOzs7QUFFckUsTUFBTSxNQUFNLEdBQVc7SUFDckI7UUFDRSxJQUFJLEVBQUUsRUFBRTtRQUNSLFVBQVUsRUFBRSxTQUFTO1FBQ3JCLFNBQVMsRUFBRSxNQUFNO0tBQ2xCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSw4RUFBZ0I7UUFDM0IsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUFDLGlZQUE4RCxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIs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UUFDTiwrREFBa0I7UUFBbEIsMEVBQWtCO1FBQ2hCLHdFQUF5QjtRQUFBLHFGQUF5QjtRQUFBLDREQUFJO1FBQ3RELHlFQUFtQjtRQUFBLCtGQUFtQztRQUFBLDREQUFJO1FBQzVELDREQUFNO1FBQ1IsNERBQUk7UUFDTiw0REFBTTtRQUNSLDREQUFNO1FBQ1IsNERBQU07O1FBaEdILDRFQUFZO1FBYWIsMERBQXdCO1FBQXhCLGdGQUF3QiIsImZpbGUiOiJhbmd1bGFyX3NyY19hcHBfbW9kdWxlc19vcHRpb25zX29wdGlvbnNfbW9kdWxlX3RzLWVzMjAxNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPcHRpb25zQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9vcHRpb25zL29wdGlvbnMuY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnJyxcbiAgICByZWRpcmVjdFRvOiAncGxhbm5lZCcsXG4gICAgcGF0aE1hdGNoOiAnZnVsbCcsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnJyxcbiAgICBjb21wb25lbnQ6IE9wdGlvbnNDb21wb25lbnQsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJ3BsYW5uZWQnLFxuICAgICAgICBsb2FkQ2hpbGRyZW46ICgpID0+IGltcG9ydCgnLi9wYWdlcy9vcHRpb25zL3BsYW5uZWQtb3JkZXJzL3BsYW5uZWQtb3JkZXJzLm1vZHVsZScpLnRoZW4obSA9PiBtLlBsYW5uZWRPcmRlcnNNb2R1bGUpXG4gICAgICB9XG4gICAgXSxcbiAgfSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIE9wdGlvbnNSb3V0aW5nTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPcHRpb25zUm91dGluZ01vZHVsZSB9IGZyb20gJy4vb3B0aW9ucy1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBPcHRpb25zQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9vcHRpb25zL29wdGlvbnMuY29tcG9uZW50JztcbmltcG9ydCB7IFN1Yk1lbnVDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL29wdGlvbnMvc3ViLW1lbnUvc3ViLW1lbnUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgT3B0aW9uc1JvdXRpbmdNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtPcHRpb25zQ29tcG9uZW50LCBTdWJNZW51Q29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgT3B0aW9uc01vZHVsZSB7IH1cbiIsIjxkaXYgY2xhc3M9XCJtaW4taC1zY3JlZW4gcGFnZS13cmFwcGVyXCI+XG4gIDxkaXYgY2xhc3M9XCJhbnRpYWxpYXNlZCBiZy1ncmF5LTEwMCBkYXJrLW1vZGU6YmctZ3JheS05MDAgbWItMTAgei0zMFwiPlxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwiXG4gICAgICAgIHctZnVsbFxuICAgICAgICB0ZXh0LWdyYXktNzAwXG4gICAgICAgIGJnLXdoaXRlXG4gICAgICAgIGRhcmstbW9kZTp0ZXh0LWdyYXktMjAwIGRhcmstbW9kZTpiZy1ncmF5LTgwMFxuICAgICAgXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPVwiXG4gICAgICAgICAgZmxleCBmbGV4LWNvbFxuICAgICAgICAgIG1heC13LXNjcmVlbi14bFxuICAgICAgICAgIHB4LTRcbiAgICAgICAgICBteC1hdXRvXG4gICAgICAgICAgbWQ6aXRlbXMtY2VudGVyIG1kOmp1c3RpZnktYmV0d2VlbiBtZDpmbGV4LXJvdyBtZDpweC02XG4gICAgICAgICAgbGc6cHgtOFxuICAgICAgICBcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTRcIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgcm91dGVyTGluaz1cIi9vcHRpb25zXCJcbiAgICAgICAgICAgIGNsYXNzPVwiXG4gICAgICAgICAgICAgIHRleHQtbGdcbiAgICAgICAgICAgICAgZm9udC1zZW1pYm9sZFxuICAgICAgICAgICAgICB0cmFja2luZy13aWRlc3RcbiAgICAgICAgICAgICAgdGV4dC1ncmF5LTkwMFxuICAgICAgICAgICAgICB1cHBlcmNhc2VcbiAgICAgICAgICAgICAgcm91bmRlZC1sZ1xuICAgICAgICAgICAgICBkYXJrLW1vZGU6dGV4dC13aGl0ZVxuICAgICAgICAgICAgICBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICA+QnV5IE9yZGVyIFBsYW5uZXI8L2FcbiAgICAgICAgICA+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3M9XCJyb3VuZGVkLWxnIG1kOmhpZGRlbiBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxuICAgICAgICAgICAgKGNsaWNrKT1cIm9wZW4gPSAhb3BlblwiPlxuICAgICAgICAgICAgPHN2ZyBmaWxsPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIGNsYXNzPVwidy02IGgtNlwiPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIHgtc2hvdz1cIiFvcGVuXCJcbiAgICAgICAgICAgICAgICBmaWxsLXJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBkPVwiTTMgNWExIDEgMCAwMTEtMWgxMmExIDEgMCAxMTAgMkg0YTEgMSAwIDAxLTEtMXpNMyAxMGExIDEgMCAwMTEtMWgxMmExIDEgMCAxMTAgMkg0YTEgMSAwIDAxLTEtMXpNOSAxNWExIDEgMCAwMTEtMWg2YTEgMSAwIDExMCAyaC02YTEgMSAwIDAxLTEtMXpcIlxuICAgICAgICAgICAgICAgIGNsaXAtcnVsZT1cImV2ZW5vZGRcIj48L3BhdGg+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgeC1zaG93PVwib3BlblwiXG4gICAgICAgICAgICAgICAgZmlsbC1ydWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgZD1cIk00LjI5MyA0LjI5M2ExIDEgMCAwMTEuNDE0IDBMMTAgOC41ODZsNC4yOTMtNC4yOTNhMSAxIDAgMTExLjQxNCAxLjQxNEwxMS40MTQgMTBsNC4yOTMgNC4yOTNhMSAxIDAgMDEtMS40MTQgMS40MTRMMTAgMTEuNDE0bC00LjI5MyA0LjI5M2ExIDEgMCAwMS0xLjQxNC0xLjQxNEw4LjU4NiAxMCA0LjI5MyA1LjcwN2ExIDEgMCAwMTAtMS40MTR6XCJcbiAgICAgICAgICAgICAgICBjbGlwLXJ1bGU9XCJldmVub2RkXCI+PC9wYXRoPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8bmF2XG4gICAgICAgICAgW25nQ2xhc3NdPVwieyBmbGV4OiBvcGVuLCBoaWRkZW46ICFvcGVuIH1cIlxuICAgICAgICAgIGNsYXNzPVwiXG4gICAgICAgICAgICBmbGV4LWNvbCBmbGV4LWdyb3dcbiAgICAgICAgICAgIGhpZGRlblxuICAgICAgICAgICAgcGItNFxuICAgICAgICAgICAgbWQ6cGItMCBtZDpmbGV4IG1kOmp1c3RpZnktZW5kIG1kOmZsZXgtcm93XG4gICAgICAgICAgXCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIHJvdXRlckxpbms9XCJwbGFubmVkXCJcbiAgICAgICAgICAgIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIlxuICAgICAgICAgICAgY2xhc3M9XCJcbiAgICAgICAgICAgICAgei0xMFxuICAgICAgICAgICAgICBweC00XG4gICAgICAgICAgICAgIHB5LTJcbiAgICAgICAgICAgICAgbXQtMlxuICAgICAgICAgICAgICB0ZXh0LXNtXG4gICAgICAgICAgICAgIGZvbnQtc2VtaWJvbGRcbiAgICAgICAgICAgICAgYmctdHJhbnNwYXJlbnRcbiAgICAgICAgICAgICAgcm91bmRlZC1sZ1xuICAgICAgICAgICAgICBkYXJrLW1vZGU6YmctdHJhbnNwYXJlbnRcbiAgICAgICAgICAgICAgZGFyay1tb2RlOmhvdmVyOmJnLWdyYXktNjAwXG4gICAgICAgICAgICAgIGRhcmstbW9kZTpmb2N1czpiZy1ncmF5LTYwMFxuICAgICAgICAgICAgICBkYXJrLW1vZGU6Zm9jdXM6dGV4dC13aGl0ZVxuICAgICAgICAgICAgICBkYXJrLW1vZGU6aG92ZXI6dGV4dC13aGl0ZVxuICAgICAgICAgICAgICBkYXJrLW1vZGU6dGV4dC1ncmF5LTIwMFxuICAgICAgICAgICAgICBtZDptdC0wIG1kOm1sLTRcbiAgICAgICAgICAgICAgaG92ZXI6dGV4dC1ncmF5LTkwMFxuICAgICAgICAgICAgICBmb2N1czp0ZXh0LWdyYXktOTAwXG4gICAgICAgICAgICAgIGhvdmVyOmJnLWdyYXktMjAwXG4gICAgICAgICAgICAgIGZvY3VzOmJnLWdyYXktMjAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgID5QbGFubmVkIG9yZGVyczwvYVxuICAgICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgKGNsaWNrKT1cIm9wZW4gPSAhb3BlblwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiXG4gICAgICAgICAgICAgICAgaXRlbXMtY2VudGVyXG4gICAgICAgICAgICAgICAgdy1mdWxsXG4gICAgICAgICAgICAgICAgcHgtNFxuICAgICAgICAgICAgICAgIHB5LTJcbiAgICAgICAgICAgICAgICBtdC0yXG4gICAgICAgICAgICAgICAgdGV4dC1zbVxuICAgICAgICAgICAgICAgIGZvbnQtc2VtaWJvbGRcbiAgICAgICAgICAgICAgICB0ZXh0LWxlZnRcbiAgICAgICAgICAgICAgICBiZy10cmFuc3BhcmVudFxuICAgICAgICAgICAgICAgIHJvdW5kZWQtbGdcbiAgICAgICAgICAgICAgICBkYXJrLW1vZGU6YmctdHJhbnNwYXJlbnRcbiAgICAgICAgICAgICAgICBkYXJrLW1vZGU6Zm9jdXM6dGV4dC13aGl0ZVxuICAgICAgICAgICAgICAgIGRhcmstbW9kZTpob3Zlcjp0ZXh0LXdoaXRlXG4gICAgICAgICAgICAgICAgZGFyay1tb2RlOmZvY3VzOmJnLWdyYXktNjAwXG4gICAgICAgICAgICAgICAgZGFyay1tb2RlOmhvdmVyOmJnLWdyYXktNjAwXG4gICAgICAgICAgICAgICAgbWQ6dy1hdXRvIG1kOmlubGluZSBtZDptdC0wIG1kOm1sLTRcbiAgICAgICAgICAgICAgICBob3Zlcjp0ZXh0LWdyYXktOTAwXG4gICAgICAgICAgICAgICAgZm9jdXM6dGV4dC1ncmF5LTkwMFxuICAgICAgICAgICAgICAgIGhvdmVyOmJnLWdyYXktMjAwXG4gICAgICAgICAgICAgICAgZm9jdXM6YmctZ3JheS0yMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsgJ2ZsZXggZmxleC1yb3cgdGV4dC1ncmF5LTkwMCBiZy1ncmF5LTIwMCc6IG9wZW4gfVwiPlxuICAgICAgICAgICAgICA8c3Bhbj5Nb3JlPC9zcGFuPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieyAncm90YXRlLTE4MCc6IG9wZW4sICdyb3RhdGUtMCc6ICFvcGVuIH1cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiXG4gICAgICAgICAgICAgICAgICBpbmxpbmVcbiAgICAgICAgICAgICAgICAgIHctNFxuICAgICAgICAgICAgICAgICAgaC00XG4gICAgICAgICAgICAgICAgICBtdC0xXG4gICAgICAgICAgICAgICAgICBtbC0xXG4gICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLXRyYW5zZm9ybVxuICAgICAgICAgICAgICAgICAgZHVyYXRpb24tMTAwXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1cbiAgICAgICAgICAgICAgICAgIG1kOi1tdC0xXG4gICAgICAgICAgICAgICAgXCI+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIGZpbGwtcnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgZD1cIk01LjI5MyA3LjI5M2ExIDEgMCAwMTEuNDE0IDBMMTAgMTAuNTg2bDMuMjkzLTMuMjkzYTEgMSAwIDExMS40MTQgMS40MTRsLTQgNGExIDEgMCAwMS0xLjQxNCAwbC00LTRhMSAxIDAgMDEwLTEuNDE0elwiXG4gICAgICAgICAgICAgICAgICBjbGlwLXJ1bGU9XCJldmVub2RkXCI+PC9wYXRoPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGFwcC1zdWItbWVudSAqbmdJZj1cIm9wZW5cIiBbKGlzT3BlbildPVwib3BlblwiPjwvYXBwLXN1Yi1tZW51PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdj5cbiAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gIDwvZGl2PlxuPC9kaXY+XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLW9wdGlvbnMnLFxuICB0ZW1wbGF0ZVVybDogJ29wdGlvbnMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnb3B0aW9ucy5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE9wdGlvbnNDb21wb25lbnQge1xuICBvcGVuOiBib29sZWFuID0gZmFsc2U7XG4gIGF0VG9wOiBib29sZWFuID0gZmFsc2U7XG59XG4iLCJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc3ViLW1lbnUnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3ViLW1lbnUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdWItbWVudS5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU3ViTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGlzT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuICBAT3V0cHV0KCkgaXNPcGVuQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmlzT3BlbkNoYW5nZS5uZXh0KGZhbHNlKTtcbiAgfVxufVxuIiwiPGRpdlxuICAqbmdJZj1cImlzT3BlblwiXG4gIChjbGljayk9XCJjbG9zZSgpXCJcbiAgY2xhc3M9XCJmaXhlZCBpbnNldC0wIGgtZnVsbCB3LWZ1bGwgei0wXCI+PC9kaXY+XG48ZGl2XG4gIGNsYXNzPVwiXG4gICAgYWJzb2x1dGVcbiAgICByaWdodC0wXG4gICAgdy1mdWxsXG4gICAgbWQ6bWF4LXctc2NyZWVuLXNtIG1kOnctc2NyZWVuXG4gICAgbXQtMlxuICAgIG9yaWdpbi10b3AtcmlnaHRcbiAgICB6LTEwXG4gIFwiXG4gIFtjbGFzcy5oaWRkZW5dPVwiIWlzT3BlblwiPlxuICA8ZGl2XG4gICAgY2xhc3M9XCJweC0yIHB0LTIgcGItNCBiZy13aGl0ZSByb3VuZGVkLW1kIHNoYWRvdy1sZyBkYXJrLW1vZGU6YmctZ3JheS03MDBcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBnYXAtNFwiPlxuICAgICAgPGFcbiAgICAgICAgY2xhc3M9XCJcbiAgICAgICAgICBmbGV4IGZsZXhcbiAgICAgICAgICByb3dcbiAgICAgICAgICBpdGVtcy1zdGFydFxuICAgICAgICAgIHJvdW5kZWQtbGdcbiAgICAgICAgICBiZy10cmFuc3BhcmVudFxuICAgICAgICAgIHAtMlxuICAgICAgICAgIGRhcmstbW9kZTpob3ZlcjpiZy1ncmF5LTYwMFxuICAgICAgICAgIGRhcmstbW9kZTpmb2N1czpiZy1ncmF5LTYwMFxuICAgICAgICAgIGRhcmstbW9kZTpmb2N1czp0ZXh0LXdoaXRlXG4gICAgICAgICAgZGFyay1tb2RlOmhvdmVyOnRleHQtd2hpdGVcbiAgICAgICAgICBkYXJrLW1vZGU6dGV4dC1ncmF5LTIwMFxuICAgICAgICAgIGhvdmVyOnRleHQtZ3JheS05MDBcbiAgICAgICAgICBmb2N1czp0ZXh0LWdyYXktOTAwXG4gICAgICAgICAgaG92ZXI6YmctZ3JheS0yMDBcbiAgICAgICAgICBmb2N1czpiZy1ncmF5LTIwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcbiAgICAgICAgXCJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vdHJhZGV1cC5uaW5qYVwiXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmctcHVycGxlLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbGcgcC0zXCI+XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMlwiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgIGNsYXNzPVwibWQ6aC02IG1kOnctNiBoLTQgdy00XCI+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkPVwiTTUgM3Y0TTMgNWg0TTYgMTd2NG0tMi0yaDRtNS0xNmwyLjI4NiA2Ljg1N0wyMSAxMmwtNS43MTQgMi4xNDNMMTMgMjFsLTIuMjg2LTYuODU3TDUgMTJsNS43MTQtMi4xNDNMMTMgM3pcIj48L3BhdGg+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWwtM1wiPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZm9udC1zZW1pYm9sZFwiPlRyYWRldXAgTmluamE8L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXNtXCI+RnJlZSB3ZWJzaXRlIHRvIHNlYXJjaCBmb3IgcHJvZml0YWJsZSB0cmFkZSB1cHM8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9hPlxuXG4gICAgICA8YVxuICAgICAgICBjbGFzcz1cIlxuICAgICAgICAgIGZsZXggZmxleFxuICAgICAgICAgIHJvd1xuICAgICAgICAgIGl0ZW1zLXN0YXJ0XG4gICAgICAgICAgcm91bmRlZC1sZ1xuICAgICAgICAgIGJnLXRyYW5zcGFyZW50XG4gICAgICAgICAgcC0yXG4gICAgICAgICAgZGFyay1tb2RlOmhvdmVyOmJnLWdyYXktNjAwXG4gICAgICAgICAgZGFyay1tb2RlOmZvY3VzOmJnLWdyYXktNjAwXG4gICAgICAgICAgZGFyay1tb2RlOmZvY3VzOnRleHQtd2hpdGVcbiAgICAgICAgICBkYXJrLW1vZGU6aG92ZXI6dGV4dC13aGl0ZVxuICAgICAgICAgIGRhcmstbW9kZTp0ZXh0LWdyYXktMjAwXG4gICAgICAgICAgaG92ZXI6dGV4dC1ncmF5LTkwMFxuICAgICAgICAgIGZvY3VzOnRleHQtZ3JheS05MDBcbiAgICAgICAgICBob3ZlcjpiZy1ncmF5LTIwMFxuICAgICAgICAgIGZvY3VzOmJnLWdyYXktMjAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVxuICAgICAgICBcIlxuICAgICAgICBocmVmPVwiaHR0cHM6Ly9kaXNjb3JkLmdnL2NzZ29tYXJrZXRcIlxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJnLXB1cnBsZS01MDAgdGV4dC13aGl0ZSByb3VuZGVkLWxnIHAtM1wiPlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjJcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICBjbGFzcz1cIm1kOmgtNiBtZDp3LTYgaC00IHctNFwiPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZD1cIk04IDEyaC4wMU0xMiAxMmguMDFNMTYgMTJoLjAxTTIxIDEyYzAgNC40MTgtNC4wMyA4LTkgOGE5Ljg2MyA5Ljg2MyAwIDAxLTQuMjU1LS45NDlMMyAyMGwxLjM5NS0zLjcyQzMuNTEyIDE1LjA0MiAzIDEzLjU3NCAzIDEyYzAtNC40MTggNC4wMy04IDktOHM5IDMuNTgyIDkgOHpcIj48L3BhdGg+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWwtM1wiPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZm9udC1zZW1pYm9sZFwiPkNTR08gTWFya2V0IEZvcnVtIERpc2NvcmQ8L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXNtXCI+RGlzY29yZCBzZXJ2ZXIgcmVsYXRlZCB0byBpbnZlc3Rpbmc8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuIl0sInNvdXJjZVJvb3QiOiIifQ==