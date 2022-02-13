var cosmonautSlider = document.getElementById("cosmonautSlider");
var cosmonautImage = document.getElementById("cosmonautImage");
var cosmonautImageLink = document.getElementById("cosmonautImageLink");
var cosmonautLabel = document.getElementById("cosmonautLabel");
cosmonautSlider.idx = [...Array(384).keys()];

cosmonautSlider.oninput = function() {
    if (this.idx.length == 0) {
        cosmonautImage.src = "_static/cosmonauts/cosmonaut-backup.png";
        cosmonautLabel.innerHTML = "cosmonaut not found";
        return;
    }

    var number = ("000" + this.idx[this.value]).slice(-3);

    cosmonautLabel.innerHTML = "cosmonaut #" + number;
    cosmonautLabel.href = "./cosmonauts/cosmonaut-" + number + ".html";
    cosmonautImageLink.href = cosmonautLabel.href

    var imageSrc = "_static/cosmonauts/cosmonaut-" + number + ".png";
    cosmonautImage.src = imageSrc;
}

cosmonautSlider.oninput();

cosmonautSlider.updateFilter = function(idx) {
    var currentFraction = this.value / this.max;
    this.idx = idx;
    this.max = idx.length - 1;
    this.value = currentFraction * this.max;
    this.oninput();
}
