function appendToResult(value) {
    document.getElementById('operand').value += value;
}

function calculate() {
    const operand1 = parseFloat(document.getElementById('operand').value);
    const operand2 = parseFloat(document.getElementById('secondOperand').value);
    const operator = document.getElementById('result').value.replace(/[0-9.]/g, '');

    let result;

    switch (operator) {
        case '+':
            result = operand1 + operand2;
            break;
        // Add logic for other operators if needed
    }

    document.getElementById('result').value = result;
}
