var searchControl = new function () {

    var conditionsControl;
    var editable;
    var randomizeSearch;
    var qmLayout;
    var nodeDataLoader;

    this.init = function () {
        initModals();
        conditionsControl = conditionsControlFactory.create($('#panel-home'), true);
        $('.search-details-panel .search-btn').click(doSearch);
        $('#panel-home .search-details-panel .randomize-search-check').change(onRandomizeSearchChange);
    };

    this.showDetails = function (node) {
        console.log(node);
        $('#panel-home .search-controls').hide();
        editable = node.data.editable;
        showNameAndControls(node);
        if (isSearchNode(node)) {
            $('#panel-home .search-details-panel .loading').show();
            nodeDataLoader = loadData(node.id, function (data) {
                loadConditions(conditionsControlFactory.wrapWithBlock(data.criteriaList));
                setRandomizeSearch(data.randomizeSearch);
                qmLayout = data.qmLayout;
            });
        } else {
            nodeDataLoader = null;
        }
    };

    this.doSearchWhenNodeDataLoaded = function (node) {
        if (!!nodeDataLoader && isSearchNode(node)) {
            nodeDataLoader.then(doSearch.bind(null, node.id, node.data.name));
        }
    };

    this.saveNodeIfChanged = function (node, cb) {
        if (conditionsControl.isChanged() && isSearchNode(node)) {
            var data = Object.assign({id: node.id, name: node.data.name, randomizeSearch: randomizeSearch}, conditionsControl.getAllData());
            showSaveNodeConfirmModal(data.name, saveNode.bind(this, data));
        }
    };

    function initModals() {
        $('#remove-node-modal-accept').on('click', function () {
            var selectedNode = searchTreeControl.getSelectedNode();
            searchTreeControl.removeSelectedNode().then(function () {
                hideDetails();
                evaluationHome.closeAllSearchesById(selectedNode.id);
            });
        });
        $('#remove-node-modal').on('show.bs.modal', function () {
            var modal = $(this);
            var selectedNode = searchTreeControl.getSelectedNode();
            modal.find('.modal-title').text(translator.get('remove') + ' ' + selectedNode.data.name);
            var modalBodyMsg = isSearchNode(selectedNode) ? translator.get('removeSearchMsg') : translator.get('removeFolderMsg');
            modal.find('.modal-body > div').text(modalBodyMsg);
        });

        var $addNodeModal = $('#add-node-modal');
        $addNodeModal.find('.modal-body input').on('keyup', function (e) {
            if (e.keyCode === 13) {
                $('#add-node-modal-accept').click();
            }
        });
        $addNodeModal.on('shown.bs.modal', function () {
            var modal = $(this);
            modal.find('.modal-body input').focus();
        });
        $addNodeModal.on('hide.bs.modal', function () {
            $('#add-node-modal-accept').off('click');
        });
    }

    function hideDetails() {
        $('#panel-home .search-details-panel .subtitle').text('');
        $('#panel-home .tree-search-controls').hide();
        $('#panel-home .search-controls').hide();
    }

    function setRandomizeSearch(isRandomizeSearch) {
        randomizeSearch = isRandomizeSearch;
        $('#panel-home .search-details-panel .randomize-search-check').prop('checked', randomizeSearch)
    }

    function onRandomizeSearchChange() {
        randomizeSearch = this.checked;
        conditionsControl.setChanged(true);
    }

    function saveNode(data) {
        if (conditionsControlFactory.hasConditionsItems(data.conditions)) {
            if (conditionsControlFactory.hasCorrectTextSearchConditions(data.conditions)) {
                api.saveSearch(data);
            } else {
                modals.showInfo('incorrectTextSearchMsg');
            }
        } else {
            modals.showInfo('emptySearchMsg');
        }
    }

    function showNameAndControls(node) {
        $('#panel-home .search-details-panel .subtitle').text(node.data.name);
        if (!editable) {
            disableAddBtns();
        } else {
            enableAddBtns();
        }
        if (isRemovable(node)) {
            enableRemoveBtn();
        } else {
            disableRemoveBtn();
        }
        $('#panel-home .tree-search-controls').show();
    }

    function loadConditions(data) {
        $('#panel-home .search-details-panel .loading').hide();
        conditionsControl.load(data);
        $('#panel-home .search-controls').show();
    }

    function enableAddBtns() {
        $('#panel-home .tree-search-controls .add-folder, .add-search').each(function () {
            var $elem = $(this);
            enableBtn($elem, showAddNodeModal.bind(null, $elem))
        });
    }

    function disableAddBtns() {
        $('#panel-home .tree-search-controls .add-folder, .add-search').each(function () {
            disableBtn($(this));
        });
    }

    function enableRemoveBtn() {
        enableBtn($('#panel-home .tree-search-controls .remove-btn'), showRemoveNodeModal)
    }

    function disableRemoveBtn() {
        disableBtn($('#panel-home .tree-search-controls .remove-btn'));
    }

    function enableBtn($btn, click) {
        if ($btn.hasClass('disabled')) {
            $btn.removeClass('disabled');
            $btn.on('click', click);
        }
    }

    function disableBtn($btn) {
        if (!$btn.hasClass('disabled')) {
            $btn.addClass('disabled');
            $btn.off('click');
        }
    }

    function isSearchNode(node) {
        return node.type === "QUERY";
    }

    function isRemovable(node) {
        return node.type !== "ROOT" && editable;
    }

    function isValidName(name) {
        return name && name.trim().length > 0;
    }

    function showAddNodeModal(button) {
        var isAddSearch = button.hasClass('add-search');
        var modal = $('#add-node-modal');
        var modalTitle = isAddSearch ? translator.get('newSearch') : translator.get('newFolder');
        modal.find('.modal-title').text(modalTitle);
        modal.find('.node-name').val('');

        $('#add-node-modal-accept').on('click', function (e) {
            var newNodeName = modal.find('.node-name').val();
            if (!isValidName(newNodeName)) {
                e.stopImmediatePropagation();
                return false;
            }
            var type = isAddSearch ? "QUERY" : "FOLDER";
            $('.app-body').trigger(EVENT_CREATE_SEARCH, [{name: newNodeName, type: type}]);
            modal.off(EVENT_CREATE_SEARCH_DONE)
                .on(EVENT_CREATE_SEARCH_DONE, function () {
                    modal.modal('hide');
                    modal.off(EVENT_CREATE_SEARCH_DONE);
                });
        });
        modal.modal();
    }

    function showRemoveNodeModal() {
        $('#remove-node-modal').modal();
    }

    function showSaveNodeConfirmModal(name, saveFunc) {
        var $modal = $('#close-tab-modal');
        $('#save-tab-modal-accept').on('click', function () {
            saveFunc();
            $modal.modal('hide');
        });

        $modal.on('show.bs.modal', function () {
            $modal.find('.modal-title').text(translator.get('close') + ' ' + name);
            $modal.find('.modal-body > div').text(translator.get('closeSearchResult'));
        });

        $modal.on('hide.bs.modal', function () {
            $('#save-tab-modal-accept').off('click');
            $('#close-tab-modal-accept').off('click');
        });

        $modal.modal('show');
    }

    function loadData(id, cb) {
        return api.getSearch(id, cb);
    }

    function doSearch(nodeId, nodeName) {
        var searchData = conditionsControl.getAllData();

        if (typeof  nodeId === 'string' && typeof  nodeName === 'string') {
            searchData.id = nodeId;
            searchData.name = nodeName;
        } else {
            var selectedNode = searchTreeControl.getSelectedNode();
            searchData.id = selectedNode.id;
            searchData.name = selectedNode.data.name;
        }

        searchData.changed = conditionsControl.isChanged();
        searchData.randomizeSearch = randomizeSearch;
        searchData.qmLayout = qmLayout;
        searchData.editable = editable;
        console.log('SEARCH', searchData);
        $('.app-body').trigger(EVENT_NEW_SEARCH, [searchData]);
    }
};