
const equationEl = document.getElementById("equation");
const resultEl = document.getElementById("result");

let currentInput = "";
let lastResult = "";

function appendToDisplay(val) {
  currentInput += val;
  equationEl.textContent = currentInput;
}

function clearAll() {
  currentInput = "";
  lastResult = "";
  equationEl.textContent = "";
  resultEl.textContent = "0";
}

function clearEntry() {
  currentInput = "";
  equationEl.textContent = "";
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  equationEl.textContent = currentInput;
}

function toggleSign() {
  if (currentInput) {
    if (currentInput.startsWith("-")) {
      currentInput = currentInput.substring(1);
    } else {
      currentInput = "-" + currentInput;
    }
    equationEl.textContent = currentInput;
  }
}

function calculate() {
  try {
    let expression = currentInput;

    expression = expression.replace(/(\d+)%/g, "($1/100)");

    let evalResult = Function('"use strict";return (' + expression + ')')();
    if (evalResult !== undefined) {
      resultEl.textContent = evalResult;
      lastResult = evalResult;
    }
  } catch (e) {
    resultEl.textContent = "Error";
  }
}
