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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

/***/ "./src/integrations/test/index.ts":
/*!****************************************!*\
  !*** ./src/integrations/test/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var adapters_types_1 = __webpack_require__(/*! @bpinc/adapters-types */ "../adapters-types/dist/index.js");
var adc_client_api_1 = __webpack_require__(/*! ../../adc-client-api */ "./src/adc-client-api.ts");
console.log('## it works!!');
var integrationKey = 'test-adapter';
var messageClass = {
    'o': 'outgoing',
    'ir': 'incoming-result',
    'i': 'incoming',
    'or': 'outgoing-result',
    'e': 'error',
};
var logs = document.getElementById('log');
var adcMountNode = document.getElementById('adc_mount_node');
var getAgentStateButton = document.getElementById('get_agent_state_button');
var setAgentStateButton = document.getElementById('set_agent_state_button');
var agentStateInput = document.getElementById('agent_state_input');
var notReadyReasonInput = document.getElementById('not_ready_reason_input');
var startCallButton = document.getElementById('start_call_button');
var startSMSChatButton = document.getElementById('start_sms_chat_button');
var phoneNumberInput = document.getElementById('phone_number_input');
var startEmailButton = document.getElementById('start_email_button');
var emailAddressInput = document.getElementById('email_address_input');
var interactionIdInput = document.getElementById('interaction_id_input');
var terminateCallButton = document.getElementById('terminate_call_button');
var completeInteractionButton = document.getElementById('complete_interaction_button');
var switchActiveInteractionButton = document.getElementById('switch_active_interaction_button');
var changeServiceButton = document.getElementById('change_service');
var serviceNameInput = document.getElementById('service_name_input');
var setDispositionButton = document.getElementById('set_disposition');
var dispositionNameInput = document.getElementById('disposition_name_input');
var dispositionCodeInput = document.getElementById('disposition_code_input');
var getCallRecordingStatusButton = document.getElementById('get_call_recording_status_button');
var setCallRecordingStatusButton = document.getElementById('set_call_recording_status_button');
var callRecordingCheckbox = document.getElementById('call_recording_checkbox');
var getScreenRecordingStatusButton = document.getElementById('get_screen_recording_status_button');
var setScreenRecordingStatusButton = document.getElementById('set_screen_recording_status_button');
var screenRecordingCheckbox = document.getElementById('screen_recording_checkbox');
var muteAllButton = document.getElementById('mute_all_button');
var unmuteAllButton = document.getElementById('unmute_all_button');
var muteTargetSelect = document.getElementById('mute_target_select');
var setVariableButton = document.getElementById('set_variable_button');
var variableNameInput = document.getElementById('variable_name_input');
var variableValueInput = document.getElementById('variable_value_input');
var getConfigButton = document.getElementById('get_config_button');
var notifyWidgetMinimizedButton = document.getElementById('notify_widget_minimized_button');
var notifyWidgetMaximizedButton = document.getElementById('notify_widget_maximized_button');
var addInteractionAssociatedObjectButton = document.getElementById('add_interaction_associated_object_button');
var associatedObjectTextarea = document.getElementById('associated_object_textarea');
var setInteractionActiveScreenButton = document.getElementById('set_interaction_active_screen_button');
var activeScreenTextarea = document.getElementById('active_screen_textarea');
var transferDataTextarea = document.getElementById('transfer_data_textarea');
var searchKBResultTextarea = document.getElementById('search_kb_result_textarea');
var kbArticleFullDataTextarea = document.getElementById('kb_article_full_data_textarea');
var adApi = new adc_client_api_1.AgentDesktopClientAPI(integrationKey, adcMountNode);
var setupHoverEffect = function (hoverElement, highlightElements) {
    hoverElement.addEventListener('mouseenter', function () {
        highlightElements.forEach(function (element) {
            element.classList.add('highlighted');
        });
    });
    hoverElement.addEventListener('mouseleave', function () {
        highlightElements.forEach(function (element) {
            element.classList.remove('highlighted');
        });
    });
};
var log = function (type, message, content) {
    var msgDiv = document.createElement('div');
    var typeContainerDiv = document.createElement('div');
    var typeDiv = document.createElement('div');
    var dataDiv = document.createElement('div');
    msgDiv.classList.add('log-msg');
    msgDiv.classList.add(messageClass[type]);
    typeDiv.textContent = message;
    dataDiv.textContent = content;
    typeContainerDiv.appendChild(typeDiv);
    msgDiv.appendChild(typeContainerDiv);
    msgDiv.appendChild(dataDiv);
    var isScrolledToBottom = logs.scrollHeight - logs.clientHeight <= logs.scrollTop + 1;
    logs.appendChild(msgDiv);
    if (isScrolledToBottom) {
        logs.scrollTop = logs.scrollHeight - logs.clientHeight;
    }
};
adApi.injectIncomingMessageLogger(function (message, data) {
    if (adapters_types_1.callbackMessages.includes(message)) {
        log('i', message, data ? JSON.stringify(data) : '');
    }
    else if (adapters_types_1.requestResponseMessages.includes(message)) {
        log(data.status === 'success' ? 'ir' : 'e', message, JSON.stringify(data));
    }
});
adApi.injectOutgoingMessageLogger(function (message, data) {
    if (adapters_types_1.requestMessages.includes(message)) {
        log('o', message, data ? JSON.stringify(data) : '');
    }
    else if (adapters_types_1.callbackResponseMessages.includes(message)) {
        log('or', message, data ? JSON.stringify(data) : '');
    }
});
setupHoverEffect(getAgentStateButton, []);
getAgentStateButton.onclick = function () {
    adApi.getAgentState();
};
setupHoverEffect(setAgentStateButton, [agentStateInput, notReadyReasonInput]);
setAgentStateButton.onclick = function () {
    var state = agentStateInput.value;
    var notReadyReason = notReadyReasonInput.value;
    adApi.setAgentState(state, notReadyReason);
};
setupHoverEffect(startCallButton, [phoneNumberInput]);
startCallButton.onclick = function () {
    var phone = phoneNumberInput.value;
    var associatedObject = undefined;
    var associatedObjectStr = associatedObjectTextarea.value;
    if (associatedObjectStr) {
        try {
            associatedObject = JSON.parse(associatedObjectStr);
        }
        catch (e) {
            alert('You have syntax error in the associated object structure. Cannot parse JSON.');
            return;
        }
    }
    adApi.startCall(phone, associatedObject);
};
setupHoverEffect(startSMSChatButton, [phoneNumberInput]);
startSMSChatButton.onclick = function () {
    var phone = phoneNumberInput.value;
    var associatedObject = undefined;
    var associatedObjectStr = associatedObjectTextarea.value;
    if (associatedObjectStr) {
        try {
            associatedObject = JSON.parse(associatedObjectStr);
        }
        catch (e) {
            alert('You have syntax error in the associated object structure. Cannot parse JSON.');
            return;
        }
    }
    adApi.startSMSChat(phone, associatedObject);
};
setupHoverEffect(startEmailButton, [emailAddressInput]);
startEmailButton.onclick = function () {
    var phone = emailAddressInput.value;
    var associatedObject = undefined;
    var associatedObjectStr = associatedObjectTextarea.value;
    if (associatedObjectStr) {
        try {
            associatedObject = JSON.parse(associatedObjectStr);
        }
        catch (e) {
            alert('You have syntax error in the associated object structure. Cannot parse JSON.');
            return;
        }
    }
    adApi.startEmail(phone, associatedObject);
};
setupHoverEffect(terminateCallButton, [interactionIdInput]);
terminateCallButton.onclick = function () {
    var itemId = interactionIdInput.value;
    adApi.terminateCall(itemId);
};
setupHoverEffect(completeInteractionButton, [interactionIdInput]);
completeInteractionButton.onclick = function () {
    var itemId = interactionIdInput.value;
    adApi.completeInteraction(itemId);
};
setupHoverEffect(switchActiveInteractionButton, [interactionIdInput]);
switchActiveInteractionButton.onclick = function () {
    var itemId = interactionIdInput.value;
    adApi.switchActiveInteraction(itemId);
};
setupHoverEffect(changeServiceButton, [serviceNameInput]);
changeServiceButton.onclick = function () {
    var serviceName = serviceNameInput.value;
    adApi.changeService(serviceName);
};
setupHoverEffect(setDispositionButton, [dispositionNameInput, dispositionCodeInput, interactionIdInput]);
setDispositionButton.onclick = function () {
    var dispositionName = dispositionNameInput.value;
    var dispositionCode = dispositionCodeInput.value;
    var itemId = interactionIdInput.value;
    adApi.setDisposition({
        code: dispositionCode,
        name: dispositionName,
    }, itemId);
};
setupHoverEffect(getCallRecordingStatusButton, [interactionIdInput]);
getCallRecordingStatusButton.onclick = function () {
    var itemId = interactionIdInput.value;
    adApi.getCallRecordingStatus(itemId);
};
setupHoverEffect(setCallRecordingStatusButton, [interactionIdInput, callRecordingCheckbox]);
setCallRecordingStatusButton.onclick = function () {
    var itemId = interactionIdInput.value;
    var enableRecording = callRecordingCheckbox.checked;
    adApi.setCallRecordingStatus(enableRecording, itemId);
};
setupHoverEffect(getScreenRecordingStatusButton, []);
getScreenRecordingStatusButton.onclick = function () {
    adApi.getScreenRecordingStatus();
};
setupHoverEffect(setScreenRecordingStatusButton, [screenRecordingCheckbox]);
setScreenRecordingStatusButton.onclick = function () {
    var enableRecording = screenRecordingCheckbox.checked;
    adApi.setScreenRecordingStatus(enableRecording);
};
setupHoverEffect(muteAllButton, [muteTargetSelect]);
muteAllButton.onclick = function () {
    var muteTarget = muteTargetSelect.value;
    adApi.muteAll(muteTarget);
};
setupHoverEffect(unmuteAllButton, [muteTargetSelect]);
unmuteAllButton.onclick = function () {
    var muteTarget = muteTargetSelect.value;
    adApi.unmuteAll(muteTarget);
};
setupHoverEffect(setVariableButton, [variableNameInput, variableValueInput, interactionIdInput]);
setVariableButton.onclick = function () {
    var variableName = variableNameInput.value;
    var variableValue = variableValueInput.value;
    var itemId = interactionIdInput.value;
    adApi.setVariable(variableName, variableValue, itemId);
};
setupHoverEffect(getConfigButton, []);
getConfigButton.onclick = function () {
    adApi.getConfig();
};
setupHoverEffect(notifyWidgetMinimizedButton, []);
notifyWidgetMinimizedButton.onclick = function () {
    adApi.notifyWidgetMinimized();
};
setupHoverEffect(notifyWidgetMaximizedButton, []);
notifyWidgetMaximizedButton.onclick = function () {
    adApi.notifyWidgetMaximized();
};
setupHoverEffect(addInteractionAssociatedObjectButton, [associatedObjectTextarea, interactionIdInput]);
addInteractionAssociatedObjectButton.onclick = function () {
    var associatedObject = null;
    try {
        associatedObject = JSON.parse(associatedObjectTextarea.value);
    }
    catch (e) {
        alert('You have syntax error in the associated object structure. Cannot parse JSON.');
    }
    if (!associatedObject) {
        return;
    }
    var itemId = interactionIdInput.value;
    adApi.addInteractionAssociatedObject(associatedObject, itemId);
};
setupHoverEffect(setInteractionActiveScreenButton, [activeScreenTextarea, interactionIdInput]);
setInteractionActiveScreenButton.onclick = function () {
    var activeScreenData = null;
    try {
        activeScreenData = JSON.parse(activeScreenTextarea.value);
    }
    catch (e) {
        alert('You have syntax error in the active screen data structure. Cannot parse JSON.');
    }
    if (!activeScreenData) {
        return;
    }
    var itemId = interactionIdInput.value;
    adApi.setInteractionActiveScreen(activeScreenData, itemId);
};
adApi.on('REQUEST_TRANSFER_DATA', function () {
    var transferData = null;
    try {
        transferData = JSON.parse(transferDataTextarea.value);
    }
    catch (e) {
        alert('You have syntax error in the transfer data structure. Cannot parse JSON.');
    }
    if (!transferData) {
        return null;
    }
    return transferData;
});
adApi.on('SEARCH_KNOWLEDGE_BASE', function () {
    var searchKbResult = null;
    try {
        searchKbResult = JSON.parse(searchKBResultTextarea.value);
    }
    catch (e) {
        alert('You have syntax error in the KB search results data structure. Cannot parse JSON.');
    }
    if (!searchKbResult) {
        return null;
    }
    return searchKbResult;
});
adApi.on('GET_KNOWLEDGE_BASE_ARTICLE', function () {
    var kbArticleDullData = null;
    try {
        kbArticleDullData = JSON.parse(kbArticleFullDataTextarea.value);
    }
    catch (e) {
        alert('You have syntax error in the KB Article data structure. Cannot parse JSON.');
    }
    if (!kbArticleDullData) {
        return null;
    }
    return kbArticleDullData;
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

/***/ 3:
/*!**********************************************!*\
  !*** multi ./src/integrations/test/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Dev\Documents\projects\ServicePattern\Web\agent\packages\adapters\src\integrations\test\index.ts */"./src/integrations/test/index.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0Rldi9Eb2N1bWVudHMvcHJvamVjdHMvU2VydmljZVBhdHRlcm4vV2ViL2FnZW50L25vZGVfbW9kdWxlcy9sb2Rhc2gvZnJvbVBhaXJzLmpzIiwid2VicGFjazovLy8uLXR5cGVzL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4tdHlwZXMvZGlzdC9zcmMvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYy1jbGllbnQtYXBpLnRzIiwid2VicGFjazovLy8uL3NyYy9pbnRlZ3JhdGlvbnMvdGVzdC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE0QjtBQUM1QixpQzs7Ozs7Ozs7Ozs7O0FDREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDQTtBQUNBO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQzs7Ozs7Ozs7Ozs7O0FDMUdhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxrQ0FBa0MsbUJBQU8sQ0FBQyxnRUFBa0I7QUFDNUQsdUJBQXVCLG1CQUFPLENBQUMsOERBQXVCO0FBQ3RELGNBQWMsbUJBQU8sQ0FBQyxxQ0FBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsbUVBQW1FO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlIQUFpSCwwQkFBMEIsRUFBRTtBQUM3SSwwSEFBMEgsd0JBQXdCLEVBQUUsRUFBRTtBQUN0SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLFFBQVE7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxzQ0FBc0MsRUFBRTtBQUN0RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRUFBcUUsMEJBQTBCLEVBQUU7QUFDakc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCwyQkFBMkIsRUFBRTtBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxvQ0FBb0MsRUFBRTtBQUN0RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHVDQUF1QztBQUMzRTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzVQYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELHVCQUF1QixtQkFBTyxDQUFDLDhEQUF1QjtBQUN0RCx1QkFBdUIsbUJBQU8sQ0FBQyxxREFBc0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ25UWTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGdEQUFnRDtBQUMvRSxxQ0FBcUMsZ0RBQWdEO0FBQ3JGLGlDQUFpQyx5Q0FBeUMsd0JBQXdCLEVBQUUsRUFBRTtBQUN0RztBQUNBLGtDQUFrQyxRQUFRO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyx1RUFBdUUsRUFBRTtBQUM3RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoidGVzdC1hNmYxYjYyZGIzOGNkNjFmYWM2YS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2FnZW50L2NvbW11bmljYXRvci9hZGFwdGVycy9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwiLyoqXG4gKiBUaGUgaW52ZXJzZSBvZiBgXy50b1BhaXJzYDsgdGhpcyBtZXRob2QgcmV0dXJucyBhbiBvYmplY3QgY29tcG9zZWRcbiAqIGZyb20ga2V5LXZhbHVlIGBwYWlyc2AuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBwYWlycyBUaGUga2V5LXZhbHVlIHBhaXJzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IG9iamVjdC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5mcm9tUGFpcnMoW1snYScsIDFdLCBbJ2InLCAyXV0pO1xuICogLy8gPT4geyAnYSc6IDEsICdiJzogMiB9XG4gKi9cbmZ1bmN0aW9uIGZyb21QYWlycyhwYWlycykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHBhaXJzID09IG51bGwgPyAwIDogcGFpcnMubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0ge307XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgcGFpciA9IHBhaXJzW2luZGV4XTtcbiAgICByZXN1bHRbcGFpclswXV0gPSBwYWlyWzFdO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnJvbVBhaXJzO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9zcmMvdHlwZXMnO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJleHBvcnQgdmFyIHJlcXVlc3RNZXNzYWdlcyA9IFtcclxuICAgICdHRVRfQUdFTlRfU1RBVEUnLFxyXG4gICAgJ1NFVF9BR0VOVF9TVEFURScsXHJcbiAgICAnU1RBUlRfQ0FMTCcsXHJcbiAgICAnU1RBUlRfU01TX0NIQVQnLFxyXG4gICAgJ1NUQVJUX0VNQUlMJyxcclxuICAgICdURVJNSU5BVEVfQ0FMTCcsXHJcbiAgICAnQ09NUExFVEVfSU5URVJBQ1RJT04nLFxyXG4gICAgJ1NXSVRDSF9BQ1RJVkVfSU5URVJBQ1RJT04nLFxyXG4gICAgJ0NIQU5HRV9TRVJWSUNFJyxcclxuICAgICdTRVRfRElTUE9TSVRJT04nLFxyXG4gICAgJ0dFVF9DQUxMX1JFQ09SRElOR19TVEFUVVMnLFxyXG4gICAgJ1NFVF9DQUxMX1JFQ09SRElOR19TVEFUVVMnLFxyXG4gICAgJ0dFVF9TQ1JFRU5fUkVDT1JESU5HX1NUQVRVUycsXHJcbiAgICAnU0VUX1NDUkVFTl9SRUNPUkRJTkdfU1RBVFVTJyxcclxuICAgICdNVVRFX0FMTCcsXHJcbiAgICAnVU5NVVRFX0FMTCcsXHJcbiAgICAnR0VUX0NPTkZJRycsXHJcbiAgICAnU0VUX1ZBUklBQkxFJyxcclxuICAgICdXSURHRVRfTUlOSU1JWkVEJyxcclxuICAgICdXSURHRVRfTUFYSU1JWkVEJyxcclxuICAgICdBRERfSU5URVJBQ1RJT05fQVNTT0NJQVRFRF9PQkpFQ1QnLFxyXG4gICAgJ1NFVF9JTlRFUkFDVElPTl9BQ1RJVkVfU0NSRUVOJyxcclxuXTtcclxuZXhwb3J0IHZhciByZXF1ZXN0UmVzcG9uc2VNZXNzYWdlcyA9IFtcclxuICAgICdHRVRfQUdFTlRfU1RBVEVfUkVTUE9OU0UnLFxyXG4gICAgJ1NFVF9BR0VOVF9TVEFURV9SRVNQT05TRScsXHJcbiAgICAnU1RBUlRfQ0FMTF9SRVNQT05TRScsXHJcbiAgICAnU1RBUlRfU01TX0NIQVRfUkVTUE9OU0UnLFxyXG4gICAgJ1NUQVJUX0VNQUlMX1JFU1BPTlNFJyxcclxuICAgICdURVJNSU5BVEVfQ0FMTF9SRVNQT05TRScsXHJcbiAgICAnQ09NUExFVEVfSU5URVJBQ1RJT05fUkVTUE9OU0UnLFxyXG4gICAgJ1NXSVRDSF9BQ1RJVkVfSU5URVJBQ1RJT05fUkVTUE9OU0UnLFxyXG4gICAgJ0NIQU5HRV9TRVJWSUNFX1JFU1BPTlNFJyxcclxuICAgICdTRVRfRElTUE9TSVRJT05fUkVTUE9OU0UnLFxyXG4gICAgJ0dFVF9DQUxMX1JFQ09SRElOR19TVEFUVVNfUkVTUE9OU0UnLFxyXG4gICAgJ1NFVF9DQUxMX1JFQ09SRElOR19TVEFUVVNfUkVTUE9OU0UnLFxyXG4gICAgJ0dFVF9TQ1JFRU5fUkVDT1JESU5HX1NUQVRVU19SRVNQT05TRScsXHJcbiAgICAnU0VUX1NDUkVFTl9SRUNPUkRJTkdfU1RBVFVTX1JFU1BPTlNFJyxcclxuICAgICdNVVRFX0FMTF9SRVNQT05TRScsXHJcbiAgICAnVU5NVVRFX0FMTF9SRVNQT05TRScsXHJcbiAgICAnR0VUX0NPTkZJR19SRVNQT05TRScsXHJcbiAgICAnU0VUX1ZBUklBQkxFX1JFU1BPTlNFJyxcclxuICAgICdXSURHRVRfTUlOSU1JWkVEX1JFU1BPTlNFJyxcclxuICAgICdXSURHRVRfTUFYSU1JWkVEX1JFU1BPTlNFJyxcclxuICAgICdBRERfSU5URVJBQ1RJT05fQVNTT0NJQVRFRF9PQkpFQ1RfUkVTUE9OU0UnLFxyXG4gICAgJ1NFVF9JTlRFUkFDVElPTl9BQ1RJVkVfU0NSRUVOX1JFU1BPTlNFJyxcclxuXTtcclxuZXhwb3J0IHZhciBjYWxsYmFja01lc3NhZ2VzID0gW1xyXG4gICAgJ0xPR0lOJyxcclxuICAgICdMT0dPVVQnLFxyXG4gICAgJ05FV19JTlRFUkFDVElPTicsXHJcbiAgICAnSU5URVJBQ1RJT05fUkVNT1ZFRCcsXHJcbiAgICAnSU5URVJBQ1RJT05fU1RBVEVfQ0hBTkdFJyxcclxuICAgICdBQ1RJVkVfSU5URVJBQ1RJT05fU1dJVENIRUQnLFxyXG4gICAgJ0FHRU5UX1NUQVRFX0NIQU5HRScsXHJcbiAgICAnUkVRVUVTVF9UUkFOU0ZFUl9EQVRBJyxcclxuICAgICdMT0FEX1RSQU5TRkVSX0RBVEEnLFxyXG4gICAgJ01BTlVBTF9DQUxMJyxcclxuICAgICdNQVhJTUlaRV9XSURHRVQnLFxyXG4gICAgJ1NFQVJDSF9LTk9XTEVER0VfQkFTRScsXHJcbiAgICAnR0VUX0tOT1dMRURHRV9CQVNFX0FSVElDTEUnLFxyXG4gICAgJ1NIT1dfU0NSRUVOX1BPUCcsXHJcbiAgICAnU0VBUkNIX1JFQ09SRFMnLFxyXG4gICAgJ0FDVElWQVRFX0lOVEVSQUNUSU9OX1NDUkVFTicsXHJcbl07XHJcbmV4cG9ydCB2YXIgY2FsbGJhY2tSZXNwb25zZU1lc3NhZ2VzID0gW1xyXG4gICAgJ1JFUVVFU1RfVFJBTlNGRVJfREFUQV9SRVNQT05TRScsXHJcbiAgICAnU0VBUkNIX0tOT1dMRURHRV9CQVNFX1JFU1BPTlNFJyxcclxuICAgICdHRVRfS05PV0xFREdFX0JBU0VfQVJUSUNMRV9SRVNQT05TRScsXHJcbl07XHJcbnZhciByZXN1bHRTdGF0dXMgPSBbJ2Vycm9yJywgJ3N1Y2Nlc3MnXTtcclxudmFyIGludGVyYWN0aW9uU3RhdGUgPSBbJ3Vua25vd24nLCAncXVldWVkJywgJ2l2cicsICd3cmFwX3VwJywgJ3dyYXBfdXBfaG9sZCcsICdkZWxpdmVyZWQnLCAnZGVsaXZlcnlfcGVuZGluZycsICdob2xkJywgJ2NvbXBsZXRlZCddO1xyXG52YXIgY2FsbERpcmVjdGlvbiA9IFsnaW5ib3VuZCcsICdvdXRib3VuZCddO1xyXG52YXIgaW50ZXJhY3Rpb25UeXBlID0gWyd2b2ljZScsICdjaGF0JywgJ2VtYWlsJ107XHJcbmV4cG9ydCB2YXIgYWdlbnRTdGF0ZXMgPSBbJ3N1cGVydmlzaW5nJywgJ3JlYWR5JywgJ25vdF9yZWFkeScsICdidXN5JywgJ2FmdGVyX2NhbGxfd29yayddO1xyXG5leHBvcnQgdmFyIHJlY29yZGluZ1RhcmdldHMgPSBbJ2NhbGwnLCAnc2NyZWVuJ107XHJcbmV4cG9ydCB2YXIgcmVxdWVzdFJlc3BvbnNlTWFwID0ge1xyXG4gICAgJ0dFVF9BR0VOVF9TVEFURSc6ICdHRVRfQUdFTlRfU1RBVEVfUkVTUE9OU0UnLFxyXG4gICAgJ1NFVF9BR0VOVF9TVEFURSc6ICdTRVRfQUdFTlRfU1RBVEVfUkVTUE9OU0UnLFxyXG4gICAgJ1NUQVJUX0NBTEwnOiAnU1RBUlRfQ0FMTF9SRVNQT05TRScsXHJcbiAgICAnU1RBUlRfU01TX0NIQVQnOiAnU1RBUlRfU01TX0NIQVRfUkVTUE9OU0UnLFxyXG4gICAgJ1NUQVJUX0VNQUlMJzogJ1NUQVJUX0VNQUlMX1JFU1BPTlNFJyxcclxuICAgICdURVJNSU5BVEVfQ0FMTCc6ICdURVJNSU5BVEVfQ0FMTF9SRVNQT05TRScsXHJcbiAgICAnQ09NUExFVEVfSU5URVJBQ1RJT04nOiAnQ09NUExFVEVfSU5URVJBQ1RJT05fUkVTUE9OU0UnLFxyXG4gICAgJ1NXSVRDSF9BQ1RJVkVfSU5URVJBQ1RJT04nOiAnU1dJVENIX0FDVElWRV9JTlRFUkFDVElPTl9SRVNQT05TRScsXHJcbiAgICAnQ0hBTkdFX1NFUlZJQ0UnOiAnQ0hBTkdFX1NFUlZJQ0VfUkVTUE9OU0UnLFxyXG4gICAgJ1NFVF9ESVNQT1NJVElPTic6ICdTRVRfRElTUE9TSVRJT05fUkVTUE9OU0UnLFxyXG4gICAgJ0dFVF9DQUxMX1JFQ09SRElOR19TVEFUVVMnOiAnR0VUX0NBTExfUkVDT1JESU5HX1NUQVRVU19SRVNQT05TRScsXHJcbiAgICAnU0VUX0NBTExfUkVDT1JESU5HX1NUQVRVUyc6ICdTRVRfQ0FMTF9SRUNPUkRJTkdfU1RBVFVTX1JFU1BPTlNFJyxcclxuICAgICdHRVRfU0NSRUVOX1JFQ09SRElOR19TVEFUVVMnOiAnR0VUX1NDUkVFTl9SRUNPUkRJTkdfU1RBVFVTX1JFU1BPTlNFJyxcclxuICAgICdTRVRfU0NSRUVOX1JFQ09SRElOR19TVEFUVVMnOiAnU0VUX1NDUkVFTl9SRUNPUkRJTkdfU1RBVFVTX1JFU1BPTlNFJyxcclxuICAgICdNVVRFX0FMTCc6ICdNVVRFX0FMTF9SRVNQT05TRScsXHJcbiAgICAnVU5NVVRFX0FMTCc6ICdVTk1VVEVfQUxMX1JFU1BPTlNFJyxcclxuICAgICdHRVRfQ09ORklHJzogJ0dFVF9DT05GSUdfUkVTUE9OU0UnLFxyXG4gICAgJ1NFVF9WQVJJQUJMRSc6ICdTRVRfVkFSSUFCTEVfUkVTUE9OU0UnLFxyXG4gICAgJ1dJREdFVF9NSU5JTUlaRUQnOiAnV0lER0VUX01JTklNSVpFRF9SRVNQT05TRScsXHJcbiAgICAnV0lER0VUX01BWElNSVpFRCc6ICdXSURHRVRfTUFYSU1JWkVEX1JFU1BPTlNFJyxcclxuICAgICdBRERfSU5URVJBQ1RJT05fQVNTT0NJQVRFRF9PQkpFQ1QnOiAnQUREX0lOVEVSQUNUSU9OX0FTU09DSUFURURfT0JKRUNUX1JFU1BPTlNFJyxcclxuICAgICdTRVRfSU5URVJBQ1RJT05fQUNUSVZFX1NDUkVFTic6ICdTRVRfSU5URVJBQ1RJT05fQUNUSVZFX1NDUkVFTl9SRVNQT05TRScsXHJcbn07XHJcbmV4cG9ydCB2YXIgY2FsbGJhY2tSZXF1ZXN0UmVzcG9uc2VNYXAgPSB7XHJcbiAgICAnUkVRVUVTVF9UUkFOU0ZFUl9EQVRBJzogJ1JFUVVFU1RfVFJBTlNGRVJfREFUQV9SRVNQT05TRScsXHJcbiAgICAnU0VBUkNIX0tOT1dMRURHRV9CQVNFJzogJ1NFQVJDSF9LTk9XTEVER0VfQkFTRV9SRVNQT05TRScsXHJcbiAgICAnR0VUX0tOT1dMRURHRV9CQVNFX0FSVElDTEUnOiAnR0VUX0tOT1dMRURHRV9CQVNFX0FSVElDTEVfUkVTUE9OU0UnLFxyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD10eXBlcy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgZnJvbVBhaXJzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImxvZGFzaC9mcm9tUGFpcnNcIikpO1xyXG52YXIgYWRhcHRlcnNfdHlwZXNfMSA9IHJlcXVpcmUoXCJAYnBpbmMvYWRhcHRlcnMtdHlwZXNcIik7XHJcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XHJcbi8vIEluIG1pbGxpc2Vjb25kcyAobXMpXHJcbnZhciByZXNwb25zZVRpbWVvdXQgPSAxMDAwO1xyXG52YXIgc2VsZlNjcmlwdFVybCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAod2luZG93LmRvY3VtZW50LmN1cnJlbnRTY3JpcHQpIHtcclxuICAgICAgICByZXR1cm4gd2luZG93LmRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0Jyk7XHJcbiAgICAgICAgdmFyIG15U2NyaXB0ID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIHJldHVybiBteVNjcmlwdC5zcmM7XHJcbiAgICB9XHJcbn0pKCk7XHJcbnZhciBhZGNPcmlnaW5PdmVycmlkZSA9IHV0aWxzXzEudXRpbHMuZXh0cmFjdFVSTFBhcmFtcyh3aW5kb3cubG9jYXRpb24uaHJlZilbJ2FkY1VybCddO1xyXG52YXIgYWRjT3JpZ2luID0gYWRjT3JpZ2luT3ZlcnJpZGUgfHwgbmV3IFVSTChzZWxmU2NyaXB0VXJsKS5vcmlnaW47IC8vICdodHRwczovL2FkY29tbXVuaWNhdG9yLndlYi5hcHAnXHJcbnZhciBBZ2VudERlc2t0b3BDbGllbnRBUEkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBBZ2VudERlc2t0b3BDbGllbnRBUEkoaW50ZWdyYXRpb25LZXksIG1vdW50Um9vdCkge1xyXG4gICAgICAgIHRoaXMuYWRjRnJhbWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYWRjRnJhbWVPcmlnaW4gPSAnJztcclxuICAgICAgICB0aGlzLnBlbmRpbmdNZXNzYWdlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuaW50ZWdyYXRpb25LZXkgPSBpbnRlZ3JhdGlvbktleSB8fCB1dGlsc18xLnV0aWxzLmdlbmVyYXRlUmFuZG9tVUlEKCk7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uRXN0YWJsaXNoZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmluY29taW5nTWVzc2FnZUxvZ2dlcnMgPSBbXTtcclxuICAgICAgICB0aGlzLm91dGdvaW5nTWVzc2FnZUxvZ2dlcnMgPSBbXTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VIYW5kbGVycyA9IGZyb21QYWlyc18xLmRlZmF1bHQoYWRhcHRlcnNfdHlwZXNfMS5jYWxsYmFja01lc3NhZ2VzLm1hcChmdW5jdGlvbiAobWVzc2FnZVR5cGUpIHsgcmV0dXJuIFttZXNzYWdlVHlwZSwgW11dOyB9KSk7XHJcbiAgICAgICAgdGhpcy5yZXNwb25zZUNhbGxiYWNrcyA9IGZyb21QYWlyc18xLmRlZmF1bHQoYWRhcHRlcnNfdHlwZXNfMS5yZXF1ZXN0UmVzcG9uc2VNZXNzYWdlcy5tYXAoZnVuY3Rpb24gKG1lc3NhZ2VUeXBlKSB7IHJldHVybiBbbWVzc2FnZVR5cGUsIHt9XTsgfSkpO1xyXG4gICAgICAgIHRoaXMucHJlcGFyZUFkY0lmcmFtZShtb3VudFJvb3QpO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuICAgIEFnZW50RGVza3RvcENsaWVudEFQSS5wcm90b3R5cGUuaW5qZWN0SW5jb21pbmdNZXNzYWdlTG9nZ2VyID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5pbmNvbWluZ01lc3NhZ2VMb2dnZXJzLnB1c2goY2FsbGJhY2spO1xyXG4gICAgfTtcclxuICAgIEFnZW50RGVza3RvcENsaWVudEFQSS5wcm90b3R5cGUuaW5qZWN0T3V0Z29pbmdNZXNzYWdlTG9nZ2VyID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5vdXRnb2luZ01lc3NhZ2VMb2dnZXJzLnB1c2goY2FsbGJhY2spO1xyXG4gICAgfTtcclxuICAgIEFnZW50RGVza3RvcENsaWVudEFQSS5wcm90b3R5cGUucHJlcGFyZUFkY0lmcmFtZSA9IGZ1bmN0aW9uIChtb3VudFJvb3QpIHtcclxuICAgICAgICBtb3VudFJvb3QgPSAobW91bnRSb290ICYmIG1vdW50Um9vdC5hcHBlbmRDaGlsZCkgPyBtb3VudFJvb3QgOiBkb2N1bWVudC5ib2R5O1xyXG4gICAgICAgIHRoaXMuYWRjRnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcclxuICAgICAgICB0aGlzLmFkY0ZyYW1lLnRpdGxlID0gJ0FnZW50IERlc2t0b3AgQ29tbXVuaWNhdG9yJztcclxuICAgICAgICB0aGlzLmFkY0ZyYW1lLmlkID0gJ2FkY19mcmFtZSc7XHJcbiAgICAgICAgdGhpcy5hZGNGcmFtZS5zdHlsZS5ib3JkZXIgPSAnbm9uZSc7XHJcbiAgICAgICAgdGhpcy5hZGNGcmFtZS53aWR0aCA9ICc1MDAnO1xyXG4gICAgICAgIHRoaXMuYWRjRnJhbWUuaGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgICAgIHRoaXMuYWRjRnJhbWUuYWxsb3cgPSAnbWljcm9waG9uZTsgY2FtZXJhOyBnZW9sb2NhdGlvbic7XHJcbiAgICAgICAgdGhpcy5hZGNGcmFtZS5zcmMgPSBhZGNPcmlnaW4gKyAnL2FnZW50L2NvbW11bmljYXRvci8nO1xyXG4gICAgICAgIHRoaXMuYWRjRnJhbWUub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignQEBAIEFkYXB0ZXIgZmFpbHVyZTogdW5hYmxlIHRvIGxvYWQgQXBpIFByb3h5IGlmcmFtZScpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgbW91bnRSb290LmFwcGVuZENoaWxkKHRoaXMuYWRjRnJhbWUpO1xyXG4gICAgICAgIHRoaXMuYWRjRnJhbWVPcmlnaW4gPSAobmV3IFVSTCh0aGlzLmFkY0ZyYW1lLnNyYykpLm9yaWdpbjtcclxuICAgIH07XHJcbiAgICBBZ2VudERlc2t0b3BDbGllbnRBUEkucHJvdG90eXBlLmhhbmRsZUluY29taW5nTWVzc2FnZSA9IGZ1bmN0aW9uICh0eXBlLCB1aWQsIHBhcmFtcykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0BAQCBIYW5kbGU6ICcsIHR5cGUsIHVpZCwgcGFyYW1zKTtcclxuICAgICAgICB2YXIgaGFuZGxlcnMgPSB0aGlzLm1lc3NhZ2VIYW5kbGVyc1t0eXBlXTtcclxuICAgICAgICB2YXIgcGVuZGluZ1Jlc3VsdHMgPSBoYW5kbGVycy5tYXAoZnVuY3Rpb24gKGhhbmRsZXIpIHsgcmV0dXJuIGhhbmRsZXIuYXBwbHkodm9pZCAwLCBwYXJhbXMpOyB9KTtcclxuICAgICAgICB1dGlsc18xLnV0aWxzLndhaXRSZXNvbHZlQWxsKHBlbmRpbmdSZXN1bHRzKS50aGVuKGZ1bmN0aW9uIChwcm9taXNlUmVzdWx0cykge1xyXG4gICAgICAgICAgICB2YXIgcG9zaXRpdmVSZXN1bHRzID0gcHJvbWlzZVJlc3VsdHMucmVkdWNlKGZ1bmN0aW9uIChhcnIsIHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09ICdmdWxmaWxsZWQnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnZhbHVlICE9PSBudWxsICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChyZXN1bHQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFycjtcclxuICAgICAgICAgICAgfSwgW10pO1xyXG4gICAgICAgICAgICB2YXIgbGFzdFZhbHVlID0gcG9zaXRpdmVSZXN1bHRzLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgPyBwb3NpdGl2ZVJlc3VsdHNbcG9zaXRpdmVSZXN1bHRzLmxlbmd0aCAtIDFdXHJcbiAgICAgICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChhZGFwdGVyc190eXBlc18xLmNhbGxiYWNrUmVzcG9uc2VNZXNzYWdlcy5pbmNsdWRlcyh0eXBlICsgXCJfUkVTUE9OU0VcIikpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnBvc3RNZXNzYWdlVG9BZGMoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVpZDogdWlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUgKyBcIl9SRVNQT05TRVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczogW2xhc3RWYWx1ZV0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEFnZW50RGVza3RvcENsaWVudEFQSS5wcm90b3R5cGUucmVnaXN0ZXJMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChlLm9yaWdpbiAhPT0gX3RoaXMuYWRjRnJhbWVPcmlnaW4pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBpZiAoIWUuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBfYSA9IGUuZGF0YSwgdHlwZSA9IF9hLnR5cGUsIHVpZCA9IF9hLnVpZCwgcGFyYW1zID0gX2EucGFyYW1zO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuaW5jb21pbmdNZXNzYWdlTG9nZ2Vycy5mb3JFYWNoKGZ1bmN0aW9uIChsb2cpIHsgcmV0dXJuIGxvZyh0eXBlLCBwYXJhbXMpOyB9KTtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnaGVsbG8nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY29ubmVjdGlvbkVzdGFibGlzaGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5wb3N0TWVzc2FnZVRvQWRjKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdWlkOiB1aWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdoaScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogW190aGlzLmludGVncmF0aW9uS2V5XSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucGVuZGluZ01lc3NhZ2VzLmZvckVhY2goZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnBvc3RNZXNzYWdlVG9BZGMobWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5wZW5kaW5nTWVzc2FnZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIV90aGlzLmNvbm5lY3Rpb25Fc3RhYmxpc2hlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChhZGFwdGVyc190eXBlc18xLmNhbGxiYWNrTWVzc2FnZXMuaW5jbHVkZXModHlwZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5oYW5kbGVJbmNvbWluZ01lc3NhZ2UodHlwZSwgdWlkLCBwYXJhbXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYWRhcHRlcnNfdHlwZXNfMS5yZXF1ZXN0UmVzcG9uc2VNZXNzYWdlcy5pbmNsdWRlcyh0eXBlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB3YWl0aW5nID0gX3RoaXMucmVzcG9uc2VDYWxsYmFja3NbdHlwZV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdhaXRpbmcgJiYgd2FpdGluZ1t1aWRdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjYWxsYmFja18xID0gd2FpdGluZ1t1aWRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgd2FpdGluZ1t1aWRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNhbGxiYWNrXzEocGFyYW1zKTsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdAQEAgR2V0IHVua25vd24gbWVzc2FnZSBmcm9tIENvbW11bmljYXRvcjogJywgdHlwZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0BAQCBFcnJvcjogJywgZS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIEFnZW50RGVza3RvcENsaWVudEFQSS5wcm90b3R5cGUucnVuUmVzcG9uc2VUaW1lb3V0V2F0Y2ggPSBmdW5jdGlvbiAodHlwZSwgdWlkLCByZXNvbHZlKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGNhbGxiYWNrc01hcCA9IF90aGlzLnJlc3BvbnNlQ2FsbGJhY2tzW3R5cGUgKyBcIl9SRVNQT05TRVwiXTtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrc01hcFt1aWRdKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgY2FsbGJhY2tzTWFwW3VpZF07XHJcbiAgICAgICAgICAgICAgICB2YXIgZXJyb3JUZXh0ID0gXCJSZXNwb25zZSBmcm9tIENvbW11bmljYXRvciBmb3IgZXZlbnQgXCIgKyB0eXBlICsgXCIgd2Fzbid0IHJlY2VpdmVkIGluIHNwZWNpZmllZCB0aW1lb3V0OiBcIiArIHJlc3BvbnNlVGltZW91dDtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJAQEAgXCIgKyBlcnJvclRleHQpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCByZXNwb25zZVRpbWVvdXQpO1xyXG4gICAgfTtcclxuICAgIEFnZW50RGVza3RvcENsaWVudEFQSS5wcm90b3R5cGUucG9zdE1lc3NhZ2VUb0FkYyA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWRjRnJhbWUgIT09IG51bGwgJiYgdGhpcy5hZGNGcmFtZS5jb250ZW50V2luZG93ICYmIHRoaXMuY29ubmVjdGlvbkVzdGFibGlzaGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3V0Z29pbmdNZXNzYWdlTG9nZ2Vycy5mb3JFYWNoKGZ1bmN0aW9uIChsb2cpIHsgcmV0dXJuIGxvZyhkYXRhLnR5cGUsIGRhdGEucGFyYW1zKTsgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdAQEAgQURBUFRFUiBTRU5EIE1FU1NBR0U6ICcsIGRhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLmFkY0ZyYW1lLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UoZGF0YSwgdGhpcy5hZGNGcmFtZU9yaWdpbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBlbmRpbmdNZXNzYWdlcy5wdXNoKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBBZ2VudERlc2t0b3BDbGllbnRBUEkucHJvdG90eXBlLmFwaUNhbGwgPSBmdW5jdGlvbiAodHlwZSwgcGFyYW1zKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcclxuICAgICAgICAgICAgdmFyIHVpZCA9IHV0aWxzXzEudXRpbHMuZ2VuZXJhdGVSYW5kb21VSUQoKTtcclxuICAgICAgICAgICAgX3RoaXMucG9zdE1lc3NhZ2VUb0FkYyh7IHVpZDogdWlkLCB0eXBlOiB0eXBlLCBwYXJhbXM6IHBhcmFtcyB9KTtcclxuICAgICAgICAgICAgdmFyIHdhaXRpbmcgPSBfdGhpcy5yZXNwb25zZUNhbGxiYWNrc1t0eXBlICsgXCJfUkVTUE9OU0VcIl07XHJcbiAgICAgICAgICAgIHdhaXRpbmdbdWlkXSA9IHJlc29sdmU7XHJcbiAgICAgICAgICAgIF90aGlzLnJ1blJlc3BvbnNlVGltZW91dFdhdGNoKHR5cGUsIHVpZCwgcmVzb2x2ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgQWdlbnREZXNrdG9wQ2xpZW50QVBJLnByb3RvdHlwZS5nZXRBZ2VudFN0YXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwaUNhbGwoJ0dFVF9BR0VOVF9TVEFURScpO1xyXG4gICAgfTtcclxuICAgIEFnZW50RGVza3RvcENsaWVudEFQSS5wcm90b3R5cGUuc2V0QWdlbnRTdGF0ZSA9IGZ1bmN0aW9uIChzdGF0ZSwgbm90UmVhZHlSZWFzb24pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcGlDYWxsKCdTRVRfQUdFTlRfU1RBVEUnLCBbc3RhdGUsIG5vdFJlYWR5UmVhc29uXSk7XHJcbiAgICB9O1xyXG4gICAgQWdlbnREZXNrdG9wQ2xpZW50QVBJLnByb3RvdHlwZS5zdGFydENhbGwgPSBmdW5jdGlvbiAocGhvbmVudW1iZXIsIGluaXRpYWxPYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcGlDYWxsKCdTVEFSVF9DQUxMJywgW3Bob25lbnVtYmVyLCBpbml0aWFsT2JqZWN0IHx8IG51bGxdKTtcclxuICAgIH07XHJcbiAgICBBZ2VudERlc2t0b3BDbGllbnRBUEkucHJvdG90eXBlLnN0YXJ0U01TQ2hhdCA9IGZ1bmN0aW9uIChwaG9uZW51bWJlciwgaW5pdGlhbE9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwaUNhbGwoJ1NUQVJUX1NNU19DSEFUJywgW3Bob25lbnVtYmVyLCBpbml0aWFsT2JqZWN0IHx8IG51bGxdKTtcclxuICAgIH07XHJcbiAgICBBZ2VudERlc2t0b3BDbGllbnRBUEkucHJvdG90eXBlLnN0YXJ0RW1haWwgPSBmdW5jdGlvbiAoZW1haWwsIGluaXRpYWxPYmplY3QpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcGlDYWxsKCdTVEFSVF9FTUFJTCcsIFtlbWFpbCwgaW5pdGlhbE9iamVjdCB8fCBudWxsXSk7XHJcbiAgICB9O1xyXG4gICAgQWdlbnREZXNrdG9wQ2xpZW50QVBJLnByb3RvdHlwZS50ZXJtaW5hdGVDYWxsID0gZnVuY3Rpb24gKGludGVyYWN0aW9uSWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcGlDYWxsKCdURVJNSU5BVEVfQ0FMTCcsIFtpbnRlcmFjdGlvbklkXSk7XHJcbiAgICB9O1xyXG4gICAgQWdlbnREZXNrdG9wQ2xpZW50QVBJLnByb3RvdHlwZS5jb21wbGV0ZUludGVyYWN0aW9uID0gZnVuY3Rpb24gKGludGVyYWN0aW9uSWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcGlDYWxsKCdDT01QTEVURV9JTlRFUkFDVElPTicsIFtpbnRlcmFjdGlvbklkXSk7XHJcbiAgICB9O1xyXG4gICAgQWdlbnREZXNrdG9wQ2xpZW50QVBJLnByb3RvdHlwZS5zd2l0Y2hBY3RpdmVJbnRlcmFjdGlvbiA9IGZ1bmN0aW9uIChpbnRlcmFjdGlvbklkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpQ2FsbCgnU1dJVENIX0FDVElWRV9JTlRFUkFDVElPTicsIFtpbnRlcmFjdGlvbklkXSk7XHJcbiAgICB9O1xyXG4gICAgQWdlbnREZXNrdG9wQ2xpZW50QVBJLnByb3RvdHlwZS5jaGFuZ2VTZXJ2aWNlID0gZnVuY3Rpb24gKHNlcnZpY2VOYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpQ2FsbCgnQ0hBTkdFX1NFUlZJQ0UnLCBbc2VydmljZU5hbWVdKTtcclxuICAgIH07XHJcbiAgICBBZ2VudERlc2t0b3BDbGllbnRBUEkucHJvdG90eXBlLnNldERpc3Bvc2l0aW9uID0gZnVuY3Rpb24gKGRpc3Bvc2l0aW9uRGF0YSwgaW50ZXJhY3Rpb25JZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwaUNhbGwoJ1NFVF9ESVNQT1NJVElPTicsIFtkaXNwb3NpdGlvbkRhdGEsIGludGVyYWN0aW9uSWRdKTtcclxuICAgIH07XHJcbiAgICBBZ2VudERlc2t0b3BDbGllbnRBUEkucHJvdG90eXBlLmdldENhbGxSZWNvcmRpbmdTdGF0dXMgPSBmdW5jdGlvbiAoaW50ZXJhY3Rpb25JZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwaUNhbGwoJ0dFVF9DQUxMX1JFQ09SRElOR19TVEFUVVMnLCBbaW50ZXJhY3Rpb25JZF0pO1xyXG4gICAgfTtcclxuICAgIEFnZW50RGVza3RvcENsaWVudEFQSS5wcm90b3R5cGUuc2V0Q2FsbFJlY29yZGluZ1N0YXR1cyA9IGZ1bmN0aW9uIChuZXdTdGF0dXMsIGludGVyYWN0aW9uSWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcGlDYWxsKCdTRVRfQ0FMTF9SRUNPUkRJTkdfU1RBVFVTJywgW25ld1N0YXR1cywgaW50ZXJhY3Rpb25JZF0pO1xyXG4gICAgfTtcclxuICAgIEFnZW50RGVza3RvcENsaWVudEFQSS5wcm90b3R5cGUuZ2V0U2NyZWVuUmVjb3JkaW5nU3RhdHVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwaUNhbGwoJ0dFVF9TQ1JFRU5fUkVDT1JESU5HX1NUQVRVUycpO1xyXG4gICAgfTtcclxuICAgIEFnZW50RGVza3RvcENsaWVudEFQSS5wcm90b3R5cGUuc2V0U2NyZWVuUmVjb3JkaW5nU3RhdHVzID0gZnVuY3Rpb24gKG5ld1N0YXR1cykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwaUNhbGwoJ1NFVF9TQ1JFRU5fUkVDT1JESU5HX1NUQVRVUycsIFtuZXdTdGF0dXNdKTtcclxuICAgIH07XHJcbiAgICBBZ2VudERlc2t0b3BDbGllbnRBUEkucHJvdG90eXBlLm11dGVBbGwgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpQ2FsbCgnTVVURV9BTEwnLCBbdGFyZ2V0XSk7XHJcbiAgICB9O1xyXG4gICAgQWdlbnREZXNrdG9wQ2xpZW50QVBJLnByb3RvdHlwZS51bm11dGVBbGwgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpQ2FsbCgnVU5NVVRFX0FMTCcsIFt0YXJnZXRdKTtcclxuICAgIH07XHJcbiAgICBBZ2VudERlc2t0b3BDbGllbnRBUEkucHJvdG90eXBlLmdldENvbmZpZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcGlDYWxsKCdHRVRfQ09ORklHJyk7XHJcbiAgICB9O1xyXG4gICAgQWdlbnREZXNrdG9wQ2xpZW50QVBJLnByb3RvdHlwZS5zZXRWYXJpYWJsZSA9IGZ1bmN0aW9uIChrZXksIHZhbHVlLCBpbnRlcmFjdGlvbklkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpQ2FsbCgnU0VUX1ZBUklBQkxFJywgW2tleSwgdmFsdWUsIGludGVyYWN0aW9uSWRdKTtcclxuICAgIH07XHJcbiAgICBBZ2VudERlc2t0b3BDbGllbnRBUEkucHJvdG90eXBlLm5vdGlmeVdpZGdldE1pbmltaXplZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcGlDYWxsKCdXSURHRVRfTUlOSU1JWkVEJyk7XHJcbiAgICB9O1xyXG4gICAgQWdlbnREZXNrdG9wQ2xpZW50QVBJLnByb3RvdHlwZS5ub3RpZnlXaWRnZXRNYXhpbWl6ZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBpQ2FsbCgnV0lER0VUX01BWElNSVpFRCcpO1xyXG4gICAgfTtcclxuICAgIEFnZW50RGVza3RvcENsaWVudEFQSS5wcm90b3R5cGUuYWRkSW50ZXJhY3Rpb25Bc3NvY2lhdGVkT2JqZWN0ID0gZnVuY3Rpb24gKG9iamVjdCwgaW50ZXJhY3Rpb25JZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwaUNhbGwoJ0FERF9JTlRFUkFDVElPTl9BU1NPQ0lBVEVEX09CSkVDVCcsIFtvYmplY3QsIGludGVyYWN0aW9uSWRdKTtcclxuICAgIH07XHJcbiAgICBBZ2VudERlc2t0b3BDbGllbnRBUEkucHJvdG90eXBlLnNldEludGVyYWN0aW9uQWN0aXZlU2NyZWVuID0gZnVuY3Rpb24gKHNjcmVlbkRhdGEsIGludGVyYWN0aW9uSWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcGlDYWxsKCdTRVRfSU5URVJBQ1RJT05fQUNUSVZFX1NDUkVFTicsIFtzY3JlZW5EYXRhLCBpbnRlcmFjdGlvbklkXSk7XHJcbiAgICB9O1xyXG4gICAgQWdlbnREZXNrdG9wQ2xpZW50QVBJLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIChtZXNzYWdlLCBoYW5kbGVyKSB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcnNbbWVzc2FnZV0ucHVzaChoYW5kbGVyKTtcclxuICAgIH07XHJcbiAgICBBZ2VudERlc2t0b3BDbGllbnRBUEkucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uIChtZXNzYWdlLCBoYW5kbGVyKSB7XHJcbiAgICAgICAgdmFyIGRlbEluZGV4ID0gdGhpcy5tZXNzYWdlSGFuZGxlcnNbbWVzc2FnZV0uaW5kZXhPZihoYW5kbGVyKTtcclxuICAgICAgICBpZiAoZGVsSW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXJzW21lc3NhZ2VdLnNwbGljZShkZWxJbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiBBZ2VudERlc2t0b3BDbGllbnRBUEk7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQWdlbnREZXNrdG9wQ2xpZW50QVBJID0gQWdlbnREZXNrdG9wQ2xpZW50QVBJO1xyXG53aW5kb3cuYnJpZ2h0cGF0dGVybiA9IHtcclxuICAgIEFkQXBpOiBBZ2VudERlc2t0b3BDbGllbnRBUEksXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBhZGFwdGVyc190eXBlc18xID0gcmVxdWlyZShcIkBicGluYy9hZGFwdGVycy10eXBlc1wiKTtcclxudmFyIGFkY19jbGllbnRfYXBpXzEgPSByZXF1aXJlKFwiLi4vLi4vYWRjLWNsaWVudC1hcGlcIik7XHJcbmNvbnNvbGUubG9nKCcjIyBpdCB3b3JrcyEhJyk7XHJcbnZhciBpbnRlZ3JhdGlvbktleSA9ICd0ZXN0LWFkYXB0ZXInO1xyXG52YXIgbWVzc2FnZUNsYXNzID0ge1xyXG4gICAgJ28nOiAnb3V0Z29pbmcnLFxyXG4gICAgJ2lyJzogJ2luY29taW5nLXJlc3VsdCcsXHJcbiAgICAnaSc6ICdpbmNvbWluZycsXHJcbiAgICAnb3InOiAnb3V0Z29pbmctcmVzdWx0JyxcclxuICAgICdlJzogJ2Vycm9yJyxcclxufTtcclxudmFyIGxvZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nJyk7XHJcbnZhciBhZGNNb3VudE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRjX21vdW50X25vZGUnKTtcclxudmFyIGdldEFnZW50U3RhdGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2V0X2FnZW50X3N0YXRlX2J1dHRvbicpO1xyXG52YXIgc2V0QWdlbnRTdGF0ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXRfYWdlbnRfc3RhdGVfYnV0dG9uJyk7XHJcbnZhciBhZ2VudFN0YXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWdlbnRfc3RhdGVfaW5wdXQnKTtcclxudmFyIG5vdFJlYWR5UmVhc29uSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90X3JlYWR5X3JlYXNvbl9pbnB1dCcpO1xyXG52YXIgc3RhcnRDYWxsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0X2NhbGxfYnV0dG9uJyk7XHJcbnZhciBzdGFydFNNU0NoYXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnRfc21zX2NoYXRfYnV0dG9uJyk7XHJcbnZhciBwaG9uZU51bWJlcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bob25lX251bWJlcl9pbnB1dCcpO1xyXG52YXIgc3RhcnRFbWFpbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydF9lbWFpbF9idXR0b24nKTtcclxudmFyIGVtYWlsQWRkcmVzc0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VtYWlsX2FkZHJlc3NfaW5wdXQnKTtcclxudmFyIGludGVyYWN0aW9uSWRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnRlcmFjdGlvbl9pZF9pbnB1dCcpO1xyXG52YXIgdGVybWluYXRlQ2FsbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXJtaW5hdGVfY2FsbF9idXR0b24nKTtcclxudmFyIGNvbXBsZXRlSW50ZXJhY3Rpb25CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGxldGVfaW50ZXJhY3Rpb25fYnV0dG9uJyk7XHJcbnZhciBzd2l0Y2hBY3RpdmVJbnRlcmFjdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzd2l0Y2hfYWN0aXZlX2ludGVyYWN0aW9uX2J1dHRvbicpO1xyXG52YXIgY2hhbmdlU2VydmljZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGFuZ2Vfc2VydmljZScpO1xyXG52YXIgc2VydmljZU5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXJ2aWNlX25hbWVfaW5wdXQnKTtcclxudmFyIHNldERpc3Bvc2l0aW9uQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldF9kaXNwb3NpdGlvbicpO1xyXG52YXIgZGlzcG9zaXRpb25OYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzcG9zaXRpb25fbmFtZV9pbnB1dCcpO1xyXG52YXIgZGlzcG9zaXRpb25Db2RlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzcG9zaXRpb25fY29kZV9pbnB1dCcpO1xyXG52YXIgZ2V0Q2FsbFJlY29yZGluZ1N0YXR1c0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZXRfY2FsbF9yZWNvcmRpbmdfc3RhdHVzX2J1dHRvbicpO1xyXG52YXIgc2V0Q2FsbFJlY29yZGluZ1N0YXR1c0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXRfY2FsbF9yZWNvcmRpbmdfc3RhdHVzX2J1dHRvbicpO1xyXG52YXIgY2FsbFJlY29yZGluZ0NoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbGxfcmVjb3JkaW5nX2NoZWNrYm94Jyk7XHJcbnZhciBnZXRTY3JlZW5SZWNvcmRpbmdTdGF0dXNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2V0X3NjcmVlbl9yZWNvcmRpbmdfc3RhdHVzX2J1dHRvbicpO1xyXG52YXIgc2V0U2NyZWVuUmVjb3JkaW5nU3RhdHVzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NldF9zY3JlZW5fcmVjb3JkaW5nX3N0YXR1c19idXR0b24nKTtcclxudmFyIHNjcmVlblJlY29yZGluZ0NoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjcmVlbl9yZWNvcmRpbmdfY2hlY2tib3gnKTtcclxudmFyIG11dGVBbGxCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXV0ZV9hbGxfYnV0dG9uJyk7XHJcbnZhciB1bm11dGVBbGxCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5tdXRlX2FsbF9idXR0b24nKTtcclxudmFyIG11dGVUYXJnZXRTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXV0ZV90YXJnZXRfc2VsZWN0Jyk7XHJcbnZhciBzZXRWYXJpYWJsZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXRfdmFyaWFibGVfYnV0dG9uJyk7XHJcbnZhciB2YXJpYWJsZU5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2YXJpYWJsZV9uYW1lX2lucHV0Jyk7XHJcbnZhciB2YXJpYWJsZVZhbHVlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmFyaWFibGVfdmFsdWVfaW5wdXQnKTtcclxudmFyIGdldENvbmZpZ0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZXRfY29uZmlnX2J1dHRvbicpO1xyXG52YXIgbm90aWZ5V2lkZ2V0TWluaW1pemVkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGlmeV93aWRnZXRfbWluaW1pemVkX2J1dHRvbicpO1xyXG52YXIgbm90aWZ5V2lkZ2V0TWF4aW1pemVkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGlmeV93aWRnZXRfbWF4aW1pemVkX2J1dHRvbicpO1xyXG52YXIgYWRkSW50ZXJhY3Rpb25Bc3NvY2lhdGVkT2JqZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZF9pbnRlcmFjdGlvbl9hc3NvY2lhdGVkX29iamVjdF9idXR0b24nKTtcclxudmFyIGFzc29jaWF0ZWRPYmplY3RUZXh0YXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhc3NvY2lhdGVkX29iamVjdF90ZXh0YXJlYScpO1xyXG52YXIgc2V0SW50ZXJhY3Rpb25BY3RpdmVTY3JlZW5CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0X2ludGVyYWN0aW9uX2FjdGl2ZV9zY3JlZW5fYnV0dG9uJyk7XHJcbnZhciBhY3RpdmVTY3JlZW5UZXh0YXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3RpdmVfc2NyZWVuX3RleHRhcmVhJyk7XHJcbnZhciB0cmFuc2ZlckRhdGFUZXh0YXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmFuc2Zlcl9kYXRhX3RleHRhcmVhJyk7XHJcbnZhciBzZWFyY2hLQlJlc3VsdFRleHRhcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaF9rYl9yZXN1bHRfdGV4dGFyZWEnKTtcclxudmFyIGtiQXJ0aWNsZUZ1bGxEYXRhVGV4dGFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna2JfYXJ0aWNsZV9mdWxsX2RhdGFfdGV4dGFyZWEnKTtcclxudmFyIGFkQXBpID0gbmV3IGFkY19jbGllbnRfYXBpXzEuQWdlbnREZXNrdG9wQ2xpZW50QVBJKGludGVncmF0aW9uS2V5LCBhZGNNb3VudE5vZGUpO1xyXG52YXIgc2V0dXBIb3ZlckVmZmVjdCA9IGZ1bmN0aW9uIChob3ZlckVsZW1lbnQsIGhpZ2hsaWdodEVsZW1lbnRzKSB7XHJcbiAgICBob3ZlckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBoaWdobGlnaHRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0ZWQnKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgaG92ZXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaGlnaGxpZ2h0RWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodGVkJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIGxvZyA9IGZ1bmN0aW9uICh0eXBlLCBtZXNzYWdlLCBjb250ZW50KSB7XHJcbiAgICB2YXIgbXNnRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB2YXIgdHlwZUNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdmFyIHR5cGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHZhciBkYXRhRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtc2dEaXYuY2xhc3NMaXN0LmFkZCgnbG9nLW1zZycpO1xyXG4gICAgbXNnRGl2LmNsYXNzTGlzdC5hZGQobWVzc2FnZUNsYXNzW3R5cGVdKTtcclxuICAgIHR5cGVEaXYudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xyXG4gICAgZGF0YURpdi50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XHJcbiAgICB0eXBlQ29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHR5cGVEaXYpO1xyXG4gICAgbXNnRGl2LmFwcGVuZENoaWxkKHR5cGVDb250YWluZXJEaXYpO1xyXG4gICAgbXNnRGl2LmFwcGVuZENoaWxkKGRhdGFEaXYpO1xyXG4gICAgdmFyIGlzU2Nyb2xsZWRUb0JvdHRvbSA9IGxvZ3Muc2Nyb2xsSGVpZ2h0IC0gbG9ncy5jbGllbnRIZWlnaHQgPD0gbG9ncy5zY3JvbGxUb3AgKyAxO1xyXG4gICAgbG9ncy5hcHBlbmRDaGlsZChtc2dEaXYpO1xyXG4gICAgaWYgKGlzU2Nyb2xsZWRUb0JvdHRvbSkge1xyXG4gICAgICAgIGxvZ3Muc2Nyb2xsVG9wID0gbG9ncy5zY3JvbGxIZWlnaHQgLSBsb2dzLmNsaWVudEhlaWdodDtcclxuICAgIH1cclxufTtcclxuYWRBcGkuaW5qZWN0SW5jb21pbmdNZXNzYWdlTG9nZ2VyKGZ1bmN0aW9uIChtZXNzYWdlLCBkYXRhKSB7XHJcbiAgICBpZiAoYWRhcHRlcnNfdHlwZXNfMS5jYWxsYmFja01lc3NhZ2VzLmluY2x1ZGVzKG1lc3NhZ2UpKSB7XHJcbiAgICAgICAgbG9nKCdpJywgbWVzc2FnZSwgZGF0YSA/IEpTT04uc3RyaW5naWZ5KGRhdGEpIDogJycpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoYWRhcHRlcnNfdHlwZXNfMS5yZXF1ZXN0UmVzcG9uc2VNZXNzYWdlcy5pbmNsdWRlcyhtZXNzYWdlKSkge1xyXG4gICAgICAgIGxvZyhkYXRhLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnID8gJ2lyJyA6ICdlJywgbWVzc2FnZSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgfVxyXG59KTtcclxuYWRBcGkuaW5qZWN0T3V0Z29pbmdNZXNzYWdlTG9nZ2VyKGZ1bmN0aW9uIChtZXNzYWdlLCBkYXRhKSB7XHJcbiAgICBpZiAoYWRhcHRlcnNfdHlwZXNfMS5yZXF1ZXN0TWVzc2FnZXMuaW5jbHVkZXMobWVzc2FnZSkpIHtcclxuICAgICAgICBsb2coJ28nLCBtZXNzYWdlLCBkYXRhID8gSlNPTi5zdHJpbmdpZnkoZGF0YSkgOiAnJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChhZGFwdGVyc190eXBlc18xLmNhbGxiYWNrUmVzcG9uc2VNZXNzYWdlcy5pbmNsdWRlcyhtZXNzYWdlKSkge1xyXG4gICAgICAgIGxvZygnb3InLCBtZXNzYWdlLCBkYXRhID8gSlNPTi5zdHJpbmdpZnkoZGF0YSkgOiAnJyk7XHJcbiAgICB9XHJcbn0pO1xyXG5zZXR1cEhvdmVyRWZmZWN0KGdldEFnZW50U3RhdGVCdXR0b24sIFtdKTtcclxuZ2V0QWdlbnRTdGF0ZUJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgYWRBcGkuZ2V0QWdlbnRTdGF0ZSgpO1xyXG59O1xyXG5zZXR1cEhvdmVyRWZmZWN0KHNldEFnZW50U3RhdGVCdXR0b24sIFthZ2VudFN0YXRlSW5wdXQsIG5vdFJlYWR5UmVhc29uSW5wdXRdKTtcclxuc2V0QWdlbnRTdGF0ZUJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHN0YXRlID0gYWdlbnRTdGF0ZUlucHV0LnZhbHVlO1xyXG4gICAgdmFyIG5vdFJlYWR5UmVhc29uID0gbm90UmVhZHlSZWFzb25JbnB1dC52YWx1ZTtcclxuICAgIGFkQXBpLnNldEFnZW50U3RhdGUoc3RhdGUsIG5vdFJlYWR5UmVhc29uKTtcclxufTtcclxuc2V0dXBIb3ZlckVmZmVjdChzdGFydENhbGxCdXR0b24sIFtwaG9uZU51bWJlcklucHV0XSk7XHJcbnN0YXJ0Q2FsbEJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHBob25lID0gcGhvbmVOdW1iZXJJbnB1dC52YWx1ZTtcclxuICAgIHZhciBhc3NvY2lhdGVkT2JqZWN0ID0gdW5kZWZpbmVkO1xyXG4gICAgdmFyIGFzc29jaWF0ZWRPYmplY3RTdHIgPSBhc3NvY2lhdGVkT2JqZWN0VGV4dGFyZWEudmFsdWU7XHJcbiAgICBpZiAoYXNzb2NpYXRlZE9iamVjdFN0cikge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGFzc29jaWF0ZWRPYmplY3QgPSBKU09OLnBhcnNlKGFzc29jaWF0ZWRPYmplY3RTdHIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBhbGVydCgnWW91IGhhdmUgc3ludGF4IGVycm9yIGluIHRoZSBhc3NvY2lhdGVkIG9iamVjdCBzdHJ1Y3R1cmUuIENhbm5vdCBwYXJzZSBKU09OLicpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYWRBcGkuc3RhcnRDYWxsKHBob25lLCBhc3NvY2lhdGVkT2JqZWN0KTtcclxufTtcclxuc2V0dXBIb3ZlckVmZmVjdChzdGFydFNNU0NoYXRCdXR0b24sIFtwaG9uZU51bWJlcklucHV0XSk7XHJcbnN0YXJ0U01TQ2hhdEJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHBob25lID0gcGhvbmVOdW1iZXJJbnB1dC52YWx1ZTtcclxuICAgIHZhciBhc3NvY2lhdGVkT2JqZWN0ID0gdW5kZWZpbmVkO1xyXG4gICAgdmFyIGFzc29jaWF0ZWRPYmplY3RTdHIgPSBhc3NvY2lhdGVkT2JqZWN0VGV4dGFyZWEudmFsdWU7XHJcbiAgICBpZiAoYXNzb2NpYXRlZE9iamVjdFN0cikge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGFzc29jaWF0ZWRPYmplY3QgPSBKU09OLnBhcnNlKGFzc29jaWF0ZWRPYmplY3RTdHIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBhbGVydCgnWW91IGhhdmUgc3ludGF4IGVycm9yIGluIHRoZSBhc3NvY2lhdGVkIG9iamVjdCBzdHJ1Y3R1cmUuIENhbm5vdCBwYXJzZSBKU09OLicpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYWRBcGkuc3RhcnRTTVNDaGF0KHBob25lLCBhc3NvY2lhdGVkT2JqZWN0KTtcclxufTtcclxuc2V0dXBIb3ZlckVmZmVjdChzdGFydEVtYWlsQnV0dG9uLCBbZW1haWxBZGRyZXNzSW5wdXRdKTtcclxuc3RhcnRFbWFpbEJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHBob25lID0gZW1haWxBZGRyZXNzSW5wdXQudmFsdWU7XHJcbiAgICB2YXIgYXNzb2NpYXRlZE9iamVjdCA9IHVuZGVmaW5lZDtcclxuICAgIHZhciBhc3NvY2lhdGVkT2JqZWN0U3RyID0gYXNzb2NpYXRlZE9iamVjdFRleHRhcmVhLnZhbHVlO1xyXG4gICAgaWYgKGFzc29jaWF0ZWRPYmplY3RTdHIpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhc3NvY2lhdGVkT2JqZWN0ID0gSlNPTi5wYXJzZShhc3NvY2lhdGVkT2JqZWN0U3RyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ1lvdSBoYXZlIHN5bnRheCBlcnJvciBpbiB0aGUgYXNzb2NpYXRlZCBvYmplY3Qgc3RydWN0dXJlLiBDYW5ub3QgcGFyc2UgSlNPTi4nKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFkQXBpLnN0YXJ0RW1haWwocGhvbmUsIGFzc29jaWF0ZWRPYmplY3QpO1xyXG59O1xyXG5zZXR1cEhvdmVyRWZmZWN0KHRlcm1pbmF0ZUNhbGxCdXR0b24sIFtpbnRlcmFjdGlvbklkSW5wdXRdKTtcclxudGVybWluYXRlQ2FsbEJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGl0ZW1JZCA9IGludGVyYWN0aW9uSWRJbnB1dC52YWx1ZTtcclxuICAgIGFkQXBpLnRlcm1pbmF0ZUNhbGwoaXRlbUlkKTtcclxufTtcclxuc2V0dXBIb3ZlckVmZmVjdChjb21wbGV0ZUludGVyYWN0aW9uQnV0dG9uLCBbaW50ZXJhY3Rpb25JZElucHV0XSk7XHJcbmNvbXBsZXRlSW50ZXJhY3Rpb25CdXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBpdGVtSWQgPSBpbnRlcmFjdGlvbklkSW5wdXQudmFsdWU7XHJcbiAgICBhZEFwaS5jb21wbGV0ZUludGVyYWN0aW9uKGl0ZW1JZCk7XHJcbn07XHJcbnNldHVwSG92ZXJFZmZlY3Qoc3dpdGNoQWN0aXZlSW50ZXJhY3Rpb25CdXR0b24sIFtpbnRlcmFjdGlvbklkSW5wdXRdKTtcclxuc3dpdGNoQWN0aXZlSW50ZXJhY3Rpb25CdXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBpdGVtSWQgPSBpbnRlcmFjdGlvbklkSW5wdXQudmFsdWU7XHJcbiAgICBhZEFwaS5zd2l0Y2hBY3RpdmVJbnRlcmFjdGlvbihpdGVtSWQpO1xyXG59O1xyXG5zZXR1cEhvdmVyRWZmZWN0KGNoYW5nZVNlcnZpY2VCdXR0b24sIFtzZXJ2aWNlTmFtZUlucHV0XSk7XHJcbmNoYW5nZVNlcnZpY2VCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBzZXJ2aWNlTmFtZSA9IHNlcnZpY2VOYW1lSW5wdXQudmFsdWU7XHJcbiAgICBhZEFwaS5jaGFuZ2VTZXJ2aWNlKHNlcnZpY2VOYW1lKTtcclxufTtcclxuc2V0dXBIb3ZlckVmZmVjdChzZXREaXNwb3NpdGlvbkJ1dHRvbiwgW2Rpc3Bvc2l0aW9uTmFtZUlucHV0LCBkaXNwb3NpdGlvbkNvZGVJbnB1dCwgaW50ZXJhY3Rpb25JZElucHV0XSk7XHJcbnNldERpc3Bvc2l0aW9uQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZGlzcG9zaXRpb25OYW1lID0gZGlzcG9zaXRpb25OYW1lSW5wdXQudmFsdWU7XHJcbiAgICB2YXIgZGlzcG9zaXRpb25Db2RlID0gZGlzcG9zaXRpb25Db2RlSW5wdXQudmFsdWU7XHJcbiAgICB2YXIgaXRlbUlkID0gaW50ZXJhY3Rpb25JZElucHV0LnZhbHVlO1xyXG4gICAgYWRBcGkuc2V0RGlzcG9zaXRpb24oe1xyXG4gICAgICAgIGNvZGU6IGRpc3Bvc2l0aW9uQ29kZSxcclxuICAgICAgICBuYW1lOiBkaXNwb3NpdGlvbk5hbWUsXHJcbiAgICB9LCBpdGVtSWQpO1xyXG59O1xyXG5zZXR1cEhvdmVyRWZmZWN0KGdldENhbGxSZWNvcmRpbmdTdGF0dXNCdXR0b24sIFtpbnRlcmFjdGlvbklkSW5wdXRdKTtcclxuZ2V0Q2FsbFJlY29yZGluZ1N0YXR1c0J1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGl0ZW1JZCA9IGludGVyYWN0aW9uSWRJbnB1dC52YWx1ZTtcclxuICAgIGFkQXBpLmdldENhbGxSZWNvcmRpbmdTdGF0dXMoaXRlbUlkKTtcclxufTtcclxuc2V0dXBIb3ZlckVmZmVjdChzZXRDYWxsUmVjb3JkaW5nU3RhdHVzQnV0dG9uLCBbaW50ZXJhY3Rpb25JZElucHV0LCBjYWxsUmVjb3JkaW5nQ2hlY2tib3hdKTtcclxuc2V0Q2FsbFJlY29yZGluZ1N0YXR1c0J1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGl0ZW1JZCA9IGludGVyYWN0aW9uSWRJbnB1dC52YWx1ZTtcclxuICAgIHZhciBlbmFibGVSZWNvcmRpbmcgPSBjYWxsUmVjb3JkaW5nQ2hlY2tib3guY2hlY2tlZDtcclxuICAgIGFkQXBpLnNldENhbGxSZWNvcmRpbmdTdGF0dXMoZW5hYmxlUmVjb3JkaW5nLCBpdGVtSWQpO1xyXG59O1xyXG5zZXR1cEhvdmVyRWZmZWN0KGdldFNjcmVlblJlY29yZGluZ1N0YXR1c0J1dHRvbiwgW10pO1xyXG5nZXRTY3JlZW5SZWNvcmRpbmdTdGF0dXNCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGFkQXBpLmdldFNjcmVlblJlY29yZGluZ1N0YXR1cygpO1xyXG59O1xyXG5zZXR1cEhvdmVyRWZmZWN0KHNldFNjcmVlblJlY29yZGluZ1N0YXR1c0J1dHRvbiwgW3NjcmVlblJlY29yZGluZ0NoZWNrYm94XSk7XHJcbnNldFNjcmVlblJlY29yZGluZ1N0YXR1c0J1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGVuYWJsZVJlY29yZGluZyA9IHNjcmVlblJlY29yZGluZ0NoZWNrYm94LmNoZWNrZWQ7XHJcbiAgICBhZEFwaS5zZXRTY3JlZW5SZWNvcmRpbmdTdGF0dXMoZW5hYmxlUmVjb3JkaW5nKTtcclxufTtcclxuc2V0dXBIb3ZlckVmZmVjdChtdXRlQWxsQnV0dG9uLCBbbXV0ZVRhcmdldFNlbGVjdF0pO1xyXG5tdXRlQWxsQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbXV0ZVRhcmdldCA9IG11dGVUYXJnZXRTZWxlY3QudmFsdWU7XHJcbiAgICBhZEFwaS5tdXRlQWxsKG11dGVUYXJnZXQpO1xyXG59O1xyXG5zZXR1cEhvdmVyRWZmZWN0KHVubXV0ZUFsbEJ1dHRvbiwgW211dGVUYXJnZXRTZWxlY3RdKTtcclxudW5tdXRlQWxsQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbXV0ZVRhcmdldCA9IG11dGVUYXJnZXRTZWxlY3QudmFsdWU7XHJcbiAgICBhZEFwaS51bm11dGVBbGwobXV0ZVRhcmdldCk7XHJcbn07XHJcbnNldHVwSG92ZXJFZmZlY3Qoc2V0VmFyaWFibGVCdXR0b24sIFt2YXJpYWJsZU5hbWVJbnB1dCwgdmFyaWFibGVWYWx1ZUlucHV0LCBpbnRlcmFjdGlvbklkSW5wdXRdKTtcclxuc2V0VmFyaWFibGVCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVJbnB1dC52YWx1ZTtcclxuICAgIHZhciB2YXJpYWJsZVZhbHVlID0gdmFyaWFibGVWYWx1ZUlucHV0LnZhbHVlO1xyXG4gICAgdmFyIGl0ZW1JZCA9IGludGVyYWN0aW9uSWRJbnB1dC52YWx1ZTtcclxuICAgIGFkQXBpLnNldFZhcmlhYmxlKHZhcmlhYmxlTmFtZSwgdmFyaWFibGVWYWx1ZSwgaXRlbUlkKTtcclxufTtcclxuc2V0dXBIb3ZlckVmZmVjdChnZXRDb25maWdCdXR0b24sIFtdKTtcclxuZ2V0Q29uZmlnQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBhZEFwaS5nZXRDb25maWcoKTtcclxufTtcclxuc2V0dXBIb3ZlckVmZmVjdChub3RpZnlXaWRnZXRNaW5pbWl6ZWRCdXR0b24sIFtdKTtcclxubm90aWZ5V2lkZ2V0TWluaW1pemVkQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBhZEFwaS5ub3RpZnlXaWRnZXRNaW5pbWl6ZWQoKTtcclxufTtcclxuc2V0dXBIb3ZlckVmZmVjdChub3RpZnlXaWRnZXRNYXhpbWl6ZWRCdXR0b24sIFtdKTtcclxubm90aWZ5V2lkZ2V0TWF4aW1pemVkQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBhZEFwaS5ub3RpZnlXaWRnZXRNYXhpbWl6ZWQoKTtcclxufTtcclxuc2V0dXBIb3ZlckVmZmVjdChhZGRJbnRlcmFjdGlvbkFzc29jaWF0ZWRPYmplY3RCdXR0b24sIFthc3NvY2lhdGVkT2JqZWN0VGV4dGFyZWEsIGludGVyYWN0aW9uSWRJbnB1dF0pO1xyXG5hZGRJbnRlcmFjdGlvbkFzc29jaWF0ZWRPYmplY3RCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBhc3NvY2lhdGVkT2JqZWN0ID0gbnVsbDtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXNzb2NpYXRlZE9iamVjdCA9IEpTT04ucGFyc2UoYXNzb2NpYXRlZE9iamVjdFRleHRhcmVhLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgYWxlcnQoJ1lvdSBoYXZlIHN5bnRheCBlcnJvciBpbiB0aGUgYXNzb2NpYXRlZCBvYmplY3Qgc3RydWN0dXJlLiBDYW5ub3QgcGFyc2UgSlNPTi4nKTtcclxuICAgIH1cclxuICAgIGlmICghYXNzb2NpYXRlZE9iamVjdCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBpdGVtSWQgPSBpbnRlcmFjdGlvbklkSW5wdXQudmFsdWU7XHJcbiAgICBhZEFwaS5hZGRJbnRlcmFjdGlvbkFzc29jaWF0ZWRPYmplY3QoYXNzb2NpYXRlZE9iamVjdCwgaXRlbUlkKTtcclxufTtcclxuc2V0dXBIb3ZlckVmZmVjdChzZXRJbnRlcmFjdGlvbkFjdGl2ZVNjcmVlbkJ1dHRvbiwgW2FjdGl2ZVNjcmVlblRleHRhcmVhLCBpbnRlcmFjdGlvbklkSW5wdXRdKTtcclxuc2V0SW50ZXJhY3Rpb25BY3RpdmVTY3JlZW5CdXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBhY3RpdmVTY3JlZW5EYXRhID0gbnVsbDtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYWN0aXZlU2NyZWVuRGF0YSA9IEpTT04ucGFyc2UoYWN0aXZlU2NyZWVuVGV4dGFyZWEudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICBhbGVydCgnWW91IGhhdmUgc3ludGF4IGVycm9yIGluIHRoZSBhY3RpdmUgc2NyZWVuIGRhdGEgc3RydWN0dXJlLiBDYW5ub3QgcGFyc2UgSlNPTi4nKTtcclxuICAgIH1cclxuICAgIGlmICghYWN0aXZlU2NyZWVuRGF0YSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBpdGVtSWQgPSBpbnRlcmFjdGlvbklkSW5wdXQudmFsdWU7XHJcbiAgICBhZEFwaS5zZXRJbnRlcmFjdGlvbkFjdGl2ZVNjcmVlbihhY3RpdmVTY3JlZW5EYXRhLCBpdGVtSWQpO1xyXG59O1xyXG5hZEFwaS5vbignUkVRVUVTVF9UUkFOU0ZFUl9EQVRBJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHRyYW5zZmVyRGF0YSA9IG51bGw7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHRyYW5zZmVyRGF0YSA9IEpTT04ucGFyc2UodHJhbnNmZXJEYXRhVGV4dGFyZWEudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICBhbGVydCgnWW91IGhhdmUgc3ludGF4IGVycm9yIGluIHRoZSB0cmFuc2ZlciBkYXRhIHN0cnVjdHVyZS4gQ2Fubm90IHBhcnNlIEpTT04uJyk7XHJcbiAgICB9XHJcbiAgICBpZiAoIXRyYW5zZmVyRGF0YSkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRyYW5zZmVyRGF0YTtcclxufSk7XHJcbmFkQXBpLm9uKCdTRUFSQ0hfS05PV0xFREdFX0JBU0UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgc2VhcmNoS2JSZXN1bHQgPSBudWxsO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBzZWFyY2hLYlJlc3VsdCA9IEpTT04ucGFyc2Uoc2VhcmNoS0JSZXN1bHRUZXh0YXJlYS52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIGFsZXJ0KCdZb3UgaGF2ZSBzeW50YXggZXJyb3IgaW4gdGhlIEtCIHNlYXJjaCByZXN1bHRzIGRhdGEgc3RydWN0dXJlLiBDYW5ub3QgcGFyc2UgSlNPTi4nKTtcclxuICAgIH1cclxuICAgIGlmICghc2VhcmNoS2JSZXN1bHQpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHJldHVybiBzZWFyY2hLYlJlc3VsdDtcclxufSk7XHJcbmFkQXBpLm9uKCdHRVRfS05PV0xFREdFX0JBU0VfQVJUSUNMRScsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBrYkFydGljbGVEdWxsRGF0YSA9IG51bGw7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGtiQXJ0aWNsZUR1bGxEYXRhID0gSlNPTi5wYXJzZShrYkFydGljbGVGdWxsRGF0YVRleHRhcmVhLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgYWxlcnQoJ1lvdSBoYXZlIHN5bnRheCBlcnJvciBpbiB0aGUgS0IgQXJ0aWNsZSBkYXRhIHN0cnVjdHVyZS4gQ2Fubm90IHBhcnNlIEpTT04uJyk7XHJcbiAgICB9XHJcbiAgICBpZiAoIWtiQXJ0aWNsZUR1bGxEYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ga2JBcnRpY2xlRHVsbERhdGE7XHJcbn0pO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgZXh0cmFjdFVSTFBhcmFtcyA9IGZ1bmN0aW9uICh1cmwpIHtcclxuICAgIHZhciBwYXJhbXNNYXAgPSB7fTtcclxuICAgIGlmICh1cmwpIHtcclxuICAgICAgICB2YXIgcGFyYW1VcmwgPSB1cmwuc3BsaXQoJz8nKS5zbGljZSgxKS5qb2luKCc/Jyk7XHJcbiAgICAgICAgaWYgKHBhcmFtVXJsLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB2YXIgcGFyYW1zID0gcGFyYW1Vcmwuc3BsaXQoJyYnKTtcclxuICAgICAgICAgICAgcGFyYW1zLnJlZHVjZShmdW5jdGlvbiAocGFyYW1NYXAsIHBhcmFtKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3BsaXRzID0gcGFyYW0uc3BsaXQoJz0nKTtcclxuICAgICAgICAgICAgICAgIGlmIChzcGxpdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5hbWVfMSA9IGRlY29kZVVSSUNvbXBvbmVudChzcGxpdHMuc2hpZnQoKSksIHZhbHVlID0gZGVjb2RlVVJJQ29tcG9uZW50KHNwbGl0cy5qb2luKCc9JykpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtTWFwW25hbWVfMV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJhbU1hcDtcclxuICAgICAgICAgICAgfSwgcGFyYW1zTWFwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFyYW1zTWFwO1xyXG59O1xyXG52YXIgcmFuZG9tTGFiZWwgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoNyk7IH07XHJcbnZhciBnZW5lcmF0ZVJhbmRvbVVJRCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpLnN1YnN0cmluZygyKTsgfTtcclxudmFyIGNhcGl0YWxpemUgPSBmdW5jdGlvbiAoc3RyKSB7IHJldHVybiBzdHIucmVwbGFjZSgvXlxcdy8sIGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLnRvVXBwZXJDYXNlKCk7IH0pOyB9O1xyXG5mdW5jdGlvbiBmaW5kTGFzdChhcnJheSwgcHJlZGljYXRlKSB7XHJcbiAgICBmb3IgKHZhciBpID0gYXJyYXkubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICBpZiAocHJlZGljYXRlKGFycmF5W2ldKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXlbaV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuZnVuY3Rpb24gc2hhbGxvd09iakVxdWFsKG9iajEsIG9iajIpIHtcclxuICAgIGZvciAodmFyIGtleSBpbiBvYmoxKSB7XHJcbiAgICAgICAgaWYgKCEoa2V5IGluIG9iajIpIHx8IG9iajFba2V5XSAhPT0gb2JqMltrZXldKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqMikge1xyXG4gICAgICAgIGlmICghKGtleSBpbiBvYmoxKSB8fCBvYmoyW2tleV0gIT09IG9iajFba2V5XSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxudmFyIHdhaXRSZXNvbHZlQWxsID0gZnVuY3Rpb24gKHRhcmdldHMpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgdmFyIG51bWJlck9mUmVzb2x2ZWQgPSAwO1xyXG4gICAgICAgIHZhciByZXN1bHRzID0gbmV3IEFycmF5KHRhcmdldHMubGVuZ3RoKTtcclxuICAgICAgICB0YXJnZXRzXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHRhcmdldCkgeyByZXR1cm4gKHRhcmdldCBpbnN0YW5jZW9mIFByb21pc2UgPyB0YXJnZXQgOiBQcm9taXNlLnJlc29sdmUodGFyZ2V0KSk7IH0pLmZvckVhY2goZnVuY3Rpb24gKHRhcmdldFByb21pc2UsIGluZGV4KSB7XHJcbiAgICAgICAgICAgIHRhcmdldFByb21pc2VcclxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0c1tpbmRleF0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnZnVsZmlsbGVkJyxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChyZWFzb24pIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdHNbaW5kZXhdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ3JlamVjdGVkJyxcclxuICAgICAgICAgICAgICAgICAgICByZWFzb246IHJlYXNvbixcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuZmluYWxseShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBudW1iZXJPZlJlc29sdmVkKys7XHJcbiAgICAgICAgICAgICAgICBpZiAobnVtYmVyT2ZSZXNvbHZlZCA9PT0gdGFyZ2V0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdHMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5leHBvcnRzLnV0aWxzID0ge1xyXG4gICAgZXh0cmFjdFVSTFBhcmFtczogZXh0cmFjdFVSTFBhcmFtcyxcclxuICAgIHJhbmRvbUxhYmVsOiByYW5kb21MYWJlbCxcclxuICAgIGdlbmVyYXRlUmFuZG9tVUlEOiBnZW5lcmF0ZVJhbmRvbVVJRCxcclxuICAgIGNhcGl0YWxpemU6IGNhcGl0YWxpemUsXHJcbiAgICBmaW5kTGFzdDogZmluZExhc3QsXHJcbiAgICBzaGFsbG93T2JqRXF1YWw6IHNoYWxsb3dPYmpFcXVhbCxcclxuICAgIHdhaXRSZXNvbHZlQWxsOiB3YWl0UmVzb2x2ZUFsbCxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==