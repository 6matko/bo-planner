(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkbo_planner"] = self["webpackChunkbo_planner"] || []).push([["angular_src_app_core_currencies_ts-angular_src_app_modules_options_pages_options_stats_stats_-ec8a31"], {
    /***/
    869:
    /*!********************************************!*\
      !*** ./angular/src/app/core/currencies.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CURRENCY": function CURRENCY() {
          return (
            /* binding */
            _CURRENCY
          );
        }
        /* harmony export */

      });

      var _CURRENCY = [{
        'code': 'USD',
        'currencyId': 1,
        'symbol': '$'
      }, {
        'code': 'GBP',
        'currencyId': 2,
        'symbol': '??'
      }, {
        'code': 'EUR',
        'currencyId': 3,
        'symbol': '???'
      }, {
        'code': 'CHF',
        'currencyId': 4,
        'symbol': 'CHF'
      }, {
        'code': 'RUB',
        'currencyId': 5,
        'symbol': 'p????.'
      }, {
        'code': 'BRL',
        'currencyId': 7,
        'symbol': 'R$'
      }, {
        'code': 'JPY',
        'currencyId': 8,
        'symbol': '??'
      }, {
        'code': 'NOK',
        'currencyId': 9,
        'symbol': 'kr'
      }, {
        'code': 'IDR',
        'currencyId': 10,
        'symbol': 'Rp'
      }, {
        'code': 'MYR',
        'currencyId': 11,
        'symbol': 'RM'
      }, {
        'code': 'PHP',
        'currencyId': 12,
        'symbol': 'P'
      }, {
        'code': 'SGD',
        'currencyId': 13,
        'symbol': 'S$'
      }, {
        'code': 'THB',
        'currencyId': 14,
        'symbol': '???'
      }, {
        'code': 'VND',
        'currencyId': 15,
        'symbol': '???'
      }, {
        'code': 'KRW',
        'currencyId': 16,
        'symbol': '???'
      }, {
        'code': 'TRY',
        'currencyId': 17,
        'symbol': 'TL'
      }, {
        'code': 'UAH',
        'currencyId': 18,
        'symbol': '???'
      }, {
        'code': 'MXN',
        'currencyId': 19,
        'symbol': 'Mex$'
      }, {
        'code': 'CAD',
        'currencyId': 20,
        'symbol': 'CDN$'
      }, {
        'code': 'AUD',
        'currencyId': 21,
        'symbol': 'A$'
      }, {
        'code': 'NZD',
        'currencyId': 22,
        'symbol': 'NZ$'
      }, {
        'code': 'PLN',
        'currencyId': 6,
        'symbol': 'z??'
      }, {
        'code': 'CNY',
        'currencyId': 23,
        'symbol': '??'
      }, {
        'code': 'INR',
        'currencyId': 24,
        'symbol': '???'
      }, {
        'code': 'CLP',
        'currencyId': 25,
        'symbol': 'CLP$'
      }, {
        'code': 'PEN',
        'currencyId': 26,
        'symbol': 'S/.'
      }, {
        'code': 'COP',
        'currencyId': 27,
        'symbol': 'COL$'
      }, {
        'code': 'ZAR',
        'currencyId': 28,
        'symbol': 'R'
      }, {
        'code': 'HKD',
        'currencyId': 29,
        'symbol': 'HK$'
      }, {
        'code': 'TWD',
        'currencyId': 30,
        'symbol': 'NT$'
      }, {
        'code': 'SAR',
        'currencyId': 31,
        'symbol': 'SR'
      }, {
        'code': 'AED',
        'currencyId': 32,
        'symbol': 'AED'
      }, {
        'code': 'SEK',
        'currencyId': 33,
        'symbol': 'kr'
      }, {
        'code': 'ARS',
        'currencyId': 34,
        'symbol': 'ARS$'
      }, {
        'code': 'ILS',
        'currencyId': 35,
        'symbol': '???'
      }, {
        'code': 'BYN',
        'currencyId': 36,
        'symbol': 'Br'
      }, {
        'code': 'KZT',
        'currencyId': 37,
        'symbol': '???'
      }, {
        'code': 'KWD',
        'currencyId': 38,
        'symbol': 'KD'
      }, {
        'code': 'QAR',
        'currencyId': 39,
        'symbol': 'QR'
      }, {
        'code': 'CRC',
        'currencyId': 40,
        'symbol': '???'
      }, {
        'code': 'UYU',
        'currencyId': 41,
        'symbol': '$U'
      }, {
        'code': 'BGN',
        'currencyId': 42,
        'symbol': '????'
      }, {
        'code': 'HRK',
        'currencyId': 43,
        'symbol': 'kn'
      }, {
        'code': 'CZK',
        'currencyId': 44,
        'symbol': 'K??'
      }, {
        'code': 'DKK',
        'currencyId': 45,
        'symbol': 'kr.'
      }, {
        'code': 'HUF',
        'currencyId': 46,
        'symbol': 'Ft'
      }, {
        'code': 'RON',
        'currencyId': 47,
        'symbol': 'lei'
      }, {
        'code': 'RMB',
        'currencyId': 9000,
        'symbol': '??????'
      }, {
        'code': 'NXP',
        'currencyId': 9001,
        'symbol': '???'
      }];
      /***/
    },

    /***/
    93:
    /*!***********************************************!*\
      !*** ./angular/src/app/models/stats.model.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PlannedOrderStats": function PlannedOrderStats() {
          return (
            /* binding */
            _PlannedOrderStats
          );
        }
        /* harmony export */

      });

      var _PlannedOrderStats = function _PlannedOrderStats() {
        _classCallCheck(this, _PlannedOrderStats);

        this.totalOrders = 0;
        this.totalAmount = 0;
        this.totalPrice = 0;
        this.topItemsByAmount = [];
        this.topItemsByPrice = [];
        this.topItemsByTotalPrice = [];
      };
      /***/

    },

    /***/
    7974:
    /*!*************************************************************************************!*\
      !*** ./angular/src/app/modules/options/pages/options/stats/stats-routing.module.ts ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StatsRoutingModule": function StatsRoutingModule() {
          return (
            /* binding */
            _StatsRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _stats_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./stats.component */
      6035);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var routes = [{
        path: '',
        component: _stats_component__WEBPACK_IMPORTED_MODULE_0__.StatsComponent
      }];

      var _StatsRoutingModule = function _StatsRoutingModule() {
        _classCallCheck(this, _StatsRoutingModule);
      };

      _StatsRoutingModule.??fac = function StatsRoutingModule_Factory(t) {
        return new (t || _StatsRoutingModule)();
      };

      _StatsRoutingModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
        type: _StatsRoutingModule
      });
      _StatsRoutingModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](_StatsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    6035:
    /*!********************************************************************************!*\
      !*** ./angular/src/app/modules/options/pages/options/stats/stats.component.ts ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StatsComponent": function StatsComponent() {
          return (
            /* binding */
            _StatsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      9765);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      6782);
      /* harmony import */


      var _models_stats_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../models/stats.model */
      93);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _options_facade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../options.facade */
      4847);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      8583);

      function StatsComponent_ng_container_0_ng_container_1_tr_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "tr", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "td", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var order_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](order_r9.itemName);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", order_r9.amount, " ");
        }
      }

      function StatsComponent_ng_container_0_ng_container_1_tr_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "tr", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "td", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](5, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var order_r10 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](order_r10.itemName);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind4"](5, 2, order_r10.price, ctx_r7.currentCurrency.code, "symbol-narrow", "1.2-2"), " ");
        }
      }

      function StatsComponent_ng_container_0_ng_container_1_tr_75_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "tr", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "td", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](5, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }

        if (rf & 2) {
          var order_r11 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](order_r11.itemName);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind4"](5, 2, order_r11.amount * order_r11.price, ctx_r8.currentCurrency.code, "symbol-narrow", "1.2-2"), " ");
        }
      }

      function StatsComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, "Planned orders");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](9, "Total added");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](16, "Planned amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](19, "Combined amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](20, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](22, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](24, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](25, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](26, "Planned expensees");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](27, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](28, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](29, "Combined required");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](30, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipe"](32, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](33, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](34, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](35, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](36, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](37, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](38, " TOP 5 Highest amount ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](39, "table", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](40, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](41, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](42, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](43, " ITEM");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](44, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](45, " AMOUNT");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](46, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](47, StatsComponent_ng_container_0_ng_container_1_tr_47_Template, 5, 2, "tr", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](48, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](49, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](50, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](51, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](52, " TOP 5 Highest price per piece ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](53, "table", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](54, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](55, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](56, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](57, " ITEM");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](58, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](59, " BUY PRICE");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](60, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](61, StatsComponent_ng_container_0_ng_container_1_tr_61_Template, 6, 7, "tr", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](62, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](63, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](64, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](65, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](66, " TOP 5 Most expensive (amount x price) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](67, "table", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](68, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](69, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](70, "th", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](71, " ITEM");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](72, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](73, " TOTAL PRICE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](74, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](75, StatsComponent_ng_container_0_ng_container_1_tr_75_Template, 6, 7, "tr", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r5.stats.totalOrders);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r5.stats.totalAmount);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["????pipeBind4"](32, 6, ctx_r5.stats.totalPrice, ctx_r5.currentCurrency.code, "symbol-narrow", "1.2-2"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx_r5.stats.topItemsByAmount);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx_r5.stats.topItemsByPrice);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx_r5.stats.topItemsByTotalPrice);
        }
      }

      function StatsComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](1, StatsComponent_ng_container_0_ng_container_1_Template, 76, 11, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r0.stats.totalOrders > 0)("ngIfElse", _r3);
        }
      }

      function StatsComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      function StatsComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "h1", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3, "Nothing added = Nothing to show");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "h3", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5, " To see stats you need to add planned buy orders! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        }
      }

      var _StatsComponent = /*#__PURE__*/function () {
        function _StatsComponent(optionsFacade) {
          _classCallCheck(this, _StatsComponent);

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

          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        }

        _createClass(_StatsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.optionsFacade.getPlannedOrders().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.destroy$)).subscribe(function (orders) {
              _this.currentCurrency = _this.optionsFacade.getCurrency();

              _this.createStats(orders);
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
          key: "createStats",
          value: function createStats(orders) {
            this.stats.totalOrders = orders.length;

            var _iterator = _createForOfIteratorHelper(orders),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var order = _step.value;
                this.stats.totalAmount += order.amount;
                this.stats.totalPrice += order.amount * order.price;
              } // Getting top items and taking only necessary amount of items for display (5)

            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this.stats.topItemsByAmount = _toConsumableArray(orders).sort(function (a, b) {
              return b.amount - a.amount;
            }).splice(0, 5);
            this.stats.topItemsByPrice = _toConsumableArray(orders).sort(function (a, b) {
              return b.price - a.price;
            }).splice(0, 5);
            this.stats.topItemsByTotalPrice = _toConsumableArray(orders).sort(function (a, b) {
              return b.price * b.amount - a.price * a.amount;
            }).splice(0, 5); // Fixing floating for price (Taking only 2 digits after comma)

            this.stats.totalPrice = +this.stats.totalPrice.toFixed(2);
            this.areStatsReady = true;
          }
        }]);

        return _StatsComponent;
      }();

      _StatsComponent.??fac = function StatsComponent_Factory(t) {
        return new (t || _StatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_options_facade__WEBPACK_IMPORTED_MODULE_1__.OptionsFacade));
      };

      _StatsComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({
        type: _StatsComponent,
        selectors: [["app-stats"]],
        decls: 5,
        vars: 2,
        consts: [[4, "ngIf", "ngIfElse"], ["loadingTmpl", ""], ["noOrdersTmpl", ""], [1, "flex", "flex-col", "justify-between", "lg:flex-row"], [1, "container", "mx-auto", "mb-10"], [1, "w-72", "bg-white", "max-w-xs", "mx-auto", "rounded-lg", "shadow-md", "hover:shadow-lg", "transition", "duration-500", "transform", "hover:scale-200"], [1, "py-5", "bg-red-400", "flex", "items-center", "justify-between", "rounded-t-lg"], [1, "mr-0", "text-white", "text-lg", "pl-5"], [1, "flex", "justify-center", "w-full", "px-5", "pt-3", "text-sm", "text-gray-400"], [1, "text-center"], [1, "pb-4", "text-3xl", "text-center"], [1, "w-72", "bg-white", "max-w-xs", "mx-auto", "rounded-lg", "shadow-md", "hover:shadow-lg", "transition", "duration-500", "transform", "hover:scale-100"], [1, "py-5", "bg-blue-400", "flex", "items-center", "justify-between", "rounded-t-lg"], [1, "py-5", "bg-purple-400", "flex", "items-center", "justify-between", "rounded-t-lg"], [1, "grid", "grid-cols-1", "lg:grid-cols-3", "gap-10", "p-5"], [1, "container", "mx-auto", "bg-white", "shadow-xl"], [1, "w-11/12", "mx-auto"], [1, "bg-white", "mb-6"], [1, "py-4", "text-xl", "font-bold", "w-full", "text-center"], [1, "text-left", "w-full", "border-collapse"], [1, "py-4", "px-6", "bg-indigo-500", "font-bold", "uppercase", "text-sm", "text-white", "border-b", "border-grey-light"], [1, "py-4", "px-6", "text-center", "bg-indigo-500", "font-bold", "uppercase", "text-sm", "text-white", "border-b", "border-grey-light"], ["class", "hover:bg-gray-200 transition duration-200", 4, "ngFor", "ngForOf"], [1, "hover:bg-gray-200", "transition", "duration-200"], [1, "py-4", "px-6", "border-b", "border-grey-light"], [1, "py-4", "px-6", "text-center", "border-b", "border-grey-light"], [1, "lds-ripple"], [1, "container", "mx-auto", "mb-10", "text-center"], [1, "text-3xl"], [1, "text-gray-400", "text-lg"]],
        template: function StatsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](0, StatsComponent_ng_container_0_Template, 2, 2, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](1, StatsComponent_ng_template_1_Template, 3, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](3, StatsComponent_ng_template_3_Template, 6, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????templateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.areStatsReady)("ngIfElse", _r1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CurrencyPipe],
        styles: [".lds-ripple[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n\n.lds-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: absolute;\n  border: 4px solid #fff;\n  opacity: 1;\n  border-radius: 50%;\n  -webkit-animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n          animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n}\n\n.lds-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  -webkit-animation-delay: -0.5s;\n          animation-delay: -0.5s;\n}\n\n@-webkit-keyframes lds-ripple {\n  0% {\n    top: 36px;\n    left: 36px;\n    width: 0;\n    height: 0;\n    opacity: 1;\n  }\n\n  100% {\n    top: 0px;\n    left: 0px;\n    width: 72px;\n    height: 72px;\n    opacity: 0;\n  }\n}\n\n@keyframes lds-ripple {\n  0% {\n    top: 36px;\n    left: 36px;\n    width: 0;\n    height: 0;\n    opacity: 1;\n  }\n\n  100% {\n    top: 0px;\n    left: 0px;\n    width: 72px;\n    height: 72px;\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0VBQUE7VUFBQSw4REFBQTtBQUVKOztBQUFBO0VBQ0ksOEJBQUE7VUFBQSxzQkFBQTtBQUdKOztBQURBO0VBQ0k7SUFDSSxTQUFBO0lBQ0EsVUFBQTtJQUNBLFFBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtFQUlOOztFQUZFO0lBQ0ksUUFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7RUFJTjtBQUNGOztBQWxCQTtFQUNJO0lBQ0ksU0FBQTtJQUNBLFVBQUE7SUFDQSxRQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7RUFJTjs7RUFGRTtJQUNJLFFBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0VBSU47QUFDRiIsImZpbGUiOiJzdGF0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZHMtcmlwcGxlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG59XHJcbi5sZHMtcmlwcGxlIGRpdiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjZmZmO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGFuaW1hdGlvbjogbGRzLXJpcHBsZSAxcyBjdWJpYy1iZXppZXIoMCwgMC4yLCAwLjgsIDEpIGluZmluaXRlO1xyXG59XHJcbi5sZHMtcmlwcGxlIGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC41cztcclxufVxyXG5Aa2V5ZnJhbWVzIGxkcy1yaXBwbGUge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRvcDogMzZweDtcclxuICAgICAgICBsZWZ0OiAzNnB4O1xyXG4gICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgIHdpZHRoOiA3MnB4O1xyXG4gICAgICAgIGhlaWdodDogNzJweDtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    3812:
    /*!*****************************************************************************!*\
      !*** ./angular/src/app/modules/options/pages/options/stats/stats.module.ts ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StatsModule": function StatsModule() {
          return (
            /* binding */
            _StatsModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _stats_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./stats-routing.module */
      7974);
      /* harmony import */


      var _stats_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./stats.component */
      6035);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _StatsModule = function _StatsModule() {
        _classCallCheck(this, _StatsModule);
      };

      _StatsModule.??fac = function StatsModule_Factory(t) {
        return new (t || _StatsModule)();
      };

      _StatsModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({
        type: _StatsModule
      });
      _StatsModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _stats_routing_module__WEBPACK_IMPORTED_MODULE_0__.StatsRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](_StatsModule, {
          declarations: [_stats_component__WEBPACK_IMPORTED_MODULE_1__.StatsComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _stats_routing_module__WEBPACK_IMPORTED_MODULE_0__.StatsRoutingModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=angular_src_app_core_currencies_ts-angular_src_app_modules_options_pages_options_stats_stats_-ec8a31-es5.js.map