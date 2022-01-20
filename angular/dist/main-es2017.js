(self["webpackChunkbo_planner"] = self["webpackChunkbo_planner"] || []).push([["main"],{

/***/ 403:
/*!***************************************************************!*\
  !*** ./angular/$_lazy_route_resources/ lazy namespace object ***!
  \***************************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 403;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 7970:
/*!***********************************************!*\
  !*** ./angular/src/app/app-routing.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);



const routes = [
    {
        path: 'popup',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-angular_src_app_core_currencies_ts-node_modules_angular_forms___ivy_ngcc___fesm2015_f-6d0cde"), __webpack_require__.e("angular_src_app_modules_popup_popup_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/popup/popup.module */ 7134)).then(m => m.PopupModule)
    },
    {
        path: 'options',
        loadChildren: () => __webpack_require__.e(/*! import() */ "angular_src_app_modules_options_options_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/options/options.module */ 6358)).then(m => m.OptionsModule)
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 6197:
/*!******************************************!*\
  !*** ./angular/src/app/app.component.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);


class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 3300:
/*!***************************************!*\
  !*** ./angular/src/app/app.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _ngneat_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/dialog */ 6960);
/* harmony import */ var ngx_indexed_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-indexed-db */ 5465);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 7970);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6197);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);








const dbConfig = {
    name: 'boPlanner',
    version: 2,
    objectStoresMeta: [{
            store: 'orders',
            storeConfig: { keyPath: 'id', autoIncrement: true },
            storeSchema: [
                { name: 'itemName', keypath: 'itemName', options: { unique: true } },
                { name: 'appId', keypath: 'appId', options: { unique: false } },
                { name: 'currencyId', keypath: 'currencyId', options: { unique: false } },
                { name: 'price', keypath: 'price', options: { unique: false } },
                { name: 'amount', keypath: 'amount', options: { unique: false } },
                { name: 'created', keypath: 'created', options: { unique: false } },
                { name: 'updated', keypath: 'updated', options: { unique: false } },
            ]
        }]
};
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, ngx_indexed_db__WEBPACK_IMPORTED_MODULE_4__.NgxIndexedDBModule.forRoot(dbConfig), _ngneat_dialog__WEBPACK_IMPORTED_MODULE_5__.DialogModule.forRoot({
                sizes: {
                    sm: {
                        width: 500,
                    },
                }
            })]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, ngx_indexed_db__WEBPACK_IMPORTED_MODULE_4__.NgxIndexedDBModule, _ngneat_dialog__WEBPACK_IMPORTED_MODULE_5__.DialogModule] }); })();


/***/ }),

/***/ 3154:
/*!******************************************************!*\
  !*** ./angular/src/app/providers/tab-id.provider.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TAB_ID": function() { return /* binding */ TAB_ID; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

/**
 * provides the currently opened tab id
 */
const TAB_ID = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('CHROME_TAB_ID');


/***/ }),

/***/ 8135:
/*!*************************************************!*\
  !*** ./angular/src/environments/environment.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 919:
/*!*****************************!*\
  !*** ./angular/src/main.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 3300);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 8135);
/* harmony import */ var _app_providers_tab_id_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/providers/tab-id.provider */ 3154);





chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
    }
    const { id: tabId } = [...tabs].pop();
    // provides the current Tab ID so you can send messages to the content page
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser([{ provide: _app_providers_tab_id_provider__WEBPACK_IMPORTED_MODULE_2__.TAB_ID, useValue: tabId }])
        .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
        .catch(error => console.error(error));
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(919); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iby1wbGFubmVyLy4vYW5ndWxhci8kX2xhenlfcm91dGVfcmVzb3VyY2VzfGxhenl8Z3JvdXBPcHRpb25zOiB7fXxuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JvLXBsYW5uZXIvLi9hbmd1bGFyL3NyYy9hcHAvYXBwLXJvdXRpbmcubW9kdWxlLnRzIiwid2VicGFjazovL2JvLXBsYW5uZXIvLi9hbmd1bGFyL3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9iby1wbGFubmVyLy4vYW5ndWxhci9zcmMvYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly9iby1wbGFubmVyLy4vYW5ndWxhci9zcmMvYXBwL2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vYm8tcGxhbm5lci8uL2FuZ3VsYXIvc3JjL2FwcC9wcm92aWRlcnMvdGFiLWlkLnByb3ZpZGVyLnRzIiwid2VicGFjazovL2JvLXBsYW5uZXIvLi9hbmd1bGFyL3NyYy9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQudHMiLCJ3ZWJwYWNrOi8vYm8tcGxhbm5lci8uL2FuZ3VsYXIvc3JjL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLDRDQUE0QyxXQUFXO0FBQ3ZEO0FBQ0E7QUFDQSwwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYdUQ7OztBQUV2RCxNQUFNLE1BQU0sR0FBVztJQUNyQjtRQUNFLElBQUksRUFBRSxPQUFPO1FBQ2IsWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUFDLGlVQUFzQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7S0FDcEY7SUFDRDtRQUNFLElBQUksRUFBRSxTQUFTO1FBQ2YsWUFBWSxFQUFFLEdBQUcsRUFBRSxDQUFDLDRMQUEwQyxDQUFDLElBQUksQ0FBQyxD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QUUsSUFBSSxDQUFDLEVBQUU7SUFDOUQsSUFBSSw2RUFBc0IsRUFBRTtRQUMxQiw2REFBYyxFQUFFLENBQUM7S0FDbEI7SUFFRCxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUV0QywyRUFBMkU7SUFDM0UsdUVBQXVCLENBQUMsRUFBRSxPQUFPLEVBQUUsa0VBQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUMzRCxlQUFlLENBQUMsc0RBQVMsQ0FBQztTQUMxQixLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDMUMsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoibWFpbi1lczIwMTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQocmVxKSB7XG5cdC8vIEhlcmUgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigpIGlzIHVzZWQgaW5zdGVhZCBvZiBuZXcgUHJvbWlzZSgpIHRvIHByZXZlbnRcblx0Ly8gdW5jYXVnaHQgZXhjZXB0aW9uIHBvcHBpbmcgdXAgaW4gZGV2dG9vbHNcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9KTtcbn1cbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5rZXlzID0gZnVuY3Rpb24oKSB7IHJldHVybiBbXTsgfTtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gNDAzO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7IiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAncG9wdXAnLFxuICAgIGxvYWRDaGlsZHJlbjogKCkgPT4gaW1wb3J0KCcuL21vZHVsZXMvcG9wdXAvcG9wdXAubW9kdWxlJykudGhlbihtID0+IG0uUG9wdXBNb2R1bGUpXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnb3B0aW9ucycsXG4gICAgbG9hZENoaWxkcmVuOiAoKSA9PiBpbXBvcnQoJy4vbW9kdWxlcy9vcHRpb25zL29wdGlvbnMubW9kdWxlJykudGhlbihtID0+IG0uT3B0aW9uc01vZHVsZSlcbiAgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcywgeyB1c2VIYXNoOiB0cnVlLCByZWxhdGl2ZUxpbmtSZXNvbHV0aW9uOiAnbGVnYWN5JyB9KV0sXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXJvb3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYXBwLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHt9XG4iLCI8IS0tIFJvdXRpbmcgYmFzZWQgb24gdGhlIG1vZHVsZSB0aGF0IG9wZW5lZCAocG9wdXAvb3B0aW9ucy90YWIpIC0tPlxuPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IERpYWxvZ01vZHVsZSB9IGZyb20gJ0BuZ25lYXQvZGlhbG9nJztcbmltcG9ydCB7IERCQ29uZmlnLCBOZ3hJbmRleGVkREJNb2R1bGUgfSBmcm9tICduZ3gtaW5kZXhlZC1kYic7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hcHAtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcblxuY29uc3QgZGJDb25maWc6IERCQ29uZmlnID0ge1xuICBuYW1lOiAnYm9QbGFubmVyJyxcbiAgdmVyc2lvbjogMixcbiAgb2JqZWN0U3RvcmVzTWV0YTogW3tcbiAgICBzdG9yZTogJ29yZGVycycsXG4gICAgc3RvcmVDb25maWc6IHsga2V5UGF0aDogJ2lkJywgYXV0b0luY3JlbWVudDogdHJ1ZSB9LFxuICAgIHN0b3JlU2NoZW1hOiBbXG4gICAgICB7IG5hbWU6ICdpdGVtTmFtZScsIGtleXBhdGg6ICdpdGVtTmFtZScsIG9wdGlvbnM6IHsgdW5pcXVlOiB0cnVlIH0gfSxcbiAgICAgIHsgbmFtZTogJ2FwcElkJywga2V5cGF0aDogJ2FwcElkJywgb3B0aW9uczogeyB1bmlxdWU6IGZhbHNlIH0gfSxcbiAgICAgIHsgbmFtZTogJ2N1cnJlbmN5SWQnLCBrZXlwYXRoOiAnY3VycmVuY3lJZCcsIG9wdGlvbnM6IHsgdW5pcXVlOiBmYWxzZSB9IH0sXG4gICAgICB7IG5hbWU6ICdwcmljZScsIGtleXBhdGg6ICdwcmljZScsIG9wdGlvbnM6IHsgdW5pcXVlOiBmYWxzZSB9IH0sXG4gICAgICB7IG5hbWU6ICdhbW91bnQnLCBrZXlwYXRoOiAnYW1vdW50Jywgb3B0aW9uczogeyB1bmlxdWU6IGZhbHNlIH0gfSxcbiAgICAgIHsgbmFtZTogJ2NyZWF0ZWQnLCBrZXlwYXRoOiAnY3JlYXRlZCcsIG9wdGlvbnM6IHsgdW5pcXVlOiBmYWxzZSB9IH0sXG4gICAgICB7IG5hbWU6ICd1cGRhdGVkJywga2V5cGF0aDogJ3VwZGF0ZWQnLCBvcHRpb25zOiB7IHVuaXF1ZTogZmFsc2UgfSB9LFxuICAgIF1cbiAgfV1cbn07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0FwcENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtCcm93c2VyTW9kdWxlLCBBcHBSb3V0aW5nTW9kdWxlLCBOZ3hJbmRleGVkREJNb2R1bGUuZm9yUm9vdChkYkNvbmZpZyksIERpYWxvZ01vZHVsZS5mb3JSb290KHtcbiAgICBzaXplczoge1xuICAgICAgc206IHtcbiAgICAgICAgd2lkdGg6IDUwMCxcbiAgICAgIH0sXG4gICAgfVxuICB9KV0sXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8qKlxuICogcHJvdmlkZXMgdGhlIGN1cnJlbnRseSBvcGVuZWQgdGFiIGlkXG4gKi9cbmV4cG9ydCBjb25zdCBUQUJfSUQgPSBuZXcgSW5qZWN0aW9uVG9rZW48bnVtYmVyPignQ0hST01FX1RBQl9JRCcpO1xuIiwiLy8gVGhpcyBmaWxlIGNhbiBiZSByZXBsYWNlZCBkdXJpbmcgYnVpbGQgYnkgdXNpbmcgdGhlIGBmaWxlUmVwbGFjZW1lbnRzYCBhcnJheS5cbi8vIGBuZyBidWlsZCAtLXByb2RgIHJlcGxhY2VzIGBlbnZpcm9ubWVudC50c2Agd2l0aCBgZW52aXJvbm1lbnQucHJvZC50c2AuXG4vLyBUaGUgbGlzdCBvZiBmaWxlIHJlcGxhY2VtZW50cyBjYW4gYmUgZm91bmQgaW4gYGFuZ3VsYXIuanNvbmAuXG5cbmV4cG9ydCBjb25zdCBlbnZpcm9ubWVudCA9IHtcbiAgcHJvZHVjdGlvbjogZmFsc2Vcbn07XG5cbi8qXG4gKiBGb3IgZWFzaWVyIGRlYnVnZ2luZyBpbiBkZXZlbG9wbWVudCBtb2RlLCB5b3UgY2FuIGltcG9ydCB0aGUgZm9sbG93aW5nIGZpbGVcbiAqIHRvIGlnbm9yZSB6b25lIHJlbGF0ZWQgZXJyb3Igc3RhY2sgZnJhbWVzIHN1Y2ggYXMgYHpvbmUucnVuYCwgYHpvbmVEZWxlZ2F0ZS5pbnZva2VUYXNrYC5cbiAqXG4gKiBUaGlzIGltcG9ydCBzaG91bGQgYmUgY29tbWVudGVkIG91dCBpbiBwcm9kdWN0aW9uIG1vZGUgYmVjYXVzZSBpdCB3aWxsIGhhdmUgYSBuZWdhdGl2ZSBpbXBhY3RcbiAqIG9uIHBlcmZvcm1hbmNlIGlmIGFuIGVycm9yIGlzIHRocm93bi5cbiAqL1xuLy8gaW1wb3J0ICd6b25lLmpzL2Rpc3Qvem9uZS1lcnJvcic7ICAvLyBJbmNsdWRlZCB3aXRoIEFuZ3VsYXIgQ0xJLlxuIiwiaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xuXG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC9hcHAubW9kdWxlJztcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi9lbnZpcm9ubWVudHMvZW52aXJvbm1lbnQnO1xuaW1wb3J0IHsgVEFCX0lEIH0gZnJvbSAnLi9hcHAvcHJvdmlkZXJzL3RhYi1pZC5wcm92aWRlcic7XG5cbmNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sIHRhYnMgPT4ge1xuICBpZiAoZW52aXJvbm1lbnQucHJvZHVjdGlvbikge1xuICAgIGVuYWJsZVByb2RNb2RlKCk7XG4gIH1cblxuICBjb25zdCB7IGlkOiB0YWJJZCB9ID0gWy4uLnRhYnNdLnBvcCgpO1xuXG4gIC8vIHByb3ZpZGVzIHRoZSBjdXJyZW50IFRhYiBJRCBzbyB5b3UgY2FuIHNlbmQgbWVzc2FnZXMgdG8gdGhlIGNvbnRlbnQgcGFnZVxuICBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljKFt7IHByb3ZpZGU6IFRBQl9JRCwgdXNlVmFsdWU6IHRhYklkIH1dKVxuICAgIC5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKVxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=