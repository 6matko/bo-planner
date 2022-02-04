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
        this.optionsFacade.getPlannedOrders(true)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iby1wbGFubmVyLy4vYW5ndWxhci9zcmMvYXBwL2NvcmUvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9iby1wbGFubmVyLy4vYW5ndWxhci9zcmMvYXBwL2NvcmUvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovL2JvLXBsYW5uZXIvLi9hbmd1bGFyL3NyYy9hcHAvY29yZS9wYWdpbmF0aW9uL3BhZ2luYXRpb24ubW9kdWxlLnRzIiwid2VicGFjazovL2JvLXBsYW5uZXIvLi9hbmd1bGFyL3NyYy9hcHAvY29yZS9wYWdpbmF0aW9uL3BhZ2luYXRpb24udXRpbHMudHMiLCJ3ZWJwYWNrOi8vYm8tcGxhbm5lci8uL2FuZ3VsYXIvc3JjL2FwcC9tb2R1bGVzL29wdGlvbnMvcGFnZXMvb3B0aW9ucy9wbGFubmVkLW9yZGVycy9idXktb3JkZXItaXRlbS9idXktb3JkZXItaXRlbS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vYm8tcGxhbm5lci8uL2FuZ3VsYXIvc3JjL2FwcC9tb2R1bGVzL29wdGlvbnMvcGFnZXMvb3B0aW9ucy9wbGFubmVkLW9yZGVycy9idXktb3JkZXItaXRlbS9idXktb3JkZXItaXRlbS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly9iby1wbGFubmVyLy4vYW5ndWxhci9zcmMvYXBwL21vZHVsZXMvb3B0aW9ucy9wYWdlcy9vcHRpb25zL3BsYW5uZWQtb3JkZXJzL3BsYW5uZWQtb3JkZXItcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vYm8tcGxhbm5lci8uL2FuZ3VsYXIvc3JjL2FwcC9tb2R1bGVzL29wdGlvbnMvcGFnZXMvb3B0aW9ucy9wbGFubmVkLW9yZGVycy9wbGFubmVkLW9yZGVycy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vYm8tcGxhbm5lci8uL2FuZ3VsYXIvc3JjL2FwcC9tb2R1bGVzL29wdGlvbnMvcGFnZXMvb3B0aW9ucy9wbGFubmVkLW9yZGVycy9wbGFubmVkLW9yZGVycy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly9iby1wbGFubmVyLy4vYW5ndWxhci9zcmMvYXBwL21vZHVsZXMvb3B0aW9ucy9wYWdlcy9vcHRpb25zL3BsYW5uZWQtb3JkZXJzL3BsYW5uZWQtb3JkZXJzLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9iby1wbGFubmVyLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTIwMTUvaW50ZXJuYWwvU2NoZWR1bGVyLmpzIiwid2VicGFjazovL2JvLXBsYW5uZXIvLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtMjAxNS9pbnRlcm5hbC9vcGVyYXRvcnMvZGVib3VuY2VUaW1lLmpzIiwid2VicGFjazovL2JvLXBsYW5uZXIvLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtMjAxNS9pbnRlcm5hbC9zY2hlZHVsZXIvQWN0aW9uLmpzIiwid2VicGFjazovL2JvLXBsYW5uZXIvLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtMjAxNS9pbnRlcm5hbC9zY2hlZHVsZXIvQXN5bmNBY3Rpb24uanMiLCJ3ZWJwYWNrOi8vYm8tcGxhbm5lci8uL25vZGVfbW9kdWxlcy9yeGpzL19lc20yMDE1L2ludGVybmFsL3NjaGVkdWxlci9Bc3luY1NjaGVkdWxlci5qcyIsIndlYnBhY2s6Ly9iby1wbGFubmVyLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTIwMTUvaW50ZXJuYWwvc2NoZWR1bGVyL2FzeW5jLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0k7QUFDcEY7Ozs7OztJQ2dDeEMsMEVBZ0JJO0lBYkYsMlhBQXVCO0lBY3ZCLHVEQUNGO0lBQUEsNERBQU07Ozs7SUFoQkosZ0xBQXNFO0lBZXRFLDBEQUNGO0lBREUsbUZBQ0Y7Ozs7O0lBbkROLHlFQUU0QztJQUMxQyx5RUFBZ0M7SUFDOUIseUVBYUk7SUFYRix3VUFBcUMsQ0FBQyxLQUFFO0lBWXhDLDhEQVUrQztJQVYvQyx5RUFVK0M7SUFDN0MseUVBQThDO0lBQ2hELDREQUFNO0lBQ1IsNERBQU07SUFDTiwrREFBZ0Q7SUFBaEQseUVBQWdEO0lBQzlDLHFIQWtCTTtJQUNSLDREQUFNO0lBQ04seUVBYUk7SUFYRix3VUFBcUMsQ0FBQyxLQUFFO0lBWXhDLDhEQVVnRDtJQVZoRCx5RUFVZ0Q7SUFDOUMsMEVBQTZDO0lBQy9DLDREQUFNO0lBQ1IsNERBQU07SUFDUiw0REFBTTtJQUNSLDREQUFNOzs7SUE3RUEsMERBQWlEO0lBQWpELDBLQUFpRDtJQTZCOUIsMERBQWM7SUFBZCx1RkFBYztJQW9CakMsMERBQWdFO0lBQWhFLGdNQUFnRTs7QURuRHRFLG9GQUFvRjtBQVE3RSxNQUFNLG1CQUFtQjtJQU85QjtRQUxVLGVBQVUsR0FBRyxJQUFJLHVEQUFZLENBQU0sSUFBSSxDQUFDLENBQUM7UUFDMUMsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFDdEIsVUFBSyxHQUFRLEVBQUUsQ0FBQztJQUNBLENBQUM7SUFFakIsUUFBUTtRQUNOLHNDQUFzQztRQUN0QyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDaEM7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCOztRQUNoQyx3Q0FBd0M7UUFDeEMsSUFBSSxjQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsS0FBSywwQ0FBRSxZQUFZLE9BQUssYUFBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLEtBQUssMENBQUUsYUFBYSxHQUFFO1lBQ2xFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2hDO1FBRUQsc0NBQXNDO1FBQ3RDLElBQUksY0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLFFBQVEsMENBQUUsWUFBWSxPQUFLLGFBQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxRQUFRLDBDQUFFLGFBQWEsR0FBRTtZQUN4RSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNoQztJQUNILENBQUM7SUFFRCxPQUFPLENBQUMsSUFBWTtRQUNsQiwwQ0FBMEM7UUFDMUMsSUFBSSxDQUFDLEtBQUssR0FBRywyREFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUU3RSx5Q0FBeUM7UUFDekMsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFbkYsZ0RBQWdEO1FBQ2hELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7O3NGQXJDVSxtQkFBbUI7aUhBQW5CLG1CQUFtQjtRQ1hoQyxnSEFrRk07O1FBaEZILDJHQUF1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGSztBQUVjOztBQVd0RCxNQUFNLGdCQUFnQjs7Z0ZBQWhCLGdCQUFnQjs2R0FBaEIsZ0JBQWdCO2lIQVJsQjtZQUNQLHlEQUFZO1NBQ2I7bUlBTVUsZ0JBQWdCLG1CQUxaLHNFQUFtQixhQUZoQyx5REFBWSxhQUlaLHNFQUFtQjs7Ozs7Ozs7Ozs7Ozs7OztBQ1Z2QixrTEFBa0w7QUFDM0ssU0FBUyxRQUFRLENBQUMsVUFBVSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsUUFBUTtJQUNoRSxJQUFJLFdBQVcsS0FBSyxLQUFLLENBQUMsRUFBRTtRQUFFLFdBQVcsR0FBRyxDQUFDLENBQUM7S0FBRTtJQUNoRCxJQUFJLFFBQVEsS0FBSyxLQUFLLENBQUMsRUFBRTtRQUFFLFFBQVEsR0FBRyxFQUFFLENBQUM7S0FBRTtJQUMzQyxJQUFJLFFBQVEsS0FBSyxLQUFLLENBQUMsRUFBRTtRQUFFLFFBQVEsR0FBRyxFQUFFLENBQUM7S0FBRTtJQUMzQyx3QkFBd0I7SUFDeEIsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLENBQUM7SUFDbEQseUNBQXlDO0lBQ3pDLElBQUksV0FBVyxHQUFHLENBQUMsRUFBRTtRQUNqQixXQUFXLEdBQUcsQ0FBQyxDQUFDO0tBQ25CO1NBQ0ksSUFBSSxXQUFXLEdBQUcsVUFBVSxFQUFFO1FBQy9CLFdBQVcsR0FBRyxVQUFVLENBQUM7S0FDNUI7SUFDRCxJQUFJLFNBQVMsRUFBRSxPQUFPLENBQUM7SUFDdkIsSUFBSSxVQUFVLElBQUksUUFBUSxFQUFFO1FBQ3hCLDhDQUE4QztRQUM5QyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsT0FBTyxHQUFHLFVBQVUsQ0FBQztLQUN4QjtTQUNJO1FBQ0QsNkRBQTZEO1FBQzdELElBQUkseUJBQXlCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSx3QkFBd0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0QsSUFBSSxXQUFXLElBQUkseUJBQXlCLEVBQUU7WUFDMUMsOEJBQThCO1lBQzlCLFNBQVMsR0FBRyxDQUFDLENBQUM7WUFDZCxPQUFPLEdBQUcsUUFBUSxDQUFDO1NBQ3RCO2FBQ0ksSUFBSSxXQUFXLEdBQUcsd0JBQXdCLElBQUksVUFBVSxFQUFFO1lBQzNELDRCQUE0QjtZQUM1QixTQUFTLEdBQUcsVUFBVSxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUM7WUFDdEMsT0FBTyxHQUFHLFVBQVUsQ0FBQztTQUN4QjthQUNJO1lBQ0QsdUNBQXVDO1lBQ3ZDLFNBQVMsR0FBRyxXQUFXLEdBQUcseUJBQXlCLENBQUM7WUFDcEQsT0FBTyxHQUFHLFdBQVcsR0FBRyx3QkFBd0IsQ0FBQztTQUNwRDtLQUNKO0lBQ0QsdUNBQXVDO0lBQ3ZDLElBQUksVUFBVSxHQUFHLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQztJQUM5QyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxRQUFRLEdBQUcsQ0FBQyxFQUFFLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNuRSw2REFBNkQ7SUFDN0QsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksT0FBTyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUcsK0RBQStEO0lBQy9ELE9BQU87UUFDSCxVQUFVLEVBQUUsVUFBVTtRQUN0QixXQUFXLEVBQUUsV0FBVztRQUN4QixRQUFRLEVBQUUsUUFBUTtRQUNsQixVQUFVLEVBQUUsVUFBVTtRQUN0QixTQUFTLEVBQUUsU0FBUztRQUNwQixPQUFPLEVBQUUsT0FBTztRQUNoQixVQUFVLEVBQUUsVUFBVTtRQUN0QixRQUFRLEVBQUUsUUFBUTtRQUNsQixLQUFLLEVBQUUsS0FBSztLQUNmLENBQUM7QUFDTixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEOEU7QUFHckQ7QUFDc0I7Ozs7Ozs7SUNKaEQseUVBRW9CO0lBQ2xCLHlFQUFtRDtJQUNqRCx5RUFBMkI7SUFDekIseUVBQXlDO0lBQUEsdURBQXdCO0lBQUEsNERBQU07SUFDdkUsdUVBU2tCO0lBQ2hCLDJFQUNGO0lBQUEsNERBQUk7SUFDTiw0REFBTTtJQUNOLHlFQUE0QjtJQUMxQix5RUFBK0I7SUFDN0IsdURBQ0Y7O0lBQUEsNERBQU07SUFDTix5RUFBTztJQUFBLHdEQUF1QjtJQUFBLDREQUFRO0lBQ3RDLG9FQUFzQjtJQUN0Qix1RUFBSztJQUNILG9FQUNBO0lBQUEscUVBQUc7SUFDRCx3REFFRjs7SUFBQSw0REFBSTtJQUNOLDREQUFNO0lBQ1IsNERBQU07SUFDUiw0REFBTTtJQUNOLDZFQUd5QjtJQUF2QiwyVEFBc0I7SUFDdEIsb0VBQ0Y7SUFBQSw0REFBUztJQUNYLDREQUFNOzs7SUFuQ3lDLDBEQUF3QjtJQUF4QiwwRkFBd0I7SUFFL0QsMERBS0M7SUFMRCx1T0FLQztJQVNELDBEQUNGO0lBREUsc01BQ0Y7SUFDTywwREFBdUI7SUFBdkIsa0dBQXVCO0lBSzFCLDBEQUVGO0lBRkUsaU9BRUY7O0FEbEJELE1BQU0scUJBQXFCO0lBc0JoQyxZQUNVLE1BQXFCLEVBQ3JCLFNBQThCO1FBRDlCLFdBQU0sR0FBTixNQUFNLENBQWU7UUFDckIsY0FBUyxHQUFULFNBQVMsQ0FBcUI7UUFoQnhDOzs7OztXQUtHO1FBQ08sZ0JBQVcsR0FBMkIsSUFBSSx1REFBWSxFQUFFLENBQUM7SUFXL0QsQ0FBQztJQUVMLFFBQVE7SUFDUixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFVBQVU7UUFDUixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUNsQixLQUFLLEVBQUUsc0JBQXNCO1lBQzdCLElBQUksRUFBRSw4QkFBOEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLHVCQUF1QjtTQUNuRixDQUFDO2FBQ0MsWUFBWTthQUNaLElBQUksQ0FDSCx5REFBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3BCLG1EQUFtRDtZQUNuRCxJQUFJLFNBQVMsRUFBRTtnQkFDYixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFXLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQztxQkFDaEUsSUFBSTtnQkFDSCxrRkFBa0Y7Z0JBQ2xGLHdEQUF3RDtnQkFDeEQsbURBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FDaEIsQ0FBQzthQUNMO2lCQUFNO2dCQUNMLGdEQUFnRDtnQkFDaEQsT0FBTyx3Q0FBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2xCO1FBQ0gsQ0FBQyxDQUFDLENBQ0g7YUFDQSxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDbkIseUZBQXlGO1lBQ3pGLGlGQUFpRjtZQUNqRixJQUFJLE9BQU8sS0FBSyxJQUFJLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUN2QztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7MEZBaEVVLHFCQUFxQjttSEFBckIscUJBQXFCO1FDWmxDLG1IQXdDTTs7UUF0Q0gsK0VBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRHFDO0FBQ2E7OztBQUVwRSxNQUFNLE1BQU0sR0FBVztJQUNuQjtRQUNJLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLDZFQUFzQjtLQUNwQztDQUNKLENBQUM7QUFNSyxNQUFNLDBCQUEwQjs7b0dBQTFCLDBCQUEwQjt1SEFBMUIsMEJBQTBCOzJIQUgxQixDQUFDLGtFQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQzlCLHlEQUFZO21JQUViLDBCQUEwQixvRkFGekIseURBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaMEI7QUFDZ0I7Ozs7Ozs7Ozs7O0lDa0Q1RCwrREFBa0c7SUFBbEcsMEVBQWtHO0lBQXhFLHdUQUF3QixLQUFLLElBQUM7SUFBMEMsNERBQU07Ozs7O0lBWXRHLDZFQUdnRjtJQUg5QixnWkFBZ0M7SUFJaEYsdURBQ0Y7SUFBQSw0REFBUzs7OztJQUwwRSw4TUFHL0U7SUFDRiwwREFDRjtJQURFLHFGQUNGOzs7O0lBZkYsK0RBU0k7SUFUSiwwRUFTSTtJQUNGLGdJQUtTO0lBQ1gsNERBQU07OztJQU51QiwwREFBcUI7SUFBckIsOEZBQXFCOzs7O0lBb0J0RCx5RkFDOEQ7SUFBOUIsZ2FBQTZCO0lBQUMsNERBQXFCOzs7O0lBRFQsZ0ZBQW1COzs7QUR4RTFGLE1BQU0sc0JBQXNCO0lBeUZqQyxZQUNVLGFBQTRCLEVBQzVCLEdBQXNCO1FBRHRCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBNUVoQzs7Ozs7V0FLRztRQUNILHdCQUFtQixHQUFlLEVBQUUsQ0FBQztRQUNyQzs7Ozs7V0FLRztRQUNILHFCQUFnQixHQUFlLEVBQUUsQ0FBQztRQUNsQzs7Ozs7V0FLRztRQUNILGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCOzs7OztXQUtHO1FBQ0gsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDekI7Ozs7O1dBS0c7UUFDSCx1QkFBa0IsR0FBYSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBZ0IvQzs7Ozs7O1dBTUc7UUFDSyxrQkFBYSxHQUE0QixJQUFJLGlEQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDekU7Ozs7OztXQU1HO1FBQ0ssa0JBQWEsR0FBZSxFQUFFLENBQUM7UUFDdkM7Ozs7OztXQU1HO1FBQ0ssYUFBUSxHQUFxQixJQUFJLHlDQUFPLEVBQUUsQ0FBQztJQU1uRCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2FBQ3RDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTs7WUFDbEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7WUFDNUIsa0ZBQWtGO1lBQ2xGLCtDQUErQztZQUMvQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFO2dCQUM3Qiw4Q0FBOEM7Z0JBQzlDLDBCQUEwQjtnQkFDMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxnQkFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsMENBQUUsTUFBTSxtQ0FBSSxFQUFFLENBQUM7YUFDcEU7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVMLHNDQUFzQztRQUN0QyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRTthQUM5QixJQUFJLENBQ0gsNERBQVksQ0FBQyxHQUFHLENBQUMsRUFDakIseURBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNyQixpREFBaUQ7WUFDakQsT0FBTyx3Q0FBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVE7aUJBQ3hELFdBQVcsRUFBRTtpQkFDYixRQUFRLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQ3BDLENBQ0E7UUFDSCxDQUFDLENBQUMsRUFDRix5REFBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDeEIsc0RBQXNEO1NBQ3ZEO2FBQ0EsU0FBUyxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQzNCLG1EQUFtRDtZQUNuRCxJQUFJLENBQUMsWUFBWSxHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUM7WUFDM0MsOEJBQThCO1lBQzlCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxlQUFlLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsV0FBVztRQUNULDJCQUEyQjtRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxNQUFNLENBQUMsVUFBa0I7UUFDdkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsWUFBWSxDQUFDLFdBQXVCO1FBQ2xDLHVDQUF1QztRQUN2QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsV0FBVyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxjQUFjLENBQUMsSUFBWTtRQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNILFNBQVMsQ0FBQyxLQUFhLEVBQUUsSUFBYztRQUNyQyxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsVUFBVSxDQUFDLGdCQUF3QjtRQUNqQyx1RUFBdUU7UUFDdkUsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLGdCQUFnQixDQUFDO1FBQzVFLHFGQUFxRjtRQUNyRiw0RkFBNEY7UUFDNUYsaUNBQWlDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzlDLHNEQUFzRDtRQUN0RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRWxELDREQUE0RDtRQUM1RCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFcEIsK0VBQStFO1FBQy9FLHNGQUFzRjtRQUN0RixJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRTtZQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1NBQy9EO0lBQ0gsQ0FBQzs7NEZBbE1VLHNCQUFzQjtvSEFBdEIsc0JBQXNCOzs7Ozs7UUNabkMseUVBQStCO1FBQzdCLHlFQUE2QjtRQUMzQix5RUFBaUU7UUFDL0QsMkVBWU07UUFYSixtS0FBaUIsa0JBQWMsSUFBQztRQURsQyw0REFZTTtRQUNOLHlFQUE4QztRQUM1Qyw4REFFcUc7UUFGckcseUVBRXFHO1FBQ25HLHFFQUN3WDtRQUMxWCw0REFBTTtRQUNSLDREQUFNO1FBQ1IsNERBQU07UUFDTiwrREFBd0Q7UUFBeEQseUVBQXdEO1FBQ3RELHlFQUEwQztRQUN4Qyx1REFDRjtRQUFBLDREQUFNO1FBQ04sMEVBQXNCO1FBQ3BCLDhFQUErRztRQUF2Ryx1TEFBc0M7UUFDNUMsd0RBQ0E7UUFBQSw4REFhSTtRQWJKLDJFQWFJO1FBQ0YsdUVBRTZCO1FBQy9CLDREQUFNO1FBQ1IsNERBQVM7UUFFVCxxSEFBd0c7UUFFeEcscUhBZ0JNO1FBQ1IsNERBQU07UUFDUiw0REFBTTtRQUNSLDREQUFNO1FBRU4sK0RBUUk7UUFSSiwyRUFRSTtRQUNGLG1KQUNtRjtRQUNyRiw0REFBTTtRQUNOLDBGQUNzQztRQUFwQyx1S0FBYyx3QkFBb0IsSUFBQztRQUFDLDREQUFpQjtRQUN6RCw0REFBTTs7UUF0RnFFLDBEQUFzQjtRQUF0QixtRkFBc0I7UUF3QnpGLDBEQUNGO1FBREUsMEdBQ0Y7UUFHSSwwREFDQTtRQURBLDBHQUNBO1FBQTZDLDBEQUd6QztRQUh5QywrS0FHekM7UUFpQkEsMERBQWtCO1FBQWxCLGtGQUFrQjtRQUVsQiwwREFBa0I7UUFBbEIsa0ZBQWtCO1FBOEJVLDBEQUFxQjtRQUFyQix5RkFBcUI7UUFHakMsMERBQTZCO1FBQTdCLDBGQUE2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkZaO0FBRUY7QUFDdUM7QUFDRjtBQUNOO0FBQ1I7O0FBVzdELE1BQU0sbUJBQW1COztzRkFBbkIsbUJBQW1CO2dIQUFuQixtQkFBbUI7b0hBUnJCO1lBQ1AseURBQVk7WUFDWixxRkFBMEI7WUFDMUIsdURBQVc7WUFDWCxnRkFBZ0I7U0FDakI7bUlBR1UsbUJBQW1CLG1CQUZmLDZFQUFzQixFQUFFLDJGQUFxQixhQUwxRCx5REFBWTtRQUNaLHFGQUEwQjtRQUMxQix1REFBVztRQUNYLGdGQUFnQjs7Ozs7Ozs7Ozs7Ozs7OztBQ2JiO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVjJDO0FBQ0E7QUFDcEMsMkNBQTJDLG1EQUFLO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsbURBQVU7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEQrQztBQUN4QyxxQkFBcUIsdURBQVk7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQzs7Ozs7Ozs7Ozs7Ozs7OztBQ1RrQztBQUMzQiwwQkFBMEIsMkNBQU07QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0V5QztBQUNsQyw2QkFBNkIsaURBQVM7QUFDN0MsdUNBQXVDLHFEQUFhO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxVQUFVO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QzRDO0FBQ007QUFDM0MsMkJBQTJCLDJEQUFjLENBQUMscURBQVc7QUFDckQ7QUFDUCxpQyIsImZpbGUiOiJhbmd1bGFyX3NyY19hcHBfbW9kdWxlc19vcHRpb25zX3BhZ2VzX29wdGlvbnNfcGxhbm5lZC1vcmRlcnNfcGxhbm5lZC1vcmRlcnNfbW9kdWxlX3RzLWVzMjAxNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHBhZ2luYXRlIH0gZnJvbSAnLi9wYWdpbmF0aW9uLnV0aWxzJztcblxuLy8gU3JjOiBodHRwczovL2phc29ud2F0bW9yZS5jb20vcG9zdC8yMDE5LzA2LzE4L2FuZ3VsYXItOC1zaW1wbGUtcGFnaW5hdGlvbi1leGFtcGxlXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1wYWdpbmF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2luYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wYWdpbmF0aW9uLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBpdGVtczogQXJyYXk8YW55PjtcbiAgQE91dHB1dCgpIGNoYW5nZVBhZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4odHJ1ZSk7XG4gIEBJbnB1dCgpIGluaXRpYWxQYWdlID0gMTtcbiAgQElucHV0KCkgcGFnZVNpemUgPSAxMDtcbiAgQElucHV0KCkgbWF4UGFnZXMgPSA2O1xuICBwYWdlcjogYW55ID0ge307XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gc2V0IHBhZ2UgaWYgaXRlbXMgYXJyYXkgaXNuJ3QgZW1wdHlcbiAgICBpZiAodGhpcy5pdGVtcyAmJiB0aGlzLml0ZW1zLmxlbmd0aCkge1xuICAgICAgdGhpcy5zZXRQYWdlKHRoaXMuaW5pdGlhbFBhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAvLyBSZXNldCBwYWdlIGlmIGl0ZW1zIGFycmF5IGhhcyBjaGFuZ2VkXG4gICAgaWYgKGNoYW5nZXM/Lml0ZW1zPy5jdXJyZW50VmFsdWUgIT09IGNoYW5nZXM/Lml0ZW1zPy5wcmV2aW91c1ZhbHVlKSB7XG4gICAgICB0aGlzLnNldFBhZ2UodGhpcy5pbml0aWFsUGFnZSk7XG4gICAgfVxuXG4gICAgLy8gUmVzZXQgcGFnZSBpZiBwYWdlIHNpemUgaGFzIGNoYW5nZWRcbiAgICBpZiAoY2hhbmdlcz8ucGFnZVNpemU/LmN1cnJlbnRWYWx1ZSAhPT0gY2hhbmdlcz8ucGFnZVNpemU/LnByZXZpb3VzVmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0UGFnZSh0aGlzLmluaXRpYWxQYWdlKTtcbiAgICB9XG4gIH1cblxuICBzZXRQYWdlKHBhZ2U6IG51bWJlcikge1xuICAgIC8vIGdldCBuZXcgcGFnZXIgb2JqZWN0IGZvciBzcGVjaWZpZWQgcGFnZVxuICAgIHRoaXMucGFnZXIgPSBwYWdpbmF0ZSh0aGlzLml0ZW1zLmxlbmd0aCwgcGFnZSwgdGhpcy5wYWdlU2l6ZSwgdGhpcy5tYXhQYWdlcyk7XG5cbiAgICAvLyBnZXQgbmV3IHBhZ2Ugb2YgaXRlbXMgZnJvbSBpdGVtcyBhcnJheVxuICAgIHZhciBwYWdlT2ZJdGVtcyA9IHRoaXMuaXRlbXMuc2xpY2UodGhpcy5wYWdlci5zdGFydEluZGV4LCB0aGlzLnBhZ2VyLmVuZEluZGV4ICsgMSk7XG5cbiAgICAvLyBjYWxsIGNoYW5nZSBwYWdlIGZ1bmN0aW9uIGluIHBhcmVudCBjb21wb25lbnRcbiAgICB0aGlzLmNoYW5nZVBhZ2UuZW1pdChwYWdlT2ZJdGVtcyk7XG4gIH1cbn1cbiIsIjxkaXZcbiAgY2xhc3M9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBweS02XCJcbiAgKm5nSWY9XCJwYWdlci5wYWdlcyAmJiBwYWdlci5wYWdlcy5sZW5ndGhcIj5cbiAgPGRpdiBjbGFzcz1cImZsZXggdGV4dC1ncmF5LTcwMFwiPlxuICAgIDxkaXZcbiAgICAgIFtuZ0NsYXNzXT1cInsgZGlzYWJsZWQ6IHBhZ2VyLmN1cnJlbnRQYWdlID09PSAxIH1cIlxuICAgICAgKGNsaWNrKT1cInNldFBhZ2UocGFnZXIuY3VycmVudFBhZ2UgLSAxKVwiXG4gICAgICBjbGFzcz1cIlxuICAgICAgICBoLTEyXG4gICAgICAgIHctMTJcbiAgICAgICAgbXItMVxuICAgICAgICBmbGV4XG4gICAgICAgIGp1c3RpZnktY2VudGVyXG4gICAgICAgIGl0ZW1zLWNlbnRlclxuICAgICAgICByb3VuZGVkLWZ1bGxcbiAgICAgICAgYmctd2hpdGVcbiAgICAgICAgY3Vyc29yLXBvaW50ZXJcbiAgICAgIFwiPlxuICAgICAgPHN2Z1xuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgIHN0cm9rZS13aWR0aD1cIjJcIlxuICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICBjbGFzcz1cImZlYXRoZXIgZmVhdGhlci1jaGV2cm9uLWxlZnQgdy02IGgtNlwiPlxuICAgICAgICA8cG9seWxpbmUgcG9pbnRzPVwiMTUgMTggOSAxMiAxNSA2XCI+PC9wb2x5bGluZT5cbiAgICAgIDwvc3ZnPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IGgtMTIgZm9udC1tZWRpdW0gcm91bmRlZC1mdWxsXCI+XG4gICAgICA8ZGl2XG4gICAgICAgICpuZ0Zvcj1cImxldCBwYWdlIG9mIHBhZ2VyLnBhZ2VzXCJcbiAgICAgICAgW25nQ2xhc3NdPVwieyAnYmctcHVycGxlLTUwMCB0ZXh0LXdoaXRlJzogcGFnZXIuY3VycmVudFBhZ2UgPT09IHBhZ2UgfVwiXG4gICAgICAgIChjbGljayk9XCJzZXRQYWdlKHBhZ2UpXCJcbiAgICAgICAgY2xhc3M9XCJcbiAgICAgICAgICB3LTEyXG4gICAgICAgICAgbWQ6ZmxleFxuICAgICAgICAgIGp1c3RpZnktY2VudGVyXG4gICAgICAgICAgaXRlbXMtY2VudGVyXG4gICAgICAgICAgaGlkZGVuXG4gICAgICAgICAgY3Vyc29yLXBvaW50ZXJcbiAgICAgICAgICBsZWFkaW5nLTVcbiAgICAgICAgICB0cmFuc2l0aW9uXG4gICAgICAgICAgZHVyYXRpb24tMTUwXG4gICAgICAgICAgZWFzZS1pblxuICAgICAgICAgIHJvdW5kZWQtZnVsbFxuICAgICAgICBcIj5cbiAgICAgICAge3sgcGFnZSB9fVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdlxuICAgICAgW25nQ2xhc3NdPVwieyBkaXNhYmxlZDogcGFnZXIuY3VycmVudFBhZ2UgPT09IHBhZ2VyLnRvdGFsUGFnZXMgfVwiXG4gICAgICAoY2xpY2spPVwic2V0UGFnZShwYWdlci5jdXJyZW50UGFnZSArIDEpXCJcbiAgICAgIGNsYXNzPVwiXG4gICAgICAgIGgtMTJcbiAgICAgICAgdy0xMlxuICAgICAgICBtbC0xXG4gICAgICAgIGZsZXhcbiAgICAgICAganVzdGlmeS1jZW50ZXJcbiAgICAgICAgaXRlbXMtY2VudGVyXG4gICAgICAgIHJvdW5kZWQtZnVsbFxuICAgICAgICBiZy13aGl0ZVxuICAgICAgICBjdXJzb3ItcG9pbnRlclxuICAgICAgXCI+XG4gICAgICA8c3ZnXG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMlwiXG4gICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxuICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgIGNsYXNzPVwiZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tcmlnaHQgdy02IGgtNlwiPlxuICAgICAgICA8cG9seWxpbmUgcG9pbnRzPVwiOSAxOCAxNSAxMiA5IDZcIj48L3BvbHlsaW5lPlxuICAgICAgPC9zdmc+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2luYXRpb25Db21wb25lbnQgfSBmcm9tICcuL3BhZ2luYXRpb24uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtQYWdpbmF0aW9uQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1xuICAgIFBhZ2luYXRpb25Db21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25Nb2R1bGUgeyB9XG4iLCIvLyBTcmM6IGh0dHBzOi8vZ2l0aHViLmNvbS9jb3JuZmxvdXJibHVlL2p3LWFuZ3VsYXItcGFnaW5hdGlvbi9ibG9iLzI3YzRhN2MwZmJjNjM1YzE0MjI3ZGE2MmJiOTRjYzM1MjBjYTNhNzUvcHJvamVjdHMvanctcGFnaW5hdGlvbi9ub2RlX21vZHVsZXMvanctcGFnaW5hdGUvbGliL2p3LXBhZ2luYXRlLmpzI0wyXHJcbmV4cG9ydCBmdW5jdGlvbiBwYWdpbmF0ZSh0b3RhbEl0ZW1zLCBjdXJyZW50UGFnZSwgcGFnZVNpemUsIG1heFBhZ2VzKSB7XHJcbiAgICBpZiAoY3VycmVudFBhZ2UgPT09IHZvaWQgMCkgeyBjdXJyZW50UGFnZSA9IDE7IH1cclxuICAgIGlmIChwYWdlU2l6ZSA9PT0gdm9pZCAwKSB7IHBhZ2VTaXplID0gMTA7IH1cclxuICAgIGlmIChtYXhQYWdlcyA9PT0gdm9pZCAwKSB7IG1heFBhZ2VzID0gMTA7IH1cclxuICAgIC8vIGNhbGN1bGF0ZSB0b3RhbCBwYWdlc1xyXG4gICAgdmFyIHRvdGFsUGFnZXMgPSBNYXRoLmNlaWwodG90YWxJdGVtcyAvIHBhZ2VTaXplKTtcclxuICAgIC8vIGVuc3VyZSBjdXJyZW50IHBhZ2UgaXNuJ3Qgb3V0IG9mIHJhbmdlXHJcbiAgICBpZiAoY3VycmVudFBhZ2UgPCAxKSB7XHJcbiAgICAgICAgY3VycmVudFBhZ2UgPSAxO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoY3VycmVudFBhZ2UgPiB0b3RhbFBhZ2VzKSB7XHJcbiAgICAgICAgY3VycmVudFBhZ2UgPSB0b3RhbFBhZ2VzO1xyXG4gICAgfVxyXG4gICAgdmFyIHN0YXJ0UGFnZSwgZW5kUGFnZTtcclxuICAgIGlmICh0b3RhbFBhZ2VzIDw9IG1heFBhZ2VzKSB7XHJcbiAgICAgICAgLy8gdG90YWwgcGFnZXMgbGVzcyB0aGFuIG1heCBzbyBzaG93IGFsbCBwYWdlc1xyXG4gICAgICAgIHN0YXJ0UGFnZSA9IDE7XHJcbiAgICAgICAgZW5kUGFnZSA9IHRvdGFsUGFnZXM7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICAvLyB0b3RhbCBwYWdlcyBtb3JlIHRoYW4gbWF4IHNvIGNhbGN1bGF0ZSBzdGFydCBhbmQgZW5kIHBhZ2VzXHJcbiAgICAgICAgdmFyIG1heFBhZ2VzQmVmb3JlQ3VycmVudFBhZ2UgPSBNYXRoLmZsb29yKG1heFBhZ2VzIC8gMik7XHJcbiAgICAgICAgdmFyIG1heFBhZ2VzQWZ0ZXJDdXJyZW50UGFnZSA9IE1hdGguY2VpbChtYXhQYWdlcyAvIDIpIC0gMTtcclxuICAgICAgICBpZiAoY3VycmVudFBhZ2UgPD0gbWF4UGFnZXNCZWZvcmVDdXJyZW50UGFnZSkge1xyXG4gICAgICAgICAgICAvLyBjdXJyZW50IHBhZ2UgbmVhciB0aGUgc3RhcnRcclxuICAgICAgICAgICAgc3RhcnRQYWdlID0gMTtcclxuICAgICAgICAgICAgZW5kUGFnZSA9IG1heFBhZ2VzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjdXJyZW50UGFnZSArIG1heFBhZ2VzQWZ0ZXJDdXJyZW50UGFnZSA+PSB0b3RhbFBhZ2VzKSB7XHJcbiAgICAgICAgICAgIC8vIGN1cnJlbnQgcGFnZSBuZWFyIHRoZSBlbmRcclxuICAgICAgICAgICAgc3RhcnRQYWdlID0gdG90YWxQYWdlcyAtIG1heFBhZ2VzICsgMTtcclxuICAgICAgICAgICAgZW5kUGFnZSA9IHRvdGFsUGFnZXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBjdXJyZW50IHBhZ2Ugc29tZXdoZXJlIGluIHRoZSBtaWRkbGVcclxuICAgICAgICAgICAgc3RhcnRQYWdlID0gY3VycmVudFBhZ2UgLSBtYXhQYWdlc0JlZm9yZUN1cnJlbnRQYWdlO1xyXG4gICAgICAgICAgICBlbmRQYWdlID0gY3VycmVudFBhZ2UgKyBtYXhQYWdlc0FmdGVyQ3VycmVudFBhZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gY2FsY3VsYXRlIHN0YXJ0IGFuZCBlbmQgaXRlbSBpbmRleGVzXHJcbiAgICB2YXIgc3RhcnRJbmRleCA9IChjdXJyZW50UGFnZSAtIDEpICogcGFnZVNpemU7XHJcbiAgICB2YXIgZW5kSW5kZXggPSBNYXRoLm1pbihzdGFydEluZGV4ICsgcGFnZVNpemUgLSAxLCB0b3RhbEl0ZW1zIC0gMSk7XHJcbiAgICAvLyBjcmVhdGUgYW4gYXJyYXkgb2YgcGFnZXMgdG8gbmctcmVwZWF0IGluIHRoZSBwYWdlciBjb250cm9sXHJcbiAgICB2YXIgcGFnZXMgPSBBcnJheS5mcm9tKEFycmF5KChlbmRQYWdlICsgMSkgLSBzdGFydFBhZ2UpLmtleXMoKSkubWFwKGZ1bmN0aW9uIChpKSB7IHJldHVybiBzdGFydFBhZ2UgKyBpOyB9KTtcclxuICAgIC8vIHJldHVybiBvYmplY3Qgd2l0aCBhbGwgcGFnZXIgcHJvcGVydGllcyByZXF1aXJlZCBieSB0aGUgdmlld1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0b3RhbEl0ZW1zOiB0b3RhbEl0ZW1zLFxyXG4gICAgICAgIGN1cnJlbnRQYWdlOiBjdXJyZW50UGFnZSxcclxuICAgICAgICBwYWdlU2l6ZTogcGFnZVNpemUsXHJcbiAgICAgICAgdG90YWxQYWdlczogdG90YWxQYWdlcyxcclxuICAgICAgICBzdGFydFBhZ2U6IHN0YXJ0UGFnZSxcclxuICAgICAgICBlbmRQYWdlOiBlbmRQYWdlLFxyXG4gICAgICAgIHN0YXJ0SW5kZXg6IHN0YXJ0SW5kZXgsXHJcbiAgICAgICAgZW5kSW5kZXg6IGVuZEluZGV4LFxyXG4gICAgICAgIHBhZ2VzOiBwYWdlc1xyXG4gICAgfTtcclxufSIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERpYWxvZ1NlcnZpY2UgfSBmcm9tICdAbmduZWF0L2RpYWxvZyc7XG5pbXBvcnQgeyBOZ3hJbmRleGVkREJTZXJ2aWNlIH0gZnJvbSAnbmd4LWluZGV4ZWQtZGInO1xuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQnV5T3JkZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9tb2RlbHMvYnV5LW9yZGVyLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWJ1eS1vcmRlci1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2J1eS1vcmRlci1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYnV5LW9yZGVyLWl0ZW0uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBCdXlPcmRlckl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKipcbiAgICogQ3VycmVudCBidXkgb3JkZXIgcGxhbiBpdGVtXG4gICAqXG4gICAqIEB0eXBlIHtCdXlPcmRlcn1cbiAgICogQG1lbWJlcm9mIEJ1eU9yZGVySXRlbUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgb3JkZXJJdGVtOiBCdXlPcmRlcjtcbiAgLyoqXG4gICAqIEV2ZW50IGVtaXR0ZXIgd2hpY2ggZW1pdHMgaW5mb3JtYXRpb24gYWJvdXQgcmVtb3ZlZCBpdGVtIHdoZW4gaXQgZ290IHJlbW92ZWRcbiAgICpcbiAgICogQHR5cGUge0V2ZW50RW1pdHRlcjxCdXlPcmRlcj59XG4gICAqIEBtZW1iZXJvZiBCdXlPcmRlckl0ZW1Db21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKSBpdGVtUmVtb3ZlZDogRXZlbnRFbWl0dGVyPEJ1eU9yZGVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLyoqXG4gICAqIEN1cnJlbmN5IHNpZ24gZm9yIHZpc3VhbCBkaXNwbGF5XG4gICAqXG4gICAqIEB0eXBlIHtzdHJpbmd9XG4gICAqIEBtZW1iZXJvZiBCdXlPcmRlckl0ZW1Db21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpIGN1cnJlbmN5U2lnbjogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGRpYWxvZzogRGlhbG9nU2VydmljZSxcbiAgICBwcml2YXRlIGRiU2VydmljZTogTmd4SW5kZXhlZERCU2VydmljZSxcbiAgKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXRob2Qgc2hvdyBjb25maXJtYXRpb24gbW9kYWwgYW5kIG9uIGNvbmZpcm1lZCBhY3Rpb25zIHNlbmRzIHNpZ25hbCB0byByZW1vdmUgaXRlbVxuICAgKlxuICAgKiBAbWVtYmVyb2YgQnV5T3JkZXJJdGVtQ29tcG9uZW50XG4gICAqL1xuICByZW1vdmVJdGVtKCkge1xuICAgIHRoaXMuZGlhbG9nLmNvbmZpcm0oe1xuICAgICAgdGl0bGU6IGBDb25maXJtIHlvdXIgYWN0aW9uc2AsXG4gICAgICBib2R5OiBgWW91IGFyZSBhYm91dCB0byByZW1vdmUgPGI+JHt0aGlzLm9yZGVySXRlbS5pdGVtTmFtZX08L2I+LjxiciAvPkNvbnRpbnVlID9gXG4gICAgfSlcbiAgICAgIC5hZnRlckNsb3NlZCRcbiAgICAgIC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAoY29uZmlybWVkID0+IHtcbiAgICAgICAgICAvLyBJZiB1c2VyIGNvbmZpcm1lZCBoaXMgYWN0aW9ucyAtIFJlbW92aW5nIGZyb20gREJcbiAgICAgICAgICBpZiAoY29uZmlybWVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYlNlcnZpY2UuZGVsZXRlPEJ1eU9yZGVyPignb3JkZXJzJywgdGhpcy5vcmRlckl0ZW0uaWQpXG4gICAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIC8vIEFmdGVyIHN1Y2Nlc3NmdWwgcmVtb3ZhbCByZXR1cm5pbmcgXCJ0cnVlXCIgYXMgY29uZmlybWF0aW9uIGZvciBzdWNjZXNzZnVsIGFjdGlvblxuICAgICAgICAgICAgICAgIC8vIGJlY2F1c2Ugd2UgZG9uJ3QgY2FyZSBhYm91dCB1cGRhdGVkIGxpc3QgaW4gdGhpcyBjYXNlXG4gICAgICAgICAgICAgICAgbWFwKCgpID0+IHRydWUpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIElmIHVzZXIgY2FuY2VsZWQgaGlzIGFjdGlvbiByZXR1cm5pbmcgXCJmYWxzZVwiXG4gICAgICAgICAgICByZXR1cm4gb2YoZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUocmVtb3ZlZCA9PiB7XG4gICAgICAgIC8vIEV4cGxpY2l0bGx5IGNoZWNraW5nIGZvciBcInRydWVcIiB2YWx1ZSBiZWNhdXNlIHRoZXJlIGFyZSBjYXNlcyB3aGVyZSB0aGlzIGNhbiBiZSB0cnV0aHlcbiAgICAgICAgLy8gYnV0IGluIG91ciBjYXNlIHdlIG5lZWQgdG8gYmUgc3VyZSB0aGF0IGV4YWN0bHkgRGVsZXRlIG9wZXJhdGlvbiB3YXMgY29tcGxldGVkXG4gICAgICAgIGlmIChyZW1vdmVkID09PSB0cnVlKSB7XG4gICAgICAgICAgdGhpcy5pdGVtUmVtb3ZlZC5lbWl0KHRoaXMub3JkZXJJdGVtKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxufVxuIiwiPGRpdlxuICBjbGFzcz1cImJnLXdoaXRlIHctZnVsbCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBwLTIgcGItMCByb3VuZGVkLXhsIHNoYWRvdyBib3JkZXIgaG92ZXI6c2hhZG93LXhsIGR1cmF0aW9uLTIwMCBhbmltYXRlX19hbmltYXRlZCBhbmltYXRlX19mYWRlSW5cIlxuICAqbmdJZj1cIm9yZGVySXRlbVwiPlxuICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgdy1mdWxsIGl0ZW0tY29udGVudFwiPlxuICAgIDxkaXYgY2xhc3M9XCJmbGV4LWdyb3cgcC0zXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNzAwXCI+e3sgb3JkZXJJdGVtLml0ZW1OYW1lIH19PC9kaXY+XG4gICAgICA8YVxuICAgICAgICBbaHJlZl09XCJcbiAgICAgICAgICAnaHR0cHM6Ly9zdGVhbWNvbW11bml0eS5jb20vbWFya2V0L2xpc3RpbmdzLycgK1xuICAgICAgICAgIG9yZGVySXRlbS5hcHBJZCArXG4gICAgICAgICAgJy8nICtcbiAgICAgICAgICBvcmRlckl0ZW0uaXRlbU5hbWVcbiAgICAgICAgXCJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwIGhvdmVyOnRleHQtYmx1ZS05MDAgZHVyYXRpb24tMjAwXCJcbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgIFZpZXcgb24gbWFya2V0XG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInAtMiB0ZXh0LXJpZ2h0XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dC1sZyBsZWFkaW5nLTNcIj5cbiAgICAgICAge3sgb3JkZXJJdGVtLnByaWNlIHwgbnVtYmVyOiAnMS4yLTInIH19e3sgY3VycmVuY3lTaWduIH19XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzbWFsbD54e3sgb3JkZXJJdGVtLmFtb3VudCB9fTwvc21hbGw+XG4gICAgICA8aHIgY2xhc3M9XCJkaXZpZGVyXCIgLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIFRvdGFsOlxuICAgICAgICA8Yj5cbiAgICAgICAgICB7eyBvcmRlckl0ZW0ucHJpY2UgKiBvcmRlckl0ZW0uYW1vdW50IHwgbnVtYmVyOiAnMS4yLTInXG4gICAgICAgICAgfX17eyBjdXJyZW5jeVNpZ24gfX1cbiAgICAgICAgPC9iPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8YnV0dG9uXG4gICAgdHlwZT1cImJ1dHRvblwiXG4gICAgY2xhc3M9XCJtbC1hdXRvIHRleHQtcmVkLTUwMCBob3Zlcjp0ZXh0LXJlZC03MDAgZHVyYXRpb24tMjAwIHRyYW5zaXRpb24tYWxsIHBiLTIgcHgtNFwiXG4gICAgKGNsaWNrKT1cInJlbW92ZUl0ZW0oKVwiPlxuICAgIFJlbW92ZVxuICA8L2J1dHRvbj5cbjwvZGl2PlxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBQbGFubmVkT3JkZXJzQ29tcG9uZW50IH0gZnJvbSAnLi9wbGFubmVkLW9yZGVycy5jb21wb25lbnQnO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJycsXHJcbiAgICAgICAgY29tcG9uZW50OiBQbGFubmVkT3JkZXJzQ29tcG9uZW50LFxyXG4gICAgfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXHJcbiAgICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGxhbm5lZE9yZGVyc1JvdXRpbmdNb2R1bGUgeyB9XHJcbiIsImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBvZiwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBjb25jYXRNYXAsIGRlYm91bmNlVGltZSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBQYWdpbmF0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnV5T3JkZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9tb2RlbHMvYnV5LW9yZGVyLm1vZGVsJztcclxuaW1wb3J0IHsgT3B0aW9uc0ZhY2FkZSB9IGZyb20gJy4uLy4uLy4uL29wdGlvbnMuZmFjYWRlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXBsYW5uZWQtb3JkZXJzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGxhbm5lZC1vcmRlcnMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3BsYW5uZWQtb3JkZXJzLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFBsYW5uZWRPcmRlcnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgLyoqXHJcbiAgICogTW9kZWwgZm9yIHNlYXJjaCB0ZXh0IGlucHV0IGJpbmRpbmdcclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICogQG1lbWJlcm9mIFBsYW5uZWRPcmRlcnNDb21wb25lbnRcclxuICAgKi9cclxuICBzZWFyY2hUZXh0OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogQW1vdW50IG9mIGZvdW5kIHJlc3VsdHMgYWZ0ZXIgZmlsdHJhdGlvblxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKiBAbWVtYmVyb2YgUGxhbm5lZE9yZGVyc0NvbXBvbmVudFxyXG4gICAqL1xyXG4gIGZvdW5kUmVzdWx0czogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIExpc3Qgd2l0aCBhbGwgb3JkZXJzIGZvciBkaXNwbGF5LiBVc2VkIGZvciBwYWdpbmF0aW9uXHJcbiAgICpcclxuICAgKiBAdHlwZSB7QnV5T3JkZXJbXX1cclxuICAgKiBAbWVtYmVyb2YgUGxhbm5lZE9yZGVyc0NvbXBvbmVudFxyXG4gICAqL1xyXG4gIGFsbE9yZGVyc0ZvckRpc3BsYXk6IEJ1eU9yZGVyW10gPSBbXTtcclxuICAvKipcclxuICAgKiBMaXN0IHdpdGggY3VycmVudCBwYWdlIGl0ZW1zIGZvciBkaXNwbGF5IChmcm9tIHBhZ2luYXRpb24pXHJcbiAgICpcclxuICAgKiBAdHlwZSB7QnV5T3JkZXJbXX1cclxuICAgKiBAbWVtYmVyb2YgUGxhbm5lZE9yZGVyc0NvbXBvbmVudFxyXG4gICAqL1xyXG4gIGN1cnJlbnRQYWdlSXRlbXM6IEJ1eU9yZGVyW10gPSBbXTtcclxuICAvKipcclxuICAgKiBGbGFnIGluZGljYXRlcyBpZiBzaG93IHBlciBwYWdlIG9wdGlvbiBkcm9wZG93biBpcyBvcGVuZWRcclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBQbGFubmVkT3JkZXJzQ29tcG9uZW50XHJcbiAgICovXHJcbiAgZHJvcGRvd25PcGVuOiBib29sZWFuID0gZmFsc2U7XHJcbiAgLyoqXHJcbiAgICogTnVtYmVyIG9mIGl0ZW1zIHBlciBwYWdlXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqIEBtZW1iZXJvZiBQbGFubmVkT3JkZXJzQ29tcG9uZW50XHJcbiAgICovXHJcbiAgc2hvd1BlclBhZ2U6IG51bWJlciA9IDE4O1xyXG4gIC8qKlxyXG4gICAqIEF2YWlsYWJsZSBvcHRpb25zIG9mIHBhZ2Ugc2l6ZSB0aGF0IHVzZXIgY2FuIHNlbGVjdCBmcm9tXHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyW119XHJcbiAgICogQG1lbWJlcm9mIFBsYW5uZWRPcmRlcnNDb21wb25lbnRcclxuICAgKi9cclxuICBzaG93UGVyUGFnZU9wdGlvbnM6IG51bWJlcltdID0gWzksIDE4LCAyNywgMzZdO1xyXG4gIC8qKlxyXG4gICAqIEN1cnJlbmN5IHNpZ24gZm9yIHZpc3VhbCBkaXNwbGF5XHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqIEBtZW1iZXJvZiBQbGFubmVkT3JkZXJzQ29tcG9uZW50XHJcbiAgICovXHJcbiAgY3VycmVuY3lTaWduOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogUmVmZXJlbmNlIHRvIHBhZ2luYXRpb24gY29tcG9uZW50IHdoaWNoIGhvbGRzIG1hbnkgdXNlZnVsIGluZm9ybWF0aW9uXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEB0eXBlIHtQYWdpbmF0aW9uQ29tcG9uZW50fVxyXG4gICAqIEBtZW1iZXJvZiBQbGFubmVkT3JkZXJzQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQFZpZXdDaGlsZCgncGFnaW5hdGlvbicpIHByaXZhdGUgcGFnaW5hdGlvbjogUGFnaW5hdGlvbkNvbXBvbmVudDtcclxuICAvKipcclxuICAgKiBCZWhhdmlvciBTdWJqZWN0IHRoYXQgcmVjZWl2ZXMgc2VhcmNoIHRleHQgdmFsdWUgdG8gZmlsdGVyIHJlc3VsdHNcclxuICAgKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHR5cGUge0JlaGF2aW9yU3ViamVjdDxzdHJpbmc+fVxyXG4gICAqIEBtZW1iZXJvZiBQbGFubmVkT3JkZXJzQ29tcG9uZW50XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzZWFyY2hTdWJqZWN0OiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoJycpO1xyXG4gIC8qKlxyXG4gICAqIExpc3Qgd2l0aCBwbGFubmVkIG9yZGVycyBmb3IgZGlzcGxheVxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAdHlwZSB7QnV5T3JkZXJbXX1cclxuICAgKiBAbWVtYmVyb2YgUGxhbm5lZE9yZGVyc0NvbXBvbmVudFxyXG4gICAqL1xyXG4gIHByaXZhdGUgcGxhbm5lZE9yZGVyczogQnV5T3JkZXJbXSA9IFtdO1xyXG4gIC8qKlxyXG4gICAqIFN1YmplY3QgdGhhdCBpcyByZXNwb25zaWJsZSBmb3IgdW5zdWJzY3JpYmluZyB3aGVuIGNvbXBvbmVudCBnZXRzIGRlc3Ryb3llZFxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAdHlwZSB7U3ViamVjdDxib29sZWFuPn1cclxuICAgKiBAbWVtYmVyb2YgUGxhbm5lZE9yZGVyc0NvbXBvbmVudFxyXG4gICAqL1xyXG4gIHByaXZhdGUgZGVzdHJveSQ6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdCgpO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBvcHRpb25zRmFjYWRlOiBPcHRpb25zRmFjYWRlLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICkge1xyXG5cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5vcHRpb25zRmFjYWRlLmdldFBsYW5uZWRPcmRlcnModHJ1ZSlcclxuICAgICAgLnN1YnNjcmliZShvcmRlcnMgPT4ge1xyXG4gICAgICAgIHRoaXMucGxhbm5lZE9yZGVycyA9IG9yZGVycztcclxuICAgICAgICAvLyBHZXR0aW5nIGN1cnJlbmN5IHNpZ24gZm9yIGRpc3BsYXkgaWYgd2UgaGF2ZSBhdCBsZWFzdCBvbmUgcGxhbm5lZCBvcmRlciBiZWNhdXNlXHJcbiAgICAgICAgLy8gY3VycmVuY3kgaWQgaXMgc3RvcmVkIG9uIHBsYW5uZWQgb3JkZXIgbGV2ZWxcclxuICAgICAgICBpZiAodGhpcy5wbGFubmVkT3JkZXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgLy8gRmluZGluZyBuZWNlc3NhcnkgY3VycmVuY3kgZnJvbSBzdG9yZWQgbGlzdFxyXG4gICAgICAgICAgLy8gLi4uYW5kIHVzaW5nIGl0cyBzeW1ib2xcclxuICAgICAgICAgIHRoaXMuY3VycmVuY3lTaWduID0gdGhpcy5vcHRpb25zRmFjYWRlLmdldEN1cnJlbmN5KCk/LnN5bWJvbCA/PyAnJztcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIC8vIFN1YnNjcmliaW5nIHRvIHNlYXJjaCBpbnB1dCBjaGFuZ2VzXHJcbiAgICB0aGlzLnNlYXJjaFN1YmplY3QuYXNPYnNlcnZhYmxlKClcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgZGVib3VuY2VUaW1lKDIwMCksXHJcbiAgICAgICAgY29uY2F0TWFwKHNlYXJjaFRleHQgPT4ge1xyXG4gICAgICAgICAgLy8gRmlsdGVyaW5nIHJlc3VsdHMgYW5kIHJldHVybmluZyBmaWx0ZXJlZCBhcnJheVxyXG4gICAgICAgICAgcmV0dXJuIG9mKHRoaXMucGxhbm5lZE9yZGVycy5maWx0ZXIob3JkZXIgPT4gb3JkZXIuaXRlbU5hbWVcclxuICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgLmluY2x1ZGVzKHNlYXJjaFRleHQudG9Mb3dlckNhc2UoKSlcclxuICAgICAgICAgIClcclxuICAgICAgICAgIClcclxuICAgICAgICB9KSxcclxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcclxuICAgICAgICAvLyB0YXAocmVzdWx0cyA9PiB0aGlzLmZvdW5kUmVzdWx0cyA9IHJlc3VsdHMubGVuZ3RoKSxcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKGZpbHRlcmVkUmVzdWx0cyA9PiB7XHJcbiAgICAgICAgLy8gU3RvcmluZyBhbW91bnQgb2YgZm91bmQgcmVzdWx0cyBqdXN0IGZvciBkaXNwbGF5XHJcbiAgICAgICAgdGhpcy5mb3VuZFJlc3VsdHMgPSBmaWx0ZXJlZFJlc3VsdHMubGVuZ3RoO1xyXG4gICAgICAgIC8vIFN0b3JpbmcgcmVzdWx0cyBmb3IgZGlzcGxheVxyXG4gICAgICAgIHRoaXMuYWxsT3JkZXJzRm9yRGlzcGxheSA9IGZpbHRlcmVkUmVzdWx0cztcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIC8vIENvbXBsZXRpbmcgc3Vic2NyaXB0aW9uc1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KHRydWUpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgc2VhcmNoKHNlYXJjaFRleHQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5zZWFyY2hTdWJqZWN0Lm5leHQoc2VhcmNoVGV4dCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNZXRob2QgZmlsbHMgcGxhbm5lZCBidXkgb3JkZXIgbGlzdCBmb3IgZGlzcGxheSBhZnRlciBwYWdlIGNoYW5nZWRcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7QnV5T3JkZXJbXX0gcGFnZU9mSXRlbXMgTmV3IGl0ZW1zIGZvciBkaXNwbGF5eVxyXG4gICAqIEBtZW1iZXJvZiBQbGFubmVkT3JkZXJzQ29tcG9uZW50XHJcbiAgICovXHJcbiAgb25DaGFuZ2VQYWdlKHBhZ2VPZkl0ZW1zOiBCdXlPcmRlcltdKSB7XHJcbiAgICAvLyBTZXR0aW5nIGl0ZW1zIHRoYXQgd2lsbCBiZSBkaXNwbGF5ZWRcclxuICAgIHRoaXMuY3VycmVudFBhZ2VJdGVtcyA9IHBhZ2VPZkl0ZW1zO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlUGFnZVNpemUoc2l6ZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnNob3dQZXJQYWdlID0gc2l6ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRyYWNrcyBvcmRlciBieSBJRC4gVXNlZCBmb3IgcGVyZm9ybWFuY2UgdG8gbWluaW1pemUgcmVuZGVyaW5nXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggSXRlbSBpbmRleFxyXG4gICAqIEBwYXJhbSB7QnV5T3JkZXJ9IGl0ZW0gSXRlbSBvZiBjdXJyZW50IGl0ZXJhdGlvblxyXG4gICAqIEByZXR1cm4geyp9IFJldHVybnMgaWQgb2YgY3VycmVudCBpdGVyYXRpb24gaXRlbVxyXG4gICAqIEBtZW1iZXJvZiBQbGFubmVkT3JkZXJzQ29tcG9uZW50XHJcbiAgICovXHJcbiAgb3JkZXJCeUlkKGluZGV4OiBudW1iZXIsIGl0ZW06IEJ1eU9yZGVyKSB7XHJcbiAgICByZXR1cm4gaXRlbS5pZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1ldGhvZCByZW1vdmVzIHBsYW5uZWQgb3JkZXIgZnJvbSBsaXN0XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gY3VycmVudFBhZ2VJbmRleCBJbmRleCBvZiBlbGVtZW50IGZvciByZW1vdmFsIG9uIGN1cnJlbnQgcGFnZS4gSXRzIG5vdCBpbmRleCBpbiBhbGwgbGlzdFxyXG4gICAqIEBtZW1iZXJvZiBQbGFubmVkT3JkZXJzQ29tcG9uZW50XHJcbiAgICovXHJcbiAgcmVtb3ZlSXRlbShjdXJyZW50UGFnZUluZGV4OiBudW1iZXIpIHtcclxuICAgIC8vIEdldHRpbmcgaW5kZXggb2YgaXRlbSB0byByZW1vdmUgYW1vbmcgYWxsIGl0ZW1zLCBub3Qgb24gY3VycmVudCBwYWdlXHJcbiAgICBjb25zdCBpbmRleEZvclJlbW92YWwgPSB0aGlzLnBhZ2luYXRpb24ucGFnZXIuc3RhcnRJbmRleCArIGN1cnJlbnRQYWdlSW5kZXg7XHJcbiAgICAvLyBSZW1vdmluZyBlbGVtZW50IGZyb20gbGlzdCBvZiBhbGwgaXRlbXMgc28gYWZ0ZXIgcGFnZSBjaGFuZ2UgaXQgd29uJ3QgYXBwZWFyIGFnYWluXHJcbiAgICAvLyBOT1RFOiBXZSBhcmUgcmVtb3ZpbmcgZnJvbSB0d28gbGlzdHMgYmVjYXVzZSBvbmUgcmVtYWlucyBhcyBvcmlnaW5hbCBhbmQgdGhlIG90aGVyIG9uZSBpc1xyXG4gICAgLy8gdXNlZCBmb3IgZGlzcGxheSBhbmQgZmlsdGVyaW5nXHJcbiAgICB0aGlzLnBhZ2luYXRpb24uaXRlbXMuc3BsaWNlKGluZGV4Rm9yUmVtb3ZhbCwgMSk7XHJcbiAgICB0aGlzLnBsYW5uZWRPcmRlcnMuc3BsaWNlKGluZGV4Rm9yUmVtb3ZhbCwgMSk7XHJcbiAgICAvLyBSZW1vdmluZyBlbGVtZW50IGZyb20gY3VycmVudCBwYWdlIHNvIGl0IGRpc2FwcGVhcnNcclxuICAgIHRoaXMuY3VycmVudFBhZ2VJdGVtcy5zcGxpY2UoY3VycmVudFBhZ2VJbmRleCwgMSk7XHJcblxyXG4gICAgLy8gRGVjcmVhc2luZyBmb3VuZCByZXN1bHQgY291bnRlciBzaW5jZSBlbGVtZW50IHdhcyByZW1vdmVkXHJcbiAgICB0aGlzLmZvdW5kUmVzdWx0cy0tO1xyXG5cclxuICAgIC8vIElmIHRoZXJlIGFyZSBubyBtb3JlIGl0ZW1zIG9uIGN1cnJlbnQgcGFnZSB0aGVuIGdvaW5nIGJhY2sgdG8gcHJldmlvdXMgcGFnZS5cclxuICAgIC8vIElmIHVzZXIgaXMgY3VycmVudGx5IG9uIGZpcnN0IHBhZ2UgdGhlbiBpdCB3aWxsIHRyaWdnZXIgcGFnaW5hdGlvbiByZWNyZWF0ZSBhbnl3YXlzXHJcbiAgICBpZiAoIXRoaXMuY3VycmVudFBhZ2VJdGVtcy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5wYWdpbmF0aW9uLnNldFBhZ2UodGhpcy5wYWdpbmF0aW9uLnBhZ2VyLmN1cnJlbnRQYWdlIC0gMSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImNvbnRhaW5lciBteC1hdXRvXCI+XG4gIDxkaXYgY2xhc3M9XCJteS1hdXRvIG14LWF1dG9cIj5cbiAgICA8ZGl2IGNsYXNzPVwicmVsYXRpdmUgdy1mdWxsIGxnOnctMS8yIG14LWF1dG8gdGV4dC1ncmF5LTYwMCBtYi0wXCI+XG4gICAgICA8aW5wdXQgdHlwZT1cInNlYXJjaFwiIG5hbWU9XCJzZXJjaFwiIHBsYWNlaG9sZGVyPVwiRmlsdGVyIGl0ZW1zIGJ5IG5hbWVcIiBbbmdNb2RlbF09XCJzZWFyY2hUZXh0XCJcbiAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwic2VhcmNoKCRldmVudClcIiBjbGFzcz1cIlxuICAgICAgICAgIHctZnVsbFxuICAgICAgICAgIGJnLXdoaXRlXG4gICAgICAgICAgaC0xMFxuICAgICAgICAgIHB4LTVcbiAgICAgICAgICBwci0xMFxuICAgICAgICAgIHJvdW5kZWQtZnVsbFxuICAgICAgICAgIHRleHQtc21cbiAgICAgICAgICBmb2N1czpvdXRsaW5lLW5vbmVcbiAgICAgICAgICBob3ZlcjpzaGFkb3cteGxcbiAgICAgICAgICBkdXJhdGlvbi0yMDBcbiAgICAgICAgXCIgLz5cbiAgICAgIDxkaXYgY2xhc3M9XCJhYnNvbHV0ZSByaWdodC0wIHRvcC0wIG10LTMgbXItNFwiPlxuICAgICAgICA8c3ZnIGNsYXNzPVwiaC00IHctNCBmaWxsLWN1cnJlbnRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJcbiAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCIgaWQ9XCJDYXBhXzFcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHZpZXdCb3g9XCIwIDAgNTYuOTY2IDU2Ljk2NlwiXG4gICAgICAgICAgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDogbmV3IDAgMCA1Ni45NjYgNTYuOTY2XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIiB3aWR0aD1cIjUxMnB4XCIgaGVpZ2h0PVwiNTEycHhcIj5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZD1cIk01NS4xNDYsNTEuODg3TDQxLjU4OCwzNy43ODZjMy40ODYtNC4xNDQsNS4zOTYtOS4zNTgsNS4zOTYtMTQuNzg2YzAtMTIuNjgyLTEwLjMxOC0yMy0yMy0yM3MtMjMsMTAuMzE4LTIzLDIzICBzMTAuMzE4LDIzLDIzLDIzYzQuNzYxLDAsOS4yOTgtMS40MzYsMTMuMTc3LTQuMTYybDEzLjY2MSwxNC4yMDhjMC41NzEsMC41OTMsMS4zMzksMC45MiwyLjE2MiwwLjkyICBjMC43NzksMCwxLjUxOC0wLjI5NywyLjA3OS0wLjgzN0M1Ni4yNTUsNTQuOTgyLDU2LjI5Myw1My4wOCw1NS4xNDYsNTEuODg3eiBNMjMuOTg0LDZjOS4zNzQsMCwxNyw3LjYyNiwxNywxN3MtNy42MjYsMTctMTcsMTcgIHMtMTctNy42MjYtMTctMTdTMTQuNjEsNiwyMy45ODQsNnpcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktZXZlbmx5IGFsaWduLWNlbnRlciBtYi00IG10LTRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJoNSB0ZXh0LWNlbnRlciBmb250LXNlbWlib2xkXCI+XG4gICAgICAgIEZvdW5kIHt7IGZvdW5kUmVzdWx0cyB9fSByZXN1bHRzXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyZWxhdGl2ZVwiPlxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJkcm9wZG93bk9wZW4gPSAhZHJvcGRvd25PcGVuXCIgY2xhc3M9XCJyZWxhdGl2ZSBob3Zlcjp0ZXh0LWJsdWUtNTAwIGR1cmF0aW9uLTIwMCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgU2hvdyBwZXIgcGFnZToge3sgc2hvd1BlclBhZ2UgfX1cbiAgICAgICAgICA8c3ZnIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICAgICAncm90YXRlLTE4MCc6IGRyb3Bkb3duT3BlbixcbiAgICAgICAgICAgICAgJ3JvdGF0ZS0wJzogIWRyb3Bkb3duT3BlblxuICAgICAgICAgICAgfVwiIGNsYXNzPVwiXG4gICAgICAgICAgICAgIGlubGluZVxuICAgICAgICAgICAgICB3LTRcbiAgICAgICAgICAgICAgaC00XG4gICAgICAgICAgICAgIG10LTFcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbi10cmFuc2Zvcm1cbiAgICAgICAgICAgICAgZHVyYXRpb24tMjAwXG4gICAgICAgICAgICAgIHRyYW5zZm9ybVxuICAgICAgICAgICAgICBtZDotbXQtMVxuICAgICAgICAgICAgICByb3RhdGUtMFxuICAgICAgICAgICAgXCI+XG4gICAgICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgZD1cIk01LjI5MyA3LjI5M2ExIDEgMCAwMTEuNDE0IDBMMTAgMTAuNTg2bDMuMjkzLTMuMjkzYTEgMSAwIDExMS40MTQgMS40MTRsLTQgNGExIDEgMCAwMS0xLjQxNCAwbC00LTRhMSAxIDAgMDEwLTEuNDE0elwiXG4gICAgICAgICAgICAgIGNsaXAtcnVsZT1cImV2ZW5vZGRcIj48L3BhdGg+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxkaXYgKm5nSWY9XCJkcm9wZG93bk9wZW5cIiAoY2xpY2spPVwiZHJvcGRvd25PcGVuID0gZmFsc2VcIiBjbGFzcz1cImZpeGVkIGluc2V0LTAgaC1mdWxsIHctZnVsbCB6LTEwXCI+PC9kaXY+XG5cbiAgICAgICAgPGRpdiAqbmdJZj1cImRyb3Bkb3duT3BlblwiIGNsYXNzPVwiXG4gICAgICAgICAgICBhYnNvbHV0ZVxuICAgICAgICAgICAgcmlnaHQtMFxuICAgICAgICAgICAgbXQtMlxuICAgICAgICAgICAgYmctd2hpdGVcbiAgICAgICAgICAgIHJvdW5kZWQtbWRcbiAgICAgICAgICAgIG92ZXJmbG93LWhpZGRlblxuICAgICAgICAgICAgc2hhZG93LXhsXG4gICAgICAgICAgICB6LTIwXG4gICAgICAgICAgXCI+XG4gICAgICAgICAgPGJ1dHRvbiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIHNob3dQZXJQYWdlT3B0aW9uc1wiIChjbGljayk9XCJjaGFuZ2VQYWdlU2l6ZShvcHRpb24pXCIgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICAgICAnYmctcHVycGxlLTUwMCB0ZXh0LXdoaXRlJzogb3B0aW9uID09PSBzaG93UGVyUGFnZSxcbiAgICAgICAgICAgICAgJ2hvdmVyOmJnLWdyYXktMjAwJzogb3B0aW9uICE9PSBzaG93UGVyUGFnZVxuICAgICAgICAgICAgfVwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJsb2NrIHB4LTQgcHktMiB3LWZ1bGwgdGV4dC1zbSBib3JkZXItYiBkdXJhdGlvbi0yMDBcIj5cbiAgICAgICAgICAgIHt7IG9wdGlvbiB9fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiXG4gICAgICBncmlkXG4gICAgICBzbTpncmlkLWNvbHMtMlxuICAgICAgbGc6Z3JpZC1jb2xzLTNcbiAgICAgIHhsOmdyaWRzLWNvbHMtNFxuICAgICAgZ3JpZC1jb2xzLTFcbiAgICAgIGdhcC00XG4gICAgICBweC0zXG4gICAgXCI+XG4gICAgPGFwcC1idXktb3JkZXItaXRlbSAqbmdGb3I9XCJsZXQgb3JkZXIgb2YgY3VycmVudFBhZ2VJdGVtczsgbGV0IGkgPSBpbmRleFwiIFtvcmRlckl0ZW1dPVwib3JkZXJcIlxuICAgICAgW2N1cnJlbmN5U2lnbl09XCJjdXJyZW5jeVNpZ25cIiAoaXRlbVJlbW92ZWQpPVwicmVtb3ZlSXRlbShpKVwiPjwvYXBwLWJ1eS1vcmRlci1pdGVtPlxuICA8L2Rpdj5cbiAgPGFwcC1wYWdpbmF0aW9uICNwYWdpbmF0aW9uIFtpdGVtc109XCJhbGxPcmRlcnNGb3JEaXNwbGF5XCIgW3BhZ2VTaXplXT1cInNob3dQZXJQYWdlXCJcbiAgICAoY2hhbmdlUGFnZSk9XCJvbkNoYW5nZVBhZ2UoJGV2ZW50KVwiPjwvYXBwLXBhZ2luYXRpb24+XG48L2Rpdj4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbk1vZHVsZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLm1vZHVsZSc7XG5pbXBvcnQgeyBCdXlPcmRlckl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2J1eS1vcmRlci1pdGVtL2J1eS1vcmRlci1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQbGFubmVkT3JkZXJzUm91dGluZ01vZHVsZSB9IGZyb20gJy4vcGxhbm5lZC1vcmRlci1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBQbGFubmVkT3JkZXJzQ29tcG9uZW50IH0gZnJvbSAnLi9wbGFubmVkLW9yZGVycy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFBsYW5uZWRPcmRlcnNSb3V0aW5nTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFBhZ2luYXRpb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1BsYW5uZWRPcmRlcnNDb21wb25lbnQsIEJ1eU9yZGVySXRlbUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgUGxhbm5lZE9yZGVyc01vZHVsZSB7IH1cbiIsImV4cG9ydCBjbGFzcyBTY2hlZHVsZXIge1xuICAgIGNvbnN0cnVjdG9yKFNjaGVkdWxlckFjdGlvbiwgbm93ID0gU2NoZWR1bGVyLm5vdykge1xuICAgICAgICB0aGlzLlNjaGVkdWxlckFjdGlvbiA9IFNjaGVkdWxlckFjdGlvbjtcbiAgICAgICAgdGhpcy5ub3cgPSBub3c7XG4gICAgfVxuICAgIHNjaGVkdWxlKHdvcmssIGRlbGF5ID0gMCwgc3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzLlNjaGVkdWxlckFjdGlvbih0aGlzLCB3b3JrKS5zY2hlZHVsZShzdGF0ZSwgZGVsYXkpO1xuICAgIH1cbn1cblNjaGVkdWxlci5ub3cgPSAoKSA9PiBEYXRlLm5vdygpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U2NoZWR1bGVyLmpzLm1hcCIsImltcG9ydCB7IFN1YnNjcmliZXIgfSBmcm9tICcuLi9TdWJzY3JpYmVyJztcbmltcG9ydCB7IGFzeW5jIH0gZnJvbSAnLi4vc2NoZWR1bGVyL2FzeW5jJztcbmV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZVRpbWUoZHVlVGltZSwgc2NoZWR1bGVyID0gYXN5bmMpIHtcbiAgICByZXR1cm4gKHNvdXJjZSkgPT4gc291cmNlLmxpZnQobmV3IERlYm91bmNlVGltZU9wZXJhdG9yKGR1ZVRpbWUsIHNjaGVkdWxlcikpO1xufVxuY2xhc3MgRGVib3VuY2VUaW1lT3BlcmF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKGR1ZVRpbWUsIHNjaGVkdWxlcikge1xuICAgICAgICB0aGlzLmR1ZVRpbWUgPSBkdWVUaW1lO1xuICAgICAgICB0aGlzLnNjaGVkdWxlciA9IHNjaGVkdWxlcjtcbiAgICB9XG4gICAgY2FsbChzdWJzY3JpYmVyLCBzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUobmV3IERlYm91bmNlVGltZVN1YnNjcmliZXIoc3Vic2NyaWJlciwgdGhpcy5kdWVUaW1lLCB0aGlzLnNjaGVkdWxlcikpO1xuICAgIH1cbn1cbmNsYXNzIERlYm91bmNlVGltZVN1YnNjcmliZXIgZXh0ZW5kcyBTdWJzY3JpYmVyIHtcbiAgICBjb25zdHJ1Y3RvcihkZXN0aW5hdGlvbiwgZHVlVGltZSwgc2NoZWR1bGVyKSB7XG4gICAgICAgIHN1cGVyKGRlc3RpbmF0aW9uKTtcbiAgICAgICAgdGhpcy5kdWVUaW1lID0gZHVlVGltZTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZXIgPSBzY2hlZHVsZXI7XG4gICAgICAgIHRoaXMuZGVib3VuY2VkU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5sYXN0VmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLmhhc1ZhbHVlID0gZmFsc2U7XG4gICAgfVxuICAgIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuY2xlYXJEZWJvdW5jZSgpO1xuICAgICAgICB0aGlzLmxhc3RWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmhhc1ZhbHVlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hZGQodGhpcy5kZWJvdW5jZWRTdWJzY3JpcHRpb24gPSB0aGlzLnNjaGVkdWxlci5zY2hlZHVsZShkaXNwYXRjaE5leHQsIHRoaXMuZHVlVGltZSwgdGhpcykpO1xuICAgIH1cbiAgICBfY29tcGxldGUoKSB7XG4gICAgICAgIHRoaXMuZGVib3VuY2VkTmV4dCgpO1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmNvbXBsZXRlKCk7XG4gICAgfVxuICAgIGRlYm91bmNlZE5leHQoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJEZWJvdW5jZSgpO1xuICAgICAgICBpZiAodGhpcy5oYXNWYWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgeyBsYXN0VmFsdWUgfSA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLmxhc3RWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmhhc1ZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLm5leHQobGFzdFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjbGVhckRlYm91bmNlKCkge1xuICAgICAgICBjb25zdCBkZWJvdW5jZWRTdWJzY3JpcHRpb24gPSB0aGlzLmRlYm91bmNlZFN1YnNjcmlwdGlvbjtcbiAgICAgICAgaWYgKGRlYm91bmNlZFN1YnNjcmlwdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmUoZGVib3VuY2VkU3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICAgIGRlYm91bmNlZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgdGhpcy5kZWJvdW5jZWRTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gZGlzcGF0Y2hOZXh0KHN1YnNjcmliZXIpIHtcbiAgICBzdWJzY3JpYmVyLmRlYm91bmNlZE5leHQoKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlYm91bmNlVGltZS5qcy5tYXAiLCJpbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICcuLi9TdWJzY3JpcHRpb24nO1xuZXhwb3J0IGNsYXNzIEFjdGlvbiBleHRlbmRzIFN1YnNjcmlwdGlvbiB7XG4gICAgY29uc3RydWN0b3Ioc2NoZWR1bGVyLCB3b3JrKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHNjaGVkdWxlKHN0YXRlLCBkZWxheSA9IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QWN0aW9uLmpzLm1hcCIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJy4vQWN0aW9uJztcbmV4cG9ydCBjbGFzcyBBc3luY0FjdGlvbiBleHRlbmRzIEFjdGlvbiB7XG4gICAgY29uc3RydWN0b3Ioc2NoZWR1bGVyLCB3b3JrKSB7XG4gICAgICAgIHN1cGVyKHNjaGVkdWxlciwgd29yayk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVyID0gc2NoZWR1bGVyO1xuICAgICAgICB0aGlzLndvcmsgPSB3b3JrO1xuICAgICAgICB0aGlzLnBlbmRpbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgc2NoZWR1bGUoc3RhdGUsIGRlbGF5ID0gMCkge1xuICAgICAgICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLmlkO1xuICAgICAgICBjb25zdCBzY2hlZHVsZXIgPSB0aGlzLnNjaGVkdWxlcjtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSB0aGlzLnJlY3ljbGVBc3luY0lkKHNjaGVkdWxlciwgaWQsIGRlbGF5KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBlbmRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmRlbGF5ID0gZGVsYXk7XG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLmlkIHx8IHRoaXMucmVxdWVzdEFzeW5jSWQoc2NoZWR1bGVyLCB0aGlzLmlkLCBkZWxheSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICByZXF1ZXN0QXN5bmNJZChzY2hlZHVsZXIsIGlkLCBkZWxheSA9IDApIHtcbiAgICAgICAgcmV0dXJuIHNldEludGVydmFsKHNjaGVkdWxlci5mbHVzaC5iaW5kKHNjaGVkdWxlciwgdGhpcyksIGRlbGF5KTtcbiAgICB9XG4gICAgcmVjeWNsZUFzeW5jSWQoc2NoZWR1bGVyLCBpZCwgZGVsYXkgPSAwKSB7XG4gICAgICAgIGlmIChkZWxheSAhPT0gbnVsbCAmJiB0aGlzLmRlbGF5ID09PSBkZWxheSAmJiB0aGlzLnBlbmRpbmcgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gaWQ7XG4gICAgICAgIH1cbiAgICAgICAgY2xlYXJJbnRlcnZhbChpZCk7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGV4ZWN1dGUoc3RhdGUsIGRlbGF5KSB7XG4gICAgICAgIGlmICh0aGlzLmNsb3NlZCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignZXhlY3V0aW5nIGEgY2FuY2VsbGVkIGFjdGlvbicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGVuZGluZyA9IGZhbHNlO1xuICAgICAgICBjb25zdCBlcnJvciA9IHRoaXMuX2V4ZWN1dGUoc3RhdGUsIGRlbGF5KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5wZW5kaW5nID09PSBmYWxzZSAmJiB0aGlzLmlkICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSB0aGlzLnJlY3ljbGVBc3luY0lkKHRoaXMuc2NoZWR1bGVyLCB0aGlzLmlkLCBudWxsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfZXhlY3V0ZShzdGF0ZSwgZGVsYXkpIHtcbiAgICAgICAgbGV0IGVycm9yZWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IGVycm9yVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLndvcmsoc3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBlcnJvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGVycm9yVmFsdWUgPSAhIWUgJiYgZSB8fCBuZXcgRXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yZWQpIHtcbiAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIHJldHVybiBlcnJvclZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIF91bnN1YnNjcmliZSgpIHtcbiAgICAgICAgY29uc3QgaWQgPSB0aGlzLmlkO1xuICAgICAgICBjb25zdCBzY2hlZHVsZXIgPSB0aGlzLnNjaGVkdWxlcjtcbiAgICAgICAgY29uc3QgYWN0aW9ucyA9IHNjaGVkdWxlci5hY3Rpb25zO1xuICAgICAgICBjb25zdCBpbmRleCA9IGFjdGlvbnMuaW5kZXhPZih0aGlzKTtcbiAgICAgICAgdGhpcy53b3JrID0gbnVsbDtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG51bGw7XG4gICAgICAgIHRoaXMucGVuZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNjaGVkdWxlciA9IG51bGw7XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIGFjdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5pZCA9IHRoaXMucmVjeWNsZUFzeW5jSWQoc2NoZWR1bGVyLCBpZCwgbnVsbCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZWxheSA9IG51bGw7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QXN5bmNBY3Rpb24uanMubWFwIiwiaW1wb3J0IHsgU2NoZWR1bGVyIH0gZnJvbSAnLi4vU2NoZWR1bGVyJztcbmV4cG9ydCBjbGFzcyBBc3luY1NjaGVkdWxlciBleHRlbmRzIFNjaGVkdWxlciB7XG4gICAgY29uc3RydWN0b3IoU2NoZWR1bGVyQWN0aW9uLCBub3cgPSBTY2hlZHVsZXIubm93KSB7XG4gICAgICAgIHN1cGVyKFNjaGVkdWxlckFjdGlvbiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKEFzeW5jU2NoZWR1bGVyLmRlbGVnYXRlICYmIEFzeW5jU2NoZWR1bGVyLmRlbGVnYXRlICE9PSB0aGlzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEFzeW5jU2NoZWR1bGVyLmRlbGVnYXRlLm5vdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hY3Rpb25zID0gW107XG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVkID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBzY2hlZHVsZSh3b3JrLCBkZWxheSA9IDAsIHN0YXRlKSB7XG4gICAgICAgIGlmIChBc3luY1NjaGVkdWxlci5kZWxlZ2F0ZSAmJiBBc3luY1NjaGVkdWxlci5kZWxlZ2F0ZSAhPT0gdGhpcykge1xuICAgICAgICAgICAgcmV0dXJuIEFzeW5jU2NoZWR1bGVyLmRlbGVnYXRlLnNjaGVkdWxlKHdvcmssIGRlbGF5LCBzdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc3VwZXIuc2NoZWR1bGUod29yaywgZGVsYXksIHN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmbHVzaChhY3Rpb24pIHtcbiAgICAgICAgY29uc3QgeyBhY3Rpb25zIH0gPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgICAgICAgIGFjdGlvbnMucHVzaChhY3Rpb24pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBlcnJvcjtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBpZiAoZXJyb3IgPSBhY3Rpb24uZXhlY3V0ZShhY3Rpb24uc3RhdGUsIGFjdGlvbi5kZWxheSkpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAoYWN0aW9uID0gYWN0aW9ucy5zaGlmdCgpKTtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICB3aGlsZSAoYWN0aW9uID0gYWN0aW9ucy5zaGlmdCgpKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFzeW5jU2NoZWR1bGVyLmpzLm1hcCIsImltcG9ydCB7IEFzeW5jQWN0aW9uIH0gZnJvbSAnLi9Bc3luY0FjdGlvbic7XG5pbXBvcnQgeyBBc3luY1NjaGVkdWxlciB9IGZyb20gJy4vQXN5bmNTY2hlZHVsZXInO1xuZXhwb3J0IGNvbnN0IGFzeW5jU2NoZWR1bGVyID0gbmV3IEFzeW5jU2NoZWR1bGVyKEFzeW5jQWN0aW9uKTtcbmV4cG9ydCBjb25zdCBhc3luYyA9IGFzeW5jU2NoZWR1bGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXN5bmMuanMubWFwIl0sInNvdXJjZVJvb3QiOiIifQ==