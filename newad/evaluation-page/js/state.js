var stateControl = new function () {

    var GLOBAL_KEY = 'qm-eval';

    var TABS_KEY = 'tabs';
    var SELECTED_TAB_KEY = 'selected-tab';
    var COLLAPSED_CONDITION_KEY = 'collapsed-condition';
    var HOME_PANELS_SIZE_KEY = 'home-panels-size';
    var CONSOLE_PANELS_SIZE_KEY = 'console-panel-size';
    var FORM_AREA_VIEWER_SIZE_KEY = 'form-area-viewer-size';
    var SEARCH_RESULT_COLUMNS_STATE_KEY = 'search-result-columns-state';
    var SEARCH_RESULT_COLUMNS_SORT_KEY = 'search-result-columns-sort';
    var SEARCH_RESULT_COLUMNS_TIMESTAMP_KEY = 'search-result-columns-timestamp';

    var ID_REGEX = new RegExp(buildKey('.*[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}.*'), 'i');

    var login;

    // ===== Public Methods =====
    this.init = function(loginId) {
        login = loginId;
    };

    this.addTabState = function (tabData) {
        var tabs = this.getTabsState();
        tabs.push(tabData);
        save(TABS_KEY, tabs)
    };

    this.removeTabState = function (tabData) {
        var tabs = this.getTabsState();
        var index = tabs.findIndex(function(t) { return t.tabId === tabData.tabId; });
        if (index > -1) {
            tabs.splice(index, 1);
            save(TABS_KEY, tabs);
        }
    };

    this.getTabsState = function () {
        return load(TABS_KEY) || [];
    };

    this.setSelectedTab = function (tabId) {
        save(SELECTED_TAB_KEY, tabId);
    };

    this.getSelectedTab = function () {
        return load(SELECTED_TAB_KEY);
    };

    this.setCollapsedCondition = function (collapsed) {
        save(COLLAPSED_CONDITION_KEY, collapsed)
    };

    this.isCollapsedCondition = function () {
        var collapsed = load(COLLAPSED_CONDITION_KEY);
        return typeof collapsed === 'boolean' ? collapsed : true;
    };

    this.setHomePanelsSize = function (sizes) {
        save(HOME_PANELS_SIZE_KEY, sizes);
    };

    this.getHomePanelsSize = function () {
        return load(HOME_PANELS_SIZE_KEY);
    };

    this.setConsolePanelSize = function (sizes) {
        save(CONSOLE_PANELS_SIZE_KEY, sizes);
    };

    this.getConsolePanelSize = function () {
        return load(CONSOLE_PANELS_SIZE_KEY);
    };

    this.setFormAreaViewerSize = function(size) {
        save(FORM_AREA_VIEWER_SIZE_KEY, size);
    };

    this.getFormAreaViewerSize = function() {
        return load(FORM_AREA_VIEWER_SIZE_KEY);
    };

    this.setSearchResultColumnsState = function (id, columns) {
        save(queryKey(SEARCH_RESULT_COLUMNS_STATE_KEY, id), columns);
        save(queryKey(SEARCH_RESULT_COLUMNS_TIMESTAMP_KEY, id), +new Date());
    };

    this.getSearchResultColumnsState = function (id) {
        return load(queryKey(SEARCH_RESULT_COLUMNS_STATE_KEY, id));
    };

    this.setSearchResultColumnsSort = function (id, columns) {
        save(queryKey(SEARCH_RESULT_COLUMNS_SORT_KEY, id), columns);
        save(queryKey(SEARCH_RESULT_COLUMNS_TIMESTAMP_KEY, id), +new Date());
    };

    this.getSearchResultColumnsSort = function (id) {
        return load(queryKey(SEARCH_RESULT_COLUMNS_SORT_KEY, id));
    };

    this.setSearchResultColumnsTimestamp = function (id, timestamp) {
        save(queryKey(SEARCH_RESULT_COLUMNS_TIMESTAMP_KEY, id), timestamp);
    };

    this.setSearchResultColumnsLayout = function (id, layout) {
        save(queryKey(SEARCH_RESULT_COLUMNS_STATE_KEY, id), layout.state);
        save(queryKey(SEARCH_RESULT_COLUMNS_SORT_KEY, id), layout.sort);
        save(queryKey(SEARCH_RESULT_COLUMNS_TIMESTAMP_KEY, id), layout.timestamp);
    };

    this.getSearchResultColumnsLayout = function (id) {
        var layout = {
            state: load(queryKey(SEARCH_RESULT_COLUMNS_STATE_KEY, id)),
            sort: load(queryKey(SEARCH_RESULT_COLUMNS_SORT_KEY, id)),
            timestamp: load(queryKey(SEARCH_RESULT_COLUMNS_TIMESTAMP_KEY, id))
        };

        return !layout.state && !layout.sort && !layout.timestamp ? null : layout;
    };

    this.filterQueryRelatedData = function(ids) {
        // Remove all items which includes obsolete id in key
        var keysToRemove = findKeys(ID_REGEX);
        ids.forEach(function (id) {
            var i = keysToRemove.length;
            while (i--) {
                var key = keysToRemove[i];
                if (~key.indexOf(id)) {
                    keysToRemove.splice(i, 1);
                }
            }
        });
        keysToRemove.forEach(function (value) { getStorage().removeItem(value); });

        // Remove all opened tabs with obsolete id
        var tabs = this.getTabsState().filter(function (tab) {return tab.type !== TAB_TYPE_SEARCH || ~ids.indexOf(tab.dataId);});
        save(TABS_KEY, tabs);
    };

    this.buildKey = function (key) {
        return buildKey(key);
    };

    // ===== Private Methods =====
    function save(key, state) {
        getStorage().setItem(buildKey(key), JSON.stringify(state));
    }

    function load(key) {
        var stateString = getStorage().getItem(buildKey(key));
        return JSON.parse(stateString);
    }

    function buildKey(key) {
        return GLOBAL_KEY + '_' + login + '_' + key;
    }

    function queryKey(key, query) {
        return key + '_' + query;
    }

    function findKeys (query) {
        var results = [];
        for (var key in localStorage) {
            if (localStorage.hasOwnProperty(key)) {
                if (key.match(query) || (!query && typeof key === 'string')) {
                    results.push(key);
                }
            }
        }
        return results;
    }

    function getStorage() {
        return localStorage;
    }
};
