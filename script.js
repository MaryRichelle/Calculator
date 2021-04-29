const display1 = document.querySelector(".display-1");
const display2 = document.querySelector(".display-2");
const tempResult = document.querySelector(".temp-result");
const numbersEl = document.querySelectorAll(".number");
const operationEl = document.querySelectorAll(".operation");
const equalEl = document.querySelector(".equal");
const clearAllEl = document.querySelector(".all-clear");
const clearLastEl = document.querySelector(".last-entry-clear");

let Number1 = "";
let Number2 = "";
let result = null;
let lastOperation = "";
let decimal = false;

numbersEl.forEach((number) => {
  number.addEventListener("click", (el) => {
    if (el.target.innerText === "." && !decimal) {
      return true;
    } else if (el.target.innerText === "." && decimal) {
      return;
    }
    Number2 += el.target.innerText;
    display2.innerText = Number2;
  });
});

operationEl.forEach((operation) => {
  operation.addEventListener("click", (el) => {
    if (Number2) result;
    decimal = false;
    const operationName = el.target.innerText;
    if (Number1 && Number2 && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(Number2);
    }
    clearVar(operationName);
    lastOperation = operationName;
  });
});

function clearVar(name = "") {
  Number1 += Number2 + " " + name + " ";
  display1.innerText = Number1;
  display2.innerText = "";
  Number2 = "";
  tempResult.innerText = result;
}
//operations
function mathOperation() {
  if (lastOperation === "*") {
    result = parseFloat(result) * parseFloat(Number2);
  } else if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(Number2);
  } else if (lastOperation === "-") {
    result = parseFloat(result) - parseFloat(Number2);
  } else if (lastOperation === "/") {
    result = parseFloat(result) / parseFloat(Number2);
  }
}
//equal
equalEl.addEventListener("click", () => {
  if (!Number1 || !Number2) return;
  decimal = false;
  mathOperation();
  clearVar();
  tempResult.innerText = "";

  display2.innerText = result;
  Number2 = result;
  Number1 = "";
});
//all Clear
clearAllEl.addEventListener("click", () => {
  display2.innerText = "";
  display1.innerText = "";
  Number2 = "";
  Number1 = "";
  result = "";
  tempResult.innerText = "";
});

//del
clearLastEl.addEventListener("click", () => {
  display2.innerText = "";
  Number2 = "";
});

//adding keyboard

window.addEventListener("keydown", (e) => {
  if (
    e.key == "0" ||
    e.key == "1" ||
    e.key == "2" ||
    e.key == "3" ||
    e.key == "4" ||
    e.key == "5" ||
    e.key == "6" ||
    e.key == "7" ||
    e.key == "8" ||
    e.key == "9" ||
    e.key == "."
  ) {
    pressKey(e.key);
  } else if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
    pressOperation(e.key);
  } else if (e.key === "Enter" || e.key === "===") {
    keyEqual();
  } else if (e.key === "Backspace" || e.key === "Del") {
    keyDel();
  }
});

function pressKey(key) {
  numbersEl.forEach((number) => {
    if (number.innerText === key) {
      number.click();
    }
  });
}

function pressOperation(key) {
  operationEl.forEach((op) => {
    if (op.innerText === key) {
      op.click();
    }
  });
}

function keyEqual() {
  equalEl.click();
}

function keyDel() {
  clearLastEl.click();
}
