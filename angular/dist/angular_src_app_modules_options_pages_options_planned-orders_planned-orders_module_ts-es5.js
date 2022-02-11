(function () {
  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkbo_planner"] = self["webpackChunkbo_planner"] || []).push([["angular_src_app_modules_options_pages_options_planned-orders_planned-orders_module_ts"], {
    /***/
    9057:
    /*!*****************************************************************!*\
      !*** ./angular/src/app/core/pagination/pagination.component.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PaginationComponent": function PaginationComponent() {
          return (
            /* binding */
            _PaginationComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _pagination_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./pagination.utils */
      8954);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      8583);

      var _c0 = function _c0(a0) {
        return {
          "bg-purple-500 text-white": a0
        };
      };

      function PaginationComponent_div_0_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaginationComponent_div_0_div_6_Template_div_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var page_r2 = restoredCtx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r3.setPage(page_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var page_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ctx_r1.pager.currentPage === page_r2));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", page_r2, " ");
        }
      }

      var _c1 = function _c1(a0) {
        return {
          disabled: a0
        };
      };

      function PaginationComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaginationComponent_div_0_Template_div_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r5.setPage(ctx_r5.pager.currentPage - 1);
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaginationComponent_div_0_Template_div_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r7.setPage(ctx_r7.pager.currentPage + 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "svg", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "polyline", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, ctx_r0.pager.currentPage === 1));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.pager.pages);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c1, ctx_r0.pager.currentPage === ctx_r0.pager.totalPages));
        }
      } // Src: https://jasonwatmore.com/post/2019/06/18/angular-8-simple-pagination-example


      var _PaginationComponent = /*#__PURE__*/function () {
        function _PaginationComponent() {
          _classCallCheck(this, _PaginationComponent);

          this.changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(true);
          this.initialPage = 1;
          this.pageSize = 10;
          this.maxPages = 6;
          this.pager = {};
        }

        _createClass(_PaginationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // set page if items array isn't empty
            if (this.items && this.items.length) {
              this.setPage(this.initialPage);
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var _a, _b, _c, _d; // Reset page if items array has changed


            if (((_a = changes === null || changes === void 0 ? void 0 : changes.items) === null || _a === void 0 ? void 0 : _a.currentValue) !== ((_b = changes === null || changes === void 0 ? void 0 : changes.items) === null || _b === void 0 ? void 0 : _b.previousValue)) {
              this.setPage(this.initialPage);
            } // Reset page if page size has changed


            if (((_c = changes === null || changes === void 0 ? void 0 : changes.pageSize) === null || _c === void 0 ? void 0 : _c.currentValue) !== ((_d = changes === null || changes === void 0 ? void 0 : changes.pageSize) === null || _d === void 0 ? void 0 : _d.previousValue)) {
              this.setPage(this.initialPage);
            }
          }
        }, {
          key: "setPage",
          value: function setPage(page) {
            // get new pager object for specified page
            this.pager = (0, _pagination_utils__WEBPACK_IMPORTED_MODULE_0__.paginate)(this.items.length, page, this.pageSize, this.maxPages); // get new page of items from items array

            var pageOfItems = this.items.slice(this.pager.startIndex, this.pager.endIndex + 1); // call change page function in parent component

            this.changePage.emit(pageOfItems);
          }
        }]);

        return _PaginationComponent;
      }();

      _PaginationComponent.ɵfac = function PaginationComponent_Factory(t) {
        return new (t || _PaginationComponent)();
      };

      _PaginationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _PaginationComponent,
        selectors: [["app-pagination"]],
        inputs: {
          items: "items",
          initialPage: "initialPage",
          pageSize: "pageSize",
          maxPages: "maxPages"
        },
        outputs: {
          changePage: "changePage"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
        decls: 1,
        vars: 1,
        consts: [["class", "flex flex-col items-center py-6", 4, "ngIf"], [1, "flex", "flex-col", "items-center", "py-6"], [1, "flex", "text-gray-700"], [1, "h-12", "w-12", "mr-1", "flex", "justify-center", "items-center", "rounded-full", "bg-white", "cursor-pointer", 3, "ngClass", "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "100%", "height", "100%", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-chevron-left", "w-6", "h-6"], ["points", "15 18 9 12 15 6"], [1, "flex", "h-12", "font-medium", "rounded-full"], ["class", "\n          w-12\n          md:flex\n          justify-center\n          items-center\n          hidden\n          cursor-pointer\n          leading-5\n          transition\n          duration-150\n          ease-in\n          rounded-full\n        ", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "h-12", "w-12", "ml-1", "flex", "justify-center", "items-center", "rounded-full", "bg-white", "cursor-pointer", 3, "ngClass", "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "100%", "height", "100%", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-chevron-right", "w-6", "h-6"], ["points", "9 18 15 12 9 6"], [1, "w-12", "md:flex", "justify-center", "items-center", "hidden", "cursor-pointer", "leading-5", "transition", "duration-150", "ease-in", "rounded-full", 3, "ngClass", "click"]],
        template: function PaginationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PaginationComponent_div_0_Template, 10, 7, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.pager.pages && ctx.pager.pages.length);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdpbmF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    7617:
    /*!**************************************************************!*\
      !*** ./angular/src/app/core/pagination/pagination.module.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PaginationModule": function PaginationModule() {
          return (
            /* binding */
            _PaginationModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _pagination_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./pagination.component */
      9057);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _PaginationModule = function _PaginationModule() {
        _classCallCheck(this, _PaginationModule);
      };

      _PaginationModule.ɵfac = function PaginationModule_Factory(t) {
        return new (t || _PaginationModule)();
      };

      _PaginationModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _PaginationModule
      });
      _PaginationModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_PaginationModule, {
          declarations: [_pagination_component__WEBPACK_IMPORTED_MODULE_0__.PaginationComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
          exports: [_pagination_component__WEBPACK_IMPORTED_MODULE_0__.PaginationComponent]
        });
      })();
      /***/

    },

    /***/
    8954:
    /*!*************************************************************!*\
      !*** ./angular/src/app/core/pagination/pagination.utils.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "paginate": function paginate() {
          return (
            /* binding */
            _paginate
          );
        }
        /* harmony export */

      }); // Src: https://github.com/cornflourblue/jw-angular-pagination/blob/27c4a7c0fbc635c14227da62bb94cc3520ca3a75/projects/jw-pagination/node_modules/jw-paginate/lib/jw-paginate.js#L2


      function _paginate(totalItems, currentPage, pageSize, maxPages) {
        if (currentPage === void 0) {
          currentPage = 1;
        }

        if (pageSize === void 0) {
          pageSize = 10;
        }

        if (maxPages === void 0) {
          maxPages = 10;
        } // calculate total pages


        var totalPages = Math.ceil(totalItems / pageSize); // ensure current page isn't out of range

        if (currentPage < 1) {
          currentPage = 1;
        } else if (currentPage > totalPages) {
          currentPage = totalPages;
        }

        var startPage, endPage;

        if (totalPages <= maxPages) {
          // total pages less than max so show all pages
          startPage = 1;
          endPage = totalPages;
        } else {
          // total pages more than max so calculate start and end pages
          var maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
          var maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;

          if (currentPage <= maxPagesBeforeCurrentPage) {
            // current page near the start
            startPage = 1;
            endPage = maxPages;
          } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
            // current page near the end
            startPage = totalPages - maxPages + 1;
            endPage = totalPages;
          } else {
            // current page somewhere in the middle
            startPage = currentPage - maxPagesBeforeCurrentPage;
            endPage = currentPage + maxPagesAfterCurrentPage;
          }
        } // calculate start and end item indexes


        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1); // create an array of pages to ng-repeat in the pager control

        var pages = Array.from(Array(endPage + 1 - startPage).keys()).map(function (i) {
          return startPage + i;
        }); // return object with all pager properties required by the view

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
      /***/

    },

    /***/
    9433:
    /*!*****************************************************************************************************************!*\
      !*** ./angular/src/app/modules/options/pages/options/planned-orders/buy-order-item/buy-order-item.component.ts ***!
      \*****************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BuyOrderItemComponent": function BuyOrderItemComponent() {
          return (
            /* binding */
            _BuyOrderItemComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      5917);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      3190);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      8002);
      /* harmony import */


      var _ngneat_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngneat/dialog */
      6960);
      /* harmony import */


      var ngx_indexed_db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-indexed-db */
      5465);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      8583);

      function BuyOrderItemComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BuyOrderItemComponent_div_0_Template_button_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1.removeItem();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Remove ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

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
        }
      }

      var _BuyOrderItemComponent = /*#__PURE__*/function () {
        function _BuyOrderItemComponent(dialog, dbService) {
          _classCallCheck(this, _BuyOrderItemComponent);

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

        _createClass(_BuyOrderItemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
          /**
           * Method show confirmation modal and on confirmed actions sends signal to remove item
           *
           * @memberof BuyOrderItemComponent
           */

        }, {
          key: "removeItem",
          value: function removeItem() {
            var _this = this;

            this.dialog.confirm({
              title: "Confirm your actions",
              body: "You are about to remove <b>".concat(this.orderItem.itemName, "</b>.<br />Continue ?")
            }).afterClosed$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(function (confirmed) {
              // If user confirmed his actions - Removing from DB
              if (confirmed) {
                return _this.dbService["delete"]('orders', _this.orderItem.id).pipe( // After successful removal returning "true" as confirmation for successful action
                // because we don't care about updated list in this case
                (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function () {
                  return true;
                }));
              } else {
                // If user canceled his action returning "false"
                return (0, rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(false);
              }
            })).subscribe(function (removed) {
              // Explicitlly checking for "true" value because there are cases where this can be truthy
              // but in our case we need to be sure that exactly Delete operation was completed
              if (removed === true) {
                _this.itemRemoved.emit(_this.orderItem);
              }
            });
          }
        }]);

        return _BuyOrderItemComponent;
      }();

      _BuyOrderItemComponent.ɵfac = function BuyOrderItemComponent_Factory(t) {
        return new (t || _BuyOrderItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngneat_dialog__WEBPACK_IMPORTED_MODULE_4__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_indexed_db__WEBPACK_IMPORTED_MODULE_5__.NgxIndexedDBService));
      };

      _BuyOrderItemComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _BuyOrderItemComponent,
        selectors: [["app-buy-order-item"]],
        inputs: {
          orderItem: "orderItem",
          currencySign: "currencySign"
        },
        outputs: {
          itemRemoved: "itemRemoved"
        },
        decls: 1,
        vars: 1,
        consts: [["class", "bg-white w-full flex flex-col items-center p-2 pb-0 rounded-xl shadow border hover:shadow-xl duration-200 animate__animated animate__fadeIn", 4, "ngIf"], [1, "bg-white", "w-full", "flex", "flex-col", "items-center", "p-2", "pb-0", "rounded-xl", "shadow", "border", "hover:shadow-xl", "duration-200", "animate__animated", "animate__fadeIn"], [1, "flex", "items-center", "w-full", "item-content"], [1, "flex-grow", "p-3"], [1, "font-semibold", "text-gray-700"], ["type", "button", "target", "_blank", 1, "text-sm", "text-gray-500", "hover:text-blue-900", "duration-200", 3, "href"], [1, "p-2", "text-right"], [1, "text-lg", "leading-3"], [1, "divider"], ["type", "button", 1, "ml-auto", "text-red-500", "hover:text-red-700", "duration-200", "transition-all", "pb-2", "px-4", 3, "click"]],
        template: function BuyOrderItemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BuyOrderItemComponent_div_0_Template, 21, 13, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orderItem);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe],
        styles: [".item-content[_ngcontent-%COMP%] {\n  min-height: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1eS1vcmRlci1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSiIsImZpbGUiOiJidXktb3JkZXItaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtLWNvbnRlbnQge1xyXG4gICAgbWluLWhlaWdodDogODBweDtcclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    3008:
    /*!******************************************************************************************************!*\
      !*** ./angular/src/app/modules/options/pages/options/planned-orders/planned-order-routing.module.ts ***!
      \******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PlannedOrdersRoutingModule": function PlannedOrdersRoutingModule() {
          return (
            /* binding */
            _PlannedOrdersRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _planned_orders_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./planned-orders.component */
      7520);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var routes = [{
        path: '',
        component: _planned_orders_component__WEBPACK_IMPORTED_MODULE_0__.PlannedOrdersComponent
      }];

      var _PlannedOrdersRoutingModule = function _PlannedOrdersRoutingModule() {
        _classCallCheck(this, _PlannedOrdersRoutingModule);
      };

      _PlannedOrdersRoutingModule.ɵfac = function PlannedOrdersRoutingModule_Factory(t) {
        return new (t || _PlannedOrdersRoutingModule)();
      };

      _PlannedOrdersRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _PlannedOrdersRoutingModule
      });
      _PlannedOrdersRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_PlannedOrdersRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    7520:
    /*!**************************************************************************************************!*\
      !*** ./angular/src/app/modules/options/pages/options/planned-orders/planned-orders.component.ts ***!
      \**************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PlannedOrdersComponent": function PlannedOrdersComponent() {
          return (
            /* binding */
            _PlannedOrdersComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      6215);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      9765);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      5917);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      4395);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      4612);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      6782);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _options_facade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../options.facade */
      4847);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _core_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../core/pagination/pagination.component */
      9057);
      /* harmony import */


      var _buy_order_item_buy_order_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./buy-order-item/buy-order-item.component */
      9433);

      var _c0 = ["pagination"];

      function PlannedOrdersComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PlannedOrdersComponent_div_15_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r4.dropdownOpen = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _c1 = function _c1(a0, a1) {
        return {
          "bg-purple-500 text-white": a0,
          "hover:bg-gray-200": a1
        };
      };

      function PlannedOrdersComponent_div_16_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PlannedOrdersComponent_div_16_button_1_Template_button_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);

            var option_r7 = restoredCtx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r8.changePageSize(option_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r7 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c1, option_r7 === ctx_r6.showPerPage, option_r7 !== ctx_r6.showPerPage));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", option_r7, " ");
        }
      }

      function PlannedOrdersComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PlannedOrdersComponent_div_16_button_1_Template, 2, 5, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.showPerPageOptions);
        }
      }

      function PlannedOrdersComponent_app_buy_order_item_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-buy-order-item", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("itemRemoved", function PlannedOrdersComponent_app_buy_order_item_18_Template_app_buy_order_item_itemRemoved_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);

            var i_r11 = restoredCtx.index;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r12.removeItem(i_r11);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var order_r10 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("orderItem", order_r10)("currencySign", ctx_r2.currencySign);
        }
      }

      var _c2 = function _c2(a0, a1) {
        return {
          "rotate-180": a0,
          "rotate-0": a1
        };
      };

      var _PlannedOrdersComponent = /*#__PURE__*/function () {
        function _PlannedOrdersComponent(optionsFacade, cdr) {
          _classCallCheck(this, _PlannedOrdersComponent);

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

        _createClass(_PlannedOrdersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.optionsFacade.getPlannedOrders(true).subscribe(function (orders) {
              var _a, _b;

              _this2.plannedOrders = orders; // Getting currency sign for display if we have at least one planned order because
              // currency id is stored on planned order level

              if (_this2.plannedOrders.length) {
                // Finding necessary currency from stored list
                // ...and using its symbol
                _this2.currencySign = (_b = (_a = _this2.optionsFacade.getCurrency()) === null || _a === void 0 ? void 0 : _a.symbol) !== null && _b !== void 0 ? _b : '';
              }
            }); // Subscribing to search input changes

            this.searchSubject.asObservable().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(200), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.concatMap)(function (searchText) {
              // Filtering results and returning filtered array
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(_this2.plannedOrders.filter(function (order) {
                return order.itemName.toLowerCase().includes(searchText.toLowerCase());
              }));
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$) // tap(results => this.foundResults = results.length),
            ).subscribe(function (filteredResults) {
              // Storing amount of found results just for display
              _this2.foundResults = filteredResults.length; // Storing results for display

              _this2.allOrdersForDisplay = filteredResults;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // Completing subscriptions
            this.destroy$.next(true);
            this.destroy$.complete();
          }
        }, {
          key: "search",
          value: function search(searchText) {
            this.searchSubject.next(searchText);
          }
          /**
           * Method fills planned buy order list for display after page changed
           *
           * @param {BuyOrder[]} pageOfItems New items for displayy
           * @memberof PlannedOrdersComponent
           */

        }, {
          key: "onChangePage",
          value: function onChangePage(pageOfItems) {
            // Setting items that will be displayed
            this.currentPageItems = pageOfItems;
          }
        }, {
          key: "changePageSize",
          value: function changePageSize(size) {
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

        }, {
          key: "orderById",
          value: function orderById(index, item) {
            return item.id;
          }
          /**
           * Method removes planned order from list
           *
           * @param {number} currentPageIndex Index of element for removal on current page. Its not index in all list
           * @memberof PlannedOrdersComponent
           */

        }, {
          key: "removeItem",
          value: function removeItem(currentPageIndex) {
            // Getting index of item to remove among all items, not on current page
            var indexForRemoval = this.pagination.pager.startIndex + currentPageIndex; // Removing element from list of all items so after page change it won't appear again
            // NOTE: We are removing from two lists because one remains as original and the other one is
            // used for display and filtering

            this.pagination.items.splice(indexForRemoval, 1);
            this.plannedOrders.splice(indexForRemoval, 1); // Removing element from current page so it disappears

            this.currentPageItems.splice(currentPageIndex, 1); // Decreasing found result counter since element was removed

            this.foundResults--; // If there are no more items on current page then going back to previous page.
            // If user is currently on first page then it will trigger pagination recreate anyways

            if (!this.currentPageItems.length) {
              this.pagination.setPage(this.pagination.pager.currentPage - 1);
            }
          }
        }]);

        return _PlannedOrdersComponent;
      }();

      _PlannedOrdersComponent.ɵfac = function PlannedOrdersComponent_Factory(t) {
        return new (t || _PlannedOrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_options_facade__WEBPACK_IMPORTED_MODULE_0__.OptionsFacade), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef));
      };

      _PlannedOrdersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _PlannedOrdersComponent,
        selectors: [["app-planned-orders"]],
        viewQuery: function PlannedOrdersComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.pagination = _t.first);
          }
        },
        decls: 21,
        vars: 12,
        consts: [[1, "container", "mx-auto"], [1, "my-auto", "mx-auto"], [1, "relative", "w-full", "lg:w-1/2", "mx-auto", "text-gray-600", "mb-0"], ["type", "search", "name", "serch", "placeholder", "Filter items by name", 1, "w-full", "bg-white", "h-10", "px-5", "pr-10", "rounded-full", "text-sm", "focus:outline-none", "hover:shadow-xl", "duration-200", 3, "ngModel", "ngModelChange"], [1, "absolute", "right-0", "top-0", "mt-3", "mr-4"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "version", "1.1", "id", "Capa_1", "x", "0px", "y", "0px", "viewBox", "0 0 56.966 56.966", 0, "xml", "space", "preserve", "width", "512px", "height", "512px", 1, "h-4", "w-4", "fill-current", 2, "enable-background", "new 0 0 56.966 56.966"], ["d", "M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"], [1, "flex", "justify-evenly", "align-center", "mb-4", "mt-4"], [1, "h5", "text-center", "font-semibold"], [1, "relative"], [1, "relative", "hover:text-blue-500", "duration-200", "font-semibold", 3, "click"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "inline", "w-4", "h-4", "mt-1", "transition-transform", "duration-200", "transform", "md:-mt-1", "rotate-0", 3, "ngClass"], ["fill-rule", "evenodd", "d", "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z", "clip-rule", "evenodd"], ["class", "fixed inset-0 h-full w-full z-10", 3, "click", 4, "ngIf"], ["class", "\n            absolute\n            right-0\n            mt-2\n            bg-white\n            rounded-md\n            overflow-hidden\n            shadow-xl\n            z-20\n          ", 4, "ngIf"], [1, "grid", "sm:grid-cols-2", "lg:grid-cols-3", "xl:grids-cols-4", "grid-cols-1", "gap-4", "px-3"], [3, "orderItem", "currencySign", "itemRemoved", 4, "ngFor", "ngForOf"], [3, "items", "pageSize", "changePage"], ["pagination", ""], [1, "fixed", "inset-0", "h-full", "w-full", "z-10", 3, "click"], [1, "absolute", "right-0", "mt-2", "bg-white", "rounded-md", "overflow-hidden", "shadow-xl", "z-20"], ["type", "button", "class", "block px-4 py-2 w-full text-sm border-b duration-200", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "block", "px-4", "py-2", "w-full", "text-sm", "border-b", "duration-200", 3, "ngClass", "click"], [3, "orderItem", "currencySign", "itemRemoved"]],
        template: function PlannedOrdersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function PlannedOrdersComponent_Template_input_ngModelChange_3_listener($event) {
              return ctx.search($event);
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PlannedOrdersComponent_Template_button_click_11_listener() {
              return ctx.dropdownOpen = !ctx.dropdownOpen;
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("changePage", function PlannedOrdersComponent_Template_app_pagination_changePage_19_listener($event) {
              return ctx.onChangePage($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
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
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _core_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_1__.PaginationComponent, _buy_order_item_buy_order_item_component__WEBPACK_IMPORTED_MODULE_2__.BuyOrderItemComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwbGFubmVkLW9yZGVycy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    6991:
    /*!***********************************************************************************************!*\
      !*** ./angular/src/app/modules/options/pages/options/planned-orders/planned-orders.module.ts ***!
      \***********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PlannedOrdersModule": function PlannedOrdersModule() {
          return (
            /* binding */
            _PlannedOrdersModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _core_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/pagination/pagination.module */
      7617);
      /* harmony import */


      var _buy_order_item_buy_order_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./buy-order-item/buy-order-item.component */
      9433);
      /* harmony import */


      var _planned_order_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./planned-order-routing.module */
      3008);
      /* harmony import */


      var _planned_orders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./planned-orders.component */
      7520);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _PlannedOrdersModule = function _PlannedOrdersModule() {
        _classCallCheck(this, _PlannedOrdersModule);
      };

      _PlannedOrdersModule.ɵfac = function PlannedOrdersModule_Factory(t) {
        return new (t || _PlannedOrdersModule)();
      };

      _PlannedOrdersModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _PlannedOrdersModule
      });
      _PlannedOrdersModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _planned_order_routing_module__WEBPACK_IMPORTED_MODULE_2__.PlannedOrdersRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _core_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_0__.PaginationModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_PlannedOrdersModule, {
          declarations: [_planned_orders_component__WEBPACK_IMPORTED_MODULE_3__.PlannedOrdersComponent, _buy_order_item_buy_order_item_component__WEBPACK_IMPORTED_MODULE_1__.BuyOrderItemComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _planned_order_routing_module__WEBPACK_IMPORTED_MODULE_2__.PlannedOrdersRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _core_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_0__.PaginationModule]
        });
      })();
      /***/

    },

    /***/
    2217:
    /*!**********************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/Scheduler.js ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Scheduler": function Scheduler() {
          return (
            /* binding */
            _Scheduler
          );
        }
        /* harmony export */

      });

      var _Scheduler = /*#__PURE__*/function () {
        function _Scheduler(SchedulerAction) {
          var now = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Scheduler.now;

          _classCallCheck(this, _Scheduler);

          this.SchedulerAction = SchedulerAction;
          this.now = now;
        }

        _createClass(_Scheduler, [{
          key: "schedule",
          value: function schedule(work) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var state = arguments.length > 2 ? arguments[2] : undefined;
            return new this.SchedulerAction(this, work).schedule(state, delay);
          }
        }]);

        return _Scheduler;
      }();

      _Scheduler.now = function () {
        return Date.now();
      }; //# sourceMappingURL=Scheduler.js.map

      /***/

    },

    /***/
    4395:
    /*!***********************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/operators/debounceTime.js ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "debounceTime": function debounceTime() {
          return (
            /* binding */
            _debounceTime
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../Subscriber */
      7393);
      /* harmony import */


      var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../scheduler/async */
      3637);

      function _debounceTime(dueTime) {
        var scheduler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async;
        return function (source) {
          return source.lift(new DebounceTimeOperator(dueTime, scheduler));
        };
      }

      var DebounceTimeOperator = /*#__PURE__*/function () {
        function DebounceTimeOperator(dueTime, scheduler) {
          _classCallCheck(this, DebounceTimeOperator);

          this.dueTime = dueTime;
          this.scheduler = scheduler;
        }

        _createClass(DebounceTimeOperator, [{
          key: "call",
          value: function call(subscriber, source) {
            return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
          }
        }]);

        return DebounceTimeOperator;
      }();

      var DebounceTimeSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_) {
        _inherits(DebounceTimeSubscriber, _Subscriber__WEBPACK_);

        var _super = _createSuper(DebounceTimeSubscriber);

        function DebounceTimeSubscriber(destination, dueTime, scheduler) {
          var _this3;

          _classCallCheck(this, DebounceTimeSubscriber);

          _this3 = _super.call(this, destination);
          _this3.dueTime = dueTime;
          _this3.scheduler = scheduler;
          _this3.debouncedSubscription = null;
          _this3.lastValue = null;
          _this3.hasValue = false;
          return _this3;
        }

        _createClass(DebounceTimeSubscriber, [{
          key: "_next",
          value: function _next(value) {
            this.clearDebounce();
            this.lastValue = value;
            this.hasValue = true;
            this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
          }
        }, {
          key: "_complete",
          value: function _complete() {
            this.debouncedNext();
            this.destination.complete();
          }
        }, {
          key: "debouncedNext",
          value: function debouncedNext() {
            this.clearDebounce();

            if (this.hasValue) {
              var lastValue = this.lastValue;
              this.lastValue = null;
              this.hasValue = false;
              this.destination.next(lastValue);
            }
          }
        }, {
          key: "clearDebounce",
          value: function clearDebounce() {
            var debouncedSubscription = this.debouncedSubscription;

            if (debouncedSubscription !== null) {
              this.remove(debouncedSubscription);
              debouncedSubscription.unsubscribe();
              this.debouncedSubscription = null;
            }
          }
        }]);

        return DebounceTimeSubscriber;
      }(_Subscriber__WEBPACK_IMPORTED_MODULE_1__.Subscriber);

      function dispatchNext(subscriber) {
        subscriber.debouncedNext();
      } //# sourceMappingURL=debounceTime.js.map

      /***/

    },

    /***/
    2901:
    /*!*****************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/scheduler/Action.js ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Action": function Action() {
          return (
            /* binding */
            _Action
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Subscription */
      826);

      var _Action = /*#__PURE__*/function (_Subscription__WEBPAC) {
        _inherits(_Action, _Subscription__WEBPAC);

        var _super2 = _createSuper(_Action);

        function _Action(scheduler, work) {
          _classCallCheck(this, _Action);

          return _super2.call(this);
        }

        _createClass(_Action, [{
          key: "schedule",
          value: function schedule(state) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            return this;
          }
        }]);

        return _Action;
      }(_Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription); //# sourceMappingURL=Action.js.map

      /***/

    },

    /***/
    401:
    /*!**********************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsyncAction.js ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AsyncAction": function AsyncAction() {
          return (
            /* binding */
            _AsyncAction
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Action */
      2901);

      var _AsyncAction = /*#__PURE__*/function (_Action__WEBPACK_IMPO) {
        _inherits(_AsyncAction, _Action__WEBPACK_IMPO);

        var _super3 = _createSuper(_AsyncAction);

        function _AsyncAction(scheduler, work) {
          var _this4;

          _classCallCheck(this, _AsyncAction);

          _this4 = _super3.call(this, scheduler, work);
          _this4.scheduler = scheduler;
          _this4.work = work;
          _this4.pending = false;
          return _this4;
        }

        _createClass(_AsyncAction, [{
          key: "schedule",
          value: function schedule(state) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            if (this.closed) {
              return this;
            }

            this.state = state;
            var id = this.id;
            var scheduler = this.scheduler;

            if (id != null) {
              this.id = this.recycleAsyncId(scheduler, id, delay);
            }

            this.pending = true;
            this.delay = delay;
            this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
            return this;
          }
        }, {
          key: "requestAsyncId",
          value: function requestAsyncId(scheduler, id) {
            var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            return setInterval(scheduler.flush.bind(scheduler, this), delay);
          }
        }, {
          key: "recycleAsyncId",
          value: function recycleAsyncId(scheduler, id) {
            var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            if (delay !== null && this.delay === delay && this.pending === false) {
              return id;
            }

            clearInterval(id);
            return undefined;
          }
        }, {
          key: "execute",
          value: function execute(state, delay) {
            if (this.closed) {
              return new Error('executing a cancelled action');
            }

            this.pending = false;

            var error = this._execute(state, delay);

            if (error) {
              return error;
            } else if (this.pending === false && this.id != null) {
              this.id = this.recycleAsyncId(this.scheduler, this.id, null);
            }
          }
        }, {
          key: "_execute",
          value: function _execute(state, delay) {
            var errored = false;
            var errorValue = undefined;

            try {
              this.work(state);
            } catch (e) {
              errored = true;
              errorValue = !!e && e || new Error(e);
            }

            if (errored) {
              this.unsubscribe();
              return errorValue;
            }
          }
        }, {
          key: "_unsubscribe",
          value: function _unsubscribe() {
            var id = this.id;
            var scheduler = this.scheduler;
            var actions = scheduler.actions;
            var index = actions.indexOf(this);
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
        }]);

        return _AsyncAction;
      }(_Action__WEBPACK_IMPORTED_MODULE_0__.Action); //# sourceMappingURL=AsyncAction.js.map

      /***/

    },

    /***/
    4548:
    /*!*************************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsyncScheduler.js ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AsyncScheduler": function AsyncScheduler() {
          return (
            /* binding */
            _AsyncScheduler
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Scheduler */
      2217);

      var _AsyncScheduler = /*#__PURE__*/function (_Scheduler__WEBPACK_I) {
        _inherits(_AsyncScheduler, _Scheduler__WEBPACK_I);

        var _super4 = _createSuper(_AsyncScheduler);

        function _AsyncScheduler(SchedulerAction) {
          var _this5;

          var now = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler.now;

          _classCallCheck(this, _AsyncScheduler);

          _this5 = _super4.call(this, SchedulerAction, function () {
            if (_AsyncScheduler.delegate && _AsyncScheduler.delegate !== _assertThisInitialized(_this5)) {
              return _AsyncScheduler.delegate.now();
            } else {
              return now();
            }
          });
          _this5.actions = [];
          _this5.active = false;
          _this5.scheduled = undefined;
          return _this5;
        }

        _createClass(_AsyncScheduler, [{
          key: "schedule",
          value: function schedule(work) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var state = arguments.length > 2 ? arguments[2] : undefined;

            if (_AsyncScheduler.delegate && _AsyncScheduler.delegate !== this) {
              return _AsyncScheduler.delegate.schedule(work, delay, state);
            } else {
              return _get(_getPrototypeOf(_AsyncScheduler.prototype), "schedule", this).call(this, work, delay, state);
            }
          }
        }, {
          key: "flush",
          value: function flush(action) {
            var actions = this.actions;

            if (this.active) {
              actions.push(action);
              return;
            }

            var error;
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
        }]);

        return _AsyncScheduler;
      }(_Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler); //# sourceMappingURL=AsyncScheduler.js.map

      /***/

    },

    /***/
    3637:
    /*!****************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/scheduler/async.js ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "asyncScheduler": function asyncScheduler() {
          return (
            /* binding */
            _asyncScheduler
          );
        },

        /* harmony export */
        "async": function async() {
          return (
            /* binding */
            _async
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./AsyncAction */
      401);
      /* harmony import */


      var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./AsyncScheduler */
      4548);

      var _asyncScheduler = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__.AsyncAction);

      var _async = _asyncScheduler; //# sourceMappingURL=async.js.map

      /***/
    }
  }]);
})();
//# sourceMappingURL=angular_src_app_modules_options_pages_options_planned-orders_planned-orders_module_ts-es5.js.map