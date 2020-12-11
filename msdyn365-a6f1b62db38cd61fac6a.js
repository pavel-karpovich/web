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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
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

/***/ "./src/integrations/msdyn365/index.ts":
/*!********************************************!*\
  !*** ./src/integrations/msdyn365/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var integration_1 = __webpack_require__(/*! ./integration */ "./src/integrations/msdyn365/integration.ts");
integration_1.registerMSDynIntegration();


/***/ }),

/***/ "./src/integrations/msdyn365/integration.ts":
/*!**************************************************!*\
  !*** ./src/integrations/msdyn365/integration.ts ***!
  \**************************************************/
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
var adc_client_api_1 = __webpack_require__(/*! ../../adc-client-api */ "./src/adc-client-api.ts");
var loadExternalApi_1 = __webpack_require__(/*! ./loadExternalApi */ "./src/integrations/msdyn365/loadExternalApi.ts");
var integrationKey = 'dynamicscrm';
exports.activityTables = {
    'voice': 'phonecall',
    'chat': 'bpattern_messaging_session',
    'email': 'email',
};
var transformDyn365KBSearchResults = function (searchResults) {
    return searchResults
        .filter(function (item) {
        return !!item.content;
    })
        .map(function (item) { return ({
        id: item.knowledgearticleid,
        title: item.title,
        text: item.content,
        source: integrationKey,
    }); });
};
var transformDyn365KBArticle = function (articleData) {
    if (!articleData.content) {
        return null;
    }
    return {
        id: articleData.knowledgearticleid,
        title: articleData.title,
        keywords: articleData.keywords || '',
        answer: articleData.content,
        notes: articleData.description || '',
        language: articleData.languagelocaleid.code,
        createdByUser: articleData['_createdby_value@OData.Community.Display.V1.FormattedValue'],
        lastEditedByUser: articleData['_modifiedby_value@OData.Community.Display.V1.FormattedValue'],
        source: integrationKey,
        customFields: {},
    };
};
var entityDisplayName = {};
var communicatorIframe = document.getElementById('adc_frame');
exports.registerMSDynIntegration = function () {
    loadExternalApi_1.loadCrmApi.then(function () {
        console.log('##############Microsoft.CIFramework: ', window.Microsoft);
        console.log('###READY!STEADY!GO!');
        var cif = window.Microsoft.CIFramework;
        var adApi = new adc_client_api_1.AgentDesktopClientAPI(integrationKey);
        var agentData = null;
        var activeInteractionId = null;
        var lastObjectOnScreen = null;
        var extractErrorMessage = function (err) {
            if (typeof err === 'string') {
                try {
                    var errObj = JSON.parse(err);
                    if (errObj && errObj.message) {
                        return errObj.message;
                    }
                    // eslint-disable-next-line no-empty
                }
                catch (e) { }
                return err;
            }
            else {
                return (err && err.message) || err;
            }
        };
        cif.setMode(1).catch(function (e) { return console.error('#ERROR-CRM-SET-MODE: ', extractErrorMessage(e)); });
        cif.setWidth(500).catch(function (e) { return console.error('#ERROR-CRM-SET-WIDTH: ', extractErrorMessage(e)); });
        adApi.on('LOGIN', function (sessionId, agData) { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        agentData = agData;
                        return [4 /*yield*/, cif.setClickToAct(true)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        adApi.on('LOGOUT', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, cif.setClickToAct(false)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        var screenPopEntity = function (entityId, entityName) { return __awaiter(void 0, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('#OP-OP... It is a SCREEN-POP: ', entityName, ', id: ', entityId);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, cif.openForm(JSON.stringify({ entityId: entityId, entityName: entityName }))];
                    case 2:
                        result = _a.sent();
                        console.log('#CrmScreenPopResult: ', result);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error('#ERROR-CRM-SCREEN-POP: ', extractErrorMessage(e_1));
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        var defaultScreenPopSearchEntityType = 'contact';
        var screenPopSearch = function (searchQuery, entityType) {
            if (entityType === void 0) { entityType = defaultScreenPopSearchEntityType; }
            return __awaiter(void 0, void 0, void 0, function () {
                var result, e_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log('#PREY!PREY! This is the search for: ', searchQuery);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, cif.renderSearchPage(entityType, searchQuery)];
                        case 2:
                            result = _a.sent();
                            console.log('#CrmSearchResult: ', result);
                            return [3 /*break*/, 4];
                        case 3:
                            e_2 = _a.sent();
                            console.error('#ERROR-CRM-SEARCH: ', extractErrorMessage(e_2));
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        adApi.on('SHOW_SCREEN_POP', function (data) {
            return screenPopEntity(data.id, data.type);
        });
        adApi.on('SEARCH_RECORDS', function (data) {
            var _a;
            return screenPopSearch(data.text, ((_a = data.types) === null || _a === void 0 ? void 0 : _a.length) ? data.types[0] : undefined);
        });
        var createBasicActivityObject = function (table, interactionData) {
            var activityRecord = {
                'subject': interactionData.subject,
                'description': interactionData.description,
                'actualstart': interactionData.startTime ? (new Date(interactionData.startTime)).toUTCString() : undefined,
                'actualend': interactionData.endTime ? (new Date(interactionData.endTime)).toUTCString() : undefined,
                'actualdurationminutes': interactionData.duration ? Math.ceil(interactionData.duration / 60) : 0,
                'bpattern_interaction_id': interactionData.interactionId,
                'bpattern_global_interaction_id': interactionData.globalInteractionId || '',
                'bpattern_agent': agentData ? agentData.agentId : undefined,
                'bpattern_service': interactionData.service,
                'bpattern_disposition': interactionData.disposition,
                'bpattern_recording_url': interactionData.recordingUrl,
                'bpattern_dnis': interactionData.DNIS,
                'bpattern_ani': interactionData.ANI,
            };
            if (table === exports.activityTables.voice) {
                activityRecord['phonenumber'] = interactionData.phoneNumber;
                activityRecord['directioncode'] = interactionData.callDirection && (interactionData.callDirection === 'outbound' ? 'true' : 'false');
            }
            return activityRecord;
        };
        var saveActivityForEntity = function (interaction, regardingEntity) { return __awaiter(void 0, void 0, void 0, function () {
            var metadataStr, metadata, tableName, additionalActivityData, phoneCallRef, entitySetName, entityLogicalName, oneToManyRel, name_1, key, value, key, value, activity;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, cif.getEntityMetadata(regardingEntity.type)];
                    case 1:
                        metadataStr = _a.sent();
                        metadata = JSON.parse(metadataStr);
                        tableName = exports.activityTables[interaction.type];
                        additionalActivityData = {};
                        console.log('#METADATA: ', metadata);
                        entityDisplayName[regardingEntity.type] = metadata.DisplayName;
                        phoneCallRef = null;
                        entitySetName = metadata.EntitySetName, entityLogicalName = metadata.LogicalName, oneToManyRel = metadata.OneToManyRelationships;
                        if (oneToManyRel && oneToManyRel._collection) {
                            try {
                                phoneCallRef = oneToManyRel._collection.find(function (item) {
                                    var entity = item.ReferencingEntity, attribute = item.ReferencingAttribute;
                                    return entity === tableName && attribute === 'regardingobjectid';
                                });
                            }
                            catch (e) {
                                console.log('#Error in the potentially dangerous place!');
                            }
                        }
                        if (entitySetName && phoneCallRef) {
                            name_1 = phoneCallRef.ReferencingEntityNavigationPropertyName, key = name_1 + "@odata.bind", value = "/" + entitySetName + "(" + regardingEntity.id + ")" // like /contacts(2ede9029-985c-e911-a980-000d3a1cabce)
                            ;
                            additionalActivityData[key] = value;
                        }
                        else if (entityLogicalName) {
                            key = "regardingobjectid_" + entityLogicalName + "_" + tableName + "@odata.bind", value = "/" + entitySetName + "(" + regardingEntity.id + ")" // like /contacts(2ede9029-985c-e911-a980-000d3a1cabce)
                            ;
                            additionalActivityData[key] = value;
                        }
                        else {
                            console.warn('#regardingobjectid reference is note detected');
                        }
                        activity = __assign(__assign({}, createBasicActivityObject(tableName, interaction)), additionalActivityData);
                        console.log('#ACTIVITY OBJECT: ', activity);
                        return [2 /*return*/, cif.createRecord(tableName, JSON.stringify(activity))];
                }
            });
        }); };
        var saveActivity = function (interaction) { return __awaiter(void 0, void 0, void 0, function () {
            var selectedObjectId, selectedObject, tableName, activity, e_3, tableName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('# SAVE-ACTIVITY-HISTORY: ', interaction);
                        selectedObjectId = interaction.associatedObjects.selected;
                        selectedObject = selectedObjectId &&
                            interaction.associatedObjects.list.find(function (obj) { return obj.id === selectedObjectId; });
                        console.log('# regarding to object: ', selectedObject);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        if (!selectedObject) return [3 /*break*/, 3];
                        return [4 /*yield*/, saveActivityForEntity(interaction, selectedObject)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        tableName = exports.activityTables[interaction.type], activity = createBasicActivityObject(tableName, interaction);
                        console.log('#Activity without regarding obj: ', activity);
                        cif.createRecord(tableName, JSON.stringify(activity));
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        e_3 = _a.sent();
                        console.warn('Error while saving activity history record with regarding object: ', e_3);
                        tableName = exports.activityTables[interaction.type];
                        cif.createRecord(tableName, JSON.stringify(createBasicActivityObject(tableName, interaction)));
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        adApi.on('INTERACTION_REMOVED', function (interaction) {
            if (interaction.interactionId === activeInteractionId) {
                activeInteractionId = null;
            }
            return saveActivity(interaction);
        });
        adApi.on('ACTIVE_INTERACTION_SWITCHED', function (interactionId) {
            activeInteractionId = interactionId;
        });
        var listenedEnv = '';
        var getObjectDataFromEnv = function () { return __awaiter(void 0, void 0, void 0, function () {
            var rememberUrl;
            return __generator(this, function (_a) {
                rememberUrl = listenedEnv;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var attempt = 1;
                        var tryGetObjectDataFromEnv = function () { return __awaiter(void 0, void 0, void 0, function () {
                            var envStr, env, entityDataStr, entityData, displayName, entityMetadataStr, entityMetadata, displayType;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (listenedEnv !== rememberUrl) {
                                            resolve();
                                            return [2 /*return*/];
                                        }
                                        if (!activeInteractionId) {
                                            console.warn('No need to get entity: currentInteraction is undefined');
                                            resolve();
                                            return [2 /*return*/];
                                        }
                                        return [4 /*yield*/, cif.getEnvironment()];
                                    case 1:
                                        envStr = _a.sent(), env = JSON.parse(envStr);
                                        console.log("#ENTITY-ENVIRONMENT ATTEMPT #" + attempt + ": ", env);
                                        if (env.dashboardType || (env.pagetype && env.pagetype !== 'entityrecord')) {
                                            resolve();
                                            return [2 /*return*/];
                                        }
                                        if (!(env.id && env.etn)) return [3 /*break*/, 5];
                                        adApi.setInteractionActiveScreen({
                                            entityId: env.id,
                                            entityName: env.etn,
                                        });
                                        return [4 /*yield*/, cif.retrieveRecord(env.etn, env.id)];
                                    case 2:
                                        entityDataStr = _a.sent(), entityData = JSON.parse(entityDataStr);
                                        console.log('#obj-entity: ', entityData);
                                        displayName = entityData.title ||
                                            entityData.fullname ||
                                            entityData.name ||
                                            entityData.subject ||
                                            env.id;
                                        if (!!entityDisplayName[env.etn]) return [3 /*break*/, 4];
                                        return [4 /*yield*/, cif.getEntityMetadata(env.etn)];
                                    case 3:
                                        entityMetadataStr = _a.sent();
                                        entityMetadata = JSON.parse(entityMetadataStr);
                                        entityDisplayName[env.etn] = entityMetadata.DisplayName;
                                        _a.label = 4;
                                    case 4:
                                        displayType = entityDisplayName[env.etn];
                                        adApi.addInteractionAssociatedObject({
                                            id: env.id,
                                            type: env.etn,
                                            displayName: displayName,
                                            displayType: displayType,
                                            source: integrationKey,
                                            customFields: {},
                                        });
                                        resolve();
                                        return [3 /*break*/, 6];
                                    case 5:
                                        attempt++;
                                        if (attempt > 60) {
                                            reject('ERROR: Can\'t get CRM entity data');
                                        }
                                        else {
                                            setTimeout(tryGetObjectDataFromEnv, 1000);
                                        }
                                        _a.label = 6;
                                    case 6: return [2 /*return*/];
                                }
                            });
                        }); };
                        tryGetObjectDataFromEnv();
                    })];
            });
        }); };
        cif.addHandler('onpagenavigate', function (dataStr) { return __awaiter(void 0, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                if (!agentData) {
                    return [2 /*return*/, Promise.resolve()];
                }
                if (activeInteractionId) {
                    data = JSON.parse(dataStr);
                    console.log('#NAVIGATION: ', data);
                    // data.value - current url
                    listenedEnv = data.value;
                    getObjectDataFromEnv().then(function () { });
                }
                return [2 /*return*/, Promise.resolve()];
            });
        }); });
        cif.addHandler('onclicktoact', function (dataStr) { return __awaiter(void 0, void 0, void 0, function () {
            var data, entityId, entityData, entityDataStr, e_4, displayName, entityMetadataStr, entityMetadata, displayType, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('#CLICK');
                        if (!agentData) {
                            return [2 /*return*/, Promise.resolve()];
                        }
                        data = JSON.parse(dataStr);
                        console.log('#CLICK-TO-ACT: ', data);
                        entityId = data.entityId;
                        if (entityId.length && entityId[0] === '{') {
                            entityId = entityId.slice(1);
                        }
                        if (entityId.length && entityId[entityId.length - 1] === '}') {
                            entityId = entityId.slice(0, entityId.length - 1);
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 8, , 9]);
                        entityData = null;
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, cif.retrieveRecord(data.entityLogicalName, entityId)];
                    case 3:
                        entityDataStr = _a.sent();
                        entityData = JSON.parse(entityDataStr);
                        return [3 /*break*/, 5];
                    case 4:
                        e_4 = _a.sent();
                        console.error('#RETRIEVE-RECORD-ERROR: ', e_4);
                        return [3 /*break*/, 5];
                    case 5:
                        console.log('#entity: ', entityData);
                        displayName = entityData.title ||
                            entityData.fullname ||
                            entityData.name ||
                            entityData.subject ||
                            entityId;
                        if (!!entityDisplayName[data.entityLogicalName]) return [3 /*break*/, 7];
                        return [4 /*yield*/, cif.getEntityMetadata(data.entityLogicalName)];
                    case 6:
                        entityMetadataStr = _a.sent();
                        entityMetadata = JSON.parse(entityMetadataStr);
                        entityDisplayName[data.entityLogicalName] = entityMetadata.DisplayName;
                        _a.label = 7;
                    case 7:
                        displayType = entityDisplayName[data.entityLogicalName];
                        lastObjectOnScreen = {
                            id: entityId,
                            type: data.entityLogicalName,
                            displayName: displayName,
                            displayType: displayType,
                            customFields: {},
                            source: integrationKey,
                        };
                        switch (data.format) {
                            case 'Phone':
                                {
                                    console.log('#CLICK-TO-CALL');
                                    if (data.name.toLowerCase().startsWith('phone_')) {
                                        adApi.startCall(data.value, lastObjectOnScreen);
                                    }
                                    else if (data.name.toLowerCase().startsWith('sms_')) {
                                        adApi.startSMSChat(data.value, lastObjectOnScreen);
                                    }
                                    else {
                                        adApi.startCall(data.value, lastObjectOnScreen);
                                    }
                                    break;
                                }
                            case 'SMS':
                                {
                                    console.log('#CLICK-TO-SMS');
                                    adApi.startSMSChat(data.value, lastObjectOnScreen);
                                    break;
                                }
                            case 'Email':
                                {
                                    console.log('#CLICK-TO-EMAIL');
                                    adApi.startEmail(data.value, lastObjectOnScreen);
                                    break;
                                }
                            default:
                                console.log('#Unknown Click-to-act format');
                                break;
                        }
                        return [3 /*break*/, 9];
                    case 8:
                        err_1 = _a.sent();
                        console.log('#click-to-act Error: ', err_1);
                        return [3 /*break*/, 9];
                    case 9: return [2 /*return*/, Promise.resolve()];
                }
            });
        }); });
        adApi.on('NEW_INTERACTION', function () {
            cif.getMode().then(function (mode) {
                if (mode === 0) {
                    cif.setMode(1).catch(function (e) { return console.error('#ERROR-CRM-SET-MODE: ', extractErrorMessage(e)); });
                }
            }).catch(function (e) { return console.error('#ERROR-CRM-GET-MODE: ', extractErrorMessage(e)); });
            listenedEnv = 'pseudo-url';
            getObjectDataFromEnv().then(function () { });
        });
        adApi.on('MANUAL_CALL', function (phonenumber) { return __awaiter(void 0, void 0, void 0, function () {
            var e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('### ADAPTER: MANUAL-CALL-HANDLER to: ', phonenumber);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, cif.searchAndOpenRecords(defaultScreenPopSearchEntityType, 
                            // eslint-disable-next-line max-len
                            '?$select=contactid&' +
                                ("$filter=mobilephone eq '" + phonenumber + "'") +
                                (" or telephone1 eq '" + phonenumber + "'") +
                                (" or telephone2 eq '" + phonenumber + "'") +
                                (" or telephone3 eq '" + phonenumber + "'"), false)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_5 = _a.sent();
                        console.error('#ERROR-CRM-ODATA-SEARCH: ', extractErrorMessage(e_5));
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
        adApi.on('SEARCH_KNOWLEDGE_BASE', function (query, language) { return __awaiter(void 0, void 0, void 0, function () {
            var dataStr, rawData, e_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, cif.searchAndOpenRecords('knowledgearticle', '?$select=' +
                                'content' +
                                ',title' +
                                '&$expand=languagelocaleid($select=code)' +
                                '&$filter=statecode eq 3 ' +
                                ((language === undefined || language === 'none')
                                    ? ''
                                    : "and startswith(languagelocaleid/code, '" + language + "') ") +
                                'and (' +
                                ("contains(content, '" + query + "') or ") +
                                ("contains(keywords, '" + query + "') or ") +
                                ("contains(description, '" + query + "') or ") +
                                ("contains(title, '" + query + "')") +
                                ')', true)];
                    case 1:
                        dataStr = _a.sent();
                        rawData = Object.values(JSON.parse(dataStr));
                        console.log('#CRM-SEARCH-RESULT: ', rawData);
                        return [2 /*return*/, transformDyn365KBSearchResults(rawData)];
                    case 2:
                        e_6 = _a.sent();
                        console.error('#ERROR-CRM-ODATA-KB-SEARCH: ', extractErrorMessage(e_6));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/, []];
                }
            });
        }); });
        adApi.on('GET_KNOWLEDGE_BASE_ARTICLE', function (articleId) { return __awaiter(void 0, void 0, void 0, function () {
            var dataStr, rawArticleArr, e_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, cif.searchAndOpenRecords('knowledgearticle', '?$select=' +
                                'articlepublicnumber' +
                                ',createdon' +
                                ',content' +
                                ',description' +
                                ',isinternal' +
                                ',keywords' +
                                ',modifiedon' +
                                ',statecode' +
                                ',statuscode' +
                                ',title' +
                                ',versionnumber' +
                                ',createdby' +
                                ',modifiedby' +
                                ',_createdby_value' +
                                ',_modifiedby_value' +
                                ',_ownerid_value' +
                                ',_parentarticlecontentid_value' +
                                ',_rootarticleid_value' +
                                ',_subjectid_value' +
                                '&$expand=languagelocaleid($select=code)' +
                                ',transactioncurrencyid($select=isocurrencycode)' +
                                ',owningbusinessunit($select=name)' +
                                ("&$filter=knowledgearticleid eq '" + articleId + "'"), true)];
                    case 1:
                        dataStr = _a.sent();
                        rawArticleArr = Object.values(JSON.parse(dataStr));
                        if (!rawArticleArr.length) {
                            return [2 /*return*/, null];
                        }
                        console.log('#CRM-KB-ARTICLE: ', rawArticleArr[0]);
                        return [2 /*return*/, transformDyn365KBArticle(rawArticleArr[0])];
                    case 2:
                        e_7 = _a.sent();
                        console.error('#ERROR-CRM-ODATA-KB-ARTICLE: ', extractErrorMessage(e_7));
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/, null];
                }
            });
        }); });
        adApi.on('REQUEST_TRANSFER_DATA', function () {
            return {
                activeObject: lastObjectOnScreen ? lastObjectOnScreen : null,
            };
        });
        cif.addHandler('onmodechanged', function (dataStr) {
            var value = JSON.parse(dataStr).value;
            switch (value) {
                case 0:
                    communicatorIframe.setAttribute('width', '44px');
                    adApi.notifyWidgetMinimized();
                    break;
                case 1:
                    communicatorIframe.setAttribute('width', '500px');
                    adApi.notifyWidgetMaximized();
                    break;
                default:
                    break;
            }
            return Promise.resolve();
        });
        adApi.on('MAXIMIZE_WIDGET', function () {
            cif.setMode(1).catch(function (e) { return console.error('#ERROR-CRM-SET-MODE: ', extractErrorMessage(e)); });
        });
        adApi.on('ACTIVATE_INTERACTION_SCREEN', function (screen) {
            if (screen && screen.entityId && screen.entityName) {
                screenPopEntity(screen.entityId, screen.entityName);
            }
        });
    }).catch(function (e) {
        console.error('Can\'t load Channel Integration Framework client API library: ', e);
    });
};


