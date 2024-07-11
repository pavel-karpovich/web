var searchTreeControl = new function () {
    
    var selectedNode;

    this.init = function () {
        searchControl.init();
        var $searchTree = $('#search-tree');
        $searchTree.jstree({
            'core': {
                "themes": {
                    "dots": false,
                    "icons": false
                },
                "animation" : 0,
                "check_callback" : function (operation, node, parent, position, more) {
                    var ref = $searchTree.jstree();

                    if (operation === 'copy_node') {
                        return false;
                    }

                    if (operation === 'move_node') {
                        var canMove = true;

                        $.each(parent.children, function (i, nodeId) {
                            if (node.text === ref.get_node(nodeId).text) {
                                canMove = false;
                            }
                        });

                        return canMove;
                    }

                    return true;

                },
                "multiple": false,
                'data': function (node, cb) {
                    loadData(cb);
                }
            },
            "types": {
                "#" : { "max_children" : 2, "valid_children" : ["ROOT"] },
                "ROOT": {"valid_children": ["FOLDER", "QUERY"]},
                "FOLDER": {"valid_children": ["FOLDER", "QUERY"]},
                "QUERY": {"valid_children": []}
            },
            "state" : { "key" : stateControl.buildKey("search-tree") },
            "plugins": ["wholerow", "types", "sort", "state", "dnd"],
            "sort": function (a, b) {
                var a1 = this.get_node(a);
                var b1 = this.get_node(b);
                if (a1.type === b1.type){
                    return (a1.text.toUpperCase() > b1.text.toUpperCase()) ? 1 : -1;
                } else {
                    return (a1.type > b1.type) ? 1 : -1;
                }
            }
        });

        $searchTree.bind("move_node.jstree", function (e, data) {
            if (data.old_parent !== data.parent) {
                var ref = $searchTree.jstree();
                var oldParent = ref.get_node(data.old_parent);
                var parent = ref.get_node(data.parent);
                var node = ref.get_node(data.node.id);
                var newPrivacy = parent.data.privacy;

                api.moveSearch(node.id, {parentId: data.parent, privacy: newPrivacy}, function () {
                    var count = node.type === 'FOLDER' ? node.data.count : 1;

                    $.each([data.old_parent].concat(oldParent.parents), function (i, nodeId) {
                        if (nodeId !== '#') {
                            decreaseCounter(ref.get_node(nodeId), count);
                        }
                    });
                    $.each([data.parent].concat(parent.parents), function (i, nodeId) {
                        if (nodeId !== '#') {
                            increaseCounter(ref.get_node(nodeId), count);
                        }
                    });

                    if (node.data.privacy !== newPrivacy) {
                        node.data.privacy = newPrivacy;
                        $.each(node.children_d, function (i, nodeId) {
                            ref.get_node(nodeId).data.privacy = newPrivacy;
                        });
                    }
                });
            }
        });

        $searchTree.on('select_node.jstree', function (e, data) {
            if (!selectedNode || data.node.id !== selectedNode.id) {
                if (!!selectedNode) {
                    searchControl.saveNodeIfChanged(selectedNode);
                }

                selectedNode = data.node;
                searchControl.showDetails(data.node);
            }
        });

        $searchTree.on('dblclick.jstree', function () {
            searchControl.doSearchWhenNodeDataLoaded(selectedNode);
        });

        $searchTree.on('ready.jstree', function () {
            var ref = $searchTree.jstree();
            var selectedNodes = ref.get_selected();

            if (!selectedNodes || !selectedNodes.length) {
                if (!!ref.get_node(SEARCH_PUBLIC)) {
                    ref.select_node(SEARCH_PUBLIC);
                } else {
                    ref.select_node(SEARCH_PERSONAL);
                }
            }

            calculateRowHeight();
        });

        setInterval(calculateRowHeight, 100);
        function calculateRowHeight() {
            $('.jstree-wholerow').each(function(i, wholerow)  {
                $(wholerow).parent().children('a').each(function(i, rowText) {
                    $(wholerow).height($(rowText).height())
                })
            })
        }
    };

    this.addNode = function(data, select) {
        addNode(mapNodeToClient(data), select);
    };

    this.renameNode = function (id, name) {
        var ref = $('#search-tree').jstree(true);
        var node = ref.get_node(id);
        node.data.name = name;
        ref.rename_node(node,  nodeText(node.type, node.data.name, node.data.count));
    };

    this.removeSelectedNode = function() {
        var ref = $('#search-tree').jstree(true);
        var selected = ref.get_selected();
        if(!selected.length) { return false; }
        selected = selected[0];
        return removeNode(selected, function () {
            selected = ref.get_node(selected);
            $.each(selected.parents, function (i, nodeId) {
                if (nodeId !== '#') {
                    decreaseCounter(ref.get_node(nodeId), selected.data.count);
                }
            });
            ref.delete_node(selected);
            selectedNode = undefined;
        });
    };

    this.getNode = function(nodeId) {
        var ref = $('#search-tree').jstree(true);
        return ref.get_node(nodeId);
    };

    this.getSelectedNode = function() {
        return selectedNode;
    };

    /**
     * Returns selected node if it's folder, selected node's parent otherwise.
     * Returns undefined if nothing selected.
     **/
    this.getFolderToAddTo = function() {
        if (selectedNode) {
            return isSearchNode(selectedNode) ? this.getNode(selectedNode.parent) : selectedNode;
        }
        return selectedNode;
    };

    function addNode(nodeData, selectAdded) {
        var ref = $('#search-tree').jstree(true);
        var addedNode = ref.create_node(nodeData.parent, nodeData);
        if(addedNode) {
            addedNode = ref.get_node(addedNode);
            if (isSearchNode(addedNode)) {
                $.each(addedNode.parents, function (i, nodeId) {
                    if (nodeId !== '#') {
                        increaseCounter(ref.get_node(nodeId))
                    }
                })
            }
            if (selectAdded) {
                ref.deselect_all();
                ref.select_node(addedNode);
            }
        }
    }

    function increaseCounter(node, number) {
        number = number >= 0 ? number : 1;
        node.data.count += number;
        var ref = $('#search-tree').jstree(true);
        ref.rename_node(node.id, nodeText(node.type, node.data.name, node.data.count));
    }

    function decreaseCounter(node, number) {
        number = number >= 0 ? number : 1;
        node.data.count -= number;
        var ref = $('#search-tree').jstree(true);
        ref.rename_node(node.id, nodeText(node.type, node.data.name, node.data.count));
    }

    function nodeText(type, name, count) {
        var safeName = escapeHtmlBrackets(name);

        if (type === 'QUERY') {
            return safeName;
        } else {
            var itemsCount = !!count ? count : 0;
            return safeName + ' (' + itemsCount + ')';
        }
    }

    function isSearchNode(node) {
        return node.type === "QUERY";
    }

    function loadData(cb) {
        api.loadSavedSearches(function (data) {
            var searchIds = [];
            $.each(data, function (i, v) {
                searchIds.push(v.id);
                mapNodeToClient(v);
            });
            $('.app-body').trigger(EVENT_LOAD_SEARCHES, [searchIds]);
            cb(data);
        });
    }

    function removeNode(id, cb) {
        return api.removeSearch(id, cb);
    }

    function mapNodeToClient(node) {
        node.text = nodeText(node.type, node.name, node.count);
        node.parent = node.parentId;
        node.data = {name: node.name, privacy: node.privacy, count: node.count, randomizeSearch: node.randomizeSearch, editable: node.editable};
        return node;
    }
};