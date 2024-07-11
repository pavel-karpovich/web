var tabs = new function () {
    this.createOrOpenTab = function (prefix, id, tabName) {
        var initialTabId = this.getTabId(prefix, id);
        var $tab = $('.' + initialTabId);
        if ($tab.length) {
            this.openTab($tab);
        } else {
            return this.createAndOpenTab(prefix, id, tabName);
        }
    };

    this.createAndOpenTab = function (prefix, id, tabName) {
        var tabInfo = this.createTab(prefix, id, tabName);
        this.openTab(tabInfo.tab);
        return tabInfo.index;
    };

    this.createTab = function (prefix, id, tabName) {
        var initialTabId = this.getTabId(prefix, id);
        var initialPanelId = this.getPanelId(prefix, id);
        var $tab = $('.' + initialTabId);
        var tabIndex = $tab.length;
        if (tabIndex) {
            tabIndex = parseInt($tab[$tab.length - 1].id.slice(-1)) + 1;
        }
        var tabId = this.getTabId(prefix, id, tabIndex);
        var panelId = this.getPanelId(prefix, id, tabIndex);
        $tab = $('<li id="' + tabId + '" class="nav-item ' + initialTabId + '"><a class="nav-link" data-toggle="tab" href="#' + panelId + '" role="tab">'
            + escapeHtmlBrackets(tabName) + '</a><button class="close" type="button" >×</button></li>');
        $tab.find('.close').on('click', function () {this.closeTab(tabId, panelId)}.bind(this));
        $tab.find('a').click(function () {stateControl.setSelectedTab(tabId);this.calcTabHContentHeightDelayed();}.bind(this));
        $('.nav-tabs.home-tabs').append($tab);
        this.createPanelOnly(panelId, initialPanelId);
        this.calcTabHContentHeight();
        return {id: tabId, index: tabIndex, tab: $tab};
    };

    this.createPanelOnly = function(id, classes) {
        classes = classes || '';
        $('.tab-content.home-tabs-content').append('<div class="tab-pane ' + classes + '" id="' + id + '" role="tabpanel"></div>');
        this.calcTabHContentHeight();
    };

    this.openTab = function ($tab) {
        $tab.find('a').trigger('click');
        this.calcTabHContentHeight();
    };

    this.closeTab = function (tabId, panelId) {
        var $tabToCLose = $('#' + tabId);
        if ($tabToCLose.find('a').hasClass('active')) {
            $tabToCLose.prev().find('a').trigger('click');
        }
        $tabToCLose.remove();
        $('#' + panelId).remove();
        stateControl.removeTabState({tabId: tabId});
        this.calcTabHContentHeight();
    };

    this.addWindowResizeEventHandler = function () {
        $(window).resize(this.calcTabHContentHeight);
    };

    this.calcTabHContentHeight = function () {
       var headerHeight = $('.app-body .header').height();
       var contentHeight = 'calc(100vh - ' + headerHeight +'px)';
       $('.app-box').css('height', contentHeight);
    };

    this.calcTabHContentHeightDelayed = function () {
        setTimeout(this.calcTabHContentHeight, 300);
    };

    this.buildId = function (prefix, baseId) {
        return prefix + '_' + baseId;
    };

    this.getTabId = function (prefix, id, index) {
        return index || index === 0
            ? 'tab-' + prefix + '-' + id + '_' + index
            : 'tab-' + prefix + '-' + id;
    };

    this.getTabIndex = function (tabId, prefix, id) {
        return +tabId.replace(this.getTabId(prefix, id) + '_', '');
    };

    this.getPanelId = function (prefix, id, index) {
        return index || index === 0
            ? 'panel-' + prefix + '-' + id + '_' + index
            : 'panel-' + prefix + '-' + id;
    };
};
