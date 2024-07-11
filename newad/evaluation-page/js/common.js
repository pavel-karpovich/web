// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;


if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(searchString, position) {
    position = position || 0;
    return this.indexOf(searchString, position) === position;
  };
}

if (!String.prototype.endsWith) {
    String.prototype.endsWith = function(search, length) {
        if (length === undefined || length > this.length) {
            length = this.length;
        }
        return this.substring(length - search.length, length) === search;
    };
}

Array.prototype.move = function (oldIndex, newIndex) {
    this.splice(newIndex, 0, this.splice(oldIndex, 1)[0]);
    return this;
};

Array.prototype.deleteByValue = function (val) {
    var index = this.indexOf(val);
    if (index !== -1) {
        this.splice(index, 1);
    }   
    return this;
};

if (typeof Object.assign != 'function') {
    // Must be writable: true, enumerable: false, configurable: true
    Object.defineProperty(Object, "assign", {
        value: function assign(target, varArgs) { // .length of function is 2
            'use strict';
            if (target == null) { // TypeError if undefined or null
                throw new TypeError('Cannot convert undefined or null to object');
            }

            var to = Object(target);

            for (var index = 1; index < arguments.length; index++) {
                var nextSource = arguments[index];

                if (nextSource != null) { // Skip over if undefined or null
                    for (var nextKey in nextSource) {
                        // Avoid bugs when hasOwnProperty is shadowed
                        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                            to[nextKey] = nextSource[nextKey];
                        }
                    }
                }
            }
            return to;
        },
        writable: true,
        configurable: true
    });
}

// https://tc39.github.io/ecma262/#sec-array.prototype.find
if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
        value: function(predicate) {
            // 1. Let O be ? ToObject(this value).
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }

            var o = Object(this);

            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0;

            // 3. If IsCallable(predicate) is false, throw a TypeError exception.
            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }

            // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
            var thisArg = arguments[1];

            // 5. Let k be 0.
            var k = 0;

            // 6. Repeat, while k < len
            while (k < len) {
                // a. Let Pk be ! ToString(k).
                // b. Let kValue be ? Get(O, Pk).
                // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
                // d. If testResult is true, return kValue.
                var kValue = o[k];
                if (predicate.call(thisArg, kValue, k, o)) {
                    return kValue;
                }
                // e. Increase k by 1.
                k++;
            }

            // 7. Return undefined.
            return undefined;
        },
        configurable: true,
        writable: true
    });
}

// https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
if (!Array.prototype.findIndex) {
    Object.defineProperty(Array.prototype, 'findIndex', {
        value: function(predicate) {
            // 1. Let O be ? ToObject(this value).
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }

            var o = Object(this);

            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0;

            // 3. If IsCallable(predicate) is false, throw a TypeError exception.
            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }

            // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
            var thisArg = arguments[1];

            // 5. Let k be 0.
            var k = 0;

            // 6. Repeat, while k < len
            while (k < len) {
                // a. Let Pk be ! ToString(k).
                // b. Let kValue be ? Get(O, Pk).
                // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
                // d. If testResult is true, return k.
                var kValue = o[k];
                if (predicate.call(thisArg, kValue, k, o)) {
                    return k;
                }
                // e. Increase k by 1.
                k++;
            }

            // 7. Return -1.
            return -1;
        },
        configurable: true,
        writable: true
    });
}

$.fn.removeClassWild = function(mask) {
    return this.removeClass(function(index, cls) {
        var re = mask.replace(/\*/g, '\\S+');
        return (cls.match(new RegExp('\\b' + re + '', 'g')) || []).join(' ');
    });
};

$.fn.hasAttr = function(name) {
    var attr = $(this).attr(name);  
    if (typeof attr !== typeof undefined && attr !== false) {
        return true;    
    } else {
        return false;
    }
};

function copyStringToClipboard(str) {        
    var el = document.createElement("textarea");        
    el.value = str;   
    el.setAttribute("readonly", "");
    el.style = { position: "absolute", left: "-9999px"};
    document.body.appendChild(el);   
    el.select();   
    document.execCommand("copy");   
    document.body.removeChild(el);
};

