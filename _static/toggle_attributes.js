function unhide(headerID) {
    var header = document.getElementById(headerID);
    const allItems = [
        "guild",
        "environment",
        "suit",
        "visor",
        "feature_base_color",
        "features",
        "number_of_features"
    ];

    var focusedElem;
    var hiddenElems = [];
    var hiddenHeaders = [];

    // Figure out which part to show and which to hide
    for (var i = 0, len = allItems.length; i < len; i++) {
        var currentItem = allItems[i];
        var currentElem = document.getElementById(currentItem);
        var currentHeader = document.getElementById(currentItem + "_header");

        // This is the focused item
        if (headerID.indexOf(currentItem) == 0) {
            focusedElem = currentElem;
        }
        // Should be hidden
        else {
            hiddenElems.push(currentElem);
            hiddenHeaders.push(currentHeader);
        }
    }

    // Unhide focused element
    focusedElem.className = "unhidden";
    header.className = "unhidden_header";

    // Hide rest
    for (var i = 0, len = hiddenElems.length; i < len; i++) {
        hiddenElems[i].className = "hidden";
        hiddenHeaders[i].className = "hidden_header";
    }
}
