// For GWT Preview Panel
function destroyForm() {
    try {
	$(".language-selector").selectmenu("destroy");
    } catch (error) {}
}

// For GWT Preview Panel
function initForm(data, langJSON) {
    var formData = JSON.parse(data);
    var languages = JSON.parse(langJSON);            
    var lang = null;
    var languageSelector = $(".language-selector");
    var existingInstance = $(languageSelector).selectmenu("instance");
    if (existingInstance) {
        $(languageSelector).selectmenu("destroy");
    }                           
    
    if (!formData.form.currentLanguage) {
        lang = DEFAULT_SURVEY_LANGUAGE_CODE;
    } else {
        lang = formData.form.currentLanguage;
    }

    languages.sort(function (l1, l2) {
        var l1Exists = !!formData.form.pages[l1.id];
        var l2Exists = !!formData.form.pages[l2.id];
        if(l1Exists === l2Exists) {
            return l1.name.localeCompare(l2.name);
        } else {
            return l1Exists ? -1 : 1;
        }
    });

    for (var i = 0; i < languages.length; i++) {
        var option = $("<option value='" + languages[i].id + "'>" + languages[i].name + "</option>");             
        $(languageSelector).append(option);
    }
          
    $(languageSelector).selectmenu({
        width: 200,       
        classes: { "ui-selectmenu-button" : "ui-selectmenu-button-viewer"},      
        change: function(event, data) {
            $("#preview-loading").show();          
            reLoadForm(formData, data.item.value);       
        }           
    });
   
    $(languageSelector).selectmenu("instance")._renderItem = function(ul, item) {
        var li = $("<li>"),
        wrapper = $("<div>", { text: item.label });      
        if (formData.form.pages && formData.form.pages[item.value]) {
            $(wrapper).css("font-weight", "bold");
        }
 
        return li.append(wrapper).appendTo(ul);
    }   
      
    $(languageSelector).val(lang);   
    $(languageSelector).selectmenu("refresh");                                      
   
    loadForm(formData, lang);      
}
    
// For GWT Preview Panel            
function loadForm(formData, currentLanguage) {            
    var container = $('#container');           
    $('#preview-loading').show();
	$(container).empty();
	$(container).load('evaluation/survey-viewer-layout-template.html', function() {
	    surveyFormViewer.init(PREVIEW_MODE, function() {
		    reLoadForm(formData, currentLanguage);
        })	    		
	});
}

// For GWT Preview Panel            
function reLoadForm(formData, currentLanguage) {                   
    surveyFormViewer.load(formData, currentLanguage, function() {
        $('#preview-loading').hide();
    });   
} 					


var externalInterface;

