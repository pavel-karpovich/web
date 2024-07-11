var TranscriptControl = function($consolePanel, config) {

    var self = this

    var MANDATORY_RECORDING_FAILURE = 'MANDATORY_RECORDING_FAILURE'

    this.metadata = undefined
    this.searchPhrase = undefined
    this.hitCount = 0
    this.currentHitNumber = 0

    this.shownTranscript = 0
    this.reversedTranscriptsTime = undefined

    // used for cases only
    this.transcriptBatchOffset = 0

    this.$transcriptBox = $consolePanel.find('.transcript-box')
    this.timelineControl = undefined

    if (config) {
        this.config = config
    } else {
        this.config = {
            showCase: true,
            showSearch: true,
        }
    }

    // ===== Public methods =====
    TranscriptControl.prototype.init = function(data, timelineControl) {
        this.metadata = data
        this.timelineControl = timelineControl

        if (this.metadata.mediaType === MEDIA_TYPE_EMAIL && !this.metadata.caseData) {
            modals.showError('noCaseErrorMsg')
        }

        if (this.config.showSearch) {
            this.initTranscriptHeader()
        }

        this.initTranscriptLog()
        this.renderTranscriptLog()
    }

    TranscriptControl.prototype.moveTo = function(timeOffset) {
        if (this.reversedTranscriptsTime) {
            var toShow = this.reversedTranscriptsTime.find(function(element) {
                return element.time <= timeOffset
            })
            if (toShow && toShow.id !== this.shownTranscript) {
                this.$transcriptBox.find('.transcript-log-item-' + this.shownTranscript).removeClass('current')
                this.shownTranscript = toShow.id
                var $currentTranscript = this.$transcriptBox.find('.transcript-log-item-' + toShow.id)
                $currentTranscript.addClass('current')
                var elementToMove = $currentTranscript[0]
                this.$transcriptBox.find('.transcript-log').animate({scrollTop: elementToMove.offsetTop}, 250)
            }
        }
    }

    // ===== Private methods =====
    TranscriptControl.prototype.initTranscriptHeader = function() {
        var transcriptPanel = this.$transcriptBox
        if (this.metadata.mediaType === MEDIA_TYPE_CHAT) {
            transcriptPanel.find('.transcript-header-media img').attr('src', '/agent/evaluation-page/img/ico/ico-chat.svg')
        }
        if (this.metadata.mediaType === MEDIA_TYPE_EMAIL) {
            transcriptPanel.find('.transcript-header-media img').attr('src', '/agent/evaluation-page/img/ico/ico-email.svg')
        }

        this.updateTransctiptHeaderLabel()

        if (this.metadata.canUpdateDisposition && this.metadata.selectedParty.serviceName && this.metadata.selectedParty.disposition) {
	    $(transcriptPanel).find('.transcript-header .disposition-edit').show()
            $(transcriptPanel).find('.transcript-header-edit').click(self.editDisposition.bind(self))
        }

        // Enable search only if it's present
        // and it isn't email (search through html is quite complicated)
        if (this.metadata.selectedParty.transcriptsBatch && !this.metadata.selectedParty.transcriptsBatch.empty && this.metadata.mediaType !== MEDIA_TYPE_EMAIL) {
            this.reversedTranscriptsTime = $.map(this.metadata.selectedParty.transcriptsBatch.transcripts, function(val, i) {
                return {id: i, time: val.timeOffset / 1000}
            }).reverse()

            $(transcriptPanel).find('.transcript-header .search-btn').click(self.toggleSearch.bind(self))
            $(transcriptPanel).find('.transcript-header .search-prev').click(self.showPrevtHit.bind(self))
            $(transcriptPanel).find('.transcript-header .search-next').click(self.showNextHit.bind(self))
            this.$transcriptBox.find('.transcript-header .search-input input').keyup(function(e) {
                var phrase = $(this).val()
                if (e.keyCode === KEYCODE_ENTER) {
                    if (phrase !== self.searchPhrase) {
                        self.doSearch(phrase)
                    } else {
                        self.showNextHit()
                    }
                } else if (e.keyCode === KEYCODE_ESC) {
                    self.toggleSearch()
                } else {
                    self.debounceSearch.call(self, phrase)
                }
            })
        }
    }

    TranscriptControl.prototype.updateTransctiptHeaderLabel = function() {
        var transcriptHeaderLabel = ''
        if (this.metadata.selectedParty.serviceName) {
            transcriptHeaderLabel = this.metadata.selectedParty.serviceName
        }

        var disposition = this.metadata.selectedParty.disposition
        var dispositionRecFailure = MANDATORY_RECORDING_FAILURE === this.metadata.disposition ?
            MANDATORY_RECORDING_FAILURE : ''

        if (disposition || dispositionRecFailure) {
            if (transcriptHeaderLabel) {
                transcriptHeaderLabel = transcriptHeaderLabel + ': '
            }

            if (disposition) {
                disposition += dispositionRecFailure ? ' (' + MANDATORY_RECORDING_FAILURE + ')' : ''
            } else {
                disposition = MANDATORY_RECORDING_FAILURE
            }
            transcriptHeaderLabel = transcriptHeaderLabel + disposition
        }

        var transcriptPanel = this.$transcriptBox
        $(transcriptPanel).find('.transcript-header-label').text(transcriptHeaderLabel)
    }

    TranscriptControl.prototype.initTranscriptLog = function() {
        var $transcripts = $('#transcript-log-template').clone().removeAttr('id')
        this.$transcriptBox.append($transcripts)

        if (!this.metadata.caseData) {
            // no further initialization required for non-case transcripts
            return
        }

        var $transcriptLogContainer = this.$transcriptBox.find('.transcript-log-container')

        // load next transcripts batch
        var $transcriptNextBatch = $transcripts.find('.transcripts-next-batch')
        var transcriptNextBatch = new TranscriptBatchBtn($transcriptNextBatch, translator.get('loadNewerContent'),
            function(success, failure) {
                var nextBatchOffset = self.transcriptBatchOffset + self.metadata.selectedParty.transcriptsBatch.size
                api.getCaseLog(self.metadata.caseData.caseId, nextBatchOffset, function(data) {
                    var curBatch = self.metadata.selectedParty.transcriptsBatch
                    // prepend the last item from current batch to the new one
                    data.transcripts.unshift(curBatch.transcripts[curBatch.size - 1])
                    self.metadata.selectedParty.transcriptsBatch = data
                    self.transcriptBatchOffset = nextBatchOffset
                    success()
                    self.renderTranscriptLog()
                    $transcriptLogContainer.scrollTop(0)
                }).fail(function() {
                    failure()
                })
            })

        // load prev transcripts batch
        var $transcriptPrevBatch = $transcripts.find('.transcripts-prev-batch')
        var transcriptPrevBatch = new TranscriptBatchBtn($transcriptPrevBatch, translator.get('loadOlderContent'),
            function(success, failure) {
                var prevTranscriptBatchOffset = self.transcriptBatchOffset - 50
                api.getCaseLog(self.metadata.caseData.caseId, prevTranscriptBatchOffset, function(data) {
                    var curBatch = self.metadata.selectedParty.transcriptsBatch
                    // append the first item from current batch to the new one
                    data.transcripts.push(curBatch.transcripts[0])
                    self.metadata.selectedParty.transcriptsBatch = data
                    self.transcriptBatchOffset = prevTranscriptBatchOffset
                    success()
                    self.renderTranscriptLog()
                    $transcriptLogContainer.scrollTop($transcriptLogContainer.prop('scrollHeight'))
                }).fail(function() {
                    failure()
                })
            })

        // handle user scroll to show buttons when on top/bottom
        $transcriptLogContainer.scroll(function() {
            var scrollTop = $transcriptLogContainer.scrollTop()
            var height = $transcriptLogContainer.height()
            var scrollHeight = $transcriptLogContainer.prop('scrollHeight')
            var switchBtnScrollOffset = 50

            var onBottomScroll = scrollTop + height > scrollHeight - switchBtnScrollOffset
            var hasNextBatch = self.metadata.selectedParty.transcriptsBatch.totalCount - self.metadata.selectedParty.transcriptsBatch.size - self.transcriptBatchOffset > 0
            if (onBottomScroll && hasNextBatch) {
                transcriptNextBatch.show()
                return
            }
            transcriptNextBatch.hide()

            var onTopScroll = scrollTop < switchBtnScrollOffset
            var hasPrevBatch = self.transcriptBatchOffset > 0
            if (onTopScroll && hasPrevBatch) {
                transcriptPrevBatch.show()
                return
            }
            transcriptPrevBatch.hide()
        })
    }

    TranscriptControl.prototype.renderTranscriptLog = function() {
        var $transcriptLogPanel = this.$transcriptBox.find('.transcript-log')
        var $transcriptLogContainer = $transcriptLogPanel.find('.transcript-log-container')

        // remove previous logs if any
        $transcriptLogContainer.children('.transcript-log-item').remove()

        if (this.metadata.selectedParty.transcriptsBatch && !this.metadata.selectedParty.transcriptsBatch.empty) {
            if (this.metadata.caseData && this.config.showCase && this.transcriptBatchOffset === 0) {
                // show case data only if it's present, requested and it's the firs transcripts batch/page
                var $case = $('#transcript-log-item-case-template').clone().removeAttr('id')
                $case.find('.item-img .item-content-title').text(this.metadata.caseData.caseNumber)
                $case.find('.item-content .item-content-title').text(this.metadata.caseData.caseTitle ? this.metadata.caseData.caseTitle : '')
                var reporter = this.metadata.caseData.reporter ? this.metadata.caseData.reporter : translator.get('unidentified')
                $case.find('.item-content-reporter .item-content-name').text(reporter)
                var cc = this.metadata.caseData.cc ? this.metadata.caseData.cc + ',' : this.metadata.caseData.cc
                $case.find('.item-content-cc .item-content-name').text(cc)
                $case.find('.item-content-status .status-value').text(this.metadata.caseData.status)
                if (this.metadata.caseData.serviseName) {
                    $case.find('.item-content-footer').text(this.metadata.caseData.serviseName)
                }
                $transcriptLogContainer.append($case)
            }

            for (var i = 0; i < this.metadata.selectedParty.transcriptsBatch.size; i++) {
                var transcript = this.metadata.selectedParty.transcriptsBatch.transcripts[i]
                var $item = $('#' + this.getTemplateId(transcript)).clone().removeAttr('id').addClass('transcript-log-item-' + i)
                this.bindLogData($item, transcript, i)
                $transcriptLogContainer.append($item)
            }
        } else if (!!this.metadata.selectedParty.eraseInfoVoiceSignature || !!this.metadata.selectedParty.eraseInfoChatTranscript) {
            var eraseInfo = !this.metadata.selectedParty.eraseInfoVoiceSignature ? this.metadata.selectedParty.eraseInfoChatTranscript : this.metadata.selectedParty.eraseInfoVoiceSignature
            $transcriptLogPanel.find('.transcripts-erased-container').text(getEraseStr(eraseInfo, 'transcripts'))
            $transcriptLogPanel.find('.transcripts-erased-container').show()
        }
    }

    TranscriptControl.prototype.getTemplateId = function(transcript) {
        switch (transcript.type) {
            case TRANSCRIPT_TYPE_NOTES:
                return 'transcript-log-item-notes-template'
            case TRANSCRIPT_TYPE_EMAIL:
                return 'transcript-log-item-email-template'
            case TRANSCRIPT_TYPE_DRAFT:
                return 'transcript-log-item-draft-template'
            case TRANSCRIPT_TYPE_VOICE:
                return 'transcript-log-item-voice-template'
            case TRANSCRIPT_TYPE_CHAT:
                return 'transcript-log-item-chat-template'
            case TRANSCRIPT_TYPE_CASE_EVENT:
                return 'transcript-log-item-case-event-template'
            default:
                return 'transcript-log-item-template'
        }
    }

    TranscriptControl.prototype.bindLogData = function($item, transcript, index) {
        this.bindBaseLogData($item, transcript)
        switch (transcript.type) {
            case TRANSCRIPT_TYPE_NOTES:
                return this.bindCaseNotesLogData($item, transcript)
            case TRANSCRIPT_TYPE_EMAIL:
                return this.bindCaseEmailLogData($item, transcript)
            case TRANSCRIPT_TYPE_DRAFT:
                return this.bindCaseDraftLogData($item, transcript)
            case TRANSCRIPT_TYPE_VOICE:
                return this.bindCaseVoiceLogData($item, transcript)
            case TRANSCRIPT_TYPE_CHAT:
                return this.bindCaseChatLogData($item, transcript)
            case TRANSCRIPT_TYPE_CASE_EVENT:
                return this.bindCaseCaseLogData($item, transcript)
            default:
                return this.bindVoiceChatLogData($item, transcript, index)
        }
    }

    TranscriptControl.prototype.bindBaseLogData = function($item, transcript) {
        var photoSrc = getUserPhotoUrl(transcript.userId)
        if (photoSrc) {
            $item.find('.item-photo').attr('src', photoSrc)
        }

        if (transcript.sentiment) {
            if (transcript.sentiment === SENTIMENT_NEUTRAL) {
                $item.find('.item-content-emotions-neutral').show()
            } else {
                if (transcript.sentiment === SENTIMENT_POSITIVE) {
                    $item.find('.item-content-emotions-positive').show()
                } else {
                    if (transcript.sentiment === SENTIMENT_NEGATIVE) {
                        $item.find('.item-content-emotions-negative').show()
                    }
                }
            }
        }
    }

    TranscriptControl.prototype.getTranscriptUserName = function(transcript) {
        return transcript.user ? transcript.user : this.metadata.nonSelectedParty.name
    }

    TranscriptControl.prototype.bindVoiceChatLogData = function($item, transcript, index) {
        var timeOffsetInSeconds = transcript.timeOffset / 1000
        var timeOffsetStr = formatSeconds(timeOffsetInSeconds)
        if (index === 0) {
            $item.addClass('current')
        }
        $item.attr('data-time-offset', timeOffsetInSeconds)
        $item.click(function() {
            self.timelineControl.moveTo($(this).data('time-offset'))
        })

        var userName = this.getTranscriptUserName(transcript)
        $item.find('.item-content-user').text(userName + ' ' + timeOffsetStr)
        if (transcript.text) {
            $item.find('.item-content-message').html(replaceBr(transcript.text))
        } else {
            $item.find('.item-content-message').hide()
        }

        if (!!transcript.attachments && !!transcript.attachments.length) {
            $.each(transcript.attachments, function(i, attach) {
                var $attach = $('#transcript-log-attachment-template').clone().removeAttr('id')
                $attach.text(attach.name)
                if (attach.erasedTime) {
                    var tooltip = translator.get('attachmentDeletedTooltip', formatUTCDateTime(attach.erasedTime), attach.erasedByLoginId)
                    $attach.prop('title', tooltip)
                    $attach.addClass('deleted')
                } else {
                    $attach.on('click', function() {
                        api.getAttachmentDownloadPath(attach.id, this.metadata.mediaType, function(url) {
                            window.open(url, '_blank')
                        })
                    }.bind(this))
                }
                $item.find('.item-content-attachments').append($attach)
            }.bind(this))
        } else {
            $item.find('.item-content-attachments').hide()
        }
    }

    TranscriptControl.prototype.bindCaseNotesLogData = function($item, transcript) {
        var userName = this.getTranscriptUserName(transcript)
        $item.find('.item-content-user .item-content-name').text(userName)
        var date = new Date(transcript.time)
        $item.find('.item-content-user .item-content-date').text(formatTime(date) + ' ' + formatDate(date))
        if (transcript.text) {
            $item.find('.item-content-message').text(replaceBr(transcript.text))
        }
        if (transcript.serviceAndDisposition) {
            $item.find('.item-content-disposition').text(transcript.serviceAndDisposition)
        }
        if (transcript.title) {
            $item.find('.item-content-action').text(translator.get(transcript.title))
        }
    }

    TranscriptControl.prototype.bindCaseEmailLogData = function($item, transcript) {
        $item.find('.item-content-title').text(transcript.title ? transcript.title : '')
        var userName = transcript.subType === DIRECTION_AUTO_ACK ? translator.get('autoAcknowledge') : this.getTranscriptUserName(transcript)
        $item.find('.item-content-user .item-content-name').text(userName)
        $item.find('.item-content-user .item-content-action').text(this.getEmailAction(transcript.subType))
        var date = new Date(transcript.time)
        $item.find('.item-content-user .item-content-date').text(formatTime(date) + ' ' + formatDate(date))

        //download all emails #28778 Unable to download individual outbound emails from Interaction Record details
        if (transcript.emailId) {
            $item.find('.item-content-user .item-content-download-original').on('click', function() {
                api.getOriginalEmailDownloadPath(transcript.emailId, function(url) {
                    window.open(url, '_blank')
                })
            })
        }


        $item.find('.item-content-footer').text(transcript.serviceAndDisposition)

        if (transcript.html) {
            $item.find('.item-content-message').html(transcript.html)
        } else if (transcript.eraseInfo) {
            $item.find('.item-content-message').html(getEraseStr(transcript.eraseInfo))
        }

        $.each(transcript.attachments, function(i, attach) {
            var $attach = $('#transcript-log-attachment-template').clone().removeAttr('id')
            $attach.text(attach.name)
            $attach.on('click', function() {
                api.getAttachmentDownloadPath(attach.id, this.metadata.mediaType, function(url) {
                    window.open(url, '_blank')
                })
            }.bind(this))
            $item.find('.item-content-attachments').append($attach)
        }.bind(this))
        if (this.metadata.globalInteractionId === transcript.id) {
            $item.addClass('selected')
        }
    }

    TranscriptControl.prototype.bindCaseDraftLogData = function($item, transcript) {
        $item.find('.item-content-title').text(transcript.title ? transcript.title : '')
        var userName = transcript.subType === DIRECTION_AUTO_ACK ? translator.get('autoAcknowledge') : this.getTranscriptUserName(transcript)
        $item.find('.item-content-user .item-content-name').text(userName)
        $item.find('.item-content-user .item-content-action').text(translator.get('unsentDraft'))
        var date = new Date(transcript.time)
        $item.find('.item-content-user .item-content-date').text(formatTime(date) + ' ' + formatDate(date))

        if (transcript.html) {
            $item.find('.item-content-message').html(transcript.html)
        }
    }

    TranscriptControl.prototype.bindCaseVoiceLogData = function($item, transcript) {
        var userName = this.getTranscriptUserName(transcript)
        $item.find('.item-content-user .item-content-name').text(userName)
        if (!transcript.agent && transcript.opponent) {
            $item.find('.item-content-user .item-content-handled-by').text(', ' + translator.get('handledBy') + ' ' + transcript.opponent)
        }
        var date = new Date(transcript.time)
        $item.find('.item-content-user .item-content-date').text(formatTime(date) + ' ' + formatDate(date))
        $item.find('.item-content-footer').text(transcript.serviceAndDisposition)
    }

    TranscriptControl.prototype.bindCaseChatLogData = function($item, transcript) {
        var userName = this.getTranscriptUserName(transcript)
        $item.find('.item-content-user .item-content-name').text(userName)
        if (!transcript.agent && transcript.opponent) {
            $item.find('.item-content-user .item-content-handled-by').text(', ' + translator.get('handledBy') + ' ' + transcript.opponent)
        }
        var date = new Date(transcript.time)
        $item.find('.item-content-user .item-content-date').text(formatTime(date) + ' ' + formatDate(date))
        $item.find('.item-content-footer').text(transcript.serviceAndDisposition)
    }

    TranscriptControl.prototype.bindCaseCaseLogData = function($item, transcript) {
        var date = new Date(transcript.time)
        $item.find('.item-content-user .item-content-date').text(formatTime(date) + ' ' + formatDate(date))

        var title = translator.get('error')
        var userName = this.getTranscriptUserName(transcript)

        if (transcript.subType) {
            switch (transcript.subType) {
                case TRANSCRIPT_TYPE_CASE_EVENT_PUSHED: {
                    title = translator.get('casePushed', transcript.serviceAndDisposition)
                    break
                }
                case TRANSCRIPT_TYPE_CASE_EVENT_PULLED: {
                    title = translator.get('casePulled', transcript.serviceAndDisposition)
                    break
                }
                case TRANSCRIPT_TYPE_CASE_EVENT_ASSIGNED: {
                    userName = transcript.opponent
                    if (transcript.serviceAndDisposition) {
                        title = translator.get('caseAssignedToQueue', transcript.serviceAndDisposition)
                    } else {
                        title = translator.get('caseAssignedToAgent', transcript.user)
                    }
                    break
                }
                case TRANSCRIPT_TYPE_CASE_EVENT_TRANSFERRED: {
                    userName = transcript.opponent
                    if (transcript.serviceAndDisposition) {
                        title = translator.get('caseTransferredToQueue', transcript.serviceAndDisposition)
                    } else {
                        title = translator.get('caseTransferredToAgent', transcript.user)
                    }
                    break
                }
                case TRANSCRIPT_TYPE_CASE_EVENT_FOLLOWUP_FROM:
                case TRANSCRIPT_TYPE_CASE_EVENT_FOLLOWUP_CREATED: {
                    title = translator.get('caseCreated', transcript.text)
                    var msg = transcript.subType == TRANSCRIPT_TYPE_CASE_EVENT_FOLLOWUP_FROM ? 'caseCreatedAsFollowUp' : 'followUpCaseCreated'
                    // TODO: Make as real link
                    var link = translator.get(msg, transcript.text)
                    $item.find('.item-content-message').text(link)
                    break
                }
                case TRANSCRIPT_TYPE_CASE_EVENT_STATE_CHANGED: {
                    switch (transcript.status) {
                        case TRANSCRIPT_TYPE_CASE_STATUS_NEW:
                        case TRANSCRIPT_TYPE_CASE_STATUS_OPEN:
                            title = translator.get('caseStateChanged', translator.get('caseStatus' + transcript.status))
                            break
                        case TRANSCRIPT_TYPE_CASE_STATUS_PENDING:
                            if (!transcript.usePendingReason) {
                                title = translator.get('caseStateChanged', translator.get('caseStatus' + transcript.status))
                            } else {
                                var reason = transcript.pendingReason || translator.get('none')
                                title = translator.get('caseStatePending', translator.get('caseStatus' + transcript.status), reason)
                            }
                            break
                        case TRANSCRIPT_TYPE_CASE_STATUS_RESOLVED:
                            if (!transcript.useDisposition) {
                                title = translator.get('caseStateChanged', translator.get('caseStatus' + transcript.status))
                            } else {
                                var disposition = transcript.disposition || translator.get('none')
                                title = translator.get('caseStateDisposition', translator.get('caseStatus' + transcript.status), disposition)
                            }
                            break
                        case TRANSCRIPT_TYPE_CASE_STATUS_CLOSED:
                            title = translator.get('caseStateClosed')
                            break
                    }
                    break
                }
            }
        }

        $item.find('.item-content-user .item-content-name').text(userName)
        $item.find('.item-content-user .item-content-action').text(title)
    }

    TranscriptControl.prototype.getEmailAction = function(emailDirection) {
        switch (emailDirection) {
            case DIRECTION_INBOUND:
                return translator.get('reported')
            case DIRECTION_OUTBOUND:
                return translator.get('sent')
            case DIRECTION_REPLY:
                return translator.get('replied')
            case DIRECTION_FORWARD:
                return translator.get('forwarded')
            case DIRECTION_AUTO_ACK:
                return ''
        }
    }

    TranscriptControl.prototype.hideSearchControls = function() {
        this.$transcriptBox.find('.search-label, .search-prev, .search-next').hide()
    }

    TranscriptControl.prototype.showSearchControls = function() {
        this.$transcriptBox.find('.search-label, .search-prev, .search-next').show()
    }

    TranscriptControl.prototype.editDisposition = function() {
        if (this.dispositions) {
	    this.showEditDispositionModal()
        } else {
	    api.loadDispositions(this.metadata.selectedParty.serviceName,
                function(data) {
		    this.dispositions = data
		    this.showEditDispositionModal()
                }.bind(this))
        }
    }

    TranscriptControl.prototype.showEditDispositionModal = function() {
        var $modal = $('#edit-disposition-modal-template').clone().removeAttr('id')
        $('.app-body').append($modal)
        var $comboboxWrapper = $modal.find('.disposition-select')
        $comboboxWrapper.html('')
        var selected = undefined
        $.each(this.dispositions, function(index, item) {
	    if (this.metadata.selectedParty.disposition && this.metadata.selectedParty.disposition === item.name) {
                selected = item.id
	    }
            $comboboxWrapper.append($('<option>', {value: item.id, text: item.name}))
        }.bind(this))
        $comboboxWrapper.selectmenu({
	    width: '100%',
            select: function(event, ui) {
                return false
            },
        })
        if (selected) {
	    $comboboxWrapper.val(selected)
        }
        $comboboxWrapper.selectmenu('refresh')
        $comboboxWrapper.selectmenu('widget').addClass('custom-ui-select')

        $modal.on('show.bs.modal', function() {
            var $acceptBtn = $modal.find('.disposition-modal-accept')
            var $reason = $modal.find('.disposition-reason')
            $acceptBtn.on('click', function() {
                var agentLoginId = this.metadata.selectedParty.loginId
                api.updateDisposition(agentLoginId, $comboboxWrapper.val(), $reason.val(),
                    function(data) {
		    var result = JSON.parse(data)
		    $.each(result, function(index, item) {
                            if (agentLoginId === item.agentLoginId) {
			    this.metadata.selectedParty.disposition = item.dispositionName
			    this.updateTransctiptHeaderLabel()
			    return false
                            }
		    }.bind(this))
                    }.bind(this))
            }.bind(this))
        }.bind(this))

        $modal.on('hidden.bs.modal', function() {
            $modal.remove()
        })

        $modal.modal('show')
    }

    TranscriptControl.prototype.toggleSearch = function() {
        var $searchInput = this.$transcriptBox.find('.transcript-header .search-input input')
        var isOpen = $searchInput.hasClass('slide-in')
        if (isOpen) {
            $searchInput.one(getAnimationEndEventName(), function() {
                this.hideSearchControls()
                this.clearSearch()
            }.bind(this))
            $searchInput.removeClass('slide-in')
            $searchInput.addClass('slide-out')
        } else {
            this.showSearchControls()
            $searchInput.one(getAnimationEndEventName(), function() {
                $searchInput.focus()
            })
            $searchInput.removeClass('slide-out')
            $searchInput.addClass('slide-in')
        }
    }

    this.debounceSearch = $.debounce(250, function(phrase) {
        self.doSearch(phrase)
    })

    TranscriptControl.prototype.doSearch = function(phrase) {
        if (phrase !== this.searchPhrase) {
            this.searchPhrase = phrase
            this.clearSearchHits()
            if (phrase) {
                var regex = new RegExp(phrase, 'gi')
                var hits = this.$transcriptBox.find('.item-content-message').map(function(i, element) {
                    return ((element.innerHTML || '').match(regex) || []).length
                }).toArray()
                this.currentHitNumber = 0
                this.hitCount = hits.reduce(function(acc, val) {
                    return acc + val
                }, 0)
                if (this.hitCount > 0) {
                    this.highlightAllHits(regex)
                    this.showNextHit()
                } else {
                    this.refreshSearchLabel()
                }
            } else {
                this.clearSearch()
            }
        }
    }

    TranscriptControl.prototype.clearSearch = function() {
        this.hitCount = 0
        this.currentHitNumber = 0
        this.searchPhrase = undefined
        this.$transcriptBox.find('.transcript-header .search-input input').val('')
        this.refreshSearchLabel()
        this.clearSearchHits()
    }

    TranscriptControl.prototype.clearSearchHits = function() {
        this.$transcriptBox.find('.item-content-message').each(function() {
            this.innerHTML = this.innerHTML.replace(/<span[^>]*>|<\/span>/g, '')
        })
    }

    TranscriptControl.prototype.highlightAllHits = function(regex) {
        this.$transcriptBox.find('.item-content-message').each(function() {
            this.innerHTML = this.innerHTML.replace(regex, function(matched) {
                return '<span class=\'search-hit\'>' + matched + '</span>'
            })
        })
    }

    TranscriptControl.prototype.showPrevtHit = function() {
        if (this.hitCount > 0) {
            this.showSearchHit(Math.max(this.currentHitNumber - 1, 1))
        }
    }

    TranscriptControl.prototype.showNextHit = function() {
        if (this.hitCount > 0) {
            this.showSearchHit(Math.min(this.currentHitNumber + 1, this.hitCount))
        }
    }

    TranscriptControl.prototype.refreshSearchLabel = function() {
        this.$transcriptBox.find('.search-label .current-hit-number').text(this.currentHitNumber)
        this.$transcriptBox.find('.search-label .hit-count-number').text(this.hitCount)
    }

    TranscriptControl.prototype.showSearchHit = function(number) {
        this.currentHitNumber = number
        this.refreshSearchLabel()
        this.$transcriptBox.find('.item-content-message .search-hit.current').removeClass('current')
        var $currentHit = $(this.$transcriptBox.find('.item-content-message .search-hit')[number - 1]) // number starts form 1
        $currentHit.addClass('current')
        var transcriptTime = $currentHit.closest('.transcript-log-item').data('time-offset')
        this.timelineControl.moveTo(transcriptTime)
    }

    // Transcript Batch Button
    function TranscriptBatchBtn($btn, tooltip, onLoad) {
        var self = this
        var progressTimer

        $btn.attr('title', tooltip)
        $btn.click(function() {
            if ($btn.prop('disabled')) {
                return false
            }
            $btn.prop('disabled', true)
            // show progress only if load take > 1s
            progressTimer = setTimeout(self.showProgress, 1000)
            onLoad(function() {
                self.stopProgress()
                self.hide()
                $btn.prop('disabled', false)
            }, function() {
                self.stopProgress()
                $btn.prop('disabled', false)
            })
        })

        this.stopProgress = function() {
            clearTimeout(progressTimer)
            self.hideProgress()
        }

        this.show = function() {
            $btn.show()
        }

        this.hide = function() {
            $btn.hide()
        }

        this.showProgress = function() {
            $btn.find('img').hide()
            $btn.find('.transcript-loader').show()
        }

        this.hideProgress = function() {
            $btn.find('.transcript-loader').hide()
            $btn.find('img').show()
        }

    }
}
