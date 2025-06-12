const display = document.querySelector(".dis");

function appendToDisplay(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    const result = Function('"use strict";return (' + display.value + ')')();
    display.value = result;
  } catch (e) {
    display.value = "Error";
  }
}
