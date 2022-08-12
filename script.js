console.log(operate("subtract", 10, 6));
console.log(add(10, 6));

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