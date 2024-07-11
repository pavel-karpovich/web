
var externalInterface

var evaluationFormEditor = new function() {

    const CONTROL_IN_CONTAINER_CLASS_NAME = 'control-in-container'
    const COPY_OF_PREFIX = 'Copy of '

    var DEFAULT_AREA = {
        id: 2,
        title: 'Title of the Area',
        weight: 1,
        image: '',
        description: '',
        created: true,
        shared: false,
        na: false,
        depth: 0,
        questions: [],
    }

    var DEFAULT_FORM = {
        id: 1,
        title: 'Title of the Form',
        minScore: DEFAULT_MIN_FORM_SCORE,
        score: 100,
        version: '1.0',
        image: '',
        description: '',
        areas: [],
    }

    var forms = []
    var form
    var itemIndex = new Date().getTime() / 1000 | 0
    var controlsMap = []
    var formName
    var isFormChanged = false
    var initiated = false
    var areaList = []
    var linkedAreaList = []
    var areaUsedNotifications = {}
    var areaUsedCache = {}
    var excludedLinks = {}
    var localStorageClipboard = ''
    var autoSaveIntervalId

    function initViewSize() {
        var headerHeight = 0
        if ($('.tempButtons').is(':visible')) {
            headerHeight = $('.tempButtons').height()
        }
        var winHeight = $('body').height()
        var fullHeight = winHeight - headerHeight
        $('.layout-parent-box-wrapper').height(fullHeight)
        $('#layout-parent-box').height(fullHeight - 16)
        $('.actions-list').height(fullHeight)

        $('.palette-wrapper.active').find('.slide-box').height(checkLeftColumnHeight())
    }

    function checkLeftColumnHeight() {
        var leftColumnHeight = $('.actions-col').height()
        var appNameHeight = $('.actions-col .app-name').height()
        var clipboardHeight = $('.actions-col .editor-clipboard').height()
        if (clipboardHeight > 0) {
            clipboardHeight = clipboardHeight + 16
        }
        var titleHeight = $('.actions-col .area-title').height() + 1
        var resHeight = leftColumnHeight - appNameHeight - clipboardHeight - titleHeight * 2
        return resHeight
    }

    function adjustEditorHeight(heightChanges) {
        if (!heightChanges) {
            heightChanges = 0
        }
        var headerBlockHeight = $('#content-header').height() + heightChanges
        var footerBlockHeight = $('#layout-parent-box').height() - headerBlockHeight
        $('#content-header').height(headerBlockHeight)
        $('#content-body').css('top', 0)
        $('#content-body').css('height', footerBlockHeight)
        $('#content-body').css('overflow-y', 'auto')
    }

    this.init = function() {
        externalInterface.loadAutoSaveSettings(function(result) {
            var settings = JSON.parse(result)

            if (settings.formAutoSave) {
                autoSaveIntervalId = setInterval(function() {
                    if (isFormChanged) {
                        externalInterface.autoSave()
                    }
                }, settings.autoSavePeriod * 60 * 1000) //period saved in minutes
            }
        })
        window.addEventListener('unload', function(e) {
            clearInterval(autoSaveIntervalId)

            if (isFormChanged) {
                externalInterface.deleteDraft()
            }
        })

        createFormEditorFromScratch()
        attachCtrlVListener(onPaste)
        attachLocalStorageChangeListener(onLocalStorageChanged)
        onLocalStorageChanged()

        initiated = true
    }

    function createFormEditorFromScratch() {
        initViewSize()
        $(window).resize(function() {
            initViewSize()
            adjustEditorHeight()
        })

        excludedLinks = {
            areas: {},
            questions: {},
            answers: {},
        }

        if (isIE) {
            if (typeof form === 'undefined')
                form = createDefaultForm()
            else {
                var area = createDefaultArea()
                form.areas.push(area)
            }
        } else
            form = createDefaultForm()

        translator.translate($('.main-site-area'))

        initControlTemplates()

        $('.main-site-area').addClass($('#form-style-selector').val())
        $('.palette-wrapper h4').click(function() {
            if (!$(this).parent('.palette-wrapper').hasClass('active')) {
                $('.palette-wrapper').find('.slide-box').css('height', '')
                $('.palette-wrapper').removeClass('active')
                $(this).parent('.palette-wrapper').addClass('active')
                $(this).next('.slide-box').height(checkLeftColumnHeight())
            }
        })

        createFormEditor(form.id)
        $('#area-palette-wrapper').show()
        $('#palette-wrapper').show()
        $('#palette-wrapper  h4').trigger('click')

        adjustEditorHeight()
    }

    function initAreaList() {
        var sharedAreaContainer = $('#area-palette-wrapper .slide-box')
        $(sharedAreaContainer).empty()

        for (var i = 0; i < areaList.length; i++) {
            var areaItem = $('#draggable-area-control').clone().prop('id', 'draggable-area-control-' + areaList[i].id)
            $(areaItem).find('.action-label').text(areaList[i].name)
            $(sharedAreaContainer).append($(areaItem))
            $(areaItem).draggable(dragOptions('.column-wrapper-area'))
            if (areaList[i].usedInOtherForm) {
                areaUsedNotifications[areaList[i].id] = areaList[i].name
            }
        }
    }

    function getNewId() {
        itemIndex = itemIndex + 1
        return itemIndex
    }

    function getNewAreaTitle() {
        var index = 1
        if (typeof form === 'undefined') {
            return 'New area'
        }
        var titles = form.areas.map(function(area) {
            return area.title
        })

        while (true) {
            var title = 'New area ' + index
            if (titles.indexOf(title) === -1) {
                return title
            }
            index++
        }
    }

    function checkAreaTitles() {
        var titles = []
        for (var i = 0; i < form.areas.length; i++) {
            var title = form.areas[i].title
            if (titles.indexOf(title) !== -1) {
                return false
            }
            titles.push(title)
        }
        return true
    }

    function loadFromAreaList(areaId, callback) {
        if (areaId) {
            for (var i = 0; i < areaList.length; i++) {
                if (areaList[i].id == areaId) {
                    if (!areaList[i].layout) {
                        externalInterface.loadArea(areaId, function(areaJSON) {
                            var area = JSON.parse(areaJSON)
                            areaList[i].layout = area.layout
                            callback(createAreaFromAreaList(i))
                        })
                    } else {
                        callback(createAreaFromAreaList(i))
                    }
                    return
                }
            }
        }
    }

    function createAreaFromAreaList(index) {
        var areaFromAreaList = areaList[index].layout.area
        var newArea = copyArea(areaFromAreaList, true)
        newArea.id = areaList[index].id
        newArea.name = areaList[index].name
        newArea.shared = true
        return newArea
    }

    function createDefaultArea() {
        var area = cloneObject(DEFAULT_AREA)
        area.id = getNewId()
        area.title = getNewAreaTitle()
        return area
    }

    function createDefaultForm() {
        var form = cloneObject(DEFAULT_FORM)
        var area = createDefaultArea()

        form.id = getNewId()
        form.areas.push(area)
        return form
    }

    function copyQuestion(source, withOldTitle) {
        var question = cloneObject(source)
        question.id = getNewId()

        question.answers = []
        if (source.answers) {
            for (var x = 0; x < source.answers.length; x++) {
                var sourceAnswer = source.answers[x]
                var answer = cloneObject(sourceAnswer)
                answer.id = getNewId()
                question.answers.push(answer)
            }
        }

        if (!withOldTitle) {
            if (question.title.indexOf(COPY_OF_PREFIX) == -1) {
                question.title = COPY_OF_PREFIX + question.title
            }
        }
        return question
    }

    function copyArea(source, withOldTitle) {
        var area = cloneObject(source)
        area.id = getNewId()
        area.questions = []
        for (var k = 0; k < source.questions.length; k++) {
            var sourceQuestion = source.questions[k]
            var question = copyQuestion(sourceQuestion, withOldTitle)
            area.questions.push(question)
        }

        if (!withOldTitle) {
            if (area.title.indexOf(COPY_OF_PREFIX) == -1) {
                area.title = COPY_OF_PREFIX + area.title
            }
        }
        return area
    }

    function initQuestionEditor(question, setter) {

        var clonedQuestion = $.extend(true, {}, question)

        var index = new Date().getMilliseconds()
        var questionEditor = $('#edit-question').clone().prop('id', '#edit-question-' + index)

        $(questionEditor).find('[id]').each(function() {
            $(this).prop('id', $(this).prop('id') + index)
        })
        $(questionEditor).find('[for]').each(function() {
            $(this).prop('for', $(this).prop('for') + index)
        })

        var questionTitle = $(questionEditor).find('.question-title')
        $(questionTitle).val(clonedQuestion.title)

        var questionWeight = $(questionEditor).find('.question-weight')
        $(questionWeight).val(clonedQuestion.weight)

        var textControl = $(questionEditor).find('.answer-text')
        var valueControl = $(questionEditor).find('.answer-value')
        var valueNAControl = $(questionEditor).find('.answer-value-na')
        $(valueNAControl).off('change').change(function() {
            if ($(valueNAControl).is(':checked')) {
                $(valueControl).val(null)
                $(valueControl).attr('disabled', 'disabled')
            } else {
                $(valueControl).removeAttr('disabled')
            }
        })

        var bonusControl = $(questionEditor).find('.answer-bonus')

        $(questionEditor).find('input[name=\'question-display-format\'][value=\'' + clonedQuestion.type + '\']').prop('checked', true)

        var optionsTable = $(questionEditor).find('.options-table tbody')
        var rowTemplate = $(optionsTable).children('tr:first')

        for (var i = 0; i < clonedQuestion.answers.length; i++) {
            createAnswer(questionEditor, optionsTable, clonedQuestion.answers[i], i == 0)
        }
        $(rowTemplate).remove()

        var firstRow = $(optionsTable).children('tr:first')
        $(firstRow).addClass('selected')
        $(firstRow).attr('selected', 'selected')

        $(optionsTable).sortable({
            appendTo: document.body,
            zIndex: 5555,
            helper: function(e, ui) {
                var obj = $(ui.get(0)).clone()
                $(obj).width($(ui.get(0)).width() - 50)
                $(obj).css('border', '1px solid gray')
                $(obj).css('background', '#ededed')
                $(obj).find('.remove-btn-box').hide()
                return obj
            },
            placeholder: {
                element: function(currentItem) {
                    return $('<tr><td colspan=\'6\'><div class=\'sortable-item-list-placeholder\'></div></td></tr>')[0]
                },
                update: function(container, p) {
                    return
                },
            },
            update: function(event, ui) {
            },
        })
        $(optionsTable).disableSelection()

        $(questionEditor).find('.add-question').click(function(event) {
            var answers = $(optionsTable).find('tr')

            if (answers.length === 25) {
                alertPopup(translator.get('numberOptionsLimit'))
            } else {
                var answer = {}
                answer.id = getNewId()
                answer.text = translator.get('none')
                answer.value = 0
                answer.valueNA = false
                answer.bonus = null
                answer.fails = false
                createAnswer(questionEditor, optionsTable, answer, false)
                event.preventDefault()
                event.stopPropagation()
                var rowTemplate = $(optionsTable).children('tr:last').trigger('click')
            }
        })

        var saveButton = $(questionEditor).find('.question-save')
        $(saveButton).click(function() {
            var isQuestionInputFieldsValid = checkQuestionInputFields(questionTitle, questionWeight)
            var isAnswerValid = checkAnswerInputFields(textControl, valueControl, bonusControl)

            if (isQuestionInputFieldsValid && isAnswerValid) {
                clonedQuestion.title = $(questionTitle).val()
                clonedQuestion.weight = parseFloat($(questionWeight).val())
                clonedQuestion.type = $(questionEditor).find('input[name=\'question-display-format\']:checked').val()
                clonedQuestion.answers = []

                $(optionsTable).children('tr[selected]').trigger('click')
                $(optionsTable).children('tr').each(function(index, currentRow) {
                    var currentAnswerAttr = $(currentRow).attr(ANSWER_ATTRIBUTE_NAME)
                    clonedQuestion.answers.push(JSON.parse(currentAnswerAttr))
                })

                setter(clonedQuestion)
                $(questionEditor).dialog('close')
            }
        })

        var cancelButton = $(questionEditor).find('.question-cancel')
        $(cancelButton).click(function() {
            $(questionTitle).css('border-color', '')
            $(questionWeight).css('border-color', '')
            $(textControl).css('border-color', '')
            $(valueControl).css('border-color', '')
            $(bonusControl).css('border-color', '')
            $(questionEditor).dialog('close')
        })

        $(questionEditor).keypress(function(e) {
            if (e.keyCode == KEYCODE_ENTER) {
                $(saveButton).trigger('click')
            } else {
                if (e.keyCode == KEYCODE_ESC) {
                    $(cancelButton).trigger('click')
                }
            }
        })

        $(questionEditor).dialog({
            title: null,
            width: 900,
            modal: true,
            resizable: false,
            draggable: false,
            open: function(event, ui) {
                $('.ui-dialog-titlebar').remove()
            },
        }).on('keydown', function(evt) {
            if (evt.keyCode === $.ui.keyCode.ESCAPE) {
                $(cancelButton).trigger('click')
                evt.stopPropagation()
            }
        })

        $(questionEditor).dialog().parent().draggable()
    }

    function createAnswer(questionEditor, optionsTable, answer, fillInputs) {
        var rowTemplate = $(optionsTable).children('tr:first')
        var row = $(rowTemplate).clone().attr('answer-id', answer.id)

        createAnswerGridRow(questionEditor, row, answer, fillInputs)
        $(row).attr(ANSWER_ATTRIBUTE_NAME, JSON.stringify(answer))

        $(row).click(function() {
            var currentSelectedRow = $(optionsTable).children('tr[selected]')

            if ($(currentSelectedRow).length) {
                var textControl = $(questionEditor).find('.answer-text')
                var valueControl = $(questionEditor).find('.answer-value')
                var bonusControl = $(questionEditor).find('.answer-bonus')

                var isValid = checkAnswerInputFields(textControl, valueControl, bonusControl)
                if (isValid) {
                    $(textControl).css('border-color', '')
                    $(valueControl).css('border-color', '')
                    $(bonusControl).css('border-color', '')

                    var currentAnswerAttr = $(currentSelectedRow).attr(ANSWER_ATTRIBUTE_NAME)
                    var currentAnswer = JSON.parse(currentAnswerAttr)
                    currentAnswer.text = $(textControl).val()

                    if ($(valueControl).val()) {
                        currentAnswer.value = parseFloat($(valueControl).val())
                    } else {
                        currentAnswer.value = null
                    }
                    var bonus = $(bonusControl).val()

                    if (bonus) {
                        currentAnswer.bonus = Math.round(parseFloat($(bonusControl).val()))
                    } else {
                        currentAnswer.bonus = null
                    }
                    currentAnswer.fails = $(questionEditor).find('.answer-fails').is(':checked')
                    currentAnswer.valueNA = $(questionEditor).find('.answer-value-na').is(':checked')

                    $(currentSelectedRow).attr(ANSWER_ATTRIBUTE_NAME, JSON.stringify(currentAnswer))
                    $(currentSelectedRow).removeAttr('selected')
                    createAnswerGridRow(questionEditor, currentSelectedRow, currentAnswer, false)

                    $(optionsTable).children('tr').removeClass('selected')
                    $(row).addClass('selected')
                    $(row).attr('selected', 'selected')

                    var newAnswerAttr = $(row).attr(ANSWER_ATTRIBUTE_NAME)
                    var newAnswer = JSON.parse(newAnswerAttr)
                    createAnswerGridRow(questionEditor, row, newAnswer, true)
                }
            } else {
                $(row).addClass('selected')
                $(row).attr('selected', 'selected')
                var newAnswerAttr = $(row).attr(ANSWER_ATTRIBUTE_NAME)
                var newAnswer = JSON.parse(newAnswerAttr)
                createAnswerGridRow(questionEditor, row, newAnswer, true)
            }
        })
        $(row).removeClass('selected')
        $(row).removeAttr('selected')

        $(row).find('.answer-trash').click(function() {
            deleteAnswer(optionsTable, this)
        })

        $(optionsTable).append(row)
    }

    function createAnswerGridRow(questionEditor, row, answer, fillInputs) {
        $(row).find('.col-text').text(answer.text)

        if (answer.valueNA) {
            $(row).find('.col-value').text(translator.get('na'))
        } else {
            $(row).find('.col-value').text(answer.value)
        }

        if (answer.fails) {
            $(row).find('.col-fails').text('x')
        } else {
            $(row).find('.col-fails').text('')
        }
        if (answer.bonus) {
            $(row).find('.col-bonus').text(answer.bonus)
        } else {
            $(row).find('.col-bonus').text('')
        }

        if (fillInputs) {
            $(questionEditor).find('.answer-text').val(answer.text)

            var valueControl = $(questionEditor).find('.answer-value')
            if (answer.valueNA) {
                $(valueControl).val(null)
                $(valueControl).attr('disabled', 'disabled')
            } else {
                $(valueControl).val(answer.value)
                $(valueControl).removeAttr('disabled')
            }
            $(questionEditor).find('.answer-value-na').prop('checked', answer.valueNA)

            $(questionEditor).find('.answer-bonus').val(answer.bonus)
            $(questionEditor).find('.answer-fails').prop('checked', answer.fails)
        }
    }

    function deleteAnswer(optionsTable, answerDeleteButton) {
        var answers = $(optionsTable).find('tr')
        if (answers.length > 1) {
            var currentRow = $(answerDeleteButton).closest('tr')
            $(currentRow).remove()
            var firstRow = $(optionsTable).children('tr:first')
            $(firstRow).trigger('click')
        } else {
            alertPopup(translator.get('youCannotDeleteThisItem'))
        }
    }

    function checkQuestionInputFields(titleControl, weightControl) {
        var isValid = true

        var weightControlValue = $(weightControl).val()
        if (weightControlValue) {
            var weightControlFloatValue = filterFloat(weightControlValue)
            if (isNaN(weightControlFloatValue)) {
                isValid = false
                $(weightControl).css('border-color', 'red')
            } else {
                if (weightControlFloatValue < 0.001 || weightControlFloatValue > 1000) {
                    isValid = false
                    $(weightControl).css('border-color', 'red')
                }
            }
        } else {
            isValid = false
            $(weightControl).css('border-color', 'red')
        }

        var titleControlValue = $(titleControl).val()
        if (!titleControlValue) {
            isValid = false
            $(titleControl).css('border-color', 'red')
        }

        return isValid
    }

    function checkAnswerInputFields(textControl, valueControl, bonusControl) {
        var isValid = true

        if (!$(textControl).val()) {
            isValid = false
            $(textControl).css('border-color', 'red')
        }

        var value = $(valueControl).val()
        if (value) {
            if (isNaN(value)) {
                isValid = false
                $(valueControl).css('border-color', 'red')
            } else {
                var numberValue = Number(value)
                if (numberValue < 0) {
                    isValid = false
                    $(valueControl).css('border-color', 'red')
                }
            }
        } else {
            if (!$(valueControl).attr('disabled')) {
                isValid = false
                $(valueControl).css('border-color', 'red')
            }
        }

        var bonus = $(bonusControl).val()
        if (bonus) {
            var numberBonus = Number(bonus)
            if (isNaN(numberBonus)) {
                isValid = false
                $(bonusControl).css('border-color', 'red')
            }
        }

        return isValid
    }

    function checkFormInputFields(minScoreControl, scoreControl) {
        var isValid = true
        $(minScoreControl).css('border-color', '')
        $(scoreControl).css('border-color', '')

        var scoreControlValue = $(scoreControl).val()
        if (scoreControlValue) {
            if (isNaN(scoreControlValue)) {
                isValid = false
                $(scoreControl).css('border-color', 'red')
            } else {
                var numberValue = Number(scoreControlValue)
                if (numberValue < 0) {
                    isValid = false
                    $(scoreControl).css('border-color', 'red')
                }
            }
        } else {
            isValid = false
            $(scoreControl).css('border-color', 'red')
        }

        var minScoreControlValue = $(minScoreControl).val()
        if (minScoreControlValue) {
            if (isNaN(minScoreControlValue)) {
                isValid = false
                $(minScoreControl).css('border-color', 'red')
            } else {
                var minNumberValue = Number(minScoreControlValue)
                if (+minScoreControlValue > +scoreControlValue || minNumberValue < 0) {
                    isValid = false
                    $(minScoreControl).css('border-color', 'red')
                }
            }
        } else {
            isValid = false
            $(minScoreControl).css('border-color', 'red')
        }

        return isValid
    }

    function checkAreaInputFields(titleControl, weightControl) {
        var isValid = true
        $(weightControl).css('border-color', '')
        $(titleControl).css('border-color', '')

        var weightControlValue = $(weightControl).val()
        if (weightControlValue) {
            var weightControlFloatValue = filterFloat(weightControlValue)
            if (isNaN(weightControlFloatValue)) {
                isValid = false
                $(weightControl).css('border-color', 'red')
            } else {
                if (weightControlFloatValue < 0 || weightControlFloatValue > 1000) {
                    isValid = false
                    $(weightControl).css('border-color', 'red')
                }
            }
        } else {
            isValid = false
            $(weightControl).css('border-color', 'red')
        }

        var titleControlValue = $(titleControl).val()
        if (!titleControlValue) {
            isValid = false
            $(titleControl).css('border-color', 'red')
        }

        return isValid
    }

    function initFormTitleEditor(title, minScore, score, setter) {

        var index = new Date().getMilliseconds()
        var formEditor = $('#edit-form-popup').clone().prop('id', '#edit-form-popup-' + index)

        $(formEditor).find('[id]').each(function() {
            $(this).prop('id', $(this).prop('id') + index)
        })
        $(formEditor).find('[for]').each(function() {
            $(this).prop('for', $(this).prop('for') + index)
        })

        var formTitle = $(formEditor).find('.form-title')
        $(formTitle).text(title)

        var minFormScore = $(formEditor).find('.min-form-score')
        $(minFormScore).val(minScore)

        var formScore = $(formEditor).find('.form-score')
        $(formScore).val(score)

        var saveButton = $(formEditor).find('.form-save-popup-button')
        $(saveButton).click(function() {
            var isValid = checkFormInputFields(minFormScore, formScore)
            if (isValid) {
                setter($(minFormScore).val(), $(formScore).val())
                setFormChanged(true)
                $(formEditor).dialog('close')
            }
        })

        var cancelButton = $(formEditor).find('.form-cancel-popup-button')
        $(cancelButton).click(function() {
            $(formScore).css('border-color', '')
            $(minFormScore).css('border-color', '')
            $(formEditor).dialog('close')
        })

        $(formEditor).keypress(function(e) {
            if (e.keyCode == KEYCODE_ENTER) {
                $(saveButton).trigger('click')
            } else {
                if (e.keyCode == KEYCODE_ESC) {
                    $(cancelButton).trigger('click')
                }
            }
        })

        $(formEditor).dialog({
            title: null,
            width: 700,
            modal: true,
            resizable: false,
            draggable: false,
            open: function(event, ui) {
                $('.ui-dialog-titlebar').remove()
            },
        }).on('keydown', function(evt) {
            if (evt.keyCode === $.ui.keyCode.ESCAPE) {
                $(cancelButton).trigger('click')
                evt.stopPropagation()
            }
        })
        $(formEditor).dialog().parent().draggable()
    }

    function createFormEditor(formId) {
        clearEditor()

        var formEditor = $('#form-editor').clone().prop('id', 'form-editor-' + formId)
        $('#content-header').append($(formEditor))

        if (formName) {
            form.title = formName
        }

        var formTitleControl = $(formEditor).find('.form-title-editor .edit-point')
        $(formTitleControl).text(form.title)

        if (form.minScore === undefined || form.minScore === null) {
            form.minScore = DEFAULT_MIN_FORM_SCORE
        }

        var minScoreControl = $('.min-score-box')
        $(minScoreControl).text(translator.get('minScore') + ': ' + form.minScore)

        var maxScoreControl = $('.max-score-box')
        $(maxScoreControl).text(translator.get('maxScore') + ': ' + form.score)

        $(formEditor).find('.form-title-editor').click(function() {
            initFormTitleEditor(form.title, form.minScore, form.score,
                function(minScore, score) {
                    form.minScore = minScore
                    form.score = score
                    $(minScoreControl).text(translator.get('minScore') + ': ' + form.minScore)
                    $(maxScoreControl).text(translator.get('maxScore') + ': ' + form.score)
                },
            )
        })

        var palette = $('#area-palette-wrapper')

        var itemsArea = $(formEditor).find('.column-wrapper-area')
        itemsArea.sortable({
            appendTo: document.body,
            zIndex: 5555,
            scroll: true,
            helper: function(e, ui) {
                var obj = $(ui.get(0)).clone().width('50%').css('border', '1px solid gray')
                $(obj).height(50)
                return $(obj)
            },
            placeholder: {
                element: function(currentItem) {
                    return $('<div class=\'sortable-item-list-placeholder\'></div>')[0]
                },
                update: function(container, p) {
                    return
                },
            },
            start: function(event, ui) {
                var isItemFromSameColumn = ui.item.hasClass(CONTROL_IN_CONTAINER_CLASS_NAME)
                if (isItemFromSameColumn) {
                    var affectedItemId = $(ui.item).prop('id').replace('area-item-', '')
                    var oldIndex = getAreaIndexById(form, affectedItemId)
                    for (var i = oldIndex + 1; i < form.areas.length; i++) {
                        if (form.areas[i].depth > form.areas[oldIndex].depth) {
                            var childAreaItem = $('#content-header').find('#area-item-' + form.areas[i].id)
                            $(childAreaItem).hide()
                        } else {
                            break
                        }
                    }
                }
            },
            stop: function(event, ui) {
                $('#content-header').find('.area-list-item').show()
            },
            update: function(event, ui) {
                var affectedItemId = null
                var isItemFromSameColumn = ui.item.hasClass(CONTROL_IN_CONTAINER_CLASS_NAME)
                if (!isItemFromSameColumn) {
                    if (ui.item.hasAttr(CLIPBOARD_JSON_ATTRIBUTE_NAME)) {
                        var jsonStr = ui.item.attr(CLIPBOARD_JSON_ATTRIBUTE_NAME)
                        var pastedAreaArray = JSON.parse(jsonStr)

                        if (!checkValidDepth(ui.item, pastedAreaArray)) {
                            return
                        }

                        for (var i = 0; i < pastedAreaArray.length; i++) {
                            var pastedArea = copyArea(pastedAreaArray[i], true)
                            form.areas.push(pastedArea)
                            var newBodyItem = createAreaBodyItem(pastedArea)
                            $('#content-body').append($(newBodyItem))
                            var newHeaderItem = createHeaderAreaItem(formEditor, pastedArea)
                            $(newHeaderItem).insertBefore(ui.item)
                            if (i == 0) {
                                affectedItemId = pastedArea.id
                            }
                            $('#content-header').height($('#content-header').height() + AREA_EDITOR_HEADER_HEIGHT)
                        }
                        ui.item.remove()
                        postItemUpdate(itemsArea, affectedItemId, false)
                        setAreaPercents(form.areas)
                        redrawAreaHeaderList(true)
                        $('#content-header').find('#area-item-' + affectedItemId).trigger('click')
                    } else {
                        var areaId = $(ui.item).prop('id').replace('draggable-area-control-', '')
                        loadFromAreaList(areaId, addNewArea)
                    }
                } else {
                    if (!checkValidDepth(ui.item)) {
                        return
                    }
                    affectedItemId = $(ui.item).prop('id').replace('area-item-', '')
                    postItemUpdate(itemsArea, affectedItemId, false)
                    redrawAreaHeaderList(true)
                }

                function checkValidDepth(currentItem, newAreaArray) {
                    var result = true
                    var rootDepth = 0
                    var maxDepth = 0
                    var maxBlockDepth = 0
                    var previousItem = $(currentItem).prev('.area-list-item')

                    if (previousItem.length) {
                        var previousItemId = previousItem.prop('id').replace('area-item-', '')
                        var previousItemIndex = getAreaIndexById(form, previousItemId)
                        rootDepth = form.areas[previousItemIndex].depth
                    }

                    if (newAreaArray) {
                        maxBlockDepth = getMaxAreaBlockDepth(pastedAreaArray, rootDepth, 0, 0)
                    } else {
                        var currentItemId = currentItem.prop('id').replace('area-item-', '')
                        var currentItemIndex = getAreaIndexById(form, currentItemId)
                        maxBlockDepth = getMaxAreaBlockDepth(form.areas, rootDepth, form.areas[currentItemIndex].depth, currentItemIndex)
                    }

                    maxDepth = rootDepth + maxBlockDepth
                    if (maxDepth > MAX_AREA_DEPTH) {
                        alertPopup(translator.get('limitAreaDepth'))
                        $(itemsArea).sortable('cancel')
                        if (newAreaArray) {
                            currentItem.remove()
                        }
                        result = false
                    }

                    return result
                }

                function addNewArea(newArea) {
                    form.areas.push(newArea)
                    var newBodyItem = createAreaBodyItem(newArea)
                    $('#content-body').append($(newBodyItem))
                    affectedItemId = newArea.id
                    $(palette).find('#draggable-area-control-' + newArea.id).hide()
                    var newHeaderItem = createHeaderAreaItem(formEditor, newArea)
                    $(newHeaderItem).insertBefore(ui.item)
                    ui.item.remove()
                    $(newHeaderItem).trigger('click')
                    postItemUpdate(itemsArea, affectedItemId, true)
                    setAreaPercents(form.areas)
                    redrawAreaHeaderList()
                }

                function postItemUpdate(container, affectedItemId, isNew) {
                    var items = $(container).children('.area-list-item')
                    if (items.length) {
                        var prevItemId = null
                        items.each(function(index, item) {
                            var currentItemId = $(item).prop('id').replace('area-item-', '')
                            if (currentItemId == affectedItemId) {
                                var newIndex = index
                                var oldIndex = getAreaIndexById(form, affectedItemId)
                                var newRootDepth = 0
                                var prevItemIndex = 0

                                if (prevItemId) {
                                    prevItemIndex = getAreaIndexById(form, prevItemId)
                                    newRootDepth = form.areas[prevItemIndex].depth
                                }

                                if (isNew) {
                                    form.areas.move(oldIndex, newIndex)
                                    if (form.areas[prevItemIndex].depth) {
                                        form.areas[newIndex].depth = form.areas[prevItemIndex].depth
                                    } else {
                                        form.areas[newIndex].depth = 0
                                    }
                                    $(item).css('padding-left', '+=' + (form.areas[newIndex].depth * AREA_DEPTH_PADDING_LEFT))
                                    var areaToCache = $.extend(true, {}, form.areas[newIndex])
                                    areaToCache.created = false
                                    areaToCache.changed = false
                                    areaUsedCache[areaToCache.id] = areaToCache
                                } else {
                                    dragAreaHeader(affectedItemId, newIndex, oldIndex, newRootDepth)
                                }
                            } else {
                                prevItemId = currentItemId
                            }
                        })
                    }
                }
            },
        })
        itemsArea.disableSelection()

        var areas = form.areas
        for (var i = 0; i < areas.length; i++) {
            var area = areas[i]
            var item = createAreaBodyItem(area)
            $('#content-body').append($(item))
            $(palette).find('#draggable-area-control-' + area.id).hide()

            var areaHeaderItem = createHeaderAreaItem(formEditor, area)

            if (i == 0) {
                areaHeaderItem.addClass('active')
                $('#content-body').find('#area-item-body-' + area.id).show()
            } else {
                $('#content-body').find('#area-item-body-' + area.id).hide()
            }
        }

        setAreaNumbers(form.areas)
        setAreaPercents(form.areas)

        $('#content-header').height(68 + form.areas.length * AREA_EDITOR_HEADER_HEIGHT)
        initResizible()
    }

    function dragAreaHeader(rootItemId, newIndex, oldIndex, newRootDepth) {
        var oldDepth = form.areas[oldIndex].depth
        var depthDelta = newRootDepth - oldDepth
        var areasCount = 0
        form.areas[oldIndex].depth = form.areas[oldIndex].depth + depthDelta
        for (var i = oldIndex + 1; i < form.areas.length; i++) {
            if (form.areas[i].depth <= oldDepth) {
                break
            } else {
                areasCount = areasCount + 1
                form.areas[i].depth = form.areas[i].depth + depthDelta
            }
        }

        var movedChildAreas = form.areas.splice(oldIndex + 1, areasCount)
        form.areas.move(oldIndex, newIndex)
        var targetIndex = getAreaIndexById(form, rootItemId) + 1
        var rootAreaItem = $('#content-header').find('#area-item-' + rootItemId)
        $(rootAreaItem).css('padding-left', '+=' + (depthDelta * AREA_DEPTH_PADDING_LEFT))

        for (var j = movedChildAreas.length - 1; j >= 0; j--) {
            form.areas.splice(targetIndex, 0, movedChildAreas[j])
            var movedAreaItem = $('#content-header').find('#area-item-' + movedChildAreas[j].id)
            $(movedAreaItem).css('padding-left', '+=' + (depthDelta * AREA_DEPTH_PADDING_LEFT))
            $(movedAreaItem).insertAfter($(rootAreaItem))
        }
    }

    function initResizible() {
        $('#content-body').resizable({
            handles: 'n',
            helper: 'resizable-helper',
            stop: function(event, ui) {
                adjustEditorHeight(ui.originalSize.height - ui.size.height)
            },
        })
    }

    function createHeaderAreaItem(formEditor, area, isNew) {
        var areaList = $(formEditor).find('.area-header-list')
        var areaListItem = $('#area-header-list-item-template').clone().prop('id', 'area-item-' + area.id)

        $(areaListItem).css('display', 'inline-block').css('width', '100%')

        $(areaListItem).click(function() {
            var areaId = $(this).prop('id').replace('area-item-', '')
            $(areaList).find('.area-list-item').removeClass('active')
            $('#content-body').find('.area-item-body').hide()
            $(this).addClass('active')
            $('#content-body').find('#area-item-body-' + areaId).show()
        })

        $(areaListItem).addClass(CONTROL_IN_CONTAINER_CLASS_NAME + ' draggable-control')

        if (!isNew) {
            $(areaList).append($(areaListItem))
            setAreaHeaderContent($(areaListItem), area)
        }

        var addNewAreaButton = $(areaListItem).find('.add-new-area-button')
        $(addNewAreaButton).click(function(event) {
            var newArea = createDefaultArea()
            newArea.name = newArea.title
            newArea.created = true
            form.areas.push(newArea)

            var newBodyItem = createAreaBodyItem(newArea)
            $(newBodyItem).hide()
            $('#content-body').append($(newBodyItem))

            var newHeaderItem = createHeaderAreaItem(formEditor, newArea, false)
            setAreaHeaderContent($(newHeaderItem), newArea)

            setAreaPercents(form.areas)
            redrawAreaHeaderList()

            event.preventDefault()
            event.stopPropagation()
            $(newHeaderItem).trigger('click')
        })

        $(areaListItem).find('.remove-area-button').click(function() {
            if (form.areas.length == 1) {
                alertPopup(translator.get('lastAreaCannotDeleted'))
            } else {
                confirmDeletePopup(translator.get('confirmDelete', area.title), function() {
                    var headerAreaItem = $(this).closest('.area-list-item')
                    var isHeaderAreaItemActive = $(headerAreaItem).hasClass('active')
                    var areaId = $(headerAreaItem).prop('id').replace('area-item-', '')
                    $(headerAreaItem).remove()
                    $('#content-body').find('#area-item-body-' + areaId).remove()

                    getChildAreas(getAreaById(form, areaId)).forEach(function(childArea) {
                        childArea.depth -= 1
                    })

                    var index = getAreaIndexById(form, areaId)
                    if (index > -1) {
                        form.areas.splice(index, 1)
                    }

                    if (isHeaderAreaItemActive) {
                        if (index >= form.areas.length) {
                            index = index - 1
                        }
                        $('#content-header').find('#area-item-' + form.areas[index].id).trigger('click')
                    }

                    if (excludedLinks.areas[areaId]) {
                        for (var i = 0; i < excludedLinks.areas[areaId].length; i++) {
                            var areaWithExcluded = getAreaById(form, excludedLinks.areas[areaId][i])
                            if (areaWithExcluded) {
                                areaWithExcluded.excluded = null
                                var areaExclidedLabel = $('#content-body').find('#area-item-body-' + areaWithExcluded.id + ' .area-exclided-label').empty()
                            }
                        }
                        delete excludedLinks.areas[areaId]
                    }

                    redrawAreaHeaderList(true)
                    setAreaPercents(form.areas)
                    renderAreas()
                    $('#content-header').height($('#content-header').height() - AREA_EDITOR_HEADER_HEIGHT)
                    $('#area-palette-wrapper').find('#draggable-area-control-' + area.id).show()
                }.bind(this))
            }
        })

        var copyAreaButton = $(areaListItem).find('.copy-area-button')
        $(copyAreaButton).click(function() {
            var copiedAreas = []
            var rootArea = copyArea(area, true)
            rootArea.name = rootArea.title
            rootArea.created = true
            rootArea.shared = false
            rootArea.depth = 0
            copiedAreas.push(rootArea)

            var currentIndex = getAreaIndexById(form, area.id)

            for (var i = currentIndex + 1; i < form.areas.length; i++) {
                if (form.areas[i].depth <= area.depth) {
                    break
                } else {
                    var innerArea = copyArea(form.areas[i], true)
                    innerArea.name = innerArea.title
                    innerArea.created = true
                    innerArea.shared = false
                    innerArea.excluded = null
                    innerArea.depth = form.areas[i].depth - area.depth
                    copiedAreas.push(innerArea)
                }
            }

            addToClipboard(copiedAreas, true)
        })

        var deptUpAreaButton = $(areaListItem).find('.depth-area-up-button')
        $(deptUpAreaButton).click(function() {
            var currentAreaItem = $(this).closest('.area-list-item')
            var areaId = $(currentAreaItem).prop('id').replace('area-item-', '')
            var currentIndex = getAreaIndexById(form, areaId)
            var targetAreaId = 0
            var oldDepth = form.areas[currentIndex].depth

            if (oldDepth > 0) {
                targetAreaId = form.areas[currentIndex - 1].id
                moveAreaHeaderBlock(areaId, targetAreaId, oldDepth - 1)
                setAreaNumbers(form.areas)
            }
        })

        var deptDownAreaButton = $(areaListItem).find('.depth-area-down-button')
        $(deptDownAreaButton).click(function() {
            var currentAreaItem = $(this).closest('.area-list-item')
            var areaId = $(currentAreaItem).prop('id').replace('area-item-', '')
            var currentIndex = getAreaIndexById(form, areaId)
            var targetAreaId = 0
            var oldDepth = form.areas[currentIndex].depth

            if (currentIndex != 0) {
                var isExistRootArea = false
                for (var i = currentIndex - 1; i >= 0; i--) {
                    if (form.areas[i].depth == oldDepth) {
                        isExistRootArea = true
                        break
                    } else {
                        if (form.areas[i].depth == 0) {
                            break
                        }
                    }
                }

                targetAreaId = form.areas[currentIndex - 1].id
                if (isExistRootArea && checkMaxAreaBlockDepth(areaId, oldDepth + 1)) {
                    moveAreaHeaderBlock(areaId, targetAreaId, oldDepth + 1)
                    setAreaNumbers(form.areas)
                }
            }
        })

        $(areaListItem).css('padding-left', '+=' + (area.depth * AREA_DEPTH_PADDING_LEFT))

        return areaListItem
    }

    function checkMaxAreaBlockDepth(rootAreaId, newRootDepth) {
        if (newRootDepth > MAX_AREA_DEPTH) {
            alertPopup(translator.get('limitAreaDepth'))
            return false
        } else {
            var currentIndex = getAreaIndexById(form, rootAreaId)
            var oldDepth = form.areas[currentIndex].depth
            var maxDepthInBlock = getMaxAreaBlockDepth(form.areas, newRootDepth, oldDepth, currentIndex)
            if (maxDepthInBlock > MAX_AREA_DEPTH) {
                alertPopup(translator.get('limitAreaDepth'))
                return false
            }
        }

        return true
    }

    function getMaxAreaBlockDepth(areaList, newRootDepth, oldDepth, currentIndex) {
        var maxDepthInBlock = 0
        var depthDelta = newRootDepth - oldDepth

        for (var i = currentIndex + 1; i < areaList.length; i++) {
            if (areaList[i].depth <= oldDepth) {
                break
            } else {
                var currentAreaDepth = areaList[i].depth + depthDelta
                if (currentAreaDepth > maxDepthInBlock) {
                    maxDepthInBlock = currentAreaDepth
                }
            }
        }

        return maxDepthInBlock
    }

    function moveAreaHeaderBlock(rootAreaId, targetAreaId, newRootDepth) {
        var currentIndex = getAreaIndexById(form, rootAreaId)
        var oldDepth = form.areas[currentIndex].depth
        var depthDelta = newRootDepth - oldDepth

        var areasCount = 1
        form.areas[currentIndex].depth = form.areas[currentIndex].depth + depthDelta
        for (var i = currentIndex + 1; i < form.areas.length; i++) {
            if (form.areas[i].depth <= oldDepth) {
                break
            } else {
                areasCount = areasCount + 1
                form.areas[i].depth = form.areas[i].depth + depthDelta
            }
        }

        var movedAreas = form.areas.splice(currentIndex, areasCount)

        var targetIndex = 0
        var targetAreaItem = null
        if (targetAreaId) {
            targetIndex = getAreaIndexById(form, targetAreaId) + 1
            targetAreaItem = $('#content-header').find('#area-item-' + targetAreaId)
        }

        for (var j = movedAreas.length - 1; j >= 0; j--) {
            form.areas.splice(targetIndex, 0, movedAreas[j])
            var movedAreaItem = $('#content-header').find('#area-item-' + movedAreas[j].id)
            $(movedAreaItem).css('padding-left', '+=' + (depthDelta * AREA_DEPTH_PADDING_LEFT))
            if (targetAreaItem) {
                $(movedAreaItem).insertAfter($(targetAreaItem))
            } else {
                $('#content-header').prepend($(movedAreaItem))
            }
        }
    }

    function redrawAreaHeaderList(withoutResise) {
        setAreaNumbers(form.areas)
        setFormChanged(true)

        if (!withoutResise) {
            $('#content-header').height($('#content-header').height() + AREA_EDITOR_HEADER_HEIGHT)
        }
    }

    function initNameEditor(name, validator, errorAlreadyExistsMessage, setter, title) {

        var index = new Date().getMilliseconds()
        var nameEditor = $('#edit-name-popup').clone().prop('id', '#edit-name-popup-' + index)

        $(nameEditor).find('[id]').each(function() {
            $(this).prop('id', $(this).prop('id') + index)
        })
        $(nameEditor).find('[for]').each(function() {
            $(this).prop('for', $(this).prop('for') + index)
        })

        if (title) {
            $(nameEditor).find('.edit-name-title').text(translator.get(title))
        }

        var nameControl = $(nameEditor).find('.name-popup-control')
        $(nameControl).val(name)

        var saveButton = $(nameEditor).find('.name-save-popup-button')
        $(saveButton).click(function() {
            var newName = $(nameControl).val()
            if (newName) {
                validator(newName, function(isValid) {
                    if (isValid) {
                        $(nameControl).css('border-color', '')
                        setter(newName)
                        $(nameEditor).dialog('close')
                    } else {
                        alertPopup(translator.get(errorAlreadyExistsMessage))
                        $(nameControl).css('border-color', 'red')
                    }
                })
            } else {
                $(nameControl).css('border-color', 'red')
            }
        })

        var cancelButton = $(nameEditor).find('.name-cancel-popup-button')
        $(cancelButton).click(function() {
            $(nameControl).css('border-color', '')
            $(nameEditor).dialog('close')
        })

        $(nameEditor).keypress(function(e) {
            if (e.keyCode == KEYCODE_ENTER) {
                $(saveButton).trigger('click')
            } else {
                if (e.keyCode == KEYCODE_ESC) {
                    $(cancelButton).trigger('click')
                }
            }
        })

        $(nameEditor).dialog({
            title: null,
            width: 900,
            modal: true,
            open: function(event, ui) {
                $('.ui-dialog-titlebar').remove()
            },
        }).on('keydown', function(evt) {
            if (evt.keyCode === $.ui.keyCode.ESCAPE) {
                $(cancelButton).trigger('click')
                evt.stopPropagation()
            }
        })
    }

    function initAreaTitleEditor(area, setter) {
        var title = area.title
        var weight = area.weight
        var failureForm = area.failureForm
        var shared = area.shared
        var na = area.na
        var excluded = area.excluded
        var created = area.created
        var copied = false

        var index = new Date().getMilliseconds()
        var areaEditor = $('#edit-area-popup').clone().prop('id', '#edit-area-popup-' + index)
        var newAreaName = null

        $(areaEditor).find('[id]').each(function() {
            $(this).prop('id', $(this).prop('id') + index)
        })
        $(areaEditor).find('[for]').each(function() {
            $(this).prop('for', $(this).prop('for') + index)
        })

        var areaTitle = $(areaEditor).find('.area-input-title')
        $(areaTitle).val(title)
        var onAreaEditDebounce = $.debounce(500, true, function() {
            onAreaEdit(area, null, function(eventType) {
                if (eventType === 'cancel') {
                    $(areaTitle).val(area.title)
                } else if (eventType === 'makeLocalCopy') {
                    $(areaShare).prop('checked', false)
                    copied = true
                }
            })
        })
        areaTitle.on('input', onAreaEditDebounce)

        var areaWeight = $(areaEditor).find('.area-weight')
        $(areaWeight).val(weight)

        var areaFailureForm = $(areaEditor).find('.area-fails-form')
        $(areaFailureForm).prop('checked', failureForm)

        var areaShare = $(areaEditor).find('.area-share')
        $(areaShare).prop('checked', shared)
        $(areaShare).click(function() {
            if ($(this).is(':checked')) {
                initNameEditor($(areaTitle).val(), externalInterface.checkAreaName, 'areaNameExists', function(areaName) {
                    newAreaName = areaName
                },
                'newAreaName')
            }
        })

        var areaNA = $(areaEditor).find('.area-na')
        $(areaNA).prop('checked', na)

        $(areaEditor).find('.click-line span').click(function() {
            $(areaEditor).find('.excluded-content').toggle()
        })

        var excludedLabel = $(areaEditor).find('.excluded-label')
        var areaComboBox = $(areaEditor).find('.excluded-area')
        var questionComboBox = $(areaEditor).find('.excluded-question')
        var answerComboBox = $(areaEditor).find('.excluded-answer')

        $(areaComboBox).find('option').remove()
        fullAreasComboBox(form.areas, areaComboBox)
        if (excluded) {
            $(areaComboBox).val(excluded.areaId)
            fullQuestionsComboBox(excluded.areaId, questionComboBox)
            $(questionComboBox).val(excluded.questionId)
            fullAnswersComboBox(excluded.areaId, excluded.questionId, answerComboBox)
            $(answerComboBox).val(excluded.answerId)
            $(areaEditor).find('input[name=\'excludedType\'][value=\'' + excluded.excludedType + '\']').prop('checked', true)
            fullAreaExcludedLabel(excludedLabel,
                $(areaComboBox).val(), $(questionComboBox).val(), $(answerComboBox).val(), getSelectedTypeLabel(areaEditor),
                translator.get('none'))
        } else {
            $(areaComboBox).val(null)
            $(questionComboBox).val(null)
            $(answerComboBox).val(null)
            $(areaEditor).find('input[name=\'excludedType\'][value=\'' + SELECTED + '\']').prop('checked', true)
        }

        $(areaComboBox).change(function() {
            fullQuestionsComboBox($(areaComboBox).val(), questionComboBox)
            fullAnswersComboBox($(areaComboBox).val(), $(questionComboBox).val(), answerComboBox)
            fullAreaExcludedLabel(excludedLabel,
                $(areaComboBox).val(), $(questionComboBox).val(), $(answerComboBox).val(), getSelectedTypeLabel(areaEditor),
                translator.get('none'))
        })

        $(questionComboBox).change(function() {
            fullAnswersComboBox($(areaComboBox).val(), $(questionComboBox).val(), answerComboBox)
            fullAreaExcludedLabel(excludedLabel,
                $(areaComboBox).val(), $(questionComboBox).val(), $(answerComboBox).val(), getSelectedTypeLabel(areaEditor),
                translator.get('none'))
        })

        $(answerComboBox).change(function() {
            fullAreaExcludedLabel(excludedLabel,
                $(areaComboBox).val(), $(questionComboBox).val(), $(answerComboBox).val(), getSelectedTypeLabel(areaEditor),
                translator.get('none'))
        })

        $(areaEditor).find('input[name=\'excludedType\']').change(function() {
            fullAreaExcludedLabel(excludedLabel,
                $(areaComboBox).val(), $(questionComboBox).val(), $(answerComboBox).val(), getSelectedTypeLabel(areaEditor),
                translator.get('none'))
        })

        var deleteExcludedButton = $(areaEditor).find('.click-line-delete')
        $(deleteExcludedButton).click(function() {
            $(areaComboBox).val(null)
            $(questionComboBox).val(null)
            $(answerComboBox).val(null)
            $(areaEditor).find('input[name=\'excludedType\'][value=\'' + SELECTED + '\']').prop('checked', true)
            fullAreaExcludedLabel(excludedLabel,
                $(areaComboBox).val(), $(questionComboBox).val(), $(answerComboBox).val(), getSelectedTypeLabel(areaEditor),
                translator.get('none'))
        })

        var saveButton = $(areaEditor).find('.area-save-popup-button')
        $(saveButton).click(function() {
            var isValid = checkAreaInputFields(areaTitle, areaWeight)
            if (isValid) {
                var newExcludedValue = null

                if ($(answerComboBox).val()) {
                    newExcludedValue = {
                        areaId: $(areaComboBox).val(),
                        questionId: $(questionComboBox).val(),
                        answerId: $(answerComboBox).val(),
                        excludedType: $(areaEditor).find('input[name=\'excludedType\']:checked').val(),
                    }
                }

                var sharedUpdated = $(areaShare).is(':checked')
                var titleUpdated = $(areaTitle).val()

                var setAndClose = function() {
                    setter(
                        titleUpdated,
                        $(areaWeight).val(),
                        $(areaFailureForm).is(':checked'),
                        sharedUpdated,
                        $(areaNA).is(':checked'),
                        newExcludedValue,
                        newAreaName,
                        copied,
                    )
                    setFormChanged(true)
                    $(areaEditor).dialog('close')
                }

                if (!copied && shared && !sharedUpdated && !created) {
                    confirmPopup(translator.get('areaUnsharedTitle'), translator.get('areaUnsharedText', titleUpdated),
                        setAndClose)
                } else {
                    setAndClose()
                }
            }
        })

        var cancelButton = $(areaEditor).find('.area-cancel-popup-button')
        $(cancelButton).click(function() {
            $(areaTitle).css('border-color', '')
            $(areaWeight).css('border-color', '')
            $(areaEditor).dialog('close')
        })

        $(areaEditor).keypress(function(e) {
            if (e.keyCode == KEYCODE_ENTER) {
                $(saveButton).trigger('click')
            } else {
                if (e.keyCode == KEYCODE_ESC) {
                    $(cancelButton).trigger('click')
                }
            }
        })

        $(areaEditor).dialog({
            title: null,
            width: 900,
            modal: true,
            resizable: true,
            draggable: false,
            open: function(event, ui) {
                $('.ui-dialog-titlebar').remove()
            },
        }).on('keydown', function(evt) {
            if (evt.keyCode === $.ui.keyCode.ESCAPE) {
                $(cancelButton).trigger('click')
                evt.stopPropagation()
            }
        })

        $(areaEditor).dialog().parent().draggable()
    }

    function getSelectedTypeLabel(areaEditor) {
        var checkedId = $(areaEditor).find('input[name=\'excludedType\']:checked').prop('id')
        return $(areaEditor).find('[for*=\'' + checkedId + '\']').html()
    }

    function fullAreaExcludedLabel(label, areaId, questionId, answerId, type, defaultValue) {
        var text = ''

        if (areaId && questionId && answerId) {
            text = text + translator.get('excludedBy') + ' '
            var area = getAreaById(form, areaId)
            var question = area.questions[getQuestionIndexById(area, questionId)]
            var answer = getAnswerById(question, answerId)
            var questionItem = $('#content-body #area-item-body-' + areaId + ' [data-question-id*=\'' + questionId + '\']')
            text = text + $(questionItem).find('.control-list-item-number').text() + ' '
            text = text + question.title + ':'
            text = text + answer.text
            if (type) {
                text = text + ' ' + type
            }
        } else {
            if (defaultValue) {
                text = defaultValue
            }
        }

        $(label).text(text)
    }

    function fullAreasComboBox(areas, areaComboBox) {
        for (var i = 0; i < areas.length; i++) {
            var option = $('<option value=\'' + areas[i].id + '\'>' + areas[i].title + '</option>')
            $(areaComboBox).append(option)

            if (areas[i].areas) {
                fullAreasComboBox(areas[i].areas, areaComboBox)
            }
        }
    }

    function fullQuestionsComboBox(areaId, questionComboBox) {
        var area = getAreaById(form, areaId)
        $(questionComboBox).find('option').remove()

        for (var i = 0; i < area.questions.length; i++) {
            var option = $('<option value=\'' + area.questions[i].id + '\'>' + area.questions[i].title + '</option>')
            $(questionComboBox).append(option)
        }
    }

    function fullAnswersComboBox(areaId, questionId, answerComboBox) {
        var area = getAreaById(form, areaId)
        $(answerComboBox).find('option').remove()

        var question = area.questions[getQuestionIndexById(area, questionId)]
        if (question) {
            for (var i = 0; i < question.answers.length; i++) {
                var option = $('<option value=\'' + question.answers[i].id + '\'>' + question.answers[i].text + '</option>')
                $(answerComboBox).append(option)
            }
        }
    }

    function setAreaHeaderContent(headerAreaItem, area, withoutBonus) {
        $(headerAreaItem).find('.area-list-item-title').text(area.title)
        if (!area.failureForm) {
            $(headerAreaItem).find('.area-fails-label').hide()
        } else {
            $(headerAreaItem).find('.area-fails-label').show()
        }
        if (!area.shared) {
            $(headerAreaItem).find('.area-share-label').hide()
        } else {
            $(headerAreaItem).find('.area-share-label').show()
        }
        if (!area.na) {
            $(headerAreaItem).find('.area-na-label').hide()
        } else {
            $(headerAreaItem).find('.area-na-label').show()
        }

        if (!withoutBonus) {
            setAreaHeaderBonus(headerAreaItem, area)
        }
    }

    function setAreaHeaderBonus(headerAreaItem, area) {
        $(headerAreaItem).find('.area-bonus-label').hide()
        var questions = area.questions
        for (var i = 0; i < questions.length; i++) {
            var question = questions[i]
            for (var j = 0; j < question.answers.length; j++) {
                var answer = question.answers[j]
                if (answer.bonus) {
                    $(headerAreaItem).find('.area-bonus-label').show()
                    return
                }
            }
        }
    }

    function setAreaNumbers(areas) {
        var depthBuffer = []
        var currentDepth = 0

        for (var i = 0; i < areas.length; i++) {
            var numberPrefix = ''
            var area = areas[i]

            if (area.depth < currentDepth) {
                for (var k = depthBuffer.length - 1; k > area.depth; k--) {
                    depthBuffer[k] = 0
                }
            }
            currentDepth = area.depth

            if (depthBuffer.length < (currentDepth + 1)) {
                depthBuffer.push(1)
            } else {
                depthBuffer[currentDepth] = depthBuffer[currentDepth] + 1
            }

            for (var j = 0; j < area.depth; j++) {
                numberPrefix = numberPrefix + depthBuffer[j] + '.'
            }

            var areaItemHeader = $('#content-header').find('#area-item-' + area.id)
            $(areaItemHeader).find('.area-list-item-number').text(numberPrefix + depthBuffer[currentDepth])
            var areaItemBody = $('#content-body').find('#area-item-body-' + area.id)
            $(areaItemBody).find('.area-list-item-number').text(numberPrefix + depthBuffer[currentDepth])
            setQuestionNumbers(area)
        }

        for (var j = 0; j < areas.length; j++) {
            if (areas[j].excluded) {
                var areaExclidedLabel = $('#content-body').find('#area-item-body-' + areas[j].id + ' .area-exclided-label')
                fullAreaExcludedLabel(areaExclidedLabel,
                    areas[j].excluded.areaId, areas[j].excluded.questionId, areas[j].excluded.answerId, null, null)
            }
        }
    }

    function setQuestionNumbers(area) {
        var areaItemBody = $('#content-body').find('#area-item-body-' + area.id)
        var areaIndex = $(areaItemBody).find('.area-list-item-number').text()
        var questions = area.questions
        for (var i = 0; i < questions.length; i++) {
            var question = questions[i]
            $(areaItemBody).find('[data-question-id*=\'' + question.id + '\'] .control-list-item-number').text(areaIndex + '-' + (i + 1))
        }
    }

    function setAreaPercents(areas) {
        var weightsSummary = 0
        for (var i = 0; i < areas.length; i++) {
            if (!areas[i].weight && parseFloat(areas[i].weight) !== 0) {
                areas[i].weight = 1
            }
            weightsSummary = weightsSummary + parseFloat(areas[i].weight)
        }

        var onePercent = weightsSummary / 100
        for (var j = 0; j < areas.length; j++) {
            var area = areas[j]
            var areaPercent = Math.round(parseFloat(area.weight) / onePercent)
            var areaItemHeader = $('#content-header').find('#area-item-' + area.id)
            $(areaItemHeader).find('.area-list-item-percent').text(areaPercent)
            var areaItemBody = $('#content-body').find('#area-item-body-' + area.id)
            $(areaItemBody).find('.area-list-item-percent').text(areaPercent)
            setQuestionPercents(area)
        }
    }

    function setQuestionPercents(area) {
        var areaItemBody = $('#content-body').find('#area-item-body-' + area.id)
        var questions = area.questions
        var weightsSummary = 0
        for (var i = 0; i < questions.length; i++) {
            weightsSummary = weightsSummary + parseFloat(questions[i].weight)
        }

        var onePercent = weightsSummary / 100
        for (var j = 0; j < questions.length; j++) {
            var question = questions[j]
            var questionPercent = Math.round(parseFloat(question.weight) / onePercent)
            $(areaItemBody).find('[data-question-id*=\'' + question.id + '\'] .control-percent-label').text(questionPercent)
        }
    }

    function createAreaBodyItem(area) {
        var item = $('#draggable-area-template').clone().prop('id', 'area-item-body-' + area.id)

        $(item).find('.element-label').text(area.title)

        if (!area.failureForm) {
            area.failureForm = false
        }
        if (!area.excluded) {
            area.excluded = null
        }

        var areaTitleControl = $(item).find('.area-title-editor .edit-point')
        $(areaTitleControl).text(area.title)
        var areaExclidedLabel = $(item).find('.area-exclided-label')

        $(item).find('.area-title-editor').parent().click(function() {
            initAreaTitleEditor(area, function(title, weight, failureForm, shared, na, excluded, newAreaName, copied) {
                if (!copied && area.shared && !shared && !area.created) {
                    // if we "unshare" area, new area should be created
                    updateAreaContainers(area)
                }

                area.title = title
                area.weight = parseFloat(weight)
                area.failureForm = failureForm


                area.shared = shared
                area.na = na

                if (newAreaName) {
                    area.name = newAreaName
                }

                if (area.excluded) {
                    excludedLinks.areas[area.excluded.areaId].deleteByValue(area.id)
                    excludedLinks.questions[area.excluded.questionId].deleteByValue(area.id)
                    excludedLinks.answers[area.excluded.answerId].deleteByValue(area.id)
                }

                area.excluded = excluded
                $(areaTitleControl).text(area.title)

                if (area.excluded) {
                    fullAreaExcludedLabel(areaExclidedLabel,
                        area.excluded.areaId, area.excluded.questionId, area.excluded.answerId, null, null)

                    if (!excludedLinks.areas[excluded.areaId]) {
                        excludedLinks.areas[excluded.areaId] = []
                    }
                    excludedLinks.areas[excluded.areaId].push(area.id)
                    if (!excludedLinks.questions[excluded.questionId]) {
                        excludedLinks.questions[excluded.questionId] = []
                    }
                    excludedLinks.questions[excluded.questionId].push(area.id)
                    if (!excludedLinks.answers[excluded.answerId]) {
                        excludedLinks.answers[excluded.answerId] = []
                    }
                    excludedLinks.answers[excluded.answerId].push(area.id)
                }
                var headerAreaItem = $('#content-header').find('#area-item-' + area.id)
                setAreaHeaderContent(headerAreaItem, area, true)
                setAreaPercents(form.areas)
                setFormChanged(true)
                area.changed = true

                var height = 0
                for (var i = 0; i < form.areas.length; i++) {
                    height += $('#area-item-' + form.areas[i].id).height() + 7
                }
                $('#content-header').height(68 + height)

            },
            )
        })

        var itemsArea = $(item).find('.column-wrapper-questions')
        createQuestionsListInArea(area, itemsArea)

        return item
    }

    function onAreaEdit(area, yesCallback, sharedCallback) {
        if (areaUsedNotifications[area.id]) {
            setTimeout(function() {
                modifyAreaPopup(translator.get('areaUsedInOtherForms', areaUsedNotifications[area.id]),
                    function() {
                        delete(areaUsedNotifications[area.id])

                        if (yesCallback) {
                            yesCallback()
                        }

                        if (sharedCallback) {
                            sharedCallback('modify')
                        }
                    },
                    function() {
                        if (sharedCallback) {
                            sharedCallback('cancel')
                        } else {
                            var areaId = area.id
                            var areaIndex = getAreaIndexById(form, areaId)
                            var restoredArea = $.extend(true, {}, areaUsedCache[areaId])
                            form.areas[areaIndex] = restoredArea

                            var formEditor = $('#form-editor-' + form.id)
                            var oldHeaderItem = $('#content-header').find('#area-item-' + areaId)
                            $(oldHeaderItem).prop('id', 'area-item-' + areaId + '-remove')
                            var newHeaderItem = createHeaderAreaItem(formEditor, restoredArea, true)
                            $(newHeaderItem).insertBefore($(oldHeaderItem))
                            setAreaHeaderContent($(newHeaderItem), restoredArea)
                            $(oldHeaderItem).remove()

                            var oldBodyItem = $('#content-body').find('#area-item-body-' + areaId)
                            $(oldBodyItem).prop('id', 'area-item-body' + areaId + '-remove')
                            var newBodyItem = createAreaBodyItem(restoredArea)
                            $(newBodyItem).insertBefore($(oldBodyItem))
                            $(oldBodyItem).remove()

                            setAreaPercents(form.areas)
                            setAreaNumbers(form.areas)
                            renderAreas()
                            $(newHeaderItem).trigger('click')
                        }
                    },
                    function() {
                        delete (areaUsedNotifications[area.id])
                        updateAreaContainers(area)
                        area.shared = false

                        var headerAreaItem = $('#content-header').find('#area-item-' + area.id)
                        $(headerAreaItem).find('.area-share-label').hide()

                        if (yesCallback) {
                            yesCallback()
                        }

                        if (sharedCallback) {
                            sharedCallback('makeLocalCopy')
                        }
                    })
            }, 500)
        } else {
            if (yesCallback) {
                yesCallback()
            }
        }
    }

    function updateAreaContainers(area) {
        var oldId = area.id
        var newId = getNewId()
        area.id = newId
        area.created = true
        $('#area-item-' + oldId).prop('id', 'area-item-' + newId)
        $('#area-item-body-' + oldId).prop('id', 'area-item-body-' + newId)
    }

    function createQuestionsListInArea(area, itemsArea) {

        itemsArea.droppable({
            accept: '.draggable-control',
            greedy: true,
        })

        itemsArea.sortable({
            appendTo: document.body,
            zIndex: 4444,
            helper: function(e, ui) {
                var obj = $(ui.get(0)).clone().width('50%').css('border', '1px solid gray')
                $(obj).height(50)
                $(obj).find('.right-column').remove()
                $(obj).find('.element-actions').remove()
                $(obj).find('.element-child-item').remove()
                $(obj).css('background-color', '#ffffff')
                return $(obj)
            },
            placeholder: {
                element: function(currentItem) {
                    return $('<div class=\'sortable-item-list-placeholder\'></div>')[0]
                },
                update: function(container, p) {
                    return
                },
            },
            update: function(event, ui) {
                var isItemFromSameColumn = ui.item.hasClass(CONTROL_IN_CONTAINER_CLASS_NAME)
                var affectedQuestionId = null
                if (!isItemFromSameColumn) {
                    var newItem = null
                    var newItemId = getNewId()

                    if (ui.item.hasAttr(CLIPBOARD_JSON_ATTRIBUTE_NAME)) {
                        var jsonStr = ui.item.attr(CLIPBOARD_JSON_ATTRIBUTE_NAME)
                        var pastedQuestionArray = JSON.parse(jsonStr)
                        var pastedQuestion = copyQuestion(pastedQuestionArray[0], true)

                        pastedQuestion.id = newItemId
                        area.questions.push(pastedQuestion)
                        newItem = createItem(this, null, area, newItemId, pastedQuestion.type)
                    } else {
                        newItem = createItem(this, ui, area, newItemId, null)
                    }

                    affectedQuestionId = newItemId
                    $(newItem).insertBefore(ui.item)
                    ui.item.remove()
                    setQuestionPercents(area)
                } else {
                    affectedQuestionId = $(ui.item).attr(DATA_QUESTION_ID_ATTRIBUTE_NAME)
                }
                setFormChanged(true)
                area.changed = true
                onAreaEdit(area)

                var items = $(this).children('.element-area')
                if (items.length) {
                    items.each(function(index, item) {
                        if ($(item).attr(DATA_QUESTION_ID_ATTRIBUTE_NAME) == affectedQuestionId) {
                            var newQuestionIndex = index
                            var prevQuestionIndex = getQuestionIndexById(area, affectedQuestionId)
                            area.questions.move(prevQuestionIndex, newQuestionIndex)
                        }
                    })
                }

                setQuestionNumbers(area)
            },
            stop: function(event, ui) {
                $('body').children('.ui-sortable-helper').remove()
            },
        })
        itemsArea.disableSelection()

        var questions = area.questions
        for (var i = 0; i < questions.length; i++) {
            var question = questions[i]
            var item = createItem(itemsArea, null, area, question.id, question.type)
            $(itemsArea).append($(item))
        }
    }

    function initControlTemplates() {

        controlsMap['item-checkbox-'] = {prefixId: 'item-checkbox-',
            type: CHECKBOX_CONTROL,
            paletteItemId: 'draggable-checkbox-control',
            templateId: '#draggable-control-with-options-template',
            drawOptionMethod: drawCheckBoxOption,
            drawControlMethod: drawCheckBoxControl,
            label: 'checkboxElements'}
        controlsMap['item-radio-'] = {prefixId: 'item-radio-',
            type: RADIO_CONTROL,
            paletteItemId: 'draggable-radio-control',
            templateId: '#draggable-control-with-options-template',
            drawOptionMethod: drawRadioButtonOption,
            drawControlMethod: drawRadioButtonControl,
            label: 'radioButtons'}
        controlsMap['item-radio-horizontal-'] = {prefixId: 'item-radio-horizontal-',
            type: RADIO_HORIZONTAL_CONTROL,
            paletteItemId: 'draggable-radio-horizontal-control',
            templateId: '#draggable-control-with-options-template',
            drawOptionMethod: drawRadioButtonOption,
            drawControlMethod: drawRadioButtonControl,
            label: 'horizontalRadioButtons'}
        controlsMap['item-dropdown-'] = {prefixId: 'item-dropdown-',
            type: DROPDOWN_CONTROL,
            paletteItemId: 'draggable-dropdown-control',
            templateId: '#draggable-control-with-options-template',
            drawOptionMethod: drawDropdownOption,
            drawControlMethod: drawDropdownControl,
            label: 'dropdownElement'}
        controlsMap['item-yes-no-'] = {prefixId: 'item-yes-no-',
            type: RADIO_HORIZONTAL_CONTROL,
            paletteItemId: 'draggable-yes-no-control',
            templateId: '#draggable-control-with-options-template',
            drawOptionMethod: drawRadioButtonOption,
            drawControlMethod: drawRadioButtonControl,
            label: 'yesNo',
            defaultAnswers: [
                {
                    id: getNewId(),
                    text: translator.get('yes'),
                    value: 0,
                    valueNA: false,
                    bonus: null,
                    fails: false,
                }, {
                    id: getNewId(),
                    text: translator.get('no'),
                    value: 0,
                    valueNA: false,
                    bonus: null,
                    fails: false,
                },
            ]}
        controlsMap['item-yes-no-na-'] = {prefixId: 'item-yes-no-na-',
            type: RADIO_HORIZONTAL_CONTROL,
            paletteItemId: 'draggable-yes-no-na-control',
            templateId: '#draggable-control-with-options-template',
            drawOptionMethod: drawRadioButtonOption,
            drawControlMethod: drawRadioButtonControl,
            label: 'yesNoNa',
            defaultAnswers: [
                {
                    id: getNewId(),
                    text: translator.get('yes'),
                    value: 0,
                    valueNA: false,
                    bonus: null,
                    fails: false,
                }, {
                    id: getNewId(),
                    text: translator.get('no'),
                    value: 0,
                    valueNA: false,
                    bonus: null,
                    fails: false,
                }, {
                    id: getNewId(),
                    text: translator.get('na'),
                    value: null,
                    valueNA: true,
                    bonus: null,
                    fails: false,
                },
            ]}

        $('#draggable-checkbox-control').draggable(dragOptions('.column-wrapper-questions'))
        $('#draggable-radio-control').draggable(dragOptions('.column-wrapper-questions'))
        $('#draggable-radio-horizontal-control').draggable(dragOptions('.column-wrapper-questions'))
        $('#draggable-dropdown-control').draggable(dragOptions('.column-wrapper-questions'))
        $('#draggable-yes-no-control').draggable(dragOptions('.column-wrapper-questions'))
        $('#draggable-yes-no-na-control').draggable(dragOptions('.column-wrapper-questions'))
    }

    function getItemType(editedControl) {
        var controlId = $(editedControl).prop('id')
        var prefixId = controlId.replace(/[0-9]/g, '')
        var item = controlsMap[prefixId]
        return item.type
    }

    function dragOptions(target) {
        return {
            tolerance: 'pointer',
            appendTo: document.body,
            zIndex: 5555,
            connectToSortable: target,
            helper: function(e, ui) {
                return $(this).clone().width('50%')
            },
            cursorAt: {left: 40, top: 25},
        }
    }

    function addToClipboard(pastedObjectArray, isArea) {
        var oldClipboardItem = $('#editor-clipboard').find('#editor-clipboard-item')
        oldClipboardItem.remove()

        var clipboardItem = $('#editor-clipboard-item-template').clone().prop('id', 'editor-clipboard-item')
        var title = pastedObjectArray[0].title
        var json = JSON.stringify(pastedObjectArray)
        clipboardItem.attr(CLIPBOARD_JSON_ATTRIBUTE_NAME, json)
        $('#editor-clipboard').append($(clipboardItem))

        var clipboardJSON = '{"' + CLIPBOARD_COPY_ITEM_NAME + '":' + json + ', "isArea":' + isArea + '}'
        copyStringToClipboard(clipboardJSON)

        if (localStorage) {
            localStorageClipboard = clipboardJSON
            localStorage.setItem(CLIPBOARD_COPY_ITEM_NAME, clipboardJSON)
        }

        $(clipboardItem).effect('highlight', {}, 500)

        if (isArea) {
            title = translator.get('area') + ': ' + title
            $(clipboardItem).draggable(dragOptions('.column-wrapper-area'))
        } else {
            title = translator.get('question') + ': ' + title
            $(clipboardItem).draggable(dragOptions('.column-wrapper-questions'))
        }
        $(clipboardItem).find('.clipboard-item-label').text(title)

        $('.palette-wrapper.active').find('.slide-box').height(checkLeftColumnHeight())
    }

    function onPaste(e) {
        var clipboardData = e.clipboardData || window.clipboardData
        var pastedData = clipboardData.getData('Text')

        if (pastedData.startsWith('{"' + CLIPBOARD_COPY_ITEM_NAME)) {
            e.stopPropagation()
            e.preventDefault()

            var pastedObject = JSON.parse(pastedData)
            addToClipboard(pastedObject[CLIPBOARD_COPY_ITEM_NAME], pastedObject.isArea)
        }
    }

    function onLocalStorageChanged(e) {
        if (localStorage) {
            var pastedData = localStorage.getItem(CLIPBOARD_COPY_ITEM_NAME)

            if ((isIE || isEdge) && localStorageClipboard == pastedData) {
                return
            }

            if (pastedData && pastedData.startsWith('{"' + CLIPBOARD_COPY_ITEM_NAME)) {
                var pastedObject = JSON.parse(pastedData)
                addToClipboard(pastedObject[CLIPBOARD_COPY_ITEM_NAME], pastedObject.isArea)
            }
            localStorageClipboard = pastedData
        }
    }

    function createItem(container, ui, area, newItemId, itemType) {
        var item
        var itemPrototype
        if (ui) {
            var itemId = $(ui.item).prop('id')
            var prefixId = itemId.replace(/[0-9]/g, '')
            itemPrototype = controlsMap[prefixId]
            if (!itemPrototype) {
                for (var property in controlsMap) {
                    if (controlsMap.hasOwnProperty(property) && itemId == controlsMap[property].paletteItemId) {
                        itemPrototype = controlsMap[property]
                        break
                    }
                }
            }
        } else {
            for (var property in controlsMap) {
                if (controlsMap.hasOwnProperty(property) && itemType == controlsMap[property].type) {
                    itemPrototype = controlsMap[property]
                    break
                }
            }
        }

        if (!itemPrototype) {
            return
        }

        item = $(itemPrototype.templateId).clone().prop('id', itemPrototype.prefixId + newItemId)
        if (ui) {
            var question = {}
            question.id = newItemId
            question.type = getItemType(item)
            area.questions.push(question)
        }

        item.attr(DATA_QUESTION_ID_ATTRIBUTE_NAME, newItemId)
        $(item).find('.element-action-trash').click(function() {
            var index = getQuestionIndexById(area, newItemId)
            var currentQuestion = area.questions[index]

            confirmDeletePopup(translator.get('confirmDelete', currentQuestion.title), function() {
                $(this).closest('.element-area').remove()
                if (index > -1) {
                    area.questions.splice(index, 1)
                }
                setFormChanged(true)
                if (area.questions.length == 0) {
                    $(container).find('.action-item-empty').show()
                }

                if (excludedLinks.questions[newItemId]) {
                    for (var i = 0; i < excludedLinks.questions[newItemId].length; i++) {
                        var areaWithExcluded = getAreaById(form, excludedLinks.questions[newItemId][i])
                        if (areaWithExcluded) {
                            areaWithExcluded.excluded = null
                            var areaExclidedLabel = $('#content-body').find('#area-item-body-' + areaWithExcluded.id + ' .area-exclided-label').empty()
                        }
                    }
                    delete excludedLinks.questions[newItemId]
                }

                setQuestionNumbers(area)
                setQuestionPercents(area)
                area.changed = true
                onAreaEdit(area)
            }.bind(this))
        })
        $(item).find('.element-action-copy').click(function() {
            var index = getQuestionIndexById(area, newItemId)
            var copiedQuestions = []
            var currentQuestion = area.questions[index]
            var duplicatedQuestion = copyQuestion(currentQuestion, true)
            copiedQuestions.push(duplicatedQuestion)

            addToClipboard(copiedQuestions, false)
        })

        item.addClass(CONTROL_IN_CONTAINER_CLASS_NAME + ' draggable-control')
        $(container).find('.action-item-empty').hide()

        createQuestionWithOptionsEditor(item, area, newItemId, itemPrototype.drawOptionMethod, itemPrototype.drawControlMethod,
            itemPrototype.label, itemPrototype.defaultAnswers)

        return item
    }

    function createQuestionWithOptionsEditor(item, area, questionId, drawOptionMethod, drawControlMethod, label, defaultAnswers) {
        var questionControlWrapper = $(item).find('.control-label')

        var questionControl = drawControlMethod()
        $(questionControlWrapper).prepend(questionControl)

        var questionIndex = getQuestionIndexById(area, questionId)
        var question = area.questions[questionIndex]
        if (!question.weight) {
            question.weight = 1
        }
        if (!question.title) {
            question.title = translator.get(label)
        }

        if (!question.answers || question.answers.length == 0) {
            if (defaultAnswers) {
                var clonedDefaultAnswers = []
                for (var i = 0; i < defaultAnswers.length; i++) {
                    clonedDefaultAnswers[i] = $.extend(true, {}, defaultAnswers[i])
                    clonedDefaultAnswers[i].id = getNewId()
                }
                question.answers = clonedDefaultAnswers
            } else {
                question.answers = []
                var answer = {}
                answer.id = getNewId()
                answer.text = translator.get('none')
                answer.value = 0
                answer.valueNA = false
                answer.bonus = null
                answer.fails = false
                question.answers[0] = answer
            }
        }

        var titleControlLabel = $(item).find('.control-title-label')
        var percentControlLabel = $(item).find('.control-percent-label')
        $(titleControlLabel).text(question.title)
        $(percentControlLabel).text(question.weight)
        $(item).find('.question-fails-label').hide()
        $(item).find('.question-bonus-label').hide()

        for (var i = 0; i < question.answers.length; i++) {
            var answer = question.answers[i]
            var option = drawOptionMethod(answer.text, answer.value, question.id, question.type, i)
            if (question.type == RADIO_HORIZONTAL_CONTROL) {
                $(questionControl).addClass('form-check-horizontal-fieldset')
            }
            $(questionControl).append(option)
            setQuestionAdditionLabels(item, answer)
        }

        $(item).find('.element-label').click(function() {
            onAreaEdit(area, function() {
                initQuestionEditor(area.questions[getQuestionIndexById(area, questionId)],
                    function(clonedQuestion) {
                        var oldAnswersIds = []
                        var oldAnswers = area.questions[getQuestionIndexById(area, questionId)].answers
                        for (var j = 0; j < oldAnswers.length; j++) {
                            oldAnswersIds.push(oldAnswers[j].id)
                        }

                        area.questions[getQuestionIndexById(area, questionId)] = clonedQuestion

                        $(item).find('.question-fails-label').hide()
                        $(item).find('.question-bonus-label').hide()
                        $(titleControlLabel).text(clonedQuestion.title)
                        $(percentControlLabel).text(clonedQuestion.weight)

                        var newItemPrototype
                        for (var property in controlsMap) {
                            if (controlsMap.hasOwnProperty(property) && clonedQuestion.type == controlsMap[property].type) {
                                newItemPrototype = controlsMap[property]
                                break
                            }
                        }

                        var questionNewControl = newItemPrototype.drawControlMethod()
                        $(questionControlWrapper).empty()
                        $(questionControlWrapper).prepend(questionNewControl)
                        for (var i = 0; i < clonedQuestion.answers.length; i++) {
                            var answer = clonedQuestion.answers[i]
                            var option = newItemPrototype.drawOptionMethod(answer.text, answer.value, clonedQuestion.id, clonedQuestion.type, i)
                            if (clonedQuestion.type == RADIO_HORIZONTAL_CONTROL) {
                                $(questionNewControl).addClass('form-check-horizontal-fieldset')
                            } else {
                                $(questionNewControl).removeClass('form-check-horizontal-fieldset')
                            }
                            $(questionNewControl).append(option)
                            setQuestionAdditionLabels(item, answer)
                            oldAnswersIds.deleteByValue(answer.id)
                        }

                        for (var k = 0; k < oldAnswersIds.length; k++) {
                            var oldAnswerId = oldAnswersIds[k]
                            if (excludedLinks.answers[oldAnswerId]) {
                                for (var x = 0; x < excludedLinks.answers[oldAnswerId].length; x++) {
                                    var areaWithExcluded = getAreaById(form, excludedLinks.answers[oldAnswerId][x])
                                    if (areaWithExcluded) {
                                        areaWithExcluded.excluded = null
                                        var areaExclidedLabel = $('#content-body').find('#area-item-body-' + areaWithExcluded.id + ' .area-exclided-label').empty()
                                    }
                                }
                                delete excludedLinks.answers[oldAnswerId]
                            }
                        }

                        var headerAreaItem = $('#content-header').find('#area-item-' + area.id)
                        setAreaHeaderBonus(headerAreaItem, area)
                        setQuestionPercents(area)

                        setFormChanged(true)
                        area.changed = true
                    },
                )

            })
        })
    }

    function setQuestionAdditionLabels(item, answer) {
        if (answer.bonus) {
            $(item).find('.question-bonus-label').show()
        }
        if (answer.fails) {
            $(item).find('.question-fails-label').show()
        }
    }

    function drawCheckBoxControl() {
        return $('<fieldset class=\'checkbox-control-label\'></fieldset>')
    }

    function drawCheckBoxOption(text, tooltip, group, type, index) {
        var id = getSafeHtmlIdFromText(text)
        return $('<div class=\'form-check\'><input type=\'checkbox\' id=\'' + id + '\'/><label class=\'form-check-label\' for=\'' + id + '\' title=\'' + tooltip + '\'>' + text + '</label></div>')
    }

    function drawRadioButtonControl() {
        return $('<div class=\'radio-control-label\'></div>')
    }

    function drawRadioButtonOption(text, tooltip, group, type, index) {
        var id = getSafeHtmlIdFromText(text)
        var className

        if (type == RADIO_HORIZONTAL_CONTROL) {
            className = 'form-check-horizontal'
        } else {
            className = 'form-check'
        }

        return $('<div class=\'' + className + '\'><input type=\'radio\' name=\'' + group + '\' id=\'' + id + '\' checked=\'checked\'/><label class=\'form-check-label\' for=\'' + id + '\' title=\'' + tooltip + '\'>' + text + '</label></div>')
    }

    function drawDropdownControl() {
        return $('<select class=\'form-control dropdown-control-label\' style=\'width:auto; margin-bottom: .5rem;\'></select>')
    }

    function drawDropdownOption(text, tooltip, group, type, index) {
        var option = $('<option title=\'' + getSafeTextForHtml(text) + '\'>' + text + '</option>')
        if (index == 0) {
            option.attr('selected', 'true')
        }

        return option
    }

    // Only for debug mode. Delete this!
    function download(json) {
        var element = document.createElement('a')
        element.setAttribute('href', 'data:text/json;charset=utf-8,' + encodeURIComponent(json))
        element.setAttribute('download', 'data.json')
        element.style.display = 'none'
        document.body.appendChild(element)
        element.click()
        document.body.removeChild(element)
    }

    this.exportData = function(isDownloadRequired) {
        var res = {
            definition: {},
            linkedAreaList: [],
        }
        var clonedForm = $.extend(true, {}, form)

        if (clonedForm.areas) {
            for (var i = 0; i < clonedForm.areas.length; i++) {
                var clonedArea = $.extend(true, {}, clonedForm.areas[i])

                clonedForm.areas[i] = {
                    id: clonedArea.id,
                    failureForm: clonedArea.failureForm,
                    weight: clonedArea.weight,
                    na: clonedArea.na,
                    excluded: clonedArea.excluded,
                    depth: clonedArea.depth,
                }

                delete clonedArea.failureForm
                delete clonedArea.weight
                delete clonedArea.na
                delete clonedArea.excluded
                delete clonedArea.depth
                delete clonedArea.completed
                res.linkedAreaList.push(clonedArea)
            }
        }
        res.definition.form = clonedForm

        if (isDownloadRequired) {
            download(JSON.stringify(res))
        }

        return res
    }

    this.importData = function(data) {

        if (data) {
            areaUsedCache = {}
            excludedLinks = {
                areas: {},
                questions: {},
                answers: {},
            }

            this.clearEditor()
            form = data.form
            if (form.areas) {
                for (var i = 0; i < form.areas.length; i++) {
                    if (linkedAreaList) {
                        for (var j = 0; j < linkedAreaList.length; j++) {
                            if (linkedAreaList[j].id == form.areas[i].id) {
                                var clonedArea = $.extend(true, {}, linkedAreaList[j].layout.area)
                                clonedArea.id = linkedAreaList[j].id
                                clonedArea.weight = form.areas[i].weight
                                clonedArea.failureForm = form.areas[i].failureForm
                                clonedArea.shared = linkedAreaList[j].shared
                                clonedArea.na = form.areas[i].na
                                clonedArea.excluded = form.areas[i].excluded
                                clonedArea.depth = form.areas[i].depth
                                if (!clonedArea.depth) {
                                    clonedArea.depth = 0
                                }
                                clonedArea.created = linkedAreaList[j].created
                                clonedArea.changed = linkedAreaList[j].changed

                                form.areas[i] = clonedArea

                                var excluded = clonedArea.excluded
                                if (excluded) {
                                    if (!excludedLinks.areas[excluded.areaId]) {
                                        excludedLinks.areas[excluded.areaId] = []
                                    }
                                    excludedLinks.areas[excluded.areaId].push(clonedArea.id)

                                    if (!excludedLinks.questions[excluded.questionId]) {
                                        excludedLinks.questions[excluded.questionId] = []
                                    }
                                    excludedLinks.questions[excluded.questionId].push(clonedArea.id)

                                    if (!excludedLinks.answers[excluded.answerId]) {
                                        excludedLinks.answers[excluded.answerId] = []
                                    }
                                    excludedLinks.answers[excluded.answerId].push(clonedArea.id)
                                }

                                if (areaUsedNotifications[clonedArea.id]) {
                                    var cachedArea = $.extend(true, {}, clonedArea)
                                    areaUsedCache[clonedArea.id] = cachedArea
                                }
                                break
                            }
                        }
                    }
                }
            }
  	        createFormEditor(form.id)
            setFormChanged(false)
        }
    }

    this.importEmptyData = function() {
        if (form) {
            form.areas = []
        }

        itemIndex = new Date().getTime() / 1000 | 0
        this.clearEditor()
        createFormEditorFromScratch()
        setFormChanged(true)
        $('#form-editor-' + form.id + ' .form-title-editor .edit-point-changed').hide()
    }

    this.clearEditor = clearEditor

    function clearEditor() {
        $('#content-header').empty()
        $('#content-body').empty()
    }

    this.getFormName = function() {
        return formName
    }

    this.setFormName = function(aFormName) {
        formName = aFormName
        if (!formName) {
            $('#form-editor-button-clone').hide()
        } else {
            $('#form-editor-button-clone').show()
        }
    }

    this.closeForm = function() {
        externalInterface.closeWindow()
    }

    this.saveForm = function() {
        var save = function() {
            if (!formName) {
                var defaultName = form.title
                initNameEditor(defaultName, externalInterface.checkName, 'formNameExists', function(newFormName) {
                    formName = newFormName
                    form.title = newFormName
                    externalInterface.save(function(errorMessage) {
                        if (errorMessage) {
                            alertPopup(errorMessage)
                        }
                    })
                    setFormChanged(false)
                })
            } else {
                externalInterface.save(function(errorMessage) {
                    if (errorMessage) {
                        alertPopup(errorMessage)
                    }
                })
                setFormChanged(false)
            }
        }

        if (checkAreaTitles()) {
            save()
        } else {
            confirmPopup(translator.get('uniqueAreaNameTitle'), translator.get('uniqueAreaNameText'),
                save)
        }


    }

    function confirmPopup(title, text, yesCallback, cancelCallback) {
        var $dialog = $('#confirm-popup').clone().dialog({
            title: null,
            width: 500,
            modal: true,
            resizable: false,
            draggable: false,
            open: function() {
                $('.ui-dialog-titlebar').remove()
            },
            close: function() {
                $dialog.dialog('destroy')
            },
        })
        $dialog.find('.confirm-title').text(title || '')
        $dialog.find('.confirm-text').text(text || '')
        $dialog.find('.confirm-yes-button').click(function() {
            $dialog.dialog('close')
            if (yesCallback) {
                yesCallback()
            }
        })
        $dialog.find('.confirm-cancel-button').click(function() {
            $dialog.dialog('close')
            if (cancelCallback) {
                cancelCallback()
            }
        })

        $dialog.dialog('open')
    }

    function alertPopup(text) {
        var $dialog = $('#alert-popup').clone().dialog({
            title: null,
            width: 500,
            modal: true,
            resizable: false,
            draggable: false,
            open: function() {
                $('.ui-dialog-titlebar').remove()
            },
            close: function() {
                $dialog.dialog('destroy')
            },
        })
        $dialog.find('.alert-text').text(text)
        $dialog.find('.alert-yes-button').click(function() {
            $dialog.dialog('close')
        })

        $dialog.dialog('open')
    }

    function confirmDeletePopup(text, onDelete) {
        var deleteBtn = {
            className: 'btn-danger',
            text: translator.get('delete'),
            callback: onDelete,
        }
        var cancelBtn = {
            className: 'btn-secondary',
            text: translator.get('cancel'),
        }

        nButtonPopup(null, text, [deleteBtn, cancelBtn])
    }

    function unsavedChangesPopup(title, text, revertBtnText) {
        var revertBtn = {
            className: 'btn-danger',
            text: revertBtnText,
            callback: function() { externalInterface.reloadWithoutDraft() },
        }
        var okBtn = {
            className: 'btn-info',
            text: translator.get('oK'),
        }

        nButtonPopup(title, text, [revertBtn, okBtn])
    }

    function modifyAreaPopup(text, modifyBtnCallback, cancelBtnCallback, makeLocalCopyCallback) {
        var modifyBtn = {
            className: 'btn-info',
            text: translator.get('modify'),
            callback: modifyBtnCallback,
        }
        var cancelBtn = {
            className: 'btn-secondary',
            text: translator.get('cancel'),
            callback: cancelBtnCallback,
        }
        var makeLocalCopyBtn = {
            className: 'btn-secondary',
            text: translator.get('makeLocalCopy'),
            callback: makeLocalCopyCallback,
        }

        nButtonPopup(null, text, [modifyBtn, cancelBtn, makeLocalCopyBtn])
    }

    function nButtonPopup(title, text, buttonsConfig) {
        var $dialog = $('#n-button-popup').clone().dialog({
            title: null,
            width: 500,
            modal: true,
            resizable: false,
            draggable: false,
            open: function() {
                $('.ui-dialog-titlebar').remove()
                setTimeout(function() {
                    $dialog.find('.dialog-custom-footer:first-child').blur()
                }) // disable auto focus on 1st btn
            },
            close: function() {
                $dialog.dialog('destroy')
            },
        })

        $dialog.find('.title').text(title || '')
        $dialog.find('.text').text(text || '')

        var $buttonsContainer = $dialog.find('.dialog-custom-footer')
        buttonsConfig.forEach(function(config, index) {
            var $btn = $('<button>')
                .addClass('btn ml-1 ' + index + '-n-popup-btn')
                .addClass(config.className)
                .text(config.text)
            $btn.click(function() {
                $dialog.dialog('close')

                if (config.callback) {
                    config.callback()
                }
            })

            $buttonsContainer.append($btn)
        })

        $dialog.dialog('open')
    }

    this.cloneForm = function() {
        var defaultName = formName
        initNameEditor(defaultName, externalInterface.checkName, 'formNameExists', function(newFormName) {
            form.title = newFormName
            externalInterface.clone(newFormName, function(errorMessage) {
                if (errorMessage) {
                    alertPopup(errorMessage)
                }
            })
            setFormChanged(false)
        })
    }

    this.isFormChanged = function() {
        return isFormChanged
    }

    this.setFormChanged = setFormChanged

    function setFormChanged(flag) {
        var $saveBtn = $('#form-editor-button-save')
        var formTitleChangeIndicator = $('#form-editor-' + form.id + ' .form-title-editor .edit-point-changed')

        if (flag) {
            if (!isFormChanged) {
                window.addEventListener('beforeunload', beforeUnloadListemer)
            }
            $saveBtn.removeAttr('disabled')
            $saveBtn.find('img').attr('src', '/agent/evaluation-page/img/ico/ico-apply-green.svg')
            formTitleChangeIndicator.show()
        } else {
            $saveBtn.attr('disabled', 'disabled')
            $saveBtn.find('img').attr('src', '/agent/evaluation-page/img/ico/ico-apply-grey.svg')
            formTitleChangeIndicator.hide()
            window.removeEventListener('beforeunload', beforeUnloadListemer)
        }
        isFormChanged = flag
    }

    function getChildAreas(parentArea) {
        var result = []
        var parentAreaPassed = false
        var parentDepth = parentArea.depth
        for (var i = 0; i < form.areas.length; i++) {
            var area = form.areas[i]
            if (parentAreaPassed) {
                if (area.depth > parentDepth) {
                    result.push(area)
                } else {
                    break
                }
            }
            parentAreaPassed = parentAreaPassed || area.id === parentArea.id
        }
        return result
    }

    function getAreaElement(area) {
        return $('#area-item-' + area.id)
    }

    // In fact, this only updates areas depth paddings
    // TODO: Migrate all rendering logic here
    function renderAreas() {
        form.areas.forEach(function(area) {
            var $element = getAreaElement(area)
            var padding = AREA_BASE_PADDING_LEFT + area.depth * AREA_DEPTH_PADDING_LEFT
            $element.css('padding-left', padding + 'px')
        })
    }

    function beforeUnloadListemer(e) {
	    e.preventDefault()
	    e.returnValue = ''
    }

    this.previewForm = function() {
        if (form != null && form.areas != null) {
            var previewContent = $('<div></div>').prop('id', 'preview-form-content')
            $('body').append(previewContent)
            $(previewContent).load('evaluation/viewer-layout-template.html?build=' + window.__buildVersion, function() {
                var previewData = {
		            form: form,
                }
                evaluationFormViewer.load(previewData, null, function() {
                    var dialog = $(previewContent).dialog({
                        autoOpen: false,
                        modal: true,
                        resizable: false,
                        title: translator.get('preview'),
                        width: $('#layout-parent-box-viewer').width() / 2,
                        maxHeight: 900,
                        open: function(event, ui) {
                            var dialogElement = $('.ui-dialog')
                            dialogElement.attr('tabindex', -1)[0].focus()
                            translator.translate(dialogElement)
                        },
                        close: function(event, ui) {
                            $(previewContent).remove()
                        },
                    })

                    evaluationFormViewer.setReadOnly()
                    dialog.dialog('open')
                })
            })
        }
    }

    this.isInitiated = function() {
    	return initiated
    }

    this.setAreaList = function(list) {
        areaList = list
        areaUsedNotifications = {}
        initAreaList()
    }

    this.setLinkedAreaList = function(list) {
        linkedAreaList = list
    }

    this.handleDraft = function(info) {
        var draftEditedOn = new Date(info.draftEditedOn)
        var lastEditedOn = new Date(info.lastEditedOn)
        var draftEditedOnLabel = oldFormatDateYYYYMMDD(draftEditedOn)
        var lastEditedOnLabel = oldFormatDateYYYYMMDD(lastEditedOn)

        if (info.draft) {
            var revertTitle = info.newForm ? translator.get('startFromScratch') : translator.get('revertForm')
            setFormChanged(true)

            if (!!info.lastEditedBy && !!info.lastEditedOn && info.lastEditedOn > info.draftEditedOn) {
                unsavedChangesPopup(
                    translator.get('formWasModified'),
                    translator.get('modifiedFormDraftLoaded', draftEditedOnLabel, lastEditedOnLabel, info.lastEditedBy),
                    revertTitle,
                )
            } else {
                unsavedChangesPopup(
                    translator.get('unsavedChanges'),
                    translator.get('draftLoaded', draftEditedOnLabel),
                    revertTitle,
                )
            }
        }
    }
}

