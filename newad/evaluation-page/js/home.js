var evaluationHome = new function () {

    var refreshStatisticsTimerId;
    var refreshScoreTimerId;
    var statisticsStyleForLocale = {
      default: {width: '100px', height: '70px'},
      ru: {width: '120px', height: '70px'}
    };

    this.init = function (userToken, loginId) {
        var $appBody = $(".app-body");
        stateControl.init(loginId);

        $(window).resize(function () {
            var $rightPanel = $(".panel.right");
            $rightPanel.resizable("option", "maxWidth", calcMaxRightPanelWidth());
            $rightPanel.resizable("option", "minWidth", parseInt($rightPanel.css('min-width')));
            var $leftPanel = $(".panel.left");
            $leftPanel.resizable("option", "maxWidth", calcMaxLeftPanelWidth());
            $leftPanel.resizable("option", "minWidth", parseInt($leftPanel.css('min-width')));
        });

        $(window).on('beforeunload', function () {
            if (searchResultsControlFactory.isAnyChanged()) {
                return translator.get('leavePageWithModifiedQueriesMsg');
            }
        });

        initResizable();
        $('#tab-home').click(function () {
            stateControl.setSelectedTab('tab-home');
            refreshStatistics();
            clearInterval(refreshStatisticsTimerId);
            refreshStatisticsTimerId = setInterval(refreshStatistics, REFRESH_STATISTICS_INTERVAL);

            if (!initializer.getGlobalEvalPermissions().canSearch) {
                initScore();
            }
        });

        var statisticsContainer = $(".statistics-container");
        $(statisticsContainer).find(".loading").show();

        $appBody.on(EVENT_LOAD_SEARCHES, function (e, searchIds) {
            stateControl.filterQueryRelatedData(searchIds);
        });

        $appBody.on(EVENT_CREATE_SEARCH, function (e, data) {
            var folderToAddTo = searchTreeControl.getFolderToAddTo();
            if (!folderToAddTo) {
                return;
            }
            createSearch(data, folderToAddTo, true);
        });

        $appBody.on(EVENT_CLONE_SEARCH, function (e, data) {
            var nodeToCopy = searchTreeControl.getNode(data.id);
            var parentNode = searchTreeControl.getNode(nodeToCopy.parent);
            createSearch(data, parentNode, false)
                .then(function (created) {
                    data.id = created.id;
                    data.name = created.name;
                    data.editable = created.editable;
                    return api.saveSearch(data);
                }).then(function () {
                    openNewSearch(data);
                });
        });

        $appBody.on(EVENT_NEW_SEARCH, function (e, data) {
            openNewSearch(data);
        });

        $appBody.on(EVENT_OPEN_INTERACTION, function (e, data) {
            var initialTabId = tabs.getTabId(evaluationConsoleFactory.prefix, data.id);
            var $tab = $('.' + initialTabId);
            if ($tab.length) {
                tabs.openTab($tab);
            } else {
                var index = tabs.createAndOpenTab(evaluationConsoleFactory.prefix, data.id, getInteractionTabName(data));
                if (index >= 0) {
                    evaluationConsoleFactory.create(data, index);
                    var tabId = tabs.getTabId(evaluationConsoleFactory.prefix, data.id, index);
                    var tabState = {tabId: tabId, giid: data.globalInteractionId, type: TAB_TYPE_INTERACTION};
                    stateControl.addTabState(tabState);
                }
            }
        });

        $appBody.on(EVENT_UPDATE_SEARCH, function (e, data) {
            searchTreeControl.renameNode(data.id, data.name);
            var selectedNode = searchTreeControl.getSelectedNode();
            if (selectedNode && selectedNode.id === data.id) {
                // Refresh data
                searchControl.showDetails(selectedNode);
            }
        });

        if (initializer.getGlobalEvalPermissions().canSearch) {
            $(".panel.center").find(".score-tiles-panel").remove();
            searchTreeControl.init();
        } else {
            $(".panel.center")
                .addClass('score')
                .find(".search-tree-panel").remove();
            $(".panel.right").remove();
            initScore();
        }

        restorePanelsSize();
        api.getEvalsStatistics(function(data) {
            initStatistics(data, statisticsContainer);
            $(statisticsContainer).find(".loading").hide();
        }).then(function () {
            var tabsState = stateControl.getTabsState();
            if (tabsState.length) {
                return restoreTabsState(tabsState);
            }
        }).then(function () {
            var urlParams = getUrlParams(getUrl());
            if (urlParams.giid && (urlParams.cdrId || urlParams.mediaType)) {
                openTabWithParams(urlParams);
            }
        });

        refreshStatisticsTimerId = setInterval(refreshStatistics, REFRESH_STATISTICS_INTERVAL);
    };

    this.closeAllSearchesById = function (searchId) {
        var $tabs = $('.' + tabs.getTabId(searchResultsControlFactory.prefix, searchId));
        var $panels = $('.' + tabs.getPanelId(searchResultsControlFactory.prefix, searchId));
        $tabs.each(function (i, tab) {
            tabs.closeTab(tab.id, $panels[i].id);
        });
    };

    function createSearch (data, parentNode, select) {
        var nodeData = {
            name: data.name,
            parentId: parentNode.id,
            type: data.type,
            privacy: parentNode.data.privacy,
            randomizeSearch: false,
            editable: true,
            cloned: data.cloned
        };
        if (data.type === 'FOLDER') {
            nodeData.count = 0;
        }
        return api.createSearch(nodeData).then(function (createdSearch) {
            nodeData.id = createdSearch.id;
            nodeData.name = createdSearch.name;
            searchTreeControl.addNode(nodeData, select);
            $('#add-node-modal').trigger(EVENT_CREATE_SEARCH_DONE);
            return nodeData;
        });
    }

    function openNewSearch (data) {
        if (conditionsControlFactory.hasConditionsItems(data.conditions)) {
            if (conditionsControlFactory.hasCorrectTextSearchConditions(data.conditions)) {
                var existingTabId = searchResultsControlFactory.getSearchTabIdWithSameConditions(data.id, data);
                var $existingTab = !!existingTabId ? $('#' + existingTabId) : $();

                if ($existingTab.length) {
                    var existingTabIndex = tabs.getTabIndex(existingTabId, searchResultsControlFactory.prefix, data.id);
                    searchResultsControlFactory.search(data.id, existingTabIndex, data)
                         // open tab after a search in order to prevent searching with old conditions when a tab has not yet been opened
                        .then(function () {tabs.openTab($existingTab);});
                } else {
                    var index = tabs.createAndOpenTab(searchResultsControlFactory.prefix, data.id, data.name);
                    searchResultsControlFactory.search(data.id, index, data);
                    var tabId = tabs.getTabId(searchResultsControlFactory.prefix, data.id, index);
                    var tabState = {tabId: tabId, dataId: data.id, type: TAB_TYPE_SEARCH};
                    stateControl.addTabState(tabState);
                }
            } else {
                modals.showInfo('incorrectTextSearchMsg');
            }
        } else {
            modals.showInfo('emptySearchMsg');
        }
    }

    function restoreTabsState(tabsState) {
        var apiCalls = $.Deferred().resolve().promise();
        $.each(tabsState, function (i, tab) {
            switch (tab.type) {
                case TAB_TYPE_SEARCH:
                    apiCalls = apiCalls
                        .then(function () {return api.getSearch(tab.dataId)})
                        .then(null, function () {stateControl.removeTabState(tab); return $.Deferred().resolve()})
                        .then(restoreSearch);
                    break;
                case TAB_TYPE_COUNTER:
                    apiCalls = apiCalls
                        .then(function () {return tab})
                        .then(restoreCounter);
                    break;
                case TAB_TYPE_INTERACTION:
                    apiCalls = apiCalls
                        .then(function () {return api.searchByGiid(tab.giid)})
                        .then(null, function () {stateControl.removeTabState(tab); return $.Deferred().resolve()})
                        .then(restoreInteraction);
                    break;
            }
        });
        return apiCalls.then(function () {
            tabs.calcTabHContentHeightDelayed();
            return tabs.openTab($('#' + stateControl.getSelectedTab()));
        })
    }

    function restoreSearch(data) {
        if (data) {
            var tabInfo = tabs.createTab(searchResultsControlFactory.prefix, data.id, data.name);
            var index = tabInfo.index;
            var tabId = tabs.getTabId(searchResultsControlFactory.prefix, data.id, index);
            var $tab = $('#' + tabId);
            $tab.find('a').one('click', function () {
                var conditions = conditionsControlFactory.wrapWithBlock(data.criteriaList);
                conditions.randomizeSearch = data.randomizeSearch;
                conditions.qmLayout = data.qmLayout;
                conditions.editable = data.editable;
                searchResultsControlFactory.search(data.id, index, conditions);
            });
            return $tab;
        }
    }
    function restoreCounter(tab) {
        if (tab) {
            var tabInfo = tabs.createTab(searchResultsControlFactory.prefix, tab.dataId, tab.name);
            var tabId = tabs.getTabId(searchResultsControlFactory.prefix, tab.dataId, tabInfo.index);
            var $tab = $('#' + tabId);
            $tab.find('a').one('click', function () {
                searchResultsControlFactory.search(tab.dataId, 0, tab.data);
            });
            return $tab;
        }
    }
    function restoreInteraction(data) {
        if (data && data.data.length) {
            var interactionData = data.data[0];
            var tabInfo = tabs.createTab(evaluationConsoleFactory.prefix, interactionData.id, getInteractionTabName(interactionData));
            var index = tabInfo.index;
            var tabId = tabs.getTabId(evaluationConsoleFactory.prefix, interactionData.id, index);
            var $tab = $('#' + tabId);
            $tab.find('a').one('click', function () {
                evaluationConsoleFactory.create(interactionData, index);
            });
            return $tab;
        }
    }

    function openTabWithParams(params) {
        api.searchByGiid(params.giid)
            .done(function (data) {
                    var interactionData = data.data[0];
                    if (interactionData) {
                        interactionData.mediaType = params.mediaType;
                        interactionData.cdrId = params.cdrId;
                        $('.app-body').trigger(EVENT_OPEN_INTERACTION, [interactionData]);
                    }
                })
            .fail(function () {/* do nothing */});
    }

    function calcMaxRightPanelWidth() {
        return $(".panel.center").width() + $(".panel.right").width() - parseInt($(".panel.center").css("min-width"));
    }

    function calcMaxLeftPanelWidth() {
        return $(".panel.left").width() + $(".panel.center").width() - parseInt($(".panel.center").css("min-width"));
    }

    function initResizable() {
        var $rightPanel = $(".panel.right");

        $rightPanel.resizable({
            minWidth: parseInt($rightPanel.css('min-width')),
            maxWidth: calcMaxRightPanelWidth(),
            handles: "w",
            helper: "resizable-helper-horizontal-w",
            stop: function (event, ui) {
                ui.element.css({ height: '', left: 0 });
                savePanelsSize();
            }
        });

        var $leftPanel = $(".panel.left");

        $leftPanel.resizable({
            minWidth: parseInt($leftPanel.css('min-width')),
            maxWidth: calcMaxLeftPanelWidth(),
            handles: "e",
            helper: "resizable-helper-horizontal-e",
            stop: function (event, ui) {
                ui.element.css({ height: '', left: 0 });
                savePanelsSize();
            }
        });
    }

    function savePanelsSize() {
        var parent = $('.resizable').width();
        var left = Math.round($('.panel.left').width() / parent * 100 * 100) / 100;
        var right = Math.round($('.panel.right').width() / parent * 100 * 100) / 100;
        var panelSize = {left: left, right: right};
        stateControl.setHomePanelsSize(panelSize);
    }

    function restorePanelsSize() {
        var panelSize = stateControl.getHomePanelsSize();
        if (panelSize) {
            $('.panel.left').css('width', panelSize.left + '%');
            $('.panel.right').css('width', panelSize.right + '%');
        }
    }
    
    function initStatistics(evaluationStatistics, statisticsContainer) {
        for (var i = 0; i < evaluationStatistics.length; i++) {
            var $statisticsColumn = $("#statistics-column-template").clone().prop("id", "statistics-column-template" + i);

            var group = evaluationStatistics[i];
            var $columnName = $($statisticsColumn).find(".statistics-column-label");
            $columnName.css(getStatisticsStyle());
            $($columnName).text(group.name);
            
            var items = group.items;
            for (var j = 0; j < items.length; j++) {
                var item = items[j];
                var $statisticsItem = $("#statistics-item-template").clone().prop("id", "statistics-item-template" + j);
                $statisticsItem.css(getStatisticsStyle());
                $statisticsItem.click(function ($statisticsItem, group, item) {
                    var tabId = item.groupType + '_' + item.type;
                    var tabName = group.name + ' ' + item.name;
                    setStatisticBadge($statisticsItem.find(".count-badge"), 0);
                    var index = tabs.createOrOpenTab(searchResultsControlFactory.prefix, tabId, tabName);
                    searchResultsControlFactory.search(tabId, index || 0, item);
                    if (index || index === 0) {
                        var fullTabId = tabs.getTabId(searchResultsControlFactory.prefix, tabId, index);
                        stateControl.addTabState({tabId: fullTabId, dataId: tabId, data: item, name: tabName, type: TAB_TYPE_COUNTER});
                    }
                }.bind(null, $statisticsItem, group, item));
                $statisticsItem.find(".count-name").text(item.name);

                if (item.type === STAT_MY_INTERACTIONS) {
                    $statisticsItem.find(".count-number").remove();
                } else {
                    $statisticsItem.find(".count-number").text(item.count);
                }

                $statisticsColumn.append($statisticsItem);
            }
            
            $(statisticsContainer).append($statisticsColumn);
        }                                      
    }

    function getStatisticsStyle() {
        var locale = initializer.getLocale();

        if (!!locale) {
            var styleKey = Object.keys(statisticsStyleForLocale).find(function (key) {
                return locale.startsWith(key)
            });

            return !!styleKey && !!statisticsStyleForLocale[styleKey]
                ? statisticsStyleForLocale[styleKey]
                : statisticsStyleForLocale.default;
        }

        return statisticsStyleForLocale.default;
    }

    function refreshStatistics() {
        api.getEvalsStatistics(function(data) {
            var $counters = $(".statistics-container").find('.count');
            var index = 0;
            data.forEach(function (group) {
                group.items.forEach(function (item) {
                    var $counter = $($counters[index++]);
                    var $countNumber = $counter.find('.count-number');
                    if (item.type === STAT_PENDING_CONFIRMATION || item.type === STAT_PENDING_CALIBRATION
                        || item.type === STAT_SCHEDULED || item.type === STAT_DISPUTED || item.type === STAT_FAILED) {
                        var $badge = $counter.find('.count-badge');
                        var prevCount = parseInt($countNumber.text());
                        var prevBadge = parseInt($badge.text());
                        var badge = Math.max(prevBadge + (item.count - prevCount), 0);
                        setStatisticBadge($badge, badge);
                    }
                    $countNumber.text(item.count);
                })
            });
        });
    }

    function setStatisticBadge($badge, badge) {
        $badge.text(badge);
        if (badge > 0) {
            $badge.show();
        } else {
            $badge.hide();
        }
    }

    function initScore() {
        scoreTilesControl.init();

        if (refreshScoreTimerId !== null && refreshScoreTimerId !== undefined) {
            clearInterval(refreshScoreTimerId);
        }

        refreshScoreTimerId = setInterval(function () {scoreTilesControl.init();}, REFRESH_SCORE_INTERVAL);
    }

    function getInteractionTabName(data) {
        return data.agentName || translator.get('system');
    }
};