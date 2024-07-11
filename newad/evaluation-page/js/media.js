function MediaControl(userToken, $consolePanel) {

    var LOAD_READY = 'READY';
    var LOAD_IN_PROGRESS = 'IN_PROGRESS';
    var LOAD_ERROR = 'ERROR';
    var LOAD_CANCELED = 'CANCELED';

    var STATE_PREVIEW = 0;
    var STATE_LOAD = 1;
    var STATE_VIDEO = 2;

    var self = this;

    this.$panel = $consolePanel;
    this.$videoContainer = this.$panel;
    this.token = userToken;

    this.giid = undefined;
    this.mediaType = undefined;
    this.agentLoginId = undefined;

    this.silentTimer = undefined; // Used when no audio
    this.video = this.$videoContainer.find("video")[0];
    this.audio = undefined;

    this.played = false;
    this.videoExpanded = false;
    this.playVideo = false;
    this.playAudio = false;
    this.videoState = undefined;
    this.ieAudioRate = 1;

    // ===== Public methods =====
    MediaControl.prototype.initMedia = function (metadata) {
        this.giid = metadata.globalInteractionId;
        this.mediaType = metadata.mediaType;
        this.agentLoginId = metadata.selectedParty.loginId;
        this.cdrId = metadata.cdrId;

        if (metadata.selectedParty.hasVoiceRecording) {
            this.playAudio = true;
            this.loadAudio(function (url) {
                this.initAudioTag(url);
            }.bind(this), false, false);
        } else {
            this.silentTimer = new Timer(metadata.endTime - metadata.startTime);
        }

        if (metadata.selectedParty.hasScreenRecording) {
            this.$videoContainer.find('.player-box').show();
            this.showVideoPreview();
            this.initVideoControls();
        } else if (!!metadata.selectedParty.eraseInfoScreenRecording) {
            this.$videoContainer.find('.screen-erased-container').text(getEraseStr(metadata.selectedParty.eraseInfoScreenRecording, 'eraseScreenRecording'));
            this.$videoContainer.find('.screen-erased-container').show();
        }
    };

    MediaControl.prototype.sync = function (onTimeUpdate, onEnded, onSynced) {
        if (this.playAudio) {
            // wait for initMedia
            if (!this.audio) {
                setTimeout(function () {this.sync(onTimeUpdate, onEnded, onSynced)}.bind(this), 1000);
                return;
            }

            this.audio.addEventListener("timeupdate", function () {
                if (!$.contains(document, this.audio)) {
                    this.pause();
                    return;
                }

                onTimeUpdate(this.audio.getTime());
            }.bind(this), true);
            this.audio.addEventListener("ended", onEnded);
            console.log('audio event listeners added');
        } else {
            this.silentTimer.ontimeupdate = onTimeUpdate;
            this.silentTimer.onended = onEnded;
        }

        if (!!onSynced) {
            onSynced();
        }
    };

    MediaControl.prototype.setTime = function (time) {
        if (this.playAudio) {
            this.audio.setTime(time);
        } else {
            this.silentTimer.setTime(time);
        }
        if (this.playVideo) {
            this.video.currentTime = time;
        }
    };

    MediaControl.prototype.setSpeed = function (speed) {
        if (this.playAudio) {
            this.audio.setSpeed(speed);
        } else {
            this.silentTimer.setSpeed(speed);
        }
        if (this.playVideo) {
            this.video.playbackRate = speed;
        }
    };

    MediaControl.prototype.play = function () {
        if (this.playAudio) {
            if (!this.played) {
                this.played = true;
            }
            this.audio.play();
            this.attachIEAudioEventsEmulator();
        } else {
            this.silentTimer.play();
        }
        if (this.playVideo && this.videoState === STATE_VIDEO) {
            this.video.play();
        }
    };

    MediaControl.prototype.pause = function () {
        if (this.playAudio) {
            this.audio.pause();
            this.detachIEAudioEventsEmulator();
        } else {
            this.silentTimer.pause();
        }
        if (this.playVideo) {
            this.video.pause();
        }
    };

    MediaControl.prototype.release = function () {
        if (this.videoExpanded) {
            var doc = this.$videoContainer[0].ownerDocument;
            (doc.defaultView || doc.parentWindow).close();
        }
    };

    MediaControl.prototype.downloadVideo = function () {
        this.loadVideo(function (url) {
            this.hideVideoConvertingProgress();
            downloadURI(url);
        }.bind(this), this.showVideoConvertingProgress);
    };

    MediaControl.prototype.downloadAudio = function (cpa) {
        this.loadAudio(downloadURI, cpa, true);
    };
    // ===== Public methods =====

    MediaControl.prototype.openVideoInWindow = function () {
        var separateVideoWindow = window.open("screen_recording.html", "", "location=no,menubar=no,resizable=yes,scrollbars=yes,status=yes,width=730,height=450");
        if (separateVideoWindow) {
            separateVideoWindow.onload = function () {
                addOnBeforeUnloadEventListener();
                separateVideoWindow.document.body.innerHTML = window.document.getElementById('player-box').innerHTML;
                this.$videoContainer.find('.player-box').hide();
                this.triggerResize();
                if (this.playVideo) {
                    this.video.pause();
                }
                this.$videoContainer = separateVideoWindow.$('body');
                this.videoExpanded = true;
                this.video = this.$videoContainer.find("video")[0];
                this.restoreVideoState(this.$panel.find("video")[0]);
                this.initVideoControls();
            }.bind(this);

            var addOnBeforeUnloadEventListener = function() {
                separateVideoWindow.onbeforeunload = function () {
                    this.$videoContainer = this.$panel;
                    this.videoExpanded = false;
                    this.video = this.$videoContainer.find("video")[0];
                    this.$panel.find('.player-box').show();
                    this.triggerResize();
                    this.restoreVideoState(separateVideoWindow.$("video")[0]);
                }.bind(this);
            }.bind(this);

            return true;
        } else {
            return false;
        }
    };

    MediaControl.prototype.initVideoControls = function () {
        this.video.addEventListener("loadeddata", function () {
            this.showVideo();
            if (this.playVideo) {
                this.startVideo();
            }
        }.bind(this));
        this.$videoContainer.find('.video-play-btn').on('click', function () {
            this.playVideo = true;
            this.showLoadingProgress();
            this.loadVideo(this.attachVideoSource.bind(this), this.showVideoLoadProgress.bind(this))
        }.bind(this));
        this.$videoContainer.find('.expand-btn').on('click', self.openVideoInWindow.bind(self));
        if (this.videoExpanded) {
            this.$videoContainer.find('.expand-btn').hide();
        }
    };

    MediaControl.prototype.attachVideoSource = function (source) {
        var tryAttach = function (data) {
            var hasError = false;

            try {
                var error = JSON.parse(data);

                if (!!error.code) {
                    hasError = true;
                    this.loadVideo(this.attachVideoSource.bind(this), this.showVideoLoadProgress.bind(this));
                }
            } catch (e) {
                // source has no error
            }

            if (!hasError) {
                attach();
            }
        }.bind(this);

        var attach = function () {
            this.$videoContainer.find("video source").attr("src", source);
            this.video.load();
        }.bind(this);

        var url = api.tsUrl(source);

        $.ajax({
            url: url,
            type: "HEAD"
        }).done(function (message, text, jqXHR) {
            var contentLength = Number(jqXHR.getResponseHeader('Content-Length'));
            var contentLengthLimit = 2097152; // 2mb

            if (contentLength <= contentLengthLimit) {
                $.get({
                    url: url,
                    headers: {'Range': 'bytes=0-' + (contentLength - 1)}
                })
                    .done(tryAttach);
            } else {
                attach();
            }
        });
    };

    MediaControl.prototype.restoreVideoState = function (prevVideo) {
        this.video.currentTime = prevVideo.currentTime;
        this.video.playbackRate = prevVideo.playbackRate;
        var currVideoSource = $(this.video).find('source').attr('src');
        var prevVideoSource = $(prevVideo).find('source').attr('src');
        if (!currVideoSource && prevVideoSource) {
            this.attachVideoSource(prevVideoSource);
        }
        switch (this.videoState) {
            case STATE_PREVIEW:
                this.showVideoPreview();
                break;
            case STATE_LOAD:
                this.showLoadingProgress();
                break;
            case STATE_VIDEO:
                this.showVideo();
                if (currVideoSource) {
                    if (this.playVideo) {
                        this.startVideo();
                    } else {
                        this.stopVideo();
                    }
                }
                break;
        }
    };

    MediaControl.prototype.showVideoPreview = function () {
        this.videoState = STATE_PREVIEW;
        this.$videoContainer.find('.video-preview').show();
        this.$videoContainer.find('video').hide();
        this.$videoContainer.find('.video-play-btn').show();
        this.$videoContainer.find('.loader').hide();
    };

    MediaControl.prototype.showLoadingProgress = function () {
        this.videoState = STATE_LOAD;
        this.$videoContainer.find('video').show();
        this.$videoContainer.find('.video-preview').hide();
        this.$videoContainer.find('.loader').show();
        this.$videoContainer.find('.video-play-btn').hide();
    };

    MediaControl.prototype.showVideo = function () {
        this.videoState = STATE_VIDEO;
        this.$videoContainer.find('video').show();
        this.$videoContainer.find('.video-preview').hide();
        this.$videoContainer.find('.video-play-btn').show();
        this.$videoContainer.find('.loader').hide();
        this.$videoContainer.find('#video-controls').hide();
        var $videoWrapper = this.$videoContainer.find('.video-wrapper');
        $videoWrapper.on('mouseover', function () {
            this.$videoContainer.find('#video-controls').show();
        }.bind(this));
        $videoWrapper.on('mouseout', function () {
            this.$videoContainer.find('#video-controls').hide();
        }.bind(this));
    };

    MediaControl.prototype.startVideo = function () {
        this.playVideo = true;
        this.video.currentTime = this.playAudio ? this.audio.getTime() : this.silentTimer.getTime();
        this.video.playbackRate = this.playAudio ? this.audio.getSpeed() : this.silentTimer.getSpeed();
        var $playBtn = this.$videoContainer.find('.video-play-btn');
        $playBtn.addClass('stopped');
        $playBtn.off().on('click', self.stopVideo.bind(self));
        if ((this.playAudio && !this.audio.getPaused()) || (this.silentTimer && !this.silentTimer.paused)) {
            this.video.play();
        }
    };

    MediaControl.prototype.stopVideo = function () {
        this.playVideo = false;
        var $playBtn = this.$videoContainer.find('.video-play-btn');
        $playBtn.removeClass('stopped');
        $playBtn.off().on('click', self.startVideo.bind(self));
        this.video.pause();
    };

    MediaControl.prototype.showVideoLoadProgress = function (progress) {
        var $loaderProgress = this.$videoContainer.find('.loader-progress');
        $loaderProgress.show();
        $loaderProgress.find('span').text(progress);
    };

    MediaControl.prototype.showVideoConvertingProgress = function (progress) {
        var $videoConvertingModal = $('#converting-video-modal');
        if (!$videoConvertingModal.hasClass('show')) {
            $videoConvertingModal.modal('show');
        }
        $videoConvertingModal.find('.progress-bar')
            .css("width", progress + '%')
            .attr("aria-valuenow", progress + '%')
            .text(progress + '%');
    };

    MediaControl.prototype.hideVideoConvertingProgress = function () {
        $('#converting-video-modal').modal('hide');
    };

    MediaControl.prototype.triggerResize = function () {
        if (Event.prototype.initEvent) {
            var evt = window.document.createEvent('UIEvents');
            evt.initUIEvent('resize', true, false, window, 0);
            window.dispatchEvent(evt);
        } else {
            window.dispatchEvent(new Event('resize'));
        }
    };

    MediaControl.prototype.loadAudio = function (onLoad, cpa, download) {
        var url = api.tsUrl("rest/evaluation/get-voice-recording-path?token=" + this.token + "&giid=" + this.giid + "&cpa=" + cpa + "&mediaType=" + this.mediaType + "&download=" + download);

        if (!!this.cdrId) {
            url = url + "&cdrId=" + this.cdrId;
        }

        $.get(url)
            .done(function (data) {
                onLoad(data);
            })
            .error(function (e) {
                console.log(e);
                alert("Server error");
            });
    };

    MediaControl.prototype.loadVideo = function (onLoad, onProgress) {
        var url = api.tsUrl("rest/evaluation/get-screen-recording-path?token=" + this.token + "&giid=" + this.giid + "&mediaType=" + this.mediaType + "&cdrId=" + this.cdrId);
        $.get(url)
            .done(function (data) {
                console.log(data);
                if (data) {
                    onLoad(data);
                } else {
                    this.checkVideoLoading(function () {
                        this.loadVideo(onLoad)
                    }.bind(this), onProgress);
                }
            }.bind(this))
            .error(function (e) {
                console.log(e);
                alert("Server error");
            });
    };

    MediaControl.prototype.checkVideoLoading = function (onReady, onProgress) {
        var url = api.tsUrl("rest/evaluation/get-screen-recording-status?token=" + this.token + "&giid=" + this.giid + "&mediaType=" + this.mediaType + "&cdrId=" + this.cdrId);
        $.getJSON(url)
            .done(function (data) {
                console.log(data);
                switch (data.status) {
                    case LOAD_READY:
                        onReady();
                        break;
                    case LOAD_IN_PROGRESS:
                        onProgress(Math.floor(data.progress * 100));
                        setTimeout(function () {
                            this.checkVideoLoading(onReady, onProgress);
                        }.bind(this), 1000);
                        break;
                    case LOAD_CANCELED:
                        console.log('CANCELED');
                        break;
                    case LOAD_ERROR:
                        console.log('ERROR', data.errorMessage);
                        var errKeyOrMsg;

                        switch (data.errorCode) {
                            case 'ERR_MERGE_INTERRUPTED':
                                errKeyOrMsg = 'videoCancelledErrorMsg';
                                break;
                            case 'ERR_FILE_NOT_FOUND':
                                errKeyOrMsg = translator.get('fileNotFound', data.errorMessage);
                                break;
                            default:
                                errKeyOrMsg = 'videoNotAvailableErrorMsg';
                        }

                        modals.showError(errKeyOrMsg);
                        break;
                }
            }.bind(this))
            .error(function (e) {
                console.log(e);
                alert("Server error");
            });
    };

    MediaControl.prototype.initAudioTag = function(url) {
        if (isIE) {
            var encodedUrl = encodeURI(url);
            $('<object></object>', {id: "ie-audio", data: encodedUrl, type: "application/x-mplayer2", hidden: 1})
                .append($('<param />', {name: "src", value: encodedUrl}))
                .append($('<param />', {name: "autoStart", value: 0}))
                .append($('<embed>', {
                    id: "embed-ie-audio",
                    src: encodedUrl,
                    type: "application/x-mplayer2",
                    pluginspage: "https://www.microsoft.com/en-us/download/windows-media-player-details.aspx",
                    autoStart: 0
                }))
                .appendTo(this.$videoContainer.find("#player-box"));

            this.audio = this.$videoContainer.find("#ie-audio")[0];
        } else {
            $('<audio></audio>', {id: "common-audio"})
                .append($("<source>", {src: url, type: "audio/wav"}))
                .appendTo(this.$videoContainer.find("#player-box"));

            this.audio = this.$videoContainer.find("#common-audio")[0];
            this.audio.load();
        }

        this.setupAudioMethods();
    };

    MediaControl.prototype.setupAudioMethods = function() {
        var that = this;
        this.audio.getTime = function () {
            return isIE ? this.currentPosition : this.currentTime;
        };
        this.audio.setTime = function (time) {
            if (isIE) {
                this.currentPosition = time;
            } else {
                this.currentTime = time;
            }
        };
        this.audio.setSpeed = function (speed) {
            if (isIE) {
                that.ieAudioRate = speed;
                this.rate = speed;
            } else {
                this.playbackRate = speed;
            }
        };
        this.audio.getSpeed = function () {
            return isIE ? this.rate : this.playbackRate;
        };
        this.audio.getPaused = function () {
            return isIE ? this.playState === 1 : this.paused;
        };
    };

    MediaControl.prototype.attachIEAudioEventsEmulator = function() {
        if (!isIE) {
            return;
        }

        if (!!this.audio.eventsEmulator) {
            clearInterval(this.audio.eventsEmulator);
        }

        var that = this;
        var timeUpdateEvent = document.createEvent("Event");
        var endedEvent = document.createEvent("Event");
        var oldPlayState;
        timeUpdateEvent.initEvent("timeupdate", true, true);
        endedEvent.initEvent("ended", true, true);
        this.audio.eventsEmulator = setInterval(function() {
            if (this.playState === 2 || this.playState === 4) {
                this.dispatchEvent(timeUpdateEvent);
            } else if (oldPlayState !== 0 && this.playState === 0) {
                this.dispatchEvent(endedEvent);
                that.detachIEAudioEventsEmulator();
            }

            if (this.rate !== that.ieAudioRate) {
                this.rate = that.ieAudioRate;
            }

            oldPlayState = this.playState;
        }.bind(this.audio), 200);
    };

    MediaControl.prototype.detachIEAudioEventsEmulator = function () {
        if (isIE && !!this.audio.eventsEmulator) {
            clearInterval(this.audio.eventsEmulator);
        }
    };

    function Timer(duration) {
        this.duration = duration;
        this.currentTime = 0;
        this.paused = true;

        this.ontimeupdate = function (time) {
        };
        this.onended = function () {
        };

        this.playbackRate = 1;
        this.tick = 250;

        this.timer = undefined;

        Timer.prototype.play = function () {
            if (!this.paused) {
                return;
            }
            if (this.currentTime >= duration) {
                this.currentTime = 0;
            }
            this.paused = false;

            var that = this;
            (function timerTick() {
                that.currentTime = Math.min(that.currentTime + that.tick, that.duration);
                that.ontimeupdate(toSeconds(that.currentTime));
                if (that.currentTime === that.duration) {
                    that.pause();
                    that.onended();
                } else {
                    that.timer = setTimeout(timerTick, that.tick / that.playbackRate);
                }
            })();
        };

        Timer.prototype.pause = function () {
            if (this.paused) {
                return;
            }
            this.paused = true;
            clearTimeout(this.timer);
        };

        Timer.prototype.setTime = function (time) {
            this.currentTime = toMillis(time);
        };

        Timer.prototype.getTime = function () {
            return toSeconds(this.currentTime);
        };

        Timer.prototype.setSpeed = function (speed) {
            this.playbackRate = speed;
            this.pause();
            this.play();
        };

        Timer.prototype.getSpeed = function () {
            return this.playbackRate;
        };

        function toSeconds(millis) {
            return millis / 1000;
        }

        function toMillis(seconds) {
            return seconds * 1000;
        }
    }
}
