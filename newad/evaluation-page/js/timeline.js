function TimelineControl($consolePanel) {
    var MIN_DURATION = 1000 // one second
    var ZOOM_IN = 1000 // one second
    var ZOOM_FACTOR = 0.2
    var TIME_BAR_ID = 'time-bar'
    var A_LOOP_ID = 'a-loop'
    var B_LOOP_ID = 'b-loop'

    var AGENT_VOICE_RECORDIND = 'AGENT_VOICE_RECORDIND'
    var CONTACT_VOICE_RECORDIND = 'CONTACT_VOICE_RECORDIND'
    var SCREEN_RECORDIND = 'SCREEN_RECORDIND'
    var EMOTIONS = 'EMOTIONS'
    var NOTES = 'NOTES'

    var self = this

    this.$panel = $consolePanel

    this.metadata = undefined
    this.startTime = undefined
    this.endTime = undefined

    this.currSpeed = 1
    this.playing = false
    this.enabled = false

    this.aLoopBar = undefined
    this.bLoopBar = undefined
    this.draggingOrZooming = undefined

    this.mediaControl = undefined
    this.transcriptControl = undefined

    this.timeline = new vis.Timeline(this.$panel.find('.vis-timeline-container')[0])
    this.items = new vis.DataSet()
    this.groups = new vis.DataSet([
        {id: 'sentiment-group', content: '', className: 'sentiment-group'},
        {id: 'voice-group', content: '', className: 'voice-group'},
        {id: 'screen-group', content: '', className: 'screen-group'},
        {id: 'notes-group', content: '', className: 'notes-group'},
    ])
    this.voiceErasedContainer = this.$panel.find('.voice-erased-container')

    TimelineControl.prototype.initTimeline = function(data, mediaControl, transcriptControl) {
        this.mediaControl = mediaControl
        this.transcriptControl = transcriptControl

        this.metadata = data
        this.startTime = data.startTime
        this.endTime = data.endTime
        // just for good looking if duration is less than 1 second
        this.endTime = this.endTime - this.startTime > MIN_DURATION ? this.endTime : this.startTime + MIN_DURATION
        this.enabled = data.selectedParty.hasVoiceRecording || data.selectedParty.hasScreenRecording
            || (data.mediaType !== MEDIA_TYPE_EMAIL && data.selectedParty.transcriptsBatch && !data.selectedParty.transcriptsBatch.empty)

        this.timeline.setOptions(this.createOptions(this.startTime, this.endTime))
        this.timeline.setGroups(this.groups)
        this.timeline.setItems(this.generateItems(this.startTime, this.endTime, data.interactionTimeline))

        if (this.enabled) {
            this.initControls()
        } else {
            this.$panel.find('.loading-container').hide()
        }

        if (this.metadata.selectedParty.eraseInfoVoiceRecording) {
            this.voiceErasedContainer.text(getEraseStr(this.metadata.selectedParty.eraseInfoVoiceRecording, 'eraseRecording'))
        }
    }

    // =======================================================
    // External functions. Works with relative time in seconds
    // =======================================================
    TimelineControl.prototype.moveTo = function(time) {
        this.moveToInternal(this.toGlobalTimestamp(time))
    }

    TimelineControl.prototype.getCurrentTime = function() {
        return this.enabled ? this.toRelativeSeconds(this.timeline.getCustomTime(TIME_BAR_ID)) : undefined
    }

    TimelineControl.prototype.addNote = function(time, text, onClickHandler) {
        var wrappedText = '<div class="timeline-note-text">' + text + '</div>'
        this.addNoteInternal(this.toGlobalTimestamp(time), text, wrappedText, onClickHandler)
    }

    TimelineControl.prototype.removeNote = function(time) {
        this.removeNoteInternal(this.toGlobalTimestamp(time))
    }

    TimelineControl.prototype.removeAllNotes = function() {
        var notes = this.items.get(
            {
                fields: ['id'],
                filter: function(item) {
                    return item.group === 'notes-group' && item.id > 10
                },
            })
        notes.forEach(function(id) {
            this.removeNoteInternal(id)
        }.bind(this))
    }
    // =======================================================
    // =======================================================

    TimelineControl.prototype.moveToInternal = function(time) {
        if (this.bLoopBar && this.aLoopBar &&
            (time > this.timeline.getCustomTime(B_LOOP_ID) || time < this.timeline.getCustomTime(A_LOOP_ID))) {
            this.removeALoopBar()
            this.removeBLoopBar()
        }
        this.timeline.setCustomTime(time, TIME_BAR_ID)
        this.setTimeBarTime(time)
        var timeInSec = this.toRelativeSeconds(time)
        this.mediaControl.setTime(timeInSec)
        this.transcriptControl.moveTo(timeInSec)
    }

    TimelineControl.prototype.addNoteInternal = function(time, text, wrappedText, onClickHandler) {
        this.items.update({id: time, group: 'notes-group', content: '<div class="notes-container"><img src="/agent/evaluation-page/img/ico/ico-note.svg" class="notes notes-' + this.getCorrectNoteTime(time) + '"></div>', start: time, className: 'notes', title: wrappedText})
        this.$panel.find('.notes-' + time).off('click').click(function(event) {
            event.stopPropagation()
            onClickHandler()
        })
    }

    TimelineControl.prototype.removeNoteInternal = function(time) {
        this.items.remove(time)
    }

    TimelineControl.prototype.zoomIn = function() {
        this.timeline.zoomIn(ZOOM_FACTOR)
    }

    TimelineControl.prototype.zoomOut = function() {
        this.timeline.zoomOut(ZOOM_FACTOR)
    }

    TimelineControl.prototype.togglePlay = function() {
        this.$panel.find('.play-btn').toggleClass('paused')
        this.playing = !this.playing
        if (this.playing) {
            this.mediaControl.play()
        } else {
            this.mediaControl.pause()
        }
    }

    TimelineControl.prototype.skipSilence = function() {
        var currTime = this.timeline.getCustomTime(TIME_BAR_ID)
        if (!this.isOnSpeechRecord(currTime)) {
            var nextSpeechRecord = this.findNextSpeechRecord(currTime)
            if (nextSpeechRecord) {
                this.moveToInternal(nextSpeechRecord.start)
            } else {
                this.moveToInternal(this.endTime)
            }
        }
    }

    TimelineControl.prototype.createOptions = function(startTime, endTime) {
        return {
            margin: {
                item: 0,
                axis: 0,
            },
            start: startTime,
            end: endTime,
            min: startTime,
            max: endTime,
            zoomMin: ZOOM_IN,
            showCurrentTime: false,
            selectable: false,
            editable: false,
            zoomable: this.enabled,
            stack: false,
            orientation: {axis: 'none'},
        }
    }

    TimelineControl.prototype.generateItems = function(startTime, endTime, interactionTimeline) {
        this.items.add([
            {id: 0, group: 'voice-group', content: '', start: startTime, end: endTime, className: 'height-holder'},
            {id: 1, group: 'voice-group', content: '', start: startTime, end: endTime, className: 'general'},
            {id: 2, group: 'screen-group', content: '', start: startTime, end: endTime, className: 'record screen disabled'},
            {id: 3, group: 'sentiment-group', content: '', start: startTime, end: endTime, className: 'height-holder'},
            {id: 4, group: 'notes-group', content: '', start: startTime, end: endTime, className: 'height-holder'},
        ])

        var ids = 5
        var interactions = interactionTimeline || []
        var erasedVoice = this.metadata.selectedParty.eraseInfoVoiceRecording ? ' erased-voice' : ''
        $.each(interactions, function(i, item) {
            switch (item.action) {
                case AGENT_VOICE_RECORDIND:
                    this.items.add({id: ids++, group: 'voice-group', content: '', start: item.startTime, end: item.endTime, className: 'record speech agent' + erasedVoice})
                    break
                case CONTACT_VOICE_RECORDIND:
                    this.items.add({id: ids++, group: 'voice-group', content: '', start: item.startTime, end: item.endTime, className: 'record speech' + erasedVoice})
                    break
                case SCREEN_RECORDIND:
                    this.items.add({id: ids++, group: 'screen-group', content: '', start: item.startTime, end: item.endTime, className: 'record screen'})
                    break
                case EMOTIONS:
                    if (item.sentiment != 'null')
                        this.items.add({id: ids++, group: 'sentiment-group', content: '<img src="' + this.getSentimentIcon(item.sentiment) + '" class="sentiment">', start: item.startTime, className: 'sentiment'})
                    break
                case NOTES:
                    this.items.add({id: ids++, group: 'notes-group', content: '<div class="notes-container"><img src="/agent/evaluation-page/img/ico/ico-note.svg" class="notes"></div>', start: this.getCorrectNoteTime(item.startTime), className: 'notes'})
                    break
            }
        }.bind(this))
        return this.items
    }

    TimelineControl.prototype.getSentimentIcon = function(sentiment) {
        switch (sentiment) {
            case 'negative':
                return '/agent/evaluation-page/img/ico/ico-unhappy.svg'
            case 'neutral':
                return '/agent/evaluation-page/img/ico/ico-neutral.svg'
            case 'positive':
                return '/agent/evaluation-page/img/ico/ico-happy.svg'
            default: return ''
        }
    }

    TimelineControl.prototype.getCorrectNoteTime = function(noteTime) {
        if (noteTime >= this.startTime && noteTime <= this.endTime) {
            return noteTime
        } else {
            if (noteTime < this.startTime) {
                return this.startTime
            } else {
                return this.endTime
            }
        }
    }

    TimelineControl.prototype.initControls = function() {
        var onTimeUpdate = function(timeInSec) {
            var checkLoop = function(time) {
                return this.aLoopBar && this.bLoopBar && time > this.timeline.getCustomTime(B_LOOP_ID)
            }.bind(this)

            var time = this.toGlobalTimestamp(timeInSec)
            if (checkLoop(time)) {
                var aLoopTime = this.timeline.getCustomTime(A_LOOP_ID)
                this.moveToInternal(aLoopTime)
            } else {
                this.timeline.setCustomTime(time, TIME_BAR_ID)
                this.setTimeBarTime(time)
            }
            this.transcriptControl.moveTo(timeInSec)
        }.bind(this)

        var onEnded = function() {
            if (this.playing) {
                this.togglePlay()
            }
        }.bind(this)

        var onSynced = function() {
            this.timeline.addCustomTime(this.startTime, TIME_BAR_ID, {editable: false})
            this.timeline.setCustomTimeTitle('', TIME_BAR_ID)
            // add time bar time after actual appearing
            setTimeout(function() {
                this.$panel.find('.vis-custom-time.time-bar div').append('<span class="time-bar-time" style="position:relative;top:80%;left:15px;">0:00</span>')
            }.bind(this), 10)

            this.$panel.find('.all-time').text(this.prettyTime(this.endTime))

            this.$panel.find('.speed-btn').click(function() {
                self.handleSpeedClick($(this))
                return false
            })

            this.$panel.find('.play-btn').click(self.togglePlay.bind(self))

            this.$panel.find('.ff-btn').click(self.skipSilence.bind(self))

            var addZoomListeners = function($zoomBtn, zoom) {
                var intervalId

                $zoomBtn
                    .on('mousedown', function() {
                        zoom()
                        intervalId = setInterval(zoom, 300)
                    })
                    .bind('mouseup mouseleave', function() {
                        clearInterval(intervalId)
                    })
            }

            addZoomListeners(this.$panel.find('.zoom-btn.zoom-in'), self.zoomIn.bind(self))
            addZoomListeners(this.$panel.find('.zoom-btn.zoom-out'), self.zoomOut.bind(self))

            this.timeline.on('click', function(props) {
                if (props.event.shiftKey || props.event.ctrlKey) {
                    if (this.bLoopBar && props.time > this.timeline.getCustomTime(B_LOOP_ID)) {
                        this.removeBLoopBar()
                    }
                    if (!this.aLoopBar) {
                        this.addALoopBar(props.time)
                    } else {
                        this.timeline.setCustomTime(props.time, A_LOOP_ID)
                    }
                } else {
                    if (!this.draggingOrZooming) {
                        this.moveToInternal(props.time)
                    }
                }
            }.bind(this))

            this.timeline.on('contextmenu', function(props) {
                props.event.preventDefault()
                if (props.event.shiftKey || props.event.ctrlKey) {
                    if (this.aLoopBar && props.time < this.timeline.getCustomTime(A_LOOP_ID)) {
                        this.removeALoopBar()
                    }
                    if (!this.bLoopBar) {
                        this.addBLoopBar(props.time)
                    } else {
                        this.timeline.setCustomTime(props.time, B_LOOP_ID)
                    }
                }
            }.bind(this))

            this.timeline.on('rangechange', this.toggleNotesOnDragOrZoom.bind(this))
            this.timeline.on('rangechanged', function(props) {
                if (props.byUser) {
                    this.toggleNotesOnDragOrZoom()
                    this.draggingOrZooming = true
                    setTimeout(function() { this.draggingOrZooming = false }.bind(this), 10) // hack for handling false positive clicks
                }
            }.bind(this))

            this.$panel.find('.timeline').removeClass('disabled')
            this.$panel.find('.loading-container').hide()
        }.bind(this)

        this.mediaControl.sync(onTimeUpdate, onEnded, onSynced)
    }

    TimelineControl.prototype.isOnSpeechRecord = function(time) {
        var onRecord = false
        this.items.forEach(function() {
            onRecord = true
        }, {
            filter: function(item) {
                return item.group === 'voice-group' && item.className.indexOf('record') >= 0
                    && time >= item.start && time <= item.end
            },
        })
        return onRecord
    }

    TimelineControl.prototype.findNextSpeechRecord = function(time) {
        var recordItem = null
        this.items.forEach(function(item) {
            if (!recordItem) {
                recordItem = item
            }
        }, {
            filter: function(item) {
                return item.group === 'voice-group' && item.className.indexOf('record') >= 0 && time < item.start
            },
        })
        return recordItem
    }

    TimelineControl.prototype.toRelativeSeconds = function(time) {
        return (time - this.startTime) / 1000
    }

    TimelineControl.prototype.toGlobalTimestamp = function(time) {
        return this.startTime + Math.floor(time * 1000)
    }

    TimelineControl.prototype.handleSpeedClick = function($el) {
        var speed = parseFloat($el.data('speed'))
        if (this.currSpeed !== speed) {
            $el.toggleClass('active')
            this.$panel.find('.speed-btn[data-speed=\'' + this.currSpeed + '\']').toggleClass('active')
            this.currSpeed = speed
            this.mediaControl.setSpeed(this.currSpeed)
        }
    }

    TimelineControl.prototype.toggleNotesOnDragOrZoom = function() {
        var noteSelectorIds = this.items.get(
            {
                fields: ['id'],
                filter: function(item) {
                    return item.group === 'notes-group' && item.id > 10
                },
            })
            .map(function(fields) {
                return '.notes-' + fields.id
            })
            .join(', ')
        var $notes = this.$panel.find(noteSelectorIds)
        var $visTimeline = this.$panel.find('.vis-timeline-container')

        $notes.each(function(i, note) {
            var $note = $(note)
            var leftOverflow = $visTimeline.offset().left - $note.offset().left
            // innerWidth for the note is divided by 2 because the note is centered horizontally
            var rightOverflow = ($visTimeline.offset().left + $visTimeline.innerWidth()) - ($note.offset().left + $note.innerWidth() / 2)

            if (leftOverflow > 1 || rightOverflow < -1) {
                $note.css('visibility', 'hidden')
            } else {
                $note.css('visibility', 'visible')
            }
        }.bind(this))
    }

    TimelineControl.prototype.setTimeBarTime = function(time) {
        var $timeBarTime = this.$panel.find('.time-bar-time')
        if ($timeBarTime[0]) {
            var $visTimeline = this.$panel.find('.vis-timeline-container')
            $timeBarTime.text(this.prettyTime(time))
            if (this.isOverlapRightEdge($timeBarTime, $visTimeline)) {
                $timeBarTime.css('left', '-35px') // set to the LEFT of the time bar
            } else {
                $timeBarTime.css('left', '15px') // set to the RIGHT of the time bar
                // check if right position has enough space
                if (this.isOverlapRightEdge($timeBarTime, $visTimeline)) {
                    $timeBarTime.css('left', '-35px') // set to the LEFT of the time bar
                }
            }
        } else {
            setTimeout(this.setTimeBarTime.bind(this, time), 10)
        }
    }

    TimelineControl.prototype.prettyTime = function(time) {
        return formatSeconds(this.toRelativeSeconds(time))
    }

    TimelineControl.prototype.isOverlapRightEdge = function($inner, $outer) {
        var innerRightEdge = $inner.offset().left + $inner.outerWidth(true)
        var outerLeftEdge = $outer.offset().left + $outer.innerWidth()
        return innerRightEdge > outerLeftEdge
    }

    TimelineControl.prototype.addALoopBar = function(time) {
        this.aLoopBar = this.timeline.addCustomTime(time, A_LOOP_ID, {editable: false})
        this.timeline.setCustomTimeTitle('', A_LOOP_ID)
    }

    TimelineControl.prototype.removeALoopBar = function() {
        this.timeline.removeCustomTime(A_LOOP_ID)
        this.aLoopBar = null
    }

    TimelineControl.prototype.addBLoopBar = function(time) {
        this.bLoopBar = this.timeline.addCustomTime(time, B_LOOP_ID, {editable: false})
        this.timeline.setCustomTimeTitle('', B_LOOP_ID)
    }

    TimelineControl.prototype.removeBLoopBar = function() {
        this.timeline.removeCustomTime(B_LOOP_ID)
        this.bLoopBar = null
    }
}
