var evaluationConsoleFactory = new function() {

    var prefix = 'interaction'
    var removedEvalGiidsSessionkey = 'removedEvalGiidsWithLostAccessToInteraction'
    this.prefix = prefix
    var bookmarkFormHandler = $.debounce(500, function(callback) { callback() })

    this.create = function(data, index) {
        return getLayoutTemplate('/agent/evaluation-page/console-layout-template.html', 'console-layout-template')
            .then(function($template) {
                var tabId = getThisTabId(data.id, index)
                var panelId = getThisPanelId(data.id, index)
                var $tab = $('#' + tabId)
                var $panel = $('#' + panelId)

                var $content = cloneTemplate($template, 'console-template')
                sanitizeIds($content, data.id)
                $panel.html($content)

                var console = new EvaluationConsole(data, index, initializer.getToken(), $panel)
                $tab.find('.close').off('click').on('click', this.closeConsole.bind(null, data.id, index, console, null))
                return console.init()
            }.bind(this))
    }

    this.createSingle = function(data) {
        return getLayoutTemplate('/agent/evaluation-page/console-layout-template.html', 'console-layout-template')
            .then(function($template) {
                var panelId = getThisPanelId(0)
                var $panel = $('#' + panelId)
                var $content = cloneTemplate($template, 'console-template')
                sanitizeIds($content, data.id)
                $panel.html($content)

                var console = new EvaluationConsole(data, 0, initializer.getToken(), $panel)
                return console.init()
            }.bind(this))
    }

    this.closeConsole = function(id, index, console, callback) {
        var close = function() {
            console.close()
            tabs.closeTab(getThisTabId(id, index), getThisPanelId(id, index))

            if (callback) {
                callback()
            }
        }

        if (!console.metadata) {
            close()
        } else {
            var $comments = console.$panel.find('.details-comments .comments')
            var comment = $comments.val()
            var savedComment = console.metadata.evaluatorComment !== null ? console.metadata.evaluatorComment : ''

            if (comment !== savedComment) {
                var message = translator.get('unsavedComment')
                modals.showYesNo(
                    message,
                    close,
                    null,
                    null,
                )
            } else {
                close()
            }
        }
    }

    this.refreshRemovedEvalGiidsInSession = function(interactions) {
        var savedData = JSON.parse(window.sessionStorage.getItem(removedEvalGiidsSessionkey))

        if (savedData) {
            var interactionGiids = interactions.map(function(i) {
                return i.globalInteractionId.toLocaleLowerCase()
            })
            savedData = savedData.filter(function(giid) {
                return !interactionGiids.includes(giid.toLocaleLowerCase())
            })
            window.sessionStorage.setItem(removedEvalGiidsSessionkey, JSON.stringify(savedData))
        }
    }

    function sanitizeIds($content, id) {
        var $tabs = $content.find('.nav-tabs')
        $tabs.find('li').each(function() {
            var baseId = $(this).prop('id')
            $(this).prop('id', tabs.buildId(id, baseId))
            var $link = $(this).find('a')
            var baseHref = $link.attr('href')
            var $panel = $content.find(baseHref)
            var newPanelId = tabs.buildId(id, baseHref.substr(1))
            $panel.attr('id', newPanelId)
            $link.prop('href', '#' + newPanelId)
        })
    }

    function getThisTabId(id, index) {
        return tabs.getTabId(prefix, id, index)
    }

    function getThisPanelId(id, index) {
        return tabs.getPanelId(prefix, id, index)
    }

    function isEvaluationTabVisible(metadata) {
        return metadata.canMakeEvaluation || metadata.canAssignEvaluation
    }

    function mustOpenAllEvals(evaluationInfo) {
        return evaluationInfo.evaluationsExist && !evaluationInfo.currUserSavedEvaluationExist
    }

    function EvaluationConsole(data, consoleIndex, userToken, $consolePanel) {
        this.interactionData = data
        this.index = consoleIndex
        this.token = userToken
        this.$panel = $consolePanel
        this.isFullMode = initializer.getMode() === EVAL_MODE_FULL

        this.mediaControl = new MediaControl(this.token, this.$panel)
        this.transcriptControl = new TranscriptControl(this.$panel, {showSearch: true, showCase: data.mediaType === MEDIA_TYPE_EMAIL})
        this.timelineControl = new TimelineControl(this.$panel)

        // only for compatibility with GWT
        // remove after evaluation viewer will be removed from Portal
        this.externalInterface = new ExternalInterface(this)

        EvaluationConsole.prototype.init = function() {
            translator.translate(this.$panel.find('.app-body'))

            window.onbeforeunload = function() {
                this.mediaControl.release()
            }.bind(this)

            this.restorePanelsSize()
            if (this.isFullMode) {
                this.initRecordsSwitcher()
            }

            return this.loadMetadata()
        }

        EvaluationConsole.prototype.close = function() {
            this.mediaControl.release()
            $(window).off('resize.console')
        }

        EvaluationConsole.prototype.recreateConsole = function(data) {
            evaluationConsoleFactory.closeConsole(this.interactionData.id, this.index, this, function() {
                var resultData = Object.assign({}, data, {allInteractions: this.interactionData.allInteractions})
                $('.app-body').trigger(EVENT_OPEN_INTERACTION, [resultData])
            }.bind(this))
        }

        EvaluationConsole.prototype.loadMetadata = function() {
            if (this.hasRemovedEvalGiidInSession(this.interactionData.globalInteractionId)) {
                modals.showError('interactionAccessLost')
                this.closeCurrentTab()
                return
            }

            return api.loadMetadata(this.interactionData.globalInteractionId, this.interactionData.mediaType, this.interactionData.cdrId)
                .done(function(data) {
                    this.metadata = data

                    if (data.systemInteraction) {
                        this.initBlocks()
                    } else {
                        api.getAllEvalsInfo(data.globalInteractionId, data.mediaType, data.selectedParty.loginId, function(evaluationInfo) {
                            this.evaluationInfo = evaluationInfo
                            this.initBlocks()
                        }.bind(this))
                    }
                }.bind(this))
                .fail(function() {
                    modals.showError('dataLoadErrorMsg')
                })
        }

        EvaluationConsole.prototype.initBlocks = function() {
            this.initHeader()
            this.transcriptControl.init(this.metadata, this.timelineControl)
            this.mediaControl.initMedia(this.metadata)
            this.timelineControl.initTimeline(this.metadata, this.mediaControl, this.transcriptControl)
            this.initConferenceSwitcher()

            this.initTabs()

            if (!this.metadata.systemInteraction) {
                if (mustOpenAllEvals(this.evaluationInfo)) {
                    this.initAllEvalsTab()
                } else {
                    this.initEvaluationViewer()
                }
            }
            this.initResizable()

            $(window).on('resize.console', function() {
                this.$panel.find('.right-panel').resizable('option', 'maxWidth', this.calcMaxRightPanelWidth())
            }.bind(this))
        }

        EvaluationConsole.prototype.calcMaxRightPanelWidth = function() {
            return this.$panel.find('.console-resizable').width() - parseInt(this.$panel.find('.left-panel').css('min-width'))
        }

        EvaluationConsole.prototype.initResizable = function() {
            var $rightPanel = this.$panel.find('.right-panel')
            $rightPanel.resizable({
                minWidth: parseInt($rightPanel.css('min-width')),
                maxWidth: this.calcMaxRightPanelWidth(),
                handles: 'w',
                helper: 'resizable-helper-horizontal-w',
                start: function() {
                    $('iframe').css('pointer-events', 'none')
                },
                stop: function(event, ui) {
                    $('iframe').css('pointer-events', 'auto')
                    ui.element.css({height: '', left: 0})
                    this.savePanelsSize()
                }.bind(this),
            })
        }

        EvaluationConsole.prototype.savePanelsSize = function() {
            var parent = this.$panel.find('.console-resizable').width()
            var right = Math.round(this.$panel.find('.right-panel').width() / parent * 100 * 100) / 100
            var panelSize = {right: right}
            stateControl.setConsolePanelSize(panelSize)
        }

        EvaluationConsole.prototype.restorePanelsSize = function() {
            var panelSize = stateControl.getConsolePanelSize()
            if (panelSize) {
                this.$panel.find('.right-panel').css('width', panelSize.right + '%')
            }
        }

        EvaluationConsole.prototype.initRecordsSwitcher = function() {
            var $header = this.$panel.find('.user-header')
            var neighbourInteractions = this.findPrevAndNextData(this.interactionData.allInteractions)
            var $prevResult = $header.find('.prev-result')
            if (neighbourInteractions.prev) {
                $prevResult.click(this.recreateConsole.bind(this, neighbourInteractions.prev))
            } else {
                $prevResult.addClass('disabled')
            }
            $prevResult.show()

            var $nextResult = $header.find('.next-result')
            if (neighbourInteractions.next) {
                $nextResult.click(this.recreateConsole.bind(this, neighbourInteractions.next))
            } else {
                $nextResult.addClass('disabled')
            }
            $nextResult.show()
        }

        EvaluationConsole.prototype.initHeader = function() {
            var $header = this.$panel.find('.user-header')
            var startTime = new Date(this.metadata.startTime)
            var systemInteraction = this.metadata.systemInteraction
            var calleeParty = this.metadata.calleeParty
            var callerParty = this.metadata.callerParty

            this.initHeaderParty($header, 'callee', calleeParty, systemInteraction)
            this.initHeaderParty($header, 'caller', callerParty, systemInteraction)

            if (calleeParty.selected) {
                if (calleeParty.team) {
                    $($header).find('.callee-info').text(calleeParty.team)
                }
                $($header).find('.caller-info').text(formatUTCDateTime(startTime))
            } else {
                if (callerParty.team) {
                    $($header).find('.caller-info').text(callerParty.team)
                }
                $($header).find('.callee-info').text(formatUTCDateTime(startTime))
            }
        }

        EvaluationConsole.prototype.initHeaderParty = function($header, selectorPrefix, party, systemInteraction) {
            if (systemInteraction && party.selected) {
                $($header).find('.' + selectorPrefix + '-name').text(translator.get('system'))
                $($header).find('.' + selectorPrefix + '-photo').attr('src', '/agent/evaluation-page/img/bot.png')
            } else {
                $($header).find('.' + selectorPrefix + '-name').text(party.name)

                if (party.loginId) {
                    $($header).find('.' + selectorPrefix + '-photo').attr('src', getUserPhotoUrl(party.loginId))
                } else if (party.contactPhotoId) {
                    $($header).find('.' + selectorPrefix + '-photo').attr('src', getUserPhotoUrl(party.contactPhotoId))
                }
            }
        }

        EvaluationConsole.prototype.initConferenceSwitcher = function() {
            var $timeline = this.$panel.find('.timeline')

            var $nextInteraction = $timeline.find('.next-result')
            if (this.metadata.nextSegmentId) {
                var nextInteraction = Object.assign({}, this.interactionData, {cdrId: this.metadata.nextSegmentId})
                $nextInteraction.removeClass('disabled')
                $nextInteraction.click(this.recreateConsole.bind(this, nextInteraction))
            } else {
                $nextInteraction.addClass('disabled')
            }

            var $prevInteraction = $timeline.find('.prev-result')
            if (this.metadata.prevSegmentId) {
                var prevInteraction = Object.assign({}, this.interactionData, {cdrId: this.metadata.prevSegmentId})
                $prevInteraction.removeClass('disabled')
                $prevInteraction.click(this.recreateConsole.bind(this, prevInteraction))
            } else {
                $prevInteraction.addClass('disabled')
            }
        }

        EvaluationConsole.prototype.findPrevAndNextData = function(allData) {
            allData = allData ? allData : []
            var currentIndex = allData.findIndex(function(e) { return e.id === this.interactionData.id }.bind(this))
            var nextIndex = currentIndex + 1
            var prevIndex = currentIndex - 1
            var next = allData.length > nextIndex ? allData[nextIndex] : undefined
            var prev = prevIndex >= 0 ? allData[prevIndex] : undefined
            return {
                prev: prev,
                next: next,
            }
        }

        EvaluationConsole.prototype.initTabs = function() {
            this.initCaseTab()
            this.initDetailsTab()

            if (this.metadata.systemInteraction) {
                this.$panel.find('#' + tabs.buildId(this.interactionData.id, 'tab-evaluation')).hide()
                this.$panel.find('#' + tabs.buildId(this.interactionData.id, 'tab-evaluation-all')).hide()
                this.$panel.find('#' + tabs.buildId(this.interactionData.id, 'tab-evaluation-details') + ' a').click()
            } else {
                // all evals tab lazy loading
                if (!isEvaluationTabVisible(this.metadata)) {
                    this.$panel.find('#' + tabs.buildId(this.interactionData.id, 'tab-evaluation')).hide()
                    this.$panel.find('#' + tabs.buildId(this.interactionData.id, 'tab-evaluation-details') + ' a').click()
                }

                if (mustOpenAllEvals(this.evaluationInfo)) {
                    this.$panel.find('#' + tabs.buildId(this.interactionData.id, 'tab-evaluation') + ' a').one('click', this.initEvaluationViewer.bind(this))
                    this.$panel.find('#' + tabs.buildId(this.interactionData.id, 'tab-evaluation-all') + ' a').click()
                } else {
                    this.$panel.find('#' + tabs.buildId(this.interactionData.id, 'tab-evaluation-all') + ' a').one('click', this.initAllEvalsTab.bind(this))
                }
            }
        }

        EvaluationConsole.prototype.initCaseTab = function() {
            var $caseTab = this.$panel.find('#' + tabs.buildId(this.interactionData.id, 'tab-evaluation-case'))
            var $caseTabLink = $caseTab.find('a')
            if (this.metadata.canSeeCaseTab && this.metadata.caseData && this.metadata.mediaType !== MEDIA_TYPE_EMAIL) {
                var caseName = translator.get('case')
                $caseTabLink.text(caseName + ' ' + this.metadata.caseData.caseNumber)
                $caseTabLink.one('click', this.initCaseTabContent.bind(this))
                $caseTab.show()
            } else {
                $caseTab.hide()
            }
        }

        EvaluationConsole.prototype.initDetailsTab = function() {
            var $downloadLink = this.$panel.find('.details-links .link-download')
            var $videoLink = this.$panel.find('.details-links .link-video')
            var $audioLink = this.$panel.find('.details-links .link-audio')
            var $cpaLink = this.$panel.find('.details-links .link-cpa')
            var $auditLink = this.$panel.find('.details-links .link-audit-log')
            var $getLink = this.$panel.find('.details-links .link-get-link')
            var $eraseInteractionBtn = this.$panel.find('.details-links .btn-erase-interaction')

            var showDownloadLink = this.metadata.canDownload
            var showVideoLink = this.metadata.canDownload
                && (this.metadata.selectedParty.hasScreenRecording || this.metadata.selectedParty.hasDownloadableScreenRecordingUrl)

            var showAudioLink = this.metadata.canDownload && this.metadata.selectedParty.hasVoiceRecording
            var showCpaLink = this.metadata.canDownload && this.metadata.selectedParty.hasCpaRecording
            var showEraseBtn = this.metadata.canEraseInteraction && (this.metadata.selectedParty.hasVoiceRecording || this.metadata.selectedParty.hasVoiceTranscripts
                || this.metadata.selectedParty.hasChatTranscripts || this.metadata.selectedParty.hasEmailBody || this.metadata.selectedParty.hasScreenRecording)

            initLink($downloadLink, showDownloadLink, this.downloadEvaluationResult.bind(this))
            initLink($videoLink, showVideoLink, this.mediaControl.downloadVideo.bind(this.mediaControl))
            initLink($audioLink, showAudioLink, this.mediaControl.downloadAudio.bind(this.mediaControl, false))
            initLink($cpaLink, showCpaLink, this.mediaControl.downloadAudio.bind(this.mediaControl, true))
            initLink($auditLink, this.metadata.canAudit, this.openAuditLog.bind(this))
            initLink($getLink, true, this.copyInteractionLinkToClipboard.bind(this, $getLink))
            initLink($eraseInteractionBtn, showEraseBtn, this.openEraseInteractionModal.bind(this))

            if (this.metadata.systemInteraction) {
                this.$panel.find('.details-agent-notes').hide()
            } else if (this.metadata.selectedParty.notes) {
                this.$panel.find('.details-agent-notes .agent-notes').text(replaceBr(this.metadata.selectedParty.notes))
            }
            var $comments = this.$panel.find('.details-comments .comments')
            $comments.val(this.metadata.evaluatorComment)
            if (isEvaluationTabVisible(this.metadata)) {
                var $savebtn = this.$panel.find('.details-comments .save-details-comments')
                $savebtn.attr('disabled', true).show().click(this.saveEvaluatorComment.bind(this, $comments))
                this.$panel.find('.details-comments .cancel-details-comments').show().click(function() {
                    $comments.val(this.metadata.evaluatorComment)
                }.bind(this))
                $comments.bind('input propertychange', function() {
                    $savebtn.removeAttr('disabled', true)
                })
            } else {
                $comments.attr('readonly', true)
            }
        }

        function initLink($link, isActive, action) {
            if (isActive) {
                $link.show()
                $link.click(action)
            } else {
                $link.hide()
                $link.off()
            }
        }

        EvaluationConsole.prototype.initCaseTabContent = function() {
            api.getCaseLog(this.metadata.caseData.caseId, this.metadata.selectedParty.serviceName, 0, function(data) {
                var $casePanel = this.$panel.find('#' + tabs.buildId(this.interactionData.id, 'panel-evaluation-case'))
                $casePanel.find('.loading').hide()
                $casePanel.append('<div class="transcript-box"></div>')

                var caseMetadata = Object.assign({}, this.metadata)
                var caseSelectedParty = Object.assign({}, this.metadata.selectedParty)
                caseSelectedParty.transcriptsBatch = data
                caseMetadata.selectedParty = caseSelectedParty
                new TranscriptControl($casePanel, {showCase: true, showSearch: false}).init(caseMetadata)
            }.bind(this))
        }

        EvaluationConsole.prototype.initAllEvalsTab = function() {
            var $allEvalsSelector = this.$panel.find('.all-evals-selector')
            $allEvalsSelector.selectmenu({
                width: 500,
                classes: {
                    'ui-selectmenu-icon': 'form-selectmenu-icon',
                    'ui-selectmenu-button': 'form-selectmenu',
                },
                change: function(event, data) {
                    this.loadEval(data.item.value)
                }.bind(this),
            })
            this.loadAllEvalsTabContent()

            this.$panel.find('#' + tabs.buildId(this.interactionData.id, 'tab-evaluation-all') + ' a').on('show.bs.tab', function() {
                this.loadAllEvalsTabContent()
            }.bind(this))
        }

        EvaluationConsole.prototype.loadAllEvalsTabContent = function() {
            var $allEvalsSelector = this.$panel.find('.all-evals-selector')
            api.getAllEvals(this.metadata.globalInteractionId, this.metadata.mediaType, this.metadata.selectedParty.loginId, function(data) {
                if (data.length > 0) {
                    $allEvalsSelector.parent().show()
                    $allEvalsSelector.html('')
                    data.forEach(function(evalData) {
                        var name = evalData.name + ': ' + evalData.score + ' - ' + translator.get(evalData.status)
                        var option = $('<option value=\'' + evalData.id + '\'>' + name + '</option>')
                        $allEvalsSelector.append(option)
                    })
                    $allEvalsSelector.val(data[0].id)
                    $allEvalsSelector.selectmenu('refresh')
                    this.loadEval(data[0].id)
                } else {
                    $allEvalsSelector.parent().hide()
                    this.loadEval()
                }
            }.bind(this))
        }

        EvaluationConsole.prototype.updateEvalsTabStatus = function(evalId) {
            var $allEvalsSelector = this.$panel.find('.all-evals-selector')
            api.loadEvalsData(evalId, function(data) {
                if (data) {
                    var name = data.formName + ': ' + data.formScore + ' - ' + translator.get(data.status)
                    $allEvalsSelector.find('option[value=\'' + evalId + '\']').text(name)
                    $allEvalsSelector.selectmenu('refresh')
                }
            }.bind(this))
        }

        EvaluationConsole.prototype.copyInteractionLinkToClipboard = function($getLinkCtrl) {
            var link = getBaseUrl() + '?' + URL_PARAM_GIID + '=' + this.metadata.globalInteractionId

            if (this.metadata.cdrId) {
                link += '&' + URL_PARAM_CDR_ID + '=' + this.metadata.cdrId
            }

            link += '&' + URL_PARAM_MEDIA_TYPE + '=' + this.metadata.mediaType

            copyStringToClipboard(link)

            if ($getLinkCtrl) {
                // remove previous tooltip
                $getLinkCtrl.find('.link-tooltip').remove()

                // create the tooltip
                var $tooltip = $('<span class="link-tooltip">' + translator.get('linkCopiedToClipboard') + '</span>')
                $getLinkCtrl.append($tooltip)

                // position the tooltip centered horizontally and 10 pixels below
                var left = $getLinkCtrl.position().left + ($getLinkCtrl.width() - $tooltip.width()) / 2
                var top = $getLinkCtrl.position().top + $getLinkCtrl.height() + 10
                $tooltip.css('left', left)
                $tooltip.css('top', top)

                setTimeout(function() {
                    $getLinkCtrl.find('.link-tooltip').remove()
                }, 1000)
            }
        }

        EvaluationConsole.prototype.openAuditLog = function() {
            api.getAuditLogPath(this.metadata.globalInteractionId, this.metadata.selectedParty.loginId)
                .done(function(url) {
                    window.open(url, '_blank')
                })
        }

        EvaluationConsole.prototype.downloadEvaluationResult = function() {
            var url = 'rest/evaluation/download-evaluation-result?token=' + this.token +
                '&giid=' + this.metadata.globalInteractionId +
                '&mediaType=' + this.metadata.mediaType

            if (this.metadata.cdrId) {
                url = url + '&cdrId=' + this.metadata.cdrId
            }

            window.location = url
        }

        EvaluationConsole.prototype.openEraseInteractionModal = function() {
            modals.showEraseInteractionModal(this.metadata, this.recreateConsole.bind(this, this.interactionData))
        }

        EvaluationConsole.prototype.saveEvaluatorComment = function($comments) {
            var comment = $comments.val()
            api.saveEvaluatorComment(this.metadata.globalInteractionId, this.metadata.mediaType, this.metadata.cdrId, this.metadata.selectedParty.loginId, comment, function() {
                this.metadata.evaluatorComment = comment
            }.bind(this))
            this.$panel.find('.details-comments .save-details-comments').attr('disabled', true)
        }

        EvaluationConsole.prototype.loadEval = function(evalId) {
            var $evalContainer = this.$panel.find('#' + tabs.buildId(this.interactionData.id, 'panel-evaluation-all') + ' .evaluation-container')
            if (evalId) {
                var iframe = document.createElement('iframe')
                $evalContainer.html(iframe)
                iframe.onload = function() {
                    api.loadEvalsData(evalId, function(data) {
                        if (!!iframe.contentWindow && !!iframe.contentWindow.init) {
                            iframe.contentWindow.init(data, this.$panel, false, this, stateControl, initializer)
                        }

                        if (data.formFailed) {
                            this.$panel.find('#all-evals-selector-button .ui-selectmenu-text')
                                .append(getEvalFailedIndicator())
                        }
                    }.bind(this))
                }.bind(this)
                $.get('evaluation/viewer-layout-template-iframe.html?build=' + window.__buildVersion, function(html) {
                    iframe.contentWindow.window.__buildVersion = window.__buildVersion

                    var newHtml = injectVariables(html, {'{LOCALE}': initializer.getLocale(), '{BUILD}': window.__buildVersion})
                    iframe.contentWindow.document.open()
                    iframe.contentWindow.document.write(newHtml)
                    iframe.contentWindow.document.close()
                })
            } else {
                $evalContainer.html('')
            }

        }

        // ===== Evaluation Form =====
        EvaluationConsole.prototype.initEvaluationViewer = function() {
            if (isEvaluationTabVisible(this.metadata)) {
                var evaluationFormSelector = this.$panel.find('.evaluation-form-selector')
                $(evaluationFormSelector).selectmenu({
                    width: 500,
                    classes: {
                        'ui-selectmenu-icon': 'form-selectmenu-icon',
                        'ui-selectmenu-button': 'form-selectmenu',
                    },
                    change: function(event, data) {
                        this.loadEvaluationForm(data.item.value)
                    }.bind(this),
                })

                api.getEvaluationForms(this.metadata.selectedParty.serviceName, this.metadata.globalInteractionId, this.metadata.mediaType, this.metadata.selectedParty.loginId, function(data) {
                    if (data.length > 0) {
                        var formToLoad = data[0]

                        for (var i = 0; i < data.length; i++) {
                            var option = $('<option value=\'' + data[i].id + '\'>' + data[i].name + '</option>')
                            $(evaluationFormSelector).append(option)

                            if (formToLoad.status !== EVAL_RESULTS_STATUS_SAVED && data[i].status === EVAL_RESULTS_STATUS_SAVED) {
                                formToLoad = data[i]
                            }
                        }

                        $(evaluationFormSelector).val(formToLoad.id)
                        $(evaluationFormSelector).selectmenu('refresh')
                        this.loadEvaluationForm(formToLoad.id)
                    } else {
                        this.showNoEvaluationFormsForServiceMessage()
                    }
                }.bind(this))
            } else {
                this.showCantMakeEvaluationMessage()
            }
        }

        EvaluationConsole.prototype.showBookmark = function(formViewer, bookmarked) {
            if (isEvaluationTabVisible(this.metadata) && this.isFullMode) {
                var bookmarkOff = this.$panel.find('.bookmark-off')
                var bookmarkOn = this.$panel.find('.bookmark-on')
                bookmarkOff.off()
                bookmarkOn.off()
                if (bookmarked) {
                    bookmarkOff.hide()
                    bookmarkOn.removeClass('disabled').click(function() {
                        this.externalInterface.unbookmark(formViewer)
                    }.bind(this)).show()
                } else {
                    bookmarkOn.hide()
                    bookmarkOff.removeClass('disabled').click(function() {
                        this.externalInterface.bookmark(formViewer)
                    }.bind(this)).show()
                }
            }
        }

        EvaluationConsole.prototype.isBookmarked = function() {
            return this.$panel.find('.bookmark-on').is(':visible')
        }

        EvaluationConsole.prototype.showAssignModal = function(onAccept) {
            modals.showAssignModal(onAccept, this.metadata.selectedParty.loginId, this.metadata.selectedParty.team)
        }

        EvaluationConsole.prototype.showCalibrateModal = function(onAccept) {
            modals.showAssignModal(onAccept, this.metadata.selectedParty.loginId, this.metadata.selectedParty.team, true)
        }

        EvaluationConsole.prototype.showRejectModal = function(onAccept) {
            var $modal = $('#reject-modal-template').clone().removeAttr('id')
            $('.app-body').append($modal)

            $modal.on('show.bs.modal', function() {
                var $acceptBtn = $modal.find('.reject-modal-accept')
                $acceptBtn.on('click', function() {
                    var val = $modal.find('.value-input').val()
                    onAccept(val)
                })
            })

            $modal.on('hidden.bs.modal', function() {
                $modal.remove()
            })

            $modal.modal('show')
        }

        EvaluationConsole.prototype.showDeleteModal = function(onAccept) {
            var $modal = $('#delete-modal-template').clone().removeAttr('id')
            $('.app-body').append($modal)

            $modal.on('show.bs.modal', function() {
                var $acceptBtn = $modal.find('.delete-modal-accept')
                $acceptBtn.on('click', function() {
                    onAccept()
                })
            })

            $modal.on('hidden.bs.modal', function() {
                $modal.remove()
            })

            $modal.modal('show')
        }

        EvaluationConsole.prototype.loadEvaluationForm = function(formId) {
            var $evalContainer = this.$panel.find('.evaluation-viewer-container')
            var iframe = document.createElement('iframe')
            $evalContainer.html(iframe)
            iframe.onload = function() {
                api.loadEvaluationFormData(formId, this.metadata.globalInteractionId, this.metadata.mediaType, this.metadata.cdrId, this.metadata.selectedParty.loginId, function(data) {
                    iframe.contentWindow.init(data, this.$panel, true, this, stateControl, initializer)
                }.bind(this))
            }.bind(this)
            $.get('evaluation/viewer-layout-template-iframe.html?build=' + window.__buildVersion, function(html) {
                iframe.contentWindow.window.__buildVersion = window.__buildVersion

                var newHtml = injectVariables(html, {'{LOCALE}': initializer.getLocale(), '{BUILD}': window.__buildVersion})
                iframe.contentWindow.document.open()
                iframe.contentWindow.document.write(newHtml)
                iframe.contentWindow.document.close()
            })
        }

        EvaluationConsole.prototype.showNoEvaluationFormsForServiceMessage = function() {
            var div = document.createElement('div')
            div.className = 'alert alert-warning'
            div.role = 'alert'
            $(div).text(translator.get('noEvaluationFormsForService'))
            var $evalContainer = this.$panel.find('.evaluation-viewer-container')
            $evalContainer.html(div)
        }

        EvaluationConsole.prototype.showCantMakeEvaluationMessage = function() {
            var div = document.createElement('div')
            div.className = 'alert alert-warning'
            div.role = 'alert'
            $(div).text(translator.get('cantMakeEvaluation'))
            var $evalContainer = this.$panel.find('.evaluation-viewer-container')
            $evalContainer.html(div)
        }

        EvaluationConsole.prototype.closeCurrentTab = function() {
            var id = this.interactionData.id
            var index = this.index
            tabs.closeTab(getThisTabId(id, index), getThisPanelId(id, index))
        }

        EvaluationConsole.prototype.saveRemovedEvalGiidInSession = function(giid) {
            var savedData = JSON.parse(window.sessionStorage.getItem(removedEvalGiidsSessionkey))

            if (!savedData) {
                window.sessionStorage.setItem(removedEvalGiidsSessionkey, JSON.stringify([giid]))
            } else {
                if (!this.hasRemovedEvalGiidInSession(giid)) {
                    savedData.push(giid)
                    window.sessionStorage.setItem(removedEvalGiidsSessionkey, JSON.stringify(savedData))
                }
            }
        }

        EvaluationConsole.prototype.hasRemovedEvalGiidInSession = function(giid) {
            var savedData = JSON.parse(window.sessionStorage.getItem(removedEvalGiidsSessionkey))

            if (savedData) {
                for (var i = 0; i < savedData.length; i++) {
                    if (savedData[i].toLocaleLowerCase() === giid.toLocaleLowerCase()) {
                        return true
                    }
                }
            }

            return false
        }
    }

    function ExternalInterface(consoleCtrl) {
        this.consoleCtrl = consoleCtrl

        // ===== Public Methods =====
        ExternalInterface.prototype.downloadAttachment = function(evaluationId, attachmentId) {
            window.location = 'rest/evaluation/download-attachment?token=' + this.consoleCtrl.token +
                '&evaluationId=' + evaluationId +
                '&attachmentId=' + attachmentId +
                '&ts=' + Date.now()
        }

        ExternalInterface.prototype.save = function(formViewer, callback) {
            this.saveChanges(formViewer, function(data) {
                formViewer.setEvaluationId(data.id)
                formViewer.setupEvaluationFormButtons(data.evaluationPermissions)
                callback(data)
            }, EVAL_RESULTS_STATUS_SAVED)
        }
        ExternalInterface.prototype.submit = function(formViewer, callback) {
            this.saveChanges(formViewer, callback, EVAL_RESULTS_STATUS_SUBMITTED)
                .done(function() {
                    formViewer.hideEvaluationButtons()
                    formViewer.hideDeleteButton()
                    formViewer.showThankYouMsg()
                    formViewer.setReadOnly()
                })
        }
        ExternalInterface.prototype.assign = function(formViewer, callback) {
            this.consoleCtrl.showAssignModal(function(loginId, onFinish) {
                this.assignForm(formViewer, EVAL_RESULTS_TYPE_EVALUATION, loginId, callback)
                    .always(function() { onFinish() })
            }.bind(this))
        }
        ExternalInterface.prototype.calibrate = function(formViewer, callback) {
            this.consoleCtrl.showCalibrateModal(function(loginIds, onFinish) {
                this.assignForm(formViewer, EVAL_RESULTS_TYPE_CALIBRATION, loginIds, callback)
                    .always(function() { onFinish() })
            }.bind(this))
        }
        ExternalInterface.prototype.accept = function(formViewer, callback) {
            this.saveChanges(formViewer, callback, EVAL_RESULTS_STATUS_REVIEWED)
                .done(function() {
                    formViewer.hideConfirmationButtons()
                    formViewer.showThankYouMsg()
                    consoleCtrl.updateEvalsTabStatus(formViewer.getEvaluationId())
                })
        }
        ExternalInterface.prototype.reject = function(formViewer, callback) {
            this.consoleCtrl.showRejectModal(function(comment) {
                this.saveChanges(formViewer, callback, EVAL_RESULTS_STATUS_DISPUTED, comment)
                    .done(function() {
                        formViewer.hideConfirmationButtons()
                        formViewer.showThankYouMsg()
                        consoleCtrl.updateEvalsTabStatus(formViewer.getEvaluationId())
                    })
            }.bind(this))
        }
        ExternalInterface.prototype.reopen = function(formViewer) {
            this.reopenEvaluation(formViewer, function() {
                formViewer.hideReopenButton()
                formViewer.hideDeleteButton()
                formViewer.showThankYouMsg()
                consoleCtrl.updateEvalsTabStatus(formViewer.getEvaluationId())
            })
        }
        ExternalInterface.prototype.delete = function(formViewer) {
            this.consoleCtrl.showDeleteModal(function() {
                this.deleteEvaluation(formViewer, function(response) {
                    var parsedRes = JSON.parse(response)
                    var accessible = parsedRes.accessible
                    var giid = parsedRes.giid

                    if (!accessible) {
                        this.consoleCtrl.closeCurrentTab()
                        this.consoleCtrl.saveRemovedEvalGiidInSession(giid)
                    } else if (formViewer.isReadOnly()) {
                        this.consoleCtrl.loadAllEvalsTabContent()
                    } else {
                        this.consoleCtrl.loadEvaluationForm(formViewer.getFormIdAndName().id)
                    }
                }.bind(this))
            }.bind(this))
        }
        ExternalInterface.prototype.bookmark = function(formViewer, callback) {
            this.consoleCtrl.showBookmark(formViewer, true)
            this.bookmarkForm(formViewer, function(data) {
                formViewer.setEvaluationId(data.id)
                if (callback) {
                    callback(data)
                }
            })
        }
        ExternalInterface.prototype.unbookmark = function(formViewer, callback) {
            this.consoleCtrl.showBookmark(formViewer, false)
            this.bookmarkForm(formViewer, callback)
        }
        // ===== Public Methods =====

        ExternalInterface.prototype.buildResultObject = function(formViewer, type, status, loginId, comment) {
            var exportData = formViewer.exportData()
            var formData = formViewer.getFormIdAndName()
            var resultObj = {
                id: formViewer.getEvaluationId(),
                formId: formData.id,
                formName: formData.name,
                layout: JSON.stringify(exportData),
                cdrId: this.consoleCtrl.metadata.cdrId,
                giid: this.consoleCtrl.metadata.globalInteractionId,
                mediaType: this.consoleCtrl.metadata.mediaType,
                agentLoginId: this.consoleCtrl.metadata.selectedParty.loginId,
                formScore: formViewer.getFormScore(),
                type: type,
                status: status,
                bookmark: this.consoleCtrl.isBookmarked(),
                agentComment: comment,
                formFailed: formViewer.isFormFailed(),
                newAttachmentsList: formViewer.getNewAttachmentsList(),
            }
            if (loginId) {
                resultObj.loginId = loginId
            }
            return resultObj
        }

        ExternalInterface.prototype.successCB = function(response) {
            if (this.callback) {
                return this.callback(response)
            }
        }
        ExternalInterface.prototype.errorCB = function() {
            if (this.callback) {
                return this.callback('Server error')
            }
        }
        ExternalInterface.prototype.bookmarkForm = function(formViewer, callback) {
            bookmarkFormHandler(function() {
                var resultObj = this.buildResultObject(formViewer)
                return api.bookmarkResultDefinition(resultObj, this.successCB.bind({callback: callback}), this.errorCB.bind({callback: callback}))
            }.bind(this))
        }
        ExternalInterface.prototype.assignForm = function(formViewer, type, loginIds, callback) {
            var formId = formViewer.getFormIdAndName().id
            var identifier = {
                giid: this.consoleCtrl.metadata.globalInteractionId,
                mediaType: this.consoleCtrl.metadata.mediaType,
                cdrId: this.consoleCtrl.metadata.cdrId,
            }
            return api.assignEvaluations(formId, type, loginIds, identifier, this.successCB.bind({callback: callback}), this.errorCB.bind({callback: callback}))
        }
        ExternalInterface.prototype.saveChanges = function(formViewer, callback, status, comment) {
            var resultObj = this.buildResultObject(formViewer, null, status, null, comment)
            if (status === EVAL_RESULTS_STATUS_SUBMITTED) {
                resultObj.details = formViewer.getFormDetails()
            }
            return api.saveResultDefinition(resultObj, this.successCB.bind({callback: callback}), this.errorCB.bind({callback: callback}))
        }
        ExternalInterface.prototype.reopenEvaluation = function(formViewer, callback) {
            return api.reopenEvaluation(formViewer.getEvaluationId(), this.successCB.bind({callback: callback}), this.errorCB.bind({callback: callback}))
        }
        ExternalInterface.prototype.deleteEvaluation = function(formViewer, callback) {
            var evalId = formViewer.getEvaluationId()
            var giid = this.consoleCtrl.metadata.globalInteractionId
            var agentLoginId = this.consoleCtrl.metadata.selectedParty.loginId
            return api.deleteEvaluation(evalId, giid, agentLoginId, callback)
        }
    }
}
