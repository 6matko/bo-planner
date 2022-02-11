(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkbo_planner"] = self["webpackChunkbo_planner"] || []).push([["common"], {
    /***/
    4847:
    /*!***********************************************************!*\
      !*** ./angular/src/app/modules/options/options.facade.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OptionsFacade": function OptionsFacade() {
          return (
            /* binding */
            _OptionsFacade
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      8049);
      /* harmony import */


      var _core_currencies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/currencies */
      869);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var ngx_indexed_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-indexed-db */
      5465);
      /* harmony import */


      var _options_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./options.state */
      9235);

      var _OptionsFacade = /*#__PURE__*/function () {
        function _OptionsFacade(dbService, optionsState) {
          _classCallCheck(this, _OptionsFacade);

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


        _createClass(_OptionsFacade, [{
          key: "getPlannedOrders",
          value: function getPlannedOrders(force) {
            var _this = this;

            var _a;

            if (force || !((_a = this.optionsState.plannedOrders$.value) === null || _a === void 0 ? void 0 : _a.length)) {
              this.dbService.getAll('orders').pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.first)()).subscribe(function (orders) {
                return _this.updatePlannedOrders(orders);
              });
            }

            return this.optionsState.plannedOrders$.asObservable();
          }
          /**
           * Updates planned buy orders in state
           *
           * @param {BuyOrder[]} orders Orders to store
           * @memberof OptionsFacade
           */

        }, {
          key: "updatePlannedOrders",
          value: function updatePlannedOrders(orders) {
            this.optionsState.plannedOrders$.next(orders);
          }
          /**
           * Method gets users currency based on first added planned order
           *
           * @return {Currency} Returns information about users currency
           * @memberof OptionsFacade
           */

        }, {
          key: "getCurrency",
          value: function getCurrency() {
            var _this2 = this;

            // Checking if currency is stored in state. If not then trying to get and set it
            if (!this.optionsState.currency) {
              var currentCurrency = _core_currencies__WEBPACK_IMPORTED_MODULE_0__.CURRENCY.find(function (currency) {
                var _a;

                return currency.currencyId === +((_a = _this2.optionsState.plannedOrders$.value[0]) === null || _a === void 0 ? void 0 : _a.currencyId);
              });

              this.setCurrency(currentCurrency);
            }

            return this.optionsState.currency;
          }
        }, {
          key: "setCurrency",
          value: function setCurrency(currency) {
            this.optionsState.currency = currency;
          }
        }]);

        return _OptionsFacade;
      }();

      _OptionsFacade.ɵfac = function OptionsFacade_Factory(t) {
        return new (t || _OptionsFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](ngx_indexed_db__WEBPACK_IMPORTED_MODULE_4__.NgxIndexedDBService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_options_state__WEBPACK_IMPORTED_MODULE_1__.OptionsState));
      };

      _OptionsFacade.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: _OptionsFacade,
        factory: _OptionsFacade.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    9235:
    /*!**********************************************************!*\
      !*** ./angular/src/app/modules/options/options.state.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OptionsState": function OptionsState() {
          return (
            /* binding */
            _OptionsState
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      6215);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _OptionsState = function _OptionsState() {
        _classCallCheck(this, _OptionsState);

        /**
         * Behavior Subject which stores planned orders
         *
         * @memberof OptionsState
         */
        this.plannedOrders$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
      };

      _OptionsState.ɵfac = function OptionsState_Factory(t) {
        return new (t || _OptionsState)();
      };

      _OptionsState.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _OptionsState,
        factory: _OptionsState.ɵfac,
        providedIn: 'root'
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map