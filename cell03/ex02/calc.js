function calculate() {
    var left = document.querySelector("#left").value;
    var right = document.querySelector("#right").value;
    var operator = document.querySelector("#operator").value;
    var a = parseInt(left);
    var b = parseInt(right);
    var result;

    // if a is not a number OR b is not a number OR a is negative OR b is negative
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

    alert(result);
    console.log(result);
}

// pop-up ever 30second
setInterval(function() {alert("Please, use me...");}, 30000);