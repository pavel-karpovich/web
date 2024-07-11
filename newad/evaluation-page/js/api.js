var api = new function () {

    this.init = function (token, loginId) {
        this.token = token;
        this.loginId = loginId;
    };

    this.checkAuth = function () {
        return $.getJSON(this.tsUrl("/admin/rest/evaluation/auth/check?token=" + this.token));
    };

    // ===== Search API =====
    this.loadSavedSearches = function (cb) {
        return $.getJSON(this.tsUrl("/admin/rest/evaluation/saved-searches?token=" + this.token))
            .done(cb)
            .fail(cb ? apiErrorHandler : null);
    };

    this.getSearch = function (id, cb) {
        return $.getJSON(this.tsUrl("/admin/rest/evaluation/get-search/" + id + "?token=" + this.token))
            .done(cb)
            .fail(cb ? apiErrorHandler : null);
    };

    this.createSearch = function (data, cb) {
        return $.ajax({
            url: "/admin/rest/evaluation/create-search?token=" + this.token,
            type: "POST",
            data: JSON.stringify(data),
            dataType: "json",
            contentType: "application/json"
        })
            .done(cb)
            .fail(apiErrorHandlerOnSearchNameExists);
    };

    this.saveSearch = function (data, cb) {
        return $.ajax({
            url: "/admin/rest/evaluation/save-search?token=" + this.token,
            type: "POST",
            data: JSON.stringify(data),
            dataType: "json",
            contentType: "application/json"
        })
            .done(cb)
            .fail(apiErrorHandlerOnSearchNameExists);
    };

    this.moveSearch = function (id, data, cb) {
        return $.ajax({
            url: "/admin/rest/evaluation/move-search/" + id + "?token=" + this.token,
            type: "PUT",
            data: JSON.stringify(data),
            dataType: "json",
            contentType: "application/json"
        })
            .done(cb)
            .fail(apiErrorHandlerOnSearchNameExists);
    };

    this.removeSearch = function (id, cb) {
        return $.ajax({
            url: "/admin/rest/evaluation/remove-search/" + id + "?token=" + this.token,
            type: "DELETE",
            dataType: "text",
            contentType: "application/json"
        })
            .done(cb)
            .fail(cb ? apiErrorHandler : null);
    };

    this.searchByConditions = function (conditions, cb) {
        return $.ajax({
            url: "/admin/rest/evaluation/search?token=" + this.token,
            type: "POST",
            data: JSON.stringify(conditions),
            dataType: "json",
            contentType: "application/json"
        })
            .done(cb)
            .fail(cb ? apiErrorHandler : null);
    };

    this.getStatisticsCriterion = function (statistic, cb) {
        return $.ajax({
            url: "/admin/rest/evaluation/get-statistics-criterion?token=" + this.token,
            type: "POST",
            data: JSON.stringify(statistic),
            dataType: "json",
            contentType: "application/json"
        })
            .done(cb)
            .fail(cb ? apiErrorHandler : null);
    };

    this.searchByGiid = function (giids, cb) {
        giids = Array.isArray(giids) ? giids : [giids];
        return $.ajax({
            url: "/admin/rest/evaluation/search-by-giid?token=" + this.token,
            type: "POST",
            data: JSON.stringify(giids),
            dataType: "json",
            contentType: "application/json"
        })
            .done(cb)
            .fail(apiErrorHandler);
    };

    this.getEvalsStatistics = function (cb) {
        return $.getJSON(this.tsUrl("/admin/rest/evaluation/statistics?token=" + this.token))
            .done(cb)
            .fail(cb ? apiErrorHandler : null);
    };

    // ===== Console API =====
    this.loadMetadata = function (giid, mediaType, cdrId, cb) {
        var url = this.commonCdrIdUrl("/admin/rest/evaluation/metadata", giid, mediaType, cdrId, null);
        return $.getJSON(url)
            .done(cb)
            .fail(cb ? apiErrorHandler : null);
    };
    
    this.loadDispositions = function (serviceName, cb) {
        return $.getJSON(this.tsUrl("/admin/rest/evaluation/dispositions?token=" + this.token + "&serviceName=" + serviceName))
            .done(cb)
            .fail(cb ? apiErrorHandler : null);
    }
    
    this.updateDisposition = function (agentLoginId, dispositionId, notes, cb) {
	var data = {disposition:dispositionId, notes:notes};
        return $.ajax({
            url: this.tsUrl("/admin/rest/evaluation/update-disposition" + "?token=" + this.token + "&agentLoginId=" + agentLoginId),
            type: "POST",
            data: JSON.stringify(data),
            dataType: "text",
            contentType: "application/json"
        })
            .done(cb)
            .fail(apiErrorHandler);
    };

    this.getAuditLogPath = function (giid, agentLoginId, cb) {
        var url = this.commonUrl("/admin/rest/evaluation/get-audit-log-path", giid, null, agentLoginId);
        return $.get(url)
            .done(cb)
            .fail(cb ? apiErrorHandler : null);
    };

    this.getAttachmentDownloadPath = function (attachmentId, mediaType, cb) {
        return $.get(this.tsUrl("/admin/rest/evaluation/get-attachment-download-path?token=" + this.token + "&attachmentId=" + attachmentId + "&mediaType=" + mediaType))
            .done(cb)
            .fail(cb ? apiErrorHandler : null);
    };

    this.getOriginalEmailDownloadPath = function (emailId, cb) {
        return $.get(this.tsUrl("/admin/rest/evaluation/get-original-email-download-path?token=" + this.token + "&emailId=" + emailId))
            .done(cb)
            .fail(cb ? apiErrorHandler : null);
    };

    this.saveEvaluatorComment = function (giid, mediaType, cdrId, agentLoginId, comment, cb) {
        return $.ajax({
            url: this.commonCdrIdUrl("/admin/rest/evaluation/save-evaluator-comment", giid, mediaType, cdrId, agentLoginId),
            type: "POST",
            data: comment,
            dataType: "text",
            contentType: "application/json"
        })
            .done(cb)
            .fail(apiErrorHandler);
    };

    this.getCaseLog = function (caseId, serviceName, offset, cb) {
        return $.getJSON(this.tsUrl("/admin/rest/evaluation/get-case-log?token=" + this.token + "&caseId=" + caseId + "&offset=" + offset
            + "&serviceName=" + serviceName))
            .done(cb)
            .fail(cb ? apiErrorHandler : null);
    };

    // ===== Evaluation Form API =====
    this.getEvaluationForms = function (serviceName, giid, mediaType, agentLoginId, cb) {
        var url = this.commonUrl("/admin/rest/evaluation/get-evaluation-forms", giid, mediaType, agentLoginId)
            + "&serviceName=" + encodeURIComponent(serviceName);
        return $.getJSON(url)
            .done(cb)
            .fail(cb ? apiErrorHandler : null);
    };

    this.getAllEvalsInfo = function (giid, mediaType, agentLoginId, cb) {
        var url = this.commonUrl("/admin/rest/evaluation/get-all-evals-info", giid, mediaType, agentLoginId);
        return $.getJSON(url)
            .done(cb)
            .fail(cb ? apiErrorHandler : null);
    };

    this.getAllEvals = function (giid, mediaType, agentLoginId, cb) {
        var url = this.commonUrl("/admin/rest/evaluation/get-all-evals", giid, mediaType, agentLoginId);
        return $.getJSON(url)
            .done(cb)
            .fail(cb ? apiErrorHandler : null);
    };

    this.loadEvalsData = function (evalId, cb) {
        return $.getJSON(this.tsUrl("/admin/rest/evaluation/get-result-definition-by-id?token=" + this.token + "&evalId=" + evalId))
            .done(cb)
            .fail(cb ? apiErrorHandler : null);
    };

    this.loadEvaluationFormData = function (formId, giid, mediaType, cdrId, agentLoginId, cb) {
        var url = this.commonCdrIdUrl("/admin/rest/evaluation/get-result-definition", giid, mediaType, cdrId, agentLoginId) + "&formId=" + formId;
        return $.getJSON(url)
            .done(cb)
            .fail(cb ? apiErrorHandlerOnEvaluationFormDeleted : null);
    };

    this.deleteEvaluation = function (id, giid, agentLoginId, cb) {
        var url = this.commonUrl("/admin/rest/evaluation/remove-evaluation/" + id, giid, null, agentLoginId);
        return $.ajax({
            url: url,
            type: "DELETE",
            dataType: "text",
            contentType: "application/json"
        })
            .done(cb)
            .fail(apiErrorHandlerEvaluationDeleted);
    };

    this.reopenEvaluation = function (id, cb) {
        return $.ajax({
            url: "/admin/rest/evaluation/reopen-evaluation/" + id + "?token=" + this.token,
            type: "POST",
            dataType: "text",
            contentType: "application/json"
        })
            .done(cb)
            .fail(apiErrorHandlerOnEvaluationReopen);
    };

    this.bookmarkResultDefinition = function (data, cb, errorCb) {
        return submit("/admin/rest/evaluation/bookmark-result-definition", this.token, data, cb, errorCb);
    };

    this.assignEvaluations = function (formId, evalType, loginIds, identifiers, cb, errorCb) {
        loginIds = Array.isArray(loginIds) ? loginIds : [loginIds];
        identifiers = Array.isArray(identifiers) ? identifiers : [identifiers];
        var data = {
            formId: formId,
            evalType: evalType,
            loginIds: loginIds,
            identifiers: identifiers
        };
        return submit("/admin/rest/evaluation/assign-evaluation", this.token, data, cb, errorCb);
    };

    this.saveResultDefinition = function (data, cb, errorCb) {
        return submit("/admin/rest/evaluation/save-result-definition", this.token, data, cb, errorCb);
    };

    this.getScore = function (cb) {
        var params = "token=" + this.token + "&loginId=" + this.loginId;

        return $.when(
            $.getJSON(this.tsUrl("/admin/rest/evaluation/form-score?" + params)),
            $.getJSON(this.tsUrl("/admin/rest/evaluation/quality-score?" + params))
        )
            .then(function (formScoreData, qualityScoreData) {
                return {
                    formScore: formScoreData[0],
                    qualityScoreList: qualityScoreData[0]
                }
            })
            .done(cb)
            .fail(cb ? apiErrorHandler : null);
    };

    this.eraseInteraction = function (giid, mediaType, eraseData, cb) {
        return $.ajax({
            url: "/admin/rest/evaluation/erase-interaction?token=" + this.token + "&giid=" + giid + "&mediaType=" + mediaType,
            type: "DELETE",
            data: JSON.stringify(eraseData),
            dataType: "json",
            contentType: "application/json"
        })
            .done(cb)
            .fail(cb ? apiErrorHandler : null);
    };

    this.commonUrl = function (baseUrl, giid, mediaType, agentLoginId) {
        return this.commonCdrIdUrl(baseUrl, giid, mediaType, null, agentLoginId)
    };

    this.commonCdrIdUrl = function (baseUrl, giid, mediaType, cdrId, agentLoginId) {
        var url = this.tsUrl(baseUrl + "?token=" + this.token + "&giid=" + giid);
        if (!!mediaType) {
            url = url + "&mediaType=" + mediaType;
        }
        if (!!cdrId) {
            url = url + "&cdrId=" + cdrId;
        }
        if (!!agentLoginId) {
            url = url + "&agentLoginId=" + agentLoginId;
        }
        return url;
    };

    this.tsUrl = function (url) {
        return url + "&ts=" + Date.now();
    };

    this.handleError = function (jqXHR, textStatus, errorThrown) {
        console.log('API error', errorThrown);
        modals.showError(getErrorMessage(jqXHR));
    };

    this.handleErrorEvaluationDeleted = function (jqXHR, textStatus, errorThrown) {
        console.log('API error', errorThrown);
        modals.showError(getErrorMessageEvaluationDeleted(jqXHR));
    };

    this.handleErrorOnEvaluationReopen = function (jqXHR, textStatus, errorThrown) {
        console.log('API error', errorThrown);
        modals.showError(getErrorMessageOnEvaluationReopen(jqXHR));
    };

    this.handleErrorEvaluationFormDeleted = function (jqXHR, textStatus, errorThrown) {
        console.log('API error', errorThrown);
        modals.showError(getErrorMessageOnEvaluationFormDeleted(jqXHR));
    };

    this.handleErrorMessageOnSearchNameExists = function (jqXHR, textStatus, errorThrown) {
        console.log('API error', errorThrown);

        if (jqXHR.status === 409) {
            modals.showInfo('searchNameExists');
        } else {
            modals.showError(getErrorMessage(jqXHR));
        }
    };

    function submit(url, token, data, cb, errorCb) {
        return $.ajax({
            url: url + "?token=" + token,
            type: "POST",
            data: JSON.stringify(data),
            dataType: "json",
            contentType: "application/json"
        })
            .done(cb)
            .fail(function (e) {
                if (errorCb) {
                    errorCb(e);
                } else {
                    apiErrorHandler(e);
                }
            });
    }

    var apiErrorHandler = this.handleError.bind(this);
    var apiErrorHandlerEvaluationDeleted = this.handleErrorEvaluationDeleted.bind(this);
    var apiErrorHandlerOnEvaluationReopen = this.handleErrorOnEvaluationReopen.bind(this);
    var apiErrorHandlerOnEvaluationFormDeleted = this.handleErrorEvaluationFormDeleted.bind(this);
    var apiErrorHandlerOnSearchNameExists = this.handleErrorMessageOnSearchNameExists.bind(this);

    function getErrorMessage(jqXHR) {
        switch (jqXHR.status) {
            case 400:
                return jqXHR.responseJSON ? jqXHR.responseJSON.localizedMessage : jqXHR.responseText;
            case 401:
                return 'unauthorizedMsg';
            case 403:
                return 'forbiddenMsg';
            default:
                return 'serverErrorMsg';
        }
    }

    function getErrorMessageEvaluationDeleted(jqXHR) {
        return jqXHR.status === 404 ? 'evaluationWasDeletedByAnotherUser' : getErrorMessage(jqXHR);
    }

    function getErrorMessageOnEvaluationReopen(jqXHR) {
        return jqXHR.status === 406 ? 'evaluationWasReopenedByAnotherUser' : getErrorMessageEvaluationDeleted(jqXHR);
    }

    function getErrorMessageOnEvaluationFormDeleted(jqXHR) {
        return jqXHR.status === 404 ? 'evaluationFormWasDeleted' : getErrorMessage(jqXHR);
    }
};