function attachCtrlVListener(handler) {
    if (isIE || isEdge) {
        document.body.addEventListener("keydown", function(e) {
            e = e || window.event;
            var key = e.which || e.keyCode;
            var ctrl = e.ctrlKey ? e.ctrlKey : ((key === 17) ? true : false);

            if (key == 86 && ctrl) {
                handler(e);
            }
        }, false);
    }
    window.addEventListener("paste", handler, false);       
}

function attachLocalStorageChangeListener(handler) {
    if (isIE || isEdge) {    
        setInterval(function() {
            handler();
        }, 3000);                      
    } else {
        window.addEventListener("storage", handler, false);
    }      
}

function downloadURI(uri) {
    var link = document.createElement("a");
    link.download = '';
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function getEvalFailedIndicator(withTopMargin) {
    var indicator = $('<span></span>')
        .addClass('eval-failed-indicator')
        .append($('<span></span>')
            .append($('<img src="/agent/evaluation-page/img/ico/ico-error.svg">'))
            .append(translator.get('failed')));

    if (withTopMargin) {
        indicator.css('margin-top', '7px');
    }

    return indicator;
}

const EVAL_MODE_FULL = 'FULL_MODE';
const EVAL_MODE_CONSOLE = 'CONSOLE_MODE';

const DATA_QUESTION_ID_ATTRIBUTE_NAME = "data-question-id";
const ANSWER_ATTRIBUTE_NAME = "question-answer";
const CLIPBOARD_COPY_ITEM_NAME = "evaluation-editor-clipboard-item";
const CLIPBOARD_JSON_ATTRIBUTE_NAME = "clipboard-json";
const JSON_DATA_ATTRIBUTE_NAME = "json-data";
const NO_IMAGE = "/agent/evaluation-page/img/no-image.png";

const DEFAULT_SURVEY_LANGUAGE_CODE = "en-US";

const CHECKBOX_CONTROL = "CHECKBOX";
const RADIO_CONTROL = "RADIO";
const RADIO_HORIZONTAL_CONTROL = "RADIO_HORIZONTAL";
const SLIDER_CONTROL = "SLIDER";
const DROPDOWN_CONTROL = "DROPDOWN";
const NUMERIC_CONTROL = "NUMERIC";
const ESSAY_CONTROL = "ESSAY";
const STATIC_TEXT_CONTROL = "STATIC_TEXT";
const KEYCODE_ENTER = 13;
const KEYCODE_ESC = 27;
const PREVIEW_MODE = "PREVIEW_MODE";
const VIEW_MODE = "VIEW_MODE";
const AREA_NON_ANSWERED_CLASS_NAME = "nonanswered";
const AREA_PRE_ANSWERED_CLASS_NAME = "preanswered";
const CUSTOM_CSS_CLASS_NAME = "custom-email-survey";
const AREA_ANSWERED_CLASS_NAME = "answered";
const AREA_EDITOR_HEADER_HEIGHT = 35;
const AREA_BASE_PADDING_LEFT = 22;
const AREA_DEPTH_PADDING_LEFT = 20;

const MAX_AREA_DEPTH = 4;
const MAX_ATTACHMENT_COUNT = 10;
const MAX_ATTACHMENT_SIZE = 10485760; // 10 MB

const REFRESH_STATISTICS_INTERVAL = 1800000; // 30 mins
const REFRESH_SCORE_INTERVAL = 1800000; // 30 mins
const REFRESH_SESSION_INTERVAL = 600000 ; // 10 mins

const SELECTED = "SELECTED";
const NON_SELECTED = "NON_SELECTED";
const DEFAULT_MIN_FORM_SCORE = 20;

const EVAL_RESULTS_TYPE_EVALUATION = "EVALUATION";
const EVAL_RESULTS_TYPE_CALIBRATION = "CALIBRATION";

const STAT_PENDING_CONFIRMATION = "PENDING_CONFIRMATION";
const STAT_PENDING_CALIBRATION = "PENDING_CALIBRATION";
const STAT_SCHEDULED = "SCHEDULED";
const STAT_DISPUTED = "DISPUTED";
const STAT_FAILED = "FAILED";
const STAT_MY_INTERACTIONS = "MY_INTERACTIONS";

const EVAL_RESULTS_STATUS_SAVED = "SAVED";
const EVAL_RESULTS_STATUS_SUBMITTED = "SUBMITTED";
const EVAL_RESULTS_STATUS_ASSIGNED = "ASSIGNED";
const EVAL_RESULTS_STATUS_SCHEDULED = "SCHEDULED";
const EVAL_RESULTS_STATUS_REVIEWED = "REVIEWED";
const EVAL_RESULTS_STATUS_CONFIRMED = "CONFIRMED";
const EVAL_RESULTS_STATUS_DISPUTED = "DISPUTED";

const SENTIMENT_NEUTRAL = "neutral";
const SENTIMENT_POSITIVE = "positive";
const SENTIMENT_NEGATIVE = "negative";

const MEDIA_TYPE_VOICE = "VOICE";
const MEDIA_TYPE_EMAIL = "EMAIL";
const MEDIA_TYPE_CHAT = "CHAT";

const TRANSCRIPT_TYPE_NOTES = "NOTES";
const TRANSCRIPT_TYPE_EMAIL = "EMAIL";
const TRANSCRIPT_TYPE_DRAFT = "DRAFT";
const TRANSCRIPT_TYPE_VOICE = "VOICE";
const TRANSCRIPT_TYPE_CHAT = "CHAT";
const TRANSCRIPT_TYPE_CASE_EVENT = "CASE";

const TRANSCRIPT_TYPE_CASE_EVENT_PUSHED = "PUSHED";
const TRANSCRIPT_TYPE_CASE_EVENT_PULLED = "PULLED";
const TRANSCRIPT_TYPE_CASE_EVENT_ASSIGNED = "ASSIGNED";
const TRANSCRIPT_TYPE_CASE_EVENT_TRANSFERRED = "TRANSFERRED";
const TRANSCRIPT_TYPE_CASE_EVENT_FOLLOWUP_FROM = "FOLLOWUP_FROM";
const TRANSCRIPT_TYPE_CASE_EVENT_FOLLOWUP_CREATED = "FOLLOWUP_CREATED";
const TRANSCRIPT_TYPE_CASE_EVENT_STATE_CHANGED = "STATE_CHANGED";

const TRANSCRIPT_TYPE_CASE_STATUS_NEW = "New";
const TRANSCRIPT_TYPE_CASE_STATUS_OPEN = "Open";
const TRANSCRIPT_TYPE_CASE_STATUS_PENDING = "Pending";
const TRANSCRIPT_TYPE_CASE_STATUS_RESOLVED = "Resolved";
const TRANSCRIPT_TYPE_CASE_STATUS_CLOSED = "Closed";

const DIRECTION_INBOUND = "INBOUND";
const DIRECTION_OUTBOUND = "OUTBOUND";
const DIRECTION_REPLY = "REPLY";
const DIRECTION_FORWARD = "FORWARD";
const DIRECTION_AUTO_ACK = "AUTO_ACK";

const AM = 'AM';
const PM = 'PM';

const EVENT_LOAD_SEARCHES = 'load-searches';
const EVENT_NEW_SEARCH = 'new-search';
const EVENT_OPEN_INTERACTION = 'open-interaction';
const EVENT_UPDATE_SEARCH = 'update-search';
const EVENT_CLONE_SEARCH = 'clone-search';
const EVENT_CREATE_SEARCH = 'create-search';
const EVENT_CREATE_SEARCH_DONE = 'create-search-done';

const URL_PARAM_ITEM = 'item';
const URL_PARAM_GIID = 'giid';
const URL_PARAM_MEDIA_TYPE = 'mediaType';
const URL_PARAM_CDR_ID = 'cdrId';

const URL_VALUE_QM_PRO = 'qmproPage';

const TAB_TYPE_SEARCH = 'search';
const TAB_TYPE_COUNTER = 'counter';
const TAB_TYPE_INTERACTION = 'interaction';

const CB_MODE_MULTI = 'multi';
const CB_MODE_GROUP = 'group';

const USER_ME_ID = "__me__";
const SPECIAL_STRING_SEPARATOR = '@___SEPARATOR___@';

const SEARCH_PERSONAL = 'personal_searches';
const SEARCH_PUBLIC = 'public_searches';

const TEXT_THANK_YOU = 'TEXT_THANK_YOU';

function getAreaById(form, areaId) {
    if (form && areaId) {
        for (var i = 0; i < form.areas.length; i++) {
            if (form.areas[i].id == areaId) {
                return form.areas[i];
            }
        }
    }
    return null;
}

function getAreaIndexById(form, areaId) {
    if (form && areaId) {
        for (var i = 0; i < form.areas.length; i++) {
            if (form.areas[i].id == areaId) {
                return i;
            }
        }
    }
    return null;
}

function getAnimationEndEventName () {
    var i,
        el = document.createElement('div');

    var animations = {
        "animation"      : "animationend",
        "OAnimation"     : "oAnimationEnd",
        "MozAnimation"   : "animationend",
        "WebkitAnimation": "webkitAnimationEnd"
    };

    for (i in animations) {
        if (animations.hasOwnProperty(i) && el.style[i] !== undefined) {
            return animations[i];
        }
    }
}

function getQuestionIndexById(area, questionId) {
    if (area && questionId) {
        for (var i = 0; i < area.questions.length; i++) {
            if (area.questions[i].id == questionId) {
                return i;
            }
        }
    }
    return null;
}

function getQuestionById(area, questionId) {
    if (area && questionId) {
        for (var i = 0; i < area.questions.length; i++) {
            if (area.questions[i].id == questionId) {
                return area.questions[i];
            }
        }
    }
    return null;
}

function getAnswerById(question, answerId) {
    if (question && question.answers) {
        for (var i = 0; i < question.answers.length; i++) {
            if (question.answers[i].id == answerId) {
                return question.answers[i];
            }
        }
    }
    return null;
}

function unique(arr) {
    return arr.reduce(function(a,b){if(a.indexOf(b)<0)a.push(b);return a;},[]);
}

// --- Combobox ---
function initModalSearchableCombobox($modal, $comboboxWrapper, source, onSelect, mode) {

    var multiSelect = mode === CB_MODE_MULTI;
    var groupMode = mode === CB_MODE_GROUP;
    var lastRequestTerm;

    function split(val) {
        return val.split(SPECIAL_STRING_SEPARATOR);
    }

    function extractLast(term) {
        return split(term).pop();
    }

    var $combobox = $comboboxWrapper.find('.combobox-input');
    var $comboboxValue = $comboboxWrapper.find('.value-input');
    $comboboxWrapper.find('.combobox-toggle').click($combobox.autocomplete.bind($combobox, 'search', ''));
    var options = {
        minLength: 0,
        create: function() {
            if (groupMode) {
                $combobox.autocomplete('widget').menu("option", "items", "> :not(.ui-autocomplete-group)");
            }
        },
        source: function (request, response) {
            lastRequestTerm = request.term;
            if (multiSelect) {
                request.term = extractLast(request.term);
            }
            if (typeof source === "function") {
                source(request, response);
            } else {
                response($.ui.autocomplete.filter(source, request.term));
            }
        },
        position: {
            collision: "flip"
        },
        open: function() {
            $combobox.autocomplete('widget').css('z-index', $modal.css('z-index') + 1);
        },
        focus: function() {
            return false;
        },
        change: function(event, ui) {
            if (multiSelect) {
                multiSelectOnChange.bind(this)();
            } else {
                if (!ui.item) {
                    $comboboxValue.val('');
                }
            }
        },
        select: function(event, ui) {
            var label;
            var value;
            event.preventDefault();
            if (multiSelect) {
                var termsLabels = split(this.value);
                var termsValues = split($comboboxValue.val());

                if (!termsLabels[termsLabels.length - 1]) {
                    termsLabels.pop();
                }

                if (!termsValues[termsValues.length - 1]) {
                    termsValues.pop();
                }

                while (termsLabels.length > termsValues.length) {
                    termsLabels.pop();
                }

                var checked = termsValues.indexOf(ui.item.value) > -1;
                if (checked) {
                    termsLabels.deleteByValue(ui.item.label);
                    termsValues.deleteByValue(ui.item.value);
                } else {
                    termsLabels.push(ui.item.label);
                    termsValues.push(ui.item.value);
                }

                label = termsLabels.join(SPECIAL_STRING_SEPARATOR);
                value = termsValues.join(SPECIAL_STRING_SEPARATOR);

                var data = {};
                for (var i = 0; i < termsValues.length; i++) {
                    data[termsValues[i]] = termsLabels[i];
                }
                $comboboxValue.attr(JSON_DATA_ATTRIBUTE_NAME, JSON.stringify(data));

                setTimeout(function () {
                    $combobox.autocomplete('search', '');
                }, 0);
            } else {
                label = ui.item.label;
                value = ui.item.value;
            }
            this.value = label;
            $combobox.get(0).scrollLeft = $combobox.get(0).scrollWidth;
            $comboboxValue.val(value);
            if (onSelect) {
                onSelect(ui.item.value);
            }
            return false;
        }
    };
    var autocomplete = $combobox.autocomplete(options);

    if (multiSelect) {
        $combobox.on('keydown', function (e) {
            e = e || window.event;
            var key = e.which || e.keyCode;

            // backspace || delete || enter
            if (key === 8 || key === 46 || key === 13) {
                return;
            }

            var termsLabels = split(this.value);
            var termsValues = split($comboboxValue.val());

            if (!!this.value && !!$comboboxValue.val() && !this.value.endsWith(', ') && termsLabels.length === termsValues.length) {

                if (this.value.endsWith(' ')) {
                    this.value = this.value.substring(0, this.value.length - 1);
                }

                this.value += SPECIAL_STRING_SEPARATOR;
            }
        });

        $combobox.on('keyup', multiSelectOnChange);
    }

    function multiSelectOnChange() {
        if (!this.value) {
            $comboboxValue.val('');
            $comboboxValue.attr(JSON_DATA_ATTRIBUTE_NAME, JSON.stringify({}));
        } else if (!!$comboboxValue.attr(JSON_DATA_ATTRIBUTE_NAME)) {
            var data = JSON.parse($comboboxValue.attr(JSON_DATA_ATTRIBUTE_NAME));
            var termsLabels = split(this.value);
            var termsValues = split($comboboxValue.val());

            var newData = {};
            var newTermsValues = [];
            for (var i = 0; i < termsValues.length; i++) {
                if (data[termsValues[i]] === termsLabels[i]) {
                    newData[termsValues[i]] = termsLabels[i];
                    newTermsValues.push(termsValues[i]);
                }
            }

            $comboboxValue.val(newTermsValues.join(SPECIAL_STRING_SEPARATOR));
            $comboboxValue.attr(JSON_DATA_ATTRIBUTE_NAME, JSON.stringify(newData));
        }
    }

    if (groupMode) {
        autocomplete.data("ui-autocomplete")._renderMenu = function (ul, items) {
            $(ul).addClass('ui-autocomplete-group-menu');
            function renderGroup(ul, groupName, items) {
                var groupUi = renderGroupItem(groupName);
                $.each(items, function (index, item) {
                    renderItem(groupUi, item).data("ui-autocomplete-item", item);
                });
            }

            function renderGroupItem(groupName) {
                var $group = $('<li class="ui-autocomplete-group">' + groupName + '</li>');
                $group.uniqueId();
                var id = $group.attr('id');
                $group.click(function () {
                    ul.find('.' + id).toggle();
                    autocomplete.data("ui-autocomplete")._resizeMenu();
                });
                $group.hover(function () {
                    ul.find('.ui-state-active').removeClass('ui-state-active');
                });
                return $group.appendTo(ul);
            }

            function renderItem(parent, item) {
                var parentId = parent.attr('id');
                // Show groups only if empty request
                var display = lastRequestTerm ? '' : 'display: none';
                return $('<li class="' + parentId + '" style="' + display + '"></li>')
                    .append('<div>' + item.label + '</div>')
                    .appendTo(parent.closest('ul'));
            }

            var groupedItems = items.reduce(function (r, a) {
                var groupName = a.group.name;
                r[groupName] = r[groupName] || [];
                r[groupName].push(a);
                return r;
            }, Object.create(null));

            var orderedGroupedItems = {};
            Object.keys(groupedItems)
                .sort(function (a, b) {
                    return groupedItems[a][0].group.name.localeCompare(groupedItems[b][0].group.name);
                })
                .forEach(function(key) {
                    orderedGroupedItems[key] = groupedItems[key].sort(function (a, b) {
                        return a.label.localeCompare(b.label);
                });
            });

            $.each(orderedGroupedItems, function (groupName, groupItems) {
                renderGroup(ul, groupName, groupItems);
            });
        }
    } else if (multiSelect) {
        autocomplete.data("ui-autocomplete")._renderItem = function (ul, item) {
            var values = $comboboxValue.val();
            var checked = (values.split(SPECIAL_STRING_SEPARATOR).indexOf(item.value) > -1 ? 'checked' : '');

            return $("<li></li>")
                .append('<div><label><input type="checkbox"' + checked + '/>' + item.label + '</label></div>')
                .appendTo(ul);
        };

        autocomplete.data("ui-autocomplete").close = function (e) {
            clearTimeout(this.closing);
            if (e && e.type === 'menuselect') {
                return false;
            } else {
                this.closing = setTimeout(function () {
                    this.menu.element.is(":visible") && (this.menu.element.hide(), this._trigger("close", e));
                }.bind(this), 0);
            }
        }
    }
    $combobox.autocomplete('widget').insertAfter($modal.parent());
}

// token only is required
function comboboxSearch(token, additionalData) {
    return function searchData(request, response) {
        var data = Object.assign({token: token, query: request.term}, additionalData);
        $.ajax({
            url: this.url,
            dataType: "json",
            contentType: "application/json",
            data: data,
            success: function(data) {
                var result = this.mapper ? this.mapper(data) : data;
                response(result);
            }.bind(this),
            error: function (e) {
                console.log(e);
                alert('Server Error');
            }
        });
    }
}

var mapNameAndIdWithMe = mapNameAndId.bind(
    {
        trn: function (val) {
            return val.id === USER_ME_ID ? translator.get("me") : val.name;
        }
    }
);

function mapNameAndId (data) {
    return $.map(data, function (val) {
        var name = this.trn ? this.trn(val) : val.name;
        return {label: name, value: val.id};
    }.bind(this));
}

function mapName (data) {
    return $.map(data, function (val) {
        return {label: val.name, value: val.name};
    });
}
// --- Combobox ---

function showBtnLoad($btn) {
    var btnOriginalContent = $btn.html();
    $btn.data('original-content', btnOriginalContent);
    var loadingContent = '<span class="loader justify-content-center align-items-center">' +
        '<div style="margin-right: 5px">' + btnOriginalContent + '</div>' +
        '<div class="loader-bar"><div></div><div></div><div></div><div></div></div>' +
        '</span>';
    $btn.html(loadingContent);
}

function hideBtnLoad($btn) {
    $btn.html($btn.data('original-content'));
}

function cloneObject(source) {
    var target = null;
    if (source) {
        target = JSON.parse(JSON.stringify(source));
    }

    return target;
}

function filterFloat(value) {
    var ret = NaN;    
    if(/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/.test(value)) {
        ret = Number(value);
    }
    
    return ret;
}

function isNotEmptyString(str) {
    return str && str.trim().length > 0;
}

function convertDateToUTC(date) {
    return new Date(date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate(),
        date.getUTCHours(),
        date.getUTCMinutes(),
        date.getUTCSeconds());
}

function convertDateFromUTC(date) {
    return new Date(Date.UTC(date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds()
    ));
}

function formatTimezoneDate(date) {
    return date ? moment(date).tz(initializer.getTimezoneId()).format('L') : '';
}

function formatTimezoneTime(date, full) {
    return date ? moment(date).tz(initializer.getTimezoneId()).format(full ? 'LTS zz' : 'LT zz') : '';
}

function formatTimezoneTimeNoTZ(date, full) {
    return date ? moment(date).tz(initializer.getTimezoneId()).format(full ? 'LTS' : 'LT') : '';
}

function oldFormatUTCDate(date) {
    return date ? oldFormatDate(convertDateToUTC(date)) : '';
}

function oldFormatUTCTime(date, full) {
    return date ? oldFormatTime(convertDateToUTC(date)) : '';
}

function oldFormatDate(date) {
    if (!date) {
        return '';
    }
    var dateObject = getDateObject(date);
    return dateObject.month + '/' + dateObject.day + '/' + dateObject.year.substr(-2);
}

function oldFormatDateYYYYMMDD(date) {
    if (!date) {
        return '';
    }
    var dateObject = getDateObject(date);
    return dateObject.year + '/' + dateObject.month + '/' + dateObject.day;
}

function getDateObject(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1; //January is 0!
    var year = date.getFullYear().toString();
    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }
    return {
        day: day,
        month: month,
        year: year
    }
}

