let currentOperation = '';

  function setOperation(operation) {
    currentOperation = operation;
  }

  function calculateResult() {
    var operand1 = parseFloat(document.getElementById("operand1").value);
    var operand2 = parseFloat(document.getElementById("operand2").value);
    var resultElement = document.getElementById("result");

    if (!isNaN(operand1) && !isNaN(operand2)) {
      switch (currentOperation) {
        case 'add':
          resultElement.value = operand1 + operand2;
          break;
        case 'multiply':
          resultElement.value = operand1 * operand2;
          break;
        case 'subtract':
          resultElement.value = operand1 - operand2;
          break;
        case 'divide':
          if (operand2 !== 0) {
            resultElement.value = operand1 / operand2;
          } else {
            alert("Cannot divide by zero!");
          }
          break;
        default:
          alert("Please select an operation");
      }
    } else {
      alert("Please enter valid numbers");
    }
  }

  function clearCalculator() {
    document.getElementById("operand1").value = "";
    document.getElementById("operand2").value = "";
    document.getElementById("result").value = "";
    currentOperation = '';
  }