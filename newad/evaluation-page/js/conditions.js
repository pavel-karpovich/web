var conditionsControlFactory = new function () {

    var OBJECT_TYPE_CONDITION = 'ITEM';
    var OBJECT_TYPE_OPERAND = 'OPERAND';
    var OBJECT_TYPE_BLOCK = 'BLOCK';

    var TYPE_FIELD = 'field';
    var TYPE_QUOTA = 'quota';
    var TYPE_DATE = 'date';
    var TYPE_COMBOBOX_ENUM = 'combobox_enum';
    var TYPE_COMBOBOX_SERVER = 'combobox_server';
    var TYPE_COMBOBOX_SERVER_WITH_FIELD = 'combobox_server_with_field';
    var TYPE_GT_LT = 'gt_lt';
    var TYPE_GT_LT_SLIDER = 'gt_lt_slider';
    var TYPE_GT_LT_BETWEEN = 'gt_lt_btw';
    var TYPE_DURATION_GT_LT = 'duration_gt_lt';
    var TYPE_FLAG = 'flag';
    var TYPE_Y_N = 'y_n';
    
    var GROUP_IDENTIFIERS = {name: 'identifiers'};
    var GROUP_AGENT_OR_TEAM = {name: 'agentOrTeam'};
    var GROUP_QUALITY_METRICS = {name: 'qualityMetrics'};
    var GROUP_INTERACTION_ATTRIBUTES = {name: 'interactionAttributes'};
    var GROUP_PROCESSING = {name: 'processing'};
    var GROUP_SPECIAL_ATTRIBUTES = {name: 'specialAttributes'};
    var GROUP_CONTENT = {name: 'content'};
    var GROUP_QM = {name: 'qm'};
    var GROUP_TIME_RANGE = {name: 'timeRange'};

    var GROUPS = [GROUP_IDENTIFIERS, GROUP_AGENT_OR_TEAM, GROUP_QUALITY_METRICS,
        GROUP_INTERACTION_ATTRIBUTES, GROUP_PROCESSING, GROUP_SPECIAL_ATTRIBUTES,
        GROUP_CONTENT, GROUP_QM, GROUP_TIME_RANGE];

    var CONDITION_ACCOUNT_NUM = 'ACCOUNT_NUM';
    var CONDITION_AGENT = 'AGENT';
    var CONDITION_AGENTS_RANK = 'AGENTS_RANK';
    var CONDITION_AGENTS_SUPERVISOR = 'AGENTS_SUPERVISOR';
    var CONDITION_AGENTS_TRAINING_CLASS = 'AGENTS_TRAINING_CLASS';
    var CONDITION_AGENT_TEAM = 'AGENT_TEAM';
    var CONDITION_AGENT_NOTES = 'AGENT_NOTES';
    var CONDITION_ANY_TEAM_I_EVALUATE = 'ANY_TEAM_I_EVALUATE';
    var CONDITION_ANY_TEAM_I_SUPERVISE = 'ANY_TEAM_I_SUPERVISE';
    var CONDITION_CAN_I_CONFIRM_EVALUATIONS = 'CAN_I_CONFIRM_EVALUATIONS';
    var CONDITION_CAN_I_CONFIRM_SELF_EVALUATIONS = 'CAN_I_CONFIRM_SELF_EVALUATIONS';
    var CONDITION_CASE_ID = 'CASE_ID';
    var CONDITION_CONNECTED_TO = 'CONNECTED_TO';
    var CONDITION_CUSTOM_FIELD = 'CUSTOM_FIELD';
    var CONDITION_CUSTOMER_SURVEY_CSAT = 'CUSTOMER_SURVEY_CSAT';
    var CONDITION_CUSTOMER_SURVEY_FCR = 'CUSTOMER_SURVEY_FCR';
    var CONDITION_CUSTOMER_SURVEY_NPS = 'CUSTOMER_SURVEY_NPS';
    var CONDITION_DIRECTION = 'DIRECTION';
    var CONDITION_DISPOSITION = 'DISPOSITION';
    var CONDITION_DURATION = 'DURATION';
    var CONDITION_ENDED = 'ENDED';
    var CONDITION_EVAL_BOOKMARK = 'EVAL_BOOKMARK';
    var CONDITION_EVAL_FAILED = 'EVAL_FAILED';
    var CONDITION_EVAL_STATUS = 'EVAL_STATUS';
    var CONDITION_EVAL_TYPE = 'EVAL_TYPE';
    var CONDITION_EVALUATED = 'EVALUATED';
    var CONDITION_EVALUATED_AGENT = 'EVALUATED_AGENT';
    var CONDITION_EVALUATION_CONFIRMED = 'EVALUATION_CONFIRMED';
    var CONDITION_EVALUATED_BY = 'EVALUATED_BY';
    var CONDITION_EVALUATOR_COMMENTS = 'EVALUATOR_COMMENTS';
    var CONDITION_FIRST_NAME = 'FIRST_NAME';
    var CONDITION_FROM = 'FROM';
    var CONDITION_GIID = 'GIID';
    var CONDITION_HAS_CALL_PROBLEM = 'HAS_CALL_PROBLEM';
    var CONDITION_HAS_RECORDING = 'HAS_RECORDING';
    var CONDITION_HAS_SCREEN_RECORDING = 'HAS_SCREEN_RECORDING';
    var CONDITION_HAS_VOICE_SIGNATURE = 'VOICE_SIGNATURE';
    var CONDITION_HUNG_UP_BY = 'HUNG_UP_BY';
    var CONDITION_IN_EMAIL_SUBJECT = 'EMAIL_SUBJECT';
    var CONDITION_KM_TEMPLATE_USED = 'KM_TEMPLATE_USED';
    var CONDITION_LAST_NAME = 'LAST_NAME';
    var CONDITION_MEDIA_TYPE = 'MEDIA_TYPE';
    var CONDITION_MONITORED_BY = 'MONITORED_BY';
    var CONDITION_NO_KM_TEMPLATE_USED = 'KM_TEMPLATE_NOT_USED';
    var CONDITION_QUOTA = 'QUOTA';
    var CONDITION_RECORD_ID = 'CDR_ID';
    var CONDITION_SCHEDULED_FOR = 'SCHEDULED_FOR';
    var CONDITION_SCORE = 'SCORE';
    var CONDITION_SELF_EVALUATED = 'SELF_EVALUATED';
    var CONDITION_SENTIMENT = 'SENTIMENT';
    var CONDITION_SERVICE = 'SERVICE';
    var CONDITION_KM_TEMPLATE_SPEC_USED = 'KM_TEMPLATE_SPEC_USED';
    var CONDITION_STARTED = 'STARTED';
    var CONDITION_TEXT_SEARCH = 'TEXT_SEARCH';
    var CONDITION_TO = 'TO';
    var CONDITION_THREAD_ID = 'THREAD_ID';
    var CONDITION_WAS_FLAGGED = 'FLAGGED';
    var CONDITION_WAS_MONITORED = 'MONITORED';
    var CONDITION_WAS_TRANSFERRED = 'TRANSFERRED';

    var CONDITIONS = {};
    CONDITIONS[CONDITION_ACCOUNT_NUM] = {group: GROUP_IDENTIFIERS, displayName: '', modalType: TYPE_FIELD};
    CONDITIONS[CONDITION_AGENT] = {group: GROUP_AGENT_OR_TEAM, displayName: '', modalType: TYPE_COMBOBOX_SERVER, serverValueKey: 'value', serverDisplayKey: 'displayValue'};
    CONDITIONS[CONDITION_AGENTS_RANK] = {group: GROUP_AGENT_OR_TEAM, displayName: '', modalType: TYPE_FIELD};
    CONDITIONS[CONDITION_AGENTS_SUPERVISOR] = {group: GROUP_AGENT_OR_TEAM, displayName: '', modalType: TYPE_COMBOBOX_SERVER, serverValueKey: 'value', serverDisplayKey: 'displayValue'};
    CONDITIONS[CONDITION_AGENTS_TRAINING_CLASS] = {group: GROUP_AGENT_OR_TEAM, displayName: '', modalType: TYPE_COMBOBOX_SERVER, serverValueKey: 'value', serverDisplayKey: 'displayValue'};
    CONDITIONS[CONDITION_AGENT_NOTES] = {group: GROUP_CONTENT, displayName: '', modalType: TYPE_FIELD};
    CONDITIONS[CONDITION_AGENT_TEAM] = {group: GROUP_AGENT_OR_TEAM, displayName: '', modalType: TYPE_COMBOBOX_SERVER, serverValueKey: 'value', serverDisplayKey: 'value'};
    CONDITIONS[CONDITION_ANY_TEAM_I_EVALUATE] = {group: GROUP_AGENT_OR_TEAM, displayName: '', modalType: TYPE_FLAG};
    CONDITIONS[CONDITION_ANY_TEAM_I_SUPERVISE] = {group: GROUP_AGENT_OR_TEAM, displayName: '', modalType: TYPE_FLAG};
    CONDITIONS[CONDITION_CAN_I_CONFIRM_EVALUATIONS] = {group: GROUP_QM, displayName: '', modalType: TYPE_FLAG};
    CONDITIONS[CONDITION_CAN_I_CONFIRM_SELF_EVALUATIONS] = {group: GROUP_QM, displayName: '', modalType: TYPE_FLAG};
    CONDITIONS[CONDITION_CASE_ID] = {group: GROUP_IDENTIFIERS, displayName: '', modalType: TYPE_FIELD};
    CONDITIONS[CONDITION_CONNECTED_TO] = {group: GROUP_INTERACTION_ATTRIBUTES, displayName: '', modalType: TYPE_FIELD};
    CONDITIONS[CONDITION_CUSTOM_FIELD] = {group: GROUP_CONTENT, displayName: '', modalType: TYPE_COMBOBOX_SERVER_WITH_FIELD, serverValueKey: 'propName', serverDisplayKey: 'displayValue'};
    CONDITIONS[CONDITION_CUSTOMER_SURVEY_CSAT] = {group: GROUP_QUALITY_METRICS, displayName: '', modalType: TYPE_GT_LT, serverValueKey: 'doubleValue'};
    CONDITIONS[CONDITION_CUSTOMER_SURVEY_FCR] = {group: GROUP_QUALITY_METRICS, displayName: '', modalType: TYPE_Y_N, serverValueKey: 'doubleValue'};
    CONDITIONS[CONDITION_CUSTOMER_SURVEY_NPS] = {group: GROUP_QUALITY_METRICS, displayName: '', modalType: TYPE_GT_LT, serverValueKey: 'doubleValue'};
    CONDITIONS[CONDITION_DIRECTION] = {group: GROUP_INTERACTION_ATTRIBUTES, displayName: '', modalType: TYPE_COMBOBOX_ENUM, serverValueKey: 'direction', serverDisplayKey: 'direction'};
    CONDITIONS[CONDITION_DISPOSITION] = {group: GROUP_AGENT_OR_TEAM, displayName: '', modalType: TYPE_COMBOBOX_SERVER, serverValueKey: 'value', serverDisplayKey: 'value'};
    CONDITIONS[CONDITION_DURATION] = {group: GROUP_INTERACTION_ATTRIBUTES, displayName: '', modalType: TYPE_DURATION_GT_LT};
    CONDITIONS[CONDITION_ENDED] = {group: GROUP_TIME_RANGE, displayName: '', modalType: TYPE_DATE};
    CONDITIONS[CONDITION_EVAL_BOOKMARK] = {group: GROUP_QM, displayName: '', modalType: TYPE_FLAG};
    CONDITIONS[CONDITION_EVAL_FAILED] = {group: GROUP_QM, displayName: '', modalType: TYPE_FLAG};
    CONDITIONS[CONDITION_EVAL_STATUS] = {group: GROUP_QM, displayName: '', modalType: TYPE_COMBOBOX_ENUM, serverValueKey: 'evalStatus', serverDisplayKey: 'evalStatus'};
    CONDITIONS[CONDITION_EVAL_TYPE] = {group: GROUP_QM, displayName: '', modalType: TYPE_COMBOBOX_ENUM, serverValueKey: 'evalType', serverDisplayKey: 'evalType'};
    CONDITIONS[CONDITION_EVALUATED] = {group: GROUP_TIME_RANGE, displayName: '', modalType: TYPE_DATE};
    CONDITIONS[CONDITION_EVALUATED_AGENT] = {group: GROUP_QM, displayName: '', modalType: TYPE_COMBOBOX_SERVER, serverValueKey: 'value', serverDisplayKey: 'displayValue'};
    CONDITIONS[CONDITION_EVALUATION_CONFIRMED] = {group: GROUP_TIME_RANGE, displayName: '', modalType: TYPE_DATE};
    CONDITIONS[CONDITION_EVALUATED_BY] = {group: GROUP_QM, displayName: '', modalType: TYPE_COMBOBOX_SERVER, serverValueKey: 'value', serverDisplayKey: 'displayValue'};
    CONDITIONS[CONDITION_EVALUATOR_COMMENTS] = {group: GROUP_CONTENT, displayName: '', modalType: TYPE_FIELD};
    CONDITIONS[CONDITION_FIRST_NAME] = {group: GROUP_CONTENT, displayName: '', modalType: TYPE_FIELD};
    CONDITIONS[CONDITION_FROM] = {group: GROUP_INTERACTION_ATTRIBUTES, displayName: '', modalType: TYPE_FIELD};
    CONDITIONS[CONDITION_GIID] = {group: GROUP_IDENTIFIERS, displayName: '', modalType: TYPE_FIELD};
    CONDITIONS[CONDITION_HAS_CALL_PROBLEM] = {group: GROUP_SPECIAL_ATTRIBUTES, displayName: '', modalType: TYPE_COMBOBOX_ENUM, serverValueKey: 'callProblemType', serverDisplayKey: 'callProblemType'};
    CONDITIONS[CONDITION_HAS_RECORDING] = {group: GROUP_SPECIAL_ATTRIBUTES, displayName: '', modalType: TYPE_FLAG};
    CONDITIONS[CONDITION_HAS_SCREEN_RECORDING] = {group: GROUP_SPECIAL_ATTRIBUTES, displayName: '', modalType: TYPE_FLAG};
    CONDITIONS[CONDITION_HAS_VOICE_SIGNATURE] = {group: GROUP_INTERACTION_ATTRIBUTES, displayName: '', modalType: TYPE_FLAG};
    CONDITIONS[CONDITION_HUNG_UP_BY] = {group: GROUP_INTERACTION_ATTRIBUTES, displayName: '', modalType: TYPE_COMBOBOX_ENUM, serverValueKey: 'hungUpDisposition', serverDisplayKey: 'hungUpDisposition'};
    CONDITIONS[CONDITION_IN_EMAIL_SUBJECT] = {group: GROUP_CONTENT, displayName: '', modalType: TYPE_FIELD};
    CONDITIONS[CONDITION_KM_TEMPLATE_USED] = {group: GROUP_PROCESSING, displayName: '', modalType: TYPE_FLAG};
    CONDITIONS[CONDITION_LAST_NAME] = {group: GROUP_CONTENT, displayName: '', modalType: TYPE_FIELD};
    CONDITIONS[CONDITION_MEDIA_TYPE] = {group: GROUP_INTERACTION_ATTRIBUTES, displayName: '', modalType: TYPE_COMBOBOX_ENUM, serverValueKey: 'mediaType', serverDisplayKey: 'mediaType'};
    CONDITIONS[CONDITION_MONITORED_BY] = {group: GROUP_SPECIAL_ATTRIBUTES, displayName: '', modalType: TYPE_COMBOBOX_SERVER, serverValueKey: 'value', serverDisplayKey: 'displayValue'};
    CONDITIONS[CONDITION_NO_KM_TEMPLATE_USED] = {group: GROUP_PROCESSING, displayName: '', modalType: TYPE_FLAG};
    CONDITIONS[CONDITION_QUOTA] = {group: GROUP_TIME_RANGE, displayName: '', modalType: TYPE_QUOTA};
    CONDITIONS[CONDITION_RECORD_ID] = {group: GROUP_IDENTIFIERS, displayName: '', modalType: TYPE_FIELD, serverValueKey: 'sentiment'};
    CONDITIONS[CONDITION_SCHEDULED_FOR] = {group: GROUP_QM, displayName: '', modalType: TYPE_COMBOBOX_SERVER, serverValueKey: 'value', serverDisplayKey: 'displayValue'};
    CONDITIONS[CONDITION_SCORE] = {group: GROUP_QM, displayName: '', modalType: TYPE_GT_LT_BETWEEN};
    CONDITIONS[CONDITION_SELF_EVALUATED] = {group: GROUP_QM, displayName: '', modalType: TYPE_FLAG};
    CONDITIONS[CONDITION_SENTIMENT] = {group: GROUP_QUALITY_METRICS, displayName: '', modalType: TYPE_GT_LT_SLIDER, serverValueKey: 'sentiment'};
    CONDITIONS[CONDITION_SERVICE] = {group: GROUP_PROCESSING, displayName: '', modalType: TYPE_COMBOBOX_SERVER, serverValueKey: 'value', serverDisplayKey: 'value'};
    CONDITIONS[CONDITION_KM_TEMPLATE_SPEC_USED] = {group: GROUP_PROCESSING, displayName: '', modalType: TYPE_COMBOBOX_SERVER, serverValueKey: 'value', serverDisplayKey: 'displayValue'};
    CONDITIONS[CONDITION_STARTED] = {group: GROUP_TIME_RANGE, displayName: '', modalType: TYPE_DATE};
    CONDITIONS[CONDITION_TEXT_SEARCH] = {group: GROUP_CONTENT, displayName: '', modalType: TYPE_FIELD};
    CONDITIONS[CONDITION_TO] = {group: GROUP_INTERACTION_ATTRIBUTES, displayName: '', modalType: TYPE_FIELD};
    CONDITIONS[CONDITION_THREAD_ID] = {group: GROUP_IDENTIFIERS, displayName: '', modalType: TYPE_FIELD};
    CONDITIONS[CONDITION_WAS_FLAGGED] = {group: GROUP_SPECIAL_ATTRIBUTES, displayName: '', modalType: TYPE_FLAG};
    CONDITIONS[CONDITION_WAS_MONITORED] = {group: GROUP_SPECIAL_ATTRIBUTES, displayName: '', modalType: TYPE_FLAG};
    CONDITIONS[CONDITION_WAS_TRANSFERRED] = {group: GROUP_INTERACTION_ATTRIBUTES, displayName: '', modalType: TYPE_FLAG};

    var CALL_PROBLEMS = {
        __ANY__: '',
        CALL_DROPPED: '',
        CALL_WENT_SILENT: '',
        POOR_VOICE_QUALITY: '',
        OTHER: ''
    };

    var DIRECTIONS = {
        Incoming: '',
        Outbound: '',
        Internal: ''
    };

    var MEDIA_TYPES = {
        VOICE: '',
        CHAT: '',
        EMAIL: ''
    };

    var EVAL_STATUSES = {
        NONE: '',
        ASSIGNED: '',
        SAVED: '',
        SUBMITTED: '',
        DISPUTED: '',
        CONFIRMED: ''
    };

    var EVAL_TYPES = {
        CALIBRATION: '',
        EVALUATION: ''
    };

    var HUNG_UP_BY = {
        CALLER_TERMINATED: '',
        CALLEE_TERMINATED: ''
    };

    var GT_LT_OPERATORS = {
        LT: '',
        LTE: '',
        GT: '',
        GTE: ''
    };

    var GT_LT_BTW_OPERATORS = {
        LT: '',
        LTE: '',
        GT: '',
        GTE: '',
        BTW: ''
    };

    var DATE_TYPES = {
        AFTER: '',
        BEFORE: '',
        TODAY: '',
        YESTERDAY: '',
        LAST_24H: '',
        LAST_7DAYS: '',
        LAST_NDAYS: '',
        THIS_WEEK: '',
        THIS_WEEK_MON: '',
        LAST_WEEK: '',
        LAST_WEEK_MON: '',
        THIS_MONTH: '',
        LAST_MONTH: ''
    };

    var Y_N = {
        true: '',
        false: ''
    };

    var TIME_REGEX = /^([01]?\d|2[0-3]):?([0-5]\d)(:[0-5]\d)?$/i;
    var TIME_REGEX_PM = /^(0?[0-9]|1[012]):[0-5][0-9](:[0-5][0-9])?\s?(AM|PM)?/i;
    var TIME_REGEX_M_S = /^([0-9]+):[0-5][0-9]$/i;

    var initialized = false;

    this.create = function($elementToBind, alignRight) {
        if (!initialized) {
            translateConditions(CONDITIONS);
            translateObj(CALL_PROBLEMS);
            translateObj(DIRECTIONS);
            translateObj(MEDIA_TYPES);
            translateObj(EVAL_STATUSES);
            translateObj(EVAL_TYPES);
            translateObj(HUNG_UP_BY);
            translateObj(GT_LT_OPERATORS);
            translateObj(GT_LT_BTW_OPERATORS);
            translateObj(DATE_TYPES);
            translateObj(Y_N);
            initialized = true;
        }
        return new ConditionsControl($elementToBind, alignRight);
    };

    this.wrapWithBlock = function (conditions) {
        return {
            objectType: "BLOCK",
            conditions: conditions
        }
    };

    this.hasConditionsItems = function(conditions) {
        return conditions.find(function (v) {
            if (v.conditions) {
                return this.hasConditionsItems(v.conditions);
            } else if (v.objectType === OBJECT_TYPE_CONDITION) {
                return true;
            }
        }.bind(this));
    };

    this.hasCorrectTextSearchConditions = function(conditions) {
        var hasTextSearchCondition = conditions.some(function (c) {
            return checkConditionTypeIsTextSearch(c.type)
        });
        var hasOrOperand = conditions.some(function (c) {
            return c.objectType === OBJECT_TYPE_OPERAND && !c.isAnd
        });

        return !(hasTextSearchCondition && hasOrOperand);
    };

    function translateConditions(conditions) {
        $.each(GROUPS, function (i, v) {
            v.name = translator.get(v.name);
        });
        $.each(conditions, function (k, v) {
            v.displayName = translator.get(k);
        });
    }

    function translateObj(enumData, key) {
        $.each(enumData, function (k, v) {
            if (key) {
                v[key] = translator.get(k);
            } else {
                enumData[k] = translator.get(k);
            }
        });
    }

    function checkConditionTypeIsTextSearch(type) {
        return type === CONDITION_TEXT_SEARCH
            || type === CONDITION_AGENT_NOTES
            || type === CONDITION_EVALUATOR_COMMENTS
    }

    function ConditionsControl($bindElem, alignRightConditions) {
        this.$bindElem = $bindElem;
        this.alignRight = alignRightConditions;
        this.setChanged(false);

        this.$bindElem.find('.search-controls .add-condition').on('click', function () {
            this.setChanged(true);
            this.showConditionModal(this.$bindElem);
        }.bind(this));
        this.$bindElem.find('.search-controls .add-condition-block').on('click', function () {
            this.setChanged(true);
            this.addConditionBlock(this.$bindElem)
        }.bind(this));

        // === Public Methods ===
        ConditionsControl.prototype.load = function(data) {
            console.log('LOAD', data);
            this.setChanged(false);
            this.removeAll();
            $.each(mapConditionsToClient(data.conditions), function (i, v) {this.loadData(this.$bindElem, v)}.bind(this));
        };

        ConditionsControl.prototype.getAllData = function() {
            var data = getBlockData(this.$bindElem);
            console.log('GET ALL', data);
            return data;
        };

        // === Private Methods ===
        ConditionsControl.prototype.removeAll = function() {
            this.$bindElem.find('.search-conditions .condition-block').remove();
            this.$bindElem.find('.search-conditions .condition-template').remove();
            this.$bindElem.find('.search-conditions .condition-operand').remove();
        };

        ConditionsControl.prototype.loadData = function($block, data) {
            switch (data.objectType) {
                case OBJECT_TYPE_BLOCK:
                    var $innerBlock = this.addConditionBlock($block);
                    $.each(data.conditions, function (i, v) {this.loadData($innerBlock, v)}.bind(this));
                    break;
                case OBJECT_TYPE_CONDITION:
                    this.addCondition($block, Object.assign({}, data, getBaseConditionData(data.type)));
                    break;
                case OBJECT_TYPE_OPERAND:
                    this.addOperand($block, data);
                    break;
            }
        };

        ConditionsControl.prototype.addConditionBlock = function($outerBlock) {
            var $conditionBlock = $("#condition-block-template").clone().removeAttr('id');

            var $blocksConditions = $outerBlock.find('.search-conditions:first');
            if ($blocksConditions.children().last().is('.condition-template, .condition-block')) {
                this.addOperand($outerBlock);
            }

            $conditionBlock.find('.add-condition').on('click', function () {
                this.setChanged(true);
                this.showConditionModal($conditionBlock);
            }.bind(this));
            $conditionBlock.find('.add-condition-block').on('click', function () {
                this.setChanged(true);
                this.addConditionBlock($conditionBlock)
            }.bind(this));

            $blocksConditions.append($conditionBlock);

            $conditionBlock.find('.close').click(removeBlockOrCondition.bind(null, $conditionBlock));
            $conditionBlock.modal('show');
            return $conditionBlock;
        };

        ConditionsControl.prototype.addCondition = function($block, data) {
            var newCondition = !data.target;
            var $condition = newCondition ? $("#condition-template").clone().removeAttr('id') : data.target;
            $condition.find('.condition-name').text(data.displayName);
            $condition.find('.condition-value').text(getDataDisplayValue(data));
            $condition.find('.condition-remove').click(function() {
                this.setChanged(true);
                removeBlockOrCondition($condition);
            }.bind(this));
            data.target = $condition;
            $condition.data('data', data);
            $condition.off('click');
            if (data.type !== CONDITION_CAN_I_CONFIRM_EVALUATIONS && data.type !== CONDITION_CAN_I_CONFIRM_SELF_EVALUATIONS) {
                $condition.on('click', function () {
                    this.setChanged(true);
                    this.showConditionModal($block, data);
                }.bind(this));
            }
            if (newCondition) {
                var $blocksConditions = $block.find('.search-conditions:first');
                if ($blocksConditions.children().last().is('.condition-template, .condition-block')) {
                    this.addOperand($block);
                }
                $blocksConditions.append($condition);
            }
            return $condition;
        };

        ConditionsControl.prototype.addOperand = function($block, data) {
            data = data ? data : {isAnd: true}; // and by default
            var $operand = data.target ? data.target : $("#condition-operand-template").clone().removeAttr('id');
            data.target = $operand;
            $operand.data('data', data);
            $operand.on('click', function () {
                this.setChanged(true);
                switchOperand(data);
            }.bind(this));
            $operand.on('mouseleave', bindOperandData.bind(null, data));
            $block.find('.search-conditions:first').append($operand);
            bindOperandData(data);
            return $operand;
        };

        ConditionsControl.prototype.showConditionModal = function($block, data) {
            data = data ? data : {};
            var $conditionModal = $("#condition-modal-template").clone().prop('id', 'condition-modal');
            var $conditionModalStub = $('<div id="condition-modal-stub"></div>');

            $('.app-body').append($conditionModal);
            if (data.target) {
                $conditionModalStub.insertAfter(data.target);
                data.target.hide();
                $conditionModal.on('hide.bs.modal', function () {
                    data.target.show();
                });
            } else {
                $block.find('.search-conditions:first').append($conditionModalStub)
            }

            $conditionModal.find('.condition-modal-check').click(function () {
                var newData = Object.assign({}, data, getConditionModalData($conditionModal));
                if (newData.valid) {
                    $conditionModal.on('hidden.bs.modal', function () {
                        this.addCondition($block, newData);
                    }.bind(this));
                    $conditionModal.modal('hide');
                }
            }.bind(this));

            bindConditionModalData($conditionModal, data);

            $conditionModal.on('show.bs.modal', function () {
                var  conditions = Object.assign({}, CONDITIONS);
                var hasTextSearchCondition = this.getAllData().conditions.some(function (e) {
                    return checkConditionTypeIsTextSearch(e.type);
                });

                if (!checkConditionTypeIsTextSearch(data.type) && (hasTextSearchCondition || $block.hasClass("condition-block"))) {
                    delete conditions[CONDITION_TEXT_SEARCH];
                    delete conditions[CONDITION_AGENT_NOTES];
                    delete conditions[CONDITION_EVALUATOR_COMMENTS];
                }

                var conditionTypes = $.map(conditions, function (v, k) {
                    return {label: v.displayName, value: k, group: v.group};
                }).filter(function (item) {
                    return item.value !== CONDITION_CAN_I_CONFIRM_EVALUATIONS && item.value !== CONDITION_CAN_I_CONFIRM_SELF_EVALUATIONS;
                });
                initModalSearchableCombobox($conditionModal, $conditionModal.find('.condition-type'), conditionTypes, function (value) {
                    bindAdditionConditionModalData($conditionModal, {type: value, modalType: CONDITIONS[value].modalType});
                }, CB_MODE_GROUP);
            }.bind(this));
            $conditionModal.on('shown.bs.modal', function () {
                $conditionModal.attr('style', 'display: flex;');
                adjustPositionToStub($conditionModal, this.alignRight);
            }.bind(this));
            $conditionModal.on('hidden.bs.modal', function () {
                $conditionModal.remove();
                $conditionModalStub.remove();
            });
            $conditionModal.resize(adjustPositionToStub.bind(null, $conditionModal, this.alignRight));
            $conditionModal.modal('show');
        };

        function getBlockData($block) {
            return {
                objectType: OBJECT_TYPE_BLOCK,
                conditions: $block.find('.search-conditions:first').children()
                    .filter('.condition-block, .condition-template, .condition-operand')
                    .map(function (i, elem) {
                        var $elem = $(elem);
                        if ($elem.hasClass('condition-block')) {
                            return getBlockData($elem);
                        } else {
                            var data = $elem.data().data;
                            if (data.type === CONDITION_CAN_I_CONFIRM_EVALUATIONS || data.type === CONDITION_CAN_I_CONFIRM_SELF_EVALUATIONS) {
                                $elem.find('.condition-edit').remove();
                            }
                            return Object.assign({}, data, {
                                objectType: $elem.hasClass('condition-template') ? OBJECT_TYPE_CONDITION : OBJECT_TYPE_OPERAND,
                                target: null,
                                dateValue: data.dateValue
                            });
                        }
                    }).get()
            }
        }

        function removeBlockOrCondition($elem) {
            if ($elem.prev().hasClass('condition-operand')) {
                $elem.prev().remove();
            } else if ($elem.next().hasClass('condition-operand')) {
                $elem.next().remove();
            }
            $elem.remove();
        }

        function switchOperand(data) {
            var $prevActive = data.target.find('.operand-active');
            var $newActive = data.target.find('.operand-inactive');
            $prevActive.removeClass('operand-active').addClass('operand-inactive');
            $newActive.removeClass('operand-inactive').addClass('operand-active');
            var isAnd = $newActive.data('isAnd');
            data.isAnd = !!isAnd;
        }

        function bindOperandData(data) {
            var $elem = data.target;
            var $active = $elem.find('.operand-active');
            if (data.isAnd !== !!$active.data('isAnd')) {
                switchOperand(data);
                $active = $elem.find('.operand-active');
            }
            $active.css('margin-right', '5px');
            if (data.isAnd) {
                $elem.find('.operand-content').css('flex-direction', 'row');
            } else {
                $elem.find('.operand-content').css('flex-direction', 'row-reverse');
            }
        }

        function initModalSimpleCombobox($modal, $comboboxWrapper, source, width, onSelect) {
            $comboboxWrapper.html('');
            $.each(source, function (k, v) {
                $comboboxWrapper.append($('<option>', {value: k, text: v}));
            });
            $comboboxWrapper.selectmenu({
                width: width ? width : 60,
                select: function(event, ui) {
                    if (onSelect) {
                        onSelect(ui.item.value);
                    }
                    return false;
                }
            });
            $comboboxWrapper.selectmenu("refresh");
            $comboboxWrapper.selectmenu('widget').addClass('custom-ui-select');
        }

        function initModalSlider($modal, $sliderWrapper, range, onSlide) {
            $sliderWrapper.slider({
                step: 0.01,
                min: range.min,
                max: range.max,
                slide: function(event, ui) {
                    if (onSlide) {
                        onSlide(ui.value);
                    }
                }
            });
        }

        function bindConditionModalData($modal, data) {
            if (data.type === CONDITION_CAN_I_CONFIRM_EVALUATIONS || data.type === CONDITION_CAN_I_CONFIRM_SELF_EVALUATIONS) {
                return;
            }
            bindBaseConditionModalData($modal, data);
            bindAdditionConditionModalData($modal, data);
        }

        function bindBaseConditionModalData($modal, data) {
            var $condition = $modal.find('.condition-type');
            $condition.find('.label-input').val(data.displayName);
            $condition.find('.value-input').val(data.type);
        }

        function bindAdditionConditionModalData($modal, data) {
            var $additionCondition;
            switch (data.modalType) {
                case TYPE_FIELD:
                    $additionCondition = $("#condition-field-template").clone().removeAttr('id');
                    $additionCondition.find('input').val(data.value);
                    break;
                case TYPE_QUOTA:
                    $additionCondition = $("#condition-quota-template").clone().removeAttr('id');
                    $additionCondition.find('.value').val(data.intValue);
                    $additionCondition.find('.value-2').val(data.intValue2);
                    break;
                case TYPE_DATE:
                    backwardCompatibilityDateData(data);
                    $additionCondition = $("#condition-date-template").clone().removeAttr('id');
                    var $comboboxWrapper = $additionCondition.find('.date-type-select');
                    var onItemSelect = function (type) {
                        if (isWindowDateType(type)) {
                            $additionCondition.find('.date-time-block').hide();
                        } else {
                            $additionCondition.find('.date-time-block').show();
                        }

                        if (type === 'LAST_NDAYS') {
                            $additionCondition.find('.last-ndays-block').show();
                        } else {
                            $additionCondition.find('.last-ndays-block').hide();
                        }
                    };

                    initModalSimpleCombobox($modal, $comboboxWrapper, DATE_TYPES, 190, onItemSelect);
                    $comboboxWrapper.val(data.dateType ? data.dateType : 'AFTER');
                    $comboboxWrapper.selectmenu('refresh');
                    onItemSelect($comboboxWrapper.val());
                    $additionCondition.find('.datepicker').datepicker()
                        .datepicker('option', 'dateFormat', useNewFormat()
                            ? moment.localeData().longDateFormat('L').toLowerCase().replace('yyyy', 'y')
                            : 'mm/dd/y')
                        .datepicker('setDate', useNewFormat() ? getDatePartForDisplay(data.dateValue) : data.dateValue);
                    $additionCondition.find('.time').val(formatTimeNoTZ(data.dateValue, !!new Date(data.dateValue).getSeconds()));
                    $additionCondition.find('.period').val(data.intValue);
                    break;
                case TYPE_COMBOBOX_ENUM:
                case TYPE_COMBOBOX_SERVER:
                    $additionCondition = $("#condition-combobox-template").clone().removeAttr('id');
                    initModalSearchableCombobox($modal, $additionCondition.find('.combobox'), getComboboxTypeSource(data));
                    $additionCondition.find('.label-input').val(getDataDisplayValue(data));
                    $additionCondition.find('.value-input').val(data[getServerValueKey(data)]);
                    break;
                case TYPE_COMBOBOX_SERVER_WITH_FIELD:
                    $additionCondition = $("#condition-combobox-with-field-template").clone().removeAttr('id');
                    initModalSearchableCombobox($modal, $additionCondition.find('.combobox'), getComboboxTypeSource(data));
                    $additionCondition.find('.label-input').val(data[getServerDisplayKey(data)]);
                    $additionCondition.find('.value-input').val(data[getServerValueKey(data)]);
                    $additionCondition.find('.value').val(data.value);
                    break;
                case TYPE_GT_LT:
                    $additionCondition = $("#condition-gt-lt-template").clone().removeAttr('id');
                    var $comboboxWrapper = $additionCondition.find('.operator-select');
                    initModalSimpleCombobox($modal, $comboboxWrapper, GT_LT_OPERATORS);
                    $comboboxWrapper.val(data.operator);
                    $comboboxWrapper.selectmenu('refresh');
                    $additionCondition.find('.gt-lt-value').val(data[getServerValueKey(data)]);
                    break;
                case TYPE_GT_LT_SLIDER:
                    $additionCondition = $("#condition-gt-lt-slider-template").clone().removeAttr('id');
                    var $comboboxWrapper = $additionCondition.find('.operator-select');
                    initModalSimpleCombobox($modal, $comboboxWrapper, GT_LT_OPERATORS);
                    $comboboxWrapper.val(data.operator);
                    $comboboxWrapper.selectmenu('refresh');
                    var $sliderWrapper = $additionCondition.find('.gt-lt-slider');
                    initModalSlider($modal, $sliderWrapper, {min: -1, max: 1}, function (value) {
                        $additionCondition.find('.gt-lt-value').val(value);
                    });
                    var dataValue = data[getServerValueKey(data)];
                    $sliderWrapper.slider('value', dataValue ? dataValue : 0);
                    $additionCondition.find('.gt-lt-value').val(dataValue);
                    break;
                case TYPE_GT_LT_BETWEEN:
                    $additionCondition = $("#condition-gt-lt-btw-template").clone().removeAttr('id');
                    var $comboboxWrapper = $additionCondition.find('.operator-select');
                    initModalSimpleCombobox($modal, $comboboxWrapper, GT_LT_BTW_OPERATORS, 100, function (operator) {
                        if (operator === 'BTW') {
                            $additionCondition.find('.value-2').show();
                        } else {
                            $additionCondition.find('.value-2').hide();
                        }
                        $modal.trigger($.Event('resize'));
                    });
                    if (data.operator === 'BTW') {
                        $additionCondition.find('.value-2').show();
                    } else {
                        $additionCondition.find('.value-2').hide();
                    }
                    $comboboxWrapper.val(data.operator);
                    $comboboxWrapper.selectmenu('refresh');
                    $additionCondition.find('.value').val(data.doubleValue);
                    $additionCondition.find('.value-2').val(data.doubleValue2);
                    break;
                case TYPE_DURATION_GT_LT:
                    $additionCondition = $("#condition-duration-gt-lt-template").clone().removeAttr('id');
                    var $comboboxWrapper = $additionCondition.find('.operator-select');
                    initModalSimpleCombobox($modal, $comboboxWrapper, GT_LT_OPERATORS);
                    $comboboxWrapper.val(data.operator);
                    $comboboxWrapper.selectmenu('refresh');
                    $additionCondition.find('.gt-lt-value').val(formatDurationToString(data.duration));
                    break;
                case TYPE_Y_N:
                    $additionCondition = $("#condition-y-n-template").clone().removeAttr('id');
                    var $comboboxWrapper = $additionCondition.find('select');
                    initModalSimpleCombobox($modal, $comboboxWrapper, Y_N);
                    var value = data.boolValue ? data.boolValue.toString() : data.boolValue;
                    $comboboxWrapper.val(value);
                    $comboboxWrapper.selectmenu('refresh');
                    break;
                case TYPE_FLAG:
                    $additionCondition = $("<div>");
                    break;
            }
            $modal.find('.condition-additional').html($additionCondition);
            $modal.trigger($.Event('resize'));
        }

        function getConditionModalData($modal) {
            var conditionType = $modal.find('.condition-type .value-input').val();
            var data = getBaseConditionData(conditionType);
            switch (data.modalType) {
                case TYPE_FIELD:
                    return Object.assign(data, getFieldModalData($modal));
                case TYPE_QUOTA:
                    return Object.assign(data, getQuotaModalData($modal));
                case TYPE_DATE:
                    return Object.assign(data, getDateModalData($modal));
                case TYPE_COMBOBOX_ENUM:
                case TYPE_COMBOBOX_SERVER:
                    return Object.assign(data, getComboboxModalData($modal, getServerValueKey(data), getServerDisplayKey(data)));
                case TYPE_COMBOBOX_SERVER_WITH_FIELD:
                    return Object.assign(data, getComboboxWithFieldModalData($modal, getServerValueKey(data), getServerDisplayKey(data)));
                case TYPE_GT_LT:
                    return Object.assign(data, getGtLtModalData($modal, getServerValueKey(data)));
                case TYPE_GT_LT_SLIDER:
                    return Object.assign(data, getGtLtModalData($modal, getServerValueKey(data)));
                case TYPE_GT_LT_BETWEEN:
                    return Object.assign(data, getGtLtBetweenModalData($modal));
                case TYPE_DURATION_GT_LT:
                    return Object.assign(data, getDurationGtLtModalData($modal));
                case TYPE_Y_N:
                    return Object.assign(data, getYesNoData($modal));
                case TYPE_FLAG:
                    return Object.assign(data, {valid: true});
            }
        }

        function getBaseConditionData(conditionType) {
            if (!conditionType) {
                return {};
            }
            var conditionData = CONDITIONS[backwardCompatibilityDateType(conditionType)];
            return {
                type: conditionType,
                modalType: conditionData.modalType,
                displayName: conditionData.displayName
            }
        }

        function getFieldModalData($modal) {
            var $input = $modal.find('.condition-additional input');
            var inputValue = getValueAndCheck($input, function ($i) {return $i.val()}, isNotEmptyString);
            var data = {};
            data.valid = inputValue.valid;
            if (data.valid) {
                data.value = inputValue.value;
            }
            return data;
        }

        function getQuotaModalData($modal) {
            var value = getValueAndCheck($modal.find('.condition-additional .value'), function ($i) {return $i.val()}, isNotEmptyString);
            var value2 = getValueAndCheck($modal.find('.condition-additional .value-2'), function ($i) {return $i.val()}, isNotEmptyString);
            var data = {};
            data.valid = value.valid && value2.valid;
            if (data.valid) {
                data.intValue = value.value;
                data.intValue2 = value2.value;
            }
            return data;
        }

        function getDateModalData($modal) {
            var dateType = $modal.find('.date-type-select').val();
            var datepickerValue = getValueAndCheck(
                $modal.find('.condition-additional .datepicker'),
                function ($i) {return $i.datepicker('getDate')},
                function (v) {return !!v});
            var timeValue = getValueAndCheck(
                $modal.find('.condition-additional .time'),
                function ($i) {return $i.val()},
                function (v) {
                    if (isNotEmptyString(v)) {
                        if (isPmLocale()) {
                            return v.match(TIME_REGEX_PM);
                        } else {
                            return v.match(TIME_REGEX);
                        }
                    } else {
                        return false;
                    }
                });
            var period = getValueAndCheck($modal.find('.condition-additional .period'),
                function ($i) {return $i.val()},
                isNotEmptyString);
            var data = {
                valid: true,
                dateType: dateType
            };
            if (!isWindowDateType(data.dateType)) {
                data.valid = datepickerValue.valid && timeValue.valid;
                if (data.valid) {
                    data.dateValue = datepickerValue.value;
                    if (isNotEmptyString(timeValue.value)) {
                        var time = parseTime(timeValue.value);
                        if (useNewFormat()) {
                            var d = data.dateValue;
                            data.dateValue = moment.tz(initializer.getTimezoneId())
                            .year(d.getFullYear()).month(d.getMonth()).date(d.getDate())
                            .hour(time.getHours()).minute(time.getMinutes()).second(time.getSeconds())
                            .toDate();
                        } else {
                            data.dateValue.setHours(time.getHours(), time.getMinutes(), time.getSeconds());
                        }
                    }
                }
            } else if (data.dateType === 'LAST_NDAYS') {
                data.valid = period.valid;
                if (data.valid) {
                    data.intValue = period.value;
                }
            }
            return data;
        }

        function getComboboxModalData($modal, valueKey, displayKey) {
            var $comboboxValueInput = $modal.find('.condition-additional .combobox .value-input');
            var $comboboxLabelInput = $modal.find('.condition-additional .combobox .label-input');
            var comboboxValue = getValueAndCheck($comboboxValueInput, function ($i) {return $i.val()}, isNotEmptyString);
            var comboboxLabel = getValueAndCheck($comboboxLabelInput, function ($i) {return $i.val()}, isNotEmptyString);
            var data = {};
            data.valid = comboboxValue.valid;
            if (data.valid) {
                data[valueKey] = comboboxValue.value;
                if (valueKey !== displayKey) {
                    data[displayKey] = comboboxLabel.value;
                }
            }
            return data;
        }

        function getComboboxWithFieldModalData($modal, valueKey, displayKey) {
            var data = getComboboxModalData($modal, valueKey, displayKey);
            var $fieldValue = $modal.find('.condition-additional .value');
            if (data.valid) {
                var fieldValue = getValueAndCheck($fieldValue, function ($i) {return $i.val()}, isNotEmptyString);
                data.valid = fieldValue.valid;
                data.value = fieldValue.value;
            }
            return data;
        }

        function getGtLtModalData($modal, valueKey) {
            var operator = $modal.find('.operator-select').val();
            var value = getValueAndCheck($modal.find('.gt-lt-value'), function ($i) {return $i.val()}, isNotEmptyString);
            var data = {};
            data.valid = value.valid;
            if (data.valid) {
                data.operator = operator;
                data[valueKey] = value.value;
            }
            return data;
        }

        function getGtLtBetweenModalData($modal) {
            var operator = $modal.find('.operator-select').val();
            var value = getValueAndCheck($modal.find('.value'), function ($i) {return $i.val()}, isNotEmptyString);
            var value2 = getValueAndCheck($modal.find('.value-2'), function ($i) {return $i.val()}, isNotEmptyString);
            var data = {};
            data.valid = value.valid && (operator === 'BTW' ? value2.valid : true);
            if (data.valid) {
                data.operator = operator;
                data.doubleValue = value.value;
                data.doubleValue2 = value2.value;
            }
            return data;
        }

        function getDurationGtLtModalData($modal) {
            var operator = $modal.find('.operator-select').val();
            var value = getValueAndCheck($modal.find('.gt-lt-value'), function ($i) {return $i.val()}, function (v) {
                var value = +v;
                var minutesOnly = typeof value === "number" && isFinite(value) && Math.floor(value) === value && value >= 0;
                return isNotEmptyString(v) && (minutesOnly || v.match(TIME_REGEX_M_S));
            });
            var data = {};
            data.valid = value.valid;
            if (data.valid) {
                data.operator = operator;
                data.duration = formatDurationFromString(value.value);
            }
            return data;
        }

        function getYesNoData($modal) {
            var bool = $modal.find('.bool-select').val();
            return {
                valid: true,
                boolValue: bool
            }
        }

        function getValueAndCheck($input, getValueFunc, checkValueFunc) {
            var value = getValueFunc($input);
            var isValid = checkValueFunc(value);
            if (isValid) {
                $input.removeClass('has-error');
            } else {
                $input.addClass('has-error');
                $input.focus();
            }
            return {
                value: value,
                valid: isValid
            }
        }

        function getDataDisplayValue(data) {
            switch (data.modalType) {
                case TYPE_FIELD:
                    return data.value;
                case TYPE_QUOTA:
                    return data.intValue + ' ' + translator.get('evaluationsPer') + ' ' +
                        data.intValue2 + ' ' + translator.get('days');
                case TYPE_DATE:
                    backwardCompatibilityDateData(data);
                    var display = DATE_TYPES[data.dateType];
                    if (!isWindowDateType(data.dateType)) {
                        display = display + ' ' + formatDate(data.dateValue) + ' ' + formatTime(data.dateValue, true);
                    } else if (data.dateType === 'LAST_NDAYS') {
                        display = translator.get('LAST_NDAYS_VAL', data.intValue);
                    }
                    return display;
                case TYPE_COMBOBOX_ENUM:
                    return getComboboxEnumData(data)[data[getServerDisplayKey(data)]];
                case TYPE_COMBOBOX_SERVER:
                    return data[getServerDisplayKey(data)];
                case TYPE_COMBOBOX_SERVER_WITH_FIELD:
                    return data[getServerDisplayKey(data)] + ': "' + data.value + '"';
                case TYPE_GT_LT:
                case TYPE_GT_LT_SLIDER:
                    return GT_LT_OPERATORS[data.operator] + ' ' + data[getServerValueKey(data)];
                case TYPE_GT_LT_BETWEEN:
                    var display = GT_LT_BTW_OPERATORS[data.operator] + ' ' + data.doubleValue;
                    if (data.operator === 'BTW') {
                        display = display + ' and ' + data.doubleValue2;
                    }
                    return display;
                case TYPE_DURATION_GT_LT:
                    return GT_LT_OPERATORS[data.operator] + ' ' + formatDurationToString(data.duration);
                case TYPE_Y_N:
                    return Y_N[data.boolValue];
                case TYPE_FLAG:
                    return '';
            }
        }

        function getComboboxTypeSource(data) {
            switch (data.modalType) {
                case TYPE_COMBOBOX_ENUM:
                    return $.map(getComboboxEnumData(data), function (v, k) {
                        return {label: v, value: k};
                    });
                case TYPE_COMBOBOX_SERVER:
                case TYPE_COMBOBOX_SERVER_WITH_FIELD:
                    return getComboboxServerCallData(data);
            }
        }

        function getServerValueKey(data) {
            var key = CONDITIONS[data.type].serverValueKey;
            return key ? key : 'value';
        }

        function getServerDisplayKey(data) {
            return CONDITIONS[data.type].serverDisplayKey;
        }

        function getComboboxEnumData(data) {
            switch (data.type) {
                case CONDITION_HAS_CALL_PROBLEM:
                    return CALL_PROBLEMS;
                case CONDITION_DIRECTION:
                    return DIRECTIONS;
                case CONDITION_MEDIA_TYPE:
                    return MEDIA_TYPES;
                case CONDITION_EVAL_STATUS:
                    return EVAL_STATUSES;
                case CONDITION_EVAL_TYPE:
                    return EVAL_TYPES;
                case CONDITION_HUNG_UP_BY:
                    return HUNG_UP_BY;
            }
        }

        function getComboboxServerCallData(data) {
            switch (data.type) {
                case CONDITION_AGENT:
                    return searchData.bind({url: 'rest/evaluation/get-agents', mapper: mapNameAndIdWithMe});
                case CONDITION_DISPOSITION:
                    return searchData.bind({url: 'rest/evaluation/get-dispositions'});
                case CONDITION_SERVICE:
                    return searchData.bind({url: 'rest/evaluation/get-services'});
                case CONDITION_KM_TEMPLATE_SPEC_USED:
                    return searchData.bind({url: 'rest/evaluation/get-templates', mapper: mapNameAndId});
                case CONDITION_AGENT_TEAM:
                    return searchData.bind({url: 'rest/evaluation/get-teams', mapper: mapName});
                case CONDITION_MONITORED_BY:
                    return searchData.bind({url: 'rest/evaluation/get-supervisors', mapper: mapNameAndId});
                case CONDITION_EVALUATED_BY:
                case CONDITION_AGENTS_SUPERVISOR:
                    return searchData.bind({url: 'rest/evaluation/get-users?withMe=true', mapper: mapNameAndIdWithMe});
                case CONDITION_CUSTOM_FIELD:
                    return searchData.bind({url: 'rest/evaluation/get-custom-fields', mapper: mapNameAndId});
                case CONDITION_EVALUATED_AGENT:
                case CONDITION_SCHEDULED_FOR:
                    return searchData.bind({url: 'rest/evaluation/get-users?withMe=true', mapper: mapNameAndIdWithMe});
                case CONDITION_AGENTS_TRAINING_CLASS:
                    return searchData.bind({url: 'rest/evaluation/get-training-classes', mapper: mapNameAndId});

            }
        }

        function backwardCompatibilityDateType(type) {
            switch (type) {
                case 'STARTED_AFTER':
                case 'STARTED_BEFORE':
                    return 'STARTED';
                case 'ENDED_AFTER':
                case 'ENDED_BEFORE':
                    return 'ENDED';
                default:
                    return type;
            }
        }

        function backwardCompatibilityDateData(data) {
            switch (data.type) {
                case 'STARTED_AFTER':
                    data.type = 'STARTED';
                    data.dateType = 'AFTER';
                    break;
                case 'STARTED_BEFORE':
                    data.type = 'STARTED';
                    data.dateType = 'BEFORE';
                    break;
                case 'ENDED_AFTER':
                    data.type = 'ENDED';
                    data.dateType = 'AFTER';
                    break;
                case 'ENDED_BEFORE':
                    data.type = 'ENDED';
                    data.dateType = 'BEFORE';
                    break;
            }
        }

        function formatDurationToString(duration) {
            if (!!duration) {
                var minutes = Math.floor(duration);
                var seconds = Math.round((duration % 1) * 60);

                return !!seconds
                    ? minutes + ':' + (seconds < 10 ? '0' + seconds : seconds)
                    : minutes;
            }

            return '0';
        }

        function formatDurationFromString(durationString) {
            var durationParts = durationString.split(':');

            if (!!durationParts.length) {
                var minutes = +durationParts[0];

                if (durationParts.length === 2) {
                    var seconds = (+durationParts[1]) / 60;
                    return Math.round((minutes + seconds) * 100) / 100;
                } else {
                    return minutes;
                }
            }
        }

        function isWindowDateType(type) {
            return type !== 'AFTER' && type !== 'BEFORE';
        }

        function adjustPositionToStub($elem, alignRight) {
            var $stub = $elem.parent().find('#' + $elem.attr('id') + '-stub');
            $elem.css('top', $stub.offset().top);
            if (alignRight) {
                var potentialRight = $(window).width() - ($stub.offset().left + $elem.outerWidth());
                var maxRight = 20;
                $elem.css('right', Math.max(potentialRight, maxRight));
            }

        }

        var searchData = comboboxSearch(initializer.getToken());

        function mapConditionsToClient(conditions) {
            $.each(conditions, function (i, v) {
                if (v.conditions) {
                    mapConditionsToClient(v.conditions);
                } else if (v.dateValue) {
                    if (!useNewFormat()) {
                        v.dateValue = convertDateToUTC(new Date(v.dateValue));
                    }
                }
            });
            return conditions;
        }
    }

    ConditionsControl.prototype.isChanged = function() {
        return this.changed;
    };

    ConditionsControl.prototype.setChanged = function(isChanged) {
        this.changed = isChanged;

        if (isChanged) {
            this.$bindElem.find('.title .title-changed').show();
            this.$bindElem.find('.save-btn').removeClass('disabled');
        } else {
            this.$bindElem.find('.title .title-changed').hide();
            this.$bindElem.find('.save-btn').addClass('disabled');
        }
    };
};
