(self["webpackChunkbo_planner"] = self["webpackChunkbo_planner"] || []).push([["angular_src_app_modules_options_pages_options_planned-orders_planned-orders_module_ts"],{

/***/ 9057:
/*!*****************************************************************!*\
  !*** ./angular/src/app/core/pagination/pagination.component.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginationComponent": function() { return /* binding */ PaginationComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _pagination_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagination.utils */ 8954);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);




const _c0 = function (a0) { return { "bg-purple-500 text-white": a0 }; };
function PaginationComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaginationComponent_div_0_div_6_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const page_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r3.setPage(page_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ctx_r1.pager.currentPage === page_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", page_r2, " ");
} }
const _c1 = function (a0) { return { disabled: a0 }; };
function PaginationComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaginationComponent_div_0_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.setPage(ctx_r5.pager.currentPage - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "svg", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "polyline", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, PaginationComponent_div_0_div_6_Template, 2, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaginationComponent_div_0_Template_div_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.setPage(ctx_r7.pager.currentPage + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "svg", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "polyline", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, ctx_r0.pager.currentPage === 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.pager.pages);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c1, ctx_r0.pager.currentPage === ctx_r0.pager.totalPages));
} }
// Src: https://jasonwatmore.com/post/2019/06/18/angular-8-simple-pagination-example
class PaginationComponent {
    constructor() {
        this.changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(true);
        this.initialPage = 1;
        this.pageSize = 10;
        this.maxPages = 6;
        this.pager = {};
    }
    ngOnInit() {
        // set page if items array isn't empty
        if (this.items && this.items.length) {
            this.setPage(this.initialPage);
        }
    }
    ngOnChanges(changes) {
        var _a, _b, _c, _d;
        // Reset page if items array has changed
        if (((_a = changes === null || changes === void 0 ? void 0 : changes.items) === null || _a === void 0 ? void 0 : _a.currentValue) !== ((_b = changes === null || changes === void 0 ? void 0 : changes.items) === null || _b === void 0 ? void 0 : _b.previousValue)) {
            this.setPage(this.initialPage);
        }
        // Reset page if page size has changed
        if (((_c = changes === null || changes === void 0 ? void 0 : changes.pageSize) === null || _c === void 0 ? void 0 : _c.currentValue) !== ((_d = changes === null || changes === void 0 ? void 0 : changes.pageSize) === null || _d === void 0 ? void 0 : _d.previousValue)) {
            this.setPage(this.initialPage);
        }
    }
    setPage(page) {
        // get new pager object for specified page
        this.pager = (0,_pagination_utils__WEBPACK_IMPORTED_MODULE_0__.paginate)(this.items.length, page, this.pageSize, this.maxPages);
        // get new page of items from items array
        var pageOfItems = this.items.slice(this.pager.startIndex, this.pager.endIndex + 1);
        // call change page function in parent component
        this.changePage.emit(pageOfItems);
    }
}
PaginationComponent.ɵfac = function PaginationComponent_Factory(t) { return new (t || PaginationComponent)(); };
PaginationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PaginationComponent, selectors: [["app-pagination"]], inputs: { items: "items", initialPage: "initialPage", pageSize: "pageSize", maxPages: "maxPages" }, outputs: { changePage: "changePage" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["class", "flex flex-col items-center py-6", 4, "ngIf"], [1, "flex", "flex-col", "items-center", "py-6"], [1, "flex", "text-gray-700"], [1, "h-12", "w-12", "mr-1", "flex", "justify-center", "items-center", "rounded-full", "bg-white", "cursor-pointer", 3, "ngClass", "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "100%", "height", "100%", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-chevron-left", "w-6", "h-6"], ["points", "15 18 9 12 15 6"], [1, "flex", "h-12", "font-medium", "rounded-full"], ["class", "\n          w-12\n          md:flex\n          justify-center\n          items-center\n          hidden\n          cursor-pointer\n          leading-5\n          transition\n          duration-150\n          ease-in\n          rounded-full\n        ", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "h-12", "w-12", "ml-1", "flex", "justify-center", "items-center", "rounded-full", "bg-white", "cursor-pointer", 3, "ngClass", "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "100%", "height", "100%", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-chevron-right", "w-6", "h-6"], ["points", "9 18 15 12 9 6"], [1, "w-12", "md:flex", "justify-center", "items-center", "hidden", "cursor-pointer", "leading-5", "transition", "duration-150", "ease-in", "rounded-full", 3, "ngClass", "click"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PaginationComponent_div_0_Template, 10, 7, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.pager.pages && ctx.pager.pages.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdpbmF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"], changeDetection: 0 });


/***/ }),

/***/ 7617:
/*!**************************************************************!*\
  !*** ./angular/src/app/core/pagination/pagination.module.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginationModule": function() { return /* binding */ PaginationModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _pagination_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagination.component */ 9057);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);



class PaginationModule {
}
PaginationModule.ɵfac = function PaginationModule_Factory(t) { return new (t || PaginationModule)(); };
PaginationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PaginationModule });
PaginationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PaginationModule, { declarations: [_pagination_component__WEBPACK_IMPORTED_MODULE_0__.PaginationComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_pagination_component__WEBPACK_IMPORTED_MODULE_0__.PaginationComponent] }); })();


/***/ }),

/***/ 8954:
/*!*************************************************************!*\
  !*** ./angular/src/app/core/pagination/pagination.utils.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "paginate": function() { return /* binding */ paginate; }
/* harmony export */ });
// Src: https://github.com/cornflourblue/jw-angular-pagination/blob/27c4a7c0fbc635c14227da62bb94cc3520ca3a75/projects/jw-pagination/node_modules/jw-paginate/lib/jw-paginate.js#L2
function paginate(totalItems, currentPage, pageSize, maxPages) {
    if (currentPage === void 0) {
        currentPage = 1;
    }
    if (pageSize === void 0) {
        pageSize = 10;
    }
    if (maxPages === void 0) {
        maxPages = 10;
    }
    // calculate total pages
    var totalPages = Math.ceil(totalItems / pageSize);
    // ensure current page isn't out of range
    if (currentPage < 1) {
        currentPage = 1;
    }
    else if (currentPage > totalPages) {
        currentPage = totalPages;
    }
    var startPage, endPage;
    if (totalPages <= maxPages) {
        // total pages less than max so show all pages
        startPage = 1;
        endPage = totalPages;
    }
    else {
        // total pages more than max so calculate start and end pages
        var maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
        var maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
        if (currentPage <= maxPagesBeforeCurrentPage) {
            // current page near the start
            startPage = 1;
            endPage = maxPages;
        }
        else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
            // current page near the end
            startPage = totalPages - maxPages + 1;
            endPage = totalPages;
        }
        else {
            // current page somewhere in the middle
            startPage = currentPage - maxPagesBeforeCurrentPage;
            endPage = currentPage + maxPagesAfterCurrentPage;
        }
    }
    // calculate start and end item indexes
    var startIndex = (currentPage - 1) * pageSize;
    var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    // create an array of pages to ng-repeat in the pager control
    var pages = Array.from(Array((endPage + 1) - startPage).keys()).map(function (i) { return startPage + i; });
    // return object with all pager properties required by the view
    return {
        totalItems: totalItems,
        currentPage: currentPage,
        pageSize: pageSize,
        totalPages: totalPages,
        startPage: startPage,
        endPage: endPage,
        startIndex: startIndex,
        endIndex: endIndex,
        pages: pages
    };
}


/***/ }),

/***/ 9433:
/*!*****************************************************************************************************************!*\
  !*** ./angular/src/app/modules/options/pages/options/planned-orders/buy-order-item/buy-order-item.component.ts ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuyOrderItemComponent": function() { return /* binding */ BuyOrderItemComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3190);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var _ngneat_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/dialog */ 6960);
/* harmony import */ var ngx_indexed_db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-indexed-db */ 5465);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);







function BuyOrderItemComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " View on market ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Total: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BuyOrderItemComponent_div_0_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.removeItem(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.orderItem.itemName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "https://steamcommunity.com/market/listings/" + ctx_r0.orderItem.appId + "/" + ctx_r0.orderItem.itemName, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 7, ctx_r0.orderItem.price, "1.2-2"), "", ctx_r0.currencySign, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("x", ctx_r0.orderItem.amount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 10, ctx_r0.orderItem.price * ctx_r0.orderItem.amount, "1.2-2"), "", ctx_r0.currencySign, " ");
} }
class BuyOrderItemComponent {
    constructor(dialog, dbService) {
        this.dialog = dialog;
        this.dbService = dbService;
        /**
         * Event emitter which emits information about removed item when it got removed
         *
         * @type {EventEmitter<BuyOrder>}
         * @memberof BuyOrderItemComponent
         */
        this.itemRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
    /**
     * Method show confirmation modal and on confirmed actions sends signal to remove item
     *
     * @memberof BuyOrderItemComponent
     */
    removeItem() {
        this.dialog.confirm({
            title: `Confirm your actions`,
            body: `You are about to remove <b>${this.orderItem.itemName}</b>.<br />Continue ?`
        })
            .afterClosed$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(confirmed => {
            // If user confirmed his actions - Removing from DB
            if (confirmed) {
                return this.dbService.delete('orders', this.orderItem.id)
                    .pipe(
                // After successful removal returning "true" as confirmation for successful action
                // because we don't care about updated list in this case
                (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(() => true));
            }
            else {
                // If user canceled his action returning "false"
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(false);
            }
        }))
            .subscribe(removed => {
            // Explicitlly checking for "true" value because there are cases where this can be truthy
            // but in our case we need to be sure that exactly Delete operation was completed
            if (removed === true) {
                this.itemRemoved.emit(this.orderItem);
            }
        });
    }
}
BuyOrderItemComponent.ɵfac = function BuyOrderItemComponent_Factory(t) { return new (t || BuyOrderItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngneat_dialog__WEBPACK_IMPORTED_MODULE_4__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_indexed_db__WEBPACK_IMPORTED_MODULE_5__.NgxIndexedDBService)); };
BuyOrderItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BuyOrderItemComponent, selectors: [["app-buy-order-item"]], inputs: { orderItem: "orderItem", currencySign: "currencySign" }, outputs: { itemRemoved: "itemRemoved" }, decls: 1, vars: 1, consts: [["class", "bg-white w-full flex flex-col items-center p-2 pb-0 rounded-xl shadow border hover:shadow-xl duration-200 animate__animated animate__fadeIn", 4, "ngIf"], [1, "bg-white", "w-full", "flex", "flex-col", "items-center", "p-2", "pb-0", "rounded-xl", "shadow", "border", "hover:shadow-xl", "duration-200", "animate__animated", "animate__fadeIn"], [1, "flex", "items-center", "w-full", "item-content"], [1, "flex-grow", "p-3"], [1, "font-semibold", "text-gray-700"], ["type", "button", "target", "_blank", 1, "text-sm", "text-gray-500", "hover:text-blue-900", "duration-200", 3, "href"], [1, "p-2", "text-right"], [1, "text-lg", "leading-3"], [1, "divider"], ["type", "button", 1, "ml-auto", "text-red-500", "hover:text-red-700", "duration-200", "transition-all", "pb-2", "px-4", 3, "click"]], template: function BuyOrderItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BuyOrderItemComponent_div_0_Template, 21, 13, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orderItem);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe], styles: [".item-content[_ngcontent-%COMP%] {\n  min-height: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1eS1vcmRlci1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSiIsImZpbGUiOiJidXktb3JkZXItaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtLWNvbnRlbnQge1xyXG4gICAgbWluLWhlaWdodDogODBweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 3008:
/*!******************************************************************************************************!*\
  !*** ./angular/src/app/modules/options/pages/options/planned-orders/planned-order-routing.module.ts ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlannedOrdersRoutingModule": function() { return /* binding */ PlannedOrdersRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _planned_orders_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./planned-orders.component */ 7520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




const routes = [
    {
        path: '',
        component: _planned_orders_component__WEBPACK_IMPORTED_MODULE_0__.PlannedOrdersComponent,
    }
];
class PlannedOrdersRoutingModule {
}
PlannedOrdersRoutingModule.ɵfac = function PlannedOrdersRoutingModule_Factory(t) { return new (t || PlannedOrdersRoutingModule)(); };
PlannedOrdersRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PlannedOrdersRoutingModule });
PlannedOrdersRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PlannedOrdersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 7520:
/*!**************************************************************************************************!*\
  !*** ./angular/src/app/modules/options/pages/options/planned-orders/planned-orders.component.ts ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlannedOrdersComponent": function() { return /* binding */ PlannedOrdersComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 4395);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 4612);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 6782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _options_facade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../options.facade */ 847);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _core_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/pagination/pagination.component */ 9057);
