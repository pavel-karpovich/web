/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 812:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.assertAgentStateSNPayload = exports.assertSNConfig = exports.assertObjectsExistenceData = exports.assertRecordInfoData = exports.assertKbArticleData = exports.assertKbSearchResultData = exports.assertKbFolderData = exports.assertUrlData = exports.assertClickToCallData = exports.assertOpenedContactData = exports.assertOpenedTaskData = exports.isSNContact = exports.isSNTask = void 0;
function isSNTask(data) {
    return (isObject(data) &&
        'sysId' in data && typeof data.sysId === 'string' &&
        'recordType' in data && typeof data.recordType === 'string' &&
        'displayRecordType' in data && typeof data.displayRecordType === 'string' &&
        'displayId' in data && typeof data.displayId === 'string' &&
        'shortDescription' in data && typeof data.shortDescription === 'string');
}
exports.isSNTask = isSNTask;
function isSNContact(data) {
    return (isObject(data) &&
        'sysId' in data && typeof data.sysId === 'string' &&
        'recordType' in data && typeof data.recordType === 'string' &&
        'displayRecordType' in data && typeof data.displayRecordType === 'string' &&
        'displayName' in data && typeof data.displayName === 'string' &&
        'phones' in data && isObject(data.phones) &&
        'business' in data.phones && (data.phones.business === undefined || typeof data.phones.business === 'string') &&
        'mobile' in data.phones && (data.phones.mobile === undefined || typeof data.phones.mobile === 'string') &&
        'email' in data && (data.email === undefined || typeof data.email === 'string'));
}
exports.isSNContact = isSNContact;
function assertOpenedTaskData(data) {
    if (!(isObject(data) &&
        'task' in data && isSNTask(data.task) &&
        'contact' in data && (data.contact === 'NONE' || isSNContact(data.contact)))) {
        throw Error("Value is not ServiceNow Task data: ".concat(JSON.stringify(data)));
    }
}
exports.assertOpenedTaskData = assertOpenedTaskData;
function assertOpenedContactData(data) {
    if (!(isObject(data) && 'contact' in data && isSNContact(data.contact))) {
        throw Error("Value is not ServiceNow Contact data: ".concat(JSON.stringify(data)));
    }
}
exports.assertOpenedContactData = assertOpenedContactData;
function assertClickToCallData(data) {
    if (!(isObject(data) && 'phone' in data && 'records' in data)) {
        throw Error("Data is not click to call data: ".concat(JSON.stringify(data)));
    }
}
exports.assertClickToCallData = assertClickToCallData;
function assertUrlData(data) {
    if (!(isObject(data) && 'url' in data)) {
        throw Error("Data is not url data: ".concat(JSON.stringify(data)));
    }
}
exports.assertUrlData = assertUrlData;
function isObject(data) {
    return typeof data === 'object' && data !== null;
}
function assertKbFolderData(data) {
    if (isObject(data) &&
        'requestId' in data && typeof data.requestId === 'string' &&
        'result' in data && isObject(data.result) && data.result instanceof Array &&
        data.result.every(function (item) { return (isObject(item) && (('id' in item && typeof item.id === 'string' &&
            'type' in item && item.type === 'article' &&
            'title' in item && typeof item.title === 'string' &&
            'text' in item && typeof item.text === 'string') || ('id' in item && typeof item.id === 'string' &&
            'type' in item && item.type === 'folder' &&
            'title' in item && typeof item.title === 'string'))); })) {
        return;
    }
    throw Error("Data is not KB Folder content: ".concat(JSON.stringify(data)));
}
exports.assertKbFolderData = assertKbFolderData;
function assertKbSearchResultData(data) {
    if (isObject(data) &&
        'requestId' in data && typeof data.requestId === 'string' &&
        'result' in data && isObject(data.result) && data.result instanceof Array &&
        data.result.every(function (item) { return (isObject(item) &&
            'id' in item && typeof item.id === 'string' &&
            'type' in item && item.type === 'article' &&
            'title' in item && typeof item.title === 'string' &&
            'text' in item && typeof item.text === 'string'); })) {
        return;
    }
    throw Error("Data is not KB Search result: ".concat(JSON.stringify(data)));
}
exports.assertKbSearchResultData = assertKbSearchResultData;
function assertKbArticleData(data) {
    if (isObject(data) &&
        'requestId' in data && typeof data.requestId === 'string' &&
        'article' in data && ((isObject(data.article) &&
        'id' in data.article && typeof data.article.id === 'string' &&
        'title' in data.article && typeof data.article.title === 'string' &&
        'keywords' in data.article && typeof data.article.keywords === 'string' &&
        'answer' in data.article && typeof data.article.answer === 'string' &&
        'notes' in data.article && typeof data.article.notes === 'string' &&
        'language' in data.article && typeof data.article.language === 'string' &&
        'createdByUser' in data.article && typeof data.article.createdByUser === 'string' &&
        'lastEditedByUser' in data.article && typeof data.article.lastEditedByUser === 'string' &&
        'customFields' in data.article && isObject(data.article.customFields)) ||
        data.article === null)) {
        return;
    }
    throw Error("Data is not KB Article data: ".concat(JSON.stringify(data)));
}
exports.assertKbArticleData = assertKbArticleData;
function assertRecordInfoData(data) {
    if (isObject(data) &&
        'requestId' in data && typeof data.requestId === 'string' &&
        'recordInfo' in data && ((isObject(data.recordInfo) &&
        'sysId' in data.recordInfo && typeof data.recordInfo.sysId === 'string' &&
        'recordType' in data.recordInfo && typeof data.recordInfo.recordType === 'string' &&
        'displayName' in data.recordInfo && typeof data.recordInfo.displayName === 'string' &&
        'displayType' in data.recordInfo && typeof data.recordInfo.displayType === 'string' &&
        'refType' in data.recordInfo && typeof data.recordInfo.refType === 'string' &&
        ['contact', 'task', 'other'].includes(data.recordInfo.refType)) ||
        data.recordInfo === null)) {
        return;
    }
    throw Error("Data is not Record Info data: ".concat(JSON.stringify(data)));
}
exports.assertRecordInfoData = assertRecordInfoData;
function assertObjectsExistenceData(data) {
    if (isObject(data) &&
        'requestId' in data && typeof data.requestId === 'string' &&
        'existenceData' in data && isObject(data.existenceData)) {
        return;
    }
    throw Error("Data is not Objects Existence data: ".concat(JSON.stringify(data)));
}
exports.assertObjectsExistenceData = assertObjectsExistenceData;
function assertSNConfig(data) {
    if (isObject(data) &&
        'allowEmptyRecordsList' in data && typeof data.allowEmptyRecordsList === 'boolean') {
        return;
    }
    throw Error("Data is not SN Config: ".concat(JSON.stringify(data)));
}
exports.assertSNConfig = assertSNConfig;
function assertAgentStateSNPayload(data) {
    if (isObject(data) && 'state' in data && typeof data.state === 'string') {
        return;
    }
    throw Error("Data is not Agent State payload: ".concat(JSON.stringify(data)));
}
exports.assertAgentStateSNPayload = assertAgentStateSNPayload;


