/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/agent/communicator/adapters/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/adc-client-api.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/lodash/fromPairs.js":
/*!*************************************************************************************************!*\
  !*** C:/Users/Dev/Documents/projects/ServicePattern/Web/agent/node_modules/lodash/fromPairs.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The inverse of `_.toPairs`; this method returns an object composed
 * from key-value `pairs`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} pairs The key-value pairs.
 * @returns {Object} Returns the new object.
 * @example
 *
 * _.fromPairs([['a', 1], ['b', 2]]);
 * // => { 'a': 1, 'b': 2 }
 */
function fromPairs(pairs) {
  var index = -1,
      length = pairs == null ? 0 : pairs.length,
      result = {};

  while (++index < length) {
    var pair = pairs[index];
    result[pair[0]] = pair[1];
  }
  return result;
}

module.exports = fromPairs;


/***/ }),

/***/ "../adapters-types/dist/index.js":
/*!*****************************!*\
  !*** .-types/dist/index.js ***!
  \*****************************/
/*! exports provided: requestMessages, requestResponseMessages, callbackMessages, callbackResponseMessages, agentStates, recordingTargets, requestResponseMap, callbackRequestResponseMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/types */ "../adapters-types/dist/src/types.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "requestMessages", function() { return _src_types__WEBPACK_IMPORTED_MODULE_0__["requestMessages"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "requestResponseMessages", function() { return _src_types__WEBPACK_IMPORTED_MODULE_0__["requestResponseMessages"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "callbackMessages", function() { return _src_types__WEBPACK_IMPORTED_MODULE_0__["callbackMessages"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "callbackResponseMessages", function() { return _src_types__WEBPACK_IMPORTED_MODULE_0__["callbackResponseMessages"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "agentStates", function() { return _src_types__WEBPACK_IMPORTED_MODULE_0__["agentStates"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recordingTargets", function() { return _src_types__WEBPACK_IMPORTED_MODULE_0__["recordingTargets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "requestResponseMap", function() { return _src_types__WEBPACK_IMPORTED_MODULE_0__["requestResponseMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "callbackRequestResponseMap", function() { return _src_types__WEBPACK_IMPORTED_MODULE_0__["callbackRequestResponseMap"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../adapters-types/dist/src/types.js":
/*!*********************************!*\
  !*** .-types/dist/src/types.js ***!
  \*********************************/
/*! exports provided: requestMessages, requestResponseMessages, callbackMessages, callbackResponseMessages, agentStates, recordingTargets, requestResponseMap, callbackRequestResponseMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestMessages", function() { return requestMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestResponseMessages", function() { return requestResponseMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callbackMessages", function() { return callbackMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callbackResponseMessages", function() { return callbackResponseMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "agentStates", function() { return agentStates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recordingTargets", function() { return recordingTargets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestResponseMap", function() { return requestResponseMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callbackRequestResponseMap", function() { return callbackRequestResponseMap; });
var requestMessages = [
    'GET_AGENT_STATE',
    'SET_AGENT_STATE',
    'START_CALL',
    'START_SMS_CHAT',
    'START_EMAIL',
    'TERMINATE_CALL',
    'COMPLETE_INTERACTION',
    'SWITCH_ACTIVE_INTERACTION',
    'CHANGE_SERVICE',
    'SET_DISPOSITION',
    'GET_CALL_RECORDING_STATUS',
    'SET_CALL_RECORDING_STATUS',
    'GET_SCREEN_RECORDING_STATUS',
    'SET_SCREEN_RECORDING_STATUS',
    'MUTE_ALL',
    'UNMUTE_ALL',
    'GET_CONFIG',
    'SET_VARIABLE',
    'WIDGET_MINIMIZED',
    'WIDGET_MAXIMIZED',
    'ADD_INTERACTION_ASSOCIATED_OBJECT',
    'SET_INTERACTION_ACTIVE_SCREEN',
];
var requestResponseMessages = [
    'GET_AGENT_STATE_RESPONSE',
    'SET_AGENT_STATE_RESPONSE',
    'START_CALL_RESPONSE',
    'START_SMS_CHAT_RESPONSE',
    'START_EMAIL_RESPONSE',
    'TERMINATE_CALL_RESPONSE',
    'COMPLETE_INTERACTION_RESPONSE',
    'SWITCH_ACTIVE_INTERACTION_RESPONSE',
    'CHANGE_SERVICE_RESPONSE',
    'SET_DISPOSITION_RESPONSE',
    'GET_CALL_RECORDING_STATUS_RESPONSE',
    'SET_CALL_RECORDING_STATUS_RESPONSE',
    'GET_SCREEN_RECORDING_STATUS_RESPONSE',
    'SET_SCREEN_RECORDING_STATUS_RESPONSE',
    'MUTE_ALL_RESPONSE',
    'UNMUTE_ALL_RESPONSE',
    'GET_CONFIG_RESPONSE',
    'SET_VARIABLE_RESPONSE',
    'WIDGET_MINIMIZED_RESPONSE',
    'WIDGET_MAXIMIZED_RESPONSE',
    'ADD_INTERACTION_ASSOCIATED_OBJECT_RESPONSE',
    'SET_INTERACTION_ACTIVE_SCREEN_RESPONSE',
];
var callbackMessages = [
    'LOGIN',
    'LOGOUT',
    'NEW_INTERACTION',
    'INTERACTION_REMOVED',
    'INTERACTION_STATE_CHANGE',
    'ACTIVE_INTERACTION_SWITCHED',
    'AGENT_STATE_CHANGE',
    'REQUEST_TRANSFER_DATA',
    'LOAD_TRANSFER_DATA',
    'MANUAL_CALL',
    'MAXIMIZE_WIDGET',
    'SEARCH_KNOWLEDGE_BASE',
    'GET_KNOWLEDGE_BASE_ARTICLE',
    'SHOW_SCREEN_POP',
    'SEARCH_RECORDS',
    'ACTIVATE_INTERACTION_SCREEN',
];
var callbackResponseMessages = [
    'REQUEST_TRANSFER_DATA_RESPONSE',
    'SEARCH_KNOWLEDGE_BASE_RESPONSE',
    'GET_KNOWLEDGE_BASE_ARTICLE_RESPONSE',
];
var resultStatus = ['error', 'success'];
var interactionState = ['unknown', 'queued', 'ivr', 'wrap_up', 'wrap_up_hold', 'delivered', 'delivery_pending', 'hold', 'completed'];
var callDirection = ['inbound', 'outbound'];
var interactionType = ['voice', 'chat', 'email'];
var agentStates = ['supervising', 'ready', 'not_ready', 'busy', 'after_call_work'];
var recordingTargets = ['call', 'screen'];
var requestResponseMap = {
    'GET_AGENT_STATE': 'GET_AGENT_STATE_RESPONSE',
    'SET_AGENT_STATE': 'SET_AGENT_STATE_RESPONSE',
    'START_CALL': 'START_CALL_RESPONSE',
    'START_SMS_CHAT': 'START_SMS_CHAT_RESPONSE',
    'START_EMAIL': 'START_EMAIL_RESPONSE',
    'TERMINATE_CALL': 'TERMINATE_CALL_RESPONSE',
    'COMPLETE_INTERACTION': 'COMPLETE_INTERACTION_RESPONSE',
    'SWITCH_ACTIVE_INTERACTION': 'SWITCH_ACTIVE_INTERACTION_RESPONSE',
    'CHANGE_SERVICE': 'CHANGE_SERVICE_RESPONSE',
    'SET_DISPOSITION': 'SET_DISPOSITION_RESPONSE',
    'GET_CALL_RECORDING_STATUS': 'GET_CALL_RECORDING_STATUS_RESPONSE',
    'SET_CALL_RECORDING_STATUS': 'SET_CALL_RECORDING_STATUS_RESPONSE',
    'GET_SCREEN_RECORDING_STATUS': 'GET_SCREEN_RECORDING_STATUS_RESPONSE',
    'SET_SCREEN_RECORDING_STATUS': 'SET_SCREEN_RECORDING_STATUS_RESPONSE',
    'MUTE_ALL': 'MUTE_ALL_RESPONSE',
    'UNMUTE_ALL': 'UNMUTE_ALL_RESPONSE',
    'GET_CONFIG': 'GET_CONFIG_RESPONSE',
    'SET_VARIABLE': 'SET_VARIABLE_RESPONSE',
    'WIDGET_MINIMIZED': 'WIDGET_MINIMIZED_RESPONSE',
    'WIDGET_MAXIMIZED': 'WIDGET_MAXIMIZED_RESPONSE',
    'ADD_INTERACTION_ASSOCIATED_OBJECT': 'ADD_INTERACTION_ASSOCIATED_OBJECT_RESPONSE',
    'SET_INTERACTION_ACTIVE_SCREEN': 'SET_INTERACTION_ACTIVE_SCREEN_RESPONSE',
};
var callbackRequestResponseMap = {
    'REQUEST_TRANSFER_DATA': 'REQUEST_TRANSFER_DATA_RESPONSE',
    'SEARCH_KNOWLEDGE_BASE': 'SEARCH_KNOWLEDGE_BASE_RESPONSE',
    'GET_KNOWLEDGE_BASE_ARTICLE': 'GET_KNOWLEDGE_BASE_ARTICLE_RESPONSE',
};
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./src/adc-client-api.ts":
/*!*******************************!*\
  !*** ./src/adc-client-api.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fromPairs_1 = __importDefault(__webpack_require__(/*! lodash/fromPairs */ "../../node_modules/lodash/fromPairs.js"));
var adapters_types_1 = __webpack_require__(/*! @bpinc/adapters-types */ "../adapters-types/dist/index.js");
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils/index.ts");
// In milliseconds (ms)
var responseTimeout = 1000;
var selfScriptUrl = (function () {
    if (window.document.currentScript) {
        return window.document.currentScript.src;
    }
    else {
        var scripts = document.getElementsByTagName('script');
        var myScript = scripts[scripts.length - 1];
        return myScript.src;
    }
})();
var adcOriginOverride = utils_1.utils.extractURLParams(window.location.href)['adcUrl'];
var adcOrigin = adcOriginOverride || new URL(selfScriptUrl).origin; // 'https://adcommunicator.web.app'
var AgentDesktopClientAPI = /** @class */ (function () {
    function AgentDesktopClientAPI(integrationKey, mountRoot) {
        this.adcFrame = null;
        this.adcFrameOrigin = '';
        this.pendingMessages = [];
        this.integrationKey = integrationKey || utils_1.utils.generateRandomUID();
        this.connectionEstablished = false;
        this.incomingMessageLoggers = [];
        this.outgoingMessageLoggers = [];
        this.messageHandlers = fromPairs_1.default(adapters_types_1.callbackMessages.map(function (messageType) { return [messageType, []]; }));
        this.responseCallbacks = fromPairs_1.default(adapters_types_1.requestResponseMessages.map(function (messageType) { return [messageType, {}]; }));
        this.prepareAdcIframe(mountRoot);
        this.registerListeners();
    }
    AgentDesktopClientAPI.prototype.injectIncomingMessageLogger = function (callback) {
        this.incomingMessageLoggers.push(callback);
    };
    AgentDesktopClientAPI.prototype.injectOutgoingMessageLogger = function (callback) {
        this.outgoingMessageLoggers.push(callback);
    };
    AgentDesktopClientAPI.prototype.prepareAdcIframe = function (mountRoot) {
        mountRoot = (mountRoot && mountRoot.appendChild) ? mountRoot : document.body;
        this.adcFrame = document.createElement('iframe');
        this.adcFrame.title = 'Agent Desktop Communicator';
        this.adcFrame.id = 'adc_frame';
        this.adcFrame.style.border = 'none';
        this.adcFrame.width = '500';
        this.adcFrame.height = '100%';
        this.adcFrame.allow = 'microphone; camera; geolocation';
        this.adcFrame.src = adcOrigin + '/agent/communicator/';
        this.adcFrame.onerror = function () {
            console.error('@@@ Adapter failure: unable to load Api Proxy iframe');
        };
        mountRoot.appendChild(this.adcFrame);
        this.adcFrameOrigin = (new URL(this.adcFrame.src)).origin;
    };
    AgentDesktopClientAPI.prototype.handleIncomingMessage = function (type, uid, params) {
        var _this = this;
        console.log('@@@ Handle: ', type, uid, params);
        var handlers = this.messageHandlers[type];
        var pendingResults = handlers.map(function (handler) { return handler.apply(void 0, params); });
        utils_1.utils.waitResolveAll(pendingResults).then(function (promiseResults) {
            var positiveResults = promiseResults.reduce(function (arr, result) {
                if (result.status === 'fulfilled' &&
                    result.value !== null &&
                    result.value !== undefined) {
                    arr.push(result.value);
                }
                return arr;
            }, []);
            var lastValue = positiveResults.length
                ? positiveResults[positiveResults.length - 1]
                : null;
            if (adapters_types_1.callbackResponseMessages.includes(type + "_RESPONSE")) {
                _this.postMessageToAdc({
                    uid: uid,
                    type: type + "_RESPONSE",
                    params: [lastValue],
                });
            }
        });
    };
    AgentDesktopClientAPI.prototype.registerListeners = function () {
        var _this = this;
        window.addEventListener('message', function (e) {
            if (e.origin !== _this.adcFrameOrigin) {
                return;
            }
            e.stopImmediatePropagation();
            if (!e.data) {
                return;
            }
            var _a = e.data, type = _a.type, uid = _a.uid, params = _a.params;
            try {
                _this.incomingMessageLoggers.forEach(function (log) { return log(type, params); });
                if (type === 'hello') {
                    _this.connectionEstablished = true;
                    _this.postMessageToAdc({
                        uid: uid,
                        type: 'hi',
                        params: [_this.integrationKey],
                    });
                    setTimeout(function () {
                        _this.pendingMessages.forEach(function (message) {
                            _this.postMessageToAdc(message);
                        });
                        _this.pendingMessages = [];
                    });
                    return;
                }
                if (!_this.connectionEstablished) {
                    return;
                }
                if (adapters_types_1.callbackMessages.includes(type)) {
                    _this.handleIncomingMessage(type, uid, params);
                }
                else if (adapters_types_1.requestResponseMessages.includes(type)) {
                    var waiting = _this.responseCallbacks[type];
                    if (waiting && waiting[uid]) {
                        var callback_1 = waiting[uid];
                        delete waiting[uid];
                        Promise.resolve().then(function () { return callback_1(params); });
                    }
                }
                else {
                    console.warn('@@@ Get unknown message from Communicator: ', type);
                }
            }
            catch (e) {
                console.error('@@@ Error: ', e.message);
            }
        });
    };
    AgentDesktopClientAPI.prototype.runResponseTimeoutWatch = function (type, uid, resolve) {
        var _this = this;
        setTimeout(function () {
            var callbacksMap = _this.responseCallbacks[type + "_RESPONSE"];
            if (callbacksMap[uid]) {
                delete callbacksMap[uid];
                var errorText = "Response from Communicator for event " + type + " wasn't received in specified timeout: " + responseTimeout;
                console.error("@@@ " + errorText);
                resolve({
                    status: 'error',
                    error: {
                        message: errorText,
                    },
                });
            }
        }, responseTimeout);
    };
    AgentDesktopClientAPI.prototype.postMessageToAdc = function (data) {
        if (this.adcFrame !== null && this.adcFrame.contentWindow && this.connectionEstablished) {
            this.outgoingMessageLoggers.forEach(function (log) { return log(data.type, data.params); });
            console.log('@@@ ADAPTER SEND MESSAGE: ', data);
            this.adcFrame.contentWindow.postMessage(data, this.adcFrameOrigin);
        }
        else {
            this.pendingMessages.push(data);
        }
    };
    AgentDesktopClientAPI.prototype.apiCall = function (type, params) {
        var _this = this;
        return new Promise(function (resolve) {
            var uid = utils_1.utils.generateRandomUID();
            _this.postMessageToAdc({ uid: uid, type: type, params: params });
            var waiting = _this.responseCallbacks[type + "_RESPONSE"];
            waiting[uid] = resolve;
            _this.runResponseTimeoutWatch(type, uid, resolve);
        });
    };
    AgentDesktopClientAPI.prototype.getAgentState = function () {
        return this.apiCall('GET_AGENT_STATE');
    };
    AgentDesktopClientAPI.prototype.setAgentState = function (state, notReadyReason) {
        return this.apiCall('SET_AGENT_STATE', [state, notReadyReason]);
    };
    AgentDesktopClientAPI.prototype.startCall = function (phonenumber, initialObject) {
        return this.apiCall('START_CALL', [phonenumber, initialObject || null]);
    };
    AgentDesktopClientAPI.prototype.startSMSChat = function (phonenumber, initialObject) {
        return this.apiCall('START_SMS_CHAT', [phonenumber, initialObject || null]);
    };
    AgentDesktopClientAPI.prototype.startEmail = function (email, initialObject) {
        return this.apiCall('START_EMAIL', [email, initialObject || null]);
    };
    AgentDesktopClientAPI.prototype.terminateCall = function (interactionId) {
        return this.apiCall('TERMINATE_CALL', [interactionId]);
    };
    AgentDesktopClientAPI.prototype.completeInteraction = function (interactionId) {
        return this.apiCall('COMPLETE_INTERACTION', [interactionId]);
    };
    AgentDesktopClientAPI.prototype.switchActiveInteraction = function (interactionId) {
        return this.apiCall('SWITCH_ACTIVE_INTERACTION', [interactionId]);
    };
    AgentDesktopClientAPI.prototype.changeService = function (serviceName) {
        return this.apiCall('CHANGE_SERVICE', [serviceName]);
    };
    AgentDesktopClientAPI.prototype.setDisposition = function (dispositionData, interactionId) {
        return this.apiCall('SET_DISPOSITION', [dispositionData, interactionId]);
    };
    AgentDesktopClientAPI.prototype.getCallRecordingStatus = function (interactionId) {
        return this.apiCall('GET_CALL_RECORDING_STATUS', [interactionId]);
    };
    AgentDesktopClientAPI.prototype.setCallRecordingStatus = function (newStatus, interactionId) {
        return this.apiCall('SET_CALL_RECORDING_STATUS', [newStatus, interactionId]);
    };
    AgentDesktopClientAPI.prototype.getScreenRecordingStatus = function () {
        return this.apiCall('GET_SCREEN_RECORDING_STATUS');
    };
    AgentDesktopClientAPI.prototype.setScreenRecordingStatus = function (newStatus) {
        return this.apiCall('SET_SCREEN_RECORDING_STATUS', [newStatus]);
    };
    AgentDesktopClientAPI.prototype.muteAll = function (target) {
        return this.apiCall('MUTE_ALL', [target]);
    };
    AgentDesktopClientAPI.prototype.unmuteAll = function (target) {
        return this.apiCall('UNMUTE_ALL', [target]);
    };
    AgentDesktopClientAPI.prototype.getConfig = function () {
        return this.apiCall('GET_CONFIG');
    };
    AgentDesktopClientAPI.prototype.setVariable = function (key, value, interactionId) {
        return this.apiCall('SET_VARIABLE', [key, value, interactionId]);
    };
    AgentDesktopClientAPI.prototype.notifyWidgetMinimized = function () {
        return this.apiCall('WIDGET_MINIMIZED');
    };
    AgentDesktopClientAPI.prototype.notifyWidgetMaximized = function () {
        return this.apiCall('WIDGET_MAXIMIZED');
    };
    AgentDesktopClientAPI.prototype.addInteractionAssociatedObject = function (object, interactionId) {
        return this.apiCall('ADD_INTERACTION_ASSOCIATED_OBJECT', [object, interactionId]);
    };
    AgentDesktopClientAPI.prototype.setInteractionActiveScreen = function (screenData, interactionId) {
        return this.apiCall('SET_INTERACTION_ACTIVE_SCREEN', [screenData, interactionId]);
    };
    AgentDesktopClientAPI.prototype.on = function (message, handler) {
        this.messageHandlers[message].push(handler);
    };
    AgentDesktopClientAPI.prototype.remove = function (message, handler) {
        var delIndex = this.messageHandlers[message].indexOf(handler);
        if (delIndex !== -1) {
            this.messageHandlers[message].splice(delIndex, 1);
        }
    };
    return AgentDesktopClientAPI;
}());
exports.AgentDesktopClientAPI = AgentDesktopClientAPI;
window.brightpattern = {
    AdApi: AgentDesktopClientAPI,
};


/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var extractURLParams = function (url) {
    var paramsMap = {};
    if (url) {
        var paramUrl = url.split('?').slice(1).join('?');
        if (paramUrl.length) {
            var params = paramUrl.split('&');
            params.reduce(function (paramMap, param) {
                var splits = param.split('=');
                if (splits.length) {
                    var name_1 = decodeURIComponent(splits.shift()), value = decodeURIComponent(splits.join('='));
                    paramMap[name_1] = value;
                }
                return paramMap;
            }, paramsMap);
        }
    }
    return paramsMap;
};
var randomLabel = function () { return Math.random().toString(36).substring(7); };
var generateRandomUID = function () { return Math.random().toString(16).substring(2); };
var capitalize = function (str) { return str.replace(/^\w/, function (c) { return c.toUpperCase(); }); };
function findLast(array, predicate) {
    for (var i = array.length - 1; i >= 0; i--) {
        if (predicate(array[i])) {
            return array[i];
        }
    }
    return null;
}
function shallowObjEqual(obj1, obj2) {
    for (var key in obj1) {
        if (!(key in obj2) || obj1[key] !== obj2[key]) {
            return false;
        }
    }
    for (var key in obj2) {
        if (!(key in obj1) || obj2[key] !== obj1[key]) {
            return false;
        }
    }
    return true;
}
var waitResolveAll = function (targets) {
    return new Promise(function (resolve, reject) {
        var numberOfResolved = 0;
        var results = new Array(targets.length);
        targets
            .map(function (target) { return (target instanceof Promise ? target : Promise.resolve(target)); }).forEach(function (targetPromise, index) {
            targetPromise
                .then(function (value) {
                results[index] = {
                    status: 'fulfilled',
                    value: value,
                };
            })
                .catch(function (reason) {
                results[index] = {
                    status: 'rejected',
                    reason: reason,
                };
            })
                .finally(function () {
                numberOfResolved++;
                if (numberOfResolved === targets.length) {
                    resolve(results);
                }
            });
        });
    });
};
exports.utils = {
    extractURLParams: extractURLParams,
    randomLabel: randomLabel,
    generateRandomUID: generateRandomUID,
    capitalize: capitalize,
    findLast: findLast,
    shallowObjEqual: shallowObjEqual,
    waitResolveAll: waitResolveAll,
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0Rldi9Eb2N1bWVudHMvcHJvamVjdHMvU2VydmljZVBhdHRlcm4vV2ViL2FnZW50L25vZGVfbW9kdWxlcy9sb2Rhc2gvZnJvbVBhaXJzLmpzIiwid2VicGFjazovLy8uLXR5cGVzL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4tdHlwZXMvZGlzdC9zcmMvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYy1jbGllbnQtYXBpLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRCO0FBQzVCLGlDOzs7Ozs7Ozs7Ozs7QUNEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNBO0FBQ0E7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDOzs7Ozs7Ozs7Ozs7QUMxR2E7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELGtDQUFrQyxtQkFBTyxDQUFDLGdFQUFrQjtBQUM1RCx1QkFBdUIsbUJBQU8sQ0FBQyw4REFBdUI7QUFDdEQsY0FBYyxtQkFBTyxDQUFDLHFDQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxtRUFBbUU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUhBQWlILDBCQUEwQixFQUFFO0FBQzdJLDBIQUEwSCx3QkFBd0IsRUFBRSxFQUFFO0FBQ3RKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsUUFBUTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELHNDQUFzQyxFQUFFO0FBQ3RHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFFQUFxRSwwQkFBMEIsRUFBRTtBQUNqRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELDJCQUEyQixFQUFFO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLG9DQUFvQyxFQUFFO0FBQ3RHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsdUNBQXVDO0FBQzNFO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDNVBhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsZ0RBQWdEO0FBQy9FLHFDQUFxQyxnREFBZ0Q7QUFDckYsaUNBQWlDLHlDQUF5Qyx3QkFBd0IsRUFBRSxFQUFFO0FBQ3RHO0FBQ0Esa0NBQWtDLFFBQVE7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHVFQUF1RSxFQUFFO0FBQzdHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9hZ2VudC9jb21tdW5pY2F0b3IvYWRhcHRlcnMvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2FkYy1jbGllbnQtYXBpLnRzXCIpO1xuIiwiLyoqXG4gKiBUaGUgaW52ZXJzZSBvZiBgXy50b1BhaXJzYDsgdGhpcyBtZXRob2QgcmV0dXJucyBhbiBvYmplY3QgY29tcG9zZWRcbiAqIGZyb20ga2V5LXZhbHVlIGBwYWlyc2AuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBwYWlycyBUaGUga2V5LXZhbHVlIHBhaXJzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IG9iamVjdC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5mcm9tUGFpcnMoW1snYScsIDFdLCBbJ2InLCAyXV0pO1xuICogLy8gPT4geyAnYSc6IDEsICdiJzogMiB9XG4gKi9cbmZ1bmN0aW9uIGZyb21QYWlycyhwYWlycykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHBhaXJzID09IG51bGwgPyAwIDogcGFpcnMubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0ge307XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgcGFpciA9IHBhaXJzW2luZGV4XTtcbiAgICByZXN1bHRbcGFpclswXV0gPSBwYWlyWzFdO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnJvbVBhaXJzO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9zcmMvdHlwZXMnO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJleHBvcnQgdmFyIHJlcXVlc3RNZXNzYWdlcyA9IFtcclxuICAgICdHRVRfQUdFTlRfU1RBVEUnLFxyXG4gICAgJ1NFVF9BR0VOVF9TVEFURScsXHJcbiAgICAnU1RBUlRfQ0FMTCcsXHJcbiAgICAnU1RBUlRfU01TX0NIQVQnLFxyXG4gICAgJ1NUQVJUX0VNQUlMJyxcclxuICAgICdURVJNSU5BVEVfQ0FMTCcsXHJcbiAgICAnQ09NUExFVEVfSU5URVJBQ1RJT04nLFxyXG4gICAgJ1NXSVRDSF9BQ1RJVkVfSU5URVJBQ1RJT04nLFxyXG4gICAgJ0NIQU5HRV9TRVJWSUNFJyxcclxuICAgICdTRVRfRElTUE9TSVRJT04nLFxyXG4gICAgJ0dFVF9DQUxMX1JFQ09SRElOR19TVEFUVVMnLFxyXG4gICAgJ1NFVF9DQUxMX1JFQ09SRElOR19TVEFUVVMnLFxyXG4gICAgJ0dFVF9TQ1JFRU5fUkVDT1JESU5HX1NUQVRVUycsXHJcbiAgICAnU0VUX1NDUkVFTl9SRUNPUkRJTkdfU1RBVFVTJyxcclxuICAgICdNVVRFX0FMTCcsXHJcbiAgICAnVU5NVVRFX0FMTCcsXHJcbiAgICAnR0VUX0NPTkZJRycsXHJcbiAgICAnU0VUX1ZBUklBQkxFJyxcclxuICAgICdXSURHRVRfTUlOSU1JWkVEJyxcclxuICAgICdXSURHRVRfTUFYSU1JWkVEJyxcclxuICAgICdBRERfSU5URVJBQ1RJT05fQVNTT0NJQVRFRF9PQkpFQ1QnLFxyXG4gICAgJ1NFVF9JTlRFUkFDVElPTl9BQ1RJVkVfU0NSRUVOJyxcclxuXTtcclxuZXhwb3J0IHZhciByZXF1ZXN0UmVzcG9uc2VNZXNzYWdlcyA9IFtcclxuICAgICdHRVRfQUdFTlRfU1RBVEVfUkVTUE9OU0UnLFxyXG4gICAgJ1NFVF9BR0VOVF9TVEFURV9SRVNQT05TRScsXHJcbiAgICAnU1RBUlRfQ0FMTF9SRVNQT05TRScsXHJcbiAgICAnU1RBUlRfU01TX0NIQVRfUkVTUE9OU0UnLFxyXG4gICAgJ1NUQVJUX0VNQUlMX1JFU1BPTlNFJyxcclxuICAgICdURVJNSU5BVEVfQ0FMTF9SRVNQT05TRScsXHJcbiAgICAnQ09NUExFVEVfSU5URVJBQ1RJT05fUkVTUE9OU0UnLFxyXG4gICAgJ1NXSVRDSF9BQ1RJVkVfSU5URVJBQ1RJT05fUkVTUE9OU0UnLFxyXG4gICAgJ0NIQU5HRV9TRVJWSUNFX1JFU1BPTlNFJyxcclxuICAgICdTRVRfRElTUE9TSVRJT05fUkVTUE9OU0UnLFxyXG4gICAgJ0dFVF9DQUxMX1JFQ09SRElOR19TVEFUVVNfUkVTUE9OU0UnLFxyXG4gICAgJ1NFVF9DQUxMX1JFQ09SRElOR19TVEFUVVNfUkVTUE9OU0UnLFxyXG4gICAgJ0dFVF9TQ1JFRU5fUkVDT1JESU5HX1NUQVRVU19SRVNQT05TRScsXHJcbiAgICAnU0VUX1NDUkVFTl9SRUNPUkRJTkdfU1RBVFVTX1JFU1BPTlNFJyxcclxuICAgICdNVVRFX0FMTF9SRVNQT05TRScsXHJcbiAgICAnVU5NVVRFX0FMTF9SRVNQT05TRScsXHJcbiAgICAnR0VUX0NPTkZJR19SRVNQT05TRScsXHJcbiAgICAnU0VUX1ZBUklBQkxFX1JFU1BPTlNFJyxcclxuICAgICdXSURHRVRfTUlOSU1JWkVEX1JFU1BPTlNFJyxcclxuICAgICdXSURHRVRfTUFYSU1JWkVEX1JFU1BPTlNFJyxcclxuICAgICdBRERfSU5URVJBQ1RJT05fQVNTT0NJQVRFRF9PQkpFQ1RfUkVTUE9OU0UnLFxyXG4gICAgJ1NFVF9JTlRFUkFDVElPTl9BQ1RJVkVfU0NSRUVOX1JFU1BPTlNFJyxcclxuXTtcclxuZXhwb3J0IHZhciBjYWxsYmFja01lc3NhZ2VzID0gW1xyXG4gICAgJ0xPR0lOJyxcclxuICAgICdMT0dPVVQnLFxyXG4gICAgJ05FV19JTlRFUkFDVElPTicsXHJcbiAgICAnSU5URVJBQ1RJT05fUkVNT1ZFRCcsXHJcbiAgICAnSU5URVJBQ1RJT05fU1RBVEVfQ0hBTkdFJyxcclxuICAgICdBQ1RJVkVfSU5URVJBQ1RJT05fU1dJVENIRUQnLFxyXG4gICAgJ0FHRU5UX1NUQVRFX0NIQU5HRScsXHJcbiAgICAnUkVRVUVTVF9UUkFOU0ZFUl9EQVRBJyxcclxuICAgICdMT0FEX1RSQU5TRkVSX0RBVEEnLFxyXG4gICAgJ01BTlVBTF9DQUxMJyxcclxuICAgICdNQVhJTUlaRV9XSURHRVQnLFxyXG4gICAgJ1NFQVJDSF9LTk9XTEVER0VfQkFTRScsXHJcbiAgICAnR0VUX0tOT1dMRURHRV9CQVNFX0FSVElDTEUnLFxyXG4gICAgJ1NIT1dfU0NSRUVOX1BPUCcsXHJcbiAgICAnU0VBUkNIX1JFQ09SRFMnLFxyXG4gICAgJ0FDVElWQVRFX0lOVEVSQUNUSU9OX1NDUkVFTicsXHJcbl07XHJcbmV4cG9ydCB2YXIgY2FsbGJhY2tSZXNwb25zZU1lc3NhZ2VzID0gW1xyXG4gICAgJ1JFUVVFU1RfVFJBTlNGRVJfREFUQV9SRVNQT05TRScsXHJcbiAgICAnU0VBUkNIX0tOT1dMRURHRV9CQVNFX1JFU1BPTlNFJyxcclxuICAgICdHRVRfS05PV0xFREdFX0JBU0VfQVJUSUNMRV9SRVNQT05TRScsXHJcbl07XHJcbnZhciByZXN1bHRTdGF0dXMgPSBbJ2Vycm9yJywgJ3N1Y2Nlc3MnXTtcclxudmFyIGludGVyYWN0aW9uU3RhdGUgPSBbJ3Vua25vd24nLCAncXVldWVkJywgJ2l2cicsICd3cmFwX3VwJywgJ3dyYXBfdXBfaG9sZCcsICdkZWxpdmVyZWQnLCAnZGVsaXZlcnlfcGVuZGluZycsICdob2xkJywgJ2NvbXBsZXRlZCddO1xyXG52YXIgY2FsbERpcmVjdGlvbiA9IFsnaW5ib3VuZCcsICdvdXRib3VuZCddO1xyXG52YXIgaW50ZXJhY3Rpb25UeXBlID0gWyd2b2ljZScsICdjaGF0JywgJ2VtYWlsJ107XHJcbmV4cG9ydCB2YXIgYWdlbnRTdGF0ZXMgPSBbJ3N1cGVydmlzaW5nJywgJ3JlYWR5JywgJ25vdF9yZWFkeScsICdidXN5JywgJ2FmdGVyX2NhbGxfd29yayddO1xyXG5leHBvcnQgdmFyIHJlY29yZGluZ1RhcmdldHMgPSBbJ2NhbGwnLCAnc2NyZWVuJ107XHJcbmV4cG9ydCB2YXIgcmVxdWVzdFJlc3BvbnNlTWFwID0ge1xyXG4gICAgJ0dFVF9BR0VOVF9TVEFURSc6ICdHRVRfQUdFTlRfU1RBVEVfUkVTUE9OU0UnLFxyXG4gICAgJ1NFVF9BR0VOVF9TVEFURSc6ICdTRVRfQUdFTlRfU1RBVEVfUkVTUE9OU0UnLFxyXG4gICAgJ1NUQVJUX0NBTEwnOiAnU1RBUlRfQ0FMTF9SRVNQT05TRScsXHJcbiAgICAnU1RBUlRfU01TX0NIQVQnOiAnU1RBUlRfU01TX0NIQVRfUkVTUE9OU0UnLFxyXG4gICAgJ1NUQVJUX0VNQUlMJzogJ1NUQVJUX0VNQUlMX1JFU1BPTlNFJyxcclxuICAgICdURVJNSU5BVEVfQ0FMTCc6ICdURVJNSU5BVEVfQ0FMTF9SRVNQT05TRScsXHJcbiAgICAnQ09NUExFVEVfSU5URVJBQ1RJT04nOiAnQ09NUExFVEVfSU5URVJBQ1RJT05fUkVTUE9OU0UnLFxyXG4gICAgJ1NXSVRDSF9BQ1RJVkVfSU5URVJBQ1RJT04nOiAnU1dJVENIX0FDVElWRV9JTlRFUkFDVElPTl9SRVNQT05TRScsXHJcbiAgICAnQ0hBTkdFX1NFUlZJQ0UnOiAnQ0hBTkdFX1NFUlZJQ0VfUkVTUE9OU0UnLFxyXG4gICAgJ1NFVF9ESVNQT1NJVElPTic6ICdTRVRfRElTUE9TSVRJT05fUkVTUE9OU0UnLFxyXG4gICAgJ0dFVF9DQUxMX1JFQ09SRElOR19TVEFUVVMnOiAnR0VUX0NBTExfUkVDT1JESU5HX1NUQVRVU19SRVNQT05TRScsXHJcbiAgICAnU0VUX0NBTExfUkVDT1JESU5HX1NUQVRVUyc6ICdTRVRfQ0FMTF9SRUNPUkRJTkdfU1RBVFVTX1JFU1BPTlNFJyxcclxuICAgICdHRVRfU0NSRUVOX1JFQ09SRElOR19TVEFUVVMnOiAnR0VUX1NDUkVFTl9SRUNPUkRJTkdfU1RBVFVTX1JFU1BPTlNFJyxcclxuICAgICdTRVRfU0NSRUVOX1JFQ09SRElOR19TVEFUVVMnOiAnU0VUX1NDUkVFTl9SRUNPUkRJTkdfU1RBVFVTX1JFU1BPTlNFJyxcclxuICAgICdNVVRFX0FMTCc6ICdNVVRFX0FMTF9SRVNQT05TRScsXHJcbiAgICAnVU5NVVRFX0FMTCc6ICdVTk1VVEVfQUxMX1JFU1BPTlNFJyxcclxuICAgICdHRVRfQ09ORklHJzogJ0dFVF9DT05GSUdfUkVTUE9OU0UnLFxyXG4gICAgJ1NFVF9WQVJJQUJMRSc6ICdTRVRfVkFSSUFCTEVfUkVTUE9OU0UnLFxyXG4gICAgJ1dJREdFVF9NSU5JTUlaRUQnOiAnV0lER0VUX01JTklNSVpFRF9SRVNQT05TRScsXHJcbiAgICAnV0lER0VUX01BWElNSVpFRCc6ICdXSURHRVRfTUFYSU1JWkVEX1JFU1BPTlNFJyxcclxuICAgICdBRERfSU5URVJBQ1RJT05fQVNTT0NJQVRFRF9PQkpFQ1QnOiAnQUREX0lOVEVSQUNUSU9OX0FTU09DSUFURURfT0JKRUNUX1JFU1BPTlNFJyxcclxuICAgICdTRVRfSU5URVJBQ1RJT05fQUNUSVZFX1NDUkVFTic6ICdTRVRfSU5URVJBQ1RJT05fQUNUSVZFX1NDUkVFTl9SRVNQT05TRScsXHJcbn07XHJcbmV4cG9ydCB2YXIgY2FsbGJhY2tSZXF1ZXN0UmVzcG9uc2VNYXAgPSB7XHJcbiAgICAnUkVRVUVTVF9UUkFOU0ZFUl9EQVRBJzogJ1JFUVVFU1RfVFJBTlNGRVJfREFUQV9SRVNQT05TRScsXHJcbiAgICAnU0VBUkNIX0tOT1dMRURHRV9CQVNFJzogJ1NFQVJDSF9LTk9XTEVER0VfQkFTRV9SRVNQT05TRScsXHJcbiAgICAnR0VUX0tOT1dMRURHRV9CQVNFX0FSVElDTEUnOiAnR0VUX0tOT1dMRURHRV9CQVNFX0FSVElDTEVfUkVTUE9OU0UnLFxyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD10eXBlcy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgZnJvbVBhaXJzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImxvZGFzaC9mcm9tUGFpcnNcIikpO1xyXG52YXIgYWRhcHRlcnNfdHlwZXNfMSA9IHJlcXVpcmUoXCJAYnBpbmMvYWRhcHRlcnMtdHlwZXNcIik7XHJcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XHJcbi8vIEluIG1pbGxpc2Vjb25kcyAobXMpXHJcbnZhciByZXNwb25zZVRpbWVvdXQgPSAxMDAwO1xyXG52YXIgc2VsZlNjcmlwdFVybCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAod2luZG93LmRvY3VtZW50LmN1cnJlbnRTY3JpcHQpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93LmRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0Jyk7XHJcbiAgICAgICAgdmFyIG15U2NyaXB0ID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIHJldHVybiBteVNjcmlwdC5zcmM7XHJcbiAgICB9XHJcbn0pKCk7XHJcbnZhciBhZGNPcmlnaW5PdmVycmlkZSA9IHV0aWxzXzEudXRpbHMuZXh0cmFjdFVSTFBhcmFtcyh3aW5kb3cubG9jYXRpb24uaHJlZilbJ2FkY1VybCddO1xyXG52YXIgYWRjT3JpZ2luID0gYWRjT3JpZ2luT3ZlcnJpZGUgfHwgbmV3IFVSTChzZWxmU2NyaXB0VXJsKS5vcmlnaW47IC8vICdodHRwczovL2FkY29tbXVuaWNhdG9yLndlYi5hcHAnXHJcbnZhciBBZ2VudERlc2t0b3BDbGllbnRBUEkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBBZ2VudERlc2t0b3BDbGllbnRBUEkoaW50ZWdyYXRpb25LZXksIG1vdW50Um9vdCkge1xyXG4gICAgICAgIHRoaXMuYWRjRnJhbWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYWRjRnJhbWVPcmlnaW4gPSAnJztcclxuICAgICAgICB0aGlzLnBlbmRpbmdNZXNzYWdlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuaW50ZWdyYXRpb25LZXkgPSBpbnRlZ3JhdGlvbktleSB8fCB1dGlsc18xLnV0aWxzLmdlbmVyYXRlUmFuZG9tVUlEKCk7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uRXN0YWJsaXNoZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmluY29taW5nTWVzc2FnZUxvZ2dlcnMgPSBbXTtcclxuICAgICAgICB0aGlzLm91dGdvaW5nTWVzc2FnZUxvZ2dlcnMgPSBbXTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVycyA9IGZyb21QYWlyc18xLmRlZmF1bHQoYWRhcHRlcnNfdHlwZXNfMS5jYWxsYmFja01lc3NhZ2VzLm1hcChmdW5jdGlvbiAobWVzc2FnZVR5cGUpIHsgcmV0dXJuIFttZXNzYWdlVHlwZSwgW11dOyB9KSk7XHJcbiAgICAgICAgdGhpcy5yZXNwb25zZUNhbGxiYWNrcyA9IGZyb21QYWlyc18xLmRlZmF1bHQoYWRhcHRlcnNfdHlwZXNfMS5yZXF1ZXN0UmVzcG9uc2VNZXNzYWdlcy5tYXAoZnVuY3Rpb24gKG1lc3NhZ2VUeXBlKSB7IHJldHVybiBbbWVzc2FnZVR5cGUsIHt9XTsgfSkpO1xyXG4gICAgICAgIHRoaXMucHJlcGFyZUFkY0lmcmFtZShtb3VudFJvb3QpO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuICAgIEFnZW50RGVza3RvcENsaWVudEFQSS5wcm90b3R5cGUuaW5qZWN0SW5jb21pbmdNZXNzYWdlTG9nZ2VyID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5pbmNvbWluZ01lc3NhZ2VMb2dnZXJzLnB1c2goY2FsbGJhY2spO1xyXG4gICAgfTtcclxuICAgIEFnZW50RGVza3RvcENsaWVudEFQSS5wcm90b3R5cGUuaW5qZWN0T3V0Z29pbmdNZXNzYWdlTG9nZ2VyID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5vdXRnb2luZ01lc3NhZ2VMb2dnZXJzLnB1c2goY2FsbGJhY2spO1xyXG4gICAgfTtcclxuICAgIEFnZW50RGVza3RvcENsaWVudEFQSS5wcm90b3R5cGUucHJlcGFyZUFkY0lmcmFtZSA9IGZ1bmN0aW9uIChtb3VudFJvb3QpIHtcclxuICAgICAgICBtb3VudFJvb3QgPSAobW91bnRSb290ICYmIG1vdW50Um9vdC5hcHBlbmRDaGlsZCkgPyBtb3VudFJvb3QgOiBkb2N1bWVudC5ib2R5O1xyXG4gICAgICAgIHRoaXMuYWRjRnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcclxuICAgICAgICB0aGlzLmFkY0ZyYW1lLnRpdGxlID0gJ0FnZW50IERlc2t0b3AgQ29tbXVuaWNhdG9yJztcclxuICAgICAgICB0aGlzLmFkY0ZyYW1lLmlkID0gJ2FkY19mcmFtZSc7XHJcbiAgICAgICAgdGhpcy5hZGNGcmFtZS5zdHlsZS5ib3JkZXIgPSAnbm9uZSc7XHJcbiAgICAgICAgdGhpcy5hZGNGcmFtZS53aWR0aCA9ICc1MDAnO1xyXG4gICAgICAgIHRoaXMuYWRjRnJhbWUuaGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgICAgIHRoaXMuYWRjRnJhbWUuYWxsb3cgPSAnbWljcm9waG9uZTsgY2FtZXJhOyBnZW9sb2NhdGlvbic7XHJcbiAgICAgICAgdGhpcy5hZGNGcmFtZS5zcmMgPSBhZGNPcmlnaW4gKyAnL2FnZW50L2NvbW11bmljYXRvci8nO1xyXG4gICAgICAgIHRoaXMuYWRjRnJhbWUub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignQEBAIEFkYXB0ZXIgZmFpbHVyZTogdW5hYmxlIHRvIGxvYWQgQXBpIFByb3h5IGlmcmFtZScpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgbW91bnRSb290LmFwcGVuZENoaWxkKHRoaXMuYWRjRnJhbWUpO1xyXG4gICAgICAgIHRoaXMuYWRjRnJhbWVPcmlnaW4gPSAobmV3IFVSTCh0aGlzLmFkY0ZyYW1lLnNyYykpLm9yaWdpbjtcclxuICAgIH07XHJcbiAgICBBZ2VudERlc2t0b3BDbGllbnRBUEkucHJvdG90eXBlLmhhbmRsZUluY29taW5nTWVzc2FnZSA9IGZ1bmN0aW9uICh0eXBlLCB1aWQsIHBhcmFtcykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0BAQCBIYW5kbGU6ICcsIHR5cGUsIHVpZCwgcGFyYW1zKTtcclxuICAgICAgICB2YXIgaGFuZGxlcnMgPSB0aGlzLm1lc3NhZ2VIYW5kbGVyc1t0eXBlXTtcclxuICAgICAgICB2YXIgcGVuZGluZ1Jlc3VsdHMgPSBoYW5kbGVycy5tYXAoZnVuY3Rpb24gKGhhbmRsZXIpIHsgcmV0dXJuIGhhbmRsZXIuYXBwbHkodm9pZCAwLCBwYXJhbXMpOyB9KTtcclxuICAgICAgICB1dGlsc18xLnV0aWxzLndhaXRSZXNvbHZlQWxsKHBlbmRpbmdSZXN1bHRzKS50aGVuKGZ1bmN0aW9uIChwcm9taXNlUmVzdWx0cykge1xyXG4gICAgICAgICAgICB2YXIgcG9zaXRpdmVSZXN1bHRzID0gcHJvbWlzZVJlc3VsdHMucmVkdWNlKGZ1bmN0aW9uIChhcnIsIHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09ICdmdWxmaWxsZWQnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnZhbHVlICE9PSBudWxsICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChyZXN1bHQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFycjtcclxuICAgICAgICAgICAgfSwgW10pO1xyXG4gICAgICAgICAgICB2YXIgbGFzdFZhbHVlID0gcG9zaXRpdmVSZXN1bHRzLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgPyBwb3NpdGl2ZVJlc3VsdHNbcG9zaXRpdmVSZXN1bHRzLmxlbmd0aCAtIDFdXHJcbiAgICAgICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChhZGFwdGVyc190eXBlc18xLmNhbGxiYWNrUmVzcG9uc2VNZXNzYWdlcy5pbmNsdWRlcyh0eXBlICsgXCJfUkVTUE9OU0VcIikpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnBvc3RNZXNzYWdlVG9BZGMoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVpZDogdWlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUgKyBcIl9SRVNQT05TRVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczogW2xhc3RWYWx1ZV0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEFnZW50RGVza3RvcENsaWVudEFQSS5wcm90b3R5cGUucmVnaXN0ZXJMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChlLm9yaWdpbiAhPT0gX3RoaXMuYWRjRnJhbWVPcmlnaW4pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBpZiAoIWUuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBfYSA9IGUuZGF0YSwgdHlwZSA9IF9hLnR5cGUsIHVpZCA9IF9hLnVpZCwgcGFyYW1zID0gX2EucGFyYW1zO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuaW5jb21pbmdNZXNzYWdlTG9nZ2Vycy5mb3JFYWNoKGZ1bmN0aW9uIChsb2cpIHsgcmV0dXJuIGxvZyh0eXBlLCBwYXJhbXMpOyB9KTtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnaGVsbG8nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY29ubmVjdGlvbkVzdGFibGlzaGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5wb3N0TWVzc2FnZVRvQWRjKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdWlkOiB1aWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdoaScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogW190aGlzLmludGVncmF0aW9uS2V5XSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucGVuZGluZ01lc3NhZ2VzLmZvckVhY2goZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnBvc3RNZXNzYWdlVG9BZGMobWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5wZW5kaW5nTWVzc2FnZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIV90aGlzLmNvbm5lY3Rpb25Fc3RhYmxpc2hlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChhZGFwdGVyc190eXBlc18xLmNhbGxiYWNrTWVzc2FnZXMuaW5jbHVkZXModHlwZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5oYW5kbGVJbmNvbWluZ01lc3NhZ2UodHlwZSwgdWlkLCBwYXJhbXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYWRhcHRlcnNfdHlwZXNfMS5yZXF1ZXN0UmVzcG9uc2VNZXNzYWdlcy5pbmNsdWRlcyh0eXBlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB3YWl0aW5nID0gX3RoaXMucmVzcG9uc2VDYWxsYmFja3NbdHlwZV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdhaXRpbmcgJiYgd2FpdGluZ1t1aWRdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjYWxsYmFja18xID0gd2FpdGluZ1t1aWRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgd2FpdGluZ1t1aWRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNhbGxiYWNrXzEocGFyYW1zKTsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdAQEAgR2V0IHVua25vd24gbWVzc2FnZSBmcm9tIENvbW11bmljYXRvcjogJywgdHlwZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0BAQCBFcnJvcjogJywgZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEFnZW50RGVza3RvcENsaWVudEFQSS5wcm90b3R5cGUucnVuUmVzcG9uc2VUaW1lb3V0V2F0Y2ggPSBmdW5jdGlvbiAodHlwZSwgdWlkLCByZXNvbHZlKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGNhbGxiYWNrc01hcCA9IF90aGlzLnJlc3BvbnNlQ2FsbGJhY2tzW3R5cGUgKyBcIl9SRVNQT05TRVwiXTtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrc01hcFt1aWRdKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgY2FsbGJhY2tzTWFwW3VpZF07XHJcbiAgICAgICAgICAgICAgICB2YXIgZXJyb3JUZXh0ID0gXCJSZXNwb25zZSBmcm9tIENvbW11bmljYXRvciBmb3IgZXZlbnQgXCIgKyB0eXBlICsgXCIgd2Fzbid0IHJlY2VpdmVkIGluIHNwZWNpZmllZCB0aW1lb3V0OiBcIiArIHJlc3BvbnNlVGltZW91dDtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJAQEAgXCIgKyBlcnJvclRleHQpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCByZXNwb25zZVRpbWVvdXQpO1xyXG4gICAgfTtcclxuICAgIEFnZW50RGVza3RvcENsaWVudEFQSS5wcm90b3R5cGUucG9zdE1lc3NhZ2VUb0FkYyA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWRjRnJhbWUgIT09IG51bGwgJiYgdGhpcy5hZGNGcmFtZS5jb250ZW50V2luZG93ICYmIHRoaXMuY29ubmVjdGlvbkVzdGFibGlzaGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3V0Z29pbmdNZXNzYWdlTG9nZ2Vycy5mb3JFYWNoKGZ1bmN0aW9uIChsb2cpIHsgcmV0dXJuIGxvZyhkYXRhLnR5cGUsIGRhdGEucGFyYW1zKTsgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdAQEAgQURBUFRFUiBTRU5EIE1FU1NBR0U6ICcsIGRhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLmFkY0ZyYW1lLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UoZGF0YSwgdGhpcy5hZGNGcmFtZU9yaWdpbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBlbmRpbmdNZXNzYWdlcy5wdXNoKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBBZ2VudERlc2t0b3BDbGllbnRBUEkucHJvdG90eXBlLmFwaUNhbGwgPSBmdW5jdGlvbiAodHlwZSwgcGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcclxuICAgICAgICAgICAgdmFyIHVpZCA9IHV0aWxzXzEudXRpbHMuZ2VuZXJhdGVSYW5kb21VSUQoKTtcclxuICAgICAgICAgICAgX3RoaXMucG9zdE1lc3NhZ2VUb0FkYyh7IHVpZDogdWlkLCB0eXBlOiB0eXBlLCBwYXJhbXM6IHBhcmFtcyB9KTtcclxuICAgICAgICAgICAgdmFyIHdhaXRpbmcgPSBfdGhpcy5yZXNwb25zZUNhbGxiYWNrc1t0eXBlICsgXCJfUkVTUE9OU0VcIl07XHJcbiAgICAgICAgICAgIHdhaXRpbmdbdWlkXSA9IHJlc29sdmU7XHJcbiAgICAgICAgICAgIF90aGlzLnJ1blJlc3BvbnNlVGltZW91dFdhdGNoKHR5cGUsIHVpZCwgcmVzb2x2ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgQWdlbnREZXNrdG9wQ2xpZW50QVBJLnByb3RvdHlwZS5nZXRBZ2VudFN0YXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwaUNhbGwoJ0dFVF9BR0VOVF9TVEFURScpO1xyXG4gICAgfTtcclxuICAgIEFnZW50RGVza3RvcENsaWVudEFQSS5wcm90b3R5cGUuc2V0QWdlbnRTdGF0ZSA9IGZ1bmN0aW9uIChzdGF0ZSwgbm90UmVhZHlSZWFzb24pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcGlDYWxsKCdTRVRfQUdFTlRfU1RBVEUnLCBbc3RhdGUsIG5vdFJlYWR5UmVhc29uXSk7XHJcbiAgICB9O1xyXG4gICAgQWdlbnREZXNrdG9wQ2xpZW50QVBJLnByb3RvdHlwZS5zdGFydENhbGwgPSBmdW5jdGlvbiAocGhvbmVudW1iZXIsIGluaXRpYWxPYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcGlDYWxsKCdTVEFSVF9DQUxMJywgW3Bob25lbnVtYmVyLCBpbml0aWFsT2JqZWN0IHx8IG51bGxdKTtcclxuICAgIH07XHJcbiAgICBBZ2VudERlc2t0b3BDbGllbnRBUEkucHJvdG90eXBlLnN0YXJ0U01TQ2hhdCA9IGZ1bmN0aW9uIChwaG9uZW51bWJlciwgaW5pdGlhbE9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwaUNhbGwoJ1NUQVJUX1NNU19DSEFUJywgW3Bob25lbnVtYmVyLCBpbml0aWFsT2JqZWN0IHx8IG51bGxdKTtcclxuICAgIH07XHJcbiAgICBBZ2VudERlc2t0b3BDbGllbnRBUEkucHJvdG90eXBlLnN0YXJ0RW1haWwgPSBmdW5jdGlvbiAoZW1haWwsIGluaXRpYWxPYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcGlDYWxsKCdTVEFSVF9FTUFJTCcsIFtlbWFpbCwgaW5pdGlhbE9iamVjdCB8fCBudWxsXSk7XHJcbiAgICB9O1xyXG4gICAgQWdlbnREZXNrdG9wQ2xpZW50QVBJLnByb3RvdHlwZS50ZXJtaW5hdGVDYWxsID0gZnVuY3Rpb24gKGludGVyYWN0aW9uSWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcGlDYWxsKCdURVJNSU5BVEVfQ0FMTCcsIFtpbnRlcmFjdGlvbklkXSk7XHJcbiAgICB9O1xyXG4gICAgQWdlbnREZXNrdG9wQ2xpZW50QVBJLnByb3RvdHlwZS5jb21wbGV0ZUludGVyYWN0aW9uID0gZnVuY3Rpb24gKGludGVyYWN0aW9uSWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcGlDYWxsKCdDT01QTEVURV9JTlRFUkFDVElPTicsIFtpbnRlcmFjdGlvbklkXSk7XHJcbiAgICB9O1xyXG4gICAgQWdlbnREZXNrdG9wQ2xpZW50QVBJLnByb3RvdHlwZS5zd2l0Y2hBY3RpdmVJbnRlcmFjdGlvbiA9IGZ1bmN0aW9uIChpbnRlcmFjdGlvbklkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpQ2FsbCgnU1dJVENIX0FDVElWRV9JTlRFUkFDVElPTicsIFtpbnRlcmFjdGlvbklkXSk7XHJcbiAgICB9O1xyXG4gICAgQWdlbnREZXNrdG9wQ2xpZW50QVBJLnByb3RvdHlwZS5jaGFuZ2VTZXJ2aWNlID0gZnVuY3Rpb24gKHNlcnZpY2VOYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpQ2FsbCgnQ0hBTkdFX1NFUlZJQ0UnLCBbc2VydmljZU5hbWVdKTtcclxuICAgIH07XHJcbiAgICBBZ2VudERlc2t0b3BDbGllbnRBUEkucHJvdG90eXBlLnNldERpc3Bvc2l0aW9uID0gZnVuY3Rpb24gKGRpc3Bvc2l0aW9uRGF0YSwgaW50ZXJhY3Rpb25JZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwaUNhbGwoJ1NFVF9ESVNQT1NJVElPTicsIFtkaXNwb3NpdGlvbkRhdGEsIGludGVyYWN0aW9uSWRdKTtcclxuICAgIH07XHJcbiAgICBBZ2VudERlc2t0b3BDbGllbnRBUEkucHJvdG90eXBlLmdldENhbGxSZWNvcmRpbmdTdGF0dXMgPSBmdW5jdGlvbiAoaW50ZXJhY3Rpb25JZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwaUNhbGwoJ0dFVF9DQUxMX1JFQ09SRElOR19TVEFUVVMnLCBbaW50ZXJhY3Rpb25JZF0pO1xyXG4gICAgfTtcclxuICAgIEFnZW50RGVza3RvcENsaWVudEFQSS5wcm90b3R5cGUuc2V0Q2FsbFJlY29yZGluZ1N0YXR1cyA9IGZ1bmN0aW9uIChuZXdTdGF0dXMsIGludGVyYWN0aW9uSWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcGlDYWxsKCdTRVRfQ0FMTF9SRUNPUkRJTkdfU1RBVFVTJywgW25ld1N0YXR1cywgaW50ZXJhY3Rpb25JZF0pO1xyXG4gICAgfTtcclxuICAgIEFnZW50RGVza3RvcENsaWVudEFQSS5wcm90b3R5cGUuZ2V0U2NyZWVuUmVjb3JkaW5nU3RhdHVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwaUNhbGwoJ0dFVF9TQ1JFRU5fUkVDT1JESU5HX1NUQVRVUycpO1xyXG4gICAgfTtcclxuICAgIEFnZW50RGVza3RvcENsaWVudEFQSS5wcm90b3R5cGUuc2V0U2NyZWVuUmVjb3JkaW5nU3RhdHVzID0gZnVuY3Rpb24gKG5ld1N0YXR1cykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwaUNhbGwoJ1NFVF9TQ1JFRU5fUkVDT1JESU5HX1NUQVRVUycsIFtuZXdTdGF0dXNdKTtcclxuICAgIH07XHJcbiAgICBBZ2VudERlc2t0b3BDbGllbnRBUEkucHJvdG90eXBlLm11dGVBbGwgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpQ2FsbCgnTVVURV9BTEwnLCBbdGFyZ2V0XSk7XHJcbiAgICB9O1xyXG4gICAgQWdlbnREZXNrdG9wQ2xpZW50QVBJLnByb3RvdHlwZS51bm11dGVBbGwgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpQ2FsbCgnVU5NVVRFX0FMTCcsIFt0YXJnZXRdKTtcclxuICAgIH07XHJcbiAgICBBZ2VudERlc2t0b3BDbGllbnRBUEkucHJvdG90eXBlLmdldENvbmZpZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcGlDYWxsKCdHRVRfQ09ORklHJyk7XHJcbiAgICB9O1xyXG4gICAgQWdlbnREZXNrdG9wQ2xpZW50QVBJLnByb3RvdHlwZS5zZXRWYXJpYWJsZSA9IGZ1bmN0aW9uIChrZXksIHZhbHVlLCBpbnRlcmFjdGlvbklkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpQ2FsbCgnU0VUX1ZBUklBQkxFJywgW2tleSwgdmFsdWUsIGludGVyYWN0aW9uSWRdKTtcclxuICAgIH07XHJcbiAgICBBZ2VudERlc2t0b3BDbGllbnRBUEkucHJvdG90eXBlLm5vdGlmeVdpZGdldE1pbmltaXplZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcGlDYWxsKCdXSURHRVRfTUlOSU1JWkVEJyk7XHJcbiAgICB9O1xyXG4gICAgQWdlbnREZXNrdG9wQ2xpZW50QVBJLnByb3RvdHlwZS5ub3RpZnlXaWRnZXRNYXhpbWl6ZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpQ2FsbCgnV0lER0VUX01BWElNSVpFRCcpO1xyXG4gICAgfTtcclxuICAgIEFnZW50RGVza3RvcENsaWVudEFQSS5wcm90b3R5cGUuYWRkSW50ZXJhY3Rpb25Bc3NvY2lhdGVkT2JqZWN0ID0gZnVuY3Rpb24gKG9iamVjdCwgaW50ZXJhY3Rpb25JZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwaUNhbGwoJ0FERF9JTlRFUkFDVElPTl9BU1NPQ0lBVEVEX09CSkVDVCcsIFtvYmplY3QsIGludGVyYWN0aW9uSWRdKTtcclxuICAgIH07XHJcbiAgICBBZ2VudERlc2t0b3BDbGllbnRBUEkucHJvdG90eXBlLnNldEludGVyYWN0aW9uQWN0aXZlU2NyZWVuID0gZnVuY3Rpb24gKHNjcmVlbkRhdGEsIGludGVyYWN0aW9uSWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcGlDYWxsKCdTRVRfSU5URVJBQ1RJT05fQUNUSVZFX1NDUkVFTicsIFtzY3JlZW5EYXRhLCBpbnRlcmFjdGlvbklkXSk7XHJcbiAgICB9O1xyXG4gICAgQWdlbnREZXNrdG9wQ2xpZW50QVBJLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIChtZXNzYWdlLCBoYW5kbGVyKSB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcnNbbWVzc2FnZV0ucHVzaChoYW5kbGVyKTtcclxuICAgIH07XHJcbiAgICBBZ2VudERlc2t0b3BDbGllbnRBUEkucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChtZXNzYWdlLCBoYW5kbGVyKSB7XHJcbiAgICAgICAgdmFyIGRlbEluZGV4ID0gdGhpcy5tZXNzYWdlSGFuZGxlcnNbbWVzc2FnZV0uaW5kZXhPZihoYW5kbGVyKTtcclxuICAgICAgICBpZiAoZGVsSW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXJzW21lc3NhZ2VdLnNwbGljZShkZWxJbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBBZ2VudERlc2t0b3BDbGllbnRBUEk7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQWdlbnREZXNrdG9wQ2xpZW50QVBJID0gQWdlbnREZXNrdG9wQ2xpZW50QVBJO1xyXG53aW5kb3cuYnJpZ2h0cGF0dGVybiA9IHtcclxuICAgIEFkQXBpOiBBZ2VudERlc2t0b3BDbGllbnRBUEksXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBleHRyYWN0VVJMUGFyYW1zID0gZnVuY3Rpb24gKHVybCkge1xyXG4gICAgdmFyIHBhcmFtc01hcCA9IHt9O1xyXG4gICAgaWYgKHVybCkge1xyXG4gICAgICAgIHZhciBwYXJhbVVybCA9IHVybC5zcGxpdCgnPycpLnNsaWNlKDEpLmpvaW4oJz8nKTtcclxuICAgICAgICBpZiAocGFyYW1VcmwubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZhciBwYXJhbXMgPSBwYXJhbVVybC5zcGxpdCgnJicpO1xyXG4gICAgICAgICAgICBwYXJhbXMucmVkdWNlKGZ1bmN0aW9uIChwYXJhbU1hcCwgcGFyYW0pIHtcclxuICAgICAgICAgICAgICAgIHZhciBzcGxpdHMgPSBwYXJhbS5zcGxpdCgnPScpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNwbGl0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZV8xID0gZGVjb2RlVVJJQ29tcG9uZW50KHNwbGl0cy5zaGlmdCgpKSwgdmFsdWUgPSBkZWNvZGVVUklDb21wb25lbnQoc3BsaXRzLmpvaW4oJz0nKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1NYXBbbmFtZV8xXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcmFtTWFwO1xyXG4gICAgICAgICAgICB9LCBwYXJhbXNNYXApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBwYXJhbXNNYXA7XHJcbn07XHJcbnZhciByYW5kb21MYWJlbCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KTsgfTtcclxudmFyIGdlbmVyYXRlUmFuZG9tVUlEID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygxNikuc3Vic3RyaW5nKDIpOyB9O1xyXG52YXIgY2FwaXRhbGl6ZSA9IGZ1bmN0aW9uIChzdHIpIHsgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFx3LywgZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMudG9VcHBlckNhc2UoKTsgfSk7IH07XHJcbmZ1bmN0aW9uIGZpbmRMYXN0KGFycmF5LCBwcmVkaWNhdGUpIHtcclxuICAgIGZvciAodmFyIGkgPSBhcnJheS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgIGlmIChwcmVkaWNhdGUoYXJyYXlbaV0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhcnJheVtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5mdW5jdGlvbiBzaGFsbG93T2JqRXF1YWwob2JqMSwgb2JqMikge1xyXG4gICAgZm9yICh2YXIga2V5IGluIG9iajEpIHtcclxuICAgICAgICBpZiAoIShrZXkgaW4gb2JqMikgfHwgb2JqMVtrZXldICE9PSBvYmoyW2tleV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZvciAodmFyIGtleSBpbiBvYmoyKSB7XHJcbiAgICAgICAgaWYgKCEoa2V5IGluIG9iajEpIHx8IG9iajJba2V5XSAhPT0gb2JqMVtrZXldKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG52YXIgd2FpdFJlc29sdmVBbGwgPSBmdW5jdGlvbiAodGFyZ2V0cykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICB2YXIgbnVtYmVyT2ZSZXNvbHZlZCA9IDA7XHJcbiAgICAgICAgdmFyIHJlc3VsdHMgPSBuZXcgQXJyYXkodGFyZ2V0cy5sZW5ndGgpO1xyXG4gICAgICAgIHRhcmdldHNcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAodGFyZ2V0KSB7IHJldHVybiAodGFyZ2V0IGluc3RhbmNlb2YgUHJvbWlzZSA/IHRhcmdldCA6IFByb21pc2UucmVzb2x2ZSh0YXJnZXQpKTsgfSkuZm9yRWFjaChmdW5jdGlvbiAodGFyZ2V0UHJvbWlzZSwgaW5kZXgpIHtcclxuICAgICAgICAgICAgdGFyZ2V0UHJvbWlzZVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRzW2luZGV4XSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICdmdWxmaWxsZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlYXNvbikge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0c1tpbmRleF0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAncmVqZWN0ZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYXNvbjogcmVhc29uLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5maW5hbGx5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIG51bWJlck9mUmVzb2x2ZWQrKztcclxuICAgICAgICAgICAgICAgIGlmIChudW1iZXJPZlJlc29sdmVkID09PSB0YXJnZXRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0cyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcbmV4cG9ydHMudXRpbHMgPSB7XHJcbiAgICBleHRyYWN0VVJMUGFyYW1zOiBleHRyYWN0VVJMUGFyYW1zLFxyXG4gICAgcmFuZG9tTGFiZWw6IHJhbmRvbUxhYmVsLFxyXG4gICAgZ2VuZXJhdGVSYW5kb21VSUQ6IGdlbmVyYXRlUmFuZG9tVUlELFxyXG4gICAgY2FwaXRhbGl6ZTogY2FwaXRhbGl6ZSxcclxuICAgIGZpbmRMYXN0OiBmaW5kTGFzdCxcclxuICAgIHNoYWxsb3dPYmpFcXVhbDogc2hhbGxvd09iakVxdWFsLFxyXG4gICAgd2FpdFJlc29sdmVBbGw6IHdhaXRSZXNvbHZlQWxsLFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9