/* harmony import */ var _buy_order_item_buy_order_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buy-order-item/buy-order-item.component */ 9433);








const _c0 = ["pagination"];
function PlannedOrdersComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PlannedOrdersComponent_div_15_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.dropdownOpen = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c1 = function (a0, a1) { return { "bg-purple-500 text-white": a0, "hover:bg-gray-200": a1 }; };
function PlannedOrdersComponent_div_16_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PlannedOrdersComponent_div_16_button_1_Template_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const option_r7 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r8.changePageSize(option_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c1, option_r7 === ctx_r6.showPerPage, option_r7 !== ctx_r6.showPerPage));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", option_r7, " ");
} }
function PlannedOrdersComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PlannedOrdersComponent_div_16_button_1_Template, 2, 5, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.showPerPageOptions);
} }
function PlannedOrdersComponent_app_buy_order_item_18_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-buy-order-item", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("itemRemoved", function PlannedOrdersComponent_app_buy_order_item_18_Template_app_buy_order_item_itemRemoved_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const i_r11 = restoredCtx.index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r12.removeItem(i_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r10 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("orderItem", order_r10)("currencySign", ctx_r2.currencySign);
} }
const _c2 = function (a0, a1) { return { "rotate-180": a0, "rotate-0": a1 }; };
class PlannedOrdersComponent {
    constructor(optionsFacade, cdr) {
        this.optionsFacade = optionsFacade;
        this.cdr = cdr;
        /**
         * List with all orders for display. Used for pagination
         *
         * @type {BuyOrder[]}
         * @memberof PlannedOrdersComponent
         */
        this.allOrdersForDisplay = [];
        /**
         * List with current page items for display (from pagination)
         *
         * @type {BuyOrder[]}
         * @memberof PlannedOrdersComponent
         */
        this.currentPageItems = [];
        /**
         * Flag indicates if show per page option dropdown is opened
         *
         * @type {boolean}
         * @memberof PlannedOrdersComponent
         */
        this.dropdownOpen = false;
        /**
         * Number of items per page
         *
         * @type {number}
         * @memberof PlannedOrdersComponent
         */
        this.showPerPage = 18;
        /**
         * Available options of page size that user can select from
         *
         * @type {number[]}
         * @memberof PlannedOrdersComponent
         */
        this.showPerPageOptions = [9, 18, 27, 36];
        /**
         * Behavior Subject that receives search text value to filter results
         *
         * @private
         * @type {BehaviorSubject<string>}
         * @memberof PlannedOrdersComponent
         */
        this.searchSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject('');
        /**
         * List with planned orders for display
         *
         * @private
         * @type {BuyOrder[]}
         * @memberof PlannedOrdersComponent
         */
        this.plannedOrders = [];
        /**
         * Subject that is responsible for unsubscribing when component gets destroyed
         *
         * @private
         * @type {Subject<boolean>}
         * @memberof PlannedOrdersComponent
         */
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    }
    ngOnInit() {
        this.optionsFacade.getPlannedOrders()
            .subscribe(orders => {
            var _a, _b;
            this.plannedOrders = orders;
            // Getting currency sign for display if we have at least one planned order because
            // currency id is stored on planned order level
            if (this.plannedOrders.length) {
                // Finding necessary currency from stored list
                // ...and using its symbol
                this.currencySign = (_b = (_a = this.optionsFacade.getCurrency()) === null || _a === void 0 ? void 0 : _a.symbol) !== null && _b !== void 0 ? _b : '';
            }
        });
        // Subscribing to search input changes
        this.searchSubject.asObservable()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.concatMap)(searchText => {
            // Filtering results and returning filtered array
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(this.plannedOrders.filter(order => order.itemName
                .toLowerCase()
                .includes(searchText.toLowerCase())));
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)
        // tap(results => this.foundResults = results.length),
        )
            .subscribe(filteredResults => {
            // Storing amount of found results just for display
            this.foundResults = filteredResults.length;
            // Storing results for display
            this.allOrdersForDisplay = filteredResults;
        });
    }
    ngOnDestroy() {
        // Completing subscriptions
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    search(searchText) {
        this.searchSubject.next(searchText);
    }
    /**
     * Method fills planned buy order list for display after page changed
     *
     * @param {BuyOrder[]} pageOfItems New items for displayy
     * @memberof PlannedOrdersComponent
     */
    onChangePage(pageOfItems) {
        // Setting items that will be displayed
        this.currentPageItems = pageOfItems;
    }
    changePageSize(size) {
        this.showPerPage = size;
    }
    /**
     * Tracks order by ID. Used for performance to minimize rendering
     *
     * @param {number} index Item index
     * @param {BuyOrder} item Item of current iteration
     * @return {*} Returns id of current iteration item
     * @memberof PlannedOrdersComponent
     */
    orderById(index, item) {
        return item.id;
    }
    /**
     * Method removes planned order from list
     *
     * @param {number} currentPageIndex Index of element for removal on current page. Its not index in all list
     * @memberof PlannedOrdersComponent
     */
    removeItem(currentPageIndex) {
        // Getting index of item to remove among all items, not on current page
        const indexForRemoval = this.pagination.pager.startIndex + currentPageIndex;
        // Removing element from list of all items so after page change it won't appear again
        // NOTE: We are removing from two lists because one remains as original and the other one is
        // used for display and filtering
        this.pagination.items.splice(indexForRemoval, 1);
        this.plannedOrders.splice(indexForRemoval, 1);
        // Removing element from current page so it disappears
        this.currentPageItems.splice(currentPageIndex, 1);
        // Decreasing found result counter since element was removed
        this.foundResults--;
        // If there are no more items on current page then going back to previous page.
        // If user is currently on first page then it will trigger pagination recreate anyways
        if (!this.currentPageItems.length) {
            this.pagination.setPage(this.pagination.pager.currentPage - 1);
        }
    }
}
PlannedOrdersComponent.ɵfac = function PlannedOrdersComponent_Factory(t) { return new (t || PlannedOrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_options_facade__WEBPACK_IMPORTED_MODULE_0__.OptionsFacade), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef)); };
PlannedOrdersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PlannedOrdersComponent, selectors: [["app-planned-orders"]], viewQuery: function PlannedOrdersComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.pagination = _t.first);
    } }, decls: 21, vars: 12, consts: [[1, "container", "mx-auto"], [1, "my-auto", "mx-auto"], [1, "relative", "w-full", "lg:w-1/2", "mx-auto", "text-gray-600", "mb-0"], ["type", "search", "name", "serch", "placeholder", "Filter items by name", 1, "w-full", "bg-white", "h-10", "px-5", "pr-10", "rounded-full", "text-sm", "focus:outline-none", "hover:shadow-xl", "duration-200", 3, "ngModel", "ngModelChange"], [1, "absolute", "right-0", "top-0", "mt-3", "mr-4"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "version", "1.1", "id", "Capa_1", "x", "0px", "y", "0px", "viewBox", "0 0 56.966 56.966", 0, "xml", "space", "preserve", "width", "512px", "height", "512px", 1, "h-4", "w-4", "fill-current", 2, "enable-background", "new 0 0 56.966 56.966"], ["d", "M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"], [1, "flex", "justify-evenly", "align-center", "mb-4", "mt-4"], [1, "h5", "text-center", "font-semibold"], [1, "relative"], [1, "relative", "hover:text-blue-500", "duration-200", "font-semibold", 3, "click"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "inline", "w-4", "h-4", "mt-1", "transition-transform", "duration-200", "transform", "md:-mt-1", "rotate-0", 3, "ngClass"], ["fill-rule", "evenodd", "d", "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z", "clip-rule", "evenodd"], ["class", "fixed inset-0 h-full w-full z-10", 3, "click", 4, "ngIf"], ["class", "\n            absolute\n            right-0\n            mt-2\n            bg-white\n            rounded-md\n            overflow-hidden\n            shadow-xl\n            z-20\n          ", 4, "ngIf"], [1, "grid", "sm:grid-cols-2", "lg:grid-cols-3", "xl:grids-cols-4", "grid-cols-1", "gap-4", "px-3"], [3, "orderItem", "currencySign", "itemRemoved", 4, "ngFor", "ngForOf"], [3, "items", "pageSize", "changePage"], ["pagination", ""], [1, "fixed", "inset-0", "h-full", "w-full", "z-10", 3, "click"], [1, "absolute", "right-0", "mt-2", "bg-white", "rounded-md", "overflow-hidden", "shadow-xl", "z-20"], ["type", "button", "class", "block px-4 py-2 w-full text-sm border-b duration-200", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "block", "px-4", "py-2", "w-full", "text-sm", "border-b", "duration-200", 3, "ngClass", "click"], [3, "orderItem", "currencySign", "itemRemoved"]], template: function PlannedOrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function PlannedOrdersComponent_Template_input_ngModelChange_3_listener($event) { return ctx.search($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PlannedOrdersComponent_Template_button_click_11_listener() { return ctx.dropdownOpen = !ctx.dropdownOpen; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, PlannedOrdersComponent_div_15_Template, 1, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, PlannedOrdersComponent_div_16_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, PlannedOrdersComponent_app_buy_order_item_18_Template, 1, 2, "app-buy-order-item", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "app-pagination", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("changePage", function PlannedOrdersComponent_Template_app_pagination_changePage_19_listener($event) { return ctx.onChangePage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Found ", ctx.foundResults, " results ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Show per page: ", ctx.showPerPage, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](9, _c2, ctx.dropdownOpen, !ctx.dropdownOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.dropdownOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.dropdownOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.currentPageItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", ctx.allOrdersForDisplay)("pageSize", ctx.showPerPage);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _core_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_1__.PaginationComponent, _buy_order_item_buy_order_item_component__WEBPACK_IMPORTED_MODULE_2__.BuyOrderItemComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGFubmVkLW9yZGVycy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 6991:
/*!***********************************************************************************************!*\
  !*** ./angular/src/app/modules/options/pages/options/planned-orders/planned-orders.module.ts ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlannedOrdersModule": function() { return /* binding */ PlannedOrdersModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _core_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/pagination/pagination.module */ 7617);
/* harmony import */ var _buy_order_item_buy_order_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buy-order-item/buy-order-item.component */ 9433);
/* harmony import */ var _planned_order_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./planned-order-routing.module */ 3008);
/* harmony import */ var _planned_orders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./planned-orders.component */ 7520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);







class PlannedOrdersModule {
}
PlannedOrdersModule.ɵfac = function PlannedOrdersModule_Factory(t) { return new (t || PlannedOrdersModule)(); };
PlannedOrdersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: PlannedOrdersModule });
PlannedOrdersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _planned_order_routing_module__WEBPACK_IMPORTED_MODULE_2__.PlannedOrdersRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _core_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_0__.PaginationModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PlannedOrdersModule, { declarations: [_planned_orders_component__WEBPACK_IMPORTED_MODULE_3__.PlannedOrdersComponent, _buy_order_item_buy_order_item_component__WEBPACK_IMPORTED_MODULE_1__.BuyOrderItemComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _planned_order_routing_module__WEBPACK_IMPORTED_MODULE_2__.PlannedOrdersRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _core_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_0__.PaginationModule] }); })();


/***/ }),

/***/ 2217:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/Scheduler.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Scheduler": function() { return /* binding */ Scheduler; }
/* harmony export */ });
class Scheduler {
    constructor(SchedulerAction, now = Scheduler.now) {
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    schedule(work, delay = 0, state) {
        return new this.SchedulerAction(this, work).schedule(state, delay);
    }
}
Scheduler.now = () => Date.now();
//# sourceMappingURL=Scheduler.js.map

/***/ }),