function oldFormatTime(date, full) {
    if (!date) {
        return '';
    }
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = hours > 12 ? PM : AM;
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return hours + ':' + minutes + (full ? ':' + seconds : '') + ' ' + ampm;
}

// conditions.js and transcript.js used old variant without UTC. everything else used old variant with UTC.
// new variant with initializer.getTimezoneId() does not need distinction UTC / no UTC.
function useNewFormat() {
    return typeof moment !== 'undefined' && typeof initializer !== 'undefined' && initializer.getTimezoneId();
}

function setMomentLocale(locale) {
    if (typeof moment !== 'undefined') {
        moment.locale(locale);
    }
}

function formatDate(date) {
    return useNewFormat() ? formatTimezoneDate(date) : oldFormatDate(date);
}

// returns Date object which shows the same date in the date picker as formatTimezoneDate(date)
function getDatePartForDisplay(date) {
    var m = moment(date).tz(initializer.getTimezoneId());
    return new Date(m.year(), m.month(), m.date());
}

function formatUTCDate(date) {
    return useNewFormat() ? formatTimezoneDate(date) : oldFormatUTCDate(date);
}

function formatUTCTime(date, full) {
    return useNewFormat() ? formatTimezoneTime(date, full) : oldFormatUTCTime(date, full);
}

