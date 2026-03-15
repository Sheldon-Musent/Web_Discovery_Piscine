/*declared the value & color */
let size = 200;
let colors = ["red", "green", "blue"];
/*It starts at 0 (red), then becomes 1 (green), then 2 (blue), then resets back to 0.*/
let colorIndex = 0;

function grow() {
    size = size + 10;
    colorIndex = colorIndex + 1;
    if (colorIndex > 2) {
        colorIndex = 0;
    }

    if (size > 420) {
        size = 200;
    }

    let balloon = document.querySelector(".balloon");
    /*no 'let' needed, just assigning values not declaring new variables */
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