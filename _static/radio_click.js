$("input[type=radio]").each(function() {
    var secondClick = false;

    $(this).change(function() {
        secondClick = true;
    });

    $(this).click(function() {
        if (secondClick) {
            $(this).prop("checked", false);
        }
        secondClick = false;

        updateSelection();
    });
});
