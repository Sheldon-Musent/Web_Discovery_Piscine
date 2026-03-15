function changeColor() {

    /*'let' declear variable r to a value*/
    let r = Math.floor(Math.random() * 256);

    /*Math.floor rounds DOWN to the nearest whole number*/
    let g = Math.floor(Math.random() * 256);

    /*math.random will generate numbers between 0-1, never bigger than 1*/
    let b = Math.floor(Math.random() * 256);

    /*document.body(select the ,body elements)*/
    /*style.backgroundColor(style bg color in CSS*/
    /*create a rgb(123,123,123) strings with "rgb(" + r + "," + g + "," + b + ")"; */
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}