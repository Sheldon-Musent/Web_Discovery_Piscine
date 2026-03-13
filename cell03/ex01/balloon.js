var size = 200;
var colors = ["red", "green", "blue"];
var colorIndex = 0;

function grow() {
    size = size + 10;
    colorIndex = colorIndex + 1;
    if (colorIndex > 2) {
        colorIndex = 0;
    }

    if (size > 420) {
        size = 200;
    }

    var balloon = document.querySelector(".balloon");
    balloon.style.width = size + "px";
    balloon.style.height = size + "px";
    balloon.style.backgroundColor = colors[colorIndex];
}

function shrink(){
  size = size - 5;

  if (size < 200) {
        size = 200;
    }
  
  colorIndex = colorIndex - 1;
  if (colorIndex < 0) {
      colorIndex = 2;
  }
  
  var balloon = document.querySelector(".balloon");
  balloon.style.width = size + "px";
  balloon.style.height = size + "px";
  balloon.style.backgroundColor = colors[colorIndex];
}