/***/ 4395:
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/debounceTime.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debounceTime": function() { return /* binding */ debounceTime; }
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ 7393);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 3637);


function debounceTime(dueTime, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
    return (source) => source.lift(new DebounceTimeOperator(dueTime, scheduler));
}
class DebounceTimeOperator {
    constructor(dueTime, scheduler) {
        this.dueTime = dueTime;
        this.scheduler = scheduler;
    }
    call(subscriber, source) {
        return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
    }
}
class DebounceTimeSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_1__.Subscriber {
    constructor(destination, dueTime, scheduler) {
        super(destination);
        this.dueTime = dueTime;
        this.scheduler = scheduler;
        this.debouncedSubscription = null;
        this.lastValue = null;
        this.hasValue = false;
    }
    _next(value) {
        this.clearDebounce();
        this.lastValue = value;
        this.hasValue = true;
        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
    }
    _complete() {
        this.debouncedNext();
        this.destination.complete();
    }
    debouncedNext() {
        this.clearDebounce();
        if (this.hasValue) {
            const { lastValue } = this;
            this.lastValue = null;
            this.hasValue = false;
            this.destination.next(lastValue);
        }
    }
    clearDebounce() {
        const debouncedSubscription = this.debouncedSubscription;
        if (debouncedSubscription !== null) {
            this.remove(debouncedSubscription);
            debouncedSubscription.unsubscribe();
            this.debouncedSubscription = null;
        }
    }
}
function dispatchNext(subscriber) {
    subscriber.debouncedNext();
}
//# sourceMappingURL=debounceTime.js.map

/***/ }),

/***/ 2901:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/Action.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Action": function() { return /* binding */ Action; }
/* harmony export */ });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscription */ 826);

class Action extends _Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription {
    constructor(scheduler, work) {
        super();
    }
    schedule(state, delay = 0) {
        return this;
    }
}
//# sourceMappingURL=Action.js.map

/***/ }),

/***/ 401:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsyncAction.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncAction": function() { return /* binding */ AsyncAction; }
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action */ 2901);

class AsyncAction extends _Action__WEBPACK_IMPORTED_MODULE_0__.Action {
    constructor(scheduler, work) {
        super(scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
        this.pending = false;
    }
    schedule(state, delay = 0) {
        if (this.closed) {
            return this;
        }
        this.state = state;
        const id = this.id;
        const scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    }
    requestAsyncId(scheduler, id, delay = 0) {
        return setInterval(scheduler.flush.bind(scheduler, this), delay);
    }
    recycleAsyncId(scheduler, id, delay = 0) {
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        clearInterval(id);
        return undefined;
    }
    execute(state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        const error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    }
    _execute(state, delay) {
        let errored = false;
        let errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    }
    _unsubscribe() {
        const id = this.id;
        const scheduler = this.scheduler;
        const actions = scheduler.actions;
        const index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    }
}
//# sourceMappingURL=AsyncAction.js.map

/***/ }),

/***/ 4548:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsyncScheduler.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncScheduler": function() { return /* binding */ AsyncScheduler; }
/* harmony export */ });
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Scheduler */ 2217);

class AsyncScheduler extends _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler {
    constructor(SchedulerAction, now = _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler.now) {
        super(SchedulerAction, () => {
            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
                return AsyncScheduler.delegate.now();
            }
            else {
                return now();
            }
        });
        this.actions = [];
        this.active = false;
        this.scheduled = undefined;
    }
    schedule(work, delay = 0, state) {
        if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
            return AsyncScheduler.delegate.schedule(work, delay, state);
        }
        else {
            return super.schedule(work, delay, state);
        }
    }
    flush(action) {
        const { actions } = this;
        if (this.active) {
            actions.push(action);
            return;
        }
        let error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift());
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    }
}
//# sourceMappingURL=AsyncScheduler.js.map

/***/ }),

/***/ 3637:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/async.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "asyncScheduler": function() { return /* binding */ asyncScheduler; },
/* harmony export */   "async": function() { return /* binding */ async; }
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ 401);
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 4548);