function formatUTCDateTime(date, full) {
    return formatUTCDate(date) + ' ' + formatUTCTime(date, full)
}

function formatTime(date, full) {
    return useNewFormat() ? formatTimezoneTime(date, full) : oldFormatTime(date, full);
}

function formatTimeNoTZ(date, full) {
    return useNewFormat() ? formatTimezoneTimeNoTZ(date, full) : oldFormatTime(date, full);
}

function isPmLocale() {
    return !useNewFormat() || useNewFormat() && moment.localeData().longDateFormat('LT').toLowerCase().indexOf('a') > -1;
}

function padFormat(num, size) {
    var s = "000000000" + num;
    return s.substr(s.length - size);
}

function formatSeconds(secondsTime) {
    var seconds = secondsTime % 60;
    var minutes = secondsTime / 60;
    return Math.floor(minutes) + ':' + padFormat(Math.floor(seconds), 2);
}

function formatSecondsToTime(secondsTime) {
    var seconds = Math.floor(secondsTime % 60);
    var minutes = Math.floor(secondsTime / 60) % 60;
    var hours = Math.floor(secondsTime / 3600) % 24;
    var days = Math.floor(secondsTime / 86400);

    var secondsStr = padFormat(seconds, 2);
    var minutesStr = (hours > 0 || days > 0 ? padFormat(minutes, 2) : minutes);

    if (days > 0) {
        return days + 'd ' + hours + ':' + minutesStr + ':' + secondsStr;
    } else if (hours > 0) {
        return hours + ':' + minutesStr + ':' + secondsStr;
    }

    return minutesStr + ':' + secondsStr;
}

