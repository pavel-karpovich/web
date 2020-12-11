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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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

/***/ "./src/integrations/lightning/LightningAPIWrapper.ts":
/*!***********************************************************!*\
  !*** ./src/integrations/lightning/LightningAPIWrapper.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var LightningAPI = /** @class */ (function () {
    function LightningAPI() {
        this.clickToDialHandlers = [];
        this.focusHandlers = [];
        this.workStartHandlers = [];
        this.registerHandlers();
        this.notifyInitializationComplete();
    }
    LightningAPI.prototype.registerHandlers = function () {
        var _this = this;
        window.sforce.opencti.onClickToDial({
            listener: function (resp) {
                if ('error' in resp) {
                    console.error('clickToDial return error: ', resp.error);
                    _this.onClickToDial(null, resp.error);
                }
                else {
                    _this.onClickToDial(resp);
                }
            },
        });
        window.sforce.opencti.onNavigationChange({
            listener: function (resp) {
                _this.onNavigationChange(resp);
            },
        });
        window.sforce.opencti.hvs.onWorkStart({
            listener: function (resp) {
                _this.onWorkStart(resp);
            },
        });
    };
    LightningAPI.prototype.onClickToDial = function (dialEntity, error) {
        this.clickToDialHandlers.forEach(function (handler) { return handler(dialEntity, error); });
    };
    LightningAPI.prototype.onNavigationChange = function (navigationEntity) {
        this.focusHandlers.forEach(function (handler) { return handler(navigationEntity); });
    };
    LightningAPI.prototype.onWorkStart = function (workData) {
        this.workStartHandlers.forEach(function (handler) { return handler(workData); });
    };
    LightningAPI.prototype.addOnClickToDialHandler = function (handler) {
        this.clickToDialHandlers.push(handler);
    };
    LightningAPI.prototype.addOnNavigationChangeHandler = function (handler) {
        this.focusHandlers.push(handler);
    };
    LightningAPI.prototype.addOnWorkStartHandler = function (handler) {
        this.workStartHandlers.push(handler);
    };
    LightningAPI.prototype.notifyInitializationComplete = function () {
        window.sforce.opencti.notifyInitializationComplete({
            callback: function (resp) {
                if (resp.success) {
                    console.log('notifyInitializationComplete: successful');
                }
                else {
                    console.error('notifyInitializationComplete: error');
                }
            },
        });
    };
    LightningAPI.prototype.apiCall = function (apiFn, payload) {
        return new Promise(function (res, rej) {
            apiFn(__assign({ callback: function (resp) {
                    if (resp.success) {
                        res(resp.returnValue);
                    }
                    else {
                        rej(resp.errors);
                    }
                } }, payload));
        });
    };
    LightningAPI.prototype.disableClickToDial = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.apiCall(window.sforce.opencti.disableClickToDial)];
            });
        });
    };
    LightningAPI.prototype.enableClickToDial = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.apiCall(window.sforce.opencti.enableClickToDial)];
            });
        });
    };
    LightningAPI.prototype.getCallCenterSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.apiCall(window.sforce.opencti.getCallCenterSettings)];
            });
        });
    };
    LightningAPI.prototype.getAppViewInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.apiCall(window.sforce.opencti.getAppViewInfo)];
            });
        });
    };
    LightningAPI.prototype.getSoftphoneLayout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.apiCall(window.sforce.opencti.getSoftphoneLayout)];
            });
        });
    };
    LightningAPI.prototype.completeWork = function (workItem) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.apiCall(window.sforce.opencti.hvs.completeWork, workItem)];
            });
        });
    };
    LightningAPI.prototype.isSoftphonePanelVisible = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.apiCall(window.sforce.opencti.isSoftphonePanelVisible).then(function (result) { return result.visible; })];
            });
        });
    };
    LightningAPI.prototype.refreshView = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.apiCall(window.sforce.opencti.refreshView)];
            });
        });
    };
    LightningAPI.prototype.runApex = function (apexData) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.apiCall(window.sforce.opencti.runApex, apexData)];
            });
        });
    };
    LightningAPI.prototype.saveLog = function (entity) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.apiCall(window.sforce.opencti.saveLog, { value: entity })];
            });
        });
    };
    LightningAPI.prototype.screenPop = function (type, params, defaultValues) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.apiCall(window.sforce.opencti.screenPop, {
                        type: type,
                        params: params,
                        defaultFieldValues: defaultValues,
                    })];
            });
        });
    };
    LightningAPI.prototype.searchAndScreenPop = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.apiCall(window.sforce.opencti.searchAndScreenPop, params)];
            });
        });
    };
    LightningAPI.prototype.setSoftphoneItemIcon = function (icon) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.apiCall(window.sforce.opencti.setSoftphoneItemIcon, { key: icon })];
            });
        });
    };
    LightningAPI.prototype.setSoftphoneItemLabel = function (label) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.apiCall(window.sforce.opencti.setSoftphoneItemLabel, { label: label })];
            });
        });
    };
    LightningAPI.prototype.setSoftphonePanelHeight = function (height) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.apiCall(window.sforce.opencti.setSoftphonePanelHeight, { heightPX: height })];
            });
        });
    };
    LightningAPI.prototype.setSoftphonePanelIcon = function (icon) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.apiCall(window.sforce.opencti.setSoftphonePanelIcon, { key: icon })];
            });
        });
    };
    LightningAPI.prototype.setSoftphonePanelLabel = function (label) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.apiCall(window.sforce.opencti.setSoftphonePanelLabel, { label: label })];
            });
        });
    };
    LightningAPI.prototype.setSoftphonePanelVisibility = function (visible) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.apiCall(window.sforce.opencti.setSoftphonePanelVisibility, { visible: visible })];
            });
        });
    };
    LightningAPI.prototype.setSoftphonePanelWidth = function (width) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.apiCall(window.sforce.opencti.setSoftphonePanelWidth, { widthPX: width })];
            });
        });
    };
    LightningAPI.prototype.subscribe = function (channel, listener) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (res, rej) {
                        window.sforce.opencti.subscribe({
                            channelName: channel,
                            listener: listener,
                            callback: function (resp) {
                                if (resp.success) {
                                    res(resp.subscription);
                                }
                                else {
                                    rej(resp.errors);
                                }
                            },
                        });
                    })];
            });
        });
    };
    LightningAPI.prototype.unsubscribe = function (subscription) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.apiCall(window.sforce.opencti.unsubscribe, { subscription: subscription })];
            });
        });
    };
    LightningAPI.prototype.publish = function (channel, message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.apiCall(window.sforce.opencti.publish, {
                        channelName: channel,
                        message: message,
                    })];
            });
        });
    };
    return LightningAPI;
}());
exports.LightningAPI = LightningAPI;


/***/ }),

/***/ "./src/integrations/lightning/index.ts":
/*!*********************************************!*\
  !*** ./src/integrations/lightning/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var integration_1 = __webpack_require__(/*! ./integration */ "./src/integrations/lightning/integration.ts");
integration_1.registerSalesforceIntegration();


/***/ }),

/***/ "./src/integrations/lightning/integration.ts":
/*!***************************************************!*\
  !*** ./src/integrations/lightning/integration.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var loadExternalApi_1 = __webpack_require__(/*! ./loadExternalApi */ "./src/integrations/lightning/loadExternalApi.ts");