/***/ }),

/***/ "./src/integrations/msdyn365/loadExternalApi.ts":
/*!******************************************************!*\
  !*** ./src/integrations/msdyn365/loadExternalApi.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = __webpack_require__(/*! ../../utils */ "./src/utils/index.ts");
var CRM_DOMAIN_PARAMETER_NAME = 'crmDomain';
var url = window.location.href, params = utils_1.utils.extractURLParams(url);
var crmDomain = params[CRM_DOMAIN_PARAMETER_NAME];
if (!crmDomain.startsWith('https://')) {
    crmDomain = 'https://' + crmDomain;
}
exports.loadCrmApi = new Promise(function (resolve, reject) {
    if (!crmDomain) {
        reject('Missing required URL parameter \'crmDomain\'');
    }
    var script = document.createElement('script');
    document.head.insertAdjacentElement('beforeend', script);
    script.addEventListener('load', resolve);
    script.addEventListener('error', reject);
    script.dataset.crmurl = crmDomain;
    script.dataset.cifid = 'CIFMainLibrary';
    script.type = 'text/javascript';
    script.src = crmDomain + '/webresources/Widget/msdyn_ciLibrary.js';
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

/***/ 1:
/*!**************************************************!*\
  !*** multi ./src/integrations/msdyn365/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Dev\Documents\projects\ServicePattern\Web\agent\packages\adapters\src\integrations\msdyn365\index.ts */"./src/integrations/msdyn365/index.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0Rldi9Eb2N1bWVudHMvcHJvamVjdHMvU2VydmljZVBhdHRlcm4vV2ViL2FnZW50L25vZGVfbW9kdWxlcy9sb2Rhc2gvZnJvbVBhaXJzLmpzIiwid2VicGFjazovLy8uLXR5cGVzL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4tdHlwZXMvZGlzdC9zcmMvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYy1jbGllbnQtYXBpLnRzIiwid2VicGFjazovLy8uL3NyYy9pbnRlZ3JhdGlvbnMvbXNkeW4zNjUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVncmF0aW9ucy9tc2R5bjM2NS9pbnRlZ3JhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZWdyYXRpb25zL21zZHluMzY1L2xvYWRFeHRlcm5hbEFwaS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlD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QUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNyQlk7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixnREFBZ0Q7QUFDL0UscUNBQXFDLGdEQUFnRDtBQUNyRixpQ0FBaUMseUNBQXlDLHdCQUF3QixFQUFFLEVBQUU7QUFDdEc7QUFDQSxrQ0FBa0MsUUFBUTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsdUVBQXVFLEVBQUU7QUFDN0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1zZHluMzY1LWE2ZjFiNjJkYjM4Y2Q2MWZhYzZhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYWdlbnQvY29tbXVuaWNhdG9yL2FkYXB0ZXJzL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCIvKipcbiAqIFRoZSBpbnZlcnNlIG9mIGBfLnRvUGFpcnNgOyB0aGlzIG1ldGhvZCByZXR1cm5zIGFuIG9iamVjdCBjb21wb3NlZFxuICogZnJvbSBrZXktdmFsdWUgYHBhaXJzYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IHBhaXJzIFRoZSBrZXktdmFsdWUgcGFpcnMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgb2JqZWN0LlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmZyb21QYWlycyhbWydhJywgMV0sIFsnYicsIDJdXSk7XG4gKiAvLyA9PiB7ICdhJzogMSwgJ2InOiAyIH1cbiAqL1xuZnVuY3Rpb24gZnJvbVBhaXJzKHBhaXJzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcGFpcnMgPT0gbnVsbCA/IDAgOiBwYWlycy5sZW5ndGgsXG4gICAgICByZXN1bHQgPSB7fTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBwYWlyID0gcGFpcnNbaW5kZXhdO1xuICAgIHJlc3VsdFtwYWlyWzBdXSA9IHBhaXJbMV07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmcm9tUGFpcnM7XG4iLCJleHBvcnQgKiBmcm9tICcuL3NyYy90eXBlcyc7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImV4cG9ydCB2YXIgcmVxdWVzdE1lc3NhZ2VzID0gW1xyXG4gICAgJ0dFVF9BR0VOVF9TVEFURScsXHJcbiAgICAnU0VUX0FHRU5UX1NUQVRFJyxcclxuICAgICdTVEFSVF9DQUxMJyxcclxuICAgICdTVEFSVF9TTVNfQ0hBVCcsXHJcbiAgICAnU1RBUlRfRU1BSUwnLFxyXG4gICAgJ1RFUk1JTkFURV9DQUxMJyxcclxuICAgICdDT01QTEVURV9JTlRFUkFDVElPTicsXHJcbiAgICAnU1dJVENIX0FDVElWRV9JTlRFUkFDVElPTicsXHJcbiAgICAnQ0hBTkdFX1NFUlZJQ0UnLFxyXG4gICAgJ1NFVF9ESVNQT1NJVElPTicsXHJcbiAgICAnR0VUX0NBTExfUkVDT1JESU5HX1NUQVRVUycsXHJcbiAgICAnU0VUX0NBTExfUkVDT1JESU5HX1NUQVRVUycsXHJcbiAgICAnR0VUX1NDUkVFTl9SRUNPUkRJTkdfU1RBVFVTJyxcclxuICAgICdTRVRfU0NSRUVOX1JFQ09SRElOR19TVEFUVVMnLFxyXG4gICAgJ01VVEVfQUxMJyxcclxuICAgICdVTk1VVEVfQUxMJyxcclxuICAgICdHRVRfQ09ORklHJyxcclxuICAgICdTRVRfVkFSSUFCTEUnLFxyXG4gICAgJ1dJREdFVF9NSU5JTUlaRUQnLFxyXG4gICAgJ1dJREdFVF9NQVhJTUlaRUQnLFxyXG4gICAgJ0FERF9JTlRFUkFDVElPTl9BU1NPQ0lBVEVEX09CSkVDVCcsXHJcbiAgICAnU0VUX0lOVEVSQUNUSU9OX0FDVElWRV9TQ1JFRU4nLFxyXG5dO1xyXG5leHBvcnQgdmFyIHJlcXVlc3RSZXNwb25zZU1lc3NhZ2VzID0gW1xyXG4gICAgJ0dFVF9BR0VOVF9TVEFURV9SRVNQT05TRScsXHJcbiAgICAnU0VUX0FHRU5UX1NUQVRFX1JFU1BPTlNFJyxcclxuICAgICdTVEFSVF9DQUxMX1JFU1BPTlNFJyxcclxuICAgICdTVEFSVF9TTVNfQ0hBVF9SRVNQT05TRScsXHJcbiAgICAnU1RBUlRfRU1BSUxfUkVTUE9OU0UnLFxyXG4gICAgJ1RFUk1JTkFURV9DQUxMX1JFU1BPTlNFJyxcclxuICAgICdDT01QTEVURV9JTlRFUkFDVElPTl9SRVNQT05TRScsXHJcbiAgICAnU1dJVENIX0FDVElWRV9JTlRFUkFDVElPTl9SRVNQT05TRScsXHJcbiAgICAnQ0hBTkdFX1NFUlZJQ0VfUkVTUE9OU0UnLFxyXG4gICAgJ1NFVF9ESVNQT1NJVElPTl9SRVNQT05TRScsXHJcbiAgICAnR0VUX0NBTExfUkVDT1JESU5HX1NUQVRVU19SRVNQT05TRScsXHJcbiAgICAnU0VUX0NBTExfUkVDT1JESU5HX1NUQVRVU19SRVNQT05TRScsXHJcbiAgICAnR0VUX1NDUkVFTl9SRUNPUkRJTkdfU1RBVFVTX1JFU1BPTlNFJyxcclxuICAgICdTRVRfU0NSRUVOX1JFQ09SRElOR19TVEFUVVNfUkVTUE9OU0UnLFxyXG4gICAgJ01VVEVfQUxMX1JFU1BPTlNFJyxcclxuICAgICdVTk1VVEVfQUxMX1JFU1BPTlNFJyxcclxuICAgICdHRVRfQ09ORklHX1JFU1BPTlNFJyxcclxuICAgICdTRVRfVkFSSUFCTEVfUkVTUE9OU0UnLFxyXG4gICAgJ1dJREdFVF9NSU5JTUlaRURfUkVTUE9OU0UnLFxyXG4gICAgJ1dJREdFVF9NQVhJTUlaRURfUkVTUE9OU0UnLFxyXG4gICAgJ0FERF9JTlRFUkFDVElPTl9BU1NPQ0lBVEVEX09CSkVDVF9SRVNQT05TRScsXHJcbiAgICAnU0VUX0lOVEVSQUNUSU9OX0FDVElWRV9TQ1JFRU5fUkVTUE9OU0UnLFxyXG5dO1xyXG5leHBvcnQgdmFyIGNhbGxiYWNrTWVzc2FnZXMgPSBbXHJcbiAgICAnTE9HSU4nLFxyXG4gICAgJ0xPR09VVCcsXHJcbiAgICAnTkVXX0lOVEVSQUNUSU9OJyxcclxuICAgICdJTlRFUkFDVElPTl9SRU1PVkVEJyxcclxuICAgICdJTlRFUkFDVElPTl9TVEFURV9DSEFOR0UnLFxyXG4gICAgJ0FDVElWRV9JTlRFUkFDVElPTl9TV0lUQ0hFRCcsXHJcbiAgICAnQUdFTlRfU1RBVEVfQ0hBTkdFJyxcclxuICAgICdSRVFVRVNUX1RSQU5TRkVSX0RBVEEnLFxyXG4gICAgJ0xPQURfVFJBTlNGRVJfREFUQScsXHJcbiAgICAnTUFOVUFMX0NBTEwnLFxyXG4gICAgJ01BWElNSVpFX1dJREdFVCcsXHJcbiAgICAnU0VBUkNIX0tOT1dMRURHRV9CQVNFJyxcclxuICAgICdHRVRfS05PV0xFREdFX0JBU0VfQVJUSUNMRScsXHJcbiAgICAnU0hPV19TQ1JFRU5fUE9QJyxcclxuICAgICdTRUFSQ0hfUkVDT1JEUycsXHJcbiAgICAnQUNUSVZBVEVfSU5URVJBQ1RJT05fU0NSRUVOJyxcclxuXTtcclxuZXhwb3J0IHZhciBjYWxsYmFja1Jlc3BvbnNlTWVzc2FnZXMgPSBbXHJcbiAgICAnUkVRVUVTVF9UUkFOU0ZFUl9EQVRBX1JFU1BPTlNFJyxcclxuICAgICdTRUFSQ0hfS05PV0xFREdFX0JBU0VfUkVTUE9OU0UnLFxyXG4gICAgJ0dFVF9LTk9XTEVER0VfQkFTRV9BUlRJQ0xFX1JFU1BPTlNFJyxcclxuXTtcclxudmFyIHJlc3VsdFN0YXR1cyA9IFsnZXJyb3InLCAnc3VjY2VzcyddO1xyXG52YXIgaW50ZXJhY3Rpb25TdGF0ZSA9IFsndW5rbm93bicsICdxdWV1ZWQnLCAnaXZyJywgJ3dyYXBfdXAnLCAnd3JhcF91cF9ob2xkJywgJ2RlbGl2ZXJlZCcsICdkZWxpdmVyeV9wZW5kaW5nJywgJ2hvbGQnLCAnY29tcGxldGVkJ107XHJcbnZhciBjYWxsRGlyZWN0aW9uID0gWydpbmJvdW5kJywgJ291dGJvdW5kJ107XHJcbnZhciBpbnRlcmFjdGlvblR5cGUgPSBbJ3ZvaWNlJywgJ2NoYXQnLCAnZW1haWwnXTtcclxuZXhwb3J0IHZhciBhZ2VudFN0YXRlcyA9IFsnc3VwZXJ2aXNpbmcnLCAncmVhZHknLCAnbm90X3JlYWR5JywgJ2J1c3knLCAnYWZ0ZXJfY2FsbF93b3JrJ107XHJcbmV4cG9ydCB2YXIgcmVjb3JkaW5nVGFyZ2V0cyA9IFsnY2FsbCcsICdzY3JlZW4nXTtcclxuZXhwb3J0IHZhciByZXF1ZXN0UmVzcG9uc2VNYXAgPSB7XHJcbiAgICAnR0VUX0FHRU5UX1NUQVRFJzogJ0dFVF9BR0VOVF9TVEFURV9SRVNQT05TRScsXHJcbiAgICAnU0VUX0FHRU5UX1NUQVRFJzogJ1NFVF9BR0VOVF9TVEFURV9SRVNQT05TRScsXHJcbiAgICAnU1RBUlRfQ0FMTCc6ICdTVEFSVF9DQUxMX1JFU1BPTlNFJyxcclxuICAgICdTVEFSVF9TTVNfQ0hBVCc6ICdTVEFSVF9TTVNfQ0hBVF9SRVNQT05TRScsXHJcbiAgICAnU1RBUlRfRU1BSUwnOiAnU1RBUlRfRU1BSUxfUkVTUE9OU0UnLFxyXG4gICAgJ1RFUk1JTkFURV9DQUxMJzogJ1RFUk1JTkFURV9DQUxMX1JFU1BPTlNFJyxcclxuICAgICdDT01QTEVURV9JTlRFUkFDVElPTic6ICdDT01QTEVURV9JTlRFUkFDVElPTl9SRVNQT05TRScsXHJcbiAgICAnU1dJVENIX0FDVElWRV9JTlRFUkFDVElPTic6ICdTV0lUQ0hfQUNUSVZFX0lOVEVSQUNUSU9OX1JFU1BPTlNFJyxcclxuICAgICdDSEFOR0VfU0VSVklDRSc6ICdDSEFOR0VfU0VSVklDRV9SRVNQT05TRScsXHJcbiAgICAnU0VUX0RJU1BPU0lUSU9OJzogJ1NFVF9ESVNQT1NJVElPTl9SRVNQT05TRScsXHJcbiAgICAnR0VUX0NBTExfUkVDT1JESU5HX1NUQVRVUyc6ICdHRVRfQ0FMTF9SRUNPUkRJTkdfU1RBVFVTX1JFU1BPTlNFJyxcclxuICAgICdTRVRfQ0FMTF9SRUNPUkRJTkdfU1RBVFVTJzogJ1NFVF9DQUxMX1JFQ09SRElOR19TVEFUVVNfUkVTUE9OU0UnLFxyXG4gICAgJ0dFVF9TQ1JFRU5fUkVDT1JESU5HX1NUQVRVUyc6ICdHRVRfU0NSRUVOX1JFQ09SRElOR19TVEFUVVNfUkVTUE9OU0UnLFxyXG4gICAgJ1NFVF9TQ1JFRU5fUkVDT1JESU5HX1NUQVRVUyc6ICdTRVRfU0NSRUVOX1JFQ09SRElOR19TVEFUVVNfUkVTUE9OU0UnLFxyXG4gICAgJ01VVEVfQUxMJzogJ01VVEVfQUxMX1JFU1BPTlNFJyxcclxuICAgICdVTk1VVEVfQUxMJzogJ1VOTVVURV9BTExfUkVTUE9OU0UnLFxyXG4gICAgJ0dFVF9DT05GSUcnOiAnR0VUX0NPTkZJR19SRVNQT05TRScsXHJcbiAgICAnU0VUX1ZBUklBQkxFJzogJ1NFVF9WQVJJQUJMRV9SRVNQT05TRScsXHJcbiAgICAnV0lER0VUX01JTklNSVpFRCc6ICdXSURHRVRfTUlOSU1JWkVEX1JFU1BPTlNFJyxcclxuICAgICdXSURHRVRfTUFYSU1JWkVEJzogJ1dJREdFVF9NQVhJTUlaRURfUkVTUE9OU0UnLFxyXG4gICAgJ0FERF9JTlRFUkFDVElPTl9BU1NPQ0lBVEVEX09CSkVDVCc6ICdBRERfSU5URVJBQ1RJT05fQVNTT0NJQVRFRF9PQkpFQ1RfUkVTUE9OU0UnLFxyXG4gICAgJ1NFVF9JTlRFUkFDVElPTl9BQ1RJVkVfU0NSRUVOJzogJ1NFVF9JTlRFUkFDVElPTl9BQ1RJVkVfU0NSRUVOX1JFU1BPTlNFJyxcclxufTtcclxuZXhwb3J0IHZhciBjYWxsYmFja1JlcXVlc3RSZXNwb25zZU1hcCA9IHtcclxuICAgICdSRVFVRVNUX1RSQU5TRkVSX0RBVEEnOiAnUkVRVUVTVF9UUkFOU0ZFUl9EQVRBX1JFU1BPTlNFJyxcclxuICAgICdTRUFSQ0hfS05PV0xFREdFX0JBU0UnOiAnU0VBUkNIX0tOT1dMRURHRV9CQVNFX1JFU1BPTlNFJyxcclxuICAgICdHRVRfS05PV0xFREdFX0JBU0VfQVJUSUNMRSc6ICdHRVRfS05PV0xFREdFX0JBU0VfQVJUSUNMRV9SRVNQT05TRScsXHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXR5cGVzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBmcm9tUGFpcnNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwibG9kYXNoL2Zyb21QYWlyc1wiKSk7XHJcbnZhciBhZGFwdGVyc190eXBlc18xID0gcmVxdWlyZShcIkBicGluYy9hZGFwdGVycy10eXBlc1wiKTtcclxudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcclxuLy8gSW4gbWlsbGlzZWNvbmRzIChtcylcclxudmFyIHJlc3BvbnNlVGltZW91dCA9IDEwMDA7XHJcbnZhciBzZWxmU2NyaXB0VXJsID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICh3aW5kb3cuZG9jdW1lbnQuY3VycmVudFNjcmlwdCkge1xyXG4gICAgICAgIHJldHVybiB3aW5kb3cuZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKTtcclxuICAgICAgICB2YXIgbXlTY3JpcHQgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgcmV0dXJuIG15U2NyaXB0LnNyYztcclxuICAgIH1cclxufSkoKTtcclxudmFyIGFkY09yaWdpbk92ZXJyaWRlID0gdXRpbHNfMS51dGlscy5leHRyYWN0VVJMUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5ocmVmKVsnYWRjVXJsJ107XHJcbnZhciBhZGNPcmlnaW4gPSBhZGNPcmlnaW5PdmVycmlkZSB8fCBuZXcgVVJMKHNlbGZTY3JpcHRVcmwpLm9yaWdpbjsgLy8gJ2h0dHBzOi8vYWRjb21tdW5pY2F0b3Iud2ViLmFwcCdcclxudmFyIEFnZW50RGVza3RvcENsaWVudEFQSSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEFnZW50RGVza3RvcENsaWVudEFQSShpbnRlZ3JhdGlvbktleSwgbW91bnRSb290KSB7XHJcbiAgICAgICAgdGhpcy5hZGNGcmFtZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5hZGNGcmFtZU9yaWdpbiA9ICcnO1xyXG4gICAgICAgIHRoaXMucGVuZGluZ01lc3NhZ2VzID0gW107XHJcbiAgICAgICAgdGhpcy5pbnRlZ3JhdGlvbktleSA9IGludGVncmF0aW9uS2V5IHx8IHV0aWxzXzEudXRpbHMuZ2VuZXJhdGVSYW5kb21VSUQoKTtcclxuICAgICAgICB0aGlzLmNvbm5lY3Rpb25Fc3RhYmxpc2hlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaW5jb21pbmdNZXNzYWdlTG9nZ2VycyA9IFtdO1xyXG4gICAgICAgIHRoaXMub3V0Z29pbmdNZXNzYWdlTG9nZ2VycyA9IFtdO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXJzID0gZnJvbVBhaXJzXzEuZGVmYXVsdChhZGFwdGVyc190eXBlc18xLmNhbGxiYWNrTWVzc2FnZXMubWFwKGZ1bmN0aW9uIChtZXNzYWdlVHlwZSkgeyByZXR1cm4gW21lc3NhZ2VUeXBlLCBbXV07IH0pKTtcclxuICAgICAgICB0aGlzLnJlc3BvbnNlQ2FsbGJhY2tzID0gZnJvbVBhaXJzXzEuZGVmYXVsdChhZGFwdGVyc190eXBlc18xLnJlcXVlc3RSZXNwb25zZU1lc3NhZ2VzLm1hcChmdW5jdGlvbiAobWVzc2FnZVR5cGUpIHsgcmV0dXJuIFttZXNzYWdlVHlwZSwge31dOyB9KSk7XHJcbiAgICAgICAgdGhpcy5wcmVwYXJlQWRjSWZyYW1lKG1vdW50Um9vdCk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlckxpc3RlbmVycygpO1xyXG4gICAgfVxyXG4gICAgQWdlbnREZXNrdG9wQ2xpZW50QVBJLnByb3RvdHlwZS5pbmplY3RJbmNvbWluZ01lc3NhZ2VMb2dnZXIgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLmluY29taW5nTWVzc2FnZUxvZ2dlcnMucHVzaChjYWxsYmFjayk7XHJcbiAgICB9O1xyXG4gICAgQWdlbnREZXNrdG9wQ2xpZW50QVBJLnByb3RvdHlwZS5pbmplY3RPdXRnb2luZ01lc3NhZ2VMb2dnZXIgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLm91dGdvaW5nTWVzc2FnZUxvZ2dlcnMucHVzaChjYWxsYmFjayk7XHJcbiAgICB9O1xyXG4gICAgQWdlbnREZXNrdG9wQ2xpZW50QVBJLnByb3RvdHlwZS5wcmVwYXJlQWRjSWZyYW1lID0gZnVuY3Rpb24gKG1vdW50Um9vdCkge1xyXG4gICAgICAgIG1vdW50Um9vdCA9IChtb3VudFJvb3QgJiYgbW91bnRSb290LmFwcGVuZENoaWxkKSA/IG1vdW50Um9vdCA6IGRvY3VtZW50LmJvZHk7XHJcbiAgICAgICAgdGhpcy5hZGNGcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xyXG4gICAgICAgIHRoaXMuYWRjRnJhbWUudGl0bGUgPSAnQWdlbnQgRGVza3RvcCBDb21tdW5pY2F0b3InO1xyXG4gICAgICAgIHRoaXMuYWRjRnJhbWUuaWQgPSAnYWRjX2ZyYW1lJztcclxuICAgICAgICB0aGlzLmFkY0ZyYW1lLnN0eWxlLmJvcmRlciA9ICdub25lJztcclxuICAgICAgICB0aGlzLmFkY0ZyYW1lLndpZHRoID0gJzUwMCc7XHJcbiAgICAgICAgdGhpcy5hZGNGcmFtZS5oZWlnaHQgPSAnMTAwJSc7XHJcbiAgICAgICAgdGhpcy5hZGNGcmFtZS5hbGxvdyA9ICdtaWNyb3Bob25lOyBjYW1lcmE7IGdlb2xvY2F0aW9uJztcclxuICAgICAgICB0aGlzLmFkY0ZyYW1lLnNyYyA9IGFkY09yaWdpbiArICcvYWdlbnQvY29tbXVuaWNhdG9yLyc7XHJcbiAgICAgICAgdGhpcy5hZGNGcmFtZS5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdAQEAgQWRhcHRlciBmYWlsdXJlOiB1bmFibGUgdG8gbG9hZCBBcGkgUHJveHkgaWZyYW1lJyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBtb3VudFJvb3QuYXBwZW5kQ2hpbGQodGhpcy5hZGNGcmFtZSk7XHJcbiAgICAgICAgdGhpcy5hZGNGcmFtZU9yaWdpbiA9IChuZXcgVVJMKHRoaXMuYWRjRnJhbWUuc3JjKSkub3JpZ2luO1xyXG4gICAgfTtcclxuICAgIEFnZW50RGVza3RvcENsaWVudEFQSS5wcm90b3R5cGUuaGFuZGxlSW5jb21pbmdNZXNzYWdlID0gZnVuY3Rpb24gKHR5cGUsIHVpZCwgcGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBjb25zb2xlLmxvZygnQEBAIEhhbmRsZTogJywgdHlwZSwgdWlkLCBwYXJhbXMpO1xyXG4gICAgICAgIHZhciBoYW5kbGVycyA9IHRoaXMubWVzc2FnZUhhbmRsZXJzW3R5cGVdO1xyXG4gICAgICAgIHZhciBwZW5kaW5nUmVzdWx0cyA9IGhhbmRsZXJzLm1hcChmdW5jdGlvbiAoaGFuZGxlcikgeyByZXR1cm4gaGFuZGxlci5hcHBseSh2b2lkIDAsIHBhcmFtcyk7IH0pO1xyXG4gICAgICAgIHV0aWxzXzEudXRpbHMud2FpdFJlc29sdmVBbGwocGVuZGluZ1Jlc3VsdHMpLnRoZW4oZnVuY3Rpb24gKHByb21pc2VSZXN1bHRzKSB7XHJcbiAgICAgICAgICAgIHZhciBwb3NpdGl2ZVJlc3VsdHMgPSBwcm9taXNlUmVzdWx0cy5yZWR1Y2UoZnVuY3Rpb24gKGFyciwgcmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gJ2Z1bGZpbGxlZCcgJiZcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQudmFsdWUgIT09IG51bGwgJiZcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQudmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHJlc3VsdC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyO1xyXG4gICAgICAgICAgICB9LCBbXSk7XHJcbiAgICAgICAgICAgIHZhciBsYXN0VmFsdWUgPSBwb3NpdGl2ZVJlc3VsdHMubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICA/IHBvc2l0aXZlUmVzdWx0c1twb3NpdGl2ZVJlc3VsdHMubGVuZ3RoIC0gMV1cclxuICAgICAgICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICAgICAgaWYgKGFkYXB0ZXJzX3R5cGVzXzEuY2FsbGJhY2tSZXNwb25zZU1lc3NhZ2VzLmluY2x1ZGVzKHR5cGUgKyBcIl9SRVNQT05TRVwiKSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMucG9zdE1lc3NhZ2VUb0FkYyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdWlkOiB1aWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZSArIFwiX1JFU1BPTlNFXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBbbGFzdFZhbHVlXSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgQWdlbnREZXNrdG9wQ2xpZW50QVBJLnByb3RvdHlwZS5yZWdpc3Rlckxpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKGUub3JpZ2luICE9PSBfdGhpcy5hZGNGcmFtZU9yaWdpbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGlmICghZS5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIF9hID0gZS5kYXRhLCB0eXBlID0gX2EudHlwZSwgdWlkID0gX2EudWlkLCBwYXJhbXMgPSBfYS5wYXJhbXM7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5pbmNvbWluZ01lc3NhZ2VMb2dnZXJzLmZvckVhY2goZnVuY3Rpb24gKGxvZykgeyByZXR1cm4gbG9nKHR5cGUsIHBhcmFtcyk7IH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdoZWxsbycpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jb25uZWN0aW9uRXN0YWJsaXNoZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnBvc3RNZXNzYWdlVG9BZGMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1aWQ6IHVpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2hpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiBbX3RoaXMuaW50ZWdyYXRpb25LZXldLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5wZW5kaW5nTWVzc2FnZXMuZm9yRWFjaChmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucG9zdE1lc3NhZ2VUb0FkYyhtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnBlbmRpbmdNZXNzYWdlcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghX3RoaXMuY29ubmVjdGlvbkVzdGFibGlzaGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGFkYXB0ZXJzX3R5cGVzXzEuY2FsbGJhY2tNZXNzYWdlcy5pbmNsdWRlcyh0eXBlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmhhbmRsZUluY29taW5nTWVzc2FnZSh0eXBlLCB1aWQsIHBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChhZGFwdGVyc190eXBlc18xLnJlcXVlc3RSZXNwb25zZU1lc3NhZ2VzLmluY2x1ZGVzKHR5cGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHdhaXRpbmcgPSBfdGhpcy5yZXNwb25zZUNhbGxiYWNrc1t0eXBlXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAod2FpdGluZyAmJiB3YWl0aW5nW3VpZF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNhbGxiYWNrXzEgPSB3YWl0aW5nW3VpZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB3YWl0aW5nW3VpZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gY2FsbGJhY2tfMShwYXJhbXMpOyB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0BAQCBHZXQgdW5rbm93biBtZXNzYWdlIGZyb20gQ29tbXVuaWNhdG9yOiAnLCB0eXBlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQEBAIEVycm9yOiAnLCBlLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgQWdlbnREZXNrdG9wQ2xpZW50QVBJLnByb3RvdHlwZS5ydW5SZXNwb25zZVRpbWVvdXRXYXRjaCA9IGZ1bmN0aW9uICh0eXBlLCB1aWQsIHJlc29sdmUpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgY2FsbGJhY2tzTWFwID0gX3RoaXMucmVzcG9uc2VDYWxsYmFja3NbdHlwZSArIFwiX1JFU1BPTlNFXCJdO1xyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2tzTWFwW3VpZF0pIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBjYWxsYmFja3NNYXBbdWlkXTtcclxuICAgICAgICAgICAgICAgIHZhciBlcnJvclRleHQgPSBcIlJlc3BvbnNlIGZyb20gQ29tbXVuaWNhdG9yIGZvciBldmVudCBcIiArIHR5cGUgKyBcIiB3YXNuJ3QgcmVjZWl2ZWQgaW4gc3BlY2lmaWVkIHRpbWVvdXQ6IFwiICsgcmVzcG9uc2VUaW1lb3V0O1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkBAQCBcIiArIGVycm9yVGV4dCk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHJlc3BvbnNlVGltZW91dCk7XHJcbiAgICB9O1xyXG4gICAgQWdlbnREZXNrdG9wQ2xpZW50QVBJLnByb3RvdHlwZS5wb3N0TWVzc2FnZVRvQWRjID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICBpZiAodGhpcy5hZGNGcmFtZSAhPT0gbnVsbCAmJiB0aGlzLmFkY0ZyYW1lLmNvbnRlbnRXaW5kb3cgJiYgdGhpcy5jb25uZWN0aW9uRXN0YWJsaXNoZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5vdXRnb2luZ01lc3NhZ2VMb2dnZXJzLmZvckVhY2goZnVuY3Rpb24gKGxvZykgeyByZXR1cm4gbG9nKGRhdGEudHlwZSwgZGF0YS5wYXJhbXMpOyB9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0BAQCBBREFQVEVSIFNFTkQgTUVTU0FHRTogJywgZGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRjRnJhbWUuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZShkYXRhLCB0aGlzLmFkY0ZyYW1lT3JpZ2luKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGVuZGluZ01lc3NhZ2VzLnB1c2goZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEFnZW50RGVza3RvcENsaWVudEFQSS5wcm90b3R5cGUuYXBpQ2FsbCA9IGZ1bmN0aW9uICh0eXBlLCBwYXJhbXMpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xyXG4gICAgICAgICAgICB2YXIgdWlkID0gdXRpbHNfMS51dGlscy5nZW5lcmF0ZVJhbmRvbVVJRCgpO1xyXG4gICAgICAgICAgICBfdGhpcy5wb3N0TWVzc2FnZVRvQWRjKHsgdWlkOiB1aWQsIHR5cGU6IHR5cGUsIHBhcmFtczogcGFyYW1zIH0pO1xyXG4gICAgICAgICAgICB2YXIgd2FpdGluZyA9IF90aGlzLnJlc3BvbnNlQ2FsbGJhY2tzW3R5cGUgKyBcIl9SRVNQT05TRVwiXTtcclxuICAgICAgICAgICAgd2FpdGluZ1t1aWRdID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgX3RoaXMucnVuUmVzcG9uc2VUaW1lb3V0V2F0Y2godHlwZSwgdWlkLCByZXNvbHZlKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBBZ2VudERlc2t0b3BDbGllbnRBUEkucHJvdG90eXBlLmdldEFnZW50U3RhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpQ2FsbCgnR0VUX0FHRU5UX1NUQVRFJyk7XHJcbiAgICB9O1xyXG4gICAgQWdlbnREZXNrdG9wQ2xpZW50QVBJLnByb3RvdHlwZS5zZXRBZ2VudFN0YXRlID0gZnVuY3Rpb24gKHN0YXRlLCBub3RSZWFkeVJlYXNvbikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwaUNhbGwoJ1NFVF9BR0VOVF9TVEFURScsIFtzdGF0ZSwgbm90UmVhZHlSZWFzb25dKTtcclxuICAgIH07XHJcbiAgICBBZ2VudERlc2t0b3BDbGllbnRBUEkucHJvdG90eXBlLnN0YXJ0Q2FsbCA9IGZ1bmN0aW9uIChwaG9uZW51bWJlciwgaW5pdGlhbE9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwaUNhbGwoJ1NUQVJUX0NBTEwnLCBbcGhvbmVudW1iZXIsIGluaXRpYWxPYmplY3QgfHwgbnVsbF0pO1xyXG4gICAgfTtcclxuICAgIEFnZW50RGVza3RvcENsaWVudEFQSS5wcm90b3R5cGUuc3RhcnRTTVNDaGF0ID0gZnVuY3Rpb24gKHBob25lbnVtYmVyLCBpbml0aWFsT2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpQ2FsbCgnU1RBUlRfU01TX0NIQVQnLCBbcGhvbmVudW1iZXIsIGluaXRpYWxPYmplY3QgfHwgbnVsbF0pO1xyXG4gICAgfTtcclxuICAgIEFnZW50RGVza3RvcENsaWVudEFQSS5wcm90b3R5cGUuc3RhcnRFbWFpbCA9IGZ1bmN0aW9uIChlbWFpbCwgaW5pdGlhbE9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwaUNhbGwoJ1NUQVJUX0VNQUlMJywgW2VtYWlsLCBpbml0aWFsT2JqZWN0IHx8IG51bGxdKTtcclxuICAgIH07XHJcbiAgICBBZ2VudERlc2t0b3BDbGllbnRBUEkucHJvdG90eXBlLnRlcm1pbmF0ZUNhbGwgPSBmdW5jdGlvbiAoaW50ZXJhY3Rpb25JZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwaUNhbGwoJ1RFUk1JTkFURV9DQUxMJywgW2ludGVyYWN0aW9uSWRdKTtcclxuICAgIH07XHJcbiAgICBBZ2VudERlc2t0b3BDbGllbnRBUEkucHJvdG90eXBlLmNvbXBsZXRlSW50ZXJhY3Rpb24gPSBmdW5jdGlvbiAoaW50ZXJhY3Rpb25JZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwaUNhbGwoJ0NPTVBMRVRFX0lOVEVSQUNUSU9OJywgW2ludGVyYWN0aW9uSWRdKTtcclxuICAgIH07XHJcbiAgICBBZ2VudERlc2t0b3BDbGllbnRBUEkucHJvdG90eXBlLnN3aXRjaEFjdGl2ZUludGVyYWN0aW9uID0gZnVuY3Rpb24gKGludGVyYWN0aW9uSWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcGlDYWxsKCdTV0lUQ0hfQUNUSVZFX0lOVEVSQUNUSU9OJywgW2ludGVyYWN0aW9uSWRdKTtcclxuICAgIH07XHJcbiAgICBBZ2VudERlc2t0b3BDbGllbnRBUEkucHJvdG90eXBlLmNoYW5nZVNlcnZpY2UgPSBmdW5jdGlvbiAoc2VydmljZU5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcGlDYWxsKCdDSEFOR0VfU0VSVklDRScsIFtzZXJ2aWNlTmFtZV0pO1xyXG4gICAgfTtcclxuICAgIEFnZW50RGVza3RvcENsaWVudEFQSS5wcm90b3R5cGUuc2V0RGlzcG9zaXRpb24gPSBmdW5jdGlvbiAoZGlzcG9zaXRpb25EYXRhLCBpbnRlcmFjdGlvbklkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpQ2FsbCgnU0VUX0RJU1BPU0lUSU9OJywgW2Rpc3Bvc2l0aW9uRGF0YSwgaW50ZXJhY3Rpb25JZF0pO1xyXG4gICAgfTtcclxuICAgIEFnZW50RGVza3RvcENsaWVudEFQSS5wcm90b3R5cGUuZ2V0Q2FsbFJlY29yZGluZ1N0YXR1cyA9IGZ1bmN0aW9uIChpbnRlcmFjdGlvbklkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpQ2FsbCgnR0VUX0NBTExfUkVDT1JESU5HX1NUQVRVUycsIFtpbnRlcmFjdGlvbklkXSk7XHJcbiAgICB9O1xyXG4gICAgQWdlbnREZXNrdG9wQ2xpZW50QVBJLnByb3RvdHlwZS5zZXRDYWxsUmVjb3JkaW5nU3RhdHVzID0gZnVuY3Rpb24gKG5ld1N0YXR1cywgaW50ZXJhY3Rpb25JZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwaUNhbGwoJ1NFVF9DQUxMX1JFQ09SRElOR19TVEFUVVMnLCBbbmV3U3RhdHVzLCBpbnRlcmFjdGlvbklkXSk7XHJcbiAgICB9O1xyXG4gICAgQWdlbnREZXNrdG9wQ2xpZW50QVBJLnByb3RvdHlwZS5nZXRTY3JlZW5SZWNvcmRpbmdTdGF0dXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpQ2FsbCgnR0VUX1NDUkVFTl9SRUNPUkRJTkdfU1RBVFVTJyk7XHJcbiAgICB9O1xyXG4gICAgQWdlbnREZXNrdG9wQ2xpZW50QVBJLnByb3RvdHlwZS5zZXRTY3JlZW5SZWNvcmRpbmdTdGF0dXMgPSBmdW5jdGlvbiAobmV3U3RhdHVzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpQ2FsbCgnU0VUX1NDUkVFTl9SRUNPUkRJTkdfU1RBVFVTJywgW25ld1N0YXR1c10pO1xyXG4gICAgfTtcclxuICAgIEFnZW50RGVza3RvcENsaWVudEFQSS5wcm90b3R5cGUubXV0ZUFsbCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcGlDYWxsKCdNVVRFX0FMTCcsIFt0YXJnZXRdKTtcclxuICAgIH07XHJcbiAgICBBZ2VudERlc2t0b3BDbGllbnRBUEkucHJvdG90eXBlLnVubXV0ZUFsbCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcGlDYWxsKCdVTk1VVEVfQUxMJywgW3RhcmdldF0pO1xyXG4gICAgfTtcclxuICAgIEFnZW50RGVza3RvcENsaWVudEFQSS5wcm90b3R5cGUuZ2V0Q29uZmlnID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwaUNhbGwoJ0dFVF9DT05GSUcnKTtcclxuICAgIH07XHJcbiAgICBBZ2VudERlc2t0b3BDbGllbnRBUEkucHJvdG90eXBlLnNldFZhcmlhYmxlID0gZnVuY3Rpb24gKGtleSwgdmFsdWUsIGludGVyYWN0aW9uSWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcGlDYWxsKCdTRVRfVkFSSUFCTEUnLCBba2V5LCB2YWx1ZSwgaW50ZXJhY3Rpb25JZF0pO1xyXG4gICAgfTtcclxuICAgIEFnZW50RGVza3RvcENsaWVudEFQSS5wcm90b3R5cGUubm90aWZ5V2lkZ2V0TWluaW1pemVkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwaUNhbGwoJ1dJREdFVF9NSU5JTUlaRUQnKTtcclxuICAgIH07XHJcbiAgICBBZ2VudERlc2t0b3BDbGllbnRBUEkucHJvdG90eXBlLm5vdGlmeVdpZGdldE1heGltaXplZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcGlDYWxsKCdXSURHRVRfTUFYSU1JWkVEJyk7XHJcbiAgICB9O1xyXG4gICAgQWdlbnREZXNrdG9wQ2xpZW50QVBJLnByb3RvdHlwZS5hZGRJbnRlcmFjdGlvbkFzc29jaWF0ZWRPYmplY3QgPSBmdW5jdGlvbiAob2JqZWN0LCBpbnRlcmFjdGlvbklkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpQ2FsbCgnQUREX0lOVEVSQUNUSU9OX0FTU09DSUFURURfT0JKRUNUJywgW29iamVjdCwgaW50ZXJhY3Rpb25JZF0pO1xyXG4gICAgfTtcclxuICAgIEFnZW50RGVza3RvcENsaWVudEFQSS5wcm90b3R5cGUuc2V0SW50ZXJhY3Rpb25BY3RpdmVTY3JlZW4gPSBmdW5jdGlvbiAoc2NyZWVuRGF0YSwgaW50ZXJhY3Rpb25JZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwaUNhbGwoJ1NFVF9JTlRFUkFDVElPTl9BQ1RJVkVfU0NSRUVOJywgW3NjcmVlbkRhdGEsIGludGVyYWN0aW9uSWRdKTtcclxuICAgIH07XHJcbiAgICBBZ2VudERlc2t0b3BDbGllbnRBUEkucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKG1lc3NhZ2UsIGhhbmRsZXIpIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVyc1ttZXNzYWdlXS5wdXNoKGhhbmRsZXIpO1xyXG4gICAgfTtcclxuICAgIEFnZW50RGVza3RvcENsaWVudEFQSS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKG1lc3NhZ2UsIGhhbmRsZXIpIHtcclxuICAgICAgICB2YXIgZGVsSW5kZXggPSB0aGlzLm1lc3NhZ2VIYW5kbGVyc1ttZXNzYWdlXS5pbmRleE9mKGhhbmRsZXIpO1xyXG4gICAgICAgIGlmIChkZWxJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcnNbbWVzc2FnZV0uc3BsaWNlKGRlbEluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEFnZW50RGVza3RvcENsaWVudEFQSTtcclxufSgpKTtcclxuZXhwb3J0cy5BZ2VudERlc2t0b3BDbGllbnRBUEkgPSBBZ2VudERlc2t0b3BDbGllbnRBUEk7XHJcbndpbmRvdy5icmlnaHRwYXR0ZXJuID0ge1xyXG4gICAgQWRBcGk6IEFnZW50RGVza3RvcENsaWVudEFQSSxcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGludGVncmF0aW9uXzEgPSByZXF1aXJlKFwiLi9pbnRlZ3JhdGlvblwiKTtcclxuaW50ZWdyYXRpb25fMS5yZWdpc3Rlck1TRHluSW50ZWdyYXRpb24oKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGFkY19jbGllbnRfYXBpXzEgPSByZXF1aXJlKFwiLi4vLi4vYWRjLWNsaWVudC1hcGlcIik7XHJcbnZhciBsb2FkRXh0ZXJuYWxBcGlfMSA9IHJlcXVpcmUoXCIuL2xvYWRFeHRlcm5hbEFwaVwiKTtcclxudmFyIGludGVncmF0aW9uS2V5ID0gJ2R5bmFtaWNzY3JtJztcclxuZXhwb3J0cy5hY3Rpdml0eVRhYmxlcyA9IHtcclxuICAgICd2b2ljZSc6ICdwaG9uZWNhbGwnLFxyXG4gICAgJ2NoYXQnOiAnYnBhdHRlcm5fbWVzc2FnaW5nX3Nlc3Npb24nLFxyXG4gICAgJ2VtYWlsJzogJ2VtYWlsJyxcclxufTtcclxudmFyIHRyYW5zZm9ybUR5bjM2NUtCU2VhcmNoUmVzdWx0cyA9IGZ1bmN0aW9uIChzZWFyY2hSZXN1bHRzKSB7XHJcbiAgICByZXR1cm4gc2VhcmNoUmVzdWx0c1xyXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gISFpdGVtLmNvbnRlbnQ7XHJcbiAgICB9KVxyXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuICh7XHJcbiAgICAgICAgaWQ6IGl0ZW0ua25vd2xlZGdlYXJ0aWNsZWlkLFxyXG4gICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxyXG4gICAgICAgIHRleHQ6IGl0ZW0uY29udGVudCxcclxuICAgICAgICBzb3VyY2U6IGludGVncmF0aW9uS2V5LFxyXG4gICAgfSk7IH0pO1xyXG59O1xyXG52YXIgdHJhbnNmb3JtRHluMzY1S0JBcnRpY2xlID0gZnVuY3Rpb24gKGFydGljbGVEYXRhKSB7XHJcbiAgICBpZiAoIWFydGljbGVEYXRhLmNvbnRlbnQpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaWQ6IGFydGljbGVEYXRhLmtub3dsZWRnZWFydGljbGVpZCxcclxuICAgICAgICB0aXRsZTogYXJ0aWNsZURhdGEudGl0bGUsXHJcbiAgICAgICAga2V5d29yZHM6IGFydGljbGVEYXRhLmtleXdvcmRzIHx8ICcnLFxyXG4gICAgICAgIGFuc3dlcjogYXJ0aWNsZURhdGEuY29udGVudCxcclxuICAgICAgICBub3RlczogYXJ0aWNsZURhdGEuZGVzY3JpcHRpb24gfHwgJycsXHJcbiAgICAgICAgbGFuZ3VhZ2U6IGFydGljbGVEYXRhLmxhbmd1YWdlbG9jYWxlaWQuY29kZSxcclxuICAgICAgICBjcmVhdGVkQnlVc2VyOiBhcnRpY2xlRGF0YVsnX2NyZWF0ZWRieV92YWx1ZUBPRGF0YS5Db21tdW5pdHkuRGlzcGxheS5WMS5Gb3JtYXR0ZWRWYWx1ZSddLFxyXG4gICAgICAgIGxhc3RFZGl0ZWRCeVVzZXI6IGFydGljbGVEYXRhWydfbW9kaWZpZWRieV92YWx1ZUBPRGF0YS5Db21tdW5pdHkuRGlzcGxheS5WMS5Gb3JtYXR0ZWRWYWx1ZSddLFxyXG4gICAgICAgIHNvdXJjZTogaW50ZWdyYXRpb25LZXksXHJcbiAgICAgICAgY3VzdG9tRmllbGRzOiB7fSxcclxuICAgIH07XHJcbn07XHJcbnZhciBlbnRpdHlEaXNwbGF5TmFtZSA9IHt9O1xyXG52YXIgY29tbXVuaWNhdG9ySWZyYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkY19mcmFtZScpO1xyXG5leHBvcnRzLnJlZ2lzdGVyTVNEeW5JbnRlZ3JhdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxvYWRFeHRlcm5hbEFwaV8xLmxvYWRDcm1BcGkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJyMjIyMjIyMjIyMjIyMjTWljcm9zb2Z0LkNJRnJhbWV3b3JrOiAnLCB3aW5kb3cuTWljcm9zb2Z0KTtcclxuICAgICAgICBjb25zb2xlLmxvZygnIyMjUkVBRFkhU1RFQURZIUdPIScpO1xyXG4gICAgICAgIHZhciBjaWYgPSB3aW5kb3cuTWljcm9zb2Z0LkNJRnJhbWV3b3JrO1xyXG4gICAgICAgIHZhciBhZEFwaSA9IG5ldyBhZGNfY2xpZW50X2FwaV8xLkFnZW50RGVza3RvcENsaWVudEFQSShpbnRlZ3JhdGlvbktleSk7XHJcbiAgICAgICAgdmFyIGFnZW50RGF0YSA9IG51bGw7XHJcbiAgICAgICAgdmFyIGFjdGl2ZUludGVyYWN0aW9uSWQgPSBudWxsO1xyXG4gICAgICAgIHZhciBsYXN0T2JqZWN0T25TY3JlZW4gPSBudWxsO1xyXG4gICAgICAgIHZhciBleHRyYWN0RXJyb3JNZXNzYWdlID0gZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGVyciA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVyck9iaiA9IEpTT04ucGFyc2UoZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyT2JqICYmIGVyck9iai5tZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlcnJPYmoubWVzc2FnZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWVtcHR5XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkgeyB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChlcnIgJiYgZXJyLm1lc3NhZ2UpIHx8IGVycjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2lmLnNldE1vZGUoMSkuY2F0Y2goZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJyNFUlJPUi1DUk0tU0VULU1PREU6ICcsIGV4dHJhY3RFcnJvck1lc3NhZ2UoZSkpOyB9KTtcclxuICAgICAgICBjaWYuc2V0V2lkdGgoNTAwKS5jYXRjaChmdW5jdGlvbiAoZSkgeyByZXR1cm4gY29uc29sZS5lcnJvcignI0VSUk9SLUNSTS1TRVQtV0lEVEg6ICcsIGV4dHJhY3RFcnJvck1lc3NhZ2UoZSkpOyB9KTtcclxuICAgICAgICBhZEFwaS5vbignTE9HSU4nLCBmdW5jdGlvbiAoc2Vzc2lvbklkLCBhZ0RhdGEpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFnZW50RGF0YSA9IGFnRGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgY2lmLnNldENsaWNrVG9BY3QodHJ1ZSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pOyB9KTtcclxuICAgICAgICBhZEFwaS5vbignTE9HT1VUJywgZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgY2lmLnNldENsaWNrVG9BY3QoZmFsc2UpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTsgfSk7XHJcbiAgICAgICAgdmFyIHNjcmVlblBvcEVudGl0eSA9IGZ1bmN0aW9uIChlbnRpdHlJZCwgZW50aXR5TmFtZSkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdCwgZV8xO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnI09QLU9QLi4uIEl0IGlzIGEgU0NSRUVOLVBPUDogJywgZW50aXR5TmFtZSwgJywgaWQ6ICcsIGVudGl0eUlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCAzLCAsIDRdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgY2lmLm9wZW5Gb3JtKEpTT04uc3RyaW5naWZ5KHsgZW50aXR5SWQ6IGVudGl0eUlkLCBlbnRpdHlOYW1lOiBlbnRpdHlOYW1lIH0pKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcjQ3JtU2NyZWVuUG9wUmVzdWx0OiAnLCByZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignI0VSUk9SLUNSTS1TQ1JFRU4tUE9QOiAnLCBleHRyYWN0RXJyb3JNZXNzYWdlKGVfMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7IH07XHJcbiAgICAgICAgdmFyIGRlZmF1bHRTY3JlZW5Qb3BTZWFyY2hFbnRpdHlUeXBlID0gJ2NvbnRhY3QnO1xyXG4gICAgICAgIHZhciBzY3JlZW5Qb3BTZWFyY2ggPSBmdW5jdGlvbiAoc2VhcmNoUXVlcnksIGVudGl0eVR5cGUpIHtcclxuICAgICAgICAgICAgaWYgKGVudGl0eVR5cGUgPT09IHZvaWQgMCkgeyBlbnRpdHlUeXBlID0gZGVmYXVsdFNjcmVlblBvcFNlYXJjaEVudGl0eVR5cGU7IH1cclxuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0LCBlXzI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnI1BSRVkhUFJFWSEgVGhpcyBpcyB0aGUgc2VhcmNoIGZvcjogJywgc2VhcmNoUXVlcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDMsICwgNF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgY2lmLnJlbmRlclNlYXJjaFBhZ2UoZW50aXR5VHlwZSwgc2VhcmNoUXVlcnkpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyNDcm1TZWFyY2hSZXN1bHQ6ICcsIHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZV8yID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignI0VSUk9SLUNSTS1TRUFSQ0g6ICcsIGV4dHJhY3RFcnJvck1lc3NhZ2UoZV8yKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgYWRBcGkub24oJ1NIT1dfU0NSRUVOX1BPUCcsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzY3JlZW5Qb3BFbnRpdHkoZGF0YS5pZCwgZGF0YS50eXBlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBhZEFwaS5vbignU0VBUkNIX1JFQ09SRFMnLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgIHJldHVybiBzY3JlZW5Qb3BTZWFyY2goZGF0YS50ZXh0LCAoKF9hID0gZGF0YS50eXBlcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmxlbmd0aCkgPyBkYXRhLnR5cGVzWzBdIDogdW5kZWZpbmVkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgY3JlYXRlQmFzaWNBY3Rpdml0eU9iamVjdCA9IGZ1bmN0aW9uICh0YWJsZSwgaW50ZXJhY3Rpb25EYXRhKSB7XHJcbiAgICAgICAgICAgIHZhciBhY3Rpdml0eVJlY29yZCA9IHtcclxuICAgICAgICAgICAgICAgICdzdWJqZWN0JzogaW50ZXJhY3Rpb25EYXRhLnN1YmplY3QsXHJcbiAgICAgICAgICAgICAgICAnZGVzY3JpcHRpb24nOiBpbnRlcmFjdGlvbkRhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAnYWN0dWFsc3RhcnQnOiBpbnRlcmFjdGlvbkRhdGEuc3RhcnRUaW1lID8gKG5ldyBEYXRlKGludGVyYWN0aW9uRGF0YS5zdGFydFRpbWUpKS50b1VUQ1N0cmluZygpIDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgJ2FjdHVhbGVuZCc6IGludGVyYWN0aW9uRGF0YS5lbmRUaW1lID8gKG5ldyBEYXRlKGludGVyYWN0aW9uRGF0YS5lbmRUaW1lKSkudG9VVENTdHJpbmcoKSA6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgICdhY3R1YWxkdXJhdGlvbm1pbnV0ZXMnOiBpbnRlcmFjdGlvbkRhdGEuZHVyYXRpb24gPyBNYXRoLmNlaWwoaW50ZXJhY3Rpb25EYXRhLmR1cmF0aW9uIC8gNjApIDogMCxcclxuICAgICAgICAgICAgICAgICdicGF0dGVybl9pbnRlcmFjdGlvbl9pZCc6IGludGVyYWN0aW9uRGF0YS5pbnRlcmFjdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgJ2JwYXR0ZXJuX2dsb2JhbF9pbnRlcmFjdGlvbl9pZCc6IGludGVyYWN0aW9uRGF0YS5nbG9iYWxJbnRlcmFjdGlvbklkIHx8ICcnLFxyXG4gICAgICAgICAgICAgICAgJ2JwYXR0ZXJuX2FnZW50JzogYWdlbnREYXRhID8gYWdlbnREYXRhLmFnZW50SWQgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAnYnBhdHRlcm5fc2VydmljZSc6IGludGVyYWN0aW9uRGF0YS5zZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgJ2JwYXR0ZXJuX2Rpc3Bvc2l0aW9uJzogaW50ZXJhY3Rpb25EYXRhLmRpc3Bvc2l0aW9uLFxyXG4gICAgICAgICAgICAgICAgJ2JwYXR0ZXJuX3JlY29yZGluZ191cmwnOiBpbnRlcmFjdGlvbkRhdGEucmVjb3JkaW5nVXJsLFxyXG4gICAgICAgICAgICAgICAgJ2JwYXR0ZXJuX2RuaXMnOiBpbnRlcmFjdGlvbkRhdGEuRE5JUyxcclxuICAgICAgICAgICAgICAgICdicGF0dGVybl9hbmknOiBpbnRlcmFjdGlvbkRhdGEuQU5JLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAodGFibGUgPT09IGV4cG9ydHMuYWN0aXZpdHlUYWJsZXMudm9pY2UpIHtcclxuICAgICAgICAgICAgICAgIGFjdGl2aXR5UmVjb3JkWydwaG9uZW51bWJlciddID0gaW50ZXJhY3Rpb25EYXRhLnBob25lTnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgYWN0aXZpdHlSZWNvcmRbJ2RpcmVjdGlvbmNvZGUnXSA9IGludGVyYWN0aW9uRGF0YS5jYWxsRGlyZWN0aW9uICYmIChpbnRlcmFjdGlvbkRhdGEuY2FsbERpcmVjdGlvbiA9PT0gJ291dGJvdW5kJyA/ICd0cnVlJyA6ICdmYWxzZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBhY3Rpdml0eVJlY29yZDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBzYXZlQWN0aXZpdHlGb3JFbnRpdHkgPSBmdW5jdGlvbiAoaW50ZXJhY3Rpb24sIHJlZ2FyZGluZ0VudGl0eSkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIG1ldGFkYXRhU3RyLCBtZXRhZGF0YSwgdGFibGVOYW1lLCBhZGRpdGlvbmFsQWN0aXZpdHlEYXRhLCBwaG9uZUNhbGxSZWYsIGVudGl0eVNldE5hbWUsIGVudGl0eUxvZ2ljYWxOYW1lLCBvbmVUb01hbnlSZWwsIG5hbWVfMSwga2V5LCB2YWx1ZSwga2V5LCB2YWx1ZSwgYWN0aXZpdHk7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIGNpZi5nZXRFbnRpdHlNZXRhZGF0YShyZWdhcmRpbmdFbnRpdHkudHlwZSldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGFTdHIgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhID0gSlNPTi5wYXJzZShtZXRhZGF0YVN0cik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlTmFtZSA9IGV4cG9ydHMuYWN0aXZpdHlUYWJsZXNbaW50ZXJhY3Rpb24udHlwZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxBY3Rpdml0eURhdGEgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyNNRVRBREFUQTogJywgbWV0YWRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlEaXNwbGF5TmFtZVtyZWdhcmRpbmdFbnRpdHkudHlwZV0gPSBtZXRhZGF0YS5EaXNwbGF5TmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmVDYWxsUmVmID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5U2V0TmFtZSA9IG1ldGFkYXRhLkVudGl0eVNldE5hbWUsIGVudGl0eUxvZ2ljYWxOYW1lID0gbWV0YWRhdGEuTG9naWNhbE5hbWUsIG9uZVRvTWFueVJlbCA9IG1ldGFkYXRhLk9uZVRvTWFueVJlbGF0aW9uc2hpcHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbmVUb01hbnlSZWwgJiYgb25lVG9NYW55UmVsLl9jb2xsZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBob25lQ2FsbFJlZiA9IG9uZVRvTWFueVJlbC5fY29sbGVjdGlvbi5maW5kKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbnRpdHkgPSBpdGVtLlJlZmVyZW5jaW5nRW50aXR5LCBhdHRyaWJ1dGUgPSBpdGVtLlJlZmVyZW5jaW5nQXR0cmlidXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW50aXR5ID09PSB0YWJsZU5hbWUgJiYgYXR0cmlidXRlID09PSAncmVnYXJkaW5nb2JqZWN0aWQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnI0Vycm9yIGluIHRoZSBwb3RlbnRpYWxseSBkYW5nZXJvdXMgcGxhY2UhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVudGl0eVNldE5hbWUgJiYgcGhvbmVDYWxsUmVmKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lXzEgPSBwaG9uZUNhbGxSZWYuUmVmZXJlbmNpbmdFbnRpdHlOYXZpZ2F0aW9uUHJvcGVydHlOYW1lLCBrZXkgPSBuYW1lXzEgKyBcIkBvZGF0YS5iaW5kXCIsIHZhbHVlID0gXCIvXCIgKyBlbnRpdHlTZXROYW1lICsgXCIoXCIgKyByZWdhcmRpbmdFbnRpdHkuaWQgKyBcIilcIiAvLyBsaWtlIC9jb250YWN0cygyZWRlOTAyOS05ODVjLWU5MTEtYTk4MC0wMDBkM2ExY2FiY2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbmFsQWN0aXZpdHlEYXRhW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChlbnRpdHlMb2dpY2FsTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0gXCJyZWdhcmRpbmdvYmplY3RpZF9cIiArIGVudGl0eUxvZ2ljYWxOYW1lICsgXCJfXCIgKyB0YWJsZU5hbWUgKyBcIkBvZGF0YS5iaW5kXCIsIHZhbHVlID0gXCIvXCIgKyBlbnRpdHlTZXROYW1lICsgXCIoXCIgKyByZWdhcmRpbmdFbnRpdHkuaWQgKyBcIilcIiAvLyBsaWtlIC9jb250YWN0cygyZWRlOTAyOS05ODVjLWU5MTEtYTk4MC0wMDBkM2ExY2FiY2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbmFsQWN0aXZpdHlEYXRhW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignI3JlZ2FyZGluZ29iamVjdGlkIHJlZmVyZW5jZSBpcyBub3RlIGRldGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZpdHkgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgY3JlYXRlQmFzaWNBY3Rpdml0eU9iamVjdCh0YWJsZU5hbWUsIGludGVyYWN0aW9uKSksIGFkZGl0aW9uYWxBY3Rpdml0eURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnI0FDVElWSVRZIE9CSkVDVDogJywgYWN0aXZpdHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgY2lmLmNyZWF0ZVJlY29yZCh0YWJsZU5hbWUsIEpTT04uc3RyaW5naWZ5KGFjdGl2aXR5KSldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTsgfTtcclxuICAgICAgICB2YXIgc2F2ZUFjdGl2aXR5ID0gZnVuY3Rpb24gKGludGVyYWN0aW9uKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWRPYmplY3RJZCwgc2VsZWN0ZWRPYmplY3QsIHRhYmxlTmFtZSwgYWN0aXZpdHksIGVfMywgdGFibGVOYW1lO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnIyBTQVZFLUFDVElWSVRZLUhJU1RPUlk6ICcsIGludGVyYWN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRPYmplY3RJZCA9IGludGVyYWN0aW9uLmFzc29jaWF0ZWRPYmplY3RzLnNlbGVjdGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZE9iamVjdCA9IHNlbGVjdGVkT2JqZWN0SWQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVyYWN0aW9uLmFzc29jaWF0ZWRPYmplY3RzLmxpc3QuZmluZChmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmouaWQgPT09IHNlbGVjdGVkT2JqZWN0SWQ7IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnIyByZWdhcmRpbmcgdG8gb2JqZWN0OiAnLCBzZWxlY3RlZE9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgNSwgLCA2XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2VsZWN0ZWRPYmplY3QpIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBzYXZlQWN0aXZpdHlGb3JFbnRpdHkoaW50ZXJhY3Rpb24sIHNlbGVjdGVkT2JqZWN0KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVOYW1lID0gZXhwb3J0cy5hY3Rpdml0eVRhYmxlc1tpbnRlcmFjdGlvbi50eXBlXSwgYWN0aXZpdHkgPSBjcmVhdGVCYXNpY0FjdGl2aXR5T2JqZWN0KHRhYmxlTmFtZSwgaW50ZXJhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnI0FjdGl2aXR5IHdpdGhvdXQgcmVnYXJkaW5nIG9iajogJywgYWN0aXZpdHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaWYuY3JlYXRlUmVjb3JkKHRhYmxlTmFtZSwgSlNPTi5zdHJpbmdpZnkoYWN0aXZpdHkpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSA0O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFszIC8qYnJlYWsqLywgNl07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlXzMgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignRXJyb3Igd2hpbGUgc2F2aW5nIGFjdGl2aXR5IGhpc3RvcnkgcmVjb3JkIHdpdGggcmVnYXJkaW5nIG9iamVjdDogJywgZV8zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVOYW1lID0gZXhwb3J0cy5hY3Rpdml0eVRhYmxlc1tpbnRlcmFjdGlvbi50eXBlXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2lmLmNyZWF0ZVJlY29yZCh0YWJsZU5hbWUsIEpTT04uc3RyaW5naWZ5KGNyZWF0ZUJhc2ljQWN0aXZpdHlPYmplY3QodGFibGVOYW1lLCBpbnRlcmFjdGlvbikpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNl07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pOyB9O1xyXG4gICAgICAgIGFkQXBpLm9uKCdJTlRFUkFDVElPTl9SRU1PVkVEJywgZnVuY3Rpb24gKGludGVyYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmIChpbnRlcmFjdGlvbi5pbnRlcmFjdGlvbklkID09PSBhY3RpdmVJbnRlcmFjdGlvbklkKSB7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVJbnRlcmFjdGlvbklkID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc2F2ZUFjdGl2aXR5KGludGVyYWN0aW9uKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBhZEFwaS5vbignQUNUSVZFX0lOVEVSQUNUSU9OX1NXSVRDSEVEJywgZnVuY3Rpb24gKGludGVyYWN0aW9uSWQpIHtcclxuICAgICAgICAgICAgYWN0aXZlSW50ZXJhY3Rpb25JZCA9IGludGVyYWN0aW9uSWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIGxpc3RlbmVkRW52ID0gJyc7XHJcbiAgICAgICAgdmFyIGdldE9iamVjdERhdGFGcm9tRW52ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHJlbWVtYmVyVXJsO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICByZW1lbWJlclVybCA9IGxpc3RlbmVkRW52O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGF0dGVtcHQgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHJ5R2V0T2JqZWN0RGF0YUZyb21FbnYgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVudlN0ciwgZW52LCBlbnRpdHlEYXRhU3RyLCBlbnRpdHlEYXRhLCBkaXNwbGF5TmFtZSwgZW50aXR5TWV0YWRhdGFTdHIsIGVudGl0eU1ldGFkYXRhLCBkaXNwbGF5VHlwZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lZEVudiAhPT0gcmVtZW1iZXJVcmwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFhY3RpdmVJbnRlcmFjdGlvbklkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdObyBuZWVkIHRvIGdldCBlbnRpdHk6IGN1cnJlbnRJbnRlcmFjdGlvbiBpcyB1bmRlZmluZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgY2lmLmdldEVudmlyb25tZW50KCldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnZTdHIgPSBfYS5zZW50KCksIGVudiA9IEpTT04ucGFyc2UoZW52U3RyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiI0VOVElUWS1FTlZJUk9OTUVOVCBBVFRFTVBUICNcIiArIGF0dGVtcHQgKyBcIjogXCIsIGVudik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW52LmRhc2hib2FyZFR5cGUgfHwgKGVudi5wYWdldHlwZSAmJiBlbnYucGFnZXR5cGUgIT09ICdlbnRpdHlyZWNvcmQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShlbnYuaWQgJiYgZW52LmV0bikpIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRBcGkuc2V0SW50ZXJhY3Rpb25BY3RpdmVTY3JlZW4oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkOiBlbnYuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5TmFtZTogZW52LmV0bixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgY2lmLnJldHJpZXZlUmVjb3JkKGVudi5ldG4sIGVudi5pZCldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlEYXRhU3RyID0gX2Euc2VudCgpLCBlbnRpdHlEYXRhID0gSlNPTi5wYXJzZShlbnRpdHlEYXRhU3RyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcjb2JqLWVudGl0eTogJywgZW50aXR5RGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA9IGVudGl0eURhdGEudGl0bGUgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlEYXRhLmZ1bGxuYW1lIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5RGF0YS5uYW1lIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5RGF0YS5zdWJqZWN0IHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW52LmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhZW50aXR5RGlzcGxheU5hbWVbZW52LmV0bl0pIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgY2lmLmdldEVudGl0eU1ldGFkYXRhKGVudi5ldG4pXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5TWV0YWRhdGFTdHIgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlNZXRhZGF0YSA9IEpTT04ucGFyc2UoZW50aXR5TWV0YWRhdGFTdHIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5RGlzcGxheU5hbWVbZW52LmV0bl0gPSBlbnRpdHlNZXRhZGF0YS5EaXNwbGF5TmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gNDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVR5cGUgPSBlbnRpdHlEaXNwbGF5TmFtZVtlbnYuZXRuXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkQXBpLmFkZEludGVyYWN0aW9uQXNzb2NpYXRlZE9iamVjdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGVudi5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBlbnYuZXRuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBkaXNwbGF5TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VHlwZTogZGlzcGxheVR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlOiBpbnRlZ3JhdGlvbktleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21GaWVsZHM6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA2XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0ZW1wdCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dGVtcHQgPiA2MCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCgnRVJST1I6IENhblxcJ3QgZ2V0IENSTSBlbnRpdHkgZGF0YScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCh0cnlHZXRPYmplY3REYXRhRnJvbUVudiwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNjogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTsgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5R2V0T2JqZWN0RGF0YUZyb21FbnYoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pOyB9O1xyXG4gICAgICAgIGNpZi5hZGRIYW5kbGVyKCdvbnBhZ2VuYXZpZ2F0ZScsIGZ1bmN0aW9uIChkYXRhU3RyKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZGF0YTtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFhZ2VudERhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgUHJvbWlzZS5yZXNvbHZlKCldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGFjdGl2ZUludGVyYWN0aW9uSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhU3RyKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnI05BVklHQVRJT046ICcsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGRhdGEudmFsdWUgLSBjdXJyZW50IHVybFxyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVkRW52ID0gZGF0YS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBnZXRPYmplY3REYXRhRnJvbUVudigpLnRoZW4oZnVuY3Rpb24gKCkgeyB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBQcm9taXNlLnJlc29sdmUoKV07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pOyB9KTtcclxuICAgICAgICBjaWYuYWRkSGFuZGxlcignb25jbGlja3RvYWN0JywgZnVuY3Rpb24gKGRhdGFTdHIpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhLCBlbnRpdHlJZCwgZW50aXR5RGF0YSwgZW50aXR5RGF0YVN0ciwgZV80LCBkaXNwbGF5TmFtZSwgZW50aXR5TWV0YWRhdGFTdHIsIGVudGl0eU1ldGFkYXRhLCBkaXNwbGF5VHlwZSwgZXJyXzE7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcjQ0xJQ0snKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFhZ2VudERhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBQcm9taXNlLnJlc29sdmUoKV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YVN0cik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcjQ0xJQ0stVE8tQUNUOiAnLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5SWQgPSBkYXRhLmVudGl0eUlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW50aXR5SWQubGVuZ3RoICYmIGVudGl0eUlkWzBdID09PSAneycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkID0gZW50aXR5SWQuc2xpY2UoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVudGl0eUlkLmxlbmd0aCAmJiBlbnRpdHlJZFtlbnRpdHlJZC5sZW5ndGggLSAxXSA9PT0gJ30nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZCA9IGVudGl0eUlkLnNsaWNlKDAsIGVudGl0eUlkLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgOCwgLCA5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eURhdGEgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzIsIDQsICwgNV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBjaWYucmV0cmlldmVSZWNvcmQoZGF0YS5lbnRpdHlMb2dpY2FsTmFtZSwgZW50aXR5SWQpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eURhdGFTdHIgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eURhdGEgPSBKU09OLnBhcnNlKGVudGl0eURhdGFTdHIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfNCA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignI1JFVFJJRVZFLVJFQ09SRC1FUlJPUjogJywgZV80KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnI2VudGl0eTogJywgZW50aXR5RGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lID0gZW50aXR5RGF0YS50aXRsZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5RGF0YS5mdWxsbmFtZSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5RGF0YS5uYW1lIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlEYXRhLnN1YmplY3QgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISFlbnRpdHlEaXNwbGF5TmFtZVtkYXRhLmVudGl0eUxvZ2ljYWxOYW1lXSkgcmV0dXJuIFszIC8qYnJlYWsqLywgN107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGNpZi5nZXRFbnRpdHlNZXRhZGF0YShkYXRhLmVudGl0eUxvZ2ljYWxOYW1lKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlNZXRhZGF0YVN0ciA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5TWV0YWRhdGEgPSBKU09OLnBhcnNlKGVudGl0eU1ldGFkYXRhU3RyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5RGlzcGxheU5hbWVbZGF0YS5lbnRpdHlMb2dpY2FsTmFtZV0gPSBlbnRpdHlNZXRhZGF0YS5EaXNwbGF5TmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSA3O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVR5cGUgPSBlbnRpdHlEaXNwbGF5TmFtZVtkYXRhLmVudGl0eUxvZ2ljYWxOYW1lXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdE9iamVjdE9uU2NyZWVuID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGVudGl0eUlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogZGF0YS5lbnRpdHlMb2dpY2FsTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBkaXNwbGF5TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUeXBlOiBkaXNwbGF5VHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUZpZWxkczoge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IGludGVncmF0aW9uS2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGRhdGEuZm9ybWF0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdQaG9uZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnI0NMSUNLLVRPLUNBTEwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubmFtZS50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgoJ3Bob25lXycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZEFwaS5zdGFydENhbGwoZGF0YS52YWx1ZSwgbGFzdE9iamVjdE9uU2NyZWVuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChkYXRhLm5hbWUudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKCdzbXNfJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkQXBpLnN0YXJ0U01TQ2hhdChkYXRhLnZhbHVlLCBsYXN0T2JqZWN0T25TY3JlZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRBcGkuc3RhcnRDYWxsKGRhdGEudmFsdWUsIGxhc3RPYmplY3RPblNjcmVlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnU01TJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcjQ0xJQ0stVE8tU01TJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkQXBpLnN0YXJ0U01TQ2hhdChkYXRhLnZhbHVlLCBsYXN0T2JqZWN0T25TY3JlZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdFbWFpbCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnI0NMSUNLLVRPLUVNQUlMJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkQXBpLnN0YXJ0RW1haWwoZGF0YS52YWx1ZSwgbGFzdE9iamVjdE9uU2NyZWVuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnI1Vua25vd24gQ2xpY2stdG8tYWN0IGZvcm1hdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgODpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyXzEgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcjY2xpY2stdG8tYWN0IEVycm9yOiAnLCBlcnJfMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIFByb21pc2UucmVzb2x2ZSgpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7IH0pO1xyXG4gICAgICAgIGFkQXBpLm9uKCdORVdfSU5URVJBQ1RJT04nLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNpZi5nZXRNb2RlKCkudGhlbihmdW5jdGlvbiAobW9kZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1vZGUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjaWYuc2V0TW9kZSgxKS5jYXRjaChmdW5jdGlvbiAoZSkgeyByZXR1cm4gY29uc29sZS5lcnJvcignI0VSUk9SLUNSTS1TRVQtTU9ERTogJywgZXh0cmFjdEVycm9yTWVzc2FnZShlKSk7IH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkgeyByZXR1cm4gY29uc29sZS5lcnJvcignI0VSUk9SLUNSTS1HRVQtTU9ERTogJywgZXh0cmFjdEVycm9yTWVzc2FnZShlKSk7IH0pO1xyXG4gICAgICAgICAgICBsaXN0ZW5lZEVudiA9ICdwc2V1ZG8tdXJsJztcclxuICAgICAgICAgICAgZ2V0T2JqZWN0RGF0YUZyb21FbnYoKS50aGVuKGZ1bmN0aW9uICgpIHsgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYWRBcGkub24oJ01BTlVBTF9DQUxMJywgZnVuY3Rpb24gKHBob25lbnVtYmVyKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZV81O1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnIyMjIEFEQVBURVI6IE1BTlVBTC1DQUxMLUhBTkRMRVIgdG86ICcsIHBob25lbnVtYmVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCAzLCAsIDRdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgY2lmLnNlYXJjaEFuZE9wZW5SZWNvcmRzKGRlZmF1bHRTY3JlZW5Qb3BTZWFyY2hFbnRpdHlUeXBlLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPyRzZWxlY3Q9Y29udGFjdGlkJicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcIiRmaWx0ZXI9bW9iaWxlcGhvbmUgZXEgJ1wiICsgcGhvbmVudW1iZXIgKyBcIidcIikgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcIiBvciB0ZWxlcGhvbmUxIGVxICdcIiArIHBob25lbnVtYmVyICsgXCInXCIpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXCIgb3IgdGVsZXBob25lMiBlcSAnXCIgKyBwaG9uZW51bWJlciArIFwiJ1wiKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFwiIG9yIHRlbGVwaG9uZTMgZXEgJ1wiICsgcGhvbmVudW1iZXIgKyBcIidcIiksIGZhbHNlKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZV81ID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCcjRVJST1ItQ1JNLU9EQVRBLVNFQVJDSDogJywgZXh0cmFjdEVycm9yTWVzc2FnZShlXzUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pOyB9KTtcclxuICAgICAgICBhZEFwaS5vbignU0VBUkNIX0tOT1dMRURHRV9CQVNFJywgZnVuY3Rpb24gKHF1ZXJ5LCBsYW5ndWFnZSkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGRhdGFTdHIsIHJhd0RhdGEsIGVfNjtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFswLCAyLCAsIDNdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgY2lmLnNlYXJjaEFuZE9wZW5SZWNvcmRzKCdrbm93bGVkZ2VhcnRpY2xlJywgJz8kc2VsZWN0PScgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjb250ZW50JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyx0aXRsZScgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmJGV4cGFuZD1sYW5ndWFnZWxvY2FsZWlkKCRzZWxlY3Q9Y29kZSknICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJiRmaWx0ZXI9c3RhdGVjb2RlIGVxIDMgJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKChsYW5ndWFnZSA9PT0gdW5kZWZpbmVkIHx8IGxhbmd1YWdlID09PSAnbm9uZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImFuZCBzdGFydHN3aXRoKGxhbmd1YWdlbG9jYWxlaWQvY29kZSwgJ1wiICsgbGFuZ3VhZ2UgKyBcIicpIFwiKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FuZCAoJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFwiY29udGFpbnMoY29udGVudCwgJ1wiICsgcXVlcnkgKyBcIicpIG9yIFwiKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFwiY29udGFpbnMoa2V5d29yZHMsICdcIiArIHF1ZXJ5ICsgXCInKSBvciBcIikgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcImNvbnRhaW5zKGRlc2NyaXB0aW9uLCAnXCIgKyBxdWVyeSArIFwiJykgb3IgXCIpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXCJjb250YWlucyh0aXRsZSwgJ1wiICsgcXVlcnkgKyBcIicpXCIpICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnKScsIHRydWUpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTdHIgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd0RhdGEgPSBPYmplY3QudmFsdWVzKEpTT04ucGFyc2UoZGF0YVN0cikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnI0NSTS1TRUFSQ0gtUkVTVUxUOiAnLCByYXdEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRyYW5zZm9ybUR5bjM2NUtCU2VhcmNoUmVzdWx0cyhyYXdEYXRhKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlXzYgPSBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJyNFUlJPUi1DUk0tT0RBVEEtS0ItU0VBUkNIOiAnLCBleHRyYWN0RXJyb3JNZXNzYWdlKGVfNikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAzXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovLCBbXV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pOyB9KTtcclxuICAgICAgICBhZEFwaS5vbignR0VUX0tOT1dMRURHRV9CQVNFX0FSVElDTEUnLCBmdW5jdGlvbiAoYXJ0aWNsZUlkKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZGF0YVN0ciwgcmF3QXJ0aWNsZUFyciwgZV83O1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzAsIDIsICwgM10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBjaWYuc2VhcmNoQW5kT3BlblJlY29yZHMoJ2tub3dsZWRnZWFydGljbGUnLCAnPyRzZWxlY3Q9JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FydGljbGVwdWJsaWNudW1iZXInICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLGNyZWF0ZWRvbicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcsY29udGVudCcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcsZGVzY3JpcHRpb24nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLGlzaW50ZXJuYWwnICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLGtleXdvcmRzJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyxtb2RpZmllZG9uJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyxzdGF0ZWNvZGUnICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLHN0YXR1c2NvZGUnICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLHRpdGxlJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyx2ZXJzaW9ubnVtYmVyJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyxjcmVhdGVkYnknICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLG1vZGlmaWVkYnknICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLF9jcmVhdGVkYnlfdmFsdWUnICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLF9tb2RpZmllZGJ5X3ZhbHVlJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyxfb3duZXJpZF92YWx1ZScgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcsX3BhcmVudGFydGljbGVjb250ZW50aWRfdmFsdWUnICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLF9yb290YXJ0aWNsZWlkX3ZhbHVlJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyxfc3ViamVjdGlkX3ZhbHVlJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyYkZXhwYW5kPWxhbmd1YWdlbG9jYWxlaWQoJHNlbGVjdD1jb2RlKScgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcsdHJhbnNhY3Rpb25jdXJyZW5jeWlkKCRzZWxlY3Q9aXNvY3VycmVuY3ljb2RlKScgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcsb3duaW5nYnVzaW5lc3N1bml0KCRzZWxlY3Q9bmFtZSknICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXCImJGZpbHRlcj1rbm93bGVkZ2VhcnRpY2xlaWQgZXEgJ1wiICsgYXJ0aWNsZUlkICsgXCInXCIpLCB0cnVlKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhU3RyID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdBcnRpY2xlQXJyID0gT2JqZWN0LnZhbHVlcyhKU09OLnBhcnNlKGRhdGFTdHIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyYXdBcnRpY2xlQXJyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIG51bGxdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcjQ1JNLUtCLUFSVElDTEU6ICcsIHJhd0FydGljbGVBcnJbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdHJhbnNmb3JtRHluMzY1S0JBcnRpY2xlKHJhd0FydGljbGVBcnJbMF0pXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfNyA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignI0VSUk9SLUNSTS1PREFUQS1LQi1BUlRJQ0xFOiAnLCBleHRyYWN0RXJyb3JNZXNzYWdlKGVfNykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAzXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovLCBudWxsXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7IH0pO1xyXG4gICAgICAgIGFkQXBpLm9uKCdSRVFVRVNUX1RSQU5TRkVSX0RBVEEnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVPYmplY3Q6IGxhc3RPYmplY3RPblNjcmVlbiA/IGxhc3RPYmplY3RPblNjcmVlbiA6IG51bGwsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY2lmLmFkZEhhbmRsZXIoJ29ubW9kZWNoYW5nZWQnLCBmdW5jdGlvbiAoZGF0YVN0cikge1xyXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBKU09OLnBhcnNlKGRhdGFTdHIpLnZhbHVlO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgY29tbXVuaWNhdG9ySWZyYW1lLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnNDRweCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFkQXBpLm5vdGlmeVdpZGdldE1pbmltaXplZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbW11bmljYXRvcklmcmFtZS5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzUwMHB4Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRBcGkubm90aWZ5V2lkZ2V0TWF4aW1pemVkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBhZEFwaS5vbignTUFYSU1JWkVfV0lER0VUJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjaWYuc2V0TW9kZSgxKS5jYXRjaChmdW5jdGlvbiAoZSkgeyByZXR1cm4gY29uc29sZS5lcnJvcignI0VSUk9SLUNSTS1TRVQtTU9ERTogJywgZXh0cmFjdEVycm9yTWVzc2FnZShlKSk7IH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFkQXBpLm9uKCdBQ1RJVkFURV9JTlRFUkFDVElPTl9TQ1JFRU4nLCBmdW5jdGlvbiAoc2NyZWVuKSB7XHJcbiAgICAgICAgICAgIGlmIChzY3JlZW4gJiYgc2NyZWVuLmVudGl0eUlkICYmIHNjcmVlbi5lbnRpdHlOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBzY3JlZW5Qb3BFbnRpdHkoc2NyZWVuLmVudGl0eUlkLCBzY3JlZW4uZW50aXR5TmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignQ2FuXFwndCBsb2FkIENoYW5uZWwgSW50ZWdyYXRpb24gRnJhbWV3b3JrIGNsaWVudCBBUEkgbGlicmFyeTogJywgZSk7XHJcbiAgICB9KTtcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHNcIik7XHJcbnZhciBDUk1fRE9NQUlOX1BBUkFNRVRFUl9OQU1FID0gJ2NybURvbWFpbic7XHJcbnZhciB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZiwgcGFyYW1zID0gdXRpbHNfMS51dGlscy5leHRyYWN0VVJMUGFyYW1zKHVybCk7XHJcbnZhciBjcm1Eb21haW4gPSBwYXJhbXNbQ1JNX0RPTUFJTl9QQVJBTUVURVJfTkFNRV07XHJcbmlmICghY3JtRG9tYWluLnN0YXJ0c1dpdGgoJ2h0dHBzOi8vJykpIHtcclxuICAgIGNybURvbWFpbiA9ICdodHRwczovLycgKyBjcm1Eb21haW47XHJcbn1cclxuZXhwb3J0cy5sb2FkQ3JtQXBpID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgaWYgKCFjcm1Eb21haW4pIHtcclxuICAgICAgICByZWplY3QoJ01pc3NpbmcgcmVxdWlyZWQgVVJMIHBhcmFtZXRlciBcXCdjcm1Eb21haW5cXCcnKTtcclxuICAgIH1cclxuICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgIGRvY3VtZW50LmhlYWQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBzY3JpcHQpO1xyXG4gICAgc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCByZXNvbHZlKTtcclxuICAgIHNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIHJlamVjdCk7XHJcbiAgICBzY3JpcHQuZGF0YXNldC5jcm11cmwgPSBjcm1Eb21haW47XHJcbiAgICBzY3JpcHQuZGF0YXNldC5jaWZpZCA9ICdDSUZNYWluTGlicmFyeSc7XHJcbiAgICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xyXG4gICAgc2NyaXB0LnNyYyA9IGNybURvbWFpbiArICcvd2VicmVzb3VyY2VzL1dpZGdldC9tc2R5bl9jaUxpYnJhcnkuanMnO1xyXG59KTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGV4dHJhY3RVUkxQYXJhbXMgPSBmdW5jdGlvbiAodXJsKSB7XHJcbiAgICB2YXIgcGFyYW1zTWFwID0ge307XHJcbiAgICBpZiAodXJsKSB7XHJcbiAgICAgICAgdmFyIHBhcmFtVXJsID0gdXJsLnNwbGl0KCc/Jykuc2xpY2UoMSkuam9pbignPycpO1xyXG4gICAgICAgIGlmIChwYXJhbVVybC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHBhcmFtVXJsLnNwbGl0KCcmJyk7XHJcbiAgICAgICAgICAgIHBhcmFtcy5yZWR1Y2UoZnVuY3Rpb24gKHBhcmFtTWFwLCBwYXJhbSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNwbGl0cyA9IHBhcmFtLnNwbGl0KCc9Jyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3BsaXRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuYW1lXzEgPSBkZWNvZGVVUklDb21wb25lbnQoc3BsaXRzLnNoaWZ0KCkpLCB2YWx1ZSA9IGRlY29kZVVSSUNvbXBvbmVudChzcGxpdHMuam9pbignPScpKTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbU1hcFtuYW1lXzFdID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW1NYXA7XHJcbiAgICAgICAgICAgIH0sIHBhcmFtc01hcCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhcmFtc01hcDtcclxufTtcclxudmFyIHJhbmRvbUxhYmVsID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpOyB9O1xyXG52YXIgZ2VuZXJhdGVSYW5kb21VSUQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KS5zdWJzdHJpbmcoMik7IH07XHJcbnZhciBjYXBpdGFsaXplID0gZnVuY3Rpb24gKHN0cikgeyByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHcvLCBmdW5jdGlvbiAoYykgeyByZXR1cm4gYy50b1VwcGVyQ2FzZSgpOyB9KTsgfTtcclxuZnVuY3Rpb24gZmluZExhc3QoYXJyYXksIHByZWRpY2F0ZSkge1xyXG4gICAgZm9yICh2YXIgaSA9IGFycmF5Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgaWYgKHByZWRpY2F0ZShhcnJheVtpXSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFycmF5W2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcbmZ1bmN0aW9uIHNoYWxsb3dPYmpFcXVhbChvYmoxLCBvYmoyKSB7XHJcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqMSkge1xyXG4gICAgICAgIGlmICghKGtleSBpbiBvYmoyKSB8fCBvYmoxW2tleV0gIT09IG9iajJba2V5XSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yICh2YXIga2V5IGluIG9iajIpIHtcclxuICAgICAgICBpZiAoIShrZXkgaW4gb2JqMSkgfHwgb2JqMltrZXldICE9PSBvYmoxW2tleV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcbnZhciB3YWl0UmVzb2x2ZUFsbCA9IGZ1bmN0aW9uICh0YXJnZXRzKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIHZhciBudW1iZXJPZlJlc29sdmVkID0gMDtcclxuICAgICAgICB2YXIgcmVzdWx0cyA9IG5ldyBBcnJheSh0YXJnZXRzLmxlbmd0aCk7XHJcbiAgICAgICAgdGFyZ2V0c1xyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uICh0YXJnZXQpIHsgcmV0dXJuICh0YXJnZXQgaW5zdGFuY2VvZiBQcm9taXNlID8gdGFyZ2V0IDogUHJvbWlzZS5yZXNvbHZlKHRhcmdldCkpOyB9KS5mb3JFYWNoKGZ1bmN0aW9uICh0YXJnZXRQcm9taXNlLCBpbmRleCkge1xyXG4gICAgICAgICAgICB0YXJnZXRQcm9taXNlXHJcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdHNbaW5kZXhdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ2Z1bGZpbGxlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVhc29uKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRzW2luZGV4XSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICdyZWplY3RlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhc29uOiByZWFzb24sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmZpbmFsbHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbnVtYmVyT2ZSZXNvbHZlZCsrO1xyXG4gICAgICAgICAgICAgICAgaWYgKG51bWJlck9mUmVzb2x2ZWQgPT09IHRhcmdldHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHRzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuZXhwb3J0cy51dGlscyA9IHtcclxuICAgIGV4dHJhY3RVUkxQYXJhbXM6IGV4dHJhY3RVUkxQYXJhbXMsXHJcbiAgICByYW5kb21MYWJlbDogcmFuZG9tTGFiZWwsXHJcbiAgICBnZW5lcmF0ZVJhbmRvbVVJRDogZ2VuZXJhdGVSYW5kb21VSUQsXHJcbiAgICBjYXBpdGFsaXplOiBjYXBpdGFsaXplLFxyXG4gICAgZmluZExhc3Q6IGZpbmRMYXN0LFxyXG4gICAgc2hhbGxvd09iakVxdWFsOiBzaGFsbG93T2JqRXF1YWwsXHJcbiAgICB3YWl0UmVzb2x2ZUFsbDogd2FpdFJlc29sdmVBbGwsXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=