var surveyFormViewer = new function () {

    var container;
    var form;
    var controlsMap = [];
    var viewerMode = VIEW_MODE;      
    var readOnly = false;
    var currentLanguage = DEFAULT_SURVEY_LANGUAGE_CODE;  

    this.init = function (viewType, callback, containerElement) {

        viewerMode = viewType;               
        container = containerElement; 

        translator.translate($(".viewier-area"));

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
        controlsMap["item-slider-"] = { prefixId: 'item-slider-', type: SLIDER_CONTROL,
            templateId: "#slider-control-template",
            viewer: createSliderViewer, results: saveSliderViewer};           
        controlsMap["item-essay-"] = { prefixId: 'item-essay-', type: ESSAY_CONTROL,
            templateId: "#essay-control-template",
            viewer: createEssayViewer, results: saveEssayViewer};
        controlsMap["item-static-text-"] = { prefixId: 'item-static-text-', type: STATIC_TEXT_CONTROL,
            templateId: "#static-text-control-template",
            viewer: createStaticTextViewer};                           

        if (callback) {
            callback();
        }
    }    

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
    
        var description = $(viewer).find(".form-description-editor .edit-point");
        var image = $(viewer).find("#form-image");
       
        if (!form.image) {
            $(viewer).find(".form-viewer-wrapper").hide();
        } else {
            $(viewer).find(".form-viewer-wrapper").show();                              
            $(image).attr("src", form.image);             
        }                       

        if (form.areas) {
            var areaList = $(viewer).find(".area-list");          
                   
            var area = form.areas[0];                       
            var areaListItem = $("#area-list-item-template").clone().prop("id", "area-list-item-" + area.id);                                                                                     
            $(areaListItem).find(".area-list-item-title").text(form.title);                                                                                                                                                                         
                
            $(areaList).append($(areaListItem));                 
            var areaViewer = createAreaEditor(area);                                                                                                                                                                       
            areaListItem.addClass("active");
            areaViewer.show();                                                                                                                  
        }     

		if(form.submit) {
			$("#form-editor-button-submit").val(form.submit);
			$("#form-editor-button-submit").html(form.submit);
		}
    }    

    function createAreaEditor(area) {

        var viewer = $("#area-viewer").clone().prop('id', "area-viewer-" + area.id);
        $("#area-content-viewer").append($(viewer));                                     

        var itemsArea = $(viewer).find(".column-view-wrapper");
        var questions = area.questions;
        for (var i = 0; i < questions.length; i++) {
            var question = questions[i];
            var itemPrototype = getPrototype(question);
            var item = createQuestionViewer(question, area, itemPrototype);
			if(item == null) {
				continue;
			}
            var itemLabel = $(item).find(".element-label .is-not-edit");                  
            $(itemsArea).append($(item));                         
        }        
        viewer.hide();      
        
        return viewer;
    }

    function createQuestionViewer(question, area, itemPrototype) {
		if(question.subtype == TEXT_THANK_YOU) {
			return null;
		}
        var item = $(itemPrototype.templateId).clone().prop("id", question.id);
        
        var controlRequiredLabel = $(item).find(".control-required-label"); 
        if (question.required) {
            $(controlRequiredLabel).show();
        } else {
            $(controlRequiredLabel).hide();
        }
              
        itemPrototype.viewer(item, question, area);                                                                                                                 
                         
        return item;
    }      
    
    function createCheckboxViewer(item, question, area) {
        var checkboxControl = $(item).find(".checkbox-control-label");
        var titleControlLabel = $(item).find(".checkbox-control-title-label");
        $(titleControlLabel).text(question.title);                  

        if (question.answers && question.answers.length > 0) {
            for (var i = 0; i < question.answers.length; i++) {
                var answer = question.answers[i];
                var id = answer.id;                
                
                var option = $("<div class='form-check form-field'><input type='checkbox' id='"
                    + id + "' value='" + id + "'/><label class='form-check-label' for='"
                    + id + "' title='" + getSafeTextForHtml(answer.text) + "'>" + answer.text + "</label></div>");

                $(checkboxControl).append(option);                                                                    
            }
        }

        if (question.results && question.results[0]) {
            for (var j = 0; j < question.results.length; j++) {
                if (question.results[j].id) {
                    $(checkboxControl).find("#" + question.results[j].id).attr("checked", "checked");
                }
           }
        }                
    }

    function createRadioViewer(item, question, area) {
        var radioControl = $(item).find(".radio-control-label");
        var titleControlLabel = $(item).find(".radio-control-title-label");
        $(titleControlLabel).text(question.title);                   

        if (question.answers && question.answers.length > 0) {
            for (var i = 0; i < question.answers.length; i++) {
                var answer = question.answers[i];
                var id = answer.id;
                var className;

                if (question.type == RADIO_HORIZONTAL_CONTROL) {
                    className = "form-check-horizontal form-field";
                    $(radioControl).addClass("form-check-horizontal-fieldset");
                } else {
                    className = "form-check form-field";
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
            }
        }          
    }

    function createDropdownViewer(item, question, area) {
        var dropdownControl = $(item).find(".dropdown-control-label");
        var titleControlLabel = $(item).find(".dropdown-control-title-label");
        $(titleControlLabel).text(question.title);                  
        
        if (question.answers && question.answers.length > 0) {
            var option = $("<option value='' title=''></option>");
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
            }
        }               
    }
  
    function createSliderViewer(item, question, area) {       
        var controlLabel = $(item).find(".slider-control-label");
        var handle = $(controlLabel).find(".custom-handle");         
        
        $(controlLabel).slider({
            min: question.min,
            max: question.max,
            step: question.step,
            create: function() {
                if (question.results && question.results[0]) {
                    $(this).slider("value", question.results[0].value);
                }
                handle.text($(this).slider("value"));
            },
            slide: function(event, ui) {
                handle.text(ui.value);               
            }
        });

        var titleControlLabel = $(item).find(".slider-control-title-label");
        $(titleControlLabel).text(question.title);                
    }   

    function createEssayViewer(item, question, area) {       
        var titleControlLabel = $(item).find(".essay-control-title-label");
        $(titleControlLabel).text(question.title);
        
        var field = $(item).find(".essay-control-label");
        if (question.results && question.results[0]) {            
            $(field).val(question.results[0].value);
        }                                 
    }
    
    function createStaticTextViewer(item, question, area) {       
        var titleControlLabel = $(item).find(".static-text-control-title-label");
        $(titleControlLabel).text(question.title);                                       
    } 

    function saveCheckboxViewer(question) {
        var results = [];
        var item = $("#" + question.id);
        var selectedAnswerIds = $(item).find("input:checked");
        for (var i = 0; i < selectedAnswerIds.length; i++) {
            var answer = getAnswerById(question, $(selectedAnswerIds[i]).val());
            results.push({
                id: answer.id,
                value: answer.value
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
                value: answer.value
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
                value: answer.value              
            });
        }
        return results;
    }
        
    function saveSliderViewer(question) {
        var results = [];
        var item = $("#" + question.id);
        var field = $(item).find(".slider-control-label");
        results.push({
            id: null,           
            value: $(field).slider("value")
        });
        return results;
    }   

    function saveEssayViewer(question) {
        var results = [];
        var item = $("#" + question.id);
        var field = $(item).find(".essay-control-label");
        results.push({
            id: null,        
            value: $(field).val()
        });
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

    this.exportData = function(debugMode) {
        var res = {
            form: cloneObject(form)
        };           
    
        var area = $.extend(true, {}, form.areas[0]);                                   
        for (var k = 0; k < area.questions.length; k++) {
            var question = area.questions[k];
            if (question.type != STATIC_TEXT_CONTROL) {
                var itemPrototype = getPrototype(question);
                question.results = itemPrototype.results(question);                   
            }                                                         
        }                                    
        res.form.areas = [];
        res.form.areas[0] = area;
         
        res.form.currentLanguage = currentLanguage;    

        if (debugMode) {                 
            download(JSON.stringify(res));             
        }

        return res;
    };
	
	this.exportResult = function(debugMode) {
        var res = this.exportData(debugMode);
		delete res.form.image;
		return res;
    };

    this.load = function(data, language, callback) {
        form = $.extend(true, {}, data.form); 
        
        if (!language) {
           currentLanguage = DEFAULT_SURVEY_LANGUAGE_CODE;  
        } else {
           currentLanguage = language;
        }
        
        if (form.pages) {
            if (viewerMode == PREVIEW_MODE && !form.pages[currentLanguage]) {
                form.title = "";
				form.submit = "Submit";
                form.areas = null;
            } else {
                if (!form.pages[currentLanguage]) {
                    currentLanguage = DEFAULT_SURVEY_LANGUAGE_CODE;
                }  
                form.title = form.pages[currentLanguage].title;
				form.submit = form.pages[currentLanguage].submit;
                form.areas = $.extend(true, {}, form.pages[currentLanguage].areas);
            }               
        }
        
        delete (form.pages);                                                             
        
        createViewer();
        
        if (viewerMode == PREVIEW_MODE) {
            this.setReadOnly();
        }
        
        if (form.customCSS) {
            var viewerMainElement = $(".viewier-area");
            var customViewerClassName = CUSTOM_CSS_CLASS_NAME + "-" + new Date().getMilliseconds();
            var regex = new RegExp(CUSTOM_CSS_CLASS_NAME, "g");
            var customViewerCSS = form.customCSS.replace(regex, customViewerClassName);            
            $("<style type='text/css'>" + customViewerCSS + "</style>").appendTo("head");
            
			if($(viewerMainElement).removeClassWild) {
				$(viewerMainElement).removeClassWild(CUSTOM_CSS_CLASS_NAME + "*");
			}
            $(viewerMainElement).addClass(customViewerClassName);               
        }    

        if (callback) {
            callback();
        }        
    }    
   
    this.saveForm = function () { 
        var isAllRequiredAnswered = true;      
       
        var area = form.areas[0];                                   
        for (var k = 0; k < area.questions.length; k++) {
            var question = area.questions[k];
            if (isAllRequiredAnswered && question.required && question.type != STATIC_TEXT_CONTROL && question.type != SLIDER_CONTROL && question.type != CHECKBOX_CONTROL) {
                var itemPrototype = getPrototype(question);
                var results = itemPrototype.results(question);
                if (!results || results.length == 0) {
                    isAllRequiredAnswered = false;
                } else {
                    if (question.type == ESSAY_CONTROL) {
                        if (!results[0].value) {
                            isAllRequiredAnswered = false; 
                        }
                    } else {                           
                        if (!results[0].id) {                             
                            isAllRequiredAnswered = false; 
                        } else {
                            var answer = getAnswerById(question, results[0].id);
                            if (answer.valueNA) {
                                isAllRequiredAnswered = false; 
                            }
                        }
                    }
                }  
            } else {
                if (isAllRequiredAnswered && question.required && question.type == CHECKBOX_CONTROL) {
                    var itemPrototype = getPrototype(question);
                    var results = itemPrototype.results(question);
                    if (results && results.length != 0) {
                        for (var i = 0; i < results.length; i++) {                           
                            var answer = getAnswerById(question, results[i].id);
                            if (answer.valueNA) {
                                isAllRequiredAnswered = false; 
                            }                           
                        }
                    }
                }
            }                                                         
        }           
                
        if (isAllRequiredAnswered) {                
            externalInterface.save(function (errorMessage) {
                if (errorMessage) {
                    alert(errorMessage);
                }     
            });
        } else {
            alert(translator.get("fillAllRequiredFields"));
        }           
    }  

    this.validateForm = function () { 
        var isAllRequiredAnswered = true;      
       
        var area = form.areas[0];                                   
        for (var k = 0; k < area.questions.length; k++) {
            var question = area.questions[k];
			var requiredAnswered = true;
            if (question.required && question.type != STATIC_TEXT_CONTROL && question.type != SLIDER_CONTROL && question.type != CHECKBOX_CONTROL) {			
                var itemPrototype = getPrototype(question);
                var results = itemPrototype.results(question);
                if (!results || results.length == 0) {
                    isAllRequiredAnswered = false;
					requiredAnswered = false;
                } else {
                    if (question.type == ESSAY_CONTROL) {
                        if (!results[0].value) {
                            isAllRequiredAnswered = false; 
							requiredAnswered = false;
                        }
                    } else {                           
                        if (!results[0].id) {                             
                            isAllRequiredAnswered = false;
							requiredAnswered = false;							
                        } else {
                            var answer = getAnswerById(question, results[0].id);
                            if (answer.valueNA) {
                                isAllRequiredAnswered = false; 
								requiredAnswered = false;
                            }
                        }
                    }
                }  
            } else {
                if (question.required && question.type == CHECKBOX_CONTROL) {
                    var itemPrototype = getPrototype(question);
                    var results = itemPrototype.results(question);
                    if (results && results.length != 0) {
                        for (var i = 0; i < results.length; i++) {                           
                            var answer = getAnswerById(question, results[i].id);
                            if (answer.valueNA) {
                                isAllRequiredAnswered = false; 
								requiredAnswered = false;
                            }                           
                        }
                    }
                }
            }
			if(question.required) {
				var item = $("#" + question.id);
				var itemLabel = $(item).find(".element-label .is-not-edit");
				requiredAnswered? $(itemLabel).css("color", "") : $(itemLabel).css("color", "red");							
			}
        }           
		if (!isAllRequiredAnswered) {       
			 alert(translator.get("fillAllRequiredFields"));
		}
		return isAllRequiredAnswered;
    }          

    this.setReadOnly = function () {
       readOnly = true;     
       $("#form-editor-button-submit").attr("disabled", "disabled");     
       $("#layout-parent-box-viewer :input").prop("disabled", true);
       $("#layout-parent-box-viewer").find(".slider-control-label").slider("option", "disabled", true);                  
    }         
};