const asyncScheduler = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__.AsyncAction);
const async = asyncScheduler;
//# sourceMappingURL=async.js.map

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iby1wbGFubmVyLy4vYW5ndWxhci9zcmMvYXBwL2NvcmUvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9iby1wbGFubmVyLy4vYW5ndWxhci9zcmMvYXBwL2NvcmUvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovL2JvLXBsYW5uZXIvLi9hbmd1bGFyL3NyYy9hcHAvY29yZS9wYWdpbmF0aW9uL3BhZ2luYXRpb24ubW9kdWxlLnRzIiwid2VicGFjazovL2JvLXBsYW5uZXIvLi9hbmd1bGFyL3NyYy9hcHAvY29yZS9wYWdpbmF0aW9uL3BhZ2luYXRpb24udXRpbHMudHMiLCJ3ZWJwYWNrOi8vYm8tcGxhbm5lci8uL2FuZ3VsYXIvc3JjL2FwcC9tb2R1bGVzL29wdGlvbnMvcGFnZXMvb3B0aW9ucy9wbGFubmVkLW9yZGVycy9idXktb3JkZXItaXRlbS9idXktb3JkZXItaXRlbS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vYm8tcGxhbm5lci8uL2FuZ3VsYXIvc3JjL2FwcC9tb2R1bGVzL29wdGlvbnMvcGFnZXMvb3B0aW9ucy9wbGFubmVkLW9yZGVycy9idXktb3JkZXItaXRlbS9idXktb3JkZXItaXRlbS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly9iby1wbGFubmVyLy4vYW5ndWxhci9zcmMvYXBwL21vZHVsZXMvb3B0aW9ucy9wYWdlcy9vcHRpb25zL3BsYW5uZWQtb3JkZXJzL3BsYW5uZWQtb3JkZXItcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vYm8tcGxhbm5lci8uL2FuZ3VsYXIvc3JjL2FwcC9tb2R1bGVzL29wdGlvbnMvcGFnZXMvb3B0aW9ucy9wbGFubmVkLW9yZGVycy9wbGFubmVkLW9yZGVycy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vYm8tcGxhbm5lci8uL2FuZ3VsYXIvc3JjL2FwcC9tb2R1bGVzL29wdGlvbnMvcGFnZXMvb3B0aW9ucy9wbGFubmVkLW9yZGVycy9wbGFubmVkLW9yZGVycy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly9iby1wbGFubmVyLy4vYW5ndWxhci9zcmMvYXBwL21vZHVsZXMvb3B0aW9ucy9wYWdlcy9vcHRpb25zL3BsYW5uZWQtb3JkZXJzL3BsYW5uZWQtb3JkZXJzLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9iby1wbGFubmVyLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTIwMTUvaW50ZXJuYWwvU2NoZWR1bGVyLmpzIiwid2VicGFjazovL2JvLXBsYW5uZXIvLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtMjAxNS9pbnRlcm5hbC9vcGVyYXRvcnMvZGVib3VuY2VUaW1lLmpzIiwid2VicGFjazovL2JvLXBsYW5uZXIvLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtMjAxNS9pbnRlcm5hbC9zY2hlZHVsZXIvQWN0aW9uLmpzIiwid2VicGFjazovL2JvLXBsYW5uZXIvLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtMjAxNS9pbnRlcm5hbC9zY2hlZHVsZXIvQXN5bmNBY3Rpb24uanMiLCJ3ZWJwYWNrOi8vYm8tcGxhbm5lci8uL25vZGVfbW9kdWxlcy9yeGpzL19lc20yMDE1L2ludGVybmFsL3NjaGVkdWxlci9Bc3luY1NjaGVkdWxlci5qcyIsIndlYnBhY2s6Ly9iby1wbGFubmVyLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTIwMTUvaW50ZXJuYWwvc2NoZWR1bGVyL2FzeW5jLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0k7QUFDcEY7Ozs7OztJQ2dDeEMsMEVBZ0JJO0lBYkYsMlhBQXVCO0lBY3ZCLHVEQUNGO0lBQUEsNERBQU07Ozs7SUFoQkosZ0xBQXNFO0lBZXRFLDBEQUNGO0lBREUsbUZBQ0Y7Ozs7O0lBbkROLHlFQUU0QztJQUMxQyx5RUFBZ0M7SUFDOUIseUVBYUk7SUFYRix3VUFBcUMsQ0FBQyxLQUFFO0lBWXhDLDhEQVUrQztJQVYvQyx5RUFVK0M7SUFDN0Ms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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdDNEM7QUFDTTtBQUMzQywyQkFBMkIsMkRBQWMsQ0FBQyxxREFBVztBQUNyRDtBQUNQLGlDIiwiZmlsZSI6ImFuZ3VsYXJfc3JjX2FwcF9tb2R1bGVzX29wdGlvbnNfcGFnZXNfb3B0aW9uc19wbGFubmVkLW9yZGVyc19wbGFubmVkLW9yZGVyc19tb2R1bGVfdHMtZXMyMDE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcGFnaW5hdGUgfSBmcm9tICcuL3BhZ2luYXRpb24udXRpbHMnO1xuXG4vLyBTcmM6IGh0dHBzOi8vamFzb253YXRtb3JlLmNvbS9wb3N0LzIwMTkvMDYvMTgvYW5ndWxhci04LXNpbXBsZS1wYWdpbmF0aW9uLWV4YW1wbGVcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXBhZ2luYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnaW5hdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BhZ2luYXRpb24uY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGl0ZW1zOiBBcnJheTxhbnk+O1xuICBAT3V0cHV0KCkgY2hhbmdlUGFnZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55Pih0cnVlKTtcbiAgQElucHV0KCkgaW5pdGlhbFBhZ2UgPSAxO1xuICBASW5wdXQoKSBwYWdlU2l6ZSA9IDEwO1xuICBASW5wdXQoKSBtYXhQYWdlcyA9IDY7XG4gIHBhZ2VyOiBhbnkgPSB7fTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBzZXQgcGFnZSBpZiBpdGVtcyBhcnJheSBpc24ndCBlbXB0eVxuICAgIGlmICh0aGlzLml0ZW1zICYmIHRoaXMuaXRlbXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnNldFBhZ2UodGhpcy5pbml0aWFsUGFnZSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIC8vIFJlc2V0IHBhZ2UgaWYgaXRlbXMgYXJyYXkgaGFzIGNoYW5nZWRcbiAgICBpZiAoY2hhbmdlcz8uaXRlbXM/LmN1cnJlbnRWYWx1ZSAhPT0gY2hhbmdlcz8uaXRlbXM/LnByZXZpb3VzVmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0UGFnZSh0aGlzLmluaXRpYWxQYWdlKTtcbiAgICB9XG5cbiAgICAvLyBSZXNldCBwYWdlIGlmIHBhZ2Ugc2l6ZSBoYXMgY2hhbmdlZFxuICAgIGlmIChjaGFuZ2VzPy5wYWdlU2l6ZT8uY3VycmVudFZhbHVlICE9PSBjaGFuZ2VzPy5wYWdlU2l6ZT8ucHJldmlvdXNWYWx1ZSkge1xuICAgICAgdGhpcy5zZXRQYWdlKHRoaXMuaW5pdGlhbFBhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHNldFBhZ2UocGFnZTogbnVtYmVyKSB7XG4gICAgLy8gZ2V0IG5ldyBwYWdlciBvYmplY3QgZm9yIHNwZWNpZmllZCBwYWdlXG4gICAgdGhpcy5wYWdlciA9IHBhZ2luYXRlKHRoaXMuaXRlbXMubGVuZ3RoLCBwYWdlLCB0aGlzLnBhZ2VTaXplLCB0aGlzLm1heFBhZ2VzKTtcblxuICAgIC8vIGdldCBuZXcgcGFnZSBvZiBpdGVtcyBmcm9tIGl0ZW1zIGFycmF5XG4gICAgdmFyIHBhZ2VPZkl0ZW1zID0gdGhpcy5pdGVtcy5zbGljZSh0aGlzLnBhZ2VyLnN0YXJ0SW5kZXgsIHRoaXMucGFnZXIuZW5kSW5kZXggKyAxKTtcblxuICAgIC8vIGNhbGwgY2hhbmdlIHBhZ2UgZnVuY3Rpb24gaW4gcGFyZW50IGNvbXBvbmVudFxuICAgIHRoaXMuY2hhbmdlUGFnZS5lbWl0KHBhZ2VPZkl0ZW1zKTtcbiAgfVxufVxuIiwiPGRpdlxuICBjbGFzcz1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHB5LTZcIlxuICAqbmdJZj1cInBhZ2VyLnBhZ2VzICYmIHBhZ2VyLnBhZ2VzLmxlbmd0aFwiPlxuICA8ZGl2IGNsYXNzPVwiZmxleCB0ZXh0LWdyYXktNzAwXCI+XG4gICAgPGRpdlxuICAgICAgW25nQ2xhc3NdPVwieyBkaXNhYmxlZDogcGFnZXIuY3VycmVudFBhZ2UgPT09IDEgfVwiXG4gICAgICAoY2xpY2spPVwic2V0UGFnZShwYWdlci5jdXJyZW50UGFnZSAtIDEpXCJcbiAgICAgIGNsYXNzPVwiXG4gICAgICAgIGgtMTJcbiAgICAgICAgdy0xMlxuICAgICAgICBtci0xXG4gICAgICAgIGZsZXhcbiAgICAgICAganVzdGlmeS1jZW50ZXJcbiAgICAgICAgaXRlbXMtY2VudGVyXG4gICAgICAgIHJvdW5kZWQtZnVsbFxuICAgICAgICBiZy13aGl0ZVxuICAgICAgICBjdXJzb3ItcG9pbnRlclxuICAgICAgXCI+XG4gICAgICA8c3ZnXG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMlwiXG4gICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxuICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tbGVmdCB3LTYgaC02XCI+XG4gICAgICAgIDxwb2x5bGluZSBwb2ludHM9XCIxNSAxOCA5IDEyIDE1IDZcIj48L3BvbHlsaW5lPlxuICAgICAgPC9zdmc+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImZsZXggaC0xMiBmb250LW1lZGl1bSByb3VuZGVkLWZ1bGxcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgKm5nRm9yPVwibGV0IHBhZ2Ugb2YgcGFnZXIucGFnZXNcIlxuICAgICAgICBbbmdDbGFzc109XCJ7ICdiZy1wdXJwbGUtNTAwIHRleHQtd2hpdGUnOiBwYWdlci5jdXJyZW50UGFnZSA9PT0gcGFnZSB9XCJcbiAgICAgICAgKGNsaWNrKT1cInNldFBhZ2UocGFnZSlcIlxuICAgICAgICBjbGFzcz1cIlxuICAgICAgICAgIHctMTJcbiAgICAgICAgICBtZDpmbGV4XG4gICAgICAgICAganVzdGlmeS1jZW50ZXJcbiAgICAgICAgICBpdGVtcy1jZW50ZXJcbiAgICAgICAgICBoaWRkZW5cbiAgICAgICAgICBjdXJzb3ItcG9pbnRlclxuICAgICAgICAgIGxlYWRpbmctNVxuICAgICAgICAgIHRyYW5zaXRpb25cbiAgICAgICAgICBkdXJhdGlvbi0xNTBcbiAgICAgICAgICBlYXNlLWluXG4gICAgICAgICAgcm91bmRlZC1mdWxsXG4gICAgICAgIFwiPlxuICAgICAgICB7eyBwYWdlIH19XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2XG4gICAgICBbbmdDbGFzc109XCJ7IGRpc2FibGVkOiBwYWdlci5jdXJyZW50UGFnZSA9PT0gcGFnZXIudG90YWxQYWdlcyB9XCJcbiAgICAgIChjbGljayk9XCJzZXRQYWdlKHBhZ2VyLmN1cnJlbnRQYWdlICsgMSlcIlxuICAgICAgY2xhc3M9XCJcbiAgICAgICAgaC0xMlxuICAgICAgICB3LTEyXG4gICAgICAgIG1sLTFcbiAgICAgICAgZmxleFxuICAgICAgICBqdXN0aWZ5LWNlbnRlclxuICAgICAgICBpdGVtcy1jZW50ZXJcbiAgICAgICAgcm91bmRlZC1mdWxsXG4gICAgICAgIGJnLXdoaXRlXG4gICAgICAgIGN1cnNvci1wb2ludGVyXG4gICAgICBcIj5cbiAgICAgIDxzdmdcbiAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICBzdHJva2Utd2lkdGg9XCIyXCJcbiAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgY2xhc3M9XCJmZWF0aGVyIGZlYXRoZXItY2hldnJvbi1yaWdodCB3LTYgaC02XCI+XG4gICAgICAgIDxwb2x5bGluZSBwb2ludHM9XCI5IDE4IDE1IDEyIDkgNlwiPjwvcG9seWxpbmU+XG4gICAgICA8L3N2Zz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vcGFnaW5hdGlvbi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1BhZ2luYXRpb25Db21wb25lbnRdLFxuICBleHBvcnRzOiBbXG4gICAgUGFnaW5hdGlvbkNvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbk1vZHVsZSB7IH1cbiIsIi8vIFNyYzogaHR0cHM6Ly9naXRodWIuY29tL2Nvcm5mbG91cmJsdWUvanctYW5ndWxhci1wYWdpbmF0aW9uL2Jsb2IvMjdjNGE3YzBmYmM2MzVjMTQyMjdkYTYyYmI5NGNjMzUyMGNhM2E3NS9wcm9qZWN0cy9qdy1wYWdpbmF0aW9uL25vZGVfbW9kdWxlcy9qdy1wYWdpbmF0ZS9saWIvanctcGFnaW5hdGUuanMjTDJcclxuZXhwb3J0IGZ1bmN0aW9uIHBhZ2luYXRlKHRvdGFsSXRlbXMsIGN1cnJlbnRQYWdlLCBwYWdlU2l6ZSwgbWF4UGFnZXMpIHtcclxuICAgIGlmIChjdXJyZW50UGFnZSA9PT0gdm9pZCAwKSB7IGN1cnJlbnRQYWdlID0gMTsgfVxyXG4gICAgaWYgKHBhZ2VTaXplID09PSB2b2lkIDApIHsgcGFnZVNpemUgPSAxMDsgfVxyXG4gICAgaWYgKG1heFBhZ2VzID09PSB2b2lkIDApIHsgbWF4UGFnZXMgPSAxMDsgfVxyXG4gICAgLy8gY2FsY3VsYXRlIHRvdGFsIHBhZ2VzXHJcbiAgICB2YXIgdG90YWxQYWdlcyA9IE1hdGguY2VpbCh0b3RhbEl0ZW1zIC8gcGFnZVNpemUpO1xyXG4gICAgLy8gZW5zdXJlIGN1cnJlbnQgcGFnZSBpc24ndCBvdXQgb2YgcmFuZ2VcclxuICAgIGlmIChjdXJyZW50UGFnZSA8IDEpIHtcclxuICAgICAgICBjdXJyZW50UGFnZSA9IDE7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChjdXJyZW50UGFnZSA+IHRvdGFsUGFnZXMpIHtcclxuICAgICAgICBjdXJyZW50UGFnZSA9IHRvdGFsUGFnZXM7XHJcbiAgICB9XHJcbiAgICB2YXIgc3RhcnRQYWdlLCBlbmRQYWdlO1xyXG4gICAgaWYgKHRvdGFsUGFnZXMgPD0gbWF4UGFnZXMpIHtcclxuICAgICAgICAvLyB0b3RhbCBwYWdlcyBsZXNzIHRoYW4gbWF4IHNvIHNob3cgYWxsIHBhZ2VzXHJcbiAgICAgICAgc3RhcnRQYWdlID0gMTtcclxuICAgICAgICBlbmRQYWdlID0gdG90YWxQYWdlcztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIC8vIHRvdGFsIHBhZ2VzIG1vcmUgdGhhbiBtYXggc28gY2FsY3VsYXRlIHN0YXJ0IGFuZCBlbmQgcGFnZXNcclxuICAgICAgICB2YXIgbWF4UGFnZXNCZWZvcmVDdXJyZW50UGFnZSA9IE1hdGguZmxvb3IobWF4UGFnZXMgLyAyKTtcclxuICAgICAgICB2YXIgbWF4UGFnZXNBZnRlckN1cnJlbnRQYWdlID0gTWF0aC5jZWlsKG1heFBhZ2VzIC8gMikgLSAxO1xyXG4gICAgICAgIGlmIChjdXJyZW50UGFnZSA8PSBtYXhQYWdlc0JlZm9yZUN1cnJlbnRQYWdlKSB7XHJcbiAgICAgICAgICAgIC8vIGN1cnJlbnQgcGFnZSBuZWFyIHRoZSBzdGFydFxyXG4gICAgICAgICAgICBzdGFydFBhZ2UgPSAxO1xyXG4gICAgICAgICAgICBlbmRQYWdlID0gbWF4UGFnZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGN1cnJlbnRQYWdlICsgbWF4UGFnZXNBZnRlckN1cnJlbnRQYWdlID49IHRvdGFsUGFnZXMpIHtcclxuICAgICAgICAgICAgLy8gY3VycmVudCBwYWdlIG5lYXIgdGhlIGVuZFxyXG4gICAgICAgICAgICBzdGFydFBhZ2UgPSB0b3RhbFBhZ2VzIC0gbWF4UGFnZXMgKyAxO1xyXG4gICAgICAgICAgICBlbmRQYWdlID0gdG90YWxQYWdlcztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGN1cnJlbnQgcGFnZSBzb21ld2hlcmUgaW4gdGhlIG1pZGRsZVxyXG4gICAgICAgICAgICBzdGFydFBhZ2UgPSBjdXJyZW50UGFnZSAtIG1heFBhZ2VzQmVmb3JlQ3VycmVudFBhZ2U7XHJcbiAgICAgICAgICAgIGVuZFBhZ2UgPSBjdXJyZW50UGFnZSArIG1heFBhZ2VzQWZ0ZXJDdXJyZW50UGFnZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBjYWxjdWxhdGUgc3RhcnQgYW5kIGVuZCBpdGVtIGluZGV4ZXNcclxuICAgIHZhciBzdGFydEluZGV4ID0gKGN1cnJlbnRQYWdlIC0gMSkgKiBwYWdlU2l6ZTtcclxuICAgIHZhciBlbmRJbmRleCA9IE1hdGgubWluKHN0YXJ0SW5kZXggKyBwYWdlU2l6ZSAtIDEsIHRvdGFsSXRlbXMgLSAxKTtcclxuICAgIC8vIGNyZWF0ZSBhbiBhcnJheSBvZiBwYWdlcyB0byBuZy1yZXBlYXQgaW4gdGhlIHBhZ2VyIGNvbnRyb2xcclxuICAgIHZhciBwYWdlcyA9IEFycmF5LmZyb20oQXJyYXkoKGVuZFBhZ2UgKyAxKSAtIHN0YXJ0UGFnZSkua2V5cygpKS5tYXAoZnVuY3Rpb24gKGkpIHsgcmV0dXJuIHN0YXJ0UGFnZSArIGk7IH0pO1xyXG4gICAgLy8gcmV0dXJuIG9iamVjdCB3aXRoIGFsbCBwYWdlciBwcm9wZXJ0aWVzIHJlcXVpcmVkIGJ5IHRoZSB2aWV3XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRvdGFsSXRlbXM6IHRvdGFsSXRlbXMsXHJcbiAgICAgICAgY3VycmVudFBhZ2U6IGN1cnJlbnRQYWdlLFxyXG4gICAgICAgIHBhZ2VTaXplOiBwYWdlU2l6ZSxcclxuICAgICAgICB0b3RhbFBhZ2VzOiB0b3RhbFBhZ2VzLFxyXG4gICAgICAgIHN0YXJ0UGFnZTogc3RhcnRQYWdlLFxyXG4gICAgICAgIGVuZFBhZ2U6IGVuZFBhZ2UsXHJcbiAgICAgICAgc3RhcnRJbmRleDogc3RhcnRJbmRleCxcclxuICAgICAgICBlbmRJbmRleDogZW5kSW5kZXgsXHJcbiAgICAgICAgcGFnZXM6IHBhZ2VzXHJcbiAgICB9O1xyXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGlhbG9nU2VydmljZSB9IGZyb20gJ0BuZ25lYXQvZGlhbG9nJztcbmltcG9ydCB7IE5neEluZGV4ZWREQlNlcnZpY2UgfSBmcm9tICduZ3gtaW5kZXhlZC1kYic7XG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBCdXlPcmRlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL21vZGVscy9idXktb3JkZXIubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtYnV5LW9yZGVyLWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vYnV5LW9yZGVyLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9idXktb3JkZXItaXRlbS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJ1eU9yZGVySXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBDdXJyZW50IGJ1eSBvcmRlciBwbGFuIGl0ZW1cbiAgICpcbiAgICogQHR5cGUge0J1eU9yZGVyfVxuICAgKiBAbWVtYmVyb2YgQnV5T3JkZXJJdGVtQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSBvcmRlckl0ZW06IEJ1eU9yZGVyO1xuICAvKipcbiAgICogRXZlbnQgZW1pdHRlciB3aGljaCBlbWl0cyBpbmZvcm1hdGlvbiBhYm91dCByZW1vdmVkIGl0ZW0gd2hlbiBpdCBnb3QgcmVtb3ZlZFxuICAgKlxuICAgKiBAdHlwZSB7RXZlbnRFbWl0dGVyPEJ1eU9yZGVyPn1cbiAgICogQG1lbWJlcm9mIEJ1eU9yZGVySXRlbUNvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpIGl0ZW1SZW1vdmVkOiBFdmVudEVtaXR0ZXI8QnV5T3JkZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvKipcbiAgICogQ3VycmVuY3kgc2lnbiBmb3IgdmlzdWFsIGRpc3BsYXlcbiAgICpcbiAgICogQHR5cGUge3N0cmluZ31cbiAgICogQG1lbWJlcm9mIEJ1eU9yZGVySXRlbUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgY3VycmVuY3lTaWduOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZGlhbG9nOiBEaWFsb2dTZXJ2aWNlLFxuICAgIHByaXZhdGUgZGJTZXJ2aWNlOiBOZ3hJbmRleGVkREJTZXJ2aWNlLFxuICApIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgLyoqXG4gICAqIE1ldGhvZCBzaG93IGNvbmZpcm1hdGlvbiBtb2RhbCBhbmQgb24gY29uZmlybWVkIGFjdGlvbnMgc2VuZHMgc2lnbmFsIHRvIHJlbW92ZSBpdGVtXG4gICAqXG4gICAqIEBtZW1iZXJvZiBCdXlPcmRlckl0ZW1Db21wb25lbnRcbiAgICovXG4gIHJlbW92ZUl0ZW0oKSB7XG4gICAgdGhpcy5kaWFsb2cuY29uZmlybSh7XG4gICAgICB0aXRsZTogYENvbmZpcm0geW91ciBhY3Rpb25zYCxcbiAgICAgIGJvZHk6IGBZb3UgYXJlIGFib3V0IHRvIHJlbW92ZSA8Yj4ke3RoaXMub3JkZXJJdGVtLml0ZW1OYW1lfTwvYj4uPGJyIC8+Q29udGludWUgP2BcbiAgICB9KVxuICAgICAgLmFmdGVyQ2xvc2VkJFxuICAgICAgLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcChjb25maXJtZWQgPT4ge1xuICAgICAgICAgIC8vIElmIHVzZXIgY29uZmlybWVkIGhpcyBhY3Rpb25zIC0gUmVtb3ZpbmcgZnJvbSBEQlxuICAgICAgICAgIGlmIChjb25maXJtZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRiU2VydmljZS5kZWxldGU8QnV5T3JkZXI+KCdvcmRlcnMnLCB0aGlzLm9yZGVySXRlbS5pZClcbiAgICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgLy8gQWZ0ZXIgc3VjY2Vzc2Z1bCByZW1vdmFsIHJldHVybmluZyBcInRydWVcIiBhcyBjb25maXJtYXRpb24gZm9yIHN1Y2Nlc3NmdWwgYWN0aW9uXG4gICAgICAgICAgICAgICAgLy8gYmVjYXVzZSB3ZSBkb24ndCBjYXJlIGFib3V0IHVwZGF0ZWQgbGlzdCBpbiB0aGlzIGNhc2VcbiAgICAgICAgICAgICAgICBtYXAoKCkgPT4gdHJ1ZSlcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSWYgdXNlciBjYW5jZWxlZCBoaXMgYWN0aW9uIHJldHVybmluZyBcImZhbHNlXCJcbiAgICAgICAgICAgIHJldHVybiBvZihmYWxzZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShyZW1vdmVkID0+IHtcbiAgICAgICAgLy8gRXhwbGljaXRsbHkgY2hlY2tpbmcgZm9yIFwidHJ1ZVwiIHZhbHVlIGJlY2F1c2UgdGhlcmUgYXJlIGNhc2VzIHdoZXJlIHRoaXMgY2FuIGJlIHRydXRoeVxuICAgICAgICAvLyBidXQgaW4gb3VyIGNhc2Ugd2UgbmVlZCB0byBiZSBzdXJlIHRoYXQgZXhhY3RseSBEZWxldGUgb3BlcmF0aW9uIHdhcyBjb21wbGV0ZWRcbiAgICAgICAgaWYgKHJlbW92ZWQgPT09IHRydWUpIHtcbiAgICAgICAgICB0aGlzLml0ZW1SZW1vdmVkLmVtaXQodGhpcy5vcmRlckl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG59XG4iLCI8ZGl2XG4gIGNsYXNzPVwiYmctd2hpdGUgdy1mdWxsIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHAtMiBwYi0wIHJvdW5kZWQteGwgc2hhZG93IGJvcmRlciBob3ZlcjpzaGFkb3cteGwgZHVyYXRpb24tMjAwIGFuaW1hdGVfX2FuaW1hdGVkIGFuaW1hdGVfX2ZhZGVJblwiXG4gICpuZ0lmPVwib3JkZXJJdGVtXCI+XG4gIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciB3LWZ1bGwgaXRlbS1jb250ZW50XCI+XG4gICAgPGRpdiBjbGFzcz1cImZsZXgtZ3JvdyBwLTNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb250LXNlbWlib2xkIHRleHQtZ3JheS03MDBcIj57eyBvcmRlckl0ZW0uaXRlbU5hbWUgfX08L2Rpdj5cbiAgICAgIDxhXG4gICAgICAgIFtocmVmXT1cIlxuICAgICAgICAgICdodHRwczovL3N0ZWFtY29tbXVuaXR5LmNvbS9tYXJrZXQvbGlzdGluZ3MvJyArXG4gICAgICAgICAgb3JkZXJJdGVtLmFwcElkICtcbiAgICAgICAgICAnLycgK1xuICAgICAgICAgIG9yZGVySXRlbS5pdGVtTmFtZVxuICAgICAgICBcIlxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3M9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDAgaG92ZXI6dGV4dC1ibHVlLTkwMCBkdXJhdGlvbi0yMDBcIlxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgVmlldyBvbiBtYXJrZXRcbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicC0yIHRleHQtcmlnaHRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWxnIGxlYWRpbmctM1wiPlxuICAgICAgICB7eyBvcmRlckl0ZW0ucHJpY2UgfCBudW1iZXI6ICcxLjItMicgfX17eyBjdXJyZW5jeVNpZ24gfX1cbiAgICAgIDwvZGl2PlxuICAgICAgPHNtYWxsPnh7eyBvcmRlckl0ZW0uYW1vdW50IH19PC9zbWFsbD5cbiAgICAgIDxociBjbGFzcz1cImRpdmlkZXJcIiAvPlxuICAgICAgPGRpdj5cbiAgICAgICAgVG90YWw6XG4gICAgICAgIDxiPlxuICAgICAgICAgIHt7IG9yZGVySXRlbS5wcmljZSAqIG9yZGVySXRlbS5hbW91bnQgfCBudW1iZXI6ICcxLjItMidcbiAgICAgICAgICB9fXt7IGN1cnJlbmN5U2lnbiB9fVxuICAgICAgICA8L2I+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxidXR0b25cbiAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICBjbGFzcz1cIm1sLWF1dG8gdGV4dC1yZWQtNTAwIGhvdmVyOnRleHQtcmVkLTcwMCBkdXJhdGlvbi0yMDAgdHJhbnNpdGlvbi1hbGwgcGItMiBweC00XCJcbiAgICAoY2xpY2spPVwicmVtb3ZlSXRlbSgpXCI+XG4gICAgUmVtb3ZlXG4gIDwvYnV0dG9uPlxuPC9kaXY+XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFBsYW5uZWRPcmRlcnNDb21wb25lbnQgfSBmcm9tICcuL3BsYW5uZWQtb3JkZXJzLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHtcclxuICAgICAgICBwYXRoOiAnJyxcclxuICAgICAgICBjb21wb25lbnQ6IFBsYW5uZWRPcmRlcnNDb21wb25lbnQsXHJcbiAgICB9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcclxuICAgIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQbGFubmVkT3JkZXJzUm91dGluZ01vZHVsZSB7IH1cclxuIiwiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIG9mLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGNvbmNhdE1hcCwgZGVib3VuY2VUaW1lLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFBhZ2luYXRpb25Db21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCdXlPcmRlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL21vZGVscy9idXktb3JkZXIubW9kZWwnO1xyXG5pbXBvcnQgeyBPcHRpb25zRmFjYWRlIH0gZnJvbSAnLi4vLi4vLi4vb3B0aW9ucy5mYWNhZGUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtcGxhbm5lZC1vcmRlcnMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wbGFubmVkLW9yZGVycy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGxhbm5lZC1vcmRlcnMuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGxhbm5lZE9yZGVyc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAvKipcclxuICAgKiBNb2RlbCBmb3Igc2VhcmNoIHRleHQgaW5wdXQgYmluZGluZ1xyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKiBAbWVtYmVyb2YgUGxhbm5lZE9yZGVyc0NvbXBvbmVudFxyXG4gICAqL1xyXG4gIHNlYXJjaFRleHQ6IHN0cmluZztcclxuICAvKipcclxuICAgKiBBbW91bnQgb2YgZm91bmQgcmVzdWx0cyBhZnRlciBmaWx0cmF0aW9uXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqIEBtZW1iZXJvZiBQbGFubmVkT3JkZXJzQ29tcG9uZW50XHJcbiAgICovXHJcbiAgZm91bmRSZXN1bHRzOiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogTGlzdCB3aXRoIGFsbCBvcmRlcnMgZm9yIGRpc3BsYXkuIFVzZWQgZm9yIHBhZ2luYXRpb25cclxuICAgKlxyXG4gICAqIEB0eXBlIHtCdXlPcmRlcltdfVxyXG4gICAqIEBtZW1iZXJvZiBQbGFubmVkT3JkZXJzQ29tcG9uZW50XHJcbiAgICovXHJcbiAgYWxsT3JkZXJzRm9yRGlzcGxheTogQnV5T3JkZXJbXSA9IFtdO1xyXG4gIC8qKlxyXG4gICAqIExpc3Qgd2l0aCBjdXJyZW50IHBhZ2UgaXRlbXMgZm9yIGRpc3BsYXkgKGZyb20gcGFnaW5hdGlvbilcclxuICAgKlxyXG4gICAqIEB0eXBlIHtCdXlPcmRlcltdfVxyXG4gICAqIEBtZW1iZXJvZiBQbGFubmVkT3JkZXJzQ29tcG9uZW50XHJcbiAgICovXHJcbiAgY3VycmVudFBhZ2VJdGVtczogQnV5T3JkZXJbXSA9IFtdO1xyXG4gIC8qKlxyXG4gICAqIEZsYWcgaW5kaWNhdGVzIGlmIHNob3cgcGVyIHBhZ2Ugb3B0aW9uIGRyb3Bkb3duIGlzIG9wZW5lZFxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQG1lbWJlcm9mIFBsYW5uZWRPcmRlcnNDb21wb25lbnRcclxuICAgKi9cclxuICBkcm9wZG93bk9wZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvKipcclxuICAgKiBOdW1iZXIgb2YgaXRlbXMgcGVyIHBhZ2VcclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICogQG1lbWJlcm9mIFBsYW5uZWRPcmRlcnNDb21wb25lbnRcclxuICAgKi9cclxuICBzaG93UGVyUGFnZTogbnVtYmVyID0gMTg7XHJcbiAgLyoqXHJcbiAgICogQXZhaWxhYmxlIG9wdGlvbnMgb2YgcGFnZSBzaXplIHRoYXQgdXNlciBjYW4gc2VsZWN0IGZyb21cclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJbXX1cclxuICAgKiBAbWVtYmVyb2YgUGxhbm5lZE9yZGVyc0NvbXBvbmVudFxyXG4gICAqL1xyXG4gIHNob3dQZXJQYWdlT3B0aW9uczogbnVtYmVyW10gPSBbOSwgMTgsIDI3LCAzNl07XHJcbiAgLyoqXHJcbiAgICogQ3VycmVuY3kgc2lnbiBmb3IgdmlzdWFsIGRpc3BsYXlcclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICogQG1lbWJlcm9mIFBsYW5uZWRPcmRlcnNDb21wb25lbnRcclxuICAgKi9cclxuICBjdXJyZW5jeVNpZ246IHN0cmluZztcclxuICAvKipcclxuICAgKiBSZWZlcmVuY2UgdG8gcGFnaW5hdGlvbiBjb21wb25lbnQgd2hpY2ggaG9sZHMgbWFueSB1c2VmdWwgaW5mb3JtYXRpb25cclxuICAgKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHR5cGUge1BhZ2luYXRpb25Db21wb25lbnR9XHJcbiAgICogQG1lbWJlcm9mIFBsYW5uZWRPcmRlcnNDb21wb25lbnRcclxuICAgKi9cclxuICBAVmlld0NoaWxkKCdwYWdpbmF0aW9uJykgcHJpdmF0ZSBwYWdpbmF0aW9uOiBQYWdpbmF0aW9uQ29tcG9uZW50O1xyXG4gIC8qKlxyXG4gICAqIEJlaGF2aW9yIFN1YmplY3QgdGhhdCByZWNlaXZlcyBzZWFyY2ggdGV4dCB2YWx1ZSB0byBmaWx0ZXIgcmVzdWx0c1xyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAdHlwZSB7QmVoYXZpb3JTdWJqZWN0PHN0cmluZz59XHJcbiAgICogQG1lbWJlcm9mIFBsYW5uZWRPcmRlcnNDb21wb25lbnRcclxuICAgKi9cclxuICBwcml2YXRlIHNlYXJjaFN1YmplY3Q6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdCgnJyk7XHJcbiAgLyoqXHJcbiAgICogTGlzdCB3aXRoIHBsYW5uZWQgb3JkZXJzIGZvciBkaXNwbGF5XHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEB0eXBlIHtCdXlPcmRlcltdfVxyXG4gICAqIEBtZW1iZXJvZiBQbGFubmVkT3JkZXJzQ29tcG9uZW50XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBwbGFubmVkT3JkZXJzOiBCdXlPcmRlcltdID0gW107XHJcbiAgLyoqXHJcbiAgICogU3ViamVjdCB0aGF0IGlzIHJlc3BvbnNpYmxlIGZvciB1bnN1YnNjcmliaW5nIHdoZW4gY29tcG9uZW50IGdldHMgZGVzdHJveWVkXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEB0eXBlIHtTdWJqZWN0PGJvb2xlYW4+fVxyXG4gICAqIEBtZW1iZXJvZiBQbGFubmVkT3JkZXJzQ29tcG9uZW50XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBkZXN0cm95JDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIG9wdGlvbnNGYWNhZGU6IE9wdGlvbnNGYWNhZGUsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLm9wdGlvbnNGYWNhZGUuZ2V0UGxhbm5lZE9yZGVycygpXHJcbiAgICAgIC5zdWJzY3JpYmUob3JkZXJzID0+IHtcclxuICAgICAgICB0aGlzLnBsYW5uZWRPcmRlcnMgPSBvcmRlcnM7XHJcbiAgICAgICAgLy8gR2V0dGluZyBjdXJyZW5jeSBzaWduIGZvciBkaXNwbGF5IGlmIHdlIGhhdmUgYXQgbGVhc3Qgb25lIHBsYW5uZWQgb3JkZXIgYmVjYXVzZVxyXG4gICAgICAgIC8vIGN1cnJlbmN5IGlkIGlzIHN0b3JlZCBvbiBwbGFubmVkIG9yZGVyIGxldmVsXHJcbiAgICAgICAgaWYgKHRoaXMucGxhbm5lZE9yZGVycy5sZW5ndGgpIHtcclxuICAgICAgICAgIC8vIEZpbmRpbmcgbmVjZXNzYXJ5IGN1cnJlbmN5IGZyb20gc3RvcmVkIGxpc3RcclxuICAgICAgICAgIC8vIC4uLmFuZCB1c2luZyBpdHMgc3ltYm9sXHJcbiAgICAgICAgICB0aGlzLmN1cnJlbmN5U2lnbiA9IHRoaXMub3B0aW9uc0ZhY2FkZS5nZXRDdXJyZW5jeSgpPy5zeW1ib2wgPz8gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAvLyBTdWJzY3JpYmluZyB0byBzZWFyY2ggaW5wdXQgY2hhbmdlc1xyXG4gICAgdGhpcy5zZWFyY2hTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIGRlYm91bmNlVGltZSgyMDApLFxyXG4gICAgICAgIGNvbmNhdE1hcChzZWFyY2hUZXh0ID0+IHtcclxuICAgICAgICAgIC8vIEZpbHRlcmluZyByZXN1bHRzIGFuZCByZXR1cm5pbmcgZmlsdGVyZWQgYXJyYXlcclxuICAgICAgICAgIHJldHVybiBvZih0aGlzLnBsYW5uZWRPcmRlcnMuZmlsdGVyKG9yZGVyID0+IG9yZGVyLml0ZW1OYW1lXHJcbiAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgIC5pbmNsdWRlcyhzZWFyY2hUZXh0LnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXHJcbiAgICAgICAgLy8gdGFwKHJlc3VsdHMgPT4gdGhpcy5mb3VuZFJlc3VsdHMgPSByZXN1bHRzLmxlbmd0aCksXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZShmaWx0ZXJlZFJlc3VsdHMgPT4ge1xyXG4gICAgICAgIC8vIFN0b3JpbmcgYW1vdW50IG9mIGZvdW5kIHJlc3VsdHMganVzdCBmb3IgZGlzcGxheVxyXG4gICAgICAgIHRoaXMuZm91bmRSZXN1bHRzID0gZmlsdGVyZWRSZXN1bHRzLmxlbmd0aDtcclxuICAgICAgICAvLyBTdG9yaW5nIHJlc3VsdHMgZm9yIGRpc3BsYXlcclxuICAgICAgICB0aGlzLmFsbE9yZGVyc0ZvckRpc3BsYXkgPSBmaWx0ZXJlZFJlc3VsdHM7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAvLyBDb21wbGV0aW5nIHN1YnNjcmlwdGlvbnNcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIHNlYXJjaChzZWFyY2hUZXh0OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuc2VhcmNoU3ViamVjdC5uZXh0KHNlYXJjaFRleHQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTWV0aG9kIGZpbGxzIHBsYW5uZWQgYnV5IG9yZGVyIGxpc3QgZm9yIGRpc3BsYXkgYWZ0ZXIgcGFnZSBjaGFuZ2VkXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0J1eU9yZGVyW119IHBhZ2VPZkl0ZW1zIE5ldyBpdGVtcyBmb3IgZGlzcGxheXlcclxuICAgKiBAbWVtYmVyb2YgUGxhbm5lZE9yZGVyc0NvbXBvbmVudFxyXG4gICAqL1xyXG4gIG9uQ2hhbmdlUGFnZShwYWdlT2ZJdGVtczogQnV5T3JkZXJbXSkge1xyXG4gICAgLy8gU2V0dGluZyBpdGVtcyB0aGF0IHdpbGwgYmUgZGlzcGxheWVkXHJcbiAgICB0aGlzLmN1cnJlbnRQYWdlSXRlbXMgPSBwYWdlT2ZJdGVtcztcclxuICB9XHJcblxyXG4gIGNoYW5nZVBhZ2VTaXplKHNpemU6IG51bWJlcikge1xyXG4gICAgdGhpcy5zaG93UGVyUGFnZSA9IHNpemU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUcmFja3Mgb3JkZXIgYnkgSUQuIFVzZWQgZm9yIHBlcmZvcm1hbmNlIHRvIG1pbmltaXplIHJlbmRlcmluZ1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IEl0ZW0gaW5kZXhcclxuICAgKiBAcGFyYW0ge0J1eU9yZGVyfSBpdGVtIEl0ZW0gb2YgY3VycmVudCBpdGVyYXRpb25cclxuICAgKiBAcmV0dXJuIHsqfSBSZXR1cm5zIGlkIG9mIGN1cnJlbnQgaXRlcmF0aW9uIGl0ZW1cclxuICAgKiBAbWVtYmVyb2YgUGxhbm5lZE9yZGVyc0NvbXBvbmVudFxyXG4gICAqL1xyXG4gIG9yZGVyQnlJZChpbmRleDogbnVtYmVyLCBpdGVtOiBCdXlPcmRlcikge1xyXG4gICAgcmV0dXJuIGl0ZW0uaWQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNZXRob2QgcmVtb3ZlcyBwbGFubmVkIG9yZGVyIGZyb20gbGlzdFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGN1cnJlbnRQYWdlSW5kZXggSW5kZXggb2YgZWxlbWVudCBmb3IgcmVtb3ZhbCBvbiBjdXJyZW50IHBhZ2UuIEl0cyBub3QgaW5kZXggaW4gYWxsIGxpc3RcclxuICAgKiBAbWVtYmVyb2YgUGxhbm5lZE9yZGVyc0NvbXBvbmVudFxyXG4gICAqL1xyXG4gIHJlbW92ZUl0ZW0oY3VycmVudFBhZ2VJbmRleDogbnVtYmVyKSB7XHJcbiAgICAvLyBHZXR0aW5nIGluZGV4IG9mIGl0ZW0gdG8gcmVtb3ZlIGFtb25nIGFsbCBpdGVtcywgbm90IG9uIGN1cnJlbnQgcGFnZVxyXG4gICAgY29uc3QgaW5kZXhGb3JSZW1vdmFsID0gdGhpcy5wYWdpbmF0aW9uLnBhZ2VyLnN0YXJ0SW5kZXggKyBjdXJyZW50UGFnZUluZGV4O1xyXG4gICAgLy8gUmVtb3ZpbmcgZWxlbWVudCBmcm9tIGxpc3Qgb2YgYWxsIGl0ZW1zIHNvIGFmdGVyIHBhZ2UgY2hhbmdlIGl0IHdvbid0IGFwcGVhciBhZ2FpblxyXG4gICAgLy8gTk9URTogV2UgYXJlIHJlbW92aW5nIGZyb20gdHdvIGxpc3RzIGJlY2F1c2Ugb25lIHJlbWFpbnMgYXMgb3JpZ2luYWwgYW5kIHRoZSBvdGhlciBvbmUgaXNcclxuICAgIC8vIHVzZWQgZm9yIGRpc3BsYXkgYW5kIGZpbHRlcmluZ1xyXG4gICAgdGhpcy5wYWdpbmF0aW9uLml0ZW1zLnNwbGljZShpbmRleEZvclJlbW92YWwsIDEpO1xyXG4gICAgdGhpcy5wbGFubmVkT3JkZXJzLnNwbGljZShpbmRleEZvclJlbW92YWwsIDEpO1xyXG4gICAgLy8gUmVtb3ZpbmcgZWxlbWVudCBmcm9tIGN1cnJlbnQgcGFnZSBzbyBpdCBkaXNhcHBlYXJzXHJcbiAgICB0aGlzLmN1cnJlbnRQYWdlSXRlbXMuc3BsaWNlKGN1cnJlbnRQYWdlSW5kZXgsIDEpO1xyXG5cclxuICAgIC8vIERlY3JlYXNpbmcgZm91bmQgcmVzdWx0IGNvdW50ZXIgc2luY2UgZWxlbWVudCB3YXMgcmVtb3ZlZFxyXG4gICAgdGhpcy5mb3VuZFJlc3VsdHMtLTtcclxuXHJcbiAgICAvLyBJZiB0aGVyZSBhcmUgbm8gbW9yZSBpdGVtcyBvbiBjdXJyZW50IHBhZ2UgdGhlbiBnb2luZyBiYWNrIHRvIHByZXZpb3VzIHBhZ2UuXHJcbiAgICAvLyBJZiB1c2VyIGlzIGN1cnJlbnRseSBvbiBmaXJzdCBwYWdlIHRoZW4gaXQgd2lsbCB0cmlnZ2VyIHBhZ2luYXRpb24gcmVjcmVhdGUgYW55d2F5c1xyXG4gICAgaWYgKCF0aGlzLmN1cnJlbnRQYWdlSXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMucGFnaW5hdGlvbi5zZXRQYWdlKHRoaXMucGFnaW5hdGlvbi5wYWdlci5jdXJyZW50UGFnZSAtIDEpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJjb250YWluZXIgbXgtYXV0b1wiPlxuICA8ZGl2IGNsYXNzPVwibXktYXV0byBteC1hdXRvXCI+XG4gICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlIHctZnVsbCBsZzp3LTEvMiBteC1hdXRvIHRleHQtZ3JheS02MDAgbWItMFwiPlxuICAgICAgPGlucHV0IHR5cGU9XCJzZWFyY2hcIiBuYW1lPVwic2VyY2hcIiBwbGFjZWhvbGRlcj1cIkZpbHRlciBpdGVtcyBieSBuYW1lXCIgW25nTW9kZWxdPVwic2VhcmNoVGV4dFwiXG4gICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cInNlYXJjaCgkZXZlbnQpXCIgY2xhc3M9XCJcbiAgICAgICAgICB3LWZ1bGxcbiAgICAgICAgICBiZy13aGl0ZVxuICAgICAgICAgIGgtMTBcbiAgICAgICAgICBweC01XG4gICAgICAgICAgcHItMTBcbiAgICAgICAgICByb3VuZGVkLWZ1bGxcbiAgICAgICAgICB0ZXh0LXNtXG4gICAgICAgICAgZm9jdXM6b3V0bGluZS1ub25lXG4gICAgICAgICAgaG92ZXI6c2hhZG93LXhsXG4gICAgICAgICAgZHVyYXRpb24tMjAwXG4gICAgICAgIFwiIC8+XG4gICAgICA8ZGl2IGNsYXNzPVwiYWJzb2x1dGUgcmlnaHQtMCB0b3AtMCBtdC0zIG1yLTRcIj5cbiAgICAgICAgPHN2ZyBjbGFzcz1cImgtNCB3LTQgZmlsbC1jdXJyZW50XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXG4gICAgICAgICAgdmVyc2lvbj1cIjEuMVwiIGlkPVwiQ2FwYV8xXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDU2Ljk2NiA1Ni45NjZcIlxuICAgICAgICAgIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6IG5ldyAwIDAgNTYuOTY2IDU2Ljk2NlwiIHhtbDpzcGFjZT1cInByZXNlcnZlXCIgd2lkdGg9XCI1MTJweFwiIGhlaWdodD1cIjUxMnB4XCI+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGQ9XCJNNTUuMTQ2LDUxLjg4N0w0MS41ODgsMzcuNzg2YzMuNDg2LTQuMTQ0LDUuMzk2LTkuMzU4LDUuMzk2LTE0Ljc4NmMwLTEyLjY4Mi0xMC4zMTgtMjMtMjMtMjNzLTIzLDEwLjMxOC0yMywyMyAgczEwLjMxOCwyMywyMywyM2M0Ljc2MSwwLDkuMjk4LTEuNDM2LDEzLjE3Ny00LjE2MmwxMy42NjEsMTQuMjA4YzAuNTcxLDAuNTkzLDEuMzM5LDAuOTIsMi4xNjIsMC45MiAgYzAuNzc5LDAsMS41MTgtMC4yOTcsMi4wNzktMC44MzdDNTYuMjU1LDU0Ljk4Miw1Ni4yOTMsNTMuMDgsNTUuMTQ2LDUxLjg4N3ogTTIzLjk4NCw2YzkuMzc0LDAsMTcsNy42MjYsMTcsMTdzLTcuNjI2LDE3LTE3LDE3ICBzLTE3LTcuNjI2LTE3LTE3UzE0LjYxLDYsMjMuOTg0LDZ6XCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWV2ZW5seSBhbGlnbi1jZW50ZXIgbWItNCBtdC00XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaDUgdGV4dC1jZW50ZXIgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICBGb3VuZCB7eyBmb3VuZFJlc3VsdHMgfX0gcmVzdWx0c1xuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicmVsYXRpdmVcIj5cbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiZHJvcGRvd25PcGVuID0gIWRyb3Bkb3duT3BlblwiIGNsYXNzPVwicmVsYXRpdmUgaG92ZXI6dGV4dC1ibHVlLTUwMCBkdXJhdGlvbi0yMDAgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgIFNob3cgcGVyIHBhZ2U6IHt7IHNob3dQZXJQYWdlIH19XG4gICAgICAgICAgPHN2ZyBmaWxsPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICAgICAgJ3JvdGF0ZS0xODAnOiBkcm9wZG93bk9wZW4sXG4gICAgICAgICAgICAgICdyb3RhdGUtMCc6ICFkcm9wZG93bk9wZW5cbiAgICAgICAgICAgIH1cIiBjbGFzcz1cIlxuICAgICAgICAgICAgICBpbmxpbmVcbiAgICAgICAgICAgICAgdy00XG4gICAgICAgICAgICAgIGgtNFxuICAgICAgICAgICAgICBtdC0xXG4gICAgICAgICAgICAgIHRyYW5zaXRpb24tdHJhbnNmb3JtXG4gICAgICAgICAgICAgIGR1cmF0aW9uLTIwMFxuICAgICAgICAgICAgICB0cmFuc2Zvcm1cbiAgICAgICAgICAgICAgbWQ6LW10LTFcbiAgICAgICAgICAgICAgcm90YXRlLTBcbiAgICAgICAgICAgIFwiPlxuICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIGQ9XCJNNS4yOTMgNy4yOTNhMSAxIDAgMDExLjQxNCAwTDEwIDEwLjU4NmwzLjI5My0zLjI5M2ExIDEgMCAxMTEuNDE0IDEuNDE0bC00IDRhMSAxIDAgMDEtMS40MTQgMGwtNC00YTEgMSAwIDAxMC0xLjQxNHpcIlxuICAgICAgICAgICAgICBjbGlwLXJ1bGU9XCJldmVub2RkXCI+PC9wYXRoPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8ZGl2ICpuZ0lmPVwiZHJvcGRvd25PcGVuXCIgKGNsaWNrKT1cImRyb3Bkb3duT3BlbiA9IGZhbHNlXCIgY2xhc3M9XCJmaXhlZCBpbnNldC0wIGgtZnVsbCB3LWZ1bGwgei0xMFwiPjwvZGl2PlxuXG4gICAgICAgIDxkaXYgKm5nSWY9XCJkcm9wZG93bk9wZW5cIiBjbGFzcz1cIlxuICAgICAgICAgICAgYWJzb2x1dGVcbiAgICAgICAgICAgIHJpZ2h0LTBcbiAgICAgICAgICAgIG10LTJcbiAgICAgICAgICAgIGJnLXdoaXRlXG4gICAgICAgICAgICByb3VuZGVkLW1kXG4gICAgICAgICAgICBvdmVyZmxvdy1oaWRkZW5cbiAgICAgICAgICAgIHNoYWRvdy14bFxuICAgICAgICAgICAgei0yMFxuICAgICAgICAgIFwiPlxuICAgICAgICAgIDxidXR0b24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBzaG93UGVyUGFnZU9wdGlvbnNcIiAoY2xpY2spPVwiY2hhbmdlUGFnZVNpemUob3B0aW9uKVwiIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICAgICAgJ2JnLXB1cnBsZS01MDAgdGV4dC13aGl0ZSc6IG9wdGlvbiA9PT0gc2hvd1BlclBhZ2UsXG4gICAgICAgICAgICAgICdob3ZlcjpiZy1ncmF5LTIwMCc6IG9wdGlvbiAhPT0gc2hvd1BlclBhZ2VcbiAgICAgICAgICAgIH1cIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJibG9jayBweC00IHB5LTIgdy1mdWxsIHRleHQtc20gYm9yZGVyLWIgZHVyYXRpb24tMjAwXCI+XG4gICAgICAgICAgICB7eyBvcHRpb24gfX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cIlxuICAgICAgZ3JpZFxuICAgICAgc206Z3JpZC1jb2xzLTJcbiAgICAgIGxnOmdyaWQtY29scy0zXG4gICAgICB4bDpncmlkcy1jb2xzLTRcbiAgICAgIGdyaWQtY29scy0xXG4gICAgICBnYXAtNFxuICAgICAgcHgtM1xuICAgIFwiPlxuICAgIDxhcHAtYnV5LW9yZGVyLWl0ZW0gKm5nRm9yPVwibGV0IG9yZGVyIG9mIGN1cnJlbnRQYWdlSXRlbXM7IGxldCBpID0gaW5kZXhcIiBbb3JkZXJJdGVtXT1cIm9yZGVyXCJcbiAgICAgIFtjdXJyZW5jeVNpZ25dPVwiY3VycmVuY3lTaWduXCIgKGl0ZW1SZW1vdmVkKT1cInJlbW92ZUl0ZW0oaSlcIj48L2FwcC1idXktb3JkZXItaXRlbT5cbiAgPC9kaXY+XG4gIDxhcHAtcGFnaW5hdGlvbiAjcGFnaW5hdGlvbiBbaXRlbXNdPVwiYWxsT3JkZXJzRm9yRGlzcGxheVwiIFtwYWdlU2l6ZV09XCJzaG93UGVyUGFnZVwiXG4gICAgKGNoYW5nZVBhZ2UpPVwib25DaGFuZ2VQYWdlKCRldmVudClcIj48L2FwcC1wYWdpbmF0aW9uPlxuPC9kaXY+IiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFBhZ2luYXRpb25Nb2R1bGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5tb2R1bGUnO1xuaW1wb3J0IHsgQnV5T3JkZXJJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9idXktb3JkZXItaXRlbS9idXktb3JkZXItaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGxhbm5lZE9yZGVyc1JvdXRpbmdNb2R1bGUgfSBmcm9tICcuL3BsYW5uZWQtb3JkZXItcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgUGxhbm5lZE9yZGVyc0NvbXBvbmVudCB9IGZyb20gJy4vcGxhbm5lZC1vcmRlcnMuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBQbGFubmVkT3JkZXJzUm91dGluZ01vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBQYWdpbmF0aW9uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtQbGFubmVkT3JkZXJzQ29tcG9uZW50LCBCdXlPcmRlckl0ZW1Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFBsYW5uZWRPcmRlcnNNb2R1bGUgeyB9XG4iLCJleHBvcnQgY2xhc3MgU2NoZWR1bGVyIHtcbiAgICBjb25zdHJ1Y3RvcihTY2hlZHVsZXJBY3Rpb24sIG5vdyA9IFNjaGVkdWxlci5ub3cpIHtcbiAgICAgICAgdGhpcy5TY2hlZHVsZXJBY3Rpb24gPSBTY2hlZHVsZXJBY3Rpb247XG4gICAgICAgIHRoaXMubm93ID0gbm93O1xuICAgIH1cbiAgICBzY2hlZHVsZSh3b3JrLCBkZWxheSA9IDAsIHN0YXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgdGhpcy5TY2hlZHVsZXJBY3Rpb24odGhpcywgd29yaykuc2NoZWR1bGUoc3RhdGUsIGRlbGF5KTtcbiAgICB9XG59XG5TY2hlZHVsZXIubm93ID0gKCkgPT4gRGF0ZS5ub3coKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVNjaGVkdWxlci5qcy5tYXAiLCJpbXBvcnQgeyBTdWJzY3JpYmVyIH0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG5pbXBvcnQgeyBhc3luYyB9IGZyb20gJy4uL3NjaGVkdWxlci9hc3luYyc7XG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2VUaW1lKGR1ZVRpbWUsIHNjaGVkdWxlciA9IGFzeW5jKSB7XG4gICAgcmV0dXJuIChzb3VyY2UpID0+IHNvdXJjZS5saWZ0KG5ldyBEZWJvdW5jZVRpbWVPcGVyYXRvcihkdWVUaW1lLCBzY2hlZHVsZXIpKTtcbn1cbmNsYXNzIERlYm91bmNlVGltZU9wZXJhdG9yIHtcbiAgICBjb25zdHJ1Y3RvcihkdWVUaW1lLCBzY2hlZHVsZXIpIHtcbiAgICAgICAgdGhpcy5kdWVUaW1lID0gZHVlVGltZTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XG4gICAgfVxuICAgIGNhbGwoc3Vic2NyaWJlciwgc291cmNlKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Uuc3Vic2NyaWJlKG5ldyBEZWJvdW5jZVRpbWVTdWJzY3JpYmVyKHN1YnNjcmliZXIsIHRoaXMuZHVlVGltZSwgdGhpcy5zY2hlZHVsZXIpKTtcbiAgICB9XG59XG5jbGFzcyBEZWJvdW5jZVRpbWVTdWJzY3JpYmVyIGV4dGVuZHMgU3Vic2NyaWJlciB7XG4gICAgY29uc3RydWN0b3IoZGVzdGluYXRpb24sIGR1ZVRpbWUsIHNjaGVkdWxlcikge1xuICAgICAgICBzdXBlcihkZXN0aW5hdGlvbik7XG4gICAgICAgIHRoaXMuZHVlVGltZSA9IGR1ZVRpbWU7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVyID0gc2NoZWR1bGVyO1xuICAgICAgICB0aGlzLmRlYm91bmNlZFN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMubGFzdFZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5oYXNWYWx1ZSA9IGZhbHNlO1xuICAgIH1cbiAgICBfbmV4dCh2YWx1ZSkge1xuICAgICAgICB0aGlzLmNsZWFyRGVib3VuY2UoKTtcbiAgICAgICAgdGhpcy5sYXN0VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5oYXNWYWx1ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYWRkKHRoaXMuZGVib3VuY2VkU3Vic2NyaXB0aW9uID0gdGhpcy5zY2hlZHVsZXIuc2NoZWR1bGUoZGlzcGF0Y2hOZXh0LCB0aGlzLmR1ZVRpbWUsIHRoaXMpKTtcbiAgICB9XG4gICAgX2NvbXBsZXRlKCkge1xuICAgICAgICB0aGlzLmRlYm91bmNlZE5leHQoKTtcbiAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5jb21wbGV0ZSgpO1xuICAgIH1cbiAgICBkZWJvdW5jZWROZXh0KCkge1xuICAgICAgICB0aGlzLmNsZWFyRGVib3VuY2UoKTtcbiAgICAgICAgaWYgKHRoaXMuaGFzVmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgbGFzdFZhbHVlIH0gPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5sYXN0VmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5oYXNWYWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbi5uZXh0KGxhc3RWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2xlYXJEZWJvdW5jZSgpIHtcbiAgICAgICAgY29uc3QgZGVib3VuY2VkU3Vic2NyaXB0aW9uID0gdGhpcy5kZWJvdW5jZWRTdWJzY3JpcHRpb247XG4gICAgICAgIGlmIChkZWJvdW5jZWRTdWJzY3JpcHRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKGRlYm91bmNlZFN1YnNjcmlwdGlvbik7XG4gICAgICAgICAgICBkZWJvdW5jZWRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIHRoaXMuZGVib3VuY2VkU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGRpc3BhdGNoTmV4dChzdWJzY3JpYmVyKSB7XG4gICAgc3Vic2NyaWJlci5kZWJvdW5jZWROZXh0KCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZWJvdW5jZVRpbWUuanMubWFwIiwiaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi4vU3Vic2NyaXB0aW9uJztcbmV4cG9ydCBjbGFzcyBBY3Rpb24gZXh0ZW5kcyBTdWJzY3JpcHRpb24ge1xuICAgIGNvbnN0cnVjdG9yKHNjaGVkdWxlciwgd29yaykge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBzY2hlZHVsZShzdGF0ZSwgZGVsYXkgPSAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFjdGlvbi5qcy5tYXAiLCJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICcuL0FjdGlvbic7XG5leHBvcnQgY2xhc3MgQXN5bmNBY3Rpb24gZXh0ZW5kcyBBY3Rpb24ge1xuICAgIGNvbnN0cnVjdG9yKHNjaGVkdWxlciwgd29yaykge1xuICAgICAgICBzdXBlcihzY2hlZHVsZXIsIHdvcmspO1xuICAgICAgICB0aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcbiAgICAgICAgdGhpcy53b3JrID0gd29yaztcbiAgICAgICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XG4gICAgfVxuICAgIHNjaGVkdWxlKHN0YXRlLCBkZWxheSA9IDApIHtcbiAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy5pZDtcbiAgICAgICAgY29uc3Qgc2NoZWR1bGVyID0gdGhpcy5zY2hlZHVsZXI7XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmlkID0gdGhpcy5yZWN5Y2xlQXN5bmNJZChzY2hlZHVsZXIsIGlkLCBkZWxheSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wZW5kaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kZWxheSA9IGRlbGF5O1xuICAgICAgICB0aGlzLmlkID0gdGhpcy5pZCB8fCB0aGlzLnJlcXVlc3RBc3luY0lkKHNjaGVkdWxlciwgdGhpcy5pZCwgZGVsYXkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmVxdWVzdEFzeW5jSWQoc2NoZWR1bGVyLCBpZCwgZGVsYXkgPSAwKSB7XG4gICAgICAgIHJldHVybiBzZXRJbnRlcnZhbChzY2hlZHVsZXIuZmx1c2guYmluZChzY2hlZHVsZXIsIHRoaXMpLCBkZWxheSk7XG4gICAgfVxuICAgIHJlY3ljbGVBc3luY0lkKHNjaGVkdWxlciwgaWQsIGRlbGF5ID0gMCkge1xuICAgICAgICBpZiAoZGVsYXkgIT09IG51bGwgJiYgdGhpcy5kZWxheSA9PT0gZGVsYXkgJiYgdGhpcy5wZW5kaW5nID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgICB9XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaWQpO1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBleGVjdXRlKHN0YXRlLCBkZWxheSkge1xuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ2V4ZWN1dGluZyBhIGNhbmNlbGxlZCBhY3Rpb24nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLl9leGVjdXRlKHN0YXRlLCBkZWxheSk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMucGVuZGluZyA9PT0gZmFsc2UgJiYgdGhpcy5pZCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmlkID0gdGhpcy5yZWN5Y2xlQXN5bmNJZCh0aGlzLnNjaGVkdWxlciwgdGhpcy5pZCwgbnVsbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX2V4ZWN1dGUoc3RhdGUsIGRlbGF5KSB7XG4gICAgICAgIGxldCBlcnJvcmVkID0gZmFsc2U7XG4gICAgICAgIGxldCBlcnJvclZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy53b3JrKHN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZXJyb3JlZCA9IHRydWU7XG4gICAgICAgICAgICBlcnJvclZhbHVlID0gISFlICYmIGUgfHwgbmV3IEVycm9yKGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvcmVkKSB7XG4gICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3JWYWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfdW5zdWJzY3JpYmUoKSB7XG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy5pZDtcbiAgICAgICAgY29uc3Qgc2NoZWR1bGVyID0gdGhpcy5zY2hlZHVsZXI7XG4gICAgICAgIGNvbnN0IGFjdGlvbnMgPSBzY2hlZHVsZXIuYWN0aW9ucztcbiAgICAgICAgY29uc3QgaW5kZXggPSBhY3Rpb25zLmluZGV4T2YodGhpcyk7XG4gICAgICAgIHRoaXMud29yayA9IG51bGw7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBudWxsO1xuICAgICAgICB0aGlzLnBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZXIgPSBudWxsO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICBhY3Rpb25zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSB0aGlzLnJlY3ljbGVBc3luY0lkKHNjaGVkdWxlciwgaWQsIG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVsYXkgPSBudWxsO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFzeW5jQWN0aW9uLmpzLm1hcCIsImltcG9ydCB7IFNjaGVkdWxlciB9IGZyb20gJy4uL1NjaGVkdWxlcic7XG5leHBvcnQgY2xhc3MgQXN5bmNTY2hlZHVsZXIgZXh0ZW5kcyBTY2hlZHVsZXIge1xuICAgIGNvbnN0cnVjdG9yKFNjaGVkdWxlckFjdGlvbiwgbm93ID0gU2NoZWR1bGVyLm5vdykge1xuICAgICAgICBzdXBlcihTY2hlZHVsZXJBY3Rpb24sICgpID0+IHtcbiAgICAgICAgICAgIGlmIChBc3luY1NjaGVkdWxlci5kZWxlZ2F0ZSAmJiBBc3luY1NjaGVkdWxlci5kZWxlZ2F0ZSAhPT0gdGhpcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBBc3luY1NjaGVkdWxlci5kZWxlZ2F0ZS5ub3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBub3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWN0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNjaGVkdWxlZCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgc2NoZWR1bGUod29yaywgZGVsYXkgPSAwLCBzdGF0ZSkge1xuICAgICAgICBpZiAoQXN5bmNTY2hlZHVsZXIuZGVsZWdhdGUgJiYgQXN5bmNTY2hlZHVsZXIuZGVsZWdhdGUgIT09IHRoaXMpIHtcbiAgICAgICAgICAgIHJldHVybiBBc3luY1NjaGVkdWxlci5kZWxlZ2F0ZS5zY2hlZHVsZSh3b3JrLCBkZWxheSwgc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHN1cGVyLnNjaGVkdWxlKHdvcmssIGRlbGF5LCBzdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZmx1c2goYWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IHsgYWN0aW9ucyB9ID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgICBhY3Rpb25zLnB1c2goYWN0aW9uKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZXJyb3I7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgaWYgKGVycm9yID0gYWN0aW9uLmV4ZWN1dGUoYWN0aW9uLnN0YXRlLCBhY3Rpb24uZGVsYXkpKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKGFjdGlvbiA9IGFjdGlvbnMuc2hpZnQoKSk7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgd2hpbGUgKGFjdGlvbiA9IGFjdGlvbnMuc2hpZnQoKSkge1xuICAgICAgICAgICAgICAgIGFjdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Bc3luY1NjaGVkdWxlci5qcy5tYXAiLCJpbXBvcnQgeyBBc3luY0FjdGlvbiB9IGZyb20gJy4vQXN5bmNBY3Rpb24nO1xuaW1wb3J0IHsgQXN5bmNTY2hlZHVsZXIgfSBmcm9tICcuL0FzeW5jU2NoZWR1bGVyJztcbmV4cG9ydCBjb25zdCBhc3luY1NjaGVkdWxlciA9IG5ldyBBc3luY1NjaGVkdWxlcihBc3luY0FjdGlvbik7XG5leHBvcnQgY29uc3QgYXN5bmMgPSBhc3luY1NjaGVkdWxlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFzeW5jLmpzLm1hcCJdLCJzb3VyY2VSb290IjoiIn0=