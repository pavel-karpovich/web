var formEditor = new function () {

	this.init = function(containerId, extInterface) {

        externalInterface = extInterface;
        var container = $("#" + containerId);

        $(container).removeAttr("style");
        
        $(container).load("evaluation/editor-layout-template.html?build=" + window.__buildVersion, function() {
            $(":root").css("overflow", "hidden");
            $("body").css("overflow", "hidden");           
            $(container).parents("div").removeAttr("style");   
            evaluationFormEditor.init();
            evaluationFormViewer.init(PREVIEW_MODE);            
        });                      
	};	
    
    this.getDefinition = function() {
        var data = evaluationFormEditor.exportData();
        var updatedAreas = [];
        if (data.linkedAreaList) {
            for (var i = 0; i < data.linkedAreaList.length; i++) {
                var areaId = data.linkedAreaList[i].id;
                var areaChanged = false;
                var areaCreated = false;
                var areaShared = false;
                var areaName = data.linkedAreaList[i].name;                 
                if (!areaName) {
                    areaName = data.linkedAreaList[i].title;
                }
                               
                if (data.linkedAreaList[i].created) {                
                    areaCreated = true; 
                } else {
                    if (data.linkedAreaList[i].changed) {
                        areaChanged = true;                        
                    }
                }
                if (data.linkedAreaList[i].shared) {                
                    areaShared = true; 
                }
                
                delete(data.linkedAreaList[i].created);
                delete(data.linkedAreaList[i].changed);
                delete(data.linkedAreaList[i].shared);
                var areaLayout = "{\"area\":" + JSON.stringify(data.linkedAreaList[i]) + "}"; 
                
                updatedAreas.push({
                    id: areaId,
                    layout: areaLayout,        
        	        name: areaName,
        	        changed: areaChanged,
        	        created: areaCreated,
        	        shared: areaShared
        	    });
            }
        }
        return {
        	layout: JSON.stringify(data.definition),        
        	name: evaluationFormEditor.getFormName(),
        	updatedAreas: JSON.stringify(updatedAreas)
        };
    };    
    
    this.setDefinition = function(name, definition, fullAreaList, linkedAreaList, draftInfo) {
        evaluationFormEditor.setFormName(name);
        if (fullAreaList) {                     
            evaluationFormEditor.setAreaList(JSON.parse(fullAreaList));
        } else {
            evaluationFormEditor.setAreaList([]);
        }
        if (linkedAreaList) {                     
            evaluationFormEditor.setLinkedAreaList(JSON.parse(linkedAreaList));
        } else {
            evaluationFormEditor.setLinkedAreaList([]);
        }
        if (definition) {        
            evaluationFormEditor.importData(JSON.parse(definition));
        } else {
            evaluationFormEditor.importEmptyData();
        }
        if (draftInfo) {
            evaluationFormEditor.handleDraft(JSON.parse(draftInfo));
        }
    };
    
    this.isChanged = function() {
        return evaluationFormEditor.isFormChanged();
    }
    this.isInitiated = function() {
        return evaluationFormEditor.isInitiated();        
    }       
    
}