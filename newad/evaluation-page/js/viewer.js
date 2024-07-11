
var externalInterface;

var evaluationFormViewer = new function () {

    var MAX_COMMENTS_AREA_HEIGHT = 150;
    var container;
    var evaluationId;
    var formId;
    var formName;
    var permissions;
    var form;
    var controlsMap = [];
    var viewerMode = VIEW_MODE;
    var isFormChanged = false;
    var readOnly = false;
    var timelineControl = null;   
    var minFormScore = DEFAULT_MIN_FORM_SCORE;
    var formScore = 0;
    var formDetails = [];
    var formFailed = false;
    var allAttachmentsCount = 0;
    var allAttachmentsSize = 0;
    var newAttachmentsList = [];
    // set of non-completed areas (not fully filled or excluded)
    var areaNonCompletedMap = {};
    var stateControl;
    var evalInfoHeight = 0;
    var parentPanel;
    var nullifyFailedScore = true;

    function initViewSize() {        
        var winHeight = 0;
        var fullHeight = 0;
        var rightColCaptionHeight = $(".rightColCaption").height();
        
        if (container) {
            fullHeight = $(container).height() - rightColCaptionHeight;
        } else {  
            var headerHeight = 0;
            var $tempButtons = $(".tempButtons");

            if($tempButtons.is(":visible")) {
                headerHeight = $tempButtons.height();
            }
           
            winHeight = $("body").height();
            fullHeight = winHeight - headerHeight - rightColCaptionHeight;
        }

        var $evalInfo = $("#eval-info");

        if ($evalInfo.is(":visible")) {
            fullHeight -= $evalInfo.height();
            evalInfoHeight = $evalInfo.height();
        }

        $(".layout-parent-box-wrapper").height(fullHeight);
        $("#layout-parent-box-viewer").height(fullHeight - 16);
    }

    function adjustAreaViewerHeightOnInit(heightChanges, callback) {
        if (!heightChanges) {
            heightChanges = 0;
        }

        var wrapperBlockHeight = $("#layout-parent-box-viewer").height();
        var $areaHeader = $('#area-header-viewer');
        var $areaContent = $("#area-content-viewer");
        var $evalInfo = $("#eval-info");

        if ($evalInfo.is(":visible") && $evalInfo.height() !== evalInfoHeight) {
            initViewSize();
        }

        var headerBlockHeight = $areaHeader.height() + heightChanges;
        if (heightChanges == 0 && headerBlockHeight >= (wrapperBlockHeight - 10)) {
            headerBlockHeight = wrapperBlockHeight / 2;
        }
        var footerBlockHeight = wrapperBlockHeight - headerBlockHeight;
        $areaHeader.height(headerBlockHeight);
        $areaContent.css("top", 0);
        $areaContent.css("height", footerBlockHeight);
        $areaContent.css("overflow-y", "auto");
        var scrollHeight = $areaHeader.prop('scrollHeight');
        var footerMinHeight = wrapperBlockHeight - scrollHeight;
        callback && callback(footerMinHeight);
    }

    function adjustAreaViewerHeight(heightChanges) {
        adjustAreaViewerHeightOnInit(heightChanges, function(footerMinHeight) {
            $("#area-content-viewer").resizable("option", "minHeight", Math.max(footerMinHeight, 10));
        });
    }

    function saveAreaViewerSize() {
        var parentHeight = $("#layout-parent-box-viewer").height();
        var height = $('#area-header-viewer').height();
        var formAreaSize = {parentHeight: parentHeight, height: height};
        stateControl && stateControl.setFormAreaViewerSize(formAreaSize);
    }

    this.init = function (viewType, callback, containerElement, pStateControl, parentPanelElement) {

        viewerMode = viewType;               
        container = containerElement;
        stateControl = pStateControl;
        parentPanel = parentPanelElement;

        if (!!parentPanel) {
            parentPanel.find('#evaluation-form-selector').on('selectmenuselect', function () {
                calculateAndShowFormScore();
            })
        }

        translator.translate($(".viewier-area"));

        if (viewerMode === VIEW_MODE) {
            initViewSize();            
            $(window).resize(function () {
                initViewSize();
                adjustAreaViewerHeight();
                saveAreaViewerSize();
            });
        }

        if(viewerMode === PREVIEW_MODE) {
            $(".area-list-item-score").hide();
            $(".area-body-item-score").hide();
            $(".element-area .on-hover-controls").hide();
        }

        controlsMap["item-checkbox-"] = { prefixId: 'item-checkbox-', type: CHECKBOX_CONTROL,
            templateId: "#checkbox-control-template",
            viewer: createCheckboxViewer, results: saveCheckboxViewer};
        controlsMap["item-radio-"] = { prefixId: 'item-radio-', type: RADIO_CONTROL,
            templateId: "#radio-control-template",
            viewer: createRadioViewer, results: saveRadioViewer};
        controlsMap["item-radio-horizontal-"] = { prefixId: 'item-radio-horizontal-', type: RADIO_HORIZONTAL_CONTROL,
            templateId: "#radio-control-template",
            viewer: createRadioViewer, results: saveRadioViewer};       
        controlsMap["item-dropdown-"] = { prefixId: 'item-dropdown-', type: DROPDOWN_CONTROL,
            templateId: "#dropdown-control-template",
            viewer: createDropdownViewer, results: saveDropdownViewer};      

        if (callback) {
            callback();
        }
    }
    
    this.postInit = function () {       
        var formAreaSize = stateControl && stateControl.getFormAreaViewerSize();
        var currentHeight = $('#area-header-viewer').height();
        if (formAreaSize && formAreaSize.height && formAreaSize.parentHeight
            && formAreaSize.parentHeight === $("#layout-parent-box-viewer").height() && formAreaSize.height !== currentHeight) {
            // restore saved height only if parent height is the same, but area viewer height would be different
            $('#area-header-viewer').css('height', formAreaSize.height + 'px');
            adjustAreaViewerHeightOnInit(formAreaSize.height - currentHeight);
        } else {
            adjustAreaViewerHeightOnInit();
        }
    };

    this.refreshTimeline = function() {
        if (timelineControl) {
            timelineControl.removeAllNotes();
            (form.areas || []).forEach(function (area) {
                (area.questions || []).forEach(function (question) {
                    var commentsText = $.trim(question.comments);
                    if (question.commentsTime && question.commentsTime >= 0 && commentsText) {
                        timelineControl.addNote(question.commentsTime, commentsText, function () {
                            var commentsButton = $('#' + question.id + ' .ico-comment');
                            openComments(area, commentsButton);
                        });
                    }
                });
            })
        }
    };

    function getPrototype(question) {
        var itemPrototype;

        for (var property in controlsMap) {
            if (controlsMap.hasOwnProperty(property) && question.type == controlsMap[property].type) {
                itemPrototype = controlsMap[property];
                return itemPrototype;
            }
        }
    }

    function createViewer() {
        var viewer = $("#form-viewer").clone().prop("id", "form-editor-" + form.id);
        $("#area-header-viewer").empty();
        $("#area-content-viewer").empty();
        $("#area-header-viewer").append($(viewer));
        if (timelineControl) {
            timelineControl.removeAllNotes();
        }
    
        var description = $(viewer).find(".form-description-editor .edit-point");
        var image = $(viewer).find("#form-image");
       
        if (!form.description && !form.image) {
            $(viewer).find(".form-viewer-wrapper").hide();
        } else {
            $(viewer).find(".form-viewer-wrapper").show();         
            $(description).text(form.description);

            if (form.image) {
                $(image).attr("src", form.image);
            } else {
                $(image).closest(".image-line").hide();
            }       
        }                       

        if (form.areas) {
            var areaList = $(viewer).find(".area-list");
            var depthBuffer = {};       
            var currentDepth = 0;
            
            for (var i = 0; i < form.areas.length; i++) {
                var area = form.areas[i];                       
                var areaListItem = $("#area-list-item-template").clone().prop("id", "area-list-item-" + area.id);
                
                var numberPrefix = "";                                                           
                if (area.depth < currentDepth) {
                    if (depthBuffer[currentDepth]) {
                        delete depthBuffer[currentDepth];
                    }  
                }                        
                currentDepth = area.depth + "";
             
                if (!depthBuffer[currentDepth]) {
                    depthBuffer[currentDepth] = 1;
                } else {
                    depthBuffer[currentDepth] = depthBuffer[currentDepth] + 1;
                }
            
                for (var j = 0; j < area.depth; j++) {
                    numberPrefix = numberPrefix + depthBuffer["" + j] + ".";
                }          
                
                $(areaListItem).find(".area-list-item-number").text(numberPrefix + depthBuffer[currentDepth]);                                
                $(areaListItem).find(".area-list-item-title").text(area.title);                                                                                                                          
                                
                $(areaListItem).click(function() {
                    var areaId = $(this).prop("id").replace("area-list-item-", "");                    
                    $(areaList).find(".area-list-item").removeClass("active");
                    $("#area-content-viewer").find(".area-viewer").hide();                    
                    $(this).addClass("active");
                    $("#area-content-viewer").find("#area-viewer-" + areaId).show();
                                       
                    var currentArea = getAreaById(form, areaId);
                    if (!currentArea.completeStatus || currentArea.completeStatus == 0) {
                        currentArea.completeStatus = 1;
                        setAreaCompletedStatus(currentArea);
                    }                                                                                
                });                
                
                $(areaList).append($(areaListItem));
                $(areaListItem).css("padding-left", "+=" + (area.depth * AREA_DEPTH_PADDING_LEFT));
                
                var areaViewer = createAreaEditor(area, areaListItem);                                                                                                                                       
                
                if (i == 0) {
                    if (!area.completeStatus || area.completeStatus == 0) {
                        area.completeStatus = 1;                    
                    }
                    areaListItem.addClass("active");
                    areaViewer.show();
                }
                
                calculateAreaScore(area);                                                                                           
            }
        }
        
        if (viewerMode == VIEW_MODE) {
            $("#area-content-viewer").resizable({
                handles: "n",
                helper: "resizable-helper",
                stop: function(event, ui) {
                    if (container) {
                        initViewSize();
                    }
                    adjustAreaViewerHeight(ui.originalSize.height - ui.size.height);
                    saveAreaViewerSize();
                }
            });
        }                                             
    }

    function isAreaExcluded(form, area) {
        var res = false;
        if (area.manuallyExcluded) {
            res = true;         
        } else {
             if (area.excluded) {
                 var targetArea = getAreaById(form, area.excluded.areaId);
                 var targetQuestion = getQuestionById(targetArea, area.excluded.questionId);             
                 
                 var isAnswerSelected = false;
                 if (targetArea && targetQuestion) {                 
                     if (targetQuestion.results) {
                         for (var i = 0; i < targetQuestion.results.length; i++) {
                             if (targetQuestion.results[i].id == area.excluded.answerId) {
                                 isAnswerSelected = true;
                                 break;
                             }
                         }  
                     }
                 
                     if (area.excluded.excludedType == SELECTED && isAnswerSelected) {
                         res = true;       
                     } else {
                         if (area.excluded.excludedType == NON_SELECTED && !isAnswerSelected) {
                             res = true; 
                         }
                     }
                 }
             }
        }
        return res;
    }

    // proceeds with multiple calculations:
    //   - calculates areas scores and defines their completion
    //   - calculates form score
    //   - defines all not completed areas
    //   - shows submit button if all areas are completed
    function calculateForm(res) {
        formScore = 0;
        formFailed = false;
        var allBonuses = 0;
        var areaScoreSumm = 0;
        var areaWeightSumm = 0;
        formDetails = [];
        var formAreas = [];
        for (var j = 0; j < res.areas.length; j++) {
            var area = res.areas[j];           

            var formArea = {
                areaName: area.title,
                orderInForm: formDetails.length + 1,
                weight: area.weight,
                scorePercent: 0
            };
            formDetails.push(formArea);
            formAreas.push(formArea);

            var areaCalcRes = calculateAreaScore(area, true);
            var areaScore =  areaCalcRes.areaScore / 100;
            formArea.score = 100 * areaScore;
            formArea.failed = areaCalcRes.failed;

            var currentAreaExcluded = isAreaExcluded(res, area) || areaCalcRes.allNA;
            if (!currentAreaExcluded) {
                areaScoreSumm = areaScoreSumm + (areaScore * area.weight);
                areaWeightSumm = areaWeightSumm + area.weight;
            }

            // update area completion map
            // we can do it here as `calculateForm`
            // is invoked on each question change;
            // area complete status is calculated above in `calculateAreaScore`
            if (area.completeStatus === 2 || currentAreaExcluded) {
                delete areaNonCompletedMap[area.id]
            } else {
                areaNonCompletedMap[area.id] = true
            }

            for (var i = 0; i < area.questions.length; i++) {              
                var question = area.questions[i];                      
                if (question.results && question.results.length > 0) {
                    for (var k = 0; k < question.results.length; k++) {                                                     
                        if (area.failureForm && question.results[k].fails) {
                            formFailed = true;                                    
                        }
                                
                        if (!currentAreaExcluded && question.results[k].bonus) {
                            allBonuses = allBonuses + question.results[k].bonus; 
                        }
                    }
                }                                                                                    
            }                                                                               
        }

        if (areaWeightSumm > 0) {
            // area will also update in formDetails, because formDetails and formAreas have the same area object reference
            formAreas.forEach(function (area) {
                area.scorePercent = area.score * (area.weight / areaWeightSumm);
                area.score = Math.round(area.score);
            })
        }
        
        if (areaWeightSumm > 0 && (!formFailed || !nullifyFailedScore)) {
            formScore = Math.min(res.score, Math.round(res.score * (areaScoreSumm / areaWeightSumm)) + allBonuses);
        } else {
            formScore = 0;
        }

        // show/hide submit button depending on
        // viewer mode and form completion
        setSubmitButton();
    }

    function calculateAndShowFormScore() {
        if (!!parentPanel) {
            var res = cloneObject(form);
            calculateForm(res);

            var title = $('<span></span>')
                .append(formName + ': ' + formScore);

            if (formFailed) {
                title.append(getEvalFailedIndicator())
            }

            parentPanel.find('#evaluation-form-selector-button .ui-selectmenu-text').html(title);
        }
    }
    
    function calculateAreaScore(area, fullFormDetails) {
        var areaScore = 0;
        var areaFailed = false;
        var allNA = true;
        if (area.questions.length > 0 && viewerMode == VIEW_MODE) {
            var questionScoreSumm = 0;
            var questionWeightSumm = 0;
            var formQuestions = [];
            var ignoreNA = false;
              
            for (var i = 0; i < area.questions.length; i++) {
                var questionScore = 0;
                var question = area.questions[i];
                var selectedOptions = [];
                var itemPrototype = getPrototype(question);
                                       
                question.results = itemPrototype.results(question);             
                if (question.results && question.results.length > 0) {                                         
                    if (question.type != CHECKBOX_CONTROL) {
                        ignoreNA = (question.results[0].value == null);
                        if (question.results[0].value) {
                            questionScore = question.results[0].value / question.fullAnswersWeight;
                        }

                        if (question.results[0].fails) {
                            areaFailed = true;
                        }

                        if (fullFormDetails) {
                            var selectedAnswer = getAnswerById(question, question.results[0].id);
                            var optionScore = 100 * questionScore;
                            selectedOptions.push({
                                optionName: selectedAnswer.text,
                                score: Math.round(optionScore),
                                scorePercent: optionScore,
                                weight: question.results[0].value,
                                failed: question.results[0].fails
                            });
                        }
                    } else {
                        // checkbox
                        var answersValuesSumm = 0;
                        ignoreNA = false;
                        for (var j = 0; j < question.results.length; j++) {
                            if (question.results[j].value) {
                                answersValuesSumm = answersValuesSumm + question.results[j].value;
                            }

                            if (question.results[j].fails) {
                                areaFailed = true;
                            }

                            if (fullFormDetails) {
                                var selectedAnswer = getAnswerById(question, question.results[j].id);
                                var optionScore = question.results[j].value && question.fullAnswersWeight
                                    ? 100 * (question.results[j].value / question.fullAnswersWeight)
                                    : 0;
                                selectedOptions.push({
                                    optionName: selectedAnswer.text,
                                    score: Math.round(optionScore),
                                    scorePercent: optionScore,
                                    weight: question.results[j].value,
                                    failed: question.results[j].fails
                                });
                            }
                        }
                        questionScore = question.fullAnswersWeight
                            ? answersValuesSumm / question.fullAnswersWeight
                            : 0;
                    }

                    if (fullFormDetails) {
                        var orderInForm = formDetails[formDetails.length - 1].orderInForm + 1;
                        var formQuestion = {
                            areaName: area.title,
                            questionName: question.title,
                            comments: question.comments,
                            score: 100 * questionScore,
                            orderInForm: orderInForm,
                            weight: question.weight,
                            scorePercent: 0,
                            failed: areaFailed
                        };

                        formDetails.push(formQuestion);
                        formQuestions.push(formQuestion);

                        selectedOptions.forEach(function (selectedOption) {
                            var formOption = Object.assign({
                                areaName: area.title,
                                questionName: question.title,
                                comments: question.comments,
                                orderInForm: orderInForm,
                            }, selectedOption);
                            formDetails.push(formOption);
                            formQuestions.push(formOption);
                        })
                    }
                    if (!ignoreNA) {
                        allNA = false;
                        questionScoreSumm = questionScoreSumm + (questionScore * question.weight);
                        questionWeightSumm = questionWeightSumm + question.weight;
                    }
                } else {
                    questionWeightSumm = questionWeightSumm + question.weight;
                }
            }

            if (questionWeightSumm > 0) {
                // question will also update in formDetails, because formDetails and formQuestions have the same question object reference
                formQuestions.forEach(function (question) {
                    // skip options, map questions only
                    if (!question.optionName) {
                        question.scorePercent = question.score * (question.weight / questionWeightSumm);
                        question.score = Math.round(question.score);
                    }
                })
            }

            // exists selected answer
            if (questionWeightSumm > 0 && (!areaFailed || !nullifyFailedScore)) {
                areaScore = 100 * (questionScoreSumm / questionWeightSumm);
            } else {
                areaScore = 0;
            }
        }

        var roundedAreaScore = Math.round(areaScore);
        var areaItem =  $("#area-list-item-" + area.id);
        var areaViewer = $("#area-viewer-" + area.id);

        areaItem.find(".area-list-item-score").text(roundedAreaScore);
        areaViewer.find(".area-body-item-score").text(roundedAreaScore);

        if (areaFailed) {
            areaItem.find(".area-list-item-score").append(getEvalFailedIndicator());
        }

        setAreaCompletedStatus(area);

        if (allNA && area.completeStatus === 2) {
            return {
                areaScore: areaScore,
                allNA: true,
                failed: areaFailed
            }
        }

        return {
            areaScore: areaScore,
            allNA: false,
            failed: areaFailed
        }
    }

    function checkFormScore(res) {
        var minScore = res.minScore !== undefined && res.minScore !== null
            ? res.minScore
            : minFormScore;

        if (+formScore < +minScore) {
            formFailed = true;

            if (nullifyFailedScore) {
                formScore = 0;
            }
        }
    }
    
    function setAreaCompletedStatus(area) {
       var areaListItem = $("#area-list-item-" + area.id);
       $(areaListItem).removeClass(AREA_NON_ANSWERED_CLASS_NAME);
       $(areaListItem).removeClass(AREA_PRE_ANSWERED_CLASS_NAME);
       $(areaListItem).removeClass(AREA_ANSWERED_CLASS_NAME);
       
       var isHasCheckboxes = false;
       var isHasAnswered = false;
       var isHasNonAnswered = false;
       
       if (!area.completeStatus) {
           area.completeStatus = 0;
       }
        
       for (var i = 0; i < area.questions.length; i++) {              
           var question = area.questions[i];
           var itemPrototype = getPrototype(question);
                                       
           question.results = itemPrototype.results(question);
           if (question.type == CHECKBOX_CONTROL) {
               isHasCheckboxes = true;
           } else {
               if (question.results && question.results.length > 0) {                                         
                   isHasAnswered = true; 
               } else {
                   isHasNonAnswered = true;
               }
           }                                  
       }
       
       // At least area was opened
       if (isHasCheckboxes && area.completeStatus != 0) {          
           isHasAnswered = true;           
       }
       
       if (!isHasAnswered && isHasNonAnswered) {
           area.completeStatus = 0;
       } else {
           if (isHasAnswered && isHasNonAnswered) {
               area.completeStatus = 1;
           } else {
               if (isHasAnswered && !isHasNonAnswered) {
                   area.completeStatus = 2;
               }               
           }
       }          
              
       if (area.completeStatus == 0) {
           $(areaListItem).addClass(AREA_NON_ANSWERED_CLASS_NAME);
           $(areaListItem).find('.area-list-item-tooltip-filler').attr('title', translator.get('areaNotStarted'));
       } else {
           if (area.completeStatus == 1) {
               $(areaListItem).addClass(AREA_PRE_ANSWERED_CLASS_NAME);
               $(areaListItem).find('.area-list-item-tooltip-filler').attr('title', translator.get('areaPartiallyCompleted'));
           } else {
               $(areaListItem).addClass(AREA_ANSWERED_CLASS_NAME);
               $(areaListItem).find('.area-list-item-tooltip-filler').attr('title', translator.get('areaCompleted'));
           }
       }                
    }
    
    function isAllAreasCompleted() {
        return Object.keys(areaNonCompletedMap).length === 0;
    }

    function createAreaEditor(area, areaListItem) {

        var viewer = $("#area-viewer").clone().prop('id', "area-viewer-" + area.id);
        $("#area-content-viewer").append($(viewer));

        $(viewer).find(".area-body-item-number").text($(areaListItem).find(".area-list-item-number").text());
        $(viewer).find(".area-body-item-title").text($(areaListItem).find(".area-list-item-title").text());
        
        if (area.na) {
            var manuallyExcludedControlId = "area-manually-excluded-" + area.id;
            $(viewer).find(".area-excluded-manually-container").append($("<div class='form-check'><input type='checkbox' id='"
                    + manuallyExcludedControlId + "' value='" + manuallyExcludedControlId 
                    + "'/><label class='form-check-label' for='"
                    + manuallyExcludedControlId + "' title='" + translator.get("na") + "'>" 
                    + translator.get("na") + "</label></div>"));
            
            var manuallyExcludedControl = $(viewer).find("#" + manuallyExcludedControlId);
            if (area.manuallyExcluded) {            
                $(manuallyExcludedControl).attr("checked", "checked");
            }
            $(manuallyExcludedControl).change(function() {
                area.manuallyExcluded = $(manuallyExcludedControl).is(":checked");
                calculateAreaScore(area);
                setFormChanged(true);
                calculateAndShowFormScore();
            });               
        }                                                                                                                                                                                                   

        var itemsArea = $(viewer).find(".column-view-wrapper");

        var questions = area.questions;
        for (var i = 0; i < questions.length; i++) {
            var question = questions[i];
            var itemPrototype = getPrototype(question);
            var item = createQuestionViewer(question, area, itemPrototype);
            var itemLabel = $(item).find(".element-label .is-not-edit");        
            
            $(itemLabel).text($("#area-list-item-" + area.id + " .area-list-item-number").text() + "-" + (i + 1) + ". " + $(itemLabel).text());
            $(itemsArea).append($(item));                         
        }        
        viewer.hide();      
        
        return viewer;
    }
    
    function replaceURL(text) {
         return text.replace(/\b((http:\/\/)|(https:\/\/))?([a-zA-Z0-9\-]+\.)+[a-zA-Z]{2,}(\/[a-zA-Z0-9\-\.\_\~\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=]+)?\b/g, function(url) {
                    return '<a href="' + url +'" target="_blank">' + url +'</a>';
                }); 
    }
    
    function openComments(area, commentsButton) {
        $("#area-list-item-" + area.id).trigger("click");
        if (!$(commentsButton).hasClass("active")) { 
            $(commentsButton).trigger("click");
        }               
    }       

    function createQuestionViewer(question, area, itemPrototype) {
        var item = $(itemPrototype.templateId).clone().prop("id", question.id);
        itemPrototype.viewer(item, question, area);                                                                                       
        
        var commentsArea = $(item).find(".area-comment textarea");
        var commentsAreaReadonly = $(item).find(".area-comment div");
        $(commentsArea).attr('placeholder', translator.get('typeNote')); //set placeholder via js to prevent bugs in ie
        var commentsButton = $(item).find(".ico-comment");
        var attacmentsButton = $(item).find(".ico-attachment");
     
        $(item).hover(
            function() {                
                $(commentsButton).css("visibility", "visible");
                $(attacmentsButton).css("visibility", "visible");
            },
            function() {
                if(!question.attacments || !question.attacments.length) {
                    $(attacmentsButton).css("visibility", "hidden");
                }
                if (!question.comments) {
                    $(commentsButton).css("visibility", "hidden");                    
                }
            }
        );
        $(attacmentsButton).css("visibility", question.attacments && question.attacments.length ? "visible" : "hidden");
                  
        if (question.comments) {
            var commentsText = $.trim(question.comments);
            $(commentsArea).val(commentsText);
            $(commentsAreaReadonly).html(convertUrlsToTags(commentsText));

            if (timelineControl && question.commentsTime && question.commentsTime >= 0 && commentsText) {
                timelineControl.addNote(question.commentsTime, commentsText, function() {
                    openComments(area, commentsButton);
                });
            }            
            $(commentsButton).css("visibility", "visible");
        } else {
            $(commentsButton).css("visibility", "hidden"); 
        }
                
        $(commentsArea).bind("input propertychange", function() {
             var commentsText = $.trim($(commentsArea).val());
             $(commentsAreaReadonly).html(convertUrlsToTags(commentsText));
             
             if (timelineControl) {
                 var commentsTime = question.commentsTime ? question.commentsTime : timelineControl.getCurrentTime();
                 if (commentsText && commentsTime >= 0) {
                     timelineControl.addNote(commentsTime, commentsText, function() {
                         openComments(area, commentsButton);             
                     });
                     question.commentsTime = commentsTime;
                 } else if (!commentsText) {
                     if (question.comments && question.commentsTime >= 0) {
                         timelineControl.removeNote(question.commentsTime);
                     }
                     question.commentsTime = null;
                 }
             } else {
                 question.commentsTime = null;
             }                        
             question.comments = commentsText;
             setFormChanged(true);
        });

        $(commentsArea).on('keyup', function(event) {
            if (event.keyCode === 13) {
                $(commentsArea).height(getCommentsHeight(commentsArea));
            }
        });

        $(commentsArea).on('paste', function(event) {
            var pastedText = (!event.originalEvent ? false : event.originalEvent.clipboardData || window.clipboardData).getData('text');

            if (!!pastedText) {
                var newLinesCount = (pastedText.match(/\n/g) || []).length;

                if (newLinesCount > 0) {
                    for (var i = 0; i < newLinesCount; i++) {
                        if ($(commentsArea).height() < MAX_COMMENTS_AREA_HEIGHT) {
                            $(commentsArea).height(getCommentsHeight(commentsArea));
                        } else {
                            break;
                        }
                    }
                }
            }
        });
        
        var attacmentsList = $(item).find(".area-attacments");
       
        if (!question.attacments) {
            question.attacments = [];
        }
      
        for (var i = 0; i < question.attacments.length; i++) {
            var attacment = question.attacments[i];
            createNewAttachments(attacmentsList, question, attacment);
        }     
        
        var attachmentFileSelector = $(attacmentsList).find(".attachment-file-selector");
        var attachmentAddButton = $(attacmentsList).find(".attachment-list-item-add");        
        $(attachmentAddButton).click(function() {                  
             $(attachmentFileSelector).trigger("click");                                                 
        });
        
        $(attachmentFileSelector).change(function() {
            var files = $(attachmentFileSelector).get(0).files;
            if (files.length != 1) {
                return false;
            }
            var file = files.item(0);                       
            
            if (allAttachmentsCount > MAX_ATTACHMENT_COUNT) {
                alert(translator.get("limitAttachmentsCount"));
                return false;
            } else {
                if (file.size > MAX_ATTACHMENT_SIZE) {
                    alert(translator.get("limitAttachmentsSize"));
                    return false;
                }   
            }
            
            var reader = new FileReader();
            reader.onload = function (event) {
                var content = event.target.result;
                var commaIndex = content.indexOf(",");                
                if (commaIndex > -1) {
                    content = content.substr(commaIndex + 1);
                }
                              
                var newAttachmentId = (form.id + "-") + new Date().getTime();
                                           
                var newAttachment = {
                    id: newAttachmentId,
                    name: file.name,
                    size: file.size,
                    type: file.type
                };
                question.attacments.push(newAttachment);                
                
                var newAttachmentContent = {
                    id: newAttachmentId,
                    name: file.name,
                    size: file.size,
                    type: file.type,
                    content: content
                };                
                newAttachmentsList.push(newAttachmentContent);
                
                createNewAttachments(attacmentsList, question, newAttachment);
                
                if (!question.comments) {
                    question.comments = file.name;
                    openComments(area, commentsButton);

                    $(commentsArea).val(question.comments);
                    $(commentsAreaReadonly).html(convertUrlsToTags(question.comments));
                    
                    if (timelineControl) {
                        var commentsTime = question.commentsTime ? question.commentsTime : timelineControl.getCurrentTime();
                        if (commentsTime >= 0) {
                            timelineControl.addNote(commentsTime, question.comments, function() {
                                openComments(area, commentsButton);             
                            });
                            question.commentsTime = commentsTime;
                        }
                    } else {
                        question.commentsTime = null;
                    }                   
                }
                setFormChanged(true);                                
            };
            
            reader.readAsDataURL(file);

            $(attachmentFileSelector).val('');
        });        
                         
        return item;
    }
    
    this.showAttachments = function (el) {
        if (viewerMode == VIEW_MODE) {
            var $el = $(el);
            var attachmentsList = $el.closest(".element-area").find(".area-attacments");

            if ($el.hasClass("active")) {
                $el.removeClass("active");
                attachmentsList.slideUp(100);
            } else {
                var attachmentsCount = attachmentsList.find("ul").children().length;
                var attachmentFileSelector = attachmentsList.find(".attachment-file-selector");
                var openAreaAttachments = function () {
                    $el.addClass("active");
                    attachmentsList.slideDown(100);
                    attachmentFileSelector.off("change", openAreaAttachments);
                    attachmentFileSelector.data('changeEventHandlerOpenAreaAttachments', null);
                };

                if (readOnly || attachmentsCount > 0) {
                    openAreaAttachments();
                } else {
                    attachmentFileSelector.click();

                    // attach only if this element does not have an event listener yet
                    if (!attachmentFileSelector.data('changeEventHandlerOpenAreaAttachments')) {
                        attachmentFileSelector.data('changeEventHandlerOpenAreaAttachments', openAreaAttachments);
                        attachmentFileSelector.change(openAreaAttachments);
                    }
                }
            }
        }
    };

    this.showComment = function (el) {
        if (viewerMode == VIEW_MODE) {
            var $el = $(el);
            var $commentsArea = $el.closest(".element-area").find(".area-comment");

            if ($el.hasClass("active") ) {
                $el.removeClass("active");
                $($commentsArea).slideUp(100);
            } else {
                $el.addClass("active");
                $($commentsArea).slideDown({
                    duration: 100,
                    complete: function () {
                        var $areaContent = $('#area-content-viewer');
                        var areaBound = $areaContent[0].getBoundingClientRect();
                        var commentBound = $commentsArea[0].getBoundingClientRect();
                        var diff = commentBound.bottom - areaBound.bottom;
                        if (diff > 0) {
                            var scrollTo = $areaContent.scrollTop() + diff;
                            $areaContent.animate({scrollTop: scrollTo}, 100);
                        }
                        $($commentsArea).find("textarea").focus();
                    }
                });
            }
        }
          
    };
    
    function createNewAttachments(attacmentsList, question, attacment) {
        allAttachmentsCount = allAttachmentsCount + 1;
        allAttachmentsSize = allAttachmentsSize + attacment.size;                     
                
        var attacmentsListUL = $(attacmentsList).find("ul");       
        var attacmentsItem = $("#attachment-list-item-template").clone().prop("id", "attachment-item-" + attacment.id);
        var attachmentLabel = $(attacmentsItem).find(".attachment-list-item-label");                
        $(attachmentLabel).text(attacment.name);
        $(attachmentLabel).click(function() {
            var id = $(this).closest("div").prop("id").replace("attachment-item-", "");
            if (isNewAttachment(id)) {                   
                alert(translator.get("youCannotDownloadBeforeSaving"));
            } else {                
                externalInterface.downloadAttachment(evaluationId, id);
            }                                               
        }); 
                
        var attachmentRemoveButton = $(attacmentsItem).find(".attachment-list-item-remove"); 
        $(attachmentRemoveButton).click(function() {                  
            var id = $(this).closest("div").prop("id").replace("attachment-item-", "");             
            if (isNewAttachment(id)) {            
                for (var j = 0; j < newAttachmentsList.length; j++) {
                    if (newAttachmentsList[j].id == id) {
                        newAttachmentsList.splice(j, 1);
                        break;
                    }
                }                 
            }
                        
            allAttachmentsCount = allAttachmentsCount - 1;            
             
            for (var i = 0; i < question.attacments.length; i++) {
                if (question.attacments[i].id == id) {
                    allAttachmentsSize = allAttachmentsSize - question.attacments[i].size;      
                    question.attacments.splice(i, 1);                   
                    $(this).closest("li").remove();
                    break;
                }
            }                                    
        });
                
        var attacmentsListLI = $("<li></li>");
        $(attacmentsListLI).append($(attacmentsItem));
        $(attacmentsListUL).append($(attacmentsListLI));
    }
    
    function isNewAttachment(id) {
        var isNew = false;
        for (var i = 0; i < newAttachmentsList.length; i++) {
            if (newAttachmentsList[i].id == id) {
                isNew = true;
                break;
            } 
        }
        
        return isNew; 
    }

    function createCheckboxViewer(item, question, area) {
        var checkboxControl = $(item).find(".checkbox-control-label");
        var titleControlLabel = $(item).find(".checkbox-control-title-label");
        $(titleControlLabel).text(question.title);
              
        question.fullAnswersWeight = 0;      

        if (question.answers && question.answers.length > 0) {
            for (var i = 0; i < question.answers.length; i++) {
                var answer = question.answers[i];
                var id = answer.id;                
                
                var option = $("<div class='form-check'><input type='checkbox' id='"
                    + id + "' value='" + id + "'/><label class='form-check-label' for='"
                    + id + "' title='" + getSafeTextForHtml(answer.text) + "'>" + answer.text + "</label></div>");

                $(checkboxControl).append(option);
                
                if (answer.value) {
                    question.fullAnswersWeight = question.fullAnswersWeight + answer.value;
                }                                               
            }
        }

        if (question.results && question.results[0]) {
            for (var j = 0; j < question.results.length; j++) {
                if (question.results[j].id) {
                    $(checkboxControl).find("#" + question.results[j].id).attr("checked", "checked");
                }
           }
        }

        showQuestionFailedLabels(item, question);
        $(checkboxControl).change(function() {
            calculateAreaScore(area);
            setFormChanged(true);
            calculateAndShowFormScore();
            showQuestionFailedLabels(item, question);
        });
    }

    function createRadioViewer(item, question, area) {
        var radioControl = $(item).find(".radio-control-label");
        var titleControlLabel = $(item).find(".radio-control-title-label");
        $(titleControlLabel).text(question.title);
              
        question.fullAnswersWeight = 0;
        var maxAnswerValue = 0;

        if (question.answers && question.answers.length > 0) {
            for (var i = 0; i < question.answers.length; i++) {
                var answer = question.answers[i];
                var id = answer.id;
                var className;

                if (question.type == RADIO_HORIZONTAL_CONTROL) {
                    className = "form-check-horizontal";
                    $(radioControl).addClass("form-check-horizontal-fieldset");
                } else {
                    className = "form-check";
                }

                var option = $("<div class='" + className + "'><input type='radio' name='" + question.id + "' id='"
                    + id + "' value='"+ id + "'/><label class='form-check-label' for='"
                    + id + "' title='" + getSafeTextForHtml(answer.text) + "'>" + answer.text + "</label></div>");

                if (question.results && question.results[0]) {
                    if (id == question.results[0].id) {
                        $(option).find("#" + id).attr("checked", "checked");
                    }
                }

                $(radioControl).append(option);
                
                if (answer.value && answer.value > maxAnswerValue) {
                    maxAnswerValue = answer.value;
                    question.fullAnswersWeight = answer.value;
                }
            }
        }

        showQuestionFailedLabels(item, question);
        $(radioControl).change(function() {
            calculateAreaScore(area);
            setFormChanged(true);
            calculateAndShowFormScore();
            showQuestionFailedLabels(item, question);
        });
    }

    function createDropdownViewer(item, question, area) {
        var dropdownControl = $(item).find(".dropdown-control-label");
        var titleControlLabel = $(item).find(".dropdown-control-title-label");
        $(titleControlLabel).text(question.title);
              
        question.fullAnswersWeight = 0;    
        var maxAnswerValue = 0;
        
        if (question.answers && question.answers.length > 0) {
            var option = $("<option hidden disabled selected value></option>");
            $(dropdownControl).append(option);
                                
            for (var i = 0; i < question.answers.length; i++) {
                var answer = question.answers[i];
                option = $("<option value='" + answer.id + "' title='" + getSafeTextForHtml(answer.text) + "'>" + answer.text + "</option>");
                if (question.results && question.results[0]) {
                    if (answer.id == question.results[0].id) {
                        option.attr("selected", "true");
                    }
                }
                $(dropdownControl).append(option);
                
                if (answer.value && answer.value > maxAnswerValue) {
                    maxAnswerValue = answer.value;
                    question.fullAnswersWeight = answer.value;
                }
            }
        }

        showQuestionFailedLabels(item, question);
        $(dropdownControl).change(function() {
            calculateAreaScore(area);
            setFormChanged(true);
            calculateAndShowFormScore();
            showQuestionFailedLabels(item, question);
        });
    }

    function showQuestionFailedLabels(item, question) {
        $(item).find('.eval-failed-indicator').remove();

        if (!!question.results && question.results.length) {
            for (var i = 0; i < question.results.length; i++) {
                if (question.results[i].fails) {
                    if (question.type === DROPDOWN_CONTROL) {
                        $(item).find('option[value="' + question.results[i].id + '"]')
                            .closest('.element-child-item').append(getEvalFailedIndicator(true));
                    } else {
                        $(item).find('#' + question.results[i].id)
                            .closest('.element-child-item').append(getEvalFailedIndicator(true));
                    }
                }
            }
        }
    }
  
    function saveCheckboxViewer(question) {
        var results = [];
        var item = $("#" + question.id);
        var selectedAnswerIds = $(item).find("input:checked");
        for (var i = 0; i < selectedAnswerIds.length; i++) {
            var answer = getAnswerById(question, $(selectedAnswerIds[i]).val());
            results.push({
                id: answer.id,
                value: answer.value,
                bonus: answer.bonus,
                fails: answer.fails 
            });          
        }
        return results;
    }
    function saveRadioViewer(question) {
        var results = [];
        var item = $("#" + question.id);
        
        var selectedAnswer = $(item).find("input[name='" + question.id + "']:checked");
        if (selectedAnswer.length) {
            var selectedAnswerId = $(selectedAnswer).val();
            var answer = getAnswerById(question, selectedAnswerId);
            results.push({
                id: answer.id,
                value: answer.value,
                bonus: answer.bonus,                
                fails: answer.fails  
            });
        }
        return results;
    }
    function saveDropdownViewer(question) {
        var results = [];
        var item = $("#" + question.id);
        var field = $(item).find(".dropdown-control-label");
        var selectedAnswer = $(field).val();
        
        if (selectedAnswer) {
            var answer = getAnswerById(question, selectedAnswer);
            results.push({
                id: answer.id,
                value: answer.value,
                bonus: answer.bonus,
                fails: answer.fails             
            });
        }
        return results;
    }    

    // Only for debug mode. Delete this!
    function download(json) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/json;charset=utf-8,' + encodeURIComponent(json));
        element.setAttribute('download', "data.json");
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }

    function getCommentsHeight(commentsArea) {
        return Math.min(commentsArea.outerHeight(true), MAX_COMMENTS_AREA_HEIGHT);
    }

    this.exportData = function(debugMode) {
        var res = cloneObject(form);      

        for (var j = 0; j < res.areas.length; j++) {
            var area = res.areas[j];                                   
            for (var k = 0; k < area.questions.length; k++) {
                var question = area.questions[k];
                var itemPrototype = getPrototype(question);
                question.results = itemPrototype.results(question);                                                         
            }
        }
        
        calculateForm(res);
        checkFormScore(res);
        res.nullifyFailedScore = nullifyFailedScore;

        if (debugMode) {                 
            download(JSON.stringify(res));             
        }

        return res;
    };

    this.getFormIdAndName = function() {
        return {id: formId, name: formName};
    };

    this.setEvaluationId = function(id) {
        evaluationId = id;
    };

    this.getEvaluationId = function() {
        return evaluationId;
    };

    this.getPermissions = function() {
        return permissions;
    };

    this.load = function(data, style, callback, showFormScore) {
        evaluationId = data.id;
        formId = data.formId;
        formName = data.formName;
        permissions = data.permissions;
        form = data.form;
        formScore = 0;
        formDetails = [];
        formFailed = false;
        allAttachmentsCount = 0;
        allAttachmentsSize = 0;
        newAttachmentsList = [];
        areaNonCompletedMap = {};
        nullifyFailedScore = isNullifyFailedScore(form, data.status, permissions);
        
        if ((!data.id || form.refOnly) && form.areas) {
            delete form.refOnly;
            var areaList = data.linkedAreaList;            
                        
            if (areaList) {                    
                for (var i = 0; i < form.areas.length; i++) {
                    for (var j = 0; j < areaList.length; j++) {               
                        if (areaList[j].id == form.areas[i].id) {
                            var areaLayout = JSON.parse(areaList[j].layout);
                            var clonedArea = $.extend(true, {}, areaLayout.area);
                            clonedArea.id = areaList[j].id;
                            clonedArea.depth = form.areas[i].depth; 
                            if (!clonedArea.depth) {
                                clonedArea.depth = 0;
                            }
                            clonedArea.failureForm = form.areas[i].failureForm;
                            clonedArea.weight = form.areas[i].weight;                                                       
                            clonedArea.na = form.areas[i].na;
                            clonedArea.excluded = form.areas[i].excluded;
                            clonedArea.completeStatus = 0;                                                       
                                                                                 
                            form.areas[i] = clonedArea;                                 
                            break;                                    
                        }
                    }                            
                }                                                                  
            }  
        }        

        $(".main-view-area").removeClassWild("form-style-*");
        $(".main-view-area").addClass(style);

        // Hide all buttons by default
        hideAllButtons();

        if(viewerMode === PREVIEW_MODE) {
            $(".area-list-item-score").hide();
            $(".area-body-item-score").hide();
            $(".element-area .on-hover-controls").hide();
        }

        createViewer();

        if (showFormScore) {
            calculateAndShowFormScore();
        }

        if (callback) {
            callback();
        }
    }

    function isNullifyFailedScore(form, status, permissions) {
        if (!!permissions && (!status || status === EVAL_RESULTS_STATUS_SAVED || status === EVAL_RESULTS_STATUS_ASSIGNED)) {
            return permissions.nullifyFailedScore;
        } else if (form.nullifyFailedScore !== undefined) {
            return form.nullifyFailedScore;
        }

        return true;
    }

    this.isFormChanged = function () {
        return isFormChanged;
    };

    this.setFormChanged = setFormChanged;
    
    function setSubmitButton() {
        if (viewerMode == VIEW_MODE) {       
            if (isAllAreasCompleted()) {
                $("#form-editor-button-submit").show();
            } else {
                $("#form-editor-button-submit").hide();
            }
        }       
    }

    function setFormChanged(flag) {
        isFormChanged = flag;
        if (flag) {
            $("#form-viewer-button-save").removeAttr("disabled");
        } else {
            $("#form-viewer-button-save").attr("disabled", "disabled");
        }
    }

    this.saveForm = function () {             
        externalInterface.save(this, function () {                                   
            newAttachmentsList = [];
            formFailed = false;
            setFormChanged(false);
        });           
    };
    
    this.submitForm = function () {
        if (isAllAreasCompleted()) {
            var $submitBtn = $("#form-editor-button-submit");
            $submitBtn.prop('disabled', true);
            showBtnLoad($submitBtn);
            externalInterface.submit(this, function () {                                       
                newAttachmentsList = [];
                formFailed = false;
                hideBtnLoad($submitBtn);
                setFormChanged(false);
            });       
        }
    };

    this.setReadOnly = function () {
       readOnly = true;
       $("#form-viewer-button-save").attr("disabled", "disabled");
       $("#form-editor-button-submit").attr("disabled", "disabled");     
       $("#layout-parent-box-viewer :input").prop("disabled", true);
       $('#layout-parent-box-viewer').find('label').css('cursor', 'default');
       $("#layout-parent-box-viewer").find(".slider-control-label").slider("option", "disabled", true);
       $("#layout-parent-box-viewer").find(".number-spinner").spinner("option", "disabled", true);

       changeImgAltAndTitle($(".ico-attachment img"), "showAttachments");
       changeImgAltAndTitle($(".ico-comment img"), "showComments");

       $(".attachment-list-item-add").hide();
       $(".attachment-list-item-remove").hide();
       $(".area-comment textarea").hide();
       $(".area-comment div").show();
    };

    this.isReadOnly = function () {
        return readOnly;
    };
    
    this.setTimelineControl = function (timelineCtrl) {
        timelineControl = timelineCtrl;
    } 
    
    this.getFormScore = function () {
        return formScore;
    }
    
    this.getFormDetails = function () {
        return formDetails;
    }        
    
    this.isFormFailed = function () {
        return formFailed;
    }        
    
    this.getNewAttachmentsList = function () {
        return newAttachmentsList;
    }
    
    function hideAllButtons() {
        $(".main-view-area").find(".rightColCaption button").hide();
    }

    this.setupAllEvalButtons = function (permissions) {
        if (permissions.canConfirmEvaluation) {
            this.showConfirmationButtons();
        } else {
            this.hideConfirmationButtons();
        }
        if (permissions.canReopenEvaluation) {
            this.showReopenButton();
        } else {
            this.hideReopenButton();
        }
        if (permissions.canDeleteEvaluation) {
            this.showDeleteButton();
        } else {
            this.hideDeleteButton();
        }
    };

    this.setupEvaluationFormButtons = function (permissions) {
        if (permissions.canMakeEvaluation) {
            this.showEvaluationButtons();
        } else {
            this.hideEvaluationButtons();
        }
        if (permissions.canConfirmEvaluation) {
            this.showConfirmationButtons();
        } else {
            this.hideConfirmationButtons();
        }
        if (permissions.canAssignEvaluation) {
            this.showAssignButtons();
        } else {
            this.hideAssignButtons();
        }
        if (permissions.canDeleteEvaluation) {
            this.showDeleteButton();
        } else {
            this.hideDeleteButton();
        }
    };

    this.setupAllEvalInfo = function (evalInfo) {
        $("#eval-info").show();

        var evaluationDate = formatDate(new Date(evalInfo.evaluationTime));
        var evalInfoEvaluatedBy = translator.get('evalInfoEvaluatedBy', evalInfo.evaluatorName, evaluationDate);
        $("#eval-info-evaluator").text(evalInfoEvaluatedBy);

        var confirmationDate = formatDate(new Date(evalInfo.confirmationTime));

        if (evalInfo.status === EVAL_RESULTS_STATUS_CONFIRMED) {
            var evalInfoConfirmedBy;

            if (!evalInfo.confirmedByName) {
                evalInfoConfirmedBy = evalInfo.type === EVAL_RESULTS_TYPE_CALIBRATION
                    ? translator.get('evalInfoCompletedOn', confirmationDate)
                    : translator.get('evalInfoConfirmedOn', confirmationDate);
            } else {
                evalInfoConfirmedBy = translator.get('evalInfoConfirmedBy', evalInfo.confirmedByName, confirmationDate);
            }
            $("#eval-info-acceptor").text(evalInfoConfirmedBy);
        } else if (evalInfo.status === EVAL_RESULTS_STATUS_DISPUTED) {
            var evalInfoRejectedBy;

            if (!evalInfo.confirmedByName) {
                evalInfoRejectedBy = !evalInfo.rejectionComment
                    ? translator.get('evalInfoRejectedOn', confirmationDate)
                    : translator.get('evalInfoRejectedOnWithComment', confirmationDate, evalInfo.rejectionComment);
            } else {
                evalInfoRejectedBy = !evalInfo.rejectionComment
                    ? translator.get('evalInfoRejectedBy', evalInfo.confirmedByName, confirmationDate)
                    : translator.get('evalInfoRejectedByWithComment', evalInfo.confirmedByName, confirmationDate, evalInfo.rejectionComment);
            }

            $("#eval-info-acceptor").text(evalInfoRejectedBy);
        } else {
            $("#eval-info-acceptor").empty();
        }
    };

    this.setupEvaluationFormInfo = function () {
        $('#eval-info-evaluator').empty();
        $("#eval-info-acceptor").empty();
        $("#eval-info").hide();
    };

    this.hideAllButtons = function () {
        hideAllButtons();
    };
    
    this.showEvaluationButtons = function () {
       $("#form-viewer-button-save").show();
        setSubmitButton();
    };
    this.hideEvaluationButtons = function () {
        $("#form-viewer-button-save").hide();
        $("#form-editor-button-submit").hide();
    };

    this.showAssignButtons = function () {
        $("#form-editor-button-assign").show();
        $("#form-editor-button-calibrate").show();
    };
    this.hideAssignButtons = function () {
        $("#form-editor-button-assign").hide();
        $("#form-editor-button-calibrate").hide();
    };
    
    this.showConfirmationButtons = function () {
       $("#form-editor-button-accept").show();
       $("#form-editor-button-reject").show();     
    };
    this.hideConfirmationButtons = function () {
        $("#form-editor-button-accept").hide();
        $("#form-editor-button-reject").hide();
    };

    this.showDeleteButton = function () {
        $("#form-editor-button-delete").show();
    };
    this.hideDeleteButton = function () {
        $("#form-editor-button-delete").hide();
    };

    this.showReopenButton = function() {
        $("#form-editor-button-reopen").show();
    };

    this.hideReopenButton = function() {
        $("#form-editor-button-reopen").hide();
    };

    this.showThankYouMsg = function () {
        $("#form-editor-button-thanks").show();
    }
};

