(self["webpackChunkbo_planner"] = self["webpackChunkbo_planner"] || []).push([["angular_src_app_modules_popup_popup_module_ts"],{

/***/ 3639:
/*!**********************************************!*\
  !*** ./angular/src/app/models/base.model.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseEntity": function() { return /* binding */ BaseEntity; },
/* harmony export */   "ChromeCommunicationMessage": function() { return /* binding */ ChromeCommunicationMessage; },
/* harmony export */   "Currency": function() { return /* binding */ Currency; }
/* harmony export */ });
class BaseEntity {
}
class ChromeCommunicationMessage {
}
class Currency {
}


/***/ }),

/***/ 6053:
/*!***************************************************!*\
  !*** ./angular/src/app/models/buy-order.model.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuyOrder": function() { return /* binding */ BuyOrder; }
/* harmony export */ });
/* harmony import */ var _base_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.model */ 3639);

class BuyOrder extends _base_model__WEBPACK_IMPORTED_MODULE_0__.BaseEntity {
    constructor(data) {
        super();
        // Assigning data to current instance
        Object.assign(this, data);
        // If current buy order was previously created then setting current date
        // as date when it was updated last time. Otherwise using date when it was created
        // as initial value
        this.updated = this.created ? new Date() : (this.created || new Date());
        // Setting creation date
        this.created = new Date();
    }
}


/***/ }),

/***/ 649:
/*!**********************************************************************!*\
  !*** ./angular/src/app/modules/popup/pages/popup/popup.component.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupComponent": function() { return /* binding */ PopupComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6008);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9773);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 3190);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 6782);
/* harmony import */ var _core_currencies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/currencies */ 869);
/* harmony import */ var _models_buy_order_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/buy-order.model */ 6053);
/* harmony import */ var _providers_tab_id_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../providers/tab-id.provider */ 3154);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var ngx_indexed_db__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-indexed-db */ 5465);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 8583);