function parseTime(timeStr) {
    var timeParts = timeStr.split(':');
    var hours;
    var minutes;
    var seconds;

    if (isPmLocale()) {
        var isPm = timeParts[timeParts.length - 1].toUpperCase().indexOf(PM) !== -1;
        timeParts[timeParts.length - 1] = timeParts[timeParts.length - 1].replace(/\D/g, "");

        hours = +timeParts[0];
        minutes = +timeParts[1];
        seconds = timeParts.length > 2 ? +timeParts[2] : 0;

        if (isPm) {
            if (hours < 12) {
                hours += 12;
            }
        } else {
            if (hours === 12) {
                hours = 0;
            }
        }
    } else {
        hours = +timeParts[0];
        minutes = +timeParts[1];
        seconds = timeParts.length > 2 ? +timeParts[2] : 0;
    }

    var time = new Date();
    time.setHours(hours, minutes, seconds);
    return time;
}

// variables = {"{VARIABLE_NAME}": "VALUE TO INJECT INSTEAD OF {VARIABLE_NAME}", "{VAR2}": "VALUE2",...}
function injectVariables(html, variables) {
    var pattern = '';

    for (var v in variables) {
        if (pattern !== '') {
            pattern += '|';
        }

        pattern += v;
    }

    return html.replace(new RegExp(pattern, 'gm'), function($0) {
        return variables[$0] !== undefined ? variables[$0] : $0;
    });
}

