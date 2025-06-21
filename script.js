const display = document.querySelector(".dis");

function appendToDisplay(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let expression = display.value;

    // Convert percentage: 50% => (50/100)
    expression = expression.replace(/(\d+)%/g, "($1/100)");

    const result = Function('"use strict";return (' + expression + ')')();
    display.value = result;
  } catch (e) {
    display.value = "Error";
  }
}
