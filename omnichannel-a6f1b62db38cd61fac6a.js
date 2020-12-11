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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./src/integrations/omnichannel/index.ts":
/*!***********************************************!*\
  !*** ./src/integrations/omnichannel/index.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var integration_1 = __webpack_require__(/*! ./integration */ "./src/integrations/omnichannel/integration.ts");
integration_1.registerOmnichannelIntegration();


/***/ }),

/***/ "./src/integrations/omnichannel/integration.ts":
/*!*****************************************************!*\
  !*** ./src/integrations/omnichannel/integration.ts ***!
  \*****************************************************/
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
var loadExternalApi_1 = __webpack_require__(/*! ../msdyn365/loadExternalApi */ "./src/integrations/msdyn365/loadExternalApi.ts");
var integrationKey = 'omnichannel';
var activityDataKeyMap = {
    description: 'description',
    interactionId: 'bpattern_interaction_id',
    globalInteractionId: 'bpattern_global_interaction_id',
    // service: 'bpattern_service',
    disposition: 'bpattern_disposition',
    // recordingUrl: 'bpattern_recording_url',
    callDirection: 'directioncode',
    // DNIS: 'bpattern_dnis',
    // transferANI: 'bpattern_ani',
    phoneNumber: 'phonenumber',
    startTime: 'actualstart',
    endTime: 'actualend',
    duration: 'actualdurationminutes',
};
var activityDataTransformValueMap = {
    callDirection: function (direction) { return (direction === 'outbound' ? true : false); },
};
var activityTypeToTableNameMap = {
    'voice': 'phonecall',
    'chat': 'bpattern_messaging_session',
    'email': 'email',
};
var maxGetObjectAttempts = 10;
var Session = /** @class */ (function () {
    function Session(sessionId, interactionId) {
        this.objectList = [];
        this.selectedObjects = [];
        this.urlHistory = [];
        this.sessionId = sessionId;
        this.interactionId = interactionId;
    }
    return Session;
}());
exports.registerOmnichannelIntegration = function () {
    var adApi = new window.brightpattern.AdApi(integrationKey);
    var sessions = [];
    // sync with Agent Desktop interaction
    // not with Omnichannel session
    var currentSession;
    loadExternalApi_1.loadCrmApi.then(function () {
        console.log('###INITIALIZE');
        var cif = window.Microsoft.CIFramework;
        console.log('$ window.Microsoft: ', window.Microsoft);
        var screenPop = function (objectType, objectId) { return __awaiter(void 0, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('#SCREEN-POP (CREATE-TAB)');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, cif.createTab({
                                templateName: 'entityrecord',
                                templateParameters: {
                                    entityName: objectType,
                                    entityId: objectId,
                                },
                                isFocused: true,
                            })];
                    case 2:
                        result = _a.sent();
                        console.log('#Result: ', result);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error('#ERROR-SCREEN-POP: ', e_1.message);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        var createRecord = function (activityType, activityData) { return __awaiter(void 0, void 0, void 0, function () {
            var tableName, data;
            return __generator(this, function (_a) {
                tableName = activityTypeToTableNameMap[activityType];
                data = {};
                Object.entries(activityData).forEach(function (_a) {
                    var key = _a[0], value = _a[1];
                    var tableKey = activityDataKeyMap[key] || key;
                    var tableValue = (activityDataTransformValueMap[key] ?
                        activityDataTransformValueMap[key](value) :
                        value);
                    data[tableKey] = tableValue;
                });
                return [2 /*return*/, cif.createRecord(tableName, JSON.stringify(data))];
            });
        }); };
        var saveActivityForEntity = function (entityId, metadata, activityType, activityData) { return __awaiter(void 0, void 0, void 0, function () {
            var phoneCallRef, entitySetName, entityLogicalName, oneToManyRel, name_1, key, value, key, value;
            return __generator(this, function (_a) {
                console.log('#METADATA: ', metadata);
                entitySetName = metadata.EntitySetName, entityLogicalName = metadata.LogicalName, oneToManyRel = metadata.OneToManyRelationships;
                if (oneToManyRel && oneToManyRel._collection) {
                    try {
                        phoneCallRef = oneToManyRel._collection.find(function (item) {
                            var entity = item.ReferencingEntity, attribute = item.ReferencingAttribute, tableName = activityTypeToTableNameMap[activityType];
                            return entity === tableName && attribute === 'regardingobjectid';
                        });
                    }
                    catch (e) {
                        console.log('#Error in the potentially dangerous place!');
                    }
                }
                if (entitySetName && phoneCallRef) {
                    name_1 = phoneCallRef.ReferencingEntityNavigationPropertyName, key = name_1 + "@odata.bind", value = "/" + entitySetName + "(" + entityId + ")" // like /contacts(2ede9029-985c-e911-a980-000d3a1cabce)
                    ;
                    activityData[key] = value;
                }
                else if (entityLogicalName) {
                    key = "regardingobjectid_" + entityLogicalName + "_phonecall@odata.bind", value = "/" + entitySetName + "(" + entityId + ")" // like /contacts(2ede9029-985c-e911-a980-000d3a1cabce)
                    ;
                    activityData[key] = value;
                }
                else {
                    console.warn('#regardingobjectid reference is note detected');
                }
                return [2 /*return*/, createRecord(activityType, activityData)];
            });
        }); };
        var saveActivity = function (data) { return __awaiter(void 0, void 0, void 0, function () {
            var envStr, env, metadataStr, metadata, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('#ON-SAVE-ACTIVITY-HANDLER: ', data);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, cif.getEnvironment()];
                    case 2:
                        envStr = _a.sent(), env = JSON.parse(envStr);
                        if (!env.etn) return [3 /*break*/, 4];
                        return [4 /*yield*/, cif.getEntityMetadata(env.etn)];
                    case 3:
                        metadataStr = _a.sent(), metadata = JSON.parse(metadataStr);
                        saveActivityForEntity(env.id, metadata, data.type, data);
                        return [3 /*break*/, 5];
                    case 4:
                        createRecord(data.type, data);
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        e_2 = _a.sent();
                        createRecord(data.type, data);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        }); };
        var listenedEnv = '';
        var getObjectDataFromEnv = function () { return __awaiter(void 0, void 0, void 0, function () {
            var rememberUrl;
            return __generator(this, function (_a) {
                rememberUrl = listenedEnv;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var attempt = 1;
                        var tryGetObjectDataFromEnv = function () { return __awaiter(void 0, void 0, void 0, function () {
                            var envStr, env, entityDataStr, entityData, displayName, metadataStr, metadata;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (listenedEnv !== rememberUrl) {
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
                                        if (!(env.id && env.etn)) return [3 /*break*/, 4];
                                        return [4 /*yield*/, cif.retrieveRecord(env.etn, env.id)];
                                    case 2:
                                        entityDataStr = _a.sent(), entityData = JSON.parse(entityDataStr);
                                        console.log('#obj-entity: ', entityData);
                                        displayName = entityData.title ||
                                            entityData.fullname ||
                                            entityData.name ||
                                            '';
                                        return [4 /*yield*/, cif.getEntityMetadata(env.etn)];
                                    case 3:
                                        metadataStr = _a.sent(), metadata = JSON.parse(metadataStr);
                                        console.log('#entity-metadata: ', metadata);
                                        if (currentSession) {
                                            currentSession.objectList.push({
                                                objectId: env.id,
                                                objectType: env.etn,
                                                displayName: displayName,
                                            });
                                        }
                                        resolve();
                                        return [3 /*break*/, 5];
                                    case 4:
                                        attempt++;
                                        if (attempt > maxGetObjectAttempts) {
                                            reject('ERROR: Can\'t get CRM entity data');
                                        }
                                        else {
                                            setTimeout(tryGetObjectDataFromEnv, 1000);
                                        }
                                        _a.label = 5;
                                    case 5: return [2 /*return*/];
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
                data = JSON.parse(dataStr);
                console.log('#NAVIGATION: ', data);
                if (currentSession) {
                    currentSession.urlHistory.push(data.value);
                }
                listenedEnv = data.value;
                // getObjectDataFromEnv();
                return [2 /*return*/, Promise.resolve()];
            });
        }); });
        cif.addHandler('onclicktoact', function (dataStr) { return __awaiter(void 0, void 0, void 0, function () {
            var data, sessionId, _a, entityDataStr, entityData, interactionData, newSession, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        data = JSON.parse(dataStr);
                        console.log('#CLICK-TO-ACT: ', data);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 10, , 11]);
                        return [4 /*yield*/, cif.createSession({
                                templateName: 'bpo_call_session',
                                templateParameters: {
                                    'omnichannel_customer360': {
                                        entityId: data.entityId,
                                        entityName: data.entityLogicalName,
                                    },
                                },
                            })];
                    case 2:
                        sessionId = _b.sent();
                        console.log('#SESSION ID: ', sessionId);
                        cif.setWidth(500);
                        _a = data.format;
                        switch (_a) {
                            case 'Phone': return [3 /*break*/, 3];
                            case 'Email': return [3 /*break*/, 6];
                            case 'SMS': return [3 /*break*/, 7];
                        }
                        return [3 /*break*/, 8];
                    case 3:
                        console.log('#CLICK-TO-CALL');
                        return [4 /*yield*/, cif.retrieveRecord(data.entityLogicalName, data.entityId)];
                    case 4:
                        entityDataStr = _b.sent(), entityData = JSON.parse(entityDataStr);
                        console.log('#entity: ', entityData);
                        cif.setSessionTitle({
                            sessionId: sessionId,
                            customer: entityData.fullname,
                        });
                        return [4 /*yield*/, adApi.startCall(data.value)];
                    case 5:
                        interactionData = _b.sent();
                        console.log('### INTERACTION DATA:', interactionData);
                        cif.setAgentPresence('busy');
                        newSession = new Session(sessionId, interactionData.data.interactionId);
                        sessions.push(newSession);
                        currentSession = newSession;
                        listenedEnv = 'pseudo-click-to-call-url';
                        // getObjectDataFromEnv();
                        return [3 /*break*/, 9];
                    case 6:
                        {
                            console.log('#CLICK-TO-EMAIL');
                            return [3 /*break*/, 9];
                        }
                        _b.label = 7;
                    case 7:
                        {
                            console.log('#CLICK-TO-SMS');
                            return [3 /*break*/, 9];
                        }
                        _b.label = 8;
                    case 8:
                        console.log('#Unknown Click-to-act format');
                        return [3 /*break*/, 9];
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        err_1 = _b.sent();
                        console.log('#c-t-a ERR: ', err_1);
                        return [3 /*break*/, 11];
                    case 11: return [2 /*return*/, Promise.resolve()];
                }
            });
        }); });
        adApi.on('ACTIVE_INTERACTION_SWITCHED', function (activeInteractionId) {
            console.log('# Interaction switched handler, id: ', activeInteractionId);
            console.log('# sessions:', sessions);
            var correlatedSession = sessions.find(function (ses) { return ses.interactionId === activeInteractionId; });
            if (correlatedSession) {
                if (currentSession !== correlatedSession) {
                    currentSession = correlatedSession;
                    console.log('# REQUEST FOCUS SESSION');
                    cif.requestFocusSession(correlatedSession.sessionId);
                }
            }
            else {
                currentSession = null;
            }
        });
        adApi.on('INTERACTION_REMOVED', function (data) {
            console.log('### SAVE ACTIVITY!');
        });
        cif.addHandler('onSessionSwitched', function (dataStr) { return __awaiter(void 0, void 0, void 0, function () {
            var data, session, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = JSON.parse(dataStr);
                        console.log('### ON-SESSION-SWITCHED: ', data);
                        console.log('### current session: ', currentSession ? currentSession.sessionId : 'NO');
                        if (!(data.focused && currentSession && currentSession.sessionId !== data.sessionId)) return [3 /*break*/, 3];
                        session = sessions.find(function (ses) { return ses.sessionId === data.sessionId; });
                        if (!session) return [3 /*break*/, 2];
                        console.log('#call switchActiveInteraction (middle) for session: ', session);
                        return [4 /*yield*/, adApi.switchActiveInteraction(session.interactionId)];
                    case 1:
                        result = _a.sent();
                        if (result.status === 'success') {
                            currentSession = session;
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        console.error('### SMTHG GOES WRONG');
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
        cif.addHandler('onSessionClosed', function (dataStr) { return __awaiter(void 0, void 0, void 0, function () {
            var data, session, result, delIndex;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = JSON.parse(dataStr);
                        console.log('### ON-SESSION-CLOSED: ', data);
                        session = sessions.find(function (ses) { return ses.sessionId === data.sessionId; });
                        if (!session) return [3 /*break*/, 2];
                        return [4 /*yield*/, adApi.completeInteraction(session.interactionId)];
                    case 1:
                        result = _a.sent();
                        if (result.status === 'success') {
                            delIndex = sessions.indexOf(session);
                            sessions.splice(delIndex, 1);
                            if (currentSession === session) {
                                if (sessions.length) {
                                    currentSession = sessions[sessions.length - 1];
                                }
                                else {
                                    currentSession = null;
                                }
                            }
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); });
    });
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


/***/ }),

/***/ 2:
/*!*****************************************************!*\
  !*** multi ./src/integrations/omnichannel/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Dev\Documents\projects\ServicePattern\Web\agent\packages\adapters\src\integrations\omnichannel\index.ts */"./src/integrations/omnichannel/index.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVncmF0aW9ucy9tc2R5bjM2NS9sb2FkRXh0ZXJuYWxBcGkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ludGVncmF0aW9ucy9vbW5pY2hhbm5lbC9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW50ZWdyYXRpb25zL29tbmljaGFubmVsL2ludGVncmF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsY0FBYyxtQkFBTyxDQUFDLHlDQUFhO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJvbW5pY2hhbm5lbC1hNmYxYjYyZGIzOGNkNjFmYWM2YS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2FnZW50L2NvbW11bmljYXRvci9hZGFwdGVycy9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vLi4vdXRpbHNcIik7XHJcbnZhciBDUk1fRE9NQUlOX1BBUkFNRVRFUl9OQU1FID0gJ2NybURvbWFpbic7XHJcbnZhciB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZiwgcGFyYW1zID0gdXRpbHNfMS51dGlscy5leHRyYWN0VVJMUGFyYW1zKHVybCk7XHJcbnZhciBjcm1Eb21haW4gPSBwYXJhbXNbQ1JNX0RPTUFJTl9QQVJBTUVURVJfTkFNRV07XHJcbmlmICghY3JtRG9tYWluLnN0YXJ0c1dpdGgoJ2h0dHBzOi8vJykpIHtcclxuICAgIGNybURvbWFpbiA9ICdodHRwczovLycgKyBjcm1Eb21haW47XHJcbn1cclxuZXhwb3J0cy5sb2FkQ3JtQXBpID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgaWYgKCFjcm1Eb21haW4pIHtcclxuICAgICAgICByZWplY3QoJ01pc3NpbmcgcmVxdWlyZWQgVVJMIHBhcmFtZXRlciBcXCdjcm1Eb21haW5cXCcnKTtcclxuICAgIH1cclxuICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICAgIGRvY3VtZW50LmhlYWQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmVlbmQnLCBzY3JpcHQpO1xyXG4gICAgc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCByZXNvbHZlKTtcclxuICAgIHNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIHJlamVjdCk7XHJcbiAgICBzY3JpcHQuZGF0YXNldC5jcm11cmwgPSBjcm1Eb21haW47XHJcbiAgICBzY3JpcHQuZGF0YXNldC5jaWZpZCA9ICdDSUZNYWluTGlicmFyeSc7XHJcbiAgICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xyXG4gICAgc2NyaXB0LnNyYyA9IGNybURvbWFpbiArICcvd2VicmVzb3VyY2VzL1dpZGdldC9tc2R5bl9jaUxpYnJhcnkuanMnO1xyXG59KTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGludGVncmF0aW9uXzEgPSByZXF1aXJlKFwiLi9pbnRlZ3JhdGlvblwiKTtcclxuaW50ZWdyYXRpb25fMS5yZWdpc3Rlck9tbmljaGFubmVsSW50ZWdyYXRpb24oKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBsb2FkRXh0ZXJuYWxBcGlfMSA9IHJlcXVpcmUoXCIuLi9tc2R5bjM2NS9sb2FkRXh0ZXJuYWxBcGlcIik7XHJcbnZhciBpbnRlZ3JhdGlvbktleSA9ICdvbW5pY2hhbm5lbCc7XHJcbnZhciBhY3Rpdml0eURhdGFLZXlNYXAgPSB7XHJcbiAgICBkZXNjcmlwdGlvbjogJ2Rlc2NyaXB0aW9uJyxcclxuICAgIGludGVyYWN0aW9uSWQ6ICdicGF0dGVybl9pbnRlcmFjdGlvbl9pZCcsXHJcbiAgICBnbG9iYWxJbnRlcmFjdGlvbklkOiAnYnBhdHRlcm5fZ2xvYmFsX2ludGVyYWN0aW9uX2lkJyxcclxuICAgIC8vIHNlcnZpY2U6ICdicGF0dGVybl9zZXJ2aWNlJyxcclxuICAgIGRpc3Bvc2l0aW9uOiAnYnBhdHRlcm5fZGlzcG9zaXRpb24nLFxyXG4gICAgLy8gcmVjb3JkaW5nVXJsOiAnYnBhdHRlcm5fcmVjb3JkaW5nX3VybCcsXHJcbiAgICBjYWxsRGlyZWN0aW9uOiAnZGlyZWN0aW9uY29kZScsXHJcbiAgICAvLyBETklTOiAnYnBhdHRlcm5fZG5pcycsXHJcbiAgICAvLyB0cmFuc2ZlckFOSTogJ2JwYXR0ZXJuX2FuaScsXHJcbiAgICBwaG9uZU51bWJlcjogJ3Bob25lbnVtYmVyJyxcclxuICAgIHN0YXJ0VGltZTogJ2FjdHVhbHN0YXJ0JyxcclxuICAgIGVuZFRpbWU6ICdhY3R1YWxlbmQnLFxyXG4gICAgZHVyYXRpb246ICdhY3R1YWxkdXJhdGlvbm1pbnV0ZXMnLFxyXG59O1xyXG52YXIgYWN0aXZpdHlEYXRhVHJhbnNmb3JtVmFsdWVNYXAgPSB7XHJcbiAgICBjYWxsRGlyZWN0aW9uOiBmdW5jdGlvbiAoZGlyZWN0aW9uKSB7IHJldHVybiAoZGlyZWN0aW9uID09PSAnb3V0Ym91bmQnID8gdHJ1ZSA6IGZhbHNlKTsgfSxcclxufTtcclxudmFyIGFjdGl2aXR5VHlwZVRvVGFibGVOYW1lTWFwID0ge1xyXG4gICAgJ3ZvaWNlJzogJ3Bob25lY2FsbCcsXHJcbiAgICAnY2hhdCc6ICdicGF0dGVybl9tZXNzYWdpbmdfc2Vzc2lvbicsXHJcbiAgICAnZW1haWwnOiAnZW1haWwnLFxyXG59O1xyXG52YXIgbWF4R2V0T2JqZWN0QXR0ZW1wdHMgPSAxMDtcclxudmFyIFNlc3Npb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTZXNzaW9uKHNlc3Npb25JZCwgaW50ZXJhY3Rpb25JZCkge1xyXG4gICAgICAgIHRoaXMub2JqZWN0TGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPYmplY3RzID0gW107XHJcbiAgICAgICAgdGhpcy51cmxIaXN0b3J5ID0gW107XHJcbiAgICAgICAgdGhpcy5zZXNzaW9uSWQgPSBzZXNzaW9uSWQ7XHJcbiAgICAgICAgdGhpcy5pbnRlcmFjdGlvbklkID0gaW50ZXJhY3Rpb25JZDtcclxuICAgIH1cclxuICAgIHJldHVybiBTZXNzaW9uO1xyXG59KCkpO1xyXG5leHBvcnRzLnJlZ2lzdGVyT21uaWNoYW5uZWxJbnRlZ3JhdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBhZEFwaSA9IG5ldyB3aW5kb3cuYnJpZ2h0cGF0dGVybi5BZEFwaShpbnRlZ3JhdGlvbktleSk7XHJcbiAgICB2YXIgc2Vzc2lvbnMgPSBbXTtcclxuICAgIC8vIHN5bmMgd2l0aCBBZ2VudCBEZXNrdG9wIGludGVyYWN0aW9uXHJcbiAgICAvLyBub3Qgd2l0aCBPbW5pY2hhbm5lbCBzZXNzaW9uXHJcbiAgICB2YXIgY3VycmVudFNlc3Npb247XHJcbiAgICBsb2FkRXh0ZXJuYWxBcGlfMS5sb2FkQ3JtQXBpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCcjIyNJTklUSUFMSVpFJyk7XHJcbiAgICAgICAgdmFyIGNpZiA9IHdpbmRvdy5NaWNyb3NvZnQuQ0lGcmFtZXdvcms7XHJcbiAgICAgICAgY29uc29sZS5sb2coJyQgd2luZG93Lk1pY3Jvc29mdDogJywgd2luZG93Lk1pY3Jvc29mdCk7XHJcbiAgICAgICAgdmFyIHNjcmVlblBvcCA9IGZ1bmN0aW9uIChvYmplY3RUeXBlLCBvYmplY3RJZCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdCwgZV8xO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnI1NDUkVFTi1QT1AgKENSRUFURS1UQUIpJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgMywgLCA0XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGNpZi5jcmVhdGVUYWIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlTmFtZTogJ2VudGl0eXJlY29yZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVQYXJhbWV0ZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eU5hbWU6IG9iamVjdFR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkOiBvYmplY3RJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRm9jdXNlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyNSZXN1bHQ6ICcsIHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZV8xID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCcjRVJST1ItU0NSRUVOLVBPUDogJywgZV8xLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7IH07XHJcbiAgICAgICAgdmFyIGNyZWF0ZVJlY29yZCA9IGZ1bmN0aW9uIChhY3Rpdml0eVR5cGUsIGFjdGl2aXR5RGF0YSkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHRhYmxlTmFtZSwgZGF0YTtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgdGFibGVOYW1lID0gYWN0aXZpdHlUeXBlVG9UYWJsZU5hbWVNYXBbYWN0aXZpdHlUeXBlXTtcclxuICAgICAgICAgICAgICAgIGRhdGEgPSB7fTtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGFjdGl2aXR5RGF0YSkuZm9yRWFjaChmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0gX2FbMF0sIHZhbHVlID0gX2FbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhYmxlS2V5ID0gYWN0aXZpdHlEYXRhS2V5TWFwW2tleV0gfHwga2V5O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0YWJsZVZhbHVlID0gKGFjdGl2aXR5RGF0YVRyYW5zZm9ybVZhbHVlTWFwW2tleV0gP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpdml0eURhdGFUcmFuc2Zvcm1WYWx1ZU1hcFtrZXldKHZhbHVlKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhW3RhYmxlS2V5XSA9IHRhYmxlVmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBjaWYuY3JlYXRlUmVjb3JkKHRhYmxlTmFtZSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7IH07XHJcbiAgICAgICAgdmFyIHNhdmVBY3Rpdml0eUZvckVudGl0eSA9IGZ1bmN0aW9uIChlbnRpdHlJZCwgbWV0YWRhdGEsIGFjdGl2aXR5VHlwZSwgYWN0aXZpdHlEYXRhKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcGhvbmVDYWxsUmVmLCBlbnRpdHlTZXROYW1lLCBlbnRpdHlMb2dpY2FsTmFtZSwgb25lVG9NYW55UmVsLCBuYW1lXzEsIGtleSwgdmFsdWUsIGtleSwgdmFsdWU7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcjTUVUQURBVEE6ICcsIG1ldGFkYXRhKTtcclxuICAgICAgICAgICAgICAgIGVudGl0eVNldE5hbWUgPSBtZXRhZGF0YS5FbnRpdHlTZXROYW1lLCBlbnRpdHlMb2dpY2FsTmFtZSA9IG1ldGFkYXRhLkxvZ2ljYWxOYW1lLCBvbmVUb01hbnlSZWwgPSBtZXRhZGF0YS5PbmVUb01hbnlSZWxhdGlvbnNoaXBzO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9uZVRvTWFueVJlbCAmJiBvbmVUb01hbnlSZWwuX2NvbGxlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaG9uZUNhbGxSZWYgPSBvbmVUb01hbnlSZWwuX2NvbGxlY3Rpb24uZmluZChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVudGl0eSA9IGl0ZW0uUmVmZXJlbmNpbmdFbnRpdHksIGF0dHJpYnV0ZSA9IGl0ZW0uUmVmZXJlbmNpbmdBdHRyaWJ1dGUsIHRhYmxlTmFtZSA9IGFjdGl2aXR5VHlwZVRvVGFibGVOYW1lTWFwW2FjdGl2aXR5VHlwZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW50aXR5ID09PSB0YWJsZU5hbWUgJiYgYXR0cmlidXRlID09PSAncmVnYXJkaW5nb2JqZWN0aWQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyNFcnJvciBpbiB0aGUgcG90ZW50aWFsbHkgZGFuZ2Vyb3VzIHBsYWNlIScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChlbnRpdHlTZXROYW1lICYmIHBob25lQ2FsbFJlZikge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVfMSA9IHBob25lQ2FsbFJlZi5SZWZlcmVuY2luZ0VudGl0eU5hdmlnYXRpb25Qcm9wZXJ0eU5hbWUsIGtleSA9IG5hbWVfMSArIFwiQG9kYXRhLmJpbmRcIiwgdmFsdWUgPSBcIi9cIiArIGVudGl0eVNldE5hbWUgKyBcIihcIiArIGVudGl0eUlkICsgXCIpXCIgLy8gbGlrZSAvY29udGFjdHMoMmVkZTkwMjktOTg1Yy1lOTExLWE5ODAtMDAwZDNhMWNhYmNlKVxyXG4gICAgICAgICAgICAgICAgICAgIDtcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpdml0eURhdGFba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZW50aXR5TG9naWNhbE5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBrZXkgPSBcInJlZ2FyZGluZ29iamVjdGlkX1wiICsgZW50aXR5TG9naWNhbE5hbWUgKyBcIl9waG9uZWNhbGxAb2RhdGEuYmluZFwiLCB2YWx1ZSA9IFwiL1wiICsgZW50aXR5U2V0TmFtZSArIFwiKFwiICsgZW50aXR5SWQgKyBcIilcIiAvLyBsaWtlIC9jb250YWN0cygyZWRlOTAyOS05ODVjLWU5MTEtYTk4MC0wMDBkM2ExY2FiY2UpXHJcbiAgICAgICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2aXR5RGF0YVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJyNyZWdhcmRpbmdvYmplY3RpZCByZWZlcmVuY2UgaXMgbm90ZSBkZXRlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGNyZWF0ZVJlY29yZChhY3Rpdml0eVR5cGUsIGFjdGl2aXR5RGF0YSldO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTsgfTtcclxuICAgICAgICB2YXIgc2F2ZUFjdGl2aXR5ID0gZnVuY3Rpb24gKGRhdGEpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBlbnZTdHIsIGVudiwgbWV0YWRhdGFTdHIsIG1ldGFkYXRhLCBlXzI7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcjT04tU0FWRS1BQ1RJVklUWS1IQU5ETEVSOiAnLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCA2LCAsIDddKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgY2lmLmdldEVudmlyb25tZW50KCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW52U3RyID0gX2Euc2VudCgpLCBlbnYgPSBKU09OLnBhcnNlKGVudlN0cik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZW52LmV0bikgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGNpZi5nZXRFbnRpdHlNZXRhZGF0YShlbnYuZXRuKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YVN0ciA9IF9hLnNlbnQoKSwgbWV0YWRhdGEgPSBKU09OLnBhcnNlKG1ldGFkYXRhU3RyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUFjdGl2aXR5Rm9yRW50aXR5KGVudi5pZCwgbWV0YWRhdGEsIGRhdGEudHlwZSwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlUmVjb3JkKGRhdGEudHlwZSwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gNTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6IHJldHVybiBbMyAvKmJyZWFrKi8sIDddO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZV8yID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVSZWNvcmQoZGF0YS50eXBlLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgN107XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pOyB9O1xyXG4gICAgICAgIHZhciBsaXN0ZW5lZEVudiA9ICcnO1xyXG4gICAgICAgIHZhciBnZXRPYmplY3REYXRhRnJvbUVudiA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciByZW1lbWJlclVybDtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgcmVtZW1iZXJVcmwgPSBsaXN0ZW5lZEVudjtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhdHRlbXB0ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRyeUdldE9iamVjdERhdGFGcm9tRW52ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbnZTdHIsIGVudiwgZW50aXR5RGF0YVN0ciwgZW50aXR5RGF0YSwgZGlzcGxheU5hbWUsIG1ldGFkYXRhU3RyLCBtZXRhZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lZEVudiAhPT0gcmVtZW1iZXJVcmwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgY2lmLmdldEVudmlyb25tZW50KCldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnZTdHIgPSBfYS5zZW50KCksIGVudiA9IEpTT04ucGFyc2UoZW52U3RyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiI0VOVElUWS1FTlZJUk9OTUVOVCBBVFRFTVBUICNcIiArIGF0dGVtcHQgKyBcIjogXCIsIGVudik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZW52LmRhc2hib2FyZFR5cGUgfHwgKGVudi5wYWdldHlwZSAmJiBlbnYucGFnZXR5cGUgIT09ICdlbnRpdHlyZWNvcmQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShlbnYuaWQgJiYgZW52LmV0bikpIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgY2lmLnJldHJpZXZlUmVjb3JkKGVudi5ldG4sIGVudi5pZCldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlEYXRhU3RyID0gX2Euc2VudCgpLCBlbnRpdHlEYXRhID0gSlNPTi5wYXJzZShlbnRpdHlEYXRhU3RyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcjb2JqLWVudGl0eTogJywgZW50aXR5RGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZSA9IGVudGl0eURhdGEudGl0bGUgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlEYXRhLmZ1bGxuYW1lIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5RGF0YS5uYW1lIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBjaWYuZ2V0RW50aXR5TWV0YWRhdGEoZW52LmV0bildO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YVN0ciA9IF9hLnNlbnQoKSwgbWV0YWRhdGEgPSBKU09OLnBhcnNlKG1ldGFkYXRhU3RyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcjZW50aXR5LW1ldGFkYXRhOiAnLCBtZXRhZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFNlc3Npb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2Vzc2lvbi5vYmplY3RMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RJZDogZW52LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RUeXBlOiBlbnYuZXRuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogZGlzcGxheU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0ZW1wdCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dGVtcHQgPiBtYXhHZXRPYmplY3RBdHRlbXB0cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCgnRVJST1I6IENhblxcJ3QgZ2V0IENSTSBlbnRpdHkgZGF0YScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCh0cnlHZXRPYmplY3REYXRhRnJvbUVudiwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNTogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTsgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5R2V0T2JqZWN0RGF0YUZyb21FbnYoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pOyB9O1xyXG4gICAgICAgIGNpZi5hZGRIYW5kbGVyKCdvbnBhZ2VuYXZpZ2F0ZScsIGZ1bmN0aW9uIChkYXRhU3RyKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZGF0YTtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YVN0cik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnI05BVklHQVRJT046ICcsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTZXNzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFNlc3Npb24udXJsSGlzdG9yeS5wdXNoKGRhdGEudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGlzdGVuZWRFbnYgPSBkYXRhLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgLy8gZ2V0T2JqZWN0RGF0YUZyb21FbnYoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBQcm9taXNlLnJlc29sdmUoKV07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pOyB9KTtcclxuICAgICAgICBjaWYuYWRkSGFuZGxlcignb25jbGlja3RvYWN0JywgZnVuY3Rpb24gKGRhdGFTdHIpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhLCBzZXNzaW9uSWQsIF9hLCBlbnRpdHlEYXRhU3RyLCBlbnRpdHlEYXRhLCBpbnRlcmFjdGlvbkRhdGEsIG5ld1Nlc3Npb24sIGVycl8xO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhU3RyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyNDTElDSy1UTy1BQ1Q6ICcsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzEsIDEwLCAsIDExXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGNpZi5jcmVhdGVTZXNzaW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZU5hbWU6ICdicG9fY2FsbF9zZXNzaW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZVBhcmFtZXRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ29tbmljaGFubmVsX2N1c3RvbWVyMzYwJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5SWQ6IGRhdGEuZW50aXR5SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlOYW1lOiBkYXRhLmVudGl0eUxvZ2ljYWxOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uSWQgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcjU0VTU0lPTiBJRDogJywgc2Vzc2lvbklkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2lmLnNldFdpZHRoKDUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gZGF0YS5mb3JtYXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1Bob25lJzogcmV0dXJuIFszIC8qYnJlYWsqLywgM107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdFbWFpbCc6IHJldHVybiBbMyAvKmJyZWFrKi8sIDZdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnU01TJzogcmV0dXJuIFszIC8qYnJlYWsqLywgN107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgOF07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnI0NMSUNLLVRPLUNBTEwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgY2lmLnJldHJpZXZlUmVjb3JkKGRhdGEuZW50aXR5TG9naWNhbE5hbWUsIGRhdGEuZW50aXR5SWQpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eURhdGFTdHIgPSBfYi5zZW50KCksIGVudGl0eURhdGEgPSBKU09OLnBhcnNlKGVudGl0eURhdGFTdHIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnI2VudGl0eTogJywgZW50aXR5RGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNpZi5zZXRTZXNzaW9uVGl0bGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbklkOiBzZXNzaW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21lcjogZW50aXR5RGF0YS5mdWxsbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGFkQXBpLnN0YXJ0Q2FsbChkYXRhLnZhbHVlKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcmFjdGlvbkRhdGEgPSBfYi5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcjIyMgSU5URVJBQ1RJT04gREFUQTonLCBpbnRlcmFjdGlvbkRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaWYuc2V0QWdlbnRQcmVzZW5jZSgnYnVzeScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdTZXNzaW9uID0gbmV3IFNlc3Npb24oc2Vzc2lvbklkLCBpbnRlcmFjdGlvbkRhdGEuZGF0YS5pbnRlcmFjdGlvbklkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbnMucHVzaChuZXdTZXNzaW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFNlc3Npb24gPSBuZXdTZXNzaW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lZEVudiA9ICdwc2V1ZG8tY2xpY2stdG8tY2FsbC11cmwnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBnZXRPYmplY3REYXRhRnJvbUVudigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA5XTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcjQ0xJQ0stVE8tRU1BSUwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gNztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcjQ0xJQ0stVE8tU01TJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDg7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnI1Vua25vd24gQ2xpY2stdG8tYWN0IGZvcm1hdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA5XTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDk6IHJldHVybiBbMyAvKmJyZWFrKi8sIDExXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJfMSA9IF9iLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyNjLXQtYSBFUlI6ICcsIGVycl8xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMTFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTE6IHJldHVybiBbMiAvKnJldHVybiovLCBQcm9taXNlLnJlc29sdmUoKV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pOyB9KTtcclxuICAgICAgICBhZEFwaS5vbignQUNUSVZFX0lOVEVSQUNUSU9OX1NXSVRDSEVEJywgZnVuY3Rpb24gKGFjdGl2ZUludGVyYWN0aW9uSWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJyMgSW50ZXJhY3Rpb24gc3dpdGNoZWQgaGFuZGxlciwgaWQ6ICcsIGFjdGl2ZUludGVyYWN0aW9uSWQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnIyBzZXNzaW9uczonLCBzZXNzaW9ucyk7XHJcbiAgICAgICAgICAgIHZhciBjb3JyZWxhdGVkU2Vzc2lvbiA9IHNlc3Npb25zLmZpbmQoZnVuY3Rpb24gKHNlcykgeyByZXR1cm4gc2VzLmludGVyYWN0aW9uSWQgPT09IGFjdGl2ZUludGVyYWN0aW9uSWQ7IH0pO1xyXG4gICAgICAgICAgICBpZiAoY29ycmVsYXRlZFNlc3Npb24pIHtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U2Vzc2lvbiAhPT0gY29ycmVsYXRlZFNlc3Npb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2Vzc2lvbiA9IGNvcnJlbGF0ZWRTZXNzaW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcjIFJFUVVFU1QgRk9DVVMgU0VTU0lPTicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNpZi5yZXF1ZXN0Rm9jdXNTZXNzaW9uKGNvcnJlbGF0ZWRTZXNzaW9uLnNlc3Npb25JZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U2Vzc2lvbiA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBhZEFwaS5vbignSU5URVJBQ1RJT05fUkVNT1ZFRCcsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCcjIyMgU0FWRSBBQ1RJVklUWSEnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjaWYuYWRkSGFuZGxlcignb25TZXNzaW9uU3dpdGNoZWQnLCBmdW5jdGlvbiAoZGF0YVN0cikgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGRhdGEsIHNlc3Npb24sIHJlc3VsdDtcclxuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YVN0cik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcjIyMgT04tU0VTU0lPTi1TV0lUQ0hFRDogJywgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcjIyMgY3VycmVudCBzZXNzaW9uOiAnLCBjdXJyZW50U2Vzc2lvbiA/IGN1cnJlbnRTZXNzaW9uLnNlc3Npb25JZCA6ICdOTycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShkYXRhLmZvY3VzZWQgJiYgY3VycmVudFNlc3Npb24gJiYgY3VycmVudFNlc3Npb24uc2Vzc2lvbklkICE9PSBkYXRhLnNlc3Npb25JZCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uID0gc2Vzc2lvbnMuZmluZChmdW5jdGlvbiAoc2VzKSB7IHJldHVybiBzZXMuc2Vzc2lvbklkID09PSBkYXRhLnNlc3Npb25JZDsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2Vzc2lvbikgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcjY2FsbCBzd2l0Y2hBY3RpdmVJbnRlcmFjdGlvbiAobWlkZGxlKSBmb3Igc2Vzc2lvbjogJywgc2Vzc2lvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGFkQXBpLnN3aXRjaEFjdGl2ZUludGVyYWN0aW9uKHNlc3Npb24uaW50ZXJhY3Rpb25JZCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2Vzc2lvbiA9IHNlc3Npb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCcjIyMgU01USEcgR09FUyBXUk9ORycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzIgLypyZXR1cm4qL107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pOyB9KTtcclxuICAgICAgICBjaWYuYWRkSGFuZGxlcignb25TZXNzaW9uQ2xvc2VkJywgZnVuY3Rpb24gKGRhdGFTdHIpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhLCBzZXNzaW9uLCByZXN1bHQsIGRlbEluZGV4O1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhU3RyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyMjIyBPTi1TRVNTSU9OLUNMT1NFRDogJywgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb24gPSBzZXNzaW9ucy5maW5kKGZ1bmN0aW9uIChzZXMpIHsgcmV0dXJuIHNlcy5zZXNzaW9uSWQgPT09IGRhdGEuc2Vzc2lvbklkOyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzZXNzaW9uKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgYWRBcGkuY29tcGxldGVJbnRlcmFjdGlvbihzZXNzaW9uLmludGVyYWN0aW9uSWQpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsSW5kZXggPSBzZXNzaW9ucy5pbmRleE9mKHNlc3Npb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbnMuc3BsaWNlKGRlbEluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U2Vzc2lvbiA9PT0gc2Vzc2lvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZXNzaW9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFNlc3Npb24gPSBzZXNzaW9uc1tzZXNzaW9ucy5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTZXNzaW9uID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTsgfSk7XHJcbiAgICB9KTtcclxufTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGV4dHJhY3RVUkxQYXJhbXMgPSBmdW5jdGlvbiAodXJsKSB7XHJcbiAgICB2YXIgcGFyYW1zTWFwID0ge307XHJcbiAgICBpZiAodXJsKSB7XHJcbiAgICAgICAgdmFyIHBhcmFtVXJsID0gdXJsLnNwbGl0KCc/Jykuc2xpY2UoMSkuam9pbignPycpO1xyXG4gICAgICAgIGlmIChwYXJhbVVybC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHBhcmFtVXJsLnNwbGl0KCcmJyk7XHJcbiAgICAgICAgICAgIHBhcmFtcy5yZWR1Y2UoZnVuY3Rpb24gKHBhcmFtTWFwLCBwYXJhbSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNwbGl0cyA9IHBhcmFtLnNwbGl0KCc9Jyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3BsaXRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuYW1lXzEgPSBkZWNvZGVVUklDb21wb25lbnQoc3BsaXRzLnNoaWZ0KCkpLCB2YWx1ZSA9IGRlY29kZVVSSUNvbXBvbmVudChzcGxpdHMuam9pbignPScpKTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbU1hcFtuYW1lXzFdID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW1NYXA7XHJcbiAgICAgICAgICAgIH0sIHBhcmFtc01hcCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhcmFtc01hcDtcclxufTtcclxudmFyIHJhbmRvbUxhYmVsID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpOyB9O1xyXG52YXIgZ2VuZXJhdGVSYW5kb21VSUQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KS5zdWJzdHJpbmcoMik7IH07XHJcbnZhciBjYXBpdGFsaXplID0gZnVuY3Rpb24gKHN0cikgeyByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHcvLCBmdW5jdGlvbiAoYykgeyByZXR1cm4gYy50b1VwcGVyQ2FzZSgpOyB9KTsgfTtcclxuZnVuY3Rpb24gZmluZExhc3QoYXJyYXksIHByZWRpY2F0ZSkge1xyXG4gICAgZm9yICh2YXIgaSA9IGFycmF5Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgaWYgKHByZWRpY2F0ZShhcnJheVtpXSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFycmF5W2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcbmZ1bmN0aW9uIHNoYWxsb3dPYmpFcXVhbChvYmoxLCBvYmoyKSB7XHJcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqMSkge1xyXG4gICAgICAgIGlmICghKGtleSBpbiBvYmoyKSB8fCBvYmoxW2tleV0gIT09IG9iajJba2V5XSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yICh2YXIga2V5IGluIG9iajIpIHtcclxuICAgICAgICBpZiAoIShrZXkgaW4gb2JqMSkgfHwgb2JqMltrZXldICE9PSBvYmoxW2tleV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcbnZhciB3YWl0UmVzb2x2ZUFsbCA9IGZ1bmN0aW9uICh0YXJnZXRzKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIHZhciBudW1iZXJPZlJlc29sdmVkID0gMDtcclxuICAgICAgICB2YXIgcmVzdWx0cyA9IG5ldyBBcnJheSh0YXJnZXRzLmxlbmd0aCk7XHJcbiAgICAgICAgdGFyZ2V0c1xyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uICh0YXJnZXQpIHsgcmV0dXJuICh0YXJnZXQgaW5zdGFuY2VvZiBQcm9taXNlID8gdGFyZ2V0IDogUHJvbWlzZS5yZXNvbHZlKHRhcmdldCkpOyB9KS5mb3JFYWNoKGZ1bmN0aW9uICh0YXJnZXRQcm9taXNlLCBpbmRleCkge1xyXG4gICAgICAgICAgICB0YXJnZXRQcm9taXNlXHJcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdHNbaW5kZXhdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogJ2Z1bGZpbGxlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAocmVhc29uKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRzW2luZGV4XSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICdyZWplY3RlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhc29uOiByZWFzb24sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmZpbmFsbHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbnVtYmVyT2ZSZXNvbHZlZCsrO1xyXG4gICAgICAgICAgICAgICAgaWYgKG51bWJlck9mUmVzb2x2ZWQgPT09IHRhcmdldHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHRzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuZXhwb3J0cy51dGlscyA9IHtcclxuICAgIGV4dHJhY3RVUkxQYXJhbXM6IGV4dHJhY3RVUkxQYXJhbXMsXHJcbiAgICByYW5kb21MYWJlbDogcmFuZG9tTGFiZWwsXHJcbiAgICBnZW5lcmF0ZVJhbmRvbVVJRDogZ2VuZXJhdGVSYW5kb21VSUQsXHJcbiAgICBjYXBpdGFsaXplOiBjYXBpdGFsaXplLFxyXG4gICAgZmluZExhc3Q6IGZpbmRMYXN0LFxyXG4gICAgc2hhbGxvd09iakVxdWFsOiBzaGFsbG93T2JqRXF1YWwsXHJcbiAgICB3YWl0UmVzb2x2ZUFsbDogd2FpdFJlc29sdmVBbGwsXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=