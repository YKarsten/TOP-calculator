document.addEventListener("DOMContentLoaded", function () {
  createGrid();
  calculate(); 

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
    btnText = ["AC", "( )", "%", "/", 7, 8, 9, "X", 4, 5, 6, "-", 1, 2, 3, "+", 0, ",", "\u232B", "="];

    gridItems.forEach((button, index) => {
      button.textContent = btnText[index].toString();
      button.addEventListener("click", () => {
        // Stop the blinking effect on click
        display.classList.remove("blinking");
        display.textContent += btnText[index];
      });
    });
  }


  // simple math operators
  const simpleMathOperators = calculate();
  console.log(simpleMathOperators);
  
  function calculate() {
    const operatorButtons = document.querySelectorAll('.grid-item');
    const mathOperatorButtons = [];

    operatorButtons.forEach(button => {
        if (isMathOperator(button.textContent)) {
            mathOperatorButtons.push(button);
        }
    });
    return mathOperatorButtons;
    }
    
    function isMathOperator(text) {
        const mathOperators = ["+", "-", "X", "/"];
        return mathOperators.includes(text);
    }

});

//   function add(num1, num2) {
//     return num1 + num2;
//   }

//   function subtract(num1, num2) {
//     return num1 - num2;
//   }

//   function multiply(num1, num2) {
//     return num1 * num2;
//   }

//   function divide(num1, num2) {
//     return num1 / num2;
//   }

//   function selectDivByText(textToFind) {
//     const divs = document.querySelectorAll(".grid-item");

//     for (const div of divs) {
//       if (div.textContent.trim() === textToFind.trim()) {
//         return div;
//       }
//     }
//     return null;
//   }


  // let num1 = document.querySelector();
  // let num2 = document.querySelector();
  // let operator = document.querySelector();

//   function operate(num1, num2, operator) {
//     switch (operator) {
//       case "add":
//         add(num1, num2);
//       case "subtract":
//         subtract(num1, num2);
//       case "multiply":
//         multiply(num1, num2);
//       case "divide":
//         divide(num1, num2);
//       default:
//         return NaN;
//     }
//   }

