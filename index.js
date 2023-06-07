let input1 = "";
let input2 = "";
let operator = "";
let negative = false;

// Get all number buttons
const numberButtons = document.querySelectorAll(".number");

numberButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    if (operator === "") {
      input1 += e.target.value;
      document.getElementById("input-1").innerText = input1;
    } else {
      input2 += e.target.value;
      document.getElementById("input-2").innerText = input2;
    }
  });
});

// Get all operator buttons
const operatorButtons = document.querySelectorAll(".operator");

operatorButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    if (e.target.value === "C") {
      // restart the calculator
      input1 = "";
      input2 = "";
      operator = "";
      document.getElementById("input-1").innerText = "";
      document.getElementById("operator").innerText = "";
      document.getElementById("input-2").innerText = "";
      document.getElementById("result").innerText = "";
    } else if (e.target.value === "CE") {
      // Delete the last entry
      if (operator === "") {
        input1 = "";
        document.getElementById("input-1").innerText = input1;
      } else {
        input2 = "";
        document.getElementById("input-2").innerText = input2;
      }
    } else if (e.target.value === "%") {
      // Save the percent operator
      operator = e.target.value;
      document.getElementById("operator").innerText = operator;
    } else if (e.target.value === "+/-") {
      // Change the sign of the current input
      if (operator === "" && input1 !== "") {
        input1 = parseFloat(input1) * -1;
        document.getElementById("input-1").innerText = input1;
      } else if (input2 !== "") {
        input2 = parseFloat(input2) * -1;
        document.getElementById("input-2").innerText = input2;
      }
    } else if (e.target.value === ",") {
      // Add a comma to the current entry
      if (operator === "" && !input1.includes(".")) {
        input1 += ".";
        document.getElementById("input-1").innerText = input1;
      } else if (!input2.includes(".")) {
        input2 += ".";
        document.getElementById("input-2").innerText = input2;
      }
    } else if (e.target.value === "=") {
      // Calculate the result
      let result;
      switch (operator) {
        case "+":
          result = parseFloat(input1) + parseFloat(input2);
          break;
        case "-":
          result = parseFloat(input1) - parseFloat(input2);
          break;
        case "*":
          result = parseFloat(input1) * parseFloat(input2);
          break;
        case "/":
          if (parseFloat(input2) === 0) {
            alert("Error: División por cero");
            return;
          }
          result = parseFloat(input1) / parseFloat(input2);
          break;
        case "%":
          result = parseFloat(input1) * (parseFloat(input2) / 100);
          break;
        default:
          return;
      }
      document.getElementById("result").innerText = result;
    } else {
      // Save the operator
      operator = e.target.value;
      document.getElementById("operator").innerText = operator;
    }
  });
});
