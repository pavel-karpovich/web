

var externalInterface;

var surveyFormEditor = new function () {

    const CONTROL_IN_CONTAINER_CLASS_NAME = "control-in-container";
    const COPY_OF_PREFIX = "Copy of ";
    const CUSTOM_CSS_CLASS_TEMPLATE = "." + CUSTOM_CSS_CLASS_NAME + " {\n }";

    var DEFAULT_AREA = {
        id: 2,
        title: "Area0",         
        questions: []
    };

    var DEFAULT_FORM = {
        id: 1,
        title: "Customer Survey",             
		submit: "Submit",
        image: "",
        customCSS: CUSTOM_CSS_CLASS_TEMPLATE,   
        areas: []
    };
    
    $.widget("custom.boldselectmenu", $.ui.selectmenu, {        
        _renderItem: function(ul, item) {
            var li = $("<li>"),
            wrapper = $("<div>", { text: item.label });      
            if (isPageNotEmpty(item.value)) {
                $(wrapper).css("font-weight", "bold");
            }
 
            return li.append(wrapper).appendTo(ul);
        }        
   });
  
    var forms = [];
    var itemIndex = new Date().getTime() / 1000 | 0;
    var controlsMap = [];
    var formName;
    var isFormChanged = false;
    var initiated = false;
    var customSurveyFields = [];
    var languages; 
    var currentLanguage = DEFAULT_SURVEY_LANGUAGE_CODE;
    var isCurrentPageChanged = false;   

    function initViewSize() {
        var headerHeight = 0;
        if($(".tempButtons").is(":visible")) {
            headerHeight = $(".tempButtons").height();
        }
        var winHeight = $("body").height();
        var fullHeight = winHeight - headerHeight;
        $(".layout-parent-box-wrapper").height(fullHeight);
        $("#layout-parent-box").height(fullHeight - 16);
        $(".actions-list").height(fullHeight);              
    }
    
    function checkLeftColumnHeight() {
       var leftColumnHeight = $(".actions-col").height();
       var appNameHeight = $(".actions-col .app-name").height();   
       var titleHeight = $(".actions-col .area-title").height() + 1;     
       var resHeight = leftColumnHeight - appNameHeight - titleHeight * 2;
       return resHeight;
    }        
     
    this.init = function () {       

        initViewSize();           
        $(window).resize(function(){
            initViewSize();                
        });
                
        form = createDefaultForm();
                 
        form.pages = {};
        form.pages[DEFAULT_SURVEY_LANGUAGE_CODE] = {
            title: form.title,
			submit: form.submit,
            areas: $.extend(true, {}, form.areas) 
        };                   

        translator.translate($(".main-site-area"));

        initControlTemplates();

        $(".main-site-area").addClass($("#form-style-selector").val());
        
        var languageSelector = $(".language-selector");   
              
        $(languageSelector).boldselectmenu({
                width: 200,
                open: function(event, ui) {

                },
                change: function(event, data) {                
                    var newCurrentLanguage = data.item.value;
             
                    if (isCurrentPageChanged || currentLanguage == DEFAULT_SURVEY_LANGUAGE_CODE) {
                        form.pages[currentLanguage] = {
                            title: form.title,
							submit: form.submit,
                            areas: $.extend(true, {}, form.areas) 
                        };
                                                                    
                        isCurrentPageChanged = false;
                    }

                    if (form.pages[newCurrentLanguage]) {
                        form.title = form.pages[newCurrentLanguage].title;
						form.submit = form.pages[newCurrentLanguage].submit;
                        form.areas = $.extend(true, {}, form.pages[newCurrentLanguage].areas);
                    } else if(form.pages[currentLanguage]) {
                        form.title = form.pages[currentLanguage].title;
						form.submit = DEFAULT_FORM.submit;
                        form.areas = $.extend(true, {}, form.pages[currentLanguage].areas);
                    } else {
                        form.title = form.pages[DEFAULT_SURVEY_LANGUAGE_CODE].title;
						form.submit = DEFAULT_FORM.submit;
                        form.areas = $.extend(true, {}, form.pages[DEFAULT_SURVEY_LANGUAGE_CODE].areas);
                    }
            
                    createFormEditor(form.id);                     
            
                    currentLanguage = newCurrentLanguage;
                    surveyFormEditor.refreshLanguages();
                    isCurrentPageChanged = false;
                }
        });
                             
   	    createFormEditor(form.id);   	                     
        initiated = true;   	       	         	       	    	                                
    }  
      
    function isPageNotEmpty(language) {
       return form.pages && form.pages[language];
    }  
      
    function getNewId() {
        itemIndex = itemIndex + 1;
        return itemIndex;
    }

    function createDefaultForm() {
        var form = cloneObject(DEFAULT_FORM);
        var area = createDefaultArea();       

        form.id = getNewId();
        form.areas.push(area);        
        return form;
    }
    
     function createDefaultArea() {
        var area = cloneObject(DEFAULT_AREA);
        area.id = getNewId();
        return area;
    }

    function copyQuestion(source, withOldTitle) {
        var question = cloneObject(source);
        question.id = getNewId();

        question.answers = [];
        if (source.answers) {
            for (var x = 0; x < source.answers.length; x++) {
                var sourceAnswer = source.answers[x];
                var answer = cloneObject(sourceAnswer);
                answer.id = getNewId();
                question.answers.push(answer);
            }
        }

        if (!withOldTitle) {
            if (question.title.indexOf(COPY_OF_PREFIX) == -1) {
                question.title = COPY_OF_PREFIX + question.title;
            }
        }
        return question;
    }
    
    function fillQuestionFieldDropdown(questionField) {
        if (customSurveyFields) {
            for (var i = 0; i < customSurveyFields.length; i++) {
                var option = $("<option title='" + customSurveyFields[i] + "'>" + customSurveyFields[i] + "</option>");
                $(questionField).append(option);
            }           
        } 
    }
    
    this.editFormProperties = function() {
        var index = new Date().getMilliseconds(); 
        var editor = $("#edit-form-properties").clone().prop("id", "#edit-form-properties-" + index);
      
        $(editor).find("[id]").each(function() {
            $(this).prop("id", $(this).prop("id") + index);
        });
        $(editor).find("[for]").each(function() {
            $(this).prop("for", $(this).prop("for") + index);
        });                                                           

        var formCustomCssControl = $(editor).find(".form-custom-css");
        if (form.customCSS) {
            $(formCustomCssControl).val(form.customCSS);        
        } else {
            $(formCustomCssControl).val(CUSTOM_CSS_CLASS_TEMPLATE);        
        }              
              
        var saveButton = $(editor).find(".question-save");
        $(saveButton).click(function() {
            form.customCSS = $(formCustomCssControl).val();
            setFormChanged(true);
            $(editor).dialog("close");
        });
        
        var cancelButton = $(editor).find(".question-cancel");
        $(cancelButton).click(function() {            
            $(editor).dialog("close");           
        });                
        
        $(editor).dialog({
            title: null,
            width: 900,          
            modal: true,
            open: function(event, ui) {
                $(".ui-dialog-titlebar").remove();                 
            }
         }).on("keydown", function(evt) {
             if (evt.keyCode === $.ui.keyCode.ESCAPE) {
                 $(cancelButton).trigger("click");
                 evt.stopPropagation();
             }                             
         });                            
    }
    
    function initStaticTextEditor(question, setter) {                                              
    
        var clonedQuestion = $.extend(true, {}, question);                                        
                
        var index = new Date().getMilliseconds(); 
        var questionEditor = $("#edit-static-text").clone().prop("id", "#edit-static-text-" + index);
      
        $(questionEditor).find("[id]").each(function() {
            $(this).prop("id", $(this).prop("id") + index);
        });
        $(questionEditor).find("[for]").each(function() {
            $(this).prop("for", $(this).prop("for") + index);
        });                                                           

        var questionTitle = $(questionEditor).find(".question-title");
        $(questionTitle).val(clonedQuestion.title);              
              
        var saveButton = $(questionEditor).find(".question-save");
        $(saveButton).click(function() {                       
            if ($(questionTitle).val()) {                            
                clonedQuestion.title = $(questionTitle).val();                                                                                                                 
                setter(clonedQuestion);                                
                $(questionEditor).dialog("close");
            } else {
                $(questionTitle).css("border-color", "red");  
            }
        });
        
        var cancelButton = $(questionEditor).find(".question-cancel");
        $(cancelButton).click(function() {
            $(questionTitle).css("border-color", "");                  
            $(questionEditor).dialog("close");           
        }); 
        
        $(questionEditor).keypress(function(e) {
            if (e.keyCode == KEYCODE_ENTER) {
                $(saveButton).trigger("click");
            } else {
                if (e.keyCode == KEYCODE_ESC) {
                    $(cancelButton).trigger("click");                  
                }
            }
        });
        
        $(questionEditor).dialog({
            title: null,
            width: 900,
            modal: true,
            resizable: false,
            draggable: false,  
            open: function(event, ui) {
                $(".ui-dialog-titlebar").remove();                 
            }
         }).on("keydown", function(evt) {
             if (evt.keyCode === $.ui.keyCode.ESCAPE) {
                 $(cancelButton).trigger("click");
                 evt.stopPropagation();
             }                             
         });
         
         $(questionEditor).dialog().parent().draggable();                          
    }
    
    function initNotesEditor(question, setter) {                                              
    
        var clonedQuestion = $.extend(true, {}, question);                                        
                
        var index = new Date().getMilliseconds(); 
        var questionEditor = $("#edit-notes").clone().prop("id", "#edit-notes-" + index);
      
        $(questionEditor).find("[id]").each(function() {
            $(this).prop("id", $(this).prop("id") + index);
        });
        $(questionEditor).find("[for]").each(function() {
            $(this).prop("for", $(this).prop("for") + index);
        });                                                           

        var questionTitle = $(questionEditor).find(".question-title");
        $(questionTitle).val(clonedQuestion.title);
        
        var questionRequired = $(questionEditor).find(".question-required");
        if (question.required) {
            $(questionRequired).prop("checked", true);
        }                  
        
        var saveButton = $(questionEditor).find(".question-save");
        $(saveButton).click(function() {                       
            if ($(questionTitle).val()) {
                clonedQuestion.title = $(questionTitle).val();
                clonedQuestion.required = $(questionRequired).is(":checked");
                setter(clonedQuestion);
                $(questionEditor).dialog("close");
            } else {
                $(questionTitle).css("border-color", "red");  
            }
        });
        
        var cancelButton = $(questionEditor).find(".question-cancel");
        $(cancelButton).click(function() {
            $(questionTitle).css("border-color", "");
            $(questionEditor).dialog("close");           
        }); 
        
        $(questionEditor).keypress(function(e) {
            if (e.keyCode == KEYCODE_ENTER) {
                $(saveButton).trigger("click");
            } else {
                if (e.keyCode == KEYCODE_ESC) {
                    $(cancelButton).trigger("click");                  
                }
            }
        });
        
        $(questionEditor).dialog({
            title: null,
            width: 900,
            modal: true,
            resizable: false,
            draggable: false,  
            open: function(event, ui) {
                $(".ui-dialog-titlebar").remove();                 
            }
         }).on("keydown", function(evt) {
             if (evt.keyCode === $.ui.keyCode.ESCAPE) {
                 $(cancelButton).trigger("click");
                 evt.stopPropagation();
             }                             
         });  
         
         $(questionEditor).dialog().parent().draggable();                           
    }  
    
    function initSliderEditor(question, setter) {                                              
    
        var clonedQuestion = $.extend(true, {}, question);                                        
                
        var index = new Date().getMilliseconds(); 
        var questionEditor = $("#edit-slider").clone().prop("id", "#edit-slider-" + index);
      
        $(questionEditor).find("[id]").each(function() {
            $(this).prop("id", $(this).prop("id") + index);
        });
        $(questionEditor).find("[for]").each(function() {
            $(this).prop("for", $(this).prop("for") + index);
        });                                                           

        var questionTitle = $(questionEditor).find(".question-title");
        $(questionTitle).val(clonedQuestion.title);
        
        var questionRequired = $(questionEditor).find(".question-required");
        if (question.required) {
            $(questionRequired).prop("checked", true);
        }             
        
        var $questionField = $(questionEditor).find(".question-field");
        fillQuestionFieldDropdown($questionField);
        $questionField.change(function (e) {
            $questionField.attr("title", $questionField.val() || null);
        });
        $questionField.val(clonedQuestion.field);
        $questionField.change();

        $(questionEditor).find("input[name='question-display-format'][value='" + clonedQuestion.type + "']").prop("checked", true); 
        
        var minValueControl = $(questionEditor).find(".answer-min");                               
        var maxValueControl = $(questionEditor).find(".answer-max");
        var stepValueControl = $(questionEditor).find(".answer-step");
        $(minValueControl).val(clonedQuestion.min);
        $(maxValueControl).val(clonedQuestion.max);
        $(stepValueControl).val(clonedQuestion.step);
        
        var saveButton = $(questionEditor).find(".question-save");
        $(saveButton).click(function() {
            $(questionTitle).css("border-color", "");        
            $(minValueControl).css("border-color", "");
            $(maxValueControl).css("border-color", "");
            $(stepValueControl).css("border-color", "");
            $questionField.css("border-color", "");
            
            var isQuestionInputFieldsValid = checkSliderInputFields(questionTitle, minValueControl, maxValueControl, stepValueControl)
                    && checkQuestionMappedField(question.id, $questionField);

            if (isQuestionInputFieldsValid) {                            
                clonedQuestion.title = $(questionTitle).val();             
                clonedQuestion.field = $questionField.val() || null;
                clonedQuestion.required = $(questionRequired).is(":checked");
                clonedQuestion.min = parseInt($(minValueControl).val());
                clonedQuestion.max = parseInt($(maxValueControl).val());
                clonedQuestion.step = parseInt($(stepValueControl).val());
                clonedQuestion.type = $(questionEditor).find("input[name='question-display-format']:checked").val();
                                                                          
                setter(clonedQuestion);                                
                $(questionEditor).dialog("close");
            }
        });
        
        var cancelButton = $(questionEditor).find(".question-cancel");
        $(cancelButton).click(function() {
            $(questionTitle).css("border-color", "");        
            $(minValueControl).css("border-color", "");
            $(maxValueControl).css("border-color", "");
            $(stepValueControl).css("border-color", "");
            $questionField.css("border-color", "");
            $(questionEditor).dialog("close");           
        }); 
        
        $(questionEditor).keypress(function(e) {
            if (e.keyCode == KEYCODE_ENTER) {
                $(saveButton).trigger("click");
            } else {
                if (e.keyCode == KEYCODE_ESC) {
                    $(cancelButton).trigger("click");                  
                }
            }
        });
        
        $(questionEditor).dialog({
            title: null,
            width: 900,
            resizable: false,
            draggable: false,  
            modal: true,
            open: function(event, ui) {
                $(".ui-dialog-titlebar").remove();                 
            }
         }).on("keydown", function(evt) {
             if (evt.keyCode === $.ui.keyCode.ESCAPE) {
                 $(cancelButton).trigger("click");
                 evt.stopPropagation();
             }                             
         }); 
         
         $(questionEditor).dialog().parent().draggable();            
    }  

    function initQuestionEditor(question, setter) {                                              
    
        var clonedQuestion = $.extend(true, {}, question);                                        
                
        var index = new Date().getMilliseconds(); 
        var questionEditor = $("#edit-question").clone().prop("id", "#edit-question-" + index);
      
        $(questionEditor).find("[id]").each(function() {
            $(this).prop("id", $(this).prop("id") + index);
        });
        $(questionEditor).find("[for]").each(function() {
            $(this).prop("for", $(this).prop("for") + index);
        });                                                           

        var questionTitle = $(questionEditor).find(".question-title");
        $(questionTitle).val(clonedQuestion.title);
        
        var questionRequired = $(questionEditor).find(".question-required");
        if (question.required) {
            $(questionRequired).prop("checked", true);
        }
        
        var $questionField = $(questionEditor).find(".question-field");
        fillQuestionFieldDropdown($questionField);
        $questionField.change(function (e) {
            $questionField.attr("title", $questionField.val() || null);
        });
        $questionField.val(clonedQuestion.field);
        $questionField.change();
        
        var textControl = $(questionEditor).find(".answer-text");
        var valueControl = $(questionEditor).find(".answer-value");
        var valueNAControl = $(questionEditor).find(".answer-value-na");
        $(valueNAControl).off("change").change(function () {           
            if ($(valueNAControl).is(":checked")) {
                $(valueControl).val(null);                    
                $(valueControl).attr("disabled", "disabled");
            } else {
                $(valueControl).removeAttr("disabled");
            }            
        });                          
                
        $(questionEditor).find("input[name='question-display-format'][value='" + clonedQuestion.type + "']").prop("checked", true);
             
        var optionsTable = $(questionEditor).find(".options-table tbody")     
        var rowTemplate = $(optionsTable).children("tr:first");                        
             
        for (var i = 0; i < clonedQuestion.answers.length; i++) {         
            createAnswer(questionEditor, optionsTable, clonedQuestion.answers[i], i == 0);
        }        
        $(rowTemplate).remove();
        
        var firstRow = $(optionsTable).children("tr:first");
        $(firstRow).addClass("selected");
        $(firstRow).attr("selected", "selected");     
                
        $(optionsTable).sortable({
            appendTo: document.body,
            zIndex: 5555,
            helper: function (e, ui) {
                 var obj = $(ui.get(0)).clone();                
                 $(obj).width($(ui.get(0)).width() - 50);
                 $(obj).css("border", "1px solid gray");
                 $(obj).css("background", "#ededed");
                 $(obj).find(".remove-btn-box").hide();
                 return obj;
            },
            placeholder: {
                element: function (currentItem) {
                    return $("<tr><td colspan='6'><div class='sortable-item-list-placeholder'></div></td></tr>")[0];
                },
                update: function (container, p) {
                    return;
                }
            },
            update: function (event, ui) {
            }
        });
        $(optionsTable).disableSelection();  
        
        $(questionEditor).find(".add-question").click(function (event) {
            var answers = $(optionsTable).find("tr");
            if (answers.length === 25) {
                alert(translator.get("numberOptionsLimit"));     
            } else {                              
                var answer = {};
                answer.id = getNewId();
                answer.text = translator.get("none");
                answer.value = 0;
                answer.field = null;
                answer.valueNA = false;                
                createAnswer(questionEditor, optionsTable, answer, false);
                event.preventDefault();
                event.stopPropagation();
                var rowTemplate = $(optionsTable).children("tr:last").trigger("click");                                                     
            }
        });
        
        var saveButton = $(questionEditor).find(".question-save");
        $(saveButton).click(function() {
            var isQuestionInputFieldsValid = checkQuestionInputFields(questionTitle)
                     && checkQuestionMappedField(question.id, $questionField);
                     
            var isAnswerValid = checkAnswerInputFields(textControl, valueControl); 

            if (isQuestionInputFieldsValid && isAnswerValid) {                            
                clonedQuestion.title = $(questionTitle).val();             
                clonedQuestion.field = $questionField.val();
                clonedQuestion.required = $(questionRequired).is(":checked");
                clonedQuestion.type = $(questionEditor).find("input[name='question-display-format']:checked").val();
                clonedQuestion.answers = [];                                
                
                $(optionsTable).children("tr[selected]").trigger("click"); 
                $(optionsTable).children("tr").each(function (index, currentRow) {
                    var currentAnswerAttr = $(currentRow).attr(ANSWER_ATTRIBUTE_NAME);                 
                    clonedQuestion.answers.push(JSON.parse(currentAnswerAttr));  
                });                                                                                                    
                                                        
                setter(clonedQuestion);                                
                $(questionEditor).dialog("close");
            }
        });
        
        var cancelButton = $(questionEditor).find(".question-cancel");
        $(cancelButton).click(function() {
            $(questionTitle).css("border-color", "");
            $questionField.css("border-color", "");
            $(textControl).css("border-color", "");
            $(valueControl).css("border-color", "");        
            $(questionEditor).dialog("close");           
        }); 
        
        $(questionEditor).keypress(function(e) {
            if (e.keyCode == KEYCODE_ENTER) {
                $(saveButton).trigger("click");
            } else {
                if (e.keyCode == KEYCODE_ESC) {
                    $(cancelButton).trigger("click");                  
                }
            }
        });
        
        $(questionEditor).dialog({
            title: null,
            width: 900,
            resizable: false,
            draggable: false,  
            modal: true,
            open: function(event, ui) {
                $(".ui-dialog-titlebar").remove();                 
            }
         }).on("keydown", function(evt) {
             if (evt.keyCode === $.ui.keyCode.ESCAPE) {
                 $(cancelButton).trigger("click");
                 evt.stopPropagation();
             }                             
         });
         
         $(questionEditor).dialog().parent().draggable();                      
    }   
    
    function createAnswer(questionEditor, optionsTable, answer, fillInputs) {
        var rowTemplate = $(optionsTable).children("tr:first");       
        var row = $(rowTemplate).clone().attr("answer-id", answer.id);   
            
        createAnswerGridRow(questionEditor, row, answer, fillInputs);  
        $(row).attr(ANSWER_ATTRIBUTE_NAME, JSON.stringify(answer));
        
        $(row).click(function() {
            var currentSelectedRow = $(optionsTable).children("tr[selected]");
                
            if ($(currentSelectedRow).length) {                          
                var textControl = $(questionEditor).find(".answer-text");
                var valueControl = $(questionEditor).find(".answer-value");              
        
                var isValid = checkAnswerInputFields(textControl, valueControl); 
                if (isValid) {      
                    $(textControl).css("border-color", "");
                    $(valueControl).css("border-color", "");                
                                                    
                    var currentAnswerAttr = $(currentSelectedRow).attr(ANSWER_ATTRIBUTE_NAME);
                    var currentAnswer = JSON.parse(currentAnswerAttr);
                    currentAnswer.text = $(textControl).val();

                    if ($(valueControl).val()) {
                        currentAnswer.value = parseInt($(valueControl).val());
                    } else {
                        currentAnswer.value = null;
                    }
                      
                    currentAnswer.valueNA = $(questionEditor).find(".answer-value-na").is(":checked");                          
                    $(currentSelectedRow).attr(ANSWER_ATTRIBUTE_NAME, JSON.stringify(currentAnswer));            
                    $(currentSelectedRow).removeAttr("selected");
                    createAnswerGridRow(questionEditor, currentSelectedRow, currentAnswer, false);    
                                       
                    $(optionsTable).children("tr").removeClass("selected");
                    $(row).addClass("selected");
                    $(row).attr("selected", "selected");
            
                    var newAnswerAttr = $(row).attr(ANSWER_ATTRIBUTE_NAME);
                    var newAnswer = JSON.parse(newAnswerAttr);                      
                    createAnswerGridRow(questionEditor, row, newAnswer, true);
                }
            } else {
                $(row).addClass("selected");
                $(row).attr("selected", "selected");
                var newAnswerAttr = $(row).attr(ANSWER_ATTRIBUTE_NAME);
                var newAnswer = JSON.parse(newAnswerAttr);                      
                createAnswerGridRow(questionEditor, row, newAnswer, true);
            }                                                     
        });
        $(row).removeClass("selected");
        $(row).removeAttr("selected");
        
        $(row).find(".answer-trash").click(function () {
            deleteAnswer(optionsTable, this);
        });                                   
            
        $(optionsTable).append(row);  
    }   
    
    function createAnswerGridRow(questionEditor, row, answer, fillInputs) {
        $(row).find(".col-text").text(answer.text);               
                         
        if (answer.value != null) {               
            $(row).find(".col-value").text(answer.value);
        } else {
            $(row).find(".col-value").text(translator.get("na"));
        }     
        
        if (fillInputs) {
           var valueControl = $(questionEditor).find(".answer-value");
            if (answer.valueNA) {
               $(valueControl).val(null);
               $(valueControl).attr("disabled", "disabled");
            } else {
               $(valueControl).val(answer.value);
               $(valueControl).removeAttr("disabled");
            }
            $(questionEditor).find(".answer-value-na").prop("checked", answer.valueNA);        
            $(questionEditor).find(".answer-text").val(answer.text);                                              
        }
    }
    
    function deleteAnswer(optionsTable, answerDeleteButton) {
        var answers = $(optionsTable).find("tr");               
        if (answers.length > 1) {
            var currentRow = $(answerDeleteButton).closest("tr");
            $(currentRow).remove();
            var firstRow = $(optionsTable).children("tr:first");                                            
            $(firstRow).trigger("click");                   
        } else {
            alert(translator.get("youCannotDeleteThisItem"));
        }
    } 
    
    function checkQuestionInputFields(titleControl) {
        var isValid = true;             
        var titleControlValue = $(titleControl).val();
        if (!titleControlValue) {
            isValid = false;
            $(titleControl).css("border-color", "red");
        }               
        return isValid;
    }
    
    function checkQuestionMappedField(questionId, questionField) {
        var isValid = true;             
        var fieldControlValue = $(questionField).val();
        if (fieldControlValue) {
            var questions = form.areas[0].questions;
            for (var i = 0; i < questions.length; i++) {            
                var question = questions[i];
                if (question.id != questionId && question.field == fieldControlValue) {
                    isValid = false;
                    $(questionField).css("border-color", "red");
                    alert(translator.get("customFieldAlreadyMapped"));
                    break;
                }
            }                       
        }               
        return isValid;
    }
        
    
    function checkAnswerInputFields(textControl, valueControl) {
        var isValid = true;
        
        if (!$(textControl).val()) {
            isValid = false;
            $(textControl).css("border-color", "red");
        }
               
        var value = $(valueControl).val();
        if (value) {        
            if (isNaN(value)) {
               isValid = false;
               $(valueControl).css("border-color", "red");
            } else {
                var numberValue = Number(value);
                if (numberValue < 0) {
                    isValid = false;
                    $(valueControl).css("border-color", "red");
                }
            }
        } else {
            if (!$(valueControl).attr("disabled")) {
                isValid = false;
                $(valueControl).css("border-color", "red");
            }
        }

        return isValid;
    }
    
    function checkSliderInputFields(textControl, minValueControl, maxValueControl, stepValueControl) {
        var isValid = true;
        
        if (!$(textControl).val()) {
            isValid = false;
            $(textControl).css("border-color", "red");
        }
               
        var value = $(minValueControl).val();
        if (value) {        
            if (isNaN(value)) {
               isValid = false;
               $(minValueControl).css("border-color", "red");
            } else {
                var numberValue = Number(value);
                if (numberValue < 0) {
                    isValid = false;
                    $(minValueControl).css("border-color", "red");
                }
            }
        } else {
            isValid = false;
            $(minValueControl).css("border-color", "red");
        }
        
        value = $(maxValueControl).val();
        if (value) {        
            if (isNaN(value)) {
               isValid = false;
               $(minValueControl).css("border-color", "red");
            } else {
                var numberValue = Number(value);
                if (numberValue < 0) {
                    isValid = false;
                    $(maxValueControl).css("border-color", "red");
                }
            }
        } else {
            isValid = false;
            $(maxValueControl).css("border-color", "red");
        }
        
        value = $(stepValueControl).val();
        if (value) {        
            if (isNaN(value)) {
               isValid = false;
               $(stepValueControl).css("border-color", "red");
            } else {
                var numberValue = Number(value);
                if (numberValue < 0) {
                    isValid = false;
                    $(stepValueControl).css("border-color", "red");
                }
            }
        } else {
            isValid = false;
            $(stepValueControl).css("border-color", "red");
        }

        return isValid;
    }
    
    function checkFormInputFields(titleControl) {
        var isValid = true;              
        $(titleControl).css("border-color", "");         

        var titleControlValue = $(titleControl).val();
        if (!titleControlValue) {
            isValid = false;
            $(titleControl).css("border-color", "red");
        }               

        return isValid;
    }      
        
    function initImageFieldInEditor(editor, imageControlName, getter, setter) {
        var image = $(editor).find("#" + imageControlName);
        var fileSelector = $(editor).find("#" + imageControlName + "-file-selector");
        var uploadButton = $(editor).find("#" + imageControlName + "-upload-button");
        var deleteButton = $(editor).find("#" + imageControlName + "-delete-button");
        $(uploadButton).off("click").click(function() {
            $(fileSelector).trigger("click");
        });
        $(deleteButton).off("click").click(function() {
            $(image).attr("src", NO_IMAGE);
            setter("");
            setFormChanged(true);
        });
        $(fileSelector).off("change").change(function (e) {
            var files = e.target.files;
            if (files && files[0]) {
                var reader = new FileReader();
                reader.addEventListener("load", function(e) {
                    setter(e.target.result);
                    $(image).attr("src", e.target.result);
                    setFormChanged(true);
                });
                reader.readAsDataURL(files[0]);
            }
        });

        var value = getter();
        if (value) {
            $(image).attr("src", value);
        }
    } 
    
    function initFormTitleEditor(title, submit, setter) {                                              
                                                          
        var index = new Date().getMilliseconds(); 
        var formEditor = $("#edit-form-popup").clone().prop("id", "#edit-form-popup-" + index);
      
        $(formEditor).find("[id]").each(function() {
            $(this).prop("id", $(this).prop("id") + index);
        });
        $(formEditor).find("[for]").each(function() {
            $(this).prop("for", $(this).prop("for") + index);
        });                                                           

        var formTitle = $(formEditor).find(".form-title");
        $(formTitle).val(title);       

       var formSubmit = $(formEditor).find(".form-submitfield");
       if(!submit) {
       		submit = "Submit";     		 		
       }               
       $(formSubmit).val(submit);  
                               
        var saveButton = $(formEditor).find(".form-save-popup-button");
        $(saveButton).click(function() {
            var isValid = checkFormInputFields(formTitle);         
            if (isValid) {                     
				isValid = checkFormInputFields(formSubmit);   
				if(isValid) {
					setter($(formTitle).val(), $(formSubmit).val());
					setFormChanged(true);
					$(formEditor).dialog("close");
				}
            } 
        });
        
        var cancelButton = $(formEditor).find(".form-cancel-popup-button");
        $(cancelButton).click(function() {
            $(formTitle).css("border-color", "");     
            $(formEditor).dialog("close");           
        }); 
        
        $(formEditor).keypress(function(e) {                       
            if (e.keyCode == KEYCODE_ENTER) {
                $(saveButton).trigger("click");
            } else {
                if (e.keyCode == KEYCODE_ESC) {
                    $(cancelButton).trigger("click");                  
                }
            }
        });
        
        $(formEditor).dialog({
            title: null,
            width: 600,
            modal: true,
            open: function(event, ui) {
                $(".ui-dialog-titlebar").remove();                 
            }
         }).on("keydown", function(evt) {
             if (evt.keyCode === $.ui.keyCode.ESCAPE) {
                 $(cancelButton).trigger("click");
                 evt.stopPropagation();
             }                             
         });          
    }   

    function createFormEditor(formId) {
        clearEditor();                      

        var formEditor = $("#form-editor").clone().prop("id", "form-editor-" + formId);
        $("#content-header").append($(formEditor));
        
        var formTitleControl = $(formEditor).find(".form-title-editor .edit-point");
        $(formTitleControl).text(form.title);                                
        
        $(formEditor).find(".form-title-editor").click(function() {               
            initFormTitleEditor(form.title, form.submit,
                function(title, submit, score) {
                    form.title = title;    
					form.submit = submit;
                    $(formTitleControl).text(form.title);                                                                  
                }   
            );      
        });
                    
        initImageFieldInEditor(formEditor, "form-image",
            function() {
                return form.image;
            },
            function(val) {
                form.image = val;
            }
        );        
                                         
        var areaItem = createAreaBodyItem(form.areas[0]);
        $("#content-body").append($(areaItem));                                                                                           
    }             

    function initNameEditor(name, validator, errorAlreadyExistsMessage, setter, title) {                                              
                                                          
        var index = new Date().getMilliseconds(); 
        var nameEditor = $("#edit-name-popup").clone().prop("id", "#edit-name-popup-" + index);
      
        $(nameEditor).find("[id]").each(function() {
            $(this).prop("id", $(this).prop("id") + index);
        });
        $(nameEditor).find("[for]").each(function() {
            $(this).prop("for", $(this).prop("for") + index);
        });  
        
        if (title) {
             $(nameEditor).find(".edit-name-title").text(translator.get(title));
        }                                                         

        var nameControl = $(nameEditor).find(".name-popup-control");
        $(nameControl).val(name);
                                                  
        var saveButton = $(nameEditor).find(".name-save-popup-button");
        $(saveButton).click(function() {
            var newName = $(nameControl).val();        
            if (newName) {
                validator(newName, function(isValid) {
                    if (isValid) {
                        $(nameControl).css("border-color", "");                                                   
                        setter(newName);                                
                        $(nameEditor).dialog("close");
                    } else {
                        alert(translator.get(errorAlreadyExistsMessage));
                        $(nameControl).css("border-color", "red");
                    }
                });                         
            } else {
                $(nameControl).css("border-color", "red");
            }
        });
        
        var cancelButton = $(nameEditor).find(".name-cancel-popup-button");
        $(cancelButton).click(function() {
            $(nameControl).css("border-color", "");          
            $(nameEditor).dialog("close");           
        }); 
        
        $(nameEditor).keypress(function(e) {                       
            if (e.keyCode == KEYCODE_ENTER) {
                $(saveButton).trigger("click");
            } else {
                if (e.keyCode == KEYCODE_ESC) {
                    $(cancelButton).trigger("click");                  
                }
            }
        });
        
        $(nameEditor).dialog({
            title: null,
            width: 900,
            modal: true,
            open: function(event, ui) {
                $(".ui-dialog-titlebar").remove();                 
            }
         }).on("keydown", function(evt) {
             if (evt.keyCode === $.ui.keyCode.ESCAPE) {
                 $(cancelButton).trigger("click");
                 evt.stopPropagation();
             }                             
         });          
    }   
     

    function createAreaBodyItem(area) {   
        var item = $("#draggable-area-template").clone().prop("id", "area-item-body-" + area.id);                                                         
        var itemsArea = $(item).find(".column-wrapper-questions");         
        createQuestionsListInArea(area, itemsArea);                                             
        return item;
    } 
     
    function createQuestionsListInArea(area, itemsArea) {
    
        itemsArea.droppable({
            accept: ".draggable-control",
            greedy: true
        });

        itemsArea.sortable({
            appendTo: document.body,
            zIndex: 4444,
            helper: function (e, ui) {
                var obj = $(ui.get(0)).clone().width("50%").css("border", "1px solid gray");                            
                $(obj).height(50);
                $(obj).find(".right-column").remove();
                $(obj).find(".element-actions").remove();
                $(obj).find(".element-child-item").remove();
                $(obj).css("background-color", "#ffffff"); 
                return $(obj);
            },                     
            placeholder: {
                element: function (currentItem) {
                    return $("<div class='sortable-item-list-placeholder'></div>")[0];
                },
                update: function (container, p) {
                    return;
                }
            },
            update: function (event, ui) {
                var isItemFromSameColumn = ui.item.hasClass(CONTROL_IN_CONTAINER_CLASS_NAME);
                var affectedQuestionId = null;
                if (!isItemFromSameColumn) {
                    var newItem = null;
                    var newItemId = getNewId();
                     
                    if (ui.item.hasAttr(CLIPBOARD_JSON_ATTRIBUTE_NAME)) {                                                      
                        var jsonStr = ui.item.attr(CLIPBOARD_JSON_ATTRIBUTE_NAME);                                                             
                        var pastedQuestionArray = JSON.parse(jsonStr);
                        var pastedQuestion = copyQuestion(pastedQuestionArray[0], true);
                        
                        pastedQuestion.id = newItemId; 
                        area.questions.push(pastedQuestion);
                        newItem = createItem(this, null, area, newItemId, pastedQuestion.type);                                                                                                  
                    } else {                        
                        newItem = createItem(this, ui, area, newItemId, null);                                         
                    }
                    
                    affectedQuestionId = newItemId;
                    $(newItem).insertBefore(ui.item);
                    ui.item.remove();                           
                } else {
                    affectedQuestionId = $(ui.item).attr(DATA_QUESTION_ID_ATTRIBUTE_NAME);
                }
                setFormChanged(true);                
               
                var items = $(this).children(".element-area");
                if (items.length) {
                    items.each(function (index, item) {
                        if ($(item).attr(DATA_QUESTION_ID_ATTRIBUTE_NAME) == affectedQuestionId) {
                            var newQuestionIndex = index;
                            var prevQuestionIndex = getQuestionIndexById(area, affectedQuestionId);
                            area.questions.move(prevQuestionIndex, newQuestionIndex);
                        }
                    });
                }                                                    
            },
            stop: function (event, ui) {
                $("body").children(".ui-sortable-helper").remove();
            }
        });
        itemsArea.disableSelection();                

        var questions = area.questions;
        for (var i = 0; i < questions.length; i++) {
            var question = questions[i];
            var item = createItem(itemsArea, null, area, question.id, question.type);
            $(itemsArea).append($(item));
        }
    }

    function initControlTemplates() {

        controlsMap["item-checkbox-"] = { prefixId: 'item-checkbox-', type: CHECKBOX_CONTROL,
            paletteItemId: "draggable-checkbox-control", templateId: "#draggable-control-with-options-template",
            drawOptionMethod: drawCheckBoxOption, drawControlMethod: drawCheckBoxControl, label: "checkboxElements"};
        controlsMap["item-radio-"] = { prefixId: 'item-radio-', type: RADIO_CONTROL,
            paletteItemId: "draggable-radio-control", templateId: "#draggable-control-with-options-template",
            drawOptionMethod: drawRadioButtonOption, drawControlMethod: drawRadioButtonControl, label: "radioButtons"};
        controlsMap["item-radio-horizontal-"] = { prefixId: 'item-radio-horizontal-', type: RADIO_HORIZONTAL_CONTROL,
            paletteItemId: "draggable-radio-horizontal-control", templateId: "#draggable-control-with-options-template",
            drawOptionMethod: drawRadioButtonOption, drawControlMethod: drawRadioButtonControl, label: "horizontalRadioButtons"};
        controlsMap["item-dropdown-"] = { prefixId: 'item-dropdown-', type: DROPDOWN_CONTROL,
            paletteItemId: "draggable-dropdown-control", templateId: "#draggable-control-with-options-template",
            drawOptionMethod: drawDropdownOption, drawControlMethod: drawDropdownControl, label: "dropdownElement"};            
        controlsMap["item-yes-no-"] = { prefixId: 'item-yes-no-', type: RADIO_HORIZONTAL_CONTROL,
            paletteItemId: "draggable-yes-no-control", templateId: "#draggable-control-with-options-template",
            drawOptionMethod: drawRadioButtonOption, drawControlMethod: drawRadioButtonControl, label: "yesNo",
            defaultAnswers: [{
                id: getNewId(),
                text: translator.get("yes"),
                valueNA: false,
                value: 0    
            }, {
                id: getNewId(),
                text: translator.get("no"),
                value: 0
            }]};
        controlsMap["item-yes-no-na-"] = { prefixId: 'item-yes-no-na-', type: RADIO_HORIZONTAL_CONTROL,
            paletteItemId: "draggable-yes-no-na-control", templateId: "#draggable-control-with-options-template",
            drawOptionMethod: drawRadioButtonOption, drawControlMethod: drawRadioButtonControl, label: "yesNoNa",
            defaultAnswers: [{
                id: getNewId(),
                text: translator.get("yes"),
                valueNA: false,
                value: 0      
            }, {
                id: getNewId(),
                text: translator.get("no"),
                valueNA: false,
                value: 0
            }, {
                id: getNewId(),
                text: translator.get("na"),
                valueNA: true,
                value: null
            }]};                        
                      
        controlsMap["item-slider-"] = { prefixId: 'item-slider-', type: SLIDER_CONTROL,
            paletteItemId: "draggable-slider-control", templateId: "#draggable-control-with-options-template",
            editor: createSliderEditor, label: "slider"};             
        controlsMap["item-essay-"] = { prefixId: 'item-essay-', type: ESSAY_CONTROL,
            paletteItemId: "draggable-essay-control", templateId: "#draggable-control-with-options-template",
            editor: createEssayEditor, label: "essayArea"};            
        controlsMap["item-static-text-"] = { prefixId: 'item-static-text-', type: STATIC_TEXT_CONTROL,
            paletteItemId: "draggable-static-text-control", templateId: "#draggable-control-with-options-template",
            editor: createStaticTextEditor, label: "staticText"};
        controlsMap["item-thank-you-text-"] = { prefixId: 'item-thank-you-text-', type: STATIC_TEXT_CONTROL, subtype: TEXT_THANK_YOU,
            paletteItemId:"draggable-thank-you-control", templateId: "#draggable-control-with-options-template",
            editor: createStaticTextEditor, label: "thankYouFillingSurvey"};            

        $("#draggable-checkbox-control").draggable(dragOptions(".column-wrapper-questions"));
        $("#draggable-radio-control").draggable(dragOptions(".column-wrapper-questions"));
        $("#draggable-radio-horizontal-control").draggable(dragOptions(".column-wrapper-questions"));
        $("#draggable-dropdown-control").draggable(dragOptions(".column-wrapper-questions"));
        $("#draggable-yes-no-control").draggable(dragOptions(".column-wrapper-questions"));
        $("#draggable-yes-no-na-control").draggable(dragOptions(".column-wrapper-questions"));        
        $("#draggable-slider-control").draggable(dragOptions(".column-wrapper-questions"));               
        $("#draggable-essay-control").draggable(dragOptions(".column-wrapper-questions"));
        $("#draggable-static-text-control").draggable(dragOptions(".column-wrapper-questions"));
        $("#draggable-thank-you-control").draggable(dragOptions(".column-wrapper-questions"));
    }

    function getItemType(editedControl) {
        var controlId = $(editedControl).prop("id");
        var prefixId = controlId.replace(/[0-9]/g, "");
        var item = controlsMap[prefixId];
        return item.type;
    }
    
    function getItemSubtype(editedControl) {
        var controlId = $(editedControl).prop("id");
        var prefixId = controlId.replace(/[0-9]/g, "");
        var item = controlsMap[prefixId];
        return item.subtype;
    }

    function dragOptions(target) {
        return {
            tolerance: "pointer",
            appendTo: document.body,
            zIndex: 5555,
            connectToSortable: target,
            helper: function (e, ui) {
                return $(this).clone().width("50%");
            },
            cursorAt: {left: 40, top: 25}
        }
    }    

    function createItem(container, ui, area, newItemId, itemType) {
        var item;
        var itemPrototype;
        if (ui) {
            var itemId = $(ui.item).prop("id");
            var prefixId = itemId.replace(/[0-9]/g, "");
            itemPrototype = controlsMap[prefixId];
            if (!itemPrototype) {
                for (var property in controlsMap) {
                    if (controlsMap.hasOwnProperty(property) && itemId == controlsMap[property].paletteItemId) {
                        itemPrototype = controlsMap[property];
                        break;
                    }
                }
            }
        } else {
            for (var property in controlsMap) {
                if (controlsMap.hasOwnProperty(property) && itemType == controlsMap[property].type) {
                    itemPrototype = controlsMap[property];
                    break;
                }
            }
        }
                
        if (!itemPrototype) {
            return;
        }

        item = $(itemPrototype.templateId).clone().prop("id", itemPrototype.prefixId + newItemId);
        if (ui) {
            var question = {};
            question.id = newItemId;
            question.type = getItemType(item);
            var subtype = getItemSubtype(item);
            if(subtype != null) {
            	question.subtype = subtype;
            }
            area.questions.push(question);
        }

        item.attr(DATA_QUESTION_ID_ATTRIBUTE_NAME, newItemId);
        $(item).find(".element-action-trash").click(function () {
            $(this).closest(".element-area").remove();
            var index = getQuestionIndexById(area, newItemId);
            if (index > -1) {
                area.questions.splice(index, 1);
            }
            setFormChanged(true);
            if (area.questions.length == 0) {
                $(container).find(".action-item-empty").show();
            }                                  
        });
        $(item).find(".element-action-copy").click(function () {
            var index = getQuestionIndexById(area, newItemId);           
            var currentQuestion = area.questions[index];                                 
            var duplicateQuestion = copyQuestion(currentQuestion);
            area.questions.push(duplicateQuestion);
            var duplicateItem = createItem(container, null, area, duplicateQuestion.id, duplicateQuestion.type);
            $(container).append($(duplicateItem));      
            setFormChanged(true);                                 
        });

        item.addClass(CONTROL_IN_CONTAINER_CLASS_NAME + " draggable-control");
        $(container).find(".action-item-empty").hide();

        if (itemPrototype.type == SLIDER_CONTROL || itemPrototype.type == ESSAY_CONTROL || itemPrototype.type == STATIC_TEXT_CONTROL) {
             itemPrototype.editor(item, area, newItemId, itemPrototype.label);
        } else { 
             createQuestionWithOptionsEditor(item, area, newItemId, itemPrototype.drawOptionMethod,
                    itemPrototype.drawControlMethod, itemPrototype.label, itemPrototype.defaultAnswers);                                 
        } 
       
        return item;
    }
    
    function createQuestionWithOptionsEditor(item, area, questionId, drawOptionMethod, drawControlMethod, label, defaultAnswers) {
        var questionControlWrapper = $(item).find(".control-label");
        
        var questionControl = drawControlMethod();
        $(questionControlWrapper).prepend(questionControl); 
        
        var questionIndex = getQuestionIndexById(area, questionId);
        var question = area.questions[questionIndex];

        if (!question.title) {
            question.title = translator.get(label);
        }        
      
        if (!question.answers || question.answers.length == 0) {
            if (defaultAnswers) {
               var clonedDefaultAnswers = [];
               for (var i = 0; i < defaultAnswers.length; i++) {
                  clonedDefaultAnswers[i] = $.extend(true, {}, defaultAnswers[i]);
                  clonedDefaultAnswers[i].id = getNewId();
               }               
               question.answers = clonedDefaultAnswers;            
            } else {
                question.answers = [];
                var answer = {};
                answer.id = getNewId();
                answer.text = translator.get("none");
                answer.value = 0;
                answer.valueNA = false;                  
                question.answers[0] = answer;
            }        
        }
       
        var titleControlLabel = $(item).find(".control-title-label");      
        $(titleControlLabel).text(question.title);
        
        var controlRequiredLabel = $(item).find(".control-required-label"); 
        if (question.required) {
            $(controlRequiredLabel).show();
        } else {
            $(controlRequiredLabel).hide();
        }                    

        for (var i = 0; i < question.answers.length; i++) {
            var answer = question.answers[i];    
            var option = drawOptionMethod(answer.text, answer.value, question.id, question.type, i);
            if (question.type == RADIO_HORIZONTAL_CONTROL) {
                $(questionControl).addClass("form-check-horizontal-fieldset");
            }
            $(questionControl).append(option);         
        }

        $(item).find(".element-label").click(function() {                  
            initQuestionEditor(area.questions[getQuestionIndexById(area, questionId)],
                function(clonedQuestion) {
                    var oldAnswersIds = [];                 
                    var oldAnswers = area.questions[getQuestionIndexById(area, questionId)].answers;
                    for (var j = 0; j < oldAnswers.length; j++) {
                        oldAnswersIds.push(oldAnswers[j].id);
                    }
                                                                                     
                    area.questions[getQuestionIndexById(area, questionId)] = clonedQuestion;                                
                    $(titleControlLabel).text(clonedQuestion.title);
                    if (clonedQuestion.required) {
                        $(controlRequiredLabel).show();
                    } else {
                        $(controlRequiredLabel).hide();
                    }                               
                
                    var newItemPrototype;
                    for (var property in controlsMap) {
                        if (controlsMap.hasOwnProperty(property) && clonedQuestion.type == controlsMap[property].type) {
                            newItemPrototype = controlsMap[property];
                            break;
                        }
                    }
                               
                    var questionNewControl = newItemPrototype.drawControlMethod();
                    $(questionControlWrapper).empty();
                    $(questionControlWrapper).prepend(questionNewControl);                
                    for (var i = 0; i < clonedQuestion.answers.length; i++) {
                        var answer = clonedQuestion.answers[i];    
                        var option = newItemPrototype.drawOptionMethod(answer.text, answer.value, clonedQuestion.id, clonedQuestion.type, i);
                        if (clonedQuestion.type == RADIO_HORIZONTAL_CONTROL) {
                            $(questionNewControl).addClass("form-check-horizontal-fieldset");
                        } else {
                            $(questionNewControl).removeClass("form-check-horizontal-fieldset");
                        }
                        $(questionNewControl).append(option);                    
                        oldAnswersIds.deleteByValue(answer.id);                       
                    }                                                                                                                                        
                    setFormChanged(true);                                                             
                }                                
            );      
        });
    }      
    
    function drawCheckBoxControl() {
        return $("<fieldset class='checkbox-control-label form-checkbox-wrapper'></fieldset>");
    }
    
    function drawCheckBoxOption(text, tooltip, group, type, index) {            
        var id = getSafeHtmlIdFromText(text);
        return $("<div class='form-check form-field'><input type='checkbox' id='" + id + "'/><label class='form-check-label' for='" + id + "' title='" + tooltip + "'>" + text + "</label></div>");
    }
    
    function drawRadioButtonControl() {
        return $("<div class='radio-control-label form-radio'></div>");
    }
    
    function drawRadioButtonOption(text, tooltip, group, type, index) {
        var id = getSafeHtmlIdFromText(text);
        var className;

        if (type == RADIO_HORIZONTAL_CONTROL) {
            className = "form-check-horizontal form-field";
        } else {
            className = "form-check form-field";
        }

        return $("<div class='" + className + "'><input type='radio' name='" + group + "' id='" + id + "' checked='checked'/><label class='form-check-label' for='" + id + "' title='" + tooltip + "'>" + text + "</label></div>");
    }
    
    function drawDropdownControl() {
        return $("<select class='form-select form-control dropdown-control-label' style='width:auto; margin-bottom: .5rem;'></select>");
    }
    
    function drawDropdownOption(text, tooltip, group, type, index) {
        var option = $("<option title='" + getSafeTextForHtml(text) + "'>" + text + "</option>");
        if (index == 0) {
            option.attr("selected", "true");
        }
        
        return option;     
    }
        
    function createSliderEditor(item, area, questionId, label) {              
        var questionIndex = getQuestionIndexById(area, questionId);
        var question = area.questions[questionIndex];

        if (!question.title) {
            question.title = translator.get(label);
        }
        if ( typeof question.min === "undefined" ) {
            question.min = 1;
        }
        if (!question.max) {
            question.max = 10;
        }
        if (!question.step) {
            question.step = 1;
        }         
        
        var questionControlWrapper = $(item).find(".control-label");                                    
        var questionControl = $('<div class="slider-control-label form-field form-slider"><div id="custom-handle" class="custom-handle"></div></div>');
        $(questionControlWrapper).prepend(questionControl);
                             
        var handle = $(questionControl).find(".custom-handle");
        $(questionControl).slider({
            min: question.min,
            max: question.max,
            step: question.step,
            create: function() {
                handle.text($(this).slider("value"));
            },
            slide: function(event, ui) {
                handle.text(ui.value);
            }
        });
       
        var titleControlLabel = $(item).find(".control-title-label");      
        $(titleControlLabel).text(question.title);
        
        var controlRequiredLabel = $(item).find(".control-required-label"); 
        if (question.required) {
            $(controlRequiredLabel).show();
        } else {
            $(controlRequiredLabel).hide();
        }                    
        
        $(item).find(".element-label").click(function() {        
            initSliderEditor(area.questions[getQuestionIndexById(area, questionId)],
                function(clonedQuestion) {                                                                             
                    area.questions[getQuestionIndexById(area, questionId)] = clonedQuestion;                                
                    $(titleControlLabel).text(clonedQuestion.title);
                    
                    if (clonedQuestion.required) {
                        $(controlRequiredLabel).show();
                    } else {
                        $(controlRequiredLabel).hide();
                    }
                                                   
                    $(questionControl).slider({
                        min: clonedQuestion.min,
                        max: clonedQuestion.max,
                        step: clonedQuestion.step
                     });
                     $(questionControl).slider( "option", "value", clonedQuestion.min);
                     $(handle).text(clonedQuestion.min);
                                                                                                                      
                    setFormChanged(true);                                                             
                }                                
            );        
        });
    }
    
    function createEssayEditor(item, area, questionId, label) {
        var questionIndex = getQuestionIndexById(area, questionId);
        var question = area.questions[questionIndex];

        if (!question.title) {
            question.title = translator.get(label);
        }           
        
        var questionControlWrapper = $(item).find(".control-label");                                    
        var questionControl = $('<textarea class="form-control form-field form-textarea" style="margin-top: 10px;" rows="2"></textarea>');
        $(questionControlWrapper).prepend(questionControl);                                  
       
        var titleControlLabel = $(item).find(".control-title-label");      
        $(titleControlLabel).text(question.title);
        
        var controlRequiredLabel = $(item).find(".control-required-label"); 
        if (question.required) {
            $(controlRequiredLabel).show();
        } else {
            $(controlRequiredLabel).hide();
        }                   
        
        $(item).find(".element-label").click(function() {
            initNotesEditor(area.questions[getQuestionIndexById(area, questionId)],
                function(clonedQuestion) {                                                                             
                    area.questions[getQuestionIndexById(area, questionId)] = clonedQuestion;                                
                    $(titleControlLabel).text(clonedQuestion.title);
                    
                    if (clonedQuestion.required) {
                        $(controlRequiredLabel).show();
                    } else {
                        $(controlRequiredLabel).hide();
                    }                                                                                                                                                                      
                    setFormChanged(true);                                                             
                }                                
            );  
        });
    }
    
    function createStaticTextEditor(item, area, questionId, label) {
        var questionIndex = getQuestionIndexById(area, questionId);
        var question = area.questions[questionIndex];

        if (!question.title) {
            question.title = translator.get(label);
        }                                              
       
        var titleControlLabel = $(item).find(".control-title-label");      
        $(titleControlLabel).text(question.title);               
        $(item).find(".control-required-label").hide();                                    
        
        $(item).find(".element-label").click(function() {
            initStaticTextEditor(area.questions[getQuestionIndexById(area, questionId)],
                function(clonedQuestion) {                                                                             
                    area.questions[getQuestionIndexById(area, questionId)] = clonedQuestion;                                
                    $(titleControlLabel).text(clonedQuestion.title);                                                                                                                                                                      
                    setFormChanged(true);                                                             
                }                                
            );  
        });
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

    this.exportData = function(isDownloadRequired) {                
        var res = {
            definition: {}           
        };
        
        if (isCurrentPageChanged || currentLanguage == DEFAULT_SURVEY_LANGUAGE_CODE) {
            form.pages[currentLanguage] = {
                title: form.title,
				submit: form.submit,
                areas: $.extend(true, {}, form.areas) 
            };        
        }        
        
        if (form.pages[currentLanguage]) {        
            form.currentLanguage = currentLanguage;
        } else {
            form.currentLanguage = DEFAULT_SURVEY_LANGUAGE_CODE;
        } 
        
        var clonedForm = $.extend(true, {}, form);
        delete (clonedForm.title);
        delete (clonedForm.areas);
              
        res.definition.form = clonedForm;   	   

        if (isDownloadRequired) {
            download(JSON.stringify(res));
        }

        return res;
    };

    this.importData = function(data) {

        if (data) {                                            
            this.clearEditor();                      
            form = data.form;  
            if (!form.pages) {
                form.pages = {};
                form.pages[DEFAULT_SURVEY_LANGUAGE_CODE] = {
                    title: form.title,
                    areas: $.extend(true, {}, form.areas) 
                };
            }
            
            if (form.currentLanguage) {
                currentLanguage = form.currentLanguage;  
            } else {            
                currentLanguage = DEFAULT_SURVEY_LANGUAGE_CODE;
            }
            surveyFormEditor.refreshLanguages();
                        
            isCurrentPageChanged = false;
            
            form.title = form.pages[currentLanguage].title;
            form.areas = $.extend(true, {}, form.pages[currentLanguage].areas);            
                     
  	        createFormEditor(form.id);	          	    	   
        }
    };

    this.clearEditor = clearEditor;

    function clearEditor () {
        $("#content-header").empty();
        $("#content-body").empty();
    };

    this.getFormName = function () {
        return formName;
    };

    this.setFormName = function (aFormName) {
        formName = aFormName;
    };

    this.closeForm = function () {          
        externalInterface.closeWindow();        
    };

    this.saveForm = function () {
        if (!formName) {
            var defaultName = form.title;          
            initNameEditor(defaultName, externalInterface.checkName, "formNameExists", function(newFormName) {        
                formName = newFormName;

                var formTitleControl = $("#content-header").find(".form-title-editor .edit-point");
                $(formTitleControl).text(form.title);
                
                externalInterface.save(function (errorMessage) {
                    if (errorMessage) {
                        alert(errorMessage);
                    }
                });
                setFormChanged(false);             
            });                                         
        } else {
            externalInterface.save(function (errorMessage) {
                if (errorMessage) {
                    alert(errorMessage);
                }
            });
            setFormChanged(false);
        }
    }

    this.isFormChanged = function () {
        return isFormChanged;
    };

    this.setFormChanged = setFormChanged;

    function setFormChanged(flag) {                       
        if (flag) {             
            if (!isFormChanged) {
                window.addEventListener("beforeunload", beforeUnloadListemer);            
            } 
            $("#form-editor-button-save").removeAttr("disabled");
        } else {
            $("#form-editor-button-save").attr("disabled", "disabled");
            window.removeEventListener("beforeunload", beforeUnloadListemer);  
        }
        isFormChanged = flag;
        isCurrentPageChanged = flag;
    };
    
    function beforeUnloadListemer(e) {	    
	    e.preventDefault();	    
	    e.returnValue = "";
	};  

    this.isInitiated = function () {
    	return initiated;
    };
    
    this.setCustomSurveyFields = function (fields) {
        customSurveyFields = fields;  
    }
    
    this.setLanguages = function (langJSON) {
        languages = JSON.parse(langJSON);
        this.refreshLanguages();
    }

    this.refreshLanguages = function() {
        languages.sort(function (l1, l2) {
            var l1Exists = !!form.pages[l1.id];
            var l2Exists = !!form.pages[l2.id];
            if(l1Exists === l2Exists) {
                return l1.name.localeCompare(l2.name);
            } else {
                return l1Exists ? -1 : 1;
            }
        });
        var $languageSelector = $(".language-selector");
        $languageSelector.empty();
        for (var i = 0; i < languages.length; i++) {
            var option = $("<option value='" + languages[i].id + "'>" + languages[i].name + "</option>");
            $languageSelector.append(option);
        }
        $languageSelector.val(currentLanguage);
        $languageSelector.boldselectmenu("refresh");
    }
    
    this.previewForm = function() {
        if (form != null && form.areas != null) {
            var previewContent = $("<div></div>").prop("id", "preview-form-content");
            $("body").append(previewContent);                         
            $(previewContent).load("evaluation/survey-viewer-layout-template.html", function() {
                var previewData = {
		            form: $.extend(true, {}, form)
                };             
                previewData.form.pages[currentLanguage] = {
                    title: form.title,
                    areas: $.extend(true, {}, form.areas) 
                };                    
                
                surveyFormViewer.load(previewData, currentLanguage, function() {
                    var dialog = $(previewContent).dialog({
                        autoOpen: false,
                        modal: true,
                        resizable: false,
                        title: translator.get("preview"),
                        width: 864,
                        maxHeight: 900,
                        open: function (event, ui) {
                            var dialogElement = $(".ui-dialog");
                            dialogElement.attr("tabindex", -1)[0].focus();                            
                            translator.translate(dialogElement);
                        },
                        close: function (event, ui) {
                            $(previewContent).remove();
                        }
                    });
                                       
                    dialog.dialog("open");
                });                
            });
        }
    }        
};