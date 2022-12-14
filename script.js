let DISPLAY = "";
let CURRENT_OPERATOR = "";
let FIRST_NUMBER = "";
let SECOND_NUMBER = "";

function add(a, b) {
  return parseFloat(a) + parseFloat(b);
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
  if (operator === "add") {
    DISPLAY = add(a, b);
  } else if (operator === "subtract") {
    DISPLAY = subtract(a, b);
  } else if (operator === "multiply") {
    DISPLAY = multiply(a, b);
  } else if (operator === "divide") {
    DISPLAY = divide(a, b);
  } else if (operator === "mod") {
    DISPLAY = b / 100;
  }
  if (DISPLAY.toString().includes(".")) {
    DISPLAY = parseFloat(DISPLAY).toFixed(3);
  } else {
    
  }
  document.getElementById("answer").innerHTML = DISPLAY;
  FIRST_NUMBER = DISPLAY;
  console.log("first display: " + FIRST_NUMBER)
}

function numberPushed(id) {
  if (DISPLAY.length < 7) {
    number = document.getElementById(id).innerHTML;
    DISPLAY = DISPLAY + number;
    console.log(DISPLAY);
    document.getElementById("answer").innerHTML = DISPLAY;
  }
}

function operatorPushed(id) {
  console.log("Current Operator: " + CURRENT_OPERATOR);
  if (id == "mod") {
    CURRENT_OPERATOR = id;
    operate(CURRENT_OPERATOR, FIRST_NUMBER, DISPLAY);
    CURRENT_OPERATOR = "";
    document.getElementById("answer").innerHTML = DISPLAY;
    console.log(DISPLAY);
  }
  else {
    if (CURRENT_OPERATOR !== "equals" && id !== "mod") {
      console.log("testoperator");
      console.log("FIRST: " + FIRST_NUMBER);
      console.log("DISPLAY: " + DISPLAY);
      operate(CURRENT_OPERATOR, FIRST_NUMBER, DISPLAY);
      DISPLAY = "";
      SECOND_NUMBER = "";
      CURRENT_OPERATOR = id;
    } else if (id == "mod") {
      CURRENT_OPERATOR = id;
      operate(CURRENT_OPERATOR, FIRST_NUMBER, DISPLAY);
    } else {
      FIRST_NUMBER = DISPLAY;
      console.log("testnonoperator");
      CURRENT_OPERATOR = document.getElementById(id).id;
      DISPLAY = "";
      console.log(id);
    }
  }
}

function equalsPushed(id) {
  operate(CURRENT_OPERATOR, FIRST_NUMBER, DISPLAY);
  CURRENT_OPERATOR = id;
  document.getElementById("answer").innerHTML = DISPLAY;
  console.log(DISPLAY);
}

function resetDisplay() {
  DISPLAY = "";
  CURRENT_OPERATOR = "";
  FIRST_NUMBER = "";
  SECOND_NUMBER = "";
  document.getElementById("answer").innerHTML = "0";
}

function deleteLast() {
  DISPLAY = DISPLAY.slice(0, -1);
  console.log(DISPLAY);
  document.getElementById("answer").innerHTML = DISPLAY;
  if (DISPLAY == "") {
    document.getElementById("answer").innerHTML = 0;
  }
}

function dotPushed(id) {
  if (!DISPLAY.includes(".")) {
    numberPushed(id);
  }
}