function PopupComponent_ng_container_3_div_15_option_11_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const currency_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("(", currency_r10.symbol, ")");
} }
function PopupComponent_ng_container_3_div_15_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PopupComponent_ng_container_3_div_15_option_11_span_2_Template, 2, 1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const currency_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", currency_r10.currencyId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", currency_r10.code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", currency_r10.symbol);
} }
const _c0 = function (a0) { return { "ring-2 ring-red-600": a0 }; };
function PopupComponent_ng_container_3_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "App ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "select", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, PopupComponent_ng_container_3_div_15_option_11_Template, 3, 3, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c0, ctx_r4.boForm.get("appId").touched && ctx_r4.boForm.get("appId").invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c0, ctx_r4.boForm.get("currencyId").touched && ctx_r4.boForm.get("currencyId").invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r4.currencies);
} }
function PopupComponent_ng_container_3_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PopupComponent_ng_container_3_div_19_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r13.openPlaceBuyOrderWindow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " PLACE BUY ORDER ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PopupComponent_ng_container_3_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Active buy order");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "You already have an active buy order for this item.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx_r6.itemInfo == null ? null : ctx_r6.itemInfo.activeBOAmount, " x ", ctx_r6.itemInfo == null ? null : ctx_r6.itemInfo.activeBOPriceString, " ");
} }
function PopupComponent_ng_container_3_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Item was added");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PopupComponent_ng_container_3_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r8.error);
} }
const _c1 = function (a0) { return { "opacity-50 cursor-not-allowed": a0 }; };
function PopupComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function PopupComponent_ng_container_3_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r15.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Full item name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("focus", function PopupComponent_ng_container_3_Template_input_focus_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r17.clearSuccessMessage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Amount to buy");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, PopupComponent_ng_container_3_div_15_Template, 12, 7, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, PopupComponent_ng_container_3_div_19_Template, 3, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, PopupComponent_ng_container_3_div_20_Template, 8, 2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, PopupComponent_ng_container_3_div_21_Template, 4, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, PopupComponent_ng_container_3_div_22_Template, 4, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.boForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](11, _c0, ctx_r0.boForm.get("itemName").touched && ctx_r0.boForm.get("itemName").invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](13, _c0, ctx_r0.boForm.get("price").touched && ctx_r0.boForm.get("price").invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](15, _c0, ctx_r0.boForm.get("amount").touched && ctx_r0.boForm.get("amount").invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isManualAdding);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r0.boForm.invalid)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c1, ctx_r0.boForm.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.isManualAdding && (!(ctx_r0.itemInfo == null ? null : ctx_r0.itemInfo.activeBOPrice) || !(ctx_r0.itemInfo == null ? null : ctx_r0.itemInfo.activeBOAmount)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r0.itemInfo == null ? null : ctx_r0.itemInfo.activeBOPrice) && (ctx_r0.itemInfo == null ? null : ctx_r0.itemInfo.activeBOAmount));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isManualAdding && ctx_r0.isManualSuccess);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.error);
} }
function PopupComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "svg", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "path", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " This extension works only on SCM listing page. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PopupComponent_ng_template_4_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r18.goToSCM(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " Go to market page ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "OR");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PopupComponent_ng_template_4_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r20.openManualAdd(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " Manually add item information ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PopupComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Last update: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, ctx_r3.itemInfo.updated, "medium"), " ");
} }
class PopupComponent {
    constructor(tabId, cdr, formBuilder, dbService) {
        this.tabId = tabId;
        this.cdr = cdr;
        this.formBuilder = formBuilder;
        this.dbService = dbService;
        /**
         * Indicates if user wants to manually add information
         *
         * @type {boolean}
         * @memberof PopupComponent
         */
        this.isManualAdding = false;
        /**
         * Indicates if manual adding was succcessful
         *
         * @type {boolean}
         * @memberof PopupComponent
         */
        this.isManualSuccess = false;
        /**
         * List of known currencies
         *
         * @memberof PopupComponent
         */
        this.currencies = _core_currencies__WEBPACK_IMPORTED_MODULE_0__.CURRENCY;
        /**
         * Error message
         *
         * @type {string}
         * @memberof PopupComponent
         */
        this.error = '';
        /**
         * Subject that is responsible for unsubscribing when component gets destroyed
         *
         * @private
         * @type {Subject<boolean>}
         * @memberof PopupComponent
         */
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.createForm();
    }
    ngOnInit() {
        this.initInfo();
    }
    ngOnDestroy() {
        // Completing subscriptions
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    /**
     * Method saves buy order plan
     *
     * @memberof PopupComponent
     */
    save() {
        // If we have "created" property it means that buy order was already created and
        // we need to update it. Otherwise creating new one
        if (!this.isManualAdding && this.itemInfo.created) {
            this.updateBuyOrder();
        }
        else {
            this.createBuyOrder();
        }
    }
    /**
     * Method redirects user to Steam Community Market page
     *
     * @memberof PopupComponent
     */
    goToSCM() {
        // Changing current tab to SCM via redirect
        chrome.tabs.update({ url: "https://steamcommunity.com/market" }, () => {
            // Closing popup after redirect
            window.close();
        });
    }
    /**
     * Method opens a new tab with planned buy order list (options page)
     *
     * @memberof PopupComponent
     */
    goToPlannedList() {
        chrome.runtime.openOptionsPage(() => {
            // Closing popup after redirect
            window.close();
        });
    }
    /**
     * Method sends signal to contentPage to open buy order modal
     *
     * @memberof PopupComponent
     */
    /**
     * Method sends signal to contentPage to open buy order modal
     *
     * @param {number} [tabId=this.tabId] Id of tab where to open buy order modal (by default current tab)
     * @param {ItemInfo} [itemInfo=this.itemInfo] Information about item where to open buy order modal (by default current item)
     * @memberof PopupComponent
     */
    openPlaceBuyOrderWindow(tabId = this.tabId, itemInfo = this.itemInfo) {
        chrome.tabs.sendMessage(tabId, {
            type: 'openBOModal',
            data: {
                price: itemInfo.price,
                amount: itemInfo.amount,
            }
        });
    }
    /**
     * Method sends signal to contentPage to open buy order modal on every opened SCM listing page
     *
     * @memberof PopupComponent
     */
    openPlaceBuyOrderWindowOnAllTabs() {
        // Getting list of all SCM listing pages to open BO modals on them
        (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.bindCallback)(chrome.tabs.query.bind(this, { url: 'https://steamcommunity.com/market/listings/*' }))()
            .pipe(
        // Getting list of tab IDs because we need only them.
        // Using mergeMap to make concurency
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(tabs => tabs.map(tab => tab.id)), 
        // Requesting information about item for each opened tab
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.mergeMap)(tabId => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.bindCallback)(chrome.tabs.sendMessage.bind(this, tabId, { type: 'getInfoFromPage' }))()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(itemInfo => {
            // In case of error returning undefined
            if (chrome.runtime.lastError) {
                return undefined;
            }
            // Trying to get stored information in DB (if user added planned buy order). In case if there is no
            // stored information then we are returning simple item info that we gathered from page (so price & amount wouldn't be pre-filled)
            return this.getSavedInfoFromDB(itemInfo).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(itemFromDB => itemFromDB !== null && itemFromDB !== void 0 ? itemFromDB : itemInfo));
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(itemInfo => {
            // If everything is fine then returning tab Id and info about item
            return {
                itemInfo,
                tabId,
            };
        }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$))
            .subscribe(result => {
            if (result) {
                this.openPlaceBuyOrderWindow(result.tabId, result.itemInfo);
            }
        });
    }
    /**
     * Method marks manual adding as enabled with all necessary setup
     *
     * @memberof PopupComponent
     */
    openManualAdd() {
        this.isManualAdding = true;
        // Adding REQUIRED validators cause we need values
        this.boForm.get('appId').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
        this.boForm.get('currencyId').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
    }
    /**
     * Method clears success message (hide from display)
     *
     * @memberof PopupComponent
     */
    clearSuccessMessage() {
        this.isManualSuccess = false;
    }
    /**
     * Method requests information about item from DB in case if user placed planned order
     *
     * @private
     * @param {ItemInfo} itemInfo Information about item to look in DB
     * @return {Observable<ItemInfo>} Returns `Observable` with found item info
     * @memberof PopupComponent
     */
    getSavedInfoFromDB(itemInfo) {
        return this.dbService.getByIndex('orders', 'itemName', itemInfo.itemName)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(boEntity => {
            // Updating current info object with information from DB
            Object.assign(itemInfo, boEntity);
            return itemInfo;
        }));
    }
    /**
     * Method gets information about item from page
     *
     * @private
     * @param {number} [tabId=this.tabId] Id of tab from which information gathernig should be done. By default current page
     * @return {Observable<ItemInfo>} Returns `Observable` with item info
     * @memberof PopupComponent
     */
    getItemInfoFromPage(tabId = this.tabId) {
        // Sending signal to content page to gather information from page itself
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.bindCallback)(chrome.tabs.sendMessage.bind(this, this.tabId, { type: 'getInfoFromPage' }))()
            .pipe(
        // If there was an error, returning undefined. Otherwise giving info from thee page
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(info => chrome.runtime.lastError ? undefined : info), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(info => {
            // If we have info from page then getting stored information about this item from IndexedDB
            if (info) {
                return this.getSavedInfoFromDB(info);
                // If there is no info then reeturning same info object
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(info);
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$));
    }
    /**
     * Method initializes popup based on information gathered from current page
     *
     * @private
     * @memberof PopupComponent
     */
    initInfo() {
        this.getItemInfoFromPage()
            .subscribe(info => {
            var _a;
            // Storing information for further usage ONLY if user is currently on item info page.
            // Otherwise we can't get any information and should show informative message so user
            // goes to specific SCM item
            if ((_a = info === null || info === void 0 ? void 0 : info.pageUrl) === null || _a === void 0 ? void 0 : _a.includes('/market/listings/')) {
                this.itemInfo = info;
                // Updating form value
                this.boForm.patchValue(info);
                // Triggering change detection since there are changes that view needs to re-render
                // and for some reason it doesn't happen automatically. Maybe due chrome extension
                this.cdr.detectChanges();
            }
        });
    }
    /**
     * Method creates new buy order plan and stores it in DB
     *
     * @private
     * @memberof PopupComponent
     */
    createBuyOrder() {
        // Creating new entity based on info on form
        const newBOEntity = new _models_buy_order_model__WEBPACK_IMPORTED_MODULE_1__.BuyOrder(this.boForm.value);
        // Checking if item with same name is already added
        this.dbService.getByIndex('orders', 'itemName', newBOEntity.itemName)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(item => {
            // If item exists then throwing error
            if (item) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.throwError)('Item with this name already exists');
            }
            // Otherwise adding item
            return this.dbService.add('orders', newBOEntity);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$))
            .subscribe(result => {
            // If user manually adds item then displaying success and resetting form
            // so he can do it again
            if (this.isManualAdding) {
                this.boForm.reset({ price: 0, amount: 1 });
                this.boForm.markAsUntouched();
                this.isManualSuccess = true;
            }
            else {
                // Updating form value with latest update
                this.boForm.patchValue(result);
                this.updateItemInfo(result);
            }
            // Clearing error message when all is done
            this.error = '';
            // Triggering change detection since there are changes that view needs to re-render
            // and for some reason it doesn't happen automatically. Maybe due chrome extension
            this.cdr.detectChanges();
        }, err => {
            // Setting error message for display
            this.error = err;
        });
    }
    /**
     * Method updates buy order plan and saves it to DB
     *
     * @private
     * @memberof PopupComponent
     */
    updateBuyOrder() {
        // Updating current item info with data in form
        const updatedBuyOrder = Object.assign(this.itemInfo, this.boForm.value);
        // Creating entity for save
        const updatedBOEntity = new _models_buy_order_model__WEBPACK_IMPORTED_MODULE_1__.BuyOrder(updatedBuyOrder);
        // Updating in DB
        this.dbService.update('orders', updatedBOEntity)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$))
            .subscribe(results => {
            // Updating form value with updated entity. Otherwise we would have to search for it in all results
            this.boForm.patchValue(updatedBOEntity);
            this.updateItemInfo(updatedBOEntity);
            // Triggering change detection since there are changes that view needs to re-render
            // and for some reason it doesn't happen automatically. Maybe due chrome extension
            this.cdr.detectChanges();
        });
    }
    /**
     * Method updates currently stored item info with latest changes (from Indexed DB)
     *
     * @private
     * @param {BuyOrder} boEntity Stored/updated entity in IndexedDB. These values will be added to item info
     * @memberof PopupComponent
     */
    updateItemInfo(boEntity) {
        Object.assign(this.itemInfo, boEntity);
    }
    createForm() {
        this.boForm = this.formBuilder.group({
            itemName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
            price: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            amount: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            appId: [null],
            currencyId: [null],
        });
    }
}
PopupComponent.ɵfac = function PopupComponent_Factory(t) { return new (t || PopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_providers_tab_id_provider__WEBPACK_IMPORTED_MODULE_2__.TAB_ID), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_indexed_db__WEBPACK_IMPORTED_MODULE_13__.NgxIndexedDBService)); };
PopupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PopupComponent, selectors: [["app-popup"]], decls: 28, vars: 3, consts: [["id", "page-wrapper"], [1, "title", "uppercase", "text-xl", "mb-3", "mx-auto", "text-center", "font-semibold", "pt-0", "tracking-widest", "text-gray-900", "rounded-lg", "dark-mode:text-white", "focus:outline-none", "focus:shadow-outline"], [4, "ngIf", "ngIfElse"], ["goToSCMListingTmpl", ""], ["class", "mb-2", 4, "ngIf"], ["role", "alert", 1, "bg-blue-100", "border-l-4", "border-blue-500", "text-blue-700", "p-4", "mt-6", "mb-3"], [1, "flex", "justify-between"], [1, "font-bold", "text-sm"], ["type", "button", 1, "ml-10", "shadow", "transition", "duration-300", "ease-in-out", "bg-blue-700", "hover:bg-blue-900", "focus:shadow-outline", "focus:outline-none", "text-white", "font-bold", "text-sm", "py-2", "px-4", "rounded", 3, "click"], [1, "flex", "justify-between", "items-center", "w-full"], ["type", "button", 1, "flex", "text-black", "hover:text-blue-900", "duration-200", "background-transparent", "font-bold", "uppercase", "px-0", "py-1", "text-xs", "outline-none", "focus:outline-none", "mr-1", "mb-1", "ease-linear", "transition-all"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "mr-1"], ["d", "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47\n            7.59.4.07.55-.17.55-.38\n            0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01\n            1.08.58 1.23.82.72 1.21 1.87.87\n            2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95\n            0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21\n            2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82\n            2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87\n            3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0\n            .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"], ["href", "https://github.com/6matko/bo-planner", "target", "_blank", "rel", "noreferrer nofollow", 1, "hover:text-blue-900", "duration-200"], ["href", "https://steamcommunity.com/id/6matko/", "target", "_blank", "rel", "noreferrer nofollow", 1, "hover:text-blue-900", "duration-200"], ["type", "button", 1, "text-blue-500", "hover:text-blue-900", "duration-200", "background-transparent", "font-bold", "uppercase", "px-0", "py-1", "text-xs", "outline-none", "focus:outline-none", "mr-1", "mb-1", "ease-linear", "transition-all", 3, "click"], [1, "w-100", "bg-white", "px-4", "pt-4", 3, "formGroup", "ngSubmit"], [1, "mb-4"], ["for", "itemName", 1, "block", "text-gray-500", "font-medium", "text-sm", "mb-2"], ["formControlName", "itemName", "autofocus", "", "name", "itemName", "type", "text", "placeholder", "Enter item name", 1, "bg-gray-200", "appearance-none", "border-2", "border-gray-200", "rounded", "w-full", "py-2", "px-4", "text-gray-700", "leading-tight", "focus:outline-none", "focus:bg-white", "focus:border-purple-500", 3, "ngClass", "focus"], [1, "grid", "grid-cols-2", "gap-4"], ["for", "boPrice", 1, "block", "text-gray-500", "font-medium", "text-sm", "mb-2"], ["formControlName", "price", "name", "boPrice", "type", "number", "min", "0", "step", "0.01", "placeholder", "Buy order price", 1, "bg-gray-200", "appearance-none", "border-2", "border-gray-200", "rounded", "w-full", "py-2", "px-4", "text-gray-700", "leading-tight", "focus:outline-none", "focus:bg-white", "focus:border-purple-500", 3, "ngClass"], ["for", "boAmount", 1, "block", "text-gray-500", "font-medium", "text-sm", "mb-2"], ["formControlName", "amount", "name", "boAmount", "type", "number", "min", "1", "step", "1", "placeholder", "Amount to buy", 1, "bg-gray-200", "appearance-none", "border-2", "border-gray-200", "rounded", "w-full", "py-2", "px-4", "text-gray-700", "leading-tight", "focus:outline-none", "focus:bg-white", "focus:border-purple-500", 3, "ngClass"], ["class", "grid grid-cols-2 gap-4 mt-4", 4, "ngIf"], [1, ""], ["type", "submit", 1, "w-3/5", "block", "mx-auto", "shadow", "transition", "duration-300", "ease-in-out", "bg-purple-800", "hover:bg-purple-900", "focus:shadow-outline", "focus:outline-none", "text-white", "font-bold", "py-2", "px-4", "rounded", "mt-4", 3, "disabled", "ngClass"], ["class", "m-4 mt-0 pt-8", 4, "ngIf"], ["class", "bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mt-6 mb-3", "role", "alert", 4, "ngIf"], ["class", "bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mt-6 mb-3", "role", "alert", 4, "ngIf"], ["class", "bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mt-6 mb-3", "role", "alert", 4, "ngIf"], [1, "grid", "grid-cols-2", "gap-4", "mt-4"], ["for", "appId", 1, "block", "text-gray-500", "font-medium", "text-sm", "mb-2"], ["formControlName", "appId", "name", "appId", "type", "number", "min", "0", "step", "1", "placeholder", "Game app ID", 1, "bg-gray-200", "appearance-none", "border-2", "border-gray-200", "rounded", "w-full", "py-2", "px-4", "text-gray-700", "leading-tight", "focus:outline-none", "focus:bg-white", "focus:border-purple-500", 3, "ngClass"], ["for", "currency", 1, "block", "text-gray-500", "font-medium", "text-sm", "mb-2"], [1, "flex", "justify-center"], [1, "w-full"], ["formControlName", "currencyId", "aria-label", "Currency select", 1, "form-select", "appearance-none", "bg-gray-200", "border-2", "border-gray-200", "rounded", "w-full", "py-2", "px-4", "text-gray-700", "leading-tight", "focus:outline-none", "focus:bg-white", "focus:border-purple-500", 3, "ngClass"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [4, "ngIf"], [1, "m-4", "mt-0", "pt-8"], ["type", "button", 1, "w-full", "block", "mx-auto", "shadow", "transition", "duration-300", "ease-in-out", "bg-green-500", "hover:bg-green-600", "focus:shadow-outline", "focus:outline-none", "text-white", "font-bold", "text-xl", "py-2", "px-4", "rounded", "mb-4", 3, "click"], ["role", "alert", 1, "bg-yellow-100", "border-l-4", "border-yellow-500", "text-yellow-700", "p-4", "mt-6", "mb-3"], [1, "flex", "justify-between", "font-bold", "text-sm"], ["role", "alert", 1, "bg-green-100", "border-l-4", "border-green-500", "text-green-700", "p-4", "mt-6", "mb-3"], [1, "flex", "justify-between", "font-bold", "text-md"], ["role", "alert", 1, "bg-red-100", "border-l-4", "border-red-500", "text-red-700", "p-4", "mt-6", "mb-3"], ["role", "alert", 1, "bg-green-50", "border-t-4", "border-green-400", "rounded-b", "text-green-600", "px-4", "py-3", "shadow-md"], [1, "flex"], [1, "py-1"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", 1, "fill-current", "h-6", "w-6", "text-green-400", "mr-4"], ["d", "M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93\n              17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9\n              11V9h2v6H9v-4zm0-6h2v2H9V5z"], [1, "flex", "items-center"], [1, "w-full", "mb-5"], ["type", "button", "rel", "nofollow", 1, "w-3/5", "block", "text-center", "mx-auto", "shadow", "transition", "duration-300", "ease-in-out", "bg-yellow-600", "hover:bg-yellow-700", "focus:shadow-outline", "focus:outline-none", "text-white", "font-bold", "py-2", "px-4", "rounded", "mt-4", 3, "click"], [1, "relative", "flex", "items-center"], [1, "flex-grow", "border-t", "border-gray-400"], [1, "flex-shrink", "mx-4"], ["type", "button", "rel", "nofollow", 1, "w-3/5", "block", "text-center", "mx-auto", "shadow", "transition", "duration-300", "ease-in-out", "bg-green-500", "hover:bg-green-600", "focus:shadow-outline", "focus:outline-none", "text-white", "font-bold", "py-2", "px-4", "rounded", "mt-4", 3, "click"], [1, "mb-2"]], template: function PopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Buy order planner ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PopupComponent_ng_container_3_Template, 23, 19, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, PopupComponent_ng_template_4_Template, 19, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, PopupComponent_p_6_Template, 3, 4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Place buy order on all pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " This action will open \"Place Buy Order\" window on all opened SCM pages. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PopupComponent_Template_button_click_14_listener() { return ctx.openPlaceBuyOrderWindowOnAllTabs(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " OPEN ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " Github ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "6matko");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PopupComponent_Template_button_click_26_listener() { return ctx.goToPlannedList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " View all items ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.itemInfo || ctx.isManualAdding)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.itemInfo == null ? null : ctx.itemInfo.updated);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.SelectControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgSelectMultipleOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe], styles: ["#page-wrapper[_ngcontent-%COMP%] {\n  min-width: 500px;\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0FBQ0oiLCJmaWxlIjoicG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcGFnZS13cmFwcGVyIHtcclxuICAgIG1pbi13aWR0aDogNTAwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ 5404:
/*!***************************************************************!*\
  !*** ./angular/src/app/modules/popup/popup-routing.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupRoutingModule": function() { return /* binding */ PopupRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _pages_popup_popup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/popup/popup.component */ 649);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




const routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _pages_popup_popup_component__WEBPACK_IMPORTED_MODULE_0__.PopupComponent
    }
];
class PopupRoutingModule {
}
PopupRoutingModule.ɵfac = function PopupRoutingModule_Factory(t) { return new (t || PopupRoutingModule)(); };
PopupRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PopupRoutingModule });
PopupRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PopupRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 7134:
/*!*******************************************************!*\
  !*** ./angular/src/app/modules/popup/popup.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupModule": function() { return /* binding */ PopupModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _pages_popup_popup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/popup/popup.component */ 649);
/* harmony import */ var _popup_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup-routing.module */ 5404);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);





class PopupModule {
}
PopupModule.ɵfac = function PopupModule_Factory(t) { return new (t || PopupModule)(); };
PopupModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PopupModule });
PopupModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _popup_routing_module__WEBPACK_IMPORTED_MODULE_1__.PopupRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PopupModule, { declarations: [_pages_popup_popup_component__WEBPACK_IMPORTED_MODULE_0__.PopupComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _popup_routing_module__WEBPACK_IMPORTED_MODULE_1__.PopupRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 8660:
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/AsyncSubject.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncSubject": function() { return /* binding */ AsyncSubject; }
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ 9765);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subscription */ 826);


class AsyncSubject extends _Subject__WEBPACK_IMPORTED_MODULE_0__.Subject {
    constructor() {
        super(...arguments);
        this.value = null;
        this.hasNext = false;
        this.hasCompleted = false;
    }
    _subscribe(subscriber) {
        if (this.hasError) {
            subscriber.error(this.thrownError);
            return _Subscription__WEBPACK_IMPORTED_MODULE_1__.Subscription.EMPTY;
        }
        else if (this.hasCompleted && this.hasNext) {
            subscriber.next(this.value);
            subscriber.complete();
            return _Subscription__WEBPACK_IMPORTED_MODULE_1__.Subscription.EMPTY;
        }
        return super._subscribe(subscriber);
    }
    next(value) {
        if (!this.hasCompleted) {
            this.value = value;
            this.hasNext = true;
        }
    }
    error(error) {
        if (!this.hasCompleted) {
            super.error(error);
        }
    }
    complete() {
        this.hasCompleted = true;
        if (this.hasNext) {
            super.next(this.value);
        }
        super.complete();
    }
}
//# sourceMappingURL=AsyncSubject.js.map

