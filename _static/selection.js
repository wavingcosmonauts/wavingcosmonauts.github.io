function getValue(name) {
    var radios = document.getElementsByName(name);
    for (var i = 0, len = radios.length; i < len; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }

    return "none";
}

function updateSelection() {
    var guild = getValue("Guild");
    var env = getValue("Environment");

    alert(guild + " - " + env);
}


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
