function mergeCells(tableId, data) {
    var table = document.getElementById(tableId);
    var rows_len = table.rows.length;
    var col_len = table.rows[0].cells.length;

    $.each(data, function (index, value) {
        var row = value.row;
        var col = value.col;
        var row_span = value.rowspan;
        var col_span = value.colspan;

        for (var i = 0; i < rows_len; i++) {
            if (i === row) {
                for (var j = 0; j < col_len; j++) {
                    var cell = table.rows[i].cells[j];
                    if (j === col) {
                        if (row_span > 1) {
                            cell.rowSpan = row_span;
                        }
                        if (col_span > 1) {
                            cell.colSpan = col_span;
                        }
                    } else if (col_span > 1 && j > col && j < col + col_span) {         
                        hideCell(cell);
                    }
                }
            } else if (i > row && i < row + row_span) {
                for (var j = 0; j < col_len; j++) {
                    if (j >= col && j < col + col_span) {
                        cell = table.rows[i].cells[j];
                        hideCell(cell);
                    }
                }
            }
        }
    });
}

function hideCell(cell) {
    cell.setAttribute("style", "display: none;");
    cell.innerHTML = "";
}