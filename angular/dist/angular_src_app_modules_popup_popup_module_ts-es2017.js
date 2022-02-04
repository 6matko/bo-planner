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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 6008);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 3190);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 6782);
/* harmony import */ var _core_currencies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/currencies */ 869);
/* harmony import */ var _models_buy_order_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/buy-order.model */ 6053);
/* harmony import */ var _providers_tab_id_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../providers/tab-id.provider */ 3154);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var ngx_indexed_db__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-indexed-db */ 5465);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 8583);










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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PopupComponent_ng_container_3_div_15_option_11_span_2_Template, 2, 1, "span", 37);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "App ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "select", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, PopupComponent_ng_container_3_div_15_option_11_Template, 3, 3, "option", 35);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PopupComponent_ng_container_3_div_19_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r13.openPlaceBuyOrderWindow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " PLACE BUY ORDER ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PopupComponent_ng_container_3_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 41);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Item was added");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PopupComponent_ng_container_3_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 43);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function PopupComponent_ng_container_3_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r15.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Full item name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("focus", function PopupComponent_ng_container_3_Template_input_focus_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r17.clearSuccessMessage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Amount to buy");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, PopupComponent_ng_container_3_div_15_Template, 12, 7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, PopupComponent_ng_container_3_div_19_Template, 3, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, PopupComponent_ng_container_3_div_20_Template, 8, 2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, PopupComponent_ng_container_3_div_21_Template, 4, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, PopupComponent_ng_container_3_div_22_Template, 4, 1, "div", 27);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "svg", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "path", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " This extension works only on SCM listing page. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PopupComponent_ng_template_4_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r18.goToSCM(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " Go to market page ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "OR");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PopupComponent_ng_template_4_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r20.openManualAdd(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " Manually add item information ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PopupComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 58);
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
    openPlaceBuyOrderWindow() {
        chrome.tabs.sendMessage(this.tabId, {
            type: 'openBOModal',
            data: {
                price: this.itemInfo.price,
                amount: this.itemInfo.amount,
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
        this.boForm.get('appId').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required);
        this.boForm.get('currencyId').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required);
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
     * Method initializes popup based on information gathered from current page
     *
     * @private
     * @memberof PopupComponent
     */
    initInfo() {
        // Sending signal to content page to gather information from page itself
        (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.bindCallback)(chrome.tabs.sendMessage.bind(this, this.tabId, { type: 'getInfoFromPage' }))()
            .pipe(
        // If there was an error, returning undefined. Otherwise giving info from thee page
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(info => chrome.runtime.lastError ? undefined : info), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(info => {
            // If we have info from page then getting stored information about this item from IndexedDB
            if (info) {
                return this.dbService.getByIndex('orders', 'itemName', info.itemName)
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(boEntity => {
                    // Updating current info object with information from DB
                    Object.assign(info, boEntity);
                    return info;
                }));
                // If there is no info then reeturning same info object
            }
            else {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(info);
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$))
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
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(item => {
            // If item exists then throwing error
            if (item) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.throwError)('Item with this name already exists');
            }
            // Otherwise adding item
            return this.dbService.add('orders', newBOEntity);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$))
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
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$))
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
            itemName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            price: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            amount: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            appId: [null],
            currencyId: [null],
        });
    }
}
PopupComponent.ɵfac = function PopupComponent_Factory(t) { return new (t || PopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_providers_tab_id_provider__WEBPACK_IMPORTED_MODULE_2__.TAB_ID), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_indexed_db__WEBPACK_IMPORTED_MODULE_12__.NgxIndexedDBService)); };
PopupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PopupComponent, selectors: [["app-popup"]], decls: 19, vars: 3, consts: [["id", "page-wrapper"], [1, "title", "uppercase", "text-xl", "mb-3", "mx-auto", "text-center", "font-semibold", "pt-0", "tracking-widest", "text-gray-900", "rounded-lg", "dark-mode:text-white", "focus:outline-none", "focus:shadow-outline"], [4, "ngIf", "ngIfElse"], ["goToSCMListingTmpl", ""], ["class", "mb-2", 4, "ngIf"], [1, "flex", "justify-between", "items-center", "w-full"], ["type", "button", 1, "flex", "text-black", "hover:text-blue-900", "duration-200", "background-transparent", "font-bold", "uppercase", "px-0", "py-1", "text-xs", "outline-none", "focus:outline-none", "mr-1", "mb-1", "ease-linear", "transition-all"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "mr-1"], ["d", "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"], ["href", "https://github.com/6matko/bo-planner", "target", "_blank", "rel", "noreferrer nofollow", 1, "hover:text-blue-900", "duration-200"], ["href", "https://steamcommunity.com/id/6matko/", "target", "_blank", "rel", "noreferrer nofollow", 1, "hover:text-blue-900", "duration-200"], ["type", "button", 1, "text-blue-500", "hover:text-blue-900", "duration-200", "background-transparent", "font-bold", "uppercase", "px-0", "py-1", "text-xs", "outline-none", "focus:outline-none", "mr-1", "mb-1", "ease-linear", "transition-all", 3, "click"], [1, "w-100", "bg-white", "px-4", "pt-4", 3, "formGroup", "ngSubmit"], [1, "mb-4"], ["for", "itemName", 1, "block", "text-gray-500", "font-medium", "text-sm", "mb-2"], ["formControlName", "itemName", "autofocus", "", "name", "itemName", "type", "text", "placeholder", "Enter item name", 1, "bg-gray-200", "appearance-none", "border-2", "border-gray-200", "rounded", "w-full", "py-2", "px-4", "text-gray-700", "leading-tight", "focus:outline-none", "focus:bg-white", "focus:border-purple-500", 3, "ngClass", "focus"], [1, "grid", "grid-cols-2", "gap-4"], ["for", "boPrice", 1, "block", "text-gray-500", "font-medium", "text-sm", "mb-2"], ["formControlName", "price", "name", "boPrice", "type", "number", "min", "0", "step", "0.01", "placeholder", "Buy order price", 1, "bg-gray-200", "appearance-none", "border-2", "border-gray-200", "rounded", "w-full", "py-2", "px-4", "text-gray-700", "leading-tight", "focus:outline-none", "focus:bg-white", "focus:border-purple-500", 3, "ngClass"], ["for", "boAmount", 1, "block", "text-gray-500", "font-medium", "text-sm", "mb-2"], ["formControlName", "amount", "name", "boAmount", "type", "number", "min", "1", "step", "1", "placeholder", "Amount to buy", 1, "bg-gray-200", "appearance-none", "border-2", "border-gray-200", "rounded", "w-full", "py-2", "px-4", "text-gray-700", "leading-tight", "focus:outline-none", "focus:bg-white", "focus:border-purple-500", 3, "ngClass"], ["class", "grid grid-cols-2 gap-4 mt-4", 4, "ngIf"], [1, ""], ["type", "submit", 1, "w-3/5", "block", "mx-auto", "shadow", "transition", "duration-300", "ease-in-out", "bg-purple-800", "hover:bg-purple-900", "focus:shadow-outline", "focus:outline-none", "text-white", "font-bold", "py-2", "px-4", "rounded", "mt-4", 3, "disabled", "ngClass"], ["class", "m-4 mt-0 pt-8", 4, "ngIf"], ["class", "bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mt-6 mb-3", "role", "alert", 4, "ngIf"], ["class", "bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mt-6 mb-3", "role", "alert", 4, "ngIf"], ["class", "bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mt-6 mb-3", "role", "alert", 4, "ngIf"], [1, "grid", "grid-cols-2", "gap-4", "mt-4"], ["for", "appId", 1, "block", "text-gray-500", "font-medium", "text-sm", "mb-2"], ["formControlName", "appId", "name", "appId", "type", "number", "min", "0", "step", "1", "placeholder", "Game app ID", 1, "bg-gray-200", "appearance-none", "border-2", "border-gray-200", "rounded", "w-full", "py-2", "px-4", "text-gray-700", "leading-tight", "focus:outline-none", "focus:bg-white", "focus:border-purple-500", 3, "ngClass"], ["for", "currency", 1, "block", "text-gray-500", "font-medium", "text-sm", "mb-2"], [1, "flex", "justify-center"], [1, "w-full"], ["formControlName", "currencyId", "aria-label", "Currency select", 1, "form-select", "appearance-none", "bg-gray-200border-2", "border-gray-200", "rounded", "w-full", "py-2", "px-4", "text-gray-700", "leading-tight", "focus:outline-none", "focus:bg-white", "focus:border-purple-500", 3, "ngClass"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [4, "ngIf"], [1, "m-4", "mt-0", "pt-8"], ["type", "button", 1, "w-full", "block", "mx-auto", "shadow", "transition", "duration-300", "ease-in-out", "bg-green-500", "hover:bg-green-600", "focus:shadow-outline", "focus:outline-none", "text-white", "font-bold", "text-xl", "py-2", "px-4", "rounded", "mb-4", 3, "click"], ["role", "alert", 1, "bg-yellow-100", "border-l-4", "border-yellow-500", "text-yellow-700", "p-4", "mt-6", "mb-3"], [1, "flex", "justify-between", "font-bold", "text-sm"], ["role", "alert", 1, "bg-green-100", "border-l-4", "border-green-500", "text-green-700", "p-4", "mt-6", "mb-3"], [1, "flex", "justify-between", "font-bold", "text-md"], ["role", "alert", 1, "bg-red-100", "border-l-4", "border-red-500", "text-red-700", "p-4", "mt-6", "mb-3"], ["role", "alert", 1, "bg-green-50", "border-t-4", "border-green-400", "rounded-b", "text-green-600", "px-4", "py-3", "shadow-md"], [1, "flex"], [1, "py-1"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", 1, "fill-current", "h-6", "w-6", "text-green-400", "mr-4"], ["d", "M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"], [1, "flex", "items-center"], [1, "font-bold", "text-sm"], [1, "w-full", "mb-5"], ["type", "button", "rel", "nofollow", 1, "w-3/5", "block", "text-center", "mx-auto", "shadow", "transition", "duration-300", "ease-in-out", "bg-yellow-600", "hover:bg-yellow-700", "focus:shadow-outline", "focus:outline-none", "text-white", "font-bold", "py-2", "px-4", "rounded", "mt-4", 3, "click"], [1, "relative", "flex", "items-center"], [1, "flex-grow", "border-t", "border-gray-400"], [1, "flex-shrink", "mx-4"], ["type", "button", "rel", "nofollow", 1, "w-3/5", "block", "text-center", "mx-auto", "shadow", "transition", "duration-300", "ease-in-out", "bg-green-500", "hover:bg-green-600", "focus:shadow-outline", "focus:outline-none", "text-white", "font-bold", "py-2", "px-4", "rounded", "mt-4", 3, "click"], [1, "mb-2"]], template: function PopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Buy order planner ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PopupComponent_ng_container_3_Template, 23, 19, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, PopupComponent_ng_template_4_Template, 19, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, PopupComponent_p_6_Template, 3, 4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Github ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "6matko");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PopupComponent_Template_button_click_17_listener() { return ctx.goToPlannedList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " View all items ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.itemInfo || ctx.isManualAdding)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.itemInfo == null ? null : ctx.itemInfo.updated);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe], styles: ["#page-wrapper[_ngcontent-%COMP%] {\n  min-width: 500px;\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0FBQ0oiLCJmaWxlIjoicG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcGFnZS13cmFwcGVyIHtcclxuICAgIG1pbi13aWR0aDogNTAwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59Il19 */"] });


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iby1wbGFubmVyLy4vYW5ndWxhci9zcmMvYXBwL21vZGVscy9iYXNlLm1vZGVsLnRzIiwid2VicGFjazovL2JvLXBsYW5uZXIvLi9hbmd1bGFyL3NyYy9hcHAvbW9kZWxzL2J1eS1vcmRlci5tb2RlbC50cyIsIndlYnBhY2s6Ly9iby1wbGFubmVyLy4vYW5ndWxhci9zcmMvYXBwL21vZHVsZXMvcG9wdXAvcGFnZXMvcG9wdXAvcG9wdXAuY29tcG9uZW50LnRzIiwid2VicGFjazovL2JvLXBsYW5uZXIvLi9hbmd1bGFyL3NyYy9hcHAvbW9kdWxlcy9wb3B1cC9wYWdlcy9wb3B1cC9wb3B1cC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly9iby1wbGFubmVyLy4vYW5ndWxhci9zcmMvYXBwL21vZHVsZXMvcG9wdXAvcG9wdXAtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vYm8tcGxhbm5lci8uL2FuZ3VsYXIvc3JjL2FwcC9tb2R1bGVzL3BvcHVwL3BvcHVwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9iby1wbGFubmVyLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTIwMTUvaW50ZXJuYWwvQXN5bmNTdWJqZWN0LmpzIiwid2VicGFjazovL2JvLXBsYW5uZXIvLi9ub2RlX21vZHVsZXMvcnhqcy9fZXNtMjAxNS9pbnRlcm5hbC9vYnNlcnZhYmxlL2JpbmRDYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9iby1wbGFubmVyLy4vbm9kZV9tb2R1bGVzL3J4anMvX2VzbTIwMTUvaW50ZXJuYWwvb2JzZXJ2YWJsZS90aHJvd0Vycm9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFPLE1BQU0sVUFBVTtDQUl0QjtBQUVNLE1BQU0sMEJBQTBCO0NBR3RDO0FBRU0sTUFBTSxRQUFRO0NBSXBCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2Z5QztBQUVuQyxNQUFNLFFBQVMsU0FBUSxtREFBVTtJQW9DcEMsWUFBWSxJQUFjO1FB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O0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZUFBZTtBQUMxQjtBQUNBO0FBQ0Esd0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRjJDO0FBQ3BDO0FBQ1A7QUFDQSxtQkFBbUIsbURBQVU7QUFDN0I7QUFDQTtBQUNBLG1CQUFtQixtREFBVSxnREFBZ0Qsb0JBQW9CO0FBQ2pHO0FBQ0E7QUFDQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0E7QUFDQSxzQyIsImZpbGUiOiJhbmd1bGFyX3NyY19hcHBfbW9kdWxlc19wb3B1cF9wb3B1cF9tb2R1bGVfdHMtZXMyMDE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEJhc2VFbnRpdHkge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIGNyZWF0ZWQ6IERhdGU7XHJcbiAgICB1cGRhdGVkOiBEYXRlO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hyb21lQ29tbXVuaWNhdGlvbk1lc3NhZ2U8VCA9IGFueT4ge1xyXG4gICAgdHlwZTogc3RyaW5nO1xyXG4gICAgZGF0YTogVDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEN1cnJlbmN5IHtcclxuICAgIGNvZGU6IHN0cmluZztcclxuICAgIGN1cnJlbmN5SWQ6IG51bWJlcjtcclxuICAgIHN5bWJvbDogc3RyaW5nO1xyXG59IiwiaW1wb3J0IHsgQmFzZUVudGl0eSB9IGZyb20gJy4vYmFzZS5tb2RlbCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQnV5T3JkZXIgZXh0ZW5kcyBCYXNlRW50aXR5IHtcclxuICAgIC8qKlxyXG4gICAgICogU3RlYW0gQ29tbXVuaXR5IE1hcmtldCBmdWxsIGl0ZW0gbmFtZVxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICAgKiBAbWVtYmVyb2YgQnV5T3JkZXJcclxuICAgICAqL1xyXG4gICAgaXRlbU5hbWU6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogQnV5IG9yZGVyIHByaWNlXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqIEBtZW1iZXJvZiBCdXlPcmRlclxyXG4gICAgICovXHJcbiAgICBwcmljZTogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBCdXkgb3JkZXIgYW1vdW50XHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqIEBtZW1iZXJvZiBCdXlPcmRlclxyXG4gICAgICovXHJcbiAgICBhbW91bnQ6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogQXBwIGlkIG9mIFNDTSBpdGVtXHJcbiAgICAgKlxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqIEBtZW1iZXJvZiBCdXlPcmRlclxyXG4gICAgICovXHJcbiAgICBhcHBJZDogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBJZCBvZiBjdXJyZW5jeVxyXG4gICAgICpcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKiBAbWVtYmVyb2YgQnV5T3JkZXJcclxuICAgICAqL1xyXG4gICAgY3VycmVuY3lJZDogbnVtYmVyO1xyXG4gICAgY29uc3RydWN0b3IoZGF0YTogQnV5T3JkZXIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIC8vIEFzc2lnbmluZyBkYXRhIHRvIGN1cnJlbnQgaW5zdGFuY2VcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xyXG4gICAgICAgIC8vIElmIGN1cnJlbnQgYnV5IG9yZGVyIHdhcyBwcmV2aW91c2x5IGNyZWF0ZWQgdGhlbiBzZXR0aW5nIGN1cnJlbnQgZGF0ZVxyXG4gICAgICAgIC8vIGFzIGRhdGUgd2hlbiBpdCB3YXMgdXBkYXRlZCBsYXN0IHRpbWUuIE90aGVyd2lzZSB1c2luZyBkYXRlIHdoZW4gaXQgd2FzIGNyZWF0ZWRcclxuICAgICAgICAvLyBhcyBpbml0aWFsIHZhbHVlXHJcbiAgICAgICAgdGhpcy51cGRhdGVkID0gdGhpcy5jcmVhdGVkID8gbmV3IERhdGUoKSA6ICh0aGlzLmNyZWF0ZWQgfHwgbmV3IERhdGUoKSk7XHJcbiAgICAgICAgLy8gU2V0dGluZyBjcmVhdGlvbiBkYXRlXHJcbiAgICAgICAgdGhpcy5jcmVhdGVkID0gbmV3IERhdGUoKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbmplY3QsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE5neEluZGV4ZWREQlNlcnZpY2UgfSBmcm9tICduZ3gtaW5kZXhlZC1kYic7XHJcbmltcG9ydCB7IGJpbmRDYWxsYmFjaywgb2YsIFN1YmplY3QsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQ1VSUkVOQ1kgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2N1cnJlbmNpZXMnO1xyXG5pbXBvcnQgeyBCdXlPcmRlciB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVscy9idXktb3JkZXIubW9kZWwnO1xyXG5pbXBvcnQgeyBJdGVtSW5mbyB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVscy9pdGVtLWluZm8ubW9kZWwnO1xyXG5pbXBvcnQgeyBUQUJfSUQgfSBmcm9tICcuLi8uLi8uLi8uLi9wcm92aWRlcnMvdGFiLWlkLnByb3ZpZGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXBvcHVwJyxcclxuICB0ZW1wbGF0ZVVybDogJ3BvcHVwLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsncG9wdXAuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvcHVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIC8qKlxyXG4gICAqIEluZm9ybWF0aW9uIGFib3V0IGN1cnJlbnQgaXRlbVxyXG4gICAqXHJcbiAgICogQHR5cGUge0l0ZW1JbmZvfVxyXG4gICAqIEBtZW1iZXJvZiBQb3B1cENvbXBvbmVudFxyXG4gICAqL1xyXG4gIGl0ZW1JbmZvOiBJdGVtSW5mbztcclxuICAvKipcclxuICAgKiBCdXkgb3JkZXIgcGxhbm5lciBmb3JtXHJcbiAgICpcclxuICAgKiBAdHlwZSB7Rm9ybUdyb3VwfVxyXG4gICAqIEBtZW1iZXJvZiBQb3B1cENvbXBvbmVudFxyXG4gICAqL1xyXG4gIGJvRm9ybTogRm9ybUdyb3VwO1xyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyBpZiB1c2VyIHdhbnRzIHRvIG1hbnVhbGx5IGFkZCBpbmZvcm1hdGlvblxyXG4gICAqXHJcbiAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICogQG1lbWJlcm9mIFBvcHVwQ29tcG9uZW50XHJcbiAgICovXHJcbiAgaXNNYW51YWxBZGRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgaWYgbWFudWFsIGFkZGluZyB3YXMgc3VjY2Nlc3NmdWxcclxuICAgKlxyXG4gICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAqIEBtZW1iZXJvZiBQb3B1cENvbXBvbmVudFxyXG4gICAqL1xyXG4gIGlzTWFudWFsU3VjY2VzczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8qKlxyXG4gICAqIExpc3Qgb2Yga25vd24gY3VycmVuY2llc1xyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIFBvcHVwQ29tcG9uZW50XHJcbiAgICovXHJcbiAgY3VycmVuY2llcyA9IENVUlJFTkNZO1xyXG4gIC8qKlxyXG4gICAqIEVycm9yIG1lc3NhZ2VcclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICogQG1lbWJlcm9mIFBvcHVwQ29tcG9uZW50XHJcbiAgICovXHJcbiAgZXJyb3I6IHN0cmluZyA9ICcnO1xyXG4gIC8qKlxyXG4gICAqIFN1YmplY3QgdGhhdCBpcyByZXNwb25zaWJsZSBmb3IgdW5zdWJzY3JpYmluZyB3aGVuIGNvbXBvbmVudCBnZXRzIGRlc3Ryb3llZFxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAdHlwZSB7U3ViamVjdDxib29sZWFuPn1cclxuICAgKiBAbWVtYmVyb2YgUG9wdXBDb21wb25lbnRcclxuICAgKi9cclxuICBwcml2YXRlIGRlc3Ryb3kkOiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KFRBQl9JRCkgcmVhZG9ubHkgdGFiSWQ6IG51bWJlcixcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLFxyXG4gICAgcHJpdmF0ZSBkYlNlcnZpY2U6IE5neEluZGV4ZWREQlNlcnZpY2UsXHJcbiAgKSB7XHJcbiAgICB0aGlzLmNyZWF0ZUZvcm0oKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5pbml0SW5mbygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAvLyBDb21wbGV0aW5nIHN1YnNjcmlwdGlvbnNcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1ldGhvZCBzYXZlcyBidXkgb3JkZXIgcGxhblxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIFBvcHVwQ29tcG9uZW50XHJcbiAgICovXHJcbiAgc2F2ZSgpIHtcclxuICAgIC8vIElmIHdlIGhhdmUgXCJjcmVhdGVkXCIgcHJvcGVydHkgaXQgbWVhbnMgdGhhdCBidXkgb3JkZXIgd2FzIGFscmVhZHkgY3JlYXRlZCBhbmRcclxuICAgIC8vIHdlIG5lZWQgdG8gdXBkYXRlIGl0LiBPdGhlcndpc2UgY3JlYXRpbmcgbmV3IG9uZVxyXG4gICAgaWYgKCF0aGlzLmlzTWFudWFsQWRkaW5nICYmIHRoaXMuaXRlbUluZm8uY3JlYXRlZCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUJ1eU9yZGVyKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNyZWF0ZUJ1eU9yZGVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNZXRob2QgcmVkaXJlY3RzIHVzZXIgdG8gU3RlYW0gQ29tbXVuaXR5IE1hcmtldCBwYWdlXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgUG9wdXBDb21wb25lbnRcclxuICAgKi9cclxuICBnb1RvU0NNKCkge1xyXG4gICAgLy8gQ2hhbmdpbmcgY3VycmVudCB0YWIgdG8gU0NNIHZpYSByZWRpcmVjdFxyXG4gICAgY2hyb21lLnRhYnMudXBkYXRlKHsgdXJsOiBcImh0dHBzOi8vc3RlYW1jb21tdW5pdHkuY29tL21hcmtldFwiIH0sICgpID0+IHtcclxuICAgICAgLy8gQ2xvc2luZyBwb3B1cCBhZnRlciByZWRpcmVjdFxyXG4gICAgICB3aW5kb3cuY2xvc2UoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTWV0aG9kIG9wZW5zIGEgbmV3IHRhYiB3aXRoIHBsYW5uZWQgYnV5IG9yZGVyIGxpc3QgKG9wdGlvbnMgcGFnZSlcclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBQb3B1cENvbXBvbmVudFxyXG4gICAqL1xyXG4gIGdvVG9QbGFubmVkTGlzdCgpIHtcclxuICAgIGNocm9tZS5ydW50aW1lLm9wZW5PcHRpb25zUGFnZSgoKSA9PiB7XHJcbiAgICAgIC8vIENsb3NpbmcgcG9wdXAgYWZ0ZXIgcmVkaXJlY3RcclxuICAgICAgd2luZG93LmNsb3NlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1ldGhvZCBzZW5kcyBzaWduYWwgdG8gY29udGVudFBhZ2UgdG8gb3BlbiBidXkgb3JkZXIgbW9kYWxcclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBQb3B1cENvbXBvbmVudFxyXG4gICAqL1xyXG4gIG9wZW5QbGFjZUJ1eU9yZGVyV2luZG93KCkge1xyXG4gICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGhpcy50YWJJZCwge1xyXG4gICAgICB0eXBlOiAnb3BlbkJPTW9kYWwnLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcHJpY2U6IHRoaXMuaXRlbUluZm8ucHJpY2UsXHJcbiAgICAgICAgYW1vdW50OiB0aGlzLml0ZW1JbmZvLmFtb3VudCxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNZXRob2QgbWFya3MgbWFudWFsIGFkZGluZyBhcyBlbmFibGVkIHdpdGggYWxsIG5lY2Vzc2FyeSBzZXR1cFxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIFBvcHVwQ29tcG9uZW50XHJcbiAgICovXHJcbiAgb3Blbk1hbnVhbEFkZCgpIHtcclxuICAgIHRoaXMuaXNNYW51YWxBZGRpbmcgPSB0cnVlO1xyXG4gICAgLy8gQWRkaW5nIFJFUVVJUkVEIHZhbGlkYXRvcnMgY2F1c2Ugd2UgbmVlZCB2YWx1ZXNcclxuICAgIHRoaXMuYm9Gb3JtLmdldCgnYXBwSWQnKS5zZXRWYWxpZGF0b3JzKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xyXG4gICAgdGhpcy5ib0Zvcm0uZ2V0KCdjdXJyZW5jeUlkJykuc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLnJlcXVpcmVkKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1ldGhvZCBjbGVhcnMgc3VjY2VzcyBtZXNzYWdlIChoaWRlIGZyb20gZGlzcGxheSlcclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBQb3B1cENvbXBvbmVudFxyXG4gICAqL1xyXG4gIGNsZWFyU3VjY2Vzc01lc3NhZ2UoKSB7XHJcbiAgICB0aGlzLmlzTWFudWFsU3VjY2VzcyA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTWV0aG9kIGluaXRpYWxpemVzIHBvcHVwIGJhc2VkIG9uIGluZm9ybWF0aW9uIGdhdGhlcmVkIGZyb20gY3VycmVudCBwYWdlXHJcbiAgICpcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIEBtZW1iZXJvZiBQb3B1cENvbXBvbmVudFxyXG4gICAqL1xyXG4gIHByaXZhdGUgaW5pdEluZm8oKSB7XHJcbiAgICAvLyBTZW5kaW5nIHNpZ25hbCB0byBjb250ZW50IHBhZ2UgdG8gZ2F0aGVyIGluZm9ybWF0aW9uIGZyb20gcGFnZSBpdHNlbGZcclxuICAgIGJpbmRDYWxsYmFjazxhbnk+KGNocm9tZS50YWJzLnNlbmRNZXNzYWdlLmJpbmQodGhpcywgdGhpcy50YWJJZCwgeyB0eXBlOiAnZ2V0SW5mb0Zyb21QYWdlJyB9KSkoKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICAvLyBJZiB0aGVyZSB3YXMgYW4gZXJyb3IsIHJldHVybmluZyB1bmRlZmluZWQuIE90aGVyd2lzZSBnaXZpbmcgaW5mbyBmcm9tIHRoZWUgcGFnZVxyXG4gICAgICAgIG1hcChpbmZvID0+IGNocm9tZS5ydW50aW1lLmxhc3RFcnJvciA/IHVuZGVmaW5lZCA6IGluZm8pLFxyXG4gICAgICAgIHN3aXRjaE1hcChpbmZvID0+IHtcclxuICAgICAgICAgIC8vIElmIHdlIGhhdmUgaW5mbyBmcm9tIHBhZ2UgdGhlbiBnZXR0aW5nIHN0b3JlZCBpbmZvcm1hdGlvbiBhYm91dCB0aGlzIGl0ZW0gZnJvbSBJbmRleGVkREJcclxuICAgICAgICAgIGlmIChpbmZvKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRiU2VydmljZS5nZXRCeUluZGV4KCdvcmRlcnMnLCAnaXRlbU5hbWUnLCBpbmZvLml0ZW1OYW1lKVxyXG4gICAgICAgICAgICAgIC5waXBlKG1hcChib0VudGl0eSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGluZyBjdXJyZW50IGluZm8gb2JqZWN0IHdpdGggaW5mb3JtYXRpb24gZnJvbSBEQlxyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihpbmZvLCBib0VudGl0eSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5mbztcclxuICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgLy8gSWYgdGhlcmUgaXMgbm8gaW5mbyB0aGVuIHJlZXR1cm5pbmcgc2FtZSBpbmZvIG9iamVjdFxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9mKGluZm8pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKGluZm8gPT4ge1xyXG4gICAgICAgIC8vIFN0b3JpbmcgaW5mb3JtYXRpb24gZm9yIGZ1cnRoZXIgdXNhZ2UgT05MWSBpZiB1c2VyIGlzIGN1cnJlbnRseSBvbiBpdGVtIGluZm8gcGFnZS5cclxuICAgICAgICAvLyBPdGhlcndpc2Ugd2UgY2FuJ3QgZ2V0IGFueSBpbmZvcm1hdGlvbiBhbmQgc2hvdWxkIHNob3cgaW5mb3JtYXRpdmUgbWVzc2FnZSBzbyB1c2VyXHJcbiAgICAgICAgLy8gZ29lcyB0byBzcGVjaWZpYyBTQ00gaXRlbVxyXG4gICAgICAgIGlmIChpbmZvPy5wYWdlVXJsPy5pbmNsdWRlcygnL21hcmtldC9saXN0aW5ncy8nKSkge1xyXG4gICAgICAgICAgdGhpcy5pdGVtSW5mbyA9IGluZm87XHJcbiAgICAgICAgICAvLyBVcGRhdGluZyBmb3JtIHZhbHVlXHJcbiAgICAgICAgICB0aGlzLmJvRm9ybS5wYXRjaFZhbHVlKGluZm8pO1xyXG4gICAgICAgICAgLy8gVHJpZ2dlcmluZyBjaGFuZ2UgZGV0ZWN0aW9uIHNpbmNlIHRoZXJlIGFyZSBjaGFuZ2VzIHRoYXQgdmlldyBuZWVkcyB0byByZS1yZW5kZXJcclxuICAgICAgICAgIC8vIGFuZCBmb3Igc29tZSByZWFzb24gaXQgZG9lc24ndCBoYXBwZW4gYXV0b21hdGljYWxseS4gTWF5YmUgZHVlIGNocm9tZSBleHRlbnNpb25cclxuICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTWV0aG9kIGNyZWF0ZXMgbmV3IGJ1eSBvcmRlciBwbGFuIGFuZCBzdG9yZXMgaXQgaW4gREJcclxuICAgKlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQG1lbWJlcm9mIFBvcHVwQ29tcG9uZW50XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBjcmVhdGVCdXlPcmRlcigpIHtcclxuICAgIC8vIENyZWF0aW5nIG5ldyBlbnRpdHkgYmFzZWQgb24gaW5mbyBvbiBmb3JtXHJcbiAgICBjb25zdCBuZXdCT0VudGl0eSA9IG5ldyBCdXlPcmRlcih0aGlzLmJvRm9ybS52YWx1ZSk7XHJcblxyXG4gICAgLy8gQ2hlY2tpbmcgaWYgaXRlbSB3aXRoIHNhbWUgbmFtZSBpcyBhbHJlYWR5IGFkZGVkXHJcbiAgICB0aGlzLmRiU2VydmljZS5nZXRCeUluZGV4KCdvcmRlcnMnLCAnaXRlbU5hbWUnLCBuZXdCT0VudGl0eS5pdGVtTmFtZSlcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgc3dpdGNoTWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgLy8gSWYgaXRlbSBleGlzdHMgdGhlbiB0aHJvd2luZyBlcnJvclxyXG4gICAgICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoJ0l0ZW0gd2l0aCB0aGlzIG5hbWUgYWxyZWFkeSBleGlzdHMnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGRpbmcgaXRlbVxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZGJTZXJ2aWNlLmFkZCgnb3JkZXJzJywgbmV3Qk9FbnRpdHkpO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgLy8gSWYgdXNlciBtYW51YWxseSBhZGRzIGl0ZW0gdGhlbiBkaXNwbGF5aW5nIHN1Y2Nlc3MgYW5kIHJlc2V0dGluZyBmb3JtXHJcbiAgICAgICAgLy8gc28gaGUgY2FuIGRvIGl0IGFnYWluXHJcbiAgICAgICAgaWYgKHRoaXMuaXNNYW51YWxBZGRpbmcpIHtcclxuICAgICAgICAgIHRoaXMuYm9Gb3JtLnJlc2V0KHsgcHJpY2U6IDAsIGFtb3VudDogMSB9KTtcclxuICAgICAgICAgIHRoaXMuYm9Gb3JtLm1hcmtBc1VudG91Y2hlZCgpO1xyXG4gICAgICAgICAgdGhpcy5pc01hbnVhbFN1Y2Nlc3MgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBVcGRhdGluZyBmb3JtIHZhbHVlIHdpdGggbGF0ZXN0IHVwZGF0ZVxyXG4gICAgICAgICAgdGhpcy5ib0Zvcm0ucGF0Y2hWYWx1ZShyZXN1bHQpO1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVJdGVtSW5mbyhyZXN1bHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2xlYXJpbmcgZXJyb3IgbWVzc2FnZSB3aGVuIGFsbCBpcyBkb25lXHJcbiAgICAgICAgdGhpcy5lcnJvciA9ICcnXHJcblxyXG4gICAgICAgIC8vIFRyaWdnZXJpbmcgY2hhbmdlIGRldGVjdGlvbiBzaW5jZSB0aGVyZSBhcmUgY2hhbmdlcyB0aGF0IHZpZXcgbmVlZHMgdG8gcmUtcmVuZGVyXHJcbiAgICAgICAgLy8gYW5kIGZvciBzb21lIHJlYXNvbiBpdCBkb2Vzbid0IGhhcHBlbiBhdXRvbWF0aWNhbGx5LiBNYXliZSBkdWUgY2hyb21lIGV4dGVuc2lvblxyXG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgfSwgZXJyID0+IHtcclxuICAgICAgICAvLyBTZXR0aW5nIGVycm9yIG1lc3NhZ2UgZm9yIGRpc3BsYXlcclxuICAgICAgICB0aGlzLmVycm9yID0gZXJyO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1ldGhvZCB1cGRhdGVzIGJ1eSBvcmRlciBwbGFuIGFuZCBzYXZlcyBpdCB0byBEQlxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAbWVtYmVyb2YgUG9wdXBDb21wb25lbnRcclxuICAgKi9cclxuICBwcml2YXRlIHVwZGF0ZUJ1eU9yZGVyKCkge1xyXG4gICAgLy8gVXBkYXRpbmcgY3VycmVudCBpdGVtIGluZm8gd2l0aCBkYXRhIGluIGZvcm1cclxuICAgIGNvbnN0IHVwZGF0ZWRCdXlPcmRlciA9IE9iamVjdC5hc3NpZ24odGhpcy5pdGVtSW5mbywgdGhpcy5ib0Zvcm0udmFsdWUpO1xyXG4gICAgLy8gQ3JlYXRpbmcgZW50aXR5IGZvciBzYXZlXHJcbiAgICBjb25zdCB1cGRhdGVkQk9FbnRpdHkgPSBuZXcgQnV5T3JkZXIodXBkYXRlZEJ1eU9yZGVyKTtcclxuICAgIC8vIFVwZGF0aW5nIGluIERCXHJcbiAgICB0aGlzLmRiU2VydmljZS51cGRhdGUoJ29yZGVycycsIHVwZGF0ZWRCT0VudGl0eSlcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxyXG4gICAgICApXHJcbiAgICAgIC5zdWJzY3JpYmUocmVzdWx0cyA9PiB7XHJcbiAgICAgICAgLy8gVXBkYXRpbmcgZm9ybSB2YWx1ZSB3aXRoIHVwZGF0ZWQgZW50aXR5LiBPdGhlcndpc2Ugd2Ugd291bGQgaGF2ZSB0byBzZWFyY2ggZm9yIGl0IGluIGFsbCByZXN1bHRzXHJcbiAgICAgICAgdGhpcy5ib0Zvcm0ucGF0Y2hWYWx1ZSh1cGRhdGVkQk9FbnRpdHkpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlSXRlbUluZm8odXBkYXRlZEJPRW50aXR5KTtcclxuICAgICAgICAvLyBUcmlnZ2VyaW5nIGNoYW5nZSBkZXRlY3Rpb24gc2luY2UgdGhlcmUgYXJlIGNoYW5nZXMgdGhhdCB2aWV3IG5lZWRzIHRvIHJlLXJlbmRlclxyXG4gICAgICAgIC8vIGFuZCBmb3Igc29tZSByZWFzb24gaXQgZG9lc24ndCBoYXBwZW4gYXV0b21hdGljYWxseS4gTWF5YmUgZHVlIGNocm9tZSBleHRlbnNpb25cclxuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTWV0aG9kIHVwZGF0ZXMgY3VycmVudGx5IHN0b3JlZCBpdGVtIGluZm8gd2l0aCBsYXRlc3QgY2hhbmdlcyAoZnJvbSBJbmRleGVkIERCKVxyXG4gICAqXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBAcGFyYW0ge0J1eU9yZGVyfSBib0VudGl0eSBTdG9yZWQvdXBkYXRlZCBlbnRpdHkgaW4gSW5kZXhlZERCLiBUaGVzZSB2YWx1ZXMgd2lsbCBiZSBhZGRlZCB0byBpdGVtIGluZm9cclxuICAgKiBAbWVtYmVyb2YgUG9wdXBDb21wb25lbnRcclxuICAgKi9cclxuICBwcml2YXRlIHVwZGF0ZUl0ZW1JbmZvKGJvRW50aXR5OiBCdXlPcmRlcikge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLml0ZW1JbmZvLCBib0VudGl0eSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUZvcm0oKSB7XHJcbiAgICB0aGlzLmJvRm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xyXG4gICAgICBpdGVtTmFtZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgcHJpY2U6IFswLCBbVmFsaWRhdG9ycy5taW4oMCksIFZhbGlkYXRvcnMucmVxdWlyZWRdXSxcclxuICAgICAgYW1vdW50OiBbMSwgW1ZhbGlkYXRvcnMubWluKDEpLCBWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXHJcbiAgICAgIGFwcElkOiBbbnVsbF0sXHJcbiAgICAgIGN1cnJlbmN5SWQ6IFtudWxsXSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGlkPVwicGFnZS13cmFwcGVyXCI+XG4gIDxoM1xuICAgIGNsYXNzPVwidGl0bGUgdXBwZXJjYXNlIHRleHQteGwgbWItMyBteC1hdXRvIHRleHQtY2VudGVyIGZvbnQtc2VtaWJvbGQgcHQtMCB0cmFja2luZy13aWRlc3QgdGV4dC1ncmF5LTkwMCByb3VuZGVkLWxnIGRhcmstbW9kZTp0ZXh0LXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiPlxuICAgIEJ1eSBvcmRlciBwbGFubmVyXG4gIDwvaDM+XG5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIml0ZW1JbmZvIHx8IGlzTWFudWFsQWRkaW5nOyBlbHNlIGdvVG9TQ01MaXN0aW5nVG1wbFwiPlxuICAgIDxmb3JtXG4gICAgICBjbGFzcz1cInctMTAwIGJnLXdoaXRlIHB4LTQgcHQtNFwiXG4gICAgICBbZm9ybUdyb3VwXT1cImJvRm9ybVwiXG4gICAgICAobmdTdWJtaXQpPVwic2F2ZSgpXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibWItNFwiPlxuICAgICAgICA8bGFiZWxcbiAgICAgICAgICBmb3I9XCJpdGVtTmFtZVwiXG4gICAgICAgICAgY2xhc3M9XCJibG9jayB0ZXh0LWdyYXktNTAwIGZvbnQtbWVkaXVtIHRleHQtc20gbWItMlwiXG4gICAgICAgICAgPkZ1bGwgaXRlbSBuYW1lPC9sYWJlbFxuICAgICAgICA+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICAgICdyaW5nLTIgcmluZy1yZWQtNjAwJzpcbiAgICAgICAgICAgICAgYm9Gb3JtLmdldCgnaXRlbU5hbWUnKS50b3VjaGVkICYmIGJvRm9ybS5nZXQoJ2l0ZW1OYW1lJykuaW52YWxpZFxuICAgICAgICAgIH1cIlxuICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cIml0ZW1OYW1lXCJcbiAgICAgICAgICAoZm9jdXMpPVwiY2xlYXJTdWNjZXNzTWVzc2FnZSgpXCJcbiAgICAgICAgICBhdXRvZm9jdXNcbiAgICAgICAgICBuYW1lPVwiaXRlbU5hbWVcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGl0ZW0gbmFtZVwiXG4gICAgICAgICAgY2xhc3M9XCJiZy1ncmF5LTIwMCBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyLTIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtNCB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLXdoaXRlIGZvY3VzOmJvcmRlci1wdXJwbGUtNTAwXCIgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNFwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgZm9yPVwiYm9QcmljZVwiXG4gICAgICAgICAgICBjbGFzcz1cImJsb2NrIHRleHQtZ3JheS01MDAgZm9udC1tZWRpdW0gdGV4dC1zbSBtYi0yXCJcbiAgICAgICAgICAgID5QcmljZTwvbGFiZWxcbiAgICAgICAgICA+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgICAgICdyaW5nLTIgcmluZy1yZWQtNjAwJzpcbiAgICAgICAgICAgICAgICBib0Zvcm0uZ2V0KCdwcmljZScpLnRvdWNoZWQgJiYgYm9Gb3JtLmdldCgncHJpY2UnKS5pbnZhbGlkXG4gICAgICAgICAgICB9XCJcbiAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInByaWNlXCJcbiAgICAgICAgICAgIG5hbWU9XCJib1ByaWNlXCJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgbWluPVwiMFwiXG4gICAgICAgICAgICBzdGVwPVwiMC4wMVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJ1eSBvcmRlciBwcmljZVwiXG4gICAgICAgICAgICBjbGFzcz1cImJnLWdyYXktMjAwIGFwcGVhcmFuY2Utbm9uZSBib3JkZXItMiBib3JkZXItZ3JheS0yMDAgcm91bmRlZCB3LWZ1bGwgcHktMiBweC00IHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6Ym9yZGVyLXB1cnBsZS01MDBcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgIGZvcj1cImJvQW1vdW50XCJcbiAgICAgICAgICAgIGNsYXNzPVwiYmxvY2sgdGV4dC1ncmF5LTUwMCBmb250LW1lZGl1bSB0ZXh0LXNtIG1iLTJcIlxuICAgICAgICAgICAgPkFtb3VudCB0byBidXk8L2xhYmVsXG4gICAgICAgICAgPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgW25nQ2xhc3NdPVwie1xuICAgICAgICAgICAgICAncmluZy0yIHJpbmctcmVkLTYwMCc6XG4gICAgICAgICAgICAgICAgYm9Gb3JtLmdldCgnYW1vdW50JykudG91Y2hlZCAmJiBib0Zvcm0uZ2V0KCdhbW91bnQnKS5pbnZhbGlkXG4gICAgICAgICAgICB9XCJcbiAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cImFtb3VudFwiXG4gICAgICAgICAgICBuYW1lPVwiYm9BbW91bnRcIlxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBtaW49XCIxXCJcbiAgICAgICAgICAgIHN0ZXA9XCIxXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQW1vdW50IHRvIGJ1eVwiXG4gICAgICAgICAgICBjbGFzcz1cImJnLWdyYXktMjAwIGFwcGVhcmFuY2Utbm9uZSBib3JkZXItMiBib3JkZXItZ3JheS0yMDAgcm91bmRlZCB3LWZ1bGwgcHktMiBweC00IHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6Ym9yZGVyLXB1cnBsZS01MDBcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNCBtdC00XCIgKm5nSWY9XCJpc01hbnVhbEFkZGluZ1wiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgZm9yPVwiYXBwSWRcIlxuICAgICAgICAgICAgY2xhc3M9XCJibG9jayB0ZXh0LWdyYXktNTAwIGZvbnQtbWVkaXVtIHRleHQtc20gbWItMlwiXG4gICAgICAgICAgICA+QXBwIElEPC9sYWJlbFxuICAgICAgICAgID5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICAgICAgJ3JpbmctMiByaW5nLXJlZC02MDAnOlxuICAgICAgICAgICAgICAgIGJvRm9ybS5nZXQoJ2FwcElkJykudG91Y2hlZCAmJiBib0Zvcm0uZ2V0KCdhcHBJZCcpLmludmFsaWRcbiAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiYXBwSWRcIlxuICAgICAgICAgICAgbmFtZT1cImFwcElkXCJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgbWluPVwiMFwiXG4gICAgICAgICAgICBzdGVwPVwiMVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkdhbWUgYXBwIElEXCJcbiAgICAgICAgICAgIGNsYXNzPVwiYmctZ3JheS0yMDAgYXBwZWFyYW5jZS1ub25lIGJvcmRlci0yIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkIHctZnVsbCBweS0yIHB4LTQgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpiZy13aGl0ZSBmb2N1czpib3JkZXItcHVycGxlLTUwMFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgZm9yPVwiY3VycmVuY3lcIlxuICAgICAgICAgICAgY2xhc3M9XCJibG9jayB0ZXh0LWdyYXktNTAwIGZvbnQtbWVkaXVtIHRleHQtc20gbWItMlwiXG4gICAgICAgICAgICA+Q3VycmVuY3k8L2xhYmVsXG4gICAgICAgICAgPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICAgICAgICAgICdyaW5nLTIgcmluZy1yZWQtNjAwJzpcbiAgICAgICAgICAgICAgICAgICAgYm9Gb3JtLmdldCgnY3VycmVuY3lJZCcpLnRvdWNoZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgYm9Gb3JtLmdldCgnY3VycmVuY3lJZCcpLmludmFsaWRcbiAgICAgICAgICAgICAgICB9XCJcbiAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJjdXJyZW5jeUlkXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tc2VsZWN0IGFwcGVhcmFuY2Utbm9uZSBiZy1ncmF5LTIwMGJvcmRlci0yIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkIHctZnVsbCBweS0yIHB4LTQgdGV4dC1ncmF5LTcwMCBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpiZy13aGl0ZSBmb2N1czpib3JkZXItcHVycGxlLTUwMFwiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkN1cnJlbmN5IHNlbGVjdFwiPlxuICAgICAgICAgICAgICAgIDxvcHRpb25cbiAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBjdXJyZW5jeSBvZiBjdXJyZW5jaWVzXCJcbiAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJjdXJyZW5jeS5jdXJyZW5jeUlkXCI+XG4gICAgICAgICAgICAgICAgICB7eyBjdXJyZW5jeS5jb2RlIH19XG4gICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImN1cnJlbmN5LnN5bWJvbFwiPih7eyBjdXJyZW5jeS5zeW1ib2wgfX0pPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgW2Rpc2FibGVkXT1cImJvRm9ybS5pbnZhbGlkXCJcbiAgICAgICAgICBbbmdDbGFzc109XCJ7ICdvcGFjaXR5LTUwIGN1cnNvci1ub3QtYWxsb3dlZCc6IGJvRm9ybS5pbnZhbGlkIH1cIlxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgIGNsYXNzPVwidy0zLzUgYmxvY2sgbXgtYXV0byBzaGFkb3cgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgYmctcHVycGxlLTgwMCBob3ZlcjpiZy1wdXJwbGUtOTAwIGZvY3VzOnNoYWRvdy1vdXRsaW5lIGZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBtdC00XCI+XG4gICAgICAgICAgU2F2ZVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cblxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwibS00IG10LTAgcHQtOFwiXG4gICAgICAqbmdJZj1cIlxuICAgICAgICAhaXNNYW51YWxBZGRpbmcgJiZcbiAgICAgICAgKCFpdGVtSW5mbz8uYWN0aXZlQk9QcmljZSB8fCAhaXRlbUluZm8/LmFjdGl2ZUJPQW1vdW50KVxuICAgICAgXCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIChjbGljayk9XCJvcGVuUGxhY2VCdXlPcmRlcldpbmRvdygpXCJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzPVwidy1mdWxsIGJsb2NrIG14LWF1dG8gc2hhZG93IHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IGJnLWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi02MDAgZm9jdXM6c2hhZG93LW91dGxpbmUgZm9jdXM6b3V0bGluZS1ub25lIHRleHQtd2hpdGUgZm9udC1ib2xkIHRleHQteGwgcHktMiBweC00IHJvdW5kZWQgbWItNFwiPlxuICAgICAgICBQTEFDRSBCVVkgT1JERVJcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdlxuICAgICAgKm5nSWY9XCJpdGVtSW5mbz8uYWN0aXZlQk9QcmljZSAmJiBpdGVtSW5mbz8uYWN0aXZlQk9BbW91bnRcIlxuICAgICAgY2xhc3M9XCJiZy15ZWxsb3ctMTAwIGJvcmRlci1sLTQgYm9yZGVyLXllbGxvdy01MDAgdGV4dC15ZWxsb3ctNzAwIHAtNCBtdC02IG1iLTNcIlxuICAgICAgcm9sZT1cImFsZXJ0XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gZm9udC1ib2xkIHRleHQtc21cIj5cbiAgICAgICAgPHA+QWN0aXZlIGJ1eSBvcmRlcjwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAge3sgaXRlbUluZm8/LmFjdGl2ZUJPQW1vdW50IH19IHgge3sgaXRlbUluZm8/LmFjdGl2ZUJPUHJpY2VTdHJpbmcgfX1cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8cD5Zb3UgYWxyZWFkeSBoYXZlIGFuIGFjdGl2ZSBidXkgb3JkZXIgZm9yIHRoaXMgaXRlbS48L3A+XG4gICAgPC9kaXY+XG4gICAgPGRpdlxuICAgICAgKm5nSWY9XCJpc01hbnVhbEFkZGluZyAmJiBpc01hbnVhbFN1Y2Nlc3NcIlxuICAgICAgY2xhc3M9XCJiZy1ncmVlbi0xMDAgYm9yZGVyLWwtNCBib3JkZXItZ3JlZW4tNTAwIHRleHQtZ3JlZW4tNzAwIHAtNCBtdC02IG1iLTNcIlxuICAgICAgcm9sZT1cImFsZXJ0XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gZm9udC1ib2xkIHRleHQtbWRcIj5cbiAgICAgICAgPHA+SXRlbSB3YXMgYWRkZWQ8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2XG4gICAgICAqbmdJZj1cImVycm9yXCJcbiAgICAgIGNsYXNzPVwiYmctcmVkLTEwMCBib3JkZXItbC00IGJvcmRlci1yZWQtNTAwIHRleHQtcmVkLTcwMCBwLTQgbXQtNiBtYi0zXCJcbiAgICAgIHJvbGU9XCJhbGVydFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGZvbnQtYm9sZCB0ZXh0LW1kXCI+XG4gICAgICAgIDxwPnt7IGVycm9yIH19PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDxuZy10ZW1wbGF0ZSAjZ29Ub1NDTUxpc3RpbmdUbXBsPlxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwiYmctZ3JlZW4tNTAgYm9yZGVyLXQtNCBib3JkZXItZ3JlZW4tNDAwIHJvdW5kZWQtYiB0ZXh0LWdyZWVuLTYwMCBweC00IHB5LTMgc2hhZG93LW1kXCJcbiAgICAgIHJvbGU9XCJhbGVydFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInB5LTFcIj5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICBjbGFzcz1cImZpbGwtY3VycmVudCBoLTYgdy02IHRleHQtZ3JlZW4tNDAwIG1yLTRcIlxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCI+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBkPVwiTTIuOTMgMTcuMDdBMTAgMTAgMCAxIDEgMTcuMDcgMi45MyAxMCAxMCAwIDAgMSAyLjkzIDE3LjA3em0xMi43My0xLjQxQTggOCAwIDEgMCA0LjM0IDQuMzRhOCA4IDAgMCAwIDExLjMyIDExLjMyek05IDExVjloMnY2SDl2LTR6bTAtNmgydjJIOVY1elwiIC8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cImZvbnQtYm9sZCB0ZXh0LXNtXCI+XG4gICAgICAgICAgICBUaGlzIGV4dGVuc2lvbiB3b3JrcyBvbmx5IG9uIFNDTSBsaXN0aW5nIHBhZ2UuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInctZnVsbCBtYi01XCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIChjbGljayk9XCJnb1RvU0NNKClcIlxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgcmVsPVwibm9mb2xsb3dcIlxuICAgICAgICBjbGFzcz1cInctMy81IGJsb2NrIHRleHQtY2VudGVyIG14LWF1dG8gc2hhZG93IHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IGJnLXllbGxvdy02MDAgaG92ZXI6YmcteWVsbG93LTcwMCBmb2N1czpzaGFkb3ctb3V0bGluZSBmb2N1czpvdXRsaW5lLW5vbmUgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgbXQtNFwiPlxuICAgICAgICBHbyB0byBtYXJrZXQgcGFnZVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwicmVsYXRpdmUgZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LWdyb3cgYm9yZGVyLXQgYm9yZGVyLWdyYXktNDAwXCI+PC9kaXY+XG4gICAgICA8c3BhbiBjbGFzcz1cImZsZXgtc2hyaW5rIG14LTRcIj5PUjwvc3Bhbj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LWdyb3cgYm9yZGVyLXQgYm9yZGVyLWdyYXktNDAwXCI+PC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIG1iLTVcIj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgKGNsaWNrKT1cIm9wZW5NYW51YWxBZGQoKVwiXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICByZWw9XCJub2ZvbGxvd1wiXG4gICAgICAgIGNsYXNzPVwidy0zLzUgYmxvY2sgdGV4dC1jZW50ZXIgbXgtYXV0byBzaGFkb3cgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgYmctZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTYwMCBmb2N1czpzaGFkb3ctb3V0bGluZSBmb2N1czpvdXRsaW5lLW5vbmUgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgbXQtNFwiPlxuICAgICAgICBNYW51YWxseSBhZGQgaXRlbSBpbmZvcm1hdGlvblxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvbmctdGVtcGxhdGU+XG5cbiAgPHAgY2xhc3M9XCJtYi0yXCIgKm5nSWY9XCJpdGVtSW5mbz8udXBkYXRlZFwiPlxuICAgIExhc3QgdXBkYXRlOiB7eyBpdGVtSW5mby51cGRhdGVkIHwgZGF0ZTogJ21lZGl1bScgfX1cbiAgPC9wPlxuXG4gIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgdy1mdWxsXCI+XG4gICAgPGJ1dHRvblxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICBjbGFzcz1cImZsZXggdGV4dC1ibGFjayBob3Zlcjp0ZXh0LWJsdWUtOTAwIGR1cmF0aW9uLTIwMCBiYWNrZ3JvdW5kLXRyYW5zcGFyZW50IGZvbnQtYm9sZCB1cHBlcmNhc2UgcHgtMCBweS0xIHRleHQteHMgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBtci0xIG1iLTEgZWFzZS1saW5lYXIgdHJhbnNpdGlvbi1hbGxcIj5cbiAgICAgIDxzdmdcbiAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgIHdpZHRoPVwiMTZcIlxuICAgICAgICBoZWlnaHQ9XCIxNlwiXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICBjbGFzcz1cIm1yLTFcIlxuICAgICAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZD1cIk04IDBDMy41OCAwIDAgMy41OCAwIDhjMCAzLjU0IDIuMjkgNi41MyA1LjQ3IDcuNTkuNC4wNy41NS0uMTcuNTUtLjM4IDAtLjE5LS4wMS0uODItLjAxLTEuNDktMi4wMS4zNy0yLjUzLS40OS0yLjY5LS45NC0uMDktLjIzLS40OC0uOTQtLjgyLTEuMTMtLjI4LS4xNS0uNjgtLjUyLS4wMS0uNTMuNjMtLjAxIDEuMDguNTggMS4yMy44Mi43MiAxLjIxIDEuODcuODcgMi4zMy42Ni4wNy0uNTIuMjgtLjg3LjUxLTEuMDctMS43OC0uMi0zLjY0LS44OS0zLjY0LTMuOTUgMC0uODcuMzEtMS41OS44Mi0yLjE1LS4wOC0uMi0uMzYtMS4wMi4wOC0yLjEyIDAgMCAuNjctLjIxIDIuMi44Mi42NC0uMTggMS4zMi0uMjcgMi0uMjcuNjggMCAxLjM2LjA5IDIgLjI3IDEuNTMtMS4wNCAyLjItLjgyIDIuMi0uODIuNDQgMS4xLjE2IDEuOTIuMDggMi4xMi41MS41Ni44MiAxLjI3LjgyIDIuMTUgMCAzLjA3LTEuODcgMy43NS0zLjY1IDMuOTUuMjkuMjUuNTQuNzMuNTQgMS40OCAwIDEuMDctLjAxIDEuOTMtLjAxIDIuMiAwIC4yMS4xNS40Ni41NS4zOEE4LjAxMiA4LjAxMiAwIDAgMCAxNiA4YzAtNC40Mi0zLjU4LTgtOC04elwiIC8+XG4gICAgICA8L3N2Zz5cbiAgICAgIDxhXG4gICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vNm1hdGtvL2JvLXBsYW5uZXJcIlxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICBjbGFzcz1cImhvdmVyOnRleHQtYmx1ZS05MDAgZHVyYXRpb24tMjAwXCJcbiAgICAgICAgcmVsPVwibm9yZWZlcnJlciBub2ZvbGxvd1wiPlxuICAgICAgICBHaXRodWJcbiAgICAgIDwvYT5cbiAgICA8L2J1dHRvbj5cbiAgICA8c21hbGxcbiAgICAgID5ieVxuICAgICAgPGFcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vc3RlYW1jb21tdW5pdHkuY29tL2lkLzZtYXRrby9cIlxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICByZWw9XCJub3JlZmVycmVyIG5vZm9sbG93XCJcbiAgICAgICAgY2xhc3M9XCJob3Zlcjp0ZXh0LWJsdWUtOTAwIGR1cmF0aW9uLTIwMFwiXG4gICAgICAgID42bWF0a288L2FcbiAgICAgID48L3NtYWxsXG4gICAgPlxuICAgIDxidXR0b25cbiAgICAgIChjbGljayk9XCJnb1RvUGxhbm5lZExpc3QoKVwiXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIGNsYXNzPVwidGV4dC1ibHVlLTUwMCBob3Zlcjp0ZXh0LWJsdWUtOTAwIGR1cmF0aW9uLTIwMCBiYWNrZ3JvdW5kLXRyYW5zcGFyZW50IGZvbnQtYm9sZCB1cHBlcmNhc2UgcHgtMCBweS0xIHRleHQteHMgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBtci0xIG1iLTEgZWFzZS1saW5lYXIgdHJhbnNpdGlvbi1hbGxcIj5cbiAgICAgIFZpZXcgYWxsIGl0ZW1zXG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuPC9kaXY+XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlLCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUG9wdXBDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VzL3BvcHVwL3BvcHVwLmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJycsXG4gICAgcGF0aE1hdGNoOiAnZnVsbCcsXG4gICAgY29tcG9uZW50OiBQb3B1cENvbXBvbmVudFxuICB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxuICBleHBvcnRzOiBbUm91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBQb3B1cFJvdXRpbmdNb2R1bGUge31cbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFBvcHVwQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlcy9wb3B1cC9wb3B1cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUG9wdXBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9wb3B1cC1yb3V0aW5nLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1BvcHVwQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgUG9wdXBSb3V0aW5nTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBQb3B1cE1vZHVsZSB7IH1cbiIsImltcG9ydCB7IFN1YmplY3QgfSBmcm9tICcuL1N1YmplY3QnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi9TdWJzY3JpcHRpb24nO1xuZXhwb3J0IGNsYXNzIEFzeW5jU3ViamVjdCBleHRlbmRzIFN1YmplY3Qge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5oYXNOZXh0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGFzQ29tcGxldGVkID0gZmFsc2U7XG4gICAgfVxuICAgIF9zdWJzY3JpYmUoc3Vic2NyaWJlcikge1xuICAgICAgICBpZiAodGhpcy5oYXNFcnJvcikge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5lcnJvcih0aGlzLnRocm93bkVycm9yKTtcbiAgICAgICAgICAgIHJldHVybiBTdWJzY3JpcHRpb24uRU1QVFk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5oYXNDb21wbGV0ZWQgJiYgdGhpcy5oYXNOZXh0KSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQodGhpcy52YWx1ZSk7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICByZXR1cm4gU3Vic2NyaXB0aW9uLkVNUFRZO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdXBlci5fc3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICAgIH1cbiAgICBuZXh0KHZhbHVlKSB7XG4gICAgICAgIGlmICghdGhpcy5oYXNDb21wbGV0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuaGFzTmV4dCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZXJyb3IoZXJyb3IpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhhc0NvbXBsZXRlZCkge1xuICAgICAgICAgICAgc3VwZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbXBsZXRlKCkge1xuICAgICAgICB0aGlzLmhhc0NvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLmhhc05leHQpIHtcbiAgICAgICAgICAgIHN1cGVyLm5leHQodGhpcy52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIuY29tcGxldGUoKTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Bc3luY1N1YmplY3QuanMubWFwIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgQXN5bmNTdWJqZWN0IH0gZnJvbSAnLi4vQXN5bmNTdWJqZWN0JztcbmltcG9ydCB7IG1hcCB9IGZyb20gJy4uL29wZXJhdG9ycy9tYXAnO1xuaW1wb3J0IHsgY2FuUmVwb3J0RXJyb3IgfSBmcm9tICcuLi91dGlsL2NhblJlcG9ydEVycm9yJztcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuLi91dGlsL2lzQXJyYXknO1xuaW1wb3J0IHsgaXNTY2hlZHVsZXIgfSBmcm9tICcuLi91dGlsL2lzU2NoZWR1bGVyJztcbmV4cG9ydCBmdW5jdGlvbiBiaW5kQ2FsbGJhY2soY2FsbGJhY2tGdW5jLCByZXN1bHRTZWxlY3Rvciwgc2NoZWR1bGVyKSB7XG4gICAgaWYgKHJlc3VsdFNlbGVjdG9yKSB7XG4gICAgICAgIGlmIChpc1NjaGVkdWxlcihyZXN1bHRTZWxlY3RvcikpIHtcbiAgICAgICAgICAgIHNjaGVkdWxlciA9IHJlc3VsdFNlbGVjdG9yO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICguLi5hcmdzKSA9PiBiaW5kQ2FsbGJhY2soY2FsbGJhY2tGdW5jLCBzY2hlZHVsZXIpKC4uLmFyZ3MpLnBpcGUobWFwKChhcmdzKSA9PiBpc0FycmF5KGFyZ3MpID8gcmVzdWx0U2VsZWN0b3IoLi4uYXJncykgOiByZXN1bHRTZWxlY3RvcihhcmdzKSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcztcbiAgICAgICAgbGV0IHN1YmplY3Q7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICBzdWJqZWN0LFxuICAgICAgICAgICAgY2FsbGJhY2tGdW5jLFxuICAgICAgICAgICAgc2NoZWR1bGVyLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoc3Vic2NyaWJlciA9PiB7XG4gICAgICAgICAgICBpZiAoIXNjaGVkdWxlcikge1xuICAgICAgICAgICAgICAgIGlmICghc3ViamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBzdWJqZWN0ID0gbmV3IEFzeW5jU3ViamVjdCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBoYW5kbGVyID0gKC4uLmlubmVyQXJncykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdC5uZXh0KGlubmVyQXJncy5sZW5ndGggPD0gMSA/IGlubmVyQXJnc1swXSA6IGlubmVyQXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJqZWN0LmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja0Z1bmMuYXBwbHkoY29udGV4dCwgWy4uLmFyZ3MsIGhhbmRsZXJdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FuUmVwb3J0RXJyb3Ioc3ViamVjdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJqZWN0LmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gc3ViamVjdC5zdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgYXJncywgc3Vic2NyaWJlciwgcGFyYW1zLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjaGVkdWxlci5zY2hlZHVsZShkaXNwYXRjaCwgMCwgc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gZGlzcGF0Y2goc3RhdGUpIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICBjb25zdCB7IGFyZ3MsIHN1YnNjcmliZXIsIHBhcmFtcyB9ID0gc3RhdGU7XG4gICAgY29uc3QgeyBjYWxsYmFja0Z1bmMsIGNvbnRleHQsIHNjaGVkdWxlciB9ID0gcGFyYW1zO1xuICAgIGxldCB7IHN1YmplY3QgfSA9IHBhcmFtcztcbiAgICBpZiAoIXN1YmplY3QpIHtcbiAgICAgICAgc3ViamVjdCA9IHBhcmFtcy5zdWJqZWN0ID0gbmV3IEFzeW5jU3ViamVjdCgpO1xuICAgICAgICBjb25zdCBoYW5kbGVyID0gKC4uLmlubmVyQXJncykgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBpbm5lckFyZ3MubGVuZ3RoIDw9IDEgPyBpbm5lckFyZ3NbMF0gOiBpbm5lckFyZ3M7XG4gICAgICAgICAgICB0aGlzLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZGlzcGF0Y2hOZXh0LCAwLCB7IHZhbHVlLCBzdWJqZWN0IH0pKTtcbiAgICAgICAgfTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNhbGxiYWNrRnVuYy5hcHBseShjb250ZXh0LCBbLi4uYXJncywgaGFuZGxlcl0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHN1YmplY3QuZXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmFkZChzdWJqZWN0LnN1YnNjcmliZShzdWJzY3JpYmVyKSk7XG59XG5mdW5jdGlvbiBkaXNwYXRjaE5leHQoc3RhdGUpIHtcbiAgICBjb25zdCB7IHZhbHVlLCBzdWJqZWN0IH0gPSBzdGF0ZTtcbiAgICBzdWJqZWN0Lm5leHQodmFsdWUpO1xuICAgIHN1YmplY3QuY29tcGxldGUoKTtcbn1cbmZ1bmN0aW9uIGRpc3BhdGNoRXJyb3Ioc3RhdGUpIHtcbiAgICBjb25zdCB7IGVyciwgc3ViamVjdCB9ID0gc3RhdGU7XG4gICAgc3ViamVjdC5lcnJvcihlcnIpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmluZENhbGxiYWNrLmpzLm1hcCIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmV4cG9ydCBmdW5jdGlvbiB0aHJvd0Vycm9yKGVycm9yLCBzY2hlZHVsZXIpIHtcbiAgICBpZiAoIXNjaGVkdWxlcikge1xuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoc3Vic2NyaWJlciA9PiBzdWJzY3JpYmVyLmVycm9yKGVycm9yKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoc3Vic2NyaWJlciA9PiBzY2hlZHVsZXIuc2NoZWR1bGUoZGlzcGF0Y2gsIDAsIHsgZXJyb3IsIHN1YnNjcmliZXIgfSkpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRpc3BhdGNoKHsgZXJyb3IsIHN1YnNjcmliZXIgfSkge1xuICAgIHN1YnNjcmliZXIuZXJyb3IoZXJyb3IpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGhyb3dFcnJvci5qcy5tYXAiXSwic291cmNlUm9vdCI6IiJ9