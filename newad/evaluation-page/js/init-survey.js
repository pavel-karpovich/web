var formEditor = new function () {

	this.init = function(containerId, extInterface) {

        externalInterface = extInterface;
        var container = $("#" + containerId);

        $(container).removeAttr("style");
        
        $(container).load("evaluation/survey-editor-layout-template.html?v=" + window.__buildVersion, function() {
            $(":root").css("overflow", "hidden");
            $("body").css("overflow", "hidden");           
            $(container).parents("div").removeAttr("style");   
            surveyFormEditor.init();                  
        });
        
        surveyFormViewer.init(PREVIEW_MODE);                      
	};	
    
    this.getDefinition = function() {
        var data = surveyFormEditor.exportData();
        return {
        	layout: JSON.stringify(data.definition),        
        	name: surveyFormEditor.getFormName()
        };                         
    };    
    
    this.setDefinition = function(name, layout, customSurveyFields, languagesJSON) {
        if (languagesJSON) {
            surveyFormEditor.setLanguages(languagesJSON);
        }
        if (layout) {            
            surveyFormEditor.importData(JSON.parse(layout));
        }
        if (customSurveyFields) {
            surveyFormEditor.setCustomSurveyFields(customSurveyFields);
        }                      
        
        surveyFormEditor.setFormName(name);       
    };
    
    this.isChanged = function() {
        return surveyFormEditor.isFormChanged();
    }
    this.isInitiated = function() {
        return surveyFormEditor.isInitiated();        
    }       
    
}