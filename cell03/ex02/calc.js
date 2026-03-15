function calculate() {
    let left = document.querySelector("#left").value;
    let right = document.querySelector("#right").value;
    let operator = document.querySelector("#operator").value;
    /*get the values from the 3 input fields (left number, right number, operator)*/
    let a = parseInt(left);
    let b = parseInt(right);
    /*convert the text input to integers with parseInt(convert a string to whole number*/
    let result;
    /*declare result and store the answer */

    // 'isNaN' if a is not a number OR b is not a number OR a is negative OR b is negative
    if (isNaN(a) || isNaN(b) || a < 0 || b < 0) {
        alert("Error :(");
        return;
    }

    // check if the operator is division OR modulo, AND b is zero → show "It's over 9000!"
    if ((operator == "/" || operator == "%") && b == 0) {
        alert("It's over 9000!");
        return;
    }

    // do the calculation
    if (operator == "+") {
        result = a + b;
    } else if (operator == "-") {
        result = a - b;
    } else if (operator == "*") {
        result = a * b;
    } else if (operator == "/") {
        result = a / b;
    } else if (operator == "%") {   
        result = a % b;
    }

    //show result in console log
    alert(result);
    console.log(result);
}

// pop-up ever 30second
setInterval(function() {alert("Please, use me...");}, 30000);