/***/ }),

/***/ 366:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registerServiceNowOpenFrameIntegration = void 0;
var request_tracker_1 = __webpack_require__(602);
var guards_1 = __webpack_require__(812);
var integrationKey = 'servicenow';
var EVENTS_TO_SN_SCRIPT;
(function (EVENTS_TO_SN_SCRIPT) {
    EVENTS_TO_SN_SCRIPT["SHOW_WIDGET"] = "sn_proxy_show_widget";
    EVENTS_TO_SN_SCRIPT["SAVE_ACTIVITY"] = "sn_proxy_save_activity";
    EVENTS_TO_SN_SCRIPT["OPEN_OBJECT"] = "sn_proxy_open_object";
    EVENTS_TO_SN_SCRIPT["SEARCH_OBJECTS"] = "sn_proxy_search_objects";
    EVENTS_TO_SN_SCRIPT["OPEN_CUSTOM_URL"] = "sn_proxy_open_custom_url";
    EVENTS_TO_SN_SCRIPT["GET_KB_FOLDER"] = "sn_proxy_get_kb_folder";
    EVENTS_TO_SN_SCRIPT["GET_KB_ARTICLE"] = "sn_proxy_get_kb_article";
    EVENTS_TO_SN_SCRIPT["SEARCH_KB"] = "sn_proxy_search_kb";
    EVENTS_TO_SN_SCRIPT["REQUEST_OBJECT"] = "sn_proxy_request_object";
    EVENTS_TO_SN_SCRIPT["CHECK_OBJECTS_EXISTENCE"] = "sn_proxy_check_objects_existence";
    EVENTS_TO_SN_SCRIPT["GET_CONFIG"] = "sn_proxy_get_config";
    EVENTS_TO_SN_SCRIPT["AGENT_STATE_CHANGED"] = "sn_proxy_agent_state_changed";
})(EVENTS_TO_SN_SCRIPT || (EVENTS_TO_SN_SCRIPT = {}));
var EVENTS_FROM_SN_SCRIPT;
(function (EVENTS_FROM_SN_SCRIPT) {
    EVENTS_FROM_SN_SCRIPT["OPENED_TASK"] = "sn_proxy_opened_task";
    EVENTS_FROM_SN_SCRIPT["SUBMIT_TASK"] = "sn_proxy_submit_task";
    EVENTS_FROM_SN_SCRIPT["OPENED_CONTACT"] = "sn_proxy_opened_contact";
    EVENTS_FROM_SN_SCRIPT["SUBMIT_CONTACT"] = "sn_proxy_submit_contact";
    EVENTS_FROM_SN_SCRIPT["URL_CHANGED"] = "sn_proxy_url_changed";
    EVENTS_FROM_SN_SCRIPT["CLICK_TO_CALL"] = "sn_proxy_click_to_call";
    EVENTS_FROM_SN_SCRIPT["ACTIVATION"] = "sn_proxy_activation";
    EVENTS_FROM_SN_SCRIPT["GET_KB_FOLDER_RESULT"] = "sn_proxy_get_kb_folder_result";
    EVENTS_FROM_SN_SCRIPT["GET_KB_ARTICLE_RESULT"] = "sn_proxy_get_kb_article_result";
    EVENTS_FROM_SN_SCRIPT["SEARCH_KB_RESULT"] = "sn_proxy_search_kb_result";
    EVENTS_FROM_SN_SCRIPT["REQUEST_OBJECT_RESULT"] = "sn_proxy_request_object_result";
    EVENTS_FROM_SN_SCRIPT["CHECK_OBJECTS_EXISTENCE_RESULT"] = "sn_proxy_check_objects_existence_result";
    EVENTS_FROM_SN_SCRIPT["GET_CONFIG_RESULT"] = "sn_proxy_get_config_result";
    EVENTS_FROM_SN_SCRIPT["SET_AGENT_STATE"] = "sn_proxy_set_agent_state";
})(EVENTS_FROM_SN_SCRIPT || (EVENTS_FROM_SN_SCRIPT = {}));
var RECORDS_VALIDATION_ERRORS = {
    EMPTY_SELECTION: function () { return 'No records selected, please create a record for this interaction'; },
    MULTIPLE_CONTACTS: function () { return 'Invalid number of contacts selected'; },
    NON_EXISTING_OBJECT: function (displayName) { return "\"".concat(displayName, "\" does not exist"); },
};
/** format to YYYY-MM-DD HH:mm:ss */
function formatSNDate(timestamp) {
    if (!timestamp) {
        return '';
    }
    var date = new Date(timestamp);
    return date.toISOString().replace('T', ' ').substring(0, 19);
}
function createSNActivityRecord(data, task, contact) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    return {
        globalInteractionId: (_a = data.globalInteractionId) !== null && _a !== void 0 ? _a : '',
        direction: (_b = data.callDirection) !== null && _b !== void 0 ? _b : 'inbound',
        startTime: formatSNDate(data.startTime),
        endTime: formatSNDate(data.endTime),
        duration: String(((_c = data.duration) !== null && _c !== void 0 ? _c : 0) * 1000),
        phonenumber: (_d = data.phoneNumber) !== null && _d !== void 0 ? _d : '',
        dnis: (_e = data.DNIS) !== null && _e !== void 0 ? _e : '',
        disposition: (_f = data.disposition) !== null && _f !== void 0 ? _f : '',
        description: (_g = data.description) !== null && _g !== void 0 ? _g : '',
        service: (_h = data.service) !== null && _h !== void 0 ? _h : '',
        playbackUrl: (_j = data.playbackUrl) !== null && _j !== void 0 ? _j : '',
        recordingUrl: (_k = data.recordingUrl) !== null && _k !== void 0 ? _k : '',
        type: data.type,
        attachedData: data.attachedData,
        taskId: task.id,
        contactId: contact === null || contact === void 0 ? void 0 : contact.id,
    };
}
function convertContact(contact) {
    var displayId = contact.phones.business || contact.phones.mobile || contact.email;
    return {
        id: contact.sysId,
        type: contact.recordType,
        displayName: displayId
            ? "".concat(contact.displayName, ": ").concat(displayId)
            : contact.displayName,
        displayType: contact.displayRecordType,
        customFields: {
            isContact: 'true',
        },
    };
}
function convertTask(task) {
    return {
        id: task.sysId,
        type: task.recordType,
        displayName: task.shortDescription
            ? "".concat(task.displayId, ": ").concat(task.shortDescription)
            : task.displayId,
        displayType: task.displayRecordType,
        customFields: {
            isTask: 'true',
        },
    };
}
function toSNScript(event) {
    window.parent.postMessage(event, '*');
}
var logPrefix = '@ADAPTER';
var logger = {
    log: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return console.log.apply(console, __spreadArray([logPrefix], args, false));
    },
    info: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return console.info.apply(console, __spreadArray([logPrefix], args, false));
    },
    warn: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return console.warn.apply(console, __spreadArray([logPrefix], args, false));
    },
    error: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return console.error.apply(console, __spreadArray([logPrefix], args, false));
    },
};
var SN_REQUESTS_TIMEOUT = 5000;
var recordInfoRequestTracker = (0, request_tracker_1.createRequestTracker)({
    timeoutMilliseconds: SN_REQUESTS_TIMEOUT,
});
var getKbFolderRequestTracker = (0, request_tracker_1.createRequestTracker)({
    timeoutMilliseconds: SN_REQUESTS_TIMEOUT,
});
var searchKbRequestTracker = (0, request_tracker_1.createRequestTracker)({
    timeoutMilliseconds: SN_REQUESTS_TIMEOUT,
});
var getKbArticleRequestTracker = (0, request_tracker_1.createRequestTracker)({
    timeoutMilliseconds: SN_REQUESTS_TIMEOUT,
});
var checkObjectsExistenceRequestTracker = (0, request_tracker_1.createRequestTracker)({
    timeoutMilliseconds: SN_REQUESTS_TIMEOUT,
});
function parseSNUrlToFindOpenObject(snUrl) {
    try {
        var url = new URL(decodeURIComponent(snUrl), location.origin);
        var sysId = url.searchParams.get('sys_id');
        var recordTarget = url.searchParams.get('sysparm_record_target');
        var matchSlashTillDo = url.pathname.match(/^.*\/([^/]+)\.do$/);
        var objectPath = matchSlashTillDo === null || matchSlashTillDo === void 0 ? void 0 : matchSlashTillDo[1];
        if (!sysId) {
            return null;
        }
        var entityType = recordTarget || objectPath;
        if (!entityType) {
            return null;
        }
        return {
            type: entityType,
            id: sysId,
        };
    }
    catch (_a) {
        return null;
    }
}
var registerServiceNowOpenFrameIntegration = function () {
    var activeInteractionId = null;
    var isLoggedIn = false;
    var initialLoginDataLoaded = false;
    var initialInteractionDataLoaded = false;
    /**
     * We reset DialCandidates when page URL changes
     * But event about opened contact and task comes earlier that event about URL change
     * Events flow is: OPENED_CONTACT (setDialCandidates) -> URL_CHANGED (resetDialCandidates)
     * So we need to ignore next URL_CHANGED event in order to not reset dial candidates immediately
     * */
    var recordOnTheScreen = undefined;
    var pendingObject = undefined;
    var snConfig = null;
    toSNScript({ type: EVENTS_TO_SN_SCRIPT.SHOW_WIDGET });
    toSNScript({ type: EVENTS_TO_SN_SCRIPT.GET_CONFIG });
    var adApi = new window.brightpattern.AdApi({ integrationKey: integrationKey });
    logger.info('Initialize Adapter');
    adApi.on('ON_LOGIN', function (data) {
        isLoggedIn = data.isLoggedIn;
    });
    adApi.on('ON_LOGOUT', function () {
        isLoggedIn = false;
    });
    adApi.getLoginState().then(function (data) {
        if (data.status === 'success') {
            logger.info('Initial login state:', data.data);
            isLoggedIn = data.data.isLoggedIn;
            initialLoginDataLoaded = true;
            handlePendingObject();
        }
        else {
            logger.warn('Unable to get login state:', data.error);
        }
    });
    adApi.getInteractionsState().then(function (data) {
        if (data.status === 'success') {
            logger.info('Initial interactions state:', data.data);
            activeInteractionId = data.data.activeInteractionId;
            initialInteractionDataLoaded = true;
            handlePendingObject();
        }
        else {
            if (data.error.name === 'not_logged_in') {
                activeInteractionId = null;
                initialInteractionDataLoaded = true;
                handlePendingObject();
            }
            logger.warn('Unable to get interactions state:', data.error);
        }
    });
    function isInitialDataLoaded() {
        return initialLoginDataLoaded && initialInteractionDataLoaded;
    }
    function handlePendingObject() {
        if (isInitialDataLoaded() && pendingObject) {
            handleOpenedObject(pendingObject);
            pendingObject = undefined;
        }
    }
    adApi.on('ON_OPEN_RECORD', function (record, _itemId, options) {
        if ((recordOnTheScreen === null || recordOnTheScreen === void 0 ? void 0 : recordOnTheScreen.id) === record.id && (recordOnTheScreen === null || recordOnTheScreen === void 0 ? void 0 : recordOnTheScreen.type) === record.type) {
            return;
        }
        toSNScript({
            type: EVENTS_TO_SN_SCRIPT.OPEN_OBJECT,
            data: {
                sysId: record.id,
                recordType: record.type,
                options: options,
            },
        });
    });
    adApi.on('ON_SEARCH_RECORDS', function (data, _itemId, inNewTab) {
        if (!data.types[0]) {
            logger.warn('Record type for SN search is not specified:', data);
            return;
        }
        toSNScript({
            type: EVENTS_TO_SN_SCRIPT.SEARCH_OBJECTS,
            data: {
                recordType: data.types[0],
                query: data.text,
                inNewTab: inNewTab,
            },
        });
    });
    adApi.on('ON_NEW_INTERACTION', function () {
        toSNScript({ type: EVENTS_TO_SN_SCRIPT.SHOW_WIDGET });
    });
    adApi.on('ON_ACTIVE_INTERACTION_SWITCHED', function (interactionId) {
        activeInteractionId = interactionId;
    });
    adApi.on('ON_INTERACTION_REMOVED', function (removedInteraction) {
        if (removedInteraction.interactionId === activeInteractionId) {
            activeInteractionId = null;
        }
    });
    adApi.on('ON_SAVE_ACTIVITY_RECORD', function (data) {
        var _a = data.associatedObjects, list = _a.list, selected = _a.selected;
        var selectedTasks = list.filter(function (record) { return (record.customFields.isTask &&
            selected.includes(record.id)); });
        var selectedContact = list.find(function (record) { return (record.customFields.isContact && selected.includes(record.id)); });
        selectedTasks.forEach(function (task) {
            var activity = createSNActivityRecord(data, task, selectedContact);
            toSNScript({
                type: EVENTS_TO_SN_SCRIPT.SAVE_ACTIVITY,
                data: { activity: activity },
            });
        });
    });
    adApi.on('ON_SHOW_SCREEN', function (screen) {
        (0, guards_1.assertUrlData)(screen);
        toSNScript({
            type: EVENTS_TO_SN_SCRIPT.OPEN_CUSTOM_URL,
            data: screen,
        });
    });
    adApi.on('ON_VALIDATE_ASSOCIATED_RECORDS', function (_, data) {
        if (snConfig === null || snConfig === void 0 ? void 0 : snConfig.allowEmptyRecordsList) {
            if (!data.list.length) {
                return { valid: true };
            }
        }
        if (!data.selected.length) {
            return {
                valid: false,
                message: RECORDS_VALIDATION_ERRORS.EMPTY_SELECTION(),
            };
        }
        var selectedRecords = data.list.filter(function (record) { return data.selected.includes(record.id); });
        var contacts = selectedRecords.filter(function (record) { return record.customFields.isContact; });
        if (contacts.length > 1) {
            return {
                valid: false,
                message: RECORDS_VALIDATION_ERRORS.MULTIPLE_CONTACTS(),
            };
        }
        var selectedRecordsData = selectedRecords.map(function (record) { return ({
            sysId: record.id,
            tableName: record.type,
        }); });
        var _a = checkObjectsExistenceRequestTracker.addRequest(), requestId = _a.requestId, promise = _a.promise;
        toSNScript({
            type: EVENTS_TO_SN_SCRIPT.CHECK_OBJECTS_EXISTENCE,
            data: {
                requestId: requestId,
                selectedRecords: selectedRecordsData,
            },
        });
        return promise.then(function (existenceResult) {
            var nonExistingRecord = selectedRecords.find(function (record) { return !existenceResult[record.id]; });
            if (nonExistingRecord) {
                return {
                    valid: false,
                    message: RECORDS_VALIDATION_ERRORS.NON_EXISTING_OBJECT(nonExistingRecord.displayName),
                };
            }
            return { valid: true };
        });
    });
    adApi.on('ON_REQUEST_RECORD_INFO', function (payload) {
        var _a = recordInfoRequestTracker.addRequest(), requestId = _a.requestId, promise = _a.promise;
        toSNScript({
            type: EVENTS_TO_SN_SCRIPT.REQUEST_OBJECT,
            data: {
                requestId: requestId,
                sysId: payload.id,
                tableName: payload.type,
            },
        });
        return promise;
    });
    adApi.on('ON_REQUEST_RECORD_ON_SCREEN', function () {
        return recordOnTheScreen !== null && recordOnTheScreen !== void 0 ? recordOnTheScreen : null;
    });
    adApi.on('ON_GET_KNOWLEDGE_BASE_FOLDER', function (options) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, requestId, promise;
        return __generator(this, function (_b) {
            _a = getKbFolderRequestTracker.addRequest(), requestId = _a.requestId, promise = _a.promise;
            toSNScript({
                type: EVENTS_TO_SN_SCRIPT.GET_KB_FOLDER,
                data: { requestId: requestId, options: options },
            });
            return [2 /*return*/, promise];
        });
    }); });
    adApi.on('ON_SEARCH_KNOWLEDGE_BASE', function (query, language, articleId) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, requestId, promise;
        return __generator(this, function (_b) {
            _a = searchKbRequestTracker.addRequest(), requestId = _a.requestId, promise = _a.promise;
            toSNScript({
                type: EVENTS_TO_SN_SCRIPT.SEARCH_KB,
                data: {
                    requestId: requestId,
                    options: { query: query, language: language, articleId: articleId },
                },
            });
            return [2 /*return*/, promise];
        });
    }); });
    adApi.on('ON_GET_KNOWLEDGE_BASE_ARTICLE', function (articleId) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, requestId, promise;
        return __generator(this, function (_b) {
            _a = getKbArticleRequestTracker.addRequest(), requestId = _a.requestId, promise = _a.promise;
            toSNScript({
                type: EVENTS_TO_SN_SCRIPT.GET_KB_ARTICLE,
                data: {
                    requestId: requestId,
                    articleId: articleId,
                },
            });
            return [2 /*return*/, promise];
        });
    }); });
    adApi.getAgentState().then(function (data) {
        if (data.status === 'success') {
            logger.info('Initial agent state:', data.data);
            toSNScript({
                type: EVENTS_TO_SN_SCRIPT.AGENT_STATE_CHANGED,
                data: {
                    state: data.data.state,
                    notReadyReason: data.data.notReadyReason,
                },
            });
        }
        else {
            logger.warn('Unable to get agent state:', data.error);
        }
    });
    adApi.on('ON_AGENT_STATE_CHANGE', function (state, notReadyReason) {
        toSNScript({
            type: EVENTS_TO_SN_SCRIPT.AGENT_STATE_CHANGED,
            data: {
                state: state,
                notReadyReason: notReadyReason,
            },
        });
    });
    function handleOpenedObject(value) {
        logger.info('recordOnTheScreen = ', value);
        recordOnTheScreen = value;
        if (!isInitialDataLoaded()) {
            pendingObject = value;
            logger.info('Skip opened object: adapter not initialized');
            return;
        }
        if (!isLoggedIn) {
            logger.info('Skip opened object: user is not logged in');
            return;
        }
        if (!activeInteractionId) {
            logger.info('Skip opened object: no interaction');
            return;
        }
        adApi.addInteractionAssociatedObject(value);
    }
    function handleDialCandidates(contact, task) {
        var dialCandidates = [];
        if (contact && (contact.phones.business ||
            contact.phones.mobile ||
            contact.email)) {
            var phones = [];
            if (contact.phones.business) {
                phones.push({
                    type: 'business',
                    number: contact.phones.business,
                });
            }
            if (contact.phones.mobile) {
                phones.push({
                    type: 'mobile',
                    number: contact.phones.mobile,
                });
            }
            var associatedObjects = [];
            if (task) {
                associatedObjects.push(convertTask(task));
            }
            associatedObjects.push(convertContact(contact));
            dialCandidates.push({
                id: contact.sysId,
                displayName: contact.displayName,
                phones: phones,
                associatedObjects: associatedObjects,
                email: contact.email,
            });
        }
        adApi.setDialCandidates(dialCandidates);
    }
    window.addEventListener('message', function (event) {
        if (!event.data) {
            return;
        }
        var _a = event.data, type = _a.type, data = _a.data;
        switch (type) {
            case EVENTS_FROM_SN_SCRIPT.OPENED_TASK:
            case EVENTS_FROM_SN_SCRIPT.SUBMIT_TASK: {
                (0, guards_1.assertOpenedTaskData)(data);
                var associatedObject = convertTask(data.task);
                handleOpenedObject(associatedObject);
                if (data.contact !== 'NONE') {
                    handleDialCandidates(data.contact, data.task);
                }
                break;
            }
            case EVENTS_FROM_SN_SCRIPT.OPENED_CONTACT:
            case EVENTS_FROM_SN_SCRIPT.SUBMIT_CONTACT: {
                (0, guards_1.assertOpenedContactData)(data);
                var associatedObject = convertContact(data.contact);
                handleOpenedObject(associatedObject);
                handleDialCandidates(data.contact);
                break;
            }
            case EVENTS_FROM_SN_SCRIPT.URL_CHANGED: {
                (0, guards_1.assertUrlData)(data);
                if (activeInteractionId) {
                    adApi.setInteractionActiveScreen(data);
                }
                var openObject = parseSNUrlToFindOpenObject(data.url);
                if ((recordOnTheScreen === null || recordOnTheScreen === void 0 ? void 0 : recordOnTheScreen.id) !== (openObject === null || openObject === void 0 ? void 0 : openObject.id) || (recordOnTheScreen === null || recordOnTheScreen === void 0 ? void 0 : recordOnTheScreen.type) !== (openObject === null || openObject === void 0 ? void 0 : openObject.type)) {
                    adApi.setDialCandidates([]);
                    recordOnTheScreen = undefined;
                    logger.info('recordOnTheScreen = undefined');
                }
                break;
            }
            case EVENTS_FROM_SN_SCRIPT.CLICK_TO_CALL: {
                (0, guards_1.assertClickToCallData)(data);
                if (!isLoggedIn) {
                    return;
                }
                var formattedRecords = data.records.map(function (record) {
                    var crmRecordData = {
                        id: record.sysId,
                        type: record.recordType,
                        displayName: record.displayName,
                        displayType: record.displayType,
                        customFields: {},
                    };
                    if (record.refType === 'task') {
                        crmRecordData.customFields.isTask = 'true';
                    }
                    else if (record.refType === 'contact') {
                        crmRecordData.customFields.isContact = 'true';
                    }
                    return crmRecordData;
                });
                adApi.startCall(data.phone, formattedRecords)
                    .then(function (result) {
                    if (result.status === 'error') {
                        logger.error('start call failed:', result.error);
                    }
                })
                    .catch(function (err) {
                    logger.error('start call failed:', err);
                });
                break;
            }
            case EVENTS_FROM_SN_SCRIPT.GET_KB_FOLDER_RESULT: {
                (0, guards_1.assertKbFolderData)(data);
                getKbFolderRequestTracker.onResponse(data.requestId, data.result);
                break;
            }
            case EVENTS_FROM_SN_SCRIPT.SEARCH_KB_RESULT: {
                (0, guards_1.assertKbSearchResultData)(data);
                searchKbRequestTracker.onResponse(data.requestId, data.result);
                break;
            }
            case EVENTS_FROM_SN_SCRIPT.GET_KB_ARTICLE_RESULT: {
                (0, guards_1.assertKbArticleData)(data);
                getKbArticleRequestTracker.onResponse(data.requestId, data.article);
                break;
            }
            case EVENTS_FROM_SN_SCRIPT.REQUEST_OBJECT_RESULT: {
                (0, guards_1.assertRecordInfoData)(data);
                var crmRecordData = null;
                if (data.recordInfo) {
                    crmRecordData = {
                        id: data.recordInfo.sysId,
                        type: data.recordInfo.recordType,
                        displayName: data.recordInfo.displayName,
                        displayType: data.recordInfo.displayType,
                        customFields: {},
                    };
                    if (data.recordInfo.refType === 'task') {
                        crmRecordData.customFields.isTask = 'true';
                    }
                    else if (data.recordInfo.refType === 'contact') {
                        crmRecordData.customFields.isContact = 'true';
                    }
                }
                recordInfoRequestTracker.onResponse(data.requestId, crmRecordData);
                break;
            }
            case EVENTS_FROM_SN_SCRIPT.CHECK_OBJECTS_EXISTENCE_RESULT: {
                (0, guards_1.assertObjectsExistenceData)(data);
                checkObjectsExistenceRequestTracker.onResponse(data.requestId, data.existenceData);
                break;
            }
            case EVENTS_FROM_SN_SCRIPT.GET_CONFIG_RESULT: {
                (0, guards_1.assertSNConfig)(data);
                snConfig = data;
                break;
            }
            case EVENTS_FROM_SN_SCRIPT.ACTIVATION: {
                adApi.activatePage();
                break;
            }
            case EVENTS_FROM_SN_SCRIPT.SET_AGENT_STATE: {
                (0, guards_1.assertAgentStateSNPayload)(data);
                adApi.setAgentState(data.state, data.notReadyReason)
                    .then(function (result) { return console.log('@ agent state changed successfully:', JSON.stringify(result)); })
                    .catch(function (error) { return console.log('@ agent state change failed:', JSON.stringify(error)); });
                break;
            }
        }
    });
};
exports.registerServiceNowOpenFrameIntegration = registerServiceNowOpenFrameIntegration;


