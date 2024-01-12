document.addEventListener("DOMContentLoaded", function () {
  createGrid();
  simpleMathOperators();

  // Draw Calculator
  function createGrid() {
    const gridContainer = document.querySelector(".calculator");
    const display = document.querySelector(".display");

    // Set initial blinking effect
    display.classList.add("blinking");

    for (let i = 0; i < 20; i++) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      gridContainer.appendChild(gridItem);
    }

    let gridItems = document.querySelectorAll(".grid-item");

    gridItems.forEach((item) => {
      item.style.width = "200px";
      item.style.height = "200px";
    });

    // Button functionality
    btnText = [
      "AC",
      "( )",
      "%",
      "/",
      7,
      8,
      9,
      "X",
      4,
      5,
      6,
      "-",
      1,
      2,
      3,
      "+",
      0,
      ",",
      "\u232B",
      "=",
    ];

    gridItems.forEach((button, index) => {
      button.textContent = btnText[index].toString();
    });
  }

  // simple math operators
  function simpleMathOperators() {
    const operatorButtons = document.querySelectorAll(".grid-item");

    operatorButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        let display = document.querySelector(".display");
        let calculation = display.textContent;

        if (isMathOperator(btn.textContent)) {
          // If the clicked button is a math operator
          let [num1, operator, num2] = splitCalculation(calculation);
          // check for a valid calculation and perform the calculation
          if (num1 !== undefined && operator !== undefined && num2 !== undefined) {
            display.textContent = performCalculation(parseFloat(num1), operator, parseFloat(num2));
            display.classList.remove("blinking");
            display.textContent += btn.textContent;
          } else {
            display.classList.remove("blinking");
            display.textContent += btn.textContent;
          }
        } else {
          // If the clicked button is a number or other symbol, update the display
          display.textContent += btn.textContent;
        }
      });
    });
  }

  function isMathOperator(text) {
    const mathOperators = ["+", "-", "X", "/"];
    return mathOperators.includes(text);
  }

  function splitCalculation(calculation) {
    return calculation.split(/([-+X/])/).filter(Boolean);
  }

  function performCalculation(num1, operator, num2) {
    switch (operator) {
      case "+":
        return add(num1, num2);
      case "-":
        return subtract(num1, num2);
      case "X":
        return multiply(num1, num2);
      case "/":
        return divide(num1, num2);
      default:
        return "Error";
    }
  }

  function add(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }

  function multiply(a, b) {
    return a * b;
  }

  function divide(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      return "Error";
    }
  }
});