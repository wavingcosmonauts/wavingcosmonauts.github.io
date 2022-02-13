$("input[type=radio]").each(function() {

    this.oldvalue = "unchecked";

    this.onclick = function() {
        if (this.value == this.oldvalue) {
            this.checked = false;
            this.oldvalue = "unchecked";
        } else {
            this.oldvalue = this.value;
        }
    }
});