/***/ }),

/***/ 602:
/***/ (function(__unused_webpack_module, exports) {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createRequestTracker = void 0;
var requestCount = 0;
var RequestTrackerImpl = /** @class */ (function () {
    function RequestTrackerImpl(timeoutMilliseconds, handleResponse, handleError, handleTimeout) {
        this.timeoutMilliseconds = timeoutMilliseconds;
        this.handleResponse = handleResponse;
        this.handleError = handleError;
        this.handleTimeout = handleTimeout;
        this.pendingRequests = {};
    }
    RequestTrackerImpl.prototype.addRequest = function (requestId, trackingData) {
        var _this = this;
        var id = requestId === undefined ? (++requestCount).toString() : requestId;
        if (this.pendingRequests[id]) {
            return { requestId: id, promise: this.pendingRequests[id].promise };
        }
        else {
            var pendingRequest_1 = {
                trackingData: trackingData,
                timeout: setTimeout(function () { return _this.onTimeout(id); }, this.timeoutMilliseconds),
            };
            pendingRequest_1.promise = new Promise(function (resolve, reject) {
                pendingRequest_1.resolve = resolve;
                pendingRequest_1.reject = reject;
            });
            this.pendingRequests[id] = pendingRequest_1;
            return { requestId: id, promise: pendingRequest_1.promise };
        }
    };
    RequestTrackerImpl.prototype.onResponse = function (requestId, response) {
        var pendingRequest = this.pendingRequests[requestId];
        if (pendingRequest) {
            delete this.pendingRequests[requestId];
            clearTimeout(pendingRequest.timeout);
            if (this.handleResponse) {
                this.handleResponse(response, __assign({ requestId: requestId }, pendingRequest));
            }
            else {
                pendingRequest.resolve(response);
            }
        }
    };
    RequestTrackerImpl.prototype.onError = function (requestId, error) {
        var pendingRequest = this.pendingRequests[requestId];
        if (pendingRequest) {
            delete this.pendingRequests[requestId];
            clearTimeout(pendingRequest.timeout);
            if (this.handleError) {
                this.handleError(error, __assign({ requestId: requestId }, pendingRequest));
            }
            else {
                pendingRequest.reject(error);
            }
        }
    };
    RequestTrackerImpl.prototype.onTimeout = function (requestId) {
        var pendingRequest = this.pendingRequests[requestId];
        if (pendingRequest) {
            delete this.pendingRequests[requestId];
            if (this.handleTimeout) {
                this.handleTimeout(__assign({ requestId: requestId }, pendingRequest));
            }
            else {
                pendingRequest.reject(new Error("RequestTracker: timeout while waiting for response for request ".concat(requestId)));
            }
        }
    };
    RequestTrackerImpl.prototype.hasRequest = function (requestId) {
        return !!this.pendingRequests[requestId];
    };
    RequestTrackerImpl.prototype.cleanup = function () {
        this.pendingRequests = {};
    };
    return RequestTrackerImpl;
}());
function createRequestTracker(_a) {
    var timeoutMilliseconds = _a.timeoutMilliseconds, handleResponse = _a.handleResponse, handleError = _a.handleError, handleTimeout = _a.handleTimeout;
    return new RequestTrackerImpl(timeoutMilliseconds, handleResponse, handleError, handleTimeout);
}
exports.createRequestTracker = createRequestTracker;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
var integration_1 = __webpack_require__(366);
var urlParams = new URLSearchParams(location.search);
var brightpatternDomain = urlParams.get('bpatternDomain') || 'localhost:3000';
function loadCommWidgetApi() {
    return new Promise(function (resolve, reject) {
        var scriptTag = document.createElement('script');
        scriptTag.addEventListener('load', resolve);
        scriptTag.addEventListener('error', reject);
        scriptTag.type = 'application/javascript';
        scriptTag.src = "https://".concat(brightpatternDomain, "/agent/communicator/adapters/api.js");
        document.head.appendChild(scriptTag);
    });
}
loadCommWidgetApi().then(integration_1.registerServiceNowOpenFrameIntegration);

})();

/******/ })()
;