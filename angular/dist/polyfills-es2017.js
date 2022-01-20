(self["webpackChunkbo_planner"] = self["webpackChunkbo_planner"] || []).push([["polyfills"],{

/***/ 8314:
/*!**********************************!*\
  !*** ./angular/src/polyfills.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/dist/zone */ 9140);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/guide/browser-support
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 * because those flags need to be set before `zone.js` being loaded, and webpack
 * will put import in the top of bundle, so user need to create a separate file
 * in this directory (for example: zone-flags.ts), and put the following flags
 * into that file, and then add the following code before importing zone.js.
 * import './zone-flags.ts';
 *
 * The flags allowed in zone-flags.ts are listed here.
 *
 * The following flags will work for all browsers.
 *
 * (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
 * (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
 * (window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
 *
 *  in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
 *  with the following flag, it will bypass `zone.js` patch for IE/Edge
 *
 *  (window as any).__Zone_enable_cross_context_check = true;
 *
 */
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */


/***/ }),

/***/ 9140:
/*!*******************************************!*\
  !*** ./node_modules/zone.js/dist/zone.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
/**
 * @license Angular v12.0.0-next.0
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */
(function (factory) {
     true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) :
        0;
}((function () {
    'use strict';
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var Zone$1 = (function (global) {
        var performance = global['performance'];
        function mark(name) {
            performance && performance['mark'] && performance['mark'](name);
        }
        function performanceMeasure(name, label) {
            performance && performance['measure'] && performance['measure'](name, label);
        }
        mark('Zone');
        // Initialize before it's accessed below.
        // __Zone_symbol_prefix global can be used to override the default zone
        // symbol prefix with a custom one if needed.
        var symbolPrefix = global['__Zone_symbol_prefix'] || '__zone_symbol__';
        function __symbol__(name) {
            return symbolPrefix + name;
        }
        var checkDuplicate = global[__symbol__('forceDuplicateZoneCheck')] === true;
        if (global['Zone']) {
            // if global['Zone'] already exists (maybe zone.js was already loaded or
            // some other lib also registered a global object named Zone), we may need
            // to throw an error, but sometimes user may not want this error.
            // For example,
            // we have two web pages, page1 includes zone.js, page2 doesn't.
            // and the 1st time user load page1 and page2, everything work fine,
            // but when user load page2 again, error occurs because global['Zone'] already exists.
            // so we add a flag to let user choose whether to throw this error or not.
            // By default, if existing Zone is from zone.js, we will not throw the error.
            if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
                throw new Error('Zone already loaded.');
            }
            else {
                return global['Zone'];
            }
        }
        var Zone = /** @class */ (function () {
            function Zone(parent, zoneSpec) {
                this._parent = parent;
                this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
                this._properties = zoneSpec && zoneSpec.properties || {};
                this._zoneDelegate =
                    new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
            }
            Zone.assertZonePatched = function () {
                if (global['Promise'] !== patches['ZoneAwarePromise']) {
                    throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' +
                        'has been overwritten.\n' +
                        'Most likely cause is that a Promise polyfill has been loaded ' +
                        'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' +
                        'If you must load one, do so before loading zone.js.)');
                }
            };
            Object.defineProperty(Zone, "root", {
                get: function () {
                    var zone = Zone.current;
                    while (zone.parent) {
                        zone = zone.parent;
                    }
                    return zone;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Zone, "current", {
                get: function () {
                    return _currentZoneFrame.zone;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Zone, "currentTask", {
                get: function () {
                    return _currentTask;
                },
                enumerable: false,
                configurable: true
            });
            // tslint:disable-next-line:require-internal-with-underscore
            Zone.__load_patch = function (name, fn, ignoreDuplicate) {
                if (ignoreDuplicate === void 0) { ignoreDuplicate = false; }
                if (patches.hasOwnProperty(name)) {
                    // `checkDuplicate` option is defined from global variable
                    // so it works for all modules.
                    // `ignoreDuplicate` can work for the specified module
                    if (!ignoreDuplicate && checkDuplicate) {
                        throw Error('Already loaded patch: ' + name);
                    }
                }
                else if (!global['__Zone_disable_' + name]) {
                    var perfName = 'Zone:' + name;
                    mark(perfName);
                    patches[name] = fn(global, Zone, _api);
                    performanceMeasure(perfName, perfName);
                }
            };
            Object.defineProperty(Zone.prototype, "parent", {
                get: function () {
                    return this._parent;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Zone.prototype, "name", {
                get: function () {
                    return this._name;
                },
                enumerable: false,
                configurable: true
            });
            Zone.prototype.get = function (key) {
                var zone = this.getZoneWith(key);
                if (zone)
                    return zone._properties[key];
            };
            Zone.prototype.getZoneWith = function (key) {
                var current = this;
                while (current) {
                    if (current._properties.hasOwnProperty(key)) {
                        return current;
                    }
                    current = current._parent;
                }
                return null;
            };
            Zone.prototype.fork = function (zoneSpec) {
                if (!zoneSpec)
                    throw new Error('ZoneSpec required!');
                return this._zoneDelegate.fork(this, zoneSpec);
            };
            Zone.prototype.wrap = function (callback, source) {
                if (typeof callback !== 'function') {
                    throw new Error('Expecting function got: ' + callback);
                }
                var _callback = this._zoneDelegate.intercept(this, callback, source);
                var zone = this;
                return function () {
                    return zone.runGuarded(_callback, this, arguments, source);
                };
            };
            Zone.prototype.run = function (callback, applyThis, applyArgs, source) {
                _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
                try {
                    return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                }
                finally {
                    _currentZoneFrame = _currentZoneFrame.parent;
                }
            };
            Zone.prototype.runGuarded = function (callback, applyThis, applyArgs, source) {
                if (applyThis === void 0) { applyThis = null; }
                _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
                try {
                    try {
                        return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                    }
                    catch (error) {
                        if (this._zoneDelegate.handleError(this, error)) {
                            throw error;
                        }
                    }
                }
                finally {
                    _currentZoneFrame = _currentZoneFrame.parent;
                }
            };
            Zone.prototype.runTask = function (task, applyThis, applyArgs) {
                if (task.zone != this) {
                    throw new Error('A task can only be run in the zone of creation! (Creation: ' +
                        (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
                }
                // https://github.com/angular/zone.js/issues/778, sometimes eventTask
                // will run in notScheduled(canceled) state, we should not try to
                // run such kind of task but just return
                if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
                    return;
                }
                var reEntryGuard = task.state != running;
                reEntryGuard && task._transitionTo(running, scheduled);
                task.runCount++;
                var previousTask = _currentTask;
                _currentTask = task;
                _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
                try {
                    if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                        task.cancelFn = undefined;
                    }
                    try {
                        return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                    }
                    catch (error) {
                        if (this._zoneDelegate.handleError(this, error)) {
                            throw error;
                        }
                    }
                }
                finally {
                    // if the task's state is notScheduled or unknown, then it has already been cancelled
                    // we should not reset the state to scheduled
                    if (task.state !== notScheduled && task.state !== unknown) {
                        if (task.type == eventTask || (task.data && task.data.isPeriodic)) {
                            reEntryGuard && task._transitionTo(scheduled, running);
                        }
                        else {
                            task.runCount = 0;
                            this._updateTaskCount(task, -1);
                            reEntryGuard &&
                                task._transitionTo(notScheduled, running, notScheduled);
                        }
                    }
                    _currentZoneFrame = _currentZoneFrame.parent;
                    _currentTask = previousTask;
                }
            };
            Zone.prototype.scheduleTask = function (task) {
                if (task.zone && task.zone !== this) {
                    // check if the task was rescheduled, the newZone
                    // should not be the children of the original zone
                    var newZone = this;
                    while (newZone) {
                        if (newZone === task.zone) {
                            throw Error("can not reschedule task to " + this.name + " which is descendants of the original zone " + task.zone.name);
                        }
                        newZone = newZone.parent;
                    }
                }
                task._transitionTo(scheduling, notScheduled);
                var zoneDelegates = [];
                task._zoneDelegates = zoneDelegates;
                task._zone = this;
                try {
                    task = this._zoneDelegate.scheduleTask(this, task);
                }
                catch (err) {
                    // should set task's state to unknown when scheduleTask throw error
                    // because the err may from reschedule, so the fromState maybe notScheduled
                    task._transitionTo(unknown, scheduling, notScheduled);
                    // TODO: @JiaLiPassion, should we check the result from handleError?
                    this._zoneDelegate.handleError(this, err);
                    throw err;
                }
                if (task._zoneDelegates === zoneDelegates) {
                    // we have to check because internally the delegate can reschedule the task.
                    this._updateTaskCount(task, 1);
                }
                if (task.state == scheduling) {
                    task._transitionTo(scheduled, scheduling);
                }
                return task;
            };
            Zone.prototype.scheduleMicroTask = function (source, callback, data, customSchedule) {
                return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
            };
            Zone.prototype.scheduleMacroTask = function (source, callback, data, customSchedule, customCancel) {
                return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
            };
            Zone.prototype.scheduleEventTask = function (source, callback, data, customSchedule, customCancel) {
                return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
            };
            Zone.prototype.cancelTask = function (task) {
                if (task.zone != this)
                    throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' +
                        (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
                task._transitionTo(canceling, scheduled, running);
                try {
                    this._zoneDelegate.cancelTask(this, task);
                }
                catch (err) {
                    // if error occurs when cancelTask, transit the state to unknown
                    task._transitionTo(unknown, canceling);
                    this._zoneDelegate.handleError(this, err);
                    throw err;
                }
                this._updateTaskCount(task, -1);
                task._transitionTo(notScheduled, canceling);
                task.runCount = 0;
                return task;
            };
            Zone.prototype._updateTaskCount = function (task, count) {
                var zoneDelegates = task._zoneDelegates;
                if (count == -1) {
                    task._zoneDelegates = null;
                }
                for (var i = 0; i < zoneDelegates.length; i++) {
                    zoneDelegates[i]._updateTaskCount(task.type, count);
                }
            };
            return Zone;
        }());
        // tslint:disable-next-line:require-internal-with-underscore
        Zone.__symbol__ = __symbol__;
        var DELEGATE_ZS = {
            name: '',
            onHasTask: function (delegate, _, target, hasTaskState) { return delegate.hasTask(target, hasTaskState); },
            onScheduleTask: function (delegate, _, target, task) { return delegate.scheduleTask(target, task); },
            onInvokeTask: function (delegate, _, target, task, applyThis, applyArgs) { return delegate.invokeTask(target, task, applyThis, applyArgs); },
            onCancelTask: function (delegate, _, target, task) { return delegate.cancelTask(target, task); }
        };
        var ZoneDelegate = /** @class */ (function () {
            function ZoneDelegate(zone, parentDelegate, zoneSpec) {
                this._taskCounts = { 'microTask': 0, 'macroTask': 0, 'eventTask': 0 };
                this.zone = zone;
                this._parentDelegate = parentDelegate;
                this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
                this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
                this._forkCurrZone =
                    zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate._forkCurrZone);
                this._interceptZS =
                    zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
                this._interceptDlgt =
                    zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
                this._interceptCurrZone =
                    zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate._interceptCurrZone);
                this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
                this._invokeDlgt =
                    zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
                this._invokeCurrZone =
                    zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate._invokeCurrZone);
                this._handleErrorZS =
                    zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
                this._handleErrorDlgt =
                    zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
                this._handleErrorCurrZone =
                    zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate._handleErrorCurrZone);
                this._scheduleTaskZS =
                    zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
                this._scheduleTaskDlgt = zoneSpec &&
                    (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
                this._scheduleTaskCurrZone =
                    zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate._scheduleTaskCurrZone);
                this._invokeTaskZS =
                    zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
                this._invokeTaskDlgt =
                    zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
                this._invokeTaskCurrZone =
                    zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate._invokeTaskCurrZone);
                this._cancelTaskZS =
                    zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
                this._cancelTaskDlgt =
                    zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
                this._cancelTaskCurrZone =
                    zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate._cancelTaskCurrZone);
                this._hasTaskZS = null;
                this._hasTaskDlgt = null;
                this._hasTaskDlgtOwner = null;
                this._hasTaskCurrZone = null;
                var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
                var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
                if (zoneSpecHasTask || parentHasTask) {
                    // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
                    // a case all task related interceptors must go through this ZD. We can't short circuit it.
                    this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
                    this._hasTaskDlgt = parentDelegate;
                    this._hasTaskDlgtOwner = this;
                    this._hasTaskCurrZone = zone;
                    if (!zoneSpec.onScheduleTask) {
                        this._scheduleTaskZS = DELEGATE_ZS;
                        this._scheduleTaskDlgt = parentDelegate;
                        this._scheduleTaskCurrZone = this.zone;
                    }
                    if (!zoneSpec.onInvokeTask) {
                        this._invokeTaskZS = DELEGATE_ZS;
                        this._invokeTaskDlgt = parentDelegate;
                        this._invokeTaskCurrZone = this.zone;
                    }
                    if (!zoneSpec.onCancelTask) {
                        this._cancelTaskZS = DELEGATE_ZS;
                        this._cancelTaskDlgt = parentDelegate;
                        this._cancelTaskCurrZone = this.zone;
                    }
                }
            }
            ZoneDelegate.prototype.fork = function (targetZone, zoneSpec) {
                return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) :
                    new Zone(targetZone, zoneSpec);
            };
            ZoneDelegate.prototype.intercept = function (targetZone, callback, source) {
                return this._interceptZS ?
                    this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) :
                    callback;
            };
            ZoneDelegate.prototype.invoke = function (targetZone, callback, applyThis, applyArgs, source) {
                return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) :
                    callback.apply(applyThis, applyArgs);
            };
            ZoneDelegate.prototype.handleError = function (targetZone, error) {
                return this._handleErrorZS ?
                    this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) :
                    true;
            };
            ZoneDelegate.prototype.scheduleTask = function (targetZone, task) {
                var returnTask = task;
                if (this._scheduleTaskZS) {
                    if (this._hasTaskZS) {
                        returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
                    }
                    // clang-format off
                    returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
                    // clang-format on
                    if (!returnTask)
                        returnTask = task;
                }
                else {
                    if (task.scheduleFn) {
                        task.scheduleFn(task);
                    }
                    else if (task.type == microTask) {
                        scheduleMicroTask(task);
                    }
                    else {
                        throw new Error('Task is missing scheduleFn.');
                    }
                }
                return returnTask;
            };
            ZoneDelegate.prototype.invokeTask = function (targetZone, task, applyThis, applyArgs) {
                return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) :
                    task.callback.apply(applyThis, applyArgs);
            };
            ZoneDelegate.prototype.cancelTask = function (targetZone, task) {
                var value;
                if (this._cancelTaskZS) {
                    value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
                }
                else {
                    if (!task.cancelFn) {
                        throw Error('Task is not cancelable');
                    }
                    value = task.cancelFn(task);
                }
                return value;
            };
            ZoneDelegate.prototype.hasTask = function (targetZone, isEmpty) {
                // hasTask should not throw error so other ZoneDelegate
                // can still trigger hasTask callback
                try {
                    this._hasTaskZS &&
                        this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
                }
                catch (err) {
                    this.handleError(targetZone, err);
                }
            };
            // tslint:disable-next-line:require-internal-with-underscore
            ZoneDelegate.prototype._updateTaskCount = function (type, count) {
                var counts = this._taskCounts;
                var prev = counts[type];
                var next = counts[type] = prev + count;
                if (next < 0) {
                    throw new Error('More tasks executed then were scheduled.');
                }
                if (prev == 0 || next == 0) {
                    var isEmpty = {
                        microTask: counts['microTask'] > 0,
                        macroTask: counts['macroTask'] > 0,
                        eventTask: counts['eventTask'] > 0,
                        change: type
                    };
                    this.hasTask(this.zone, isEmpty);
                }
            };
            return ZoneDelegate;
        }());
        var ZoneTask = /** @class */ (function () {
            function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
                // tslint:disable-next-line:require-internal-with-underscore
                this._zone = null;
                this.runCount = 0;
                // tslint:disable-next-line:require-internal-with-underscore
                this._zoneDelegates = null;
                // tslint:disable-next-line:require-internal-with-underscore
                this._state = 'notScheduled';
                this.type = type;
                this.source = source;
                this.data = options;
                this.scheduleFn = scheduleFn;
                this.cancelFn = cancelFn;
                if (!callback) {
                    throw new Error('callback is not defined');
                }
                this.callback = callback;
                var self = this;
                // TODO: @JiaLiPassion options should have interface
                if (type === eventTask && options && options.useG) {
                    this.invoke = ZoneTask.invokeTask;
                }
                else {
                    this.invoke = function () {
                        return ZoneTask.invokeTask.call(global, self, this, arguments);
                    };
                }
            }
            ZoneTask.invokeTask = function (task, target, args) {
                if (!task) {
                    task = this;
                }
                _numberOfNestedTaskFrames++;
                try {
                    task.runCount++;
                    return task.zone.runTask(task, target, args);
                }
                finally {
                    if (_numberOfNestedTaskFrames == 1) {
                        drainMicroTaskQueue();
                    }
                    _numberOfNestedTaskFrames--;
                }
            };
            Object.defineProperty(ZoneTask.prototype, "zone", {
                get: function () {
                    return this._zone;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(ZoneTask.prototype, "state", {
                get: function () {
                    return this._state;
                },
                enumerable: false,
                configurable: true
            });
            ZoneTask.prototype.cancelScheduleRequest = function () {
                this._transitionTo(notScheduled, scheduling);
            };
            // tslint:disable-next-line:require-internal-with-underscore
            ZoneTask.prototype._transitionTo = function (toState, fromState1, fromState2) {
                if (this._state === fromState1 || this._state === fromState2) {
                    this._state = toState;
                    if (toState == notScheduled) {
                        this._zoneDelegates = null;
                    }
                }
                else {
                    throw new Error(this.type + " '" + this.source + "': can not transition to '" + toState + "', expecting state '" + fromState1 + "'" + (fromState2 ? ' or \'' + fromState2 + '\'' : '') + ", was '" + this._state + "'.");
                }
            };
            ZoneTask.prototype.toString = function () {
                if (this.data && typeof this.data.handleId !== 'undefined') {
                    return this.data.handleId.toString();
                }
                else {
                    return Object.prototype.toString.call(this);
                }
            };
            // add toJSON method to prevent cyclic error when
            // call JSON.stringify(zoneTask)
            ZoneTask.prototype.toJSON = function () {
                return {
                    type: this.type,
                    state: this.state,
                    source: this.source,
                    zone: this.zone.name,
                    runCount: this.runCount
                };
            };
            return ZoneTask;
        }());
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        ///  MICROTASK QUEUE
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        var symbolSetTimeout = __symbol__('setTimeout');
        var symbolPromise = __symbol__('Promise');
        var symbolThen = __symbol__('then');
        var _microTaskQueue = [];
        var _isDrainingMicrotaskQueue = false;
        var nativeMicroTaskQueuePromise;
        function scheduleMicroTask(task) {
            // if we are not running in any task, and there has not been anything scheduled
            // we must bootstrap the initial task creation by manually scheduling the drain
            if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
                // We are not running in Task, so we need to kickstart the microtask queue.
                if (!nativeMicroTaskQueuePromise) {
                    if (global[symbolPromise]) {
                        nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
                    }
                }
                if (nativeMicroTaskQueuePromise) {
                    var nativeThen = nativeMicroTaskQueuePromise[symbolThen];
                    if (!nativeThen) {
                        // native Promise is not patchable, we need to use `then` directly
                        // issue 1078
                        nativeThen = nativeMicroTaskQueuePromise['then'];
                    }
                    nativeThen.call(nativeMicroTaskQueuePromise, drainMicroTaskQueue);
                }
                else {
                    global[symbolSetTimeout](drainMicroTaskQueue, 0);
                }
            }
            task && _microTaskQueue.push(task);
        }
        function drainMicroTaskQueue() {
            if (!_isDrainingMicrotaskQueue) {
                _isDrainingMicrotaskQueue = true;
                while (_microTaskQueue.length) {
                    var queue = _microTaskQueue;
                    _microTaskQueue = [];
                    for (var i = 0; i < queue.length; i++) {
                        var task = queue[i];
                        try {
                            task.zone.runTask(task, null, null);
                        }
                        catch (error) {
                            _api.onUnhandledError(error);
                        }
                    }
                }
                _api.microtaskDrainDone();
                _isDrainingMicrotaskQueue = false;
            }
        }
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        ///  BOOTSTRAP
        //////////////////////////////////////////////////////
        //////////////////////////////////////////////////////
        var NO_ZONE = { name: 'NO ZONE' };
        var notScheduled = 'notScheduled', scheduling = 'scheduling', scheduled = 'scheduled', running = 'running', canceling = 'canceling', unknown = 'unknown';
        var microTask = 'microTask', macroTask = 'macroTask', eventTask = 'eventTask';
        var patches = {};
        var _api = {
            symbol: __symbol__,
            currentZoneFrame: function () { return _currentZoneFrame; },
            onUnhandledError: noop,
            microtaskDrainDone: noop,
            scheduleMicroTask: scheduleMicroTask,
            showUncaughtError: function () { return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')]; },
            patchEventTarget: function () { return []; },
            patchOnProperties: noop,
            patchMethod: function () { return noop; },
            bindArguments: function () { return []; },
            patchThen: function () { return noop; },
            patchMacroTask: function () { return noop; },
            patchEventPrototype: function () { return noop; },
            isIEOrEdge: function () { return false; },
            getGlobalObjects: function () { return undefined; },
            ObjectDefineProperty: function () { return noop; },
            ObjectGetOwnPropertyDescriptor: function () { return undefined; },
            ObjectCreate: function () { return undefined; },
            ArraySlice: function () { return []; },
            patchClass: function () { return noop; },
            wrapWithCurrentZone: function () { return noop; },
            filterProperties: function () { return []; },
            attachOriginToPatched: function () { return noop; },
            _redefineProperty: function () { return noop; },
            patchCallbacks: function () { return noop; }
        };
        var _currentZoneFrame = { parent: null, zone: new Zone(null, null) };
        var _currentTask = null;
        var _numberOfNestedTaskFrames = 0;
        function noop() { }
        performanceMeasure('Zone', 'Zone');
        return global['Zone'] = Zone;
    })(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Suppress closure compiler errors about unknown 'Zone' variable
     * @fileoverview
     * @suppress {undefinedVars,globalThis,missingRequire}
     */
    /// <reference types="node"/>
    // issue #989, to reduce bundle size, use short name
    /** Object.getOwnPropertyDescriptor */
    var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    /** Object.defineProperty */
    var ObjectDefineProperty = Object.defineProperty;
    /** Object.getPrototypeOf */
    var ObjectGetPrototypeOf = Object.getPrototypeOf;
    /** Object.create */
    var ObjectCreate = Object.create;
    /** Array.prototype.slice */
    var ArraySlice = Array.prototype.slice;
    /** addEventListener string const */
    var ADD_EVENT_LISTENER_STR = 'addEventListener';
    /** removeEventListener string const */
    var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
    /** zoneSymbol addEventListener */
    var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
    /** zoneSymbol removeEventListener */
    var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
    /** true string const */
    var TRUE_STR = 'true';
    /** false string const */
    var FALSE_STR = 'false';
    /** Zone symbol prefix string const. */
    var ZONE_SYMBOL_PREFIX = Zone.__symbol__('');
    function wrapWithCurrentZone(callback, source) {
        return Zone.current.wrap(callback, source);
    }
    function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
        return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
    }
    var zoneSymbol = Zone.__symbol__;
    var isWindowExists = typeof window !== 'undefined';
    var internalWindow = isWindowExists ? window : undefined;
    var _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;
    var REMOVE_ATTRIBUTE = 'removeAttribute';
    var NULL_ON_PROP_VALUE = [null];
    function bindArguments(args, source) {
        for (var i = args.length - 1; i >= 0; i--) {
            if (typeof args[i] === 'function') {
                args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
            }
        }
        return args;
    }
    function patchPrototype(prototype, fnNames) {
        var source = prototype.constructor['name'];
        var _loop_1 = function (i) {
            var name_1 = fnNames[i];
            var delegate = prototype[name_1];
            if (delegate) {
                var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name_1);
                if (!isPropertyWritable(prototypeDesc)) {
                    return "continue";
                }
                prototype[name_1] = (function (delegate) {
                    var patched = function () {
                        return delegate.apply(this, bindArguments(arguments, source + '.' + name_1));
                    };
                    attachOriginToPatched(patched, delegate);
                    return patched;
                })(delegate);
            }
        };
        for (var i = 0; i < fnNames.length; i++) {
            _loop_1(i);
        }
    }
    function isPropertyWritable(propertyDesc) {
        if (!propertyDesc) {
            return true;
        }
        if (propertyDesc.writable === false) {
            return false;
        }
        return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
    }
    var isWebWorker = (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope);
    // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
    // this code.
    var isNode = (!('nw' in _global) && typeof _global.process !== 'undefined' &&
        {}.toString.call(_global.process) === '[object process]');
    var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
    // we are in electron of nw, so we are both browser and nodejs
    // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
    // this code.
    var isMix = typeof _global.process !== 'undefined' &&
        {}.toString.call(_global.process) === '[object process]' && !isWebWorker &&
        !!(isWindowExists && internalWindow['HTMLElement']);
    var zoneSymbolEventNames = {};
    var wrapFn = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        var eventNameSymbol = zoneSymbolEventNames[event.type];
        if (!eventNameSymbol) {
            eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
        }
        var target = this || event.target || _global;
        var listener = target[eventNameSymbol];
        var result;
        if (isBrowser && target === internalWindow && event.type === 'error') {
            // window.onerror have different signiture
            // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
            // and onerror callback will prevent default when callback return true
            var errorEvent = event;
            result = listener &&
                listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);
            if (result === true) {
                event.preventDefault();
            }
        }
        else {
            result = listener && listener.apply(this, arguments);
            if (result != undefined && !result) {
                event.preventDefault();
            }
        }
        return result;
    };
    function patchProperty(obj, prop, prototype) {
        var desc = ObjectGetOwnPropertyDescriptor(obj, prop);
        if (!desc && prototype) {
            // when patch window object, use prototype to check prop exist or not
            var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
            if (prototypeDesc) {
                desc = { enumerable: true, configurable: true };
            }
        }
        // if the descriptor not exists or is not configurable
        // just return
        if (!desc || !desc.configurable) {
            return;
        }
        var onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');
        if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
            return;
        }
        // A property descriptor cannot have getter/setter and be writable
        // deleting the writable and value properties avoids this error:
        //
        // TypeError: property descriptors must not specify a value or be writable when a
        // getter or setter has been specified
        delete desc.writable;
        delete desc.value;
        var originalDescGet = desc.get;
        var originalDescSet = desc.set;
        // substr(2) cuz 'onclick' -> 'click', etc
        var eventName = prop.substr(2);
        var eventNameSymbol = zoneSymbolEventNames[eventName];
        if (!eventNameSymbol) {
            eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
        }
        desc.set = function (newValue) {
            // in some of windows's onproperty callback, this is undefined
            // so we need to check it
            var target = this;
            if (!target && obj === _global) {
                target = _global;
            }
            if (!target) {
                return;
            }
            var previousValue = target[eventNameSymbol];
            if (previousValue) {
                target.removeEventListener(eventName, wrapFn);
            }
            // issue #978, when onload handler was added before loading zone.js
            // we should remove it with originalDescSet
            if (originalDescSet) {
                originalDescSet.apply(target, NULL_ON_PROP_VALUE);
            }
            if (typeof newValue === 'function') {
                target[eventNameSymbol] = newValue;
                target.addEventListener(eventName, wrapFn, false);
            }
            else {
                target[eventNameSymbol] = null;
            }
        };
        // The getter would return undefined for unassigned properties but the default value of an
        // unassigned property is null
        desc.get = function () {
            // in some of windows's onproperty callback, this is undefined
            // so we need to check it
            var target = this;
            if (!target && obj === _global) {
                target = _global;
            }
            if (!target) {
                return null;
            }
            var listener = target[eventNameSymbol];
            if (listener) {
                return listener;
            }
            else if (originalDescGet) {
                // result will be null when use inline event attribute,
                // such as <button onclick="func();">OK</button>
                // because the onclick function is internal raw uncompiled handler
                // the onclick will be evaluated when first time event was triggered or
                // the property is accessed, https://github.com/angular/zone.js/issues/525
                // so we should use original native get to retrieve the handler
                var value = originalDescGet && originalDescGet.call(this);
                if (value) {
                    desc.set.call(this, value);
                    if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
                        target.removeAttribute(prop);
                    }
                    return value;
                }
            }
            return null;
        };
        ObjectDefineProperty(obj, prop, desc);
        obj[onPropPatchedSymbol] = true;
    }
    function patchOnProperties(obj, properties, prototype) {
        if (properties) {
            for (var i = 0; i < properties.length; i++) {
                patchProperty(obj, 'on' + properties[i], prototype);
            }
        }
        else {
            var onProperties = [];
            for (var prop in obj) {
                if (prop.substr(0, 2) == 'on') {
                    onProperties.push(prop);
                }
            }
            for (var j = 0; j < onProperties.length; j++) {
                patchProperty(obj, onProperties[j], prototype);
            }
        }
    }
    var originalInstanceKey = zoneSymbol('originalInstance');
    // wrap some native API on `window`
    function patchClass(className) {
        var OriginalClass = _global[className];
        if (!OriginalClass)
            return;
        // keep original class in global
        _global[zoneSymbol(className)] = OriginalClass;
        _global[className] = function () {
            var a = bindArguments(arguments, className);
            switch (a.length) {
                case 0:
                    this[originalInstanceKey] = new OriginalClass();
                    break;
                case 1:
                    this[originalInstanceKey] = new OriginalClass(a[0]);
                    break;
                case 2:
                    this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
                    break;
                case 3:
                    this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
                    break;
                case 4:
                    this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
                    break;
                default:
                    throw new Error('Arg list too long.');
            }
        };
        // attach original delegate to patched function
        attachOriginToPatched(_global[className], OriginalClass);
        var instance = new OriginalClass(function () { });
        var prop;
        for (prop in instance) {
            // https://bugs.webkit.org/show_bug.cgi?id=44721
            if (className === 'XMLHttpRequest' && prop === 'responseBlob')
                continue;
            (function (prop) {
                if (typeof instance[prop] === 'function') {
                    _global[className].prototype[prop] = function () {
                        return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
                    };
                }
                else {
                    ObjectDefineProperty(_global[className].prototype, prop, {
                        set: function (fn) {
                            if (typeof fn === 'function') {
                                this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop);
                                // keep callback in wrapped function so we can
                                // use it in Function.prototype.toString to return
                                // the native one.
                                attachOriginToPatched(this[originalInstanceKey][prop], fn);
                            }
                            else {
                                this[originalInstanceKey][prop] = fn;
                            }
                        },
                        get: function () {
                            return this[originalInstanceKey][prop];
                        }
                    });
                }
            }(prop));
        }
        for (prop in OriginalClass) {
            if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
                _global[className][prop] = OriginalClass[prop];
            }
        }
    }
    function patchMethod(target, name, patchFn) {
        var proto = target;
        while (proto && !proto.hasOwnProperty(name)) {
            proto = ObjectGetPrototypeOf(proto);
        }
        if (!proto && target[name]) {
            // somehow we did not find it, but we can see it. This happens on IE for Window properties.
            proto = target;
        }
        var delegateName = zoneSymbol(name);
        var delegate = null;
        if (proto && (!(delegate = proto[delegateName]) || !proto.hasOwnProperty(delegateName))) {
            delegate = proto[delegateName] = proto[name];
            // check whether proto[name] is writable
            // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob
            var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
            if (isPropertyWritable(desc)) {
                var patchDelegate_1 = patchFn(delegate, delegateName, name);
                proto[name] = function () {
                    return patchDelegate_1(this, arguments);
                };
                attachOriginToPatched(proto[name], delegate);
            }
        }
        return delegate;
    }
    // TODO: @JiaLiPassion, support cancel task later if necessary
    function patchMacroTask(obj, funcName, metaCreator) {
        var setNative = null;
        function scheduleTask(task) {
            var data = task.data;
            data.args[data.cbIdx] = function () {
                task.invoke.apply(this, arguments);
            };
            setNative.apply(data.target, data.args);
            return task;
        }
        setNative = patchMethod(obj, funcName, function (delegate) { return function (self, args) {
            var meta = metaCreator(self, args);
            if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
                return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
            }
            else {
                // cause an error by calling it directly.
                return delegate.apply(self, args);
            }
        }; });
    }
    function attachOriginToPatched(patched, original) {
        patched[zoneSymbol('OriginalDelegate')] = original;
    }
    var isDetectedIEOrEdge = false;
    var ieOrEdge = false;
    function isIE() {
        try {
            var ua = internalWindow.navigator.userAgent;
            if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
                return true;
            }
        }
        catch (error) {
        }
        return false;
    }
    function isIEOrEdge() {
        if (isDetectedIEOrEdge) {
            return ieOrEdge;
        }
        isDetectedIEOrEdge = true;
        try {
            var ua = internalWindow.navigator.userAgent;
            if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
                ieOrEdge = true;
            }
        }
        catch (error) {
        }
        return ieOrEdge;
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
        var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
        var ObjectDefineProperty = Object.defineProperty;
        function readableObjectToString(obj) {
            if (obj && obj.toString === Object.prototype.toString) {
                var className = obj.constructor && obj.constructor.name;
                return (className ? className : '') + ': ' + JSON.stringify(obj);
            }
            return obj ? obj.toString() : Object.prototype.toString.call(obj);
        }
        var __symbol__ = api.symbol;
        var _uncaughtPromiseErrors = [];
        var isDisableWrappingUncaughtPromiseRejection = global[__symbol__('DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION')] === true;
        var symbolPromise = __symbol__('Promise');
        var symbolThen = __symbol__('then');
        var creationTrace = '__creationTrace__';
        api.onUnhandledError = function (e) {
            if (api.showUncaughtError()) {
                var rejection = e && e.rejection;
                if (rejection) {
                    console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
                }
                else {
                    console.error(e);
                }
            }
        };
        api.microtaskDrainDone = function () {
            var _loop_2 = function () {
                var uncaughtPromiseError = _uncaughtPromiseErrors.shift();
                try {
                    uncaughtPromiseError.zone.runGuarded(function () {
                        if (uncaughtPromiseError.throwOriginal) {
                            throw uncaughtPromiseError.rejection;
                        }
                        throw uncaughtPromiseError;
                    });
                }
                catch (error) {
                    handleUnhandledRejection(error);
                }
            };
            while (_uncaughtPromiseErrors.length) {
                _loop_2();
            }
        };
        var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');
        function handleUnhandledRejection(e) {
            api.onUnhandledError(e);
            try {
                var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
                if (typeof handler === 'function') {
                    handler.call(this, e);
                }
            }
            catch (err) {
            }
        }
        function isThenable(value) {
            return value && value.then;
        }
        function forwardResolution(value) {
            return value;
        }
        function forwardRejection(rejection) {
            return ZoneAwarePromise.reject(rejection);
        }
        var symbolState = __symbol__('state');
        var symbolValue = __symbol__('value');
        var symbolFinally = __symbol__('finally');
        var symbolParentPromiseValue = __symbol__('parentPromiseValue');
        var symbolParentPromiseState = __symbol__('parentPromiseState');
        var source = 'Promise.then';
        var UNRESOLVED = null;
        var RESOLVED = true;
        var REJECTED = false;
        var REJECTED_NO_CATCH = 0;
        function makeResolver(promise, state) {
            return function (v) {
                try {
                    resolvePromise(promise, state, v);
                }
                catch (err) {
                    resolvePromise(promise, false, err);
                }
                // Do not return value or you will break the Promise spec.
            };
        }
        var once = function () {
            var wasCalled = false;
            return function wrapper(wrappedFunction) {
                return function () {
                    if (wasCalled) {
                        return;
                    }
                    wasCalled = true;
                    wrappedFunction.apply(null, arguments);
                };
            };
        };
        var TYPE_ERROR = 'Promise resolved with itself';
        var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace');
        // Promise Resolution
        function resolvePromise(promise, state, value) {
            var onceWrapper = once();
            if (promise === value) {
                throw new TypeError(TYPE_ERROR);
            }
            if (promise[symbolState] === UNRESOLVED) {
                // should only get value.then once based on promise spec.
                var then = null;
                try {
                    if (typeof value === 'object' || typeof value === 'function') {
                        then = value && value.then;
                    }
                }
                catch (err) {
                    onceWrapper(function () {
                        resolvePromise(promise, false, err);
                    })();
                    return promise;
                }
                // if (value instanceof ZoneAwarePromise) {
                if (state !== REJECTED && value instanceof ZoneAwarePromise &&
                    value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) &&
                    value[symbolState] !== UNRESOLVED) {
                    clearRejectedNoCatch(value);
                    resolvePromise(promise, value[symbolState], value[symbolValue]);
                }
                else if (state !== REJECTED && typeof then === 'function') {
                    try {
                        then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
                    }
                    catch (err) {
                        onceWrapper(function () {
                            resolvePromise(promise, false, err);
                        })();
                    }
                }
                else {
                    promise[symbolState] = state;
                    var queue = promise[symbolValue];
                    promise[symbolValue] = value;
                    if (promise[symbolFinally] === symbolFinally) {
                        // the promise is generated by Promise.prototype.finally
                        if (state === RESOLVED) {
                            // the state is resolved, should ignore the value
                            // and use parent promise value
                            promise[symbolState] = promise[symbolParentPromiseState];
                            promise[symbolValue] = promise[symbolParentPromiseValue];
                        }
                    }
                    // record task information in value when error occurs, so we can
                    // do some additional work such as render longStackTrace
                    if (state === REJECTED && value instanceof Error) {
                        // check if longStackTraceZone is here
                        var trace = Zone.currentTask && Zone.currentTask.data &&
                            Zone.currentTask.data[creationTrace];
                        if (trace) {
                            // only keep the long stack trace into error when in longStackTraceZone
                            ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, { configurable: true, enumerable: false, writable: true, value: trace });
                        }
                    }
                    for (var i = 0; i < queue.length;) {
                        scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
                    }
                    if (queue.length == 0 && state == REJECTED) {
                        promise[symbolState] = REJECTED_NO_CATCH;
                        var uncaughtPromiseError = value;
                        try {
                            // Here we throws a new Error to print more readable error log
                            // and if the value is not an error, zone.js builds an `Error`
                            // Object here to attach the stack information.
                            throw new Error('Uncaught (in promise): ' + readableObjectToString(value) +
                                (value && value.stack ? '\n' + value.stack : ''));
                        }
                        catch (err) {
                            uncaughtPromiseError = err;
                        }
                        if (isDisableWrappingUncaughtPromiseRejection) {
                            // If disable wrapping uncaught promise reject
                            // use the value instead of wrapping it.
                            uncaughtPromiseError.throwOriginal = true;
                        }
                        uncaughtPromiseError.rejection = value;
                        uncaughtPromiseError.promise = promise;
                        uncaughtPromiseError.zone = Zone.current;
                        uncaughtPromiseError.task = Zone.currentTask;
                        _uncaughtPromiseErrors.push(uncaughtPromiseError);
                        api.scheduleMicroTask(); // to make sure that it is running
                    }
                }
            }
            // Resolving an already resolved promise is a noop.
            return promise;
        }
        var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');
        function clearRejectedNoCatch(promise) {
            if (promise[symbolState] === REJECTED_NO_CATCH) {
                // if the promise is rejected no catch status
                // and queue.length > 0, means there is a error handler
                // here to handle the rejected promise, we should trigger
                // windows.rejectionhandled eventHandler or nodejs rejectionHandled
                // eventHandler
                try {
                    var handler = Zone[REJECTION_HANDLED_HANDLER];
                    if (handler && typeof handler === 'function') {
                        handler.call(this, { rejection: promise[symbolValue], promise: promise });
                    }
                }
                catch (err) {
                }
                promise[symbolState] = REJECTED;
                for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
                    if (promise === _uncaughtPromiseErrors[i].promise) {
                        _uncaughtPromiseErrors.splice(i, 1);
                    }
                }
            }
        }
        function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
            clearRejectedNoCatch(promise);
            var promiseState = promise[symbolState];
            var delegate = promiseState ?
                (typeof onFulfilled === 'function') ? onFulfilled : forwardResolution :
                (typeof onRejected === 'function') ? onRejected : forwardRejection;
            zone.scheduleMicroTask(source, function () {
                try {
                    var parentPromiseValue = promise[symbolValue];
                    var isFinallyPromise = !!chainPromise && symbolFinally === chainPromise[symbolFinally];
                    if (isFinallyPromise) {
                        // if the promise is generated from finally call, keep parent promise's state and value
                        chainPromise[symbolParentPromiseValue] = parentPromiseValue;
                        chainPromise[symbolParentPromiseState] = promiseState;
                    }
                    // should not pass value to finally callback
                    var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ?
                        [] :
                        [parentPromiseValue]);
                    resolvePromise(chainPromise, true, value);
                }
                catch (error) {
                    // if error occurs, should always return this error
                    resolvePromise(chainPromise, false, error);
                }
            }, chainPromise);
        }
        var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';
        var noop = function () { };
        var ZoneAwarePromise = /** @class */ (function () {
            function ZoneAwarePromise(executor) {
                var promise = this;
                if (!(promise instanceof ZoneAwarePromise)) {
                    throw new Error('Must be an instanceof Promise.');
                }
                promise[symbolState] = UNRESOLVED;
                promise[symbolValue] = []; // queue;
                try {
                    executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
                }
                catch (error) {
                    resolvePromise(promise, false, error);
                }
            }
            ZoneAwarePromise.toString = function () {
                return ZONE_AWARE_PROMISE_TO_STRING;
            };
            ZoneAwarePromise.resolve = function (value) {
                return resolvePromise(new this(null), RESOLVED, value);
            };
            ZoneAwarePromise.reject = function (error) {
                return resolvePromise(new this(null), REJECTED, error);
            };
            ZoneAwarePromise.race = function (values) {
                var resolve;
                var reject;
                var promise = new this(function (res, rej) {
                    resolve = res;
                    reject = rej;
                });
                function onResolve(value) {
                    resolve(value);
                }
                function onReject(error) {
                    reject(error);
                }
                for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
                    var value = values_1[_i];
                    if (!isThenable(value)) {
                        value = this.resolve(value);
                    }
                    value.then(onResolve, onReject);
                }
                return promise;
            };
            ZoneAwarePromise.all = function (values) {
                return ZoneAwarePromise.allWithCallback(values);
            };
            ZoneAwarePromise.allSettled = function (values) {
                var P = this && this.prototype instanceof ZoneAwarePromise ? this : ZoneAwarePromise;
                return P.allWithCallback(values, {
                    thenCallback: function (value) { return ({ status: 'fulfilled', value: value }); },
                    errorCallback: function (err) { return ({ status: 'rejected', reason: err }); }
                });
            };
            ZoneAwarePromise.allWithCallback = function (values, callback) {
                var resolve;
                var reject;
                var promise = new this(function (res, rej) {
                    resolve = res;
                    reject = rej;
                });
                // Start at 2 to prevent prematurely resolving if .then is called immediately.
                var unresolvedCount = 2;
                var valueIndex = 0;
                var resolvedValues = [];
                var _loop_3 = function (value) {
                    if (!isThenable(value)) {
                        value = this_1.resolve(value);
                    }
                    var curValueIndex = valueIndex;
                    try {
                        value.then(function (value) {
                            resolvedValues[curValueIndex] = callback ? callback.thenCallback(value) : value;
                            unresolvedCount--;
                            if (unresolvedCount === 0) {
                                resolve(resolvedValues);
                            }
                        }, function (err) {
                            if (!callback) {
                                reject(err);
                            }
                            else {
                                resolvedValues[curValueIndex] = callback.errorCallback(err);
                                unresolvedCount--;
                                if (unresolvedCount === 0) {
                                    resolve(resolvedValues);
                                }
                            }
                        });
                    }
                    catch (thenErr) {
                        reject(thenErr);
                    }
                    unresolvedCount++;
                    valueIndex++;
                };
                var this_1 = this;
                for (var _i = 0, values_2 = values; _i < values_2.length; _i++) {
                    var value = values_2[_i];
                    _loop_3(value);
                }
                // Make the unresolvedCount zero-based again.
                unresolvedCount -= 2;
                if (unresolvedCount === 0) {
                    resolve(resolvedValues);
                }
                return promise;
            };
            Object.defineProperty(ZoneAwarePromise.prototype, Symbol.toStringTag, {
                get: function () {
                    return 'Promise';
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(ZoneAwarePromise.prototype, Symbol.species, {
                get: function () {
                    return ZoneAwarePromise;
                },
                enumerable: false,
                configurable: true
            });
            ZoneAwarePromise.prototype.then = function (onFulfilled, onRejected) {
                var C = this.constructor[Symbol.species];
                if (!C || typeof C !== 'function') {
                    C = this.constructor || ZoneAwarePromise;
                }
                var chainPromise = new C(noop);
                var zone = Zone.current;
                if (this[symbolState] == UNRESOLVED) {
                    this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
                }
                else {
                    scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
                }
                return chainPromise;
            };
            ZoneAwarePromise.prototype.catch = function (onRejected) {
                return this.then(null, onRejected);
            };
            ZoneAwarePromise.prototype.finally = function (onFinally) {
                var C = this.constructor[Symbol.species];
                if (!C || typeof C !== 'function') {
                    C = ZoneAwarePromise;
                }
                var chainPromise = new C(noop);
                chainPromise[symbolFinally] = symbolFinally;
                var zone = Zone.current;
                if (this[symbolState] == UNRESOLVED) {
                    this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
                }
                else {
                    scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
                }
                return chainPromise;
            };
            return ZoneAwarePromise;
        }());
        // Protect against aggressive optimizers dropping seemingly unused properties.
        // E.g. Closure Compiler in advanced mode.
        ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
        ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
        ZoneAwarePromise['race'] = ZoneAwarePromise.race;
        ZoneAwarePromise['all'] = ZoneAwarePromise.all;
        var NativePromise = global[symbolPromise] = global['Promise'];
        global['Promise'] = ZoneAwarePromise;
        var symbolThenPatched = __symbol__('thenPatched');
        function patchThen(Ctor) {
            var proto = Ctor.prototype;
            var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');
            if (prop && (prop.writable === false || !prop.configurable)) {
                // check Ctor.prototype.then propertyDescriptor is writable or not
                // in meteor env, writable is false, we should ignore such case
                return;
            }
            var originalThen = proto.then;
            // Keep a reference to the original method.
            proto[symbolThen] = originalThen;
            Ctor.prototype.then = function (onResolve, onReject) {
                var _this = this;
                var wrapped = new ZoneAwarePromise(function (resolve, reject) {
                    originalThen.call(_this, resolve, reject);
                });
                return wrapped.then(onResolve, onReject);
            };
            Ctor[symbolThenPatched] = true;
        }
        api.patchThen = patchThen;
        function zoneify(fn) {
            return function (self, args) {
                var resultPromise = fn.apply(self, args);
                if (resultPromise instanceof ZoneAwarePromise) {
                    return resultPromise;
                }
                var ctor = resultPromise.constructor;
                if (!ctor[symbolThenPatched]) {
                    patchThen(ctor);
                }
                return resultPromise;
            };
        }
        if (NativePromise) {
            patchThen(NativePromise);
            patchMethod(global, 'fetch', function (delegate) { return zoneify(delegate); });
        }
        // This is not part of public API, but it is useful for tests, so we expose it.
        Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
        return ZoneAwarePromise;
    });
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // override Function.prototype.toString to make zone.js patched function
    // look like native function
    Zone.__load_patch('toString', function (global) {
        // patch Func.prototype.toString to let them look like native
        var originalFunctionToString = Function.prototype.toString;
        var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
        var PROMISE_SYMBOL = zoneSymbol('Promise');
        var ERROR_SYMBOL = zoneSymbol('Error');
        var newFunctionToString = function toString() {
            if (typeof this === 'function') {
                var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
                if (originalDelegate) {
                    if (typeof originalDelegate === 'function') {
                        return originalFunctionToString.call(originalDelegate);
                    }
                    else {
                        return Object.prototype.toString.call(originalDelegate);
                    }
                }
                if (this === Promise) {
                    var nativePromise = global[PROMISE_SYMBOL];
                    if (nativePromise) {
                        return originalFunctionToString.call(nativePromise);
                    }
                }
                if (this === Error) {
                    var nativeError = global[ERROR_SYMBOL];
                    if (nativeError) {
                        return originalFunctionToString.call(nativeError);
                    }
                }
            }
            return originalFunctionToString.call(this);
        };
        newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
        Function.prototype.toString = newFunctionToString;
        // patch Object.prototype.toString to let them look like native
        var originalObjectToString = Object.prototype.toString;
        var PROMISE_OBJECT_TO_STRING = '[object Promise]';
        Object.prototype.toString = function () {
            if (typeof Promise === 'function' && this instanceof Promise) {
                return PROMISE_OBJECT_TO_STRING;
            }
            return originalObjectToString.call(this);
        };
    });
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var passiveSupported = false;
    if (typeof window !== 'undefined') {
        try {
            var options = Object.defineProperty({}, 'passive', {
                get: function () {
                    passiveSupported = true;
                }
            });
            window.addEventListener('test', options, options);
            window.removeEventListener('test', options, options);
        }
        catch (err) {
            passiveSupported = false;
        }
    }
    // an identifier to tell ZoneTask do not create a new invoke closure
    var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
        useG: true
    };
    var zoneSymbolEventNames$1 = {};
    var globalSources = {};
    var EVENT_NAME_SYMBOL_REGX = new RegExp('^' + ZONE_SYMBOL_PREFIX + '(\\w+)(true|false)$');
    var IMMEDIATE_PROPAGATION_SYMBOL = zoneSymbol('propagationStopped');
    function prepareEventNames(eventName, eventNameToString) {
        var falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
        var trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames$1[eventName] = {};
        zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
    }
    function patchEventTarget(_global, apis, patchOptions) {
        var ADD_EVENT_LISTENER = (patchOptions && patchOptions.add) || ADD_EVENT_LISTENER_STR;
        var REMOVE_EVENT_LISTENER = (patchOptions && patchOptions.rm) || REMOVE_EVENT_LISTENER_STR;
        var LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.listeners) || 'eventListeners';
        var REMOVE_ALL_LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.rmAll) || 'removeAllListeners';
        var zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
        var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
        var PREPEND_EVENT_LISTENER = 'prependListener';
        var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';
        var invokeTask = function (task, target, event) {
            // for better performance, check isRemoved which is set
            // by removeEventListener
            if (task.isRemoved) {
                return;
            }
            var delegate = task.callback;
            if (typeof delegate === 'object' && delegate.handleEvent) {
                // create the bind version of handleEvent when invoke
                task.callback = function (event) { return delegate.handleEvent(event); };
                task.originalDelegate = delegate;
            }
            // invoke static task.invoke
            task.invoke(task, target, [event]);
            var options = task.options;
            if (options && typeof options === 'object' && options.once) {
                // if options.once is true, after invoke once remove listener here
                // only browser need to do this, nodejs eventEmitter will cal removeListener
                // inside EventEmitter.once
                var delegate_1 = task.originalDelegate ? task.originalDelegate : task.callback;
                target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate_1, options);
            }
        };
        // global shared zoneAwareCallback to handle all event callback with capture = false
        var globalZoneAwareCallback = function (event) {
            // https://github.com/angular/zone.js/issues/911, in IE, sometimes
            // event will be undefined, so we need to use window.event
            event = event || _global.event;
            if (!event) {
                return;
            }
            // event.target is needed for Samsung TV and SourceBuffer
            // || global is needed https://github.com/angular/zone.js/issues/190
            var target = this || event.target || _global;
            var tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];
            if (tasks) {
                // invoke all tasks which attached to current target with given event.type and capture = false
                // for performance concern, if task.length === 1, just invoke
                if (tasks.length === 1) {
                    invokeTask(tasks[0], target, event);
                }
                else {
                    // https://github.com/angular/zone.js/issues/836
                    // copy the tasks array before invoke, to avoid
                    // the callback will remove itself or other listener
                    var copyTasks = tasks.slice();
                    for (var i = 0; i < copyTasks.length; i++) {
                        if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                            break;
                        }
                        invokeTask(copyTasks[i], target, event);
                    }
                }
            }
        };
        // global shared zoneAwareCallback to handle all event callback with capture = true
        var globalZoneAwareCaptureCallback = function (event) {
            // https://github.com/angular/zone.js/issues/911, in IE, sometimes
            // event will be undefined, so we need to use window.event
            event = event || _global.event;
            if (!event) {
                return;
            }
            // event.target is needed for Samsung TV and SourceBuffer
            // || global is needed https://github.com/angular/zone.js/issues/190
            var target = this || event.target || _global;
            var tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];
            if (tasks) {
                // invoke all tasks which attached to current target with given event.type and capture = false
                // for performance concern, if task.length === 1, just invoke
                if (tasks.length === 1) {
                    invokeTask(tasks[0], target, event);
                }
                else {
                    // https://github.com/angular/zone.js/issues/836
                    // copy the tasks array before invoke, to avoid
                    // the callback will remove itself or other listener
                    var copyTasks = tasks.slice();
                    for (var i = 0; i < copyTasks.length; i++) {
                        if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                            break;
                        }
                        invokeTask(copyTasks[i], target, event);
                    }
                }
            }
        };
        function patchEventTargetMethods(obj, patchOptions) {
            if (!obj) {
                return false;
            }
            var useGlobalCallback = true;
            if (patchOptions && patchOptions.useG !== undefined) {
                useGlobalCallback = patchOptions.useG;
            }
            var validateHandler = patchOptions && patchOptions.vh;
            var checkDuplicate = true;
            if (patchOptions && patchOptions.chkDup !== undefined) {
                checkDuplicate = patchOptions.chkDup;
            }
            var returnTarget = false;
            if (patchOptions && patchOptions.rt !== undefined) {
                returnTarget = patchOptions.rt;
            }
            var proto = obj;
            while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
                proto = ObjectGetPrototypeOf(proto);
            }
            if (!proto && obj[ADD_EVENT_LISTENER]) {
                // somehow we did not find it, but we can see it. This happens on IE for Window properties.
                proto = obj;
            }
            if (!proto) {
                return false;
            }
            if (proto[zoneSymbolAddEventListener]) {
                return false;
            }
            var eventNameToString = patchOptions && patchOptions.eventNameToString;
            // a shared global taskData to pass data for scheduleEventTask
            // so we do not need to create a new object just for pass some data
            var taskData = {};
            var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
            var nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] =
                proto[REMOVE_EVENT_LISTENER];
            var nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] =
                proto[LISTENERS_EVENT_LISTENER];
            var nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] =
                proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
            var nativePrependEventListener;
            if (patchOptions && patchOptions.prepend) {
                nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] =
                    proto[patchOptions.prepend];
            }
            /**
             * This util function will build an option object with passive option
             * to handle all possible input from the user.
             */
            function buildEventListenerOptions(options, passive) {
                if (!passiveSupported && typeof options === 'object' && options) {
                    // doesn't support passive but user want to pass an object as options.
                    // this will not work on some old browser, so we just pass a boolean
                    // as useCapture parameter
                    return !!options.capture;
                }
                if (!passiveSupported || !passive) {
                    return options;
                }
                if (typeof options === 'boolean') {
                    return { capture: options, passive: true };
                }
                if (!options) {
                    return { passive: true };
                }
                if (typeof options === 'object' && options.passive !== false) {
                    return Object.assign(Object.assign({}, options), { passive: true });
                }
                return options;
            }
            var customScheduleGlobal = function (task) {
                // if there is already a task for the eventName + capture,
                // just return, because we use the shared globalZoneAwareCallback here.
                if (taskData.isExisting) {
                    return;
                }
                return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
            };
            var customCancelGlobal = function (task) {
                // if task is not marked as isRemoved, this call is directly
                // from Zone.prototype.cancelTask, we should remove the task
                // from tasksList of target first
                if (!task.isRemoved) {
                    var symbolEventNames = zoneSymbolEventNames$1[task.eventName];
                    var symbolEventName = void 0;
                    if (symbolEventNames) {
                        symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
                    }
                    var existingTasks = symbolEventName && task.target[symbolEventName];
                    if (existingTasks) {
                        for (var i = 0; i < existingTasks.length; i++) {
                            var existingTask = existingTasks[i];
                            if (existingTask === task) {
                                existingTasks.splice(i, 1);
                                // set isRemoved to data for faster invokeTask check
                                task.isRemoved = true;
                                if (existingTasks.length === 0) {
                                    // all tasks for the eventName + capture have gone,
                                    // remove globalZoneAwareCallback and remove the task cache from target
                                    task.allRemoved = true;
                                    task.target[symbolEventName] = null;
                                }
                                break;
                            }
                        }
                    }
                }
                // if all tasks for the eventName + capture have gone,
                // we will really remove the global event callback,
                // if not, return
                if (!task.allRemoved) {
                    return;
                }
                return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
            };
            var customScheduleNonGlobal = function (task) {
                return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
            };
            var customSchedulePrepend = function (task) {
                return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
            };
            var customCancelNonGlobal = function (task) {
                return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
            };
            var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
            var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
            var compareTaskCallbackVsDelegate = function (task, delegate) {
                var typeOfDelegate = typeof delegate;
                return (typeOfDelegate === 'function' && task.callback === delegate) ||
                    (typeOfDelegate === 'object' && task.originalDelegate === delegate);
            };
            var compare = (patchOptions && patchOptions.diff) ? patchOptions.diff : compareTaskCallbackVsDelegate;
            var unpatchedEvents = Zone[zoneSymbol('UNPATCHED_EVENTS')];
            var passiveEvents = _global[zoneSymbol('PASSIVE_EVENTS')];
            var makeAddListener = function (nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget, prepend) {
                if (returnTarget === void 0) { returnTarget = false; }
                if (prepend === void 0) { prepend = false; }
                return function () {
                    var target = this || _global;
                    var eventName = arguments[0];
                    if (patchOptions && patchOptions.transferEventName) {
                        eventName = patchOptions.transferEventName(eventName);
                    }
                    var delegate = arguments[1];
                    if (!delegate) {
                        return nativeListener.apply(this, arguments);
                    }
                    if (isNode && eventName === 'uncaughtException') {
                        // don't patch uncaughtException of nodejs to prevent endless loop
                        return nativeListener.apply(this, arguments);
                    }
                    // don't create the bind delegate function for handleEvent
                    // case here to improve addEventListener performance
                    // we will create the bind delegate when invoke
                    var isHandleEvent = false;
                    if (typeof delegate !== 'function') {
                        if (!delegate.handleEvent) {
                            return nativeListener.apply(this, arguments);
                        }
                        isHandleEvent = true;
                    }
                    if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
                        return;
                    }
                    var passive = passiveSupported && !!passiveEvents && passiveEvents.indexOf(eventName) !== -1;
                    var options = buildEventListenerOptions(arguments[2], passive);
                    if (unpatchedEvents) {
                        // check upatched list
                        for (var i = 0; i < unpatchedEvents.length; i++) {
                            if (eventName === unpatchedEvents[i]) {
                                if (passive) {
                                    return nativeListener.call(target, eventName, delegate, options);
                                }
                                else {
                                    return nativeListener.apply(this, arguments);
                                }
                            }
                        }
                    }
                    var capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
                    var once = options && typeof options === 'object' ? options.once : false;
                    var zone = Zone.current;
                    var symbolEventNames = zoneSymbolEventNames$1[eventName];
                    if (!symbolEventNames) {
                        prepareEventNames(eventName, eventNameToString);
                        symbolEventNames = zoneSymbolEventNames$1[eventName];
                    }
                    var symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
                    var existingTasks = target[symbolEventName];
                    var isExisting = false;
                    if (existingTasks) {
                        // already have task registered
                        isExisting = true;
                        if (checkDuplicate) {
                            for (var i = 0; i < existingTasks.length; i++) {
                                if (compare(existingTasks[i], delegate)) {
                                    // same callback, same capture, same event name, just return
                                    return;
                                }
                            }
                        }
                    }
                    else {
                        existingTasks = target[symbolEventName] = [];
                    }
                    var source;
                    var constructorName = target.constructor['name'];
                    var targetSource = globalSources[constructorName];
                    if (targetSource) {
                        source = targetSource[eventName];
                    }
                    if (!source) {
                        source = constructorName + addSource +
                            (eventNameToString ? eventNameToString(eventName) : eventName);
                    }
                    // do not create a new object as task.data to pass those things
                    // just use the global shared one
                    taskData.options = options;
                    if (once) {
                        // if addEventListener with once options, we don't pass it to
                        // native addEventListener, instead we keep the once setting
                        // and handle ourselves.
                        taskData.options.once = false;
                    }
                    taskData.target = target;
                    taskData.capture = capture;
                    taskData.eventName = eventName;
                    taskData.isExisting = isExisting;
                    var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined;
                    // keep taskData into data to allow onScheduleEventTask to access the task information
                    if (data) {
                        data.taskData = taskData;
                    }
                    var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
                    // should clear taskData.target to avoid memory leak
                    // issue, https://github.com/angular/angular/issues/20442
                    taskData.target = null;
                    // need to clear up taskData because it is a global object
                    if (data) {
                        data.taskData = null;
                    }
                    // have to save those information to task in case
                    // application may call task.zone.cancelTask() directly
                    if (once) {
                        options.once = true;
                    }
                    if (!(!passiveSupported && typeof task.options === 'boolean')) {
                        // if not support passive, and we pass an option object
                        // to addEventListener, we should save the options to task
                        task.options = options;
                    }
                    task.target = target;
                    task.capture = capture;
                    task.eventName = eventName;
                    if (isHandleEvent) {
                        // save original delegate for compare to check duplicate
                        task.originalDelegate = delegate;
                    }
                    if (!prepend) {
                        existingTasks.push(task);
                    }
                    else {
                        existingTasks.unshift(task);
                    }
                    if (returnTarget) {
                        return target;
                    }
                };
            };
            proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
            if (nativePrependEventListener) {
                proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
            }
            proto[REMOVE_EVENT_LISTENER] = function () {
                var target = this || _global;
                var eventName = arguments[0];
                if (patchOptions && patchOptions.transferEventName) {
                    eventName = patchOptions.transferEventName(eventName);
                }
                var options = arguments[2];
                var capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
                var delegate = arguments[1];
                if (!delegate) {
                    return nativeRemoveEventListener.apply(this, arguments);
                }
                if (validateHandler &&
                    !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
                    return;
                }
                var symbolEventNames = zoneSymbolEventNames$1[eventName];
                var symbolEventName;
                if (symbolEventNames) {
                    symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = symbolEventName && target[symbolEventName];
                if (existingTasks) {
                    for (var i = 0; i < existingTasks.length; i++) {
                        var existingTask = existingTasks[i];
                        if (compare(existingTask, delegate)) {
                            existingTasks.splice(i, 1);
                            // set isRemoved to data for faster invokeTask check
                            existingTask.isRemoved = true;
                            if (existingTasks.length === 0) {
                                // all tasks for the eventName + capture have gone,
                                // remove globalZoneAwareCallback and remove the task cache from target
                                existingTask.allRemoved = true;
                                target[symbolEventName] = null;
                                // in the target, we have an event listener which is added by on_property
                                // such as target.onclick = function() {}, so we need to clear this internal
                                // property too if all delegates all removed
                                if (typeof eventName === 'string') {
                                    var onPropertySymbol = ZONE_SYMBOL_PREFIX + 'ON_PROPERTY' + eventName;
                                    target[onPropertySymbol] = null;
                                }
                            }
                            existingTask.zone.cancelTask(existingTask);
                            if (returnTarget) {
                                return target;
                            }
                            return;
                        }
                    }
                }
                // issue 930, didn't find the event name or callback
                // from zone kept existingTasks, the callback maybe
                // added outside of zone, we need to call native removeEventListener
                // to try to remove it.
                return nativeRemoveEventListener.apply(this, arguments);
            };
            proto[LISTENERS_EVENT_LISTENER] = function () {
                var target = this || _global;
                var eventName = arguments[0];
                if (patchOptions && patchOptions.transferEventName) {
                    eventName = patchOptions.transferEventName(eventName);
                }
                var listeners = [];
                var tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);
                for (var i = 0; i < tasks.length; i++) {
                    var task = tasks[i];
                    var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                    listeners.push(delegate);
                }
                return listeners;
            };
            proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
                var target = this || _global;
                var eventName = arguments[0];
                if (!eventName) {
                    var keys = Object.keys(target);
                    for (var i = 0; i < keys.length; i++) {
                        var prop = keys[i];
                        var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                        var evtName = match && match[1];
                        // in nodejs EventEmitter, removeListener event is
                        // used for monitoring the removeListener call,
                        // so just keep removeListener eventListener until
                        // all other eventListeners are removed
                        if (evtName && evtName !== 'removeListener') {
                            this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
                        }
                    }
                    // remove removeListener listener finally
                    this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
                }
                else {
                    if (patchOptions && patchOptions.transferEventName) {
                        eventName = patchOptions.transferEventName(eventName);
                    }
                    var symbolEventNames = zoneSymbolEventNames$1[eventName];
                    if (symbolEventNames) {
                        var symbolEventName = symbolEventNames[FALSE_STR];
                        var symbolCaptureEventName = symbolEventNames[TRUE_STR];
                        var tasks = target[symbolEventName];
                        var captureTasks = target[symbolCaptureEventName];
                        if (tasks) {
                            var removeTasks = tasks.slice();
                            for (var i = 0; i < removeTasks.length; i++) {
                                var task = removeTasks[i];
                                var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                                this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                            }
                        }
                        if (captureTasks) {
                            var removeTasks = captureTasks.slice();
                            for (var i = 0; i < removeTasks.length; i++) {
                                var task = removeTasks[i];
                                var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                                this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                            }
                        }
                    }
                }
                if (returnTarget) {
                    return this;
                }
            };
            // for native toString patch
            attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
            attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
            if (nativeRemoveAllListeners) {
                attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
            }
            if (nativeListeners) {
                attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
            }
            return true;
        }
        var results = [];
        for (var i = 0; i < apis.length; i++) {
            results[i] = patchEventTargetMethods(apis[i], patchOptions);
        }
        return results;
    }
    function findEventTasks(target, eventName) {
        if (!eventName) {
            var foundTasks = [];
            for (var prop in target) {
                var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                var evtName = match && match[1];
                if (evtName && (!eventName || evtName === eventName)) {
                    var tasks = target[prop];
                    if (tasks) {
                        for (var i = 0; i < tasks.length; i++) {
                            foundTasks.push(tasks[i]);
                        }
                    }
                }
            }
            return foundTasks;
        }
        var symbolEventName = zoneSymbolEventNames$1[eventName];
        if (!symbolEventName) {
            prepareEventNames(eventName);
            symbolEventName = zoneSymbolEventNames$1[eventName];
        }
        var captureFalseTasks = target[symbolEventName[FALSE_STR]];
        var captureTrueTasks = target[symbolEventName[TRUE_STR]];
        if (!captureFalseTasks) {
            return captureTrueTasks ? captureTrueTasks.slice() : [];
        }
        else {
            return captureTrueTasks ? captureFalseTasks.concat(captureTrueTasks) :
                captureFalseTasks.slice();
        }
    }
    function patchEventPrototype(global, api) {
        var Event = global['Event'];
        if (Event && Event.prototype) {
            api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) { return function (self, args) {
                self[IMMEDIATE_PROPAGATION_SYMBOL] = true;
                // we need to call the native stopImmediatePropagation
                // in case in some hybrid application, some part of
                // application will be controlled by zone, some are not
                delegate && delegate.apply(self, args);
            }; });
        }
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function patchCallbacks(api, target, targetName, method, callbacks) {
        var symbol = Zone.__symbol__(method);
        if (target[symbol]) {
            return;
        }
        var nativeDelegate = target[symbol] = target[method];
        target[method] = function (name, opts, options) {
            if (opts && opts.prototype) {
                callbacks.forEach(function (callback) {
                    var source = targetName + "." + method + "::" + callback;
                    var prototype = opts.prototype;
                    if (prototype.hasOwnProperty(callback)) {
                        var descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);
                        if (descriptor && descriptor.value) {
                            descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);
                            api._redefineProperty(opts.prototype, callback, descriptor);
                        }
                        else if (prototype[callback]) {
                            prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                        }
                    }
                    else if (prototype[callback]) {
                        prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                    }
                });
            }
            return nativeDelegate.call(target, name, opts, options);
        };
        api.attachOriginToPatched(target[method], nativeDelegate);
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var globalEventHandlersEventNames = [
        'abort',
        'animationcancel',
        'animationend',
        'animationiteration',
        'auxclick',
        'beforeinput',
        'blur',
        'cancel',
        'canplay',
        'canplaythrough',
        'change',
        'compositionstart',
        'compositionupdate',
        'compositionend',
        'cuechange',
        'click',
        'close',
        'contextmenu',
        'curechange',
        'dblclick',
        'drag',
        'dragend',
        'dragenter',
        'dragexit',
        'dragleave',
        'dragover',
        'drop',
        'durationchange',
        'emptied',
        'ended',
        'error',
        'focus',
        'focusin',
        'focusout',
        'gotpointercapture',
        'input',
        'invalid',
        'keydown',
        'keypress',
        'keyup',
        'load',
        'loadstart',
        'loadeddata',
        'loadedmetadata',
        'lostpointercapture',
        'mousedown',
        'mouseenter',
        'mouseleave',
        'mousemove',
        'mouseout',
        'mouseover',
        'mouseup',
        'mousewheel',
        'orientationchange',
        'pause',
        'play',
        'playing',
        'pointercancel',
        'pointerdown',
        'pointerenter',
        'pointerleave',
        'pointerlockchange',
        'mozpointerlockchange',
        'webkitpointerlockerchange',
        'pointerlockerror',
        'mozpointerlockerror',
        'webkitpointerlockerror',
        'pointermove',
        'pointout',
        'pointerover',
        'pointerup',
        'progress',
        'ratechange',
        'reset',
        'resize',
        'scroll',
        'seeked',
        'seeking',
        'select',
        'selectionchange',
        'selectstart',
        'show',
        'sort',
        'stalled',
        'submit',
        'suspend',
        'timeupdate',
        'volumechange',
        'touchcancel',
        'touchmove',
        'touchstart',
        'touchend',
        'transitioncancel',
        'transitionend',
        'waiting',
        'wheel'
    ];
    var documentEventNames = [
        'afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'freeze', 'fullscreenchange',
        'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror',
        'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange',
        'visibilitychange', 'resume'
    ];
    var windowEventNames = [
        'absolutedeviceorientation',
        'afterinput',
        'afterprint',
        'appinstalled',
        'beforeinstallprompt',
        'beforeprint',
        'beforeunload',
        'devicelight',
        'devicemotion',
        'deviceorientation',
        'deviceorientationabsolute',
        'deviceproximity',
        'hashchange',
        'languagechange',
        'message',
        'mozbeforepaint',
        'offline',
        'online',
        'paint',
        'pageshow',
        'pagehide',
        'popstate',
        'rejectionhandled',
        'storage',
        'unhandledrejection',
        'unload',
        'userproximity',
        'vrdisplayconnected',
        'vrdisplaydisconnected',
        'vrdisplaypresentchange'
    ];
    var htmlElementEventNames = [
        'beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend',
        'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend',
        'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'
    ];
    var mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
    var ieElementEventNames = [
        'activate',
        'afterupdate',
        'ariarequest',
        'beforeactivate',
        'beforedeactivate',
        'beforeeditfocus',
        'beforeupdate',
        'cellchange',
        'controlselect',
        'dataavailable',
        'datasetchanged',
        'datasetcomplete',
        'errorupdate',
        'filterchange',
        'layoutcomplete',
        'losecapture',
        'move',
        'moveend',
        'movestart',
        'propertychange',
        'resizeend',
        'resizestart',
        'rowenter',
        'rowexit',
        'rowsdelete',
        'rowsinserted',
        'command',
        'compassneedscalibration',
        'deactivate',
        'help',
        'mscontentzoom',
        'msmanipulationstatechanged',
        'msgesturechange',
        'msgesturedoubletap',
        'msgestureend',
        'msgesturehold',
        'msgesturestart',
        'msgesturetap',
        'msgotpointercapture',
        'msinertiastart',
        'mslostpointercapture',
        'mspointercancel',
        'mspointerdown',
        'mspointerenter',
        'mspointerhover',
        'mspointerleave',
        'mspointermove',
        'mspointerout',
        'mspointerover',
        'mspointerup',
        'pointerout',
        'mssitemodejumplistitemremoved',
        'msthumbnailclick',
        'stop',
        'storagecommit'
    ];
    var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
    var formEventNames = ['autocomplete', 'autocompleteerror'];
    var detailEventNames = ['toggle'];
    var frameEventNames = ['load'];
    var frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
    var marqueeEventNames = ['bounce', 'finish', 'start'];
    var XMLHttpRequestEventNames = [
        'loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend',
        'readystatechange'
    ];
    var IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
    var websocketEventNames = ['close', 'error', 'open', 'message'];
    var workerEventNames = ['error', 'message'];
    var eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);
    function filterProperties(target, onProperties, ignoreProperties) {
        if (!ignoreProperties || ignoreProperties.length === 0) {
            return onProperties;
        }
        var tip = ignoreProperties.filter(function (ip) { return ip.target === target; });
        if (!tip || tip.length === 0) {
            return onProperties;
        }
        var targetIgnoreProperties = tip[0].ignoreProperties;
        return onProperties.filter(function (op) { return targetIgnoreProperties.indexOf(op) === -1; });
    }
    function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
        // check whether target is available, sometimes target will be undefined
        // because different browser or some 3rd party plugin.
        if (!target) {
            return;
        }
        var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
        patchOnProperties(target, filteredProperties, prototype);
    }
    function propertyDescriptorPatch(api, _global) {
        if (isNode && !isMix) {
            return;
        }
        if (Zone[api.symbol('patchEvents')]) {
            // events are already been patched by legacy patch.
            return;
        }
        var supportsWebSocket = typeof WebSocket !== 'undefined';
        var ignoreProperties = _global['__Zone_ignore_on_properties'];
        // for browsers that we can patch the descriptor:  Chrome & Firefox
        if (isBrowser) {
            var internalWindow_1 = window;
            var ignoreErrorProperties = isIE() ? [{ target: internalWindow_1, ignoreProperties: ['error'] }] : [];
            // in IE/Edge, onProp not exist in window object, but in WindowPrototype
            // so we need to pass WindowPrototype to check onProp exist or not
            patchFilteredProperties(internalWindow_1, eventNames.concat(['messageerror']), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(internalWindow_1));
            patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);
            if (typeof internalWindow_1['SVGElement'] !== 'undefined') {
                patchFilteredProperties(internalWindow_1['SVGElement'].prototype, eventNames, ignoreProperties);
            }
            patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
            patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
            patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
            patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
            patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
            patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
            patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
            var HTMLMarqueeElement_1 = internalWindow_1['HTMLMarqueeElement'];
            if (HTMLMarqueeElement_1) {
                patchFilteredProperties(HTMLMarqueeElement_1.prototype, marqueeEventNames, ignoreProperties);
            }
            var Worker_1 = internalWindow_1['Worker'];
            if (Worker_1) {
                patchFilteredProperties(Worker_1.prototype, workerEventNames, ignoreProperties);
            }
        }
        var XMLHttpRequest = _global['XMLHttpRequest'];
        if (XMLHttpRequest) {
            // XMLHttpRequest is not available in ServiceWorker, so we need to check here
            patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
        }
        var XMLHttpRequestEventTarget = _global['XMLHttpRequestEventTarget'];
        if (XMLHttpRequestEventTarget) {
            patchFilteredProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames, ignoreProperties);
        }
        if (typeof IDBIndex !== 'undefined') {
            patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
            patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
        }
        if (supportsWebSocket) {
            patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
        }
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    Zone.__load_patch('util', function (global, Zone, api) {
        api.patchOnProperties = patchOnProperties;
        api.patchMethod = patchMethod;
        api.bindArguments = bindArguments;
        api.patchMacroTask = patchMacroTask;
        // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS` to
        // define which events will not be patched by `Zone.js`.
        // In newer version (>=0.9.0), we change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep
        // the name consistent with angular repo.
        // The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be supported for
        // backwards compatibility.
        var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');
        var SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');
        if (global[SYMBOL_UNPATCHED_EVENTS]) {
            global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
        }
        if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
            Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] =
                global[SYMBOL_BLACK_LISTED_EVENTS];
        }
        api.patchEventPrototype = patchEventPrototype;
        api.patchEventTarget = patchEventTarget;
        api.isIEOrEdge = isIEOrEdge;
        api.ObjectDefineProperty = ObjectDefineProperty;
        api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
        api.ObjectCreate = ObjectCreate;
        api.ArraySlice = ArraySlice;
        api.patchClass = patchClass;
        api.wrapWithCurrentZone = wrapWithCurrentZone;
        api.filterProperties = filterProperties;
        api.attachOriginToPatched = attachOriginToPatched;
        api._redefineProperty = Object.defineProperty;
        api.patchCallbacks = patchCallbacks;
        api.getGlobalObjects = function () { return ({
            globalSources: globalSources,
            zoneSymbolEventNames: zoneSymbolEventNames$1,
            eventNames: eventNames,
            isBrowser: isBrowser,
            isMix: isMix,
            isNode: isNode,
            TRUE_STR: TRUE_STR,
            FALSE_STR: FALSE_STR,
            ZONE_SYMBOL_PREFIX: ZONE_SYMBOL_PREFIX,
            ADD_EVENT_LISTENER_STR: ADD_EVENT_LISTENER_STR,
            REMOVE_EVENT_LISTENER_STR: REMOVE_EVENT_LISTENER_STR
        }); };
    });
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /*
     * This is necessary for Chrome and Chrome mobile, to enable
     * things like redefining `createdCallback` on an element.
     */
    var zoneSymbol$1;
    var _defineProperty;
    var _getOwnPropertyDescriptor;
    var _create;
    var unconfigurablesKey;
    function propertyPatch() {
        zoneSymbol$1 = Zone.__symbol__;
        _defineProperty = Object[zoneSymbol$1('defineProperty')] = Object.defineProperty;
        _getOwnPropertyDescriptor = Object[zoneSymbol$1('getOwnPropertyDescriptor')] =
            Object.getOwnPropertyDescriptor;
        _create = Object.create;
        unconfigurablesKey = zoneSymbol$1('unconfigurables');
        Object.defineProperty = function (obj, prop, desc) {
            if (isUnconfigurable(obj, prop)) {
                throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
            }
            var originalConfigurableFlag = desc.configurable;
            if (prop !== 'prototype') {
                desc = rewriteDescriptor(obj, prop, desc);
            }
            return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
        };
        Object.defineProperties = function (obj, props) {
            Object.keys(props).forEach(function (prop) {
                Object.defineProperty(obj, prop, props[prop]);
            });
            return obj;
        };
        Object.create = function (obj, proto) {
            if (typeof proto === 'object' && !Object.isFrozen(proto)) {
                Object.keys(proto).forEach(function (prop) {
                    proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
                });
            }
            return _create(obj, proto);
        };
        Object.getOwnPropertyDescriptor = function (obj, prop) {
            var desc = _getOwnPropertyDescriptor(obj, prop);
            if (desc && isUnconfigurable(obj, prop)) {
                desc.configurable = false;
            }
            return desc;
        };
    }
    function _redefineProperty(obj, prop, desc) {
        var originalConfigurableFlag = desc.configurable;
        desc = rewriteDescriptor(obj, prop, desc);
        return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
    }
    function isUnconfigurable(obj, prop) {
        return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
    }
    function rewriteDescriptor(obj, prop, desc) {
        // issue-927, if the desc is frozen, don't try to change the desc
        if (!Object.isFrozen(desc)) {
            desc.configurable = true;
        }
        if (!desc.configurable) {
            // issue-927, if the obj is frozen, don't try to set the desc to obj
            if (!obj[unconfigurablesKey] && !Object.isFrozen(obj)) {
                _defineProperty(obj, unconfigurablesKey, { writable: true, value: {} });
            }
            if (obj[unconfigurablesKey]) {
                obj[unconfigurablesKey][prop] = true;
            }
        }
        return desc;
    }
    function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
        try {
            return _defineProperty(obj, prop, desc);
        }
        catch (error) {
            if (desc.configurable) {
                // In case of errors, when the configurable flag was likely set by rewriteDescriptor(), let's
                // retry with the original flag value
                if (typeof originalConfigurableFlag == 'undefined') {
                    delete desc.configurable;
                }
                else {
                    desc.configurable = originalConfigurableFlag;
                }
                try {
                    return _defineProperty(obj, prop, desc);
                }
                catch (error) {
                    var swallowError = false;
                    if (prop === 'createdCallback' || prop === 'attachedCallback' ||
                        prop === 'detachedCallback' || prop === 'attributeChangedCallback') {
                        // We only swallow the error in registerElement patch
                        // this is the work around since some applications
                        // fail if we throw the error
                        swallowError = true;
                    }
                    if (!swallowError) {
                        throw error;
                    }
                    // TODO: @JiaLiPassion, Some application such as `registerElement` patch
                    // still need to swallow the error, in the future after these applications
                    // are updated, the following logic can be removed.
                    var descJson = null;
                    try {
                        descJson = JSON.stringify(desc);
                    }
                    catch (error) {
                        descJson = desc.toString();
                    }
                    console.log("Attempting to configure '" + prop + "' with descriptor '" + descJson + "' on object '" + obj + "' and got error, giving up: " + error);
                }
            }
            else {
                throw error;
            }
        }
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function eventTargetLegacyPatch(_global, api) {
        var _a = api.getGlobalObjects(), eventNames = _a.eventNames, globalSources = _a.globalSources, zoneSymbolEventNames = _a.zoneSymbolEventNames, TRUE_STR = _a.TRUE_STR, FALSE_STR = _a.FALSE_STR, ZONE_SYMBOL_PREFIX = _a.ZONE_SYMBOL_PREFIX;
        var WTF_ISSUE_555 = 'Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video';
        var NO_EVENT_TARGET = 'ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket'
            .split(',');
        var EVENT_TARGET = 'EventTarget';
        var apis = [];
        var isWtf = _global['wtf'];
        var WTF_ISSUE_555_ARRAY = WTF_ISSUE_555.split(',');
        if (isWtf) {
            // Workaround for: https://github.com/google/tracing-framework/issues/555
            apis = WTF_ISSUE_555_ARRAY.map(function (v) { return 'HTML' + v + 'Element'; }).concat(NO_EVENT_TARGET);
        }
        else if (_global[EVENT_TARGET]) {
            apis.push(EVENT_TARGET);
        }
        else {
            // Note: EventTarget is not available in all browsers,
            // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
            apis = NO_EVENT_TARGET;
        }
        var isDisableIECheck = _global['__Zone_disable_IE_check'] || false;
        var isEnableCrossContextCheck = _global['__Zone_enable_cross_context_check'] || false;
        var ieOrEdge = api.isIEOrEdge();
        var ADD_EVENT_LISTENER_SOURCE = '.addEventListener:';
        var FUNCTION_WRAPPER = '[object FunctionWrapper]';
        var BROWSER_TOOLS = 'function __BROWSERTOOLS_CONSOLE_SAFEFUNC() { [native code] }';
        var pointerEventsMap = {
            'MSPointerCancel': 'pointercancel',
            'MSPointerDown': 'pointerdown',
            'MSPointerEnter': 'pointerenter',
            'MSPointerHover': 'pointerhover',
            'MSPointerLeave': 'pointerleave',
            'MSPointerMove': 'pointermove',
            'MSPointerOut': 'pointerout',
            'MSPointerOver': 'pointerover',
            'MSPointerUp': 'pointerup'
        };
        //  predefine all __zone_symbol__ + eventName + true/false string
        for (var i = 0; i < eventNames.length; i++) {
            var eventName = eventNames[i];
            var falseEventName = eventName + FALSE_STR;
            var trueEventName = eventName + TRUE_STR;
            var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
            var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
            zoneSymbolEventNames[eventName] = {};
            zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
            zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
        }
        //  predefine all task.source string
        for (var i = 0; i < WTF_ISSUE_555_ARRAY.length; i++) {
            var target = WTF_ISSUE_555_ARRAY[i];
            var targets = globalSources[target] = {};
            for (var j = 0; j < eventNames.length; j++) {
                var eventName = eventNames[j];
                targets[eventName] = target + ADD_EVENT_LISTENER_SOURCE + eventName;
            }
        }
        var checkIEAndCrossContext = function (nativeDelegate, delegate, target, args) {
            if (!isDisableIECheck && ieOrEdge) {
                if (isEnableCrossContextCheck) {
                    try {
                        var testString = delegate.toString();
                        if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                            nativeDelegate.apply(target, args);
                            return false;
                        }
                    }
                    catch (error) {
                        nativeDelegate.apply(target, args);
                        return false;
                    }
                }
                else {
                    var testString = delegate.toString();
                    if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                        nativeDelegate.apply(target, args);
                        return false;
                    }
                }
            }
            else if (isEnableCrossContextCheck) {
                try {
                    delegate.toString();
                }
                catch (error) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
            return true;
        };
        var apiTypes = [];
        for (var i = 0; i < apis.length; i++) {
            var type = _global[apis[i]];
            apiTypes.push(type && type.prototype);
        }
        // vh is validateHandler to check event handler
        // is valid or not(for security check)
        api.patchEventTarget(_global, apiTypes, {
            vh: checkIEAndCrossContext,
            transferEventName: function (eventName) {
                var pointerEventName = pointerEventsMap[eventName];
                return pointerEventName || eventName;
            }
        });
        Zone[api.symbol('patchEventTarget')] = !!_global[EVENT_TARGET];
        return true;
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // we have to patch the instance since the proto is non-configurable
    function apply(api, _global) {
        var _a = api.getGlobalObjects(), ADD_EVENT_LISTENER_STR = _a.ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR = _a.REMOVE_EVENT_LISTENER_STR;
        var WS = _global.WebSocket;
        // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
        // On older Chrome, no need since EventTarget was already patched
        if (!_global.EventTarget) {
            api.patchEventTarget(_global, [WS.prototype]);
        }
        _global.WebSocket = function (x, y) {
            var socket = arguments.length > 1 ? new WS(x, y) : new WS(x);
            var proxySocket;
            var proxySocketProto;
            // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance
            var onmessageDesc = api.ObjectGetOwnPropertyDescriptor(socket, 'onmessage');
            if (onmessageDesc && onmessageDesc.configurable === false) {
                proxySocket = api.ObjectCreate(socket);
                // socket have own property descriptor 'onopen', 'onmessage', 'onclose', 'onerror'
                // but proxySocket not, so we will keep socket as prototype and pass it to
                // patchOnProperties method
                proxySocketProto = socket;
                [ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR, 'send', 'close'].forEach(function (propName) {
                    proxySocket[propName] = function () {
                        var args = api.ArraySlice.call(arguments);
                        if (propName === ADD_EVENT_LISTENER_STR || propName === REMOVE_EVENT_LISTENER_STR) {
                            var eventName = args.length > 0 ? args[0] : undefined;
                            if (eventName) {
                                var propertySymbol = Zone.__symbol__('ON_PROPERTY' + eventName);
                                socket[propertySymbol] = proxySocket[propertySymbol];
                            }
                        }
                        return socket[propName].apply(socket, args);
                    };
                });
            }
            else {
                // we can patch the real socket
                proxySocket = socket;
            }
            api.patchOnProperties(proxySocket, ['close', 'error', 'message', 'open'], proxySocketProto);
            return proxySocket;
        };
        var globalWebSocket = _global['WebSocket'];
        for (var prop in WS) {
            globalWebSocket[prop] = WS[prop];
        }
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function propertyDescriptorLegacyPatch(api, _global) {
        var _a = api.getGlobalObjects(), isNode = _a.isNode, isMix = _a.isMix;
        if (isNode && !isMix) {
            return;
        }
        if (!canPatchViaPropertyDescriptor(api, _global)) {
            var supportsWebSocket = typeof WebSocket !== 'undefined';
            // Safari, Android browsers (Jelly Bean)
            patchViaCapturingAllTheEvents(api);
            api.patchClass('XMLHttpRequest');
            if (supportsWebSocket) {
                apply(api, _global);
            }
            Zone[api.symbol('patchEvents')] = true;
        }
    }
    function canPatchViaPropertyDescriptor(api, _global) {
        var _a = api.getGlobalObjects(), isBrowser = _a.isBrowser, isMix = _a.isMix;
        if ((isBrowser || isMix) &&
            !api.ObjectGetOwnPropertyDescriptor(HTMLElement.prototype, 'onclick') &&
            typeof Element !== 'undefined') {
            // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
            // IDL interface attributes are not configurable
            var desc = api.ObjectGetOwnPropertyDescriptor(Element.prototype, 'onclick');
            if (desc && !desc.configurable)
                return false;
            // try to use onclick to detect whether we can patch via propertyDescriptor
            // because XMLHttpRequest is not available in service worker
            if (desc) {
                api.ObjectDefineProperty(Element.prototype, 'onclick', {
                    enumerable: true,
                    configurable: true,
                    get: function () {
                        return true;
                    }
                });
                var div = document.createElement('div');
                var result = !!div.onclick;
                api.ObjectDefineProperty(Element.prototype, 'onclick', desc);
                return result;
            }
        }
        var XMLHttpRequest = _global['XMLHttpRequest'];
        if (!XMLHttpRequest) {
            // XMLHttpRequest is not available in service worker
            return false;
        }
        var ON_READY_STATE_CHANGE = 'onreadystatechange';
        var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
        var xhrDesc = api.ObjectGetOwnPropertyDescriptor(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE);
        // add enumerable and configurable here because in opera
        // by default XMLHttpRequest.prototype.onreadystatechange is undefined
        // without adding enumerable and configurable will cause onreadystatechange
        // non-configurable
        // and if XMLHttpRequest.prototype.onreadystatechange is undefined,
        // we should set a real desc instead a fake one
        if (xhrDesc) {
            api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
                enumerable: true,
                configurable: true,
                get: function () {
                    return true;
                }
            });
            var req = new XMLHttpRequest();
            var result = !!req.onreadystatechange;
            // restore original desc
            api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, xhrDesc || {});
            return result;
        }
        else {
            var SYMBOL_FAKE_ONREADYSTATECHANGE_1 = api.symbol('fake');
            api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
                enumerable: true,
                configurable: true,
                get: function () {
                    return this[SYMBOL_FAKE_ONREADYSTATECHANGE_1];
                },
                set: function (value) {
                    this[SYMBOL_FAKE_ONREADYSTATECHANGE_1] = value;
                }
            });
            var req = new XMLHttpRequest();
            var detectFunc = function () { };
            req.onreadystatechange = detectFunc;
            var result = req[SYMBOL_FAKE_ONREADYSTATECHANGE_1] === detectFunc;
            req.onreadystatechange = null;
            return result;
        }
    }
    // Whenever any eventListener fires, we check the eventListener target and all parents
    // for `onwhatever` properties and replace them with zone-bound functions
    // - Chrome (for now)
    function patchViaCapturingAllTheEvents(api) {
        var eventNames = api.getGlobalObjects().eventNames;
        var unboundKey = api.symbol('unbound');
        var _loop_4 = function (i) {
            var property = eventNames[i];
            var onproperty = 'on' + property;
            self.addEventListener(property, function (event) {
                var elt = event.target, bound, source;
                if (elt) {
                    source = elt.constructor['name'] + '.' + onproperty;
                }
                else {
                    source = 'unknown.' + onproperty;
                }
                while (elt) {
                    if (elt[onproperty] && !elt[onproperty][unboundKey]) {
                        bound = api.wrapWithCurrentZone(elt[onproperty], source);
                        bound[unboundKey] = elt[onproperty];
                        elt[onproperty] = bound;
                    }
                    elt = elt.parentElement;
                }
            }, true);
        };
        for (var i = 0; i < eventNames.length; i++) {
            _loop_4(i);
        }
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function registerElementPatch(_global, api) {
        var _a = api.getGlobalObjects(), isBrowser = _a.isBrowser, isMix = _a.isMix;
        if ((!isBrowser && !isMix) || !('registerElement' in _global.document)) {
            return;
        }
        var callbacks = ['createdCallback', 'attachedCallback', 'detachedCallback', 'attributeChangedCallback'];
        api.patchCallbacks(api, document, 'Document', 'registerElement', callbacks);
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    (function (_global) {
        var symbolPrefix = _global['__Zone_symbol_prefix'] || '__zone_symbol__';
        function __symbol__(name) {
            return symbolPrefix + name;
        }
        _global[__symbol__('legacyPatch')] = function () {
            var Zone = _global['Zone'];
            Zone.__load_patch('defineProperty', function (global, Zone, api) {
                api._redefineProperty = _redefineProperty;
                propertyPatch();
            });
            Zone.__load_patch('registerElement', function (global, Zone, api) {
                registerElementPatch(global, api);
            });
            Zone.__load_patch('EventTargetLegacy', function (global, Zone, api) {
                eventTargetLegacyPatch(global, api);
                propertyDescriptorLegacyPatch(api, global);
            });
        };
    })(typeof window !== 'undefined' ?
        window :
        typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {});
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var taskSymbol = zoneSymbol('zoneTask');
    function patchTimer(window, setName, cancelName, nameSuffix) {
        var setNative = null;
        var clearNative = null;
        setName += nameSuffix;
        cancelName += nameSuffix;
        var tasksByHandleId = {};
        function scheduleTask(task) {
            var data = task.data;
            data.args[0] = function () {
                return task.invoke.apply(this, arguments);
            };
            data.handleId = setNative.apply(window, data.args);
            return task;
        }
        function clearTask(task) {
            return clearNative.call(window, task.data.handleId);
        }
        setNative =
            patchMethod(window, setName, function (delegate) { return function (self, args) {
                if (typeof args[0] === 'function') {
                    var options_1 = {
                        isPeriodic: nameSuffix === 'Interval',
                        delay: (nameSuffix === 'Timeout' || nameSuffix === 'Interval') ? args[1] || 0 :
                            undefined,
                        args: args
                    };
                    var callback_1 = args[0];
                    args[0] = function timer() {
                        try {
                            return callback_1.apply(this, arguments);
                        }
                        finally {
                            // issue-934, task will be cancelled
                            // even it is a periodic task such as
                            // setInterval
                            // https://github.com/angular/angular/issues/40387
                            // Cleanup tasksByHandleId should be handled before scheduleTask
                            // Since some zoneSpec may intercept and doesn't trigger
                            // scheduleFn(scheduleTask) provided here.
                            if (!(options_1.isPeriodic)) {
                                if (typeof options_1.handleId === 'number') {
                                    // in non-nodejs env, we remove timerId
                                    // from local cache
                                    delete tasksByHandleId[options_1.handleId];
                                }
                                else if (options_1.handleId) {
                                    // Node returns complex objects as handleIds
                                    // we remove task reference from timer object
                                    options_1.handleId[taskSymbol] = null;
                                }
                            }
                        }
                    };
                    var task = scheduleMacroTaskWithCurrentZone(setName, args[0], options_1, scheduleTask, clearTask);
                    if (!task) {
                        return task;
                    }
                    // Node.js must additionally support the ref and unref functions.
                    var handle = task.data.handleId;
                    if (typeof handle === 'number') {
                        // for non nodejs env, we save handleId: task
                        // mapping in local cache for clearTimeout
                        tasksByHandleId[handle] = task;
                    }
                    else if (handle) {
                        // for nodejs env, we save task
                        // reference in timerId Object for clearTimeout
                        handle[taskSymbol] = task;
                    }
                    // check whether handle is null, because some polyfill or browser
                    // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame
                    if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' &&
                        typeof handle.unref === 'function') {
                        task.ref = handle.ref.bind(handle);
                        task.unref = handle.unref.bind(handle);
                    }
                    if (typeof handle === 'number' || handle) {
                        return handle;
                    }
                    return task;
                }
                else {
                    // cause an error by calling it directly.
                    return delegate.apply(window, args);
                }
            }; });
        clearNative =
            patchMethod(window, cancelName, function (delegate) { return function (self, args) {
                var id = args[0];
                var task;
                if (typeof id === 'number') {
                    // non nodejs env.
                    task = tasksByHandleId[id];
                }
                else {
                    // nodejs env.
                    task = id && id[taskSymbol];
                    // other environments.
                    if (!task) {
                        task = id;
                    }
                }
                if (task && typeof task.type === 'string') {
                    if (task.state !== 'notScheduled' &&
                        (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
                        if (typeof id === 'number') {
                            delete tasksByHandleId[id];
                        }
                        else if (id) {
                            id[taskSymbol] = null;
                        }
                        // Do not cancel already canceled functions
                        task.zone.cancelTask(task);
                    }
                }
                else {
                    // cause an error by calling it directly.
                    delegate.apply(window, args);
                }
            }; });
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function patchCustomElements(_global, api) {
        var _a = api.getGlobalObjects(), isBrowser = _a.isBrowser, isMix = _a.isMix;
        if ((!isBrowser && !isMix) || !_global['customElements'] || !('customElements' in _global)) {
            return;
        }
        var callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
        api.patchCallbacks(api, _global.customElements, 'customElements', 'define', callbacks);
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function eventTargetPatch(_global, api) {
        if (Zone[api.symbol('patchEventTarget')]) {
            // EventTarget is already patched.
            return;
        }
        var _a = api.getGlobalObjects(), eventNames = _a.eventNames, zoneSymbolEventNames = _a.zoneSymbolEventNames, TRUE_STR = _a.TRUE_STR, FALSE_STR = _a.FALSE_STR, ZONE_SYMBOL_PREFIX = _a.ZONE_SYMBOL_PREFIX;
        //  predefine all __zone_symbol__ + eventName + true/false string
        for (var i = 0; i < eventNames.length; i++) {
            var eventName = eventNames[i];
            var falseEventName = eventName + FALSE_STR;
            var trueEventName = eventName + TRUE_STR;
            var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
            var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
            zoneSymbolEventNames[eventName] = {};
            zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
            zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
        }
        var EVENT_TARGET = _global['EventTarget'];
        if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
            return;
        }
        api.patchEventTarget(_global, [EVENT_TARGET && EVENT_TARGET.prototype]);
        return true;
    }
    function patchEvent(global, api) {
        api.patchEventPrototype(global, api);
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    Zone.__load_patch('legacy', function (global) {
        var legacyPatch = global[Zone.__symbol__('legacyPatch')];
        if (legacyPatch) {
            legacyPatch();
        }
    });
    Zone.__load_patch('queueMicrotask', function (global, Zone, api) {
        api.patchMethod(global, 'queueMicrotask', function (delegate) {
            return function (self, args) {
                Zone.current.scheduleMicroTask('queueMicrotask', args[0]);
            };
        });
    });
    Zone.__load_patch('timers', function (global) {
        var set = 'set';
        var clear = 'clear';
        patchTimer(global, set, clear, 'Timeout');
        patchTimer(global, set, clear, 'Interval');
        patchTimer(global, set, clear, 'Immediate');
    });
    Zone.__load_patch('requestAnimationFrame', function (global) {
        patchTimer(global, 'request', 'cancel', 'AnimationFrame');
        patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
        patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
    });
    Zone.__load_patch('blocking', function (global, Zone) {
        var blockingMethods = ['alert', 'prompt', 'confirm'];
        for (var i = 0; i < blockingMethods.length; i++) {
            var name_2 = blockingMethods[i];
            patchMethod(global, name_2, function (delegate, symbol, name) {
                return function (s, args) {
                    return Zone.current.run(delegate, global, args, name);
                };
            });
        }
    });
    Zone.__load_patch('EventTarget', function (global, Zone, api) {
        patchEvent(global, api);
        eventTargetPatch(global, api);
        // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener
        var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];
        if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
            api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
        }
    });
    Zone.__load_patch('MutationObserver', function (global, Zone, api) {
        patchClass('MutationObserver');
        patchClass('WebKitMutationObserver');
    });
    Zone.__load_patch('IntersectionObserver', function (global, Zone, api) {
        patchClass('IntersectionObserver');
    });
    Zone.__load_patch('FileReader', function (global, Zone, api) {
        patchClass('FileReader');
    });
    Zone.__load_patch('on_property', function (global, Zone, api) {
        propertyDescriptorPatch(api, global);
    });
    Zone.__load_patch('customElements', function (global, Zone, api) {
        patchCustomElements(global, api);
    });
    Zone.__load_patch('XHR', function (global, Zone) {
        // Treat XMLHttpRequest as a macrotask.
        patchXHR(global);
        var XHR_TASK = zoneSymbol('xhrTask');
        var XHR_SYNC = zoneSymbol('xhrSync');
        var XHR_LISTENER = zoneSymbol('xhrListener');
        var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
        var XHR_URL = zoneSymbol('xhrURL');
        var XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');
        function patchXHR(window) {
            var XMLHttpRequest = window['XMLHttpRequest'];
            if (!XMLHttpRequest) {
                // XMLHttpRequest is not available in service worker
                return;
            }
            var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
            function findPendingTask(target) {
                return target[XHR_TASK];
            }
            var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
            var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            if (!oriAddListener) {
                var XMLHttpRequestEventTarget_1 = window['XMLHttpRequestEventTarget'];
                if (XMLHttpRequestEventTarget_1) {
                    var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget_1.prototype;
                    oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                    oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
                }
            }
            var READY_STATE_CHANGE = 'readystatechange';
            var SCHEDULED = 'scheduled';
            function scheduleTask(task) {
                var data = task.data;
                var target = data.target;
                target[XHR_SCHEDULED] = false;
                target[XHR_ERROR_BEFORE_SCHEDULED] = false;
                // remove existing event listener
                var listener = target[XHR_LISTENER];
                if (!oriAddListener) {
                    oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                    oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
                }
                if (listener) {
                    oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
                }
                var newListener = target[XHR_LISTENER] = function () {
                    if (target.readyState === target.DONE) {
                        // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                        // readyState=4 multiple times, so we need to check task state here
                        if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
                            // check whether the xhr has registered onload listener
                            // if that is the case, the task should invoke after all
                            // onload listeners finish.
                            // Also if the request failed without response (status = 0), the load event handler
                            // will not be triggered, in that case, we should also invoke the placeholder callback
                            // to close the XMLHttpRequest::send macroTask.
                            // https://github.com/angular/angular/issues/38795
                            var loadTasks = target[Zone.__symbol__('loadfalse')];
                            if (target.status !== 0 && loadTasks && loadTasks.length > 0) {
                                var oriInvoke_1 = task.invoke;
                                task.invoke = function () {
                                    // need to load the tasks again, because in other
                                    // load listener, they may remove themselves
                                    var loadTasks = target[Zone.__symbol__('loadfalse')];
                                    for (var i = 0; i < loadTasks.length; i++) {
                                        if (loadTasks[i] === task) {
                                            loadTasks.splice(i, 1);
                                        }
                                    }
                                    if (!data.aborted && task.state === SCHEDULED) {
                                        oriInvoke_1.call(task);
                                    }
                                };
                                loadTasks.push(task);
                            }
                            else {
                                task.invoke();
                            }
                        }
                        else if (!data.aborted && target[XHR_SCHEDULED] === false) {
                            // error occurs when xhr.send()
                            target[XHR_ERROR_BEFORE_SCHEDULED] = true;
                        }
                    }
                };
                oriAddListener.call(target, READY_STATE_CHANGE, newListener);
                var storedTask = target[XHR_TASK];
                if (!storedTask) {
                    target[XHR_TASK] = task;
                }
                sendNative.apply(target, data.args);
                target[XHR_SCHEDULED] = true;
                return task;
            }
            function placeholderCallback() { }
            function clearTask(task) {
                var data = task.data;
                // Note - ideally, we would call data.target.removeEventListener here, but it's too late
                // to prevent it from firing. So instead, we store info for the event listener.
                data.aborted = true;
                return abortNative.apply(data.target, data.args);
            }
            var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () { return function (self, args) {
                self[XHR_SYNC] = args[2] == false;
                self[XHR_URL] = args[1];
                return openNative.apply(self, args);
            }; });
            var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
            var fetchTaskAborting = zoneSymbol('fetchTaskAborting');
            var fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
            var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () { return function (self, args) {
                if (Zone.current[fetchTaskScheduling] === true) {
                    // a fetch is scheduling, so we are using xhr to polyfill fetch
                    // and because we already schedule macroTask for fetch, we should
                    // not schedule a macroTask for xhr again
                    return sendNative.apply(self, args);
                }
                if (self[XHR_SYNC]) {
                    // if the XHR is sync there is no task to schedule, just execute the code.
                    return sendNative.apply(self, args);
                }
                else {
                    var options = { target: self, url: self[XHR_URL], isPeriodic: false, args: args, aborted: false };
                    var task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
                    if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !options.aborted &&
                        task.state === SCHEDULED) {
                        // xhr request throw error when send
                        // we should invoke task instead of leaving a scheduled
                        // pending macroTask
                        task.invoke();
                    }
                }
            }; });
            var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () { return function (self, args) {
                var task = findPendingTask(self);
                if (task && typeof task.type == 'string') {
                    // If the XHR has already completed, do nothing.
                    // If the XHR has already been aborted, do nothing.
                    // Fix #569, call abort multiple times before done will cause
                    // macroTask task count be negative number
                    if (task.cancelFn == null || (task.data && task.data.aborted)) {
                        return;
                    }
                    task.zone.cancelTask(task);
                }
                else if (Zone.current[fetchTaskAborting] === true) {
                    // the abort is called from fetch polyfill, we need to call native abort of XHR.
                    return abortNative.apply(self, args);
                }
                // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
                // task
                // to cancel. Do nothing.
            }; });
        }
    });
    Zone.__load_patch('geolocation', function (global) {
        /// GEO_LOCATION
        if (global['navigator'] && global['navigator'].geolocation) {
            patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
        }
    });
    Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
        // handle unhandled promise rejection
        function findPromiseRejectionHandler(evtName) {
            return function (e) {
                var eventTasks = findEventTasks(global, evtName);
                eventTasks.forEach(function (eventTask) {
                    // windows has added unhandledrejection event listener
                    // trigger the event listener
                    var PromiseRejectionEvent = global['PromiseRejectionEvent'];
                    if (PromiseRejectionEvent) {
                        var evt = new PromiseRejectionEvent(evtName, { promise: e.promise, reason: e.rejection });
                        eventTask.invoke(evt);
                    }
                });
            };
        }
        if (global['PromiseRejectionEvent']) {
            Zone[zoneSymbol('unhandledPromiseRejectionHandler')] =
                findPromiseRejectionHandler('unhandledrejection');
            Zone[zoneSymbol('rejectionHandledHandler')] =
                findPromiseRejectionHandler('rejectionhandled');
        }
    });
})));


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__(8314));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iby1wbGFubmVyLy4vYW5ndWxhci9zcmMvcG9seWZpbGxzLnRzIiwid2VicGFjazovL2JvLXBsYW5uZXIvLi9ub2RlX21vZHVsZXMvem9uZS5qcy9kaXN0L3pvbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7O0dBY0c7QUFFSDs7R0FFRztBQUVILCtFQUErRTtBQUMvRSxvRUFBb0U7QUFFcEU7Ozs7R0FJRztBQUNILDhFQUE4RTtBQUU5RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNCRztBQUVIOztHQUVHO0FBQ3dCLENBQUUsNkJBQTZCO0FBRzFEOztHQUVHOzs7Ozs7Ozs7Ozs7QUM5REgsa0VBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLEtBQTBDLEdBQUcsb0NBQU8sT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBLGtHQUFDO0FBQ2hFLFFBQVEsQ0FBUztBQUNqQixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGlEQUFpRCx5QkFBeUI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxrQkFBa0I7QUFDN0QscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsMEJBQTBCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFLCtDQUErQyxFQUFFO0FBQ3RILGtFQUFrRSw0Q0FBNEMsRUFBRTtBQUNoSCxzRkFBc0YsZ0VBQWdFLEVBQUU7QUFDeEosZ0VBQWdFLDBDQUEwQztBQUMxRztBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxrQkFBa0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsMEJBQTBCLEVBQUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLDZEQUE2RCxFQUFFO0FBQzNHLDJDQUEyQyxXQUFXLEVBQUU7QUFDeEQ7QUFDQSxzQ0FBc0MsYUFBYSxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7QUFDckQsb0NBQW9DLGFBQWEsRUFBRTtBQUNuRCx5Q0FBeUMsYUFBYSxFQUFFO0FBQ3hELDhDQUE4QyxhQUFhLEVBQUU7QUFDN0QscUNBQXFDLGNBQWMsRUFBRTtBQUNyRCwyQ0FBMkMsa0JBQWtCLEVBQUU7QUFDL0QsK0NBQStDLGFBQWEsRUFBRTtBQUM5RCx5REFBeUQsa0JBQWtCLEVBQUU7QUFDN0UsdUNBQXVDLGtCQUFrQixFQUFFO0FBQzNELHFDQUFxQyxXQUFXLEVBQUU7QUFDbEQscUNBQXFDLGFBQWEsRUFBRTtBQUNwRCw4Q0FBOEMsYUFBYSxFQUFFO0FBQzdELDJDQUEyQyxXQUFXLEVBQUU7QUFDeEQsZ0RBQWdELGFBQWEsRUFBRTtBQUMvRCw0Q0FBNEMsYUFBYSxFQUFFO0FBQzNELHlDQUF5QyxhQUFhO0FBQ3REO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxRQUFRO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSx1QkFBdUIsb0JBQW9CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsdUJBQXVCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHlCQUF5QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsRUFBRTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0U7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsRUFBRTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnSUFBZ0ksd0JBQXdCLG9DQUFvQztBQUM1TDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9GQUFvRixzRUFBc0U7QUFDMUo7QUFDQTtBQUNBLG1DQUFtQyxrQkFBa0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxvREFBb0Q7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixtQ0FBbUM7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSx5RUFBeUUsZ0JBQWdCO0FBQ3pGLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsc0JBQXNCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsVUFBVSxvQ0FBb0MsRUFBRSxFQUFFO0FBQ3RHLG1EQUFtRCxVQUFVLGtDQUFrQyxFQUFFO0FBQ2pHLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELHNCQUFzQjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsMEJBQTBCLEVBQUU7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxvQ0FBb0M7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHNCQUFzQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxzQkFBc0I7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0EseURBQXlELGFBQWEsZ0JBQWdCO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsMEJBQTBCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsc0JBQXNCO0FBQ3BFLHlDQUF5QyxpQkFBaUI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsNEJBQTRCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLDBCQUEwQjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDBCQUEwQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQXlFO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGtCQUFrQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGlCQUFpQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHdCQUF3QjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx3QkFBd0I7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixpQkFBaUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsa0JBQWtCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEZBQThGO0FBQzlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLEVBQUU7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlELDZCQUE2QixFQUFFO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGtEQUFrRCxFQUFFO0FBQ3RHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsd0RBQXdEO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxFQUFFO0FBQ1gsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELDBCQUEwQixFQUFFO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCwrQkFBK0IsRUFBRTtBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQXlFLGdCQUFnQjtBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsdUJBQXVCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdDQUFnQztBQUN2RDtBQUNBO0FBQ0EsMkJBQTJCLHVCQUF1QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsaUJBQWlCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGtHQUFrRztBQUNsRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsdUJBQXVCLHVCQUF1QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0Esd0ZBQXdGO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQ7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxFQUFFO0FBQ2hCO0FBQ0EsaUVBQWlFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxFQUFFO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix1QkFBdUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSx1QkFBdUIsNEJBQTRCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxzQkFBc0I7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVGQUF1RjtBQUN2RjtBQUNBO0FBQ0E7QUFDQSxjQUFjLEVBQUU7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsdUZBQXVGO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxFQUFFO0FBQ2hCLHlGQUF5RjtBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLEVBQUU7QUFDaEI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRSwwQ0FBMEM7QUFDaEg7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMiLCJmaWxlIjoicG9seWZpbGxzLWVzMjAxNy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBmaWxlIGluY2x1ZGVzIHBvbHlmaWxscyBuZWVkZWQgYnkgQW5ndWxhciBhbmQgaXMgbG9hZGVkIGJlZm9yZSB0aGUgYXBwLlxuICogWW91IGNhbiBhZGQgeW91ciBvd24gZXh0cmEgcG9seWZpbGxzIHRvIHRoaXMgZmlsZS5cbiAqXG4gKiBUaGlzIGZpbGUgaXMgZGl2aWRlZCBpbnRvIDIgc2VjdGlvbnM6XG4gKiAgIDEuIEJyb3dzZXIgcG9seWZpbGxzLiBUaGVzZSBhcmUgYXBwbGllZCBiZWZvcmUgbG9hZGluZyBab25lSlMgYW5kIGFyZSBzb3J0ZWQgYnkgYnJvd3NlcnMuXG4gKiAgIDIuIEFwcGxpY2F0aW9uIGltcG9ydHMuIEZpbGVzIGltcG9ydGVkIGFmdGVyIFpvbmVKUyB0aGF0IHNob3VsZCBiZSBsb2FkZWQgYmVmb3JlIHlvdXIgbWFpblxuICogICAgICBmaWxlLlxuICpcbiAqIFRoZSBjdXJyZW50IHNldHVwIGlzIGZvciBzby1jYWxsZWQgXCJldmVyZ3JlZW5cIiBicm93c2VyczsgdGhlIGxhc3QgdmVyc2lvbnMgb2YgYnJvd3NlcnMgdGhhdFxuICogYXV0b21hdGljYWxseSB1cGRhdGUgdGhlbXNlbHZlcy4gVGhpcyBpbmNsdWRlcyBTYWZhcmkgPj0gMTAsIENocm9tZSA+PSA1NSAoaW5jbHVkaW5nIE9wZXJhKSxcbiAqIEVkZ2UgPj0gMTMgb24gdGhlIGRlc2t0b3AsIGFuZCBpT1MgMTAgYW5kIENocm9tZSBvbiBtb2JpbGUuXG4gKlxuICogTGVhcm4gbW9yZSBpbiBodHRwczovL2FuZ3VsYXIuaW8vZ3VpZGUvYnJvd3Nlci1zdXBwb3J0XG4gKi9cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogQlJPV1NFUiBQT0xZRklMTFNcbiAqL1xuXG4vKiogSUUxMCBhbmQgSUUxMSByZXF1aXJlcyB0aGUgZm9sbG93aW5nIGZvciBOZ0NsYXNzIHN1cHBvcnQgb24gU1ZHIGVsZW1lbnRzICovXG4vLyBpbXBvcnQgJ2NsYXNzbGlzdC5qcyc7ICAvLyBSdW4gYG5wbSBpbnN0YWxsIC0tc2F2ZSBjbGFzc2xpc3QuanNgLlxuXG4vKipcbiAqIFdlYiBBbmltYXRpb25zIGBAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnNgXG4gKiBPbmx5IHJlcXVpcmVkIGlmIEFuaW1hdGlvbkJ1aWxkZXIgaXMgdXNlZCB3aXRoaW4gdGhlIGFwcGxpY2F0aW9uIGFuZCB1c2luZyBJRS9FZGdlIG9yIFNhZmFyaS5cbiAqIFN0YW5kYXJkIGFuaW1hdGlvbiBzdXBwb3J0IGluIEFuZ3VsYXIgRE9FUyBOT1QgcmVxdWlyZSBhbnkgcG9seWZpbGxzIChhcyBvZiBBbmd1bGFyIDYuMCkuXG4gKi9cbi8vIGltcG9ydCAnd2ViLWFuaW1hdGlvbnMtanMnOyAgLy8gUnVuIGBucG0gaW5zdGFsbCAtLXNhdmUgd2ViLWFuaW1hdGlvbnMtanNgLlxuXG4vKipcbiAqIEJ5IGRlZmF1bHQsIHpvbmUuanMgd2lsbCBwYXRjaCBhbGwgcG9zc2libGUgbWFjcm9UYXNrIGFuZCBEb21FdmVudHNcbiAqIHVzZXIgY2FuIGRpc2FibGUgcGFydHMgb2YgbWFjcm9UYXNrL0RvbUV2ZW50cyBwYXRjaCBieSBzZXR0aW5nIGZvbGxvd2luZyBmbGFnc1xuICogYmVjYXVzZSB0aG9zZSBmbGFncyBuZWVkIHRvIGJlIHNldCBiZWZvcmUgYHpvbmUuanNgIGJlaW5nIGxvYWRlZCwgYW5kIHdlYnBhY2tcbiAqIHdpbGwgcHV0IGltcG9ydCBpbiB0aGUgdG9wIG9mIGJ1bmRsZSwgc28gdXNlciBuZWVkIHRvIGNyZWF0ZSBhIHNlcGFyYXRlIGZpbGVcbiAqIGluIHRoaXMgZGlyZWN0b3J5IChmb3IgZXhhbXBsZTogem9uZS1mbGFncy50cyksIGFuZCBwdXQgdGhlIGZvbGxvd2luZyBmbGFnc1xuICogaW50byB0aGF0IGZpbGUsIGFuZCB0aGVuIGFkZCB0aGUgZm9sbG93aW5nIGNvZGUgYmVmb3JlIGltcG9ydGluZyB6b25lLmpzLlxuICogaW1wb3J0ICcuL3pvbmUtZmxhZ3MudHMnO1xuICpcbiAqIFRoZSBmbGFncyBhbGxvd2VkIGluIHpvbmUtZmxhZ3MudHMgYXJlIGxpc3RlZCBoZXJlLlxuICpcbiAqIFRoZSBmb2xsb3dpbmcgZmxhZ3Mgd2lsbCB3b3JrIGZvciBhbGwgYnJvd3NlcnMuXG4gKlxuICogKHdpbmRvdyBhcyBhbnkpLl9fWm9uZV9kaXNhYmxlX3JlcXVlc3RBbmltYXRpb25GcmFtZSA9IHRydWU7IC8vIGRpc2FibGUgcGF0Y2ggcmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gKiAod2luZG93IGFzIGFueSkuX19ab25lX2Rpc2FibGVfb25fcHJvcGVydHkgPSB0cnVlOyAvLyBkaXNhYmxlIHBhdGNoIG9uUHJvcGVydHkgc3VjaCBhcyBvbmNsaWNrXG4gKiAod2luZG93IGFzIGFueSkuX196b25lX3N5bWJvbF9fVU5QQVRDSEVEX0VWRU5UUyA9IFsnc2Nyb2xsJywgJ21vdXNlbW92ZSddOyAvLyBkaXNhYmxlIHBhdGNoIHNwZWNpZmllZCBldmVudE5hbWVzXG4gKlxuICogIGluIElFL0VkZ2UgZGV2ZWxvcGVyIHRvb2xzLCB0aGUgYWRkRXZlbnRMaXN0ZW5lciB3aWxsIGFsc28gYmUgd3JhcHBlZCBieSB6b25lLmpzXG4gKiAgd2l0aCB0aGUgZm9sbG93aW5nIGZsYWcsIGl0IHdpbGwgYnlwYXNzIGB6b25lLmpzYCBwYXRjaCBmb3IgSUUvRWRnZVxuICpcbiAqICAod2luZG93IGFzIGFueSkuX19ab25lX2VuYWJsZV9jcm9zc19jb250ZXh0X2NoZWNrID0gdHJ1ZTtcbiAqXG4gKi9cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogWm9uZSBKUyBpcyByZXF1aXJlZCBieSBkZWZhdWx0IGZvciBBbmd1bGFyIGl0c2VsZi5cbiAqL1xuaW1wb3J0ICd6b25lLmpzL2Rpc3Qvem9uZSc7ICAvLyBJbmNsdWRlZCB3aXRoIEFuZ3VsYXIgQ0xJLlxuXG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIEFQUExJQ0FUSU9OIElNUE9SVFNcbiAqL1xuIiwiJ3VzZSBzdHJpY3QnO1xuLyoqXG4gKiBAbGljZW5zZSBBbmd1bGFyIHYxMi4wLjAtbmV4dC4wXG4gKiAoYykgMjAxMC0yMDIwIEdvb2dsZSBMTEMuIGh0dHBzOi8vYW5ndWxhci5pby9cbiAqIExpY2Vuc2U6IE1JVFxuICovXG4oZnVuY3Rpb24gKGZhY3RvcnkpIHtcbiAgICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAgICAgICBmYWN0b3J5KCk7XG59KChmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIHZhciBab25lJDEgPSAoZnVuY3Rpb24gKGdsb2JhbCkge1xuICAgICAgICB2YXIgcGVyZm9ybWFuY2UgPSBnbG9iYWxbJ3BlcmZvcm1hbmNlJ107XG4gICAgICAgIGZ1bmN0aW9uIG1hcmsobmFtZSkge1xuICAgICAgICAgICAgcGVyZm9ybWFuY2UgJiYgcGVyZm9ybWFuY2VbJ21hcmsnXSAmJiBwZXJmb3JtYW5jZVsnbWFyayddKG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHBlcmZvcm1hbmNlTWVhc3VyZShuYW1lLCBsYWJlbCkge1xuICAgICAgICAgICAgcGVyZm9ybWFuY2UgJiYgcGVyZm9ybWFuY2VbJ21lYXN1cmUnXSAmJiBwZXJmb3JtYW5jZVsnbWVhc3VyZSddKG5hbWUsIGxhYmVsKTtcbiAgICAgICAgfVxuICAgICAgICBtYXJrKCdab25lJyk7XG4gICAgICAgIC8vIEluaXRpYWxpemUgYmVmb3JlIGl0J3MgYWNjZXNzZWQgYmVsb3cuXG4gICAgICAgIC8vIF9fWm9uZV9zeW1ib2xfcHJlZml4IGdsb2JhbCBjYW4gYmUgdXNlZCB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCB6b25lXG4gICAgICAgIC8vIHN5bWJvbCBwcmVmaXggd2l0aCBhIGN1c3RvbSBvbmUgaWYgbmVlZGVkLlxuICAgICAgICB2YXIgc3ltYm9sUHJlZml4ID0gZ2xvYmFsWydfX1pvbmVfc3ltYm9sX3ByZWZpeCddIHx8ICdfX3pvbmVfc3ltYm9sX18nO1xuICAgICAgICBmdW5jdGlvbiBfX3N5bWJvbF9fKG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBzeW1ib2xQcmVmaXggKyBuYW1lO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjaGVja0R1cGxpY2F0ZSA9IGdsb2JhbFtfX3N5bWJvbF9fKCdmb3JjZUR1cGxpY2F0ZVpvbmVDaGVjaycpXSA9PT0gdHJ1ZTtcbiAgICAgICAgaWYgKGdsb2JhbFsnWm9uZSddKSB7XG4gICAgICAgICAgICAvLyBpZiBnbG9iYWxbJ1pvbmUnXSBhbHJlYWR5IGV4aXN0cyAobWF5YmUgem9uZS5qcyB3YXMgYWxyZWFkeSBsb2FkZWQgb3JcbiAgICAgICAgICAgIC8vIHNvbWUgb3RoZXIgbGliIGFsc28gcmVnaXN0ZXJlZCBhIGdsb2JhbCBvYmplY3QgbmFtZWQgWm9uZSksIHdlIG1heSBuZWVkXG4gICAgICAgICAgICAvLyB0byB0aHJvdyBhbiBlcnJvciwgYnV0IHNvbWV0aW1lcyB1c2VyIG1heSBub3Qgd2FudCB0aGlzIGVycm9yLlxuICAgICAgICAgICAgLy8gRm9yIGV4YW1wbGUsXG4gICAgICAgICAgICAvLyB3ZSBoYXZlIHR3byB3ZWIgcGFnZXMsIHBhZ2UxIGluY2x1ZGVzIHpvbmUuanMsIHBhZ2UyIGRvZXNuJ3QuXG4gICAgICAgICAgICAvLyBhbmQgdGhlIDFzdCB0aW1lIHVzZXIgbG9hZCBwYWdlMSBhbmQgcGFnZTIsIGV2ZXJ5dGhpbmcgd29yayBmaW5lLFxuICAgICAgICAgICAgLy8gYnV0IHdoZW4gdXNlciBsb2FkIHBhZ2UyIGFnYWluLCBlcnJvciBvY2N1cnMgYmVjYXVzZSBnbG9iYWxbJ1pvbmUnXSBhbHJlYWR5IGV4aXN0cy5cbiAgICAgICAgICAgIC8vIHNvIHdlIGFkZCBhIGZsYWcgdG8gbGV0IHVzZXIgY2hvb3NlIHdoZXRoZXIgdG8gdGhyb3cgdGhpcyBlcnJvciBvciBub3QuXG4gICAgICAgICAgICAvLyBCeSBkZWZhdWx0LCBpZiBleGlzdGluZyBab25lIGlzIGZyb20gem9uZS5qcywgd2Ugd2lsbCBub3QgdGhyb3cgdGhlIGVycm9yLlxuICAgICAgICAgICAgaWYgKGNoZWNrRHVwbGljYXRlIHx8IHR5cGVvZiBnbG9iYWxbJ1pvbmUnXS5fX3N5bWJvbF9fICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdab25lIGFscmVhZHkgbG9hZGVkLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdsb2JhbFsnWm9uZSddO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBab25lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gWm9uZShwYXJlbnQsIHpvbmVTcGVjKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xuICAgICAgICAgICAgICAgIHRoaXMuX25hbWUgPSB6b25lU3BlYyA/IHpvbmVTcGVjLm5hbWUgfHwgJ3VubmFtZWQnIDogJzxyb290Pic7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvcGVydGllcyA9IHpvbmVTcGVjICYmIHpvbmVTcGVjLnByb3BlcnRpZXMgfHwge307XG4gICAgICAgICAgICAgICAgdGhpcy5fem9uZURlbGVnYXRlID1cbiAgICAgICAgICAgICAgICAgICAgbmV3IFpvbmVEZWxlZ2F0ZSh0aGlzLCB0aGlzLl9wYXJlbnQgJiYgdGhpcy5fcGFyZW50Ll96b25lRGVsZWdhdGUsIHpvbmVTcGVjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFpvbmUuYXNzZXJ0Wm9uZVBhdGNoZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGdsb2JhbFsnUHJvbWlzZSddICE9PSBwYXRjaGVzWydab25lQXdhcmVQcm9taXNlJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdab25lLmpzIGhhcyBkZXRlY3RlZCB0aGF0IFpvbmVBd2FyZVByb21pc2UgYCh3aW5kb3d8Z2xvYmFsKS5Qcm9taXNlYCAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdoYXMgYmVlbiBvdmVyd3JpdHRlbi5cXG4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdNb3N0IGxpa2VseSBjYXVzZSBpcyB0aGF0IGEgUHJvbWlzZSBwb2x5ZmlsbCBoYXMgYmVlbiBsb2FkZWQgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnYWZ0ZXIgWm9uZS5qcyAoUG9seWZpbGxpbmcgUHJvbWlzZSBhcGkgaXMgbm90IG5lY2Vzc2FyeSB3aGVuIHpvbmUuanMgaXMgbG9hZGVkLiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICdJZiB5b3UgbXVzdCBsb2FkIG9uZSwgZG8gc28gYmVmb3JlIGxvYWRpbmcgem9uZS5qcy4pJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShab25lLCBcInJvb3RcIiwge1xuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgem9uZSA9IFpvbmUuY3VycmVudDtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHpvbmUucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB6b25lID0gem9uZS5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHpvbmU7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFpvbmUsIFwiY3VycmVudFwiLCB7XG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfY3VycmVudFpvbmVGcmFtZS56b25lO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShab25lLCBcImN1cnJlbnRUYXNrXCIsIHtcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jdXJyZW50VGFzaztcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cmVxdWlyZS1pbnRlcm5hbC13aXRoLXVuZGVyc2NvcmVcbiAgICAgICAgICAgIFpvbmUuX19sb2FkX3BhdGNoID0gZnVuY3Rpb24gKG5hbWUsIGZuLCBpZ25vcmVEdXBsaWNhdGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoaWdub3JlRHVwbGljYXRlID09PSB2b2lkIDApIHsgaWdub3JlRHVwbGljYXRlID0gZmFsc2U7IH1cbiAgICAgICAgICAgICAgICBpZiAocGF0Y2hlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBgY2hlY2tEdXBsaWNhdGVgIG9wdGlvbiBpcyBkZWZpbmVkIGZyb20gZ2xvYmFsIHZhcmlhYmxlXG4gICAgICAgICAgICAgICAgICAgIC8vIHNvIGl0IHdvcmtzIGZvciBhbGwgbW9kdWxlcy5cbiAgICAgICAgICAgICAgICAgICAgLy8gYGlnbm9yZUR1cGxpY2F0ZWAgY2FuIHdvcmsgZm9yIHRoZSBzcGVjaWZpZWQgbW9kdWxlXG4gICAgICAgICAgICAgICAgICAgIGlmICghaWdub3JlRHVwbGljYXRlICYmIGNoZWNrRHVwbGljYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcignQWxyZWFkeSBsb2FkZWQgcGF0Y2g6ICcgKyBuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICghZ2xvYmFsWydfX1pvbmVfZGlzYWJsZV8nICsgbmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBlcmZOYW1lID0gJ1pvbmU6JyArIG5hbWU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmsocGVyZk5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBwYXRjaGVzW25hbWVdID0gZm4oZ2xvYmFsLCBab25lLCBfYXBpKTtcbiAgICAgICAgICAgICAgICAgICAgcGVyZm9ybWFuY2VNZWFzdXJlKHBlcmZOYW1lLCBwZXJmTmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShab25lLnByb3RvdHlwZSwgXCJwYXJlbnRcIiwge1xuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShab25lLnByb3RvdHlwZSwgXCJuYW1lXCIsIHtcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgWm9uZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIHZhciB6b25lID0gdGhpcy5nZXRab25lV2l0aChrZXkpO1xuICAgICAgICAgICAgICAgIGlmICh6b25lKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gem9uZS5fcHJvcGVydGllc1trZXldO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFpvbmUucHJvdG90eXBlLmdldFpvbmVXaXRoID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50ID0gdGhpcztcbiAgICAgICAgICAgICAgICB3aGlsZSAoY3VycmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudC5fcHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudC5fcGFyZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBab25lLnByb3RvdHlwZS5mb3JrID0gZnVuY3Rpb24gKHpvbmVTcGVjKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF6b25lU3BlYylcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdab25lU3BlYyByZXF1aXJlZCEnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fem9uZURlbGVnYXRlLmZvcmsodGhpcywgem9uZVNwZWMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFpvbmUucHJvdG90eXBlLndyYXAgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIHNvdXJjZSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RpbmcgZnVuY3Rpb24gZ290OiAnICsgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgX2NhbGxiYWNrID0gdGhpcy5fem9uZURlbGVnYXRlLmludGVyY2VwdCh0aGlzLCBjYWxsYmFjaywgc291cmNlKTtcbiAgICAgICAgICAgICAgICB2YXIgem9uZSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHpvbmUucnVuR3VhcmRlZChfY2FsbGJhY2ssIHRoaXMsIGFyZ3VtZW50cywgc291cmNlKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFpvbmUucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uIChjYWxsYmFjaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MsIHNvdXJjZSkge1xuICAgICAgICAgICAgICAgIF9jdXJyZW50Wm9uZUZyYW1lID0geyBwYXJlbnQ6IF9jdXJyZW50Wm9uZUZyYW1lLCB6b25lOiB0aGlzIH07XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3pvbmVEZWxlZ2F0ZS5pbnZva2UodGhpcywgY2FsbGJhY2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzLCBzb3VyY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgX2N1cnJlbnRab25lRnJhbWUgPSBfY3VycmVudFpvbmVGcmFtZS5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFpvbmUucHJvdG90eXBlLnJ1bkd1YXJkZWQgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzLCBzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXBwbHlUaGlzID09PSB2b2lkIDApIHsgYXBwbHlUaGlzID0gbnVsbDsgfVxuICAgICAgICAgICAgICAgIF9jdXJyZW50Wm9uZUZyYW1lID0geyBwYXJlbnQ6IF9jdXJyZW50Wm9uZUZyYW1lLCB6b25lOiB0aGlzIH07XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl96b25lRGVsZWdhdGUuaW52b2tlKHRoaXMsIGNhbGxiYWNrLCBhcHBseVRoaXMsIGFwcGx5QXJncywgc291cmNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl96b25lRGVsZWdhdGUuaGFuZGxlRXJyb3IodGhpcywgZXJyb3IpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIF9jdXJyZW50Wm9uZUZyYW1lID0gX2N1cnJlbnRab25lRnJhbWUucGFyZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBab25lLnByb3RvdHlwZS5ydW5UYXNrID0gZnVuY3Rpb24gKHRhc2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2suem9uZSAhPSB0aGlzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQSB0YXNrIGNhbiBvbmx5IGJlIHJ1biBpbiB0aGUgem9uZSBvZiBjcmVhdGlvbiEgKENyZWF0aW9uOiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICh0YXNrLnpvbmUgfHwgTk9fWk9ORSkubmFtZSArICc7IEV4ZWN1dGlvbjogJyArIHRoaXMubmFtZSArICcpJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3pvbmUuanMvaXNzdWVzLzc3OCwgc29tZXRpbWVzIGV2ZW50VGFza1xuICAgICAgICAgICAgICAgIC8vIHdpbGwgcnVuIGluIG5vdFNjaGVkdWxlZChjYW5jZWxlZCkgc3RhdGUsIHdlIHNob3VsZCBub3QgdHJ5IHRvXG4gICAgICAgICAgICAgICAgLy8gcnVuIHN1Y2gga2luZCBvZiB0YXNrIGJ1dCBqdXN0IHJldHVyblxuICAgICAgICAgICAgICAgIGlmICh0YXNrLnN0YXRlID09PSBub3RTY2hlZHVsZWQgJiYgKHRhc2sudHlwZSA9PT0gZXZlbnRUYXNrIHx8IHRhc2sudHlwZSA9PT0gbWFjcm9UYXNrKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciByZUVudHJ5R3VhcmQgPSB0YXNrLnN0YXRlICE9IHJ1bm5pbmc7XG4gICAgICAgICAgICAgICAgcmVFbnRyeUd1YXJkICYmIHRhc2suX3RyYW5zaXRpb25UbyhydW5uaW5nLCBzY2hlZHVsZWQpO1xuICAgICAgICAgICAgICAgIHRhc2sucnVuQ291bnQrKztcbiAgICAgICAgICAgICAgICB2YXIgcHJldmlvdXNUYXNrID0gX2N1cnJlbnRUYXNrO1xuICAgICAgICAgICAgICAgIF9jdXJyZW50VGFzayA9IHRhc2s7XG4gICAgICAgICAgICAgICAgX2N1cnJlbnRab25lRnJhbWUgPSB7IHBhcmVudDogX2N1cnJlbnRab25lRnJhbWUsIHpvbmU6IHRoaXMgfTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFzay50eXBlID09IG1hY3JvVGFzayAmJiB0YXNrLmRhdGEgJiYgIXRhc2suZGF0YS5pc1BlcmlvZGljKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrLmNhbmNlbEZuID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fem9uZURlbGVnYXRlLmludm9rZVRhc2sodGhpcywgdGFzaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3pvbmVEZWxlZ2F0ZS5oYW5kbGVFcnJvcih0aGlzLCBlcnJvcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIHRhc2sncyBzdGF0ZSBpcyBub3RTY2hlZHVsZWQgb3IgdW5rbm93biwgdGhlbiBpdCBoYXMgYWxyZWFkeSBiZWVuIGNhbmNlbGxlZFxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBzaG91bGQgbm90IHJlc2V0IHRoZSBzdGF0ZSB0byBzY2hlZHVsZWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2suc3RhdGUgIT09IG5vdFNjaGVkdWxlZCAmJiB0YXNrLnN0YXRlICE9PSB1bmtub3duKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFzay50eXBlID09IGV2ZW50VGFzayB8fCAodGFzay5kYXRhICYmIHRhc2suZGF0YS5pc1BlcmlvZGljKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlRW50cnlHdWFyZCAmJiB0YXNrLl90cmFuc2l0aW9uVG8oc2NoZWR1bGVkLCBydW5uaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2sucnVuQ291bnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVRhc2tDb3VudCh0YXNrLCAtMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVFbnRyeUd1YXJkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suX3RyYW5zaXRpb25Ubyhub3RTY2hlZHVsZWQsIHJ1bm5pbmcsIG5vdFNjaGVkdWxlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX2N1cnJlbnRab25lRnJhbWUgPSBfY3VycmVudFpvbmVGcmFtZS5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIF9jdXJyZW50VGFzayA9IHByZXZpb3VzVGFzaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgWm9uZS5wcm90b3R5cGUuc2NoZWR1bGVUYXNrID0gZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgICAgICAgICAgICBpZiAodGFzay56b25lICYmIHRhc2suem9uZSAhPT0gdGhpcykge1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiB0aGUgdGFzayB3YXMgcmVzY2hlZHVsZWQsIHRoZSBuZXdab25lXG4gICAgICAgICAgICAgICAgICAgIC8vIHNob3VsZCBub3QgYmUgdGhlIGNoaWxkcmVuIG9mIHRoZSBvcmlnaW5hbCB6b25lXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdab25lID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKG5ld1pvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdab25lID09PSB0YXNrLnpvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcImNhbiBub3QgcmVzY2hlZHVsZSB0YXNrIHRvIFwiICsgdGhpcy5uYW1lICsgXCIgd2hpY2ggaXMgZGVzY2VuZGFudHMgb2YgdGhlIG9yaWdpbmFsIHpvbmUgXCIgKyB0YXNrLnpvbmUubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdab25lID0gbmV3Wm9uZS5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGFzay5fdHJhbnNpdGlvblRvKHNjaGVkdWxpbmcsIG5vdFNjaGVkdWxlZCk7XG4gICAgICAgICAgICAgICAgdmFyIHpvbmVEZWxlZ2F0ZXMgPSBbXTtcbiAgICAgICAgICAgICAgICB0YXNrLl96b25lRGVsZWdhdGVzID0gem9uZURlbGVnYXRlcztcbiAgICAgICAgICAgICAgICB0YXNrLl96b25lID0gdGhpcztcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB0YXNrID0gdGhpcy5fem9uZURlbGVnYXRlLnNjaGVkdWxlVGFzayh0aGlzLCB0YXNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAvLyBzaG91bGQgc2V0IHRhc2sncyBzdGF0ZSB0byB1bmtub3duIHdoZW4gc2NoZWR1bGVUYXNrIHRocm93IGVycm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIGJlY2F1c2UgdGhlIGVyciBtYXkgZnJvbSByZXNjaGVkdWxlLCBzbyB0aGUgZnJvbVN0YXRlIG1heWJlIG5vdFNjaGVkdWxlZFxuICAgICAgICAgICAgICAgICAgICB0YXNrLl90cmFuc2l0aW9uVG8odW5rbm93biwgc2NoZWR1bGluZywgbm90U2NoZWR1bGVkKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogQEppYUxpUGFzc2lvbiwgc2hvdWxkIHdlIGNoZWNrIHRoZSByZXN1bHQgZnJvbSBoYW5kbGVFcnJvcj9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fem9uZURlbGVnYXRlLmhhbmRsZUVycm9yKHRoaXMsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRhc2suX3pvbmVEZWxlZ2F0ZXMgPT09IHpvbmVEZWxlZ2F0ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byBjaGVjayBiZWNhdXNlIGludGVybmFsbHkgdGhlIGRlbGVnYXRlIGNhbiByZXNjaGVkdWxlIHRoZSB0YXNrLlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVUYXNrQ291bnQodGFzaywgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0YXNrLnN0YXRlID09IHNjaGVkdWxpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFzay5fdHJhbnNpdGlvblRvKHNjaGVkdWxlZCwgc2NoZWR1bGluZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFpvbmUucHJvdG90eXBlLnNjaGVkdWxlTWljcm9UYXNrID0gZnVuY3Rpb24gKHNvdXJjZSwgY2FsbGJhY2ssIGRhdGEsIGN1c3RvbVNjaGVkdWxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NoZWR1bGVUYXNrKG5ldyBab25lVGFzayhtaWNyb1Rhc2ssIHNvdXJjZSwgY2FsbGJhY2ssIGRhdGEsIGN1c3RvbVNjaGVkdWxlLCB1bmRlZmluZWQpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBab25lLnByb3RvdHlwZS5zY2hlZHVsZU1hY3JvVGFzayA9IGZ1bmN0aW9uIChzb3VyY2UsIGNhbGxiYWNrLCBkYXRhLCBjdXN0b21TY2hlZHVsZSwgY3VzdG9tQ2FuY2VsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NoZWR1bGVUYXNrKG5ldyBab25lVGFzayhtYWNyb1Rhc2ssIHNvdXJjZSwgY2FsbGJhY2ssIGRhdGEsIGN1c3RvbVNjaGVkdWxlLCBjdXN0b21DYW5jZWwpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBab25lLnByb3RvdHlwZS5zY2hlZHVsZUV2ZW50VGFzayA9IGZ1bmN0aW9uIChzb3VyY2UsIGNhbGxiYWNrLCBkYXRhLCBjdXN0b21TY2hlZHVsZSwgY3VzdG9tQ2FuY2VsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NoZWR1bGVUYXNrKG5ldyBab25lVGFzayhldmVudFRhc2ssIHNvdXJjZSwgY2FsbGJhY2ssIGRhdGEsIGN1c3RvbVNjaGVkdWxlLCBjdXN0b21DYW5jZWwpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBab25lLnByb3RvdHlwZS5jYW5jZWxUYXNrID0gZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgICAgICAgICAgICBpZiAodGFzay56b25lICE9IHRoaXMpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQSB0YXNrIGNhbiBvbmx5IGJlIGNhbmNlbGxlZCBpbiB0aGUgem9uZSBvZiBjcmVhdGlvbiEgKENyZWF0aW9uOiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICh0YXNrLnpvbmUgfHwgTk9fWk9ORSkubmFtZSArICc7IEV4ZWN1dGlvbjogJyArIHRoaXMubmFtZSArICcpJyk7XG4gICAgICAgICAgICAgICAgdGFzay5fdHJhbnNpdGlvblRvKGNhbmNlbGluZywgc2NoZWR1bGVkLCBydW5uaW5nKTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl96b25lRGVsZWdhdGUuY2FuY2VsVGFzayh0aGlzLCB0YXNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiBlcnJvciBvY2N1cnMgd2hlbiBjYW5jZWxUYXNrLCB0cmFuc2l0IHRoZSBzdGF0ZSB0byB1bmtub3duXG4gICAgICAgICAgICAgICAgICAgIHRhc2suX3RyYW5zaXRpb25Ubyh1bmtub3duLCBjYW5jZWxpbmcpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl96b25lRGVsZWdhdGUuaGFuZGxlRXJyb3IodGhpcywgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVUYXNrQ291bnQodGFzaywgLTEpO1xuICAgICAgICAgICAgICAgIHRhc2suX3RyYW5zaXRpb25Ubyhub3RTY2hlZHVsZWQsIGNhbmNlbGluZyk7XG4gICAgICAgICAgICAgICAgdGFzay5ydW5Db3VudCA9IDA7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgWm9uZS5wcm90b3R5cGUuX3VwZGF0ZVRhc2tDb3VudCA9IGZ1bmN0aW9uICh0YXNrLCBjb3VudCkge1xuICAgICAgICAgICAgICAgIHZhciB6b25lRGVsZWdhdGVzID0gdGFzay5fem9uZURlbGVnYXRlcztcbiAgICAgICAgICAgICAgICBpZiAoY291bnQgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFzay5fem9uZURlbGVnYXRlcyA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgem9uZURlbGVnYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB6b25lRGVsZWdhdGVzW2ldLl91cGRhdGVUYXNrQ291bnQodGFzay50eXBlLCBjb3VudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBab25lO1xuICAgICAgICB9KCkpO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cmVxdWlyZS1pbnRlcm5hbC13aXRoLXVuZGVyc2NvcmVcbiAgICAgICAgWm9uZS5fX3N5bWJvbF9fID0gX19zeW1ib2xfXztcbiAgICAgICAgdmFyIERFTEVHQVRFX1pTID0ge1xuICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICBvbkhhc1Rhc2s6IGZ1bmN0aW9uIChkZWxlZ2F0ZSwgXywgdGFyZ2V0LCBoYXNUYXNrU3RhdGUpIHsgcmV0dXJuIGRlbGVnYXRlLmhhc1Rhc2sodGFyZ2V0LCBoYXNUYXNrU3RhdGUpOyB9LFxuICAgICAgICAgICAgb25TY2hlZHVsZVRhc2s6IGZ1bmN0aW9uIChkZWxlZ2F0ZSwgXywgdGFyZ2V0LCB0YXNrKSB7IHJldHVybiBkZWxlZ2F0ZS5zY2hlZHVsZVRhc2sodGFyZ2V0LCB0YXNrKTsgfSxcbiAgICAgICAgICAgIG9uSW52b2tlVGFzazogZnVuY3Rpb24gKGRlbGVnYXRlLCBfLCB0YXJnZXQsIHRhc2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzKSB7IHJldHVybiBkZWxlZ2F0ZS5pbnZva2VUYXNrKHRhcmdldCwgdGFzaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MpOyB9LFxuICAgICAgICAgICAgb25DYW5jZWxUYXNrOiBmdW5jdGlvbiAoZGVsZWdhdGUsIF8sIHRhcmdldCwgdGFzaykgeyByZXR1cm4gZGVsZWdhdGUuY2FuY2VsVGFzayh0YXJnZXQsIHRhc2spOyB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciBab25lRGVsZWdhdGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBab25lRGVsZWdhdGUoem9uZSwgcGFyZW50RGVsZWdhdGUsIHpvbmVTcGVjKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdGFza0NvdW50cyA9IHsgJ21pY3JvVGFzayc6IDAsICdtYWNyb1Rhc2snOiAwLCAnZXZlbnRUYXNrJzogMCB9O1xuICAgICAgICAgICAgICAgIHRoaXMuem9uZSA9IHpvbmU7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50RGVsZWdhdGUgPSBwYXJlbnREZWxlZ2F0ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9mb3JrWlMgPSB6b25lU3BlYyAmJiAoem9uZVNwZWMgJiYgem9uZVNwZWMub25Gb3JrID8gem9uZVNwZWMgOiBwYXJlbnREZWxlZ2F0ZS5fZm9ya1pTKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9mb3JrRGxndCA9IHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkZvcmsgPyBwYXJlbnREZWxlZ2F0ZSA6IHBhcmVudERlbGVnYXRlLl9mb3JrRGxndCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZm9ya0N1cnJab25lID1cbiAgICAgICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uRm9yayA/IHRoaXMuem9uZSA6IHBhcmVudERlbGVnYXRlLl9mb3JrQ3VyclpvbmUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2ludGVyY2VwdFpTID1cbiAgICAgICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSW50ZXJjZXB0ID8gem9uZVNwZWMgOiBwYXJlbnREZWxlZ2F0ZS5faW50ZXJjZXB0WlMpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2ludGVyY2VwdERsZ3QgPVxuICAgICAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25JbnRlcmNlcHQgPyBwYXJlbnREZWxlZ2F0ZSA6IHBhcmVudERlbGVnYXRlLl9pbnRlcmNlcHREbGd0KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9pbnRlcmNlcHRDdXJyWm9uZSA9XG4gICAgICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkludGVyY2VwdCA/IHRoaXMuem9uZSA6IHBhcmVudERlbGVnYXRlLl9pbnRlcmNlcHRDdXJyWm9uZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5faW52b2tlWlMgPSB6b25lU3BlYyAmJiAoem9uZVNwZWMub25JbnZva2UgPyB6b25lU3BlYyA6IHBhcmVudERlbGVnYXRlLl9pbnZva2VaUyk7XG4gICAgICAgICAgICAgICAgdGhpcy5faW52b2tlRGxndCA9XG4gICAgICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkludm9rZSA/IHBhcmVudERlbGVnYXRlIDogcGFyZW50RGVsZWdhdGUuX2ludm9rZURsZ3QpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2ludm9rZUN1cnJab25lID1cbiAgICAgICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSW52b2tlID8gdGhpcy56b25lIDogcGFyZW50RGVsZWdhdGUuX2ludm9rZUN1cnJab25lKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVFcnJvclpTID1cbiAgICAgICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSGFuZGxlRXJyb3IgPyB6b25lU3BlYyA6IHBhcmVudERlbGVnYXRlLl9oYW5kbGVFcnJvclpTKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVFcnJvckRsZ3QgPVxuICAgICAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25IYW5kbGVFcnJvciA/IHBhcmVudERlbGVnYXRlIDogcGFyZW50RGVsZWdhdGUuX2hhbmRsZUVycm9yRGxndCk7XG4gICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlRXJyb3JDdXJyWm9uZSA9XG4gICAgICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkhhbmRsZUVycm9yID8gdGhpcy56b25lIDogcGFyZW50RGVsZWdhdGUuX2hhbmRsZUVycm9yQ3VyclpvbmUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NjaGVkdWxlVGFza1pTID1cbiAgICAgICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uU2NoZWR1bGVUYXNrID8gem9uZVNwZWMgOiBwYXJlbnREZWxlZ2F0ZS5fc2NoZWR1bGVUYXNrWlMpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NjaGVkdWxlVGFza0RsZ3QgPSB6b25lU3BlYyAmJlxuICAgICAgICAgICAgICAgICAgICAoem9uZVNwZWMub25TY2hlZHVsZVRhc2sgPyBwYXJlbnREZWxlZ2F0ZSA6IHBhcmVudERlbGVnYXRlLl9zY2hlZHVsZVRhc2tEbGd0KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zY2hlZHVsZVRhc2tDdXJyWm9uZSA9XG4gICAgICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vblNjaGVkdWxlVGFzayA/IHRoaXMuem9uZSA6IHBhcmVudERlbGVnYXRlLl9zY2hlZHVsZVRhc2tDdXJyWm9uZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5faW52b2tlVGFza1pTID1cbiAgICAgICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uSW52b2tlVGFzayA/IHpvbmVTcGVjIDogcGFyZW50RGVsZWdhdGUuX2ludm9rZVRhc2taUyk7XG4gICAgICAgICAgICAgICAgdGhpcy5faW52b2tlVGFza0RsZ3QgPVxuICAgICAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25JbnZva2VUYXNrID8gcGFyZW50RGVsZWdhdGUgOiBwYXJlbnREZWxlZ2F0ZS5faW52b2tlVGFza0RsZ3QpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2ludm9rZVRhc2tDdXJyWm9uZSA9XG4gICAgICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkludm9rZVRhc2sgPyB0aGlzLnpvbmUgOiBwYXJlbnREZWxlZ2F0ZS5faW52b2tlVGFza0N1cnJab25lKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW5jZWxUYXNrWlMgPVxuICAgICAgICAgICAgICAgICAgICB6b25lU3BlYyAmJiAoem9uZVNwZWMub25DYW5jZWxUYXNrID8gem9uZVNwZWMgOiBwYXJlbnREZWxlZ2F0ZS5fY2FuY2VsVGFza1pTKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jYW5jZWxUYXNrRGxndCA9XG4gICAgICAgICAgICAgICAgICAgIHpvbmVTcGVjICYmICh6b25lU3BlYy5vbkNhbmNlbFRhc2sgPyBwYXJlbnREZWxlZ2F0ZSA6IHBhcmVudERlbGVnYXRlLl9jYW5jZWxUYXNrRGxndCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FuY2VsVGFza0N1cnJab25lID1cbiAgICAgICAgICAgICAgICAgICAgem9uZVNwZWMgJiYgKHpvbmVTcGVjLm9uQ2FuY2VsVGFzayA/IHRoaXMuem9uZSA6IHBhcmVudERlbGVnYXRlLl9jYW5jZWxUYXNrQ3VyclpvbmUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2hhc1Rhc2taUyA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5faGFzVGFza0RsZ3QgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuX2hhc1Rhc2tEbGd0T3duZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuX2hhc1Rhc2tDdXJyWm9uZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgdmFyIHpvbmVTcGVjSGFzVGFzayA9IHpvbmVTcGVjICYmIHpvbmVTcGVjLm9uSGFzVGFzaztcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50SGFzVGFzayA9IHBhcmVudERlbGVnYXRlICYmIHBhcmVudERlbGVnYXRlLl9oYXNUYXNrWlM7XG4gICAgICAgICAgICAgICAgaWYgKHpvbmVTcGVjSGFzVGFzayB8fCBwYXJlbnRIYXNUYXNrKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIG5lZWQgdG8gcmVwb3J0IGhhc1Rhc2ssIHRoYW4gdGhpcyBaUyBuZWVkcyB0byBkbyByZWYgY291bnRpbmcgb24gdGFza3MuIEluIHN1Y2hcbiAgICAgICAgICAgICAgICAgICAgLy8gYSBjYXNlIGFsbCB0YXNrIHJlbGF0ZWQgaW50ZXJjZXB0b3JzIG11c3QgZ28gdGhyb3VnaCB0aGlzIFpELiBXZSBjYW4ndCBzaG9ydCBjaXJjdWl0IGl0LlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYXNUYXNrWlMgPSB6b25lU3BlY0hhc1Rhc2sgPyB6b25lU3BlYyA6IERFTEVHQVRFX1pTO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYXNUYXNrRGxndCA9IHBhcmVudERlbGVnYXRlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYXNUYXNrRGxndE93bmVyID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFzVGFza0N1cnJab25lID0gem9uZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF6b25lU3BlYy5vblNjaGVkdWxlVGFzaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2NoZWR1bGVUYXNrWlMgPSBERUxFR0FURV9aUztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3NjaGVkdWxlVGFza0RsZ3QgPSBwYXJlbnREZWxlZ2F0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3NjaGVkdWxlVGFza0N1cnJab25lID0gdGhpcy56b25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghem9uZVNwZWMub25JbnZva2VUYXNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbnZva2VUYXNrWlMgPSBERUxFR0FURV9aUztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2ludm9rZVRhc2tEbGd0ID0gcGFyZW50RGVsZWdhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbnZva2VUYXNrQ3VyclpvbmUgPSB0aGlzLnpvbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCF6b25lU3BlYy5vbkNhbmNlbFRhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhbmNlbFRhc2taUyA9IERFTEVHQVRFX1pTO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FuY2VsVGFza0RsZ3QgPSBwYXJlbnREZWxlZ2F0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhbmNlbFRhc2tDdXJyWm9uZSA9IHRoaXMuem9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFpvbmVEZWxlZ2F0ZS5wcm90b3R5cGUuZm9yayA9IGZ1bmN0aW9uICh0YXJnZXRab25lLCB6b25lU3BlYykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9mb3JrWlMgPyB0aGlzLl9mb3JrWlMub25Gb3JrKHRoaXMuX2ZvcmtEbGd0LCB0aGlzLnpvbmUsIHRhcmdldFpvbmUsIHpvbmVTcGVjKSA6XG4gICAgICAgICAgICAgICAgICAgIG5ldyBab25lKHRhcmdldFpvbmUsIHpvbmVTcGVjKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBab25lRGVsZWdhdGUucHJvdG90eXBlLmludGVyY2VwdCA9IGZ1bmN0aW9uICh0YXJnZXRab25lLCBjYWxsYmFjaywgc291cmNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ludGVyY2VwdFpTID9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW50ZXJjZXB0WlMub25JbnRlcmNlcHQodGhpcy5faW50ZXJjZXB0RGxndCwgdGhpcy5faW50ZXJjZXB0Q3VyclpvbmUsIHRhcmdldFpvbmUsIGNhbGxiYWNrLCBzb3VyY2UpIDpcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgWm9uZURlbGVnYXRlLnByb3RvdHlwZS5pbnZva2UgPSBmdW5jdGlvbiAodGFyZ2V0Wm9uZSwgY2FsbGJhY2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzLCBzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlWlMgPyB0aGlzLl9pbnZva2VaUy5vbkludm9rZSh0aGlzLl9pbnZva2VEbGd0LCB0aGlzLl9pbnZva2VDdXJyWm9uZSwgdGFyZ2V0Wm9uZSwgY2FsbGJhY2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzLCBzb3VyY2UpIDpcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkoYXBwbHlUaGlzLCBhcHBseUFyZ3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFpvbmVEZWxlZ2F0ZS5wcm90b3R5cGUuaGFuZGxlRXJyb3IgPSBmdW5jdGlvbiAodGFyZ2V0Wm9uZSwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlRXJyb3JaUyA/XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZUVycm9yWlMub25IYW5kbGVFcnJvcih0aGlzLl9oYW5kbGVFcnJvckRsZ3QsIHRoaXMuX2hhbmRsZUVycm9yQ3VyclpvbmUsIHRhcmdldFpvbmUsIGVycm9yKSA6XG4gICAgICAgICAgICAgICAgICAgIHRydWU7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgWm9uZURlbGVnYXRlLnByb3RvdHlwZS5zY2hlZHVsZVRhc2sgPSBmdW5jdGlvbiAodGFyZ2V0Wm9uZSwgdGFzaykge1xuICAgICAgICAgICAgICAgIHZhciByZXR1cm5UYXNrID0gdGFzaztcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2NoZWR1bGVUYXNrWlMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2hhc1Rhc2taUykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVGFzay5fem9uZURlbGVnYXRlcy5wdXNoKHRoaXMuX2hhc1Rhc2tEbGd0T3duZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGNsYW5nLWZvcm1hdCBvZmZcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVGFzayA9IHRoaXMuX3NjaGVkdWxlVGFza1pTLm9uU2NoZWR1bGVUYXNrKHRoaXMuX3NjaGVkdWxlVGFza0RsZ3QsIHRoaXMuX3NjaGVkdWxlVGFza0N1cnJab25lLCB0YXJnZXRab25lLCB0YXNrKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xhbmctZm9ybWF0IG9uXG4gICAgICAgICAgICAgICAgICAgIGlmICghcmV0dXJuVGFzaylcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblRhc2sgPSB0YXNrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2suc2NoZWR1bGVGbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5zY2hlZHVsZUZuKHRhc2spO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRhc2sudHlwZSA9PSBtaWNyb1Rhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVkdWxlTWljcm9UYXNrKHRhc2spO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUYXNrIGlzIG1pc3Npbmcgc2NoZWR1bGVGbi4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuVGFzaztcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBab25lRGVsZWdhdGUucHJvdG90eXBlLmludm9rZVRhc2sgPSBmdW5jdGlvbiAodGFyZ2V0Wm9uZSwgdGFzaywgYXBwbHlUaGlzLCBhcHBseUFyZ3MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlVGFza1pTID8gdGhpcy5faW52b2tlVGFza1pTLm9uSW52b2tlVGFzayh0aGlzLl9pbnZva2VUYXNrRGxndCwgdGhpcy5faW52b2tlVGFza0N1cnJab25lLCB0YXJnZXRab25lLCB0YXNrLCBhcHBseVRoaXMsIGFwcGx5QXJncykgOlxuICAgICAgICAgICAgICAgICAgICB0YXNrLmNhbGxiYWNrLmFwcGx5KGFwcGx5VGhpcywgYXBwbHlBcmdzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBab25lRGVsZWdhdGUucHJvdG90eXBlLmNhbmNlbFRhc2sgPSBmdW5jdGlvbiAodGFyZ2V0Wm9uZSwgdGFzaykge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fY2FuY2VsVGFza1pTKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5fY2FuY2VsVGFza1pTLm9uQ2FuY2VsVGFzayh0aGlzLl9jYW5jZWxUYXNrRGxndCwgdGhpcy5fY2FuY2VsVGFza0N1cnJab25lLCB0YXJnZXRab25lLCB0YXNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGFzay5jYW5jZWxGbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ1Rhc2sgaXMgbm90IGNhbmNlbGFibGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHRhc2suY2FuY2VsRm4odGFzayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBab25lRGVsZWdhdGUucHJvdG90eXBlLmhhc1Rhc2sgPSBmdW5jdGlvbiAodGFyZ2V0Wm9uZSwgaXNFbXB0eSkge1xuICAgICAgICAgICAgICAgIC8vIGhhc1Rhc2sgc2hvdWxkIG5vdCB0aHJvdyBlcnJvciBzbyBvdGhlciBab25lRGVsZWdhdGVcbiAgICAgICAgICAgICAgICAvLyBjYW4gc3RpbGwgdHJpZ2dlciBoYXNUYXNrIGNhbGxiYWNrXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFzVGFza1pTICYmXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYXNUYXNrWlMub25IYXNUYXNrKHRoaXMuX2hhc1Rhc2tEbGd0LCB0aGlzLl9oYXNUYXNrQ3VyclpvbmUsIHRhcmdldFpvbmUsIGlzRW1wdHkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IodGFyZ2V0Wm9uZSwgZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnJlcXVpcmUtaW50ZXJuYWwtd2l0aC11bmRlcnNjb3JlXG4gICAgICAgICAgICBab25lRGVsZWdhdGUucHJvdG90eXBlLl91cGRhdGVUYXNrQ291bnQgPSBmdW5jdGlvbiAodHlwZSwgY291bnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgY291bnRzID0gdGhpcy5fdGFza0NvdW50cztcbiAgICAgICAgICAgICAgICB2YXIgcHJldiA9IGNvdW50c1t0eXBlXTtcbiAgICAgICAgICAgICAgICB2YXIgbmV4dCA9IGNvdW50c1t0eXBlXSA9IHByZXYgKyBjb3VudDtcbiAgICAgICAgICAgICAgICBpZiAobmV4dCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNb3JlIHRhc2tzIGV4ZWN1dGVkIHRoZW4gd2VyZSBzY2hlZHVsZWQuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwcmV2ID09IDAgfHwgbmV4dCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpc0VtcHR5ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWljcm9UYXNrOiBjb3VudHNbJ21pY3JvVGFzayddID4gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hY3JvVGFzazogY291bnRzWydtYWNyb1Rhc2snXSA+IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudFRhc2s6IGNvdW50c1snZXZlbnRUYXNrJ10gPiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiB0eXBlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzVGFzayh0aGlzLnpvbmUsIGlzRW1wdHkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gWm9uZURlbGVnYXRlO1xuICAgICAgICB9KCkpO1xuICAgICAgICB2YXIgWm9uZVRhc2sgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBab25lVGFzayh0eXBlLCBzb3VyY2UsIGNhbGxiYWNrLCBvcHRpb25zLCBzY2hlZHVsZUZuLCBjYW5jZWxGbikge1xuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpyZXF1aXJlLWludGVybmFsLXdpdGgtdW5kZXJzY29yZVxuICAgICAgICAgICAgICAgIHRoaXMuX3pvbmUgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMucnVuQ291bnQgPSAwO1xuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpyZXF1aXJlLWludGVybmFsLXdpdGgtdW5kZXJzY29yZVxuICAgICAgICAgICAgICAgIHRoaXMuX3pvbmVEZWxlZ2F0ZXMgPSBudWxsO1xuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpyZXF1aXJlLWludGVybmFsLXdpdGgtdW5kZXJzY29yZVxuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gJ25vdFNjaGVkdWxlZCc7XG4gICAgICAgICAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEgPSBvcHRpb25zO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVGbiA9IHNjaGVkdWxlRm47XG4gICAgICAgICAgICAgICAgdGhpcy5jYW5jZWxGbiA9IGNhbmNlbEZuO1xuICAgICAgICAgICAgICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYWxsYmFjayBpcyBub3QgZGVmaW5lZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IEBKaWFMaVBhc3Npb24gb3B0aW9ucyBzaG91bGQgaGF2ZSBpbnRlcmZhY2VcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gZXZlbnRUYXNrICYmIG9wdGlvbnMgJiYgb3B0aW9ucy51c2VHKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW52b2tlID0gWm9uZVRhc2suaW52b2tlVGFzaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW52b2tlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFpvbmVUYXNrLmludm9rZVRhc2suY2FsbChnbG9iYWwsIHNlbGYsIHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgWm9uZVRhc2suaW52b2tlVGFzayA9IGZ1bmN0aW9uICh0YXNrLCB0YXJnZXQsIGFyZ3MpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGFzayA9IHRoaXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF9udW1iZXJPZk5lc3RlZFRhc2tGcmFtZXMrKztcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB0YXNrLnJ1bkNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXNrLnpvbmUucnVuVGFzayh0YXNrLCB0YXJnZXQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9udW1iZXJPZk5lc3RlZFRhc2tGcmFtZXMgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZHJhaW5NaWNyb1Rhc2tRdWV1ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF9udW1iZXJPZk5lc3RlZFRhc2tGcmFtZXMtLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFpvbmVUYXNrLnByb3RvdHlwZSwgXCJ6b25lXCIsIHtcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3pvbmU7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFpvbmVUYXNrLnByb3RvdHlwZSwgXCJzdGF0ZVwiLCB7XG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBab25lVGFzay5wcm90b3R5cGUuY2FuY2VsU2NoZWR1bGVSZXF1ZXN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb25Ubyhub3RTY2hlZHVsZWQsIHNjaGVkdWxpbmcpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpyZXF1aXJlLWludGVybmFsLXdpdGgtdW5kZXJzY29yZVxuICAgICAgICAgICAgWm9uZVRhc2sucHJvdG90eXBlLl90cmFuc2l0aW9uVG8gPSBmdW5jdGlvbiAodG9TdGF0ZSwgZnJvbVN0YXRlMSwgZnJvbVN0YXRlMikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gZnJvbVN0YXRlMSB8fCB0aGlzLl9zdGF0ZSA9PT0gZnJvbVN0YXRlMikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IHRvU3RhdGU7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b1N0YXRlID09IG5vdFNjaGVkdWxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fem9uZURlbGVnYXRlcyA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih0aGlzLnR5cGUgKyBcIiAnXCIgKyB0aGlzLnNvdXJjZSArIFwiJzogY2FuIG5vdCB0cmFuc2l0aW9uIHRvICdcIiArIHRvU3RhdGUgKyBcIicsIGV4cGVjdGluZyBzdGF0ZSAnXCIgKyBmcm9tU3RhdGUxICsgXCInXCIgKyAoZnJvbVN0YXRlMiA/ICcgb3IgXFwnJyArIGZyb21TdGF0ZTIgKyAnXFwnJyA6ICcnKSArIFwiLCB3YXMgJ1wiICsgdGhpcy5fc3RhdGUgKyBcIicuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBab25lVGFzay5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YSAmJiB0eXBlb2YgdGhpcy5kYXRhLmhhbmRsZUlkICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmhhbmRsZUlkLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBhZGQgdG9KU09OIG1ldGhvZCB0byBwcmV2ZW50IGN5Y2xpYyBlcnJvciB3aGVuXG4gICAgICAgICAgICAvLyBjYWxsIEpTT04uc3RyaW5naWZ5KHpvbmVUYXNrKVxuICAgICAgICAgICAgWm9uZVRhc2sucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiB0aGlzLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IHRoaXMuc291cmNlLFxuICAgICAgICAgICAgICAgICAgICB6b25lOiB0aGlzLnpvbmUubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcnVuQ291bnQ6IHRoaXMucnVuQ291bnRcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBab25lVGFzaztcbiAgICAgICAgfSgpKTtcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAvLy8gIE1JQ1JPVEFTSyBRVUVVRVxuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgIHZhciBzeW1ib2xTZXRUaW1lb3V0ID0gX19zeW1ib2xfXygnc2V0VGltZW91dCcpO1xuICAgICAgICB2YXIgc3ltYm9sUHJvbWlzZSA9IF9fc3ltYm9sX18oJ1Byb21pc2UnKTtcbiAgICAgICAgdmFyIHN5bWJvbFRoZW4gPSBfX3N5bWJvbF9fKCd0aGVuJyk7XG4gICAgICAgIHZhciBfbWljcm9UYXNrUXVldWUgPSBbXTtcbiAgICAgICAgdmFyIF9pc0RyYWluaW5nTWljcm90YXNrUXVldWUgPSBmYWxzZTtcbiAgICAgICAgdmFyIG5hdGl2ZU1pY3JvVGFza1F1ZXVlUHJvbWlzZTtcbiAgICAgICAgZnVuY3Rpb24gc2NoZWR1bGVNaWNyb1Rhc2sodGFzaykge1xuICAgICAgICAgICAgLy8gaWYgd2UgYXJlIG5vdCBydW5uaW5nIGluIGFueSB0YXNrLCBhbmQgdGhlcmUgaGFzIG5vdCBiZWVuIGFueXRoaW5nIHNjaGVkdWxlZFxuICAgICAgICAgICAgLy8gd2UgbXVzdCBib290c3RyYXAgdGhlIGluaXRpYWwgdGFzayBjcmVhdGlvbiBieSBtYW51YWxseSBzY2hlZHVsaW5nIHRoZSBkcmFpblxuICAgICAgICAgICAgaWYgKF9udW1iZXJPZk5lc3RlZFRhc2tGcmFtZXMgPT09IDAgJiYgX21pY3JvVGFza1F1ZXVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGFyZSBub3QgcnVubmluZyBpbiBUYXNrLCBzbyB3ZSBuZWVkIHRvIGtpY2tzdGFydCB0aGUgbWljcm90YXNrIHF1ZXVlLlxuICAgICAgICAgICAgICAgIGlmICghbmF0aXZlTWljcm9UYXNrUXVldWVQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChnbG9iYWxbc3ltYm9sUHJvbWlzZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZU1pY3JvVGFza1F1ZXVlUHJvbWlzZSA9IGdsb2JhbFtzeW1ib2xQcm9taXNlXS5yZXNvbHZlKDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChuYXRpdmVNaWNyb1Rhc2tRdWV1ZVByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5hdGl2ZVRoZW4gPSBuYXRpdmVNaWNyb1Rhc2tRdWV1ZVByb21pc2Vbc3ltYm9sVGhlbl07XG4gICAgICAgICAgICAgICAgICAgIGlmICghbmF0aXZlVGhlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbmF0aXZlIFByb21pc2UgaXMgbm90IHBhdGNoYWJsZSwgd2UgbmVlZCB0byB1c2UgYHRoZW5gIGRpcmVjdGx5XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpc3N1ZSAxMDc4XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVUaGVuID0gbmF0aXZlTWljcm9UYXNrUXVldWVQcm9taXNlWyd0aGVuJ107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbmF0aXZlVGhlbi5jYWxsKG5hdGl2ZU1pY3JvVGFza1F1ZXVlUHJvbWlzZSwgZHJhaW5NaWNyb1Rhc2tRdWV1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBnbG9iYWxbc3ltYm9sU2V0VGltZW91dF0oZHJhaW5NaWNyb1Rhc2tRdWV1ZSwgMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFzayAmJiBfbWljcm9UYXNrUXVldWUucHVzaCh0YXNrKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBkcmFpbk1pY3JvVGFza1F1ZXVlKCkge1xuICAgICAgICAgICAgaWYgKCFfaXNEcmFpbmluZ01pY3JvdGFza1F1ZXVlKSB7XG4gICAgICAgICAgICAgICAgX2lzRHJhaW5pbmdNaWNyb3Rhc2tRdWV1ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgd2hpbGUgKF9taWNyb1Rhc2tRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHF1ZXVlID0gX21pY3JvVGFza1F1ZXVlO1xuICAgICAgICAgICAgICAgICAgICBfbWljcm9UYXNrUXVldWUgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhc2sgPSBxdWV1ZVtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay56b25lLnJ1blRhc2sodGFzaywgbnVsbCwgbnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYXBpLm9uVW5oYW5kbGVkRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF9hcGkubWljcm90YXNrRHJhaW5Eb25lKCk7XG4gICAgICAgICAgICAgICAgX2lzRHJhaW5pbmdNaWNyb3Rhc2tRdWV1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICAgICAgLy8vICBCT09UU1RSQVBcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgICB2YXIgTk9fWk9ORSA9IHsgbmFtZTogJ05PIFpPTkUnIH07XG4gICAgICAgIHZhciBub3RTY2hlZHVsZWQgPSAnbm90U2NoZWR1bGVkJywgc2NoZWR1bGluZyA9ICdzY2hlZHVsaW5nJywgc2NoZWR1bGVkID0gJ3NjaGVkdWxlZCcsIHJ1bm5pbmcgPSAncnVubmluZycsIGNhbmNlbGluZyA9ICdjYW5jZWxpbmcnLCB1bmtub3duID0gJ3Vua25vd24nO1xuICAgICAgICB2YXIgbWljcm9UYXNrID0gJ21pY3JvVGFzaycsIG1hY3JvVGFzayA9ICdtYWNyb1Rhc2snLCBldmVudFRhc2sgPSAnZXZlbnRUYXNrJztcbiAgICAgICAgdmFyIHBhdGNoZXMgPSB7fTtcbiAgICAgICAgdmFyIF9hcGkgPSB7XG4gICAgICAgICAgICBzeW1ib2w6IF9fc3ltYm9sX18sXG4gICAgICAgICAgICBjdXJyZW50Wm9uZUZyYW1lOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfY3VycmVudFpvbmVGcmFtZTsgfSxcbiAgICAgICAgICAgIG9uVW5oYW5kbGVkRXJyb3I6IG5vb3AsXG4gICAgICAgICAgICBtaWNyb3Rhc2tEcmFpbkRvbmU6IG5vb3AsXG4gICAgICAgICAgICBzY2hlZHVsZU1pY3JvVGFzazogc2NoZWR1bGVNaWNyb1Rhc2ssXG4gICAgICAgICAgICBzaG93VW5jYXVnaHRFcnJvcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gIVpvbmVbX19zeW1ib2xfXygnaWdub3JlQ29uc29sZUVycm9yVW5jYXVnaHRFcnJvcicpXTsgfSxcbiAgICAgICAgICAgIHBhdGNoRXZlbnRUYXJnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9LFxuICAgICAgICAgICAgcGF0Y2hPblByb3BlcnRpZXM6IG5vb3AsXG4gICAgICAgICAgICBwYXRjaE1ldGhvZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9vcDsgfSxcbiAgICAgICAgICAgIGJpbmRBcmd1bWVudHM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9LFxuICAgICAgICAgICAgcGF0Y2hUaGVuOiBmdW5jdGlvbiAoKSB7IHJldHVybiBub29wOyB9LFxuICAgICAgICAgICAgcGF0Y2hNYWNyb1Rhc2s6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vb3A7IH0sXG4gICAgICAgICAgICBwYXRjaEV2ZW50UHJvdG90eXBlOiBmdW5jdGlvbiAoKSB7IHJldHVybiBub29wOyB9LFxuICAgICAgICAgICAgaXNJRU9yRWRnZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICBnZXRHbG9iYWxPYmplY3RzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICBPYmplY3REZWZpbmVQcm9wZXJ0eTogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9vcDsgfSxcbiAgICAgICAgICAgIE9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgT2JqZWN0Q3JlYXRlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICBBcnJheVNsaWNlOiBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfSxcbiAgICAgICAgICAgIHBhdGNoQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vb3A7IH0sXG4gICAgICAgICAgICB3cmFwV2l0aEN1cnJlbnRab25lOiBmdW5jdGlvbiAoKSB7IHJldHVybiBub29wOyB9LFxuICAgICAgICAgICAgZmlsdGVyUHJvcGVydGllczogZnVuY3Rpb24gKCkgeyByZXR1cm4gW107IH0sXG4gICAgICAgICAgICBhdHRhY2hPcmlnaW5Ub1BhdGNoZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vb3A7IH0sXG4gICAgICAgICAgICBfcmVkZWZpbmVQcm9wZXJ0eTogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9vcDsgfSxcbiAgICAgICAgICAgIHBhdGNoQ2FsbGJhY2tzOiBmdW5jdGlvbiAoKSB7IHJldHVybiBub29wOyB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciBfY3VycmVudFpvbmVGcmFtZSA9IHsgcGFyZW50OiBudWxsLCB6b25lOiBuZXcgWm9uZShudWxsLCBudWxsKSB9O1xuICAgICAgICB2YXIgX2N1cnJlbnRUYXNrID0gbnVsbDtcbiAgICAgICAgdmFyIF9udW1iZXJPZk5lc3RlZFRhc2tGcmFtZXMgPSAwO1xuICAgICAgICBmdW5jdGlvbiBub29wKCkgeyB9XG4gICAgICAgIHBlcmZvcm1hbmNlTWVhc3VyZSgnWm9uZScsICdab25lJyk7XG4gICAgICAgIHJldHVybiBnbG9iYWxbJ1pvbmUnXSA9IFpvbmU7XG4gICAgfSkodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93IHx8IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmIHx8IGdsb2JhbCk7XG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgLyoqXG4gICAgICogU3VwcHJlc3MgY2xvc3VyZSBjb21waWxlciBlcnJvcnMgYWJvdXQgdW5rbm93biAnWm9uZScgdmFyaWFibGVcbiAgICAgKiBAZmlsZW92ZXJ2aWV3XG4gICAgICogQHN1cHByZXNzIHt1bmRlZmluZWRWYXJzLGdsb2JhbFRoaXMsbWlzc2luZ1JlcXVpcmV9XG4gICAgICovXG4gICAgLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJub2RlXCIvPlxuICAgIC8vIGlzc3VlICM5ODksIHRvIHJlZHVjZSBidW5kbGUgc2l6ZSwgdXNlIHNob3J0IG5hbWVcbiAgICAvKiogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvciAqL1xuICAgIHZhciBPYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAgIC8qKiBPYmplY3QuZGVmaW5lUHJvcGVydHkgKi9cbiAgICB2YXIgT2JqZWN0RGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG4gICAgLyoqIE9iamVjdC5nZXRQcm90b3R5cGVPZiAqL1xuICAgIHZhciBPYmplY3RHZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbiAgICAvKiogT2JqZWN0LmNyZWF0ZSAqL1xuICAgIHZhciBPYmplY3RDcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xuICAgIC8qKiBBcnJheS5wcm90b3R5cGUuc2xpY2UgKi9cbiAgICB2YXIgQXJyYXlTbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbiAgICAvKiogYWRkRXZlbnRMaXN0ZW5lciBzdHJpbmcgY29uc3QgKi9cbiAgICB2YXIgQUREX0VWRU5UX0xJU1RFTkVSX1NUUiA9ICdhZGRFdmVudExpc3RlbmVyJztcbiAgICAvKiogcmVtb3ZlRXZlbnRMaXN0ZW5lciBzdHJpbmcgY29uc3QgKi9cbiAgICB2YXIgUkVNT1ZFX0VWRU5UX0xJU1RFTkVSX1NUUiA9ICdyZW1vdmVFdmVudExpc3RlbmVyJztcbiAgICAvKiogem9uZVN5bWJvbCBhZGRFdmVudExpc3RlbmVyICovXG4gICAgdmFyIFpPTkVfU1lNQk9MX0FERF9FVkVOVF9MSVNURU5FUiA9IFpvbmUuX19zeW1ib2xfXyhBRERfRVZFTlRfTElTVEVORVJfU1RSKTtcbiAgICAvKiogem9uZVN5bWJvbCByZW1vdmVFdmVudExpc3RlbmVyICovXG4gICAgdmFyIFpPTkVfU1lNQk9MX1JFTU9WRV9FVkVOVF9MSVNURU5FUiA9IFpvbmUuX19zeW1ib2xfXyhSRU1PVkVfRVZFTlRfTElTVEVORVJfU1RSKTtcbiAgICAvKiogdHJ1ZSBzdHJpbmcgY29uc3QgKi9cbiAgICB2YXIgVFJVRV9TVFIgPSAndHJ1ZSc7XG4gICAgLyoqIGZhbHNlIHN0cmluZyBjb25zdCAqL1xuICAgIHZhciBGQUxTRV9TVFIgPSAnZmFsc2UnO1xuICAgIC8qKiBab25lIHN5bWJvbCBwcmVmaXggc3RyaW5nIGNvbnN0LiAqL1xuICAgIHZhciBaT05FX1NZTUJPTF9QUkVGSVggPSBab25lLl9fc3ltYm9sX18oJycpO1xuICAgIGZ1bmN0aW9uIHdyYXBXaXRoQ3VycmVudFpvbmUoY2FsbGJhY2ssIHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gWm9uZS5jdXJyZW50LndyYXAoY2FsbGJhY2ssIHNvdXJjZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNjaGVkdWxlTWFjcm9UYXNrV2l0aEN1cnJlbnRab25lKHNvdXJjZSwgY2FsbGJhY2ssIGRhdGEsIGN1c3RvbVNjaGVkdWxlLCBjdXN0b21DYW5jZWwpIHtcbiAgICAgICAgcmV0dXJuIFpvbmUuY3VycmVudC5zY2hlZHVsZU1hY3JvVGFzayhzb3VyY2UsIGNhbGxiYWNrLCBkYXRhLCBjdXN0b21TY2hlZHVsZSwgY3VzdG9tQ2FuY2VsKTtcbiAgICB9XG4gICAgdmFyIHpvbmVTeW1ib2wgPSBab25lLl9fc3ltYm9sX187XG4gICAgdmFyIGlzV2luZG93RXhpc3RzID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgdmFyIGludGVybmFsV2luZG93ID0gaXNXaW5kb3dFeGlzdHMgPyB3aW5kb3cgOiB1bmRlZmluZWQ7XG4gICAgdmFyIF9nbG9iYWwgPSBpc1dpbmRvd0V4aXN0cyAmJiBpbnRlcm5hbFdpbmRvdyB8fCB0eXBlb2Ygc2VsZiA9PT0gJ29iamVjdCcgJiYgc2VsZiB8fCBnbG9iYWw7XG4gICAgdmFyIFJFTU9WRV9BVFRSSUJVVEUgPSAncmVtb3ZlQXR0cmlidXRlJztcbiAgICB2YXIgTlVMTF9PTl9QUk9QX1ZBTFVFID0gW251bGxdO1xuICAgIGZ1bmN0aW9uIGJpbmRBcmd1bWVudHMoYXJncywgc291cmNlKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSBhcmdzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGFyZ3NbaV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBhcmdzW2ldID0gd3JhcFdpdGhDdXJyZW50Wm9uZShhcmdzW2ldLCBzb3VyY2UgKyAnXycgKyBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJncztcbiAgICB9XG4gICAgZnVuY3Rpb24gcGF0Y2hQcm90b3R5cGUocHJvdG90eXBlLCBmbk5hbWVzKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBwcm90b3R5cGUuY29uc3RydWN0b3JbJ25hbWUnXTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IGZuTmFtZXNbaV07XG4gICAgICAgICAgICB2YXIgZGVsZWdhdGUgPSBwcm90b3R5cGVbbmFtZV8xXTtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgICAgICAgIHZhciBwcm90b3R5cGVEZXNjID0gT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvdHlwZSwgbmFtZV8xKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzUHJvcGVydHlXcml0YWJsZShwcm90b3R5cGVEZXNjKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcm90b3R5cGVbbmFtZV8xXSA9IChmdW5jdGlvbiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhdGNoZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVsZWdhdGUuYXBwbHkodGhpcywgYmluZEFyZ3VtZW50cyhhcmd1bWVudHMsIHNvdXJjZSArICcuJyArIG5hbWVfMSkpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBhdHRhY2hPcmlnaW5Ub1BhdGNoZWQocGF0Y2hlZCwgZGVsZWdhdGUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGF0Y2hlZDtcbiAgICAgICAgICAgICAgICB9KShkZWxlZ2F0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZm5OYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBpc1Byb3BlcnR5V3JpdGFibGUocHJvcGVydHlEZXNjKSB7XG4gICAgICAgIGlmICghcHJvcGVydHlEZXNjKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcGVydHlEZXNjLndyaXRhYmxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhKHR5cGVvZiBwcm9wZXJ0eURlc2MuZ2V0ID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBwcm9wZXJ0eURlc2Muc2V0ID09PSAndW5kZWZpbmVkJyk7XG4gICAgfVxuICAgIHZhciBpc1dlYldvcmtlciA9ICh0eXBlb2YgV29ya2VyR2xvYmFsU2NvcGUgIT09ICd1bmRlZmluZWQnICYmIHNlbGYgaW5zdGFuY2VvZiBXb3JrZXJHbG9iYWxTY29wZSk7XG4gICAgLy8gTWFrZSBzdXJlIHRvIGFjY2VzcyBgcHJvY2Vzc2AgdGhyb3VnaCBgX2dsb2JhbGAgc28gdGhhdCBXZWJQYWNrIGRvZXMgbm90IGFjY2lkZW50YWxseSBicm93c2VyaWZ5XG4gICAgLy8gdGhpcyBjb2RlLlxuICAgIHZhciBpc05vZGUgPSAoISgnbncnIGluIF9nbG9iYWwpICYmIHR5cGVvZiBfZ2xvYmFsLnByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIHt9LnRvU3RyaW5nLmNhbGwoX2dsb2JhbC5wcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKTtcbiAgICB2YXIgaXNCcm93c2VyID0gIWlzTm9kZSAmJiAhaXNXZWJXb3JrZXIgJiYgISEoaXNXaW5kb3dFeGlzdHMgJiYgaW50ZXJuYWxXaW5kb3dbJ0hUTUxFbGVtZW50J10pO1xuICAgIC8vIHdlIGFyZSBpbiBlbGVjdHJvbiBvZiBudywgc28gd2UgYXJlIGJvdGggYnJvd3NlciBhbmQgbm9kZWpzXG4gICAgLy8gTWFrZSBzdXJlIHRvIGFjY2VzcyBgcHJvY2Vzc2AgdGhyb3VnaCBgX2dsb2JhbGAgc28gdGhhdCBXZWJQYWNrIGRvZXMgbm90IGFjY2lkZW50YWxseSBicm93c2VyaWZ5XG4gICAgLy8gdGhpcyBjb2RlLlxuICAgIHZhciBpc01peCA9IHR5cGVvZiBfZ2xvYmFsLnByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIHt9LnRvU3RyaW5nLmNhbGwoX2dsb2JhbC5wcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nICYmICFpc1dlYldvcmtlciAmJlxuICAgICAgICAhIShpc1dpbmRvd0V4aXN0cyAmJiBpbnRlcm5hbFdpbmRvd1snSFRNTEVsZW1lbnQnXSk7XG4gICAgdmFyIHpvbmVTeW1ib2xFdmVudE5hbWVzID0ge307XG4gICAgdmFyIHdyYXBGbiA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci96b25lLmpzL2lzc3Vlcy85MTEsIGluIElFLCBzb21ldGltZXNcbiAgICAgICAgLy8gZXZlbnQgd2lsbCBiZSB1bmRlZmluZWQsIHNvIHdlIG5lZWQgdG8gdXNlIHdpbmRvdy5ldmVudFxuICAgICAgICBldmVudCA9IGV2ZW50IHx8IF9nbG9iYWwuZXZlbnQ7XG4gICAgICAgIGlmICghZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXZlbnROYW1lU3ltYm9sID0gem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnQudHlwZV07XG4gICAgICAgIGlmICghZXZlbnROYW1lU3ltYm9sKSB7XG4gICAgICAgICAgICBldmVudE5hbWVTeW1ib2wgPSB6b25lU3ltYm9sRXZlbnROYW1lc1tldmVudC50eXBlXSA9IHpvbmVTeW1ib2woJ09OX1BST1BFUlRZJyArIGV2ZW50LnR5cGUpO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0YXJnZXQgPSB0aGlzIHx8IGV2ZW50LnRhcmdldCB8fCBfZ2xvYmFsO1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSB0YXJnZXRbZXZlbnROYW1lU3ltYm9sXTtcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgaWYgKGlzQnJvd3NlciAmJiB0YXJnZXQgPT09IGludGVybmFsV2luZG93ICYmIGV2ZW50LnR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAgICAgICAgIC8vIHdpbmRvdy5vbmVycm9yIGhhdmUgZGlmZmVyZW50IHNpZ25pdHVyZVxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0dsb2JhbEV2ZW50SGFuZGxlcnMvb25lcnJvciN3aW5kb3cub25lcnJvclxuICAgICAgICAgICAgLy8gYW5kIG9uZXJyb3IgY2FsbGJhY2sgd2lsbCBwcmV2ZW50IGRlZmF1bHQgd2hlbiBjYWxsYmFjayByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgdmFyIGVycm9yRXZlbnQgPSBldmVudDtcbiAgICAgICAgICAgIHJlc3VsdCA9IGxpc3RlbmVyICYmXG4gICAgICAgICAgICAgICAgbGlzdGVuZXIuY2FsbCh0aGlzLCBlcnJvckV2ZW50Lm1lc3NhZ2UsIGVycm9yRXZlbnQuZmlsZW5hbWUsIGVycm9yRXZlbnQubGluZW5vLCBlcnJvckV2ZW50LmNvbG5vLCBlcnJvckV2ZW50LmVycm9yKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gbGlzdGVuZXIgJiYgbGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgIT0gdW5kZWZpbmVkICYmICFyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICBmdW5jdGlvbiBwYXRjaFByb3BlcnR5KG9iaiwgcHJvcCwgcHJvdG90eXBlKSB7XG4gICAgICAgIHZhciBkZXNjID0gT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwgcHJvcCk7XG4gICAgICAgIGlmICghZGVzYyAmJiBwcm90b3R5cGUpIHtcbiAgICAgICAgICAgIC8vIHdoZW4gcGF0Y2ggd2luZG93IG9iamVjdCwgdXNlIHByb3RvdHlwZSB0byBjaGVjayBwcm9wIGV4aXN0IG9yIG5vdFxuICAgICAgICAgICAgdmFyIHByb3RvdHlwZURlc2MgPSBPYmplY3RHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG90eXBlLCBwcm9wKTtcbiAgICAgICAgICAgIGlmIChwcm90b3R5cGVEZXNjKSB7XG4gICAgICAgICAgICAgICAgZGVzYyA9IHsgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgdGhlIGRlc2NyaXB0b3Igbm90IGV4aXN0cyBvciBpcyBub3QgY29uZmlndXJhYmxlXG4gICAgICAgIC8vIGp1c3QgcmV0dXJuXG4gICAgICAgIGlmICghZGVzYyB8fCAhZGVzYy5jb25maWd1cmFibGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb25Qcm9wUGF0Y2hlZFN5bWJvbCA9IHpvbmVTeW1ib2woJ29uJyArIHByb3AgKyAncGF0Y2hlZCcpO1xuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KG9uUHJvcFBhdGNoZWRTeW1ib2wpICYmIG9ialtvblByb3BQYXRjaGVkU3ltYm9sXSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEEgcHJvcGVydHkgZGVzY3JpcHRvciBjYW5ub3QgaGF2ZSBnZXR0ZXIvc2V0dGVyIGFuZCBiZSB3cml0YWJsZVxuICAgICAgICAvLyBkZWxldGluZyB0aGUgd3JpdGFibGUgYW5kIHZhbHVlIHByb3BlcnRpZXMgYXZvaWRzIHRoaXMgZXJyb3I6XG4gICAgICAgIC8vXG4gICAgICAgIC8vIFR5cGVFcnJvcjogcHJvcGVydHkgZGVzY3JpcHRvcnMgbXVzdCBub3Qgc3BlY2lmeSBhIHZhbHVlIG9yIGJlIHdyaXRhYmxlIHdoZW4gYVxuICAgICAgICAvLyBnZXR0ZXIgb3Igc2V0dGVyIGhhcyBiZWVuIHNwZWNpZmllZFxuICAgICAgICBkZWxldGUgZGVzYy53cml0YWJsZTtcbiAgICAgICAgZGVsZXRlIGRlc2MudmFsdWU7XG4gICAgICAgIHZhciBvcmlnaW5hbERlc2NHZXQgPSBkZXNjLmdldDtcbiAgICAgICAgdmFyIG9yaWdpbmFsRGVzY1NldCA9IGRlc2Muc2V0O1xuICAgICAgICAvLyBzdWJzdHIoMikgY3V6ICdvbmNsaWNrJyAtPiAnY2xpY2snLCBldGNcbiAgICAgICAgdmFyIGV2ZW50TmFtZSA9IHByb3Auc3Vic3RyKDIpO1xuICAgICAgICB2YXIgZXZlbnROYW1lU3ltYm9sID0gem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnROYW1lXTtcbiAgICAgICAgaWYgKCFldmVudE5hbWVTeW1ib2wpIHtcbiAgICAgICAgICAgIGV2ZW50TmFtZVN5bWJvbCA9IHpvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50TmFtZV0gPSB6b25lU3ltYm9sKCdPTl9QUk9QRVJUWScgKyBldmVudE5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGRlc2Muc2V0ID0gZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAvLyBpbiBzb21lIG9mIHdpbmRvd3MncyBvbnByb3BlcnR5IGNhbGxiYWNrLCB0aGlzIGlzIHVuZGVmaW5lZFxuICAgICAgICAgICAgLy8gc28gd2UgbmVlZCB0byBjaGVjayBpdFxuICAgICAgICAgICAgdmFyIHRhcmdldCA9IHRoaXM7XG4gICAgICAgICAgICBpZiAoIXRhcmdldCAmJiBvYmogPT09IF9nbG9iYWwpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBfZ2xvYmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcHJldmlvdXNWYWx1ZSA9IHRhcmdldFtldmVudE5hbWVTeW1ib2xdO1xuICAgICAgICAgICAgaWYgKHByZXZpb3VzVmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIHdyYXBGbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpc3N1ZSAjOTc4LCB3aGVuIG9ubG9hZCBoYW5kbGVyIHdhcyBhZGRlZCBiZWZvcmUgbG9hZGluZyB6b25lLmpzXG4gICAgICAgICAgICAvLyB3ZSBzaG91bGQgcmVtb3ZlIGl0IHdpdGggb3JpZ2luYWxEZXNjU2V0XG4gICAgICAgICAgICBpZiAob3JpZ2luYWxEZXNjU2V0KSB7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxEZXNjU2V0LmFwcGx5KHRhcmdldCwgTlVMTF9PTl9QUk9QX1ZBTFVFKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgbmV3VmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbZXZlbnROYW1lU3ltYm9sXSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgd3JhcEZuLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbZXZlbnROYW1lU3ltYm9sXSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIFRoZSBnZXR0ZXIgd291bGQgcmV0dXJuIHVuZGVmaW5lZCBmb3IgdW5hc3NpZ25lZCBwcm9wZXJ0aWVzIGJ1dCB0aGUgZGVmYXVsdCB2YWx1ZSBvZiBhblxuICAgICAgICAvLyB1bmFzc2lnbmVkIHByb3BlcnR5IGlzIG51bGxcbiAgICAgICAgZGVzYy5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBpbiBzb21lIG9mIHdpbmRvd3MncyBvbnByb3BlcnR5IGNhbGxiYWNrLCB0aGlzIGlzIHVuZGVmaW5lZFxuICAgICAgICAgICAgLy8gc28gd2UgbmVlZCB0byBjaGVjayBpdFxuICAgICAgICAgICAgdmFyIHRhcmdldCA9IHRoaXM7XG4gICAgICAgICAgICBpZiAoIXRhcmdldCAmJiBvYmogPT09IF9nbG9iYWwpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBfZ2xvYmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBsaXN0ZW5lciA9IHRhcmdldFtldmVudE5hbWVTeW1ib2xdO1xuICAgICAgICAgICAgaWYgKGxpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob3JpZ2luYWxEZXNjR2V0KSB7XG4gICAgICAgICAgICAgICAgLy8gcmVzdWx0IHdpbGwgYmUgbnVsbCB3aGVuIHVzZSBpbmxpbmUgZXZlbnQgYXR0cmlidXRlLFxuICAgICAgICAgICAgICAgIC8vIHN1Y2ggYXMgPGJ1dHRvbiBvbmNsaWNrPVwiZnVuYygpO1wiPk9LPC9idXR0b24+XG4gICAgICAgICAgICAgICAgLy8gYmVjYXVzZSB0aGUgb25jbGljayBmdW5jdGlvbiBpcyBpbnRlcm5hbCByYXcgdW5jb21waWxlZCBoYW5kbGVyXG4gICAgICAgICAgICAgICAgLy8gdGhlIG9uY2xpY2sgd2lsbCBiZSBldmFsdWF0ZWQgd2hlbiBmaXJzdCB0aW1lIGV2ZW50IHdhcyB0cmlnZ2VyZWQgb3JcbiAgICAgICAgICAgICAgICAvLyB0aGUgcHJvcGVydHkgaXMgYWNjZXNzZWQsIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3pvbmUuanMvaXNzdWVzLzUyNVxuICAgICAgICAgICAgICAgIC8vIHNvIHdlIHNob3VsZCB1c2Ugb3JpZ2luYWwgbmF0aXZlIGdldCB0byByZXRyaWV2ZSB0aGUgaGFuZGxlclxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IG9yaWdpbmFsRGVzY0dldCAmJiBvcmlnaW5hbERlc2NHZXQuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVzYy5zZXQuY2FsbCh0aGlzLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0W1JFTU9WRV9BVFRSSUJVVEVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQucmVtb3ZlQXR0cmlidXRlKHByb3ApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0RGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCBkZXNjKTtcbiAgICAgICAgb2JqW29uUHJvcFBhdGNoZWRTeW1ib2xdID0gdHJ1ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcGF0Y2hPblByb3BlcnRpZXMob2JqLCBwcm9wZXJ0aWVzLCBwcm90b3R5cGUpIHtcbiAgICAgICAgaWYgKHByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHBhdGNoUHJvcGVydHkob2JqLCAnb24nICsgcHJvcGVydGllc1tpXSwgcHJvdG90eXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBvblByb3BlcnRpZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIHByb3AgaW4gb2JqKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3Auc3Vic3RyKDAsIDIpID09ICdvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgb25Qcm9wZXJ0aWVzLnB1c2gocHJvcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBvblByb3BlcnRpZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBwYXRjaFByb3BlcnR5KG9iaiwgb25Qcm9wZXJ0aWVzW2pdLCBwcm90b3R5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBvcmlnaW5hbEluc3RhbmNlS2V5ID0gem9uZVN5bWJvbCgnb3JpZ2luYWxJbnN0YW5jZScpO1xuICAgIC8vIHdyYXAgc29tZSBuYXRpdmUgQVBJIG9uIGB3aW5kb3dgXG4gICAgZnVuY3Rpb24gcGF0Y2hDbGFzcyhjbGFzc05hbWUpIHtcbiAgICAgICAgdmFyIE9yaWdpbmFsQ2xhc3MgPSBfZ2xvYmFsW2NsYXNzTmFtZV07XG4gICAgICAgIGlmICghT3JpZ2luYWxDbGFzcylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgLy8ga2VlcCBvcmlnaW5hbCBjbGFzcyBpbiBnbG9iYWxcbiAgICAgICAgX2dsb2JhbFt6b25lU3ltYm9sKGNsYXNzTmFtZSldID0gT3JpZ2luYWxDbGFzcztcbiAgICAgICAgX2dsb2JhbFtjbGFzc05hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGEgPSBiaW5kQXJndW1lbnRzKGFyZ3VtZW50cywgY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIHN3aXRjaCAoYS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV0gPSBuZXcgT3JpZ2luYWxDbGFzcygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV0gPSBuZXcgT3JpZ2luYWxDbGFzcyhhWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldID0gbmV3IE9yaWdpbmFsQ2xhc3MoYVswXSwgYVsxXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XSA9IG5ldyBPcmlnaW5hbENsYXNzKGFbMF0sIGFbMV0sIGFbMl0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV0gPSBuZXcgT3JpZ2luYWxDbGFzcyhhWzBdLCBhWzFdLCBhWzJdLCBhWzNdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBcmcgbGlzdCB0b28gbG9uZy4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLy8gYXR0YWNoIG9yaWdpbmFsIGRlbGVnYXRlIHRvIHBhdGNoZWQgZnVuY3Rpb25cbiAgICAgICAgYXR0YWNoT3JpZ2luVG9QYXRjaGVkKF9nbG9iYWxbY2xhc3NOYW1lXSwgT3JpZ2luYWxDbGFzcyk7XG4gICAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBPcmlnaW5hbENsYXNzKGZ1bmN0aW9uICgpIHsgfSk7XG4gICAgICAgIHZhciBwcm9wO1xuICAgICAgICBmb3IgKHByb3AgaW4gaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD00NDcyMVxuICAgICAgICAgICAgaWYgKGNsYXNzTmFtZSA9PT0gJ1hNTEh0dHBSZXF1ZXN0JyAmJiBwcm9wID09PSAncmVzcG9uc2VCbG9iJylcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaW5zdGFuY2VbcHJvcF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgX2dsb2JhbFtjbGFzc05hbWVdLnByb3RvdHlwZVtwcm9wXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW29yaWdpbmFsSW5zdGFuY2VLZXldW3Byb3BdLmFwcGx5KHRoaXNbb3JpZ2luYWxJbnN0YW5jZUtleV0sIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBPYmplY3REZWZpbmVQcm9wZXJ0eShfZ2xvYmFsW2NsYXNzTmFtZV0ucHJvdG90eXBlLCBwcm9wLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XVtwcm9wXSA9IHdyYXBXaXRoQ3VycmVudFpvbmUoZm4sIGNsYXNzTmFtZSArICcuJyArIHByb3ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBrZWVwIGNhbGxiYWNrIGluIHdyYXBwZWQgZnVuY3Rpb24gc28gd2UgY2FuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVzZSBpdCBpbiBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgdG8gcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBuYXRpdmUgb25lLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2hPcmlnaW5Ub1BhdGNoZWQodGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XVtwcm9wXSwgZm4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XVtwcm9wXSA9IGZuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1tvcmlnaW5hbEluc3RhbmNlS2V5XVtwcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfShwcm9wKSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChwcm9wIGluIE9yaWdpbmFsQ2xhc3MpIHtcbiAgICAgICAgICAgIGlmIChwcm9wICE9PSAncHJvdG90eXBlJyAmJiBPcmlnaW5hbENsYXNzLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgICAgICAgICAgX2dsb2JhbFtjbGFzc05hbWVdW3Byb3BdID0gT3JpZ2luYWxDbGFzc1twcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBwYXRjaE1ldGhvZCh0YXJnZXQsIG5hbWUsIHBhdGNoRm4pIHtcbiAgICAgICAgdmFyIHByb3RvID0gdGFyZ2V0O1xuICAgICAgICB3aGlsZSAocHJvdG8gJiYgIXByb3RvLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgICBwcm90byA9IE9iamVjdEdldFByb3RvdHlwZU9mKHByb3RvKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXByb3RvICYmIHRhcmdldFtuYW1lXSkge1xuICAgICAgICAgICAgLy8gc29tZWhvdyB3ZSBkaWQgbm90IGZpbmQgaXQsIGJ1dCB3ZSBjYW4gc2VlIGl0LiBUaGlzIGhhcHBlbnMgb24gSUUgZm9yIFdpbmRvdyBwcm9wZXJ0aWVzLlxuICAgICAgICAgICAgcHJvdG8gPSB0YXJnZXQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRlbGVnYXRlTmFtZSA9IHpvbmVTeW1ib2wobmFtZSk7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IG51bGw7XG4gICAgICAgIGlmIChwcm90byAmJiAoIShkZWxlZ2F0ZSA9IHByb3RvW2RlbGVnYXRlTmFtZV0pIHx8ICFwcm90by5oYXNPd25Qcm9wZXJ0eShkZWxlZ2F0ZU5hbWUpKSkge1xuICAgICAgICAgICAgZGVsZWdhdGUgPSBwcm90b1tkZWxlZ2F0ZU5hbWVdID0gcHJvdG9bbmFtZV07XG4gICAgICAgICAgICAvLyBjaGVjayB3aGV0aGVyIHByb3RvW25hbWVdIGlzIHdyaXRhYmxlXG4gICAgICAgICAgICAvLyBzb21lIHByb3BlcnR5IGlzIHJlYWRvbmx5IGluIHNhZmFyaSwgc3VjaCBhcyBIdG1sQ2FudmFzRWxlbWVudC5wcm90b3R5cGUudG9CbG9iXG4gICAgICAgICAgICB2YXIgZGVzYyA9IHByb3RvICYmIE9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90bywgbmFtZSk7XG4gICAgICAgICAgICBpZiAoaXNQcm9wZXJ0eVdyaXRhYmxlKGRlc2MpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhdGNoRGVsZWdhdGVfMSA9IHBhdGNoRm4oZGVsZWdhdGUsIGRlbGVnYXRlTmFtZSwgbmFtZSk7XG4gICAgICAgICAgICAgICAgcHJvdG9bbmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXRjaERlbGVnYXRlXzEodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGF0dGFjaE9yaWdpblRvUGF0Y2hlZChwcm90b1tuYW1lXSwgZGVsZWdhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWxlZ2F0ZTtcbiAgICB9XG4gICAgLy8gVE9ETzogQEppYUxpUGFzc2lvbiwgc3VwcG9ydCBjYW5jZWwgdGFzayBsYXRlciBpZiBuZWNlc3NhcnlcbiAgICBmdW5jdGlvbiBwYXRjaE1hY3JvVGFzayhvYmosIGZ1bmNOYW1lLCBtZXRhQ3JlYXRvcikge1xuICAgICAgICB2YXIgc2V0TmF0aXZlID0gbnVsbDtcbiAgICAgICAgZnVuY3Rpb24gc2NoZWR1bGVUYXNrKHRhc2spIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0gdGFzay5kYXRhO1xuICAgICAgICAgICAgZGF0YS5hcmdzW2RhdGEuY2JJZHhdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRhc2suaW52b2tlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2V0TmF0aXZlLmFwcGx5KGRhdGEudGFyZ2V0LCBkYXRhLmFyZ3MpO1xuICAgICAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICAgIH1cbiAgICAgICAgc2V0TmF0aXZlID0gcGF0Y2hNZXRob2Qob2JqLCBmdW5jTmFtZSwgZnVuY3Rpb24gKGRlbGVnYXRlKSB7IHJldHVybiBmdW5jdGlvbiAoc2VsZiwgYXJncykge1xuICAgICAgICAgICAgdmFyIG1ldGEgPSBtZXRhQ3JlYXRvcihzZWxmLCBhcmdzKTtcbiAgICAgICAgICAgIGlmIChtZXRhLmNiSWR4ID49IDAgJiYgdHlwZW9mIGFyZ3NbbWV0YS5jYklkeF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2NoZWR1bGVNYWNyb1Rhc2tXaXRoQ3VycmVudFpvbmUobWV0YS5uYW1lLCBhcmdzW21ldGEuY2JJZHhdLCBtZXRhLCBzY2hlZHVsZVRhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gY2F1c2UgYW4gZXJyb3IgYnkgY2FsbGluZyBpdCBkaXJlY3RseS5cbiAgICAgICAgICAgICAgICByZXR1cm4gZGVsZWdhdGUuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07IH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhdHRhY2hPcmlnaW5Ub1BhdGNoZWQocGF0Y2hlZCwgb3JpZ2luYWwpIHtcbiAgICAgICAgcGF0Y2hlZFt6b25lU3ltYm9sKCdPcmlnaW5hbERlbGVnYXRlJyldID0gb3JpZ2luYWw7XG4gICAgfVxuICAgIHZhciBpc0RldGVjdGVkSUVPckVkZ2UgPSBmYWxzZTtcbiAgICB2YXIgaWVPckVkZ2UgPSBmYWxzZTtcbiAgICBmdW5jdGlvbiBpc0lFKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHVhID0gaW50ZXJuYWxXaW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICAgICAgICAgIGlmICh1YS5pbmRleE9mKCdNU0lFICcpICE9PSAtMSB8fCB1YS5pbmRleE9mKCdUcmlkZW50LycpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNJRU9yRWRnZSgpIHtcbiAgICAgICAgaWYgKGlzRGV0ZWN0ZWRJRU9yRWRnZSkge1xuICAgICAgICAgICAgcmV0dXJuIGllT3JFZGdlO1xuICAgICAgICB9XG4gICAgICAgIGlzRGV0ZWN0ZWRJRU9yRWRnZSA9IHRydWU7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgdWEgPSBpbnRlcm5hbFdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xuICAgICAgICAgICAgaWYgKHVhLmluZGV4T2YoJ01TSUUgJykgIT09IC0xIHx8IHVhLmluZGV4T2YoJ1RyaWRlbnQvJykgIT09IC0xIHx8IHVhLmluZGV4T2YoJ0VkZ2UvJykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgaWVPckVkZ2UgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpZU9yRWRnZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgWm9uZS5fX2xvYWRfcGF0Y2goJ1pvbmVBd2FyZVByb21pc2UnLCBmdW5jdGlvbiAoZ2xvYmFsLCBab25lLCBhcGkpIHtcbiAgICAgICAgdmFyIE9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICAgICAgIHZhciBPYmplY3REZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbiAgICAgICAgZnVuY3Rpb24gcmVhZGFibGVPYmplY3RUb1N0cmluZyhvYmopIHtcbiAgICAgICAgICAgIGlmIChvYmogJiYgb2JqLnRvU3RyaW5nID09PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNsYXNzTmFtZSA9IG9iai5jb25zdHJ1Y3RvciAmJiBvYmouY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKGNsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICcnKSArICc6ICcgKyBKU09OLnN0cmluZ2lmeShvYmopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9iaiA/IG9iai50b1N0cmluZygpIDogT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIF9fc3ltYm9sX18gPSBhcGkuc3ltYm9sO1xuICAgICAgICB2YXIgX3VuY2F1Z2h0UHJvbWlzZUVycm9ycyA9IFtdO1xuICAgICAgICB2YXIgaXNEaXNhYmxlV3JhcHBpbmdVbmNhdWdodFByb21pc2VSZWplY3Rpb24gPSBnbG9iYWxbX19zeW1ib2xfXygnRElTQUJMRV9XUkFQUElOR19VTkNBVUdIVF9QUk9NSVNFX1JFSkVDVElPTicpXSA9PT0gdHJ1ZTtcbiAgICAgICAgdmFyIHN5bWJvbFByb21pc2UgPSBfX3N5bWJvbF9fKCdQcm9taXNlJyk7XG4gICAgICAgIHZhciBzeW1ib2xUaGVuID0gX19zeW1ib2xfXygndGhlbicpO1xuICAgICAgICB2YXIgY3JlYXRpb25UcmFjZSA9ICdfX2NyZWF0aW9uVHJhY2VfXyc7XG4gICAgICAgIGFwaS5vblVuaGFuZGxlZEVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmIChhcGkuc2hvd1VuY2F1Z2h0RXJyb3IoKSkge1xuICAgICAgICAgICAgICAgIHZhciByZWplY3Rpb24gPSBlICYmIGUucmVqZWN0aW9uO1xuICAgICAgICAgICAgICAgIGlmIChyZWplY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIFByb21pc2UgcmVqZWN0aW9uOicsIHJlamVjdGlvbiBpbnN0YW5jZW9mIEVycm9yID8gcmVqZWN0aW9uLm1lc3NhZ2UgOiByZWplY3Rpb24sICc7IFpvbmU6JywgZS56b25lLm5hbWUsICc7IFRhc2s6JywgZS50YXNrICYmIGUudGFzay5zb3VyY2UsICc7IFZhbHVlOicsIHJlamVjdGlvbiwgcmVqZWN0aW9uIGluc3RhbmNlb2YgRXJyb3IgPyByZWplY3Rpb24uc3RhY2sgOiB1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGFwaS5taWNyb3Rhc2tEcmFpbkRvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2xvb3BfMiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgdW5jYXVnaHRQcm9taXNlRXJyb3IgPSBfdW5jYXVnaHRQcm9taXNlRXJyb3JzLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdW5jYXVnaHRQcm9taXNlRXJyb3Iuem9uZS5ydW5HdWFyZGVkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1bmNhdWdodFByb21pc2VFcnJvci50aHJvd09yaWdpbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgdW5jYXVnaHRQcm9taXNlRXJyb3IucmVqZWN0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgdW5jYXVnaHRQcm9taXNlRXJyb3I7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlVW5oYW5kbGVkUmVqZWN0aW9uKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgd2hpbGUgKF91bmNhdWdodFByb21pc2VFcnJvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgX2xvb3BfMigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgVU5IQU5ETEVEX1BST01JU0VfUkVKRUNUSU9OX0hBTkRMRVJfU1lNQk9MID0gX19zeW1ib2xfXygndW5oYW5kbGVkUHJvbWlzZVJlamVjdGlvbkhhbmRsZXInKTtcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlVW5oYW5kbGVkUmVqZWN0aW9uKGUpIHtcbiAgICAgICAgICAgIGFwaS5vblVuaGFuZGxlZEVycm9yKGUpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YXIgaGFuZGxlciA9IFpvbmVbVU5IQU5ETEVEX1BST01JU0VfUkVKRUNUSU9OX0hBTkRMRVJfU1lNQk9MXTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBpc1RoZW5hYmxlKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUudGhlbjtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBmb3J3YXJkUmVzb2x1dGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGZvcndhcmRSZWplY3Rpb24ocmVqZWN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gWm9uZUF3YXJlUHJvbWlzZS5yZWplY3QocmVqZWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3ltYm9sU3RhdGUgPSBfX3N5bWJvbF9fKCdzdGF0ZScpO1xuICAgICAgICB2YXIgc3ltYm9sVmFsdWUgPSBfX3N5bWJvbF9fKCd2YWx1ZScpO1xuICAgICAgICB2YXIgc3ltYm9sRmluYWxseSA9IF9fc3ltYm9sX18oJ2ZpbmFsbHknKTtcbiAgICAgICAgdmFyIHN5bWJvbFBhcmVudFByb21pc2VWYWx1ZSA9IF9fc3ltYm9sX18oJ3BhcmVudFByb21pc2VWYWx1ZScpO1xuICAgICAgICB2YXIgc3ltYm9sUGFyZW50UHJvbWlzZVN0YXRlID0gX19zeW1ib2xfXygncGFyZW50UHJvbWlzZVN0YXRlJyk7XG4gICAgICAgIHZhciBzb3VyY2UgPSAnUHJvbWlzZS50aGVuJztcbiAgICAgICAgdmFyIFVOUkVTT0xWRUQgPSBudWxsO1xuICAgICAgICB2YXIgUkVTT0xWRUQgPSB0cnVlO1xuICAgICAgICB2YXIgUkVKRUNURUQgPSBmYWxzZTtcbiAgICAgICAgdmFyIFJFSkVDVEVEX05PX0NBVENIID0gMDtcbiAgICAgICAgZnVuY3Rpb24gbWFrZVJlc29sdmVyKHByb21pc2UsIHN0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlUHJvbWlzZShwcm9taXNlLCBzdGF0ZSwgdik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZVByb21pc2UocHJvbWlzZSwgZmFsc2UsIGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIERvIG5vdCByZXR1cm4gdmFsdWUgb3IgeW91IHdpbGwgYnJlYWsgdGhlIFByb21pc2Ugc3BlYy5cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9uY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgd2FzQ2FsbGVkID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gd3JhcHBlcih3cmFwcGVkRnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAod2FzQ2FsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2FzQ2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlZEZ1bmN0aW9uLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIHZhciBUWVBFX0VSUk9SID0gJ1Byb21pc2UgcmVzb2x2ZWQgd2l0aCBpdHNlbGYnO1xuICAgICAgICB2YXIgQ1VSUkVOVF9UQVNLX1RSQUNFX1NZTUJPTCA9IF9fc3ltYm9sX18oJ2N1cnJlbnRUYXNrVHJhY2UnKTtcbiAgICAgICAgLy8gUHJvbWlzZSBSZXNvbHV0aW9uXG4gICAgICAgIGZ1bmN0aW9uIHJlc29sdmVQcm9taXNlKHByb21pc2UsIHN0YXRlLCB2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIG9uY2VXcmFwcGVyID0gb25jZSgpO1xuICAgICAgICAgICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihUWVBFX0VSUk9SKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9taXNlW3N5bWJvbFN0YXRlXSA9PT0gVU5SRVNPTFZFRCkge1xuICAgICAgICAgICAgICAgIC8vIHNob3VsZCBvbmx5IGdldCB2YWx1ZS50aGVuIG9uY2UgYmFzZWQgb24gcHJvbWlzZSBzcGVjLlxuICAgICAgICAgICAgICAgIHZhciB0aGVuID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoZW4gPSB2YWx1ZSAmJiB2YWx1ZS50aGVuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgb25jZVdyYXBwZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZVByb21pc2UocHJvbWlzZSwgZmFsc2UsIGVycik7XG4gICAgICAgICAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBpZiAodmFsdWUgaW5zdGFuY2VvZiBab25lQXdhcmVQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlICE9PSBSRUpFQ1RFRCAmJiB2YWx1ZSBpbnN0YW5jZW9mIFpvbmVBd2FyZVByb21pc2UgJiZcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuaGFzT3duUHJvcGVydHkoc3ltYm9sU3RhdGUpICYmIHZhbHVlLmhhc093blByb3BlcnR5KHN5bWJvbFZhbHVlKSAmJlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVtzeW1ib2xTdGF0ZV0gIT09IFVOUkVTT0xWRUQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJSZWplY3RlZE5vQ2F0Y2godmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlUHJvbWlzZShwcm9taXNlLCB2YWx1ZVtzeW1ib2xTdGF0ZV0sIHZhbHVlW3N5bWJvbFZhbHVlXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0YXRlICE9PSBSRUpFQ1RFRCAmJiB0eXBlb2YgdGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBvbmNlV3JhcHBlcihtYWtlUmVzb2x2ZXIocHJvbWlzZSwgc3RhdGUpKSwgb25jZVdyYXBwZXIobWFrZVJlc29sdmVyKHByb21pc2UsIGZhbHNlKSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uY2VXcmFwcGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlUHJvbWlzZShwcm9taXNlLCBmYWxzZSwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2Vbc3ltYm9sU3RhdGVdID0gc3RhdGU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBxdWV1ZSA9IHByb21pc2Vbc3ltYm9sVmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICBwcm9taXNlW3N5bWJvbFZhbHVlXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvbWlzZVtzeW1ib2xGaW5hbGx5XSA9PT0gc3ltYm9sRmluYWxseSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHByb21pc2UgaXMgZ2VuZXJhdGVkIGJ5IFByb21pc2UucHJvdG90eXBlLmZpbmFsbHlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gUkVTT0xWRUQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgc3RhdGUgaXMgcmVzb2x2ZWQsIHNob3VsZCBpZ25vcmUgdGhlIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYW5kIHVzZSBwYXJlbnQgcHJvbWlzZSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2Vbc3ltYm9sU3RhdGVdID0gcHJvbWlzZVtzeW1ib2xQYXJlbnRQcm9taXNlU3RhdGVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2Vbc3ltYm9sVmFsdWVdID0gcHJvbWlzZVtzeW1ib2xQYXJlbnRQcm9taXNlVmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlY29yZCB0YXNrIGluZm9ybWF0aW9uIGluIHZhbHVlIHdoZW4gZXJyb3Igb2NjdXJzLCBzbyB3ZSBjYW5cbiAgICAgICAgICAgICAgICAgICAgLy8gZG8gc29tZSBhZGRpdGlvbmFsIHdvcmsgc3VjaCBhcyByZW5kZXIgbG9uZ1N0YWNrVHJhY2VcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlID09PSBSRUpFQ1RFRCAmJiB2YWx1ZSBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBsb25nU3RhY2tUcmFjZVpvbmUgaXMgaGVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRyYWNlID0gWm9uZS5jdXJyZW50VGFzayAmJiBab25lLmN1cnJlbnRUYXNrLmRhdGEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBab25lLmN1cnJlbnRUYXNrLmRhdGFbY3JlYXRpb25UcmFjZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHJhY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IGtlZXAgdGhlIGxvbmcgc3RhY2sgdHJhY2UgaW50byBlcnJvciB3aGVuIGluIGxvbmdTdGFja1RyYWNlWm9uZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdERlZmluZVByb3BlcnR5KHZhbHVlLCBDVVJSRU5UX1RBU0tfVFJBQ0VfU1lNQk9MLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCB2YWx1ZTogdHJhY2UgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY2hlZHVsZVJlc29sdmVPclJlamVjdChwcm9taXNlLCBxdWV1ZVtpKytdLCBxdWV1ZVtpKytdLCBxdWV1ZVtpKytdLCBxdWV1ZVtpKytdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAocXVldWUubGVuZ3RoID09IDAgJiYgc3RhdGUgPT0gUkVKRUNURUQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2Vbc3ltYm9sU3RhdGVdID0gUkVKRUNURURfTk9fQ0FUQ0g7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdW5jYXVnaHRQcm9taXNlRXJyb3IgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSGVyZSB3ZSB0aHJvd3MgYSBuZXcgRXJyb3IgdG8gcHJpbnQgbW9yZSByZWFkYWJsZSBlcnJvciBsb2dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhbmQgaWYgdGhlIHZhbHVlIGlzIG5vdCBhbiBlcnJvciwgem9uZS5qcyBidWlsZHMgYW4gYEVycm9yYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9iamVjdCBoZXJlIHRvIGF0dGFjaCB0aGUgc3RhY2sgaW5mb3JtYXRpb24uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmNhdWdodCAoaW4gcHJvbWlzZSk6ICcgKyByZWFkYWJsZU9iamVjdFRvU3RyaW5nKHZhbHVlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2YWx1ZSAmJiB2YWx1ZS5zdGFjayA/ICdcXG4nICsgdmFsdWUuc3RhY2sgOiAnJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuY2F1Z2h0UHJvbWlzZUVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzRGlzYWJsZVdyYXBwaW5nVW5jYXVnaHRQcm9taXNlUmVqZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgZGlzYWJsZSB3cmFwcGluZyB1bmNhdWdodCBwcm9taXNlIHJlamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVzZSB0aGUgdmFsdWUgaW5zdGVhZCBvZiB3cmFwcGluZyBpdC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmNhdWdodFByb21pc2VFcnJvci50aHJvd09yaWdpbmFsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHVuY2F1Z2h0UHJvbWlzZUVycm9yLnJlamVjdGlvbiA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5jYXVnaHRQcm9taXNlRXJyb3IucHJvbWlzZSA9IHByb21pc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bmNhdWdodFByb21pc2VFcnJvci56b25lID0gWm9uZS5jdXJyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5jYXVnaHRQcm9taXNlRXJyb3IudGFzayA9IFpvbmUuY3VycmVudFRhc2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdW5jYXVnaHRQcm9taXNlRXJyb3JzLnB1c2godW5jYXVnaHRQcm9taXNlRXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXBpLnNjaGVkdWxlTWljcm9UYXNrKCk7IC8vIHRvIG1ha2Ugc3VyZSB0aGF0IGl0IGlzIHJ1bm5pbmdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJlc29sdmluZyBhbiBhbHJlYWR5IHJlc29sdmVkIHByb21pc2UgaXMgYSBub29wLlxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIFJFSkVDVElPTl9IQU5ETEVEX0hBTkRMRVIgPSBfX3N5bWJvbF9fKCdyZWplY3Rpb25IYW5kbGVkSGFuZGxlcicpO1xuICAgICAgICBmdW5jdGlvbiBjbGVhclJlamVjdGVkTm9DYXRjaChwcm9taXNlKSB7XG4gICAgICAgICAgICBpZiAocHJvbWlzZVtzeW1ib2xTdGF0ZV0gPT09IFJFSkVDVEVEX05PX0NBVENIKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQgbm8gY2F0Y2ggc3RhdHVzXG4gICAgICAgICAgICAgICAgLy8gYW5kIHF1ZXVlLmxlbmd0aCA+IDAsIG1lYW5zIHRoZXJlIGlzIGEgZXJyb3IgaGFuZGxlclxuICAgICAgICAgICAgICAgIC8vIGhlcmUgdG8gaGFuZGxlIHRoZSByZWplY3RlZCBwcm9taXNlLCB3ZSBzaG91bGQgdHJpZ2dlclxuICAgICAgICAgICAgICAgIC8vIHdpbmRvd3MucmVqZWN0aW9uaGFuZGxlZCBldmVudEhhbmRsZXIgb3Igbm9kZWpzIHJlamVjdGlvbkhhbmRsZWRcbiAgICAgICAgICAgICAgICAvLyBldmVudEhhbmRsZXJcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlciA9IFpvbmVbUkVKRUNUSU9OX0hBTkRMRURfSEFORExFUl07XG4gICAgICAgICAgICAgICAgICAgIGlmIChoYW5kbGVyICYmIHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgeyByZWplY3Rpb246IHByb21pc2Vbc3ltYm9sVmFsdWVdLCBwcm9taXNlOiBwcm9taXNlIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJvbWlzZVtzeW1ib2xTdGF0ZV0gPSBSRUpFQ1RFRDtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF91bmNhdWdodFByb21pc2VFcnJvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb21pc2UgPT09IF91bmNhdWdodFByb21pc2VFcnJvcnNbaV0ucHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3VuY2F1Z2h0UHJvbWlzZUVycm9ycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gc2NoZWR1bGVSZXNvbHZlT3JSZWplY3QocHJvbWlzZSwgem9uZSwgY2hhaW5Qcm9taXNlLCBvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgICAgICAgY2xlYXJSZWplY3RlZE5vQ2F0Y2gocHJvbWlzZSk7XG4gICAgICAgICAgICB2YXIgcHJvbWlzZVN0YXRlID0gcHJvbWlzZVtzeW1ib2xTdGF0ZV07XG4gICAgICAgICAgICB2YXIgZGVsZWdhdGUgPSBwcm9taXNlU3RhdGUgP1xuICAgICAgICAgICAgICAgICh0eXBlb2Ygb25GdWxmaWxsZWQgPT09ICdmdW5jdGlvbicpID8gb25GdWxmaWxsZWQgOiBmb3J3YXJkUmVzb2x1dGlvbiA6XG4gICAgICAgICAgICAgICAgKHR5cGVvZiBvblJlamVjdGVkID09PSAnZnVuY3Rpb24nKSA/IG9uUmVqZWN0ZWQgOiBmb3J3YXJkUmVqZWN0aW9uO1xuICAgICAgICAgICAgem9uZS5zY2hlZHVsZU1pY3JvVGFzayhzb3VyY2UsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyZW50UHJvbWlzZVZhbHVlID0gcHJvbWlzZVtzeW1ib2xWYWx1ZV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBpc0ZpbmFsbHlQcm9taXNlID0gISFjaGFpblByb21pc2UgJiYgc3ltYm9sRmluYWxseSA9PT0gY2hhaW5Qcm9taXNlW3N5bWJvbEZpbmFsbHldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNGaW5hbGx5UHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIHByb21pc2UgaXMgZ2VuZXJhdGVkIGZyb20gZmluYWxseSBjYWxsLCBrZWVwIHBhcmVudCBwcm9taXNlJ3Mgc3RhdGUgYW5kIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFpblByb21pc2Vbc3ltYm9sUGFyZW50UHJvbWlzZVZhbHVlXSA9IHBhcmVudFByb21pc2VWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluUHJvbWlzZVtzeW1ib2xQYXJlbnRQcm9taXNlU3RhdGVdID0gcHJvbWlzZVN0YXRlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIHNob3VsZCBub3QgcGFzcyB2YWx1ZSB0byBmaW5hbGx5IGNhbGxiYWNrXG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHpvbmUucnVuKGRlbGVnYXRlLCB1bmRlZmluZWQsIGlzRmluYWxseVByb21pc2UgJiYgZGVsZWdhdGUgIT09IGZvcndhcmRSZWplY3Rpb24gJiYgZGVsZWdhdGUgIT09IGZvcndhcmRSZXNvbHV0aW9uID9cbiAgICAgICAgICAgICAgICAgICAgICAgIFtdIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIFtwYXJlbnRQcm9taXNlVmFsdWVdKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZVByb21pc2UoY2hhaW5Qcm9taXNlLCB0cnVlLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiBlcnJvciBvY2N1cnMsIHNob3VsZCBhbHdheXMgcmV0dXJuIHRoaXMgZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZVByb21pc2UoY2hhaW5Qcm9taXNlLCBmYWxzZSwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGNoYWluUHJvbWlzZSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIFpPTkVfQVdBUkVfUFJPTUlTRV9UT19TVFJJTkcgPSAnZnVuY3Rpb24gWm9uZUF3YXJlUHJvbWlzZSgpIHsgW25hdGl2ZSBjb2RlXSB9JztcbiAgICAgICAgdmFyIG5vb3AgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgICAgIHZhciBab25lQXdhcmVQcm9taXNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gWm9uZUF3YXJlUHJvbWlzZShleGVjdXRvcikge1xuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gdGhpcztcbiAgICAgICAgICAgICAgICBpZiAoIShwcm9taXNlIGluc3RhbmNlb2YgWm9uZUF3YXJlUHJvbWlzZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdXN0IGJlIGFuIGluc3RhbmNlb2YgUHJvbWlzZS4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJvbWlzZVtzeW1ib2xTdGF0ZV0gPSBVTlJFU09MVkVEO1xuICAgICAgICAgICAgICAgIHByb21pc2Vbc3ltYm9sVmFsdWVdID0gW107IC8vIHF1ZXVlO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGV4ZWN1dG9yICYmIGV4ZWN1dG9yKG1ha2VSZXNvbHZlcihwcm9taXNlLCBSRVNPTFZFRCksIG1ha2VSZXNvbHZlcihwcm9taXNlLCBSRUpFQ1RFRCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZVByb21pc2UocHJvbWlzZSwgZmFsc2UsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBab25lQXdhcmVQcm9taXNlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBaT05FX0FXQVJFX1BST01JU0VfVE9fU1RSSU5HO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFpvbmVBd2FyZVByb21pc2UucmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlUHJvbWlzZShuZXcgdGhpcyhudWxsKSwgUkVTT0xWRUQsIHZhbHVlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBab25lQXdhcmVQcm9taXNlLnJlamVjdCA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlUHJvbWlzZShuZXcgdGhpcyhudWxsKSwgUkVKRUNURUQsIGVycm9yKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBab25lQXdhcmVQcm9taXNlLnJhY2UgPSBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc29sdmU7XG4gICAgICAgICAgICAgICAgdmFyIHJlamVjdDtcbiAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZSA9IG5ldyB0aGlzKGZ1bmN0aW9uIChyZXMsIHJlaikge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlID0gcmVzO1xuICAgICAgICAgICAgICAgICAgICByZWplY3QgPSByZWo7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gb25SZXNvbHZlKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBvblJlamVjdChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIHZhbHVlc18xID0gdmFsdWVzOyBfaSA8IHZhbHVlc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB2YWx1ZXNfMVtfaV07XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNUaGVuYWJsZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5yZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZS50aGVuKG9uUmVzb2x2ZSwgb25SZWplY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBab25lQXdhcmVQcm9taXNlLmFsbCA9IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWm9uZUF3YXJlUHJvbWlzZS5hbGxXaXRoQ2FsbGJhY2sodmFsdWVzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBab25lQXdhcmVQcm9taXNlLmFsbFNldHRsZWQgPSBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgdmFyIFAgPSB0aGlzICYmIHRoaXMucHJvdG90eXBlIGluc3RhbmNlb2YgWm9uZUF3YXJlUHJvbWlzZSA/IHRoaXMgOiBab25lQXdhcmVQcm9taXNlO1xuICAgICAgICAgICAgICAgIHJldHVybiBQLmFsbFdpdGhDYWxsYmFjayh2YWx1ZXMsIHtcbiAgICAgICAgICAgICAgICAgICAgdGhlbkNhbGxiYWNrOiBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuICh7IHN0YXR1czogJ2Z1bGZpbGxlZCcsIHZhbHVlOiB2YWx1ZSB9KTsgfSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JDYWxsYmFjazogZnVuY3Rpb24gKGVycikgeyByZXR1cm4gKHsgc3RhdHVzOiAncmVqZWN0ZWQnLCByZWFzb246IGVyciB9KTsgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFpvbmVBd2FyZVByb21pc2UuYWxsV2l0aENhbGxiYWNrID0gZnVuY3Rpb24gKHZhbHVlcywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVzb2x2ZTtcbiAgICAgICAgICAgICAgICB2YXIgcmVqZWN0O1xuICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gbmV3IHRoaXMoZnVuY3Rpb24gKHJlcywgcmVqKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUgPSByZXM7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCA9IHJlajtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyBTdGFydCBhdCAyIHRvIHByZXZlbnQgcHJlbWF0dXJlbHkgcmVzb2x2aW5nIGlmIC50aGVuIGlzIGNhbGxlZCBpbW1lZGlhdGVseS5cbiAgICAgICAgICAgICAgICB2YXIgdW5yZXNvbHZlZENvdW50ID0gMjtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWVJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgdmFyIHJlc29sdmVkVmFsdWVzID0gW107XG4gICAgICAgICAgICAgICAgdmFyIF9sb29wXzMgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1RoZW5hYmxlKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzXzEucmVzb2x2ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1clZhbHVlSW5kZXggPSB2YWx1ZUluZGV4O1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlZFZhbHVlc1tjdXJWYWx1ZUluZGV4XSA9IGNhbGxiYWNrID8gY2FsbGJhY2sudGhlbkNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVucmVzb2x2ZWRDb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1bnJlc29sdmVkQ291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNvbHZlZFZhbHVlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlZFZhbHVlc1tjdXJWYWx1ZUluZGV4XSA9IGNhbGxiYWNrLmVycm9yQ2FsbGJhY2soZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5yZXNvbHZlZENvdW50LS07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1bnJlc29sdmVkQ291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzb2x2ZWRWYWx1ZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKHRoZW5FcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh0aGVuRXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB1bnJlc29sdmVkQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVJbmRleCsrO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdmFyIHRoaXNfMSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCB2YWx1ZXNfMiA9IHZhbHVlczsgX2kgPCB2YWx1ZXNfMi5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdmFsdWVzXzJbX2ldO1xuICAgICAgICAgICAgICAgICAgICBfbG9vcF8zKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gTWFrZSB0aGUgdW5yZXNvbHZlZENvdW50IHplcm8tYmFzZWQgYWdhaW4uXG4gICAgICAgICAgICAgICAgdW5yZXNvbHZlZENvdW50IC09IDI7XG4gICAgICAgICAgICAgICAgaWYgKHVucmVzb2x2ZWRDb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc29sdmVkVmFsdWVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFpvbmVBd2FyZVByb21pc2UucHJvdG90eXBlLCBTeW1ib2wudG9TdHJpbmdUYWcsIHtcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdQcm9taXNlJztcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoWm9uZUF3YXJlUHJvbWlzZS5wcm90b3R5cGUsIFN5bWJvbC5zcGVjaWVzLCB7XG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBab25lQXdhcmVQcm9taXNlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFpvbmVBd2FyZVByb21pc2UucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbiAob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgQyA9IHRoaXMuY29uc3RydWN0b3JbU3ltYm9sLnNwZWNpZXNdO1xuICAgICAgICAgICAgICAgIGlmICghQyB8fCB0eXBlb2YgQyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBDID0gdGhpcy5jb25zdHJ1Y3RvciB8fCBab25lQXdhcmVQcm9taXNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgY2hhaW5Qcm9taXNlID0gbmV3IEMobm9vcCk7XG4gICAgICAgICAgICAgICAgdmFyIHpvbmUgPSBab25lLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXNbc3ltYm9sU3RhdGVdID09IFVOUkVTT0xWRUQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tzeW1ib2xWYWx1ZV0ucHVzaCh6b25lLCBjaGFpblByb21pc2UsIG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNjaGVkdWxlUmVzb2x2ZU9yUmVqZWN0KHRoaXMsIHpvbmUsIGNoYWluUHJvbWlzZSwgb25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY2hhaW5Qcm9taXNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFpvbmVBd2FyZVByb21pc2UucHJvdG90eXBlLmNhdGNoID0gZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0ZWQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFpvbmVBd2FyZVByb21pc2UucHJvdG90eXBlLmZpbmFsbHkgPSBmdW5jdGlvbiAob25GaW5hbGx5KSB7XG4gICAgICAgICAgICAgICAgdmFyIEMgPSB0aGlzLmNvbnN0cnVjdG9yW1N5bWJvbC5zcGVjaWVzXTtcbiAgICAgICAgICAgICAgICBpZiAoIUMgfHwgdHlwZW9mIEMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgQyA9IFpvbmVBd2FyZVByb21pc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBjaGFpblByb21pc2UgPSBuZXcgQyhub29wKTtcbiAgICAgICAgICAgICAgICBjaGFpblByb21pc2Vbc3ltYm9sRmluYWxseV0gPSBzeW1ib2xGaW5hbGx5O1xuICAgICAgICAgICAgICAgIHZhciB6b25lID0gWm9uZS5jdXJyZW50O1xuICAgICAgICAgICAgICAgIGlmICh0aGlzW3N5bWJvbFN0YXRlXSA9PSBVTlJFU09MVkVEKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbc3ltYm9sVmFsdWVdLnB1c2goem9uZSwgY2hhaW5Qcm9taXNlLCBvbkZpbmFsbHksIG9uRmluYWxseSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzY2hlZHVsZVJlc29sdmVPclJlamVjdCh0aGlzLCB6b25lLCBjaGFpblByb21pc2UsIG9uRmluYWxseSwgb25GaW5hbGx5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoYWluUHJvbWlzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gWm9uZUF3YXJlUHJvbWlzZTtcbiAgICAgICAgfSgpKTtcbiAgICAgICAgLy8gUHJvdGVjdCBhZ2FpbnN0IGFnZ3Jlc3NpdmUgb3B0aW1pemVycyBkcm9wcGluZyBzZWVtaW5nbHkgdW51c2VkIHByb3BlcnRpZXMuXG4gICAgICAgIC8vIEUuZy4gQ2xvc3VyZSBDb21waWxlciBpbiBhZHZhbmNlZCBtb2RlLlxuICAgICAgICBab25lQXdhcmVQcm9taXNlWydyZXNvbHZlJ10gPSBab25lQXdhcmVQcm9taXNlLnJlc29sdmU7XG4gICAgICAgIFpvbmVBd2FyZVByb21pc2VbJ3JlamVjdCddID0gWm9uZUF3YXJlUHJvbWlzZS5yZWplY3Q7XG4gICAgICAgIFpvbmVBd2FyZVByb21pc2VbJ3JhY2UnXSA9IFpvbmVBd2FyZVByb21pc2UucmFjZTtcbiAgICAgICAgWm9uZUF3YXJlUHJvbWlzZVsnYWxsJ10gPSBab25lQXdhcmVQcm9taXNlLmFsbDtcbiAgICAgICAgdmFyIE5hdGl2ZVByb21pc2UgPSBnbG9iYWxbc3ltYm9sUHJvbWlzZV0gPSBnbG9iYWxbJ1Byb21pc2UnXTtcbiAgICAgICAgZ2xvYmFsWydQcm9taXNlJ10gPSBab25lQXdhcmVQcm9taXNlO1xuICAgICAgICB2YXIgc3ltYm9sVGhlblBhdGNoZWQgPSBfX3N5bWJvbF9fKCd0aGVuUGF0Y2hlZCcpO1xuICAgICAgICBmdW5jdGlvbiBwYXRjaFRoZW4oQ3Rvcikge1xuICAgICAgICAgICAgdmFyIHByb3RvID0gQ3Rvci5wcm90b3R5cGU7XG4gICAgICAgICAgICB2YXIgcHJvcCA9IE9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90bywgJ3RoZW4nKTtcbiAgICAgICAgICAgIGlmIChwcm9wICYmIChwcm9wLndyaXRhYmxlID09PSBmYWxzZSB8fCAhcHJvcC5jb25maWd1cmFibGUpKSB7XG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgQ3Rvci5wcm90b3R5cGUudGhlbiBwcm9wZXJ0eURlc2NyaXB0b3IgaXMgd3JpdGFibGUgb3Igbm90XG4gICAgICAgICAgICAgICAgLy8gaW4gbWV0ZW9yIGVudiwgd3JpdGFibGUgaXMgZmFsc2UsIHdlIHNob3VsZCBpZ25vcmUgc3VjaCBjYXNlXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG9yaWdpbmFsVGhlbiA9IHByb3RvLnRoZW47XG4gICAgICAgICAgICAvLyBLZWVwIGEgcmVmZXJlbmNlIHRvIHRoZSBvcmlnaW5hbCBtZXRob2QuXG4gICAgICAgICAgICBwcm90b1tzeW1ib2xUaGVuXSA9IG9yaWdpbmFsVGhlbjtcbiAgICAgICAgICAgIEN0b3IucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbiAob25SZXNvbHZlLCBvblJlamVjdCkge1xuICAgICAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdmFyIHdyYXBwZWQgPSBuZXcgWm9uZUF3YXJlUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsVGhlbi5jYWxsKF90aGlzLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiB3cmFwcGVkLnRoZW4ob25SZXNvbHZlLCBvblJlamVjdCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgQ3RvcltzeW1ib2xUaGVuUGF0Y2hlZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGFwaS5wYXRjaFRoZW4gPSBwYXRjaFRoZW47XG4gICAgICAgIGZ1bmN0aW9uIHpvbmVpZnkoZm4pIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoc2VsZiwgYXJncykge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHRQcm9taXNlID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdFByb21pc2UgaW5zdGFuY2VvZiBab25lQXdhcmVQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRQcm9taXNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgY3RvciA9IHJlc3VsdFByb21pc2UuY29uc3RydWN0b3I7XG4gICAgICAgICAgICAgICAgaWYgKCFjdG9yW3N5bWJvbFRoZW5QYXRjaGVkXSkge1xuICAgICAgICAgICAgICAgICAgICBwYXRjaFRoZW4oY3Rvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRQcm9taXNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoTmF0aXZlUHJvbWlzZSkge1xuICAgICAgICAgICAgcGF0Y2hUaGVuKE5hdGl2ZVByb21pc2UpO1xuICAgICAgICAgICAgcGF0Y2hNZXRob2QoZ2xvYmFsLCAnZmV0Y2gnLCBmdW5jdGlvbiAoZGVsZWdhdGUpIHsgcmV0dXJuIHpvbmVpZnkoZGVsZWdhdGUpOyB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUaGlzIGlzIG5vdCBwYXJ0IG9mIHB1YmxpYyBBUEksIGJ1dCBpdCBpcyB1c2VmdWwgZm9yIHRlc3RzLCBzbyB3ZSBleHBvc2UgaXQuXG4gICAgICAgIFByb21pc2VbWm9uZS5fX3N5bWJvbF9fKCd1bmNhdWdodFByb21pc2VFcnJvcnMnKV0gPSBfdW5jYXVnaHRQcm9taXNlRXJyb3JzO1xuICAgICAgICByZXR1cm4gWm9uZUF3YXJlUHJvbWlzZTtcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICAvLyBvdmVycmlkZSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgdG8gbWFrZSB6b25lLmpzIHBhdGNoZWQgZnVuY3Rpb25cbiAgICAvLyBsb29rIGxpa2UgbmF0aXZlIGZ1bmN0aW9uXG4gICAgWm9uZS5fX2xvYWRfcGF0Y2goJ3RvU3RyaW5nJywgZnVuY3Rpb24gKGdsb2JhbCkge1xuICAgICAgICAvLyBwYXRjaCBGdW5jLnByb3RvdHlwZS50b1N0cmluZyB0byBsZXQgdGhlbSBsb29rIGxpa2UgbmF0aXZlXG4gICAgICAgIHZhciBvcmlnaW5hbEZ1bmN0aW9uVG9TdHJpbmcgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmc7XG4gICAgICAgIHZhciBPUklHSU5BTF9ERUxFR0FURV9TWU1CT0wgPSB6b25lU3ltYm9sKCdPcmlnaW5hbERlbGVnYXRlJyk7XG4gICAgICAgIHZhciBQUk9NSVNFX1NZTUJPTCA9IHpvbmVTeW1ib2woJ1Byb21pc2UnKTtcbiAgICAgICAgdmFyIEVSUk9SX1NZTUJPTCA9IHpvbmVTeW1ib2woJ0Vycm9yJyk7XG4gICAgICAgIHZhciBuZXdGdW5jdGlvblRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB2YXIgb3JpZ2luYWxEZWxlZ2F0ZSA9IHRoaXNbT1JJR0lOQUxfREVMRUdBVEVfU1lNQk9MXTtcbiAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWxEZWxlZ2F0ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9yaWdpbmFsRGVsZWdhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbEZ1bmN0aW9uVG9TdHJpbmcuY2FsbChvcmlnaW5hbERlbGVnYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob3JpZ2luYWxEZWxlZ2F0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMgPT09IFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5hdGl2ZVByb21pc2UgPSBnbG9iYWxbUFJPTUlTRV9TWU1CT0xdO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmF0aXZlUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsRnVuY3Rpb25Ub1N0cmluZy5jYWxsKG5hdGl2ZVByb21pc2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzID09PSBFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmF0aXZlRXJyb3IgPSBnbG9iYWxbRVJST1JfU1lNQk9MXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5hdGl2ZUVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3JpZ2luYWxGdW5jdGlvblRvU3RyaW5nLmNhbGwobmF0aXZlRXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsRnVuY3Rpb25Ub1N0cmluZy5jYWxsKHRoaXMpO1xuICAgICAgICB9O1xuICAgICAgICBuZXdGdW5jdGlvblRvU3RyaW5nW09SSUdJTkFMX0RFTEVHQVRFX1NZTUJPTF0gPSBvcmlnaW5hbEZ1bmN0aW9uVG9TdHJpbmc7XG4gICAgICAgIEZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZyA9IG5ld0Z1bmN0aW9uVG9TdHJpbmc7XG4gICAgICAgIC8vIHBhdGNoIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcgdG8gbGV0IHRoZW0gbG9vayBsaWtlIG5hdGl2ZVxuICAgICAgICB2YXIgb3JpZ2luYWxPYmplY3RUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG4gICAgICAgIHZhciBQUk9NSVNFX09CSkVDVF9UT19TVFJJTkcgPSAnW29iamVjdCBQcm9taXNlXSc7XG4gICAgICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIFByb21pc2UgPT09ICdmdW5jdGlvbicgJiYgdGhpcyBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUFJPTUlTRV9PQkpFQ1RfVE9fU1RSSU5HO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsT2JqZWN0VG9TdHJpbmcuY2FsbCh0aGlzKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICB2YXIgcGFzc2l2ZVN1cHBvcnRlZCA9IGZhbHNlO1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBwYXNzaXZlU3VwcG9ydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0ZXN0Jywgb3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdCcsIG9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHBhc3NpdmVTdXBwb3J0ZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBhbiBpZGVudGlmaWVyIHRvIHRlbGwgWm9uZVRhc2sgZG8gbm90IGNyZWF0ZSBhIG5ldyBpbnZva2UgY2xvc3VyZVxuICAgIHZhciBPUFRJTUlaRURfWk9ORV9FVkVOVF9UQVNLX0RBVEEgPSB7XG4gICAgICAgIHVzZUc6IHRydWVcbiAgICB9O1xuICAgIHZhciB6b25lU3ltYm9sRXZlbnROYW1lcyQxID0ge307XG4gICAgdmFyIGdsb2JhbFNvdXJjZXMgPSB7fTtcbiAgICB2YXIgRVZFTlRfTkFNRV9TWU1CT0xfUkVHWCA9IG5ldyBSZWdFeHAoJ14nICsgWk9ORV9TWU1CT0xfUFJFRklYICsgJyhcXFxcdyspKHRydWV8ZmFsc2UpJCcpO1xuICAgIHZhciBJTU1FRElBVEVfUFJPUEFHQVRJT05fU1lNQk9MID0gem9uZVN5bWJvbCgncHJvcGFnYXRpb25TdG9wcGVkJyk7XG4gICAgZnVuY3Rpb24gcHJlcGFyZUV2ZW50TmFtZXMoZXZlbnROYW1lLCBldmVudE5hbWVUb1N0cmluZykge1xuICAgICAgICB2YXIgZmFsc2VFdmVudE5hbWUgPSAoZXZlbnROYW1lVG9TdHJpbmcgPyBldmVudE5hbWVUb1N0cmluZyhldmVudE5hbWUpIDogZXZlbnROYW1lKSArIEZBTFNFX1NUUjtcbiAgICAgICAgdmFyIHRydWVFdmVudE5hbWUgPSAoZXZlbnROYW1lVG9TdHJpbmcgPyBldmVudE5hbWVUb1N0cmluZyhldmVudE5hbWUpIDogZXZlbnROYW1lKSArIFRSVUVfU1RSO1xuICAgICAgICB2YXIgc3ltYm9sID0gWk9ORV9TWU1CT0xfUFJFRklYICsgZmFsc2VFdmVudE5hbWU7XG4gICAgICAgIHZhciBzeW1ib2xDYXB0dXJlID0gWk9ORV9TWU1CT0xfUFJFRklYICsgdHJ1ZUV2ZW50TmFtZTtcbiAgICAgICAgem9uZVN5bWJvbEV2ZW50TmFtZXMkMVtldmVudE5hbWVdID0ge307XG4gICAgICAgIHpvbmVTeW1ib2xFdmVudE5hbWVzJDFbZXZlbnROYW1lXVtGQUxTRV9TVFJdID0gc3ltYm9sO1xuICAgICAgICB6b25lU3ltYm9sRXZlbnROYW1lcyQxW2V2ZW50TmFtZV1bVFJVRV9TVFJdID0gc3ltYm9sQ2FwdHVyZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcGF0Y2hFdmVudFRhcmdldChfZ2xvYmFsLCBhcGlzLCBwYXRjaE9wdGlvbnMpIHtcbiAgICAgICAgdmFyIEFERF9FVkVOVF9MSVNURU5FUiA9IChwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLmFkZCkgfHwgQUREX0VWRU5UX0xJU1RFTkVSX1NUUjtcbiAgICAgICAgdmFyIFJFTU9WRV9FVkVOVF9MSVNURU5FUiA9IChwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLnJtKSB8fCBSRU1PVkVfRVZFTlRfTElTVEVORVJfU1RSO1xuICAgICAgICB2YXIgTElTVEVORVJTX0VWRU5UX0xJU1RFTkVSID0gKHBhdGNoT3B0aW9ucyAmJiBwYXRjaE9wdGlvbnMubGlzdGVuZXJzKSB8fCAnZXZlbnRMaXN0ZW5lcnMnO1xuICAgICAgICB2YXIgUkVNT1ZFX0FMTF9MSVNURU5FUlNfRVZFTlRfTElTVEVORVIgPSAocGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy5ybUFsbCkgfHwgJ3JlbW92ZUFsbExpc3RlbmVycyc7XG4gICAgICAgIHZhciB6b25lU3ltYm9sQWRkRXZlbnRMaXN0ZW5lciA9IHpvbmVTeW1ib2woQUREX0VWRU5UX0xJU1RFTkVSKTtcbiAgICAgICAgdmFyIEFERF9FVkVOVF9MSVNURU5FUl9TT1VSQ0UgPSAnLicgKyBBRERfRVZFTlRfTElTVEVORVIgKyAnOic7XG4gICAgICAgIHZhciBQUkVQRU5EX0VWRU5UX0xJU1RFTkVSID0gJ3ByZXBlbmRMaXN0ZW5lcic7XG4gICAgICAgIHZhciBQUkVQRU5EX0VWRU5UX0xJU1RFTkVSX1NPVVJDRSA9ICcuJyArIFBSRVBFTkRfRVZFTlRfTElTVEVORVIgKyAnOic7XG4gICAgICAgIHZhciBpbnZva2VUYXNrID0gZnVuY3Rpb24gKHRhc2ssIHRhcmdldCwgZXZlbnQpIHtcbiAgICAgICAgICAgIC8vIGZvciBiZXR0ZXIgcGVyZm9ybWFuY2UsIGNoZWNrIGlzUmVtb3ZlZCB3aGljaCBpcyBzZXRcbiAgICAgICAgICAgIC8vIGJ5IHJlbW92ZUV2ZW50TGlzdGVuZXJcbiAgICAgICAgICAgIGlmICh0YXNrLmlzUmVtb3ZlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBkZWxlZ2F0ZSA9IHRhc2suY2FsbGJhY2s7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGRlbGVnYXRlID09PSAnb2JqZWN0JyAmJiBkZWxlZ2F0ZS5oYW5kbGVFdmVudCkge1xuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgYmluZCB2ZXJzaW9uIG9mIGhhbmRsZUV2ZW50IHdoZW4gaW52b2tlXG4gICAgICAgICAgICAgICAgdGFzay5jYWxsYmFjayA9IGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gZGVsZWdhdGUuaGFuZGxlRXZlbnQoZXZlbnQpOyB9O1xuICAgICAgICAgICAgICAgIHRhc2sub3JpZ2luYWxEZWxlZ2F0ZSA9IGRlbGVnYXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaW52b2tlIHN0YXRpYyB0YXNrLmludm9rZVxuICAgICAgICAgICAgdGFzay5pbnZva2UodGFzaywgdGFyZ2V0LCBbZXZlbnRdKTtcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0gdGFzay5vcHRpb25zO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnICYmIG9wdGlvbnMub25jZSkge1xuICAgICAgICAgICAgICAgIC8vIGlmIG9wdGlvbnMub25jZSBpcyB0cnVlLCBhZnRlciBpbnZva2Ugb25jZSByZW1vdmUgbGlzdGVuZXIgaGVyZVxuICAgICAgICAgICAgICAgIC8vIG9ubHkgYnJvd3NlciBuZWVkIHRvIGRvIHRoaXMsIG5vZGVqcyBldmVudEVtaXR0ZXIgd2lsbCBjYWwgcmVtb3ZlTGlzdGVuZXJcbiAgICAgICAgICAgICAgICAvLyBpbnNpZGUgRXZlbnRFbWl0dGVyLm9uY2VcbiAgICAgICAgICAgICAgICB2YXIgZGVsZWdhdGVfMSA9IHRhc2sub3JpZ2luYWxEZWxlZ2F0ZSA/IHRhc2sub3JpZ2luYWxEZWxlZ2F0ZSA6IHRhc2suY2FsbGJhY2s7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W1JFTU9WRV9FVkVOVF9MSVNURU5FUl0uY2FsbCh0YXJnZXQsIGV2ZW50LnR5cGUsIGRlbGVnYXRlXzEsIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAvLyBnbG9iYWwgc2hhcmVkIHpvbmVBd2FyZUNhbGxiYWNrIHRvIGhhbmRsZSBhbGwgZXZlbnQgY2FsbGJhY2sgd2l0aCBjYXB0dXJlID0gZmFsc2VcbiAgICAgICAgdmFyIGdsb2JhbFpvbmVBd2FyZUNhbGxiYWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci96b25lLmpzL2lzc3Vlcy85MTEsIGluIElFLCBzb21ldGltZXNcbiAgICAgICAgICAgIC8vIGV2ZW50IHdpbGwgYmUgdW5kZWZpbmVkLCBzbyB3ZSBuZWVkIHRvIHVzZSB3aW5kb3cuZXZlbnRcbiAgICAgICAgICAgIGV2ZW50ID0gZXZlbnQgfHwgX2dsb2JhbC5ldmVudDtcbiAgICAgICAgICAgIGlmICghZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBldmVudC50YXJnZXQgaXMgbmVlZGVkIGZvciBTYW1zdW5nIFRWIGFuZCBTb3VyY2VCdWZmZXJcbiAgICAgICAgICAgIC8vIHx8IGdsb2JhbCBpcyBuZWVkZWQgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvem9uZS5qcy9pc3N1ZXMvMTkwXG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcyB8fCBldmVudC50YXJnZXQgfHwgX2dsb2JhbDtcbiAgICAgICAgICAgIHZhciB0YXNrcyA9IHRhcmdldFt6b25lU3ltYm9sRXZlbnROYW1lcyQxW2V2ZW50LnR5cGVdW0ZBTFNFX1NUUl1dO1xuICAgICAgICAgICAgaWYgKHRhc2tzKSB7XG4gICAgICAgICAgICAgICAgLy8gaW52b2tlIGFsbCB0YXNrcyB3aGljaCBhdHRhY2hlZCB0byBjdXJyZW50IHRhcmdldCB3aXRoIGdpdmVuIGV2ZW50LnR5cGUgYW5kIGNhcHR1cmUgPSBmYWxzZVxuICAgICAgICAgICAgICAgIC8vIGZvciBwZXJmb3JtYW5jZSBjb25jZXJuLCBpZiB0YXNrLmxlbmd0aCA9PT0gMSwganVzdCBpbnZva2VcbiAgICAgICAgICAgICAgICBpZiAodGFza3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGludm9rZVRhc2sodGFza3NbMF0sIHRhcmdldCwgZXZlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvem9uZS5qcy9pc3N1ZXMvODM2XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvcHkgdGhlIHRhc2tzIGFycmF5IGJlZm9yZSBpbnZva2UsIHRvIGF2b2lkXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBjYWxsYmFjayB3aWxsIHJlbW92ZSBpdHNlbGYgb3Igb3RoZXIgbGlzdGVuZXJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvcHlUYXNrcyA9IHRhc2tzLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29weVRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQgJiYgZXZlbnRbSU1NRURJQVRFX1BST1BBR0FUSU9OX1NZTUJPTF0gPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGludm9rZVRhc2soY29weVRhc2tzW2ldLCB0YXJnZXQsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLy8gZ2xvYmFsIHNoYXJlZCB6b25lQXdhcmVDYWxsYmFjayB0byBoYW5kbGUgYWxsIGV2ZW50IGNhbGxiYWNrIHdpdGggY2FwdHVyZSA9IHRydWVcbiAgICAgICAgdmFyIGdsb2JhbFpvbmVBd2FyZUNhcHR1cmVDYWxsYmFjayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvem9uZS5qcy9pc3N1ZXMvOTExLCBpbiBJRSwgc29tZXRpbWVzXG4gICAgICAgICAgICAvLyBldmVudCB3aWxsIGJlIHVuZGVmaW5lZCwgc28gd2UgbmVlZCB0byB1c2Ugd2luZG93LmV2ZW50XG4gICAgICAgICAgICBldmVudCA9IGV2ZW50IHx8IF9nbG9iYWwuZXZlbnQ7XG4gICAgICAgICAgICBpZiAoIWV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZXZlbnQudGFyZ2V0IGlzIG5lZWRlZCBmb3IgU2Ftc3VuZyBUViBhbmQgU291cmNlQnVmZmVyXG4gICAgICAgICAgICAvLyB8fCBnbG9iYWwgaXMgbmVlZGVkIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3pvbmUuanMvaXNzdWVzLzE5MFxuICAgICAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMgfHwgZXZlbnQudGFyZ2V0IHx8IF9nbG9iYWw7XG4gICAgICAgICAgICB2YXIgdGFza3MgPSB0YXJnZXRbem9uZVN5bWJvbEV2ZW50TmFtZXMkMVtldmVudC50eXBlXVtUUlVFX1NUUl1dO1xuICAgICAgICAgICAgaWYgKHRhc2tzKSB7XG4gICAgICAgICAgICAgICAgLy8gaW52b2tlIGFsbCB0YXNrcyB3aGljaCBhdHRhY2hlZCB0byBjdXJyZW50IHRhcmdldCB3aXRoIGdpdmVuIGV2ZW50LnR5cGUgYW5kIGNhcHR1cmUgPSBmYWxzZVxuICAgICAgICAgICAgICAgIC8vIGZvciBwZXJmb3JtYW5jZSBjb25jZXJuLCBpZiB0YXNrLmxlbmd0aCA9PT0gMSwganVzdCBpbnZva2VcbiAgICAgICAgICAgICAgICBpZiAodGFza3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGludm9rZVRhc2sodGFza3NbMF0sIHRhcmdldCwgZXZlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvem9uZS5qcy9pc3N1ZXMvODM2XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvcHkgdGhlIHRhc2tzIGFycmF5IGJlZm9yZSBpbnZva2UsIHRvIGF2b2lkXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBjYWxsYmFjayB3aWxsIHJlbW92ZSBpdHNlbGYgb3Igb3RoZXIgbGlzdGVuZXJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvcHlUYXNrcyA9IHRhc2tzLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29weVRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQgJiYgZXZlbnRbSU1NRURJQVRFX1BST1BBR0FUSU9OX1NZTUJPTF0gPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGludm9rZVRhc2soY29weVRhc2tzW2ldLCB0YXJnZXQsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZnVuY3Rpb24gcGF0Y2hFdmVudFRhcmdldE1ldGhvZHMob2JqLCBwYXRjaE9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmICghb2JqKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHVzZUdsb2JhbENhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLnVzZUcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHVzZUdsb2JhbENhbGxiYWNrID0gcGF0Y2hPcHRpb25zLnVzZUc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsaWRhdGVIYW5kbGVyID0gcGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy52aDtcbiAgICAgICAgICAgIHZhciBjaGVja0R1cGxpY2F0ZSA9IHRydWU7XG4gICAgICAgICAgICBpZiAocGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy5jaGtEdXAgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNoZWNrRHVwbGljYXRlID0gcGF0Y2hPcHRpb25zLmNoa0R1cDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByZXR1cm5UYXJnZXQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLnJ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5UYXJnZXQgPSBwYXRjaE9wdGlvbnMucnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcHJvdG8gPSBvYmo7XG4gICAgICAgICAgICB3aGlsZSAocHJvdG8gJiYgIXByb3RvLmhhc093blByb3BlcnR5KEFERF9FVkVOVF9MSVNURU5FUikpIHtcbiAgICAgICAgICAgICAgICBwcm90byA9IE9iamVjdEdldFByb3RvdHlwZU9mKHByb3RvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcHJvdG8gJiYgb2JqW0FERF9FVkVOVF9MSVNURU5FUl0pIHtcbiAgICAgICAgICAgICAgICAvLyBzb21laG93IHdlIGRpZCBub3QgZmluZCBpdCwgYnV0IHdlIGNhbiBzZWUgaXQuIFRoaXMgaGFwcGVucyBvbiBJRSBmb3IgV2luZG93IHByb3BlcnRpZXMuXG4gICAgICAgICAgICAgICAgcHJvdG8gPSBvYmo7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXByb3RvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3RvW3pvbmVTeW1ib2xBZGRFdmVudExpc3RlbmVyXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBldmVudE5hbWVUb1N0cmluZyA9IHBhdGNoT3B0aW9ucyAmJiBwYXRjaE9wdGlvbnMuZXZlbnROYW1lVG9TdHJpbmc7XG4gICAgICAgICAgICAvLyBhIHNoYXJlZCBnbG9iYWwgdGFza0RhdGEgdG8gcGFzcyBkYXRhIGZvciBzY2hlZHVsZUV2ZW50VGFza1xuICAgICAgICAgICAgLy8gc28gd2UgZG8gbm90IG5lZWQgdG8gY3JlYXRlIGEgbmV3IG9iamVjdCBqdXN0IGZvciBwYXNzIHNvbWUgZGF0YVxuICAgICAgICAgICAgdmFyIHRhc2tEYXRhID0ge307XG4gICAgICAgICAgICB2YXIgbmF0aXZlQWRkRXZlbnRMaXN0ZW5lciA9IHByb3RvW3pvbmVTeW1ib2xBZGRFdmVudExpc3RlbmVyXSA9IHByb3RvW0FERF9FVkVOVF9MSVNURU5FUl07XG4gICAgICAgICAgICB2YXIgbmF0aXZlUmVtb3ZlRXZlbnRMaXN0ZW5lciA9IHByb3RvW3pvbmVTeW1ib2woUkVNT1ZFX0VWRU5UX0xJU1RFTkVSKV0gPVxuICAgICAgICAgICAgICAgIHByb3RvW1JFTU9WRV9FVkVOVF9MSVNURU5FUl07XG4gICAgICAgICAgICB2YXIgbmF0aXZlTGlzdGVuZXJzID0gcHJvdG9bem9uZVN5bWJvbChMSVNURU5FUlNfRVZFTlRfTElTVEVORVIpXSA9XG4gICAgICAgICAgICAgICAgcHJvdG9bTElTVEVORVJTX0VWRU5UX0xJU1RFTkVSXTtcbiAgICAgICAgICAgIHZhciBuYXRpdmVSZW1vdmVBbGxMaXN0ZW5lcnMgPSBwcm90b1t6b25lU3ltYm9sKFJFTU9WRV9BTExfTElTVEVORVJTX0VWRU5UX0xJU1RFTkVSKV0gPVxuICAgICAgICAgICAgICAgIHByb3RvW1JFTU9WRV9BTExfTElTVEVORVJTX0VWRU5UX0xJU1RFTkVSXTtcbiAgICAgICAgICAgIHZhciBuYXRpdmVQcmVwZW5kRXZlbnRMaXN0ZW5lcjtcbiAgICAgICAgICAgIGlmIChwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLnByZXBlbmQpIHtcbiAgICAgICAgICAgICAgICBuYXRpdmVQcmVwZW5kRXZlbnRMaXN0ZW5lciA9IHByb3RvW3pvbmVTeW1ib2wocGF0Y2hPcHRpb25zLnByZXBlbmQpXSA9XG4gICAgICAgICAgICAgICAgICAgIHByb3RvW3BhdGNoT3B0aW9ucy5wcmVwZW5kXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVGhpcyB1dGlsIGZ1bmN0aW9uIHdpbGwgYnVpbGQgYW4gb3B0aW9uIG9iamVjdCB3aXRoIHBhc3NpdmUgb3B0aW9uXG4gICAgICAgICAgICAgKiB0byBoYW5kbGUgYWxsIHBvc3NpYmxlIGlucHV0IGZyb20gdGhlIHVzZXIuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIGJ1aWxkRXZlbnRMaXN0ZW5lck9wdGlvbnMob3B0aW9ucywgcGFzc2l2ZSkge1xuICAgICAgICAgICAgICAgIGlmICghcGFzc2l2ZVN1cHBvcnRlZCAmJiB0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcgJiYgb3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAvLyBkb2Vzbid0IHN1cHBvcnQgcGFzc2l2ZSBidXQgdXNlciB3YW50IHRvIHBhc3MgYW4gb2JqZWN0IGFzIG9wdGlvbnMuXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2lsbCBub3Qgd29yayBvbiBzb21lIG9sZCBicm93c2VyLCBzbyB3ZSBqdXN0IHBhc3MgYSBib29sZWFuXG4gICAgICAgICAgICAgICAgICAgIC8vIGFzIHVzZUNhcHR1cmUgcGFyYW1ldGVyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhIW9wdGlvbnMuY2FwdHVyZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFwYXNzaXZlU3VwcG9ydGVkIHx8ICFwYXNzaXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBjYXB0dXJlOiBvcHRpb25zLCBwYXNzaXZlOiB0cnVlIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghb3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBwYXNzaXZlOiB0cnVlIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcgJiYgb3B0aW9ucy5wYXNzaXZlICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKSwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjdXN0b21TY2hlZHVsZUdsb2JhbCA9IGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlcmUgaXMgYWxyZWFkeSBhIHRhc2sgZm9yIHRoZSBldmVudE5hbWUgKyBjYXB0dXJlLFxuICAgICAgICAgICAgICAgIC8vIGp1c3QgcmV0dXJuLCBiZWNhdXNlIHdlIHVzZSB0aGUgc2hhcmVkIGdsb2JhbFpvbmVBd2FyZUNhbGxiYWNrIGhlcmUuXG4gICAgICAgICAgICAgICAgaWYgKHRhc2tEYXRhLmlzRXhpc3RpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbmF0aXZlQWRkRXZlbnRMaXN0ZW5lci5jYWxsKHRhc2tEYXRhLnRhcmdldCwgdGFza0RhdGEuZXZlbnROYW1lLCB0YXNrRGF0YS5jYXB0dXJlID8gZ2xvYmFsWm9uZUF3YXJlQ2FwdHVyZUNhbGxiYWNrIDogZ2xvYmFsWm9uZUF3YXJlQ2FsbGJhY2ssIHRhc2tEYXRhLm9wdGlvbnMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBjdXN0b21DYW5jZWxHbG9iYWwgPSBmdW5jdGlvbiAodGFzaykge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRhc2sgaXMgbm90IG1hcmtlZCBhcyBpc1JlbW92ZWQsIHRoaXMgY2FsbCBpcyBkaXJlY3RseVxuICAgICAgICAgICAgICAgIC8vIGZyb20gWm9uZS5wcm90b3R5cGUuY2FuY2VsVGFzaywgd2Ugc2hvdWxkIHJlbW92ZSB0aGUgdGFza1xuICAgICAgICAgICAgICAgIC8vIGZyb20gdGFza3NMaXN0IG9mIHRhcmdldCBmaXJzdFxuICAgICAgICAgICAgICAgIGlmICghdGFzay5pc1JlbW92ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN5bWJvbEV2ZW50TmFtZXMgPSB6b25lU3ltYm9sRXZlbnROYW1lcyQxW3Rhc2suZXZlbnROYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN5bWJvbEV2ZW50TmFtZSA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN5bWJvbEV2ZW50TmFtZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbEV2ZW50TmFtZSA9IHN5bWJvbEV2ZW50TmFtZXNbdGFzay5jYXB0dXJlID8gVFJVRV9TVFIgOiBGQUxTRV9TVFJdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBleGlzdGluZ1Rhc2tzID0gc3ltYm9sRXZlbnROYW1lICYmIHRhc2sudGFyZ2V0W3N5bWJvbEV2ZW50TmFtZV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChleGlzdGluZ1Rhc2tzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4aXN0aW5nVGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXhpc3RpbmdUYXNrID0gZXhpc3RpbmdUYXNrc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmdUYXNrID09PSB0YXNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nVGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXQgaXNSZW1vdmVkIHRvIGRhdGEgZm9yIGZhc3RlciBpbnZva2VUYXNrIGNoZWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suaXNSZW1vdmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4aXN0aW5nVGFza3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhbGwgdGFza3MgZm9yIHRoZSBldmVudE5hbWUgKyBjYXB0dXJlIGhhdmUgZ29uZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBnbG9iYWxab25lQXdhcmVDYWxsYmFjayBhbmQgcmVtb3ZlIHRoZSB0YXNrIGNhY2hlIGZyb20gdGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrLmFsbFJlbW92ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay50YXJnZXRbc3ltYm9sRXZlbnROYW1lXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGlmIGFsbCB0YXNrcyBmb3IgdGhlIGV2ZW50TmFtZSArIGNhcHR1cmUgaGF2ZSBnb25lLFxuICAgICAgICAgICAgICAgIC8vIHdlIHdpbGwgcmVhbGx5IHJlbW92ZSB0aGUgZ2xvYmFsIGV2ZW50IGNhbGxiYWNrLFxuICAgICAgICAgICAgICAgIC8vIGlmIG5vdCwgcmV0dXJuXG4gICAgICAgICAgICAgICAgaWYgKCF0YXNrLmFsbFJlbW92ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbmF0aXZlUmVtb3ZlRXZlbnRMaXN0ZW5lci5jYWxsKHRhc2sudGFyZ2V0LCB0YXNrLmV2ZW50TmFtZSwgdGFzay5jYXB0dXJlID8gZ2xvYmFsWm9uZUF3YXJlQ2FwdHVyZUNhbGxiYWNrIDogZ2xvYmFsWm9uZUF3YXJlQ2FsbGJhY2ssIHRhc2sub3B0aW9ucyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGN1c3RvbVNjaGVkdWxlTm9uR2xvYmFsID0gZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmF0aXZlQWRkRXZlbnRMaXN0ZW5lci5jYWxsKHRhc2tEYXRhLnRhcmdldCwgdGFza0RhdGEuZXZlbnROYW1lLCB0YXNrLmludm9rZSwgdGFza0RhdGEub3B0aW9ucyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGN1c3RvbVNjaGVkdWxlUHJlcGVuZCA9IGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5hdGl2ZVByZXBlbmRFdmVudExpc3RlbmVyLmNhbGwodGFza0RhdGEudGFyZ2V0LCB0YXNrRGF0YS5ldmVudE5hbWUsIHRhc2suaW52b2tlLCB0YXNrRGF0YS5vcHRpb25zKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgY3VzdG9tQ2FuY2VsTm9uR2xvYmFsID0gZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmF0aXZlUmVtb3ZlRXZlbnRMaXN0ZW5lci5jYWxsKHRhc2sudGFyZ2V0LCB0YXNrLmV2ZW50TmFtZSwgdGFzay5pbnZva2UsIHRhc2sub3B0aW9ucyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGN1c3RvbVNjaGVkdWxlID0gdXNlR2xvYmFsQ2FsbGJhY2sgPyBjdXN0b21TY2hlZHVsZUdsb2JhbCA6IGN1c3RvbVNjaGVkdWxlTm9uR2xvYmFsO1xuICAgICAgICAgICAgdmFyIGN1c3RvbUNhbmNlbCA9IHVzZUdsb2JhbENhbGxiYWNrID8gY3VzdG9tQ2FuY2VsR2xvYmFsIDogY3VzdG9tQ2FuY2VsTm9uR2xvYmFsO1xuICAgICAgICAgICAgdmFyIGNvbXBhcmVUYXNrQ2FsbGJhY2tWc0RlbGVnYXRlID0gZnVuY3Rpb24gKHRhc2ssIGRlbGVnYXRlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHR5cGVPZkRlbGVnYXRlID0gdHlwZW9mIGRlbGVnYXRlO1xuICAgICAgICAgICAgICAgIHJldHVybiAodHlwZU9mRGVsZWdhdGUgPT09ICdmdW5jdGlvbicgJiYgdGFzay5jYWxsYmFjayA9PT0gZGVsZWdhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICh0eXBlT2ZEZWxlZ2F0ZSA9PT0gJ29iamVjdCcgJiYgdGFzay5vcmlnaW5hbERlbGVnYXRlID09PSBkZWxlZ2F0ZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGNvbXBhcmUgPSAocGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy5kaWZmKSA/IHBhdGNoT3B0aW9ucy5kaWZmIDogY29tcGFyZVRhc2tDYWxsYmFja1ZzRGVsZWdhdGU7XG4gICAgICAgICAgICB2YXIgdW5wYXRjaGVkRXZlbnRzID0gWm9uZVt6b25lU3ltYm9sKCdVTlBBVENIRURfRVZFTlRTJyldO1xuICAgICAgICAgICAgdmFyIHBhc3NpdmVFdmVudHMgPSBfZ2xvYmFsW3pvbmVTeW1ib2woJ1BBU1NJVkVfRVZFTlRTJyldO1xuICAgICAgICAgICAgdmFyIG1ha2VBZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIChuYXRpdmVMaXN0ZW5lciwgYWRkU291cmNlLCBjdXN0b21TY2hlZHVsZUZuLCBjdXN0b21DYW5jZWxGbiwgcmV0dXJuVGFyZ2V0LCBwcmVwZW5kKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJldHVyblRhcmdldCA9PT0gdm9pZCAwKSB7IHJldHVyblRhcmdldCA9IGZhbHNlOyB9XG4gICAgICAgICAgICAgICAgaWYgKHByZXBlbmQgPT09IHZvaWQgMCkgeyBwcmVwZW5kID0gZmFsc2U7IH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcyB8fCBfZ2xvYmFsO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXZlbnROYW1lID0gYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgICAgICAgICBpZiAocGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy50cmFuc2ZlckV2ZW50TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnROYW1lID0gcGF0Y2hPcHRpb25zLnRyYW5zZmVyRXZlbnROYW1lKGV2ZW50TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlbGVnYXRlID0gYXJndW1lbnRzWzFdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWRlbGVnYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmF0aXZlTGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNOb2RlICYmIGV2ZW50TmFtZSA9PT0gJ3VuY2F1Z2h0RXhjZXB0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZG9uJ3QgcGF0Y2ggdW5jYXVnaHRFeGNlcHRpb24gb2Ygbm9kZWpzIHRvIHByZXZlbnQgZW5kbGVzcyBsb29wXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmF0aXZlTGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBkb24ndCBjcmVhdGUgdGhlIGJpbmQgZGVsZWdhdGUgZnVuY3Rpb24gZm9yIGhhbmRsZUV2ZW50XG4gICAgICAgICAgICAgICAgICAgIC8vIGNhc2UgaGVyZSB0byBpbXByb3ZlIGFkZEV2ZW50TGlzdGVuZXIgcGVyZm9ybWFuY2VcbiAgICAgICAgICAgICAgICAgICAgLy8gd2Ugd2lsbCBjcmVhdGUgdGhlIGJpbmQgZGVsZWdhdGUgd2hlbiBpbnZva2VcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzSGFuZGxlRXZlbnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkZWxlZ2F0ZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkZWxlZ2F0ZS5oYW5kbGVFdmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuYXRpdmVMaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNIYW5kbGVFdmVudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlSGFuZGxlciAmJiAhdmFsaWRhdGVIYW5kbGVyKG5hdGl2ZUxpc3RlbmVyLCBkZWxlZ2F0ZSwgdGFyZ2V0LCBhcmd1bWVudHMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhc3NpdmUgPSBwYXNzaXZlU3VwcG9ydGVkICYmICEhcGFzc2l2ZUV2ZW50cyAmJiBwYXNzaXZlRXZlbnRzLmluZGV4T2YoZXZlbnROYW1lKSAhPT0gLTE7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0gYnVpbGRFdmVudExpc3RlbmVyT3B0aW9ucyhhcmd1bWVudHNbMl0sIHBhc3NpdmUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodW5wYXRjaGVkRXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayB1cGF0Y2hlZCBsaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHVucGF0Y2hlZEV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudE5hbWUgPT09IHVucGF0Y2hlZEV2ZW50c1tpXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFzc2l2ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5hdGl2ZUxpc3RlbmVyLmNhbGwodGFyZ2V0LCBldmVudE5hbWUsIGRlbGVnYXRlLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuYXRpdmVMaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBjYXB0dXJlID0gIW9wdGlvbnMgPyBmYWxzZSA6IHR5cGVvZiBvcHRpb25zID09PSAnYm9vbGVhbicgPyB0cnVlIDogb3B0aW9ucy5jYXB0dXJlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgb25jZSA9IG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnID8gb3B0aW9ucy5vbmNlIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHZhciB6b25lID0gWm9uZS5jdXJyZW50O1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3ltYm9sRXZlbnROYW1lcyA9IHpvbmVTeW1ib2xFdmVudE5hbWVzJDFbZXZlbnROYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzeW1ib2xFdmVudE5hbWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVwYXJlRXZlbnROYW1lcyhldmVudE5hbWUsIGV2ZW50TmFtZVRvU3RyaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbEV2ZW50TmFtZXMgPSB6b25lU3ltYm9sRXZlbnROYW1lcyQxW2V2ZW50TmFtZV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHN5bWJvbEV2ZW50TmFtZSA9IHN5bWJvbEV2ZW50TmFtZXNbY2FwdHVyZSA/IFRSVUVfU1RSIDogRkFMU0VfU1RSXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV4aXN0aW5nVGFza3MgPSB0YXJnZXRbc3ltYm9sRXZlbnROYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzRXhpc3RpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4aXN0aW5nVGFza3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFscmVhZHkgaGF2ZSB0YXNrIHJlZ2lzdGVyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRXhpc3RpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrRHVwbGljYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleGlzdGluZ1Rhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb21wYXJlKGV4aXN0aW5nVGFza3NbaV0sIGRlbGVnYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2FtZSBjYWxsYmFjaywgc2FtZSBjYXB0dXJlLCBzYW1lIGV2ZW50IG5hbWUsIGp1c3QgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Rhc2tzID0gdGFyZ2V0W3N5bWJvbEV2ZW50TmFtZV0gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgc291cmNlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29uc3RydWN0b3JOYW1lID0gdGFyZ2V0LmNvbnN0cnVjdG9yWyduYW1lJ107XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXRTb3VyY2UgPSBnbG9iYWxTb3VyY2VzW2NvbnN0cnVjdG9yTmFtZV07XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRTb3VyY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZSA9IHRhcmdldFNvdXJjZVtldmVudE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghc291cmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2UgPSBjb25zdHJ1Y3Rvck5hbWUgKyBhZGRTb3VyY2UgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChldmVudE5hbWVUb1N0cmluZyA/IGV2ZW50TmFtZVRvU3RyaW5nKGV2ZW50TmFtZSkgOiBldmVudE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGRvIG5vdCBjcmVhdGUgYSBuZXcgb2JqZWN0IGFzIHRhc2suZGF0YSB0byBwYXNzIHRob3NlIHRoaW5nc1xuICAgICAgICAgICAgICAgICAgICAvLyBqdXN0IHVzZSB0aGUgZ2xvYmFsIHNoYXJlZCBvbmVcbiAgICAgICAgICAgICAgICAgICAgdGFza0RhdGEub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiBhZGRFdmVudExpc3RlbmVyIHdpdGggb25jZSBvcHRpb25zLCB3ZSBkb24ndCBwYXNzIGl0IHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBuYXRpdmUgYWRkRXZlbnRMaXN0ZW5lciwgaW5zdGVhZCB3ZSBrZWVwIHRoZSBvbmNlIHNldHRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFuZCBoYW5kbGUgb3Vyc2VsdmVzLlxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza0RhdGEub3B0aW9ucy5vbmNlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGFza0RhdGEudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgICB0YXNrRGF0YS5jYXB0dXJlID0gY2FwdHVyZTtcbiAgICAgICAgICAgICAgICAgICAgdGFza0RhdGEuZXZlbnROYW1lID0gZXZlbnROYW1lO1xuICAgICAgICAgICAgICAgICAgICB0YXNrRGF0YS5pc0V4aXN0aW5nID0gaXNFeGlzdGluZztcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB1c2VHbG9iYWxDYWxsYmFjayA/IE9QVElNSVpFRF9aT05FX0VWRU5UX1RBU0tfREFUQSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgLy8ga2VlcCB0YXNrRGF0YSBpbnRvIGRhdGEgdG8gYWxsb3cgb25TY2hlZHVsZUV2ZW50VGFzayB0byBhY2Nlc3MgdGhlIHRhc2sgaW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEudGFza0RhdGEgPSB0YXNrRGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgdGFzayA9IHpvbmUuc2NoZWR1bGVFdmVudFRhc2soc291cmNlLCBkZWxlZ2F0ZSwgZGF0YSwgY3VzdG9tU2NoZWR1bGVGbiwgY3VzdG9tQ2FuY2VsRm4pO1xuICAgICAgICAgICAgICAgICAgICAvLyBzaG91bGQgY2xlYXIgdGFza0RhdGEudGFyZ2V0IHRvIGF2b2lkIG1lbW9yeSBsZWFrXG4gICAgICAgICAgICAgICAgICAgIC8vIGlzc3VlLCBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8yMDQ0MlxuICAgICAgICAgICAgICAgICAgICB0YXNrRGF0YS50YXJnZXQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAvLyBuZWVkIHRvIGNsZWFyIHVwIHRhc2tEYXRhIGJlY2F1c2UgaXQgaXMgYSBnbG9iYWwgb2JqZWN0XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnRhc2tEYXRhID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBoYXZlIHRvIHNhdmUgdGhvc2UgaW5mb3JtYXRpb24gdG8gdGFzayBpbiBjYXNlXG4gICAgICAgICAgICAgICAgICAgIC8vIGFwcGxpY2F0aW9uIG1heSBjYWxsIHRhc2suem9uZS5jYW5jZWxUYXNrKCkgZGlyZWN0bHlcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9uY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMub25jZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoIXBhc3NpdmVTdXBwb3J0ZWQgJiYgdHlwZW9mIHRhc2sub3B0aW9ucyA9PT0gJ2Jvb2xlYW4nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgbm90IHN1cHBvcnQgcGFzc2l2ZSwgYW5kIHdlIHBhc3MgYW4gb3B0aW9uIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYWRkRXZlbnRMaXN0ZW5lciwgd2Ugc2hvdWxkIHNhdmUgdGhlIG9wdGlvbnMgdG8gdGFza1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0YXNrLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgICAgICAgICAgICAgdGFzay5jYXB0dXJlID0gY2FwdHVyZTtcbiAgICAgICAgICAgICAgICAgICAgdGFzay5ldmVudE5hbWUgPSBldmVudE5hbWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0hhbmRsZUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzYXZlIG9yaWdpbmFsIGRlbGVnYXRlIGZvciBjb21wYXJlIHRvIGNoZWNrIGR1cGxpY2F0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5vcmlnaW5hbERlbGVnYXRlID0gZGVsZWdhdGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwcmVwZW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Rhc2tzLnB1c2godGFzayk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Rhc2tzLnVuc2hpZnQodGFzayk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJldHVyblRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcHJvdG9bQUREX0VWRU5UX0xJU1RFTkVSXSA9IG1ha2VBZGRMaXN0ZW5lcihuYXRpdmVBZGRFdmVudExpc3RlbmVyLCBBRERfRVZFTlRfTElTVEVORVJfU09VUkNFLCBjdXN0b21TY2hlZHVsZSwgY3VzdG9tQ2FuY2VsLCByZXR1cm5UYXJnZXQpO1xuICAgICAgICAgICAgaWYgKG5hdGl2ZVByZXBlbmRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgcHJvdG9bUFJFUEVORF9FVkVOVF9MSVNURU5FUl0gPSBtYWtlQWRkTGlzdGVuZXIobmF0aXZlUHJlcGVuZEV2ZW50TGlzdGVuZXIsIFBSRVBFTkRfRVZFTlRfTElTVEVORVJfU09VUkNFLCBjdXN0b21TY2hlZHVsZVByZXBlbmQsIGN1c3RvbUNhbmNlbCwgcmV0dXJuVGFyZ2V0LCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb3RvW1JFTU9WRV9FVkVOVF9MSVNURU5FUl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMgfHwgX2dsb2JhbDtcbiAgICAgICAgICAgICAgICB2YXIgZXZlbnROYW1lID0gYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgICAgIGlmIChwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLnRyYW5zZmVyRXZlbnROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50TmFtZSA9IHBhdGNoT3B0aW9ucy50cmFuc2ZlckV2ZW50TmFtZShldmVudE5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50c1syXTtcbiAgICAgICAgICAgICAgICB2YXIgY2FwdHVyZSA9ICFvcHRpb25zID8gZmFsc2UgOiB0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Jvb2xlYW4nID8gdHJ1ZSA6IG9wdGlvbnMuY2FwdHVyZTtcbiAgICAgICAgICAgICAgICB2YXIgZGVsZWdhdGUgPSBhcmd1bWVudHNbMV07XG4gICAgICAgICAgICAgICAgaWYgKCFkZWxlZ2F0ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmF0aXZlUmVtb3ZlRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGVIYW5kbGVyICYmXG4gICAgICAgICAgICAgICAgICAgICF2YWxpZGF0ZUhhbmRsZXIobmF0aXZlUmVtb3ZlRXZlbnRMaXN0ZW5lciwgZGVsZWdhdGUsIHRhcmdldCwgYXJndW1lbnRzKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBzeW1ib2xFdmVudE5hbWVzID0gem9uZVN5bWJvbEV2ZW50TmFtZXMkMVtldmVudE5hbWVdO1xuICAgICAgICAgICAgICAgIHZhciBzeW1ib2xFdmVudE5hbWU7XG4gICAgICAgICAgICAgICAgaWYgKHN5bWJvbEV2ZW50TmFtZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgc3ltYm9sRXZlbnROYW1lID0gc3ltYm9sRXZlbnROYW1lc1tjYXB0dXJlID8gVFJVRV9TVFIgOiBGQUxTRV9TVFJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgZXhpc3RpbmdUYXNrcyA9IHN5bWJvbEV2ZW50TmFtZSAmJiB0YXJnZXRbc3ltYm9sRXZlbnROYW1lXTtcbiAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmdUYXNrcykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4aXN0aW5nVGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleGlzdGluZ1Rhc2sgPSBleGlzdGluZ1Rhc2tzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBhcmUoZXhpc3RpbmdUYXNrLCBkZWxlZ2F0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Rhc2tzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXQgaXNSZW1vdmVkIHRvIGRhdGEgZm9yIGZhc3RlciBpbnZva2VUYXNrIGNoZWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdUYXNrLmlzUmVtb3ZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4aXN0aW5nVGFza3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFsbCB0YXNrcyBmb3IgdGhlIGV2ZW50TmFtZSArIGNhcHR1cmUgaGF2ZSBnb25lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgZ2xvYmFsWm9uZUF3YXJlQ2FsbGJhY2sgYW5kIHJlbW92ZSB0aGUgdGFzayBjYWNoZSBmcm9tIHRhcmdldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Rhc2suYWxsUmVtb3ZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtzeW1ib2xFdmVudE5hbWVdID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW4gdGhlIHRhcmdldCwgd2UgaGF2ZSBhbiBldmVudCBsaXN0ZW5lciB3aGljaCBpcyBhZGRlZCBieSBvbl9wcm9wZXJ0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdWNoIGFzIHRhcmdldC5vbmNsaWNrID0gZnVuY3Rpb24oKSB7fSwgc28gd2UgbmVlZCB0byBjbGVhciB0aGlzIGludGVybmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHByb3BlcnR5IHRvbyBpZiBhbGwgZGVsZWdhdGVzIGFsbCByZW1vdmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZXZlbnROYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9uUHJvcGVydHlTeW1ib2wgPSBaT05FX1NZTUJPTF9QUkVGSVggKyAnT05fUFJPUEVSVFknICsgZXZlbnROYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W29uUHJvcGVydHlTeW1ib2xdID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Rhc2suem9uZS5jYW5jZWxUYXNrKGV4aXN0aW5nVGFzayk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJldHVyblRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gaXNzdWUgOTMwLCBkaWRuJ3QgZmluZCB0aGUgZXZlbnQgbmFtZSBvciBjYWxsYmFja1xuICAgICAgICAgICAgICAgIC8vIGZyb20gem9uZSBrZXB0IGV4aXN0aW5nVGFza3MsIHRoZSBjYWxsYmFjayBtYXliZVxuICAgICAgICAgICAgICAgIC8vIGFkZGVkIG91dHNpZGUgb2Ygem9uZSwgd2UgbmVlZCB0byBjYWxsIG5hdGl2ZSByZW1vdmVFdmVudExpc3RlbmVyXG4gICAgICAgICAgICAgICAgLy8gdG8gdHJ5IHRvIHJlbW92ZSBpdC5cbiAgICAgICAgICAgICAgICByZXR1cm4gbmF0aXZlUmVtb3ZlRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHByb3RvW0xJU1RFTkVSU19FVkVOVF9MSVNURU5FUl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMgfHwgX2dsb2JhbDtcbiAgICAgICAgICAgICAgICB2YXIgZXZlbnROYW1lID0gYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgICAgIGlmIChwYXRjaE9wdGlvbnMgJiYgcGF0Y2hPcHRpb25zLnRyYW5zZmVyRXZlbnROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50TmFtZSA9IHBhdGNoT3B0aW9ucy50cmFuc2ZlckV2ZW50TmFtZShldmVudE5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgbGlzdGVuZXJzID0gW107XG4gICAgICAgICAgICAgICAgdmFyIHRhc2tzID0gZmluZEV2ZW50VGFza3ModGFyZ2V0LCBldmVudE5hbWVUb1N0cmluZyA/IGV2ZW50TmFtZVRvU3RyaW5nKGV2ZW50TmFtZSkgOiBldmVudE5hbWUpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhc2sgPSB0YXNrc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlbGVnYXRlID0gdGFzay5vcmlnaW5hbERlbGVnYXRlID8gdGFzay5vcmlnaW5hbERlbGVnYXRlIDogdGFzay5jYWxsYmFjaztcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzLnB1c2goZGVsZWdhdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbGlzdGVuZXJzO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHByb3RvW1JFTU9WRV9BTExfTElTVEVORVJTX0VWRU5UX0xJU1RFTkVSXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcyB8fCBfZ2xvYmFsO1xuICAgICAgICAgICAgICAgIHZhciBldmVudE5hbWUgPSBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICAgICAgaWYgKCFldmVudE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9wID0ga2V5c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXRjaCA9IEVWRU5UX05BTUVfU1lNQk9MX1JFR1guZXhlYyhwcm9wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBldnROYW1lID0gbWF0Y2ggJiYgbWF0Y2hbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpbiBub2RlanMgRXZlbnRFbWl0dGVyLCByZW1vdmVMaXN0ZW5lciBldmVudCBpc1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdXNlZCBmb3IgbW9uaXRvcmluZyB0aGUgcmVtb3ZlTGlzdGVuZXIgY2FsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNvIGp1c3Qga2VlcCByZW1vdmVMaXN0ZW5lciBldmVudExpc3RlbmVyIHVudGlsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbGwgb3RoZXIgZXZlbnRMaXN0ZW5lcnMgYXJlIHJlbW92ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldnROYW1lICYmIGV2dE5hbWUgIT09ICdyZW1vdmVMaXN0ZW5lcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW1JFTU9WRV9BTExfTElTVEVORVJTX0VWRU5UX0xJU1RFTkVSXS5jYWxsKHRoaXMsIGV2dE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSByZW1vdmVMaXN0ZW5lciBsaXN0ZW5lciBmaW5hbGx5XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbUkVNT1ZFX0FMTF9MSVNURU5FUlNfRVZFTlRfTElTVEVORVJdLmNhbGwodGhpcywgJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGF0Y2hPcHRpb25zICYmIHBhdGNoT3B0aW9ucy50cmFuc2ZlckV2ZW50TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnROYW1lID0gcGF0Y2hPcHRpb25zLnRyYW5zZmVyRXZlbnROYW1lKGV2ZW50TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHN5bWJvbEV2ZW50TmFtZXMgPSB6b25lU3ltYm9sRXZlbnROYW1lcyQxW2V2ZW50TmFtZV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChzeW1ib2xFdmVudE5hbWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3ltYm9sRXZlbnROYW1lID0gc3ltYm9sRXZlbnROYW1lc1tGQUxTRV9TVFJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN5bWJvbENhcHR1cmVFdmVudE5hbWUgPSBzeW1ib2xFdmVudE5hbWVzW1RSVUVfU1RSXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YXNrcyA9IHRhcmdldFtzeW1ib2xFdmVudE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNhcHR1cmVUYXNrcyA9IHRhcmdldFtzeW1ib2xDYXB0dXJlRXZlbnROYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXNrcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZW1vdmVUYXNrcyA9IHRhc2tzLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZW1vdmVUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFzayA9IHJlbW92ZVRhc2tzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGVsZWdhdGUgPSB0YXNrLm9yaWdpbmFsRGVsZWdhdGUgPyB0YXNrLm9yaWdpbmFsRGVsZWdhdGUgOiB0YXNrLmNhbGxiYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW1JFTU9WRV9FVkVOVF9MSVNURU5FUl0uY2FsbCh0aGlzLCBldmVudE5hbWUsIGRlbGVnYXRlLCB0YXNrLm9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYXB0dXJlVGFza3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVtb3ZlVGFza3MgPSBjYXB0dXJlVGFza3Muc2xpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlbW92ZVRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YXNrID0gcmVtb3ZlVGFza3NbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkZWxlZ2F0ZSA9IHRhc2sub3JpZ2luYWxEZWxlZ2F0ZSA/IHRhc2sub3JpZ2luYWxEZWxlZ2F0ZSA6IHRhc2suY2FsbGJhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbUkVNT1ZFX0VWRU5UX0xJU1RFTkVSXS5jYWxsKHRoaXMsIGV2ZW50TmFtZSwgZGVsZWdhdGUsIHRhc2sub3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyZXR1cm5UYXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIGZvciBuYXRpdmUgdG9TdHJpbmcgcGF0Y2hcbiAgICAgICAgICAgIGF0dGFjaE9yaWdpblRvUGF0Y2hlZChwcm90b1tBRERfRVZFTlRfTElTVEVORVJdLCBuYXRpdmVBZGRFdmVudExpc3RlbmVyKTtcbiAgICAgICAgICAgIGF0dGFjaE9yaWdpblRvUGF0Y2hlZChwcm90b1tSRU1PVkVfRVZFTlRfTElTVEVORVJdLCBuYXRpdmVSZW1vdmVFdmVudExpc3RlbmVyKTtcbiAgICAgICAgICAgIGlmIChuYXRpdmVSZW1vdmVBbGxMaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgICAgICBhdHRhY2hPcmlnaW5Ub1BhdGNoZWQocHJvdG9bUkVNT1ZFX0FMTF9MSVNURU5FUlNfRVZFTlRfTElTVEVORVJdLCBuYXRpdmVSZW1vdmVBbGxMaXN0ZW5lcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5hdGl2ZUxpc3RlbmVycykge1xuICAgICAgICAgICAgICAgIGF0dGFjaE9yaWdpblRvUGF0Y2hlZChwcm90b1tMSVNURU5FUlNfRVZFTlRfTElTVEVORVJdLCBuYXRpdmVMaXN0ZW5lcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHRzW2ldID0gcGF0Y2hFdmVudFRhcmdldE1ldGhvZHMoYXBpc1tpXSwgcGF0Y2hPcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG4gICAgZnVuY3Rpb24gZmluZEV2ZW50VGFza3ModGFyZ2V0LCBldmVudE5hbWUpIHtcbiAgICAgICAgaWYgKCFldmVudE5hbWUpIHtcbiAgICAgICAgICAgIHZhciBmb3VuZFRhc2tzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBwcm9wIGluIHRhcmdldCkge1xuICAgICAgICAgICAgICAgIHZhciBtYXRjaCA9IEVWRU5UX05BTUVfU1lNQk9MX1JFR1guZXhlYyhwcm9wKTtcbiAgICAgICAgICAgICAgICB2YXIgZXZ0TmFtZSA9IG1hdGNoICYmIG1hdGNoWzFdO1xuICAgICAgICAgICAgICAgIGlmIChldnROYW1lICYmICghZXZlbnROYW1lIHx8IGV2dE5hbWUgPT09IGV2ZW50TmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhc2tzID0gdGFyZ2V0W3Byb3BdO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFza3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZFRhc2tzLnB1c2godGFza3NbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZvdW5kVGFza3M7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN5bWJvbEV2ZW50TmFtZSA9IHpvbmVTeW1ib2xFdmVudE5hbWVzJDFbZXZlbnROYW1lXTtcbiAgICAgICAgaWYgKCFzeW1ib2xFdmVudE5hbWUpIHtcbiAgICAgICAgICAgIHByZXBhcmVFdmVudE5hbWVzKGV2ZW50TmFtZSk7XG4gICAgICAgICAgICBzeW1ib2xFdmVudE5hbWUgPSB6b25lU3ltYm9sRXZlbnROYW1lcyQxW2V2ZW50TmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNhcHR1cmVGYWxzZVRhc2tzID0gdGFyZ2V0W3N5bWJvbEV2ZW50TmFtZVtGQUxTRV9TVFJdXTtcbiAgICAgICAgdmFyIGNhcHR1cmVUcnVlVGFza3MgPSB0YXJnZXRbc3ltYm9sRXZlbnROYW1lW1RSVUVfU1RSXV07XG4gICAgICAgIGlmICghY2FwdHVyZUZhbHNlVGFza3MpIHtcbiAgICAgICAgICAgIHJldHVybiBjYXB0dXJlVHJ1ZVRhc2tzID8gY2FwdHVyZVRydWVUYXNrcy5zbGljZSgpIDogW107XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gY2FwdHVyZVRydWVUYXNrcyA/IGNhcHR1cmVGYWxzZVRhc2tzLmNvbmNhdChjYXB0dXJlVHJ1ZVRhc2tzKSA6XG4gICAgICAgICAgICAgICAgY2FwdHVyZUZhbHNlVGFza3Muc2xpY2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBwYXRjaEV2ZW50UHJvdG90eXBlKGdsb2JhbCwgYXBpKSB7XG4gICAgICAgIHZhciBFdmVudCA9IGdsb2JhbFsnRXZlbnQnXTtcbiAgICAgICAgaWYgKEV2ZW50ICYmIEV2ZW50LnByb3RvdHlwZSkge1xuICAgICAgICAgICAgYXBpLnBhdGNoTWV0aG9kKEV2ZW50LnByb3RvdHlwZSwgJ3N0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbicsIGZ1bmN0aW9uIChkZWxlZ2F0ZSkgeyByZXR1cm4gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICAgICAgICAgICAgICBzZWxmW0lNTUVESUFURV9QUk9QQUdBVElPTl9TWU1CT0xdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIGNhbGwgdGhlIG5hdGl2ZSBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb25cbiAgICAgICAgICAgICAgICAvLyBpbiBjYXNlIGluIHNvbWUgaHlicmlkIGFwcGxpY2F0aW9uLCBzb21lIHBhcnQgb2ZcbiAgICAgICAgICAgICAgICAvLyBhcHBsaWNhdGlvbiB3aWxsIGJlIGNvbnRyb2xsZWQgYnkgem9uZSwgc29tZSBhcmUgbm90XG4gICAgICAgICAgICAgICAgZGVsZWdhdGUgJiYgZGVsZWdhdGUuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgICAgICB9OyB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBwYXRjaENhbGxiYWNrcyhhcGksIHRhcmdldCwgdGFyZ2V0TmFtZSwgbWV0aG9kLCBjYWxsYmFja3MpIHtcbiAgICAgICAgdmFyIHN5bWJvbCA9IFpvbmUuX19zeW1ib2xfXyhtZXRob2QpO1xuICAgICAgICBpZiAodGFyZ2V0W3N5bWJvbF0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbmF0aXZlRGVsZWdhdGUgPSB0YXJnZXRbc3ltYm9sXSA9IHRhcmdldFttZXRob2RdO1xuICAgICAgICB0YXJnZXRbbWV0aG9kXSA9IGZ1bmN0aW9uIChuYW1lLCBvcHRzLCBvcHRpb25zKSB7XG4gICAgICAgICAgICBpZiAob3B0cyAmJiBvcHRzLnByb3RvdHlwZSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc291cmNlID0gdGFyZ2V0TmFtZSArIFwiLlwiICsgbWV0aG9kICsgXCI6OlwiICsgY2FsbGJhY2s7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm90b3R5cGUgPSBvcHRzLnByb3RvdHlwZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eShjYWxsYmFjaykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkZXNjcmlwdG9yID0gYXBpLk9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90b3R5cGUsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdG9yLnZhbHVlID0gYXBpLndyYXBXaXRoQ3VycmVudFpvbmUoZGVzY3JpcHRvci52YWx1ZSwgc291cmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcGkuX3JlZGVmaW5lUHJvcGVydHkob3B0cy5wcm90b3R5cGUsIGNhbGxiYWNrLCBkZXNjcmlwdG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByb3RvdHlwZVtjYWxsYmFja10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm90b3R5cGVbY2FsbGJhY2tdID0gYXBpLndyYXBXaXRoQ3VycmVudFpvbmUocHJvdG90eXBlW2NhbGxiYWNrXSwgc291cmNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwcm90b3R5cGVbY2FsbGJhY2tdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm90b3R5cGVbY2FsbGJhY2tdID0gYXBpLndyYXBXaXRoQ3VycmVudFpvbmUocHJvdG90eXBlW2NhbGxiYWNrXSwgc291cmNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5hdGl2ZURlbGVnYXRlLmNhbGwodGFyZ2V0LCBuYW1lLCBvcHRzLCBvcHRpb25zKTtcbiAgICAgICAgfTtcbiAgICAgICAgYXBpLmF0dGFjaE9yaWdpblRvUGF0Y2hlZCh0YXJnZXRbbWV0aG9kXSwgbmF0aXZlRGVsZWdhdGUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICB2YXIgZ2xvYmFsRXZlbnRIYW5kbGVyc0V2ZW50TmFtZXMgPSBbXG4gICAgICAgICdhYm9ydCcsXG4gICAgICAgICdhbmltYXRpb25jYW5jZWwnLFxuICAgICAgICAnYW5pbWF0aW9uZW5kJyxcbiAgICAgICAgJ2FuaW1hdGlvbml0ZXJhdGlvbicsXG4gICAgICAgICdhdXhjbGljaycsXG4gICAgICAgICdiZWZvcmVpbnB1dCcsXG4gICAgICAgICdibHVyJyxcbiAgICAgICAgJ2NhbmNlbCcsXG4gICAgICAgICdjYW5wbGF5JyxcbiAgICAgICAgJ2NhbnBsYXl0aHJvdWdoJyxcbiAgICAgICAgJ2NoYW5nZScsXG4gICAgICAgICdjb21wb3NpdGlvbnN0YXJ0JyxcbiAgICAgICAgJ2NvbXBvc2l0aW9udXBkYXRlJyxcbiAgICAgICAgJ2NvbXBvc2l0aW9uZW5kJyxcbiAgICAgICAgJ2N1ZWNoYW5nZScsXG4gICAgICAgICdjbGljaycsXG4gICAgICAgICdjbG9zZScsXG4gICAgICAgICdjb250ZXh0bWVudScsXG4gICAgICAgICdjdXJlY2hhbmdlJyxcbiAgICAgICAgJ2RibGNsaWNrJyxcbiAgICAgICAgJ2RyYWcnLFxuICAgICAgICAnZHJhZ2VuZCcsXG4gICAgICAgICdkcmFnZW50ZXInLFxuICAgICAgICAnZHJhZ2V4aXQnLFxuICAgICAgICAnZHJhZ2xlYXZlJyxcbiAgICAgICAgJ2RyYWdvdmVyJyxcbiAgICAgICAgJ2Ryb3AnLFxuICAgICAgICAnZHVyYXRpb25jaGFuZ2UnLFxuICAgICAgICAnZW1wdGllZCcsXG4gICAgICAgICdlbmRlZCcsXG4gICAgICAgICdlcnJvcicsXG4gICAgICAgICdmb2N1cycsXG4gICAgICAgICdmb2N1c2luJyxcbiAgICAgICAgJ2ZvY3Vzb3V0JyxcbiAgICAgICAgJ2dvdHBvaW50ZXJjYXB0dXJlJyxcbiAgICAgICAgJ2lucHV0JyxcbiAgICAgICAgJ2ludmFsaWQnLFxuICAgICAgICAna2V5ZG93bicsXG4gICAgICAgICdrZXlwcmVzcycsXG4gICAgICAgICdrZXl1cCcsXG4gICAgICAgICdsb2FkJyxcbiAgICAgICAgJ2xvYWRzdGFydCcsXG4gICAgICAgICdsb2FkZWRkYXRhJyxcbiAgICAgICAgJ2xvYWRlZG1ldGFkYXRhJyxcbiAgICAgICAgJ2xvc3Rwb2ludGVyY2FwdHVyZScsXG4gICAgICAgICdtb3VzZWRvd24nLFxuICAgICAgICAnbW91c2VlbnRlcicsXG4gICAgICAgICdtb3VzZWxlYXZlJyxcbiAgICAgICAgJ21vdXNlbW92ZScsXG4gICAgICAgICdtb3VzZW91dCcsXG4gICAgICAgICdtb3VzZW92ZXInLFxuICAgICAgICAnbW91c2V1cCcsXG4gICAgICAgICdtb3VzZXdoZWVsJyxcbiAgICAgICAgJ29yaWVudGF0aW9uY2hhbmdlJyxcbiAgICAgICAgJ3BhdXNlJyxcbiAgICAgICAgJ3BsYXknLFxuICAgICAgICAncGxheWluZycsXG4gICAgICAgICdwb2ludGVyY2FuY2VsJyxcbiAgICAgICAgJ3BvaW50ZXJkb3duJyxcbiAgICAgICAgJ3BvaW50ZXJlbnRlcicsXG4gICAgICAgICdwb2ludGVybGVhdmUnLFxuICAgICAgICAncG9pbnRlcmxvY2tjaGFuZ2UnLFxuICAgICAgICAnbW96cG9pbnRlcmxvY2tjaGFuZ2UnLFxuICAgICAgICAnd2Via2l0cG9pbnRlcmxvY2tlcmNoYW5nZScsXG4gICAgICAgICdwb2ludGVybG9ja2Vycm9yJyxcbiAgICAgICAgJ21venBvaW50ZXJsb2NrZXJyb3InLFxuICAgICAgICAnd2Via2l0cG9pbnRlcmxvY2tlcnJvcicsXG4gICAgICAgICdwb2ludGVybW92ZScsXG4gICAgICAgICdwb2ludG91dCcsXG4gICAgICAgICdwb2ludGVyb3ZlcicsXG4gICAgICAgICdwb2ludGVydXAnLFxuICAgICAgICAncHJvZ3Jlc3MnLFxuICAgICAgICAncmF0ZWNoYW5nZScsXG4gICAgICAgICdyZXNldCcsXG4gICAgICAgICdyZXNpemUnLFxuICAgICAgICAnc2Nyb2xsJyxcbiAgICAgICAgJ3NlZWtlZCcsXG4gICAgICAgICdzZWVraW5nJyxcbiAgICAgICAgJ3NlbGVjdCcsXG4gICAgICAgICdzZWxlY3Rpb25jaGFuZ2UnLFxuICAgICAgICAnc2VsZWN0c3RhcnQnLFxuICAgICAgICAnc2hvdycsXG4gICAgICAgICdzb3J0JyxcbiAgICAgICAgJ3N0YWxsZWQnLFxuICAgICAgICAnc3VibWl0JyxcbiAgICAgICAgJ3N1c3BlbmQnLFxuICAgICAgICAndGltZXVwZGF0ZScsXG4gICAgICAgICd2b2x1bWVjaGFuZ2UnLFxuICAgICAgICAndG91Y2hjYW5jZWwnLFxuICAgICAgICAndG91Y2htb3ZlJyxcbiAgICAgICAgJ3RvdWNoc3RhcnQnLFxuICAgICAgICAndG91Y2hlbmQnLFxuICAgICAgICAndHJhbnNpdGlvbmNhbmNlbCcsXG4gICAgICAgICd0cmFuc2l0aW9uZW5kJyxcbiAgICAgICAgJ3dhaXRpbmcnLFxuICAgICAgICAnd2hlZWwnXG4gICAgXTtcbiAgICB2YXIgZG9jdW1lbnRFdmVudE5hbWVzID0gW1xuICAgICAgICAnYWZ0ZXJzY3JpcHRleGVjdXRlJywgJ2JlZm9yZXNjcmlwdGV4ZWN1dGUnLCAnRE9NQ29udGVudExvYWRlZCcsICdmcmVlemUnLCAnZnVsbHNjcmVlbmNoYW5nZScsXG4gICAgICAgICdtb3pmdWxsc2NyZWVuY2hhbmdlJywgJ3dlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UnLCAnbXNmdWxsc2NyZWVuY2hhbmdlJywgJ2Z1bGxzY3JlZW5lcnJvcicsXG4gICAgICAgICdtb3pmdWxsc2NyZWVuZXJyb3InLCAnd2Via2l0ZnVsbHNjcmVlbmVycm9yJywgJ21zZnVsbHNjcmVlbmVycm9yJywgJ3JlYWR5c3RhdGVjaGFuZ2UnLFxuICAgICAgICAndmlzaWJpbGl0eWNoYW5nZScsICdyZXN1bWUnXG4gICAgXTtcbiAgICB2YXIgd2luZG93RXZlbnROYW1lcyA9IFtcbiAgICAgICAgJ2Fic29sdXRlZGV2aWNlb3JpZW50YXRpb24nLFxuICAgICAgICAnYWZ0ZXJpbnB1dCcsXG4gICAgICAgICdhZnRlcnByaW50JyxcbiAgICAgICAgJ2FwcGluc3RhbGxlZCcsXG4gICAgICAgICdiZWZvcmVpbnN0YWxscHJvbXB0JyxcbiAgICAgICAgJ2JlZm9yZXByaW50JyxcbiAgICAgICAgJ2JlZm9yZXVubG9hZCcsXG4gICAgICAgICdkZXZpY2VsaWdodCcsXG4gICAgICAgICdkZXZpY2Vtb3Rpb24nLFxuICAgICAgICAnZGV2aWNlb3JpZW50YXRpb24nLFxuICAgICAgICAnZGV2aWNlb3JpZW50YXRpb25hYnNvbHV0ZScsXG4gICAgICAgICdkZXZpY2Vwcm94aW1pdHknLFxuICAgICAgICAnaGFzaGNoYW5nZScsXG4gICAgICAgICdsYW5ndWFnZWNoYW5nZScsXG4gICAgICAgICdtZXNzYWdlJyxcbiAgICAgICAgJ21vemJlZm9yZXBhaW50JyxcbiAgICAgICAgJ29mZmxpbmUnLFxuICAgICAgICAnb25saW5lJyxcbiAgICAgICAgJ3BhaW50JyxcbiAgICAgICAgJ3BhZ2VzaG93JyxcbiAgICAgICAgJ3BhZ2VoaWRlJyxcbiAgICAgICAgJ3BvcHN0YXRlJyxcbiAgICAgICAgJ3JlamVjdGlvbmhhbmRsZWQnLFxuICAgICAgICAnc3RvcmFnZScsXG4gICAgICAgICd1bmhhbmRsZWRyZWplY3Rpb24nLFxuICAgICAgICAndW5sb2FkJyxcbiAgICAgICAgJ3VzZXJwcm94aW1pdHknLFxuICAgICAgICAndnJkaXNwbGF5Y29ubmVjdGVkJyxcbiAgICAgICAgJ3ZyZGlzcGxheWRpc2Nvbm5lY3RlZCcsXG4gICAgICAgICd2cmRpc3BsYXlwcmVzZW50Y2hhbmdlJ1xuICAgIF07XG4gICAgdmFyIGh0bWxFbGVtZW50RXZlbnROYW1lcyA9IFtcbiAgICAgICAgJ2JlZm9yZWNvcHknLCAnYmVmb3JlY3V0JywgJ2JlZm9yZXBhc3RlJywgJ2NvcHknLCAnY3V0JywgJ3Bhc3RlJywgJ2RyYWdzdGFydCcsICdsb2FkZW5kJyxcbiAgICAgICAgJ2FuaW1hdGlvbnN0YXJ0JywgJ3NlYXJjaCcsICd0cmFuc2l0aW9ucnVuJywgJ3RyYW5zaXRpb25zdGFydCcsICd3ZWJraXRhbmltYXRpb25lbmQnLFxuICAgICAgICAnd2Via2l0YW5pbWF0aW9uaXRlcmF0aW9uJywgJ3dlYmtpdGFuaW1hdGlvbnN0YXJ0JywgJ3dlYmtpdHRyYW5zaXRpb25lbmQnXG4gICAgXTtcbiAgICB2YXIgbWVkaWFFbGVtZW50RXZlbnROYW1lcyA9IFsnZW5jcnlwdGVkJywgJ3dhaXRpbmdmb3JrZXknLCAnbXNuZWVka2V5JywgJ21vemludGVycnVwdGJlZ2luJywgJ21vemludGVycnVwdGVuZCddO1xuICAgIHZhciBpZUVsZW1lbnRFdmVudE5hbWVzID0gW1xuICAgICAgICAnYWN0aXZhdGUnLFxuICAgICAgICAnYWZ0ZXJ1cGRhdGUnLFxuICAgICAgICAnYXJpYXJlcXVlc3QnLFxuICAgICAgICAnYmVmb3JlYWN0aXZhdGUnLFxuICAgICAgICAnYmVmb3JlZGVhY3RpdmF0ZScsXG4gICAgICAgICdiZWZvcmVlZGl0Zm9jdXMnLFxuICAgICAgICAnYmVmb3JldXBkYXRlJyxcbiAgICAgICAgJ2NlbGxjaGFuZ2UnLFxuICAgICAgICAnY29udHJvbHNlbGVjdCcsXG4gICAgICAgICdkYXRhYXZhaWxhYmxlJyxcbiAgICAgICAgJ2RhdGFzZXRjaGFuZ2VkJyxcbiAgICAgICAgJ2RhdGFzZXRjb21wbGV0ZScsXG4gICAgICAgICdlcnJvcnVwZGF0ZScsXG4gICAgICAgICdmaWx0ZXJjaGFuZ2UnLFxuICAgICAgICAnbGF5b3V0Y29tcGxldGUnLFxuICAgICAgICAnbG9zZWNhcHR1cmUnLFxuICAgICAgICAnbW92ZScsXG4gICAgICAgICdtb3ZlZW5kJyxcbiAgICAgICAgJ21vdmVzdGFydCcsXG4gICAgICAgICdwcm9wZXJ0eWNoYW5nZScsXG4gICAgICAgICdyZXNpemVlbmQnLFxuICAgICAgICAncmVzaXplc3RhcnQnLFxuICAgICAgICAncm93ZW50ZXInLFxuICAgICAgICAncm93ZXhpdCcsXG4gICAgICAgICdyb3dzZGVsZXRlJyxcbiAgICAgICAgJ3Jvd3NpbnNlcnRlZCcsXG4gICAgICAgICdjb21tYW5kJyxcbiAgICAgICAgJ2NvbXBhc3NuZWVkc2NhbGlicmF0aW9uJyxcbiAgICAgICAgJ2RlYWN0aXZhdGUnLFxuICAgICAgICAnaGVscCcsXG4gICAgICAgICdtc2NvbnRlbnR6b29tJyxcbiAgICAgICAgJ21zbWFuaXB1bGF0aW9uc3RhdGVjaGFuZ2VkJyxcbiAgICAgICAgJ21zZ2VzdHVyZWNoYW5nZScsXG4gICAgICAgICdtc2dlc3R1cmVkb3VibGV0YXAnLFxuICAgICAgICAnbXNnZXN0dXJlZW5kJyxcbiAgICAgICAgJ21zZ2VzdHVyZWhvbGQnLFxuICAgICAgICAnbXNnZXN0dXJlc3RhcnQnLFxuICAgICAgICAnbXNnZXN0dXJldGFwJyxcbiAgICAgICAgJ21zZ290cG9pbnRlcmNhcHR1cmUnLFxuICAgICAgICAnbXNpbmVydGlhc3RhcnQnLFxuICAgICAgICAnbXNsb3N0cG9pbnRlcmNhcHR1cmUnLFxuICAgICAgICAnbXNwb2ludGVyY2FuY2VsJyxcbiAgICAgICAgJ21zcG9pbnRlcmRvd24nLFxuICAgICAgICAnbXNwb2ludGVyZW50ZXInLFxuICAgICAgICAnbXNwb2ludGVyaG92ZXInLFxuICAgICAgICAnbXNwb2ludGVybGVhdmUnLFxuICAgICAgICAnbXNwb2ludGVybW92ZScsXG4gICAgICAgICdtc3BvaW50ZXJvdXQnLFxuICAgICAgICAnbXNwb2ludGVyb3ZlcicsXG4gICAgICAgICdtc3BvaW50ZXJ1cCcsXG4gICAgICAgICdwb2ludGVyb3V0JyxcbiAgICAgICAgJ21zc2l0ZW1vZGVqdW1wbGlzdGl0ZW1yZW1vdmVkJyxcbiAgICAgICAgJ21zdGh1bWJuYWlsY2xpY2snLFxuICAgICAgICAnc3RvcCcsXG4gICAgICAgICdzdG9yYWdlY29tbWl0J1xuICAgIF07XG4gICAgdmFyIHdlYmdsRXZlbnROYW1lcyA9IFsnd2ViZ2xjb250ZXh0cmVzdG9yZWQnLCAnd2ViZ2xjb250ZXh0bG9zdCcsICd3ZWJnbGNvbnRleHRjcmVhdGlvbmVycm9yJ107XG4gICAgdmFyIGZvcm1FdmVudE5hbWVzID0gWydhdXRvY29tcGxldGUnLCAnYXV0b2NvbXBsZXRlZXJyb3InXTtcbiAgICB2YXIgZGV0YWlsRXZlbnROYW1lcyA9IFsndG9nZ2xlJ107XG4gICAgdmFyIGZyYW1lRXZlbnROYW1lcyA9IFsnbG9hZCddO1xuICAgIHZhciBmcmFtZVNldEV2ZW50TmFtZXMgPSBbJ2JsdXInLCAnZXJyb3InLCAnZm9jdXMnLCAnbG9hZCcsICdyZXNpemUnLCAnc2Nyb2xsJywgJ21lc3NhZ2VlcnJvciddO1xuICAgIHZhciBtYXJxdWVlRXZlbnROYW1lcyA9IFsnYm91bmNlJywgJ2ZpbmlzaCcsICdzdGFydCddO1xuICAgIHZhciBYTUxIdHRwUmVxdWVzdEV2ZW50TmFtZXMgPSBbXG4gICAgICAgICdsb2Fkc3RhcnQnLCAncHJvZ3Jlc3MnLCAnYWJvcnQnLCAnZXJyb3InLCAnbG9hZCcsICdwcm9ncmVzcycsICd0aW1lb3V0JywgJ2xvYWRlbmQnLFxuICAgICAgICAncmVhZHlzdGF0ZWNoYW5nZSdcbiAgICBdO1xuICAgIHZhciBJREJJbmRleEV2ZW50TmFtZXMgPSBbJ3VwZ3JhZGVuZWVkZWQnLCAnY29tcGxldGUnLCAnYWJvcnQnLCAnc3VjY2VzcycsICdlcnJvcicsICdibG9ja2VkJywgJ3ZlcnNpb25jaGFuZ2UnLCAnY2xvc2UnXTtcbiAgICB2YXIgd2Vic29ja2V0RXZlbnROYW1lcyA9IFsnY2xvc2UnLCAnZXJyb3InLCAnb3BlbicsICdtZXNzYWdlJ107XG4gICAgdmFyIHdvcmtlckV2ZW50TmFtZXMgPSBbJ2Vycm9yJywgJ21lc3NhZ2UnXTtcbiAgICB2YXIgZXZlbnROYW1lcyA9IGdsb2JhbEV2ZW50SGFuZGxlcnNFdmVudE5hbWVzLmNvbmNhdCh3ZWJnbEV2ZW50TmFtZXMsIGZvcm1FdmVudE5hbWVzLCBkZXRhaWxFdmVudE5hbWVzLCBkb2N1bWVudEV2ZW50TmFtZXMsIHdpbmRvd0V2ZW50TmFtZXMsIGh0bWxFbGVtZW50RXZlbnROYW1lcywgaWVFbGVtZW50RXZlbnROYW1lcyk7XG4gICAgZnVuY3Rpb24gZmlsdGVyUHJvcGVydGllcyh0YXJnZXQsIG9uUHJvcGVydGllcywgaWdub3JlUHJvcGVydGllcykge1xuICAgICAgICBpZiAoIWlnbm9yZVByb3BlcnRpZXMgfHwgaWdub3JlUHJvcGVydGllcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBvblByb3BlcnRpZXM7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRpcCA9IGlnbm9yZVByb3BlcnRpZXMuZmlsdGVyKGZ1bmN0aW9uIChpcCkgeyByZXR1cm4gaXAudGFyZ2V0ID09PSB0YXJnZXQ7IH0pO1xuICAgICAgICBpZiAoIXRpcCB8fCB0aXAubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gb25Qcm9wZXJ0aWVzO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0YXJnZXRJZ25vcmVQcm9wZXJ0aWVzID0gdGlwWzBdLmlnbm9yZVByb3BlcnRpZXM7XG4gICAgICAgIHJldHVybiBvblByb3BlcnRpZXMuZmlsdGVyKGZ1bmN0aW9uIChvcCkgeyByZXR1cm4gdGFyZ2V0SWdub3JlUHJvcGVydGllcy5pbmRleE9mKG9wKSA9PT0gLTE7IH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwYXRjaEZpbHRlcmVkUHJvcGVydGllcyh0YXJnZXQsIG9uUHJvcGVydGllcywgaWdub3JlUHJvcGVydGllcywgcHJvdG90eXBlKSB7XG4gICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgdGFyZ2V0IGlzIGF2YWlsYWJsZSwgc29tZXRpbWVzIHRhcmdldCB3aWxsIGJlIHVuZGVmaW5lZFxuICAgICAgICAvLyBiZWNhdXNlIGRpZmZlcmVudCBicm93c2VyIG9yIHNvbWUgM3JkIHBhcnR5IHBsdWdpbi5cbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZmlsdGVyZWRQcm9wZXJ0aWVzID0gZmlsdGVyUHJvcGVydGllcyh0YXJnZXQsIG9uUHJvcGVydGllcywgaWdub3JlUHJvcGVydGllcyk7XG4gICAgICAgIHBhdGNoT25Qcm9wZXJ0aWVzKHRhcmdldCwgZmlsdGVyZWRQcm9wZXJ0aWVzLCBwcm90b3R5cGUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwcm9wZXJ0eURlc2NyaXB0b3JQYXRjaChhcGksIF9nbG9iYWwpIHtcbiAgICAgICAgaWYgKGlzTm9kZSAmJiAhaXNNaXgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoWm9uZVthcGkuc3ltYm9sKCdwYXRjaEV2ZW50cycpXSkge1xuICAgICAgICAgICAgLy8gZXZlbnRzIGFyZSBhbHJlYWR5IGJlZW4gcGF0Y2hlZCBieSBsZWdhY3kgcGF0Y2guXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN1cHBvcnRzV2ViU29ja2V0ID0gdHlwZW9mIFdlYlNvY2tldCAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgICAgIHZhciBpZ25vcmVQcm9wZXJ0aWVzID0gX2dsb2JhbFsnX19ab25lX2lnbm9yZV9vbl9wcm9wZXJ0aWVzJ107XG4gICAgICAgIC8vIGZvciBicm93c2VycyB0aGF0IHdlIGNhbiBwYXRjaCB0aGUgZGVzY3JpcHRvcjogIENocm9tZSAmIEZpcmVmb3hcbiAgICAgICAgaWYgKGlzQnJvd3Nlcikge1xuICAgICAgICAgICAgdmFyIGludGVybmFsV2luZG93XzEgPSB3aW5kb3c7XG4gICAgICAgICAgICB2YXIgaWdub3JlRXJyb3JQcm9wZXJ0aWVzID0gaXNJRSgpID8gW3sgdGFyZ2V0OiBpbnRlcm5hbFdpbmRvd18xLCBpZ25vcmVQcm9wZXJ0aWVzOiBbJ2Vycm9yJ10gfV0gOiBbXTtcbiAgICAgICAgICAgIC8vIGluIElFL0VkZ2UsIG9uUHJvcCBub3QgZXhpc3QgaW4gd2luZG93IG9iamVjdCwgYnV0IGluIFdpbmRvd1Byb3RvdHlwZVxuICAgICAgICAgICAgLy8gc28gd2UgbmVlZCB0byBwYXNzIFdpbmRvd1Byb3RvdHlwZSB0byBjaGVjayBvblByb3AgZXhpc3Qgb3Igbm90XG4gICAgICAgICAgICBwYXRjaEZpbHRlcmVkUHJvcGVydGllcyhpbnRlcm5hbFdpbmRvd18xLCBldmVudE5hbWVzLmNvbmNhdChbJ21lc3NhZ2VlcnJvciddKSwgaWdub3JlUHJvcGVydGllcyA/IGlnbm9yZVByb3BlcnRpZXMuY29uY2F0KGlnbm9yZUVycm9yUHJvcGVydGllcykgOiBpZ25vcmVQcm9wZXJ0aWVzLCBPYmplY3RHZXRQcm90b3R5cGVPZihpbnRlcm5hbFdpbmRvd18xKSk7XG4gICAgICAgICAgICBwYXRjaEZpbHRlcmVkUHJvcGVydGllcyhEb2N1bWVudC5wcm90b3R5cGUsIGV2ZW50TmFtZXMsIGlnbm9yZVByb3BlcnRpZXMpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBpbnRlcm5hbFdpbmRvd18xWydTVkdFbGVtZW50J10gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcGF0Y2hGaWx0ZXJlZFByb3BlcnRpZXMoaW50ZXJuYWxXaW5kb3dfMVsnU1ZHRWxlbWVudCddLnByb3RvdHlwZSwgZXZlbnROYW1lcywgaWdub3JlUHJvcGVydGllcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXRjaEZpbHRlcmVkUHJvcGVydGllcyhFbGVtZW50LnByb3RvdHlwZSwgZXZlbnROYW1lcywgaWdub3JlUHJvcGVydGllcyk7XG4gICAgICAgICAgICBwYXRjaEZpbHRlcmVkUHJvcGVydGllcyhIVE1MRWxlbWVudC5wcm90b3R5cGUsIGV2ZW50TmFtZXMsIGlnbm9yZVByb3BlcnRpZXMpO1xuICAgICAgICAgICAgcGF0Y2hGaWx0ZXJlZFByb3BlcnRpZXMoSFRNTE1lZGlhRWxlbWVudC5wcm90b3R5cGUsIG1lZGlhRWxlbWVudEV2ZW50TmFtZXMsIGlnbm9yZVByb3BlcnRpZXMpO1xuICAgICAgICAgICAgcGF0Y2hGaWx0ZXJlZFByb3BlcnRpZXMoSFRNTEZyYW1lU2V0RWxlbWVudC5wcm90b3R5cGUsIHdpbmRvd0V2ZW50TmFtZXMuY29uY2F0KGZyYW1lU2V0RXZlbnROYW1lcyksIGlnbm9yZVByb3BlcnRpZXMpO1xuICAgICAgICAgICAgcGF0Y2hGaWx0ZXJlZFByb3BlcnRpZXMoSFRNTEJvZHlFbGVtZW50LnByb3RvdHlwZSwgd2luZG93RXZlbnROYW1lcy5jb25jYXQoZnJhbWVTZXRFdmVudE5hbWVzKSwgaWdub3JlUHJvcGVydGllcyk7XG4gICAgICAgICAgICBwYXRjaEZpbHRlcmVkUHJvcGVydGllcyhIVE1MRnJhbWVFbGVtZW50LnByb3RvdHlwZSwgZnJhbWVFdmVudE5hbWVzLCBpZ25vcmVQcm9wZXJ0aWVzKTtcbiAgICAgICAgICAgIHBhdGNoRmlsdGVyZWRQcm9wZXJ0aWVzKEhUTUxJRnJhbWVFbGVtZW50LnByb3RvdHlwZSwgZnJhbWVFdmVudE5hbWVzLCBpZ25vcmVQcm9wZXJ0aWVzKTtcbiAgICAgICAgICAgIHZhciBIVE1MTWFycXVlZUVsZW1lbnRfMSA9IGludGVybmFsV2luZG93XzFbJ0hUTUxNYXJxdWVlRWxlbWVudCddO1xuICAgICAgICAgICAgaWYgKEhUTUxNYXJxdWVlRWxlbWVudF8xKSB7XG4gICAgICAgICAgICAgICAgcGF0Y2hGaWx0ZXJlZFByb3BlcnRpZXMoSFRNTE1hcnF1ZWVFbGVtZW50XzEucHJvdG90eXBlLCBtYXJxdWVlRXZlbnROYW1lcywgaWdub3JlUHJvcGVydGllcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgV29ya2VyXzEgPSBpbnRlcm5hbFdpbmRvd18xWydXb3JrZXInXTtcbiAgICAgICAgICAgIGlmIChXb3JrZXJfMSkge1xuICAgICAgICAgICAgICAgIHBhdGNoRmlsdGVyZWRQcm9wZXJ0aWVzKFdvcmtlcl8xLnByb3RvdHlwZSwgd29ya2VyRXZlbnROYW1lcywgaWdub3JlUHJvcGVydGllcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIFhNTEh0dHBSZXF1ZXN0ID0gX2dsb2JhbFsnWE1MSHR0cFJlcXVlc3QnXTtcbiAgICAgICAgaWYgKFhNTEh0dHBSZXF1ZXN0KSB7XG4gICAgICAgICAgICAvLyBYTUxIdHRwUmVxdWVzdCBpcyBub3QgYXZhaWxhYmxlIGluIFNlcnZpY2VXb3JrZXIsIHNvIHdlIG5lZWQgdG8gY2hlY2sgaGVyZVxuICAgICAgICAgICAgcGF0Y2hGaWx0ZXJlZFByb3BlcnRpZXMoWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLCBYTUxIdHRwUmVxdWVzdEV2ZW50TmFtZXMsIGlnbm9yZVByb3BlcnRpZXMpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0ID0gX2dsb2JhbFsnWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCddO1xuICAgICAgICBpZiAoWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCkge1xuICAgICAgICAgICAgcGF0Y2hGaWx0ZXJlZFByb3BlcnRpZXMoWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCAmJiBYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0LnByb3RvdHlwZSwgWE1MSHR0cFJlcXVlc3RFdmVudE5hbWVzLCBpZ25vcmVQcm9wZXJ0aWVzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIElEQkluZGV4ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcGF0Y2hGaWx0ZXJlZFByb3BlcnRpZXMoSURCSW5kZXgucHJvdG90eXBlLCBJREJJbmRleEV2ZW50TmFtZXMsIGlnbm9yZVByb3BlcnRpZXMpO1xuICAgICAgICAgICAgcGF0Y2hGaWx0ZXJlZFByb3BlcnRpZXMoSURCUmVxdWVzdC5wcm90b3R5cGUsIElEQkluZGV4RXZlbnROYW1lcywgaWdub3JlUHJvcGVydGllcyk7XG4gICAgICAgICAgICBwYXRjaEZpbHRlcmVkUHJvcGVydGllcyhJREJPcGVuREJSZXF1ZXN0LnByb3RvdHlwZSwgSURCSW5kZXhFdmVudE5hbWVzLCBpZ25vcmVQcm9wZXJ0aWVzKTtcbiAgICAgICAgICAgIHBhdGNoRmlsdGVyZWRQcm9wZXJ0aWVzKElEQkRhdGFiYXNlLnByb3RvdHlwZSwgSURCSW5kZXhFdmVudE5hbWVzLCBpZ25vcmVQcm9wZXJ0aWVzKTtcbiAgICAgICAgICAgIHBhdGNoRmlsdGVyZWRQcm9wZXJ0aWVzKElEQlRyYW5zYWN0aW9uLnByb3RvdHlwZSwgSURCSW5kZXhFdmVudE5hbWVzLCBpZ25vcmVQcm9wZXJ0aWVzKTtcbiAgICAgICAgICAgIHBhdGNoRmlsdGVyZWRQcm9wZXJ0aWVzKElEQkN1cnNvci5wcm90b3R5cGUsIElEQkluZGV4RXZlbnROYW1lcywgaWdub3JlUHJvcGVydGllcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN1cHBvcnRzV2ViU29ja2V0KSB7XG4gICAgICAgICAgICBwYXRjaEZpbHRlcmVkUHJvcGVydGllcyhXZWJTb2NrZXQucHJvdG90eXBlLCB3ZWJzb2NrZXRFdmVudE5hbWVzLCBpZ25vcmVQcm9wZXJ0aWVzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICBab25lLl9fbG9hZF9wYXRjaCgndXRpbCcsIGZ1bmN0aW9uIChnbG9iYWwsIFpvbmUsIGFwaSkge1xuICAgICAgICBhcGkucGF0Y2hPblByb3BlcnRpZXMgPSBwYXRjaE9uUHJvcGVydGllcztcbiAgICAgICAgYXBpLnBhdGNoTWV0aG9kID0gcGF0Y2hNZXRob2Q7XG4gICAgICAgIGFwaS5iaW5kQXJndW1lbnRzID0gYmluZEFyZ3VtZW50cztcbiAgICAgICAgYXBpLnBhdGNoTWFjcm9UYXNrID0gcGF0Y2hNYWNyb1Rhc2s7XG4gICAgICAgIC8vIEluIGVhcmxpZXIgdmVyc2lvbiBvZiB6b25lLmpzICg8MC45LjApLCB3ZSB1c2UgZW52IG5hbWUgYF9fem9uZV9zeW1ib2xfX0JMQUNLX0xJU1RFRF9FVkVOVFNgIHRvXG4gICAgICAgIC8vIGRlZmluZSB3aGljaCBldmVudHMgd2lsbCBub3QgYmUgcGF0Y2hlZCBieSBgWm9uZS5qc2AuXG4gICAgICAgIC8vIEluIG5ld2VyIHZlcnNpb24gKD49MC45LjApLCB3ZSBjaGFuZ2UgdGhlIGVudiBuYW1lIHRvIGBfX3pvbmVfc3ltYm9sX19VTlBBVENIRURfRVZFTlRTYCB0byBrZWVwXG4gICAgICAgIC8vIHRoZSBuYW1lIGNvbnNpc3RlbnQgd2l0aCBhbmd1bGFyIHJlcG8uXG4gICAgICAgIC8vIFRoZSAgYF9fem9uZV9zeW1ib2xfX0JMQUNLX0xJU1RFRF9FVkVOVFNgIGlzIGRlcHJlY2F0ZWQsIGJ1dCBpdCBpcyBzdGlsbCBiZSBzdXBwb3J0ZWQgZm9yXG4gICAgICAgIC8vIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuICAgICAgICB2YXIgU1lNQk9MX0JMQUNLX0xJU1RFRF9FVkVOVFMgPSBab25lLl9fc3ltYm9sX18oJ0JMQUNLX0xJU1RFRF9FVkVOVFMnKTtcbiAgICAgICAgdmFyIFNZTUJPTF9VTlBBVENIRURfRVZFTlRTID0gWm9uZS5fX3N5bWJvbF9fKCdVTlBBVENIRURfRVZFTlRTJyk7XG4gICAgICAgIGlmIChnbG9iYWxbU1lNQk9MX1VOUEFUQ0hFRF9FVkVOVFNdKSB7XG4gICAgICAgICAgICBnbG9iYWxbU1lNQk9MX0JMQUNLX0xJU1RFRF9FVkVOVFNdID0gZ2xvYmFsW1NZTUJPTF9VTlBBVENIRURfRVZFTlRTXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2xvYmFsW1NZTUJPTF9CTEFDS19MSVNURURfRVZFTlRTXSkge1xuICAgICAgICAgICAgWm9uZVtTWU1CT0xfQkxBQ0tfTElTVEVEX0VWRU5UU10gPSBab25lW1NZTUJPTF9VTlBBVENIRURfRVZFTlRTXSA9XG4gICAgICAgICAgICAgICAgZ2xvYmFsW1NZTUJPTF9CTEFDS19MSVNURURfRVZFTlRTXTtcbiAgICAgICAgfVxuICAgICAgICBhcGkucGF0Y2hFdmVudFByb3RvdHlwZSA9IHBhdGNoRXZlbnRQcm90b3R5cGU7XG4gICAgICAgIGFwaS5wYXRjaEV2ZW50VGFyZ2V0ID0gcGF0Y2hFdmVudFRhcmdldDtcbiAgICAgICAgYXBpLmlzSUVPckVkZ2UgPSBpc0lFT3JFZGdlO1xuICAgICAgICBhcGkuT2JqZWN0RGVmaW5lUHJvcGVydHkgPSBPYmplY3REZWZpbmVQcm9wZXJ0eTtcbiAgICAgICAgYXBpLk9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgICAgICAgYXBpLk9iamVjdENyZWF0ZSA9IE9iamVjdENyZWF0ZTtcbiAgICAgICAgYXBpLkFycmF5U2xpY2UgPSBBcnJheVNsaWNlO1xuICAgICAgICBhcGkucGF0Y2hDbGFzcyA9IHBhdGNoQ2xhc3M7XG4gICAgICAgIGFwaS53cmFwV2l0aEN1cnJlbnRab25lID0gd3JhcFdpdGhDdXJyZW50Wm9uZTtcbiAgICAgICAgYXBpLmZpbHRlclByb3BlcnRpZXMgPSBmaWx0ZXJQcm9wZXJ0aWVzO1xuICAgICAgICBhcGkuYXR0YWNoT3JpZ2luVG9QYXRjaGVkID0gYXR0YWNoT3JpZ2luVG9QYXRjaGVkO1xuICAgICAgICBhcGkuX3JlZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG4gICAgICAgIGFwaS5wYXRjaENhbGxiYWNrcyA9IHBhdGNoQ2FsbGJhY2tzO1xuICAgICAgICBhcGkuZ2V0R2xvYmFsT2JqZWN0cyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7XG4gICAgICAgICAgICBnbG9iYWxTb3VyY2VzOiBnbG9iYWxTb3VyY2VzLFxuICAgICAgICAgICAgem9uZVN5bWJvbEV2ZW50TmFtZXM6IHpvbmVTeW1ib2xFdmVudE5hbWVzJDEsXG4gICAgICAgICAgICBldmVudE5hbWVzOiBldmVudE5hbWVzLFxuICAgICAgICAgICAgaXNCcm93c2VyOiBpc0Jyb3dzZXIsXG4gICAgICAgICAgICBpc01peDogaXNNaXgsXG4gICAgICAgICAgICBpc05vZGU6IGlzTm9kZSxcbiAgICAgICAgICAgIFRSVUVfU1RSOiBUUlVFX1NUUixcbiAgICAgICAgICAgIEZBTFNFX1NUUjogRkFMU0VfU1RSLFxuICAgICAgICAgICAgWk9ORV9TWU1CT0xfUFJFRklYOiBaT05FX1NZTUJPTF9QUkVGSVgsXG4gICAgICAgICAgICBBRERfRVZFTlRfTElTVEVORVJfU1RSOiBBRERfRVZFTlRfTElTVEVORVJfU1RSLFxuICAgICAgICAgICAgUkVNT1ZFX0VWRU5UX0xJU1RFTkVSX1NUUjogUkVNT1ZFX0VWRU5UX0xJU1RFTkVSX1NUUlxuICAgICAgICB9KTsgfTtcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICAvKlxuICAgICAqIFRoaXMgaXMgbmVjZXNzYXJ5IGZvciBDaHJvbWUgYW5kIENocm9tZSBtb2JpbGUsIHRvIGVuYWJsZVxuICAgICAqIHRoaW5ncyBsaWtlIHJlZGVmaW5pbmcgYGNyZWF0ZWRDYWxsYmFja2Agb24gYW4gZWxlbWVudC5cbiAgICAgKi9cbiAgICB2YXIgem9uZVN5bWJvbCQxO1xuICAgIHZhciBfZGVmaW5lUHJvcGVydHk7XG4gICAgdmFyIF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICAgdmFyIF9jcmVhdGU7XG4gICAgdmFyIHVuY29uZmlndXJhYmxlc0tleTtcbiAgICBmdW5jdGlvbiBwcm9wZXJ0eVBhdGNoKCkge1xuICAgICAgICB6b25lU3ltYm9sJDEgPSBab25lLl9fc3ltYm9sX187XG4gICAgICAgIF9kZWZpbmVQcm9wZXJ0eSA9IE9iamVjdFt6b25lU3ltYm9sJDEoJ2RlZmluZVByb3BlcnR5JyldID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuICAgICAgICBfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0W3pvbmVTeW1ib2wkMSgnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJyldID1cbiAgICAgICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICAgICAgIF9jcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xuICAgICAgICB1bmNvbmZpZ3VyYWJsZXNLZXkgPSB6b25lU3ltYm9sJDEoJ3VuY29uZmlndXJhYmxlcycpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiAob2JqLCBwcm9wLCBkZXNjKSB7XG4gICAgICAgICAgICBpZiAoaXNVbmNvbmZpZ3VyYWJsZShvYmosIHByb3ApKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGFzc2lnbiB0byByZWFkIG9ubHkgcHJvcGVydHkgXFwnJyArIHByb3AgKyAnXFwnIG9mICcgKyBvYmopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG9yaWdpbmFsQ29uZmlndXJhYmxlRmxhZyA9IGRlc2MuY29uZmlndXJhYmxlO1xuICAgICAgICAgICAgaWYgKHByb3AgIT09ICdwcm90b3R5cGUnKSB7XG4gICAgICAgICAgICAgICAgZGVzYyA9IHJld3JpdGVEZXNjcmlwdG9yKG9iaiwgcHJvcCwgZGVzYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gX3RyeURlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgZGVzYywgb3JpZ2luYWxDb25maWd1cmFibGVGbGFnKTtcbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiAob2JqLCBwcm9wcykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCBwcm9wc1twcm9wXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH07XG4gICAgICAgIE9iamVjdC5jcmVhdGUgPSBmdW5jdGlvbiAob2JqLCBwcm90bykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBwcm90byA9PT0gJ29iamVjdCcgJiYgIU9iamVjdC5pc0Zyb3plbihwcm90bykpIHtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhwcm90bykuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICAgICAgICAgICAgICBwcm90b1twcm9wXSA9IHJld3JpdGVEZXNjcmlwdG9yKG9iaiwgcHJvcCwgcHJvdG9bcHJvcF0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIF9jcmVhdGUob2JqLCBwcm90byk7XG4gICAgICAgIH07XG4gICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiAob2JqLCBwcm9wKSB7XG4gICAgICAgICAgICB2YXIgZGVzYyA9IF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBwcm9wKTtcbiAgICAgICAgICAgIGlmIChkZXNjICYmIGlzVW5jb25maWd1cmFibGUob2JqLCBwcm9wKSkge1xuICAgICAgICAgICAgICAgIGRlc2MuY29uZmlndXJhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGVzYztcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gX3JlZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCBkZXNjKSB7XG4gICAgICAgIHZhciBvcmlnaW5hbENvbmZpZ3VyYWJsZUZsYWcgPSBkZXNjLmNvbmZpZ3VyYWJsZTtcbiAgICAgICAgZGVzYyA9IHJld3JpdGVEZXNjcmlwdG9yKG9iaiwgcHJvcCwgZGVzYyk7XG4gICAgICAgIHJldHVybiBfdHJ5RGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCBkZXNjLCBvcmlnaW5hbENvbmZpZ3VyYWJsZUZsYWcpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc1VuY29uZmlndXJhYmxlKG9iaiwgcHJvcCkge1xuICAgICAgICByZXR1cm4gb2JqICYmIG9ialt1bmNvbmZpZ3VyYWJsZXNLZXldICYmIG9ialt1bmNvbmZpZ3VyYWJsZXNLZXldW3Byb3BdO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXdyaXRlRGVzY3JpcHRvcihvYmosIHByb3AsIGRlc2MpIHtcbiAgICAgICAgLy8gaXNzdWUtOTI3LCBpZiB0aGUgZGVzYyBpcyBmcm96ZW4sIGRvbid0IHRyeSB0byBjaGFuZ2UgdGhlIGRlc2NcbiAgICAgICAgaWYgKCFPYmplY3QuaXNGcm96ZW4oZGVzYykpIHtcbiAgICAgICAgICAgIGRlc2MuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWRlc2MuY29uZmlndXJhYmxlKSB7XG4gICAgICAgICAgICAvLyBpc3N1ZS05MjcsIGlmIHRoZSBvYmogaXMgZnJvemVuLCBkb24ndCB0cnkgdG8gc2V0IHRoZSBkZXNjIHRvIG9ialxuICAgICAgICAgICAgaWYgKCFvYmpbdW5jb25maWd1cmFibGVzS2V5XSAmJiAhT2JqZWN0LmlzRnJvemVuKG9iaikpIHtcbiAgICAgICAgICAgICAgICBfZGVmaW5lUHJvcGVydHkob2JqLCB1bmNvbmZpZ3VyYWJsZXNLZXksIHsgd3JpdGFibGU6IHRydWUsIHZhbHVlOiB7fSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvYmpbdW5jb25maWd1cmFibGVzS2V5XSkge1xuICAgICAgICAgICAgICAgIG9ialt1bmNvbmZpZ3VyYWJsZXNLZXldW3Byb3BdID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVzYztcbiAgICB9XG4gICAgZnVuY3Rpb24gX3RyeURlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgZGVzYywgb3JpZ2luYWxDb25maWd1cmFibGVGbGFnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gX2RlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgZGVzYyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZGVzYy5jb25maWd1cmFibGUpIHtcbiAgICAgICAgICAgICAgICAvLyBJbiBjYXNlIG9mIGVycm9ycywgd2hlbiB0aGUgY29uZmlndXJhYmxlIGZsYWcgd2FzIGxpa2VseSBzZXQgYnkgcmV3cml0ZURlc2NyaXB0b3IoKSwgbGV0J3NcbiAgICAgICAgICAgICAgICAvLyByZXRyeSB3aXRoIHRoZSBvcmlnaW5hbCBmbGFnIHZhbHVlXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvcmlnaW5hbENvbmZpZ3VyYWJsZUZsYWcgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGRlc2MuY29uZmlndXJhYmxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGVzYy5jb25maWd1cmFibGUgPSBvcmlnaW5hbENvbmZpZ3VyYWJsZUZsYWc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wLCBkZXNjKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzd2FsbG93RXJyb3IgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3AgPT09ICdjcmVhdGVkQ2FsbGJhY2snIHx8IHByb3AgPT09ICdhdHRhY2hlZENhbGxiYWNrJyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcCA9PT0gJ2RldGFjaGVkQ2FsbGJhY2snIHx8IHByb3AgPT09ICdhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2snKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBvbmx5IHN3YWxsb3cgdGhlIGVycm9yIGluIHJlZ2lzdGVyRWxlbWVudCBwYXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBpcyB0aGUgd29yayBhcm91bmQgc2luY2Ugc29tZSBhcHBsaWNhdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZhaWwgaWYgd2UgdGhyb3cgdGhlIGVycm9yXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2FsbG93RXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghc3dhbGxvd0Vycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBASmlhTGlQYXNzaW9uLCBTb21lIGFwcGxpY2F0aW9uIHN1Y2ggYXMgYHJlZ2lzdGVyRWxlbWVudGAgcGF0Y2hcbiAgICAgICAgICAgICAgICAgICAgLy8gc3RpbGwgbmVlZCB0byBzd2FsbG93IHRoZSBlcnJvciwgaW4gdGhlIGZ1dHVyZSBhZnRlciB0aGVzZSBhcHBsaWNhdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgLy8gYXJlIHVwZGF0ZWQsIHRoZSBmb2xsb3dpbmcgbG9naWMgY2FuIGJlIHJlbW92ZWQuXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZXNjSnNvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjSnNvbiA9IEpTT04uc3RyaW5naWZ5KGRlc2MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY0pzb24gPSBkZXNjLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBdHRlbXB0aW5nIHRvIGNvbmZpZ3VyZSAnXCIgKyBwcm9wICsgXCInIHdpdGggZGVzY3JpcHRvciAnXCIgKyBkZXNjSnNvbiArIFwiJyBvbiBvYmplY3QgJ1wiICsgb2JqICsgXCInIGFuZCBnb3QgZXJyb3IsIGdpdmluZyB1cDogXCIgKyBlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgZnVuY3Rpb24gZXZlbnRUYXJnZXRMZWdhY3lQYXRjaChfZ2xvYmFsLCBhcGkpIHtcbiAgICAgICAgdmFyIF9hID0gYXBpLmdldEdsb2JhbE9iamVjdHMoKSwgZXZlbnROYW1lcyA9IF9hLmV2ZW50TmFtZXMsIGdsb2JhbFNvdXJjZXMgPSBfYS5nbG9iYWxTb3VyY2VzLCB6b25lU3ltYm9sRXZlbnROYW1lcyA9IF9hLnpvbmVTeW1ib2xFdmVudE5hbWVzLCBUUlVFX1NUUiA9IF9hLlRSVUVfU1RSLCBGQUxTRV9TVFIgPSBfYS5GQUxTRV9TVFIsIFpPTkVfU1lNQk9MX1BSRUZJWCA9IF9hLlpPTkVfU1lNQk9MX1BSRUZJWDtcbiAgICAgICAgdmFyIFdURl9JU1NVRV81NTUgPSAnQW5jaG9yLEFyZWEsQXVkaW8sQlIsQmFzZSxCYXNlRm9udCxCb2R5LEJ1dHRvbixDYW52YXMsQ29udGVudCxETGlzdCxEaXJlY3RvcnksRGl2LEVtYmVkLEZpZWxkU2V0LEZvbnQsRm9ybSxGcmFtZSxGcmFtZVNldCxIUixIZWFkLEhlYWRpbmcsSHRtbCxJRnJhbWUsSW1hZ2UsSW5wdXQsS2V5Z2VuLExJLExhYmVsLExlZ2VuZCxMaW5rLE1hcCxNYXJxdWVlLE1lZGlhLE1lbnUsTWV0YSxNZXRlcixNb2QsT0xpc3QsT2JqZWN0LE9wdEdyb3VwLE9wdGlvbixPdXRwdXQsUGFyYWdyYXBoLFByZSxQcm9ncmVzcyxRdW90ZSxTY3JpcHQsU2VsZWN0LFNvdXJjZSxTcGFuLFN0eWxlLFRhYmxlQ2FwdGlvbixUYWJsZUNlbGwsVGFibGVDb2wsVGFibGUsVGFibGVSb3csVGFibGVTZWN0aW9uLFRleHRBcmVhLFRpdGxlLFRyYWNrLFVMaXN0LFVua25vd24sVmlkZW8nO1xuICAgICAgICB2YXIgTk9fRVZFTlRfVEFSR0VUID0gJ0FwcGxpY2F0aW9uQ2FjaGUsRXZlbnRTb3VyY2UsRmlsZVJlYWRlcixJbnB1dE1ldGhvZENvbnRleHQsTWVkaWFDb250cm9sbGVyLE1lc3NhZ2VQb3J0LE5vZGUsUGVyZm9ybWFuY2UsU1ZHRWxlbWVudEluc3RhbmNlLFNoYXJlZFdvcmtlcixUZXh0VHJhY2ssVGV4dFRyYWNrQ3VlLFRleHRUcmFja0xpc3QsV2ViS2l0TmFtZWRGbG93LFdpbmRvdyxXb3JrZXIsV29ya2VyR2xvYmFsU2NvcGUsWE1MSHR0cFJlcXVlc3QsWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldCxYTUxIdHRwUmVxdWVzdFVwbG9hZCxJREJSZXF1ZXN0LElEQk9wZW5EQlJlcXVlc3QsSURCRGF0YWJhc2UsSURCVHJhbnNhY3Rpb24sSURCQ3Vyc29yLERCSW5kZXgsV2ViU29ja2V0J1xuICAgICAgICAgICAgLnNwbGl0KCcsJyk7XG4gICAgICAgIHZhciBFVkVOVF9UQVJHRVQgPSAnRXZlbnRUYXJnZXQnO1xuICAgICAgICB2YXIgYXBpcyA9IFtdO1xuICAgICAgICB2YXIgaXNXdGYgPSBfZ2xvYmFsWyd3dGYnXTtcbiAgICAgICAgdmFyIFdURl9JU1NVRV81NTVfQVJSQVkgPSBXVEZfSVNTVUVfNTU1LnNwbGl0KCcsJyk7XG4gICAgICAgIGlmIChpc1d0Zikge1xuICAgICAgICAgICAgLy8gV29ya2Fyb3VuZCBmb3I6IGh0dHBzOi8vZ2l0aHViLmNvbS9nb29nbGUvdHJhY2luZy1mcmFtZXdvcmsvaXNzdWVzLzU1NVxuICAgICAgICAgICAgYXBpcyA9IFdURl9JU1NVRV81NTVfQVJSQVkubWFwKGZ1bmN0aW9uICh2KSB7IHJldHVybiAnSFRNTCcgKyB2ICsgJ0VsZW1lbnQnOyB9KS5jb25jYXQoTk9fRVZFTlRfVEFSR0VUKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChfZ2xvYmFsW0VWRU5UX1RBUkdFVF0pIHtcbiAgICAgICAgICAgIGFwaXMucHVzaChFVkVOVF9UQVJHRVQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gTm90ZTogRXZlbnRUYXJnZXQgaXMgbm90IGF2YWlsYWJsZSBpbiBhbGwgYnJvd3NlcnMsXG4gICAgICAgICAgICAvLyBpZiBpdCdzIG5vdCBhdmFpbGFibGUsIHdlIGluc3RlYWQgcGF0Y2ggdGhlIEFQSXMgaW4gdGhlIElETCB0aGF0IGluaGVyaXQgZnJvbSBFdmVudFRhcmdldFxuICAgICAgICAgICAgYXBpcyA9IE5PX0VWRU5UX1RBUkdFVDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaXNEaXNhYmxlSUVDaGVjayA9IF9nbG9iYWxbJ19fWm9uZV9kaXNhYmxlX0lFX2NoZWNrJ10gfHwgZmFsc2U7XG4gICAgICAgIHZhciBpc0VuYWJsZUNyb3NzQ29udGV4dENoZWNrID0gX2dsb2JhbFsnX19ab25lX2VuYWJsZV9jcm9zc19jb250ZXh0X2NoZWNrJ10gfHwgZmFsc2U7XG4gICAgICAgIHZhciBpZU9yRWRnZSA9IGFwaS5pc0lFT3JFZGdlKCk7XG4gICAgICAgIHZhciBBRERfRVZFTlRfTElTVEVORVJfU09VUkNFID0gJy5hZGRFdmVudExpc3RlbmVyOic7XG4gICAgICAgIHZhciBGVU5DVElPTl9XUkFQUEVSID0gJ1tvYmplY3QgRnVuY3Rpb25XcmFwcGVyXSc7XG4gICAgICAgIHZhciBCUk9XU0VSX1RPT0xTID0gJ2Z1bmN0aW9uIF9fQlJPV1NFUlRPT0xTX0NPTlNPTEVfU0FGRUZVTkMoKSB7IFtuYXRpdmUgY29kZV0gfSc7XG4gICAgICAgIHZhciBwb2ludGVyRXZlbnRzTWFwID0ge1xuICAgICAgICAgICAgJ01TUG9pbnRlckNhbmNlbCc6ICdwb2ludGVyY2FuY2VsJyxcbiAgICAgICAgICAgICdNU1BvaW50ZXJEb3duJzogJ3BvaW50ZXJkb3duJyxcbiAgICAgICAgICAgICdNU1BvaW50ZXJFbnRlcic6ICdwb2ludGVyZW50ZXInLFxuICAgICAgICAgICAgJ01TUG9pbnRlckhvdmVyJzogJ3BvaW50ZXJob3ZlcicsXG4gICAgICAgICAgICAnTVNQb2ludGVyTGVhdmUnOiAncG9pbnRlcmxlYXZlJyxcbiAgICAgICAgICAgICdNU1BvaW50ZXJNb3ZlJzogJ3BvaW50ZXJtb3ZlJyxcbiAgICAgICAgICAgICdNU1BvaW50ZXJPdXQnOiAncG9pbnRlcm91dCcsXG4gICAgICAgICAgICAnTVNQb2ludGVyT3Zlcic6ICdwb2ludGVyb3ZlcicsXG4gICAgICAgICAgICAnTVNQb2ludGVyVXAnOiAncG9pbnRlcnVwJ1xuICAgICAgICB9O1xuICAgICAgICAvLyAgcHJlZGVmaW5lIGFsbCBfX3pvbmVfc3ltYm9sX18gKyBldmVudE5hbWUgKyB0cnVlL2ZhbHNlIHN0cmluZ1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50TmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBldmVudE5hbWUgPSBldmVudE5hbWVzW2ldO1xuICAgICAgICAgICAgdmFyIGZhbHNlRXZlbnROYW1lID0gZXZlbnROYW1lICsgRkFMU0VfU1RSO1xuICAgICAgICAgICAgdmFyIHRydWVFdmVudE5hbWUgPSBldmVudE5hbWUgKyBUUlVFX1NUUjtcbiAgICAgICAgICAgIHZhciBzeW1ib2wgPSBaT05FX1NZTUJPTF9QUkVGSVggKyBmYWxzZUV2ZW50TmFtZTtcbiAgICAgICAgICAgIHZhciBzeW1ib2xDYXB0dXJlID0gWk9ORV9TWU1CT0xfUFJFRklYICsgdHJ1ZUV2ZW50TmFtZTtcbiAgICAgICAgICAgIHpvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50TmFtZV0gPSB7fTtcbiAgICAgICAgICAgIHpvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50TmFtZV1bRkFMU0VfU1RSXSA9IHN5bWJvbDtcbiAgICAgICAgICAgIHpvbmVTeW1ib2xFdmVudE5hbWVzW2V2ZW50TmFtZV1bVFJVRV9TVFJdID0gc3ltYm9sQ2FwdHVyZTtcbiAgICAgICAgfVxuICAgICAgICAvLyAgcHJlZGVmaW5lIGFsbCB0YXNrLnNvdXJjZSBzdHJpbmdcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBXVEZfSVNTVUVfNTU1X0FSUkFZLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gV1RGX0lTU1VFXzU1NV9BUlJBWVtpXTtcbiAgICAgICAgICAgIHZhciB0YXJnZXRzID0gZ2xvYmFsU291cmNlc1t0YXJnZXRdID0ge307XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGV2ZW50TmFtZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZXZlbnROYW1lID0gZXZlbnROYW1lc1tqXTtcbiAgICAgICAgICAgICAgICB0YXJnZXRzW2V2ZW50TmFtZV0gPSB0YXJnZXQgKyBBRERfRVZFTlRfTElTVEVORVJfU09VUkNFICsgZXZlbnROYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBjaGVja0lFQW5kQ3Jvc3NDb250ZXh0ID0gZnVuY3Rpb24gKG5hdGl2ZURlbGVnYXRlLCBkZWxlZ2F0ZSwgdGFyZ2V0LCBhcmdzKSB7XG4gICAgICAgICAgICBpZiAoIWlzRGlzYWJsZUlFQ2hlY2sgJiYgaWVPckVkZ2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNFbmFibGVDcm9zc0NvbnRleHRDaGVjaykge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlc3RTdHJpbmcgPSBkZWxlZ2F0ZS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCh0ZXN0U3RyaW5nID09PSBGVU5DVElPTl9XUkFQUEVSIHx8IHRlc3RTdHJpbmcgPT0gQlJPV1NFUl9UT09MUykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXRpdmVEZWxlZ2F0ZS5hcHBseSh0YXJnZXQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZURlbGVnYXRlLmFwcGx5KHRhcmdldCwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZXN0U3RyaW5nID0gZGVsZWdhdGUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCh0ZXN0U3RyaW5nID09PSBGVU5DVElPTl9XUkFQUEVSIHx8IHRlc3RTdHJpbmcgPT0gQlJPV1NFUl9UT09MUykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZURlbGVnYXRlLmFwcGx5KHRhcmdldCwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpc0VuYWJsZUNyb3NzQ29udGV4dENoZWNrKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZWdhdGUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIG5hdGl2ZURlbGVnYXRlLmFwcGx5KHRhcmdldCwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGFwaVR5cGVzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXBpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHR5cGUgPSBfZ2xvYmFsW2FwaXNbaV1dO1xuICAgICAgICAgICAgYXBpVHlwZXMucHVzaCh0eXBlICYmIHR5cGUucHJvdG90eXBlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB2aCBpcyB2YWxpZGF0ZUhhbmRsZXIgdG8gY2hlY2sgZXZlbnQgaGFuZGxlclxuICAgICAgICAvLyBpcyB2YWxpZCBvciBub3QoZm9yIHNlY3VyaXR5IGNoZWNrKVxuICAgICAgICBhcGkucGF0Y2hFdmVudFRhcmdldChfZ2xvYmFsLCBhcGlUeXBlcywge1xuICAgICAgICAgICAgdmg6IGNoZWNrSUVBbmRDcm9zc0NvbnRleHQsXG4gICAgICAgICAgICB0cmFuc2ZlckV2ZW50TmFtZTogZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgICAgIHZhciBwb2ludGVyRXZlbnROYW1lID0gcG9pbnRlckV2ZW50c01hcFtldmVudE5hbWVdO1xuICAgICAgICAgICAgICAgIHJldHVybiBwb2ludGVyRXZlbnROYW1lIHx8IGV2ZW50TmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFpvbmVbYXBpLnN5bWJvbCgncGF0Y2hFdmVudFRhcmdldCcpXSA9ICEhX2dsb2JhbFtFVkVOVF9UQVJHRVRdO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgLy8gd2UgaGF2ZSB0byBwYXRjaCB0aGUgaW5zdGFuY2Ugc2luY2UgdGhlIHByb3RvIGlzIG5vbi1jb25maWd1cmFibGVcbiAgICBmdW5jdGlvbiBhcHBseShhcGksIF9nbG9iYWwpIHtcbiAgICAgICAgdmFyIF9hID0gYXBpLmdldEdsb2JhbE9iamVjdHMoKSwgQUREX0VWRU5UX0xJU1RFTkVSX1NUUiA9IF9hLkFERF9FVkVOVF9MSVNURU5FUl9TVFIsIFJFTU9WRV9FVkVOVF9MSVNURU5FUl9TVFIgPSBfYS5SRU1PVkVfRVZFTlRfTElTVEVORVJfU1RSO1xuICAgICAgICB2YXIgV1MgPSBfZ2xvYmFsLldlYlNvY2tldDtcbiAgICAgICAgLy8gT24gU2FmYXJpIHdpbmRvdy5FdmVudFRhcmdldCBkb2Vzbid0IGV4aXN0IHNvIG5lZWQgdG8gcGF0Y2ggV1MgYWRkL3JlbW92ZUV2ZW50TGlzdGVuZXJcbiAgICAgICAgLy8gT24gb2xkZXIgQ2hyb21lLCBubyBuZWVkIHNpbmNlIEV2ZW50VGFyZ2V0IHdhcyBhbHJlYWR5IHBhdGNoZWRcbiAgICAgICAgaWYgKCFfZ2xvYmFsLkV2ZW50VGFyZ2V0KSB7XG4gICAgICAgICAgICBhcGkucGF0Y2hFdmVudFRhcmdldChfZ2xvYmFsLCBbV1MucHJvdG90eXBlXSk7XG4gICAgICAgIH1cbiAgICAgICAgX2dsb2JhbC5XZWJTb2NrZXQgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICAgICAgdmFyIHNvY2tldCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gbmV3IFdTKHgsIHkpIDogbmV3IFdTKHgpO1xuICAgICAgICAgICAgdmFyIHByb3h5U29ja2V0O1xuICAgICAgICAgICAgdmFyIHByb3h5U29ja2V0UHJvdG87XG4gICAgICAgICAgICAvLyBTYWZhcmkgNy4wIGhhcyBub24tY29uZmlndXJhYmxlIG93biAnb25tZXNzYWdlJyBhbmQgZnJpZW5kcyBwcm9wZXJ0aWVzIG9uIHRoZSBzb2NrZXQgaW5zdGFuY2VcbiAgICAgICAgICAgIHZhciBvbm1lc3NhZ2VEZXNjID0gYXBpLk9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb2NrZXQsICdvbm1lc3NhZ2UnKTtcbiAgICAgICAgICAgIGlmIChvbm1lc3NhZ2VEZXNjICYmIG9ubWVzc2FnZURlc2MuY29uZmlndXJhYmxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHByb3h5U29ja2V0ID0gYXBpLk9iamVjdENyZWF0ZShzb2NrZXQpO1xuICAgICAgICAgICAgICAgIC8vIHNvY2tldCBoYXZlIG93biBwcm9wZXJ0eSBkZXNjcmlwdG9yICdvbm9wZW4nLCAnb25tZXNzYWdlJywgJ29uY2xvc2UnLCAnb25lcnJvcidcbiAgICAgICAgICAgICAgICAvLyBidXQgcHJveHlTb2NrZXQgbm90LCBzbyB3ZSB3aWxsIGtlZXAgc29ja2V0IGFzIHByb3RvdHlwZSBhbmQgcGFzcyBpdCB0b1xuICAgICAgICAgICAgICAgIC8vIHBhdGNoT25Qcm9wZXJ0aWVzIG1ldGhvZFxuICAgICAgICAgICAgICAgIHByb3h5U29ja2V0UHJvdG8gPSBzb2NrZXQ7XG4gICAgICAgICAgICAgICAgW0FERF9FVkVOVF9MSVNURU5FUl9TVFIsIFJFTU9WRV9FVkVOVF9MSVNURU5FUl9TVFIsICdzZW5kJywgJ2Nsb3NlJ10uZm9yRWFjaChmdW5jdGlvbiAocHJvcE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJveHlTb2NrZXRbcHJvcE5hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBhcGkuQXJyYXlTbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvcE5hbWUgPT09IEFERF9FVkVOVF9MSVNURU5FUl9TVFIgfHwgcHJvcE5hbWUgPT09IFJFTU9WRV9FVkVOVF9MSVNURU5FUl9TVFIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXZlbnROYW1lID0gYXJncy5sZW5ndGggPiAwID8gYXJnc1swXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9wZXJ0eVN5bWJvbCA9IFpvbmUuX19zeW1ib2xfXygnT05fUFJPUEVSVFknICsgZXZlbnROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ja2V0W3Byb3BlcnR5U3ltYm9sXSA9IHByb3h5U29ja2V0W3Byb3BlcnR5U3ltYm9sXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc29ja2V0W3Byb3BOYW1lXS5hcHBseShzb2NrZXQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gd2UgY2FuIHBhdGNoIHRoZSByZWFsIHNvY2tldFxuICAgICAgICAgICAgICAgIHByb3h5U29ja2V0ID0gc29ja2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXBpLnBhdGNoT25Qcm9wZXJ0aWVzKHByb3h5U29ja2V0LCBbJ2Nsb3NlJywgJ2Vycm9yJywgJ21lc3NhZ2UnLCAnb3BlbiddLCBwcm94eVNvY2tldFByb3RvKTtcbiAgICAgICAgICAgIHJldHVybiBwcm94eVNvY2tldDtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGdsb2JhbFdlYlNvY2tldCA9IF9nbG9iYWxbJ1dlYlNvY2tldCddO1xuICAgICAgICBmb3IgKHZhciBwcm9wIGluIFdTKSB7XG4gICAgICAgICAgICBnbG9iYWxXZWJTb2NrZXRbcHJvcF0gPSBXU1twcm9wXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBwcm9wZXJ0eURlc2NyaXB0b3JMZWdhY3lQYXRjaChhcGksIF9nbG9iYWwpIHtcbiAgICAgICAgdmFyIF9hID0gYXBpLmdldEdsb2JhbE9iamVjdHMoKSwgaXNOb2RlID0gX2EuaXNOb2RlLCBpc01peCA9IF9hLmlzTWl4O1xuICAgICAgICBpZiAoaXNOb2RlICYmICFpc01peCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY2FuUGF0Y2hWaWFQcm9wZXJ0eURlc2NyaXB0b3IoYXBpLCBfZ2xvYmFsKSkge1xuICAgICAgICAgICAgdmFyIHN1cHBvcnRzV2ViU29ja2V0ID0gdHlwZW9mIFdlYlNvY2tldCAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgICAgICAgICAvLyBTYWZhcmksIEFuZHJvaWQgYnJvd3NlcnMgKEplbGx5IEJlYW4pXG4gICAgICAgICAgICBwYXRjaFZpYUNhcHR1cmluZ0FsbFRoZUV2ZW50cyhhcGkpO1xuICAgICAgICAgICAgYXBpLnBhdGNoQ2xhc3MoJ1hNTEh0dHBSZXF1ZXN0Jyk7XG4gICAgICAgICAgICBpZiAoc3VwcG9ydHNXZWJTb2NrZXQpIHtcbiAgICAgICAgICAgICAgICBhcHBseShhcGksIF9nbG9iYWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgWm9uZVthcGkuc3ltYm9sKCdwYXRjaEV2ZW50cycpXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gY2FuUGF0Y2hWaWFQcm9wZXJ0eURlc2NyaXB0b3IoYXBpLCBfZ2xvYmFsKSB7XG4gICAgICAgIHZhciBfYSA9IGFwaS5nZXRHbG9iYWxPYmplY3RzKCksIGlzQnJvd3NlciA9IF9hLmlzQnJvd3NlciwgaXNNaXggPSBfYS5pc01peDtcbiAgICAgICAgaWYgKChpc0Jyb3dzZXIgfHwgaXNNaXgpICYmXG4gICAgICAgICAgICAhYXBpLk9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcihIVE1MRWxlbWVudC5wcm90b3R5cGUsICdvbmNsaWNrJykgJiZcbiAgICAgICAgICAgIHR5cGVvZiBFbGVtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gV2ViS2l0IGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzQzNjRcbiAgICAgICAgICAgIC8vIElETCBpbnRlcmZhY2UgYXR0cmlidXRlcyBhcmUgbm90IGNvbmZpZ3VyYWJsZVxuICAgICAgICAgICAgdmFyIGRlc2MgPSBhcGkuT2JqZWN0R2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEVsZW1lbnQucHJvdG90eXBlLCAnb25jbGljaycpO1xuICAgICAgICAgICAgaWYgKGRlc2MgJiYgIWRlc2MuY29uZmlndXJhYmxlKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIC8vIHRyeSB0byB1c2Ugb25jbGljayB0byBkZXRlY3Qgd2hldGhlciB3ZSBjYW4gcGF0Y2ggdmlhIHByb3BlcnR5RGVzY3JpcHRvclxuICAgICAgICAgICAgLy8gYmVjYXVzZSBYTUxIdHRwUmVxdWVzdCBpcyBub3QgYXZhaWxhYmxlIGluIHNlcnZpY2Ugd29ya2VyXG4gICAgICAgICAgICBpZiAoZGVzYykge1xuICAgICAgICAgICAgICAgIGFwaS5PYmplY3REZWZpbmVQcm9wZXJ0eShFbGVtZW50LnByb3RvdHlwZSwgJ29uY2xpY2snLCB7XG4gICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gISFkaXYub25jbGljaztcbiAgICAgICAgICAgICAgICBhcGkuT2JqZWN0RGVmaW5lUHJvcGVydHkoRWxlbWVudC5wcm90b3R5cGUsICdvbmNsaWNrJywgZGVzYyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgWE1MSHR0cFJlcXVlc3QgPSBfZ2xvYmFsWydYTUxIdHRwUmVxdWVzdCddO1xuICAgICAgICBpZiAoIVhNTEh0dHBSZXF1ZXN0KSB7XG4gICAgICAgICAgICAvLyBYTUxIdHRwUmVxdWVzdCBpcyBub3QgYXZhaWxhYmxlIGluIHNlcnZpY2Ugd29ya2VyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIE9OX1JFQURZX1NUQVRFX0NIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xuICAgICAgICB2YXIgWE1MSHR0cFJlcXVlc3RQcm90b3R5cGUgPSBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGU7XG4gICAgICAgIHZhciB4aHJEZXNjID0gYXBpLk9iamVjdEdldE93blByb3BlcnR5RGVzY3JpcHRvcihYTUxIdHRwUmVxdWVzdFByb3RvdHlwZSwgT05fUkVBRFlfU1RBVEVfQ0hBTkdFKTtcbiAgICAgICAgLy8gYWRkIGVudW1lcmFibGUgYW5kIGNvbmZpZ3VyYWJsZSBoZXJlIGJlY2F1c2UgaW4gb3BlcmFcbiAgICAgICAgLy8gYnkgZGVmYXVsdCBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUub25yZWFkeXN0YXRlY2hhbmdlIGlzIHVuZGVmaW5lZFxuICAgICAgICAvLyB3aXRob3V0IGFkZGluZyBlbnVtZXJhYmxlIGFuZCBjb25maWd1cmFibGUgd2lsbCBjYXVzZSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgICAgICAgLy8gbm9uLWNvbmZpZ3VyYWJsZVxuICAgICAgICAvLyBhbmQgaWYgWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLm9ucmVhZHlzdGF0ZWNoYW5nZSBpcyB1bmRlZmluZWQsXG4gICAgICAgIC8vIHdlIHNob3VsZCBzZXQgYSByZWFsIGRlc2MgaW5zdGVhZCBhIGZha2Ugb25lXG4gICAgICAgIGlmICh4aHJEZXNjKSB7XG4gICAgICAgICAgICBhcGkuT2JqZWN0RGVmaW5lUHJvcGVydHkoWE1MSHR0cFJlcXVlc3RQcm90b3R5cGUsIE9OX1JFQURZX1NUQVRFX0NIQU5HRSwge1xuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSAhIXJlcS5vbnJlYWR5c3RhdGVjaGFuZ2U7XG4gICAgICAgICAgICAvLyByZXN0b3JlIG9yaWdpbmFsIGRlc2NcbiAgICAgICAgICAgIGFwaS5PYmplY3REZWZpbmVQcm9wZXJ0eShYTUxIdHRwUmVxdWVzdFByb3RvdHlwZSwgT05fUkVBRFlfU1RBVEVfQ0hBTkdFLCB4aHJEZXNjIHx8IHt9KTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgU1lNQk9MX0ZBS0VfT05SRUFEWVNUQVRFQ0hBTkdFXzEgPSBhcGkuc3ltYm9sKCdmYWtlJyk7XG4gICAgICAgICAgICBhcGkuT2JqZWN0RGVmaW5lUHJvcGVydHkoWE1MSHR0cFJlcXVlc3RQcm90b3R5cGUsIE9OX1JFQURZX1NUQVRFX0NIQU5HRSwge1xuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1tTWU1CT0xfRkFLRV9PTlJFQURZU1RBVEVDSEFOR0VfMV07XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW1NZTUJPTF9GQUtFX09OUkVBRFlTVEFURUNIQU5HRV8xXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgdmFyIGRldGVjdEZ1bmMgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgICAgICAgICByZXEub25yZWFkeXN0YXRlY2hhbmdlID0gZGV0ZWN0RnVuYztcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSByZXFbU1lNQk9MX0ZBS0VfT05SRUFEWVNUQVRFQ0hBTkdFXzFdID09PSBkZXRlY3RGdW5jO1xuICAgICAgICAgICAgcmVxLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFdoZW5ldmVyIGFueSBldmVudExpc3RlbmVyIGZpcmVzLCB3ZSBjaGVjayB0aGUgZXZlbnRMaXN0ZW5lciB0YXJnZXQgYW5kIGFsbCBwYXJlbnRzXG4gICAgLy8gZm9yIGBvbndoYXRldmVyYCBwcm9wZXJ0aWVzIGFuZCByZXBsYWNlIHRoZW0gd2l0aCB6b25lLWJvdW5kIGZ1bmN0aW9uc1xuICAgIC8vIC0gQ2hyb21lIChmb3Igbm93KVxuICAgIGZ1bmN0aW9uIHBhdGNoVmlhQ2FwdHVyaW5nQWxsVGhlRXZlbnRzKGFwaSkge1xuICAgICAgICB2YXIgZXZlbnROYW1lcyA9IGFwaS5nZXRHbG9iYWxPYmplY3RzKCkuZXZlbnROYW1lcztcbiAgICAgICAgdmFyIHVuYm91bmRLZXkgPSBhcGkuc3ltYm9sKCd1bmJvdW5kJyk7XG4gICAgICAgIHZhciBfbG9vcF80ID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIHZhciBwcm9wZXJ0eSA9IGV2ZW50TmFtZXNbaV07XG4gICAgICAgICAgICB2YXIgb25wcm9wZXJ0eSA9ICdvbicgKyBwcm9wZXJ0eTtcbiAgICAgICAgICAgIHNlbGYuYWRkRXZlbnRMaXN0ZW5lcihwcm9wZXJ0eSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsdCA9IGV2ZW50LnRhcmdldCwgYm91bmQsIHNvdXJjZTtcbiAgICAgICAgICAgICAgICBpZiAoZWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZSA9IGVsdC5jb25zdHJ1Y3RvclsnbmFtZSddICsgJy4nICsgb25wcm9wZXJ0eTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZSA9ICd1bmtub3duLicgKyBvbnByb3BlcnR5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3aGlsZSAoZWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbHRbb25wcm9wZXJ0eV0gJiYgIWVsdFtvbnByb3BlcnR5XVt1bmJvdW5kS2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm91bmQgPSBhcGkud3JhcFdpdGhDdXJyZW50Wm9uZShlbHRbb25wcm9wZXJ0eV0sIHNvdXJjZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3VuZFt1bmJvdW5kS2V5XSA9IGVsdFtvbnByb3BlcnR5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsdFtvbnByb3BlcnR5XSA9IGJvdW5kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsdCA9IGVsdC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHRydWUpO1xuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV2ZW50TmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzQoaSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgZnVuY3Rpb24gcmVnaXN0ZXJFbGVtZW50UGF0Y2goX2dsb2JhbCwgYXBpKSB7XG4gICAgICAgIHZhciBfYSA9IGFwaS5nZXRHbG9iYWxPYmplY3RzKCksIGlzQnJvd3NlciA9IF9hLmlzQnJvd3NlciwgaXNNaXggPSBfYS5pc01peDtcbiAgICAgICAgaWYgKCghaXNCcm93c2VyICYmICFpc01peCkgfHwgISgncmVnaXN0ZXJFbGVtZW50JyBpbiBfZ2xvYmFsLmRvY3VtZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjYWxsYmFja3MgPSBbJ2NyZWF0ZWRDYWxsYmFjaycsICdhdHRhY2hlZENhbGxiYWNrJywgJ2RldGFjaGVkQ2FsbGJhY2snLCAnYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrJ107XG4gICAgICAgIGFwaS5wYXRjaENhbGxiYWNrcyhhcGksIGRvY3VtZW50LCAnRG9jdW1lbnQnLCAncmVnaXN0ZXJFbGVtZW50JywgY2FsbGJhY2tzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgKGZ1bmN0aW9uIChfZ2xvYmFsKSB7XG4gICAgICAgIHZhciBzeW1ib2xQcmVmaXggPSBfZ2xvYmFsWydfX1pvbmVfc3ltYm9sX3ByZWZpeCddIHx8ICdfX3pvbmVfc3ltYm9sX18nO1xuICAgICAgICBmdW5jdGlvbiBfX3N5bWJvbF9fKG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBzeW1ib2xQcmVmaXggKyBuYW1lO1xuICAgICAgICB9XG4gICAgICAgIF9nbG9iYWxbX19zeW1ib2xfXygnbGVnYWN5UGF0Y2gnKV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgWm9uZSA9IF9nbG9iYWxbJ1pvbmUnXTtcbiAgICAgICAgICAgIFpvbmUuX19sb2FkX3BhdGNoKCdkZWZpbmVQcm9wZXJ0eScsIGZ1bmN0aW9uIChnbG9iYWwsIFpvbmUsIGFwaSkge1xuICAgICAgICAgICAgICAgIGFwaS5fcmVkZWZpbmVQcm9wZXJ0eSA9IF9yZWRlZmluZVByb3BlcnR5O1xuICAgICAgICAgICAgICAgIHByb3BlcnR5UGF0Y2goKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgWm9uZS5fX2xvYWRfcGF0Y2goJ3JlZ2lzdGVyRWxlbWVudCcsIGZ1bmN0aW9uIChnbG9iYWwsIFpvbmUsIGFwaSkge1xuICAgICAgICAgICAgICAgIHJlZ2lzdGVyRWxlbWVudFBhdGNoKGdsb2JhbCwgYXBpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgWm9uZS5fX2xvYWRfcGF0Y2goJ0V2ZW50VGFyZ2V0TGVnYWN5JywgZnVuY3Rpb24gKGdsb2JhbCwgWm9uZSwgYXBpKSB7XG4gICAgICAgICAgICAgICAgZXZlbnRUYXJnZXRMZWdhY3lQYXRjaChnbG9iYWwsIGFwaSk7XG4gICAgICAgICAgICAgICAgcHJvcGVydHlEZXNjcmlwdG9yTGVnYWN5UGF0Y2goYXBpLCBnbG9iYWwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfSkodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgP1xuICAgICAgICB3aW5kb3cgOlxuICAgICAgICB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB7fSk7XG4gICAgLyoqXG4gICAgICogQGxpY2Vuc2VcbiAgICAgKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICAgICAqXG4gICAgICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAgICAgKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gICAgICovXG4gICAgdmFyIHRhc2tTeW1ib2wgPSB6b25lU3ltYm9sKCd6b25lVGFzaycpO1xuICAgIGZ1bmN0aW9uIHBhdGNoVGltZXIod2luZG93LCBzZXROYW1lLCBjYW5jZWxOYW1lLCBuYW1lU3VmZml4KSB7XG4gICAgICAgIHZhciBzZXROYXRpdmUgPSBudWxsO1xuICAgICAgICB2YXIgY2xlYXJOYXRpdmUgPSBudWxsO1xuICAgICAgICBzZXROYW1lICs9IG5hbWVTdWZmaXg7XG4gICAgICAgIGNhbmNlbE5hbWUgKz0gbmFtZVN1ZmZpeDtcbiAgICAgICAgdmFyIHRhc2tzQnlIYW5kbGVJZCA9IHt9O1xuICAgICAgICBmdW5jdGlvbiBzY2hlZHVsZVRhc2sodGFzaykge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSB0YXNrLmRhdGE7XG4gICAgICAgICAgICBkYXRhLmFyZ3NbMF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhc2suaW52b2tlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZGF0YS5oYW5kbGVJZCA9IHNldE5hdGl2ZS5hcHBseSh3aW5kb3csIGRhdGEuYXJncyk7XG4gICAgICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBjbGVhclRhc2sodGFzaykge1xuICAgICAgICAgICAgcmV0dXJuIGNsZWFyTmF0aXZlLmNhbGwod2luZG93LCB0YXNrLmRhdGEuaGFuZGxlSWQpO1xuICAgICAgICB9XG4gICAgICAgIHNldE5hdGl2ZSA9XG4gICAgICAgICAgICBwYXRjaE1ldGhvZCh3aW5kb3csIHNldE5hbWUsIGZ1bmN0aW9uIChkZWxlZ2F0ZSkgeyByZXR1cm4gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFyZ3NbMF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9wdGlvbnNfMSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzUGVyaW9kaWM6IG5hbWVTdWZmaXggPT09ICdJbnRlcnZhbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogKG5hbWVTdWZmaXggPT09ICdUaW1lb3V0JyB8fCBuYW1lU3VmZml4ID09PSAnSW50ZXJ2YWwnKSA/IGFyZ3NbMV0gfHwgMCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJnczogYXJnc1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2FsbGJhY2tfMSA9IGFyZ3NbMF07XG4gICAgICAgICAgICAgICAgICAgIGFyZ3NbMF0gPSBmdW5jdGlvbiB0aW1lcigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrXzEuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlzc3VlLTkzNCwgdGFzayB3aWxsIGJlIGNhbmNlbGxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGV2ZW4gaXQgaXMgYSBwZXJpb2RpYyB0YXNrIHN1Y2ggYXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzZXRJbnRlcnZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzQwMzg3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2xlYW51cCB0YXNrc0J5SGFuZGxlSWQgc2hvdWxkIGJlIGhhbmRsZWQgYmVmb3JlIHNjaGVkdWxlVGFza1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNpbmNlIHNvbWUgem9uZVNwZWMgbWF5IGludGVyY2VwdCBhbmQgZG9lc24ndCB0cmlnZ2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2NoZWR1bGVGbihzY2hlZHVsZVRhc2spIHByb3ZpZGVkIGhlcmUuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEob3B0aW9uc18xLmlzUGVyaW9kaWMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9uc18xLmhhbmRsZUlkID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW4gbm9uLW5vZGVqcyBlbnYsIHdlIHJlbW92ZSB0aW1lcklkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBmcm9tIGxvY2FsIGNhY2hlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGFza3NCeUhhbmRsZUlkW29wdGlvbnNfMS5oYW5kbGVJZF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAob3B0aW9uc18xLmhhbmRsZUlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBOb2RlIHJldHVybnMgY29tcGxleCBvYmplY3RzIGFzIGhhbmRsZUlkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgcmVtb3ZlIHRhc2sgcmVmZXJlbmNlIGZyb20gdGltZXIgb2JqZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zXzEuaGFuZGxlSWRbdGFza1N5bWJvbF0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFzayA9IHNjaGVkdWxlTWFjcm9UYXNrV2l0aEN1cnJlbnRab25lKHNldE5hbWUsIGFyZ3NbMF0sIG9wdGlvbnNfMSwgc2NoZWR1bGVUYXNrLCBjbGVhclRhc2spO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIE5vZGUuanMgbXVzdCBhZGRpdGlvbmFsbHkgc3VwcG9ydCB0aGUgcmVmIGFuZCB1bnJlZiBmdW5jdGlvbnMuXG4gICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGUgPSB0YXNrLmRhdGEuaGFuZGxlSWQ7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaGFuZGxlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZm9yIG5vbiBub2RlanMgZW52LCB3ZSBzYXZlIGhhbmRsZUlkOiB0YXNrXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXBwaW5nIGluIGxvY2FsIGNhY2hlIGZvciBjbGVhclRpbWVvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tzQnlIYW5kbGVJZFtoYW5kbGVdID0gdGFzaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChoYW5kbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZvciBub2RlanMgZW52LCB3ZSBzYXZlIHRhc2tcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlZmVyZW5jZSBpbiB0aW1lcklkIE9iamVjdCBmb3IgY2xlYXJUaW1lb3V0XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVbdGFza1N5bWJvbF0gPSB0YXNrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgaGFuZGxlIGlzIG51bGwsIGJlY2F1c2Ugc29tZSBwb2x5ZmlsbCBvciBicm93c2VyXG4gICAgICAgICAgICAgICAgICAgIC8vIG1heSByZXR1cm4gdW5kZWZpbmVkIGZyb20gc2V0VGltZW91dC9zZXRJbnRlcnZhbC9zZXRJbW1lZGlhdGUvcmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICAgICAgICAgICAgICAgIGlmIChoYW5kbGUgJiYgaGFuZGxlLnJlZiAmJiBoYW5kbGUudW5yZWYgJiYgdHlwZW9mIGhhbmRsZS5yZWYgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBoYW5kbGUudW5yZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2sucmVmID0gaGFuZGxlLnJlZi5iaW5kKGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrLnVucmVmID0gaGFuZGxlLnVucmVmLmJpbmQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGhhbmRsZSA9PT0gJ251bWJlcicgfHwgaGFuZGxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2F1c2UgYW4gZXJyb3IgYnkgY2FsbGluZyBpdCBkaXJlY3RseS5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlLmFwcGx5KHdpbmRvdywgYXJncyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTsgfSk7XG4gICAgICAgIGNsZWFyTmF0aXZlID1cbiAgICAgICAgICAgIHBhdGNoTWV0aG9kKHdpbmRvdywgY2FuY2VsTmFtZSwgZnVuY3Rpb24gKGRlbGVnYXRlKSB7IHJldHVybiBmdW5jdGlvbiAoc2VsZiwgYXJncykge1xuICAgICAgICAgICAgICAgIHZhciBpZCA9IGFyZ3NbMF07XG4gICAgICAgICAgICAgICAgdmFyIHRhc2s7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBpZCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbm9uIG5vZGVqcyBlbnYuXG4gICAgICAgICAgICAgICAgICAgIHRhc2sgPSB0YXNrc0J5SGFuZGxlSWRbaWRdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbm9kZWpzIGVudi5cbiAgICAgICAgICAgICAgICAgICAgdGFzayA9IGlkICYmIGlkW3Rhc2tTeW1ib2xdO1xuICAgICAgICAgICAgICAgICAgICAvLyBvdGhlciBlbnZpcm9ubWVudHMuXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGFzaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFzayA9IGlkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0YXNrICYmIHR5cGVvZiB0YXNrLnR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXNrLnN0YXRlICE9PSAnbm90U2NoZWR1bGVkJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKHRhc2suY2FuY2VsRm4gJiYgdGFzay5kYXRhLmlzUGVyaW9kaWMgfHwgdGFzay5ydW5Db3VudCA9PT0gMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaWQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRhc2tzQnlIYW5kbGVJZFtpZF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkW3Rhc2tTeW1ib2xdID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERvIG5vdCBjYW5jZWwgYWxyZWFkeSBjYW5jZWxlZCBmdW5jdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suem9uZS5jYW5jZWxUYXNrKHRhc2spO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBjYXVzZSBhbiBlcnJvciBieSBjYWxsaW5nIGl0IGRpcmVjdGx5LlxuICAgICAgICAgICAgICAgICAgICBkZWxlZ2F0ZS5hcHBseSh3aW5kb3csIGFyZ3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07IH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAbGljZW5zZVxuICAgICAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gICAgICpcbiAgICAgKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICAgICAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBwYXRjaEN1c3RvbUVsZW1lbnRzKF9nbG9iYWwsIGFwaSkge1xuICAgICAgICB2YXIgX2EgPSBhcGkuZ2V0R2xvYmFsT2JqZWN0cygpLCBpc0Jyb3dzZXIgPSBfYS5pc0Jyb3dzZXIsIGlzTWl4ID0gX2EuaXNNaXg7XG4gICAgICAgIGlmICgoIWlzQnJvd3NlciAmJiAhaXNNaXgpIHx8ICFfZ2xvYmFsWydjdXN0b21FbGVtZW50cyddIHx8ICEoJ2N1c3RvbUVsZW1lbnRzJyBpbiBfZ2xvYmFsKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjYWxsYmFja3MgPSBbJ2Nvbm5lY3RlZENhbGxiYWNrJywgJ2Rpc2Nvbm5lY3RlZENhbGxiYWNrJywgJ2Fkb3B0ZWRDYWxsYmFjaycsICdhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2snXTtcbiAgICAgICAgYXBpLnBhdGNoQ2FsbGJhY2tzKGFwaSwgX2dsb2JhbC5jdXN0b21FbGVtZW50cywgJ2N1c3RvbUVsZW1lbnRzJywgJ2RlZmluZScsIGNhbGxiYWNrcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGV2ZW50VGFyZ2V0UGF0Y2goX2dsb2JhbCwgYXBpKSB7XG4gICAgICAgIGlmIChab25lW2FwaS5zeW1ib2woJ3BhdGNoRXZlbnRUYXJnZXQnKV0pIHtcbiAgICAgICAgICAgIC8vIEV2ZW50VGFyZ2V0IGlzIGFscmVhZHkgcGF0Y2hlZC5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgX2EgPSBhcGkuZ2V0R2xvYmFsT2JqZWN0cygpLCBldmVudE5hbWVzID0gX2EuZXZlbnROYW1lcywgem9uZVN5bWJvbEV2ZW50TmFtZXMgPSBfYS56b25lU3ltYm9sRXZlbnROYW1lcywgVFJVRV9TVFIgPSBfYS5UUlVFX1NUUiwgRkFMU0VfU1RSID0gX2EuRkFMU0VfU1RSLCBaT05FX1NZTUJPTF9QUkVGSVggPSBfYS5aT05FX1NZTUJPTF9QUkVGSVg7XG4gICAgICAgIC8vICBwcmVkZWZpbmUgYWxsIF9fem9uZV9zeW1ib2xfXyArIGV2ZW50TmFtZSArIHRydWUvZmFsc2Ugc3RyaW5nXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXZlbnROYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGV2ZW50TmFtZSA9IGV2ZW50TmFtZXNbaV07XG4gICAgICAgICAgICB2YXIgZmFsc2VFdmVudE5hbWUgPSBldmVudE5hbWUgKyBGQUxTRV9TVFI7XG4gICAgICAgICAgICB2YXIgdHJ1ZUV2ZW50TmFtZSA9IGV2ZW50TmFtZSArIFRSVUVfU1RSO1xuICAgICAgICAgICAgdmFyIHN5bWJvbCA9IFpPTkVfU1lNQk9MX1BSRUZJWCArIGZhbHNlRXZlbnROYW1lO1xuICAgICAgICAgICAgdmFyIHN5bWJvbENhcHR1cmUgPSBaT05FX1NZTUJPTF9QUkVGSVggKyB0cnVlRXZlbnROYW1lO1xuICAgICAgICAgICAgem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnROYW1lXSA9IHt9O1xuICAgICAgICAgICAgem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnROYW1lXVtGQUxTRV9TVFJdID0gc3ltYm9sO1xuICAgICAgICAgICAgem9uZVN5bWJvbEV2ZW50TmFtZXNbZXZlbnROYW1lXVtUUlVFX1NUUl0gPSBzeW1ib2xDYXB0dXJlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBFVkVOVF9UQVJHRVQgPSBfZ2xvYmFsWydFdmVudFRhcmdldCddO1xuICAgICAgICBpZiAoIUVWRU5UX1RBUkdFVCB8fCAhRVZFTlRfVEFSR0VULnByb3RvdHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGFwaS5wYXRjaEV2ZW50VGFyZ2V0KF9nbG9iYWwsIFtFVkVOVF9UQVJHRVQgJiYgRVZFTlRfVEFSR0VULnByb3RvdHlwZV0pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcGF0Y2hFdmVudChnbG9iYWwsIGFwaSkge1xuICAgICAgICBhcGkucGF0Y2hFdmVudFByb3RvdHlwZShnbG9iYWwsIGFwaSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBsaWNlbnNlXG4gICAgICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAgICAgKlxuICAgICAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gICAgICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICAgICAqL1xuICAgIFpvbmUuX19sb2FkX3BhdGNoKCdsZWdhY3knLCBmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gICAgICAgIHZhciBsZWdhY3lQYXRjaCA9IGdsb2JhbFtab25lLl9fc3ltYm9sX18oJ2xlZ2FjeVBhdGNoJyldO1xuICAgICAgICBpZiAobGVnYWN5UGF0Y2gpIHtcbiAgICAgICAgICAgIGxlZ2FjeVBhdGNoKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBab25lLl9fbG9hZF9wYXRjaCgncXVldWVNaWNyb3Rhc2snLCBmdW5jdGlvbiAoZ2xvYmFsLCBab25lLCBhcGkpIHtcbiAgICAgICAgYXBpLnBhdGNoTWV0aG9kKGdsb2JhbCwgJ3F1ZXVlTWljcm90YXNrJywgZnVuY3Rpb24gKGRlbGVnYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICAgICAgICAgICAgICBab25lLmN1cnJlbnQuc2NoZWR1bGVNaWNyb1Rhc2soJ3F1ZXVlTWljcm90YXNrJywgYXJnc1swXSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBab25lLl9fbG9hZF9wYXRjaCgndGltZXJzJywgZnVuY3Rpb24gKGdsb2JhbCkge1xuICAgICAgICB2YXIgc2V0ID0gJ3NldCc7XG4gICAgICAgIHZhciBjbGVhciA9ICdjbGVhcic7XG4gICAgICAgIHBhdGNoVGltZXIoZ2xvYmFsLCBzZXQsIGNsZWFyLCAnVGltZW91dCcpO1xuICAgICAgICBwYXRjaFRpbWVyKGdsb2JhbCwgc2V0LCBjbGVhciwgJ0ludGVydmFsJyk7XG4gICAgICAgIHBhdGNoVGltZXIoZ2xvYmFsLCBzZXQsIGNsZWFyLCAnSW1tZWRpYXRlJyk7XG4gICAgfSk7XG4gICAgWm9uZS5fX2xvYWRfcGF0Y2goJ3JlcXVlc3RBbmltYXRpb25GcmFtZScsIGZ1bmN0aW9uIChnbG9iYWwpIHtcbiAgICAgICAgcGF0Y2hUaW1lcihnbG9iYWwsICdyZXF1ZXN0JywgJ2NhbmNlbCcsICdBbmltYXRpb25GcmFtZScpO1xuICAgICAgICBwYXRjaFRpbWVyKGdsb2JhbCwgJ21velJlcXVlc3QnLCAnbW96Q2FuY2VsJywgJ0FuaW1hdGlvbkZyYW1lJyk7XG4gICAgICAgIHBhdGNoVGltZXIoZ2xvYmFsLCAnd2Via2l0UmVxdWVzdCcsICd3ZWJraXRDYW5jZWwnLCAnQW5pbWF0aW9uRnJhbWUnKTtcbiAgICB9KTtcbiAgICBab25lLl9fbG9hZF9wYXRjaCgnYmxvY2tpbmcnLCBmdW5jdGlvbiAoZ2xvYmFsLCBab25lKSB7XG4gICAgICAgIHZhciBibG9ja2luZ01ldGhvZHMgPSBbJ2FsZXJ0JywgJ3Byb21wdCcsICdjb25maXJtJ107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmxvY2tpbmdNZXRob2RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbmFtZV8yID0gYmxvY2tpbmdNZXRob2RzW2ldO1xuICAgICAgICAgICAgcGF0Y2hNZXRob2QoZ2xvYmFsLCBuYW1lXzIsIGZ1bmN0aW9uIChkZWxlZ2F0ZSwgc3ltYm9sLCBuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChzLCBhcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBab25lLmN1cnJlbnQucnVuKGRlbGVnYXRlLCBnbG9iYWwsIGFyZ3MsIG5hbWUpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIFpvbmUuX19sb2FkX3BhdGNoKCdFdmVudFRhcmdldCcsIGZ1bmN0aW9uIChnbG9iYWwsIFpvbmUsIGFwaSkge1xuICAgICAgICBwYXRjaEV2ZW50KGdsb2JhbCwgYXBpKTtcbiAgICAgICAgZXZlbnRUYXJnZXRQYXRjaChnbG9iYWwsIGFwaSk7XG4gICAgICAgIC8vIHBhdGNoIFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQncyBhZGRFdmVudExpc3RlbmVyL3JlbW92ZUV2ZW50TGlzdGVuZXJcbiAgICAgICAgdmFyIFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQgPSBnbG9iYWxbJ1hNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQnXTtcbiAgICAgICAgaWYgKFhNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQgJiYgWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldC5wcm90b3R5cGUpIHtcbiAgICAgICAgICAgIGFwaS5wYXRjaEV2ZW50VGFyZ2V0KGdsb2JhbCwgW1hNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQucHJvdG90eXBlXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBab25lLl9fbG9hZF9wYXRjaCgnTXV0YXRpb25PYnNlcnZlcicsIGZ1bmN0aW9uIChnbG9iYWwsIFpvbmUsIGFwaSkge1xuICAgICAgICBwYXRjaENsYXNzKCdNdXRhdGlvbk9ic2VydmVyJyk7XG4gICAgICAgIHBhdGNoQ2xhc3MoJ1dlYktpdE11dGF0aW9uT2JzZXJ2ZXInKTtcbiAgICB9KTtcbiAgICBab25lLl9fbG9hZF9wYXRjaCgnSW50ZXJzZWN0aW9uT2JzZXJ2ZXInLCBmdW5jdGlvbiAoZ2xvYmFsLCBab25lLCBhcGkpIHtcbiAgICAgICAgcGF0Y2hDbGFzcygnSW50ZXJzZWN0aW9uT2JzZXJ2ZXInKTtcbiAgICB9KTtcbiAgICBab25lLl9fbG9hZF9wYXRjaCgnRmlsZVJlYWRlcicsIGZ1bmN0aW9uIChnbG9iYWwsIFpvbmUsIGFwaSkge1xuICAgICAgICBwYXRjaENsYXNzKCdGaWxlUmVhZGVyJyk7XG4gICAgfSk7XG4gICAgWm9uZS5fX2xvYWRfcGF0Y2goJ29uX3Byb3BlcnR5JywgZnVuY3Rpb24gKGdsb2JhbCwgWm9uZSwgYXBpKSB7XG4gICAgICAgIHByb3BlcnR5RGVzY3JpcHRvclBhdGNoKGFwaSwgZ2xvYmFsKTtcbiAgICB9KTtcbiAgICBab25lLl9fbG9hZF9wYXRjaCgnY3VzdG9tRWxlbWVudHMnLCBmdW5jdGlvbiAoZ2xvYmFsLCBab25lLCBhcGkpIHtcbiAgICAgICAgcGF0Y2hDdXN0b21FbGVtZW50cyhnbG9iYWwsIGFwaSk7XG4gICAgfSk7XG4gICAgWm9uZS5fX2xvYWRfcGF0Y2goJ1hIUicsIGZ1bmN0aW9uIChnbG9iYWwsIFpvbmUpIHtcbiAgICAgICAgLy8gVHJlYXQgWE1MSHR0cFJlcXVlc3QgYXMgYSBtYWNyb3Rhc2suXG4gICAgICAgIHBhdGNoWEhSKGdsb2JhbCk7XG4gICAgICAgIHZhciBYSFJfVEFTSyA9IHpvbmVTeW1ib2woJ3hoclRhc2snKTtcbiAgICAgICAgdmFyIFhIUl9TWU5DID0gem9uZVN5bWJvbCgneGhyU3luYycpO1xuICAgICAgICB2YXIgWEhSX0xJU1RFTkVSID0gem9uZVN5bWJvbCgneGhyTGlzdGVuZXInKTtcbiAgICAgICAgdmFyIFhIUl9TQ0hFRFVMRUQgPSB6b25lU3ltYm9sKCd4aHJTY2hlZHVsZWQnKTtcbiAgICAgICAgdmFyIFhIUl9VUkwgPSB6b25lU3ltYm9sKCd4aHJVUkwnKTtcbiAgICAgICAgdmFyIFhIUl9FUlJPUl9CRUZPUkVfU0NIRURVTEVEID0gem9uZVN5bWJvbCgneGhyRXJyb3JCZWZvcmVTY2hlZHVsZWQnKTtcbiAgICAgICAgZnVuY3Rpb24gcGF0Y2hYSFIod2luZG93KSB7XG4gICAgICAgICAgICB2YXIgWE1MSHR0cFJlcXVlc3QgPSB3aW5kb3dbJ1hNTEh0dHBSZXF1ZXN0J107XG4gICAgICAgICAgICBpZiAoIVhNTEh0dHBSZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgLy8gWE1MSHR0cFJlcXVlc3QgaXMgbm90IGF2YWlsYWJsZSBpbiBzZXJ2aWNlIHdvcmtlclxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBYTUxIdHRwUmVxdWVzdFByb3RvdHlwZSA9IFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGZpbmRQZW5kaW5nVGFzayh0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0W1hIUl9UQVNLXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBvcmlBZGRMaXN0ZW5lciA9IFhNTEh0dHBSZXF1ZXN0UHJvdG90eXBlW1pPTkVfU1lNQk9MX0FERF9FVkVOVF9MSVNURU5FUl07XG4gICAgICAgICAgICB2YXIgb3JpUmVtb3ZlTGlzdGVuZXIgPSBYTUxIdHRwUmVxdWVzdFByb3RvdHlwZVtaT05FX1NZTUJPTF9SRU1PVkVfRVZFTlRfTElTVEVORVJdO1xuICAgICAgICAgICAgaWYgKCFvcmlBZGRMaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgIHZhciBYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0XzEgPSB3aW5kb3dbJ1hNTEh0dHBSZXF1ZXN0RXZlbnRUYXJnZXQnXTtcbiAgICAgICAgICAgICAgICBpZiAoWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldF8xKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0UHJvdG90eXBlID0gWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldF8xLnByb3RvdHlwZTtcbiAgICAgICAgICAgICAgICAgICAgb3JpQWRkTGlzdGVuZXIgPSBYTUxIdHRwUmVxdWVzdEV2ZW50VGFyZ2V0UHJvdG90eXBlW1pPTkVfU1lNQk9MX0FERF9FVkVOVF9MSVNURU5FUl07XG4gICAgICAgICAgICAgICAgICAgIG9yaVJlbW92ZUxpc3RlbmVyID0gWE1MSHR0cFJlcXVlc3RFdmVudFRhcmdldFByb3RvdHlwZVtaT05FX1NZTUJPTF9SRU1PVkVfRVZFTlRfTElTVEVORVJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBSRUFEWV9TVEFURV9DSEFOR0UgPSAncmVhZHlzdGF0ZWNoYW5nZSc7XG4gICAgICAgICAgICB2YXIgU0NIRURVTEVEID0gJ3NjaGVkdWxlZCc7XG4gICAgICAgICAgICBmdW5jdGlvbiBzY2hlZHVsZVRhc2sodGFzaykge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gdGFzay5kYXRhO1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBkYXRhLnRhcmdldDtcbiAgICAgICAgICAgICAgICB0YXJnZXRbWEhSX1NDSEVEVUxFRF0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0YXJnZXRbWEhSX0VSUk9SX0JFRk9SRV9TQ0hFRFVMRURdID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGV4aXN0aW5nIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgICAgICAgICAgdmFyIGxpc3RlbmVyID0gdGFyZ2V0W1hIUl9MSVNURU5FUl07XG4gICAgICAgICAgICAgICAgaWYgKCFvcmlBZGRMaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgICAgICBvcmlBZGRMaXN0ZW5lciA9IHRhcmdldFtaT05FX1NZTUJPTF9BRERfRVZFTlRfTElTVEVORVJdO1xuICAgICAgICAgICAgICAgICAgICBvcmlSZW1vdmVMaXN0ZW5lciA9IHRhcmdldFtaT05FX1NZTUJPTF9SRU1PVkVfRVZFTlRfTElTVEVORVJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgb3JpUmVtb3ZlTGlzdGVuZXIuY2FsbCh0YXJnZXQsIFJFQURZX1NUQVRFX0NIQU5HRSwgbGlzdGVuZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgbmV3TGlzdGVuZXIgPSB0YXJnZXRbWEhSX0xJU1RFTkVSXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldC5yZWFkeVN0YXRlID09PSB0YXJnZXQuRE9ORSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc29tZXRpbWVzIG9uIHNvbWUgYnJvd3NlcnMgWE1MSHR0cFJlcXVlc3Qgd2lsbCBmaXJlIG9ucmVhZHlzdGF0ZWNoYW5nZSB3aXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZWFkeVN0YXRlPTQgbXVsdGlwbGUgdGltZXMsIHNvIHdlIG5lZWQgdG8gY2hlY2sgdGFzayBzdGF0ZSBoZXJlXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEuYWJvcnRlZCAmJiB0YXJnZXRbWEhSX1NDSEVEVUxFRF0gJiYgdGFzay5zdGF0ZSA9PT0gU0NIRURVTEVEKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgd2hldGhlciB0aGUgeGhyIGhhcyByZWdpc3RlcmVkIG9ubG9hZCBsaXN0ZW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoYXQgaXMgdGhlIGNhc2UsIHRoZSB0YXNrIHNob3VsZCBpbnZva2UgYWZ0ZXIgYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25sb2FkIGxpc3RlbmVycyBmaW5pc2guXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWxzbyBpZiB0aGUgcmVxdWVzdCBmYWlsZWQgd2l0aG91dCByZXNwb25zZSAoc3RhdHVzID0gMCksIHRoZSBsb2FkIGV2ZW50IGhhbmRsZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3aWxsIG5vdCBiZSB0cmlnZ2VyZWQsIGluIHRoYXQgY2FzZSwgd2Ugc2hvdWxkIGFsc28gaW52b2tlIHRoZSBwbGFjZWhvbGRlciBjYWxsYmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGNsb3NlIHRoZSBYTUxIdHRwUmVxdWVzdDo6c2VuZCBtYWNyb1Rhc2suXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMzg3OTVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbG9hZFRhc2tzID0gdGFyZ2V0W1pvbmUuX19zeW1ib2xfXygnbG9hZGZhbHNlJyldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuc3RhdHVzICE9PSAwICYmIGxvYWRUYXNrcyAmJiBsb2FkVGFza3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb3JpSW52b2tlXzEgPSB0YXNrLmludm9rZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5pbnZva2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBuZWVkIHRvIGxvYWQgdGhlIHRhc2tzIGFnYWluLCBiZWNhdXNlIGluIG90aGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBsb2FkIGxpc3RlbmVyLCB0aGV5IG1heSByZW1vdmUgdGhlbXNlbHZlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxvYWRUYXNrcyA9IHRhcmdldFtab25lLl9fc3ltYm9sX18oJ2xvYWRmYWxzZScpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbG9hZFRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvYWRUYXNrc1tpXSA9PT0gdGFzaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkVGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZGF0YS5hYm9ydGVkICYmIHRhc2suc3RhdGUgPT09IFNDSEVEVUxFRCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaUludm9rZV8xLmNhbGwodGFzayk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRUYXNrcy5wdXNoKHRhc2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5pbnZva2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICghZGF0YS5hYm9ydGVkICYmIHRhcmdldFtYSFJfU0NIRURVTEVEXSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlcnJvciBvY2N1cnMgd2hlbiB4aHIuc2VuZCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W1hIUl9FUlJPUl9CRUZPUkVfU0NIRURVTEVEXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIG9yaUFkZExpc3RlbmVyLmNhbGwodGFyZ2V0LCBSRUFEWV9TVEFURV9DSEFOR0UsIG5ld0xpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICB2YXIgc3RvcmVkVGFzayA9IHRhcmdldFtYSFJfVEFTS107XG4gICAgICAgICAgICAgICAgaWYgKCFzdG9yZWRUYXNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFtYSFJfVEFTS10gPSB0YXNrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZW5kTmF0aXZlLmFwcGx5KHRhcmdldCwgZGF0YS5hcmdzKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRbWEhSX1NDSEVEVUxFRF0gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gcGxhY2Vob2xkZXJDYWxsYmFjaygpIHsgfVxuICAgICAgICAgICAgZnVuY3Rpb24gY2xlYXJUYXNrKHRhc2spIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHRhc2suZGF0YTtcbiAgICAgICAgICAgICAgICAvLyBOb3RlIC0gaWRlYWxseSwgd2Ugd291bGQgY2FsbCBkYXRhLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyIGhlcmUsIGJ1dCBpdCdzIHRvbyBsYXRlXG4gICAgICAgICAgICAgICAgLy8gdG8gcHJldmVudCBpdCBmcm9tIGZpcmluZy4gU28gaW5zdGVhZCwgd2Ugc3RvcmUgaW5mbyBmb3IgdGhlIGV2ZW50IGxpc3RlbmVyLlxuICAgICAgICAgICAgICAgIGRhdGEuYWJvcnRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFib3J0TmF0aXZlLmFwcGx5KGRhdGEudGFyZ2V0LCBkYXRhLmFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG9wZW5OYXRpdmUgPSBwYXRjaE1ldGhvZChYTUxIdHRwUmVxdWVzdFByb3RvdHlwZSwgJ29wZW4nLCBmdW5jdGlvbiAoKSB7IHJldHVybiBmdW5jdGlvbiAoc2VsZiwgYXJncykge1xuICAgICAgICAgICAgICAgIHNlbGZbWEhSX1NZTkNdID0gYXJnc1syXSA9PSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzZWxmW1hIUl9VUkxdID0gYXJnc1sxXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3Blbk5hdGl2ZS5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgICAgIH07IH0pO1xuICAgICAgICAgICAgdmFyIFhNTEhUVFBSRVFVRVNUX1NPVVJDRSA9ICdYTUxIdHRwUmVxdWVzdC5zZW5kJztcbiAgICAgICAgICAgIHZhciBmZXRjaFRhc2tBYm9ydGluZyA9IHpvbmVTeW1ib2woJ2ZldGNoVGFza0Fib3J0aW5nJyk7XG4gICAgICAgICAgICB2YXIgZmV0Y2hUYXNrU2NoZWR1bGluZyA9IHpvbmVTeW1ib2woJ2ZldGNoVGFza1NjaGVkdWxpbmcnKTtcbiAgICAgICAgICAgIHZhciBzZW5kTmF0aXZlID0gcGF0Y2hNZXRob2QoWE1MSHR0cFJlcXVlc3RQcm90b3R5cGUsICdzZW5kJywgZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICAgICAgICAgICAgICBpZiAoWm9uZS5jdXJyZW50W2ZldGNoVGFza1NjaGVkdWxpbmddID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGEgZmV0Y2ggaXMgc2NoZWR1bGluZywgc28gd2UgYXJlIHVzaW5nIHhociB0byBwb2x5ZmlsbCBmZXRjaFxuICAgICAgICAgICAgICAgICAgICAvLyBhbmQgYmVjYXVzZSB3ZSBhbHJlYWR5IHNjaGVkdWxlIG1hY3JvVGFzayBmb3IgZmV0Y2gsIHdlIHNob3VsZFxuICAgICAgICAgICAgICAgICAgICAvLyBub3Qgc2NoZWR1bGUgYSBtYWNyb1Rhc2sgZm9yIHhociBhZ2FpblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VuZE5hdGl2ZS5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNlbGZbWEhSX1NZTkNdKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBYSFIgaXMgc3luYyB0aGVyZSBpcyBubyB0YXNrIHRvIHNjaGVkdWxlLCBqdXN0IGV4ZWN1dGUgdGhlIGNvZGUuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZW5kTmF0aXZlLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7IHRhcmdldDogc2VsZiwgdXJsOiBzZWxmW1hIUl9VUkxdLCBpc1BlcmlvZGljOiBmYWxzZSwgYXJnczogYXJncywgYWJvcnRlZDogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhc2sgPSBzY2hlZHVsZU1hY3JvVGFza1dpdGhDdXJyZW50Wm9uZShYTUxIVFRQUkVRVUVTVF9TT1VSQ0UsIHBsYWNlaG9sZGVyQ2FsbGJhY2ssIG9wdGlvbnMsIHNjaGVkdWxlVGFzaywgY2xlYXJUYXNrKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYgJiYgc2VsZltYSFJfRVJST1JfQkVGT1JFX1NDSEVEVUxFRF0gPT09IHRydWUgJiYgIW9wdGlvbnMuYWJvcnRlZCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5zdGF0ZSA9PT0gU0NIRURVTEVEKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB4aHIgcmVxdWVzdCB0aHJvdyBlcnJvciB3aGVuIHNlbmRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIHNob3VsZCBpbnZva2UgdGFzayBpbnN0ZWFkIG9mIGxlYXZpbmcgYSBzY2hlZHVsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBlbmRpbmcgbWFjcm9UYXNrXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrLmludm9rZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTsgfSk7XG4gICAgICAgICAgICB2YXIgYWJvcnROYXRpdmUgPSBwYXRjaE1ldGhvZChYTUxIdHRwUmVxdWVzdFByb3RvdHlwZSwgJ2Fib3J0JywgZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKHNlbGYsIGFyZ3MpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFzayA9IGZpbmRQZW5kaW5nVGFzayhzZWxmKTtcbiAgICAgICAgICAgICAgICBpZiAodGFzayAmJiB0eXBlb2YgdGFzay50eXBlID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBYSFIgaGFzIGFscmVhZHkgY29tcGxldGVkLCBkbyBub3RoaW5nLlxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgWEhSIGhhcyBhbHJlYWR5IGJlZW4gYWJvcnRlZCwgZG8gbm90aGluZy5cbiAgICAgICAgICAgICAgICAgICAgLy8gRml4ICM1NjksIGNhbGwgYWJvcnQgbXVsdGlwbGUgdGltZXMgYmVmb3JlIGRvbmUgd2lsbCBjYXVzZVxuICAgICAgICAgICAgICAgICAgICAvLyBtYWNyb1Rhc2sgdGFzayBjb3VudCBiZSBuZWdhdGl2ZSBudW1iZXJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2suY2FuY2VsRm4gPT0gbnVsbCB8fCAodGFzay5kYXRhICYmIHRhc2suZGF0YS5hYm9ydGVkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRhc2suem9uZS5jYW5jZWxUYXNrKHRhc2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChab25lLmN1cnJlbnRbZmV0Y2hUYXNrQWJvcnRpbmddID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBhYm9ydCBpcyBjYWxsZWQgZnJvbSBmZXRjaCBwb2x5ZmlsbCwgd2UgbmVlZCB0byBjYWxsIG5hdGl2ZSBhYm9ydCBvZiBYSFIuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhYm9ydE5hdGl2ZS5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCB3ZSBhcmUgdHJ5aW5nIHRvIGFib3J0IGFuIFhIUiB3aGljaCBoYXMgbm90IHlldCBiZWVuIHNlbnQsIHNvIHRoZXJlIGlzIG5vXG4gICAgICAgICAgICAgICAgLy8gdGFza1xuICAgICAgICAgICAgICAgIC8vIHRvIGNhbmNlbC4gRG8gbm90aGluZy5cbiAgICAgICAgICAgIH07IH0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgWm9uZS5fX2xvYWRfcGF0Y2goJ2dlb2xvY2F0aW9uJywgZnVuY3Rpb24gKGdsb2JhbCkge1xuICAgICAgICAvLy8gR0VPX0xPQ0FUSU9OXG4gICAgICAgIGlmIChnbG9iYWxbJ25hdmlnYXRvciddICYmIGdsb2JhbFsnbmF2aWdhdG9yJ10uZ2VvbG9jYXRpb24pIHtcbiAgICAgICAgICAgIHBhdGNoUHJvdG90eXBlKGdsb2JhbFsnbmF2aWdhdG9yJ10uZ2VvbG9jYXRpb24sIFsnZ2V0Q3VycmVudFBvc2l0aW9uJywgJ3dhdGNoUG9zaXRpb24nXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBab25lLl9fbG9hZF9wYXRjaCgnUHJvbWlzZVJlamVjdGlvbkV2ZW50JywgZnVuY3Rpb24gKGdsb2JhbCwgWm9uZSkge1xuICAgICAgICAvLyBoYW5kbGUgdW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uXG4gICAgICAgIGZ1bmN0aW9uIGZpbmRQcm9taXNlUmVqZWN0aW9uSGFuZGxlcihldnROYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZXZlbnRUYXNrcyA9IGZpbmRFdmVudFRhc2tzKGdsb2JhbCwgZXZ0TmFtZSk7XG4gICAgICAgICAgICAgICAgZXZlbnRUYXNrcy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudFRhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gd2luZG93cyBoYXMgYWRkZWQgdW5oYW5kbGVkcmVqZWN0aW9uIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRyaWdnZXIgdGhlIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgICAgICAgICAgICAgIHZhciBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPSBnbG9iYWxbJ1Byb21pc2VSZWplY3Rpb25FdmVudCddO1xuICAgICAgICAgICAgICAgICAgICBpZiAoUHJvbWlzZVJlamVjdGlvbkV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXZ0ID0gbmV3IFByb21pc2VSZWplY3Rpb25FdmVudChldnROYW1lLCB7IHByb21pc2U6IGUucHJvbWlzZSwgcmVhc29uOiBlLnJlamVjdGlvbiB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50VGFzay5pbnZva2UoZXZ0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2xvYmFsWydQcm9taXNlUmVqZWN0aW9uRXZlbnQnXSkge1xuICAgICAgICAgICAgWm9uZVt6b25lU3ltYm9sKCd1bmhhbmRsZWRQcm9taXNlUmVqZWN0aW9uSGFuZGxlcicpXSA9XG4gICAgICAgICAgICAgICAgZmluZFByb21pc2VSZWplY3Rpb25IYW5kbGVyKCd1bmhhbmRsZWRyZWplY3Rpb24nKTtcbiAgICAgICAgICAgIFpvbmVbem9uZVN5bWJvbCgncmVqZWN0aW9uSGFuZGxlZEhhbmRsZXInKV0gPVxuICAgICAgICAgICAgICAgIGZpbmRQcm9taXNlUmVqZWN0aW9uSGFuZGxlcigncmVqZWN0aW9uaGFuZGxlZCcpO1xuICAgICAgICB9XG4gICAgfSk7XG59KSkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==