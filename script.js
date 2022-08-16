DISPLAY = "";

function add(a, b) {
    return (a + b);
}

function subtract(a, b) {
    return (a - b);
}

function multiply(a, b) {
    return (a * b);
}

function divide(a, b) {
    return (a / b);
}

function operate(operator, a, b) {
    switch(operator) {
        case "add":
            return(add(a, b));
        case "subtract":
            return(subtract(a, b));
        case "multiply":
            return(multiply(a, b));
        case "divide":
            return(subtract(a, b));
      }
}

function numberPushed(id) {
    number = document.getElementById(id).innerHTML;
    DISPLAY = DISPLAY + number;
    console.log(DISPLAY);
    document.getElementById("answer").innerHTML = DISPLAY;
}