/***/ }),

/***/ 6008:
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/bindCallback.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bindCallback": function() { return /* binding */ bindCallback; }
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Observable */ 9165);
/* harmony import */ var _AsyncSubject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../AsyncSubject */ 8660);
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../operators/map */ 8002);
/* harmony import */ var _util_canReportError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/canReportError */ 3179);
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArray */ 9796);
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isScheduler */ 4869);






function bindCallback(callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
        if ((0,_util_isScheduler__WEBPACK_IMPORTED_MODULE_0__.isScheduler)(resultSelector)) {
            scheduler = resultSelector;
        }
        else {
            return (...args) => bindCallback(callbackFunc, scheduler)(...args).pipe((0,_operators_map__WEBPACK_IMPORTED_MODULE_1__.map)((args) => (0,_util_isArray__WEBPACK_IMPORTED_MODULE_2__.isArray)(args) ? resultSelector(...args) : resultSelector(args)));
        }
    }
    return function (...args) {
        const context = this;
        let subject;
        const params = {
            context,
            subject,
            callbackFunc,
            scheduler,
        };
        return new _Observable__WEBPACK_IMPORTED_MODULE_3__.Observable(subscriber => {
            if (!scheduler) {
                if (!subject) {
                    subject = new _AsyncSubject__WEBPACK_IMPORTED_MODULE_4__.AsyncSubject();
                    const handler = (...innerArgs) => {
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    };
                    try {
                        callbackFunc.apply(context, [...args, handler]);
                    }
                    catch (err) {
                        if ((0,_util_canReportError__WEBPACK_IMPORTED_MODULE_5__.canReportError)(subject)) {
                            subject.error(err);
                        }
                        else {
                            console.warn(err);
                        }
                    }
                }
                return subject.subscribe(subscriber);
            }
            else {
                const state = {
                    args, subscriber, params,
                };
                return scheduler.schedule(dispatch, 0, state);
            }
        });
    };
}
function dispatch(state) {
    const self = this;
    const { args, subscriber, params } = state;
    const { callbackFunc, context, scheduler } = params;
    let { subject } = params;
    if (!subject) {
        subject = params.subject = new _AsyncSubject__WEBPACK_IMPORTED_MODULE_4__.AsyncSubject();
        const handler = (...innerArgs) => {
            const value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
            this.add(scheduler.schedule(dispatchNext, 0, { value, subject }));
        };
        try {
            callbackFunc.apply(context, [...args, handler]);
        }
        catch (err) {
            subject.error(err);
        }
    }
    this.add(subject.subscribe(subscriber));
}
function dispatchNext(state) {
    const { value, subject } = state;
    subject.next(value);
    subject.complete();
}
function dispatchError(state) {
    const { err, subject } = state;
    subject.error(err);
}
//# sourceMappingURL=bindCallback.js.map

/***/ }),

/***/ 205:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/throwError.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "throwError": function() { return /* binding */ throwError; }
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 9165);

function throwError(error, scheduler) {
    if (!scheduler) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => subscriber.error(error));
    }
    else {
        return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => scheduler.schedule(dispatch, 0, { error, subscriber }));
    }
}
function dispatch({ error, subscriber }) {
    subscriber.error(error);
}
//# sourceMappingURL=throwError.js.map

/***/ })

}]);
//# sourceMappingURL=angular_src_app_modules_popup_popup_module_ts-es2017.js.map