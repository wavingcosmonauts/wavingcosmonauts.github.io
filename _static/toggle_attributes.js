const allItems = [
    "guild",
    "environment",
    "suit",
    "visor",
    "features",
];

function getValue(name) {
    var radios = document.getElementsByName(name);
    for (var i = 0, len = radios.length; i < len; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }

    return "none";
}

function updateVisuals(item) {
    // Show current
    var focusedElem = document.getElementById(item);
    var focusedHeader = document.getElementById(item + "Header");
    var focusedSelection = document.getElementById(item + "Selection");

    // Hide rest
    var hiddenElems = [];
    var hiddenHeaders = [];
    var hiddenSelections = [];
    for (var i = 0, len = allItems.length; i < len; i++) {
        var currentItem = allItems[i];

        if (currentItem != item) {
            hiddenElems.push(document.getElementById(currentItem));
            hiddenHeaders.push(document.getElementById(currentItem + "Header"));
            hiddenSelections.push(document.getElementById(currentItem + "Selection"));
        }
    }

    // Unhide focused element
    focusedElem.className = "unhidden";
    focusedHeader.className = "unhiddenHeader";
    focusedSelection.className = "ulSelection";

    // Hide rest
    for (var i = 0, len = hiddenElems.length; i < len; i++) {
        hiddenElems[i].className = "hidden";
        hiddenHeaders[i].className = "hiddenHeader";
        hiddenSelections[i].className = "ulSelectionHidden";
    }

}

function updateFilter() {
    var guild = getValue("Guild");
    var environment = getValue("Environment");
    var suit = getValue("Suit");
    var visor = getValue("Visor");
    var features = getValue("Features");

    // TODO filter
}

function headerOnClick() {
    var item = this.id.replace("Header", "");
    updateVisuals(item);
}

function selectionOnChange() {
    var item = this.id.replace("Selection", "");
    updateVisuals(item);
    updateFilter();
}

for (var i = 0, len = allItems.length; i < len; i++) {
    var name = allItems[i];
    var selection = document.getElementById(name + "Selection");
    var header = document.getElementById(name + "Header");

    selection.onchange = selectionOnChange;
    header.onclick = headerOnClick;
}
