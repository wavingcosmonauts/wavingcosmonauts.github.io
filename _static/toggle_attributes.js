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

    return "unchecked";
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

function matchingRows(attributes) {
    function rowMatches(row) {
        if (attributes[0] != "unchecked" && row[0] != attributes[0]) {
            return false;
        }
        if (attributes[1] != "unchecked" && row[1] != attributes[1]) {
            return false;
        }
        if (attributes[2] != "unchecked" && row[2] != attributes[2]) {
            return false;
        }
        if (attributes[3] != "unchecked" && row[3] != attributes[3]) {
            return false;
        }
        if (attributes[4] != "unchecked" && !row[5].includes(attributes[4])) {
            return false;
        }
        return true;
    }

    var matchIdx = [];

    for (var i = 0, len = cosmonautData.length; i < len; i++) {
        var row = cosmonautData[i];
        if (rowMatches(row)) {
            matchIdx.push(i);
        }
    }

    return matchIdx;
}

function updateFilter() {
    const attributeNames = ["Guild", "Environment", "Suit", "Visor", "Features"];

    var attributeValues = [
        getValue("Guild"),
        getValue("Environment"),
        getValue("Suit"),
        getValue("Visor"),
        getValue("Features"),
    ];


    const matchIdx = matchingRows(attributeValues);

    cosmonautSlider.updateFilter(matchIdx);

    for (var i = 0, len = attributeNames.length; i < len; i++) {
        const radios = document.getElementsByName(attributeNames[i]);
        var localValues = [...attributeValues];

        for (var j = 0, rlen = radios.length; j < rlen; j++) {
            const radio = radios[j];
            const label = $("label[for='" + radio.id + "']")[0];
            localValues[i] = radio.value;
            const localMatchIdx = matchingRows(localValues);
            label.innerText = radio.value + " (" + localMatchIdx.length + ")";
        }
    }
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

    selection.onclick = selectionOnChange;
    header.onclick = headerOnClick;
}

updateFilter();
