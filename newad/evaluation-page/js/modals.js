var modals = new function () {
    this.showAssignModal = function(onAccept, agentLogins, agentTeams, isCalibration) {
        var $modal = $('#assign-calibrate-modal-template').clone().removeAttr('id');
        $('.app-body').append($modal);

        $modal.on('show.bs.modal', function () {
            var modalTitleKey = isCalibration ? 'assignCalibration' : 'assignEvaluation';
            $modal.find('.modal-title').text(translator.get(modalTitleKey));
            $modal.find('.combobox-action').text(translator.get('assignTo'));
            var $acceptBtn = $modal.find('.assign-calibrate-modal-accept');
            $acceptBtn.prop('disabled', true);
            $acceptBtn.on('click', function () {
                $acceptBtn.prop('disabled', true);
                var val = $modal.find('.value-input').val();
                if (val) {
                    val = isCalibration ? val.split(SPECIAL_STRING_SEPARATOR) : val;
                    showBtnLoad($acceptBtn);
                    onAccept(val, function () {hideBtnLoad($acceptBtn);$modal.modal('hide');});
                }
            });
            if (Array.isArray(agentLogins)) {
                agentLogins = agentLogins.join();
            }
            if (Array.isArray(agentTeams)) {
                agentTeams = agentTeams.join(SPECIAL_STRING_SEPARATOR);
            }
            var additionalData = {agentLogins: agentLogins, teams: agentTeams};
            var usersSource = comboboxSearch(initializer.getToken(), additionalData)
                .bind({url: 'rest/evaluation/get-evaluators', mapper: mapNameAndId});

            var comboboxMode = isCalibration ? CB_MODE_MULTI : null;
            initModalSearchableCombobox($modal, $modal.find('.combobox'), usersSource, function (value) {
                if (value) {
                    $acceptBtn.prop('disabled', false);
                } else {
                    $acceptBtn.prop('disabled', true);
                }
            }, comboboxMode);
        });

        $modal.on('hidden.bs.modal', function () {
            $modal.remove();
        });

        $modal.modal('show');
    };

    this.showError = function (msgTextOrKey) {
        var $modal = $('#error-modal');

        $modal.on('show.bs.modal', function () {
            var msgText = translator.get(msgTextOrKey);
            msgText = msgText ? msgText : msgTextOrKey;
            $modal.find('.modal-body > div').text(msgText);
        });

        $modal.modal('show');
    };

    this.showInfo = function (msgKey) {
        var $modal = $('#info-modal');

        $modal.on('show.bs.modal', function () {
            $modal.find('.modal-body > div').text(translator.get(msgKey));
        });

        $modal.modal('show');
    };
    
    this.showYesNo = function (message, onAccept, onDecline, onHide) {
        var $modal = $('#yes-no-modal');

        $modal.off('show.bs.modal');
        $modal.on('show.bs.modal', function () {
            $modal.find('.modal-body > div').text(message);

            var $yesBtn = $modal.find('.yes-no-modal-yes');
            var $noBtn = $modal.find('.yes-no-modal-no');

            $yesBtn.off('click');
            $noBtn.off('click');

            !!onAccept && $yesBtn.on('click', onAccept);
            !!onDecline && $noBtn.on('click', onDecline);
        });

        $modal.off('hide.bs.modal');
        !!onHide && $modal.on('hide.bs.modal', onHide);

        $modal.modal('show');
    };

    this.showEraseInteractionModal = function (metadata, cb) {
        var selectedParty = metadata.selectedParty;
        var $modal = $('#erase-interaction-modal').clone().removeAttr('id');
        $('.app-body').append($modal);

        var eraseData = {
            eraseRecording: false,
            eraseTranscriptOfVoiceRecording: false,
            eraseChatTranscript: false,
            eraseEmailMessage: false,
            eraseScreenRecording: false,
            reason: null
        };

        var $itemsToErase = $modal.find('.items-to-erase');

        function appendItemToErase(name) {
            var $div = $('<div class="checkbox"></div>');
            var $label = $('<label>' + translator.get(name) + '</label>');
            var $checkbox = $('<input type="checkbox"/>');

            $checkbox.change(function () {
                eraseData[name] = this.checked;
            });

            $label.prepend($checkbox);
            $div.append($label);
            $itemsToErase.append($div);
        }

        function validateEraseItems() {
            if (eraseData.eraseRecording || eraseData.eraseTranscriptOfVoiceRecording
                || eraseData.eraseChatTranscript || eraseData.eraseEmailMessage || eraseData.eraseScreenRecording) {
                $modal.find('.erase-item-not-selected').hide();
                return true;
            } else {
                $modal.find('.erase-item-not-selected').show();
                return false;
            }
        }

        function validateReason() {
            if (!!eraseData.reason) {
                $modal.find('.reason').removeClass('has-error');
                return true;
            } else {
                $modal.find('.reason').addClass('has-error');
                return false;
            }
        }

        function validate() {
            return validateEraseItems() && validateReason();
        }

        if (selectedParty.hasVoiceRecording) {
            appendItemToErase('eraseRecording');
        }

        if (selectedParty.hasVoiceTranscripts) {
            appendItemToErase('eraseTranscriptOfVoiceRecording');
        }

        if (selectedParty.hasChatTranscripts) {
            appendItemToErase('eraseChatTranscript');
        }

        if (selectedParty.hasEmailBody) {
            appendItemToErase('eraseEmailMessage');
        }

        if (selectedParty.hasScreenRecording) {
            appendItemToErase('eraseScreenRecording');
        }

        $modal.find('.reason').on('change keyup paste', function() {
            eraseData.reason = this.value;
            validateReason();
        });

        var $acceptBtn = $modal.find('.erase-interaction-modal-accept');
        $acceptBtn.on('click', function () {
            if (validate()) {
                $modal.modal('hide');
                modals.showEraseInteractionConfirmationModal(metadata.globalInteractionId, metadata.mediaType, eraseData, cb);
            }
        });

        $modal.modal('show');
    };
    
    this.showEraseInteractionConfirmationModal = function (giid, mediaType, eraseData, cb) {
        var $modal = $('#erase-interaction-confirmation-modal').clone().removeAttr('id');
        $('.app-body').append($modal);

        var itemsToErase = [];

        if (eraseData.eraseRecording) {
            itemsToErase.push(translator.get('voiceRecording'));
        }

        if (eraseData.eraseTranscriptOfVoiceRecording) {
            itemsToErase.push(translator.get('voiceTranscript'));
        }

        if (eraseData.eraseChatTranscript) {
            itemsToErase.push(translator.get('chatTranscript'));
        }

        if (eraseData.eraseEmailMessage) {
            itemsToErase.push(translator.get('messageBody'));
        }

        if (eraseData.eraseScreenRecording) {
            itemsToErase.push(translator.get('screenRecording'));
        }

        var message = translator.get('eraseInteractionConfirmation', itemsToErase.join('/'));
        $modal.find('.modal-body div').text(message);

        var $acceptBtn = $modal.find('.erase-interaction-confirmation-modal-accept');
        $acceptBtn.on('click', function () {
            api.eraseInteraction(giid, mediaType, eraseData, cb);
        });

        $modal.modal('show');
    };
};