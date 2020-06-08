var start;
var min = 100000000;
function randomColor() {
    var letters = "0123456789ABCDEF".split("");
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function shapeAppear() {
    var top, left, width, height;
    top = Math.random() * 390;
    left = Math.random() * 1200;
    width = Math.random() * 200 + 50;

    if (Math.random() > 0.5) {
        document.getElementById("shape").style.borderRadius = "50%";
    }
    else {
        document.getElementById("shape").style.borderRadius = "0";
    }

    document.getElementById("shape").style.backgroundColor = randomColor();
    document.getElementById("shape").style.top = top + "px";
    document.getElementById("shape").style.left = left + "px";
    document.getElementById("shape").style.width = width + "px";
    document.getElementById("shape").style.height = width + "px";
    document.getElementById("shape").style.display = "block";
    start = new Date().getTime();
}

function delay() {
    setTimeout(shapeAppear, Math.random() * 2000);
}

delay();

document.getElementById("shape").onclick = function () {
    document.getElementById("shape").style.display = "none";
    var end = new Date().getTime();
    var time = (end - start) / 1000;
    document.getElementById("time-taken").innerHTML = time + "s";
    if (time < min) {
        min = time;
        document.getElementById("best-time").innerHTML = min + "s";
    }
    delay();
}