var LightningAPIWrapper_1 = __webpack_require__(/*! ./LightningAPIWrapper */ "./src/integrations/lightning/LightningAPIWrapper.ts");
var adc_client_api_1 = __webpack_require__(/*! ../../adc-client-api */ "./src/adc-client-api.ts");
var utils_1 = __webpack_require__(/*! ../../utils */ "./src/utils/index.ts");
var integrationKey = 'salesforce';
var allowedTypesForRelatedObject = [
    'Account',
    'Opportunity',
    'Campaign',
    'Case',
];
var allowedTypesForPartyObject = [
    'Contact',
    'Lead',
];
var sfCallDirectionMapping = {
    'inbound': 'Inbound',
    'outbound': 'Outbound',
};
var sfInteractionTypeMapping = {
    'voice': 'Call',
    'chat': 'Chat',
    'email': 'Email',
};
exports.registerSalesforceIntegration = function () {
    loadExternalApi_1.loadCrmApi.then(function () {
        console.log('############## Salesforce OpenCTI API: ', window.sforce.opencti);
        console.log('###READY!STEADY!GO!');
        var sfApi = new LightningAPIWrapper_1.LightningAPI();
        var adApi = new adc_client_api_1.AgentDesktopClientAPI();
        var agentData = null;
        var activeInteractionId = null;
        var lastObjectOnScreen = null;
        sfApi.setSoftphonePanelHeight(800).catch(function (e) { return console.error('#ERROR-CRM-SET-HEIGHT: ', e); });
        sfApi.setSoftphonePanelWidth(502).catch(function (e) { return console.error('#ERROR-CRM-SET-WIDTH: ', e); });
        sfApi.setSoftphonePanelVisibility(true).catch(function (e) { return console.error('#ERROR-CRM-SET-VISIBLE-TRUE: ', e); });
        adApi.on('LOGIN', function (sessionId, agData) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        agentData = agData;
                        return [4 /*yield*/, sfApi.enableClickToDial()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        adApi.on('LOGOUT', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sfApi.disableClickToDial()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        var screenPopEntity = function (id) { return __awaiter(void 0, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('#OP-OP... It is a SCREEN-POP: ', id);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, sfApi.screenPop('sobject', { recordId: id })];
                    case 2:
                        result = _a.sent();
                        console.log('#CrmScreenPopResult: ', result);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error('#ERROR-CRM-SCREEN-POP: ', e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        var screenPopSearch = function (searchQuery) { return __awaiter(void 0, void 0, void 0, function () {
            var result, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('#PREY!PREY! This is the search for: ', searchQuery);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, sfApi.screenPop('search', { searchString: searchQuery })];
                    case 2:
                        result = _a.sent();
                        console.log('#CrmSearchResult: ', result);
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _a.sent();
                        console.error('#ERROR-CRM-SEARCH: ', e_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        adApi.on('SHOW_SCREEN_POP', function (data) {
            if (data.source !== integrationKey) {
                return;
            }
            return screenPopEntity(data.id);
        });
        adApi.on('SEARCH_RECORDS', function (data) {
            return screenPopSearch(data.text);
        });
        var saveActivity = function (interaction) { return __awaiter(void 0, void 0, void 0, function () {
            var relatedObjectId, relatedObject, contactObject, activityRecord, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('# SAVE-ACTIVITY-HISTORY: ', interaction);
                        relatedObjectId = interaction.associatedObjects.selected;
                        relatedObject = relatedObjectId &&
                            interaction.associatedObjects.list.find(function (obj) { return obj.id === relatedObjectId; });
                        contactObject = utils_1.utils.findLast(interaction.associatedObjects.list, function (crmObject) { return allowedTypesForPartyObject.includes(crmObject.type); });
                        activityRecord = {
                            'entityApiName': 'Task',
                            'ActivityDate': interaction.startTime,
                            'CallDisposition': interaction.disposition,
                            'CallDurationInSeconds': interaction.duration,
                            'CallObject': interaction.globalInteractionId,
                            'CallType': interaction.callDirection &&
                                sfCallDirectionMapping[interaction.callDirection] || undefined,
                            'Description': interaction.description,
                            'OwnerId': '0053X00000B6t48QAB',
                            'Priority': 'Normal',
                            'Status': 'In Progress',
                            'Subject': interaction.subject,
                            'Type': sfInteractionTypeMapping[interaction.type],
                            'WhatId': relatedObject ? relatedObject.id : undefined,
                            'WhoId': contactObject ? contactObject.id : undefined,
                        };
                        console.log('# ACTIVITY RECORD: ', activityRecord);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, sfApi.saveLog(activityRecord)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, sfApi.refreshView()];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        e_3 = _a.sent();
                        console.error('# Error in SaveLog for Activity History: ', e_3);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        adApi.on('INTERACTION_REMOVED', function (interaction) {
            return saveActivity(interaction);
        });
        adApi.on('ACTIVE_INTERACTION_SWITCHED', function (interactionId) {
            activeInteractionId = interactionId;
        });
        sfApi.addOnNavigationChangeHandler(function (navigationData) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log('$$$$ NAVIGATION CHANGE DATA: ', navigationData);
                if (!activeInteractionId) {
                    return [2 /*return*/];
                }
                if (navigationData.recordId) {
                    lastObjectOnScreen = {
                        id: navigationData.recordId,
                        type: navigationData.objectType || '',
                        displayName: navigationData.recordName || '',
                        displayType: navigationData.objectType || '',
                        customFields: {},
                        source: integrationKey,
                    };
                    adApi.setInteractionActiveScreen({
                        recordId: navigationData.recordId,
                    });
                    adApi.addInteractionAssociatedObject(lastObjectOnScreen);
                }
                return [2 /*return*/];
            });
        }); });
        sfApi.addOnClickToDialHandler(function (data, error) { return __awaiter(void 0, void 0, void 0, function () {
            var clickedObject;
            return __generator(this, function (_a) {
                console.log('#CLICK-TO-DIAL: ', data);
                if (error) {
                    console.error('#CRM-CLICK-TO-DIAL-ERROR: ', error);
                    return [2 /*return*/];
                }
                if (!data) {
                    console.warn('Click to dial come with an empty data');
                    return [2 /*return*/];
                }
                if (!agentData) {
                    return [2 /*return*/];
                }
                clickedObject = {
                    id: data.recordId,
                    type: data.objectType,
                    displayName: data.recordName,
                    displayType: data.objectType,
                    customFields: {},
                    source: integrationKey,
                };
                try {
                    adApi.startCall(data.number, clickedObject);
                }
                catch (err) {
                    console.log('#click-to-act Error: ', err);
                }
                return [2 /*return*/];
            });
        }); });
        adApi.on('NEW_INTERACTION', function () {
            sfApi.isSoftphonePanelVisible().then(function (isVisible) {
                if (!isVisible) {
                    sfApi.setSoftphonePanelVisibility(true).catch(function (e) { return console.error('#ERROR-CRM-SET-VISIBLE-TRUE: ', e); });
                }
            }).catch(function (e) { return console.error('#ERROR-CRM-IS-SOFTPHONE-PANEL-VISIBLE: ', e); });
        });
        adApi.on('MANUAL_CALL', function (phonenumber) { return __awaiter(void 0, void 0, void 0, function () {
            var searchResult, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('### MANUAL-CALL-HANDLER for: ', phonenumber);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, sfApi.searchAndScreenPop({
                                searchParams: phonenumber,
                                callType: 'outbound',
                                deferred: true,
                            })];
                    case 2:
                        searchResult = _a.sent();
                        console.log('### SEARCH RESULT: ', searchResult);
                        if (!searchResult.SCREEN_POP_DATA) return [3 /*break*/, 4];
                        return [4 /*yield*/, sfApi.screenPop(searchResult.SCREEN_POP_DATA.type, searchResult.SCREEN_POP_DATA.params, searchResult.SCREEN_POP_DATA.defaultFieldValues)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        e_4 = _a.sent();
                        console.error('#ERROR-CRM-SEARCH-AND-SCREEN-POP: ', e_4);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); });
        adApi.on('REQUEST_TRANSFER_DATA', function () {
            return {
                activeObject: lastObjectOnScreen ? lastObjectOnScreen : null,
            };
        });
        adApi.on('ACTIVATE_INTERACTION_SCREEN', function (screen) {
            if (screen && screen.recordId) {
                screenPopEntity(screen.recordId);
            }
        });
    }).catch(function (e) {
        console.error('Can\'t initialize OpenCTI Salesforce Lightning API library: ', e);
    });
};


/***/ }),

/***/ "./src/integrations/lightning/loadExternalApi.ts":
/*!*******************************************************!*\
  !*** ./src/integrations/lightning/loadExternalApi.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.loadCrmApi = new Promise(function (resolve, reject) {
    var script = document.createElement('script');
    document.head.insertAdjacentElement('beforeend', script);
    script.addEventListener('load', resolve);
    script.addEventListener('error', reject);
    script.type = 'text/javascript';
    script.src = 'libs/opencti_v47.js';
});


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


/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi ./src/integrations/lightning/index.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Dev\Documents\projects\ServicePattern\Web\agent\packages\adapters\src\integrations\lightning\index.ts */"./src/integrations/lightning/index.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0Rldi9Eb2N1bWVudHMvcHJvamVjdHMvU2VydmljZVBhdHRlcm4vV2ViL2FnZW50L25vZGVfbW9kdWxlcy9sb2Rhc2gvZnJvbVBhaXJzLmpzIiwid2VicGFjazovLy8uLXR5cGVzL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4tdHlwZXMvZGlzdC9zcmMvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYy1jbGllbnQtYXBpLnRzIiwid2VicGFjazovLy8uL3NyYy9pbnRlZ3JhdGlvbnMvbGlnaHRuaW5nL0xpZ2h0bmluZ0FQSVdyYXBwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVncmF0aW9ucy9saWdodG5pbmcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVncmF0aW9ucy9saWdodG5pbmcvaW50ZWdyYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVncmF0aW9ucy9saWdodG5pbmcvbG9hZEV4dGVybmFsQXBpLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIs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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsdUVBQXVFLEVBQUU7QUFDN0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImxpZ2h0bmluZy1hNmYxYjYyZGIzOGNkNjFmYWM2YS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2FnZW50L2NvbW11bmljYXRvci9hZGFwdGVycy9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLyoqXG4gKiBUaGUgaW52ZXJzZSBvZiBgXy50b1BhaXJzYDsgdGhpcyBtZXRob2QgcmV0dXJucyBhbiBvYmplY3QgY29tcG9zZWRcbiAqIGZyb20ga2V5LXZhbHVlIGBwYWlyc2AuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBwYWlycyBUaGUga2V5LXZhbHVlIHBhaXJzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IG9iamVjdC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5mcm9tUGFpcnMoW1snYScsIDFdLCBbJ2InLCAyXV0pO1xuICogLy8gPT4geyAnYSc6IDEsICdiJzogMiB9XG4gKi9cbmZ1bmN0aW9uIGZyb21QYWlycyhwYWlycykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHBhaXJzID09IG51bGwgPyAwIDogcGFpcnMubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0ge307XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgcGFpciA9IHBhaXJzW2luZGV4XTtcbiAgICByZXN1bHRbcGFpclswXV0gPSBwYWlyWzFdO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnJvbVBhaXJzO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9zcmMvdHlwZXMnO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJleHBvcnQgdmFyIHJlcXVlc3RNZXNzYWdlcyA9IFtcclxuICAgICdHRVRfQUdFTlRfU1RBVEUnLFxyXG4gICAgJ1NFVF9BR0VOVF9TVEFURScsXHJcbiAgICAnU1RBUlRfQ0FMTCcsXHJcbiAgICAnU1RBUlRfU01TX0NIQVQnLFxyXG4gICAgJ1NUQVJUX0VNQUlMJyxcclxuICAgICdURVJNSU5BVEVfQ0FMTCcsXHJcbiAgICAnQ09NUExFVEVfSU5URVJBQ1RJT04nLFxyXG4gICAgJ1NXSVRDSF9BQ1RJVkVfSU5URVJBQ1RJT04nLFxyXG4gICAgJ0NIQU5HRV9TRVJWSUNFJyxcclxuICAgICdTRVRfRElTUE9TSVRJT04nLFxyXG4gICAgJ0dFVF9DQUxMX1JFQ09SRElOR19TVEFUVVMnLFxyXG4gICAgJ1NFVF9DQUxMX1JFQ09SRElOR19TVEFUVVMnLFxyXG4gICAgJ0dFVF9TQ1JFRU5fUkVDT1JESU5HX1NUQVRVUycsXHJcbiAgICAnU0VUX1NDUkVFTl9SRUNPUkRJTkdfU1RBVFVTJyxcclxuICAgICdNVVRFX0FMTCcsXHJcbiAgICAnVU5NVVRFX0FMTCcsXHJcbiAgICAnR0VUX0NPTkZJRycsXHJcbiAgICAnU0VUX1ZBUklBQkxFJyxcclxuICAgICdXSURHRVRfTUlOSU1JWkVEJyxcclxuICAgICdXSURHRVRfTUFYSU1JWkVEJyxcclxuICAgICdBRERfSU5URVJBQ1RJT05fQVNTT0NJQVRFRF9PQkpFQ1QnLFxyXG4gICAgJ1NFVF9JTlRFUkFDVElPTl9BQ1RJVkVfU0NSRUVOJyxcclxuXTtcclxuZXhwb3J0IHZhciByZXF1ZXN0UmVzcG9uc2VNZXNzYWdlcyA9IFtcclxuICAgICdHRVRfQUdFTlRfU1RBVEVfUkVTUE9OU0UnLFxyXG4gICAgJ1NFVF9BR0VOVF9TVEFURV9SRVNQT05TRScsXHJcbiAgICAnU1RBUlRfQ0FMTF9SRVNQT05TRScsXHJcbiAgICAnU1RBUlRfU01TX0NIQVRfUkVTUE9OU0UnLFxyXG4gICAgJ1NUQVJUX0VNQUlMX1JFU1BPTlNFJyxcclxuICAgICdURVJNSU5BVEVfQ0FMTF9SRVNQT05TRScsXHJcbiAgICAnQ09NUExFVEVfSU5URVJBQ1RJT05fUkVTUE9OU0UnLFxyXG4gICAgJ1NXSVRDSF9BQ1RJVkVfSU5URVJBQ1RJT05fUkVTUE9OU0UnLFxyXG4gICAgJ0NIQU5HRV9TRVJWSUNFX1JFU1BPTlNFJyxcclxuICAgICdTRVRfRElTUE9TSVRJT05fUkVTUE9OU0UnLFxyXG4gICAgJ0dFVF9DQUxMX1JFQ09SRElOR19TVEFUVVNfUkVTUE9OU0UnLFxyXG4gICAgJ1NFVF9DQUxMX1JFQ09SRElOR19TVEFUVVNfUkVTUE9OU0UnLFxyXG4gICAgJ0dFVF9TQ1JFRU5fUkVDT1JESU5HX1NUQVRVU19SRVNQT05TRScsXHJcbiAgICAnU0VUX1NDUkVFTl9SRUNPUkRJTkdfU1RBVFVTX1JFU1BPTlNFJyxcclxuICAgICdNVVRFX0FMTF9SRVNQT05TRScsXHJcbiAgICAnVU5NVVRFX0FMTF9SRVNQT05TRScsXHJcbiAgICAnR0VUX0NPTkZJR19SRVNQT05TRScsXHJcbiAgICAnU0VUX1ZBUklBQkxFX1JFU1BPTlNFJyxcclxuICAgICdXSURHRVRfTUlOSU1JWkVEX1JFU1BPTlNFJyxcclxuICAgICdXSURHRVRfTUFYSU1JWkVEX1JFU1BPTlNFJyxcclxuICAgICdBRERfSU5URVJBQ1RJT05fQVNTT0NJQVRFRF9PQkpFQ1RfUkVTUE9OU0UnLFxyXG4gICAgJ1NFVF9JTlRFUkFDVElPTl9BQ1RJVkVfU0NSRUVOX1JFU1BPTlNFJyxcclxuXTtcclxuZXhwb3J0IHZhciBjYWxsYmFja01lc3NhZ2VzID0gW1xyXG4gICAgJ0xPR0lOJyxcclxuICAgICdMT0dPVVQnLFxyXG4gICAgJ05FV19JTlRFUkFDVElPTicsXHJcbiAgICAnSU5URVJBQ1RJT05fUkVNT1ZFRCcsXHJcbiAgICAnSU5URVJBQ1RJT05fU1RBVEVfQ0hBTkdFJyxcclxuICAgICdBQ1RJVkVfSU5URVJBQ1RJT05fU1dJVENIRUQnLFxyXG4gICAgJ0FHRU5UX1NUQVRFX0NIQU5HRScsXHJcbiAgICAnUkVRVUVTVF9UUkFOU0ZFUl9EQVRBJyxcclxuICAgICdMT0FEX1RSQU5TRkVSX0RBVEEnLFxyXG4gICAgJ01BTlVBTF9DQUxMJyxcclxuICAgICdNQVhJTUlaRV9XSURHRVQnLFxyXG4gICAgJ1NFQVJDSF9LTk9XTEVER0VfQkFTRScsXHJcbiAgICAnR0VUX0tOT1dMRURHRV9CQVNFX0FSVElDTEUnLFxyXG4gICAgJ1NIT1dfU0NSRUVOX1BPUCcsXHJcbiAgICAnU0VBUkNIX1JFQ09SRFMnLFxyXG4gICAgJ0FDVElWQVRFX0lOVEVSQUNUSU9OX1NDUkVFTicsXHJcbl07XHJcbmV4cG9ydCB2YXIgY2FsbGJhY2tSZXNwb25zZU1lc3NhZ2VzID0gW1xyXG4gICAgJ1JFUVVFU1RfVFJBTlNGRVJfREFUQV9SRVNQT05TRScsXHJcbiAgICAnU0VBUkNIX0tOT1dMRURHRV9CQVNFX1JFU1BPTlNFJyxcclxuICAgICdHRVRfS05PV0xFREdFX0JBU0VfQVJUSUNMRV9SRVNQT05TRScsXHJcbl07XHJcbnZhciByZXN1bHRTdGF0dXMgPSBbJ2Vycm9yJywgJ3N1Y2Nlc3MnXTtcclxudmFyIGludGVyYWN0aW9uU3RhdGUgPSBbJ3Vua25vd24nLCAncXVldWVkJywgJ2l2cicsICd3cmFwX3VwJywgJ3dyYXBfdXBfaG9sZCcsICdkZWxpdmVyZWQnLCAnZGVsaXZlcnlfcGVuZGluZycsICdob2xkJywgJ2NvbXBsZXRlZCddO1xyXG52YXIgY2FsbERpcmVjdGlvbiA9IFsnaW5ib3VuZCcsICdvdXRib3VuZCddO1xyXG52YXIgaW50ZXJhY3Rpb25UeXBlID0gWyd2b2ljZScsICdjaGF0JywgJ2VtYWlsJ107XHJcbmV4cG9ydCB2YXIgYWdlbnRTdGF0ZXMgPSBbJ3N1cGVydmlzaW5nJywgJ3JlYWR5JywgJ25vdF9yZWFkeScsICdidXN5JywgJ2FmdGVyX2NhbGxfd29yayddO1xyXG5leHBvcnQgdmFyIHJlY29yZGluZ1RhcmdldHMgPSBbJ2NhbGwnLCAnc2NyZWVuJ107XHJcbmV4cG9ydCB2YXIgcmVxdWVzdFJlc3BvbnNlTWFwID0ge1xyXG4gICAgJ0dFVF9BR0VOVF9TVEFURSc6ICdHRVRfQUdFTlRfU1RBVEVfUkVTUE9OU0UnLFxyXG4gICAgJ1NFVF9BR0VOVF9TVEFURSc6ICdTRVRfQUdFTlRfU1RBVEVfUkVTUE9OU0UnLFxyXG4gICAgJ1NUQVJUX0NBTEwnOiAnU1RBUlRfQ0FMTF9SRVNQT05TRScsXHJcbiAgICAnU1RBUlRfU01TX0NIQVQnOiAnU1RBUlRfU01TX0NIQVRfUkVTUE9OU0UnLFxyXG4gICAgJ1NUQVJUX0VNQUlMJzogJ1NUQVJUX0VNQUlMX1JFU1BPTlNFJyxcclxuICAgICdURVJNSU5BVEVfQ0FMTCc6ICdURVJNSU5BVEVfQ0FMTF9SRVNQT05TRScsXHJcbiAgICAnQ09NUExFVEVfSU5URVJBQ1RJT04nOiAnQ09NUExFVEVfSU5URVJBQ1RJT05fUkVTUE9OU0UnLFxyXG4gICAgJ1NXSVRDSF9BQ1RJVkVfSU5URVJBQ1RJT04nOiAnU1dJVENIX0FDVElWRV9JTlRFUkFDVElPTl9SRVNQT05TRScsXHJcbiAgICAnQ0hBTkdFX1NFUlZJQ0UnOiAnQ0hBTkdFX1NFUlZJQ0VfUkVTUE9OU0UnLFxyXG4gICAgJ1NFVF9ESVNQT1NJVElPTic6ICdTRVRfRElTUE9TSVRJT05fUkVTUE9OU0UnLFxyXG4gICAgJ0dFVF9DQUxMX1JFQ09SRElOR19TVEFUVVMnOiAnR0VUX0NBTExfUkVDT1JESU5HX1NUQVRVU19SRVNQT05TRScsXHJcbiAgICAnU0VUX0NBTExfUkVDT1JESU5HX1NUQVRVUyc6ICdTRVRfQ0FMTF9SRUNPUkRJTkdfU1RBVFVTX1JFU1BPTlNFJyxcclxuICAgICdHRVRfU0NSRUVOX1JFQ09SRElOR19TVEFUVVMnOiAnR0VUX1NDUkVFTl9SRUNPUkRJTkdfU1RBVFVTX1JFU1BPTlNFJyxcclxuICAgICdTRVRfU0NSRUVOX1JFQ09SRElOR19TVEFUVVMnOiAnU0VUX1NDUkVFTl9SRUNPUkRJTkdfU1RBVFVTX1JFU1BPTlNFJyxcclxuICAgICdNVVRFX0FMTCc6ICdNVVRFX0FMTF9SRVNQT05TRScsXHJcbiAgICAnVU5NVVRFX0FMTCc6ICdVTk1VVEVfQUxMX1JFU1BPTlNFJyxcclxuICAgICdHRVRfQ09ORklHJzogJ0dFVF9DT05GSUdfUkVTUE9OU0UnLFxyXG4gICAgJ1NFVF9WQVJJQUJMRSc6ICdTRVRfVkFSSUFCTEVfUkVTUE9OU0UnLFxyXG4gICAgJ1dJREdFVF9NSU5JTUlaRUQnOiAnV0lER0VUX01JTklNSVpFRF9SRVNQT05TRScsXHJcbiAgICAnV0lER0VUX01BWElNSVpFRCc6ICdXSURHRVRfTUFYSU1JWkVEX1JFU1BPTlNFJyxcclxuICAgICdBRERfSU5URVJBQ1RJT05fQVNTT0NJQVRFRF9PQkpFQ1QnOiAnQUREX0lOVEVSQUNUSU9OX0FTU09DSUFURURfT0JKRUNUX1JFU1BPTlNFJyxcclxuICAgICdTRVRfSU5URVJBQ1RJT05fQUNUSVZFX1NDUkVFTic6ICdTRVRfSU5URVJBQ1RJT05fQUNUSVZFX1NDUkVFTl9SRVNQT05TRScsXHJcbn07XHJcbmV4cG9ydCB2YXIgY2FsbGJhY2tSZXF1ZXN0UmVzcG9uc2VNYXAgPSB7XHJcbiAgICAnUkVRVUVTVF9UUkFOU0ZFUl9EQVRBJzogJ1JFUVVFU1RfVFJBTlNGRVJfREFUQV9SRVNQT05TRScsXHJcbiAgICAnU0VBUkNIX0tOT1dMRURHRV9CQVNFJzogJ1NFQVJDSF9LTk9XTEVER0VfQkFTRV9SRVNQT05TRScsXHJcbiAgICAnR0VUX0tOT1dMRURHRV9CQVNFX0FSVElDTEUnOiAnR0VUX0tOT1dMRURHRV9CQVNFX0FSVElDTEVfUkVTUE9OU0UnLFxyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD10eXBlcy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgZnJvbVBhaXJzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImxvZGFzaC9mcm9tUGFpcnNcIikpO1xyXG52YXIgYWRhcHRlcnNfdHlwZXNfMSA9IHJlcXVpcmUoXCJAYnBpbmMvYWRhcHRlcnMtdHlwZXNcIik7XHJcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XHJcbi8vIEluIG1pbGxpc2Vjb25kcyAobXMpXHJcbnZhciByZXNwb25zZVRpbWVvdXQgPSAxMDAwO1xyXG52YXIgc2VsZlNjcmlwdFVybCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAod2luZG93LmRvY3VtZW50LmN1cnJlbnRTY3JpcHQpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93LmRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0Jyk7XHJcbiAgICAgICAgdmFyIG15U2NyaXB0ID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIHJldHVybiBteVNjcmlwdC5zcmM7XHJcbiAgICB9XHJcbn0pKCk7XHJcbnZhciBhZGNPcmlnaW5PdmVycmlkZSA9IHV0aWxzXzEudXRpbHMuZXh0cmFjdFVSTFBhcmFtcyh3aW5kb3cubG9jYXRpb24uaHJlZilbJ2FkY1VybCddO1xyXG52YXIgYWRjT3JpZ2luID0gYWRjT3JpZ2luT3ZlcnJpZGUgfHwgbmV3IFVSTChzZWxmU2NyaXB0VXJsKS5vcmlnaW47IC8vICdodHRwczovL2FkY29tbXVuaWNhdG9yLndlYi5hcHAnXHJcbnZhciBBZ2VudERlc2t0b3BDbGllbnRBUEkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBBZ2VudERlc2t0b3BDbGllbnRBUEkoaW50ZWdyYXRpb25LZXksIG1vdW50Um9vdCkge1xyXG4gICAgICAgIHRoaXMuYWRjRnJhbWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYWRjRnJhbWVPcmlnaW4gPSAnJztcclxuICAgICAgICB0aGlzLnBlbmRpbmdNZXNzYWdlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuaW50ZWdyYXRpb25LZXkgPSBpbnRlZ3JhdGlvbktleSB8fCB1dGlsc18xLnV0aWxzLmdlbmVyYXRlUmFuZG9tVUlEKCk7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uRXN0YWJsaXNoZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmluY29taW5nTWVzc2FnZUxvZ2dlcnMgPSBbXTtcclxuICAgICAgICB0aGlzLm91dGdvaW5nTWVzc2FnZUxvZ2dlcnMgPSBbXTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVycyA9IGZyb21QYWlyc18xLmRlZmF1bHQoYWRhcHRlcnNfdHlwZXNfMS5jYWxsYmFja01lc3NhZ2VzLm1hcChmdW5jdGlvbiAobWVzc2FnZVR5cGUpIHsgcmV0dXJuIFttZXNzYWdlVHlwZSwgW11dOyB9KSk7XHJcbiAgICAgICAgdGhpcy5yZXNwb25zZUNhbGxiYWNrcyA9IGZyb21QYWlyc18xLmRlZmF1bHQoYWRhcHRlcnNfdHlwZXNfMS5yZXF1ZXN0UmVzcG9uc2VNZXNzYWdlcy5tYXAoZnVuY3Rpb24gKG1lc3NhZ2VUeXBlKSB7IHJldHVybiBbbWVzc2FnZVR5cGUsIHt9XTsgfSkpO1xyXG4gICAgICAgIHRoaXMucHJlcGFyZUFkY0lmcmFtZShtb3VudFJvb3QpO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuICAgIEFnZW50RGVza3RvcENsaWVudEFQSS5wcm90b3R5cGUuaW5qZWN0SW5jb21pbmdNZXNzYWdlTG9nZ2VyID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5pbmNvbWluZ01lc3NhZ2VMb2dnZXJzLnB1c2goY2FsbGJhY2spO1xyXG4gICAgfTtcclxuICAgIEFnZW50RGVza3RvcENsaWVudEFQSS5wcm90b3R5cGUuaW5qZWN0T3V0Z29pbmdNZXNzYWdlTG9nZ2VyID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5vdXRnb2luZ01lc3NhZ2VMb2dnZXJzLnB1c2goY2FsbGJhY2spO1xyXG4gICAgfTtcclxuICAgIEFnZW50RGVza3RvcENsaWVudEFQSS5wcm90b3R5cGUucHJlcGFyZUFkY0lmcmFtZSA9IGZ1bmN0aW9uIChtb3VudFJvb3QpIHtcclxuICAgICAgICBtb3VudFJvb3QgPSAobW91bnRSb290ICYmIG1vdW50Um9vdC5hcHBlbmRDaGlsZCkgPyBtb3VudFJvb3QgOiBkb2N1bWVudC5ib2R5O1xyXG4gICAgICAgIHRoaXMuYWRjRnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcclxuICAgICAgICB0aGlzLmFkY0ZyYW1lLnRpdGxlID0gJ0FnZW50IERlc2t0b3AgQ29tbXVuaWNhdG9yJztcclxuICAgICAgICB0aGlzLmFkY0ZyYW1lLmlkID0gJ2FkY19mcmFtZSc7XHJcbiAgICAgICAgdGhpcy5hZGNGcmFtZS5zdHlsZS5ib3JkZXIgPSAnbm9uZSc7XHJcbiAgICAgICAgdGhpcy5hZGNGcmFtZS53aWR0aCA9ICc1MDAnO1xyXG4gICAgICAgIHRoaXMuYWRjRnJhbWUuaGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgICAgIHRoaXMuYWRjRnJhbWUuYWxsb3cgPSAnbWljcm9waG9uZTsgY2FtZXJhOyBnZW9sb2NhdGlvbic7XHJcbiAgICAgICAgdGhpcy5hZGNGcmFtZS5zcmMgPSBhZGNPcmlnaW4gKyAnL2FnZW50L2NvbW11bmljYXRvci8nO1xyXG4gICAgICAgIHRoaXMuYWRjRnJhbWUub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignQEBAIEFkYXB0ZXIgZmFpbHVyZTogdW5hYmxlIHRvIGxvYWQgQXBpIFByb3h5IGlmcmFtZScpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgbW91bnRSb290LmFwcGVuZENoaWxkKHRoaXMuYWRjRnJhbWUpO1xyXG4gICAgICAgIHRoaXMuYWRjRnJhbWVPcmlnaW4gPSAobmV3IFVSTCh0aGlzLmFkY0ZyYW1lLnNyYykpLm9yaWdpbjtcclxuICAgIH07XHJcbiAgICBBZ2VudERlc2t0b3BDbGllbnRBUEkucHJvdG90eXBlLmhhbmRsZUluY29taW5nTWVzc2FnZSA9IGZ1bmN0aW9uICh0eXBlLCB1aWQsIHBhcmFtcykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0BAQCBIYW5kbGU6ICcsIHR5cGUsIHVpZCwgcGFyYW1zKTtcclxuICAgICAgICB2YXIgaGFuZGxlcnMgPSB0aGlzLm1lc3NhZ2VIYW5kbGVyc1t0eXBlXTtcclxuICAgICAgICB2YXIgcGVuZGluZ1Jlc3VsdHMgPSBoYW5kbGVycy5tYXAoZnVuY3Rpb24gKGhhbmRsZXIpIHsgcmV0dXJuIGhhbmRsZXIuYXBwbHkodm9pZCAwLCBwYXJhbXMpOyB9KTtcclxuICAgICAgICB1dGlsc18xLnV0aWxzLndhaXRSZXNvbHZlQWxsKHBlbmRpbmdSZXN1bHRzKS50aGVuKGZ1bmN0aW9uIChwcm9taXNlUmVzdWx0cykge1xyXG4gICAgICAgICAgICB2YXIgcG9zaXRpdmVSZXN1bHRzID0gcHJvbWlzZVJlc3VsdHMucmVkdWNlKGZ1bmN0aW9uIChhcnIsIHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09ICdmdWxmaWxsZWQnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnZhbHVlICE9PSBudWxsICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChyZXN1bHQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFycjtcclxuICAgICAgICAgICAgfSwgW10pO1xyXG4gICAgICAgICAgICB2YXIgbGFzdFZhbHVlID0gcG9zaXRpdmVSZXN1bHRzLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgPyBwb3NpdGl2ZVJlc3VsdHNbcG9zaXRpdmVSZXN1bHRzLmxlbmd0aCAtIDFdXHJcbiAgICAgICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChhZGFwdGVyc190eXBlc18xLmNhbGxiYWNrUmVzcG9uc2VNZXNzYWdlcy5pbmNsdWRlcyh0eXBlICsgXCJfUkVTUE9OU0VcIikpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnBvc3RNZXNzYWdlVG9BZGMoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVpZDogdWlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUgKyBcIl9SRVNQT05TRVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczogW2xhc3RWYWx1ZV0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEFnZW50RGVza3RvcENsaWVudEFQSS5wcm90b3R5cGUucmVnaXN0ZXJMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChlLm9yaWdpbiAhPT0gX3RoaXMuYWRjRnJhbWVPcmlnaW4pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBpZiAoIWUuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBfYSA9IGUuZGF0YSwgdHlwZSA9IF9hLnR5cGUsIHVpZCA9IF9hLnVpZCwgcGFyYW1zID0gX2EucGFyYW1zO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuaW5jb21pbmdNZXNzYWdlTG9nZ2Vycy5mb3JFYWNoKGZ1bmN0aW9uIChsb2cpIHsgcmV0dXJuIGxvZyh0eXBlLCBwYXJhbXMpOyB9KTtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnaGVsbG8nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY29ubmVjdGlvbkVzdGFibGlzaGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5wb3N0TWVzc2FnZVRvQWRjKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdWlkOiB1aWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdoaScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogW190aGlzLmludGVncmF0aW9uS2V5XSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucGVuZGluZ01lc3NhZ2VzLmZvckVhY2goZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnBvc3RNZXNzYWdlVG9BZGMobWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5wZW5kaW5nTWVzc2FnZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIV90aGlzLmNvbm5lY3Rpb25Fc3RhYmxpc2hlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChhZGFwdGVyc190eXBlc18xLmNhbGxiYWNrTWVzc2FnZXMuaW5jbHVkZXModHlwZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5oYW5kbGVJbmNvbWluZ01lc3NhZ2UodHlwZSwgdWlkLCBwYXJhbXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYWRhcHRlcnNfdHlwZXNfMS5yZXF1ZXN0UmVzcG9uc2VNZXNzYWdlcy5pbmNsdWRlcyh0eXBlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB3YWl0aW5nID0gX3RoaXMucmVzcG9uc2VDYWxsYmFja3NbdHlwZV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdhaXRpbmcgJiYgd2FpdGluZ1t1aWRdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjYWxsYmFja18xID0gd2FpdGluZ1t1aWRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgd2FpdGluZ1t1aWRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNhbGxiYWNrXzEocGFyYW1zKTsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdAQEAgR2V0IHVua25vd24gbWVzc2FnZSBmcm9tIENvbW11bmljYXRvcjogJywgdHlwZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0BAQCBFcnJvcjogJywgZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEFnZW50RGVza3RvcENsaWVudEFQSS5wcm90b3R5cGUucnVuUmVzcG9uc2VUaW1lb3V0V2F0Y2ggPSBmdW5jdGlvbiAodHlwZSwgdWlkLCByZXNvbHZlKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGNhbGxiYWNrc01hcCA9IF90aGlzLnJlc3BvbnNlQ2FsbGJhY2tzW3R5cGUgKyBcIl9SRVNQT05TRVwiXTtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrc01hcFt1aWRdKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgY2FsbGJhY2tzTWFwW3VpZF07XHJcbiAgICAgICAgICAgICAgICB2YXIgZXJyb3JUZXh0ID0gXCJSZXNwb25zZSBmcm9tIENvbW11bmljYXRvciBmb3IgZXZlbnQgXCIgKyB0eXBlICsgXCIgd2Fzbid0IHJlY2VpdmVkIGluIHNwZWNpZmllZCB0aW1lb3V0OiBcIiArIHJlc3BvbnNlVGltZW91dDtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJAQEAgXCIgKyBlcnJvclRleHQpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCByZXNwb25zZVRpbWVvdXQpO1xyXG4gICAgfTtcclxuICAgIEFnZW50RGVza3RvcENsaWVudEFQSS5wcm90b3R5cGUucG9zdE1lc3NhZ2VUb0FkYyA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWRjRnJhbWUgIT09IG51bGwgJiYgdGhpcy5hZGNGcmFtZS5jb250ZW50V2luZG93ICYmIHRoaXMuY29ubmVjdGlvbkVzdGFibGlzaGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3V0Z29pbmdNZXNzYWdlTG9nZ2Vycy5mb3JFYWNoKGZ1bmN0aW9uIChsb2cpIHsgcmV0dXJuIGxvZyhkYXRhLnR5cGUsIGRhdGEucGFyYW1zKTsgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdAQEAgQURBUFRFUiBTRU5EIE1FU1NBR0U6ICcsIGRhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLmFkY0ZyYW1lLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UoZGF0YSwgdGhpcy5hZGNGcmFtZU9yaWdpbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBlbmRpbmdNZXNzYWdlcy5wdXNoKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBBZ2VudERlc2t0b3BDbGllbnRBUEkucHJvdG90eXBlLmFwaUNhbGwgPSBmdW5jdGlvbiAodHlwZSwgcGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcclxuICAgICAgICAgICAgdmFyIHVpZCA9IHV0aWxzXzEudXRpbHMuZ2VuZXJhdGVSYW5kb21VSUQoKTtcclxuICAgICAgICAgICAgX3RoaXMucG9zdE1lc3NhZ2VUb0FkYyh7IHVpZDogdWlkLCB0eXBlOiB0eXBlLCBwYXJhbXM6IHBhcmFtcyB9KTtcclxuICAgICAgICAgICAgdmFyIHdhaXRpbmcgPSBfdGhpcy5yZXNwb25zZUNhbGxiYWNrc1t0eXBlICsgXCJfUkVTUE9OU0VcIl07XHJcbiAgICAgICAgICAgIHdhaXRpbmdbdWlkXSA9IHJlc29sdmU7XHJcbiAgICAgICAgICAgIF90aGlzLnJ1blJlc3BvbnNlVGltZW91dFdhdGNoKHR5cGUsIHVpZCwgcmVzb2x2ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgQWdlbnREZXNrdG9wQ2xpZW50QVBJLnByb3RvdHlwZS5nZXRBZ2VudFN0YXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwaUNhbGwoJ0dFVF9BR0VOVF9TVEFURScpO1xyXG4gICAgfTtcclxuICAgIEFnZW50RGVza3RvcENsaWVudEFQSS5wcm90b3R5cGUuc2V0QWdlbnRTdGF0ZSA9IGZ1bmN0aW9uIChzdGF0ZSwgbm90UmVhZHlSZWFzb24pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcGlDYWxsKCdTRVRfQUdFTlRfU1RBVEUnLCBbc3RhdGUsIG5vdFJlYWR5UmVhc29uXSk7XHJcbiAgICB9O1xyXG4gICAgQWdlbnREZXNrdG9wQ2xpZW50QVBJLnByb3RvdHlwZS5zdGFydENhbGwgPSBmdW5jdGlvbiAocGhvbmVudW1iZXIsIGluaXRpYWxPYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcGlDYWxsKCdTVEFSVF9DQUxMJywgW3Bob25lbnVtYmVyLCBpbml0aWFsT2JqZWN0IHx8IG51bGxdKTtcclxuICAgIH07XHJcbiAgICBBZ2VudERlc2t0b3BDbGllbnRBUEkucHJvdG90eXBlLnN0YXJ0U01TQ2hhdCA9IGZ1bmN0aW9uIChwaG9uZW51bWJlciwgaW5pdGlhbE9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwaUNhbGwoJ1NUQVJUX1NNU19DSEFUJywgW3Bob25lbnVtYmVyLCBpbml0aWFsT2JqZWN0IHx8IG51bGxdKTtcclxuICAgIH07XHJcbiAgICBBZ2VudERlc2t0b3BDbGllbnRBUEkucHJvdG90eXBlLnN0YXJ0RW1haWwgPSBmdW5jdGlvbiAoZW1haWwsIGluaXRpYWxPYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcGlDYWxsKCdTVEFSVF9FTUFJTCcsIFtlbWFpbCwgaW5pdGlhbE9iamVjdCB8fCBudWxsXSk7XHJcbiAgICB9O1xyXG4gICAgQWdlbnREZXNrdG9wQ2xpZW50QVBJLnByb3RvdHlwZS50ZXJtaW5hdGVDYWxsID0gZnVuY3Rpb24gKGludGVyYWN0aW9uSWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcGlDYWxsKCdURVJNSU5BVEVfQ0FMTCcsIFtpbnRlcmFjdGlvbklkXSk7XHJcbiAgICB9O1xyXG4gICAgQWdlbnREZXNrdG9wQ2xpZW50QVBJLnByb3RvdHlwZS5jb21wbGV0ZUludGVyYWN0aW9uID0gZnVuY3Rpb24gKGludGVyYWN0aW9uSWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcGlDYWxsKCdDT01QTEVURV9JTlRFUkFDVElPTicsIFtpbnRlcmFjdGlvbklkXSk7XHJcbiAgICB9O1xyXG4gICAgQWdlbnREZXNrdG9wQ2xpZW50QVBJLnByb3RvdHlwZS5zd2l0Y2hBY3RpdmVJbnRlcmFjdGlvbiA9IGZ1bmN0aW9uIChpbnRlcmFjdGlvbklkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpQ2FsbCgnU1dJVENIX0FDVElWRV9JTlRFUkFDVElPTicsIFtpbnRlcmFjdGlvbklkXSk7XHJcbiAgICB9O1xyXG4gICAgQWdlbnREZXNrdG9wQ2xpZW50QVBJLnByb3RvdHlwZS5jaGFuZ2VTZXJ2aWNlID0gZnVuY3Rpb24gKHNlcnZpY2VOYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpQ2FsbCgnQ0hBTkdFX1NFUlZJQ0UnLCBbc2VydmljZU5hbWVdKTtcclxuICAgIH07XHJcbiAgICBBZ2VudERlc2t0b3BDbGllbnRBUEkucHJvdG90eXBlLnNldERpc3Bvc2l0aW9uID0gZnVuY3Rpb24gKGRpc3Bvc2l0aW9uRGF0YSwgaW50ZXJhY3Rpb25JZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwaUNhbGwoJ1NFVF9ESVNQT1NJVElPTicsIFtkaXNwb3NpdGlvbkRhdGEsIGludGVyYWN0aW9uSWRdKTtcclxuICAgIH07XHJcbiAgICBBZ2VudERlc2t0b3BDbGllbnRBUEkucHJvdG90eXBlLmdldENhbGxSZWNvcmRpbmdTdGF0dXMgPSBmdW5jdGlvbiAoaW50ZXJhY3Rpb25JZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwaUNhbGwoJ0dFVF9DQUxMX1JFQ09SRElOR19TVEFUVVMnLCBbaW50ZXJhY3Rpb25JZF0pO1xyXG4gICAgfTtcclxuICAgIEFnZW50RGVza3RvcENsaWVudEFQSS5wcm90b3R5cGUuc2V0Q2FsbFJlY29yZGluZ1N0YXR1cyA9IGZ1bmN0aW9uIChuZXdTdGF0dXMsIGludGVyYWN0aW9uSWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcGlDYWxsKCdTRVRfQ0FMTF9SRUNPUkRJTkdfU1RBVFVTJywgW25ld1N0YXR1cywgaW50ZXJhY3Rpb25JZF0pO1xyXG4gICAgfTtcclxuICAgIEFnZW50RGVza3RvcENsaWVudEFQSS5wcm90b3R5cGUuZ2V0U2NyZWVuUmVjb3JkaW5nU3RhdHVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwaUNhbGwoJ0dFVF9TQ1JFRU5fUkVDT1JESU5HX1NUQVRVUycpO1xyXG4gICAgfTtcclxuICAgIEFnZW50RGVza3RvcENsaWVudEFQSS5wcm90b3R5cGUuc2V0U2NyZWVuUmVjb3JkaW5nU3RhdHVzID0gZnVuY3Rpb24gKG5ld1N0YXR1cykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwaUNhbGwoJ1NFVF9TQ1JFRU5fUkVDT1JESU5HX1NUQVRVUycsIFtuZXdTdGF0dXNdKTtcclxuICAgIH07XHJcbiAgICBBZ2VudERlc2t0b3BDbGllbnRBUEkucHJvdG90eXBlLm11dGVBbGwgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpQ2FsbCgnTVVURV9BTEwnLCBbdGFyZ2V0XSk7XHJcbiAgICB9O1xyXG4gICAgQWdlbnREZXNrdG9wQ2xpZW50QVBJLnByb3RvdHlwZS51bm11dGVBbGwgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpQ2FsbCgnVU5NVVRFX0FMTCcsIFt0YXJnZXRdKTtcclxuICAgIH07XHJcbiAgICBBZ2VudERlc2t0b3BDbGllbnRBUEkucHJvdG90eXBlLmdldENvbmZpZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcGlDYWxsKCdHRVRfQ09ORklHJyk7XHJcbiAgICB9O1xyXG4gICAgQWdlbnREZXNrdG9wQ2xpZW50QVBJLnByb3RvdHlwZS5zZXRWYXJpYWJsZSA9IGZ1bmN0aW9uIChrZXksIHZhbHVlLCBpbnRlcmFjdGlvbklkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpQ2FsbCgnU0VUX1ZBUklBQkxFJywgW2tleSwgdmFsdWUsIGludGVyYWN0aW9uSWRdKTtcclxuICAgIH07XHJcbiAgICBBZ2VudERlc2t0b3BDbGllbnRBUEkucHJvdG90eXBlLm5vdGlmeVdpZGdldE1pbmltaXplZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcGlDYWxsKCdXSURHRVRfTUlOSU1JWkVEJyk7XHJcbiAgICB9O1xyXG4gICAgQWdlbnREZXNrdG9wQ2xpZW50QVBJLnByb3RvdHlwZS5ub3RpZnlXaWRnZXRNYXhpbWl6ZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpQ2FsbCgnV0lER0VUX01BWElNSVpFRCcpO1xyXG4gICAgfTtcclxuICAgIEFnZW50RGVza3RvcENsaWVudEFQSS5wcm90b3R5cGUuYWRkSW50ZXJhY3Rpb25Bc3NvY2lhdGVkT2JqZWN0ID0gZnVuY3Rpb24gKG9iamVjdCwgaW50ZXJhY3Rpb25JZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwaUNhbGwoJ0FERF9JTlRFUkFDVElPTl9BU1NPQ0lBVEVEX09CSkVDVCcsIFtvYmplY3QsIGludGVyYWN0aW9uSWRdKTtcclxuICAgIH07XHJcbiAgICBBZ2VudERlc2t0b3BDbGllbnRBUEkucHJvdG90eXBlLnNldEludGVyYWN0aW9uQWN0aXZlU2NyZWVuID0gZnVuY3Rpb24gKHNjcmVlbkRhdGEsIGludGVyYWN0aW9uSWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcGlDYWxsKCdTRVRfSU5URVJBQ1RJT05fQUNUSVZFX1NDUkVFTicsIFtzY3JlZW5EYXRhLCBpbnRlcmFjdGlvbklkXSk7XHJcbiAgICB9O1xyXG4gICAgQWdlbnREZXNrdG9wQ2xpZW50QVBJLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIChtZXNzYWdlLCBoYW5kbGVyKSB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcnNbbWVzc2FnZV0ucHVzaChoYW5kbGVyKTtcclxuICAgIH07XHJcbiAgICBBZ2VudERlc2t0b3BDbGllbnRBUEkucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChtZXNzYWdlLCBoYW5kbGVyKSB7XHJcbiAgICAgICAgdmFyIGRlbEluZGV4ID0gdGhpcy5tZXNzYWdlSGFuZGxlcnNbbWVzc2FnZV0uaW5kZXhPZihoYW5kbGVyKTtcclxuICAgICAgICBpZiAoZGVsSW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXJzW21lc3NhZ2VdLnNwbGljZShkZWxJbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBBZ2VudERlc2t0b3BDbGllbnRBUEk7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQWdlbnREZXNrdG9wQ2xpZW50QVBJID0gQWdlbnREZXNrdG9wQ2xpZW50QVBJO1xyXG53aW5kb3cuYnJpZ2h0cGF0dGVybiA9IHtcclxuICAgIEFkQXBpOiBBZ2VudERlc2t0b3BDbGllbnRBUEksXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXHJcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBMaWdodG5pbmdBUEkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBMaWdodG5pbmdBUEkoKSB7XHJcbiAgICAgICAgdGhpcy5jbGlja1RvRGlhbEhhbmRsZXJzID0gW107XHJcbiAgICAgICAgdGhpcy5mb2N1c0hhbmRsZXJzID0gW107XHJcbiAgICAgICAgdGhpcy53b3JrU3RhcnRIYW5kbGVycyA9IFtdO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJIYW5kbGVycygpO1xyXG4gICAgICAgIHRoaXMubm90aWZ5SW5pdGlhbGl6YXRpb25Db21wbGV0ZSgpO1xyXG4gICAgfVxyXG4gICAgTGlnaHRuaW5nQVBJLnByb3RvdHlwZS5yZWdpc3RlckhhbmRsZXJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgd2luZG93LnNmb3JjZS5vcGVuY3RpLm9uQ2xpY2tUb0RpYWwoe1xyXG4gICAgICAgICAgICBsaXN0ZW5lcjogZnVuY3Rpb24gKHJlc3ApIHtcclxuICAgICAgICAgICAgICAgIGlmICgnZXJyb3InIGluIHJlc3ApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdjbGlja1RvRGlhbCByZXR1cm4gZXJyb3I6ICcsIHJlc3AuZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm9uQ2xpY2tUb0RpYWwobnVsbCwgcmVzcC5lcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5vbkNsaWNrVG9EaWFsKHJlc3ApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHdpbmRvdy5zZm9yY2Uub3BlbmN0aS5vbk5hdmlnYXRpb25DaGFuZ2Uoe1xyXG4gICAgICAgICAgICBsaXN0ZW5lcjogZnVuY3Rpb24gKHJlc3ApIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLm9uTmF2aWdhdGlvbkNoYW5nZShyZXNwKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB3aW5kb3cuc2ZvcmNlLm9wZW5jdGkuaHZzLm9uV29ya1N0YXJ0KHtcclxuICAgICAgICAgICAgbGlzdGVuZXI6IGZ1bmN0aW9uIChyZXNwKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5vbldvcmtTdGFydChyZXNwKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBMaWdodG5pbmdBUEkucHJvdG90eXBlLm9uQ2xpY2tUb0RpYWwgPSBmdW5jdGlvbiAoZGlhbEVudGl0eSwgZXJyb3IpIHtcclxuICAgICAgICB0aGlzLmNsaWNrVG9EaWFsSGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlcikgeyByZXR1cm4gaGFuZGxlcihkaWFsRW50aXR5LCBlcnJvcik7IH0pO1xyXG4gICAgfTtcclxuICAgIExpZ2h0bmluZ0FQSS5wcm90b3R5cGUub25OYXZpZ2F0aW9uQ2hhbmdlID0gZnVuY3Rpb24gKG5hdmlnYXRpb25FbnRpdHkpIHtcclxuICAgICAgICB0aGlzLmZvY3VzSGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlcikgeyByZXR1cm4gaGFuZGxlcihuYXZpZ2F0aW9uRW50aXR5KTsgfSk7XHJcbiAgICB9O1xyXG4gICAgTGlnaHRuaW5nQVBJLnByb3RvdHlwZS5vbldvcmtTdGFydCA9IGZ1bmN0aW9uICh3b3JrRGF0YSkge1xyXG4gICAgICAgIHRoaXMud29ya1N0YXJ0SGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlcikgeyByZXR1cm4gaGFuZGxlcih3b3JrRGF0YSk7IH0pO1xyXG4gICAgfTtcclxuICAgIExpZ2h0bmluZ0FQSS5wcm90b3R5cGUuYWRkT25DbGlja1RvRGlhbEhhbmRsZXIgPSBmdW5jdGlvbiAoaGFuZGxlcikge1xyXG4gICAgICAgIHRoaXMuY2xpY2tUb0RpYWxIYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xyXG4gICAgfTtcclxuICAgIExpZ2h0bmluZ0FQSS5wcm90b3R5cGUuYWRkT25OYXZpZ2F0aW9uQ2hhbmdlSGFuZGxlciA9IGZ1bmN0aW9uIChoYW5kbGVyKSB7XHJcbiAgICAgICAgdGhpcy5mb2N1c0hhbmRsZXJzLnB1c2goaGFuZGxlcik7XHJcbiAgICB9O1xyXG4gICAgTGlnaHRuaW5nQVBJLnByb3RvdHlwZS5hZGRPbldvcmtTdGFydEhhbmRsZXIgPSBmdW5jdGlvbiAoaGFuZGxlcikge1xyXG4gICAgICAgIHRoaXMud29ya1N0YXJ0SGFuZGxlcnMucHVzaChoYW5kbGVyKTtcclxuICAgIH07XHJcbiAgICBMaWdodG5pbmdBUEkucHJvdG90eXBlLm5vdGlmeUluaXRpYWxpemF0aW9uQ29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgd2luZG93LnNmb3JjZS5vcGVuY3RpLm5vdGlmeUluaXRpYWxpemF0aW9uQ29tcGxldGUoe1xyXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKHJlc3ApIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbm90aWZ5SW5pdGlhbGl6YXRpb25Db21wbGV0ZTogc3VjY2Vzc2Z1bCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignbm90aWZ5SW5pdGlhbGl6YXRpb25Db21wbGV0ZTogZXJyb3InKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBMaWdodG5pbmdBUEkucHJvdG90eXBlLmFwaUNhbGwgPSBmdW5jdGlvbiAoYXBpRm4sIHBheWxvYWQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlcywgcmVqKSB7XHJcbiAgICAgICAgICAgIGFwaUZuKF9fYXNzaWduKHsgY2FsbGJhY2s6IGZ1bmN0aW9uIChyZXNwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3Auc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMocmVzcC5yZXR1cm5WYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWoocmVzcC5lcnJvcnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gfSwgcGF5bG9hZCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIExpZ2h0bmluZ0FQSS5wcm90b3R5cGUuZGlzYWJsZUNsaWNrVG9EaWFsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRoaXMuYXBpQ2FsbCh3aW5kb3cuc2ZvcmNlLm9wZW5jdGkuZGlzYWJsZUNsaWNrVG9EaWFsKV07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIExpZ2h0bmluZ0FQSS5wcm90b3R5cGUuZW5hYmxlQ2xpY2tUb0RpYWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdGhpcy5hcGlDYWxsKHdpbmRvdy5zZm9yY2Uub3BlbmN0aS5lbmFibGVDbGlja1RvRGlhbCldO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBMaWdodG5pbmdBUEkucHJvdG90eXBlLmdldENhbGxDZW50ZXJTZXR0aW5ncyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB0aGlzLmFwaUNhbGwod2luZG93LnNmb3JjZS5vcGVuY3RpLmdldENhbGxDZW50ZXJTZXR0aW5ncyldO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBMaWdodG5pbmdBUEkucHJvdG90eXBlLmdldEFwcFZpZXdJbmZvID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRoaXMuYXBpQ2FsbCh3aW5kb3cuc2ZvcmNlLm9wZW5jdGkuZ2V0QXBwVmlld0luZm8pXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgTGlnaHRuaW5nQVBJLnByb3RvdHlwZS5nZXRTb2Z0cGhvbmVMYXlvdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdGhpcy5hcGlDYWxsKHdpbmRvdy5zZm9yY2Uub3BlbmN0aS5nZXRTb2Z0cGhvbmVMYXlvdXQpXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgTGlnaHRuaW5nQVBJLnByb3RvdHlwZS5jb21wbGV0ZVdvcmsgPSBmdW5jdGlvbiAod29ya0l0ZW0pIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB0aGlzLmFwaUNhbGwod2luZG93LnNmb3JjZS5vcGVuY3RpLmh2cy5jb21wbGV0ZVdvcmssIHdvcmtJdGVtKV07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIExpZ2h0bmluZ0FQSS5wcm90b3R5cGUuaXNTb2Z0cGhvbmVQYW5lbFZpc2libGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdGhpcy5hcGlDYWxsKHdpbmRvdy5zZm9yY2Uub3BlbmN0aS5pc1NvZnRwaG9uZVBhbmVsVmlzaWJsZSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7IHJldHVybiByZXN1bHQudmlzaWJsZTsgfSldO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBMaWdodG5pbmdBUEkucHJvdG90eXBlLnJlZnJlc2hWaWV3ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRoaXMuYXBpQ2FsbCh3aW5kb3cuc2ZvcmNlLm9wZW5jdGkucmVmcmVzaFZpZXcpXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgTGlnaHRuaW5nQVBJLnByb3RvdHlwZS5ydW5BcGV4ID0gZnVuY3Rpb24gKGFwZXhEYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdGhpcy5hcGlDYWxsKHdpbmRvdy5zZm9yY2Uub3BlbmN0aS5ydW5BcGV4LCBhcGV4RGF0YSldO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBMaWdodG5pbmdBUEkucHJvdG90eXBlLnNhdmVMb2cgPSBmdW5jdGlvbiAoZW50aXR5KSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdGhpcy5hcGlDYWxsKHdpbmRvdy5zZm9yY2Uub3BlbmN0aS5zYXZlTG9nLCB7IHZhbHVlOiBlbnRpdHkgfSldO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBMaWdodG5pbmdBUEkucHJvdG90eXBlLnNjcmVlblBvcCA9IGZ1bmN0aW9uICh0eXBlLCBwYXJhbXMsIGRlZmF1bHRWYWx1ZXMpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB0aGlzLmFwaUNhbGwod2luZG93LnNmb3JjZS5vcGVuY3RpLnNjcmVlblBvcCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHBhcmFtcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEZpZWxkVmFsdWVzOiBkZWZhdWx0VmFsdWVzLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgTGlnaHRuaW5nQVBJLnByb3RvdHlwZS5zZWFyY2hBbmRTY3JlZW5Qb3AgPSBmdW5jdGlvbiAocGFyYW1zKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdGhpcy5hcGlDYWxsKHdpbmRvdy5zZm9yY2Uub3BlbmN0aS5zZWFyY2hBbmRTY3JlZW5Qb3AsIHBhcmFtcyldO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBMaWdodG5pbmdBUEkucHJvdG90eXBlLnNldFNvZnRwaG9uZUl0ZW1JY29uID0gZnVuY3Rpb24gKGljb24pIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB0aGlzLmFwaUNhbGwod2luZG93LnNmb3JjZS5vcGVuY3RpLnNldFNvZnRwaG9uZUl0ZW1JY29uLCB7IGtleTogaWNvbiB9KV07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIExpZ2h0bmluZ0FQSS5wcm90b3R5cGUuc2V0U29mdHBob25lSXRlbUxhYmVsID0gZnVuY3Rpb24gKGxhYmVsKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdGhpcy5hcGlDYWxsKHdpbmRvdy5zZm9yY2Uub3BlbmN0aS5zZXRTb2Z0cGhvbmVJdGVtTGFiZWwsIHsgbGFiZWw6IGxhYmVsIH0pXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgTGlnaHRuaW5nQVBJLnByb3RvdHlwZS5zZXRTb2Z0cGhvbmVQYW5lbEhlaWdodCA9IGZ1bmN0aW9uIChoZWlnaHQpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB0aGlzLmFwaUNhbGwod2luZG93LnNmb3JjZS5vcGVuY3RpLnNldFNvZnRwaG9uZVBhbmVsSGVpZ2h0LCB7IGhlaWdodFBYOiBoZWlnaHQgfSldO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBMaWdodG5pbmdBUEkucHJvdG90eXBlLnNldFNvZnRwaG9uZVBhbmVsSWNvbiA9IGZ1bmN0aW9uIChpY29uKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdGhpcy5hcGlDYWxsKHdpbmRvdy5zZm9yY2Uub3BlbmN0aS5zZXRTb2Z0cGhvbmVQYW5lbEljb24sIHsga2V5OiBpY29uIH0pXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgTGlnaHRuaW5nQVBJLnByb3RvdHlwZS5zZXRTb2Z0cGhvbmVQYW5lbExhYmVsID0gZnVuY3Rpb24gKGxhYmVsKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdGhpcy5hcGlDYWxsKHdpbmRvdy5zZm9yY2Uub3BlbmN0aS5zZXRTb2Z0cGhvbmVQYW5lbExhYmVsLCB7IGxhYmVsOiBsYWJlbCB9KV07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIExpZ2h0bmluZ0FQSS5wcm90b3R5cGUuc2V0U29mdHBob25lUGFuZWxWaXNpYmlsaXR5ID0gZnVuY3Rpb24gKHZpc2libGUpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB0aGlzLmFwaUNhbGwod2luZG93LnNmb3JjZS5vcGVuY3RpLnNldFNvZnRwaG9uZVBhbmVsVmlzaWJpbGl0eSwgeyB2aXNpYmxlOiB2aXNpYmxlIH0pXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgTGlnaHRuaW5nQVBJLnByb3RvdHlwZS5zZXRTb2Z0cGhvbmVQYW5lbFdpZHRoID0gZnVuY3Rpb24gKHdpZHRoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdGhpcy5hcGlDYWxsKHdpbmRvdy5zZm9yY2Uub3BlbmN0aS5zZXRTb2Z0cGhvbmVQYW5lbFdpZHRoLCB7IHdpZHRoUFg6IHdpZHRoIH0pXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgTGlnaHRuaW5nQVBJLnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoY2hhbm5lbCwgbGlzdGVuZXIpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzLCByZWopIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNmb3JjZS5vcGVuY3RpLnN1YnNjcmliZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFubmVsTmFtZTogY2hhbm5lbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyOiBsaXN0ZW5lcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAocmVzcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzKHJlc3Auc3Vic2NyaXB0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlaihyZXNwLmVycm9ycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBMaWdodG5pbmdBUEkucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKHN1YnNjcmlwdGlvbikge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRoaXMuYXBpQ2FsbCh3aW5kb3cuc2ZvcmNlLm9wZW5jdGkudW5zdWJzY3JpYmUsIHsgc3Vic2NyaXB0aW9uOiBzdWJzY3JpcHRpb24gfSldO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBMaWdodG5pbmdBUEkucHJvdG90eXBlLnB1Ymxpc2ggPSBmdW5jdGlvbiAoY2hhbm5lbCwgbWVzc2FnZSkge1xyXG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRoaXMuYXBpQ2FsbCh3aW5kb3cuc2ZvcmNlLm9wZW5jdGkucHVibGlzaCwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFubmVsTmFtZTogY2hhbm5lbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBMaWdodG5pbmdBUEk7XHJcbn0oKSk7XHJcbmV4cG9ydHMuTGlnaHRuaW5nQVBJID0gTGlnaHRuaW5nQVBJO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgaW50ZWdyYXRpb25fMSA9IHJlcXVpcmUoXCIuL2ludGVncmF0aW9uXCIpO1xyXG5pbnRlZ3JhdGlvbl8xLnJlZ2lzdGVyU2FsZXNmb3JjZUludGVncmF0aW9uKCk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgbG9hZEV4dGVybmFsQXBpXzEgPSByZXF1aXJlKFwiLi9sb2FkRXh0ZXJuYWxBcGlcIik7XHJcbnZhciBMaWdodG5pbmdBUElXcmFwcGVyXzEgPSByZXF1aXJlKFwiLi9MaWdodG5pbmdBUElXcmFwcGVyXCIpO1xyXG52YXIgYWRjX2NsaWVudF9hcGlfMSA9IHJlcXVpcmUoXCIuLi8uLi9hZGMtY2xpZW50LWFwaVwiKTtcclxudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHNcIik7XHJcbnZhciBpbnRlZ3JhdGlvbktleSA9ICdzYWxlc2ZvcmNlJztcclxudmFyIGFsbG93ZWRUeXBlc0ZvclJlbGF0ZWRPYmplY3QgPSBbXHJcbiAgICAnQWNjb3VudCcsXHJcbiAgICAnT3Bwb3J0dW5pdHknLFxyXG4gICAgJ0NhbXBhaWduJyxcclxuICAgICdDYXNlJyxcclxuXTtcclxudmFyIGFsbG93ZWRUeXBlc0ZvclBhcnR5T2JqZWN0ID0gW1xyXG4gICAgJ0NvbnRhY3QnLFxyXG4gICAgJ0xlYWQnLFxyXG5dO1xyXG52YXIgc2ZDYWxsRGlyZWN0aW9uTWFwcGluZyA9IHtcclxuICAgICdpbmJvdW5kJzogJ0luYm91bmQnLFxyXG4gICAgJ291dGJvdW5kJzogJ091dGJvdW5kJyxcclxufTtcclxudmFyIHNmSW50ZXJhY3Rpb25UeXBlTWFwcGluZyA9IHtcclxuICAgICd2b2ljZSc6ICdDYWxsJyxcclxuICAgICdjaGF0JzogJ0NoYXQnLFxyXG4gICAgJ2VtYWlsJzogJ0VtYWlsJyxcclxufTtcclxuZXhwb3J0cy5yZWdpc3RlclNhbGVzZm9yY2VJbnRlZ3JhdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxvYWRFeHRlcm5hbEFwaV8xLmxvYWRDcm1BcGkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJyMjIyMjIyMjIyMjIyMjIFNhbGVzZm9yY2UgT3BlbkNUSSBBUEk6ICcsIHdpbmRvdy5zZm9yY2Uub3BlbmN0aSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJyMjI1JFQURZIVNURUFEWSFHTyEnKTtcclxuICAgICAgICB2YXIgc2ZBcGkgPSBuZXcgTGlnaHRuaW5nQVBJV3JhcHBlcl8xLkxpZ2h0bmluZ0FQSSgpO1xyXG4gICAgICAgIHZhciBhZEFwaSA9IG5ldyBhZGNfY2xpZW50X2FwaV8xLkFnZW50RGVza3RvcENsaWVudEFQSSgpO1xyXG4gICAgICAgIHZhciBhZ2VudERhdGEgPSBudWxsO1xyXG4gICAgICAgIHZhciBhY3RpdmVJbnRlcmFjdGlvbklkID0gbnVsbDtcclxuICAgICAgICB2YXIgbGFzdE9iamVjdE9uU2NyZWVuID0gbnVsbDtcclxuICAgICAgICBzZkFwaS5zZXRTb2Z0cGhvbmVQYW5lbEhlaWdodCg4MDApLmNhdGNoKGZ1bmN0aW9uIChlKSB7IHJldHVybiBjb25zb2xlLmVycm9yKCcjRVJST1ItQ1JNLVNFVC1IRUlHSFQ6ICcsIGUpOyB9KTtcclxuICAgICAgICBzZkFwaS5zZXRTb2Z0cGhvbmVQYW5lbFdpZHRoKDUwMikuY2F0Y2goZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJyNFUlJPUi1DUk0tU0VULVdJRFRIOiAnLCBlKTsgfSk7XHJcbiAgICAgICAgc2ZBcGkuc2V0U29mdHBob25lUGFuZWxWaXNpYmlsaXR5KHRydWUpLmNhdGNoKGZ1bmN0aW9uIChlKSB7IHJldHVybiBjb25zb2xlLmVycm9yKCcjRVJST1ItQ1JNLVNFVC1WSVNJQkxFLVRSVUU6ICcsIGUpOyB9KTtcclxuICAgICAgICBhZEFwaS5vbignTE9HSU4nLCBmdW5jdGlvbiAoc2Vzc2lvbklkLCBhZ0RhdGEpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFnZW50RGF0YSA9IGFnRGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgc2ZBcGkuZW5hYmxlQ2xpY2tUb0RpYWwoKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7IH0pO1xyXG4gICAgICAgIGFkQXBpLm9uKCdMT0dPVVQnLCBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBzZkFwaS5kaXNhYmxlQ2xpY2tUb0RpYWwoKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7IH0pO1xyXG4gICAgICAgIHZhciBzY3JlZW5Qb3BFbnRpdHkgPSBmdW5jdGlvbiAoaWQpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQsIGVfMTtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyNPUC1PUC4uLiBJdCBpcyBhIFNDUkVFTi1QT1A6ICcsIGlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCAzLCAsIDRdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgc2ZBcGkuc2NyZWVuUG9wKCdzb2JqZWN0JywgeyByZWNvcmRJZDogaWQgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnI0NybVNjcmVlblBvcFJlc3VsdDogJywgcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlXzEgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJyNFUlJPUi1DUk0tU0NSRUVOLVBPUDogJywgZV8xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pOyB9O1xyXG4gICAgICAgIHZhciBzY3JlZW5Qb3BTZWFyY2ggPSBmdW5jdGlvbiAoc2VhcmNoUXVlcnkpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQsIGVfMjtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyNQUkVZIVBSRVkhIFRoaXMgaXMgdGhlIHNlYXJjaCBmb3I6ICcsIHNlYXJjaFF1ZXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCAzLCAsIDRdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgc2ZBcGkuc2NyZWVuUG9wKCdzZWFyY2gnLCB7IHNlYXJjaFN0cmluZzogc2VhcmNoUXVlcnkgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnI0NybVNlYXJjaFJlc3VsdDogJywgcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlXzIgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJyNFUlJPUi1DUk0tU0VBUkNIOiAnLCBlXzIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7IH07XHJcbiAgICAgICAgYWRBcGkub24oJ1NIT1dfU0NSRUVOX1BPUCcsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLnNvdXJjZSAhPT0gaW50ZWdyYXRpb25LZXkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc2NyZWVuUG9wRW50aXR5KGRhdGEuaWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFkQXBpLm9uKCdTRUFSQ0hfUkVDT1JEUycsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzY3JlZW5Qb3BTZWFyY2goZGF0YS50ZXh0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgc2F2ZUFjdGl2aXR5ID0gZnVuY3Rpb24gKGludGVyYWN0aW9uKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcmVsYXRlZE9iamVjdElkLCByZWxhdGVkT2JqZWN0LCBjb250YWN0T2JqZWN0LCBhY3Rpdml0eVJlY29yZCwgZV8zO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnIyBTQVZFLUFDVElWSVRZLUhJU1RPUlk6ICcsIGludGVyYWN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsYXRlZE9iamVjdElkID0gaW50ZXJhY3Rpb24uYXNzb2NpYXRlZE9iamVjdHMuc2VsZWN0ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbGF0ZWRPYmplY3QgPSByZWxhdGVkT2JqZWN0SWQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVyYWN0aW9uLmFzc29jaWF0ZWRPYmplY3RzLmxpc3QuZmluZChmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmouaWQgPT09IHJlbGF0ZWRPYmplY3RJZDsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhY3RPYmplY3QgPSB1dGlsc18xLnV0aWxzLmZpbmRMYXN0KGludGVyYWN0aW9uLmFzc29jaWF0ZWRPYmplY3RzLmxpc3QsIGZ1bmN0aW9uIChjcm1PYmplY3QpIHsgcmV0dXJuIGFsbG93ZWRUeXBlc0ZvclBhcnR5T2JqZWN0LmluY2x1ZGVzKGNybU9iamVjdC50eXBlKTsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2aXR5UmVjb3JkID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2VudGl0eUFwaU5hbWUnOiAnVGFzaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQWN0aXZpdHlEYXRlJzogaW50ZXJhY3Rpb24uc3RhcnRUaW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhbGxEaXNwb3NpdGlvbic6IGludGVyYWN0aW9uLmRpc3Bvc2l0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhbGxEdXJhdGlvbkluU2Vjb25kcyc6IGludGVyYWN0aW9uLmR1cmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhbGxPYmplY3QnOiBpbnRlcmFjdGlvbi5nbG9iYWxJbnRlcmFjdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NhbGxUeXBlJzogaW50ZXJhY3Rpb24uY2FsbERpcmVjdGlvbiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNmQ2FsbERpcmVjdGlvbk1hcHBpbmdbaW50ZXJhY3Rpb24uY2FsbERpcmVjdGlvbl0gfHwgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0Rlc2NyaXB0aW9uJzogaW50ZXJhY3Rpb24uZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnT3duZXJJZCc6ICcwMDUzWDAwMDAwQjZ0NDhRQUInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1ByaW9yaXR5JzogJ05vcm1hbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnU3RhdHVzJzogJ0luIFByb2dyZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdTdWJqZWN0JzogaW50ZXJhY3Rpb24uc3ViamVjdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdUeXBlJzogc2ZJbnRlcmFjdGlvblR5cGVNYXBwaW5nW2ludGVyYWN0aW9uLnR5cGVdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1doYXRJZCc6IHJlbGF0ZWRPYmplY3QgPyByZWxhdGVkT2JqZWN0LmlkIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1dob0lkJzogY29udGFjdE9iamVjdCA/IGNvbnRhY3RPYmplY3QuaWQgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcjIEFDVElWSVRZIFJFQ09SRDogJywgYWN0aXZpdHlSZWNvcmQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDQsICwgNV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBzZkFwaS5zYXZlTG9nKGFjdGl2aXR5UmVjb3JkKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHNmQXBpLnJlZnJlc2hWaWV3KCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMyA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignIyBFcnJvciBpbiBTYXZlTG9nIGZvciBBY3Rpdml0eSBIaXN0b3J5OiAnLCBlXzMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7IH07XHJcbiAgICAgICAgYWRBcGkub24oJ0lOVEVSQUNUSU9OX1JFTU9WRUQnLCBmdW5jdGlvbiAoaW50ZXJhY3Rpb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNhdmVBY3Rpdml0eShpbnRlcmFjdGlvbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYWRBcGkub24oJ0FDVElWRV9JTlRFUkFDVElPTl9TV0lUQ0hFRCcsIGZ1bmN0aW9uIChpbnRlcmFjdGlvbklkKSB7XHJcbiAgICAgICAgICAgIGFjdGl2ZUludGVyYWN0aW9uSWQgPSBpbnRlcmFjdGlvbklkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNmQXBpLmFkZE9uTmF2aWdhdGlvbkNoYW5nZUhhbmRsZXIoZnVuY3Rpb24gKG5hdmlnYXRpb25EYXRhKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnJCQkJCBOQVZJR0FUSU9OIENIQU5HRSBEQVRBOiAnLCBuYXZpZ2F0aW9uRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWFjdGl2ZUludGVyYWN0aW9uSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmF2aWdhdGlvbkRhdGEucmVjb3JkSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBsYXN0T2JqZWN0T25TY3JlZW4gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBuYXZpZ2F0aW9uRGF0YS5yZWNvcmRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogbmF2aWdhdGlvbkRhdGEub2JqZWN0VHlwZSB8fCAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IG5hdmlnYXRpb25EYXRhLnJlY29yZE5hbWUgfHwgJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUeXBlOiBuYXZpZ2F0aW9uRGF0YS5vYmplY3RUeXBlIHx8ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21GaWVsZHM6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IGludGVncmF0aW9uS2V5LFxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgYWRBcGkuc2V0SW50ZXJhY3Rpb25BY3RpdmVTY3JlZW4oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWNvcmRJZDogbmF2aWdhdGlvbkRhdGEucmVjb3JkSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRBcGkuYWRkSW50ZXJhY3Rpb25Bc3NvY2lhdGVkT2JqZWN0KGxhc3RPYmplY3RPblNjcmVlbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pOyB9KTtcclxuICAgICAgICBzZkFwaS5hZGRPbkNsaWNrVG9EaWFsSGFuZGxlcihmdW5jdGlvbiAoZGF0YSwgZXJyb3IpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBjbGlja2VkT2JqZWN0O1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnI0NMSUNLLVRPLURJQUw6ICcsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignI0NSTS1DTElDSy1UTy1ESUFMLUVSUk9SOiAnLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdDbGljayB0byBkaWFsIGNvbWUgd2l0aCBhbiBlbXB0eSBkYXRhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFhZ2VudERhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjbGlja2VkT2JqZWN0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBkYXRhLnJlY29yZElkLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGRhdGEub2JqZWN0VHlwZSxcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogZGF0YS5yZWNvcmROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUeXBlOiBkYXRhLm9iamVjdFR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tRmllbGRzOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IGludGVncmF0aW9uS2V5LFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRBcGkuc3RhcnRDYWxsKGRhdGEubnVtYmVyLCBjbGlja2VkT2JqZWN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnI2NsaWNrLXRvLWFjdCBFcnJvcjogJywgZXJyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7IH0pO1xyXG4gICAgICAgIGFkQXBpLm9uKCdORVdfSU5URVJBQ1RJT04nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNmQXBpLmlzU29mdHBob25lUGFuZWxWaXNpYmxlKCkudGhlbihmdW5jdGlvbiAoaXNWaXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmlzaWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNmQXBpLnNldFNvZnRwaG9uZVBhbmVsVmlzaWJpbGl0eSh0cnVlKS5jYXRjaChmdW5jdGlvbiAoZSkgeyByZXR1cm4gY29uc29sZS5lcnJvcignI0VSUk9SLUNSTS1TRVQtVklTSUJMRS1UUlVFOiAnLCBlKTsgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7IHJldHVybiBjb25zb2xlLmVycm9yKCcjRVJST1ItQ1JNLUlTLVNPRlRQSE9ORS1QQU5FTC1WSVNJQkxFOiAnLCBlKTsgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYWRBcGkub24oJ01BTlVBTF9DQUxMJywgZnVuY3Rpb24gKHBob25lbnVtYmVyKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgc2VhcmNoUmVzdWx0LCBlXzQ7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcjIyMgTUFOVUFMLUNBTEwtSEFORExFUiBmb3I6ICcsIHBob25lbnVtYmVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCA1LCAsIDZdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgc2ZBcGkuc2VhcmNoQW5kU2NyZWVuUG9wKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hQYXJhbXM6IHBob25lbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxUeXBlOiAnb3V0Ym91bmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoUmVzdWx0ID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnIyMjIFNFQVJDSCBSRVNVTFQ6ICcsIHNlYXJjaFJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2VhcmNoUmVzdWx0LlNDUkVFTl9QT1BfREFUQSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHNmQXBpLnNjcmVlblBvcChzZWFyY2hSZXN1bHQuU0NSRUVOX1BPUF9EQVRBLnR5cGUsIHNlYXJjaFJlc3VsdC5TQ1JFRU5fUE9QX0RBVEEucGFyYW1zLCBzZWFyY2hSZXN1bHQuU0NSRUVOX1BPUF9EQVRBLmRlZmF1bHRGaWVsZFZhbHVlcyldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzMgLypicmVhayovLCA2XTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfNCA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignI0VSUk9SLUNSTS1TRUFSQ0gtQU5ELVNDUkVFTi1QT1A6ICcsIGVfNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDZdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTsgfSk7XHJcbiAgICAgICAgYWRBcGkub24oJ1JFUVVFU1RfVFJBTlNGRVJfREFUQScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZU9iamVjdDogbGFzdE9iamVjdE9uU2NyZWVuID8gbGFzdE9iamVjdE9uU2NyZWVuIDogbnVsbCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBhZEFwaS5vbignQUNUSVZBVEVfSU5URVJBQ1RJT05fU0NSRUVOJywgZnVuY3Rpb24gKHNjcmVlbikge1xyXG4gICAgICAgICAgICBpZiAoc2NyZWVuICYmIHNjcmVlbi5yZWNvcmRJZCkge1xyXG4gICAgICAgICAgICAgICAgc2NyZWVuUG9wRW50aXR5KHNjcmVlbi5yZWNvcmRJZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignQ2FuXFwndCBpbml0aWFsaXplIE9wZW5DVEkgU2FsZXNmb3JjZSBMaWdodG5pbmcgQVBJIGxpYnJhcnk6ICcsIGUpO1xyXG4gICAgfSk7XHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMubG9hZENybUFwaSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgIGRvY3VtZW50LmhlYWQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBzY3JpcHQpO1xyXG4gICAgc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCByZXNvbHZlKTtcclxuICAgIHNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIHJlamVjdCk7XHJcbiAgICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xyXG4gICAgc2NyaXB0LnNyYyA9ICdsaWJzL29wZW5jdGlfdjQ3LmpzJztcclxufSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBleHRyYWN0VVJMUGFyYW1zID0gZnVuY3Rpb24gKHVybCkge1xyXG4gICAgdmFyIHBhcmFtc01hcCA9IHt9O1xyXG4gICAgaWYgKHVybCkge1xyXG4gICAgICAgIHZhciBwYXJhbVVybCA9IHVybC5zcGxpdCgnPycpLnNsaWNlKDEpLmpvaW4oJz8nKTtcclxuICAgICAgICBpZiAocGFyYW1VcmwubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZhciBwYXJhbXMgPSBwYXJhbVVybC5zcGxpdCgnJicpO1xyXG4gICAgICAgICAgICBwYXJhbXMucmVkdWNlKGZ1bmN0aW9uIChwYXJhbU1hcCwgcGFyYW0pIHtcclxuICAgICAgICAgICAgICAgIHZhciBzcGxpdHMgPSBwYXJhbS5zcGxpdCgnPScpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNwbGl0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZV8xID0gZGVjb2RlVVJJQ29tcG9uZW50KHNwbGl0cy5zaGlmdCgpKSwgdmFsdWUgPSBkZWNvZGVVUklDb21wb25lbnQoc3BsaXRzLmpvaW4oJz0nKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1NYXBbbmFtZV8xXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcmFtTWFwO1xyXG4gICAgICAgICAgICB9LCBwYXJhbXNNYXApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBwYXJhbXNNYXA7XHJcbn07XHJcbnZhciByYW5kb21MYWJlbCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KTsgfTtcclxudmFyIGdlbmVyYXRlUmFuZG9tVUlEID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygxNikuc3Vic3RyaW5nKDIpOyB9O1xyXG52YXIgY2FwaXRhbGl6ZSA9IGZ1bmN0aW9uIChzdHIpIHsgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFx3LywgZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMudG9VcHBlckNhc2UoKTsgfSk7IH07XHJcbmZ1bmN0aW9uIGZpbmRMYXN0KGFycmF5LCBwcmVkaWNhdGUpIHtcclxuICAgIGZvciAodmFyIGkgPSBhcnJheS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgIGlmIChwcmVkaWNhdGUoYXJyYXlbaV0pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhcnJheVtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5mdW5jdGlvbiBzaGFsbG93T2JqRXF1YWwob2JqMSwgb2JqMikge1xyXG4gICAgZm9yICh2YXIga2V5IGluIG9iajEpIHtcclxuICAgICAgICBpZiAoIShrZXkgaW4gb2JqMikgfHwgb2JqMVtrZXldICE9PSBvYmoyW2tleV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZvciAodmFyIGtleSBpbiBvYmoyKSB7XHJcbiAgICAgICAgaWYgKCEoa2V5IGluIG9iajEpIHx8IG9iajJba2V5XSAhPT0gb2JqMVtrZXldKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG52YXIgd2FpdFJlc29sdmVBbGwgPSBmdW5jdGlvbiAodGFyZ2V0cykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICB2YXIgbnVtYmVyT2ZSZXNvbHZlZCA9IDA7XHJcbiAgICAgICAgdmFyIHJlc3VsdHMgPSBuZXcgQXJyYXkodGFyZ2V0cy5sZW5ndGgpO1xyXG4gICAgICAgIHRhcmdldHNcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAodGFyZ2V0KSB7IHJldHVybiAodGFyZ2V0IGluc3RhbmNlb2YgUHJvbWlzZSA/IHRhcmdldCA6IFByb21pc2UucmVzb2x2ZSh0YXJnZXQpKTsgfSkuZm9yRWFjaChmdW5jdGlvbiAodGFyZ2V0UHJvbWlzZSwgaW5kZXgpIHtcclxuICAgICAgICAgICAgdGFyZ2V0UHJvbWlzZVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRzW2luZGV4XSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICdmdWxmaWxsZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKHJlYXNvbikge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0c1tpbmRleF0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAncmVqZWN0ZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYXNvbjogcmVhc29uLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5maW5hbGx5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIG51bWJlck9mUmVzb2x2ZWQrKztcclxuICAgICAgICAgICAgICAgIGlmIChudW1iZXJPZlJlc29sdmVkID09PSB0YXJnZXRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0cyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn07XHJcbmV4cG9ydHMudXRpbHMgPSB7XHJcbiAgICBleHRyYWN0VVJMUGFyYW1zOiBleHRyYWN0VVJMUGFyYW1zLFxyXG4gICAgcmFuZG9tTGFiZWw6IHJhbmRvbUxhYmVsLFxyXG4gICAgZ2VuZXJhdGVSYW5kb21VSUQ6IGdlbmVyYXRlUmFuZG9tVUlELFxyXG4gICAgY2FwaXRhbGl6ZTogY2FwaXRhbGl6ZSxcclxuICAgIGZpbmRMYXN0OiBmaW5kTGFzdCxcclxuICAgIHNoYWxsb3dPYmpFcXVhbDogc2hhbGxvd09iakVxdWFsLFxyXG4gICAgd2FpdFJlc29sdmVBbGw6IHdhaXRSZXNvbHZlQWxsLFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9