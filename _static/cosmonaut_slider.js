var cosmonautSlider = document.getElementById("cosmonautSlider");
var cosmonautImage = document.getElementById("cosmonautImage");
var cosmonautImageLink = document.getElementById("cosmonautImageLink");
var cosmonautLabel = document.getElementById("cosmonautLabel");

cosmonautSlider.oninput = function() {
    var number = ("000" + this.value).slice(-3);

    cosmonautLabel.innerHTML = "cosmonaut #" + number;
    cosmonautLabel.href = "./cosmonauts/cosmonaut-" + number + ".html";
    cosmonautImageLink.href = cosmonautLabel.href

    var imageSrc = "_static/cosmonauts/cosmonaut-" + number + ".png";
    cosmonautImage.src = imageSrc;
}

cosmonautSlider.oninput();