function getUrl() {
    return (window.location !== window.parent.location)
        ? document.referrer
        : document.location.href;
}

function getBaseUrl() {
    return getUrl().split('?')[0];
}

function getUrlParams(url) {
    var vars = {};
    url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
        vars[key] = value;
    });
    return vars;
}

function getUserPhotoUrl(userIdOrLogin) {
    if (userIdOrLogin) {
        return 'tenantmgmt/download/user-photo?token=' + initializer.getToken() + '&id=' + userIdOrLogin;
    }
}

function getLayoutTemplate(file, fileTemplateId) {
    var fileWithParams = file
    var $templates = $('#' + fileTemplateId);
    if ($templates.length) {
        return $.Deferred().resolve($templates).promise();
    } else {
        var $templatePlace = $('<div>');
        $('#templates').append($templatePlace);
        var promise = $.Deferred();
        $templatePlace.load(fileWithParams, function () {
            $templates = $('#' + fileTemplateId);
            translator.translate($templates);
            promise.resolve($templates);
        });
        return promise
    }
}

function cloneTemplate($layoutTemplate, templateId) {
    return $layoutTemplate.find('#' + templateId).clone().removeAttr('id');
}

var urlRegexExp = new RegExp(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi);

function convertUrlsToTags(text) {
    return text.replace(urlRegexExp, function (url) {
        return '<a target="_blank" href="' + url + '">' + url + '</a>';
    });
}

