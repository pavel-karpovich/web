var searchResultsControlFactory = new function() {

    var prefix = 'search-result'
    this.prefix = prefix

    var openedResults = {}

    this.search = function(id, index, conditionsOrStatistic) {
        return getLayoutTemplate('/agent/evaluation-page/search-result-layout-template.html', 'search-result-layout-template')
            .then(function($template) {
                var tabId = tabs.getTabId(prefix, id, index)
                var searchResultsControl = openedResults[tabId]
                var controlPromise = $.Deferred().resolve(searchResultsControl).promise()

                if (!searchResultsControl) {
                    var conditionsPromise = isStatistic(conditionsOrStatistic)
                        ? api.getStatisticsCriterion(conditionsOrStatistic).then(function(data) {
                            var conditions = conditionsControlFactory.wrapWithBlock(data.criteriaList)
                            conditions.randomizeSearch = data.randomizeSearch
                            conditions.qmLayout = data.qmLayout
                            conditions.editable = data.editable
                            return conditions
                        })
                        : $.Deferred().resolve(conditionsOrStatistic).promise()

                    controlPromise = conditionsPromise.then(function(conditions) {
                        var control = new SearchResultsControl(id, index, conditions, $template)
                        openedResults[tabId] = control
                        return control
                    })
                }

                return controlPromise.then(function(control) {
                    return control.search()
                })
            })
    }

    this.isAnyChanged = function() {
        for (var key in openedResults) {
            if (openedResults.hasOwnProperty(key)) {
                var changed = openedResults[key].isChanged()
                if (changed) {
                    return true
                }
            }
        }
        return false
    }

    this.getSearchTabIdWithSameConditions = function(id, conditionsOrStatistic) {
        var initialTabId = tabs.getTabId(prefix, id)
        var openedTabIds = $('.' + initialTabId).map(function() { return this.id }).get()
        var loadedTabIds = Object.keys(openedResults)
            .filter(function(k) { return k.startsWith(initialTabId) })
        var notLoadedTabIds = $(openedTabIds).not(loadedTabIds).get()

        // find first opened and loaded search if exists
        var loadedSameSearchTabId = loadedTabIds
            .filter(function(k) { return !conditionsUpdated(openedResults[k], conditionsOrStatistic) })[0]

        return !loadedSameSearchTabId && !!notLoadedTabIds.length
            ? notLoadedTabIds[0]
            : loadedSameSearchTabId
    }

    function conditionsUpdated(searchResultsControl, conditions) {
        var oldConditionsData = searchResultsControl.conditionsControl.getAllData()

        // Order of properties for oldConditions and newConditions is important for comparison with JSON.stringify
        var oldConditions = {
            conditions: oldConditionsData.conditions,
            objectType: oldConditionsData.objectType,
            randomizeSearch: searchResultsControl.randomizeSearch,
        }
        var newConditions = {
            conditions: conditions.conditions,
            objectType: conditions.objectType,
            randomizeSearch: conditions.randomizeSearch,
        }

        var omitProps = function(key, value) {
            return key === 'valid' ? undefined : value
        }
        var updated = JSON.stringify(oldConditions, omitProps) !== JSON.stringify(newConditions, omitProps)
        console.log('COMPARING CONDITIONS', {oldConditions: oldConditions, newConditions: newConditions, updated: updated})
        return updated
    }

    function isStatistic(conditionsOrStatistic) {
        return conditionsOrStatistic && conditionsOrStatistic.groupType && conditionsOrStatistic.type
    }

    function SearchResultsControl(id, index, condition, $template) {
        var that = this

        this.id = id
        this.index = index
        this.initialCondition = condition
        this.qmLayout = this.initialCondition.qmLayout ? JSON.parse(this.initialCondition.qmLayout) : null

        this.randomizeSearch = this.initialCondition.randomizeSearch
        this.applyDefaultLayout = false
        this.readonly = !this.initialCondition.editable

        this.panelId = getThisPanelId(id, index)
        this.menuId = 'sr-context-menu-' + this.panelId
        var tabId = getThisTabId(id, index)

        this.$panel = $('#' + this.panelId)
        this.$tab = $('#' + tabId)
        this.name = this.$tab.find('a').text()

        this.$panel.html(cloneTemplate($template, 'search-results-template'))
        this.$panel.find('.title-text').text(this.name)
        this.conditionsControl = conditionsControlFactory.create(this.$panel)

        if (this.initialCondition) {
            this.conditionsControl.load(this.initialCondition)
        }

        this.rowWithError = undefined
        this.setChanged(condition.changed)
        this.collapsed = stateControl.isCollapsedCondition()

        this.gridOptions = {
            defaultColDef: {
                minWidth: 50,
            },
            columnDefs: [
                {headerName: '', field: 'mediaType', lockPosition: true, minWidth: 35, width: 50, cellRenderer: mediaTypeRenderer},
                {headerName: translator.get('sentiment'), headerTooltip: translator.get('sentiment'), field: 'sentiment', cellRenderer: sentimentRenderer},
                {headerName: translator.get('csat'), headerTooltip: translator.get('csat'), field: 'csat'},
                {headerName: translator.get('service'), headerTooltip: translator.get('service'), field: 'service'},
                {headerName: translator.get('team'), headerTooltip: translator.get('team'), field: 'team', valueFormatter: teamFormatter},
                {headerName: translator.get('agent'), headerTooltip: translator.get('agent'), field: 'agentName'},
                {headerName: translator.get('dateTime'), headerTooltip: translator.get('dateTime'), field: 'dateTime', valueFormatter: datetimeFormatter},
                {headerName: translator.get('customer'), headerTooltip: translator.get('customer'), field: 'customer'},
                {headerName: translator.get('nps'), headerTooltip: translator.get('nps'), field: 'nps'},
                {headerName: translator.get('fcr'), headerTooltip: translator.get('fcr'), field: 'fcr', hide: true, cellRenderer: fcrRenderer},
                {headerName: translator.get('scenario'), headerTooltip: translator.get('scenario'), field: 'scenario', hide: true},
                {headerName: translator.get('durationColumn'), headerTooltip: translator.get('durationColumn'), field: 'duration', hide: true, valueFormatter: durationFormatter},
                {headerName: translator.get('disposition'), headerTooltip: translator.get('disposition'), field: 'disposition', hide: true},
                {headerName: translator.get('recording'), headerTooltip: translator.get('recording'), field: 'recording', hide: true, cellRenderer: recordingRenderer},
                {headerName: translator.get('score'), headerTooltip: translator.get('score'), field: 'evaluationScore', hide: true},
                {headerName: translator.get('status'), headerTooltip: translator.get('status'), field: 'evaluationStatus', valueFormatter: evaluationStatusFormatter},
                {headerName: translator.get('evaluator'), headerTooltip: translator.get('evaluator'), field: 'evaluatorName', hide: true},
            ],
            suppressDragLeaveHidesColumns: true,
            enableColResize: true,
            enableSorting: true,
            enableFilter: true,
            rowSelection: 'multiple',
            rowDeselection: true,
            rowHeight: 30,
            rowClassRules: {
                'has-error': 'data.error',
            },
            getRowNodeId: function(data) { return buildRowId(data.globalInteractionId, data.mediaType) },
            onRowDoubleClicked: function(e) { openInteraction(e.data, e.api) },
            onRowSelected: function(e) {
                this.removeRowError()
                this.updateAssignButtons(e.api.getSelectedNodes().length)
            }.bind(this),
            onGridReady: function(e) {
                var loadLayout = function(layout, timestamp) {
                    if (layout) {
                        if (layout.state) {
                            e.columnApi.setColumnState(layout.state)
                        }

                        if (layout.sort) {
                            e.api.setSortModel(layout.sort)
                        }
                    }

                    stateControl.setSearchResultColumnsLayout(this.id, {
                        state: e.columnApi.getColumnState(),
                        sort: e.api.getSortModel(),
                        timestamp: timestamp,
                    })
                }.bind(this)

                var localQmLayout = stateControl.getSearchResultColumnsLayout(this.id)
                var deferColumnsMenuInit = false

                if (!!this.qmLayout && !!localQmLayout) {
                    loadLayout(localQmLayout, +new Date())

                    if (this.qmLayout.timestamp > localQmLayout.timestamp) {
                        deferColumnsMenuInit = true
                        var message = translator.get('defaultLayoutChangedMsg', this.name)
                        modals.showYesNo(
                            message,
                            function() { loadLayout(this.qmLayout, this.qmLayout.timestamp) }.bind(this),
                            null,
                            function() { e.api.sizeColumnsToFit(); this.initColumnsMenu() }.bind(this),
                        )
                    }
                } else {
                    if (localQmLayout) {
                        loadLayout(localQmLayout, localQmLayout.timestamp)
                    } else if (this.qmLayout) {
                        loadLayout(this.qmLayout, this.qmLayout.timestamp)
                    }
                }

                e.api.sizeColumnsToFit()

                if (!deferColumnsMenuInit) {
                    this.initColumnsMenu()
                }
            }.bind(this),
            onColumnResized: function(e) {
                if (e.source === 'uiColumnDragged' && e.column) {
                    var columns = e.column.columnApi.getAllGridColumns()
                    if (e.finished) {
                        $.each(columns, function(i, item) {
                            item.colDef.suppressSizeToFit = false
                        })
                        stateControl.setSearchResultColumnsState(this.id, e.column.columnApi.getColumnState())
                    } else {
                        var index = columns.findIndex(function(el) { return el.colId === e.column.colId })
                        $.each(columns.slice(0, index + 1), function(i, item) {
                            item.colDef.suppressSizeToFit = true
                        })
                    }
                    e.column.gridApi.sizeColumnsToFit()
                }
            }.bind(this),
            onColumnVisible: function(e) {
                e.api.sizeColumnsToFit()
                stateControl.setSearchResultColumnsState(this.id, e.columnApi.getColumnState())
                if (e.visible) {
                    var $menu = $('#' + this.menuId)
                    var menuBtn = this.$panel.find('.ag-header div[col-id=\'' + e.column.colId + '\'] .ag-header-cell-menu-button')[0]
                    this.prepareColumnMenu($menu, menuBtn)
                }
            }.bind(this),
            onColumnMoved: function(e) {
                stateControl.setSearchResultColumnsState(this.id, e.columnApi.getColumnState())
            }.bind(this),
            onSortChanged: function(e) { stateControl.setSearchResultColumnsSort(this.id, e.api.getSortModel()) }.bind(this),
            onRowDataChanged: function(e) { e.api.sizeColumnsToFit() },
        }

        var eGridDiv = this.$panel.find('.results-table')[0]
        new agGrid.Grid(eGridDiv, this.gridOptions)

        // add resize handler
        $(window).on('resize.search-result-' + this.panelId, function() {
            this.gridOptions.api.sizeColumnsToFit()
        }.bind(this))

        this.$tab.find('a').on('shown.bs.tab', function() {
            // add resize handler
            $(window).on('resize.search-result-' + this.panelId, function() {
                this.gridOptions.api.sizeColumnsToFit()
            }.bind(this))
            // fit table size
            this.gridOptions.api.sizeColumnsToFit()
            // prepare columns' menu after hide
            setTimeout(function() {
                var $menu = $('#' + this.menuId)
                this.$panel.find('.ag-header-cell-menu-button').each(function(i, menuBtn) {
                    this.prepareColumnMenu($menu, menuBtn)
                }.bind(this))
            }.bind(this), 100)
        }.bind(this))

        this.$tab.find('a').on('hide.bs.tab', function() {
            $(window).off('resize.search-result-' + this.panelId)
        }.bind(this))

        SearchResultsControl.prototype.initColumnsMenu = function() {
            var $menu = $('#sr-context-menu-template').clone().prop('id', this.menuId)
            $.each(this.gridOptions.columnApi.getAllGridColumns(), function(i, column) {
                var columnName = column.colDef.headerName
                if (columnName) {
                    var $colMenuItem = $('#sr-columns-context-menu-item-template').clone().removeAttr('id')
                    var itemId = this.menuId + column.colId
                    $colMenuItem.find('label').text(columnName).attr('for', itemId)
                    $colMenuItem.find('input').attr('id', itemId).attr('name', itemId)
                    $colMenuItem.data('colId', column.colId)
                    $menu.append($colMenuItem)
                    if (column.visible) {
                        $colMenuItem.find('input').prop('checked', true)
                    }
                }
            }.bind(this))
            this.$panel.append($menu)
            $menu.controlgroup({direction: 'vertical'})

            $('body').click(function(e) {
                // Do not close on menu checkbox click
                if ($(e.target).hasClass('ui-checkboxradio ui-helper-hidden-accessible')) {
                    return
                }
                $menu.hide()
            })
            this.$panel.find('.ag-header-cell-menu-button').each(function(i, menuBtn) {
                this.prepareColumnMenu($menu, menuBtn)
            }.bind(this))
        }

        SearchResultsControl.prototype.prepareColumnMenu = function($menu, menuBtn) {
            $menu
                .off('click')
                .on('click', 'label', function(e) {
                    e.stopImmediatePropagation()
                })
                .off('change')
                .on('change', 'input', function(e) {
                    var colId = $(e.target).closest('div').data('colId')
                    this.gridOptions.columnApi.setColumnVisible(colId, $(e.target).is(':checked'))
                }.bind(this))
                .on('click', 'a', function(e) {
                    // For future menu items
                })
            menuBtn.addEventListener('click', function(e) {
                e.stopImmediatePropagation()
                //open menu
                $menu
                    .show()
                    .css({
                        position: 'absolute',
                        left: getMenuPosition($menu, e.clientX, 'width', 'scrollLeft'),
                        top: getMenuPosition($menu, e.clientY, 'height', 'scrollTop'),
                    })
                return false
            }.bind(this), true)

            function getMenuPosition($menu, mouse, direction, scrollDir) {
                var win = $(window)[direction](),
                    scroll = $(window)[scrollDir](),
                    menu = $menu[direction](),
                    position = mouse + scroll
                // opening menu would pass the side of the page
                if (mouse + menu > win && menu < mouse) {
                    position -= menu
                }
                return position
            }
        }

        SearchResultsControl.prototype.search = function() {
            var searchData = this.conditionsControl.getAllData()
            searchData.randomizeSearch = this.randomizeSearch
            return searchByConditions(this.gridOptions, searchData, this.$panel)
        }

        SearchResultsControl.prototype.editTitleMode = function() {
            this.setChanged(true)
            var $titleEditable = this.$panel.find('.title.editable')
            var $titleEdit = this.$panel.find('.title.edit')

            var currTitle = $titleEditable.find('.title-text').text()
            var $titleInput = $titleEdit.find('input')
            $titleInput.val(currTitle)
            $titleInput.off('focusout').on('focusout', this.viewTitleMode.bind(this))
            $titleInput.off('keydown').on('keydown', function(e) {
                switch (e.keyCode) {
                    case KEYCODE_ENTER:
                        this.viewTitleMode()
                }
            }.bind(this))

            $titleEditable.hide()
            $titleEdit.show()
            $titleInput.focus()
            $titleInput.select()
        }

        SearchResultsControl.prototype.viewTitleMode = function() {
            var $titleEditable = this.$panel.find('.title.editable')
            var $titleEdit = this.$panel.find('.title.edit')

            var newTitle = $titleEdit.find('input').val()
            var $title = $titleEditable.find('.title-text')
            if (newTitle) {
                $title.text(newTitle)
                this.name = newTitle
            }

            $titleEdit.hide()
            $titleEditable.show()
        }

        SearchResultsControl.prototype.collapseConditions = function() {
            hideConditions(this.$panel)
            this.collapsed = true
            stateControl.setCollapsedCondition(true)
        }

        SearchResultsControl.prototype.extendConditions = function() {
            showConditions(this.$panel)
            this.collapsed = false
            stateControl.setCollapsedCondition(false)
        }

        SearchResultsControl.prototype.updateAssignButtons = function(hasSelections) {
            var canAssignEvaluation = initializer.getGlobalEvalPermissions().canAssignEvaluation
            var assignBtn = this.$panel.find('.assign-btn')
            var calibrateBtn = this.$panel.find('.calibrate-btn')
            if (canAssignEvaluation) {
                if (hasSelections) {
                    assignBtn.removeClass('disabled')
                    assignBtn.off('click').on('click', function() {
                        this.showAssignModal()
                    }.bind(this))
                    calibrateBtn.removeClass('disabled')
                    calibrateBtn.off('click').on('click', function() {
                        this.showAssignModal(true)
                    }.bind(this))
                } else {
                    assignBtn.addClass('disabled')
                    assignBtn.off('click')
                    calibrateBtn.addClass('disabled')
                    calibrateBtn.off('click')

                }
                assignBtn.show()
                calibrateBtn.show()
            } else {
                assignBtn.hide()
                calibrateBtn.hide()
            }
        }

        SearchResultsControl.prototype.showAssignModal = function(isCalibration) {
            var selected = this.gridOptions.api.getSelectedNodes()
            var identifiers = []
            var agents = []
            var teams = []
            $.each(selected, function(i, v) {
                var interactionIdentifier = {giid: v.data.globalInteractionId, mediaType: v.data.mediaType}
                identifiers.push(interactionIdentifier)
                var interactionAgents = (v.data.agentLogin || '').split(',')
                agents.push.apply(agents, interactionAgents)
                var interactionTeams = (v.data.team || '').split(SPECIAL_STRING_SEPARATOR)
                teams.push.apply(teams, interactionTeams)
            })
            var evalType = isCalibration ? EVAL_RESULTS_TYPE_CALIBRATION : EVAL_RESULTS_TYPE_EVALUATION
            modals.showAssignModal(function(loginIds, onFinish) {
                api.assignEvaluations(null, evalType, loginIds, identifiers, null, function(e) {
                    var data = e.responseJSON
                    if (data && data.identifier) {
                        var rowId = buildRowId(data.identifier.giid, data.identifier.mediaType)
                        this.addRowError(rowId)
                        modals.showError(data.localizedMessage)
                    } else {
                        api.handleError(e)
                    }
                }.bind(this)).always(function() { onFinish() })
            }.bind(this), agents, teams, isCalibration)
        }

        if (this.collapsed) {
            hideConditions(this.$panel)
        } else {
            showConditions(this.$panel)
        }

        this.$tab.find('.close').off('click').on('click', function() {
            if (!this.readonly && this.isChanged()) {
                showCloseModal(id, index, this.saveResult.bind(this))
            } else {
                closeSearchResult(id, index)
            }
        }.bind(this))

        this.$panel.find('.randomize-search-check').prop('checked', this.randomizeSearch)
        this.$panel.find('.randomize-search-check').change(function() {
            that.randomizeSearch = this.checked
            that.conditionsControl.setChanged(true)
        })

        this.$panel.find('.apply-default-layout-check').prop('checked', this.applyDefaultLayout)
        this.$panel.find('.apply-default-layout-check').change(function() {
            that.applyDefaultLayout = this.checked
            that.conditionsControl.setChanged(true)
        })

        this.$panel.find('.search-btn').click($.debounce(500, true, function() {
            searchByConditions(this.gridOptions, Object.assign(this.conditionsControl.getAllData(), {randomizeSearch: this.randomizeSearch}), this.$panel)
        }.bind(this)))

        if (this.readonly) {
            this.$panel.find('.title.editable').off().removeClass('editable')
            this.$panel.find('.save-btn').hide()
            this.$panel.find('.clone-btn').hide()
        } else {
            this.$panel.find('.save-btn').click(function() {
                if (!this.$panel.find('.save-btn').hasClass('disabled')) {
                    this.saveResult(function(data) {
                        this.$tab.find('a').text(data.name)
                    }.bind(this))
                }
            }.bind(this))
            this.$panel.find('.clone-btn').click(this.cloneResult.bind(this))
            this.$panel.find('.title.editable').click(this.editTitleMode.bind(this))
        }

        this.$panel.find('.extend-condition').click(function(e) {
            e.stopPropagation()
            this.extendConditions()
        }.bind(this))

        this.$panel.find('.collapse-condition').click(this.collapseConditions.bind(this))
        this.updateAssignButtons(false)

        this.$panel.find('.results-table').on('keydown', function(e) {
            switch (e.keyCode) {
                case KEYCODE_ENTER:
                    var focusedCell = this.gridOptions.api.getFocusedCell()
                    if (focusedCell) {
                        var rowNode = this.gridOptions.api.getDisplayedRowAtIndex(focusedCell.rowIndex)
                        rowNode.setSelected(true)
                        openInteraction(rowNode.data, this.gridOptions.api)
                    }
            }
        }.bind(this))

        function hideConditions($panel) {
            $panel.find('.search-controls').hide()
            $panel.find('.extend-condition').show()
        }

        function showConditions($panel) {
            $panel.find('.search-controls').show()
            $panel.find('.extend-condition').hide()
        }

        function searchByConditions(grid, conditions, $panel) {
            if (conditionsControlFactory.hasConditionsItems(conditions.conditions)) {
                if (conditionsControlFactory.hasCorrectTextSearchConditions(conditions.conditions)) {
                    return api.searchByConditions(conditions, function(data) {
                        console.log('FOUND', data)
                        grid.api.setRowData(data.data)
                        evaluationConsoleFactory.refreshRemovedEvalGiidsInSession(data.data)
                        $panel.find('.title .title-counter').text('(' + data.totalLength + ')')
                    })
                } else {
                    modals.showInfo('incorrectTextSearchMsg')
                    return $.Deferred().resolve([]).promise()
                }
            } else {
                modals.showInfo('emptySearchMsg')
                return $.Deferred().resolve([]).promise()
            }
        }

        function showCloseModal(id, index, saveFunc) {
            var $modal = $('#close-tab-modal')
            $('#save-tab-modal-accept').on('click', function() {
                $modal.modal('hide')

                saveFunc(function() {
                    closeSearchResult(id, index)
                })
            })
            $('#close-tab-modal-accept').on('click', function() {
                closeSearchResult(id, index)
            })

            $modal.on('show.bs.modal', function() {
                var tabName = $('#' + getThisTabId(id, index)).find('a').text()
                $modal.find('.modal-title').text(translator.get('close') + ' ' + tabName)
                $modal.find('.modal-body > div').text(translator.get('closeSearchResult'))
            })

            $modal.on('hide.bs.modal', function() {
                $('#save-tab-modal-accept').off('click')
                $('#close-tab-modal-accept').off('click')
            })

            $modal.modal('show')
        }

        function closeSearchResult(id, index) {
            $(window).off('resize.search-result-' + getThisPanelId(id, index))
            var tabId = getThisTabId(id, index)
            delete openedResults[tabId]
            tabs.closeTab(tabId, getThisPanelId(id, index))
        }

        function getThisTabId(id, index) {
            return tabs.getTabId(prefix, id, index)
        }

        function getThisPanelId(id, index) {
            return tabs.getPanelId(prefix, id, index)
        }

        function openInteraction(interactionData, api) {
            var allInteractionsData = []
            api.forEachNodeAfterFilterAndSort(function(node) {
                allInteractionsData.push(node.data)
            })
            var resultData = Object.assign({}, interactionData, {allInteractions: allInteractionsData})
            $('.app-body').trigger(EVENT_OPEN_INTERACTION, [resultData])
        }

        function mediaTypeRenderer(params) {
            return '<img src="' + getMediaIconUrl(params.value) + '">'
        }

        function sentimentRenderer(params) {
            var sentimentIcon = getSentimentIconUrl(params.value)
            return sentimentIcon ? '<img src="' + sentimentIcon + '">' : params.value
        }

        function fcrRenderer(params) {
            if (params.value == null) {
                return ''
            } else {
                return params.value ? translator.get('yes') : translator.get('no')
            }
        }

        function recordingRenderer(params) {
            var $value = $('#sr-recording-column-template').clone().removeAttr('id')
            if (params.data.hasVoiceRecording) {
                if (params.data.erasedVoiceRecording) {
                    $value.find('.voice-recording-d').show()
                } else {
                    $value.find('.voice-recording').show()
                }
            }
            if (params.data.hasScreenRecording) {
                if (params.data.erasedScreenRecording) {
                    $value.find('.screen-recording-d').show()
                } else {
                    $value.find('.screen-recording').show()
                }
            }
            if (params.data.hasTranscript) {
                $value.find('.transcript-recording').show()
            }
            if (params.data.hasChatTranscript) {
                if (params.data.erasedChatTranscript) {
                    $value.find('.chat-transcript-d').show()
                } else {
                    $value.find('.chat-transcript').show()
                }
            }
            return $value[0]
        }

        function teamFormatter(params) {
            if (params.value) {
                return params.value.replace(SPECIAL_STRING_SEPARATOR, ', ')
            }

            return params.value
        }

        function datetimeFormatter(params) {
            return formatUTCDateTime(params.value, true)
        }

        function durationFormatter(params) {
            return formatSecondsToTime(params.value)
        }

        function evaluationStatusFormatter(params) {
            if (params.value) {
                return params.value.split(',')
                    .map(function(val) {
                        return translator.get(val)
                    })
                    .join(', ')
            }
            return params.value
        }

        function getMediaIconUrl(type) {
            switch (type) {
                case MEDIA_TYPE_VOICE:
                    return '/agent/evaluation-page/img/ico/ico-voice-call.svg'
                case MEDIA_TYPE_EMAIL:
                    return '/agent/evaluation-page/img/ico/ico-email.svg'
                case MEDIA_TYPE_CHAT:
                    return '/agent/evaluation-page/img/ico/ico-chat.svg'
                default: return ''
            }
        }

        function getSentimentIconUrl(sentiment) {
            if (sentiment || sentiment === 0) {
                if (sentiment >= -1 && sentiment <= -0.1) {
                    return '/agent/evaluation-page/img/ico/ico-unhappy.svg'
                } else if (sentiment > -0.1 && sentiment <= 0.2) {
                    return '/agent/evaluation-page/img/ico/ico-neutral.svg'
                } else if (sentiment > 0.2 && sentiment <= 1.0) {
                    return '/agent/evaluation-page/img/ico/ico-happy.svg'
                }
            }
            return ''
        }
    }

    SearchResultsControl.prototype.isChanged = function() {
        return this.changed || this.conditionsControl.isChanged()
    }

    SearchResultsControl.prototype.setChanged = function(isChanged) {
        this.changed = isChanged
        this.conditionsControl.setChanged(isChanged)
    }

    SearchResultsControl.prototype.addRowError = function(rowId) {
        this.rowWithError = rowId
        var row = this.gridOptions.api.getRowNode(rowId)
        var data = row.data
        data.error = true
        row.setData(data)
    }

    SearchResultsControl.prototype.removeRowError = function() {
        if (this.rowWithError) {
            var row = this.gridOptions.api.getRowNode(this.rowWithError)
            var data = row.data
            data.error = false
            row.setData(data)
            this.rowWithError = undefined
        }
    }

    SearchResultsControl.prototype.saveResult = function(cb) {
        var data = Object.assign({id: this.id, name: this.name, randomizeSearch: this.randomizeSearch}, this.conditionsControl.getAllData())

        if (this.applyDefaultLayout) {
            stateControl.setSearchResultColumnsTimestamp(this.id, +new Date())
            data.qmLayout = JSON.stringify(stateControl.getSearchResultColumnsLayout(this.id))
        }

        if (conditionsControlFactory.hasConditionsItems(data.conditions)) {
            if (conditionsControlFactory.hasCorrectTextSearchConditions(data.conditions)) {
                api.saveSearch(data, function(data) {
                    $('.app-body').trigger(EVENT_UPDATE_SEARCH, [
                        {
                            id: data.id,
                            name: data.name,
                            randomizeSearch: data.randomizeSearch,
                        },
                    ])
                    this.setChanged(false)
                    this.conditionsControl.setChanged(false)
                    cb(data)
                }.bind(this))
            } else {
                modals.showInfo('incorrectTextSearchMsg')
            }
        } else {
            modals.showInfo('emptySearchMsg')
        }
    }

    SearchResultsControl.prototype.cloneResult = function() {
        var data = Object.assign({
            id: this.id,
            type: 'QUERY',
            name: this.name,
            editable: this.initialCondition.editable,
            randomizeSearch: this.randomizeSearch,
            qmLayout: JSON.stringify(stateControl.getSearchResultColumnsLayout(this.id)),
            cloned: true,
        }, this.conditionsControl.getAllData())
        if (conditionsControlFactory.hasConditionsItems(data.conditions)) {
            if (conditionsControlFactory.hasCorrectTextSearchConditions(data.conditions)) {
                $('.app-body').trigger(EVENT_CLONE_SEARCH, [data])
            } else {
                modals.showInfo('incorrectTextSearchMsg')
            }
        } else {
            modals.showInfo('emptySearchMsg')
        }
    }

    function buildRowId(giid, mediaType) {
        return giid + '_' + mediaType
    }
}
