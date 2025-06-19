const display = document.querySelector(".dis");

function appendToDisplay(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    let expression = display.value;

    // Convert % to proper math
    expression = expression.replace(/(\d+)%/g, "($1/100)");

    const result = Function('"use strict";return (' + expression + ')')();
    display.value = result;
  } catch (e) {
    display.value = "Error";
  }
}