function replaceBr(str) {
    var regex = /<br\s*[\/]?>/gi;
    return str.replace(regex, "\n");
}

function getEraseStr(eraseInfo, typeNameKey) {
    var eraseTime = !eraseInfo.eraseTime ? null : new Date(eraseInfo.eraseTime);
    var eraseLoginId = !eraseInfo.eraseLoginId ? translator.get('scheduler') : eraseInfo.eraseLoginId;
    var eraseStr;
    if (!typeNameKey) {
        if (!eraseTime) {
        	eraseStr = translator.get("contentErasedNoTime", eraseLoginId);
        } else {
        	eraseStr = translator.get("contentErased", formatDate(eraseTime), formatTime(eraseTime), eraseLoginId);
        }
    } else {
        if (!eraseTime) {
        	eraseStr = translator.get("typedContentErasedNoTime", translator.get(typeNameKey), eraseLoginId);
        } else {
        	eraseStr = translator.get("typedContentErased", translator.get(typeNameKey), formatDate(eraseTime), formatTime(eraseTime), eraseLoginId);
        }
    }
    if(eraseInfo.eraseReason) {
    	return eraseStr + translator.get("erasureReason", eraseInfo.eraseReason);
    } else {
    	return eraseStr;
    }    
}

function escapeHtmlBrackets(text) {
    return text.replace(/>/g, "&gt;").replace(/</g, "&lt;");
}

function changeImgAltAndTitle($img, translateKey) {
    $img.attr("alt", translator.get(translateKey));
    $img.attr("title", translator.get(translateKey));
    $img.attr("data-trn-key", translateKey);
}

function getSafeHtmlIdFromText(text) {
    if (!!text) {
        var safeText = getSafeTextForHtml(text);
        return safeText + new Date().getMilliseconds();
    } else {
        return '';
    }
}

function getSafeTextForHtml(text) {
    if (!!text) {
        return text.replace(/['"]/g, function (match) {
            return match === '"' ? '&#34;' : '&#39;';
        });
    } else {
        return '';
    }
}