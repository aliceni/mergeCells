$(document).ready(function () {
    mergeCells("myTable", [
        {"row": 0, "col": 1, "rowspan": 1, "colspan": 2},
        {"row": 2, "col": 0, "rowspan": 2, "colspan": 3},
    ]);
});