var scoreTilesControl = new function () {

    var COLUMNS_COUNT = 6;
    var OVERALL_TILE_COLUMN_SPAN = 2;
    var OVERALL_TILE_ROW_SPAN = 2;

    // ===== Public Methods =====
    this.init = $.debounce(500, true, function () {
        api.getScore(function (data) {
            var formScore = data.formScore;
            var qualityScoreList = data.qualityScoreList;

            var $parent = $('.score-tiles-panel');
            $parent.empty();
            createOverallScoreTile(formScore).appendTo($parent);

            if (qualityScoreList.length <= COLUMNS_COUNT - OVERALL_TILE_COLUMN_SPAN) {
                $parent.addClass('one-row');
            } else {
                $parent.removeClass('one-row');
            }

            var rowIndex = 1;
            var columnIndex = OVERALL_TILE_COLUMN_SPAN + 1;

            if (qualityScoreList.length > 0) {
                qualityScoreList.forEach(function (qualityScore) {
                    createScoreTile(qualityScore, rowIndex, columnIndex).appendTo($parent);

                    if (columnIndex === COLUMNS_COUNT) {
                        rowIndex++;
                    }

                    columnIndex = ((columnIndex + 1) % (COLUMNS_COUNT + 1));

                    if (columnIndex === 0) {
                        columnIndex = rowIndex <= OVERALL_TILE_ROW_SPAN ? OVERALL_TILE_COLUMN_SPAN + 1 : 1;
                    }
                });
            } else {
                // placeholder to fix tile grid style
                createPlaceholderTile(rowIndex, columnIndex).appendTo($parent);
            }
        })
    });

    // ===== Private Methods =====
    function createOverallScoreTile(scoreData) {
        return createTile(translator.get('overallScore'), scoreData.score, scoreData.noScore).addClass('score-tile-overall');
    }

    function createScoreTile(scoreData, rowIndex, columnIndex) {
        return createTile(scoreData.name, scoreData.score, scoreData.noScore)
            .css({
                '-ms-grid-row': rowIndex.toString(),
                '-ms-grid-column': columnIndex.toString(),
                'grid-area': rowIndex + ' / ' + columnIndex + ' / ' + (rowIndex + 1) + ' / ' + (columnIndex + 1)
            })
    }

    function createPlaceholderTile(rowIndex, columnIndex) {
        var scoreData = {name: 'placeholder', score: 0, noScore: true};
        return createScoreTile(scoreData, rowIndex, columnIndex).css('opacity', '0');
    }

    function createTile(name, score, noScore) {
        return $('<div></div>')
            .addClass(noScore ? 'disabled' : getScoreTileColorClassName(score))
            .append($('<span></span>').text(name))
            .append($('<span></span>').text(score));
    }

    function getScoreTileColorClassName(value) {
        if (value >= 95) {
            return 'extra-excellent';
        }

        if (value >= 85) {
            return 'excellent';
        }

        if (value >= 70) {
            return 'good';
        }

        return 'bad';
    }
};