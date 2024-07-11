!function(e){var t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={exports:{},id:a,loaded:!1};return e[a].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=e,n.c=t,n.p="/assets/",n(0)}([function(e,t,n){"use strict";window.sforce=window.sforce||{},sforce.opencti=n(1),sforce.opencti.initialize()},function(e,t,n){"use strict";var a=n(2),i=n(3),o=n(5),r=n(6),l=n(7),s=/^http[s]?:\/\/[\w-.]+(\.force\.com|\.salesforce\.com)(:\d+)?$/;e.exports={initialize:function(){var e=i.parseUrlQueryString(location.search),t=e.sfdcIframeOrigin;if(!(t&&e.mode&&s.test(t)&&0===t.indexOf(window.location.protocol)))throw"Failed to initialize Open CTI. Ensure that it is loaded from the right frame with correct URL parameters";a.sfdcIframeOrigin=e.sfdcIframeOrigin,a.mode=e.mode,window.addEventListener("message",i.processPostMessage,!1)},setSoftphonePanelVisibility:function(e){i.validateArguments(arguments);var t=e?e.callback:void 0;i.invokeApiCall("setSoftphonePanelVisibility",{visible:e.visible},t)},isSoftphonePanelVisible:function(e){i.validateArguments(arguments),i.validateCallback(e),i.invokeApiCall("isSoftphonePanelVisible",{},e.callback)},SCREENPOP_TYPE:{URL:"url",SOBJECT:"sobject",OBJECTHOME:"objecthome",LIST:"list",SEARCH:"search",NEW_RECORD_MODAL:"newRecord",FLOW:"flow"},screenPop:function(e){i.validateArguments(arguments);var t=e?e.callback:void 0;i.invokeApiCall("screenPop",{type:e.type,params:e.params},t)},CALL_TYPE:{INBOUND:"inbound",OUTBOUND:"outbound",INTERNAL:"internal"},searchAndScreenPop:function(e){i.validateArguments(arguments);var t=e?e.callback:void 0;i.invokeApiCall("searchAndScreenPop",{searchParams:e.searchParams,callType:e.callType,queryParams:e.queryParams,defaultFieldValues:e.defaultFieldValues,deferred:e.deferred,params:e.params},t)},getAppViewInfo:function(e){i.validateArguments(arguments),i.validateCallback(e),i.invokeApiCall("getAppViewInfo",{},e.callback)},saveLog:function(e){i.validateArguments(arguments),i.validateValueObject(e);var t=e?e.callback:void 0;i.invokeApiCall("saveLog",{object:e.value},t)},refreshView:function(e){i.validateArguments(arguments,!0);var t=e?e.callback:void 0;i.invokeApiCall("refreshView",{},t)},notifyInitializationComplete:function(e){var t=e?e.callback:void 0;i.invokeApiCall("notifyInitializationComplete",{},t)},setSoftphoneItemLabel:function(e){i.validateArguments(arguments);var t=e?e.callback:void 0;i.invokeApiCall("setSoftphoneItemLabel",{label:e.label},t)},setSoftphonePanelLabel:function(e){i.validateArguments(arguments);var t=e?e.callback:void 0;i.invokeApiCall("setSoftphonePanelLabel",{label:e.label},t)},setSoftphoneItemIcon:function(e){i.validateArguments(arguments);var t=e?e.callback:void 0;i.invokeApiCall("setSoftphoneItemIcon",{key:e.key},t)},setSoftphonePanelIcon:function(e){i.validateArguments(arguments);var t=e?e.callback:void 0;i.invokeApiCall("setSoftphonePanelIcon",{key:e.key},t)},setSoftphonePanelHeight:function(e){i.validateArguments(arguments);var t=e?e.callback:void 0;i.invokeApiCall("setSoftphonePanelHeight",{heightPX:e.heightPX},t)},setSoftphonePanelWidth:function(e){i.validateArguments(arguments);var t=e?e.callback:void 0;i.invokeApiCall("setSoftphonePanelWidth",{widthPX:e.widthPX},t)},getCallCenterSettings:function(e){i.validateArguments(arguments),i.validateCallback(e),i.invokeApiCall("getCallCenterSettings",{},e.callback)},onClickToDial:function(e){i.validateArguments(arguments),i.validateListener(e),i.invokeApiCall("onClickToDial",{},void 0,e.listener)},enableClickToDial:function(e){i.validateArguments(arguments,!0);var t=e?e.callback:void 0;i.invokeApiCall("enableClickToDial",{},t)},disableClickToDial:function(e){i.validateArguments(arguments,!0);var t=e?e.callback:void 0;i.invokeApiCall("disableClickToDial",{},t)},getSoftphoneLayout:function(e){i.validateArguments(arguments),i.validateCallback(e),i.invokeApiCall("getSoftphoneLayout",{},e.callback)},onNavigationChange:function(e){i.validateArguments(arguments),i.validateListener(e),i.invokeApiCall("onNavigationChange",{},void 0,e.listener)},runApex:function(e){i.validateArguments(arguments);var t=e?e.callback:void 0;i.invokeApiCall("runApex",{apexClass:e.apexClass,methodName:e.methodName,methodParams:e.methodParams},t)},hvs:r,subscribe:function(e){i.validateArguments(arguments),i.validateListener(e),i.validateChannelName(e);var t=e?e.callback:void 0,n=l.addSubscription(e.channelName,e.listener),a=function(a){a.success?a.subscription=n:(o.unregisterListener("subscribe",e.channelName,e.listener),l.getAndRemoveSubscription(n)),t&&t(a)};i.invokeApiCall("subscribe",{eventName:e.channelName,subscription:n},a,e.listener)},unsubscribe:function(e){i.validateArguments(arguments),i.validateSubscription(e);var t=e?e.callback:void 0,n=l.getAndRemoveSubscription(e.subscription);n&&(o.unregisterListener("subscribe",n.eventName,n.listener),o.getListenerCount("subscribe",n.eventName)||i.invokeApiCall("unsubscribe",{eventName:n.eventName},t))},publish:function(e){i.validateArguments(arguments),i.validateChannelName(e);var t=e?e.callback:void 0,n=i.serializeAndValidateMessage(e);i.invokeApiCall("publish",{eventName:e.channelName,message:n},t)}}},function(e,t){"use strict";e.exports={API_VERSION:47,API_TYPE:"opencti",sfdcIframeOrigin:null,mode:null}},function(e,t,n){"use strict";var a,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=n(2),r=n(4),l=n(5),s=(a=0,function(){return a++});e.exports={processPostMessage:function(e){var t=e.data;t&&t.apiVersion===o.API_VERSION&&t.apiType===o.API_TYPE&&e.origin===o.sfdcIframeOrigin&&(!0===t.shouldExecuteCallback&&r.executeCallback(t.methodName,t.callId,t.response),!0===t.shouldExecuteListener&&l.executeListeners(t.methodName,t.eventName,t.response))},parseUrlQueryString:function(e){var t={};if("string"!=typeof e)return t;if("?"===e.charAt(0)&&(e=e.slice(1)),0===e.length)return t;for(var n=e.split("&"),a=0;a<n.length;a++){var o=n[a].split("=");if(o[0])if(t[o[0]])if("object"===i(t[o[0]]))t[o[0]].push(o[1]?decodeURIComponent(o[1]):null);else{var r=t[o[0]];t[o[0]]=[],t[o[0]].push(r),t[o[0]].push(o[1]?decodeURIComponent(o[1]):null)}else t[o[0]]=o[1]?decodeURIComponent(o[1]):null}return t},invokeApiCall:function(e,t,n,a){var i={methodName:e,callId:s(),apiVersion:o.API_VERSION,apiType:o.API_TYPE,isCallbackRegistered:!1,isListenerRegistered:!1,args:t};"function"==typeof n&&(r.registerCallback(i.methodName,i.callId,n),i.isCallbackRegistered=!0),"function"==typeof a&&(l.registerListener(i.methodName,t.eventName,a),i.isListenerRegistered=!0),parent.postMessage(i,o.sfdcIframeOrigin)},validateCallback:function(e){if(!e||"function"!=typeof e.callback)throw new Error("Missing the required argument `callback`!")},validateListener:function(e){if(!e||"function"!=typeof e.listener)throw new Error("Missing the required argument `listener`!")},validateEventName:function(e){if(!e||!e.eventName||"string"!=typeof e.eventName)throw new Error("The argument `eventName` must be a non-empty string!")},validateChannelName:function(e){if(!e||!e.channelName||"string"!=typeof e.channelName)throw new Error("The argument `channelName` must be a non-empty string!")},serializeAndValidateMessage:function(e){if(!e)throw new Error("Missing arguments!");if(e.message){try{var t=JSON.parse(JSON.stringify(e.message))}catch(n){throw new Error(n.message)}if("object"!==(void 0===t?"undefined":i(t)))throw new Error("The argument `message` must be a serializable object or null!");return t}},validateSubscription:function(e){if(!e||!e.subscription||"object"!==i(e.subscription))throw new Error("The argument `subscription` must be an object!")},validatePayload:function(e){if(!e||"string"!=typeof e.payload)throw new Error("The argument `payload` must be a string!")},validateValueObject:function(e){if(!e||"object"!==i(e.value))throw new Error("Missing the required argument `value object`!")},validateArguments:function(e,t){if((t&&e.length||!t)&&(1!==e.length||"object"!==i(e[0])||!Object.keys(e[0]).length))throw new Error("Must pass in only one object which holds arguments to this API method call.")}}},function(e,t){"use strict";var n={},a=function(e,t){return e+"_"+t};e.exports={registerCallback:function(e,t,i){n[a(e,t)]=i},executeCallback:function(e,t,i){var o=a(e,t);n[o]&&(n[o].call(null,i),delete n[o])}}},function(e,t){"use strict";var n={};e.exports={registerListener:function(e,t,a){t?(n[e]=n[e]||{},n[e][t]=n[e][t]||[],n[e][t].push(a)):n[e]?n[e].push(a):n[e]=[a]},unregisterListener:function(e,t,a){var i,o;t?(n[e]=n[e]||{},i=n[e][t]||[]):i=n[e]||[],-1!==(o=i.indexOf(a))&&i.splice(o,1)},getListenerCount:function(e,t){var a;return t?(n[e]=n[e]||{},a=n[e][t]||[]):a=n[e]||[],a.length},executeListeners:function(e,t,a){var i;(i=t?n[e]&&n[e][t]:n[e])&&i.forEach((function(e){e.call(null,a)}))}}},function(e,t,n){"use strict";var a=n(3);e.exports={onWorkStart:function(e){a.validateArguments(arguments),a.validateListener(e),a.invokeApiCall("onWorkStart",{},void 0,e.listener)},completeWork:function(e){a.validateArguments(arguments);var t=e?e.callback:void 0;a.invokeApiCall("completeWork",{workId:e.workId,attributes:e.attributes},t)}}},function(e,t){"use strict";var n=new Map;e.exports={addSubscription:function(e,t){var a=Object.freeze({});return n.set(a,{eventName:e,listener:t}),a},getAndRemoveSubscription:function(e){var t=n.get(e);return n.delete(e),t}}}]);